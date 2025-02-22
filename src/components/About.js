import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 40px 20px;
  color: #00ff00;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.primary};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const SkillItem = styled.li`
  padding: 10px;
  border: 1px solid #00ff00;
  border-radius: 5px;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer id="sobre">
      <Title>Sobre Mim</Title>
      <Content>
        <p>
          Olá! Sou Dennis Emmanuel, desenvolvedor Frontend na SELF-DEV,
          apaixonado por criar experiências web excepcionais. Especializado em
          React e suas tecnologias relacionadas, com forte foco em interfaces
          responsivas e performance.
        </p>
        <SkillsList>
          <SkillItem>React</SkillItem>
          <SkillItem>JavaScript (ES6+)</SkillItem>
          <SkillItem>HTML5 & CSS3</SkillItem>
          <SkillItem>Styled Components</SkillItem>
          <SkillItem>Redux</SkillItem>
          <SkillItem>React Router</SkillItem>
          <SkillItem>Git</SkillItem>
          <SkillItem>Responsive Design</SkillItem>
        </SkillsList>
      </Content>
    </AboutContainer>
  );
};

export default About;
