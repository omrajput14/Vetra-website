import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { EMAIL, PHONE, mail, whatsapp } from "../src/components/home/links.ts";

describe("Contact Links & Communication Utilities", () => {
  it("should have official Vetra contact information", () => {
    assert.equal(EMAIL, "hello@vetra.co.in");
    assert.ok(PHONE.includes("+91"));
  });

  it("should generate valid mailto links with encoded subjects", () => {
    const link = mail("Pilot enquiry: Pune District");
    assert.ok(link.startsWith("mailto:hello@vetra.co.in?subject="));
    assert.ok(link.includes("Pilot%20enquiry"));
  });

  it("should generate valid WhatsApp links with encoded message text", () => {
    const link = whatsapp("Hi Vetra team, I'd like to pilot.");
    assert.ok(link.startsWith("https://wa.me/919021961058?text="));
    assert.ok(link.includes("Hi%20Vetra%20team"));
  });
});
