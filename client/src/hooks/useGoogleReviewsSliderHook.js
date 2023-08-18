import AppState from "./AppState";

const useGoogleReviewsSliderHook = () => {
  const { googleReviewsForSlider, setGoogleReviewsForSlider, screenWidth } =
    AppState();
  const changeReviewsSlides = (googleReviews) => {
    let qty =
      screenWidth <= 650 ? 1 : screenWidth > 650 && screenWidth <= 950 ? 2 : 3;
    setGoogleReviewsForSlider(googleReviews.slice(0, qty));
    let counter = 0;
    let interval = setInterval(() => {
      counter++;
      if (counter + qty > googleReviews.length) {
        counter = 0;
      }
      let googleReviewsForSlider = googleReviews.slice(counter, counter + qty);
      setGoogleReviewsForSlider(googleReviewsForSlider);
    }, 5000);
  };
  const nextGoogleReviewsForSlider = (googleReviews) => {
    let qty =
      screenWidth <= 650 ? 1 : screenWidth > 650 && screenWidth <= 950 ? 2 : 3;
    let counter = googleReviewsForSlider[0].id + 1;
    counter++;
    if (counter + qty > googleReviews.length) {
      counter = 0;
    }
    let nextGoogleReviewsForSlider = googleReviews.slice(
      counter,
      counter + qty
    );
    setGoogleReviewsForSlider(nextGoogleReviewsForSlider);
  };
  const prevGoogleReviewsForSlider = (googleReviews) => {
    let qty =
      screenWidth <= 650 ? 1 : screenWidth > 650 && screenWidth <= 950 ? 2 : 3;
    let counter = googleReviewsForSlider[0].id;
    counter--;
    if (counter < 0) {
      counter = googleReviews.length - qty;
    }
    let nextGoogleReviewsForSlider = googleReviews.slice(
      counter,
      counter + qty
    );
    setGoogleReviewsForSlider(nextGoogleReviewsForSlider);
  };

  return {
    changeReviewsSlides,
    nextGoogleReviewsForSlider,
    prevGoogleReviewsForSlider,
  };
};

export default useGoogleReviewsSliderHook;
