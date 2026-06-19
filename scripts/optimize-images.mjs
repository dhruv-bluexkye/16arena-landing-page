import sharp from 'sharp';
import path from 'path';

const A = path.resolve('assets');
const j = (f) => path.join(A, f);

const jobs = [
  // Arena backgrounds -> optimized JPG (no transparency needed)
  ['arena-hero-bg.png', 'arena-hero-bg.jpg', 1920, 'jpg'],
  ['arena-esports.png', 'arena-esports.jpg', 800, 'jpg'],
  ['arena-casual.png', 'arena-casual.jpg', 800, 'jpg'],
  ['arena-scrims.png', 'arena-scrims.jpg', 800, 'jpg'],
  // Mascots -> WebP with alpha
  ['hero-ninja.png', 'hero-ninja.webp', 820, 'webp'],
  ['ninja-2.png', 'ninja-2.webp', 820, 'webp'],
];

for (const [src, out, width, fmt] of jobs) {
  const img = sharp(j(src)).resize({ width, withoutEnlargement: true });
  if (fmt === 'jpg') {
    await img.jpeg({ quality: 82, mozjpeg: true }).toFile(j(out));
  } else {
    await img.webp({ quality: 86 }).toFile(j(out));
  }
  console.log('wrote', out);
}
console.log('done');
