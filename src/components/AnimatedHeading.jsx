import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  as: Tag = "h1",
  className = "",
  stagger = 0.05,
  yOffset = 20,
}) => {
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: yOffset 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block"
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;
