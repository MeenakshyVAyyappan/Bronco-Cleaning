import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

import callIcon from "../../images/call.svg";

interface SubMenuItem {
  label: string;
  path?: string;
  children?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  path?: string;
  children?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Services",
    path: "/service",
    children: [
      { label: "All Cleaning Services", path: "/service" },
      { label: "Deep Cleaning Dubai", path: "/service-single/deep-cleaning-services-dubai" },
      { label: "Home Cleaning", path: "/service-single/home-cleaning-services" },
      { label: "Office & Workplace", path: "/service-single/office-workplace-cleaning-services" },
      { label: "Warehouse Cleaning", path: "/service-single/warehouse-cleaning-services" },
      { label: "Aviation Warehouse Cleaning", path: "/service-single/aviation-warehouse-cleaning-services" },
      { label: "Move-In / Move-Out", path: "/service-single/moving-in-moving-out-cleaning-services" },
      { label: "Airbnb Cleaning", path: "/service-single/airbnb-cleaning-services" },
      { label: "Maid Services", path: "/service-single/maid-services" },
      { label: "Sofa Cleaning", path: "/service-single/sofa-cleaning-services" },
    ],
  },
  {
    label: "FAQ",
    path: "/faq",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const Header: React.FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header">
      <div className="wpo-site-header header-style-1">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">

              {/* Mobile Menu */}
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>

              {/* Logo */}
              <div className="col-xl-3 col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span style={{ fontSize: "24px", fontWeight: "800", color: "#22302A", letterSpacing: "0.5px" }}>
                      BRONCO <span style={{ color: "#7C9473" }}>CLEANING</span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-6 col-lg-8 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>

                  <ul className="nav navbar-nav mb-2 mb-lg-0">

                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item.children
                            ? "menu-item-has-children"
                            : undefined
                        }
                      >
                        {item.path ? (
                          <Link to={item.path} onClick={ClickHandler}>{item.label}</Link>
                        ) : (
                          <a href="#">{item.label}</a>
                        )}

                        {item.children && (
                          <ul className="sub-menu">
                            {item.children.map((sub, i) => (
                              <li
                                key={i}
                                className={
                                  sub.children
                                    ? "menu-item-has-children"
                                    : undefined
                                }
                              >
                                {sub.path ? (
                                  <Link to={sub.path} onClick={ClickHandler}>{sub.label}</Link>
                                ) : (
                                  <a href="#">{sub.label}</a>
                                )}

                                {sub.children && (
                                  <ul className="sub-menu">
                                    {sub.children.map((child, j) => (
                                      <li key={j}>
                                        <Link to={child.path || "/"} onClick={ClickHandler}>
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}

                  </ul>
                </div>
              </div>

              {/* Call Section */}
              <div className="col-xl-3 col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <a href="tel:+9710541484800" className="call">
                    <div className="icon">
                      <img src={callIcon} alt="call" />
                    </div>
                    <div className="text">
                      <h4>+971 054 148 4800</h4>
                      <span>Book Dubai Cleaner</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
