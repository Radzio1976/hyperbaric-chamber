import { useEffect } from "react";

import AppState from "./AppState";

const useScreenWidthHook = () => {
  const { setScreenWidth } = AppState();

  const GetScreenWidth = () => {
    useEffect(() => {
      window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
        console.log(window.innerWidth);
      });
    }, []);
  };

  return { GetScreenWidth };
};

export default useScreenWidthHook;
