import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Share2,
  PenTool,
  Palette,
  Cpu,
  Smartphone,
  MessageSquare,
  Phone,
  MessageCircle,
  Megaphone,
  Vote,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const developmentServices = [
  { name: "Web Development", path: "/development/web-development", icon: Code },
  {
    name: "Software Development",
    path: "/development/software-development",
    icon: Cpu,
  },
  {
    name: "App Development",
    path: "/development/app-development",
    icon: Smartphone,
  },
  {
    name: "AI / ML Development",
    path: "/development/ai-ml-development",
    icon: Brain,
  },
  {
    name: "Social Media Marketing",
    path: "/development/social-media-marketing",
    icon: Share2,
  },
  {
    name: "Content Writing",
    path: "/development/content-writing",
    icon: PenTool,
  },
  {
    name: "Graphics Designer",
    path: "/development/graphics-designer",
    icon: Palette,
  },
];

const servicesItems = [
  { name: "Bulk SMS", path: "/services/bulk-sms", icon: MessageSquare },
  { name: "Voice SMS", path: "/services/voice-sms", icon: Phone },
  {
    name: "WhatsApp Panel",
    path: "/services/whatsapp-panel",
    icon: MessageCircle,
  },
  {
    name: "WhatsApp Marketing",
    path: "/services/whatsapp-marketing",
    icon: Megaphone,
  },
  {
    name: "Digital Election Campaign",
    path: "/services/digital-election-campaign",
    icon: Vote,
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Development",
    path: "/development",
    hasDropdown: true,
    dropdownType: "development",
  },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownType: "services",
  },
  { name: "Clients", path: "/clients" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  const getDropdownItems = (type) => {
    if (type === "development") return developmentServices;
    if (type === "services") return servicesItems;
    return [];
  };

  const isActiveDropdownPath = (type) => {
    if (type === "development")
      return location.pathname.startsWith("/development");
    if (type === "services") return location.pathname.startsWith("/services");
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "mx-3 mt-3 rounded-2xl border border-border/70 bg-background/92 shadow-lg backdrop-blur-md"
          : "mx-3 mt-3 rounded-2xl border border-border/60 bg-background/82 shadow-md backdrop-blur-md"
        }`}
    >
      <div className="container-custom flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center group"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            Izone<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              variants={navItemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {link.hasDropdown ? (
                <div
                  onMouseEnter={() => setActiveDropdown(link.dropdownType)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium ${isActiveDropdownPath(link.dropdownType)
                        ? "text-primary"
                        : "text-foreground/85 hover:text-primary transition-colors duration-300"
                      }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`${activeDropdown === link.dropdownType ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.dropdownType && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl p-2 border border-border/80 bg-background shadow-lg"
                      >
                        <Link
                          to={`/${link.dropdownType}`}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/85 hover:text-primary hover:bg-muted/70 transition-colors"
                        >
                          <span>All {link.name}</span>
                        </Link>
                        <div className="h-px bg-border my-1" />
                        {getDropdownItems(link.dropdownType).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group/item ${location.pathname === item.path
                                ? "bg-primary/10 text-primary"
                                : "text-foreground/85 hover:text-primary hover:bg-muted/70 hover:translate-x-1 transition-all"
                              }`}
                          >
                            <item.icon size={18} className="text-primary transition-transform group-hover/item:scale-110" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`relative font-medium transition-colors duration-300 ${location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/85 hover:text-primary"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Right Controls */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-3"
        >
          <motion.div variants={navItemVariants} whileHover={{ scale: 1.05 }}>
            <ThemeToggle />
          </motion.div>
          <motion.div variants={navItemVariants} whileHover={{ scale: 1.05 }}>
            <Link to="/get-started">
              <Button className="border-none bg-primary text-primary-foreground shadow-sm hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-lg border border-border/70 bg-card/80 flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/96 backdrop-blur-md border border-border/70 mt-2 mx-3 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.dropdownType
                              ? null
                              : link.dropdownType
                          )
                        }
                        className={`w-full flex items-center justify-between py-2 px-4 rounded-lg transition-colors ${isActiveDropdownPath(link.dropdownType)
                            ? "bg-primary/20 text-primary"
                            : "text-foreground/85 hover:bg-muted hover:text-primary transition-colors"
                          }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`${mobileDropdown === link.dropdownType
                              ? "rotate-180"
                              : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === link.dropdownType && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-4 mt-1 overflow-hidden"
                          >
                            <Link
                              to={`/${link.dropdownType}`}
                              className="flex items-center gap-3 py-2 px-4 rounded-lg text-foreground/85 hover:text-primary hover:bg-muted transition-colors"
                            >
                              <span className="text-sm">All {link.name}</span>
                            </Link>
                            {getDropdownItems(link.dropdownType).map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-all duration-200 group/item ${location.pathname === item.path
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground/85 hover:text-primary hover:bg-muted/70 hover:translate-x-1 transition-all"
                                  }`}
                              >
                                <item.icon size={16} className="text-primary transition-transform group-hover/item:scale-110" />
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={`py-2 px-4 rounded-lg transition-colors block ${location.pathname === link.path
                          ? "bg-primary/20 text-primary"
                          : "text-foreground/85 hover:bg-muted hover:text-primary transition-colors"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/get-started" onClick={() => setIsOpen(false)}>
                <Button className="mt-2 w-full border-none bg-primary text-primary-foreground shadow-sm hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
