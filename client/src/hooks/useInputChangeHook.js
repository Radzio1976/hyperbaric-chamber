import AppState from "./AppState";

const useInputChangeHook = () => {
  const { setInputName, setInputEmail, setInputText } = AppState();
  const inputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const inputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const inputTextChange = (e) => {
    setInputText(e.target.value);
  };

  return { inputNameChange, inputEmailChange, inputTextChange };
};

export default useInputChangeHook;
