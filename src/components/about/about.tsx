import React from "react";
import { Link } from "react-router-dom";

import cleaningIcon from "../../images/cleaning-icon.svg";
import aboutImg1 from "../../images/index/indexabout1.png";
import aboutImg2 from "../../images/index/indexabout2.png";
import leaf from "../../images/about/leaf.png";
import shape from "../../images/about/ab-shape.png";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section pb-0" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="about-wrap">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div className="about-left-side-wrap">

                <div className="about-title">
                  <div className="sub-title">
                    <span>
                      <i>
                        <img src={cleaningIcon} alt="icon" />
                      </i>
                      about Bronco Cleaning
                    </span>
                  </div>
                </div>

                <div className="about-left-side">

                  <div className="about-left-img">
                    <img src={aboutImg1} alt="about Bronco" />
                  </div>

                  <div className="about-left-client-box">
                    <div className="wrap">
                      <h2>
                        <span className="odometer">5</span>K+
                      </h2>
                      <p>Dubai Clients Serviced</p>
                    </div>
                  </div>

                </div>

                <p>
                  At BCS Cleaning Services, we deliver reliable and high-quality cleaning solutions across Dubai. Specializing in residential, commercial, industrial, and deep cleaning services, our trained staff ensures every space is spotless, sanitized, and welcoming.
                </p>

                <Link to="/contact" className="theme-btn">
                  Book Your Service Today
                </Link>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <div className="about-right-side">

                <div className="about-title">
                  <div className="main-title">
                    <h2>
                      We believe that clean, hygienic spaces inspire happier living and productive workplaces across Dubai...
                    </h2>
                  </div>
                </div>

                <div className="about-right-img">
                  <img src={aboutImg2} alt="office cleaning Dubai" />

                  <div className="content-box">
                    <span>Commercial & Office Cleaning</span>
                  </div>
                </div>

                <div className="leaf-shape">
                  <img src={leaf} alt="leaf" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="shape-img new_img-animet">
        <img src={shape} alt="shape" />
      </div>
    </section>
  );
};

export default AboutSection;
