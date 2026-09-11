import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import chooseImg from "../../images/choose/choose.jpg";
import radiusShape from "../../images/choose/radius-shape.svg";
import cleaningIcon from "../../images/cleaning-icon.svg";

const ChooseSection: React.FC = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-choose-section section-padding pt-0" ref={ref}>
      <div className="container">
        <div className="wpo-choose-wrap">
          <div className="row">

            {/* LEFT */}
            <div className="col-lg-6">
              <Fade direction="left" duration={1200} triggerOnce>
                <div className="wpo-choose-left-side">

                  <div className="wpo-choose-left-img left-to-right-light">
                    <img src={chooseImg} alt="Why Choose Bronco" />
                  </div>

                  <div className="wpo-choose-left-box">
                    <div className="wrap">
                      <div className="inside">
                        <h2>
                          <span className="odometer">100</span>+
                        </h2>
                        <p>Trained Cleaners</p>
                      </div>
                    </div>

                    <div className="radius-shape">
                      <img src={radiusShape} alt="shape" />
                    </div>
                  </div>

                </div>
              </Fade>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <Fade direction="right" duration={1200} triggerOnce>
                <div className="wpo-choose-right-side">

                  <div className="wpo-section-title-s2">

                    <span>
                      <i>
                        <img src={cleaningIcon} alt="icon" />
                      </i>
                      why choose Bronco
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Your Space Deserves the Best – Why Dubai Trusts Bronco
                    </h2>

                    <p>
                      Our team of professionally trained cleaners takes immense pride in every detail. From routine housekeeping to specialized industrial deep cleans across Dubai, we deliver excellence every single time.
                    </p>

                  </div>

                  <ul>
                    <li><span>Trained & Background-Checked Cleaners</span></li>
                    <li className="active"><span>Flexible Daily, Weekly & Monthly Packages</span></li>
                    <li><span>Affordable & Transparent Pricing in AED</span></li>
                    <li><span>100% Customer Satisfaction Guarantee</span></li>
                  </ul>

                </div>
              </Fade>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;