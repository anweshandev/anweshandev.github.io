import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const LeadershipCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.5;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#4afa0e"
        speed={4}
        distort={0.3}
        radius={1}
        transparent
        opacity={0.15}
      />
    </Sphere>
  );
};

const Leadership3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
          <LeadershipCore />
        </Float>
      </Canvas>
    </div>
  );
};

export default Leadership3D;
