import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SCENARIOS } from "../src/lib/voiceScenarios.ts";

describe("Voice Scenarios Data Model", () => {
  it("should define all three national pilot languages (Marathi, Hindi, English)", () => {
    assert.ok(SCENARIOS.marathi, "Marathi scenario missing");
    assert.ok(SCENARIOS.hindi, "Hindi scenario missing");
    assert.ok(SCENARIOS.english, "English scenario missing");
  });

  it("should have complete clinical extraction metadata for Marathi", () => {
    const s = SCENARIOS.marathi;
    assert.equal(s.id, "marathi");
    assert.equal(s.langNative, "मराठी");
    assert.ok(s.audioText.length > 0);
    assert.ok(s.englishTranslation.length > 0);
    assert.ok(s.words.length > 0);
    assert.ok(s.clinicalSpokenExplanation.length > 0);
    assert.ok(s.detectedInfo.animal);
    assert.ok(s.detectedInfo.observedConcern);
    assert.ok(s.detectedInfo.suggestedNextStep);
    assert.ok(s.detectedInfo.assignedDoctor);
  });

  it("should have complete clinical extraction metadata for Hindi", () => {
    const s = SCENARIOS.hindi;
    assert.equal(s.id, "hindi");
    assert.equal(s.langNative, "हिंदी");
    assert.ok(s.audioText.length > 0);
    assert.ok(s.englishTranslation.length > 0);
    assert.ok(s.words.length > 0);
    assert.ok(s.clinicalSpokenExplanation.length > 0);
    assert.ok(s.detectedInfo.animal);
    assert.ok(s.detectedInfo.observedConcern);
  });

  it("should have complete clinical extraction metadata for English", () => {
    const s = SCENARIOS.english;
    assert.equal(s.id, "english");
    assert.ok(s.audioText.length > 0);
    assert.ok(s.englishTranslation.length > 0);
    assert.ok(s.words.length > 0);
    assert.ok(s.clinicalSpokenExplanation.length > 0);
    assert.ok(s.detectedInfo.animal);
    assert.ok(s.detectedInfo.observedConcern);
  });
});
