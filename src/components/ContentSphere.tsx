import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Html } from '@react-three/drei';
import { ContentSphere as ContentSphereType } from '../types/content';

interface ContentSphereProps {
  sphere: ContentSphereType;
}

export const ContentSphere: React.FC<ContentSphereProps> = ({ sphere }) => {
  const meshRef = useRef();
  const [spring, api] = useSpring(() => ({
    scale: [1, 1, 1],
    position: sphere.position,
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
  });

  const handleClick = () => {
    api.start({
      scale: spring.scale.get()[0] === 1 ? [1.5, 1.5, 1.5] : [1, 1, 1],
    });
  };

  return (
    <animated.mesh
      ref={meshRef}
      position={spring.position}
      scale={spring.scale}
      onClick={handleClick}
    >
      <sphereGeometry args={[sphere.radius, 32, 32]} />
      <meshStandardMaterial
        color={
          sphere.type === 'personal'
            ? '#3B82F6'
            : sphere.type === 'social'
            ? '#F97316'
            : '#A855F7'
        }
        roughness={0.5}
        metalness={0.2}
      />
      <Html distanceFactor={15}>
        <div className="content-preview bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
          <h3 className="text-sm font-bold">{sphere.title}</h3>
        </div>
      </Html>
    </animated.mesh>
  );
};