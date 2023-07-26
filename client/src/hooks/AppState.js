import { createRef } from "react";
import { createGlobalState } from "react-hooks-global-state";
import googleReviews from "../data/googleReviews";

const initialState = {
  sliderCounter: 0,
  isPriceBoxVisible: true,
  isAboutBoxVisible: true,
  isBenefitsBoxVisible: true,
  isLatestReviewsBoxVisible: true,
  isContactBoxVisible: true,
  aboutRef: createRef(),
  priceListRef: createRef(),
  benefitsRef: createRef(),
  reviewsRef: createRef(),
  contactRef: createRef(),
  googleReviewsStars: [1, 2, 3, 4, 5],
  googleReviews: googleReviews(),
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
  };
};

export default AppState;
