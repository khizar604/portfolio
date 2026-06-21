import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <Sparkles size={14} />
              Available for opportunities
            </div>

            <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="mb-3 bg-gradient-to-r from-white via-white to-text-secondary bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              {personalInfo.name}
            </h1>
            <h2 className="mb-4 text-lg font-medium text-accent md:text-xl">
              {personalInfo.title}
            </h2>
            <p className="mb-6 max-w-lg text-base leading-relaxed text-text-secondary">
              {personalInfo.tagline}
            </p>

            <div className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} className="text-accent" />
              {personalInfo.location}
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <button type="button" className="btn-outline" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-border bg-surface/80 p-8 backdrop-blur-sm">
              <div className="absolute -top-3 -right-3 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
              <p className="mb-1 text-sm text-text-muted">Focus Areas</p>
              <p className="mb-6 text-2xl font-bold text-white">Full-Stack Development</p>
              <div className="space-y-3">
                {["MERN Stack", "REST APIs", "Responsive UI", "Database Design"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border bg-bg-secondary px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
