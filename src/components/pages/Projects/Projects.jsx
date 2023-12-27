import React from "react";
import "./Projects.css";
import Available from "../../Available/Available";
import ProjectCard from "../../Project-card/ProjectCard";
import Footer from "../../Footer/Footer";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="container">
      <Available />
      <div className="project-hero">
        <Fade bottom cascade>
          <div className="project-row">
            <h1>Projects:</h1>
            <h1>Showcasing</h1>
            <h1>My Journey</h1>

            <div className="Projects">
              <ProjectCard
                name={"IMDB CLONE"}
                category={"IMDB CLONE IN REACT"}
                image={"/projects photos/imdb.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://imdb-clone-lyart.vercel.app/"}
              />
              <ProjectCard
                name={"CUSINE DELIGHT"}
                category={"RECIPE WEBSITE IN REACT"}
                image={"/projects photos/recipe.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://recipes-app-blush.vercel.app/"}
              />
              <ProjectCard
                name={"CARA"}
                category={"E-COMMERCE WEBSITE "}
                image={"/projects photos/e-com.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://garments-e-commerce.netlify.app/"}
              />
              <ProjectCard
                name={"WEATHER-APP"}
                category={"WEATHER-APP IN REACT"}
                image={"/projects photos/weather.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://weather-app-mann1603.vercel.app/"}
              />
              <ProjectCard
                name={"TESLA"}
                category={"TESLA CLONE IN REACT"}
                image={"/projects photos/tesla.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://github.com/mann1603/tesla-clone"}
              />
              <ProjectCard
                name={"HACKVENGERS"}
                category={"HACKATHON WEBSITE IN REACT"}
                image={"/projects photos/hack.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://github.com/mann1603/Hack-vengers"}
              />
              <ProjectCard
                name={"CAFENA"}
                category={"COFFEE SHOP WEBSITE"}
                image={"/projects photos/coffee.png"}
                CardClass={"large-card"}
                ImgClass={"large-img"}
                link={"https://coffee-products.netlify.app/"}
              />
            </div>
          </div>
        </Fade>
      </div>

      <div className="divider1"></div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
