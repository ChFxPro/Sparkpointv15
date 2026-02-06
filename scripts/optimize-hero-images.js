import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = path.join(process.cwd(), "build", "assets");

// Optional: only optimize images above this size (bytes)
const MIN_BYTES = 250 * 1024; // 250KB

function isImage(file) {
  return /\.(png|jpe?g)$/i.test(file);
}

async function run() {
  if (!fs.existsSync(assetsDir)) {
    console.error("❌ build/assets not found. Run `npm run build` first.");
    process.exit(1);
  }

  const files = fs.readdirSync(assetsDir).filter(isImage);

  if (!files.length) {
    console.log("ℹ️ No PNG/JPG images found in build/assets.");
    return;
  }

  let optimized = 0;

  for (const file of files) {
    const input = path.join(assetsDir, file);
    const stat = fs.statSync(input);

    if (stat.size < MIN_BYTES) continue;

    const base = input.replace(/\.(png|jpe?g)$/i, "");

    const outWebp = `${base}.webp`;
    const outAvif = `${base}.avif`;

    // Skip if already exists (helps repeat runs)
    const hasWebp = fs.existsSync(outWebp);
    const hasAvif = fs.existsSync(outAvif);

    try {
      if (!hasWebp) {
        await sharp(input).webp({ quality: 75 }).toFile(outWebp);
      }
      if (!hasAvif) {
        await sharp(input).avif({ quality: 50 }).toFile(outAvif);
      }

      optimized++;
      console.log(`✅ Optimized: ${file}`);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err);
    }
  }

  console.log(`\nDone. Optimized ${optimized} image(s).`);
}

run().catch((err) => {
  console.error("❌ Optimization script crashed:", err);
  process.exit(1);
});
