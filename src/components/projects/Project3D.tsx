import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ArchitectureNode = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.z = t * 0.1;
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 15]}>
      <MeshDistortMaterial
        color="#4afa0e"
        speed={3}
        distort={0.4}
        radius={1}
        transparent
        opacity={0.2}
        wireframe
      />
    </Icosahedron>
  );
};

const Project3D = () => {
  return (
    <div className="w-full h-40 opacity-40">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={5} rotationIntensity={1} floatIntensity={1}>
          <ArchitectureNode />
        </Float>
      </Canvas>
    </div>
  );
};

export default Project3D;
