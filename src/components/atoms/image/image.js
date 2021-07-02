import React from "react";
import "./style.css";

const Image = ({ location, alt, width, height, className }) => {
  return (
    <img
      src={`/images/${location}`}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
