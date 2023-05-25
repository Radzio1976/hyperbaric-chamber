import image1 from "../../images/slider-1.jpg";
import image2 from "../../images/slider-2.jpg";
import image3 from "../../images/slider-3.jpeg";

const slider1 = () => {
  return (
    <div
      className="animate__animated animate__fadeInLeft"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    ></div>
  );
};

const slider2 = () => {
  return (
    <div
      className="animate__animated animate__fadeInRight"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    ></div>
  );
};

const slider3 = () => {
  return (
    <div
      className="animate__animated animate__fadeInLeft"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    ></div>
  );
};
// export default [image1, image2, image3];
export default [slider1, slider2, slider3];
