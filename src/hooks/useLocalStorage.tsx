import React from 'react';

const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn('Local storage full', JSON.stringify(e));
    }
  }

  const getItem = (key: string) => {
    return localStorage.getItem(key);
  }

  const removeItem = (key: string) => {
    return localStorage.removeItem(key);
  }

  return { getItem, setItem, removeItem };
};

export default useLocalStorage;
