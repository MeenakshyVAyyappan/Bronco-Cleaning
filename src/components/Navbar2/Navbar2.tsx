import React, { useEffect, useState } from "react";
import Header2 from "../header2";

interface NavbarProps {
  hclass?: string;
}

const Navbar2: React.FC<NavbarProps> = () => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const className =
    scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={className}>
      <Header2/>
    </div>
  );
};

export default Navbar2;