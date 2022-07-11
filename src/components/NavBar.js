import { NavLink } from "react-router-dom";
import ResponsiveNavContent from "./ResponsiveNavContent";

export default function NavBar(props) {
  const setClassName = ({ isActive }) => {
    if (isActive) {
      return "NavBar__A NavBar__A--isActive";
    } else {
      return "NavBar__A";
    }
  };

  return (
    <nav className="NavBar">
      <a className="SkipLink" href="#main">
        Skip to content
      </a>
      <div className="NavBar__NormalContent">
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
            !props.mobile ? " NavBar__SideNavExpander--Hidden" : ""
          }`}
        >
          &#9776; See More...
        </button>
      </div>
      <div
        className={`NavBar__ResponsiveContent${
          props.mobile ? " NavBar__ResponsiveContent--Hidden" : ""
        }`}
      >
        <ResponsiveNavContent />
      </div>
    </nav>
  );
}
