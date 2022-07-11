import { NavLink } from "react-router-dom";
import ResponsiveNavContent from "./ResponsiveNavContent";

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
