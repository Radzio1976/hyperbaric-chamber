const useShowElementWhenToScrollTo = () => {
  const showElementWhenScrollTo = (element, setState) => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setState(entry.isIntersecting);
    });
    observer.observe(element.current);
  };

  return { showElementWhenScrollTo };
};

export default useShowElementWhenToScrollTo;
