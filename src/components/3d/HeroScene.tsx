"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

function NetworkSphere() {
  const ref = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);
  
  // Generate random points in a sphere to simulate neural/API nodes
  const count = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = 2.5 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Base rotation combined with pointer parallax
      const targetX = (state.pointer.x * 0.5);
      const targetY = (state.pointer.y * 0.5);
      
      ref.current.rotation.y += delta * 0.05 + (targetX - ref.current.rotation.y) * 0.02;
      ref.current.rotation.x += delta * 0.02 + (targetY - ref.current.rotation.x) * 0.02;
      
      // Subtle pulse effect
      const time = state.clock.elapsedTime;
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <Points 
        ref={ref} 
        positions={positions} 
        stride={3} 
        frustumCulled={false}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <PointMaterial
          transparent
          color={hovered ? "#06B6D4" : "#2563EB"}
          size={hovered ? 0.018 : 0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
      
      {/* Wireframe sphere overlay */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial 
          wireframe 
          color="#2563EB" 
          transparent 
          opacity={0.03}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.02;
      
      // Parallax mouse follow
      const targetX = (state.pointer.x * 2);
      const targetY = (state.pointer.y * 2);
      ref.current.position.x += (targetX - ref.current.position.x) * 0.02;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.02;

      // Gentle floating motion
      const time = state.clock.elapsedTime;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(time + positions[i * 3]) * 0.002;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06B6D4"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

function InteractiveLights() {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      const targetX = (state.pointer.x * 8);
      const targetY = (state.pointer.y * 8);
      lightRef.current.position.x += (targetX - lightRef.current.position.x) * 0.05;
      lightRef.current.position.y += (targetY - lightRef.current.position.y) * 0.05;
    }
  });
  
  return <pointLight ref={lightRef} position={[0, 0, 10]} intensity={1.5} color="#2563EB" />;
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.5} />
        <InteractiveLights />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#06B6D4" />
        <NetworkSphere />
        <FloatingParticles />
      </Canvas>
      {/* Soft gradient overlay to fade into background of the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10 pointer-events-none" />
    </div>
  );
}
