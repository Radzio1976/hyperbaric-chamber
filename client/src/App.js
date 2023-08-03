import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";
import { useEffect } from "react";

import Home from "./components/Home/Home";

import AppState from "./hooks/AppState";
import useGoogleReviewsSliderHook from "./hooks/useGoogleReviewsSliderHook";

const App = () => {
  const { googleReviews, setGoogleReviews } = AppState();
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
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home googleReviews={googleReviews} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
