import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 2rem;
  color: #00ff00;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>Sobre Mim</h2>
      <p>
        Desenvolvedor Frontend apaixonado por criar experiências digitais
        únicas.
      </p>
      {/* Adicione mais conteúdo sobre você */}
    </AboutContainer>
  );
};

export default About;
