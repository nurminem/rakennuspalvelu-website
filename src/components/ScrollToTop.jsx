import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Tämä varmistaa, ettei animaatiota tule
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
