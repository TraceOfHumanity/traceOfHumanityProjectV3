import React from "react";
import styles from "./Library.module.scss";

import { motion } from "framer-motion";
import LibrarySection from "../../components/librarySection/LibrarySection";

const Library = () => {
  const [sections, setSections] = React.useState([
    "history", "technologies and inventions",
    "science", "mathematics", "art",
    "literature", "philosophy", "religion",
    "geography", "politics", "society",
    "sports", "music", "movies",
    "television", "video games", "board games",
    "card games", "role-playing games", "other"
  ]);

  return (
    <motion.div
      className={styles.library}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Library</h2>
      <div className={styles.sectionsContainer}>
        {
          sections.map((section, index) => (
            <LibrarySection
              key={index}
              section={section} />
          ))
        }
      </div>
    </motion.div>
  );
};

export default Library;
