import useView from "../utils/AppContext";

// each header that is currently being displayed in main
export default function SectionsInArticle({ article }) {
  const { section } = useView();

  const current = (sectionName) => {
    // if the top section contains the header with the id this links to, give it the attribute aria-current.
    if (section && sectionName === section.childNodes[0].id) return true;
  };

  return (
    <>
      <h4 id="SectionsHeader">In This Article</h4>
      {article.map((el) => (
        <a
          className={"SideNav__Section"}
          aria-current={current(el.section)}
          key={el.section}
          href={`#${el.section}`}
        >
          {el.title}
        </a>
      ))}
    </>
  );
}
