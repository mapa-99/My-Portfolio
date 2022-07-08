import React from "react";
import cv from "../assets/cv.pdf"
import json from "../data.json";

const About = () => {
  const { front, back, tools } = json;

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 text-center fw-bold fs-1 mb-2" id="heading">
            Let's talk a little{" "}
            <span style={{ color: "orange" }}> About Me</span>
            <hr
              style={{
                width: "30%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          <div className=" px-5 fs-4 pt-5 mt-2" id="text_about">
            My full name is
            <span style={{ color: "green" }}> Manuel Alejandro Paredes</span>,I'm 22 years old and I'm from Cali, Colombia (bandera)... 
            I am a full stack developer,but currently I'm more specialized in front-end
            development...
            <div className="d-flex justify-content-between mt-5">
              <a href={cv} download>
                <button className="btn btn-primary fs-4 fw-bold">
                  Download CV
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/manuel-alejandro-paredes/"
                className=" fw-bold text-decoration-none fs-4 px-3"
                target="true"
              >
                <button className="btnbtn-primary fs-4 fw-bold px-3">
                  My LinkedIn Profile!
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 text-center fw-bold fs-1 mb-2">
            My Skills!
            <hr
              style={{
                width: "30%",
                margin: "auto",
                height: "7%",
              }}
            />
          </div>
          <p>Corregir los porcentajes</p>
          <div className="col-4  px-5 text-center">
            <div className="fw-bold fs-4 mb-2">FRONT-END</div>
            {front?.map((stat) => {
              const { text, width } = stat;
              return (
                <>
                  <div className="mb-3">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${width}` }}
                      >
                        <span className="fw-bold fs-6">{text}</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-4  px-5 text-center">
            <div className="fw-bold fs-4 mb-2">BACK-END</div>
            {back?.map((stat) => {
              const { text, width } = stat;
              return (
                <>
                  <div className="mb-3">
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${width}` }}
                      >
                        <span className="fw-bold fs-6">{text}</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-4 px-5 text-center">
            <div className="fw-bold fs-4 mb-2">UX/UI DESIGN</div>

            {tools?.map((stat) => {
              const { text, width } = stat;
              return (
                <>
                  <div className="mb-3">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated "
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${width}` }}
                      >
                        <span className="fw-bold fs-6">{text}</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="col-6 pt-5" id="stats_about"></div>
        </div>
      </div>
    </>
  );
};

export default About;
