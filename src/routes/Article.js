import { useParams } from "react-router-dom";
import ArticleMain from "../components/ArticleMain";
import SectionsInArticle from "../components/SectionsInArticle";
import fakeArticles from "../utils/fakeArticles";
import ArticlesList from "../components/ArticlesList";
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import useWindowWidth from "../utils/useWindowWidth";

// orders components and tells them what to render
export default function Article() {
  const { articleName = "fakeArticle1" } = useParams();
  const article = fakeArticles.find(({ title }) => title === articleName);
  const ref = useRef();
  const device = useWindowWidth();
  const [sideNavExpanded, setSideNavExpanded] = useState(false);

  const getCollapsed = () => {
    if (sideNavExpanded) {
      return "SideNavCollapser SideNavCollapser--Expanded";
    }
    return "SideNavCollapser SideNavCollapser--Collapsed";
  };

  useEffect(() => {
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSideNavExpanded(false);
        document.removeEventListener("mousedown", listener);
      }
    };

    if (sideNavExpanded) {
      if (device === "mobile") {
        document.addEventListener("mousedown", listener);
      } else {
        setSideNavExpanded(false)
        document.removeEventListener("mousedown", listener);
      }
    }
  }, [device, sideNavExpanded]);

  switch (device) {
    case "monitor":
      return (
        <div className="Subroot">
          <NavBar
            device={device}
            expand={() => {
              setSideNavExpanded(true);
            }}
          />
          <div className="BelowNav">
            <nav className="SideNav">
              <ArticlesList articles={fakeArticles} />
            </nav>
            <ArticleMain article={article} />
            <nav className="SideNav">
              <SectionsInArticle article={article.content} />
            </nav>
          </div>
        </div>
      );

    case "tablet":
      return (
        <div className="Subroot">
          <NavBar
            device={device}
            expand={() => {
              setSideNavExpanded(true)
            }} />
          <div className="BelowNav">
            <nav className="SideNav">
              <SectionsInArticle article={article.content} />
              <ArticlesList articles={fakeArticles} />
            </nav>
            <ArticleMain article={article} />
          </div>
        </div>
      );

    default: //case "mobile"
      return (
        <div className={`Subroot${sideNavExpanded ? " Subroot--Expanded" : ""}`}>
          <NavBar
            device={device}
            expand={() => {
              setSideNavExpanded(true)
            }} />
          <div className="BelowNav">
            <div ref={ref} className={getCollapsed()}>
              <nav className="SideNav">
                <SectionsInArticle article={article.content} />
                <ArticlesList articles={fakeArticles} />
              </nav>
            </div>
            <ArticleMain article={article} />
          </div>
        </div>
      );
  }
}
