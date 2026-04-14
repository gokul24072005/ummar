import { motion } from "framer-motion";
import { MessageSquare, Phone, MessageCircle, Megaphone, Vote, ArrowRight, Code, Layers, Zap, Shield, Smartphone, Globe, BarChart, Database, Mail, Share2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroParagraph from "@/components/ui/HeroParagraph";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Bulk SMS",
    path: "/services/bulk-sms",
    icon: MessageSquare,
    description: "Reach thousands of customers instantly with our reliable bulk SMS platform. Perfect for updates, promotions, and alerts.",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Voice SMS",
    path: "/services/voice-sms",
    icon: Phone,
    description: "Deliver automated voice messages to your audience. Create a more personal connection with high-quality voice broadcasts.",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "WhatsApp Panel",
    path: "/services/whatsapp-panel",
    icon: MessageCircle,
    description: "Manage your business communications efficiently with our user-friendly WhatsApp management panel.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    name: "WhatsApp Marketing",
    path: "/services/whatsapp-marketing",
    icon: Megaphone,
    description: "Leverage the power of WhatsApp for your marketing campaigns. Drive higher engagement and conversion rates.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    name: "Digital Election Campaign",
    path: "/services/digital-election-campaign",
    icon: Vote,
    description: "Strategic digital campaigning for modern elections. Connect with voters through data-driven digital outreach.",
    color: "bg-primary text-primary-foreground",
  },
];

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

const Services = () => {
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
                <SplitText text="Empowering Your" delay={0.3} />
              </span>
              <span className="gradient-text block mt-2 pb-[0.15em] leading-[1.3]">
                <SplitText text="Digital Growth" delay={0.5} />
              </span>
            </h1>
            <HeroParagraph
              text="We provide a comprehensive suite of digital communication and marketing solutions designed to scale your business and engage your audience."
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 group hover-glow transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.path}>
                  <Button variant="ghost" className="p-0 hover:bg-transparent group-hover:text-primary flex items-center gap-2">
                    Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="gradient-text">Solutions?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Scalability", desc: "Our platform grows with your business, handling thousands of updates simultaneously." },
                  { title: "Reliability", desc: "Enterprise-grade infrastructure ensuring 99.9% uptime for all your campaigns." },
                  { title: "Security", desc: "Advanced security protocols to protect your data and communications." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 glow-border aspect-video flex items-center justify-center relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-primary/5 animate-pulse" />
               <div className="text-center relative z-10">
                 <p className="font-display text-2xl font-bold text-primary mb-2">Integrated Platform</p>
                 <p className="text-muted-foreground">Manage all your digital communications in one place.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Boost Your Marketing?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how our services can help you reach your target audience effectively.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-border hover-glow">
                  Get Started Today
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

export default Services;
