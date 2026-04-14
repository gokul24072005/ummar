import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ExpertCard = ({ name, role, avatar, bio, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate fallback image if none provided
  const imageUrl =
    image ||
    `https://api.dicebear.com/7.x/personas/svg?seed=${name.replace(/\s/g, "")}`;

  return (
    <motion.div
      className="glass-card p-6 hover-glow group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Image on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-110" />

              {/* Floating Avatar */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20"
              >
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover bg-card"
                />
              </motion.div>

              {/* Connector */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent origin-top"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          {avatar}
        </motion.div>

        <div>
          <h3 className="font-display font-semibold text-lg">{name}</h3>
          <span className="text-primary text-sm">{role}</span>
        </div>
      </div>

      <p className="text-muted-foreground text-sm">{bio}</p>
    </motion.div>
  );
};

export default ExpertCard;
