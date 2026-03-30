import { useEffect, useState } from "react";
import AppState from "./AppState";

const useGoogleReviewsSliderHook = (googleReviews) => {
  const { screenWidth } = AppState();
  const [googleReviewsForSlider, setGoogleReviewsForSlider] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const getReviewsQty = () => {
    if (screenWidth <= 650) return 1;
    if (screenWidth <= 950) return 2;
    return 3;
  };

  const updateSlider = (index) => {
    const reviewsQty = getReviewsQty();
    const sliced = googleReviews.slice(index, index + reviewsQty);
    setGoogleReviewsForSlider(sliced);
  };

  // 🔥 AUTO SLIDE
  useEffect(() => {
    if (!googleReviews || googleReviews.length === 0) return;

    updateSlider(currentIndex);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const reviewsQty = getReviewsQty();
        const nextIndex =
          prev + reviewsQty >= googleReviews.length ? 0 : prev + 1;
        return nextIndex;
      });
    }, 20000);

    return () => clearInterval(interval); // ✅ KLUCZOWE
  }, [googleReviews, screenWidth]);

  // 🔥 UPDATE przy zmianie indexu
  useEffect(() => {
    updateSlider(currentIndex);
  }, [currentIndex]);

  // 🔥 NEXT
  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= googleReviews.length ? 0 : prev + 1,
    );
  };

  // 🔥 PREV
  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? googleReviews.length - 1 : prev - 1,
    );
  };

  return { next, prev, googleReviewsForSlider };
};

export default useGoogleReviewsSliderHook;
