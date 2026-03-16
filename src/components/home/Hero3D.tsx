import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNodes = () => {
  const ref = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const { mouse, viewport } = useThree();
  
  // Create points in a sphere-like structure
  const count = 1500;
  const [sphere, connections] = useMemo(() => {
    const points = new Float32Array(count * 3);
    const lineConnections: [THREE.Vector3, THREE.Vector3][] = [];
    
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.5 + Math.random() * 0.2;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;

      // Add connections to nearby points (rarely, to keep performance)
      if (i < 50 && Math.random() > 0.7) {
          const nextIndex = Math.floor(Math.random() * count);
          const nextX = points[nextIndex * 3];
          const nextY = points[nextIndex * 3 + 1];
          const nextZ = points[nextIndex * 3 + 2];
          lineConnections.push([
              new THREE.Vector3(x, y, z),
              new THREE.Vector3(nextX, nextY, nextZ)
          ]);
      }
    }
    return [points, lineConnections];
  }, []);

  useFrame((_state, delta) => {
    // Basic rotation
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
    
    // Mouse parallax
    const targetX = (mouse.x * viewport.width) / 20;
    const targetY = (mouse.y * viewport.height) / 20;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4afa0e"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
      {connections.map(([start, end], i) => (
          <Line
            key={i}
            points={[start, end]}
            color="#4afa0e"
            lineWidth={0.5}
            transparent
            opacity={0.1}
          />
      ))}
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <NetworkNodes />
        </Float>
      </Canvas>
    </div>
  );
};

export default Hero3D;
