import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
  Html,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import * as THREE from "three";

const Portfolio = () => {
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
    // useFrame(() => {
    //   group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    //   group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    //   group.current.children[2].material.zoom =
    //     1 + data.range(1.15 / 3, 1 / 3) / 3;
    //   group.current.children[3].material.zoom =
    //     1 + data.range(1.15 / 3, 1 / 3) / 2;
    //   group.current.children[4].material.zoom =
    //     1 + data.range(1.25 / 3, 1 / 3) / 1;
    //   group.current.children[5].material.zoom =
    //     1 + data.range(1.8 / 3, 1 / 3) / 3;
    //   group.current.children[5].material.zoom = 1 - data.range(1.6 / 3, 1 / 3);
    //   group.current.children[6].material.zoom =
    //     1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    // });
    return (
      <group ref={group}>
        <Image
          position={[1, -12, -1]}
          scale={[3, 3, 1]}
          url="https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg"
        />
        <Image
          position={[-1, -18, 1]}
          scale={[3, 3, 1]}
          url="https://i.ibb.co/bHtY4Vb/photo-2023-06-29-20-20-05.jpg"
        />
        <Image
          position={[1, -22, 1]}
          scale={[3, 3, 1]}
          url="https://i.ibb.co/t82km8h/photo-2023-06-29-20-20-15.jpg"
        />
        <Image
          position={[-0.6, -25, -1]}
          scale={[3, 3, 1]}
          url="https://i.ibb.co/28x6cGk/photo-2023-06-29-20-20-19.jpg"
        />
        <Image
          position={[1, -28, 1]}
          scale={1.5}
          url="https://i.ibb.co/58ZJLKj/photo-2023-06-29-21-35-35.jpg"
        />
        <Image
          position={[-0.5, -31, 2]}
          scale={[2, 2, 1]}
          url="https://i.ibb.co/S65gD57/photo-2023-06-29-21-56-51.jpg"
        />
        <Image
          position={[1, -33, 1]}
          scale={[2, 2, 1]}
          url="https://i.ibb.co/MfFTLSN/photo-2023-06-29-21-56-59.jpg"
        />
        <Image
          position={[-1, -35, -1]}
          scale={[2, 2, 1]}
          url="https://i.ibb.co/JFQs4fQ/photo-2023-06-29-21-56-56.jpg"
        />
      </group>
    );
  }
  return (
    <>
      {/* <Html center>
        <h2>Portfolio</h2>
      </Html> */}
      <Images />
    </>
  );
};

export default Portfolio;
