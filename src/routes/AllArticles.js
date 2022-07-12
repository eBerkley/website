import { useEffect, useState, useRef } from "react";
import useAppContext from "../utils/AppContext";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import ArticleMain from "../components/ArticleMain";
import SectionsInArticle from "../components/SectionsInArticle";
import apiFetch from "../utils/apiFetch";
import Footer from "../components/Footer";
import snapTo from "../utils/snapTo";

export default function AllArticles() {
  const { device, setSideNavData, articleList } = useAppContext();
  const { articleName = "index" } = useParams();
  const [article, setArticle] = useState();
  const [loaded, setLoaded] = useState(false);
  const scrollTo = useRef();

  useEffect(() => {
    setLoaded(false);
  }, [articleName]);

  useEffect(() => {
    if (!loaded) {
      snapTo(scrollTo.current);
      apiFetch(articleName).then((results) => {
        setArticle(results);
        setLoaded(true);
      });
    }
  }, [loaded, articleName]);

  useEffect(() => {
    if (loaded) {
      setSideNavData(
        <>
          <SectionsInArticle article={article.content} />
          <ArticlesList articles={articleList} />
        </>
      );
    } else {
      setSideNavData(<div>fetching content...</div>);
    }

    return () => {
      setSideNavData([]);
    };
  }, [setSideNavData, article, loaded]);

  return (
    <>
      <div ref={scrollTo} className="BelowNav">
        <nav
          className={`SideNav${device === "mobile" ? " SideNav--Hidden" : ""}`}
        >
          {device === "tablet" && loaded && (
            <SectionsInArticle article={article.content} />
          )}
          <ArticlesList articles={articleList} />
        </nav>
        {loaded && <ArticleMain article={article} />}

        <nav
          className={`SideNav${device !== "monitor" ? " SideNav--Hidden" : ""}`}
        >
          {loaded && <SectionsInArticle article={article.content} />}
        </nav>
      </div>
      <Footer />
    </>
  );
}
