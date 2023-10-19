import Image from "next/image";
import React from "react";

const PageBanner = ({ children }) => {
  return (
    <div className="page-banner pb-0">
      <div className="container">
        <div className="banner-img">{children}</div>
      </div>
    </div>
  );
};

export default PageBanner;
