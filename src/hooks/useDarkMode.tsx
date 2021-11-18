import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { CONSTANTS } from '../constants';

const useDarkMode = () => {
  const { getItem, setItem } = useLocalStorage();
  const [mode, setMode] = useState(getItem(CONSTANTS.MODE) || CONSTANTS.LIGHT);

  const toogleMode = () => {
    const newMode = mode === CONSTANTS.DARK ? CONSTANTS.LIGHT : CONSTANTS.DARK;
    setMode(newMode);
    setItem(CONSTANTS.MODE, newMode);
  }

  return { mode, toogleMode };
};

export default useDarkMode;
