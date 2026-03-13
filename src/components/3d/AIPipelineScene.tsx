"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text, Line, Box, Sphere } from "@react-three/drei";

const pipelineStages = [
  { label: "Prompt", pos: [-6, 0, 0], color: "#2563EB" },
  { label: "API Request", pos: [-3.5, 1.5, 0], color: "#3B82F6" },
  { label: "Model Response", pos: [-1, 0, 0], color: "#06B6D4" },
  { label: "Evaluation", pos: [1.5, 1.5, 0], color: "#0891B2" },
  { label: "Ground Truth", pos: [4, 0, 0], color: "#1E40AF" },
  { label: "Score Output", pos: [6.5, 1.5, 0], color: "#06B6D4" },
];

function AnimatedPipeline() {
  const packetsRef = useRef<THREE.Mesh[]>([]);
  
  // Create multiple data packets
  const packetCount = 3;
  
  useFrame((state) => {
    packetsRef.current.forEach((packet, idx) => {
      if (packet) {
        const offset = (idx / packetCount) * 1.5;
        const t = ((state.clock.elapsedTime * 0.6) + offset) % 5.5;
        const stageIdx = Math.min(Math.floor(t), pipelineStages.length - 2);
        const lerpFactor = t - stageIdx;
        
        const p1 = new THREE.Vector3(...pipelineStages[stageIdx].pos);
        const p2 = new THREE.Vector3(...pipelineStages[stageIdx + 1].pos);
        
        packet.position.lerpVectors(p1, p2, lerpFactor);
        
        // Pulse effect
        const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + idx) * 0.2;
        packet.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <group position={[-0.5, 0, 0]}>
      {/* Connection Lines with glow */}
      {pipelineStages.slice(0, -1).map((stage, i) => (
        <group key={`connection-${i}`}>
          <Line 
            points={[
              stage.pos as [number, number, number], 
              pipelineStages[i+1].pos as [number, number, number]
            ]}
            color="#06B6D4"
            lineWidth={4}
            transparent
            opacity={0.4}
          />
          <Line 
            points={[
              stage.pos as [number, number, number], 
              pipelineStages[i+1].pos as [number, number, number]
            ]}
            color="#2563EB"
            lineWidth={2}
            transparent
            opacity={0.8}
          />
        </group>
      ))}
      
      {/* Pipeline Nodes */}
      {pipelineStages.map((stage, i) => (
        <group key={`node-${i}`} position={new THREE.Vector3(...stage.pos)}>
          {/* Main box */}
          <Box args={[2, 0.8, 0.3]}>
            <meshStandardMaterial 
              color={stage.color} 
              metalness={0.3} 
              roughness={0.7}
              emissive={stage.color}
              emissiveIntensity={0.2}
            />
          </Box>
          
          {/* Glow sphere behind */}
          <Sphere args={[0.5, 16, 16]} position={[0, 0, -0.3]}>
            <meshBasicMaterial 
              color={stage.color} 
              transparent 
              opacity={0.15}
            />
          </Sphere>
          
          {/* Label */}
          <Text 
            position={[0, 0, 0.2]} 
            fontSize={0.18}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
          >
            {stage.label}
          </Text>
        </group>
      ))}

      {/* Moving Data Packets */}
      {Array.from({ length: packetCount }).map((_, idx) => (
        <mesh 
          key={`packet-${idx}`} 
          ref={(el) => { if (el) packetsRef.current[idx] = el; }}
        >
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
          <pointLight color="#06B6D4" intensity={2} distance={3} />
        </mesh>
      ))}
      
      {/* Ambient particles */}
      {useMemo(() => {
        const particles = Array.from({ length: 50 }).map(() => ({
          position: new THREE.Vector3(
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5
          )
        }));
        
        return particles.map((particle, i) => (
          <mesh key={`particle-${i}`} position={particle.position}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#06B6D4" transparent opacity={0.4} />
          </mesh>
        ));
      }, [])}
    </group>
  );
}

export function AIPipelineScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-2xl overflow-hidden border border-white/5">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#2563EB" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#06B6D4" />
        <AnimatedPipeline />
      </Canvas>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan" style={{
        animation: 'scan 3s linear infinite',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(37, 99, 235, 0.05) 50%, transparent 100%)'
      }} />
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}
