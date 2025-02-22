import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useHackerMode } from "../contexts/HackerModeContext";
import Logo from "./Logo"; // Importando o componente Logo

// Keyframes para o efeito de neon (reduzido)
const neonEffect = keyframes`
  from {
    text-shadow: 0 0 3px rgba(0, 255, 0, 0.3);
  }
  to {
    text-shadow: 0 0 6px rgba(0, 255, 0, 0.5);
  }
`;

// Keyframes para a animação de deslocamento da linha (simplificado)
const lineSlide = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.header`
  padding: 5px;
  text-align: left; /* Alinhando o conteúdo à esquerda */
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex; /* Usando flexbox para alinhar os itens */
  align-items: center; /* Alinhando verticalmente */
  justify-content: space-between; /* Espaçamento entre o logo e o menu */
`;

const Description = styled.p`
  color: #00ff00;
  font-size: 1.2em;
  margin-bottom: 3px; /* Reduzindo o espaçamento inferior */

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 255, 0, 0.2) 25%,
      rgba(0, 255, 0, 0.2) 75%,
      transparent 100%
    );
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  color: #00ff00;
  padding: 8px 16px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 1em; /* Aumentando o tamanho da fonte */
  position: relative;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.$isActive ? "#00ff00" : "rgba(0, 255, 0, 0.7)")};

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #00ff00;
    transform-origin: right;
    transform: ${(props) => (props.$isActive ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.4s ease-out;
  }

  &:hover {
    animation: ${neonEffect} 1s alternate infinite;
    transform: translateY(-2px);
    color: #00ff00;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);

    &:before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }

  &:after {
    content: "<>";
    position: absolute;
    font-size: 0.8em;
    opacity: 0;
    transition: all 0.3s ease;
    right: 0;
    transform: translateX(100%);
  }

  &:hover:after {
    opacity: 0.5;
    transform: translateX(120%);
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState("/");
  const clickSound = new Audio("/sounds/transition.mp3");
  const { hackerMode } = useHackerMode();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const handleNavigation = (path) => {
    try {
      clickSound.currentTime = 0;
      clickSound.play().catch((err) => console.log("Áudio não disponível"));
    } catch (error) {
      console.log("Áudio não disponível");
    }
    navigate(path);
  };

  return (
    <HeaderContainer>
      <Logo /> {/* Adicionando o componente Logo */}
      <Nav>
        <NavItem
          onClick={() => handleNavigation("/")}
          $isActive={activePath === "/"}>
          Home
        </NavItem>
        <NavItem
          onClick={() => handleNavigation("/projetos")}
          $isActive={activePath === "/projetos"}>
          Projetos
        </NavItem>
        <NavItem
          onClick={() => handleNavigation("/sobre")}
          $isActive={activePath === "/sobre"}>
          Sobre
        </NavItem>
        <NavItem
          onClick={() => handleNavigation("/skills")}
          $isActive={activePath === "/skills"}>
          Skills
        </NavItem>
        <NavItem
          onClick={() => handleNavigation("/contato")}
          $isActive={activePath === "/contato"}>
          Contato
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
