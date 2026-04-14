export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.99 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.24, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -14 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.24, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 14 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.24, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.01
    }
  }
};

export const sectionVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.26, 
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
      staggerChildren: 0.03 
    }
  }
};

export const cardHover = {
  initial: { scale: 1, boxShadow: "0 0 0 rgba(125, 213, 224, 0)" },
  hover: { 
    scale: 1.015, 
    boxShadow: "0 8px 22px rgba(125, 213, 224, 0.12)",
    filter: "brightness(1.02)",
    transition: { duration: 0.12, ease: "easeOut" }
  }
};

export const buttonHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.015, 
    filter: "brightness(1.04)",
    transition: { duration: 0.1, ease: "easeInOut" }
  },
  tap: { scale: 0.98 }
};

export const pageTransition = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.18, ease: "easeInOut" }
};
