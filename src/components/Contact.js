import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 20px;
  color: #00ff00; /* Adicionado para garantir que o texto seja verde */
`;

const Title = styled.h2`
  color: ${(props) => props.theme.primary};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contato</Title>
      <p>Informações de contato.</p>
    </ContactContainer>
  );
};

export default Contact;
