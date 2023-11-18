import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Ground } from "./Ground";
import Avatar from "./Avatar";
import AboutMe from "../aboutMe/AboutMe";

const Experience = () => {
  return (
    <>
      <ScrollControls pages={10} damping={0.1}>
        <color args={[0, 0, 0]} attach="background" />

        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={1}
          angle={0.6}
          penumbra={0.5}
          position={[-10, 5, 5]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={2}
          angle={0.6}
          penumbra={0.5}
          position={[4, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <group position={[0, -1, 0]}>
          <Avatar />
          <Ground />
        </group>

        <AboutMe />
      </ScrollControls>
    </>
  );
};

export default Experience;
