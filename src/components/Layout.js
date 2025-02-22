import React, { useEffect } from "react";
import styled from "styled-components";
import MatrixRain from "./MatrixRain";
import ParticleBackground from "./ParticleBackground";
import { useHackerMode } from "../contexts/HackerModeContext";
import { useKonamiCode } from "../hooks/useKonamiCode";

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  ${(props) =>
    props.$hackerMode &&
    `
    filter: hue-rotate(180deg) brightness(1.2);
  `}
  transition: filter 0.5s ease;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);
`;

const Layout = ({ children }) => {
  const { hackerMode, toggleHackerMode } = useHackerMode();
  let clickSound;

  useKonamiCode(() => {
    toggleHackerMode();
  });

  useEffect(() => {
    try {
      clickSound = new Audio("/sounds/click.mp3");
    } catch (error) {
      console.log("Áudio ainda não disponível");
    }

    const handleClick = () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound
          .play()
          .catch((err) => console.log("Áudio ainda não disponível"));
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <LayoutContainer $hackerMode={hackerMode}>
      <MatrixRain intensity={hackerMode ? 2 : 1} />
      <ParticleBackground />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
