import { useEffect, useState } from "react";

interface Breakpoint {
  maxWidth: number;
  slidesToShow: number;
}

// react-slick's own `responsive` breakpoints only re-evaluate on a
// matchMedia "change" event, so they never apply on initial render if the
// page already loads at that width (e.g. opening the site on a phone).
// This hook computes slidesToShow from the real viewport width instead,
// correctly on first render and on every resize afterward.
const resolveSlidesToShow = (breakpoints: Breakpoint[], defaultSlidesToShow: number) => {
  if (typeof window === "undefined") return defaultSlidesToShow;
  const width = window.innerWidth;
  const sorted = [...breakpoints].sort((a, b) => a.maxWidth - b.maxWidth);
  const match = sorted.find((bp) => width <= bp.maxWidth);
  return match ? match.slidesToShow : defaultSlidesToShow;
};

const useResponsiveSlidesToShow = (breakpoints: Breakpoint[], defaultSlidesToShow: number) => {
  const [slidesToShow, setSlidesToShow] = useState(() =>
    resolveSlidesToShow(breakpoints, defaultSlidesToShow)
  );

  useEffect(() => {
    const handleResize = () => setSlidesToShow(resolveSlidesToShow(breakpoints, defaultSlidesToShow));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return slidesToShow;
};

export default useResponsiveSlidesToShow;
