import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SkillsList } from "./data";

const Skills = () => {
  const skillsListRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const skillsList = skillsListRef.current.querySelectorAll("li");

    skillsList.forEach((item, index) => {
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
      <h2      >
        Skills
      </h2>
      <ul className={styles.skillsList} ref={skillsListRef}>
        {SkillsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
