import { useLocation } from "react-router-dom";
import Wave from "react-wavify";

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className={`footer-section ${
        location.pathname.includes("benefits")
          ? "background-white"
          : "background-grey"
      }`}
    >
      <div className="footer-width-container">
        <p>
          <span className="footer-developed-by">Developed by</span>{" "}
          <span className="footer-developer-name">Radosław Tomaszewski</span>
        </p>
        <Wave
          fill="url(#gradient)"
          style={{
            height: "150px",
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#181842" />
              <stop offset="90%" stopColor="#26265c" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </footer>
  );
};

export default Footer;
