import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";

import { staggerContainer, fadeInUp } from "@/lib/animations";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/development/web-development" },
    {
      name: "Social Media Marketing",
      path: "/development/social-media-marketing",
    },
    { name: "Content Writing", path: "/development/content-writing" },
    { name: "Graphics Designer", path: "/development/graphics-designer" },
  ],
  resources: [
    { name: "Blog", path: "#" },
    { name: "Case Studies", path: "/development#portfolio" },
    { name: "Documentation", path: "#" },
    { name: "FAQ", path: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-background pt-14 md:pt-16 pb-10 overflow-hidden border-t border-border/60">
      <div className="absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-primary/5 blur-[96px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 mb-12 shadow-[0_4px_24px_-14px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rotate-12 blur-3xl pointer-events-none opacity-50" />
          <div className="absolute top-0 right-[20%] w-40 h-40 bg-primary/10 blur-[72px] rounded-full pointer-events-none opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none dark:from-white/[0.01]" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl lg:text-[2.35rem] font-bold mb-4 tracking-tight leading-tight text-foreground">
                Let's create something <span className="gradient-text">extraordinary</span> together.
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md leading-relaxed opacity-90">
                Reach out to us today to discuss your next project and discover the Izone potential.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:innovativezone.tech@gmail.com"
                  className="flex items-center gap-2.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-sm text-sm"
                >
                  <Mail size={16} />
                  innovativezone.tech@gmail.com
                </a>
                <a
                  href="tel:+919943077284"
                  className="flex items-center gap-2.5 bg-secondary/50 border border-border/80 px-5 py-2.5 rounded-full hover:bg-secondary/80 transition-colors font-semibold text-foreground text-sm"
                >
                  <Phone size={16} />
                  +91 99430 77284
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-background/80 p-6 rounded-xl border border-border/40 shadow-sm relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span className="font-bold text-sm text-foreground tracking-wide uppercase opacity-90">
                    Main Office
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-80">
                  3rd Floor, Aruvi Arcade Complex, 5th Cross Thillainagar, Tiruchirapalli, Tamil Nadu-620018.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-y-10 lg:gap-x-10 mb-12"
        >
          <motion.div variants={fadeInUp} className="md:col-span-4 lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center shadow-sm">
                <span className="text-primary font-display font-black text-xl">IZ</span>
              </div>
              <div>
                <span className="font-display text-xl font-black block tracking-tight leading-none">
                  Izone
                </span>
                <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest block mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed opacity-80">
              Transforming ideas into exceptional digital experiences. We build modern, scalable web solutions that drive business growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-9 h-9 rounded-lg bg-secondary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm border border-border/50"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] mb-5 text-primary/70">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium footer-link-hover block w-fit"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] mb-5 text-primary/70">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium footer-link-hover block w-fit"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] mb-5 text-primary/70">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium footer-link-hover block w-fit"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] mb-5 text-primary/70">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium footer-link-hover block w-fit">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium footer-link-hover block w-fit">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium footer-link-hover block w-fit">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-medium opacity-80 text-center md:text-left">
            Copyright {new Date().getFullYear()} Izone Technologies. Designed with precision and commitment.
          </p>
          <motion.div
            whileHover={{ x: 2 }}
            className="flex items-center gap-2.5 text-muted-foreground text-xs font-semibold"
          >
            <span>Platform Status</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-[9px] uppercase tracking-widest">
                Operational
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
