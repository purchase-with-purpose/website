import { useEffect, useState, useRef } from "react";

const calcInitial = () => {
  if (typeof window === "undefined") return 1200;
  return window.innerWidth;
};

export function useViewportWidth(debounceMs: number = 2000) {
  const [width, setWidth] = useState(() => calcInitial());
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setWidth(window.innerWidth);
      }, debounceMs);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [debounceMs]);

  return width;
}
