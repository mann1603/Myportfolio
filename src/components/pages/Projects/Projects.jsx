import React, { useEffect } from "react";
import "./Projects.css";
import Available from "../../Available/Available";
import ProjectCard from "../../Project-card/ProjectCard";
import Footer from "../../Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Projects = () => {
  useEffect(() => {
    document.title = "My Projects";
  }, []);

  return (
    <div className="container">
      <Available />
      <div className="project-hero">
        <div className="project-row">
          <h1>Projects:</h1>
          <Fade direction={"up"} triggerOnce cascade>
            <h1>Showcasing</h1>
            <h1>My Journey</h1>
          </Fade>

          <Tabs>
            <TabList>
              <Tab> React Projects</Tab>
              <Tab>WordPress Live Projects</Tab>
            </TabList>

            <TabPanel>
              <Fade triggerOnce cascade>
                <div className="Projects">
                  <ProjectCard
                    name={"CUSINE DELIGHT"}
                    category={"RECIPE WEBSITE IN REACT"}
                    image={"/Projects photos/recipe.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://recipes-app-blush.vercel.app/"}
                  />
                  <ProjectCard
                    name={"CARA"}
                    category={"E-COMMERCE WEBSITE "}
                    image={"/Projects photos/e-com.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://garments-e-commerce.netlify.app/"}
                  />
                  <ProjectCard
                    name={"WEATHER-APP"}
                    category={"WEATHER-APP IN REACT"}
                    image={"/Projects photos/weather.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://weather-app-mann1603.vercel.app/"}
                  />
                  <ProjectCard
                    name={"TESLA"}
                    category={"TESLA CLONE IN REACT"}
                    image={"/Projects photos/tesla.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://github.com/mann1603/tesla-clone"}
                  />
                  <ProjectCard
                    name={"IMDB CLONE"}
                    category={"IMDB CLONE IN REACT"}
                    image={"/Projects photos/imdb.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://imdb-clone-lyart.vercel.app/"}
                  />
                  <ProjectCard
                    name={"HACKVENGERS"}
                    category={"HACKATHON WEBSITE IN REACT"}
                    image={"/Projects photos/hack.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://github.com/mann1603/Hack-vengers"}
                  />
                  <ProjectCard
                    name={"CAFENA"}
                    category={"COFFEE SHOP WEBSITE"}
                    image={"/Projects photos/coffee.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://coffee-products.netlify.app/"}
                  />
                </div>
              </Fade>
            </TabPanel>

            <TabPanel>
            <Fade triggerOnce cascade>
                <div className="Projects">
                  <ProjectCard
                    name={"Career Abroad"}
                    category={" Career Abroad"}
                    image={"/Projects photos/career-abroad.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://www.careerabroad.ca/"}
                  />
                  <ProjectCard
                    name={"Helios Paddle"}
                    category={"Helios Paddle"}
                    image={"/Projects photos/helios.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://helios.theri8click.com/"}
                  />
                  <ProjectCard
                    name={"Techtastic Technologies"}
                    category={"Techtastic Technologies"}
                    image={"/Projects photos/Techtastic.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://techtastic.theri8click.com/"}
                  />
                  <ProjectCard
                    name={"Thematix"}
                    category={"Thematix"}
                    image={"/Projects photos/Thematix.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://thematix25.theri8click.com/"}
                  />
                  <ProjectCard
                    name={"Software Planet"}
                    category={"Software Planet"}
                    image={"/Projects photos/software-planet.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://www.thesoftwareplanet.com/"}
                  />
                  <ProjectCard
                    name={"STUDIO JENNIFER"}
                    category={"STUDIO JENNIFER"}
                    image={"/Projects photos/studiojennifer.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://studiojennifer.in/"}
                  />
                  <ProjectCard
                    name={"SHAKTI SPORTS"}
                    category={"SHAKTI SPORTS CLUB"}
                    image={"/Projects photos/shakti.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://shaktisportsclub.com/"}
                  />
                  <ProjectCard
                    name={"MEHTAB RESTAURANT"}
                    category={"MEHTAB RESTAURANT"}
                    image={"/Projects photos/mehtab.png"}
                    CardClass={"large-card"}
                    ImgClass={"large-img"}
                    link={"https://www.mehtabrestaurant.com/"}
                  />
                </div>
              </Fade>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <div className="divider1"></div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
