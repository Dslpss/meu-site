import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

function Particles({ count }) {
  const mesh = useRef();
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ff00"
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function GlowingParticles() {
  return (
    <ParticlesContainer>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Particles count={1000} />
      </Canvas>
    </ParticlesContainer>
  );
}
