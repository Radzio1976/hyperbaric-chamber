import Iframe from "react-iframe";

import AppState from "../../hooks/AppState";

const Contact = () => {
  const { contactRef } = AppState();
  return (
    <div className="contact-container" ref={contactRef}>
      <div className="contact-width-container">
        <div className="map-and-address-container">
          <div className="map-and-address-title">
            <h2>Jak nas znaleźć</h2>
          </div>
          <div className="map-container">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.144743222356!2d15.677274876915746!3d50.86552005739106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470edd12f8fe6f1b%3A0x12f2b1950274ba62!2sPrema%20Marzena%20Rosiak%20-%20Komora%20hiperbaryczna!5e0!3m2!1spl!2spl!4v1689926612088!5m2!1spl!2spl"
              id=""
              className=""
            />
          </div>
          <div className="address-container">
            <h3>Prema Marzena Rosiak</h3>
            <p>Plac Piastowski 38</p>
            <p>58-560 Jelenia Góra</p>
            <p className="address-phone">tel: 506-853-033</p>
            <p>Email: rosiak.marzena@tlen.pl</p>
            <p className="address-nip">NIP: 9551634455</p>
            <p>Regon: 525016279</p>
          </div>
          <div className="address-working-hours">
            <h3>Godziny otwarcia</h3>
            <p>poniedziałek 8.00 - 15.00</p>
            <p>wtorek 8.00 - 15.00</p>
            <p>środa 8.00 - 15.00</p>
            <p>czwartek 8.00 - 15.00</p>
            <p>piątek 8.00 - 15.00</p>
          </div>
        </div>
        <div className="contact-form-container">
          <div className="contact-form-title">
            <h2>Napisz do nas</h2>
          </div>
          <div className="contact-form-box">
            <form>
              <input placeholder="Imię"></input>
              <input placeholder="Email"></input>
              <textarea placeholder="Napisz coś..."></textarea>
              <button>Wyślij</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
