import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

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
      <ThemeButton />
      {props.device === "mobile" && (
        <button onClick={props.expand}>See More...</button>
      )}
    </nav>
  );
}
