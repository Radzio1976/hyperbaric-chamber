import { useEffect } from "react";

import GoogleStar from "../../images/googleStar.png";

import AppState from "../../hooks/AppState";
import useGoToGoogleReviewHook from "../../hooks/useGoToGoogleReviewHook";
import useGoogleReviewsSliderHook from "../../hooks/useGoogleReviewsSliderHook";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";
import useScreenWidthHook from "../../hooks/useScreenWidthHook";

const LatestReviews = (props) => {
  const googleReviews = props.googleReviews;
  const {
    googleReviewsStars,
    googleReviewsForSlider,
    addGoogleReviewURL,
    isLatestReviewsBoxVisible,
    setIsLatestReviewsBoxVisible,
    reviewsRef,
  } = AppState();
  const { goToGoogleReview } = useGoToGoogleReviewHook();
  const { nextGoogleReviewsForSlider, prevGoogleReviewsForSlider } =
    useGoogleReviewsSliderHook();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();
  const { GetScreenWidth } = useScreenWidthHook();
  GetScreenWidth();

  useEffect(() => {
    showElementWhenScrollTo(reviewsRef, setIsLatestReviewsBoxVisible);
  }, []);

  return (
    <div className="latest-reviews-section" ref={reviewsRef}>
      <div className="latest-reviews-boxes">
        <div className="latest-reviews-boxes-title">
          <h2>Ostatnie opinie</h2>
        </div>
        <div className="latest-reviews-boxes-container">
          {googleReviewsForSlider.map((review, i) => {
            return (
              <div
                onClick={() => goToGoogleReview(review.reviewLink)}
                key={review.id}
                className={`review-box ${
                  isLatestReviewsBoxVisible
                    ? "animate__animated animate__lightSpeedInRight animate__delay-1s"
                    : ""
                }`}
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
              prevGoogleReviewsForSlider(googleReviews);
            }}
            className="slider-prev-button"
          ></div>
          <div
            onClick={() => {
              nextGoogleReviewsForSlider(googleReviews);
            }}
            className="slider-next-button"
          ></div>
        </div>
        <div className="latest-reviews-add-review-button-container">
          <div>
            <p onClick={() => goToGoogleReview(addGoogleReviewURL)}>
              Dodaj opinię
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReviews;
