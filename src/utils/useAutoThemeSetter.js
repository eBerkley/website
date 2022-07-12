import { useEffect } from "react";

export default function useAutoThemeSetter(theme) {
  useEffect(() => {
    const r = document.querySelector(":root");
    localStorage.setItem("theme", theme);
    if (theme === "Dark") {
      r.style.setProperty("--primary", "hsl(0, 0%, 10%)");
      r.style.setProperty("--secondary", "hsl(0, 0%, 100%)");
    } else if (theme === "Light") {
      r.style.setProperty("--primary", "hsl(0, 0%, 100%)");
      r.style.setProperty("--secondary", "hsl(0, 0%, 0%)");
    } else if (theme === "HighContrast") {
      r.style.setProperty("--primary", "hsl(0, 0%, 0%)");
      r.style.setProperty("--secondary", "hsl(0, 0%, 100%)");
    }
  }, [theme]);
}
