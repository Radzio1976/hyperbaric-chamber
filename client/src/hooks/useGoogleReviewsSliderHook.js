import AppState from "./AppState";

const useGoogleReviewsSliderHook = () => {
  const { googleReviewsForSlider, setGoogleReviewsForSlider, screenWidth } =
    AppState();
  const changeReviewsSlides = (googleReviews) => {
    let reviewsQty =
      screenWidth <= 650 ? 1 : screenWidth > 650 && screenWidth <= 950 ? 2 : 3;
    setGoogleReviewsForSlider(googleReviews.slice(0, reviewsQty));
    let counter = 0;
    let interval = setInterval(() => {
      counter++;
      if (counter + reviewsQty > googleReviews.length) {
        counter = 0;
      }
      let googleReviewsForSlider = googleReviews.slice(
        counter,
        counter + reviewsQty
      );
      setGoogleReviewsForSlider(googleReviewsForSlider);
    }, 5000);
  };
  const nextGoogleReviewsForSlider = (googleReviews) => {
    let reviewsQty =
      screenWidth <= 650 ? 1 : screenWidth > 650 && screenWidth <= 950 ? 2 : 3;
    let counter = googleReviewsForSlider[0].id + 1;
    counter++;
    if (counter + reviewsQty > googleReviews.length) {
      counter = 0;
    }
    let nextGoogleReviewsForSlider = googleReviews.slice(
      counter,
      counter + reviewsQty
    );
    setGoogleReviewsForSlider(nextGoogleReviewsForSlider);
  };
  const prevGoogleReviewsForSlider = (googleReviews) => {
    let reviewsQty =
      screenWidth <= 650 ? 1 : screenWidth > 650 && screenWidth <= 950 ? 2 : 3;
    let counter = googleReviewsForSlider[0].id;
    counter--;
    if (counter < 0) {
      counter = googleReviews.length - reviewsQty;
    }
    let nextGoogleReviewsForSlider = googleReviews.slice(
      counter,
      counter + reviewsQty
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
