import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]); // Re-run on location change

  return null; // No UI is needed for this component
};

export default ScrollToTopOnRouteChange;
