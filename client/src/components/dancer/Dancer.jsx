// import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from "react";
import Experience from "./Experience";
import styles from "./Dancer.module.scss";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, Text, useTexture, useGLTF } from "@react-three/drei";

const Dencer = () => {
  function Intro() {
    const [vec] = useState(() => new THREE.Vector3());
    return useFrame((state) => {
      state.camera.position.lerp(
        vec.set(state.mouse.x * 0.7, state.mouse.y * 0.5, 4),
        0.05
      );
      state.camera.lookAt(0, 0, 0);
    });
  }
  return (
    <div className={styles.dencer}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Experience />
          <Preload />
          <Intro />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Dencer;
