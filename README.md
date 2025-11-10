# ClinixAI Enterprise - Landing Page

A beautiful, interactive, dark-themed landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark & Bold Design** - Stunning dark theme with gradient accents
- ✨ **Interactive Animations** - Smooth right-to-left scroll animations powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **High Performance** - Built with Next.js 15 for optimal speed
- 🎯 **Modern UI/UX** - Glassmorphism effects, hover states, and gradient text
- 📧 **Call-to-Actions** - Integrated waitlist and contact forms

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Emoji (customizable)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
clinixAi/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # Statistics cards
│   ├── Services.tsx     # Services grid
│   ├── MissionVision.tsx # Mission & Vision
│   ├── Market.tsx       # Market opportunity
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Footer
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { DEFAULT: "#0096ff" },
  secondary: { DEFAULT: "#9333ea" },
  dark: { DEFAULT: "#0a0e27" },
}
```

### Content

Update component files in the `components/` directory to modify text, links, and content.

### Animations

Adjust animation timing and effects in individual components using Framer Motion props.

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js applications.

## License

© 2025 ClinixAI Enterprise. All rights reserved.

## Contact

- Email: Clinixailtd@gmail.com
- Phone: +234 816 267 3771
- LinkedIn: [ClinixAI Enterprise](https://linkedin.com/company/clinixai-enterprise)
