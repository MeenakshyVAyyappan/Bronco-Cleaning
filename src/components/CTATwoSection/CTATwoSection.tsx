import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import phoneIcon from "../../images/phone-call.svg";
import ctaImg from "../../images/bottles-with-cleansers.png";

const CTATwoSection: React.FC = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-cta-section style-2 section-padding pt-0" ref={ref}>

      <div className="container">

        <div className="wpo-cta-wrap">

          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6 col-12">

              <Fade direction="up" triggerOnce>

                <div className="wpo-cta-box">

                  <div className="wpo-section-title-s2">

                    <h2 className="poort-text poort-in-right">
                      Need Professional Cleaning Services in Dubai? Contact Bronco Today!
                    </h2>

                    <p>
                      Our cleaning specialists are on standby to handle your residential, commercial, or deep cleaning requirements with prompt response across Dubai.
                    </p>

                  </div>

                  <a href="tel:+9710541484800" className="call">

                    <i>
                      <img src={phoneIcon} alt="phone" />
                    </i>

                    +971 054 148 4800

                  </a>

                  <small>
                    Have custom requirements? <Link to="/contact">Contact Bronco Team</Link>
                  </small>

                </div>

              </Fade>

            </div>

            {/* Right Image */}
            <div className="col-lg-6">

              <Fade direction="up" delay={200} triggerOnce>

                <div className="wpo-cta-img">

                  <img src={ctaImg} alt="cleaning products" />

                </div>

              </Fade>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTATwoSection;
