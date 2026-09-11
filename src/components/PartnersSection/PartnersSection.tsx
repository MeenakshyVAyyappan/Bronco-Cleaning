import React from "react";
import Slider from "react-slick";

import partner1 from "../../images/partners/1.png";
import partner2 from "../../images/partners/2.png";
import partner3 from "../../images/partners/3.png";
import partner4 from "../../images/partners/4.png";
import partner5 from "../../images/partners/5.png";

interface Partner {
  id: number;
  image: string;
}

const partners: Partner[] = [
  { id: 1, image: partner1 },
  { id: 2, image: partner2 },
  { id: 3, image: partner3 },
  { id: 4, image: partner4 },
  { id: 5, image: partner5 },
  { id: 6, image: partner2 },
];

const PartnersSection: React.FC = () => {

  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="partners-section pt-0">

      <h2>Featured by popular companies in the industry</h2>

      <div className="container">

        <Slider {...settings} className="partners-slider">

          {partners.map((partner) => (

            <div key={partner.id}>

              <div>

                <img src={partner.image} alt="partner" />

              </div>

            </div>

          ))}

        </Slider>

      </div>

    </section>
  );
};

export default PartnersSection;