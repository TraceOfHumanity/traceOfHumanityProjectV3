import React from "react";
import styles from "./AboutMe.module.scss";

import baffle from "baffle";

const Description = () => {
  React.useEffect(() => {
    const title = baffle(".title");
    title.set({
      characters: "▓h￦u﮺ﬕmힰaꥅn㐣i㒸ty",
      speed: 70,
    });
    title.start();
    title.reveal(1000, 1000);

    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach((element) => {
      const description = baffle(element);
      description.set({
        characters: "yoⰀne￦ll﮺ﬕve〄ㄝꥅH㒸eoer!",
        speed: 50,
      });
      description.start();
      description.reveal(1000, 1500);
    });
  }, []);
  return (
    <>
      <h1
        className="title"
        style={{
          position: "relative",
          top: "calc(40px + (80 - 40) * ((100vw - 320px) / (2500 - 320)))",
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-block",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        Trace of Humanity
      </h1>
      <div
        style={{
          position: "relative",
          top: "150px",
          left: "1vw",
          width: "calc(300px + (800 - 300) * ((100vw - 320px) / (2500 - 320)))",
        }}
      >
        <p className="description">
          Hello everyone! My name is Alexander, and I sincerely want to make our
          world a better place. This task requires a lot of effort, but I am
          sure that modern technology gives us incredible opportunities that our
          ancestors could not even imagine. Therefore, we must use these
          opportunities to become more productive and solve the complex issues
          before us.
          <br />
        </p>
        <p className="description">
          Programming and technology are becoming an integral part of life for
          an increasing number of people. This allows us to automate many areas
          of our daily activities, which used to take a lot of time and effort.
          <br />
        </p>
        <p className="description">
          Programming and technology are becoming an integral part of life for
          an increasing number of people. This allows us to automate many areas
          of our daily activities, which used to take a lot of time and effort.
          <br />
        </p>
        <p className="description">
          {" "}
          Neural networks, data analytics and process automation give us the
          opportunity to find effective solutions and implement them. <br />
        </p>
        <p className="description">
          Thanks to programming, I can confidently say that there are no
          problems that cannot be solved, everything can be solved. The only
          question is how long it will take. <br />
        </p>
        <p className="description">
          Learning to program is becoming more and more accessible, thanks to
          open access to educational resources, online courses and programming
          communities. This means that anyone who has the desire can learn to
          code and make their own contribution to creating a better future.
          <br />
        </p>
        <p className="description">
          I believe that cooperation will help us solve even the most difficult
          problems. Together we can make this world a better place for all of us
          and future generations.
        </p>
      </div>
    </>
  );
};

export default Description;
