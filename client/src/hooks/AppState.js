import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  sliderCounter: 0,
};

const { useGlobalState } = createGlobalState(initialState);

const AppState = () => {
  const [sliderCounter, setSliderCounter] = useGlobalState("sliderCounter");

  return {
    sliderCounter,
    setSliderCounter,
  };
};

export default AppState;
