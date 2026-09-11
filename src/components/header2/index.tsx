import React, { useState } from "react";
import type { FormEvent } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import type { RootState, AppDispatch } from "../../store";
import { removeFromCart } from "../../store/slices/cartSlice";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";

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
    children: [
      { label: "All Cleaning Services", path: "/service" },
      { label: "Deep Cleaning Dubai", path: "/service-single/deep-cleaning-services-dubai" },
      { label: "Home Cleaning", path: "/service-single/home-cleaning-services" },
      { label: "Office & Workplace", path: "/service-single/office-workplace-cleaning-services" },
      { label: "Warehouse Cleaning", path: "/service-single/warehouse-cleaning-services" },
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
  const dispatch = useDispatch<AppDispatch>();

  const carts = useSelector((state: RootState) => state.cart.cart);

  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const ClickHandler = () => window.scrollTo(10, 0);

  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              <div className="col-xl-3 col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span style={{ fontSize: "22px", fontWeight: "800", color: "#00205b", letterSpacing: "0.5px" }}>
                      BRONCO <span style={{ color: "#42C652" }}>CLEANING</span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-6 col-lg-7 col-md-1 col-1">
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
                              placeholder="Search Dubai cleaning..."
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
                  <div className="mini-cart">
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
                  </div>

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