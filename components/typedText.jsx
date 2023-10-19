"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedText = ({ strings = [] }) => {
  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: strings,
      loop: true,
      fadeOut: true,
      smartBackspace: true,
      typeSpeed: 50,
      showCursor: false,
      fadeOutDelay: 1000,
    };

    // Initialize Typed.js
    const typed = new Typed(".typed-text", options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="typed-text"></span>;
};

export default TypedText;
