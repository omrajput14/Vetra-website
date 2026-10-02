export interface VoiceScenario {
  id: "english" | "hindi" | "marathi";
  langName: string;
  langNative: string;
  audioText: string;
  phoneticText?: string;
  englishTranslation: string;
  words: string[];
  clinicalSpokenExplanation: string;
  detectedInfo: {
    animal: string;
    animalEmoji: string;
    observedConcern: string;
    additionalSigns: string[];
    suggestedNextStep: string;
    assignedDoctor: string;
  };
}

export const SCENARIOS: Record<string, VoiceScenario> = {
  marathi: {
    id: "marathi",
    langName: "Marathi",
    langNative: "मराठी",
    audioText: "माझ्या गायीने चारा खाणे बंद केले आहे आणि ती सुस्त दिसत आहे.",
    phoneticText: "माझ्या गायीने चारा खाणे बंद केले आहे आणि ती सुस्त दिसत आहे.",
    englishTranslation: "My cow has stopped eating fodder and is appearing lethargic.",
    clinicalSpokenExplanation:
      "प्राथमिक वैद्यकीय निरीक्षण: जनावरामध्ये भूक मंदावणे आणि सुस्ती आढळली आहे. पशुवैद्यकीय तपासणीची शिफारस करण्यात येत आहे.",
    words: ["माझ्या", "गायीने", "चारा", "खाणे", "बंद", "केले", "आहे", "आणि", "ती", "सुस्त", "दिसत", "आहे."],
    detectedInfo: {
      animal: "Cattle (Indigenous Dairy Cow)",
      animalEmoji: "🐄",
      observedConcern: "Reduced appetite (Inappetence)",
      additionalSigns: ["Low activity", "Behaviour change"],
      suggestedNextStep: "Consider veterinary consultation",
      assignedDoctor: "Dr. Pawar (Local Veterinary Polyclinic)",
    },
  },
  hindi: {
    id: "hindi",
    langName: "Hindi",
    langNative: "हिंदी",
    audioText: "मेरी गाय ने चारा खाना बंद कर दिया है और वह सुस्त दिखाई दे रही है।",
    englishTranslation: "My cow has stopped feeding and is appearing lethargic.",
    clinicalSpokenExplanation:
      "प्रारंभिक पशु स्वास्थ्य निरीक्षण: गाय में भूख की कमी और सुस्ती दर्ज की गई है। निकटतम पशु चिकित्सक से परामर्श की सलाह दी जाती है।",
    words: ["मेरी", "गाय", "ने", "चारा", "खाना", "बंद", "कर", "दिया", "है", "और", "वह", "सुस्त", "दिखाई", "दे", "रही", "है।"],
    detectedInfo: {
      animal: "Cattle (Indigenous Dairy Cow)",
      animalEmoji: "🐄",
      observedConcern: "Reduced appetite (Inappetence)",
      additionalSigns: ["Low activity", "Behaviour change"],
      suggestedNextStep: "Consider veterinary consultation",
      assignedDoctor: "Dr. Deshmukh (Veterinary Hub)",
    },
  },
  english: {
    id: "english",
    langName: "English",
    langNative: "English",
    audioText: "My dairy cow has stopped feeding since morning and appears dull and lethargic.",
    englishTranslation: "My dairy cow has stopped feeding since morning and appears dull and lethargic.",
    clinicalSpokenExplanation:
      "Preliminary Veterinary Triage: Inappetence and acute lethargy detected in adult bovine. Recommendation: Dispatch field veterinary officer for physical examination.",
    words: ["My", "dairy", "cow", "has", "stopped", "feeding", "since", "morning", "and", "appears", "dull", "and", "lethargic."],
    detectedInfo: {
      animal: "Cattle (Crossbred HF Cow)",
      animalEmoji: "🐄",
      observedConcern: "Reduced appetite (Inappetence)",
      additionalSigns: ["Low activity", "Behaviour change"],
      suggestedNextStep: "Consider veterinary consultation",
      assignedDoctor: "Dr. Kulkarni (Veterinary Clinic)",
    },
  },
};
