import React from "react";
import { Link } from "react-router-dom";
import type { Service } from "../../api/services";
import { scrollToTop } from "../ScrollToTop";

interface ServiceCardProps {
  service: Service;
  onClickHandler?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onClickHandler,
  className = "",
}) => {
  const handleClick = () => {
    if (onClickHandler) {
      onClickHandler();
    } else {
      scrollToTop();
    }
  };

  return (
    <div className={`wpo-service-item h-100 ${className}`}>
      <div className="wpo-service-img middle-light">
        <Link onClick={handleClick} to={`/service-single/${service.slug}`}>
          <img src={service.image} alt={service.title} />
        </Link>
      </div>

      <div className="wpo-service-text">
        <div className="thumb service-price-badge">
          <i className="ti-tag me-1"></i>
          <span>{service.price}</span>
        </div>

        <h2>
          <Link onClick={handleClick} to={`/service-single/${service.slug}`}>
            {service.title}
          </Link>
        </h2>

        {service.intro && (
          <p className="service-intro-text">
            {service.intro}
          </p>
        )}

        <Link
          onClick={handleClick}
          className="arrow"
          to={`/service-single/${service.slug}`}
          aria-label={`View details for ${service.title}`}
        >
          <i className="ti-arrow-top-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
