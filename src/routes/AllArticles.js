import { useEffect } from "react";
// import { Outlet } from "react-router-dom";
import useView from "../utils/AppContext";
import { useParams } from "react-router-dom";
import fakeArticles from "../utils/fakeArticles";
import ArticlesList from "../components/ArticlesList";
import ArticleMain from "../components/ArticleMain";
import SectionsInArticle from "../components/SectionsInArticle";



export default function AllArticles() {
  const { device, setSideNavData } = useView();
  const { articleName = "fakeArticle1" } = useParams();
  const article = fakeArticles.find(({ title }) => title === articleName);

  useEffect(() => {
    setSideNavData(
      <>
        <SectionsInArticle article={article.content} />
        <ArticlesList articles={fakeArticles} />
      </>
    );

    return () => {
      setSideNavData([]);
    };
  }, [setSideNavData, article]);


  return (
    <div className="BelowNav">
      <nav className={`SideNav${device === "mobile" ? " SideNav--Hidden" : ""}`}>
        {device === "tablet" && <SectionsInArticle article={article.content} />}
        <ArticlesList articles={fakeArticles}/>
      </nav>
      <ArticleMain article={article}/>

      <nav className={`SideNav${device !== "monitor" ? " SideNav--Hidden": ""}`}>
        <SectionsInArticle article={article.content} />
      </nav>
    </div>
  );
}
