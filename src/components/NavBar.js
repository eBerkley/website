// import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ResponsiveNavContent from "./ResponsiveNavContent";
// import ThemeButton from "./ThemeButton";

// parent element App renders outlet
export default function NavBar(props) {
  const setClassName = ({ isActive }) => {
    if (isActive) {
      return "NavBar__a NavBar__a--isActive";
    } else {
      return "NavBar__a";
    }
  };

  return (
    <nav className="NavBar">
      <NavLink className={setClassName} to="/">
        Home
      </NavLink>
      <NavLink className={setClassName} to="/articles">
        Articles
      </NavLink>
      <button
        onClick={(e) => {
          props.setSideNavExpanded(true);
          e.stopPropagation();
        }}
        disabled={props.sideNavExpanded}
        className={`NavBar__SideNavExpander${
          !props.mobile ? " NavBar__SideNavExpander--Hidden" : null
        }`}
      >
        See More...
      </button>
      <ResponsiveNavContent display={!props.mobile} />
    </nav>
  );
}
