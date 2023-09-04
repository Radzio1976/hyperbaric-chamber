import { useEffect } from "react";
import { Link } from "react-router-dom";

import AppState from "../../hooks/AppState";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";
import useScrollToTopHook from "../../hooks/useScrollToTopHook";

const Benefits = () => {
  const {
    isBenefitsBoxVisible,
    setIsBenefitsBoxVisible,
    benefitsRef,
    benefits,
  } = AppState();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();
  const scrollToTop = useScrollToTopHook();

  useEffect(() => {
    showElementWhenScrollTo(benefitsRef, setIsBenefitsBoxVisible);
  }, []);

  return (
    <div className="benefits-section" ref={benefitsRef}>
      <div className="benefits-boxes">
        <div className="benefits-boxes-first-title">
          <h2>Korzyści z tlenoterapii</h2>
        </div>
        <div className="benefits-boxes-top">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className="benefits-box"
                style={{ display: benefit.id < 4 ? "block" : "none" }}
              >
                <div
                  className={`benefits-box-icon benefits-box-icon-${
                    benefit.name
                  } ${
                    isBenefitsBoxVisible
                      ? "animate__animated animate__lightSpeedInLeft animate__delay-1s"
                      : ""
                  }`}
                ></div>
                <div className="benefits-box-text-container">
                  <h3>{benefit.name.replace("-", " ")}</h3>
                  <p>{benefit.lessText}</p>
                </div>
                <button>
                  <Link onClick={scrollToTop} to={`/benefits/${benefit.name}`}>
                    Więcej
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
        <div className="benefits-boxes-title">
          <h2>Korzyści z tlenoterapii</h2>
        </div>
        <div className="benefits-boxes-bottom">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className="benefits-box"
                style={{ display: benefit.id > 3 ? "block" : "none" }}
              >
                <div
                  className={`benefits-box-icon benefits-box-icon-${
                    benefit.name
                  } ${
                    isBenefitsBoxVisible
                      ? "animate__animated animate__lightSpeedInLeft animate__delay-1s"
                      : ""
                  }`}
                ></div>
                <div className="benefits-box-text-container">
                  <h3>{benefit.name.replace("-", " ")}</h3>
                  <p>{benefit.lessText}</p>
                </div>
                <button>
                  <Link onClick={scrollToTop} to={`/benefits/${benefit.name}`}>
                    Więcej
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
