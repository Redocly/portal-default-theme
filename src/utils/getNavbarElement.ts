export function getNavbarElement() {
  const navElements = (typeof document !== 'undefined' && document.querySelectorAll('nav')) || [];
  // there can be multiple nav elements (e.g. mobile and non-mobile), let's use the first one with non-zero height
  for (let i = 0; i < navElements.length; i++) {
    if (navElements[i].getBoundingClientRect().height > 1) {
      return navElements[i];
    }
  }
  return navElements[0] || null;
}
