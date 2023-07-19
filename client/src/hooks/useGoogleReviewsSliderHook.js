import AppState from "./AppState";
import googleReviews from "../data/googleReviews";

const useGoogleReviewsSliderHook = () => {
  const { googleReviews, googleReviewsForSlider, setGoogleReviewsForSlider } =
    AppState();
  const changeReviewsSlides = () => {
    setGoogleReviewsForSlider(googleReviews.slice(0, 3));
    let counter = 0;
    let interval = setInterval(() => {
      counter++;
      if (counter + 3 > googleReviews.length) {
        counter = 0;
      }
      let googleReviewsForSlider = googleReviews.slice(counter, counter + 3);
      setGoogleReviewsForSlider(googleReviewsForSlider);
    }, 20000);
  };
  const nextGoogleReviewsForSlider = () => {
    let counter = googleReviewsForSlider[0].id + 1;
    counter++;
    if (counter + 3 > googleReviews.length) {
      counter = 0;
    }
    let nextGoogleReviewsForSlider = googleReviews.slice(counter, counter + 3);
    setGoogleReviewsForSlider(nextGoogleReviewsForSlider);
  };
  const prevGoogleReviewsForSlider = () => {
    let counter = googleReviewsForSlider[0].id;
    counter--;
    if (counter < 0) {
      counter = googleReviews.length - 3;
    }
    let nextGoogleReviewsForSlider = googleReviews.slice(counter, counter + 3);
    setGoogleReviewsForSlider(nextGoogleReviewsForSlider);
  };

  return {
    changeReviewsSlides,
    nextGoogleReviewsForSlider,
    prevGoogleReviewsForSlider,
  };
};

export default useGoogleReviewsSliderHook;
