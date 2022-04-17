import React from "react";
import "./AboutMe.css";
import "./AboutMe1.css";

const AboutMe = () => {
  return (
    <div className="main" id="about">
      <video
        className="background-1"
        src="/videos/video-3.mp4"
        autoPlay
        loop
        muted
      />
      <div className="main__container">
        <div className="main__img--container">
          <div className="main__img--card">
            <i className="fas fa-layer-group"></i>
          </div>
        </div>
        <div className="main__content">
          <h1 className="first-content">What do we do?</h1>
          <h2 className="second-content">We are developing AI technology</h2>
          <p className="text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
