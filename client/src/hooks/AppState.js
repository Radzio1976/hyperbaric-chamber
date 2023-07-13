import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  sliderCounter: 0,
  isPriceBoxVisible: true,
  isAboutBoxVisible: true,
};

const { useGlobalState } = createGlobalState(initialState);

const AppState = () => {
  const [sliderCounter, setSliderCounter] = useGlobalState("sliderCounter");
  const [isPriceBoxVisible, setIsPriceBoxVisible] =
    useGlobalState("isPriceBoxVisible");
  const [isAboutBoxVisible, setIsAboutBoxVisible] =
    useGlobalState("isAboutBoxVisible");

  return {
    sliderCounter,
    setSliderCounter,
    isPriceBoxVisible,
    setIsPriceBoxVisible,
    isAboutBoxVisible,
    setIsAboutBoxVisible,
  };
};

export default AppState;
