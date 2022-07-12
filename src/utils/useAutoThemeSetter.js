import { useEffect } from "react";

export default function useAutoThemeSetter(theme) {
  useEffect(() => {
    const html = document.querySelector("html");

    localStorage.setItem("theme", theme);
    if (theme) {
      html.className = theme;
    }
  }, [theme]);
}
