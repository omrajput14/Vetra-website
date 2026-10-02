import test from "node:test";
import assert from "node:assert/strict";

// Geospatial Haversine calculation for outbreak containment radius
function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

type ZoneType = "RED_CONTAINMENT" | "AMBER_SURVEILLANCE" | "GREEN_MONITORING";

function evaluateQuarantineZone(distanceKm: number): ZoneType {
  if (distanceKm <= 5.0) {
    return "RED_CONTAINMENT";
  }
  if (distanceKm <= 15.0) {
    return "AMBER_SURVEILLANCE";
  }
  return "GREEN_MONITORING";
}

test("Vetra Outbreak Containment Radius & Spatial Calculations", async (t) => {
  // Outbreak epicentre: Karveer Cluster, Kolhapur (16.7050° N, 74.2433° E)
  const epicenter = { lat: 16.7050, lon: 74.2433 };

  await t.test("should classify farms within 5km as RED_CONTAINMENT", () => {
    // Farm 2.3km away in adjacent village
    const nearbyFarm = { lat: 16.7190, lon: 74.2550 };
    const distance = calculateDistanceKm(epicenter.lat, epicenter.lon, nearbyFarm.lat, nearbyFarm.lon);
    assert.ok(distance < 5.0, `Expected < 5km, got ${distance}`);
    assert.equal(evaluateQuarantineZone(distance), "RED_CONTAINMENT");
  });

  await t.test("should classify farms between 5km and 15km as AMBER_SURVEILLANCE", () => {
    // Dairy Cooperative 9.4km away
    const cooperativeHub = { lat: 16.7650, lon: 74.3100 };
    const distance = calculateDistanceKm(epicenter.lat, epicenter.lon, cooperativeHub.lat, cooperativeHub.lon);
    assert.ok(distance >= 5.0 && distance <= 15.0, `Expected 5-15km, got ${distance}`);
    assert.equal(evaluateQuarantineZone(distance), "AMBER_SURVEILLANCE");
  });

  await t.test("should classify farms beyond 15km as GREEN_MONITORING", () => {
    // Distant farm 28km away
    const distantFarm = { lat: 16.9200, lon: 74.4000 };
    const distance = calculateDistanceKm(epicenter.lat, epicenter.lon, distantFarm.lat, distantFarm.lon);
    assert.ok(distance > 15.0, `Expected > 15km, got ${distance}`);
    assert.equal(evaluateQuarantineZone(distance), "GREEN_MONITORING");
  });
});
