import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import services from "../../api/services";

import cleaningIcon from "../../images/cleaning-icon.svg";
import shape1 from "../../images/service/shape1.svg";
import shape2 from "../../images/service/shape2.svg";
import shape3 from "../../images/service/shape3.svg";

const ServiceSection: React.FC = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1199,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 757,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1 }
      }
    ]
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

                <Fade direction="up" delay={index * 150} triggerOnce>

                  <div className="wpo-service-item">

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
                        className="arrow"
                        onClick={ClickHandler}
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