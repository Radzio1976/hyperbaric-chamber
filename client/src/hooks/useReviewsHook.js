import Axios from "axios";

import AppState from "./AppState";

const useReviewsHook = () => {
  const { setGoogleReviews } = AppState();
  const getReviewsFromDataBase = () => {
    Axios.post("/hyperbaric-chamber/getReviews")
      .then((res) => {
        setGoogleReviews(res.data.reversedReviews);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { getReviewsFromDataBase };
};

export default useReviewsHook;
