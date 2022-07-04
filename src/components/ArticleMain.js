import { Fragment } from "react"

// main
export default function ArticleMain({article}) {
  return (
    <main>
      <h1>{article.title}</h1>
      {article.content.map((el, i) => <Fragment key={el.section}><h2 id={el.section}>{el.section}</h2><p>{el.content}</p></Fragment>)}
    </main>
  )
}