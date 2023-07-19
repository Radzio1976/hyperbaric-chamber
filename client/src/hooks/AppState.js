import { createRef } from "react";
import { createGlobalState } from "react-hooks-global-state";
import googleReviews from "../data/googleReviews";

const initialState = {
  sliderCounter: 0,
  isPriceBoxVisible: true,
  isAboutBoxVisible: true,
  isBenefitsBoxVisible: true,
  isLatestReviewsBoxVisible: true,
  aboutRef: createRef(),
  priceListRef: createRef(),
  benefitsRef: createRef(),
  reviewsRef: createRef(),
  googleReviewsStars: [1, 2, 3, 4, 5],
  googleReviews: googleReviews(),
  googleReviewsForSlider: [],
};

const { useGlobalState } = createGlobalState(initialState);

const AppState = () => {
  const [sliderCounter, setSliderCounter] = useGlobalState("sliderCounter");
  const [isPriceBoxVisible, setIsPriceBoxVisible] =
    useGlobalState("isPriceBoxVisible");
  const [isAboutBoxVisible, setIsAboutBoxVisible] =
    useGlobalState("isAboutBoxVisible");
  const [isBenefitsBoxVisible, setIsBenefitsBoxVisible] = useGlobalState(
    "isBenefitsBoxVisible"
  );
  const [isLatestReviewsBoxVisible, setIsLatestReviewsBoxVisible] =
    useGlobalState("isLatestReviewsBoxVisible");
  const [aboutRef, setAboutRef] = useGlobalState("aboutRef");
  const [priceListRef, setPriceListRef] = useGlobalState("priceListRef");
  const [benefitsRef, setBenefitsRef] = useGlobalState("benefitsRef");
  const [reviewsRef, setReviewsRef] = useGlobalState("reviewsRef");
  const [googleReviewsStars, setGoogleReviewsStars] =
    useGlobalState("googleReviewsStars");
  const [googleReviews, setGoogleReviews] = useGlobalState("googleReviews");
  const [googleReviewsForSlider, setGoogleReviewsForSlider] = useGlobalState(
    "googleReviewsForSlider"
  );

  return {
    sliderCounter,
    setSliderCounter,
    isPriceBoxVisible,
    setIsPriceBoxVisible,
    isAboutBoxVisible,
    setIsAboutBoxVisible,
    isBenefitsBoxVisible,
    setIsBenefitsBoxVisible,
    isLatestReviewsBoxVisible,
    setIsLatestReviewsBoxVisible,
    aboutRef,
    setAboutRef,
    priceListRef,
    setPriceListRef,
    benefitsRef,
    setBenefitsRef,
    reviewsRef,
    setReviewsRef,
    googleReviews,
    setGoogleReviews,
    googleReviewsStars,
    setGoogleReviewsStars,
    googleReviewsForSlider,
    setGoogleReviewsForSlider,
  };
};

export default AppState;
