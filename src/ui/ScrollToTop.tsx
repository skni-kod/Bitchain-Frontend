import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop({ children }) {
  const location = useLocation();
  const outlet = document.getElementById("outlet");

  useEffect(() => {
    outlet?.scrollTo({
      top: 0,
    });
  }, [location, outlet]);

  return <>{children}</>;
}

export default ScrollToTop;
