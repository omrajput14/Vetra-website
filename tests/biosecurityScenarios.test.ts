import { describe, it } from "node:test";
import assert from "node:assert/strict";

interface OutbreakScenario {
  id: string;
  name: string;
  location: string;
  distanceKm: number;
  farmsAlerted: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  vaccineBooster: string;
  status: string;
  spokenAdvisory: string;
}

const SCENARIOS: OutbreakScenario[] = [
  {
    id: "lsd",
    name: "Lumpy Skin Disease (LSD)",
    location: "Nashik North Sector",
    distanceKm: 15,
    farmsAlerted: 142,
    severity: "CRITICAL",
    vaccineBooster: "Heterologous Goat Pox Ring Vaccine",
    status: "Containment Radius Enforced",
    spokenAdvisory:
      "Vetra Biosecurity Broadcast: Confirmed Lumpy Skin Disease outbreak within 15 kilometer perimeter of Nashik North. 142 dairy holdings placed under automated movement restriction. Heterologous goat pox ring vaccination dispatched.",
  },
  {
    id: "fmd",
    name: "Foot & Mouth Disease (FMD)",
    location: "Baramati Cooperative Cluster",
    distanceKm: 10,
    farmsAlerted: 88,
    severity: "HIGH",
    vaccineBooster: "FMD Quadrivalent Booster",
    status: "Surveillance Radius Triggered",
    spokenAdvisory:
      "Epidemiological Warning: Foot and Mouth Disease confirmed in Baramati Cluster. 10 kilometer surveillance radius active across 88 farms. Disinfection protocols and quadrivalent booster mobilization in progress.",
  },
  {
    id: "hs",
    name: "Hemorrhagic Septicemia (HS)",
    location: "Ahmednagar Rural Sector",
    distanceKm: 25,
    farmsAlerted: 210,
    severity: "HIGH",
    vaccineBooster: "HS Adjuvant Vaccine",
    status: "Advisory Broadcast Dispatched",
    spokenAdvisory:
      "Precautionary Livestock Health Advisory: Hemorrhagic Septicemia alert in Ahmednagar Sector. 210 registered holdings advised to verify adjuvant vaccination status immediately.",
  },
  {
    id: "bq",
    name: "Black Quarter (BQ)",
    location: "Kolhapur Dairy Basin",
    distanceKm: 12,
    farmsAlerted: 168,
    severity: "CRITICAL",
    vaccineBooster: "Polyvalent Clostridial Ring Vaccine",
    status: "Containment Ring Enforced",
    spokenAdvisory:
      "Vetra Biosecurity Emergency Broadcast: Black Quarter confirmed in Kolhapur Dairy Basin. 12 kilometer immediate containment ring enforced across 168 cattle holdings. Polyvalent clostridial ring vaccination dispatched.",
  },
];

describe("Biosecurity Epidemiological Containment Radar Scenarios", () => {
  it("should contain all 4 primary endemic disease containment scenarios", () => {
    const ids = SCENARIOS.map((s) => s.id);
    assert.deepEqual(ids, ["lsd", "fmd", "hs", "bq"]);
  });

  it("should enforce valid containment radius distance ranges (10km - 25km)", () => {
    for (const scenario of SCENARIOS) {
      assert.ok(scenario.distanceKm >= 10 && scenario.distanceKm <= 30);
      assert.ok(scenario.farmsAlerted > 0);
      assert.ok(scenario.vaccineBooster.length > 0);
      const diseaseName = scenario.name.split("(")[0].trim().replace("&", "and");
      assert.ok(scenario.spokenAdvisory.toLowerCase().includes(diseaseName.toLowerCase()));
    }
  });

  it("should enforce critical containment status on BQ and LSD", () => {
    const bq = SCENARIOS.find((s) => s.id === "bq");
    assert.ok(bq);
    assert.equal(bq.severity, "CRITICAL");
    assert.equal(bq.location, "Kolhapur Dairy Basin");

    const lsd = SCENARIOS.find((s) => s.id === "lsd");
    assert.ok(lsd);
    assert.equal(lsd.severity, "CRITICAL");
  });
});
