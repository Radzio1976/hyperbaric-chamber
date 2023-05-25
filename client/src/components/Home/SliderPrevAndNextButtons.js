import useSliderHook from "../../hooks/useSliderHook";

const SliderPrevAndNextButtons = () => {
  const { getPrevSlide, getNextSlide } = useSliderHook();
  return (
    <div className="slider-prev-and-next-buttons-container">
      <div onClick={getPrevSlide} className="slider-prev-button"></div>
      <div onClick={getNextSlide} className="slider-next-button"></div>
    </div>
  );
};

export default SliderPrevAndNextButtons;
