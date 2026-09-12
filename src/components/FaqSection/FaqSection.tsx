import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import cleaningIcon from "../../images/cleaning-icon.svg";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "What cleaning services does Bronco Cleaning Services provide?",
      answer:
        "Bronco provides residential, commercial, industrial, and specialized cleaning services across Dubai including deep cleaning, office cleaning, maid services, warehouse cleaning, sofa cleaning, move-in/move-out cleaning, and Airbnb turnovers.",
    },
    {
      id: 2,
      question: "Do you provide daily and monthly cleaning packages?",
      answer:
        "Yes, we offer flexible daily, hourly, weekly, and monthly cleaning plans customized to meet individual home and corporate business requirements in Dubai.",
    },
    {
      id: 3,
      question: "Which areas in Dubai do you cover?",
      answer:
        "We provide cleaning services across major Dubai locations including Downtown Dubai, Jumeirah, Business Bay, Dubai Marina, Palm Jumeirah, JLT, DIFC, City Walk, Sheikh Zayed Road, Al Barsha, Dubai Hills, Arabian Ranches, Jebel Ali Free Zone, and surrounding communities.",
    },
    {
      id: 4,
      question: "Do you provide deep cleaning services?",
      answer:
        "Yes, we specialize in professional deep cleaning for homes, offices, villas, warehouses, gyms, and commercial spaces using industrial steam cleaners, floor scrubbers, and eco-friendly sanitizers.",
    },
    {
      id: 5,
      question: "Do you provide cleaning services for offices and businesses?",
      answer:
        "Yes, we provide professional workplace and commercial cleaning solutions with flexible after-hours scheduling for corporate offices, retail showrooms, clinics, and commercial premises across Dubai.",
    },
    {
      id: 6,
      question: "Can I book cleaning services on an hourly basis?",
      answer:
        "Yes, hourly cleaning services are available starting from 35 AED/hr based on your specific tasks and time preferences.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-faq-section section-padding pt-0" ref={ref}>
      <div className="container">
        <div className="wpo-faq-wrap">
          <div className="row justify-content-center">

            {/* LEFT SIDE */}
            <div className="col-lg-4 col-md-10 col-12">
              <Fade direction="left" duration={1200} triggerOnce>
                <div className="wpo-faq-box">

                  <div className="wpo-section-title-s2">
                    <span>
                      <i>
                        <img src={cleaningIcon} alt="" />
                      </i>
                      faq
                    </span>

                    <h2 className="poort-text poort-in-right">
                      Frequently asked questions...
                    </h2>

                    <p>
                      Get quick answers to common questions regarding Bronco's cleaning solutions, service areas across Dubai, and booking plans.
                    </p>
                  </div>

                  <Link to="/contact" className="theme-btn-s2">
                    Book Service Now
                  </Link>

                </div>
              </Fade>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 col-md-10 col-12 mt-5 mt-lg-0">
              <Fade direction="right" duration={1200} triggerOnce>

                <div className="wpo-faq-items">

                  {faqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className={`accordion-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >

                      <h3
                        className="accordion-header"
                        onClick={() => toggleFaq(index)}
                      >
                        <button className="accordion-button">
                          {faq.question}
                        </button>
                      </h3>

                      {activeIndex === index && (
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      )}

                    </div>
                  ))}

                </div>

              </Fade>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;