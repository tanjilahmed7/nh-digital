"use client";

import { useEffect } from "react";
import { useState } from "react";

const StickyHeader = ({ setToggleMenu, children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleRezie = () => {
      const screenSize = window.innerWidth;

      if (screenSize >= 992) {
        setToggleMenu();
        document.body.style.overflow = "auto";
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        return setIsSticky(true);
      }
      setIsSticky(false);
    };

    window.addEventListener("resize", handleRezie);
    window.addEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <header className={isSticky ? "sticky" : ""}>{children}</header>;
};

export default StickyHeader;
