import { motion } from "framer-motion";
import { GitHubIcon } from "./SocialIcons";
import SectionWrapper from "./SectionWrapper";
import { projects } from "../data/portfolioData";
import { FolderOpen } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I&apos;ve built</p>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="card overflow-hidden"
            >
              <div className="flex flex-col gap-5 lg:flex-row">
                <motion.div
                  className="flex h-44 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-bg-secondary lg:h-auto lg:w-64"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <FolderOpen size={48} className="text-text-muted" />
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold gradient-text">{project.name}</h3>
                  <p className="mb-3 text-sm text-text-secondary">{project.description}</p>

                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-text-secondary">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-purple-400"
                    whileHover={{ x: 4 }}
                  >
                    <GitHubIcon size={18} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
