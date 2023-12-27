import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if using routing
import "./navbar.css";
import { GoHome } from "react-icons/go";
import { PiUserLight } from "react-icons/pi";
import { PiSuitcaseLight } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  // Sample user information
  const userProfile = {
    name: "Mann Kawatkar",
    designation: "Front-end Developer",
    profilePhoto: "/Projects photos/myimg.jpg", // Replace with your image path
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      {/* Top content for user profile */}
      <div className="top-content">
        <div className="profile">
          <Link to={"/"}>
            <img src={userProfile.profilePhoto} alt="Profile" />
            <div className="info">
              <h3>{userProfile.name}</h3>
              <p>{userProfile.designation}</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="divider"></div>

      {/* Bottom content for navigation links */}
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

      <div className="nav-footer">
        {/* <p>&copy; Mann Kawatkar {new Date().getFullYear()}</p> */}
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
  );
};

export default Navbar;
