import React from "react";
import Image from "../../atoms/image/image";
import Text from "../../atoms/text/text";
import "./style.css";

export default function Categorycard({ lbl }) {
  return (
    <>
      <div className="category-card">
        <Image
          className="category-card-image"
          alt="catg"
          location="categoryimg.jpeg"
        />
        <div className="category-card-label">
          <Text content={lbl} type="category-label" />
        </div>
      </div>
    </>
  );
}
