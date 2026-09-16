import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import cleaningIcon from "../../images/cleaning-icon.svg";
import phoneIcon from "../../images/phone-call.svg";
import shapeImg from "../../images/cleaning-logo-business-composition.png";

const CTASection: React.FC = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-cta-section section-padding pt-0" ref={ref}>
      <div className="container">
        <div className="wpo-cta-wrap">
          <div className="row">

            {/* LEFT CTA */}
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <Fade direction="up" duration={1200} triggerOnce className="h-100">
                <div className="wpo-cta-box">

                  <div className="wpo-section-title-s2">
                    <span>
                      <i>
                        <img src={cleaningIcon} alt="" />
                      </i>
                      fast response dubai
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Need Professional Cleaning in Dubai? Contact Bronco Today!
                    </h2>

                    <p>
                      Our mobile cleaning teams are available across major Dubai locations with fast response and flexible scheduling.
                    </p>
                  </div>

                  <a href="tel:+9710541484800" className="call">
                    <i>
                      <img src={phoneIcon} alt="" />
                    </i>
                    +971 054 148 4800
                  </a>

                  <small>
                    Have Questions?{" "}
                    <Link to="/contact">
                      Contact Bronco Team Now
                    </Link>
                  </small>

                </div>
              </Fade>
            </div>

            {/* RIGHT CTA */}
            <div className="col-lg-6">
              <Fade direction="up" duration={1400} triggerOnce className="h-100">
                <div className="wpo-cta-box features">

                  <div className="wpo-section-title-s2">

                    <span>
                      <i>
                        <img src={cleaningIcon} alt="" />
                      </i>
                      why bronco
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Professional Cleaning Solutions Across Dubai
                    </h2>

                  </div>

                  <ul>
                    <li>100+ Background-Checked Cleaning Staff</li>
                    <li>23 Major Dubai Locations Covered</li>
                    <li>Eco-Friendly & Safe Disinfectants</li>
                    <li>Daily, Weekly & Monthly Customized Plans</li>
                  </ul>

                  <div className="r-shape">
                    <img src={shapeImg} alt="" />
                  </div>

                </div>
              </Fade>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
