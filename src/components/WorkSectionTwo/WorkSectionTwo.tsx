import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import Icon1 from "../../images/work/work-color-icon-1.svg";
import Icon2 from "../../images/work/work-color-icon-2.svg";
import Icon3 from "../../images/work/work-color-icon-3.svg";

interface WorkItem {
  id: number;
  icon: string;
  title: string;
  number: string;
}

const works: WorkItem[] = [
  {
    id: 1,
    icon: Icon1,
    title: "Book online",
    number: "01",
  },
  {
    id: 2,
    icon: Icon2,
    title: "get service",
    number: "02",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Enjoy service",
    number: "03",
  },
];


const WorkSectionTwo: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  
  useSplitTextAnimation(ref);
  return (
    <section className="wpo-work-section style-2 section-padding" ref={ref}>
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7">
            <div className="wpo-section-title">
              <h2 className="poort-text poort-in-right">
                best Cleaning services see how it works actually
              </h2>
            </div>
          </div>
        </div>

        <div className="wpo-work-wrap">
          <div className="row">

            {works.map((work, index) => (
              <div
                className="col col-lg-4 col-sm-6 col-12"
                key={work.id}
              >
                <Fade
                  direction="up"
                  delay={index * 200}
                  triggerOnce
                >
                  <div className="wpo-work-item">

                    <div className="wpo-work-icon">
                      <img src={work.icon} alt={work.title} />
                    </div>

                    <div className="wpo-work-text">
                      <span>{work.title}</span>
                      <h2>{work.number}</h2>
                      <div className="line"></div>
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

export default WorkSectionTwo;