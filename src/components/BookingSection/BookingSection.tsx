import React from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import cleaningIcon from "../../images/cleaning-icon.svg";
import arrowUp from "../../images/arrow-up.svg";

import img1 from "../../images/booking/img-1.jpg";
import img2 from "../../images/booking/img-2.jpg";
import img3 from "../../images/booking/img-3.jpg";
import img4 from "../../images/booking/img-4.jpg";

import shape from "../../images/booking/shape.png";

const BookingSection: React.FC = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-booking-section section-padding pt-0"  ref={ref}>
      <div className="container-fluid">

        {/* Section Title */}
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title">

              <span>
                <i>
                  <img src={cleaningIcon} alt="" />
                </i>
                Book Bronco Cleaning Dubai
              </span>

              <h2 className="poort-text poort-in-right">
                We are professionally committed to providing Dubai's best cleaning services for customer satisfaction
              </h2>

              <Zoom triggerOnce>
                <div className="booking-btn">
                  <Link
                    onClick={ClickHandler}
                    className="btn-wrapper btn-move"
                    to="/contact"
                  >
                    <small>
                      <i>
                        <img src={arrowUp} alt="" />
                      </i>
                      BOOK YOUR SERVICE TODAY
                    </small>
                  </Link>
                </div>
              </Zoom>

            </div>
          </div>
        </div>

        {/* Booking Images */}
        <div className="row mt-10 g-4 px-lg-5">
          <div className="col-lg-4 col-md-6">
            <Fade direction="up" duration={1000} triggerOnce>
              <img src={img1} alt="" className="w-100 rounded shadow-sm" style={{ height: '400px', objectFit: 'cover' }} />
            </Fade>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <Fade direction="up" duration={1200} triggerOnce>
              <img src={img2} alt="" className="w-100 rounded shadow-sm mb-4" style={{ height: '188px', objectFit: 'cover' }} />
              <img src={img3} alt="" className="w-100 rounded shadow-sm" style={{ height: '188px', objectFit: 'cover' }} />
            </Fade>
          </div>
          
          <div className="col-lg-4 col-md-12">
            <Fade direction="up" duration={1400} triggerOnce>
              <img src={img4} alt="" className="w-100 rounded shadow-sm" style={{ height: '400px', objectFit: 'cover' }} />
            </Fade>
          </div>
        </div>

      </div>

      {/* Shape */}
      <div className="shape-img new_img-animet" data-speed="100">
        <img src={shape} alt="" />
      </div>
    </section>
  );
};

export default BookingSection;