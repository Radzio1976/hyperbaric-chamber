import { useEffect } from "react";

import slides from "../components/Home/Slides";
import AppState from "./AppState";

const useSliderHook = () => {
  const { sliderCounter, setSliderCounter } = AppState();
  const getNewSlide = () => {
    let count = 0;
    setInterval(() => {
      count++;
      setSliderCounter(count - 1);
      if (count === slides.length) {
        count = 0;
      }
    }, 8000);
  };

  const getPrevSlide = () => {
    let count = sliderCounter;
    if (count > 0) {
      count = count - 1;
    } else {
      count = slides.length - 1;
    }
    setSliderCounter(count);
  };

  const getNextSlide = () => {
    let count = sliderCounter;
    if (count < slides.length - 1) {
      count = count + 1;
    } else {
      count = 0;
    }
    setSliderCounter(count);
  };

  return { getNewSlide, getPrevSlide, getNextSlide };
};

export default useSliderHook;
