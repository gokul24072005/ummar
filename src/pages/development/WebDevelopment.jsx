import { motion } from 'framer-motion';
import { Code, Palette, Settings, Headphones, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";

const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Tailored web applications built from the ground up using modern frameworks and best practices.',
    features: ['React & Next.js', 'TypeScript', 'Node.js Backend', 'REST & GraphQL APIs', 'Database Design'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind for maximum engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility'],
  },
  {
    icon: Settings,
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, technology stack, and development strategy.',
    features: ['Architecture Review', 'Code Audits', 'Performance Optimization', 'Security Assessment', 'Scalability Planning'],
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Continuous maintenance, updates, and support to keep your application running smoothly.',
    features: ['24/7 Monitoring', 'Bug Fixes', 'Feature Updates', 'Performance Tuning', 'Security Patches'],
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We dive deep into understanding your business, goals, and requirements.' },
  { step: '02', title: 'Planning', description: 'Creating detailed roadmaps, wireframes, and technical specifications.' },
  { step: '03', title: 'Design', description: 'Crafting beautiful, user-centric interfaces that align with your brand.' },
  { step: '04', title: 'Development', description: 'Building robust, scalable applications using cutting-edge technologies.' },
  { step: '05', title: 'Testing', description: 'Rigorous quality assurance to ensure flawless functionality.' },
  { step: '06', title: 'Launch & Support', description: 'Seamless deployment and ongoing maintenance for lasting success.' },
];

const portfolio = [
  { title: 'E-Commerce Platform', category: 'Full Stack Development', description: 'Modern shopping experience with real-time inventory and seamless checkout. Built with cutting-edge technologies for optimal performance.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'] },
  { title: 'SaaS Dashboard', category: 'Web Application', description: 'Comprehensive analytics dashboard for enterprise data management. Features real-time data visualization and custom reporting.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', tags: ['TypeScript', 'GraphQL', 'AWS', 'D3.js'] },
  { title: 'Healthcare Portal', category: 'Enterprise Solution', description: 'HIPAA-compliant patient management system with telemedicine features. Secure, scalable, and user-friendly design.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop', tags: ['React', 'PostgreSQL', 'WebRTC', 'HIPAA'] },
  { title: 'FinTech Mobile App', category: 'Mobile Development', description: 'Cross-platform mobile banking solution with biometric authentication. Seamless user experience across iOS and Android.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop', tags: ['React Native', 'Firebase', 'Plaid', 'Biometrics'] },
  { title: 'Real Estate Platform', category: 'Web Application', description: 'Property listing platform with virtual tours and CRM integration. Interactive maps and advanced search functionality.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop', tags: ['Next.js', 'Prisma', 'Mapbox', '3D Tours'] },
  { title: 'Learning Management System', category: 'EdTech', description: 'Interactive e-learning platform with video streaming and progress tracking. Gamification elements for better engagement.', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop', tags: ['Vue.js', 'Django', 'Redis', 'WebSockets'] },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const WebDevelopment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Web Development
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Web Development
              <span className="gradient-text block">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we deliver cutting-edge web solutions that drive business growth and user engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card p-8 hover-glow group">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary font-medium">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">How We Work</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card p-6 hover-glow relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-display font-bold text-primary/10">{item.step}</div>
                <div className="relative z-10">
                  <span className="text-primary font-display font-bold text-sm">Step {item.step}</span>
                  <h3 className="font-display text-xl font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll-Triggered Portfolio Section */}
      <ScrollWorksSection works={portfolio} title="Our Work" subtitle="Featured Projects" />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card glow-border p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how we can bring your vision to life with our expert web development services.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-border hover-glow">
                  Get a Free Quote
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

export default WebDevelopment;
