import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

import AppState from "./AppState";

const useScrollToSectionHook = () => {
  const navigate = useNavigate();
  const scrollToSection = async (target) => {
    console.log(target);
    await navigate(`/`);
    target.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { scrollToSection };
};

export default useScrollToSectionHook;
