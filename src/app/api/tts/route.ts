import { NextRequest, NextResponse } from "next/server";

// Simple in-memory cache for audio buffers to optimize ElevenLabs quota & latency
const audioCache = new Map<string, ArrayBuffer>();

export async function POST(req: NextRequest) {
  try {
    const { text, voiceId } = await req.json();

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text payload is required and cannot be empty." },
        { status: 400 }
      );
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "ELEVENLABS_API_KEY is not configured on the server.",
          fallback: true,
        },
        { status: 500 }
      );
    }

    // Default to a clear, calm, natural voice suited for clinical explanations
    // EXAVITQu4vr4xnSDxMaL (Sarah - Mature, Reassuring, Confident)
    const targetVoiceId = voiceId || process.env.ELEVENLABS_DEFAULT_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
    const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

    // Cache key based on voice and text
    const cacheKey = `${targetVoiceId}:${modelId}:${text.trim()}`;
    if (audioCache.has(cacheKey)) {
      const cachedBuffer = audioCache.get(cacheKey)!;
      return new NextResponse(cachedBuffer, {
        status: 200,
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=86400",
          "X-Audio-Source": "cache",
        },
      });
    }

    // Request speech from ElevenLabs Multilingual V2
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${targetVoiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text: text.trim(),
          model_id: modelId,
          voice_settings: {
            stability: 0.55,
            similarity_boost: 0.8,
            style: 0.0,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[ElevenLabs API Error]", response.status, errorText);
      return NextResponse.json(
        {
          error: `ElevenLabs TTS request failed (${response.status})`,
          details: errorText,
          fallback: true,
        },
        { status: response.status }
      );
    }

    const audioBuffer = await response.arrayBuffer();

    // Cache for subsequent replays (limit memory to recent 50 entries)
    if (audioCache.size > 50) {
      const firstKey = audioCache.keys().next().value;
      if (firstKey) audioCache.delete(firstKey);
    }
    audioCache.set(cacheKey, audioBuffer);

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=86400",
        "X-Audio-Source": "elevenlabs",
      },
    });
  } catch (error: unknown) {
    console.error("[ElevenLabs Server Route Error]", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: message, fallback: true },
      { status: 500 }
    );
  }
}
