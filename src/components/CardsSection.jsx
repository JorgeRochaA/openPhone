import React from "react";
//components
import Card from "./Card";
//styles
import "../styles/CardsSection/CardsSection.scss";
//data
import cardsData from "../data/cardsData.json";
function CardsSection() {
  return (
    <div className="cards_section">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
}

export default CardsSection;
