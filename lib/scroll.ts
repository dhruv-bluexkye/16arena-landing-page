import { getRoute, pushPath } from './router';

/** Smoothly scroll to an in-page section by id, accounting for the fixed navbar.
 *  If the user is on a subpage (e.g. /privacy), return home first, then scroll. */
export const scrollToSection = (id: string) => {
  const NAV_OFFSET = 72;

  const doScroll = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (getRoute() !== '') {
    // On a subpage — go home, then scroll once the home view mounts.
    pushPath('/');
    setTimeout(doScroll, 160);
  } else {
    doScroll();
  }
};
