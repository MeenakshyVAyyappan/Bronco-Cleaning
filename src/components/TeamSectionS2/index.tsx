import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import teamMembers from "../../api/team";

const TeamSectionS2: React.FC = () => {

  const ClickHandler = () => window.scrollTo(10, 0);

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-team-section section-padding" ref={ref}>

      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              <h2 className="poort-text poort-in-right">
                Meet Our Expert & Qualified Cleaners Team
              </h2>
            </div>
          </div>
        </div>

        <div className="wpo-team-wrap">

          <div className="row">

            {teamMembers.map((member, index) => (

              <div
                key={member.id}
                className="col col-lg-3 col-sm-6 col-12"
              >

                <Fade direction="up" delay={index * 200} triggerOnce>

                  <div className="wpo-team-item">

                    <div className="wpo-team-img-wrap">

                      <div className="wpo-team-img">

                        <img src={member.image} alt={member.name} />

                        <div className="social">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="ti-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-pinterest"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>

                      </div>

                    </div>

                    <div className="wpo-team-text">

                      <h2>
                        <Link
                          onClick={ClickHandler}
                          to={`/team-single/${member.slug}`}
                        >
                          {member.name}
                        </Link>
                      </h2>

                      <span>{member.role}</span>

                    </div>

                  </div>

                </Fade>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TeamSectionS2;