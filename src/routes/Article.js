import { useParams, Navigate } from "react-router-dom";
import ArticleMain from "../components/ArticleMain";
import SectionsInArticle from "../components/SectionsInArticle";
import fakeArticles from "../utils/fakeArticles";
import ArticlesList from "../components/ArticlesList";
import useResponse from "../utils/useResponsiveView";

// orders components and tells them what to render
export default function Article() {
  const { articleName } = useParams();
  const article = fakeArticles.find(({ title }) => title === articleName);
  const { clientDevice, sideNavExpanded, collapse } = useResponse();

  const getCollapsed = () => {
    if (sideNavExpanded) {
      return "SideNavCollapser SideNavCollapser--Expanded";
    }
    return "SideNavCollapser SideNavCollapser--Collapsed";
  }

  if (!articleName) {
    return <Navigate to="./fakeArticle1" />;
  }



  switch (clientDevice) {
    case "monitor":
      return (
        <div className="BelowNav">
          <nav className="SideNav">
            <ArticlesList articles={fakeArticles} />
          </nav>

          <ArticleMain article={article} />

          <nav className="SideNav">
            <SectionsInArticle article={article.content} />
          </nav>
        </div>
      );

    case "tablet":
      return (
        <div className="BelowNav">

          <nav className="SideNav">
            <SectionsInArticle article={article.content} />
            <ArticlesList articles={fakeArticles} />
          </nav>

          <ArticleMain article={article} />
        </div>
      );
    

    default: //case "mobile"
      return (
      <div className="BelowNav">
        <div className={getCollapsed()}>
          <div className="SideNavCollapser__Collapser" >
            <span>Press To Collapse &rarr;</span>
            <button onClick={collapse}>&times;</button>
          </div>
          <nav className="SideNav">
            <SectionsInArticle article={article.content} />
            <ArticlesList articles={fakeArticles} />
          </nav>
        </div>
        <ArticleMain article={article} />
      </div>
      )
  }
}
