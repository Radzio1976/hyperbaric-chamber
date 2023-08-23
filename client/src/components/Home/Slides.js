import image1 from "../../images/Komora.png";
import image2 from "../../images/slider-2.jpg";
import image3 from "../../images/slider-3.jpeg";

const slider1 = () => {
  return (
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
export default [slider1, slider2, slider3];
