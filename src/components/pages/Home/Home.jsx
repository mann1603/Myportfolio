import React from "react";
import "./homeContent.css";
import Available from "../../Available/Available";
import Button from "../../Button/Button";
import ProjectCard from "../../Project-card/ProjectCard";
import StackCard from "../../StackCard/StackCard";
import Footer from "../../Footer/Footer";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="container">
      <Available />

      <Fade direction={'up'} cascade triggerOnce damping={0.1}>
        <div className="intro">
          <h1>Hey there!</h1>
          <h1>I'm Mann…</h1>
          <p>
            I'm Mann, crafting seamless digital experiences at the forefront of
            frontend innovation.
          </p>
        </div>

        <Button name={"More about me"} link={"/about"} margin={"40px"} />
      </Fade>
      <div className="divider1"></div>

      <Fade triggerOnce cascade>
        <div className="recent-projects">
          <h1>Recent Projects</h1>
          <div className="myProjects">
            <ProjectCard
              name={"IMDB CLONE"}
              category={"IMDB CLONE IN REACT"}
              image={"/Projects photos/imdb.png"}
              CardClass={"small-card"}
              ImgClass={"small-img"}
              link={"https://imdb-clone-lyart.vercel.app/"}
            />
            <ProjectCard
              name={"TESLA"}
              category={"TESLA CLONE IN REACT"}
              image={"/Projects photos/tesla.png"}
              CardClass={"small-card"}
              ImgClass={"small-img"}
              link={"https://github.com/mann1603/tesla-clone"}
            />
            <ProjectCard
              name={"CUSINE DELIGHT"}
              category={"RECIPE WEBSITE IN REACT"}
              image={"/Projects photos/recipe.png"}
              CardClass={"small-card"}
              ImgClass={"small-img"}
              link={"https://recipes-app-blush.vercel.app/"}
            />
          </div>
        </div>

        <Button name={"All Projects"} link={"/projects"} margin={"20px"} />
      </Fade>
      <div className="divider1"></div>

      <Fade direction={'up'} triggerOnce cascade>
        <div className="recent-projects">
          <h1>Stack</h1>
          <div className="myStack">
            <StackCard
              CardWidth={"310px"}
              Title={"HTML 5"}
              Category={"Structure and Content"}
              Image={"/Projects photos/html.png"}
            />
            <StackCard
              CardWidth={"310px"}
              Title={"CSS 3"}
              Category={"Visual Styling"}
              Image={"/Projects photos/css.png"}
            />
            <StackCard
              CardWidth={"310px"}
              Title={"JavaScript"}
              Category={"Functionality"}
              Image={"/Projects photos/JS.svg"}
            />
            <StackCard
              CardWidth={"310px"}
              Title={"React.Js"}
              Category={"Dynamic Development"}
              Image={"/Projects photos/react.png"}
            />
            <StackCard
              CardWidth={"310px"}
              Title={"GitHub"}
              Category={"Version Control"}
              Image={"/Projects photos/github.png"}
            />
          </div>
        </div>

        <Button name={"All Stack"} link={"/stack"} margin={"35px"} />
      </Fade>
      
      <div className="divider1"></div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
