import React,{useEffect} from "react";
import "./about.css";
import Available from "../../Available/Available";
import Button from "../../Button/Button";
import Involvement from "../../Involvement/Involvement";
import Footer from "../../Footer/Footer";
import { Fade } from "react-awesome-reveal";

const About = () => {
  useEffect(() => {
    document.title = 'About Me';
  }, []);

  return (
    <div className="container">
      <Available />
      <div className="about-hero">
        <Fade triggerOnce direction={'up'} cascade>
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
        <Fade direction={'up'} triggerOnce cascade>
          <img src="/Projects photos/myimg.jpg" alt="" />
        </Fade>
      </div>
      <div className="divider1"></div>

      <Fade direction={'up'} triggerOnce cascade>
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

      <Fade triggerOnce cascade>
        <div className="involvements">
          <div className="card">
            <h2>EXPERIENCE</h2>
            <div className="involve-container">
              <Involvement
                Designation={"Software Engineer Intern"}
                OrgName={" Garima System Solutions PVT LTD"}
                Period={"Feb 2024- April 2024"}
                Description={
                  "Developed dynamic, user-interactive frontend dashboards using React.js, improving data visualization and user  engagement. Implemented and developed robust APIs, enhancing project functionality and facilitating seamless data integration.Streamlined the frontend development workflow, resulting in a 20% increase in efficiency and a more intuitive user experience. Collaborated with cross-functional teams to ensure alignment on project goals and technical requirements."
                }
              />
              <Involvement
                Designation={"Freelance WordPress Developer"}
                OrgName={" theri8click- Digital Marketing Agency"}
                Period={"2021-22"}
                Description={
                  "Develop custom WordPress Websites, ensuring functionality, user-friendliness, and interactivity for diverse client needs.  Optimize websites for speed and performance, enhancing user experience and search engine rankings. Integrate various plugins and tools to extend website capabilities and streamline operations. Provide ongoing maintenance and support, ensuring websites remain up-to-date and secure"
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
