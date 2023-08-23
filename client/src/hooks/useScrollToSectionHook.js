import { useNavigate } from "react-router-dom";

const useScrollToSectionHook = () => {
  const navigate = useNavigate();
  const scrollToSection = async (target) => {
    await navigate(`/`);
    target.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      top: target.offsetTop,
    });
  };
  return { scrollToSection };
};

export default useScrollToSectionHook;
