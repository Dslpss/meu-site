import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #00ff00;
`;

const LoadingText = styled.div`
  font-size: 1.5em;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingText>Carregando...</LoadingText>
  </LoadingContainer>
);

export default Loading;
