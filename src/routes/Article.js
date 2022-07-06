import { useParams, Navigate } from "react-router-dom";
import ArticleMain from "../components/ArticleMain";
import HeadersAside from "../components/HeadersAside";
import fakeArticles from "../utils/fakeArticles";
import ArticlesSection from "../components/ArticlesSection";
import useWindowWidth from "../utils/useWindowWidth";

// tells main and aside components what article to display
export default function Article() {
  const { articleName } = useParams();
  const article = fakeArticles.find(({ title }) => title === articleName);
  const renderTabletView = useWindowWidth(1200)

  return (
    <>
      {articleName ? (
        renderTabletView ? (
          <>
            <nav className="SectionNav SectionNav--Collapsed">
              <HeadersAside article={article.content} />
              <ArticlesSection articles={fakeArticles} />
            </nav>
            <ArticleMain article={article} />
          </>
        ) : (
          <>
            <ArticleMain article={article} />
            <nav className="SectionNav">
              <HeadersAside article={article.content} />
            </nav>
            
          </>
        ) 
      ) : (
        <Navigate to="./fakeArticle1" />
      )}
    </>
  );
}
