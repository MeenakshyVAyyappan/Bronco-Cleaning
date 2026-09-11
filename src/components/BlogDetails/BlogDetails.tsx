import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../../api/blogs";
import BlogSidebar from "../BlogSidebar";
import bImg1 from "../../images/blog-details/img-2.jpg";
import bImg2 from "../../images/blog-details/img-3.jpg";
import bImg3 from "../../images/blog-details/img-4.jpg";

interface BlogProps {
  bclass?: string;
  blRight?: string;
  blLeft?: string;
}

const BlogSingle: React.FC<BlogProps> = ({ bclass, blRight, blLeft }) => {

  const { slug } = useParams<{ slug: string }>();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="container section-padding text-center">
        <div className="not-found">
          <h2>Blog Post Not Found</h2>
          <Link to="/blog" className="theme-btn mt-3">Back to All Dubai Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`blog-single-section section-padding ${bclass || ""}`}>
      <div className="container">

        <div className="row">

          {/* BLOG CONTENT */}
          <div className={`col col-lg-8 col-md-12 col-12 ${blRight || ""}`}>

            <div className="post format-standard-image">

              <div className="entry-media">
                <img src={blog.blogSingleImg} alt={blog.title} />
              </div>

              <div className="entry-meta">
                <ul>

                  <li>
                    <i className="fi flaticon-calendar"></i>
                    <Link to="#">{blog.date}</Link>
                  </li>

                  <li>
                    <i className="fi ti-user"></i>
                    <Link to="#">{blog.author}</Link>
                  </li>

                  <li>
                    <i className="fi flaticon-clock"></i>
                    <Link to="#">{blog.category}</Link>
                  </li>

                </ul>
              </div>

              <div className="entry-details">

                <h3>{blog.title}</h3>

                <p className="lead fw-bold text-dark">
                  {blog.description}
                </p>

                {blog.content ? (
                  blog.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))
                ) : (
                  <p>
                    Bronco Cleaning Services provides tailored residential, commercial, and deep cleaning solutions across all Dubai communities. Our trained cleaning specialists operate with strict adherence to Dubai Municipality hygiene guidelines.
                  </p>
                )}

              </div>

            </div>


            {/* QUOTE */}
            <blockquote>
              "Cleanliness and hygiene inspire healthy homes and productive businesses across Dubai."
              <span>Bronco Cleaning Services Dubai</span>
            </blockquote>


            {/* EXTRA CONTENT */}
            <div className="post-team-content">

              <h3>Why Dubai Trusts Bronco Cleaning Services</h3>

              <div className="row align-items-center">

                <div className="col-lg-7 col-12">

                  <ul className="content">
                    <li>100+ Trained & Vetted Cleaning Staff</li>
                    <li>23 Key Dubai Locations Covered</li>
                    <li>Eco-Friendly Disinfectants & Equipment</li>
                    <li>Flexible Daily, Weekly & Monthly Packages</li>
                    <li>100% Satisfaction Guarantee</li>
                  </ul>

                </div>

                <div className="col-lg-5 col-12">
                  <img src={bImg1} alt={blog.title} />
                </div>

              </div>

            </div>


            {/* IMAGE GALLERY */}
            <div className="row my-4">

              <div className="col-lg-6 col-md-6 col-12 im-1 mb-3">
                <img src={bImg2} alt="Cleaning results" className="img-fluid rounded" />
              </div>

              <div className="col-lg-6 col-md-6 col-12 im-1 mb-3">
                <img src={bImg3} alt="Dubai cleaning team" className="img-fluid rounded" />
              </div>

            </div>


            <p>
              Whether you require deep cleaning for your villa in Palm Jumeirah or daily commercial maintenance in Business Bay, Bronco Cleaning Services is your trusted cleaning partner in Dubai.
            </p>


            {/* TAG + SHARE */}
            <div className="tag-share-wrap">

              <div className="row">

                <div className="col-lg-6 col-12">

                  <div className="tag-share clearfix">

                    <div className="tag">

                      <span>Tag:</span>

                      <ul>
                        <li><Link to="#">Dubai Cleaning</Link></li>
                        <li><Link to="#">Deep Clean</Link></li>
                        <li><Link to="#">Bronco</Link></li>
                      </ul>

                    </div>

                  </div>

                </div>


                <div className="col-lg-6 col-12">

                  <div className="tag-share-s2 clearfix">

                    <div className="tag">

                      <span>Share:</span>

                      <ul>
                        <li><Link to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                        <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                        <li><Link to="#"><i className="flaticon-vimeo"></i></Link></li>
                        <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                      </ul>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* COMMENT FORM */}
            <div className="comments-area">

              <div className="comment-respond">

                <h3 className="comment-reply-title">Leave a Comment</h3>

                <form className="comment-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you for your comment!"); }}>

                  <div className="form-inputs">

                    <div>
                      <input placeholder="Enter your name*" type="text" required />
                    </div>

                    <div>
                      <input placeholder="Enter your mail*" type="email" required />
                    </div>

                    <div>
                      <input placeholder="Enter your mobile number*" type="text" required />
                    </div>

                    <div>
                      <input placeholder="Dubai Location Area*" type="text" />
                    </div>

                  </div>

                  <div className="form-textarea">
                    <textarea placeholder="Enter your comment or inquiry here*"></textarea>
                  </div>

                  <div className="form-submit">
                    <input className="theme-btn" value="Post Comment" type="submit" />
                  </div>

                </form>

              </div>

            </div>

          </div>


          {/* SIDEBAR */}
          <div className={`col col-lg-4 ${blLeft || ""}`}>
            <BlogSidebar />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSingle;