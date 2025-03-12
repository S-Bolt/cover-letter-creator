"use-client";

import { useEffect, useState } from "react";
//To detect mobile or desktop in order to generate specific designs.
export default function useWindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
