import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default Wrapper;
