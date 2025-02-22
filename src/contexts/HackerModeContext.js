import React, { createContext, useState, useContext } from "react";

const HackerModeContext = createContext();

export const HackerModeProvider = ({ children }) => {
  const [hackerMode, setHackerMode] = useState(false);

  const toggleHackerMode = () => {
    try {
      const audio = new Audio("/sounds/hack.mp3");
      audio.play().catch((err) => console.log("Áudio ainda não disponível"));
    } catch (error) {
      console.log("Áudio ainda não disponível");
    }
    setHackerMode((prev) => !prev);
  };

  return (
    <HackerModeContext.Provider value={{ hackerMode, toggleHackerMode }}>
      {children}
    </HackerModeContext.Provider>
  );
};

export const useHackerMode = () => useContext(HackerModeContext);
