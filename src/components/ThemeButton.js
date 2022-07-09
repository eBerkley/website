import { useEffect, useState, useMemo, useRef } from "react";

// colors, appearence, etc subject to change
export default function ThemeButton() {
  const storedTheme = localStorage.getItem("theme") || "Light";

  const [theme, setTheme] = useState(storedTheme);
  const [collapsed, setCollapsed] = useState(true);
  const collapsable = useRef();

  const collapsedClassName = useMemo(() => {
    if (collapsed) {
      return "NavBar__Collapsable NavBar__Collapsable--Collapsed";
    } else {
      return "NavBar__Collapsable NavBar__Collapsable--Uncollapsed";
    }
  }, [collapsed]);

  const themeButtonName = (buttonTheme) => {
    if (buttonTheme === theme) {
      return `NavBar__ThemeOption NavBar__${buttonTheme} NavBar__ThemeOption--isActive`;
    } else {
      return `NavBar__ThemeOption NavBar__${buttonTheme}`;
    }
  };

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

  const onExpand = () => {
    const listener = (e) => {
      if (!collapsable.current.contains(e.target)) {
        setCollapsed(true);
        window.removeEventListener("mousedown", listener);
      }
    };

    if (collapsed) {
      setCollapsed(false);
      window.addEventListener("mousedown", listener);
    } else {
      setCollapsed(true);
      window.removeEventListener("mousedown", listener);
    }
  };

  return (
    <div ref={collapsable} className="NavBar__ThemeSelector">
      <button className="NavBar__ThemeButton" onClick={onExpand}>
        Set Theme
      </button>
      <div className={collapsedClassName}>
        <button
          className={themeButtonName("Light")}
          onClick={() => setTheme("Light")}
        >
          light
        </button>
        <button
          className={themeButtonName("Dark")}
          onClick={() => setTheme("Dark")}
        >
          dark
        </button>
        <button
          className={themeButtonName("High-Contrast")}
          onClick={() => setTheme("High-Contrast")}
        >
          high contrast dark
        </button>
      </div>
    </div>
  );
}
