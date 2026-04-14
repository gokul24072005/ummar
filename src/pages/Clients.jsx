import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Building2, Users, Globe, Award, Star, Quote, Code, Layers, Zap, Shield, Smartphone, BarChart, Database, Mail, Phone, MessageSquare, Megaphone, Share2, Search, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import HeroParagraph from "@/components/ui/HeroParagraph";
import { useAdmin } from "@/context/AdminContext";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";



const stats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    value: 500,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: 50,
    suffix: "M+",
    label: "Users Reached",
  },
  { icon: <Globe className="w-8 h-8" />, value: 25, suffix: "+", label: "Countries" },
  {
    icon: <Award className="w-8 h-8" />,
    value: 99,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

const Counter = ({ value, suffix }) => {
  const time = useMotionValue(0);
  const display = useTransform(time, (latest) => Math.floor(latest));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const controls = animate(time, value, {
      duration: 4,
      ease: "linear",
    });

    const unsubscribe = display.on("change", (latest) => {
      setCurrentValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, time, display]);

  return (
    <span className="time">
      {currentValue}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SplitText = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.2em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={(wordIndex + 1) % 2 === 0 ? { opacity: 0, y: 20 } : { opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + (wordIndex * 0.08) + (charIndex * 0.02),
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

const Clients = () => {
  const { clients, testimonials } = useAdmin();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Our Clients
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">
                <SplitText text="Trusted by" delay={0.3} />
              </span>
              <span className="block mt-2 overflow-visible">
                <SplitText 
                  text="Industry Leaders" 
                  delay={0.5} 
                  className="inline-block leading-[1.3] pb-[0.2em] gradient-text -mt-7" 
                />
              </span>
            </h1>
            <HeroParagraph
              text="We're proud to partner with leading organizations across various industries to deliver exceptional digital solutions."
              className="-mt-5"
              delay={0.7}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover-glow"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Valued <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we've helped businesses across
              industries achieve their digital goals.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {clients?.map((client, index) => (
              <motion.div
                key={client.id || index}
                variants={itemVariants}
                className="glass-card p-6 group hover-glow cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 overflow-hidden group-hover:bg-primary/20 transition-colors">
                  {client.icon ? (
                    <img src={client.icon} alt={client.companyName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-display text-xl font-bold text-primary">
                      {client.companyName ? client.companyName.substring(0, 2).toUpperCase() : <Building2 />}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {client.companyName || client.name}
                </h3>
                <p className="text-primary text-sm mb-2">{client.industry}</p>
                <p className="text-muted-foreground text-sm">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Join Our Growing List of Clients
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how we can help your business achieve its digital
                goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
