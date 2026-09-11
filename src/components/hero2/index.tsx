import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import HeroImg from "../../images/slider/hero-img.png";
import Sparkle from "../../images/slider/sparkle-light.svg";

const HeroTwo: React.FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="static-hero-s2">
      <div className="container">
        <div className="wraper">
          <div className="row align-items-center">

            <div className="col-lg-7 col-12">

              <Fade direction="up" delay={300} triggerOnce>
                <div className="slide-sub-title">
                  <h2>
                    We Bring <br />
                    the{" "}
                    <span>
                      <i>
                        <img src={Sparkle} alt="sparkle" />
                      </i>
                      Sparkle
                    </span>{" "}
                    Back!
                  </h2>
                </div>
              </Fade>

              <Fade direction="up" delay={500} triggerOnce>
                <div className="slide-description">
                  <p>
                    communication and utilizes cutting edge logistic
                    planning to get your shipment completed on time.
                    itself founded of backgrounds, which simply.
                  </p>
                </div>
              </Fade>

              <Fade direction="up" delay={700} triggerOnce>
                <div className="slide-btns">
                  <Link
                    onClick={ClickHandler}
                    to="/appoinment"
                    className="theme-btn-s2"
                  >
                    Book Now
                  </Link>

                  <Link
                    onClick={ClickHandler}
                    to="/about"
                    className="theme-btn-s3"
                  >
                    <span
                      className="rolling-text"
                      data-text="About us"
                    >
                      About us
                    </span>
                  </Link>
                </div>
              </Fade>

            </div>

          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-img">
        <img src={HeroImg} alt="hero" />
      </div>

      {/* Left Shape */}
      <div className="left-shape"></div>

    </section>
  );
};

export default HeroTwo;