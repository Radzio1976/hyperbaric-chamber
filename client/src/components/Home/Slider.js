import { useEffect } from "react";
import image1 from "../../images/Komora.png";
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
      {/* {slides.map((slider, i) => {
        return i === sliderCounter ? slider() : null;
      })} */}
      <div
        className="animate__animated animate__fadeInLeft slide"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="slider-info">
          <h1 className="animate__animated animate__lightSpeedInRight animate__delay-1s slider-info-komora">
            Komora
          </h1>
          <h1 className="animate__animated animate__lightSpeedInRight animate__delay-1s slider-info-hiperbaryczna">
            Hiperbaryczna
          </h1>
          <h1 className="animate__animated animate__lightSpeedInRight animate__delay-1s slider-info-jelenia-gora">
            Jelenia Góra
          </h1>
          <h2 className="animate__animated animate__lightSpeedInRight animate__delay-2s slider-info-terapia-tlenowa">
            Terapia tlenowa
          </h2>
          <h3 className="animate__animated animate__lightSpeedInRight animate__delay-3s slider-info-zarezerwuj-wizyte">
            Zarezerwuj wizytę
          </h3>
          <div className="animate__animated animate__lightSpeedInRight animate__delay-3s slider-info-phone-number">
            <div className="slider-info-phone-number-icon"></div>
            <div className="slider-info-phone-number-text">
              <h3 className="slider-info-phone-number-name">tel.</h3>
              <h3 className="slider-info-phone-number-number">506-853-033</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
