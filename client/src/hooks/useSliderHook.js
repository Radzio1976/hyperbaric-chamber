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

  return { getNewSlide };
};

export default useSliderHook;
