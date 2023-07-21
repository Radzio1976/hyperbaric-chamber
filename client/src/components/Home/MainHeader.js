import "animate.css";

import AppState from "../../hooks/AppState";
import useScrollToSectionHook from "../../hooks/useScrollToSectionHook";

const MainHeader = () => {
  const { aboutRef, priceListRef, benefitsRef, reviewsRef, contactRef } =
    AppState();
  const { scrollToSection } = useScrollToSectionHook();
  return (
    <div className="main-header-wrapper">
      <div className="logo-container">
        <div className="logo-image"></div>
      </div>
      <div className="main-menu-container">
        <ul>
          <li>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>O mnie</li>
          <li onClick={() => scrollToSection(priceListRef)}>Cennik</li>
          <li onClick={() => scrollToSection(benefitsRef)}>Korzyści</li>
          <li onClick={() => scrollToSection(reviewsRef)}>Opinie</li>
          <li onClick={() => scrollToSection(contactRef)}>Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
