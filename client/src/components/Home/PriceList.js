import React, { useRef, useState, useEffect } from "react";

import AppState from "../../hooks/AppState";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";

const PriceList = () => {
  const { isPriceBoxVisible, setIsPriceBoxVisible } = AppState();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();
  const priceListBoxesContainerRef = useRef(null);

  useEffect(() => {
    showElementWhenScrollTo(priceListBoxesContainerRef, setIsPriceBoxVisible);
  }, []);

  return (
    <div className="price-list-main-container">
      <div className="price-list-width-container">
        <div className="price-list-title">
          <h2>Cennik</h2>
        </div>
        <div
          ref={priceListBoxesContainerRef}
          className="price-list-boxes-container"
        >
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

/*
import React, { useRef, useCallback, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PriceList = () => {
  const myRef = useRef(null);
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  console.log(myElementIsVisible);

  const handleScroll = useCallback(() => {
    if (myRef.current) {
      const top = myRef.current.getBoundingClientRect().top;
      console.log(top);
      setMyElementIsVisible(top >= 0 && top <= 920 ? true : false);
      // top >= 0 && top <= 920
      // console.log(top);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="price-list-main-container">
      <div className="price-list-width-container">
        <div className="price-list-title">
          <h2>Cennik</h2>
        </div>
        <div className="price-list-boxes-container">
          <div
            ref={myRef}
            className="price-box"
            style={{
              display: myElementIsVisible ? "block" : "none",
              transitionDelay: "5s",
            }}
          >
            <h6 className="price-box-price">
              130 zł<span> / sesja</span>
            </h6>
            <h5 className="price-box-sessions-qty">1 sesja</h5>
          </div>
          <div className="price-box">
            <h6 className="price-box-price">
              110 zł<span> / sesja</span>
            </h6>
            <h5 className="price-box-sessions-qty">5 sesji</h5>
          </div>
          <div className="price-box">
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
*/
