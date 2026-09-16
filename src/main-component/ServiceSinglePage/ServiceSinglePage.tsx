import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import services from "../../api/services";

const ServiceSinglePage: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();

  const ServiceDetails = services.find(
    (item) => item.slug === slug
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!ServiceDetails) {
    return (
      <Fragment>
        <Navbar2 />
        <div className="text-center section-padding my-5">
          <div className="not-found">
            <h2>Service not found!</h2>
            <Link to="/service" className="theme-btn mt-3">View All Cleaning Services</Link>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }

  return (
    <Fragment>

      <Navbar2 />

      <PageTitle
        pageTitle={'Bronco Cleaning Services Dubai'}
        pagesub={ServiceDetails.title}
      />

      <section className="service-single-page section-padding">

        <div className="container">

          <div className="row">

            {/* LEFT CONTENT */}

            <div className="col-lg-8 col-12 order-lg-2">

              <div className="service-single-wrap">

                <div className="title-image">
                  <img src={ServiceDetails.image} alt={ServiceDetails.title} />
                </div>

                <h2>{ServiceDetails.title}</h2>

                <p className="lead fw-bold text-success mb-3">
                  {ServiceDetails.intro}
                </p>

                <p>
                  {ServiceDetails.description}
                </p>

                {/* BENEFITS */}
                {ServiceDetails.benefits && ServiceDetails.benefits.length > 0 && (
                  <div className="my-4 p-4 rounded bg-light border-start border-4 border-success">
                    <h3 className="h4 mb-3" style={{ color: "#22302A", fontWeight: "700" }}>
                      Key Benefits of {ServiceDetails.title}
                    </h3>
                    <ul className="list-unstyled">
                      {ServiceDetails.benefits.map((benefit, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-center">
                          <i className="ti-check-box text-success me-2 fs-5"></i>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* WHY CHOOSE BRONCO */}
                {ServiceDetails.whyChoose && ServiceDetails.whyChoose.length > 0 && (
                  <div className="my-4">
                    <h3 className="h4 mb-3" style={{ color: "#22302A", fontWeight: "700" }}>
                      Why Choose Bronco Cleaning Services?
                    </h3>
                    <div className="row g-3">
                      {ServiceDetails.whyChoose.map((point, idx) => (
                        <div key={idx} className="col-md-6 col-12">
                          <div className="p-3 border rounded h-100 bg-white shadow-sm">
                            <i className="ti-star text-warning me-2 fs-5"></i>
                            <span style={{ fontWeight: "600" }}>{point}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CLEANING PROCESS ACCORDION */}
                {ServiceDetails.process && ServiceDetails.process.length > 0 && (
                  <div className="my-4">
                    <h3 className="h4 mb-3" style={{ color: "#22302A", fontWeight: "700" }}>
                      Step-by-Step Cleaning Process
                    </h3>
                    <div className="accordion">
                      {ServiceDetails.process.map((step, index) => (
                        <div
                          key={index}
                          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                        >
                          <button
                            className="accordion-header"
                            onClick={() => toggleAccordion(index)}
                          >
                            Step {index + 1}: {step}
                          </button>
                          {activeIndex === index && (
                            <div className="accordion-content">
                              <p>
                                Bronco's trained cleaning crew executes this step with full attention to detail and high-grade eco-friendly cleaning solutions.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SERVICE LOCATIONS COVERED */}
                <div className="my-4 p-4 rounded bg-light">
                  <h3 className="h5 mb-2" style={{ color: "#22302A", fontWeight: "700" }}>
                    Service Areas Covered in Dubai
                  </h3>
                  <p className="text-muted small mb-3">
                    Available across Al Safa, Jumeirah, Downtown Dubai, DIFC, City Walk, Business Bay, Nad Al Sheba, Sheikh Zayed Road, Al Quoz, Al Sufouh, Dubai Hills, Arabian Ranches, Dubai Sports City, Motor City, Al Barsha, Jumeirah Golf Estates, Emirates Hills, Palm Jumeirah, JLT, Dubai Marina, Jumeirah Park, Palm Jebel Ali, and Jebel Ali Free Zone.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {ServiceDetails.serviceAreas?.slice(0, 10).map((area, idx) => (
                      <span key={idx} className="badge bg-white text-dark border px-3 py-2">
                        📍 {area}
                      </span>
                    ))}
                    <span className="badge bg-success text-white px-3 py-2">+ 13 More Dubai Areas</span>
                  </div>
                </div>

                {/* CTA BANNER */}
                <div className="p-4 rounded text-white text-center my-4" style={{ backgroundColor: "#22302A" }}>
                  <h3 className="text-white mb-2" style={{ fontWeight: "700" }}>
                    Book Your Cleaning Service Today
                  </h3>
                  <p className="mb-3 text-light">
                    Professional Cleaning Solutions Across Dubai – Fast response and 100% satisfaction guaranteed.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <Link to="/contact" className="theme-btn">
                      Book Service Online
                    </Link>
                    <a href="tel:+97141234567" className="theme-btn-s2">
                      Call +971 4 123 4567
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* SIDEBAR */}

            <div className="col-lg-4 col-12 order-lg-1">

              <div className="service-sidebar" style={{ position: "sticky", top: "120px" }}>

                <div className="service-catagory">
                  <h4 className="px-3 pt-3 mb-2" style={{ color: "#22302A", fontWeight: "700" }}>
                    All Cleaning Services
                  </h4>
                  <ul>

                    {services.map((service) => (

                      <li key={service.id}>

                        <Link
                          to={`/service-single/${service.slug}`}
                          className={
                            service.slug === slug ? "active" : ""
                          }
                        >
                          {service.title}
                        </Link>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* SERVICE INFO */}

                <div className="service-info mt-4">

                  <div className="icon">
                    <i className="flaticon-phone-call"></i>
                  </div>

                  <h2>
                    Need Bronco Cleaning in Dubai?
                  </h2>

                  <span>Call anytime 24/7</span>

                  <a href="tel:+97141234567" className="num">
                    <span>+971 4 123 4567</span>
                  </a>

                  <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="btn btn-success w-100 mt-3" style={{ borderRadius: "20px", fontWeight: "600" }}>
                    <i className="fa fa-whatsapp me-2"></i> WhatsApp Enquiry
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
      <Scrollbar />

    </Fragment>
  );
};

export default ServiceSinglePage;
