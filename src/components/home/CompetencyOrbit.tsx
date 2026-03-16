import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { profileData } from '../../data';
import montserrat700Woff from '@fontsource/montserrat/files/montserrat-latin-700-normal.woff';

const ORBIT_RADIUS = 2.7;

const OrbitalRing = ({ rotation }: { rotation: [number, number, number] }) => {
  const ring = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * ORBIT_RADIUS, 0, Math.sin(a) * ORBIT_RADIUS));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({ color: '#40f005', transparent: true, opacity: 0.18 });
    return new THREE.LineLoop(geo, mat);
  }, []);

  return <group rotation={rotation}><primitive object={ring} /></group>;
};

const Nucleus = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(s => {
    ref.current.rotation.y = s.clock.elapsedTime * 0.45;
    ref.current.rotation.x = s.clock.elapsedTime * 0.28;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.38, 1]} />
      <meshStandardMaterial color="#40f005" emissive="#40f005" emissiveIntensity={1.4} />
    </mesh>
  );
};

const SkillNode = ({
  skill,
  angle,
  index,
  count,
}: {
  skill: string;
  angle: number;
  index: number;
  count: number;
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const baseY = Math.sin((index / count) * Math.PI * 1.7) * 0.85;
  const baseX = Math.cos(angle) * ORBIT_RADIUS;
  const baseZ = Math.sin(angle) * ORBIT_RADIUS;

  useFrame(s => {
    groupRef.current.position.y = baseY + Math.sin(s.clock.elapsedTime * 0.65 + index * 0.9) * 0.13;
  });

  return (
    <group ref={groupRef} position={[baseX, baseY, baseZ]}>
      <mesh>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial color="#40f005" emissive="#40f005" emissiveIntensity={1.2} />
      </mesh>
      <Text
        position={[0, -0.36, 0]}
        fontSize={0.165}
        color="#40f005"
        font={montserrat700Woff}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.032}
        outlineColor="#000000"
        outlineOpacity={0.55}
      >
        {skill.toUpperCase()}
      </Text>
    </group>
  );
};

const Scene = () => {
  const skills = profileData.coreCompetencies;
  return (
    <>
      <Nucleus />
      <OrbitalRing rotation={[0.18, 0, 0]} />
      <OrbitalRing rotation={[-0.38, 0, 1.1]} />
      {skills.map((skill, i) => (
        <SkillNode
          key={skill}
          skill={skill}
          angle={(i / skills.length) * Math.PI * 2}
          index={i}
          count={skills.length}
        />
      ))}
    </>
  );
};

const CompetencyOrbit = () => (
  <div className="w-full h-80 md:h-96 cursor-grab active:cursor-grabbing">
    <Canvas camera={{ position: [0, 1.6, 7], fov: 54 }} gl={{ alpha: true }}>
      <ambientLight intensity={1.1} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#40f005" />
      <pointLight position={[-4, -2, -4]} intensity={0.7} color="#ffffff" />
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
    </Canvas>
  </div>
);

export default CompetencyOrbit;
