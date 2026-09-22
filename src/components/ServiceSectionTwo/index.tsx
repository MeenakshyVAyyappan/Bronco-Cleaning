import React from "react";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import services from "../../api/services";
import ServiceCard from "../ServiceCard";

import Shape1 from "../../images/service/shape1.svg";
import Shape3 from "../../images/service/shape3.svg";

const ServiceSectionTwo: React.FC = () => {

  const ClickHandler = () => window.scrollTo(10, 0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-service-section style-2 section-padding" ref={ref}>
      <div className="wpo-service-wrap section-padding">

        <div className="container-fluid">

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="wpo-section-title">
                <h2 className="poort-text poort-in-right">
                  Where Cleanliness meets Care Services
                </h2>
              </div>
            </div>
          </div>

          <Slider {...settings} className="service-slider-s2">

            {services.map((service, index) => (
              <div key={service.id} className="wpo-service-slide-item h-100">

                <Fade direction="up" delay={index * 100} triggerOnce className="h-100">
                  <ServiceCard service={service} onClickHandler={ClickHandler} />
                </Fade>

              </div>
            ))}

          </Slider>

        </div>

        {/* Shapes */}
        <div className="left-shape2">
          <img src={Shape1} alt="" />
        </div>

        <div className="right-shape">
          <img src={Shape3} alt="" />
        </div>

      </div>
    </section>
  );
};

export default ServiceSectionTwo;
