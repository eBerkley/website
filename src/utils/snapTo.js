const snapTo = (el) => {
  const sr = document.querySelector(".Subroot");
  sr.style.setProperty("scroll-behavior", "auto");
  el.scrollIntoView();
  sr.style.setProperty("scroll-behavior", "var(--scroll-behavior)");
};

export default snapTo;
