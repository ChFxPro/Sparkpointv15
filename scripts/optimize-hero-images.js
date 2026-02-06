import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Vite build output location
const assetPath = 'build/assets';

// Exact hashed filename you confirmed exists
const file = '9cca1db07a8f8f3c2b4fe9b1989f3d9f9738c4c9-CAKSfeae.png';

const input = path.join(assetPath, file);
const base = input.replace(/\.png$/i, '');

async function run() {
  if (!fs.existsSync(input)) {
    console.error('❌ Source image not found:', input);
    process.exit(1);
  }

  await sharp(input).webp({ quality: 75 }).toFile(`${base}.webp`);
  await sharp(input).avif({ quality: 50 }).toFile(`${base}.avif`);

  console.log('✅ Hero image optimized:');
  console.log('PNG :', input);
  console.log('WEBP:', `${base}.webp`);
  console.log('AVIF:', `${base}.avif`);
}

run().catch((err) => {
  console.error('❌ Optimization failed:', err);
  process.exit(1);
});
