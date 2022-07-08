import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize);
    }

  }, [])
  if (windowWidth > 1400) return "monitor"
  if (windowWidth > 800) return "tablet"
  return "mobile"
}