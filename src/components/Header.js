import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const HeaderContainer = styled.header`
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  color: #00ff00;
  font-size: 2em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  color: #00ff00;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>SELF-DEV</Title>
      <Description>Dennis Emmanuel | Desenvolvedor Frontend</Description>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
