import React, { useRef } from "react";
import styles from "./AboutMe.module.scss";

import baffle from "baffle";

const Description = () => {
  const descriptionsRef = useRef([]);
  const paragraphs = [
    `Hello everyone! My name is Alexander, and I sincerely want to make our
    world a better place. This task requires a lot of effort, but I am
    sure that modern technology gives us incredible opportunities that our
    ancestors could not even imagine. Therefore, we must use these
    opportunities to become more productive and solve the complex issues
    before us.`,
    `Programming and technology are becoming an integral part of life for
    an increasing number of people. This allows us to automate many areas
    of our daily activities, which used to take a lot of time and effort.`,
    `Programming and technology are becoming an integral part of life for
    an increasing number of people. This allows us to automate many areas
    of our daily activities, which used to take a lot of time and effort.`,
    `Neural networks, data analytics and process automation give us the
    opportunity to find effective solutions and implement them.`,
    `Thanks to programming, I can confidently say that there are no
    problems that cannot be solved, everything can be solved. The only
    question is how long it will take.`,
    `Learning to program is becoming more and more accessible, thanks to
    open access to educational resources, online courses and programming
    communities. This means that anyone who has the desire can learn to
    code and make their own contribution to creating a better future.`,
    `I believe that cooperation will help us solve even the most difficult
    problems. Together we can make this world a better place for all of us
    and future generations.`,
  ];

  React.useEffect(() => {
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
      description.reveal(1000, 1500);
    });
  }, []);
  return (
    <>
      <h1 className={`${styles.h1} title`}>Trace of Humanity</h1>
      <div
        style={{
          position: "relative",
          top: "150px",
          left: "1vw",
          width: "calc(300px + (800 - 300) * ((100vw - 320px) / (2500 - 320)))",
        }}
      >
        {paragraphs.map((text, index) => (
          <>
            <p
              key={index}
              ref={(el) => (descriptionsRef.current[index] = el)}
              className={styles.description}
            >
              {text}
            </p>
            <br />
          </>
        ))}
      </div>
    </>
  );
};

export default Description;
