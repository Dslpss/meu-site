import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  transform-style: preserve-3d;
  transform: ${(props) => `
    perspective(1000px)
    rotateY(${props.rotateY}deg)
    rotateX(${props.rotateX}deg)
  `};
  transition: transform 0.1s ease;
`;

const CardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 20, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(0, 255, 0, 0.1) 0%,
      transparent 70%
    );
    transform: ${(props) => `translate(${props.lightX}px, ${props.lightY}px)`};
  }
`;

const ProjectCard = ({ project }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    setRotation({ x: rotateX, y: rotateY });
    setLightPosition({ x: x, y: y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setLightPosition({ x: 0, y: 0 });
  };

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      rotateX={rotation.x}
      rotateY={rotation.y}>
      <CardContent lightX={lightPosition.x} lightY={lightPosition.y}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
