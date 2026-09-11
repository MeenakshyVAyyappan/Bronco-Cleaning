import React from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

interface FunFactItem {
  id: number;
  value: number;
  suffix?: string;
  label: string;
}

const funFacts: FunFactItem[] = [
  {
    id: 1,
    value: 25,
    label: "Years of Experience",
  },
  {
    id: 2,
    value: 75,
    suffix: "k",
    label: "Satisfied Clients",
  },
  {
    id: 3,
    value: 134,
    label: "Team Members",
  },
  {
    id: 4,
    value: 85,
    label: "Customer Retention Rate",
  },
];

const FunFactSectionTwo: React.FC = () => {
  return (
    <section className="fanfuct-section section-padding pb-0">
      <div className="container">
        <div className="funfact-wrap mt-0 p-0">
          <div className="row">

            {funFacts.map((item, index) => (
              <div
                key={item.id}
                className="col col-lg-3 col-sm-6 col-12"
              >
                <Fade
                  direction="up"
                  delay={index * 200}
                  triggerOnce
                >
                  <div className="item">

                    <h2>
                      <span>
                        <CountUp
                          end={item.value}
                          duration={2}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </span>
                      {item.suffix}
                    </h2>

                    <h3>{item.label}</h3>

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

export default FunFactSectionTwo;