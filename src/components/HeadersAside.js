// each header that is currently being displayed in main
export default function HeadersAside({ article }) {
  return (
    <nav className="SideNav" aria-labelledby="SectionsHeader">
      <h4 id="SectionsHeader">In This Article</h4>
        {article.map((el) => (
          <a className="SideNav__Section" key={el.section} href={`#${el.section}`}>
            {el.section}
          </a>
        ))}
    </nav>
  );
}
