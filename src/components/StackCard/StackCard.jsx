import React from "react";
import "./StackCard.css";
import Fade from "react-reveal/Fade";

const StackCard = ({Title, Category, Image, CardWidth}) => {
  return (
    <Fade bottom cascade>
    <div style={{width: CardWidth}} className="stack-card">
      <div className="card-item">
        <img src={Image} alt={Title} />
        <div className="stack-details">
          <span className="title">{Title}</span>
          <span>{Category}</span>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default StackCard;
