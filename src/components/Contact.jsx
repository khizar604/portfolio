import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { LinkedInIcon } from "./SocialIcons";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, emailjsConfig } from "../data/portfolioData";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) {
      setStatus("error");
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "Email service is not configured. Add your EmailJS keys to a .env file (see .env.example)."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: personalInfo.email,
        },
        publicKey
      );
      setStatus("success");
      setForm(initialForm);
    } catch {
      setErrorMessage("Failed to send message. Please try again or contact me directly.");
      setStatus("error");
    }
  };

  const whatsappLink = `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`;

  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let&apos;s work together</p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-text-secondary">
              I&apos;m open to junior developer roles and internships. Feel free to reach out
              via the form or connect with me directly.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
              >
                <Mail size={20} className="text-accent" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
              >
                <LinkedInIcon size={20} className="text-accent" />
                LinkedIn Profile
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
              >
                <MessageCircle size={20} className="text-accent" />
                WhatsApp: {personalInfo.whatsapp}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-text-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-white outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-text-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-white outline-none transition-colors focus:border-accent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-border bg-bg-secondary px-4 py-3 text-white outline-none transition-colors focus:border-accent"
                placeholder="Your message..."
              />
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle size={18} />
                Message sent successfully!
              </div>
            )}

            {status === "error" && errorMessage && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={18} />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
