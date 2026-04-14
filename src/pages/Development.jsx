import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  ArrowRight,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "../components/ui/button";
import FlipCard from "@/components/ui/FlipCard";
import HeroParagraph from "@/components/ui/HeroParagraph";

const services = [
  {
    title: "Custom Web Applications",
    summary:
      "Tailored solutions built from scratch using modern frameworks like React, Next.js, and Vue.",
    fullContent:
      "We create bespoke web applications that perfectly align with your business requirements. Our team uses cutting-edge technologies including React, Next.js, Vue.js, and Angular to deliver scalable, maintainable solutions.",
    icon: <Code className="w-7 h-7 text-primary" />,
    features: [
      "React & Next.js",
      "Vue.js & Nuxt",
      "TypeScript",
      "State Management",
      "API Integration",
      "Testing & QA",
    ],
    shape3D: "cube",
  },
  {
    title: "Responsive Design",
    summary:
      "Mobile-first designs that look stunning and perform flawlessly across all devices.",
    fullContent:
      "Every website we build is fully responsive, ensuring a seamless experience from smartphones to large desktop monitors. We implement mobile-first strategies and test across multiple devices.",
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    features: [
      "Mobile-First Approach",
      "Cross-Browser Testing",
      "Fluid Layouts",
      "Touch Optimization",
      "PWA Support",
    ],
    shape3D: "sphere",
  },
  {
    title: "E-Commerce Solutions",
    summary:
      "Full-featured online stores with secure payments, inventory management, and analytics.",
    fullContent:
      "Build your online store with powerful e-commerce features including product management, secure checkout, payment gateway integration, and real-time analytics to grow your business.",
    icon: <Globe className="w-7 h-7 text-primary" />,
    features: [
      "Shopify & WooCommerce",
      "Custom Storefronts",
      "Payment Integration",
      "Inventory System",
      "Order Management",
    ],
    shape3D: "torus",
  },
  {
    title: "Backend Development",
    summary:
      "Robust server-side solutions with Node.js, Python, and cloud infrastructure.",
    fullContent:
      "Our backend expertise includes building RESTful APIs, GraphQL services, microservices architecture, and database design to power your applications with reliable, scalable infrastructure.",
    icon: <Database className="w-7 h-7 text-primary" />,
    features: [
      "Node.js & Express",
      "Python & Django",
      "GraphQL APIs",
      "PostgreSQL & MongoDB",
      "Redis Caching",
    ],
    shape3D: "octahedron",
  },
  {
    title: "AI & ML Development",
    summary:
      "Intelligent solutions powered by machine learning and large language models for automation.",
    fullContent:
      "We build advanced AI solutions ranging from custom machine learning models to generative AI integrations. Our expertise helps you automate complex tasks and unlock value from your data.",
    icon: <Brain className="w-7 h-7 text-primary" />,
    features: [
      "Machine Learning",
      "NLP & GPT Models",
      "Computer Vision",
      "Predictive Analytics",
      "AI Integration",
    ],
    shape3D: "torus",
  },
  {
    title: "Security & Compliance",
    summary:
      "Enterprise-grade security practices to protect your data and ensure compliance.",
    fullContent:
      "We implement industry-standard security measures including SSL/TLS encryption, input validation, authentication systems, and regular security audits to keep your applications safe.",
    icon: <Shield className="w-7 h-7 text-primary" />,
    features: [
      "SSL/TLS Encryption",
      "OAuth & JWT",
      "GDPR Compliance",
      "Security Audits",
      "Penetration Testing",
    ],
    shape3D: "cube",
  },
  {
    title: "Performance Optimization",
    summary:
      "Lightning-fast applications optimized for speed, SEO, and exceptional user experience.",
    fullContent:
      "Speed matters. We optimize every aspect of your application from code splitting and lazy loading to CDN integration and database query optimization for the best performance.",
    icon: <Zap className="w-7 h-7 text-primary" />,
    features: [
      "Code Splitting",
      "Image Optimization",
      "CDN Integration",
      "Core Web Vitals",
      "SEO Best Practices",
    ],
    shape3D: "sphere",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
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

const Development = () => {
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
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">
                <SplitText text="Build Your Digital" delay={0.3} />
              </span>
              <span className="gradient-text block pb-[0.15em] leading-[1.3]">
                <SplitText text="Presence" delay={0.5} />
              </span>
            </h1>
            <HeroParagraph
              text="From stunning websites to powerful web applications, we deliver cutting-edge solutions that drive business growth."
              delay={0.7}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <FlipCard
                key={index}
                title={service.title}
                summary={service.summary}
                fullContent={service.fullContent}
                icon={service.icon}
                features={service.features}
                use3D={true}
                shape3D={service.shape3D}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
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
                Ready to Build Your Website?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss your project and create something extraordinary
                together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-border hover-glow">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Development;
