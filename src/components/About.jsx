import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-border relative shrink-0 rounded-2xl p-1"
          >
            <div className="h-44 w-44 overflow-hidden rounded-2xl border border-border bg-surface md:h-48 md:w-48">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <User size={52} className="text-text-muted" />
                </div>
              )}
            </div>
          </motion.div>

          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2 text-text-secondary">
              <MapPin size={18} className="text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
            <p className="leading-relaxed text-text-secondary">{personalInfo.bio}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
