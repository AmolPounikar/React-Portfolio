import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Amol</h2>
        <div className="prompt">
          <p>
            A MERN Stack Developer with a Passion for Learning Coding and Logic
            Building
          </p>
          <a href="https://www.linkedin.com/in/amol-pounikar-376748232/">
            <LinkedInIcon />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <EmailIcon />
          </a>
          <a href="https://github.com/">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              React.JS, React-Redux, JavaScript, HTML, CSS, GSAP, SCSS,
              React-Bootstrap, Bootstrap, MaterialUI, Yarn, Socket.io,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node.JS, Express.JS, MongoDB, Firebase</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
