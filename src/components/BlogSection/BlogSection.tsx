import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";

import blogs from "../../api/blogs";
import cleaningIcon from "../../images/cleaning-icon.svg";

const BlogSection: React.FC = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-blog-section section-padding pt-0 pb-4"  ref={ref}>
      <div className="wpo-blog-wrap section-padding box-style">

        <div className="container">

          {/* Section Title */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">

                <span>
                  <i>
                    <img src={cleaningIcon} alt="" />
                  </i>
                  News & Blogs
                </span>

                <h2 className="poort-text poort-in-right">
                  Updated News & Blogs
                </h2>

                <p>
                  communication and utilizes cutting edge logistic planning
                  to get your shipment completed on time. itself founded.
                </p>

              </div>
            </div>
          </div>

          {/* Blog Items */}
          <div className="wpo-blog-items">
            <div className="row">

              {blogs.slice(0, 3).map((blog, index) => (

                <div
                  key={blog.id}
                  className="col col-lg-4 col-md-6 col-12"
                >

                  <Fade
                    direction="up"
                    delay={index * 100}
                    duration={1200}
                    triggerOnce
                  >

                    <div className="wpo-blog-item">

                      <div className="wpo-blog-img middle-light">
                        <img src={blog.image} alt={blog.title} />
                      </div>

                      <div className="wpo-blog-content">

                        <div className="wpo-blog-content-top">

                          <Link
                            onClick={ClickHandler}
                            className="thumb"
                            to={`/blog-single/${blog.slug}`}
                          >
                            {blog.category}
                          </Link>

                          <h2>
                            <Link
                              onClick={ClickHandler}
                              to={`/blog-single/${blog.slug}`}
                            >
                              {blog.title}
                            </Link>
                          </h2>

                        </div>

                        <ul>

                          <li>
                            <i className="ti-user"></i>
                            {blog.author}
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              to={`/blog-single/${blog.slug}`}
                            >
                              <i className="ti-comment-alt"></i>
                              {blog.comments} Comments
                            </Link>
                          </li>

                        </ul>

                      </div>

                    </div>

                  </Fade>

                </div>

              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;
