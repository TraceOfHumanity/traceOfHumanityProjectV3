import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
  Html,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";

const Portfolio = () => {
  const [portfolioImg, setPortfolioImg] = useState([]);

  const startPortfolio = -12;

  console.log(portfolioImg);
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
    return (
      <group ref={group}>
        {portfolioImg.map((img, index) => (
          <Image key={index} {...img} />
        ))}
      </group>
    );
  }
  useEffect(() => {
    const images = [
      {
        position: [1, -12, -1],
        url: "https://i.ibb.co/pJ4S1s5/photo-2023-06-25-11-39-36.jpg",
      },
      {
        position: [-1, -18, 1],
        url: "https://i.ibb.co/bHtY4Vb/photo-2023-06-29-20-20-05.jpg",
      },
      {
        position: [1, -22, 1],
        url: "https://i.ibb.co/t82km8h/photo-2023-06-29-20-20-15.jpg",
      },
      {
        position: [-0.6, -25, -1],
        url: "https://i.ibb.co/28x6cGk/photo-2023-06-29-20-20-19.jpg",
      },
      {
        position: [1, -28, 1],
        url: "https://i.ibb.co/58ZJLKj/photo-2023-06-29-21-35-35.jpg",
      },
      {
        position: [-0.5, -31, 2],
        url: "https://i.ibb.co/S65gD57/photo-2023-06-29-21-56-51.jpg",
      },
      {
        position: [1, -33, 1],
        url: "https://i.ibb.co/MfFTLSN/photo-2023-06-29-21-56-59.jpg",
      },
      {
        position: [-1, -35, -1],
        url: "https://i.ibb.co/JFQs4fQ/photo-2023-06-29-21-56-56.jpg",
      },
    ];
    const images2 = [];
    const z = [1, 0.8, 0.6, -0.6, -0.8, -1];
    // let x = 1;
    let y = -12;
    // let z = 1;
    for (let i = 0; i < images.length; i++) {
      const randomX = Math.random() * 2 - 1; // Генерація випадкового числа від -1 до 1
      const randomY = y - i * 3; // Зменшення значення y на 2 для кожного наступного елементу
      // const randomZ = Math.random() * 2 - 1; // Генерація випадкового числа від -1 до 1
      const randomZ = z[Math.floor(Math.random() * z.length)];
      const randomScale = 2.5 + Math.random();

      const newImage = {
        position: [randomX, randomY, randomZ],
        scale: randomScale,
        url: images[i].url,
      };

      images2.push(newImage);
    }

    setPortfolioImg(images2);
  }, []);
  return (
    <>
      <Images />
    </>
  );
};

export default Portfolio;
