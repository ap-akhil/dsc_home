import React from "react";
import Link from "../../atoms/link/link";

export default function Navlinks({ navlinks }) {
  return (
    <div className="main-nav-links">
      {navlinks.map((item, index) => {
        return (
          <Link
            key={index}
            className="link-nav"
            href="#"
            content={item}
            type="nav"
          />
        );
      })}
    </div>
  );
}
