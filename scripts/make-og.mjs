import sharp from 'sharp';
import path from 'path';

const A = path.resolve('assets');
const W = 1200, H = 630;

const bg = await sharp(path.join(A, 'arena-hero-bg.jpg'))
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .toBuffer();

const overlay = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
         <stop offset="0" stop-color="#0A0A0C" stop-opacity="0.45"/>
         <stop offset="0.6" stop-color="#0A0A0C" stop-opacity="0.6"/>
         <stop offset="1" stop-color="#0A0A0C" stop-opacity="0.88"/>
       </linearGradient>
     </defs>
     <rect width="${W}" height="${H}" fill="url(#g)"/>
     <rect x="${W / 2 - 90}" y="406" width="180" height="4" fill="#FF6A00"/>
     <text x="${W / 2}" y="452" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" letter-spacing="9" text-anchor="middle">INDIA'S ESPORTS PLATFORM</text>
     <text x="${W / 2}" y="498" fill="#FF973C" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" letter-spacing="4" text-anchor="middle">PLAY · COMPETE · EARN</text>
   </svg>`
);

const logoW = 520;
const logo = await sharp(path.join(A, 'logo.png')).resize({ width: logoW }).toBuffer();

await sharp(bg)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 235, left: Math.round((W - logoW) / 2) },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(A, 'og-image.jpg'));

console.log('wrote assets/og-image.jpg');
