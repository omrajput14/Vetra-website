export interface AnimalPassport {
  id: string;
  tagNumber: string;
  name: string;
  species: "Cattle" | "Buffalo" | "Goat" | "Sheep" | "Poultry";
  breed: string;
  gender: "Female" | "Male";
  ageMonths: number;
  dob: string;
  weightKg: number;
  ownerName: string;
  farmLocation: string;
  healthScore: number;
  status: "Healthy" | "Under Treatment" | "Observation" | "Quarantine";
  vaccineStatus: "Up to Date" | "Due Soon" | "Overdue";
  qrData: string;
  avatarUrl: string;
  latestVitals: {
    temperature: string;
    pulseRate: string;
    respiratoryRate: string;
    lastRecorded: string;
  };
  vaccines: {
    name: string;
    dateAdministered: string;
    nextDueDate: string;
    batchNumber: string;
    veterinarian: string;
    status: "Completed" | "Scheduled" | "Overdue";
  }[];
  evmrRecords: {
    id: string;
    date: string;
    diagnosis: string;
    veterinarian: string;
    clinicName: string;
    symptoms: string[];
    prescriptions: {
      drug: string;
      dosage: string;
      frequency: string;
      durationDays: number;
      withdrawalPeriodDays: number;
    }[];
    notes: string;
  }[];
}

export interface TriageScenario {
  id: string;
  title: string;
  species: string;
  symptoms: string[];
  severity: "LOW" | "MODERATE" | "HIGH" | "EMERGENCY";
  aiConfidence: number;
  differentialDiagnosis: string[];
  recommendedAction: string;
  suggestedQuestions: string[];
  disclaimer: string;
}

export interface StepJourney {
  number: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  icon: string;
  highlightColor: string;
}

export interface ArchitectureItem {
  layer: string;
  title: string;
  specs: string;
  details: string[];
  iconName: string;
}
