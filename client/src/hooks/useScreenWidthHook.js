import { useEffect } from "react";
import AppState from "./AppState";

const useScreenWidthHook = () => {
  const { setScreenWidth } = AppState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // 🔥 ustaw od razu na start
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useScreenWidthHook;
