import React from "react";
import { Button } from "react-bootstrap";
import introImage from "../images/image-intro-desktop.jpg";
function Header() {
  return (
    <div className="header">
      <img
        className="bg bgleft"
        src={"bg-pattern-intro-left-desktop.svg"}
      ></img>
      <div className="header-left">
        <h1 className="header-first">Humanizing your insurance.</h1>
        <p className="header-second">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>

        <Button variant="outline-primary" className="button">
          View Plans
        </Button>
      </div>
      <img
        className="right bgright"
        src={"bg-pattern-intro-right-desktop.svg"}
      ></img>
      <div className="header-right">
        <img src={introImage} alt="intro" className="ivan-from-peru" />
      </div>
    </div>
  );
}

export default Header;
