import { useScroll, Image as ImageImpl } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import * as THREE from "three";

const Portfolio = () => {
  const distance = [];

  for (let i = 1; i >= -1; i -= 0.2) {
    if (i === 0 || (i <= 0.4 && i >= -0.4)) {
      continue;
    }
    distance.push(i);
  }

  function Image({ c = new THREE.Color(), scale, url, position }) {
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
        // {...props}
        scale={scale}
        url={url}
        position={position}
      />
    );
  }

  function Images() {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();

    const images = [
      {
        position: [1, -12, -1],
        // scale: [3, 3, 1],
        url: "https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg",
      },
      {
        position: [-1, -18, 1],
        // scale: [3, 3, 1],
        url: "https://i.ibb.co/bHtY4Vb/photo-2023-06-29-20-20-05.jpg",
      },
      {
        position: [1, -22, 1],
        // scale: [3, 3, 1],
        url: "https://i.ibb.co/t82km8h/photo-2023-06-29-20-20-15.jpg",
      },
      {
        position: [-0.6, -25, -1],
        // scale: [3, 3, 1],
        url: "https://i.ibb.co/28x6cGk/photo-2023-06-29-20-20-19.jpg",
      },
      {
        position: [1, -28, 1],
        // scale: 1.5,
        url: "https://i.ibb.co/58ZJLKj/photo-2023-06-29-21-35-35.jpg",
      },
      {
        position: [-0.5, -31, 2],
        // scale: [2, 2, 1],
        url: "https://i.ibb.co/S65gD57/photo-2023-06-29-21-56-51.jpg",
      },
      {
        position: [1, -33, 1],
        // scale: [2, 2, 1],
        url: "https://i.ibb.co/MfFTLSN/photo-2023-06-29-21-56-59.jpg",
      },
      {
        position: [-1, -35, -1],
        // scale: [2, 2, 1],
        url: "https://i.ibb.co/JFQs4fQ/photo-2023-06-29-21-56-56.jpg",
      },
    ];

    return (
      <group ref={group}>
        {images.map((image, index) => (
          <Image
            key={index}
            url={image.url}
            scale={2}
            position={image.position}
          />
        ))}
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
