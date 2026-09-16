import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import services from "../../api/services";

import Shape1 from "../../images/service/shape1.svg";
import Shape3 from "../../images/service/shape3.svg";

const ServiceSectionThree: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery) ||
    service.description.toLowerCase().includes(searchQuery)
  );

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-service-section style-3 section-padding" ref={ref}>
      <div className="wpo-service-wrap">

        <div className="container">

          {/* SECTION TITLE */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <h2 className="poort-text poort-in-right">
                  Where Cleanliness meets Care Services
                </h2>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="service-slider-s3">

            <div className="wpo-service-slide-item">

              <div className="row">

                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (

                    <div key={service.id} className="col-lg-4 col-md-6 col-12 mb-4">

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
                                  fill="#7C9473"
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

                  ))) : (
                  <div className="col-12 text-center my-5">
                    <h3>No services found matching "{searchQuery}"</h3>
                    <p>Try searching with a different term.</p>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* SHAPES */}

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

export default ServiceSectionThree;
