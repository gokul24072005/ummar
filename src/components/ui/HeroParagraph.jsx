import { motion } from "framer-motion";

const HeroParagraph = ({ text, className = "", delay = 0.5 }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delay, 
        ease: "easeOut" 
      }}
      className={`text-lg text-muted-foreground hero-para ${className}`}
    >
      {text}
    </motion.p>
  );
};

export default HeroParagraph;
