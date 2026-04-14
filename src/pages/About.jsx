import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Calendar,
  Award,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/Layout";
import ExpertCard from "../components/ui/ExpertCard";
import CEOCard from "../components/ui/CEOCard";
import HeroParagraph from "@/components/ui/HeroParagraph";
import {
  sectionVariants,
  fadeInUp,
  staggerContainer,
  cardHover,
  buttonHover
} from "@/lib/animations";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating your success as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to ensure perfect alignment with their vision.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering nothing less than exceptional quality.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "SC",
    bio: "Full-stack expert passionate about scalable architecture.",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Designer",
    avatar: "MR",
    bio: "Award-winning designer focused on user experience.",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    avatar: "EJ",
    bio: "Agile enthusiast ensuring seamless project delivery.",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    avatar: "DK",
    bio: "React specialist with a love for clean code.",
  },
  {
    name: "Lisa Wang",
    role: "UX Researcher",
    avatar: "LW",
    bio: "Data-driven designer advocating for user needs.",
  },
  {
    name: "James Miller",
    role: "DevOps Engineer",
    avatar: "JM",
    bio: "Cloud infrastructure specialist ensuring 99.9% uptime.",
  },
];

const ceoData = {
  name: "Mr.B.Kesavan M.E",
  role: "Founder/CEO",
  description:
    "Visionary leader with 15+ years of experience in the tech industry. Kesavan founded Izone Technologies with a mission to democratize world-class web development and help businesses of all sizes achieve digital excellence.",
};

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Izone Technologies was born with a vision to transform digital experiences.",
    image: "/life-at-izone/office-interior.png",
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Partnered with Fortune 500 company for enterprise solution.",
    image: "/life-at-izone/team-meeting.png",
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25+ team members across multiple countries.",
    image: "/life-at-izone/team-collaboration.png",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded services to clients in 15+ countries worldwide.",
    image: "/life-at-izone/team-hands.png",
  },
  {
    year: "2022",
    title: "Industry Award",
    description: "Recognized as Top Web Development Agency of the Year.",
    image: "/life-at-izone/tech-presentation.png",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched R&D division for emerging technologies.",
    image: "/life-at-izone/focused-work.png",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Vue.js",
];

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

const About = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 px-4 md:px-6 relative overflow-hidden">
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
              About Us
            </motion.span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[3.2rem] font-bold mb-4">
              <span className="block">
                <SplitText text="Innovating the" delay={0.3} />
              </span>
              <span className="block mt-2 overflow-visible">
                <SplitText
                  text="Digital Landscape"
                  delay={0.5}
                  className="inline-block leading-[1.3] pb-[0.15em] gradient-text -mt-5"
                />
              </span>
            </h1>
            <HeroParagraph
              text='Izone Technology was established in 2016 at Trichy with diverse range of Knowledge, where "Izone Technology" is an IT Hub consists of all types of IT Services includes Web Designing and Development, Software and Mobile App Development, Digital Marketing Services Like Bulk SMS, Bulk Voice Call & Bulk WhatsApp, and also Students Career Development programs along with Final Year project Guidance Etc.'
              className="-mt-5"
              delay={0.7}
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-14 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-card p-6 glow-border hover-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold mb-3">
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                We strive to develop smart application and websites for our
                clients for their IT efficiency and business profitability and
                to be a global leader and expert in providing Smart Training
                with smart skills..
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-card p-6 glow-border hover-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold mb-3">
                Our Vision
              </h2>
              <p className="text-muted-foreground">
                Our Vision is to provide a smart training with smart skills and
                developing smart application and website with enthusiastically
                and with innovative methods in full-fledged customer
                satisfaction and beyond customer expectation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 md:py-14 bg-card/30 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-10"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium block">Our Values</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-3xl font-bold mt-2">
              What Drives Us
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 values-grid-container"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-6 text-center relative"
              >
                <div className="icon-container w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-10 md:py-14 overflow-hidden">
        <div className="container-custom">
          {/* CEO Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CEOCard
              name={ceoData.name}
              role={ceoData.role}
              description={ceoData.description}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-10 mt-12"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium block">Our Team</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-3xl font-bold mt-2">
              Meet the Experts
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ExpertCard
                  name={member.name}
                  role={member.role}
                  avatar={member.avatar}
                  bio={member.bio}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Life at Izone - Behind the Scenes */}
      <section className="py-10 md:py-14 bg-primary/5 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-10"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium block">Life at Izone</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-bold mt-2">
              Behind the Scenes
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              { src: "/life-at-izone/office-interior.png", alt: "Our modern office space" },
              { src: "/life-at-izone/team-meeting.png", alt: "Team brainstorming session" },
              { src: "/life-at-izone/team-collaboration.png", alt: "Collaborative work sessions" },
              { src: "/life-at-izone/team-hands.png", alt: "Team unity and spirit" },
              { src: "/life-at-izone/tech-presentation.png", alt: "Knowledge sharing presentations" },
              { src: "/life-at-izone/focused-work.png", alt: "Focused and productive work" },
            ].map((photo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <span className="text-white font-medium text-sm">{photo.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* Company Journey - Refined Expanding Timeline */}
      <section className="expanding-timeline-section py-16 md:py-20 overflow-hidden bg-background relative border-y border-border/40">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-10 md:mb-12"
          >
            <motion.span variants={fadeInUp} className="text-primary/70 font-semibold tracking-widest uppercase text-[10px] md:text-xs block mb-3">Our Evolution</motion.span>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground">
              Company Journey
            </h2>
          </motion.div>
          <div
            className="expanding-timeline-container flex flex-col md:flex-row h-auto md:h-[410px] gap-3 md:gap-2"
            onMouseLeave={() => setActiveTimelineIndex(null)}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.1 }}
                onMouseEnter={() => setActiveTimelineIndex(index)}
                onFocus={() => setActiveTimelineIndex(index)}
                onClick={() => setActiveTimelineIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveTimelineIndex(index);
                  }
                }}
                className={`timeline-panel timeline-panel-motion group relative flex-[1] bg-card border border-border/50 rounded-2xl md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-1000 ease-in-out ${
                  activeTimelineIndex === index ? "is-active border-primary/30 shadow-xl" : ""
                }`}
              >
              {/* Visual Depth Elements */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-700 ${activeTimelineIndex === index ? "opacity-100" : "opacity-30 group-hover:opacity-100"
                  }`}
              />

              {/* Big Year Watermark - Refined Size */}
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col items-start">
                {/* Year Marker (Animated Prefix Join) */}
                <div className="w-full">
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 shadow-sm ${activeTimelineIndex === index
                          ? "bg-primary border-primary"
                          : "bg-primary/5 border-primary/10 group-hover:bg-primary group-hover:border-primary"
                        }`}
                    >
                      <Calendar
                        className={`w-4 h-4 ${activeTimelineIndex === index
                            ? "text-primary-foreground"
                            : "text-primary group-hover:text-primary-foreground"
                          }`}
                      />
                    </div>
                    <div className="relative flex items-center">
                      <span className="timeline-year font-display text-xl md:text-2xl font-bold text-primary" data-prefix="20">
                        {milestone.year.slice(2)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div
                      className={`h-[2px] bg-primary/35 transition-all duration-700 ${activeTimelineIndex === index ? "w-14" : "w-10 group-hover:w-14"
                        }`}
                    />
                    <span className="text-primary/60 font-bold tracking-[0.2em] text-[9px] uppercase">
                      Milestone
                    </span>
                  </div>
                </div>

                {/* Hidden Content Box (Reveals on Hover) */}
                <div className="timeline-expanded-content w-full relative z-10 mt-5 md:mt-6 flex flex-col gap-4">
                  <div className="timeline-image-shell relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-primary/5">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${activeTimelineIndex === index ? "scale-[1.03]" : "group-hover:scale-[1.03]"
                        }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/12 via-transparent to-white/10" />
                  </div>

                  <div className="timeline-copy max-w-xl relative z-20">
                    <h3 className="font-display text-xl md:text-[2rem] font-bold text-foreground mb-2 leading-tight tracking-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-[0.95rem] leading-relaxed opacity-90">
                      {milestone.description}
                    </p>

                    <div className="mt-5 w-full h-[2px] bg-gradient-to-r from-primary/25 via-primary/10 to-transparent" />
                  </div>
                </div>

                {/* Collapsed View Vertical Label */}
                <div
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${activeTimelineIndex === index ? "md:opacity-0" : "md:group-hover:opacity-0"
                    }`}
                >
                  <span className="font-display text-sm font-semibold tracking-widest text-primary/30 rotate-180 [writing-mode:vertical-lr] hidden md:block uppercase">
                    {milestone.title}
                  </span>
                </div>
              </div>

              {/* Bottom Active Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/80 to-accent/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>
    </section>

      {/* Technology Stack */ }
  <section className="section-padding overflow-hidden">
    <div className="container-custom">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="text-center mb-10 md:mb-12"
      >
        <motion.span variants={fadeInUp} className="text-primary font-medium block">Our Stack</motion.span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 tracking-tight">
          Technologies We Master
        </h2>
      </motion.div>

      <div className="about-tech-stack-wrapper">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="about-tech-stack-cluster"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`tech-stack-node ${index === 0 ? "featured-core" : "satellite-item"}`}
            >
              <div className="tech-stack-card">
                <span className="tech-stack-label">{tech}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
    </Layout >
  );
};

export default About;
