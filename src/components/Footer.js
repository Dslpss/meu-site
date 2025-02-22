import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  color: #00ff00;
  border-top: 1px solid #00ff00;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} SELF-DEV - Dennis Emmanuel. Todos os
        direitos reservados.
      </p>
    </FooterContainer>
  );
};

export default Footer;
