import React from "react";
import "./about.css";
import Available from "../../Available/Available";
import Button from "../../Button/Button";
import Involvement from "../../Involvement/Involvement";
import Footer from "../../Footer/Footer";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="container">
      <Available />
      <div className="about-hero">
        <Fade bottom cascade>
          <div className="about-intro">
            <h1>About Me:</h1>
            <h1>Crafting Digital</h1>
            <h1>Excellence</h1>
            <p>
              I'm a passionate web designer dedicated to crafting visually
              stunning and user-friendly websites. I thrive on transforming
              ideas into captivating online experiences while staying at the
              forefront of design trends.
            </p>
          </div>
        </Fade>
        <Fade bottom cascade>
          <img src="/Projects photos/myimg.jpg" alt="" />
        </Fade>
      </div>
      <div className="divider1"></div>

      <Fade bottom cascade>
        <div className="edu">
          <div className="education">
            <h2>Education</h2>
            <p>
              I am pursuing my Bachelor's degree in Computer Engineering from
              Sardar Vallabhbhai Patel Institute Of Technology, where I honed my
              skills in design principles, user experience, and front-end
              development. My education provided a solid foundation for my
              career in web development.
            </p>
            <Button
              name={"My Resume"}
              link={
                "https://drive.google.com/file/d/1YXsHf0DjXfumXbL0kpxiJiwpIOCHsC0s/view?usp=sharing"
              }
              target={"_blank"}
              margin={"40px"}
            />
          </div>
          <div className="stack-info">
            <h2>Stack</h2>
            <p>
              My technical toolkit includes proficiency in HTML, CSS,
              JavaScript, and various development frameworks like React.js . I'm
              also well-versed in responsive web design, ensuring that websites
              I create look and function flawlessly across all devices.
            </p>
            <Button name={"My Stack"} link={"/stack"} margin={"40px"} />
          </div>
        </div>
      </Fade>

      <div className="divider1"></div>

      <Fade bottom cascade>
        <div className="involvements">
          <div className="card">
            <h2>Involvements</h2>
            <div className="involve-container">
              <Involvement
                Designation={"Organisation Team Member"}
                OrgName={"SVIT, Vasad • HackSvit"}
                Period={"2021-22"}
                Description={
                  "Served as a team member in the national-level Hackathon named HackSvit hosted at SVIT College, Vasad."
                }
              />
              <Involvement
                Designation={"Event Volunteer"}
                OrgName={"SVIT, Vasad • Prakarsh '22"}
                Period={"2021-22"}
                Description={
                  "Contributed as a Volunteer, coordinating non-technical events during the national-level technical symposium Prakarsh'22 held at SVIT College, Vasad."
                }
              />
              <Involvement
                Designation={"Event Head"}
                OrgName={"SVIT, Vasad • Prakarsh'23"}
                Period={"2022-23"}
                Description={
                  "Led as an Event Head, organizing an LAN Gaming Event during the national-level technical symposium Prakarsh'23 at SVIT College, Vasad."
                }
              />
            </div>
          </div>
        </div>
      </Fade>

      <div className="divider1"></div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
