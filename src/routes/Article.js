import { useParams, Navigate } from "react-router-dom";
import ArticleMain from "../components/ArticleMain";
import HeadersAside from "../components/HeadersAside";
import fakeArticles from "../utils/fakeArticles";
import ArticlesSection from "../components/ArticlesSection";
import useResponse from "../utils/useResponsiveView";

// tells main and aside components what article to display
export default function Article() {
  const { articleName } = useParams();
  const article = fakeArticles.find(({ title }) => title === articleName);
  const { clientDevice, sideNavExpanded, collapse } = useResponse();

  const getCollapsed = () => {
    if (sideNavExpanded) {
      return "CollapsableSideNav CollapsableSideNav--Expanded";
    }
    return "CollapsableSideNav CollapsableSideNav--Collapsed";
  }

  if (!articleName) {
    return <Navigate to="./fakeArticle1" />;
  }

  if (clientDevice === "monitor") {
    return (
      <>
        <ArticleMain article={article} />
        <nav className="SideNavContainer">
          <HeadersAside article={article.content} />
        </nav>
      </>
    );
  }

  if (clientDevice === "tablet") {
    return (
      <>
        <div className="SideNavContainer">
          <HeadersAside article={article.content} />
          <ArticlesSection articles={fakeArticles} />
        </div>
        <ArticleMain article={article} />
      </>
    );
  }

  if (clientDevice === "mobile") {
    return (
      <>
        <div className={getCollapsed()}>
          <div className="CollapsableSideNav__Collapser">
            <span>Press To Collapse &rarr;</span>
            <button onClick={collapse}>&times;</button>
          </div>
          <div className="SideNavContainer">
            <HeadersAside article={article.content} />
            <ArticlesSection articles={fakeArticles} />
          </div>
        </div>
        <ArticleMain article={article} />
      </>
    );
  }
}
