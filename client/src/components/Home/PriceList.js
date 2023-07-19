import React, { useEffect } from "react";

import AppState from "../../hooks/AppState";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";

const PriceList = () => {
  const { isPriceBoxVisible, setIsPriceBoxVisible, priceListRef } = AppState();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();

  useEffect(() => {
    showElementWhenScrollTo(priceListRef, setIsPriceBoxVisible);
  }, []);

  return (
    <div className="price-list-main-container" ref={priceListRef}>
      <div className="price-list-width-container">
        <div className="price-list-title">
          <h2>Cennik</h2>
        </div>
        <div className="price-list-boxes-container">
          <div
            className="price-box animate__animated animate__lightSpeedInLeft animate__delay-1s"
            style={{
              display: isPriceBoxVisible ? "block" : "none",
            }}
          >
            <h6 className="price-box-price">
              130 zł<span> / sesja</span>
            </h6>
            <h5 className="price-box-sessions-qty">1 sesja</h5>
          </div>
          <div
            className="price-box animate__animated animate__lightSpeedInLeft animate__delay-2s"
            style={{
              display: isPriceBoxVisible ? "block" : "none",
            }}
          >
            <h6 className="price-box-price">
              110 zł<span> / sesja</span>
            </h6>
            <h5 className="price-box-sessions-qty">5 sesji</h5>
          </div>
          <div
            className="price-box animate__animated animate__lightSpeedInLeft animate__delay-3s"
            style={{
              display: isPriceBoxVisible ? "block" : "none",
            }}
          >
            <h6 className="price-box-price">
              100 zł<span> / sesja</span>
            </h6>
            <h5 className="price-box-sessions-qty">10 sesji</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
