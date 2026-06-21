import SectionWrapper from "./SectionWrapper";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card">
              <h3 className="mb-3 text-base font-semibold text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-bg-secondary px-3 py-1.5 text-sm text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
