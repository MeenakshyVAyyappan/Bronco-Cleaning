import React from "react";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import icon from "../../images/cleaning-icon-white.svg";

import workIcon1 from "../../images/work/work-icon-1.svg";
import workIcon2 from "../../images/work/work-icon-2.svg";
import workIcon3 from "../../images/work/work-icon-3.svg";

const WorkSection: React.FC = () => {


  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-work-section section-padding" ref={ref}>
      <div className="container">

        {/* Title */}
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title">
              <span>
                <i>
                  <img src={icon} alt="" />
                </i>
                How It Works
              </span>

              <h2 className="poort-text poort-in-right">
                We are committed to delivering Dubai's best cleaning services in 3 simple steps
              </h2>
            </div>
          </div>
        </div>

        {/* Work Steps */}
        <div className="wpo-work-wrap">
          <div className="row">

            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-icon">
                  <img src={workIcon1} alt="" />
                </div>
                <div className="wpo-work-text">
                  <span>1. Book Your Service</span>
                  <h2>01</h2>
                  <div className="line"></div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-icon">
                  <img src={workIcon2} alt="" />
                </div>
                <div className="wpo-work-text">
                  <span>2. Expert Team Arrives</span>
                  <h2>02</h2>
                  <div className="line"></div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-icon">
                  <img src={workIcon3} alt="" />
                </div>
                <div className="wpo-work-text">
                  <span>3. Enjoy Spotless Clean</span>
                  <h2>03</h2>
                  <div className="line"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



    </section>
  );
};

export default WorkSection;