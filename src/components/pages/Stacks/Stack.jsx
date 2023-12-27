import React from "react";
import "./stackContent.css";
import Available from "../../Available/Available";
import StackCard from "../../StackCard/StackCard";
import Footer from "../../Footer/Footer";
import Fade from "react-reveal/Fade";

const Stack = () => {
  return (
    <div className="container">
      <Available />
      <Fade bottom cascade>
        <div className="intro">
          <h1>My Skill Stack: </h1>
          <h1>Crafting Digital</h1>
          <h1>Solutions</h1>
        </div>
      </Fade>

      <div className="stack-grid">
        <StackCard
          CardWidth={"500px"}
          Title={"HTML 5"}
          Category={"Structure and Content"}
          Image={"/Projects photos/html.png"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"CSS 3"}
          Category={"Visual Styling"}
          Image={"/Projects photos/css.png"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"JavaScript"}
          Category={"Functionality"}
          Image={"/Projects photos/JS.svg"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"React.Js"}
          Category={"Dynamic Development"}
          Image={"/Projects photos/react.png"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"GitHub"}
          Category={"Version Control"}
          Image={"/Projects photos/github.png"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"Tailwind CSS"}
          Category={"CSS Framework"}
          Image={"/Projects photos/tailwind.jpg"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"Bootstrap"}
          Category={"CSS Frameworkl"}
          Image={"/Projects photos/bootstrap.jpg"}
        />
        <StackCard
          CardWidth={"500px"}
          Title={"Figma"}
          Category={"Collabarative Design"}
          Image={"/Projects photos/figma.jpg"}
        />
      </div>

      <div className="divider1"></div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Stack;
