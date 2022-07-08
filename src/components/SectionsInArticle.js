// each header that is currently being displayed in main
export default function SectionsInArticle({ article }) {
  return (
    <>
      <h4 id="SectionsHeader">In This Article</h4>
      {article.map((el) => (
        <a
          className="SideNav__Section"
          key={el.section}
          href={`#${el.section}`}
        >
          {el.section}
        </a>
      ))}
    </>
  );
}
