import React from "react";
import "./style.scss";

const FloatingSocials: React.FC = () => {
  return (
    <div className="floating-socials">
      <a href="tel:+9710541484800" className="social-btn phone-btn" aria-label="Call Us">
        <i className="fa fa-phone"></i>
      </a>
      <a href="https://wa.me/971541484800" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp-btn" aria-label="WhatsApp Us">
        <i className="fa fa-whatsapp"></i>
      </a>
      <a href="https://instagram.com/broncocleaning" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn" aria-label="Instagram">
        <i className="fa fa-instagram"></i>
      </a>
    </div>
  );
};

export default FloatingSocials;
