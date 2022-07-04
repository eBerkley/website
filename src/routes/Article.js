import { useParams } from "react-router-dom"
import ArticleMain from "../components/ArticleMain"
import HeadersAside from "../components/HeadersAside"
import fakeArticles from "../utils/fakeArticles";

// tells main and aside components what article to display
export default function Article() {

  const { articleName = fakeArticles[0].title } = useParams();
  const article = fakeArticles.find(({title}) => title === articleName)

  return(
    <>
      <ArticleMain article={article} />
      <HeadersAside article={article.content} />
    </>
  )
}