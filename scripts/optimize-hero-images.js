import sharp from "sharp";
import fs from "fs";
import path from "path";

// ✅ Your Vite build outputs hashed assets to build/assets
const assetPath = "build/assets";

// ✅ The exact filename you found via `find`
const file = "9cca1db07a8f8f3c2b4fe9b1989f3d9f9738c4c9-CAKSfeae.png";

const input = path.join(assetPath, file);
const base = input.replace(/\.png$/i, "");

async function run() {
  if (!fs.existsSync(input)) {
    console.error("Source image not found:", input);
    return;
  }

  // Create WebP + AVIF siblings next to the PNG in build/assets
  await sharp(input)
    .webp({ quality: 75 })
    .toFile(`${base}.webp`);

  await sharp(input)
    .avif({ quality: 50 })
    .toFile(`${base}.avif`);

  console.log("✅ Hero image optimized:", {
    input,
    webp: `${base}.webp`,
    avif: `${base}.avif`,
  });
}

run().catch((err) => {
  console.error("❌ Optimization failed:", err);
});
