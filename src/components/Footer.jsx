import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container py-8 text-center">
        <p className="text-text-secondary">
          &copy; {year} {personalInfo.name}. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}
