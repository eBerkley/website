
// each header that is currently being displayed in main
export default function HeadersAside({article}) {
  return (
    <aside>
      {article.map((el) => <a key={el.section} href={`#${el.section}`}>{el.section}</a>)}
    </aside>
  )
}