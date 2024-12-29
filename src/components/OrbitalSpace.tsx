import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls as DreiOrbitControls, Stars } from '@react-three/drei';
import { useOrbitalStore } from '../store/useOrbitalStore';
import { ContentSphere } from './ContentSphere';

export const OrbitalSpace: React.FC = () => {
  const { contentSpheres, activeOrbit } = useOrbitalStore();
  const controlsRef = useRef();

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        
        {contentSpheres
          .filter((sphere) => sphere.type === activeOrbit)
          .map((sphere) => (
            <ContentSphere key={sphere.id} sphere={sphere} />
          ))}

        <DreiOrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
};