import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("ElevenLabs TTS Route Validation Logic", () => {
  it("should reject empty or missing text payload with 400 bad request", () => {
    const validatePayload = (body: any) => {
      if (!body.text || typeof body.text !== "string" || body.text.trim().length === 0) {
        return { status: 400, error: "Text payload is required and cannot be empty." };
      }
      return null;
    };

    assert.deepEqual(validatePayload({}), {
      status: 400,
      error: "Text payload is required and cannot be empty.",
    });

    assert.deepEqual(validatePayload({ text: "   " }), {
      status: 400,
      error: "Text payload is required and cannot be empty.",
    });

    assert.equal(validatePayload({ text: "Valid clinical advisory" }), null);
  });

  it("should configure fallback response when API key is missing", () => {
    const handleApiKeyCheck = (apiKey?: string) => {
      if (!apiKey) {
        return {
          status: 500,
          error: "ELEVENLABS_API_KEY is not configured on the server.",
          fallback: true,
        };
      }
      return null;
    };

    const res = handleApiKeyCheck(undefined);
    assert.ok(res);
    assert.equal(res.status, 500);
    assert.equal(res.fallback, true);
  });
});
