"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";

const Shape = ({ position, rotation, scale, color, type }: any) => {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position} rotation={rotation} scale={scale}>
        {type === "box" && <boxGeometry args={[1, 1, 1]} />}
        {type === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
        {type === "cone" && <coneGeometry args={[0.7, 1.4, 32]} />}
        {type === "torus" && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[0.8]} />}
        {type === "icosahedron" && <icosahedronGeometry args={[0.8]} />}
        {/* Glass-like material */}
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.1} 
          transmission={0.8} 
          thickness={0.5} 
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const ShapesScene = ({ staticShapes = [], movingShapes = [], scrollProgress }: { staticShapes?: any[], movingShapes?: any[], scrollProgress?: any }) => {
  const movingGroupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (movingGroupRef.current && scrollProgress) {
      const progress = scrollProgress.get();
      // Swipe leftwards over a long distance (150 units). 
      // Since the moving shapes are distributed from x=0 to x=150, 
      // they will smoothly pan into view as we scroll down the page.
      movingGroupRef.current.position.x = -(progress * 150);
      movingGroupRef.current.rotation.y = progress * 2.0; // gentle rotation
    }
  });

  return (
    <>
      <group>
        {staticShapes.map((props, i) => (
          <Shape 
            key={`static-${i}`} 
            {...props} 
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} 
            scale={0.8 + Math.random() * 0.7} 
          />
        ))}
      </group>
      <group ref={movingGroupRef}>
        {movingShapes.map((props, i) => (
          <Shape 
            key={`moving-${i}`} 
            {...props} 
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} 
            scale={0.8 + Math.random() * 0.7} 
          />
        ))}
      </group>
    </>
  );
};

export default function FloatingShapes3D({ scrollProgress }: { scrollProgress?: any }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { staticShapes, movingShapes } = useMemo(() => {
    const types = ["box", "sphere", "cone", "torus", "octahedron", "icosahedron"];
    const colors = ["#a855f7", "#3b82f6", "#06b6d4", "#eab308", "#ec4899", "#22c55e", "#f97316", "#6366f1", "#14b8a6", "#f43f5e", "#f59e0b", "#8b5cf6"];

    // 7 purely static background shapes to maintain depth
    const statics = Array.from({ length: 7 }).map(() => ({
      type: types[Math.floor(Math.random() * types.length)],
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, -10 - Math.random() * 10], 
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    // 20 dynamic shapes distributed along a 160-unit X-axis. 
    // They will be swept into the camera view as the user scrolls.
    const movings = Array.from({ length: 20 }).map((_, i) => {
      const xPos = -5 + (i * (160 / 20)) + (Math.random() - 0.5) * 4;
      return {
        type: types[Math.floor(Math.random() * types.length)],
        position: [xPos, (Math.random() - 0.5) * 12, -6 - Math.random() * 10],
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });

    return { staticShapes: statics, movingShapes: movings };
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const ambientIntensity = isDark ? 0.8 : 1.5;
  const directionalIntensity = isDark ? 1.5 : 2.5;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 transition-opacity duration-300">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[10, 10, 5]} intensity={directionalIntensity} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={directionalIntensity * 0.5} color="#e0eaff" />
        <directionalLight position={[0, 10, -10]} intensity={directionalIntensity * 0.3} color="#fce7f3" />
        
        <ShapesScene staticShapes={staticShapes} movingShapes={movingShapes} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
