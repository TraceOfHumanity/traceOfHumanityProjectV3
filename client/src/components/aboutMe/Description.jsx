import React, { useRef, useEffect, useState } from "react";
import styles from "./AboutMe.module.scss";
import { DescriptionText } from "./data";

import baffle from "baffle";

const Description = () => {
  const descriptionsRef = useRef([]);

  useEffect(() => {
    const title = baffle(".title");
    title.set({
      characters: "▓h￦u﮺ﬕmힰaꥅn㐣i㒸ty",
      speed: 70,
    });
    title.start();
    title.reveal(1000, 1000);

    descriptionsRef.current.forEach((element) => {
      const description = baffle(element);
      description.set({
        characters: "yoⰀne￦l﮺ﬕve〄ㄝꥅH㒸eoer!",
        speed: 50,
      });
      description.start();
      description.reveal(1000, 1400);
    });
  }, []);
  return (
    <div className={styles.descriptionContailer}>
      <h1 className={`${styles.h1} title`}>Trace of Humanity</h1>
      <h4 className={`${styles.subTitle}`}>Live and let live</h4>
      <div
        style={{
          position: "relative",
          // top: "150px",
          left: "1vw",
          width: "calc(300px + (800 - 300) * ((100vw - 320px) / (2500 - 320)))",
        }}
      >
        {DescriptionText.map((text, index) => (
          <>
            <p
              key={index}
              ref={(el) => (descriptionsRef.current[index] = el)}
              className={styles.description}
            >
              {text}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Description;
