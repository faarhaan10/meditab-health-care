import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// code from https://reactrouter.com/ documentation

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};