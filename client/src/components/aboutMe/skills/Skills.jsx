import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS/SASS/SCSS",
    "Vanilla js",
    "Node.JS",
    "React.JS",
    "Redux Toolkit",
    "MongoDB",
    "PostgreSQL",
    "Three.js",
    "React Three Fiber",
    "React Three Drei",
    "Blender",
    "TailwindCSS",
    "Material UI",
    "SVG Animation",
    "Pixel Perfect",
    "Git",
    "Responsive",
    "Mobile First",
    "Figma",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
  ];

  const skillsListRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skillsList = skillsListRef.current.querySelectorAll("li");

    skillsList.forEach((item, index) => {
      // ScrollTrigger.create({
      //   trigger: item,
      //   start: "top bottom",
      //   onEnter: () => {
      //     gsap.to(item, {
      //       opacity: 1,
      //       x: "0vw",
      //       duration: 3,
      //     });
      //   },
      //   onLeave: () => {
      //     gsap.to(item, {
      //       opacity: 0,
      //       x: "100vw",
      //       duration: 3,
      //     });
      //   },
      // });
      gsap.to(item, {
        x: 10,
        y: 2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        delay: index * 0.1,
        stagger: 0.5,
      });
    });
  }, []);

  return (
    <div className={styles.skills}>
      <h2
      // style={{
      //   paddingRight: "10%",
      //   // right: "0.5vw",
      //   // fontSize: "40vw",
      // }}
      >
        Skills
      </h2>
      <ul className={styles.skillsList} ref={skillsListRef}>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
