import { motion } from 'framer-motion';
import { Brain, Database, ArrowRight, Check, Eye, MessageSquareCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Custom ML models trained on your data to solve complex business challenges and automate decision-making.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Regression & Classification', 'Deep Learning', 'Anomaly Detection'],
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced vision systems for object detection, facial recognition, and automated visual inspection.',
    features: ['Image Classification', 'Object Detection', 'Video Analysis', 'Medical Imaging AI', 'Real-time Processing'],
  },
  {
    icon: MessageSquareCode,
    title: 'Generative AI & LLMs',
    description: 'Implementation of state-of-the-art language models and generative AI for content and automation.',
    features: ['ChatGPT/GPT Integration', 'Custom LLM Fine-tuning', 'AI Chatbots', 'Content Generation', 'Prompt Engineering'],
  },
  {
    icon: Database,
    title: 'Data Science & Big Data',
    description: 'Extracting actionable insights from massive datasets using advanced statistical and AI techniques.',
    features: ['Big Data Architecture', 'Data Visualization', 'Statistical Analysis', 'ETL Pipelines', 'Insight Reporting'],
  },
];

const process = [
  { step: '01', title: 'Data Discovery', description: 'We analyze your existing data assets and identify opportunities for AI integration.' },
  { step: '02', title: 'Data Preparation', description: 'Cleaning, labeling, and transforming data to ensure high-quality model training.' },
  { step: '03', title: 'Model Selection', description: 'Choosing the right algorithms and architecture for your specific use case.' },
  { step: '04', title: 'Training & Tuning', description: 'Iterative training and hyperparameter optimization to achieve peak performance.' },
  { step: '05', title: 'Deployment', description: 'Seamlessly integrating models into your existing production environment.' },
  { step: '06', title: 'Monitoring & Feedback', description: 'Continuous performance tracking and model refinement based on real-world results.' },
];



const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const AiMlDevelopment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              AI & ML Development
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Intelligence
              <span className="gradient-text block">At Scale</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Harness the power of Artificial Intelligence and Machine Learning to transform your business data into intelligence and growth.
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
            <span className="text-primary font-medium">Core Workflow</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">How We Build AI</h2>
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



      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card glow-border p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Empower Your Business with AI</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Ready to explore how Machine Learning can drive efficiency and innovation in your company?
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-border hover-glow">
                  Consult with our AI Experts
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

export default AiMlDevelopment;
