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
  const ref = useRef();
  const device = useWindowWidth();
  const [sideNavExpanded, setSideNavExpanded] = useState(false);
  const [OutletSideNavData, setSideNavData] = useState([]);
  const storedTheme = localStorage.getItem("theme") || "Light";
  const [theme, setTheme] = useState(storedTheme);
  const [articleList, setArticleList] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      apiFetch().then((response) => {
        setArticleList(response);
        setLoaded(true);
      });
    }
  }, [loaded]);

  const section = useImprovedToc();

  useAutoThemeSetter(theme);

  useSideNavResponder(device, sideNavExpanded, ref, setSideNavExpanded);

  const getCollapsed = () => {
    if (device !== "mobile") return "SideNavCollapser SideNavCollapser--Hidden";
    if (sideNavExpanded) {
      return "SideNavCollapser SideNavCollapser--Expanded";
    }
    return "SideNavCollapser";
  };

  const context = {
    setSideNavData,
    device,
    theme,
    setTheme,
    section,
    articleList,
  };

  return (
    <AppContext.Provider value={context}>
      {loaded && (
        <div
          className={sideNavExpanded ? "Subroot Subroot--Expanded" : "Subroot"}
        >
          <NavBar
            setSideNavExpanded={setSideNavExpanded}
            sideNavExpanded={sideNavExpanded}
            mobile={device === "mobile"}
          />
          <div
            ref={ref}
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
