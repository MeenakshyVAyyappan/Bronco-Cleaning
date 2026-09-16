import React from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";

interface FunFactItem {
  id: number;
  value: number;
  suffix?: string;
  label: string;
}

interface FunFactProps {
  fnClass?: string;
}

const FunFact: React.FC<FunFactProps> = ({ fnClass }) => {

  const funFacts: FunFactItem[] = [
    {
      id: 1,
      value: 25,
      suffix: "",
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
      suffix: "",
      label: "Team Members",
    },
    {
      id: 4,
      value: 85,
      suffix: "%",
      label: "Customer Retention Rate",
    },
  ];

   const containerRef = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(containerRef);

  return (
    <section className={`fanfuct-section ${fnClass || ""}`} ref={containerRef}>
      <div className="container">
        <div className="funfact-wrap">

          {/* Top Text */}
          <div className="top-content">
            <div className="title">
              <h3 className="splittext-line">
                “Customer satisfaction is at the heart of everything we do.”
              </h3>
            </div>
          </div>

          {/* Counter Items */}
          <div className="row">

            {funFacts.map((item, index) => (
              <div
                key={item.id}
                className="col col-lg-3 col-sm-6 col-12"
              >
                <Fade
                  direction="up"
                  duration={1000}
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

export default FunFact;
