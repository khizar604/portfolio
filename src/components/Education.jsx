import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and training</p>

        <div className="space-y-5">
          {education.map((item, i) => (
            <motion.div
              key={`${item.degree}-${item.institution}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="card"
            >
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2">
                    <GraduationCap size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                    <p className="text-cyan-400">{item.institution}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs text-text-muted sm:shrink-0">
                  {item.period}
                </span>
              </div>
              <p className="ml-11 text-text-secondary">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
