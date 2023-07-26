import AppState from "./AppState";

const useInputChangeHook = () => {
  const {
    setInputName,
    inputNameError,
    setInputEmail,
    inputEmailError,
    setInputSubject,
    inputSubjectError,
    setInputText,
    inputTextError,
  } = AppState();
  const inputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const inputNameErrorChange = () => setInputName(inputNameError);

  const inputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const inputEmailErrorChange = () => setInputEmail(inputEmailError);

  const inputSubjectChange = (e) => {
    setInputSubject(e.target.value);
  };

  const inputSubjectErrorChange = () => setInputSubject(inputSubjectError);

  const inputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const inputTextErrorChange = () => setInputText(inputTextError);

  return {
    inputNameChange,
    inputNameErrorChange,
    inputEmailChange,
    inputEmailErrorChange,
    inputSubjectChange,
    inputSubjectErrorChange,
    inputTextChange,
    inputTextErrorChange,
  };
};

export default useInputChangeHook;
