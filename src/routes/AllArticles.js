import { useEffect, useRef } from "react";
import useAppContext from "../utils/AppContext";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import ArticleMain from "../components/ArticleMain";
import SectionsInArticle from "../components/SectionsInArticle";
import Footer from "../components/Footer";
import snapTo from "../utils/snapTo";

export default function AllArticles() {
  const { device, setSideNavData, articleList, reqFetch, currentArticle } =
    useAppContext();

  const { articleName = "index" } = useParams();
  const scrollTo = useRef();

  useEffect(() => {
    if (articleList && articleName !== currentArticle.name) {
      setSideNavData(
        <div className="SideNav__FetchingContent">fetching content...</div>
      );
      reqFetch(articleName);
    } else if (articleList && articleName === currentArticle.name) {
      snapTo(scrollTo.current);
      setSideNavData(
        <>
          <SectionsInArticle article={currentArticle.content} />
          <ArticlesList articles={articleList} />
        </>
      );
    }
  }, [articleName, articleList, currentArticle, setSideNavData, reqFetch]);

  return (
    <>
      <div ref={scrollTo} className="BelowNav">
        <nav
          className={`SideNav${device === "mobile" ? " SideNav--Hidden" : ""}`}
        >
          {device === "tablet" && articleName === currentArticle.name && (
            <SectionsInArticle article={currentArticle.content} />
          )}
          <ArticlesList articles={articleList} />
        </nav>
        {articleName === currentArticle.name && (
          <ArticleMain article={currentArticle} />
        )}

        <nav
          className={`SideNav${device !== "monitor" ? " SideNav--Hidden" : ""}`}
        >
          {articleName === currentArticle.name && (
            <SectionsInArticle article={currentArticle.content} />
          )}
        </nav>
      </div>
      {articleName === currentArticle.name && <Footer />}
    </>
  );
}
