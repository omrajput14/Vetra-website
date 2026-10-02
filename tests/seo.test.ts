import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Vetra SEO & OpenGraph Configuration", async (t) => {
  const layoutPath = path.join(process.cwd(), "src/app/layout.tsx");
  const layoutContent = fs.readFileSync(layoutPath, "utf-8");

  await t.test("metadataBase should be configured for production domain", () => {
    assert.match(layoutContent, /metadataBase:\s*new URL\("https:\/\/vetra\.co\.in"\)/);
  });

  await t.test("title and template should be accurately configured", () => {
    assert.match(layoutContent, /title:\s*\{/);
    assert.match(layoutContent, /default:\s*"Vetra — A record for every animal\. A radius for every outbreak\."/);
    assert.match(layoutContent, /template:\s*"%s \| Vetra"/);
  });

  await t.test("openGraph metadata should include brand assets and locale", () => {
    assert.match(layoutContent, /openGraph:\s*\{/);
    assert.match(layoutContent, /siteName:\s*"Vetra"/);
    assert.match(layoutContent, /locale:\s*"en_IN"/);
    assert.match(layoutContent, /type:\s*"website"/);
  });

  await t.test("branding icons must exist in public directory", () => {
    const iconPath = path.join(process.cwd(), "public/branding/vetra_icon.png");
    const logoPath = path.join(process.cwd(), "public/branding/vetra_logo.png");
    assert.ok(fs.existsSync(iconPath), "vetra_icon.png must exist");
    assert.ok(fs.existsSync(logoPath), "vetra_logo.png must exist");
  });
});
