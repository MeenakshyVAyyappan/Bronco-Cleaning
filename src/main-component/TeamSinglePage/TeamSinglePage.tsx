import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

import teamMembers from "../../api/team";

import certificate1 from "../../images/certificate/1.jpg";
import certificate2 from "../../images/certificate/2.jpg";
import certificate3 from "../../images/certificate/3.jpg";
import certificate4 from "../../images/certificate/4.jpg";

const TeamSinglePage: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();

  const TeamDetails = teamMembers.find(
    (item) => item.slug === slug
  );

  const SubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!TeamDetails) {
    return <div style={{ padding: "120px", textAlign: "center" }}>Team member not found</div>;
  }

  return (
    <Fragment>

      <Navbar2 />

      <PageTitle
        pageTitle={`Because Clean Feels Better`}
        pagesub={TeamDetails.name}
        pclass={'wpo-page-title-s2'}
      />

      <div className="team-pg-area section-padding">

        <div className="container">

          <div className="team-single-wrap">

            {/* TEAM INFO */}
            <div className="team-info-wrap">

              <div className="row align-items-center">

                <div className="col-lg-5">

                  <div className="team-info-img">
                    <img src={TeamDetails.image} alt={TeamDetails.name} />
                  </div>

                </div>

                <div className="col-lg-7">

                  <div className="team-info-text">

                    <h2>{TeamDetails.name}</h2>

                    <ul>
                      <li>Position: <span>{TeamDetails.role}</span></li>
                      <li>Practice Area: <span>Residential & Commercial Cleaning</span></li>
                      <li>Experience: <span>5+ Years in UAE</span></li>
                      <li>Address: <span>Dubai, United Arab Emirates</span></li>
                      <li>Phone: <span>+971 4 123 4567</span></li>
                      <li>Email: <span>info@broncocleaning.ae</span></li>
                    </ul>

                    {/* CERTIFICATES */}
                    <div className="certificates-wrap">

                      <h2>Certificates</h2>

                      <div className="certificates-items">

                        <div className="certificates-item">
                          <img src={certificate1} alt="" />
                        </div>

                        <div className="certificates-item">
                          <img src={certificate2} alt="" />
                        </div>

                        <div className="certificates-item">
                          <img src={certificate3} alt="" />
                        </div>

                        <div className="certificates-item">
                          <img src={certificate4} alt="" />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* EXPERIENCE */}
            <div className="team-exprience-area team-widget">

              <div className="row">

                <div className="col-lg-6">

                  <div className="exprience-wrap">

                    <h2>Personal Experience</h2>

                    <p>
                      A highly dedicated professional with extensive experience in delivering top-tier cleaning services across Dubai.
                      Committed to maintaining the highest standards of hygiene and customer satisfaction for both residential and commercial spaces.
                    </p>

                    <p>
                      Expert in using advanced cleaning equipment, eco-friendly products, and adhering to strict safety protocols to ensure a pristine environment.
                    </p>

                  </div>

                </div>


                <div className="col-lg-6">

                  <div className="education-area">

                    <h2>Training & Certifications</h2>

                    <ul>

                      <li>BICS (British Institute of Cleaning Science) Certified</li>
                      <li>Advanced Health and Safety Training, Dubai</li>
                      <li>Eco-Friendly Cleaning Protocols Certification</li>
                      <li>Professional Housekeeping Management</li>
                      <li>First Aid and Emergency Response</li>

                    </ul>

                  </div>

                </div>

              </div>


              {/* SKILLS */}
              <div className="skills-area">

                <div className="row">

                  <div className="col-lg-6">

                    <div className="exprience-wrap">

                      <h2>Skills</h2>

                      <div className="wpo-skill-progress">

                        <div className="wpo-progress-single">

                          <h5 className="progress-title">Office Cleaning</h5>

                          <div className="progress">
                            <div className="progress-bar" style={{ width: "85%" }}></div>
                          </div>

                          <span className="progress-number">85%</span>

                        </div>


                        <div className="wpo-progress-single">

                          <h5 className="progress-title">Home Cleaning</h5>

                          <div className="progress">
                            <div className="progress-bar" style={{ width: "80%" }}></div>
                          </div>

                          <span className="progress-number">80%</span>

                        </div>


                        <div className="wpo-progress-single">

                          <h5 className="progress-title">Bedroom Cleaning</h5>

                          <div className="progress">
                            <div className="progress-bar" style={{ width: "95%" }}></div>
                          </div>

                          <span className="progress-number">95%</span>

                        </div>

                      </div>

                    </div>

                  </div>


                  <div className="col-lg-6">

                    <div className="education-area ex-wiget">

                      <h2>Achievements</h2>

                      <ul>

                        <li>Employee of the Year 2023 - Bronco Cleaning</li>
                        <li>100+ 5-Star Customer Reviews</li>
                        <li>Outstanding Service Excellence Award</li>
                        <li>Top Rated Professional in Dubai Marina</li>
                        <li>Zero Safety Incidents Record</li>
                        <li>Special Recognition for Deep Cleaning</li>

                      </ul>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* CONTACT FORM */}
            <div className="wpo-contact-area ex-wiget">

              <div className="wpo-contact-title">

                <h2>Make an Appointment</h2>

                <p>
                  Do not put off until tomorrow the problems that need to be solved today.
                </p>

              </div>


              <div className="quote-form">

                <form onSubmit={SubmitHandler}>

                  <div className="form-group half-col">
                    <input type="text" className="form-control" placeholder="Name:" name="name" />
                  </div>

                  <div className="form-group half-col">
                    <input type="email" className="form-control" placeholder="Email:" name="email" />
                  </div>

                  <div className="form-group half-col">
                    <input type="text" className="form-control" placeholder="Phone" name="phone" />
                  </div>

                  <div className="form-group half-col">

                    <select name="subject" className="form-control" defaultValue="Subject">

                      <option disabled value="Subject">Subject</option>
                      <option value="Residential Deep Cleaning">Residential Deep Cleaning</option>
                      <option value="Commercial Office Cleaning">Commercial Office Cleaning</option>
                      <option value="Move-In/Move-Out Cleaning">Move-In/Move-Out Cleaning</option>
                      <option value="Specialized Sanitization">Specialized Sanitization</option>

                    </select>

                  </div>

                  <div className="form-group full-col">
                    <textarea className="form-control" name="note" placeholder="Case Description"></textarea>
                  </div>

                  <div className="form-group full-col text-center">
                    <button className="btn theme-btn-s2" type="submit">
                      Appointment
                    </button>
                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
      <Scrollbar />

    </Fragment>
  );
};

export default TeamSinglePage;