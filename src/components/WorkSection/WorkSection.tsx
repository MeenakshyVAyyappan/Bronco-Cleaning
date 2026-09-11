import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import icon from "../../images/cleaning-icon-white.svg";

import workIcon1 from "../../images/work/work-icon-1.svg";
import workIcon2 from "../../images/work/work-icon-2.svg";
import workIcon3 from "../../images/work/work-icon-3.svg";

import img1 from "../../images/work/image-1.jpg";
import img2 from "../../images/work/image-2.jpg";
import img3 from "../../images/work/image-3.jpg";
import img4 from "../../images/work/image-4.jpg";
import img5 from "../../images/work/image-5.jpg";
import img6 from "../../images/work/image-6.jpg";

const WorkSection: React.FC = () => {

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      const depth = 200;
      const moveX = (e.pageX - window.innerWidth / 2) / depth;
      const moveY = (e.pageY - window.innerHeight / 2) / depth;

      const circles1 = gsap.utils.toArray<HTMLElement>(".image-move");

      circles1.forEach((circle, index) => {
        gsap.to(circle, {
          x: moveX * (index + 1),
          y: moveY * (index + 1),
          duration: 0.5,
          ease: "power2.out",
        });
      });

      const circles2 = gsap.utils.toArray<HTMLElement>(".image-move2");

      circles2.forEach((circle, index) => {
        gsap.to(circle, {
          x: moveX * (index + 1),
          y: moveY * (index + 1),
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

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

      {/* Left Images */}
      <div className="left-images">

        <Fade direction="down" duration={1200} triggerOnce>
          <div className="image-1">
            <div className="image-move">
              <img src={img1} alt="" />
            </div>
          </div>
        </Fade>

        <Fade direction="left" duration={1200} triggerOnce>
          <div className="image-2">
            <div className="image-move">
              <img src={img2} alt="" />
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={1200} triggerOnce>
          <div className="image-3">
            <div className="image-move">
              <img src={img3} alt="" />
            </div>
          </div>
        </Fade>

      </div>

      {/* Right Images */}
      <div className="right-images">

        <Fade direction="down" duration={1200} triggerOnce>
          <div className="image-1">
            <div className="image-move2">
              <img src={img4} alt="" />
            </div>
          </div>
        </Fade>

        <Fade direction="right" duration={1200} triggerOnce>
          <div className="image-2">
            <div className="image-move2">
              <img src={img5} alt="" />
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={1200} triggerOnce>
          <div className="image-3">
            <div className="image-move2">
              <img src={img6} alt="" />
            </div>
          </div>
        </Fade>

      </div>

    </section>
  );
};

export default WorkSection;