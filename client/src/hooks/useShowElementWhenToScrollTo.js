const useShowElementWhenToScrollTo = () => {
  const showElementWhenScrollTo = (element, setState) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(element.current);
  };

  return { showElementWhenScrollTo };
};

export default useShowElementWhenToScrollTo;
