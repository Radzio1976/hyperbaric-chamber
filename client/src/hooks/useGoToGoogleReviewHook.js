const useGoToGoogleReviewHook = () => {
  const goToGoogleReview = (url) => {
    let path = url;
    window.open(path, "_blank");
  };
  return { goToGoogleReview };
};

export default useGoToGoogleReviewHook;
