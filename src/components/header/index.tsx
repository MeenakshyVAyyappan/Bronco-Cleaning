import React from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { scrollToTop } from "../ScrollToTop";

import callIcon from "../../images/call.svg";
import logo from "../../images/logo/broncologo.png";

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
  const location = useLocation();

  const ClickHandler = () => {
    scrollToTop();
  };

  const isPathActive = (targetPath?: string, children?: SubMenuItem[]) => {
    if (!targetPath) return false;
    const path = location.pathname;
    if (targetPath === "/") return path === "/" || path === "/home";
    if (path === targetPath) return true;
    if (targetPath !== "/" && path.startsWith(targetPath)) return true;
    if (targetPath === "/service" && path.startsWith("/service-single")) return true;
    if (children && children.some(child => child.path && (path === child.path || path.startsWith(child.path)))) return true;
    return false;
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
              <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Bronco Cleaning Services Dubai" style={{ maxHeight: "78px", maxWidth: "240px", width: "auto", height: "auto", objectFit: "contain" }} />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-6 col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>

                  <ul className="nav navbar-nav mb-2 mb-lg-0">

                    {menuItems.map((item, index) => {
                      const active = isPathActive(item.path, item.children);
                      const activeLinkStyle: React.CSSProperties = active
                        ? {
                            color: "#43903E",
                            fontWeight: 700,
                            borderBottom: "3px solid #43903E",
                            paddingBottom: "4px",
                          }
                        : {};

                      return (
                        <li
                          key={index}
                          className={`${item.children ? "menu-item-has-children" : ""} ${active ? "active" : ""}`.trim()}
                        >
                          {item.path ? (
                            <Link
                              to={item.path}
                              onClick={ClickHandler}
                              className={active ? "active" : ""}
                              style={activeLinkStyle}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <a
                              href="#"
                              className={active ? "active" : ""}
                              style={activeLinkStyle}
                            >
                              {item.label}
                            </a>
                          )}

                          {item.children && (
                            <ul className="sub-menu">
                              {item.children.map((sub, i) => {
                                const path = location.pathname;
                                const subActive = sub.path
                                  ? sub.path === "/"
                                    ? path === "/"
                                    : path === sub.path || path.startsWith(sub.path)
                                  : false;

                                const subActiveStyle: React.CSSProperties = subActive
                                  ? {
                                      color: "#43903E",
                                      fontWeight: 700,
                                      backgroundColor: "rgba(67, 144, 62, 0.12)",
                                    }
                                  : {};

                                return (
                                  <li
                                    key={i}
                                    className={`${sub.children ? "menu-item-has-children" : ""} ${subActive ? "active" : ""}`.trim()}
                                  >
                                    {sub.path ? (
                                      <Link
                                        to={sub.path}
                                        onClick={ClickHandler}
                                        className={subActive ? "active" : ""}
                                        style={subActiveStyle}
                                      >
                                        {sub.label}
                                      </Link>
                                    ) : (
                                      <a
                                        href="#"
                                        className={subActive ? "active" : ""}
                                        style={subActiveStyle}
                                      >
                                        {sub.label}
                                      </a>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}

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
