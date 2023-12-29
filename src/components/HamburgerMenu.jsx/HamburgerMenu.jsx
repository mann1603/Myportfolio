import React, { useState, useEffect} from "react";
import "./hamburgerMenu.css";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { VscClose } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { PiUserLight } from "react-icons/pi";
import { PiSuitcaseLight } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const HamburgerMenu = () => {
  const userProfile = {
    name: "Mann Kawatkar",
    designation: "Front-end Developer",
    profilePhoto: "/Projects photos/myimg.jpg", // Replace with your image path
  };

  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={!visible ? 'hidden' : 'hamburger-menu'}>
      <div className="top-content">
        <div className="profile">
          <Link to={"/"}>
            <img src={userProfile.profilePhoto} alt="Profile" />
            <div className="info">
              <h3>{userProfile.name}</h3>
              <p>{userProfile.designation}</p>
            </div>
          </Link>
          <div className="menu-icon">
            {!isOpen && <TbMenu onClick={toggleMenu} />}
            {isOpen && <VscClose onClick={toggleMenu} />}
          </div>
        </div>
      </div>

      {isOpen && <div className="divider"></div>}

      {isOpen && (
        <div className="show-content">
          <Fade>
            <div className="bottom-content">
              <nav>
                <ul>
                  <li>
                    <GoHome />
                    <Link
                      to="/"
                      onClick={() => handleClick("home")}
                      className={activeLink === "home" ? "active" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <PiUserLight />
                    <Link
                      to="/about"
                      onClick={() => handleClick("about")}
                      className={activeLink === "about" ? "active" : ""}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <PiSuitcaseLight />
                    <Link
                      to="/projects"
                      onClick={() => handleClick("projects")}
                      className={activeLink === "projects" ? "active" : ""}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <GoStack />
                    <Link
                      to="/stack"
                      onClick={() => handleClick("stack")}
                      className={activeLink === "stack" ? "active" : ""}
                    >
                      Stack
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Fade>
          <div className="nav-footer">
            <div className="footer-img">
              <Link to={"https://github.com/mann1603"} target="_blank">
                <VscGithubAlt />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/mann-kawatkar-44111a256/"}
                target="_blank"
              >
                <PiLinkedinLogo />
              </Link>
              <Link to={"https://twitter.com/mann_1603"} target="_blank">
                <RiTwitterXLine />
              </Link>
              <Link
                to={"https://www.instagram.com/mann.1603/?next=%2F"}
                target="_blank"
              >
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
