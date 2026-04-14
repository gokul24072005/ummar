import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Star, Quote, User, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialCarousel({ testimonials }) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const controls = useAnimationControls();
  const [cardsToShow, setCardsToShow] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
        setContainerWidth(scrollRef.current.scrollWidth / 3);
    }
  }, [testimonials, cardsToShow]);

  // Triple cloning for seamless loop
  const duplicatedTestimonials = useMemo(() => {
    if (!testimonials?.length) return [];
    return [...testimonials, ...testimonials, ...testimonials];
  }, [testimonials]);

  useEffect(() => {
    if (!containerWidth) return;

    const startAnimation = async () => {
      await controls.start({
        x: -containerWidth,
        transition: {
          duration: 10, // Increased speed for lightning-fast scrolling
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    if (!isPaused) {
       startAnimation();
    } else {
       controls.stop();
    }
  }, [isPaused, containerWidth, controls]);

  if (!testimonials?.length) return null;

  return (
    <div 
      className="relative w-full group py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient Masks for edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <motion.div
          ref={scrollRef}
          className="flex gap-6"
          animate={controls}
          initial={{ x: 0 }}
        >
          {duplicatedTestimonials.map((t, i) => (
             <div 
               key={i} 
               className="shrink-0 transition-transform duration-500 hover:scale-[1.02]"
               style={{ width: `calc((100% - ${(cardsToShow - 1) * 1.5}rem) / ${cardsToShow})` }}
             >
                <TestimonialCard testimonial={t} />
             </div>
          ))}
        </motion.div>
      </div>

      {/* Optional Navigation (Manual Override) */}
      <div className="flex justify-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <button  className="p-3 rounded-full glass-card border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ChevronLeft size={20} />
         </button>
         <button className="p-3 rounded-full glass-card border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ChevronRight size={20} />
         </button>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card glow-border p-8 relative flex flex-col h-full min-h-[280px] hover-glow transition-all duration-500">
      <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
      
      <div className="flex gap-0.5 mb-5">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-primary text-primary"
          />
        ))}
      </div>

      <p className="text-foreground/80 mb-8 italic flex-grow leading-relaxed text-sm">
        "{testimonial.description || testimonial.review || testimonial.quote}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 border border-primary/20 flex-shrink-0">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary">
              <User size={20} />
            </div>
          )}
        </div>
        <div className="overflow-hidden">
          <p className="font-bold text-foreground truncate text-sm">
            {testimonial.name || testimonial.author}
          </p>
          <p className="text-muted-foreground text-[9px] truncate uppercase tracking-widest font-medium">
            {testimonial.designation || testimonial.role || testimonial.position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
