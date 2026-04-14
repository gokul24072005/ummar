import { useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
  useSpring
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Layers,
  Zap,
  Shield,
  Users,
  Award,
  X,
  Star,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import Layout from "@/components/Layout";
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";
import { useAdmin } from "@/context/AdminContext";

import {
  sectionVariants,
  fadeInUp,
  staggerContainer,
  cardHover,
  buttonHover
} from "@/lib/animations";

const CharacterAnimation = ({ text, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01, // Even faster for paragraphs
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Slightly faster for a snappier feel
        ease: "linear",
      },
    },
  };

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

const WordAnimation = ({ text, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.34,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${className} leading-relaxed`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Tailored web solutions built with cutting-edge technologies to meet your unique business needs.",
  },
  {
    icon: Layers,
    title: "Responsive Design",
    description:
      "Beautiful, mobile-first designs that look stunning and perform flawlessly on all devices.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Lightning-fast applications optimized for speed, SEO, and exceptional user experience.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security practices to protect your data and ensure compliance.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const shouldAnimate = value.includes("+") && !value.includes("/");
  const numericValue = parseInt(value, 10) || 0;
  const suffix = value.includes("+") ? "+" : "";

  useEffect(() => {
    if (shouldAnimate && isInView) {
      const controls = animate(count, numericValue, {
        duration: 3, // slightly shorter for better feel
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [shouldAnimate, numericValue, count, rounded, isInView]);

  if (!shouldAnimate) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};


const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Modern shopping experience with real-time inventory and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    client: "ShopMax Inc.",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description:
      "Comprehensive analytics dashboard for enterprise data management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["TypeScript", "GraphQL", "AWS", "D3.js"],
    client: "DataFlow Systems",
  },
  {
    title: "Mobile Banking App",
    category: "Full Stack",
    description:
      "Cross-platform mobile banking solution with biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Plaid", "Node.js"],
    client: "FinSecure Bank",
  },
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    animate(x, 0, { type: "spring", stiffness: 420, damping: 28 });
    animate(y, 0, { type: "spring", stiffness: 420, damping: 28 });
  }

  return (
    <motion.div
      variants={fadeInUp}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -4,
        transition: { duration: 0.16, ease: "easeOut" }
      }}
      className="glass-card creative-card-border p-8 relative group cursor-pointer shadow-[0_10px_24px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_24px_48px_-22px_rgba(0,0,0,0.16)] transition-all duration-200 border-border preserve-3d"
    >
      {/* Premium Glass Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-inherit" />
      <div className="glassy-highlight" />
      <div className="inner-border-glow" />

      {/* Light Shine Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-inherit">
        <div className="card-shine-effect opacity-20" />
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute -top-8 -right-10 w-32 h-32 bg-primary/5 blur-[72px] rounded-full group-hover:bg-primary/10 transition-colors duration-200" />

      {/* LAYERED ICON AREA */}
      <div className="relative mb-10 preserve-3d">
        <div className="w-20 h-20 premium-squircle bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-5 border border-border shadow-sm relative z-10 layered-panel">
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8 + index * 0.2,
              ease: "easeInOut"
            }}
            className="preserve-3d"
          >
            <service.icon className="w-9 h-9 text-primary group-hover:scale-105 transition-all duration-200" style={{ filter: "drop-shadow(0 6px 10px rgba(var(--primary), 0.14))" }} />
          </motion.div>
        </div>
        {/* Floating Rings */}
        <div className="absolute -inset-1.5 border border-primary/10 rounded-full group-hover:border-primary/30 transition-colors duration-250 -translate-z-[10px]" />
        <div className="absolute -inset-4 border border-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-250 -translate-z-[20px] scale-95 group-hover:scale-105" />
      </div>

      <h3 className="font-display font-bold text-2xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-180 leading-tight translate-z-[15px]">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-base opacity-90 group-hover:opacity-100 transition-opacity duration-180 translate-z-[10px]">
        {service.description}
      </p>

      {/* Minimal Footer Decor */}
      <div className="mt-8 flex items-center gap-3 translate-z-[12px]">
        <div className="h-[1px] w-8 bg-primary/20 group-hover:w-12 group-hover:bg-primary/40 transition-all duration-180" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-180" />
      </div>
    </motion.div>
  );
};

const StatCard = ({ stat, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
  }

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative perspective-1000"
    >
      <motion.div
        whileHover={{ z: 20 }}
        className="glass-card creative-card-border p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 bg-background/40 backdrop-blur-3xl border-border preserve-3d"
      >
        {/* Layered Highlights */}
        <div className="glassy-highlight" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-inherit" />

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: index * 0.1 }}
          className="font-display text-5xl md:text-7xl font-black gradient-text mb-4 leading-none translate-z-[30px]"
        >
          <Counter value={stat.value} />
        </motion.div>

        <div className="text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px] md:text-xs translate-z-[15px] opacity-70 group-hover:opacity-100 transition-opacity">
          {stat.label}
        </div>

        {/* Dynamic Accent Line */}
        <div className="mt-6 w-12 h-[2px] bg-primary/10 group-hover:w-24 group-hover:bg-primary transition-all duration-700 rounded-full translate-z-[10px]" />
      </motion.div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
  }

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        y: index === 1 ? (typeof window !== 'undefined' && window.innerWidth > 768 ? 40 : 0) : 0
      }}
      whileHover={{ z: 25 }}
      className="glass-card creative-card-border p-8 relative overflow-hidden group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 border-border preserve-3d"
    >
      <div className="glassy-highlight" />
      <div className="absolute top-0 left-0 w-1.5 h-12 bg-primary/40 group-hover:h-full group-hover:bg-primary transition-all duration-700" />
      <Quote className="w-12 h-12 text-primary/10 absolute top-8 right-8 rotate-180 translate-z-[10px]" />

      <div className="flex gap-1 mb-8 translate-z-[20px]">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="font-display text-lg md:text-xl font-medium text-foreground mb-10 leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity translate-z-[30px]">
        "{testimonial.description || testimonial.quote}"
      </p>

      <div className="flex items-center gap-5 translate-z-[15px]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-0.5 border border-border shadow-lg">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-black text-primary text-xl">
            {testimonial.name?.charAt(0) || testimonial.author?.charAt(0) || "U"}
          </div>
        </div>
        <div>
          <p className="font-display font-black text-lg text-foreground leading-tight">
            {testimonial.name || testimonial.author}
          </p>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">
            {testimonial.designation || testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const { popups, testimonials } = useAdmin();
  const activePopup = popups?.find((p) => p.isActive) ?? null;
  const [dismissed, setDismissed] = useState(false);
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -40]);
  const { scrollYProgress: heroScrollProgressRaw } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScrollProgress = useSpring(heroScrollProgressRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Outer card moves slightly
  const heroCardY = useTransform(
    heroScrollProgress,
    [0, 0.08, 0.32, 0.62, 1],
    [0, 10, 40, 80, 120]
  );

  // Logo moves down first and faster
  const logoY = useTransform(
    heroScrollProgress,
    [0, 0.1, 0.4, 1],
    [0, 60, 180, 300]
  );


  // Content moves down second and slightly slower but follows
  const contentY = useTransform(
    heroScrollProgress,
    [0, 0.15, 0.5, 1],
    [0, 20, 120, 250]
  );

  const heroTextOpacity = useTransform(heroScrollProgress, [0, 0.75, 1], [1, 0.72, 0.52]);

  return (
    <Layout>
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 ">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Popup */}
      <AnimatePresence>
        {activePopup && !dismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setDismissed(true)}
            />
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-md glass-card glow-border rounded-2xl p-8 text-center shadow-2xl"
            >
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <Zap size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{activePopup.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{activePopup.description}</p>
              <button
                onClick={() => setDismissed(true)}
                className="mt-6 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        ref={heroRef}
        className="relative min-h-[170vh] w-full overflow-hidden bg-background pt-24 md:pt-32"
      >
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >

          <div className="absolute inset-0 bg-[#A09DB0]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_#42488a_0%,_transparent_50%),radial-gradient(circle_at_100%_0%,_#d29179_0%,_transparent_50%),radial-gradient(circle_at_100%_100%,_#aa7b82_0%,_transparent_50%),radial-gradient(circle_at_0%_0%,_#6b6dae_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_#cb979d_0%,_transparent_50%),radial-gradient(circle_at_80%_40%,_#e3a078_0%,_transparent_40%)]" />

          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] pointer-events-none" />
        </motion.div>



        <div className="container-custom sticky top-28 z-10 flex justify-center pb-10">
          <motion.div
            style={{ y: heroCardY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="mx-auto w-full max-w-[760px] rounded-[34px] border border-border/60 bg-background/75 p-3 shadow-[0_35px_90px_-40px_rgba(16,24,44,0.45)] backdrop-blur-[10px] md:p-5"
          >
            <div className="rounded-[28px] bg-card px-5 pb-5 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:px-6 md:pb-6 md:pt-6 overflow-hidden">
              <motion.div
                style={{ y: logoY }}
                className="mb-6 flex flex-col items-start gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src="/life-at-izone/IZONE logo with innovation tagline.png"
                    alt="Izone Logo"
                    className="h-16 md:h-20 w-auto object-contain bg-transparent"
                  />
                </motion.div>
              </motion.div>



              <motion.div style={{ y: contentY }}>
                <motion.div
                  style={{ opacity: heroTextOpacity }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="rounded-[24px] border border-border bg-background p-6 text-left shadow-[0_20px_50px_-36px_rgba(28,40,72,0.2)] md:p-8">
                    <motion.div
                      initial={{ opacity: 0, rotateX: -90, y: 15 }}
                      animate={{ opacity: 1, rotateX: 0, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="perspective-1000"
                    >
                      <span className="shimmer-text inline-block rounded-full bg-background/40 backdrop-blur-sm border border-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary/80 md:text-sm">
                        Innovation of Technology
                      </span>
                    </motion.div>

                    <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl drop-shadow-sm">
                      <span className="block">
                        <CharacterAnimation text="We Build" delay={0.2} />
                      </span>
                      <span className="mt-3 block md:mt-5 text-primary">
                        <span className="inline-block whitespace-nowrap">
                          <CharacterAnimation text="Digital Excellence" delay={0.5} />
                        </span>
                      </span>
                    </h1>

                    <div className="max-w-xl">
                      <CharacterAnimation
                        text="Izone Technologies crafts exceptional web experiences that transform businesses. From concept to deployment, we bring your vision to life."
                        delay={0.8}
                        className="mt-6 text-base leading-relaxed text-foreground/80 font-medium md:text-lg"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                      className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:justify-start"
                    >
                      <Link to="/contact">
                        <Button size="lg" className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-premium-glow transition-all active:scale-95">
                          Start Your Journey
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link to="/development">
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-12 px-8 rounded-full border-primary/20 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary/5 font-bold transition-all active:scale-95"
                        >
                          Our Portfolio
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium block">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-bold mt-2">
              What We Offer
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - AUTHORITATIVE COUNTERS */}
      <section className="py-16 relative overflow-hidden">
        {/* Background glow behind stats */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 balance-glow blur-[120px] pointer-events-none" />

        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding overflow-hidden relative">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-primary/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* TEXT SIDE - STAGGERED REVEAL */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">
                Why Choose Us
              </motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-[3.4rem] font-bold tracking-tight mb-6">
                Your Success is Our <span className="gradient-text">Top Priority</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                With over a decade of experience, we've mastered the art of
                creating digital solutions that drive results. Our team of
                expert developers, designers, and strategists work together to
                deliver excellence.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-4 mb-8">
                {[
                  { icon: Users, text: "Dedicated team of expert developers" },
                  { icon: Award, text: "Award-winning creative solutions" },
                  { icon: Zap, text: "Agile, transparent development process" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 group glass-card creative-card-border p-4 rounded-2xl bg-background/30 hover:bg-background/45 transition-all duration-300 border-border relative overflow-hidden"
                  >
                    <div className="glassy-highlight" />
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-all duration-300 relative z-10">
                      <item.icon className="w-6 h-6 text-primary group-hover:scale-105 transition-transform" />
                    </div>
                    <span className="text-lg md:text-xl font-black text-foreground tracking-tight relative z-10">{item.text}</span>
                    <div className="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300 text-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/about">
                  <motion.div whileHover={buttonHover.hover} whileTap={buttonHover.tap} className="inline-block">
                    <Button size="lg" className="h-12 px-8 text-base bg-foreground text-background hover:bg-foreground/90 glow-border rounded-full shadow-premium">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* IMAGE SIDE - PARALLAX & DEPTH */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="glass-card creative-card-border p-3 md:p-4 overflow-hidden shadow-premium border-border relative z-10 bg-secondary/20"
              >
                <div className="absolute inset-0 card-shine-effect opacity-30" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-[2rem] overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=800&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover shadow-xl brightness-95 saturate-[0.9] hover:brightness-100 hover:saturate-100 transition-all duration-500"
                  />
                </motion.div>
              </motion.div>

              {/* PREMIUM FLOATING BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  y: [0, -12, 0],
                  x: [0, 8, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-8 -left-4 md:-left-8 z-20"
              >
                <div className="glass-card p-4 md:p-6 rounded-2xl border-border shadow-premium-glow flex items-center gap-4 min-w-[210px]">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                      Top Rated
                    </div>
                    <div className="font-display text-xl font-black text-foreground">
                      Agency 2024
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Extra Layered Blur Circle behind Image */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[64px] pointer-events-none z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - MOSAIC STAGGER REVEAL */}
      <section className="section-padding overflow-hidden relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center mb-10 md:mb-12"
          >
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 block">Testimonials</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              What Our <span className="gradient-text">Clients</span> Say
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start perspective-1000"
          >
            {testimonials?.slice().reverse().slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id || index} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Scroll Animated */}
      <ScrollWorksSection
        works={projects}
        title="Our Portfolio"
        subtitle="Featured Projects"
      />

      {/* CTA Section - COMPACT PREMIUM CARD */}
      <section className="py-12 md:py-16 bg-background relative overflow-hidden">
        <div className="container-custom flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl bg-card border border-border/80 shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row relative z-20"
          >
            {/* CTA CONTENT - 60% */}
            <div className="w-full md:w-[60%] p-8 md:p-8 relative z-20 flex flex-col justify-center text-start order-2 md:order-1">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block"
              >
                Ready to Scale?
              </motion.span>

              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-snug text-foreground">
                Let's build something <br className="hidden md:block" />
                <span className="gradient-text">Extraordinary</span> together.
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
                Join our community of forward-thinking businesses and turn your digital challenges into global success stories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link to="/contact">
                  <motion.div whileHover={buttonHover.hover} whileTap={buttonHover.tap}>
                    <Button className="h-11 px-6 text-sm bg-primary text-primary-foreground hover:bg-primary/95 rounded-full font-bold shadow-sm">
                      Start Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/development">
                  <motion.div whileHover={buttonHover.hover} whileTap={buttonHover.tap}>
                    <Button variant="outline" className="h-11 px-6 text-sm border-border text-muted-foreground hover:text-foreground font-semibold rounded-full bg-transparent">
                      Explore Portfolio
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* CTA VISUAL - 40% */}
            <div className="w-full md:w-[40%] relative overflow-hidden h-[240px] md:h-auto border-b md:border-b-0 md:border-l border-border/40 order-1 md:order-2 shrink-0 bg-background/50">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop"
                alt="Modern workspace"
                className="w-full h-full object-cover saturate-[0.8] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
