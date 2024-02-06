import React from "react";
import "./hero.css";
import hero_img from "../Assets/hero-img.jpg";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="left-hero">
        <h1>DR SNAP CHAT</h1>
        <p>سناب شات كل ما تتمناه وأكثر</p>
        <button
          className="btn"
          onClick={() => {
            window.location.href = `https://wa.me/966575770510?text=البدء بتوثيق الحساب على السناب شات`;
          }}
        >
          ابدء الان
        </button>
      </div>
      <div className="right-hero">
        <img src={hero_img} alt="snapchat img" />
      </div>
    </div>
  );
};

export default Hero;
