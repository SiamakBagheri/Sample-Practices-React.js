import React from "react";
import FooterItem from "./FooterItem";

const CardFooter = ({ units, name }) => {
  const states = units.map((unit) => (
    <FooterItem state={unit.state} value={unit.value} />
  ));

  return (
    <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
      {states}
    </div>
  );
};

export default CardFooter;
