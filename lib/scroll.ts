/** Smoothly scroll to an in-page section by id, accounting for the fixed navbar.
 *  If the user is on a legal subpage (#privacy etc.), return home first, then scroll. */
export const scrollToSection = (id: string) => {
  const NAV_OFFSET = 72;

  const doScroll = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const onLegalPage = window.location.hash && window.location.hash !== '#home';
  if (onLegalPage) {
    window.location.hash = '';
    // wait for the home view to mount before scrolling
    setTimeout(doScroll, 140);
  } else {
    doScroll();
  }
};
