"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface UseElevenLabsOptions {
  voiceId?: string;
  onEnded?: () => void;
  onProgress?: (progressPercent: number) => void;
}

export function useElevenLabsAudio(options?: UseElevenLabsOptions) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [audioSource, setAudioSource] = useState<"elevenlabs" | "fallback" | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setIsPlaying(false);
    setIsLoading(false);
    setProgress(0);
  }, []);

  const playWithFallback = useCallback((text: string, lang = "en-IN") => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        utterance.onstart = () => {
          setIsPlaying(true);
          setIsLoading(false);
          setAudioSource("fallback");
        };
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(0);
          if (options?.onEnded) options.onEnded();
        };
        utterance.onerror = () => {
          setIsPlaying(false);
          setIsLoading(false);
        };
        window.speechSynthesis.speak(utterance);
      } catch {
        setIsPlaying(false);
        setIsLoading(false);
      }
    } else {
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [options]);

  const playText = useCallback(
    async (text: string, customVoiceId?: string, fallbackLang = "en-IN") => {
      if (!text || text.trim().length === 0) return;

      // If currently playing, stop first
      stopAudio();
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/tts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text.trim(),
            voiceId: customVoiceId || options?.voiceId,
          }),
        });

        if (!response.ok) {
          throw new Error(`TTS service returned status ${response.status}`);
        }

        const blob = await response.blob();
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
        }

        const audioUrl = URL.createObjectURL(blob);
        objectUrlRef.current = audioUrl;

        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        audio.oncanplay = () => {
          setIsLoading(false);
        };

        audio.onplay = () => {
          setIsPlaying(true);
          setIsLoading(false);
          setAudioSource("elevenlabs");
        };

        audio.onended = () => {
          setIsPlaying(false);
          setProgress(0);
          if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
          if (options?.onEnded) options.onEnded();
        };

        audio.onerror = (e) => {
          console.warn("[ElevenLabs Client Notice] Audio element playback issue, using fallback:", e);
          playWithFallback(text, fallbackLang);
        };

        // Update real audio progress
        const updateProgress = () => {
          if (audioRef.current && !audioRef.current.paused && audioRef.current.duration) {
            const current = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(current);
            if (options?.onProgress) options.onProgress(current);
            animFrameRef.current = requestAnimationFrame(updateProgress);
          }
        };

        await audio.play();
        animFrameRef.current = requestAnimationFrame(updateProgress);
      } catch (err: unknown) {
        console.warn("[ElevenLabs Network/Quota Notice] Switching to local synthesis fallback:", err);
        const errMsg = err instanceof Error ? err.message : "Audio generation failed";
        setError(errMsg);
        playWithFallback(text, fallbackLang);
      }
    },
    [options, playWithFallback, stopAudio]
  );

  useEffect(() => {
    return () => {
      stopAudio();
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, [stopAudio]);

  return {
    isPlaying,
    isLoading,
    progress,
    error,
    audioSource,
    playText,
    stopAudio,
  };
}
