import React from "react";
import { useLocation } from "react-router-dom";

import AppState from "../../hooks/AppState";
import { useEffect } from "react";

const Benefit = (props) => {
  const location = useLocation();
  const { benefits, setCurrentBenefitData } = AppState();

  const getBenefitData = (benefitName) => {
    const data = benefits.filter((item) => {
      return item.name === benefitName;
    });
    return data[0];
  };
  useEffect(() => {
    setCurrentBenefitData(getBenefitData(location.pathname.slice(10)));
  }, []);
  return (
    <div className="Benefit">
      <div className="benefit-section">
        <div className="benefit-width-container">
          {benefits.map((item, i) => {
            return (
              <React.Fragment key={item.id}>
                {i === props.currentBenefitData.id ? (
                  <>
                    <img className="benefit-icon" src={item.icon}></img>
                    <div className="benefit-text-container">
                      <h2>
                        <span>{item.name[0]}</span>
                        {item.name.replace("-", " ").slice(1)}
                      </h2>
                      <p>{item.moreText}</p>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
