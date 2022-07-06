import { useParams, Navigate } from "react-router-dom";
import ArticleMain from "../components/ArticleMain";
import HeadersAside from "../components/HeadersAside";
import fakeArticles from "../utils/fakeArticles";

// tells main and aside components what article to display
export default function Article() {
  const { articleName } = useParams();
  const article = fakeArticles.find(({ title }) => title === articleName);

  return (
    <>
      {articleName ? (
        <>
          <ArticleMain article={article} />
          <HeadersAside article={article.content} />
        </>
      ) : (
        <Navigate to="./fakeArticle1" />
      )}
    </>
  );
}
