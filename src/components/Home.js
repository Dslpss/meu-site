import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const typing = keyframes`
  0% { width: 0 }
  50% { width: 100% }
  100% { width: 0 }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #00ff00 }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const matrixBg = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

const glitch = keyframes`
  0% { clip-path: inset(50% 0 30% 0); transform: skew(0.15deg); }
  20% { clip-path: inset(20% 0 60% 0); transform: skew(-0.15deg); }
  40% { clip-path: inset(40% 0 40% 0); transform: skew(0.15deg); }
  60% { clip-path: inset(60% 0 20% 0); transform: skew(0.15deg); }
  80% { clip-path: inset(10% 0 80% 0); transform: skew(-0.15deg); }
  100% { clip-path: inset(40% 0 50% 0); transform: skew(0.15deg); }
`;

const matrix = keyframes`
  0% { text-shadow: 2px 2px 10px #00ff00; }
  50% { text-shadow: -2px -2px 10px #00ff00; }
  100% { text-shadow: 2px 2px 10px #00ff00; }
`;

const hoverEffect = keyframes`
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(10deg); }
`;

// Keyframes para o efeito de neon
const neonEffect = keyframes`
  from {
    box-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0;
  }
  to {
    box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
  }
`;

const HomeContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  color: #00ff00;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 20, 0, 0.9) 50%,
    rgba(0, 40, 0, 0.95) 100%
  );
  animation: ${matrixBg} 20s linear infinite;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.1);
  perspective: 1000px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 0, 0.1) 0px,
      rgba(0, 255, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
    animation: ${matrix} 10s linear infinite;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid #00ff00;
  white-space: nowrap;
  margin: 0 auto;
  animation: ${typing} 4s steps(40, end) infinite,
    ${blink} 0.75s step-end infinite;
  max-width: fit-content;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 50px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px; /* Aumentando o espaçamento */
  margin: 40px 0;
`;

const Skill = styled.div`
  padding: 30px;
  border: 1px solid #00ff00;
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: ${float} 6s ease-in-out infinite;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6;
  }
`;

const SkillCard = styled(Skill)`
  background: rgba(0, 20, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 0, 0.3);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${neonEffect} 1.5s alternate infinite; /* Adicionando a animação */

  &:hover {
    transform: translateY(-20px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2),
      0 10px 30px rgba(0, 255, 0, 0.1), 0 20px 50px rgba(0, 255, 0, 0.1);
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  margin-top: 40px;
  background: ${(props) =>
    props.$secondary
      ? "transparent"
      : "linear-gradient(45deg, #00ff00, #008000)"};
  border: ${(props) => (props.$secondary ? "2px solid #00ff00" : "none")};
  color: ${(props) => (props.$secondary ? "#00ff00" : "#000")};
  text-decoration: none;
  font-weight: bold;
  border-radius: 25px;
  font-size: 1.2em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.4);
  }

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 255, 0, 0.3),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: #00ff00;
  font-size: 1.5em;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    color: #00dd00;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #00ff00;
  overflow: hidden;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(0, 255, 0, 0.3));
  }

  &:after {
    content: "";
    position: absolute;
    inset: -5px;
    border: 2px solid #00ff00;
    border-radius: 50%;
    animation: ${matrix} 4s linear infinite;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GlitchText = styled.span`
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }

  &:before {
    color: #0ff;
    animation: ${glitch} 3s infinite linear alternate-reverse;
    left: 2px;
  }

  &:after {
    color: #f0f;
    animation: ${glitch} 2s infinite linear alternate-reverse;
    left: -2px;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: 60px 0;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateZ(20px) rotateX(10deg);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3), 0 0 60px rgba(0, 255, 0, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  color: #00ff00;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1em;
  color: rgba(0, 255, 0, 0.8);
`;

const CTASection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <ProfileSection>
        <ProfileImage>
          <img src="/images/profile.jpg" alt="Dennis Emannuel" />
        </ProfileImage>
        <div>
          <Title>
            <GlitchText data-text="< Dennis Emannuel />">
              {"< Dennis Emannuel />"}
            </GlitchText>
          </Title>
          <Subtitle>SELF-DEV: Transformando ideias em código</Subtitle>
        </div>
      </ProfileSection>

      <SkillsContainer>
        <SkillCard>
          <h3>React & Next.js</h3>
          <p>Desenvolvimento de aplicações modernas e otimizadas</p>
        </SkillCard>
        <SkillCard>
          <h3>UI/UX Avançado</h3>
          <p>Criação de interfaces imersivas e interativas</p>
        </SkillCard>
        <SkillCard>
          <h3>Animações</h3>
          <p>Experiências fluidas com GSAP e Framer Motion</p>
        </SkillCard>
      </SkillsContainer>

      <StatsSection>
        <StatItem>
          <StatNumber>50+</StatNumber>
          <StatLabel>Projetos Concluídos</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>5+</StatNumber>
          <StatLabel>Anos de Experiência</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>100%</StatNumber>
          <StatLabel>Clientes Satisfeitos</StatLabel>
        </StatItem>
      </StatsSection>

      <CTASection>
        <CTAButton to="/projetos">Ver Projetos</CTAButton>
        <CTAButton to="/contato" $secondary>
          Entre em Contato
        </CTAButton>
      </CTASection>

      <SocialLinks>
        <SocialIcon href="https://github.com/seu-usuario" target="_blank">
          <i className="fab fa-github"></i>
        </SocialIcon>
        <SocialIcon href="https://codepen.io/seu-usuario" target="_blank">
          <i className="fab fa-codepen"></i>
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/seu-usuario" target="_blank">
          <i className="fab fa-linkedin"></i>
        </SocialIcon>
      </SocialLinks>
    </HomeContainer>
  );
};

export default Home;
