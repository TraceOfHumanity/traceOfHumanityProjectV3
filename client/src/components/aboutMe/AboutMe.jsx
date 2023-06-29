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
import Portfolio from "../portfolioProjects/Portfolio";

const AboutMe = () => {
  return (
    <>
      <Scroll html style={{ width: "100%" }}>
        <Description />
        <Skills />
      </Scroll>

      <Scroll>
        <Portfolio />
      </Scroll>
    </>
  );
};

export default AboutMe;
