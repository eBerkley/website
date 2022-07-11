import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const getDevice = (width) => {
    if (width > 1400) return "monitor";
    if (width > 800) return "tablet";
    return "mobile";
  };
  const [device, setDevice] = useState(getDevice(window.innerWidth));

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

  return device;
}
