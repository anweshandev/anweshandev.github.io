import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNodes = () => {
  const ref = useRef<THREE.Points>(null!);
  
  // Create points in a sphere-like structure
  const sphere = useMemo(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = 1.5 * Math.sin(phi) * Math.cos(theta);
      const y = 1.5 * Math.sin(phi) * Math.sin(theta);
      const z = 1.5 * Math.cos(phi);
      points[i] = x;
      points[i+1] = y;
      points[i+2] = z;
    }
    return points;
  }, []);

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4afa0e"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <NetworkNodes />
        </Float>
      </Canvas>
    </div>
  );
};

export default Hero3D;
