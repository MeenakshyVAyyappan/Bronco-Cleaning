import React from "react";
import { Link } from "react-router-dom";

import arrowUp from "../../images/arrow-up-black.svg";
import airplane from "../../images/air-plane.svg";
import footerShape from "../../images/footer-shape.png";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About Bronco", link: "/about" },
    { name: "Book Cleaning", link: "/appoinment" },
    { name: "Our Services", link: "/service" },
    { name: "Dubai Locations", link: "/contact" },
    { name: "Cleaning FAQs", link: "/faq" },
    { name: "Latest Blogs", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  const socials = [
    { icon: "ti-facebook", link: "#" },
    { icon: "ti-instagram", link: "#" },
    { icon: "ti-linkedin", link: "#" },
    { icon: "ti-twitter-alt", link: "#" },
  ];

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="footer-common footer-section-s1">
      <div className="footer-wrap section-padding">

        {/* Footer Top */}
        <div className="footer-topbar">
          <div className="container">
            <div className="wraper">

              <h2 className="scroll-text-animation">
                <span>Professional Cleaning Solutions Across Dubai</span> <br />
                Book Your Cleaning Service Today –{" "}
                <span className="color">info@broncocleaning.ae</span>
              </h2>

              <div className="booking-btn">
                <Link
                  onClick={ClickHandler}
                  className="btn-wrapper btn-move"
                  to="/contact"
                >
                  <small>
                    <i>
                      <img src={arrowUp} alt="" />
                    </i>
                    Get in touch
                  </small>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Widgets */}
        <div className="container">
          <div className="footer">

            {/* Newsletter */}
            <div className="item widget-newsletter">
              <h2 className="title">Bronco Newsletter</h2>

              <div className="newsletter">
                <form className="form-fild" onSubmit={(e) => e.preventDefault()}>

                  <input
                    className="fild"
                    type="email"
                    placeholder="Enter your email for Dubai deals"
                  />

                  <button type="submit">
                    <img src={airplane} alt="" />
                  </button>

                  <div className="terms">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="checkbox-input"
                      defaultChecked
                    />

                    <label htmlFor="checkbox" className="checkbox-label">
                      <span className="custom-checkbox"></span>
                      I agree to Bronco Cleaning terms & policies
                    </label>
                  </div>

                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="item">
              <h2 className="title">Quick Links</h2>

              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link onClick={ClickHandler} to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="item">
              <h2 className="title">Dubai Contact Info</h2>

              <ul>
                <li>Bronco Cleaning Services LLC</li>
                <li>Business Bay & Sheikh Zayed Road</li>
                <li>Dubai, United Arab Emirates</li>
                <li>info@broncocleaning.ae</li>
                <li>+971 4 123 4567 / +971 50 123 4567</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-lower">
          <div className="container">

            <div className="lower-footer-wrap">
              <div className="row align-items-center g-0">

                <div className="col-lg-5 col-12">
                  <p className="copyright">
                    Copyright &copy; <span>2026</span> Bronco Cleaning Services Dubai. All rights reserved.
                  </p>
                </div>

                <div className="col-lg-3 col-12 text-center">
                  <p>Saturday – Thursday: 8:00 AM – 8:00 PM</p>
                </div>

                <div className="col-lg-4 col-12">
                  <ul className="widget-social">

                    {socials.map((social, index) => (
                      <li key={index}>
                        <a href={social.link}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}

                  </ul>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Shape */}
          <div className="f-shape">
            <img src={footerShape} alt="" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
