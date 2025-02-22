import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectsContainer = styled.section`
  padding: 40px 20px;
  color: #00ff00;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease 0.2s both;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
  animation: ${fadeIn} 1s ease 0.4s both;
`;

const ProjectCard = styled.div`
  padding: 20px;
  border: 1px solid #00ff00;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00ff00;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background-color: #00d000;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description:
        "Interface moderna de e-commerce desenvolvida com React, Context API e Styled Components. Design responsivo e animações suaves.",
      link: "#",
    },
    {
      id: 2,
      title: "Dashboard Interativo",
      description:
        "Painel administrativo com gráficos interativos usando React, Chart.js e Material-UI. Tema escuro/claro.",
      link: "#",
    },
    {
      id: 3,
      title: "Landing Page",
      description:
        "Página de destino moderna com animações em CSS, layouts flexbox/grid e otimizada para SEO.",
      link: "#",
    },
    {
      id: 4,
      title: "App de Tarefas",
      description:
        "Aplicativo de gerenciamento de tarefas com React, localStorage e drag-and-drop para reordenar itens.",
      link: "#",
    },
  ];

  return (
    <ProjectsContainer id="projetos">
      <Title>Meus Projetos</Title>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <CTAButton href={project.link}>Ver Projeto</CTAButton>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
