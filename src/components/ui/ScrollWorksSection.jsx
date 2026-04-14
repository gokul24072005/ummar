import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ScrollWorksSection({
  works,
  title = "Our Work",
  subtitle = "Case Studies",
}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO-PLAY CYCLE: 5 Seconds per project
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % works.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [works.length]);

  const work = works[activeIndex];

  // ANTI-GRAVITY SCROLL PHYSICS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.001
  });

  // TIGHTENED VERTICAL RANGE FOR COMPACT FEEL
  const innerContentY = useTransform(smoothProgress, [0, 1], [120, -120]);
  const imageParallaxY = useTransform(smoothProgress, [0, 1], [-40, 40]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-12 md:py-16 bg-background/50 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        
        {/* COMPOSITIONAL HEADER - Brought closer to card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-center text-center md:text-left gap-4 mb-6 max-w-4xl mx-auto">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-1 block opacity-80">
              {title}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {subtitle === "Case Studies" || subtitle === "Featured Projects" ? "Latest " : ""}
              <span className="gradient-text">{subtitle === "Case Studies" || subtitle === "Featured Projects" ? "Showcase" : subtitle}</span>
            </h2>
          </div>

          {/* MINIMAL PROGRESS COUNTER */}
          <div className="flex gap-1.5 pb-1">
            {works.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-primary/20'}`}
              />
            ))}
          </div>
        </div>

        {/* TIGHT HORIZONTAL FEATURE CARD CORE */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Subtle layered backdrop effect (not blocky) */}
          <div className="absolute inset-0 bg-secondary/40 rounded-[20px] -rotate-1 scale-[1.02] shadow-sm transform -z-10" />
          
          <motion.div
             style={{ y: innerContentY }}
             className="relative z-20 w-full"
          >
            {/* Clean surface card - no heavy blur, subtle premium shadow */}
            <div className="w-full bg-card border border-border shadow-md flex flex-col md:flex-row overflow-hidden rounded-[20px] items-stretch min-h-[340px]">
              
              {/* IMAGE STAGE - 40/60 roughly */}
              <div className="w-full md:w-[45%] relative overflow-hidden h-[240px] md:h-auto border-b md:border-b-0 md:border-r border-border/30 shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex + "img"}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover saturate-[0.9] brightness-[0.95]"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Compact Auto-Play Loader overlaying the image edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30 z-10">
                  <motion.div
                    key={activeIndex + "loader"}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-primary origin-left"
                  />
                </div>
              </div>

              {/* CONTENT STAGE - 55% */}
              <div className="w-full md:w-[55%] flex flex-col p-6 md:p-8 bg-card relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex + "content"}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest border border-border">
                        {work.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 tracking-tight text-foreground leading-[1.2]">
                      {work.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed opacity-90 line-clamp-3">
                      {work.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-2 border-t border-border/50">
                      {/* TECH TAGS */}
                      <div className="flex flex-wrap gap-2 flex-1">
                        {work.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-background px-2 py-1 rounded border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA - integrated, not floating awkwardly */}
                      <div className="group cursor-pointer flex items-center gap-2 shrink-0">
                        <span className="text-foreground font-bold text-xs uppercase tracking-wider group-hover:text-primary transition-colors">
                          View Case
                        </span>
                        <div className="w-8 h-8 rounded border border-border flex items-center justify-center bg-secondary group-hover:bg-primary transition-colors text-foreground group-hover:text-primary-foreground">
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ScrollWorksSection;
