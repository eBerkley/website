import ArticleMain from "../components/ArticleMain";
import apiFetch from "../utils/apiFetch";
import { useEffect, useState } from "react";
import useView from "../utils/AppContext";

export default function Home() {
  const [article, setArticle] = useState();
  const [loaded, setLoaded] = useState(false);

  const { setSideNavData } = useView();

  useEffect(() => {
    setLoaded(false);
    apiFetch("home").then((res) => {
      setArticle(res);
      setLoaded(true);
    });
    setSideNavData(<h5>Open the article list to see more!</h5>);
    return () => {
      setSideNavData([]);
    };
  }, [setSideNavData]);

  return (
    <div className="BelowNav">
      <div className="BelowNav__HomeDiv">
        {loaded && <ArticleMain article={article} />}
      </div>
    </div>
  );
}
