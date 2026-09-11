import React from "react";
import Slider from "react-slick";

import tLogo from "../../images/testimonial/t-logo.png";
import rating from "../../images/testimonial/rating.svg";

import img1 from "../../images/testimonial/image-1.jpg";
import img2 from "../../images/testimonial/image-2.jpg";

interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialSectionTwo: React.FC = () => {

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      text: "Excellent cleaning service with professional staff. They handled our home cleaning perfectly and maintained great attention to detail.",
      name: "Dubai Customer",
      role: "Residential Client",
      image: img1
    },
    {
      id: 2,
      text: "Reliable and flexible cleaning solutions for our office in Business Bay. Highly recommended for corporate cleaning.",
      name: "Business Client",
      role: "Corporate Office Manager, Dubai",
      image: img2
    },
    {
      id: 3,
      text: "The deep cleaning service for our villa in Palm Jumeirah was outstanding. Spotless tiles, clean AC vents, and polite staff!",
      name: "Villa Owner",
      role: "Palm Jumeirah Resident",
      image: img1
    },
    {
      id: 4,
      text: "Top-notch Airbnb turnover cleaning in Downtown Dubai. Always on time and guest feedback has been 5 stars!",
      name: "Holiday Home Host",
      role: "Downtown Dubai Host",
      image: img2
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

  return (
    <section className="wpo-testimonials-section style-2 section-padding pt-0">
      <div className="wpo-testimonial-wrap">
        <div className="container">
          {/* Slider */}
          <Slider {...settings} className="wpo-testimonial-active">

            {testimonials.map((item) => (

              <div key={item.id} className="wpo-testimonial-item">

                <div className="t-logo">
                  <img src={tLogo} alt="" />
                </div>

                <p>“{item.text}”</p>

                <div className="wpo-testimonial-info">

                  <div className="wpo-testimonial-info-img">
                    <img src={item.image} alt={item.name} />
                  </div>

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

export default TestimonialSectionTwo;