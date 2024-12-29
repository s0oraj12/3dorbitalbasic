import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Orbit } from 'lucide-react';
import { useOrbitalStore } from '../store/useOrbitalStore';

export const OrbitControls: React.FC = () => {
  const { activeOrbit, setActiveOrbit } = useOrbitalStore();

  const orbits = [
    { id: 'personal', label: 'Personal Space', color: 'bg-blue-500' },
    { id: 'social', label: 'Social Space', color: 'bg-orange-500' },
    { id: 'discovery', label: 'Discovery', color: 'bg-purple-500' },
  ];

  const springs = useSpring({
    scale: 1,
    from: { scale: 0 },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={springs}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full p-4 shadow-lg"
    >
      <div className="flex space-x-4">
        {orbits.map((orbit) => (
          <button
            key={orbit.id}
            onClick={() => setActiveOrbit(orbit.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all
              ${activeOrbit === orbit.id ? orbit.color : 'bg-gray-200'}
              ${activeOrbit === orbit.id ? 'text-white' : 'text-gray-700'}
            `}
          >
            <Orbit className="w-4 h-4" />
            <span>{orbit.label}</span>
          </button>
        ))}
      </div>
    </animated.div>
  );
};