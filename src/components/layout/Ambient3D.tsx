import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercent(window.scrollY / scrollHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    
    // Very slow drift
    ref.current.rotation.y += delta / 50;
    ref.current.rotation.x += delta / 60;
    
    // Subtle mouse interaction
    const targetX = (mouse.x * viewport.width) / 100;
    const targetY = (mouse.y * viewport.height) / 100;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.02;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.02;
    
    // Scroll interaction
    ref.current.position.z += (scrollPercent * 2 - ref.current.position.z) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4afa0e"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.1}
      />
    </Points>
  );
};

const Ambient3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Ambient3D;
