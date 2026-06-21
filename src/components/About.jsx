import { MapPin, User } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
          <div className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
            {personalInfo.profileImage ? (
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <User size={52} className="text-text-muted" />
            )}
          </div>

          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2 text-text-secondary">
              <MapPin size={18} className="text-accent" />
              <span>{personalInfo.location}</span>
            </div>
            <p className="leading-relaxed text-text-secondary">{personalInfo.bio}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
