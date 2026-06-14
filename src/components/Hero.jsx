import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <h2 className="mb-6 text-xl text-text-secondary md:text-2xl">
            {personalInfo.title}
          </h2>
          <p className="mb-8 max-w-xl text-lg text-text-secondary">
            {personalInfo.tagline}
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <button type="button" className="btn-primary" onClick={() => scrollTo("projects")}>
              View Projects
            </button>
            <button type="button" className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg border border-border p-3 text-text-secondary transition-colors hover:border-accent hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-3 text-text-secondary transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-3 text-text-secondary transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
