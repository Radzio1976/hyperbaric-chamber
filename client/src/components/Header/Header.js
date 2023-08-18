import "animate.css";

import AppState from "../../hooks/AppState";
import useScrollToSectionHook from "../../hooks/useScrollToSectionHook";
import useScrollDirectionHook from "../../hooks/useScrollDirectionHook";

const Header = () => {
  const {
    homeRef,
    aboutRef,
    priceListRef,
    benefitsRef,
    reviewsRef,
    contactRef,
  } = AppState();
  const { scrollToSection } = useScrollToSectionHook();
  const scrollDirection = useScrollDirectionHook();
  return (
    <header
      className={`header-section ${
        scrollDirection === "down" ? "hide" : "show"
      }`}
    >
      <div className="header-width-container">
        <div
          className="logo-container"
          onClick={() => scrollToSection(homeRef)}
        ></div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li onClick={() => scrollToSection(homeRef)}>
            <label htmlFor="menu-toggle">Home</label>
          </li>
          <li onClick={() => scrollToSection(aboutRef)}>
            <label htmlFor="menu-toggle">O mnie</label>
          </li>
          <li onClick={() => scrollToSection(priceListRef)}>
            <label htmlFor="menu-toggle">Cennik</label>
          </li>
          <li onClick={() => scrollToSection(benefitsRef)}>
            <label htmlFor="menu-toggle">Korzyści</label>
          </li>
          <li onClick={() => scrollToSection(reviewsRef)}>
            <label htmlFor="menu-toggle">Opinie</label>
          </li>
          <li onClick={() => scrollToSection(contactRef)}>
            <label htmlFor="menu-toggle">Kontakt </label>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
