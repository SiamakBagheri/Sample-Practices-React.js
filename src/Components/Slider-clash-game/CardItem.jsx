import React from "react";

const CardItem = ({ type, children }) => {
  return <div className={type}>{children}</div>;
};

export default CardItem;
