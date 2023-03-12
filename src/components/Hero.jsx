import React from "react";
import plan from "../assets/plan.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="main">
        <div className="div1">
          <span className="span1">Hello there!👋</span>
          <span className="span2">
            We showcase our team's expertise, creativity, and dedication to
            crafting custom solutions that help our clients achieve their online
            goals.
          </span>
        </div>
        <div className="div2">
          <img src={plan} alt="Image from behance.net" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
