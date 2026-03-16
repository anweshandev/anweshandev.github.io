import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { profileData } from '../../data';
import montserrat700Woff from '@fontsource/montserrat/files/montserrat-latin-700-normal.woff';

const SkillNode = ({ skill, position, index }: { skill: string, position: [number, number, number], index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + index) * 0.2;
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <MeshDistortMaterial
            color="#4afa0e"
            speed={2}
            distort={0.3}
            radius={1}
            transparent
            opacity={0.6}
          />
        </mesh>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.2}
          color="white"
          font={montserrat700Woff}
          anchorX="center"
          anchorY="middle"
        >
          {skill.toUpperCase()}
        </Text>
      </Float>
    </group>
  );
};

const Orbit = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const skills = profileData.coreCompetencies;

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const radius = 4;
    for (let i = 0; i < skills.length; i++) {
      const angle = (i / skills.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 2;
      pos.push([x, y, z]);
    }
    return pos;
  }, [skills.length]);

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillNode key={i} skill={skill} position={positions[i]} index={i} />
      ))}
    </group>
  );
};

const CompetencyOrbit = () => {
  return (
    <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Orbit />
      </Canvas>
    </div>
  );
};

export default CompetencyOrbit;
