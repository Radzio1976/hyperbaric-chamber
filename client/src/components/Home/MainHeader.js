import "animate.css";

const MainHeader = () => {
  return (
    <div className="main-header-wrapper">
      <div className="logo-container">
        <div className="logo-image"></div>
      </div>
      <div className="main-menu-container">
        <ul>
          <li>Home</li>
          <li>O mnie</li>
          <li>Tlenoterapia</li>
          <li>Komora hiperbaryczna</li>
          <li>Cennik</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
