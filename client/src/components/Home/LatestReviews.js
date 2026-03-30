import React, { useEffect, useState } from "react";

import GoogleStar from "../../images/googleStar.png";

import AppState from "../../hooks/AppState";
import useGoToGoogleReviewHook from "../../hooks/useGoToGoogleReviewHook";
import useGoogleReviewsSliderHook from "../../hooks/useGoogleReviewsSliderHook";
import useShowElementWhenToScrollTo from "../../hooks/useShowElementWhenToScrollTo";
import useScreenWidthHook from "../../hooks/useScreenWidthHook";

const LatestReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  // const googleReviews = props.googleReviews;
  const { next, prev, googleReviewsForSlider } =
    useGoogleReviewsSliderHook(reviews);
  const {
    googleReviewsStars,
    addGoogleReviewURL,
    googleReviewsSiteURL,
    isLatestReviewsBoxVisible,
    setIsLatestReviewsBoxVisible,
    reviewsRef,
  } = AppState();
  const { goToGoogleReview } = useGoToGoogleReviewHook();
  const { showElementWhenScrollTo } = useShowElementWhenToScrollTo();
  useScreenWidthHook();

  useEffect(() => {
    fetch("/getReviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reversedReviews);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    showElementWhenScrollTo(reviewsRef, setIsLatestReviewsBoxVisible);
  }, []);

  return (
    <div className="hyperbaric-chamber-latest-reviews-section" ref={reviewsRef}>
      <div className="hyperbaric-chamber-latest-reviews-boxes">
        <div className="hyperbaric-chamber-latest-reviews-boxes-title">
          <h2>Ostatnie opinie</h2>
        </div>
        <div className="hyperbaric-chamber-latest-reviews-boxes-container">
          {googleReviewsForSlider.map((review, i) => {
            return (
              <div
                onClick={() => goToGoogleReview(googleReviewsSiteURL)}
                key={review.id}
                className={`hyperbaric-chamber-review-box ${
                  isLatestReviewsBoxVisible
                    ? "animate__animated animate__lightSpeedInRight animate__delay-1s"
                    : ""
                }`}
              >
                <div className="hyperbaric-chamber-user-avatar-and-name">
                  <img src={review.userAvatar} alt=""></img>
                  <p>{review.name}</p>
                </div>
                <div className="hyperbaric-chamber-review-stars-qty">
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
                <div className="hyperbaric-chamber-review-text">
                  <p>{review.reviewText}</p>
                </div>
                <div className="hyperbaric-chamber-review-read-more">
                  <p>Więcej</p>
                </div>
                <div className="hyperbaric-chamber-review-date">
                  <p>{review.date}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hyperbaric-chamber-review-prev-and-next-arrows">
          <div
            onClick={prev}
            className="hyperbaric-chamber-slider-prev-button"
          ></div>
          <div
            onClick={next}
            className="hyperbaric-chamber-slider-next-button"
          ></div>
        </div>
        <div className="hyperbaric-chamber-latest-reviews-add-review-button-container">
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
