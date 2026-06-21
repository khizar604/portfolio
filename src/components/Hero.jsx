import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const focusItems = ["MERN Stack", "REST APIs", "Responsive UI", "Database Design"];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center overflow-hidden pt-16"
    >
      <div className="section-container relative z-10 py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={14} />
              </motion.span>
              Available for opportunities
            </motion.div>

            <motion.p variants={fadeUp} className="mb-2 text-sm font-medium tracking-widest text-cyan-400 uppercase">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="gradient-text mb-3 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2 variants={fadeUp} className="mb-4 text-lg font-medium md:text-xl">
              <span className="text-purple-400">{personalInfo.title.split("|")[0]}</span>
              <span className="text-text-muted"> | </span>
              <span className="text-cyan-400">{personalInfo.title.split("|")[1]?.trim()}</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mb-6 max-w-lg text-base leading-relaxed text-text-secondary">
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} className="text-cyan-400" />
              {personalInfo.location}
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <button type="button" className="btn-outline" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {[
                { href: `mailto:${personalInfo.email}`, label: "Email", icon: <Mail size={18} /> },
                { href: personalInfo.linkedin, label: "LinkedIn", icon: <LinkedInIcon size={18} /> },
                { href: personalInfo.github, label: "GitHub", icon: <GitHubIcon size={18} /> },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-purple-500/50 hover:text-purple-400"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              className="glow-border relative rounded-2xl bg-surface/60 p-8 backdrop-blur-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-cyan-500/20 blur-2xl" />

              <p className="mb-1 text-sm text-text-muted">Focus Areas</p>
              <p className="mb-6 text-2xl font-bold gradient-text">Full-Stack Development</p>

              <div className="space-y-3">
                {focusItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    whileHover={{ x: 6, borderColor: "rgba(34,211,238,0.4)" }}
                    className="flex items-center gap-3 rounded-lg border border-border bg-bg-secondary/60 px-4 py-3 transition-colors"
                  >
                    <motion.span
                      className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-text-muted transition-colors hover:text-cyan-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
