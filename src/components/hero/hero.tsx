import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import HeroVideo from "../../images/video1.mp4";

const HeroStatic: React.FC = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="video-hero">
      <div className="container-fluid">
        <div className="content-area">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-xl-9 col-lg-8 col-12">
              <Fade direction="up" triggerOnce>
                <div className="slide-title">
                  <h2>Professional Cleaning Solutions Across Dubai</h2>
                </div>
              </Fade>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-xl-3 col-lg-4 col-12">
              <Fade direction="up" delay={100} triggerOnce>
                <div className="slide-text">
                  <p>
                    From deep residential cleaning in villas to reliable office and commercial maintenance, Bronco Cleaning Services is your trusted partner for spotless results in Dubai.
                  </p>

                  <Link
                    onClick={ClickHandler}
                    to="/contact"
                    className="theme-btn"
                  >
                    Book Your Cleaning Service Today
                  </Link>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </div>

      {/* VIDEO BACKGROUND */}
      <div className="video-area">
        <video autoPlay loop muted playsInline>
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>

      {/* BOTTOM SHAPE */}
      <div className="bottom-shape">
        <svg
          width="1920"
          height="367"
          viewBox="0 0 1920 367"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1920" height="367" fill="url(#paint0_linear)" />

          <defs>
            <linearGradient
              id="paint0_linear"
              x1="926"
              y1="367"
              x2="919.066"
              y2="74.2818"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#000102" stopOpacity="0.5" />
              <stop offset="0.511794" stopColor="#000820" stopOpacity="0.3" />
              <stop offset="1" stopColor="#02154C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </section>
  );
};

export default HeroStatic;