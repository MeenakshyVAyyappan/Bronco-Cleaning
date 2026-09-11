import React from "react";
import ContactForm from "../ContactFrom";

const dubailandAreas = [
  "Al Safa", "Jumeirah", "Downtown Dubai", "DIFC", "City Walk", 
  "Business Bay", "Nad Al Sheba", "Sheikh Zayed Road", "Al Quoz", 
  "Al Sufouh", "Dubai Hills", "Arabian Ranches", "Dubai Sports City", 
  "Motor City", "Al Barsha", "Jumeirah Golf Estates", "Emirates Hills", 
  "Palm Jumeirah", "JLT", "Dubai Marina", "Jumeirah Park", "Palm Jebel Ali", "Jebel Ali Free Zone"
];

const Contactpage: React.FC = () => {

  return (
    <>
      <section className="contact-page section-padding">
        <div className="container">

          {/* Office Info */}
          <div className="office-info">
            <div className="row">

              <div className="col col-lg-4 col-md-6 col-12">
                <div className="office-info-item">
                  <div className="office-info-icon">
                    <div className="icon">
                      <i className="fi flaticon-home-address"></i>
                    </div>
                  </div>
                  <div className="office-info-text">
                    <h2>Dubai Address</h2>
                    <p>
                      Office 402, Business Bay & Sheikh Zayed Road <br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-12">
                <div className="office-info-item active">
                  <div className="office-info-icon">
                    <div className="icon">
                      <i className="fi flaticon-phone-call"></i>
                    </div>
                  </div>
                  <div className="office-info-text">
                    <h2>Phone & WhatsApp</h2>
                    <p>
                      +971 4 123 4567 <br />
                      +971 50 123 4567
                    </p>
                    <a 
                      href="https://wa.me/971501234567" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-success mt-2" 
                      style={{ borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}
                    >
                      <i className="fa fa-whatsapp me-1"></i> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-12">
                <div className="office-info-item">
                  <div className="office-info-icon">
                    <div className="icon">
                      <i className="fi flaticon-mail-1"></i>
                    </div>
                  </div>
                  <div className="office-info-text">
                    <h2>Email Addresses</h2>
                    <p>
                      info@broncocleaning.ae <br />
                      contact@broncocleaning.ae
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Service Locations list section */}
          <div className="row my-5">
            <div className="col-12">
              <div className="p-4 rounded" style={{ background: "#f4f7fc" }}>
                <h3 className="h4 text-center mb-3" style={{ color: "#00205b", fontWeight: "700" }}>
                  Service Locations – Dubai
                </h3>
                <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
                  Bronco Cleaning Services provides reliable, high-quality home, office, and deep cleaning solutions across all major Dubai communities:
                </p>
                <div className="row g-2 justify-content-center text-center">
                  {dubailandAreas.map((area, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-6">
                      <div className="p-2 bg-white rounded border text-truncate" style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>
                        <i className="ti-location-pin text-success me-1"></i> {area}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-wrap">
            <div className="row">

              {/* Left Side */}
              <div className="col-lg-6 col-12">
                <div className="contact-left">

                  <h2>Need Professional Cleaning Services in Dubai? Contact Bronco Today!</h2>

                  <p>
                    Positioning Bronco as your trusted cleaning partner in Dubai. Contact our team to book your service or request a customized cleaning quote.
                  </p>

                  <div className="map">
                    <iframe
                      title="Google Map Dubai"
                      loading="lazy"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.467439366627!2d55.267683!3d25.187201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def2442d5%3A0x6d9051410d54020a!2sBusiness%20Bay%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000"
                      allowFullScreen
                    ></iframe>
                  </div>

                </div>
              </div>

              {/* Right Side */}
              <div className="col-lg-6 col-12">
                <div className="contact-right">

                  <div className="title">
                    <h2>Book Cleaning Enquiry</h2>
                    <p>
                      Fill up the form below and our Dubai cleaning team will respond promptly.
                    </p>
                  </div>

                  {/* Contact Form Component */}
                  <ContactForm />

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contactpage;