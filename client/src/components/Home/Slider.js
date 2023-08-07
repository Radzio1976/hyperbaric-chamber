import { useEffect } from "react";

import slides from "./Slides";
import AppState from "../../hooks/AppState";
import useSliderHook from "../../hooks/useSliderHook";
import SliderPrevAndNextButtons from "./SliderPrevAndNextButtons";

const Slider = () => {
  const { sliderCounter, setSliderCounter } = AppState();
  const { getNewSlide } = useSliderHook();

  useEffect(() => {
    // getNewSlide();
  }, []);
  return (
    <div className="slider">
      {/* <SliderPrevAndNextButtons /> */}
      {slides.map((slider, i) => {
        return i === sliderCounter ? slider() : null;
      })}
    </div>
  );
};

export default Slider;
