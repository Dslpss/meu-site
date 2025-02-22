import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.5;
`;

function Hexagon({ position }) {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[1, 1, 0.4, 6]} />
      <meshBasicMaterial color="#00ff00" wireframe={true} />
    </mesh>
  );
}

function HexagonGrid() {
  const hexagons = useMemo(() => {
    const items = [];
    const size = 20;

    for (let x = -size; x <= size; x += 3) {
      for (let y = -size; y <= size; y += 3) {
        items.push(
          <Hexagon
            key={`${x}-${y}`}
            position={[x, y, Math.sin(x * y * 0.1) * 2]}
          />
        );
      }
    }

    return items;
  }, []);

  return hexagons;
}

export default function HexagonBackground() {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <HexagonGrid />
      </Canvas>
    </CanvasContainer>
  );
}
