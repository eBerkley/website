import useView from "../utils/AppContext";

// each header that is currently being displayed in main
export default function SectionsInArticle({ article }) {
  const { section } = useView();

  const current = (sectionName) => {
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
