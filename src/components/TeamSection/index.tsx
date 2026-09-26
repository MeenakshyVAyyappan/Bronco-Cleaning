import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import teamMembers from "../../api/team";
import { scrollToTop } from "../ScrollToTop";

const TeamSection: React.FC = () => {

  const ClickHandler = () => scrollToTop();

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <section className="wpo-team-section section-padding pt-0" ref={ref}>

      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              <h2 className="poort-text poort-in-right">
                Met Our Expert & Qualified Cleaners Team
              </h2>
            </div>
          </div>
        </div>

        <div className="wpo-team-wrap">

          <div className="row">

            {teamMembers.slice(0, 4).map((member, index) => (

              <div
                key={member.id}
                className="col col-lg-3 col-sm-6 col-12"
              >

                <Fade direction="up" delay={index * 200} triggerOnce>

                  <div className="wpo-team-item">

                    <div className="wpo-team-img-wrap">

                      <div className="wpo-team-img">

                        <Link onClick={ClickHandler} to={`/team-single/${member.slug}`}>
                          <img src={member.image} alt={member.name} />
                        </Link>

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

export default TeamSection;
