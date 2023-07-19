import { useEffect } from "react";

import GoogleStar from "../../images/googleStar.png";

import AppState from "../../hooks/AppState";
import useGoToGoogleReviewHook from "../../hooks/useGoToGoogleReviewHook";
import useGoogleReviewsSliderHook from "../../hooks/useGoogleReviewsSliderHook";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";

import googleReviews from "../../data/googleReviews";

const LatestReviews = () => {
  const {
    googleReviewsStars,
    googleReviewsForSlider,
    isLatestReviewsBoxVisible,
    setIsLatestReviewsBoxVisible,
    reviewsRef,
  } = AppState();
  const { goToGoogleReview } = useGoToGoogleReviewHook();
  const {
    changeReviewsSlides,
    nextGoogleReviewsForSlider,
    prevGoogleReviewsForSlider,
  } = useGoogleReviewsSliderHook();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();

  useEffect(() => {
    changeReviewsSlides();
    showElementWhenScrollTo(reviewsRef, setIsLatestReviewsBoxVisible);
  }, []);

  console.log(googleReviewsForSlider);
  return (
    <div className="latest-reviews-container" ref={reviewsRef}>
      <div className="latest-reviews-boxes">
        <div className="latest-reviews-boxes-title">
          <h2>Ostatnie opinie</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="latest-reviews-boxes-container">
          {googleReviewsForSlider.map((review, i) => {
            return (
              <div
                onClick={() => goToGoogleReview(review.reviewLink)}
                key={review.id}
                className="review-box animate__animated animate__lightSpeedInRight animate__delay-1s"
                style={{
                  display: isLatestReviewsBoxVisible ? "block" : "none",
                }}
              >
                <div className="user-avatar-and-name">
                  <img src={review.userAvatar} alt={review.name}></img>
                  <p>{review.name}</p>
                </div>
                <div className="review-stars-qty">
                  {googleReviewsStars.map((star, i) => {
                    return (
                      <img
                        key={i}
                        src={GoogleStar}
                        style={{
                          width: "30px",
                          backgroundColor:
                            i + 1 <= review.starsQty ? "#f8b805" : "#dadce0",
                        }}
                        alt="Review star"
                      ></img>
                    );
                  })}
                </div>
                <div className="review-text">
                  <p>{review.reviewText}</p>
                </div>
                <div className="review-read-more">
                  <p>Więcej</p>
                </div>
                <div className="review-date">
                  <p>{review.date}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="review-prev-and-next-arrows">
          <div
            onClick={() => {
              prevGoogleReviewsForSlider();
            }}
            className="slider-prev-button"
          ></div>
          <div
            onClick={() => {
              nextGoogleReviewsForSlider();
            }}
            className="slider-next-button"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LatestReviews;
