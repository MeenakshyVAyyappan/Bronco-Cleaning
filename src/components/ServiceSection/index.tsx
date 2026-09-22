import React from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import useResponsiveSlidesToShow from "../useResponsiveSlidesToShow/useResponsiveSlidesToShow";
import services from "../../api/services";
import ServiceCard from "../ServiceCard";

import cleaningIcon from "../../images/cleaning-icon.svg";
import shape1 from "../../images/service/shape1.svg";
import shape2 from "../../images/service/shape2.svg";
import shape3 from "../../images/service/shape3.svg";

const ServiceSection: React.FC = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const slidesToShow = useResponsiveSlidesToShow(
    [
      { maxWidth: 575, slidesToShow: 1 },
      { maxWidth: 991, slidesToShow: 2 },
    ],
    3
  );

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-service-section section-padding pt-0" ref={ref}>
      <div className="wpo-service-wrap box-style section-padding">
        <div className="container">

          {/* Section Title */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <span>
                  <i>
                    <img src={cleaningIcon} alt="" />
                  </i>
                  Services
                </span>

                <h2 className="poort-text poort-in-right">
                  Where Cleanliness meets Care Services
                </h2>
              </div>
            </div>
          </div>

          {/* Slider */}
          <Slider {...settings} className="service-slider">

            {services.slice(0, 4).map((service, index) => (

              <div key={service.id} className="wpo-service-slide-item">

                <Fade direction="up" delay={index * 150} triggerOnce className="h-100">
                  <ServiceCard service={service} onClickHandler={ClickHandler} />
                </Fade>

              </div>

            ))}

          </Slider>

        </div>

        {/* Shapes */}
        <div className="left-shape">
          <img src={shape2} alt="" />
        </div>

        <div className="left-shape2">
          <img src={shape1} alt="" />
        </div>

        <div className="right-shape">
          <img src={shape3} alt="" />
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
