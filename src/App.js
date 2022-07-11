import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import useWindowWidth from "./utils/useWindowWidth";
import ResponsiveNavContent from "./components/ResponsiveNavContent";
import { AppContext } from "./utils/AppContext";
import useImprovedToc from "./utils/useImprovedToc";

export default function App() {
  const ref = useRef();
  const device = useWindowWidth();
  const [sideNavExpanded, setSideNavExpanded] = useState(false);
  const [OutletSideNavData, setSideNavData] = useState([]);

  const storedTheme = localStorage.getItem("theme") || "Light";
  const [theme, setTheme] = useState(storedTheme);

  const section = useImprovedToc();

  useEffect(() => {
    const r = document.querySelector(":root");
    localStorage.setItem("theme", theme);
    if (theme === "Dark") {
      r.style.setProperty("--primary", "hsl(0, 0%, 10%)");
      r.style.setProperty("--secondary", "hsl(0, 0%, 100%)");
    } else if (theme === "Light") {
      r.style.setProperty("--primary", "hsl(0, 0%, 100%)");
      r.style.setProperty("--secondary", "hsl(0, 0%, 0%)");
    } else {
      r.style.setProperty("--primary", "hsl(0, 0%, 0%)");
      r.style.setProperty("--secondary", "hsl(0, 0%, 100%)");
    }
  }, [theme]);

  useEffect(() => {
    // collapses sidenav
    const clickListener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSideNavExpanded(false);
      }
    };

    const escListener = (e) => {
      if (e.code === "Escape") {
        setSideNavExpanded(false);
      }
    };

    if (sideNavExpanded) {
      ref.current.focus(); // allows esc to close sidebar and snaps tab navigation to sidebar
      if (device == "mobile") {
        document.addEventListener("keydown", escListener);
        document.addEventListener("click", clickListener);
      } else {
        setSideNavExpanded(false);
        document.removeEventListener("click", clickListener);
        document.removeEventListener("keydown", escListener);
      }
    }
  }, [device, sideNavExpanded]);

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
    setTheme: setTheme,
    section,
  };

  return (
    <AppContext.Provider value={context}>
      <div
        className={sideNavExpanded ? "Subroot Subroot--Expanded" : "Subroot"}
        tabIndex="-1"
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
        >
          <nav className="SideNav">
            <ResponsiveNavContent display={device === "mobile"} />
            {OutletSideNavData}
          </nav>
        </div>

        <Outlet />
      </div>
    </AppContext.Provider>
  );
}
