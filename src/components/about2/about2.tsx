import React from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";

import AboutImg1 from "../../images/about/about-img-1.jpg";
import AboutImg2 from "../../images/about/about-img-2.jpg";
import Leaf1 from "../../images/about/leaf2.png";
import Leaf2 from "../../images/about/leaf.png";
import Shape from "../../images/about/ab-shape.png";

interface FeatureItem {
  title: string;
  active?: boolean;
}

const features: FeatureItem[] = [
  { title: "Trusted & Vetted Cleaners" },
  { title: "Customizable Cleaning Plans", active: true },
  { title: "Affordable & Transparent Pricing" },
  { title: "Satisfaction Guarantee" },
];

const AboutSectionTwo: React.FC = () => {
  const ClickHandler = () => window.scrollTo(10, 0);

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="about-section style-2" ref={ref}>
      <div className="container">
        <div className="about-wrap">
          <div className="row align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div className="about-left-side-wrap">

                <div className="about-left-image-1">

                  <Zoom triggerOnce>
                    <div className="leaf-shape">
                      <img src={Leaf1} alt="leaf" />
                    </div>
                  </Zoom>

                  <Fade direction="left" triggerOnce>
                    <div className="left-to-right-light">
                      <img src={AboutImg2} alt="about" />
                    </div>
                  </Fade>

                </div>

                <div className="about-left-side">

                  <Fade direction="left" triggerOnce>
                    <div className="about-left-img left-to-right-light">
                      <img src={AboutImg1} alt="about" />
                    </div>
                  </Fade>

                  <Fade direction="right" triggerOnce>
                    <div className="about-left-client-box">
                      <div className="wrap">
                        <h2>40K+</h2>
                        <p>Client’s serviced</p>
                      </div>
                    </div>
                  </Fade>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
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
                        With years of experience in residential and commercial
                        cleaning our mission is to deliver top-quality services.
                      </p>
                    </div>

                    <ul>
                      {features.map((item, index) => (
                        <li
                          key={index}
                          className={item.active ? "active" : ""}
                        >
                          <span>{item.title}</span>
                        </li>
                      ))}
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
                        <img src={Leaf2} alt="leaf" />
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
      <div className="shape-img new_img-animet">
        <img src={Shape} alt="shape" />
      </div>

    </section>
  );
};

export default AboutSectionTwo;