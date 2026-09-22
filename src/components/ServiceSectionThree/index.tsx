import React from "react";
import { useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import services from "../../api/services";
import ServiceCard from "../ServiceCard";

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
                        <ServiceCard service={service} onClickHandler={ClickHandler} />
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
