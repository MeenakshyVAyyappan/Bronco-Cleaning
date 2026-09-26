import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { scrollToTop } from "../ScrollToTop";

import projects from "../../api/projects";

const ProjectSection: React.FC = () => {

  const ClickHandler = () => {
    scrollToTop();
  };

  return (
    <section className="wpo-project-section section-padding">
      <div className="wpo-project-wrap">

        <div className="container">

          <div className="wpo-project-slide-item">

            <div className="row">

              {projects.map((project, index) => (

                <div key={project.id} className={project.col}>

                  <Fade direction="up" delay={index * 100} triggerOnce>

                    <div className="wpo-project-item">

                      <div className="wpo-project-img middle-light">
                        <Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>
                          <img src={project.image} alt={project.title} />
                        </Link>
                      </div>

                      <div className="wpo-project-text">

                        <div className="thumb">
                          <span>{project.category}</span>
                        </div>

                        <h2>
                          <Link
                            onClick={ClickHandler}
                            to={`/project-single/${project.slug}`}
                          >
                            {project.title}
                          </Link>
                        </h2>

                        <Link
                          className="arrow"
                          onClick={ClickHandler}
                          to={`/project-single/${project.slug}`}
                        >
                          <i className="ti-arrow-top-right"></i>
                        </Link>

                      </div>

                    </div>

                  </Fade>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
