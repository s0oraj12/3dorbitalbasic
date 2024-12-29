import React from 'react';
import { OrbitalSpace } from './components/OrbitalSpace';
import { OrbitControls } from './components/OrbitControls';

function App() {
  return (
    <div className="w-full h-screen bg-gray-900 relative overflow-hidden">
      <OrbitalSpace />
      <OrbitControls />
    </div>
  );
}

export default App;