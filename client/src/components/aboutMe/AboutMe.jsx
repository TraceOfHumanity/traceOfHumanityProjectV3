import React from "react";
import styles from "./AboutMe.module.scss";
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";
import baffle from "baffle";
import Skills from "../skills/Skills";
import Description from "./Description";

const AboutMe = () => {
  function Image({ c = new THREE.Color(), ...props }) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    useFrame(() => {
      ref.current.material.color.lerp(
        c.set(hovered ? "white" : "#ccc"),
        hovered ? 0.4 : 0.05
      );
    });
    return (
      <ImageImpl
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        {...props}
      />
    );
  }

  function Images() {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();
    useFrame(() => {
      group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      group.current.children[2].material.zoom =
        1 + data.range(1.15 / 3, 1 / 3) / 3;
      group.current.children[3].material.zoom =
        1 + data.range(1.15 / 3, 1 / 3) / 2;
      group.current.children[4].material.zoom =
        1 + data.range(1.25 / 3, 1 / 3) / 1;
      group.current.children[5].material.zoom =
        1 + data.range(1.8 / 3, 1 / 3) / 3;
      group.current.children[5].material.grayscale =
        1 - data.range(1.6 / 3, 1 / 3);
      group.current.children[6].material.zoom =
        1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    });
    return (
      <group ref={group}>
        <Image
          position={[0, -3, 2]}
          scale={[2, 2, 1]}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[1, 0, 3.5]}
          scale={1}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[-2.3, -height, 3.2]}
          scale={[1, 3, 1]}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[-0.6, -height, 3]}
          scale={[1, 2, 1]}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[0.75, -height, 3.1]}
          scale={1.5}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[0, -height * 1.5, 2.8]}
          scale={[1.5, 3, 1]}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[0, -height * 2 - height / 4, 3]}
          scale={[width, height / 2, 1]}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
      </group>
    );
  }

  return (
    <>
      <Scroll html style={{ width: "100%" }}>
        <Description />
        <Skills />
      </Scroll>

      <Scroll>
        <Images />
      </Scroll>
    </>
  );
};

export default AboutMe;
