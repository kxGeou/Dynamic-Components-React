// Model.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/html.glb'); 

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Model />

      <OrbitControls enableZoom={true} 
  maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}
