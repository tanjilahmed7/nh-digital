"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const MagneticButton = ({ className = "", children }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnetButton = magnetRef.current;
    const strength = 50;

    function moveMagnet(event) {
      const bounding = magnetButton.getBoundingClientRect();

      gsap.to(magnetButton, {
        duration: 1,
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength,
        ease: "power4.out",
      });
    }

    function removeMagnet() {
      gsap.to(magnetButton, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "power4.out",
      });
    }

    if (magnetButton) {
      magnetButton.addEventListener("mouseover", moveMagnet);
      magnetButton.addEventListener("mouseout", removeMagnet);
    }

    return () => {
      if (magnetButton) {
        magnetButton.removeEventListener("mouseover", moveMagnet);
        magnetButton.removeEventListener("mouseout", removeMagnet);
      }
    };
  }, []);

  return (
    <div ref={magnetRef} className={`magnetic ${className}`}>
      {children}
    </div>
  );
};

export default MagneticButton;
