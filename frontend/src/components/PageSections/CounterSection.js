"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function CounterSection({ customClass }) {
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true); // Start counting when in viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className={`counter-section section-padding ${customClass}`}
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  end={98}
                  duration={2.5}
                  startOnMount={false}
                  redraw={true}
                  delay={0}
                  useEasing={true}
                  start={startCount ? 0 : null}
                />
              </p>
              <h6>Proyectos Completados</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  end={50}
                  duration={2.5}
                  startOnMount={false}
                  redraw={true}
                  delay={0}
                  useEasing={true}
                  start={startCount ? 0 : null}
                />
              </p>
              <h6>Equipo Calificado</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  end={95}
                  duration={2.5}
                  suffix="%"
                  startOnMount={false}
                  redraw={true}
                  delay={0}
                  useEasing={true}
                  start={startCount ? 0 : null}
                />
              </p>
              <h6>Satisfacción del Cliente</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  end={15}
                  duration={2.5}
                  suffix="+"
                  startOnMount={false}
                  redraw={true}
                  delay={0}
                  useEasing={true}
                  start={startCount ? 0 : null}
                />
              </p>
              <h6>Años de Experiencia</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
