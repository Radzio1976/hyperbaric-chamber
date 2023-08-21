import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

import AppState from "./AppState";

const useScrollToSectionHook = () => {
  const navigate = useNavigate();
  const scrollToSection = async (target) => {
    console.log(target);
    await navigate(`/`);
    target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // target.current.scrollIntoView({
    //   top: target.offsetTop,
    //   behavior: "smooth",
    //   block: "start",
    // });
    // window.scrollTo({
    //   top: target.offsetTop,
    //   left: 0,
    //   behavior: "smooth",
    // });
  };
  return { scrollToSection };
};

export default useScrollToSectionHook;
