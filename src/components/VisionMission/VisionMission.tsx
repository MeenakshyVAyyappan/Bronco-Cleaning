import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import cleaningIcon from "../../images/cleaning-icon.svg";

const VisionMission: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  
  useSplitTextAnimation(ref);

  return (
    <section className="wpo-vision-mission-section section-padding pt-6" ref={ref}>
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="wpo-section-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '50px' }}>
              <span>
                <i><img src={cleaningIcon} alt="icon" /></i>
                our purpose
              </span>
              <h2 className="poort-text poort-in-right">Vision & Mission</h2>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          
          <div className="col-lg-6 col-md-12">
            <Fade direction="up" duration={1000} triggerOnce>
              <div className="vision-mission-box" style={{ background: '#F2F5EF', padding: '50px', borderRadius: '32px', height: '100%', border: '1px solid #DCE3D8' }}>
                <div className="icon mb-4">
                  <i className="ti-eye" style={{ fontSize: '40px', color: '#7C9473' }}></i>
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#22302A' }}>Our Vision</h3>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
                  To be the most trusted and sought-after cleaning service provider in the UAE, recognized for our commitment to sustainable practices, uncompromising quality, and unparalleled customer satisfaction. We envision a future where every space we touch sets the benchmark for hygiene, comfort, and pristine living.
                </p>
              </div>
            </Fade>
          </div>

          <div className="col-lg-6 col-md-12">
            <Fade direction="up" duration={1200} triggerOnce>
              <div className="vision-mission-box" style={{ background: '#F2F5EF', padding: '50px', borderRadius: '32px', height: '100%', border: '1px solid #DCE3D8' }}>
                <div className="icon mb-4">
                  <i className="ti-target" style={{ fontSize: '40px', color: '#7C9473' }}></i>
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#22302A' }}>Our Mission</h3>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
                  To deliver exceptional, eco-friendly, and reliable cleaning solutions to homes and businesses across Dubai. We strive to create spotless environments that enhance the health, productivity, and happiness of our clients, driven by a professionally trained team dedicated to excellence in every sweep.
                </p>
              </div>
            </Fade>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
