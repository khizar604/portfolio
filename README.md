# Developer Portfolio

Dark, modern portfolio built with React + Vite for job applications in Pakistan.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize Your Content

Edit **[src/data/portfolioData.js](src/data/portfolioData.js)** — all personal info, projects, skills, and links live in this single file.

## EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service and template
3. Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Template variables used: `from_name`, `from_email`, `message`, `to_email`

## Build

```bash
npm run build
```

Output is in the `dist/` folder.

## Deploy to Netlify

1. Push this project to GitHub
2. Go to [netlify.com](https://www.netlify.com/) → Add new site → Import from Git
3. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard (Site settings → Environment variables) for EmailJS keys
5. Deploy

Your site will be live at `https://your-site-name.netlify.app`

## Project Structure

```
src/
├── components/     # UI sections
├── data/         # Your content (edit this!)
├── App.jsx
└── index.css       # Tailwind + theme
```
