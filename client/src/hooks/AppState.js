import { createRef } from "react";
import { createGlobalState } from "react-hooks-global-state";
import benefits from "../data/benefits";

const initialState = {
  sliderCounter: 0,
  isPriceBoxVisible: false,
  isAboutBoxVisible: false,
  isBenefitsBoxVisible: false,
  isLatestReviewsBoxVisible: false,
  isContactBoxVisible: false,
  appRef: createRef(),
  homeRef: createRef(),
  aboutRef: createRef(),
  priceListRef: createRef(),
  benefitsRef: createRef(),
  reviewsRef: createRef(),
  contactRef: createRef(),
  googleReviewsStars: [1, 2, 3, 4, 5],
  googleReviews: [],
  googleReviewsForSlider: [],
  inputName: "",
  inputNameError: "Pole imię musi zawierać conajmniej 5 znaków",
  inputEmail: "",
  inputEmailError: "Pole email musi zawierać conajmniej 5 znaków oraz @",
  inputSubject: "",
  inputSubjectError: "Pole temat musi zawierać conajmniej 5 znaków",
  inputText: "",
  inputTextError: "Pole tekst musi zawierać conajmniej 20 znaków",
  sendEmailSuccess: false,
  scrollDirection: null,
  currentSlug: "",
  benefits,
  currentBenefitData: {},
  screenWidth: window.innerWidth,
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
  const [isContactBoxVisible, setIsContactBoxVisible] = useGlobalState(
    "isContactBoxVisible"
  );
  const [appRef, setAppRef] = useGlobalState("appRef");
  const [homeRef, setHomeRef] = useGlobalState("homeRef");
  const [aboutRef, setAboutRef] = useGlobalState("aboutRef");
  const [priceListRef, setPriceListRef] = useGlobalState("priceListRef");
  const [benefitsRef, setBenefitsRef] = useGlobalState("benefitsRef");
  const [reviewsRef, setReviewsRef] = useGlobalState("reviewsRef");
  const [contactRef, setContactRef] = useGlobalState("contactRef");
  const [googleReviewsStars, setGoogleReviewsStars] =
    useGlobalState("googleReviewsStars");
  const [googleReviews, setGoogleReviews] = useGlobalState("googleReviews");
  const [googleReviewsForSlider, setGoogleReviewsForSlider] = useGlobalState(
    "googleReviewsForSlider"
  );
  const [inputName, setInputName] = useGlobalState("inputName");
  const [inputNameError] = useGlobalState("inputNameError");
  const [inputEmail, setInputEmail] = useGlobalState("inputEmail");
  const [inputEmailError] = useGlobalState("inputEmailError");
  const [inputSubject, setInputSubject] = useGlobalState("inputSubject");
  const [inputSubjectError] = useGlobalState("inputSubjectError");
  const [inputText, setInputText] = useGlobalState("inputText");
  const [inputTextError] = useGlobalState("inputTextError");
  const [sendEmailSuccess, setSendEmailSuccess] =
    useGlobalState("sendEmailSuccess");
  const [scrollDirection, setScrollDirection] =
    useGlobalState("scrollDirection");
  const [currentSlug, setCurrentSlug] = useGlobalState("currentSlug");
  const [benefits] = useGlobalState("benefits");
  const [currentBenefitData, setCurrentBenefitData] =
    useGlobalState("currentBenefitData");
  const [screenWidth, setScreenWidth] = useGlobalState("screenWidth");

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
    isContactBoxVisible,
    setIsContactBoxVisible,
    appRef,
    setAppRef,
    homeRef,
    setHomeRef,
    aboutRef,
    setAboutRef,
    priceListRef,
    setPriceListRef,
    benefitsRef,
    setBenefitsRef,
    reviewsRef,
    setReviewsRef,
    contactRef,
    setContactRef,
    googleReviews,
    setGoogleReviews,
    googleReviewsStars,
    setGoogleReviewsStars,
    googleReviewsForSlider,
    setGoogleReviewsForSlider,
    inputName,
    setInputName,
    inputNameError,
    inputEmail,
    setInputEmail,
    inputEmailError,
    inputSubject,
    setInputSubject,
    inputSubjectError,
    inputText,
    setInputText,
    inputTextError,
    sendEmailSuccess,
    setSendEmailSuccess,
    scrollDirection,
    setScrollDirection,
    currentSlug,
    setCurrentSlug,
    benefits,
    currentBenefitData,
    setCurrentBenefitData,
    screenWidth,
    setScreenWidth,
  };
};

export default AppState;
