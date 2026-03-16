import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 4);
    meshRef.current.rotation.y = Math.cos(t / 2);
    
    // Move based on scroll
    const scrollY = window.scrollY;
    meshRef.current.position.y = (scrollY / 1000) * -1;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <octahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#4afa0e"
        speed={2}
        distort={0.4}
        radius={1}
        emissive="#4afa0e"
        emissiveIntensity={0.2}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const Experience3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={5} rotationIntensity={2} floatIntensity={5}>
          <FloatingCore />
        </Float>
      </Canvas>
    </div>
  );
};

export default Experience3D;
