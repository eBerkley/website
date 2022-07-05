import { useEffect, useState } from "react";

// colors, appearence, etc subject to change
export default function ThemeButton() {
  // const [ expanded, setExpanded ] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const r = document.querySelector(':root')
    if (darkMode) {
      r.style.setProperty('--primary', 'rgb(30, 30, 30)')
      r.style.setProperty('--secondary', 'rgb(255, 255, 255)')
    } else {
      r.style.setProperty("--primary", "rgb(255, 255, 255)");
      r.style.setProperty("--secondary", "rgb(0, 0, 0)");
    }
    
  }, [darkMode])

  return (
    <button className="NavBar__ThemeButton"onClick={() => setDarkMode(current => !current)} >Toggle Light Mode</button>
  )
}