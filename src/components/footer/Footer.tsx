import React from "react";
import { Link } from "react-router-dom";

import footerShape from "../../images/footer-shape.png";
import logo from "../../images/logo/broncologo.png";

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



        {/* Footer Widgets */}
        <div className="container">
          <div className="footer">


            {/* Logo */}
            <div className="item widget-about">
              <Link className="navbar-brand d-flex align-items-center mb-4" to="/" style={{ textDecoration: 'none' }} onClick={ClickHandler}>
                <img src={logo} alt="Bronco Cleaning Services Dubai" style={{ maxHeight: "115px", maxWidth: "300px", width: "auto", height: "auto", objectFit: "contain" }} />
              </Link>
              <p style={{ color: "#4A5852", lineHeight: "1.6", maxWidth: "400px" }}>
                Bronco Cleaning Services provides reliable, high-quality home, office, and deep cleaning solutions across all major Dubai communities.
              </p>
            </div>
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
                <li>Bronco Cleaning Solution L.L.C-FZ</li>
                <li>Limited Liability Company</li>
                <li>Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai UAE</li>
                <li>
                  <a href="mailto:info@broncocleaning.ae" style={{ color: "inherit", textDecoration: "none" }}>
                    info@broncocleaning.ae
                  </a>
                </li>
                <li>
                  <a href="tel:+9710541484800" style={{ color: "inherit", textDecoration: "none" }}>
                    +971 054 148 4800
                  </a>
                </li>
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
                  <p>Sun – Mon: 8:00 AM – 8:00 PM</p>
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
