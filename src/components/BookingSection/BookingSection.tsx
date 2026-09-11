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
import img5 from "../../images/booking/img-5.jpg";
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
        <div className="wpo-booking-wrap">

          <div className="wpo-booking-item">
            <Fade direction="left" duration={1000} triggerOnce>
              <img src={img1} alt="" />
            </Fade>
          </div>

          <div className="wpo-booking-item">
            <Fade direction="up" duration={1200} triggerOnce>
              <img src={img2} alt="" />
            </Fade>
          </div>

          <div className="wpo-booking-item">

            <div className="img-1">
              <Fade direction="left" duration={1000} triggerOnce>
                <img src={img3} alt="" />
              </Fade>
            </div>

            <div className="img-2">
              <Fade direction="right" duration={1000} triggerOnce>
                <img src={img4} alt="" />
              </Fade>
            </div>

          </div>

          <div className="wpo-booking-item">
            <Fade direction="right" duration={1000} triggerOnce>
              <img src={img5} alt="" />
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