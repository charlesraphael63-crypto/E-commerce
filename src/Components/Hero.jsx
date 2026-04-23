import React from "react";
import "./Css/Hero.css";

const Hero = () => {
  return (
    <section className="HeroContainer">
      <article className="HeroWrapper">
        <div className="HeroLeft">
          <h1>Make healthy life with fresh Grocery</h1>
          <button className="btn">Shop Now</button>
        </div>
        <div className="HeroRight">
          {/* <img src="../assets/logo.png" alt="logo" /> */}
        </div>
      </article>
    </section>
  );
};

export default Hero;
