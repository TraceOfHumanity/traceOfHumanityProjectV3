import React from "react";
import styles from "./Author.module.scss";
import { motion } from "framer-motion";
import Dancer from "../../components/dancer/Dancer";

import { MantineProvider } from "@mantine/core";

const Author = () => {
  return (
    <div className={styles.author}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (_theme) => ({
            body: { width: "100vw", height: "100vh" },
            "#root": {
              width: "100%",
              height: "100%",
            },
          }),
        }}
      >
        <Dancer />
      </MantineProvider>
    </div>
  );
};

export default Author;
