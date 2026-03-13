"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { Line, Sphere, Text } from "@react-three/drei";

const skillNodes = [
  { name: "Python", category: "lang" },
  { name: "Node.js", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "MongoDB", category: "db" },
  { name: "PostgreSQL", category: "db" },
  { name: "TensorFlow", category: "ai" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "cloud" },
  { name: "Git", category: "tools" },
  { name: "FastAPI", category: "backend" },
  { name: "Redis", category: "db" },
  { name: "NLP", category: "ai" },
];

function TechNetwork() {
  const group = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: 24 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      )
    }));
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      
      // Animate nodes
      nodes.forEach((node) => {
        node.position.add(node.velocity);
        
        // Boundary check
        const boundary = 4;
        if (Math.abs(node.position.x) > boundary) node.velocity.x *= -1;
        if (Math.abs(node.position.y) > boundary) node.velocity.y *= -1;
        if (Math.abs(node.position.z) > boundary) node.velocity.z *= -1;
      });
    }
  });

  const getColor = (index: number) => {
    if (index % 4 === 0) return "#2563EB"; // Primary blue
    if (index % 4 === 1) return "#06B6D4"; // Accent cyan
    if (index % 4 === 2) return "#3B82F6"; // Lighter blue
    return "#1E40AF"; // Darker blue
  };

  return (
    <group ref={group}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <Sphere args={[0.12, 16, 16]}>
            <meshBasicMaterial 
              color={getColor(i)} 
              transparent 
              opacity={hoveredNode === i ? 1 : 0.8}
            />
          </Sphere>
          {/* Glow effect */}
          <mesh>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshBasicMaterial 
              color={getColor(i)} 
              transparent 
              opacity={0.1}
            />
          </mesh>
        </group>
      ))}
      
      {/* Connections */}
      {nodes.map((node, i) => {
        const connections = [];
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = node.position.distanceTo(nodes[j].position);
          if (distance < 2.5) {
            connections.push(
              <Line
                key={`${i}-${j}`}
                points={[node.position, nodes[j].position]}
                color={getColor(i)}
                opacity={0.15 * (1 - distance / 2.5)}
                transparent
                lineWidth={1}
              />
            );
          }
        }
        return connections;
      })}
    </group>
  );
}

export function TechNetworkScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <TechNetwork />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
