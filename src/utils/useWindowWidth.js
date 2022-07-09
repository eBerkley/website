import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [device, setDevice] = useState();

  useEffect(() => {
    const onResize = () => {
      const newDevice = getDevice(window.innerWidth);
      if (newDevice !== device) {
        setDevice(newDevice);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [device]);

  const getDevice = (width) => {
    if (width > 1400) return "monitor";
    if (width > 800) return "tablet";
    return "mobile";
  };

  return device;
}
