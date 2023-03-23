import React from "react";
import CardFooter from "./CardFooter";
import CardItem from "./CardItem";
import CradImg from "./CradImg";

const Card = ({ hero }) => {
  return (
    <div className="clash-card barbarian">
      <CradImg src={hero.img} name={hero.name} />
      <CardItem type={`clash-card__level clash-card__level--${hero.name}`}>
        {hero.level}
      </CardItem>
      <CardItem type="clash-card__unit-name">{hero.name}</CardItem>
      <CardItem type="clash-card__unit-description">
        {hero.description}
      </CardItem>
      <CardFooter units={hero.units} name={hero.name}   />
    </div>
  );
};

export default Card;
