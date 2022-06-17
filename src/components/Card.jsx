import React from "react";
import "../styles/Card/Card.scss";
function Card({ image, title, content }) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={image} alt="card_image" />
      </div>
      <div className="card_title">{title}</div>
      <div className="card_content">{content}</div>
    </div>
  );
}

export default Card;
