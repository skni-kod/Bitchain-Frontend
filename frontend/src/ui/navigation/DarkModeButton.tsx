import React, { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { MdOutlineWbSunny } from "react-icons/md";

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(function(){
    if(isDarkMode){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[isDarkMode])

  return (
    <button className="text-xl text-bgDark dark:text-bgWhite" onClick={() => setIsDarkMode((s: boolean) => !s)}>
      <MdOutlineWbSunny />
    </button>
  );
}
