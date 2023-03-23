import React from "react";

const CradImg = ({ src, name }) => {
  return (
    <div className={`clash-card__image clash-card__image--${name}`}>
      <img src={src} alt={name} className="img-fluid" />
    </div>
  );
};

export default CradImg;
