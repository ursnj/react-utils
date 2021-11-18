import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { CONSTANTS } from '../constants';

const useDarkMode = () => {
  const { getItem, setItem } = useLocalStorage();
  const [theme, setTheme] = useState(getItem(CONSTANTS.THEME) || CONSTANTS.LIGHT);

  const toogleTheme = () => {
    const newTheme = theme === CONSTANTS.DARK ? CONSTANTS.LIGHT : CONSTANTS.DARK;
    setTheme(newTheme);
    setItem(CONSTANTS.THEME, newTheme);
  }

  return { theme, toogleTheme };
};

export default useDarkMode;
