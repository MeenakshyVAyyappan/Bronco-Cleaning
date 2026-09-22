import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";

import img1 from "../../images/booking/img-1.jpg";
import img2 from "../../images/booking/img-2.jpg";
import img3 from "../../images/booking/img-3.jpg";
import img4 from "../../images/booking/img-4.jpg";

import shape from "../../images/booking/shape.png";

const BookingSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-booking-section section-padding pt-0"  ref={ref}>
      <div className="container-fluid">



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
