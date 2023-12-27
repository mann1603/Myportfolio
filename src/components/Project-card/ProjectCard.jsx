import React, { useState } from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ name, image, category, CardClass, ImgClass, link }) => {
  // const { projectId } = useParams();

  const [hover, setHover] = useState(false);

  return (
    <Fade triggerOnce cascade>
    <div className="project-div">
      <Link to={link} target="_blank">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={CardClass}
        >
          <img src={image} alt={name} className={ImgClass} />
        </div>
      </Link>
      <div className="project-details">
        <h3>{name}</h3>
        {hover ? 
        (<marquee scrollamount='13' loop='infinite'><p>{category} • {category} • {category} • {category} • {category}</p></marquee>) :
        <p>{category}</p> 
      }
      </div>
    </div>
    </Fade>
  );
};

export default ProjectCard;
