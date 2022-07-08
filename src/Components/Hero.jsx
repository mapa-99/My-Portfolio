import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import image from "../assets/profile.jpeg"

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div id="main-hero">
            <div className="col-7 px-5 mx-4 main-hero">
              <div className="fs-3 px-3 text-2">Hello! My name is</div>
              <div className="text-1">Manuel Alejandro Paredes</div>
              <div className="fs-4 px-3 text-2">
                {" "}
                & I am a &nbsp;
                <span
                  className="fs-2 fw-bold text-3"
                  style={{ color: "green" }}
                >
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={["Full Stack Developer"]}
                  />
                </span>
              </div>
            </div>
            <div className="col-4" id="image-hero">
              <img alt="Manuel" className="image-hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
