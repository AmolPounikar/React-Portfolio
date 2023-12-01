import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/amol-pounikar-376748232/">
          <LinkedInIcon />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <EmailIcon />
        </a>
        <FacebookIcon />
      </div>
      <p> &copy; 2022 Skillhub.com</p>
    </div>
  );
}
