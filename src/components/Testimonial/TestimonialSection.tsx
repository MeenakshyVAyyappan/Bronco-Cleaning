import React from "react";
import Slider from "react-slick";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import cleaningIcon from "../../images/cleaning-icon.svg";
import rating from "../../images/testimonial/rating.svg";

interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
}

const TestimonialSection: React.FC = () => {

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      text: "Excellent cleaning service with professional staff. They handled our home cleaning perfectly and maintained great attention to detail.",
      name: "Dubai Customer",
      role: "Residential Client"
    },
    {
      id: 2,
      text: "Reliable and flexible cleaning solutions for our office in Business Bay. Highly recommended for corporate cleaning.",
      name: "Business Client",
      role: "Corporate Office Manager, Dubai"
    },
    {
      id: 3,
      text: "The deep cleaning service for our villa in Palm Jumeirah was outstanding. Spotless tiles, clean AC vents, and polite staff!",
      name: "Villa Owner",
      role: "Palm Jumeirah Resident"
    },
    {
      id: 4,
      text: "Top-notch Airbnb turnover cleaning in Downtown Dubai. Always on time and guest feedback has been 5 stars!",
      name: "Holiday Home Host",
      role: "Downtown Dubai Host"
    }
  ];

  const settings = {
    autoplay: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-testimonials-section section-padding pt-0 pb-4" ref={ref}>
      <div className="wpo-testimonial-wrap section-padding box-style">

        {/* Shape */}
        <div className="top-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 595 213"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0 0C196.35 0 392.7 0 595 0V6C549.766 9.372 517.231 29.459 490.32 60.432
              C487.205 64.131 484.301 67.994 481.387 71.852
              C471.791 84.51 461.32 96.901 449 107
              C413.41 137.599 372.873 155.357 330 162
              C295.278 167.322 262.27 163.707 231 155
              C181.455 140.866 139.591 109.828 110.381 71.217
              C105.401 64.655 100.158 58.485 94.464 52.531
              C66.143 22.44 36.537 9.521 0 6V0Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div className="container">

          {/* Section Title */}
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">

                <span>
                  <i>
                    <img src={cleaningIcon} alt="" />
                  </i>
                  Google Reviews & Testimonials
                </span>

                <h2 className="poort-text poort-in-right">
                  Client Feedback That Speaks Volumes
                </h2>

              </div>
            </div>
          </div>

          {/* Slider */}
          <Slider {...settings} className="wpo-testimonial-active">

            {testimonials.map((item) => (

              <div key={item.id} className="wpo-testimonial-item">



                <p>“{item.text}”</p>

                <div className="wpo-testimonial-info">



                  <div className="wpo-testimonial-info-text">
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>

                  <div className="rating">
                    <img src={rating} alt="rating" />
                  </div>

                </div>

              </div>

            ))}

          </Slider>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;