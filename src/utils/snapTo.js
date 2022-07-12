const snapTo = (el) => {
  // This is used to immediately bring the view to the top of the main when a new article is opened. if the scroll-behavior property isnt changed, it could lead to weird results if the article is fetched too fast.
  const sr = document.querySelector(".Subroot");
  sr.style.setProperty("scroll-behavior", "auto");
  el.scrollIntoView();
  sr.style.setProperty("scroll-behavior", "var(--scroll-behavior)");
};

export default snapTo;
