import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const CustomHero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={theme === 'dark' ? '/hero-bg-dark.png' : '/hero-bg.png'}
          alt="Modern Tech Infrastructure"
          className="w-full h-full object-cover opacity-100"
        />
        {/* REFINED OVERLAY WITH MINIMAL BOTTOM SHADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/60 z-10" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Build Your <span className="gradient-text">Digital Presence</span>
          </h1>

          {/* Paragraph Text */}
          <div className="max-w-2xl mx-auto">
             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
               Empower your brand with state-of-the-art tech solutions. We blend creativity 
               with technical excellence to help you dominate the digital landscape.
             </p>
          </div>

          {/* CTA Buttons - Optional but recommended for modern UI */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform shadow-premium-glow">
              Get Started Now
            </button>
            <button className="px-8 py-4 border border-border bg-secondary/20 backdrop-blur-md text-foreground font-bold rounded-full hover:bg-secondary/40 transition-colors">
              Our Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomHero;
