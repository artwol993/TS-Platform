import React from "react";
// import { Button } from './Button';
import "./heroSection.css";

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Witaj !</h1>
        <p>Potrzebujesz transportu?</p>
        <p>świetnie trafiłeś!</p>
      </div>
    </div>
  );
}

export default HeroSection;
