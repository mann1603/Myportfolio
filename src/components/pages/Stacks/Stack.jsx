import React,{useEffect} from "react";
import "./stackContent.css";
import Available from "../../Available/Available";
import StackCard from "../../StackCard/StackCard";
import Footer from "../../Footer/Footer";
import { Fade } from "react-awesome-reveal";

const Stack = () => {
  useEffect(() => {
    document.title = 'My Stack';
  }, []);


  return (
    <div className="container">
      <Available />
      <Fade direction={"up"} triggerOnce cascade>
        <div className="intro">
          <h1>My Skill Stack: </h1>
          <h1>Crafting Digital</h1>
          <h1>Solutions</h1>
        </div>
      </Fade>

      <div className="stack-grid">
        <StackCard
          Title={"HTML 5"}
          Category={"Structure and Content"}
          Image={"/Projects photos/html.png"}
        />
        <StackCard
          Title={"CSS 3"}
          Category={"Visual Styling"}
          Image={"/Projects photos/css.png"}
        />
        <StackCard
          Title={"JavaScript"}
          Category={"Functionality"}
          Image={"/Projects photos/JS.svg"}
        />
        <StackCard
          Title={"React.Js"}
          Category={"Dynamic Development"}
          Image={"/Projects photos/react.png"}
        />
        <StackCard
          Title={"GitHub"}
          Category={"Version Control"}
          Image={"/Projects photos/github.png"}
        />
        <StackCard
          Title={"Tailwind CSS"}
          Category={"CSS Framework"}
          Image={"/Projects photos/tailwind.jpg"}
        />
        <StackCard
          Title={"Bootstrap"}
          Category={"CSS Frameworkl"}
          Image={"/Projects photos/bootstrap.jpg"}
        />
        <StackCard
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
