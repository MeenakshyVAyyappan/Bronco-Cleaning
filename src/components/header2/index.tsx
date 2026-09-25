import React, { useState } from "react";
import type { FormEvent } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import MobileMenu from "../MobileMenu/MobileMenu";
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

const HeaderTwo: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const ClickHandler = () => window.scrollTo(10, 0);

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

  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/service?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header id="header" className="box-style">
      <div className="wpo-site-header">
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
                            color: "#7C9473",
                            fontWeight: 700,
                            borderBottom: "3px solid #7C9473",
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
                                      color: "#7C9473",
                                      fontWeight: 700,
                                      backgroundColor: "rgba(124, 148, 115, 0.12)",
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

              {/* Header Right */}
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">

                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button className="search-toggle-btn" onClick={() => setSearchOpen(!searchOpen)}><i
                        className="fi flaticon-magnifying-glass"></i></button>
                      <div
                        className={`header-search-form ${searchOpen ? "header-search-content-toggle" : ""
                          }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What service do you need?"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit">
                              <i className="fi flaticon-magnifying-glass"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* Mini Cart */}
                  {/* <div className="mini-cart">
                    <button
                      className="cart-toggle-btn"
                      onClick={() => setCartOpen(!cartOpen)}
                    >
                      <i className="fi flaticon-bag"></i>
                      <span className="cart-count">{carts.length}</span>
                    </button>

                    <div
                      className={`mini-cart-content ${cartOpen ? "mini-cart-content-toggle" : ""
                        }`}
                    >
                      <button
                        className="mini-cart-close"
                        onClick={() => setCartOpen(false)}
                      >
                        <i className="ti-close"></i>
                      </button>

                      <div className="mini-cart-items">
                        {carts.length > 0 ? (
                          carts.map((item) => (
                            <div key={item.id} className="mini-cart-item clearfix">
                              <div className="mini-cart-item-image">
                                <img
                                  src={item.proImg ?? ""}
                                  alt={item.title}
                                />
                              </div>

                              <div className="mini-cart-item-des">
                                <p>{item.title}</p>

                                <span className="mini-cart-item-price">
                                  {item.price} AED × {item.qty}
                                </span>

                                <button
                                  onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                  }
                                >
                                  <i className="ti-close"></i>
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-center py-3">
                            Cart is empty
                          </p>
                        )}
                      </div>

                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Subtotal:
                          <span>{totalPrice(carts)} AED</span>
                        </span>

                        <div className="mini-btn">
                          <Link
                            onClick={ClickHandler}
                            to="/checkout"
                            className="view-cart-btn s1"
                          >
                            Checkout
                          </Link>

                          <Link
                            onClick={ClickHandler}
                            to="/cart"
                            className="view-cart-btn"
                          >
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Quote Button */}
                  <div className="close-form">
                    <Link className="theme-btn" to="/appoinment">
                      Book Now
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTwo;
