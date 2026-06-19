import { chromium } from 'playwright';
import path from 'path';

const OUT = path.resolve('scripts', 'shots');
const URL = process.env.SHOT_URL || 'http://localhost:4174/';

const browser = await chromium.launch({ channel: 'chrome' });

// Scroll through the page so IntersectionObserver reveals every section, then return to top.
async function revealAll(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
}

async function capture(ctx, prefix) {
  const p = await ctx.newPage();
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);
  await p.screenshot({ path: path.join(OUT, `${prefix}-hero.png`) });
  await revealAll(p);
  await p.screenshot({ path: path.join(OUT, `${prefix}-full.png`), fullPage: true });
  return p;
}

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const dp = await capture(desktop, 'desktop');
// Section close-ups (desktop)
for (const id of ['arenas', 'play', 'rewards', 'download']) {
  await dp.evaluate((i) => document.getElementById(i)?.scrollIntoView({ block: 'start' }), id);
  await dp.waitForTimeout(700);
  await dp.screenshot({ path: path.join(OUT, `desktop-${id}.png`) });
}
await desktop.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
await capture(mobile, 'mobile');
await mobile.close();

await browser.close();
console.log('shots written to', OUT);
