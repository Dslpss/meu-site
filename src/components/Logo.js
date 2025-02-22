import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Keyframes para o efeito de neon
const neonEffect = keyframes`
  from {
    text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0;
  }
  to {
    text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #00ff00;
`;

const LogoText = styled.h1`
  font-size: 1.7em; /* Aumentando o tamanho da fonte */
  font-weight: bold;
  margin-left: 10px;
  animation: ${neonEffect} 1.5s alternate infinite; /* Adicionando a animação */
  color: #fff; /* Garante que o texto seja branco para o efeito neon funcionar */
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <LogoText>SELF-DEV</LogoText>
    </LogoContainer>
  );
};

export default Logo;
