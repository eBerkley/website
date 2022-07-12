import { Light, Dark, HighContrast } from "./ThemeIcons";
import useView from "../utils/AppContext";
// colors, appearence, etc subject to change
export default function ThemeButton() {
  const { theme, setTheme } = useView();

  const _onClick = () => {
    setTheme((current) => {
      if (current === "Light") return "Dark";
      if (current === "Dark") return "HighContrast";
      return "Light";
    });
  };

  return (
    <button className="NavBar__ThemeButton" onClick={_onClick}>
      Set Theme
      <div className="NavBar__ThemeIconContainer">
        <Light
          position={
            theme === "Light"
              ? "Current"
              : theme === "Dark"
              ? "Previous"
              : "Next"
          }
        />
        <Dark
          position={
            theme === "Light"
              ? "Next"
              : theme === "Dark"
              ? "Current"
              : "Previous"
          }
        />
        <HighContrast
          position={
            theme === "Light"
              ? "Previous"
              : theme === "Dark"
              ? "Next"
              : "Current"
          }
        />
      </div>
    </button>
  );
}
