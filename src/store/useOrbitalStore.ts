import { create } from 'zustand';
import { ContentSphere } from '../types/content';

interface OrbitalState {
  activeOrbit: 'personal' | 'social' | 'discovery';
  orbitRotation: number;
  zoom: number;
  contentSpheres: ContentSphere[];
  setActiveOrbit: (orbit: 'personal' | 'social' | 'discovery') => void;
  setOrbitRotation: (rotation: number) => void;
  setZoom: (zoom: number) => void;
}

export const useOrbitalStore = create<OrbitalState>((set) => ({
  activeOrbit: 'personal',
  orbitRotation: 0,
  zoom: 5,
  contentSpheres: [
    {
      id: '1',
      type: 'personal',
      title: 'Welcome to Orbital',
      preview: 'Get started with your spatial journey',
      position: [2, 0, 0],
      radius: 0.5,
      content: 'Welcome to your personal space in the Orbital platform.',
      timestamp: Date.now(),
      author: {
        id: 'system',
        name: 'Orbital',
        avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=64&h=64&fit=crop',
      },
    },
  ],
  setActiveOrbit: (orbit) => set({ activeOrbit: orbit }),
  setOrbitRotation: (rotation) => set({ orbitRotation: rotation }),
  setZoom: (zoom) => set({ zoom: zoom }),
}));