import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Scroll state hook with direction
const useScrollProgress = () => {
  const [scrollData, setScrollData] = useState({ progress: 0, velocity: 0, direction: 0 });
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const deltaTime = Math.max(currentTime - lastTime.current, 1);
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const velocity = Math.abs(scrollDelta) / deltaTime;
      const direction = scrollDelta > 0 ? 1 : scrollDelta < 0 ? -1 : 0;

      setScrollData({ progress, velocity, direction });
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
};

// Particle Constellation Field - lightweight points + lines
const ParticleConstellation = ({ scrollVelocity, scrollDirection }: { scrollVelocity: number; scrollDirection: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const baseRotation = useRef({ x: 0, y: 0 });

  const { positions, linePositions } = useMemo(() => {
    const particleCount = 250;
    const positions = new Float32Array(particleCount * 3);
    const connectionDistance = 1.2;
    const linePositionsList: number[] = [];
    const radius = 2.5;
    
    // Create particles on a sphere surface using golden spiral distribution
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < particleCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    // Create connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < connectionDistance && Math.random() > 0.7) {
          linePositionsList.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }

    return { 
      positions, 
      linePositions: new Float32Array(linePositionsList)
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Scroll-triggered rotation based on scroll direction - relaxed
    const scrollSpeed = scrollVelocity * 0.08 * scrollDirection;
    const clampedSpeed = Math.max(-0.004, Math.min(0.004, scrollSpeed));
    
    // Apply scroll-based rotation (very gentle)
    baseRotation.current.x += clampedSpeed * 0.3;
    baseRotation.current.y += clampedSpeed;
    
    // Very subtle ambient drift when not scrolling
    if (Math.abs(scrollVelocity) < 0.001) {
      baseRotation.current.y += 0.00005;
    }
    
    // Subtle wave motion
    const waveX = Math.sin(time * 0.1) * 0.001;
    const waveY = Math.cos(time * 0.15) * 0.001;
    
    if (pointsRef.current) {
      pointsRef.current.rotation.x = baseRotation.current.x + waveX;
      pointsRef.current.rotation.y = baseRotation.current.y + waveY;
    }
    if (linesRef.current) {
      linesRef.current.rotation.x = baseRotation.current.x + waveX;
      linesRef.current.rotation.y = baseRotation.current.y + waveY;
    }
  });

  return (
    <group>
      {/* Bright Particle Dots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.18}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
};

// Scene controller with scroll sync
const SceneController = ({ scrollData }: { scrollData: { progress: number; velocity: number; direction: number } }) => {
  return (
    <group>
      <ParticleConstellation scrollVelocity={scrollData.velocity} scrollDirection={scrollData.direction} />
    </group>
  );
};

// Wrapper to pass scroll data into canvas
const SceneContent = () => {
  const scrollData = useScrollProgress();
  return <SceneController scrollData={scrollData} />;
};

// Responsive camera position hook
const useResponsiveCamera = () => {
  const [cameraZ, setCameraZ] = useState(8);

  useEffect(() => {
    const updateCamera = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCameraZ(12); // Mobile - further back
      } else if (width < 768) {
        setCameraZ(10); // Tablet
      } else if (width < 1024) {
        setCameraZ(9); // Small desktop
      } else if (width >= 1920) {
        setCameraZ(7); // Large screens - closer
      } else {
        setCameraZ(8); // Default
      }
    };

    updateCamera();
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, []);

  return cameraZ;
};

const Scene3D = () => {
  const [webglSupported, setWebglSupported] = useState(true);
  const cameraZ = useResponsiveCamera();

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 z-0 bg-black" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 opacity-90">
        <Canvas
          camera={{ position: [0, 0, cameraZ], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <SceneContent />
        </Canvas>
      </div>
    </div>
  );
};

export default Scene3D;