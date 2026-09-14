import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../api/blogs";

import logoImg from "../../images/blog/bronco-icon.png";

const BlogSidebar: React.FC = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (

    <div className="blog-sidebar">

      {/* ABOUT WIDGET */}
      <div className="widget about-widget">

        <div className="img-holder">
          <img src={logoImg} alt="about Bronco" />
        </div>

        <h4>Bronco Cleaning Experts</h4>

        <span>Dubai Cleaning & Hygiene Insights</span>

        <p>
          Positioning Bronco as Dubai's most reliable and professional cleaning company for homes, offices, and industrial facilities.
        </p>

        <ul>
          <li><Link to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
          <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
          <li><Link to="#"><i className="ti-pinterest"></i></Link></li>
          <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
        </ul>

      </div>


      {/* SEARCH */}
      <div className="widget search-widget">

        <h3>Search Dubai Cleaning Blog</h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Search Dubai cleaning tips..."
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
                <img src={blog.image} alt={blog.title} />
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
          <li><Link to="#">Dubai Cleaning</Link></li>
          <li><Link to="#">Deep Clean</Link></li>
          <li><Link to="#">Office Sanitization</Link></li>
          <li><Link to="#">Airbnb Turnover</Link></li>
          <li><Link to="#">Villa Maid</Link></li>
          <li><Link to="#">Move-In Dubai</Link></li>
          <li><Link to="#">Sofa Clean</Link></li>
          <li><Link to="#">Warehouse</Link></li>
        </ul>

      </div>


      {/* CATEGORY */}
      <div className="widget category-widget">

        <h3>Dubai Cleaning Categories</h3>

        <ul>
          <li><Link to="#">Deep Cleaning Dubai <span>18</span></Link></li>
          <li><Link to="#">Residential Cleaning <span>25</span></Link></li>
          <li><Link to="#">Commercial & Office <span>34</span></Link></li>
          <li><Link to="#">Airbnb Hospitality <span>12</span></Link></li>
          <li><Link to="#">Warehouse & Industrial <span>15</span></Link></li>
        </ul>

      </div>

    </div>

  );
};

export default BlogSidebar;
// Trigger rebuild
