import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ breadcrumbs = [] }) => {
  return (
    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-duration="400">
      <ol className="breadcrumb">
        {breadcrumbs.map((item, index, arr) =>
          index !== arr.length - 1 ? (
            <li key={item.label} className="breadcrumb-item">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ) : (
            <li
              key={item.label}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {item.label}
            </li>
          )
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
