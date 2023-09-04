import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";
import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import Benefit from "./components/Benefit";
import Footer from "./components/Footer";

import AppState from "./hooks/AppState";
import useGoogleReviewsSliderHook from "./hooks/useGoogleReviewsSliderHook";

const App = () => {
  const {
    googleReviews,
    setGoogleReviews,
    currentSlug,
    benefits,
    currentBenefitData,
    appRef,
  } = AppState();
  const { changeReviewsSlides } = useGoogleReviewsSliderHook();
  useEffect(() => {
    Axios.post("/getReviews")
      .then((res) => {
        setGoogleReviews(res.data.reversedReviews);
        changeReviewsSlides(res.data.reversedReviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="App" ref={appRef}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home googleReviews={googleReviews} />}
          />
          <Route
            path="/benefits/:currentSlug"
            element={<Benefit currentBenefitData={currentBenefitData} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
