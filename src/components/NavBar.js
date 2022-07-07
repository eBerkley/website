import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import useResponse from "../utils/useResponsiveView";
// parent element App renders outlet
export default function NavBar() {
  const { clientDevice, expand } = useResponse()
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
      {clientDevice === "mobile" && <button onClick={expand}>See More...</button>}
    </nav>
  );
}
