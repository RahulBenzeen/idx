"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Avatar() {
  const { scene } = useGLTF('/3d-model/avatar.glb'); // Ensure this path is correct
  const meshRef = useRef<THREE.Group>(null!);

  // Rotate the avatar on its Y-axis
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Adjust rotation speed here
    }
  });

  return <primitive ref={meshRef} object={scene} scale={1} />; // Adjust scale to make the avatar larger
}

export default function RotatingAvatar() {
  return (
    <div className="w-[400px] h-[400px] rounded-full overflow-hidden mx-auto mb-6">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 3] }} // Adjusted the camera position
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Avatar />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
}
