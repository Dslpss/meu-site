import React from "react";
import styled from "styled-components";
import MatrixRain from "./MatrixRain";

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <MatrixRain />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
