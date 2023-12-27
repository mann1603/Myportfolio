import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./button.css";
import { Link } from "react-router-dom";

const Button = ({ name, link, margin, target }) => {
  return (
    <Link style={{display: "contents",textDecoration: 'none', width: "min-content"}} target={target}  to={link}>
      <button style={{marginTop: margin}} className="custom-button">
        {name}{" "}
        <span className="arrow">
          <GoArrowRight />
        </span>
      </button>
    </Link>
  );
};

export default Button;
