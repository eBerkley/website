import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import useWindowWidth from "./utils/useWindowWidth";
import ResponsiveNavContent from "./components/ResponsiveNavContent";
import { AppContext } from "./utils/AppContext";

export default function App() {
  const ref = useRef();
  const device = useWindowWidth();
  const [sideNavExpanded, setSideNavExpanded] = useState(false);
  const [OutletSideNavData, setSideNavData] = useState([]);

  useEffect(() => {
    // collapses sidenav
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSideNavExpanded(false);
        document.removeEventListener("click", listener);
      }
    };

    if (sideNavExpanded) {
      if (device === "mobile") {
        document.addEventListener("click", listener);
      } else {
        setSideNavExpanded(false);
        document.removeEventListener("click", listener);
      }
    }
  }, [device, sideNavExpanded]);

  const getCollapsed = () => {
    if (sideNavExpanded) {
      return "SideNavCollapser SideNavCollapser--Expanded";
    }
    return "SideNavCollapser";
  };

  const context = {
    setSideNavData,
    device,
  };

  return (
    <div className={sideNavExpanded ? "Subroot Subroot--Expanded" : "Subroot"}>
      <NavBar
        setSideNavExpanded={setSideNavExpanded}
        sideNavExpanded={sideNavExpanded}
        // other={ResponsiveNavContent}
        mobile={device === "mobile"}
      />
      <div ref={ref} className={getCollapsed()}>
        <nav className="SideNav">
          <ResponsiveNavContent display={device === "mobile"} />
          {OutletSideNavData}
        </nav>
      </div>
      <AppContext.Provider value={context}>
        <Outlet />
      </AppContext.Provider>
    </div>
  );
}
