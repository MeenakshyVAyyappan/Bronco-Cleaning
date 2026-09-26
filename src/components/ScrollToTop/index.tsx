import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  if ((window as any).lenis) {
    (window as any).lenis.scrollTo(0, { immediate: true });
  }
};

const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
