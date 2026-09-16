import React from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";

import aboutImg from "../../images/about/about.png";
import leaf1 from "../../images/about/leaf2.png";
import leaf2 from "../../images/about/leaf.png";
import shape from "../../images/about/ab-shape.png";

const AboutSectionThree: React.FC = () => {

  const ClickHandler = () => window.scrollTo(10, 0);

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="about-section style-3 section-padding" ref={ref}>

      <div className="container">

        <div className="about-wrap">

          <div className="row align-items-center">

            {/* Left Image */}
            <div className="col-lg-6">

              <div className="about-left-side-wrap">

                <div className="about-left-side">

                  <Fade direction="left" triggerOnce>

                    <div className="about-left-img left-to-right-light">

                      <img src={aboutImg} alt="about" />

                      <Zoom triggerOnce>

                        <div className="leaf-shape">
                          <img src={leaf1} alt="" />
                        </div>

                      </Zoom>

                    </div>

                  </Fade>

                  <div className="about-left-client-box">

                    <div className="wrap">

                      <h2>
                        <span>
                          <CountUp end={40} duration={2} enableScrollSpy />
                        </span>
                        K+
                      </h2>

                      <p>Client’s serviced</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Right Content */}
            <div className="col-lg-6">

              <Fade direction="right" triggerOnce>

                <div className="about-right-content">

                  <div className="wpo-choose-right-side">

                    <div className="wpo-section-title-s2">

                      <h2 className="poort-text poort-in-right">
                        From Messy to Spotless – We Make It Shine!
                      </h2>

                      <p>
                        At SparkleClean, we believe a clean space is a happy space.
                        With years of experience in residential and commercial cleaning
                        our mission is to deliver top-quality services tha health....
                      </p>

                    </div>

                    <ul>
                      <li><span>Trusted & Vetted Cleaners</span></li>
                      <li className="active"><span>Customizable Cleaning Plans</span></li>
                      <li><span>Affordable & Transparent Pricing</span></li>
                      <li><span>Satisfaction Guarantee</span></li>
                    </ul>

                    <Link
                      onClick={ClickHandler}
                      to="/appoinment"
                      className="theme-btn"
                    >
                      Book Now
                    </Link>

                    <Zoom triggerOnce>

                      <div className="leaf-shape2">
                        <img src={leaf2} alt="" />
                      </div>

                    </Zoom>

                  </div>

                </div>

              </Fade>

            </div>

          </div>

        </div>

      </div>

      {/* Background Shape */}
      <div className="shape-img new_img-animet" data-speed="100">
        <img src={shape} alt="" />
      </div>

    </section>
  );
};

export default AboutSectionThree;
