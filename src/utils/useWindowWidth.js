import { useState, useEffect } from "react";

export default function useWindowWidth(width) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize);
    }

  }, [])

  return width > windowWidth
}