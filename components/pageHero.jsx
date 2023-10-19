import React from "react";

const PageHero = ({ className = "", children }) => {
  return (
    <section className={`page-hero hero section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default PageHero;
