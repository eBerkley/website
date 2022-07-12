import ArticleMain from "../components/ArticleMain";
import { useEffect } from "react";
import useView from "../utils/AppContext";

export default function Home() {
  const { setSideNavData, reqFetch, currentArticle, articleList } = useView();

  useEffect(() => {
    if (articleList && currentArticle.name !== "home") {
      reqFetch("home");
    } else {
      setSideNavData(<h5>Open the articles page to see more!</h5>);
    }
  }, [currentArticle, articleList, reqFetch, setSideNavData]);

  return (
    <div className="BelowNav">
      <div className="BelowNav__HomeDiv">
        {currentArticle.name === "home" && (
          <ArticleMain article={currentArticle} />
        )}
      </div>
    </div>
  );
}
