import image1 from "../../images/slider-1.jpg";
import image2 from "../../images/slider-2.jpg";
import image3 from "../../images/slider-3.jpeg";
import SliderPrevAndNextButtons from "./SliderPrevAndNextButtons";

const slider1 = () => {
  return (
    <div
      className="animate__animated animate__fadeInLeft slide"
      style={{
        backgroundImage: `url(${image1})`,
      }}
    >
      <div className="slider-info">
        <h1 className="animate__animated animate__lightSpeedInRight animate__delay-1s">
          Terapia tlenowa
        </h1>
        <h2 className="animate__animated animate__lightSpeedInRight animate__delay-3s">
          Komora hiperbaryczna
        </h2>
        <div className="slider-info-phone-number animate__animated animate__lightSpeedInRight animate__delay-5s">
          <p>Zarezerwuj wizytę</p>
          <h3>509 998 279</h3>
        </div>
      </div>
    </div>
  );
};

const slider2 = () => {
  return (
    <div
      className="animate__animated animate__fadeInRight slide"
      style={{
        backgroundImage: `url(${image2})`,
      }}
    ></div>
  );
};

const slider3 = () => {
  return (
    <div
      className="animate__animated animate__fadeInLeft slide"
      style={{
        backgroundImage: `url(${image3})`,
      }}
    ></div>
  );
};
// export default [image1, image2, image3];
export default [slider1, slider2, slider3];

/*        <h1 className="animate__animated animate__lightSpeedInRight animate__delay-5s">
          Komora hiperbaryczna
        </h1>
        */
