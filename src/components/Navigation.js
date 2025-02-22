import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
  0% { text-shadow: 0 0 10px #00ff00; }
  50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
  100% { text-shadow: 0 0 10px #00ff00; }
`;

const Nav = styled.nav`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.95);
  border-bottom: 2px solid rgba(0, 255, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
`;

const MenuItems = styled.ul`
  display: flex;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    gap: 2rem;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 2px solid rgba(0, 255, 0, 0.3);
  }
`;

const MenuItem = styled.li`
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const MenuLink = styled(Link)`
  color: #00ff00;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Courier New", monospace;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #00ff00;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    animation: ${pulse} 1.5s infinite;
    &:before {
      width: 100%;
    }
  }

  ${({ $active }) =>
    $active &&
    css`
      &:before {
        width: 100%;
      }
      animation: ${pulse} 1.5s infinite;
    `}
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: 2px solid #00ff00;
  color: #00ff00;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 0, 0.1);
    animation: ${pulse} 1.5s infinite;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre" },
    { path: "/projetos", label: "Projetos" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <Nav>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "☰"}
      </MenuButton>
      <MenuItems $isOpen={isOpen}>
        {menuItems.map((item) => (
          <MenuItem key={item.path}>
            <MenuLink
              to={item.path}
              $active={location.pathname === item.path}
              onClick={() => setIsOpen(false)}>
              {item.label}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuItems>
    </Nav>
  );
};

export default Navigation;
