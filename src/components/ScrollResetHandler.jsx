import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollResetHandler = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scrolled to top!");
  }, [location]);

  return <>{props.children}</>
};

export default ScrollResetHandler;