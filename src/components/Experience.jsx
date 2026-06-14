import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My journey so far</p>

        <div className="space-y-6">
          {experience.map((item) => (
            <div key={`${item.role}-${item.organization}`} className="card">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="text-accent">{item.organization}</p>
                  </div>
                </div>
                <span className="text-sm text-text-muted sm:shrink-0">{item.period}</span>
              </div>
              <ul className="ml-11 list-inside list-disc space-y-1 text-text-secondary">
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
