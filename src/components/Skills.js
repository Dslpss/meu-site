import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  padding: 2rem;
  color: #00ff00;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  border: 1px solid #00ff00;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(0, 255, 0, 0.1);
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Minhas Skills</h2>
      <SkillGrid>
        <SkillCard>
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>JavaScript/TypeScript</li>
          </ul>
        </SkillCard>
        {/* Adicione mais cards de skills */}
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;
