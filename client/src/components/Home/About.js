import React, { useEffect } from "react";

import AppState from "../../hooks/AppState";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";

const About = () => {
  const { isAboutBoxVisible, setIsAboutBoxVisible, aboutRef } = AppState();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();

  useEffect(() => {
    showElementWhenScrollTo(aboutRef, setIsAboutBoxVisible);
  }, []);

  return (
    <div ref={aboutRef} className="about">
      <div className="about-container">
        <div className="about-image-container">
          <div
            className="animate__animated animate__lightSpeedInRight animate__delay-1s about-image"
            style={{
              display: isAboutBoxVisible ? "block" : "none",
            }}
          ></div>
        </div>
        <div
          className="animate__animated animate__lightSpeedInRight animate__delay-2s about-text"
          style={{
            display: isAboutBoxVisible ? "block" : "none",
          }}
        >
          <h1>Kim jestem</h1>
          <p>
            Od dwóch lat prowadzę sesje terapii tlenowej. Mam za sobą
            przeprowadzonych około 1000 sesji z pacjentami w komorze
            hiperbarycznej. Terapia tlenowa w komorze hiperbarycznej to medyczna
            procedura, w której pacjent oddycha 98% tlenem pod zwiększonym
            ciśnieniem atmosferycznym w specjalnej komorze hiperbarycznej.
            Wysokie ciśnienie sprawia, że tlen jest rozpuszczony w płynach
            ustrojowych i krwiobiegu w większych ilościach niż przy oddychaniu w
            normalnym ciśnieniu. To sprawia, że uszkodzone tkanki otrzymują
            więcej tlenu, co przyspiesza proces gojenia i regeneracji. Terapia
            tlenowa w komorze hiperbarycznej jest stosowana w leczeniu schorzeń,
            takich jak choroby zakaźne, urazy, choroby skóry, choroby układu
            krążenia, urazy mózgu i wiele innych. Marzena Rosiak
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
