import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
  transform: scaleY(0);
  transform-origin: top;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00ff00;
  font-family: "Courier New", monospace;
`;

const PageTransition = ({ children }) => {
  const overlayRef = useRef();

  useEffect(() => {
    let audio;
    try {
      audio = new Audio("/sounds/transition.mp3");
    } catch (error) {
      console.log("Áudio ainda não disponível");
    }

    const tl = gsap.timeline();
    tl.set(overlayRef.current, { display: "flex" })
      .to(overlayRef.current, {
        scaleY: 1,
        duration: 0.5,
        onStart: () => {
          if (audio) {
            audio
              .play()
              .catch((err) => console.log("Áudio ainda não disponível"));
          }
        },
      })
      .to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.5,
        delay: 0.2,
      })
      .set(overlayRef.current, { display: "none" });
  }, []);

  return (
    <>
      <TransitionOverlay ref={overlayRef}>
        <div className="loading">CARREGANDO_</div>
      </TransitionOverlay>
      {children}
    </>
  );
};

export default PageTransition;
