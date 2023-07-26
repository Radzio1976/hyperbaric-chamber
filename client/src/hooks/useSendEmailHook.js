import Axios from "axios";

import AppState from "./AppState";
import useInputChangeHook from "./useInputChangeHook";

const useSendEmailHook = () => {
  const {
    inputName,
    setInputName,
    inputEmail,
    setInputEmail,
    inputSubject,
    setInputSubject,
    inputText,
    setInputText,
    setSendEmailSuccess,
  } = AppState();
  const {
    inputNameErrorChange,
    inputEmailErrorChange,
    inputSubjectErrorChange,
    inputTextErrorChange,
  } = useInputChangeHook();

  const sendEmail = (e) => {
    e.preventDefault();
    let isValid = true;
    if (inputName.trim().length < 5) {
      isValid = false;
      inputNameErrorChange();
    }
    if (inputEmail.trim().length < 5 || !inputEmail.includes("@")) {
      isValid = false;
      inputEmailErrorChange();
    }
    if (inputSubject.trim().length < 5) {
      isValid = false;
      inputSubjectErrorChange();
    }
    if (inputSubject.trim().length < 10) {
      isValid = false;
      inputTextErrorChange();
    }
    if (isValid) {
      const emailData = {
        name: inputName.trim(),
        email: inputEmail.trim(),
        subject: inputSubject.trim(),
        text: inputText.trim(),
      };

      Axios.post("/sendEmail", emailData)
        .then((res) => {
          if (res.data.sendMessageSuccess) {
            setSendEmailSuccess(true);
            setTimeout(() => {
              setSendEmailSuccess(false);
            }, 3000);
            setInputName("");
            setInputEmail("");
            setInputSubject("");
            setInputText("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return { sendEmail };
};

export default useSendEmailHook;
