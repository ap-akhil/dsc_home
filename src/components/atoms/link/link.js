import React from "react";
import Text from "../text/text";
import "./style.css";

const Link = ({ className, href = "#", content, type, onClick, ...rest }) => {
  return (
    <a className={className} onClick={onClick} href={href} {...rest}>
      <Text content={content} type={type} />
    </a>
  );
};

export default Link;
