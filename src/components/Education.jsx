import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and training</p>

        <div className="space-y-6">
          {education.map((item) => (
            <div key={`${item.degree}-${item.institution}`} className="card">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <GraduationCap size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                    <p className="text-accent">{item.institution}</p>
                  </div>
                </div>
                <span className="text-sm text-text-muted sm:shrink-0">{item.period}</span>
              </div>
              <p className="ml-11 text-text-secondary">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
