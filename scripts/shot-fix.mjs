import { chromium } from 'playwright';
import path from 'path';
const OUT = path.resolve('scripts','shots');
const base = process.env.SHOT_URL;
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:1.5 })).newPage();
await p.goto(base,{waitUntil:'load'});
await p.evaluate(async()=>{const s=innerHeight*0.6;for(let y=0;y<=document.body.scrollHeight;y+=s){scrollTo(0,y);await new Promise(r=>setTimeout(r,150));}scrollTo(0,0);});
await p.waitForTimeout(400);
async function shotAt(id, name, off=0){
  await p.evaluate(([i,o])=>{const el=document.getElementById(i);scrollTo(0, el.getBoundingClientRect().top+scrollY-o);},[id,off]);
  await p.waitForTimeout(700);
  await p.screenshot({ path: path.join(OUT, name+'.png') });
}
await shotAt('play','fix-play',10);
await shotAt('rewards','fix-rewards',10);
// command center has no id; scroll to it via its heading text position using evaluate
await p.evaluate(()=>{const els=[...document.querySelectorAll('h2')];const t=els.find(e=>/one place/i.test(e.textContent));if(t)scrollTo(0,t.getBoundingClientRect().top+scrollY-120);});
await p.waitForTimeout(700);
await p.screenshot({ path: path.join(OUT,'fix-command.png') });
// rewards top glow transition: scroll a bit above rewards
await p.evaluate(()=>{const el=document.getElementById('rewards');scrollTo(0, el.getBoundingClientRect().top+scrollY-260);});
await p.waitForTimeout(700);
await p.screenshot({ path: path.join(OUT,'fix-glow.png') });
await b.close(); console.log('fix shots done');
