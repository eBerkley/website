
// each header that is currently being displayed in main
export default function HeadersAside({article}) {
  return (
    <aside>
      <h4>Sections</h4>
      <div className="AsideDiv">
        {article.map((el) => <a className="AsideDiv__A" key={el.section} href={`#${el.section}`}>{el.section}</a>)}
      </div>
      
    </aside>
  )
}