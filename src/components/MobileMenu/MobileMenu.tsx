import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo/broncologo.png";
import { scrollToTop } from "../ScrollToTop";
import "./style.css";

interface SubMenuItem {
  id: number;
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: SubMenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
    submenu: [
      { id: 31, title: "All Services", link: "/service" },
      { id: 32, title: "Deep Cleaning Dubai", link: "/service-single/deep-cleaning-services-dubai" },
      { id: 33, title: "Home Cleaning Services", link: "/service-single/home-cleaning-services" },
      { id: 34, title: "Office Cleaning Services", link: "/service-single/office-workplace-cleaning-services" },
      { id: 35, title: "Warehouse Cleaning", link: "/service-single/warehouse-cleaning-services" },
      { id: 40, title: "Aviation Warehouse Cleaning", link: "/service-single/aviation-warehouse-cleaning-services" },
      { id: 36, title: "Move-In / Move-Out", link: "/service-single/moving-in-moving-out-cleaning-services" },
      { id: 37, title: "Airbnb Cleaning", link: "/service-single/airbnb-cleaning-services" },
      { id: 38, title: "Maid Services", link: "/service-single/maid-services" },
      { id: 39, title: "Sofa Cleaning", link: "/service-single/sofa-cleaning-services" },
    ],
  },
  {
    id: 4,
    title: "FAQ",
    link: "/faq",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact",
  },
];

const MobileMenu: React.FC = () => {
  const [openId, setOpenId] = useState<number>(0);
  const [menuActive, setMenuState] = useState<boolean>(false);
  const location = useLocation();

  const ClickHandler = () => {
    scrollToTop();
    setMenuState(false);
  };

  const isPathActive = (targetLink: string, submenu?: SubMenuItem[]) => {
    if (targetLink === "/") return location.pathname === "/";
    if (location.pathname === targetLink || location.pathname.startsWith(targetLink + "/")) return true;
    if (submenu && submenu.some(sub => location.pathname === sub.link || location.pathname.startsWith(sub.link + "/"))) return true;
    return false;
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close d-flex align-items-center justify-content-between px-3 pt-3">
          <Link to="/" onClick={ClickHandler}>
            <img src={logo} alt="Bronco Cleaning" style={{ maxHeight: "65px", maxWidth: "180px", backgroundColor: "#fff", padding: "6px 12px", borderRadius: "8px", objectFit: "contain" }} />
          </Link>
          <div className="clox" onClick={() => setMenuState(false)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item) => {
            const active = isPathActive(item.link, item.submenu);
            return (
              <ListItem
                className={`${item.id === openId ? "active-submenu" : ""} ${active ? "active" : ""}`.trim()}
                key={item.id}
              >
                {item.submenu ? (
                  <Fragment>
                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)} className={active ? "active" : ""}>
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? "fa fa-angle-up"
                            : "fa fa-angle-down"
                        }
                      ></i>
                    </p>

                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        {item.submenu.map((submenu) => {
                          const subActive = location.pathname === submenu.link;
                          return (
                            <ListItem key={submenu.id} className={subActive ? "active" : ""}>
                              <Link onClick={ClickHandler} to={submenu.link} className={subActive ? "active" : ""}>
                                {submenu.title}
                              </Link>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <Link onClick={ClickHandler} to={item.link} className={active ? "active" : ""}>
                    {item.title}
                  </Link>
                )}
              </ListItem>
            );
          })}
        </ul>
      </div>

      {/* Toggle Button */}
      <div className="showmenu" onClick={() => setMenuState(true)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
