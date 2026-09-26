import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blogs from "../../api/blogs";
import { scrollToTop } from "../ScrollToTop";

import logoImg from "../../images/logo/broncologo.png";

const BlogSidebar: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const ClickHandler = () => {
    scrollToTop();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/blog`);
      scrollToTop();
    }
  };

  return (

    <div className="blog-sidebar">

      {/* ABOUT WIDGET */}
      <div className="widget about-widget">

        <div className="img-holder">
          <Link to="/" onClick={ClickHandler}>
            <img src={logoImg} alt="Bronco Cleaning Services Dubai" />
          </Link>
        </div>

        <h4>Bronco Cleaning Experts</h4>

        <span>Dubai Cleaning & Hygiene Insights</span>

        <p>
          Positioning Bronco Cleaning Services as Dubai's most reliable and professional cleaning company for homes, offices, and industrial facilities.
        </p>

        <ul>
          <li><a href="https://facebook.com/broncocleaning" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook-app-symbol"></i></a></li>
          <li><a href="https://linkedin.com/company/broncocleaning" target="_blank" rel="noopener noreferrer"><i className="flaticon-linkedin"></i></a></li>
          <li><a href="https://instagram.com/broncocleaning" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
          <li><a href="https://wa.me/971541484800" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
        </ul>

      </div>


      {/* SEARCH */}
      <div className="widget search-widget">

        <h3>Search Dubai Cleaning Blog</h3>

        <form onSubmit={handleSearchSubmit}>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Search Dubai cleaning tips..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
              <i className="ti-search"></i>
            </button>
          </div>
        </form>

      </div>


      {/* RECENT POSTS */}
      <div className="widget recent-post-widget">

        <h3>Related Posts</h3>

        <div className="posts">

          {blogs.slice(0, 4).map((blog) => (

            <div className="post" key={blog.id}>

              <div className="img-holder">
                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                  <img src={blog.image} alt={blog.title} />
                </Link>
              </div>

              <div className="details">

                <span className="date">
                  <i className="flaticon-calendar"></i> {blog.date}
                </span>

                <h4>
                  <Link
                    onClick={ClickHandler}
                    to={`/blog-single/${blog.slug}`}
                  >
                    {blog.title}
                  </Link>
                </h4>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* TAGS */}
      <div className="widget tag-widget">

        <h3>Popular Tags</h3>

        <ul>
          <li><Link onClick={ClickHandler} to="/service">Dubai Cleaning</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/deep-cleaning-services-dubai">Deep Clean</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/office-workplace-cleaning-services">Office Sanitization</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/airbnb-cleaning-services">Airbnb Turnover</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/maid-services">Villa Maid</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/moving-in-moving-out-cleaning-services">Move-In Dubai</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/sofa-cleaning-services">Sofa Clean</Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/warehouse-cleaning-services">Warehouse</Link></li>
        </ul>

      </div>


      {/* CATEGORY */}
      <div className="widget category-widget">

        <h3>Dubai Cleaning Categories</h3>

        <ul>
          <li><Link onClick={ClickHandler} to="/service-single/deep-cleaning-services-dubai">Deep Cleaning Dubai <span>18</span></Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/home-cleaning-services">Residential Cleaning <span>25</span></Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/office-workplace-cleaning-services">Commercial & Office <span>34</span></Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/airbnb-cleaning-services">Airbnb Hospitality <span>12</span></Link></li>
          <li><Link onClick={ClickHandler} to="/service-single/warehouse-cleaning-services">Warehouse & Industrial <span>15</span></Link></li>
        </ul>

      </div>

    </div>

  );
};

export default BlogSidebar;
