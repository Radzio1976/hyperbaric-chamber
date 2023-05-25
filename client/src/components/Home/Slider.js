import { useEffect } from "react";

import slides from "./Slides";
import AppState from "../../hooks/AppState";
import useSliderHook from "../../hooks/useSliderHook";

const Slider = () => {
  const { sliderCounter, setSliderCounter } = AppState();
  const { getNewSlide } = useSliderHook();

  useEffect(() => {
    getNewSlide();
  }, []);
  return (
    <div className="slider">
      {slides.map((slider, i) => {
        return i === sliderCounter ? slider() : null;
      })}
    </div>
  );
};

export default Slider;
