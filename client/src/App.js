import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Benefit from "./components/Benefit";
import Footer from "./components/Footer";

import AppState from "./hooks/AppState";

const App = () => {
  const { appRef } = AppState();

  return (
    <div id="App" ref={appRef}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/benefits/:currentSlug" element={<Benefit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
