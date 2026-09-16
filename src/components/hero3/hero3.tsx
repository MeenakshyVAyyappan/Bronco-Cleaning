import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import heroVideo from "../../images/video.mp4";

const HeroThree: React.FC = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="static-hero-s3" ref={ref}>

      <div className="container">

        <div className="wraper">

          <div className="row align-items-center">

            {/* Title */}
            <div className="col-xl-8 col-12">

              <Fade direction="up" triggerOnce>

                <div className="slide-sub-title">

                  <h2>
                    From Messy to Spotless{" "}
                    <span>– We Make It Shine!</span>
                  </h2>

                </div>

              </Fade>

            </div>

            {/* Content */}
            <div className="col-xl-4 col-12">

              <Fade direction="up" delay={100} triggerOnce>

                <div className="slide-description">

                  <p>
                    communication and utilizes cutting edge logistic
                    planning to get your shipment completed on time.
                    itself founded of backgrounds, which simply.
                  </p>

                </div>

              </Fade>

              <Fade direction="up" delay={200} triggerOnce>

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

      {/* Video Background */}

      <div className="video-area">

        <video autoPlay loop muted playsInline>

          <source src={heroVideo} type="video/mp4" />

          Your browser does not support the video.

        </video>

      </div>

    </section>
  );
};

export default HeroThree;
