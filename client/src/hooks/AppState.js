import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  sliderCounter: 0,
  isPriceBoxVisible: true,
};

const { useGlobalState } = createGlobalState(initialState);

const AppState = () => {
  const [sliderCounter, setSliderCounter] = useGlobalState("sliderCounter");
  const [isPriceBoxVisible, setIsPriceBoxVisible] =
    useGlobalState("isPriceBoxVisible");

  return {
    sliderCounter,
    setSliderCounter,
    isPriceBoxVisible,
    setIsPriceBoxVisible,
  };
};

export default AppState;
