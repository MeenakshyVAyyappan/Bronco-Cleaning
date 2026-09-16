import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import beforeImg from "../../images/before-after/before-img.jpg";
import afterImg from "../../images/before-after/after-img.jpg";
import cleaningIcon from "../../images/cleaning-icon.svg";

interface TransformProps {
  tclass?: string;
}
const TransformingSection: React.FC<TransformProps> = ({ tclass }) => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    // Default position
    container.style.setProperty("--position", "50%");

    const handleInput = () => {
      container.style.setProperty("--position", `${slider.value}%`);
    };

    slider.addEventListener("input", handleInput);

    return () => {
      slider.removeEventListener("input", handleInput);
    };
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className={`transforming-section section-padding ${tclass || ""}`} ref={ref}>
      <div className="container">
        <div className="transforming-wrap">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <Fade direction="left" duration={1200} triggerOnce>
                <div className="wpo-transforming-left-side">

                  <div className="wpo-transforming-left-img" ref={containerRef}>

                    <div className="transforming-image-container">
                      <img
                        className="transforming-image-before slider-image"
                        src={afterImg}
                        alt="after"
                      />

                      <img
                        className="transforming-image-after slider-image"
                        src={beforeImg}
                        alt="before"
                      />
                    </div>

                    <input
                      ref={sliderRef}
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      aria-label="Percentage of before photo shown"
                      className="slider"
                    />

                    <div
                      className="transforming-slider-line"
                      aria-hidden="true"
                    ></div>

                    <div
                      className="transforming-slider-button"
                      aria-hidden="true"
                    >
                      Drag
                    </div>

                  </div>

                  <div className="after">
                    <span>after</span>
                  </div>

                  <div className="before">
                    <span>before</span>
                  </div>

                </div>
              </Fade>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <Fade direction="right" duration={1200} triggerOnce>
                <div className="wpo-transforming-right-side">

                  <div className="wpo-section-title-s2">

                    <span>
                      <i>
                        <img src={cleaningIcon} alt="" />
                      </i>
                      before & after
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Transforming Spaces, One Clean at a Time
                    </h2>

                    <p>
                      Let us take the stress out of cleaning, so you can focus
                      on what matters most.
                    </p>

                  </div>

                  <ul>
                    <li>
                      <span>Deep & Detailed Cleaning</span>
                    </li>

                    <li className="active">
                      <span>Eco-Friendly Products</span>
                    </li>

                    <li>
                      <span>Flexible Scheduling</span>
                    </li>
                  </ul>

                  <div className="transforming-btns">

                    <Link to="/contact" className="theme-btn-s2">
                      Try yours now
                    </Link>

                    <Link to="/about" className="theme-btn-s3">
                      <span
                        className="rolling-text"
                        data-text="About us"
                      >
                        Learn More
                      </span>
                    </Link>

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

export default TransformingSection;
