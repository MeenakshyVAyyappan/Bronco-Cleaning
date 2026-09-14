import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import services from "../../api/services";

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
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } },
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

                  <div className="wpo-service-item h-100">

                    <div className="wpo-service-img middle-light">
                      <img src={service.image} alt={service.title} />
                    </div>

                    <div className="wpo-service-text">

                      <div className="thumb">

                        <span>{service.price}</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="103"
                          height="24"
                          viewBox="0 0 103 24"
                          fill="none"
                        >
                          <path
                            d="M1.60294 8.82231C-0.492335 4.80636 2.42121 0 6.95089 0H96.7463C101.157 0 103.808 4.89398 101.399 8.5886C100.237 10.3695 100.194 12.6573 101.288 14.4805L101.462 14.7702C103.899 18.8322 100.973 24 96.2363 24H7.54361C2.65837 24 -0.551448 18.8988 1.56255 14.4947L1.69305 14.2228C2.51567 12.509 2.48228 10.5077 1.60294 8.82231Z"
                            fill="#42C652"
                          />
                        </svg>

                      </div>

                      <h2>
                        <Link
                          onClick={ClickHandler}
                          to={`/service-single/${service.slug}`}
                        >
                          {service.title}
                        </Link>
                      </h2>

                      <Link
                        onClick={ClickHandler}
                        className="arrow"
                        to={`/service-single/${service.slug}`}
                      >
                        <i className="ti-arrow-top-right"></i>
                      </Link>

                    </div>

                  </div>

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