import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(0, 255, 0, 0.1);
`;

const Copyright = styled.p`
  color: #00ff00;
  font-size: 0.9em;
`;

const FooterLinks = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Link = styled.a`
  color: #00ff00;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #00dd00;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLinks>
        <Link href="https://github.com/seu-usuario" target="_blank">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/seu-usuario" target="_blank">
          LinkedIn
        </Link>
        <Link href="mailto:seu-email@email.com">Email</Link>
      </FooterLinks>
      <Copyright>
        &copy; {currentYear} Dennis Emannuel • Desenvolvedor Frontend
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
