import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { useAdmin } from "@/context/AdminContext";
import { 
  sectionVariants, 
  fadeInUp, 
  staggerContainer, 
  cardHover, 
  buttonHover 
} from "@/lib/animations";

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

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["5th Cross Thillainagar,", "Tiruchirappalli-620018."],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["innovativezone.tech@gmail.com", ""],
    link: "mailto:innovativezone.tech@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9943077284", ""],
    link: "tel:+919943077284",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Sat: 10:00 AM - 6:30 PM", "Sun: Closed"],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Contact = () => {
  const { toast } = useToast();
  const { addContact } = useAdmin();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    addContact(formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              Get In Touch
            </motion.span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">
                <SplitText text="Let's Start a" delay={0.3} />
              </span>
              <span className="gradient-text block pb-[0.15em] leading-[1.3]">
                <SplitText text="Conversation" delay={0.5} />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-lg text-muted-foreground"
            >
              <SplitText 
                text="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible." 
                delay={0.7} 
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 (234) 567-890"
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <motion.div
                  whileHover={buttonHover.hover}
                  whileTap={buttonHover.tap}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent border-none text-white shadow-premium-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6 mb-10"
              >
                {contactInfo.map((item, index) => {
                  const CardWrapper = item.link ? motion.a : motion.div;
                  return (
                    <CardWrapper
                      key={index}
                      {...(item.link ? {
                        href: item.link,
                        target: item.link.startsWith("http") ? "_blank" : undefined,
                        rel: item.link.startsWith("http") ? "noopener noreferrer" : undefined,
                      } : {})}
                      variants={fadeInUp}
                      whileHover={cardHover.hover}
                      className={`glass-card p-6 hover-glow ${item.link ? "cursor-pointer block" : ""}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 shadow-sm">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardWrapper>
                  );
                })}
              </motion.div>

              {/* Social Links */}
              <div className="mb-10">
                <h3 className="font-display font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden glow-border relative"
              >
                {/* Clickable overlay to open Google Maps */}
                <a
                  href="https://maps.app.goo.gl/7g1cZQPEXRnqZfCr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                ></a>

                <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                  {/* Embedded Map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.918222876117!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672e0e8b5ef%3A0x1234567890abcdef!2s123%20Tech%20Street%2C%20Silicon%20Valley!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>

                  {/* Overlay info */}
                  <div className="absolute z-10 text-center w-full h-full flex flex-col items-center justify-center bg-black/20 pointer-events-none">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-white font-medium">Our Location</p>
                    <p className="text-sm text-white/80">
                      Click to open in Google Maps
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-card/30 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-2xl font-bold mb-4">
              Have Questions?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Check out our frequently asked questions or reach out to us
              directly. We're here to help you every step of the way.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={buttonHover.hover} whileTap={buttonHover.tap}>
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
                >
                  View FAQ
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHover.hover} whileTap={buttonHover.tap}>
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted w-full sm:w-auto"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
