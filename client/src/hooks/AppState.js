import { createRef } from "react";
import { createGlobalState } from "react-hooks-global-state";

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
  googleReviews: [
    {
      id: 0,
      name: "Anna Skrabulska",
      starsQty: 5,
      reviewText: `Po czterech zabiegach moje samopoczucie poprawiło się zdecydowanie. Więcej energii do działania, poprawa koncentracji.
      Pani Marzena bardzo miła i kompetentna osoba. Gorąco polecam:)`,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/U4T9J1",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfReL8-_Ex4WnwTuJwFVKBgBUbDDjn40PdMC-msuiTq=s40-c-rp-mo-br100",
    },
    {
      id: 1,
      name: "Mateusz Molski",
      starsQty: 5,
      reviewText: `skorzystałam z oferty -komory hiperbarycznej- jestem bardzo zadowolona.
      SUPER Pani Marzenka, wszystko profesjonalnie i bezkonfliktowo. POLECAM`,
      date: "Lipiec 16, 2023",
      reviewLink: "https://g.co/kgs/nsaeLv",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtcIhNYP17c2qXb9nXrerdGzBTVUaAJrlpykQlzjsX2B=s40-c-rp-mo-br100",
    },
    {
      id: 2,
      name: "Edward Artymowicz",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 11, 2023",
      reviewLink: "https://g.co/kgs/oeo5Wu",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtezA9nNOZDx_ZrkYuxo1KXxz81v6jmDmcRqV_6KAVdD=s40-c-rp-mo-br100",
    },
    {
      id: 3,
      name: "Ewa Mikołajczyk",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/MtGQo8",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfeJ0vn-M_2RuUiMGpnvQtVWu_1kFhBsIwus0EcWW0o=s40-c-rp-mo-br100",
    },
    {
      id: 4,
      name: "Marian",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/MtGQo8",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfeJ0vn-M_2RuUiMGpnvQtVWu_1kFhBsIwus0EcWW0o=s40-c-rp-mo-br100",
    },
    {
      id: 5,
      name: "Stefan",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/MtGQo8",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfeJ0vn-M_2RuUiMGpnvQtVWu_1kFhBsIwus0EcWW0o=s40-c-rp-mo-br100",
    },
    {
      id: 6,
      name: "Gonzales",
      starsQty: 5,
      reviewText: ``,
      date: "Lipiec 17, 2023",
      reviewLink: "https://g.co/kgs/MtGQo8",
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtfeJ0vn-M_2RuUiMGpnvQtVWu_1kFhBsIwus0EcWW0o=s40-c-rp-mo-br100",
    },
  ],
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
