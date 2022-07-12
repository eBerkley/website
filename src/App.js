import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import useWindowWidth from "./utils/useWindowWidth";
import ResponsiveNavContent from "./components/ResponsiveNavContent";
import { AppContext } from "./utils/AppContext";
import useImprovedToc from "./utils/useImprovedToc";
import useAutoThemeSetter from "./utils/useAutoThemeSetter";
import useSideNavResponder from "./utils/useSideNavResponder";
import apiFetch from "./utils/apiFetch";

export default function App() {
  // responsive design, sideNav
  const device = useWindowWidth();
  const collapsingDiv = useRef();
  const [sideNavExpanded, setSideNavExpanded] = useState(false);
  const [OutletSideNavData, setSideNavData] = useState([]);
  const sentFirstReq = useRef(false);
  // theme
  const storedTheme = localStorage.getItem("theme") || "Light";
  const [theme, setTheme] = useState(storedTheme);
  // api
  const [articleList, setArticleList] = useState(null);
  const [fetching, reqFetch] = useState(null);
  const [currentArticle, setCurrentArticle] = useState("");

  const section = useImprovedToc();

  const context = {
    setSideNavData,
    device,
    theme,
    setTheme,
    section,
    articleList,
    fetching,
    reqFetch,
    currentArticle,
  };

  useEffect(() => {
    // init articleList
    if (!sentFirstReq.current) {
      sentFirstReq.current = true;
      apiFetch().then((res) => {
        setArticleList(res);
      });
    }
  }, []);

  useEffect(() => {
    // article fetcher
    if (fetching && articleList) {
      apiFetch(fetching).then((response) => {
        reqFetch(null);
        setCurrentArticle(response);
      });
    }

    // waits until articleList is generated
  }, [fetching, articleList]);

  useAutoThemeSetter(theme);

  useSideNavResponder(
    device,
    sideNavExpanded,
    collapsingDiv,
    setSideNavExpanded
  );

  const getCollapsed = () => {
    if (device !== "mobile") return "SideNavCollapser SideNavCollapser--Hidden";
    if (sideNavExpanded) {
      return "SideNavCollapser SideNavCollapser--Expanded";
    }
    return "SideNavCollapser";
  };

  return (
    <AppContext.Provider value={context}>
      {articleList && (
        <div
          className={sideNavExpanded ? "Subroot Subroot--Expanded" : "Subroot"}
        >
          <NavBar
            setSideNavExpanded={setSideNavExpanded}
            sideNavExpanded={sideNavExpanded}
            mobile={device === "mobile"}
          />
          <div
            ref={collapsingDiv}
            className={getCollapsed()}
            aria-hidden={device !== "mobile"}
            onFocus={() => setSideNavExpanded(true)}
            onBlur={() => setSideNavExpanded(false)}
          >
            <nav className="SideNav">
              <div className="SideNav__ResponsiveContent">
                <ResponsiveNavContent />
              </div>
              {OutletSideNavData}
            </nav>
          </div>

          <Outlet />
        </div>
      )}
    </AppContext.Provider>
  );
}
