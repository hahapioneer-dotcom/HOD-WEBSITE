# House of Director

Premium cinematic portfolio website for a creative video production studio.

## Brand

**Name:** House of Director  
**Tagline:** From Concept to Camera We Do It All

## Features

- ✨ Strictly minimal black and white design
- 🎬 Cinematic textures and subtle animations
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Built with Next.js 15 for optimal performance
- 🎯 SEO optimized
- 🎨 Premium agency-level presentation

## Pages

- **Home** - Hero section with brand introduction and work preview
- **Work** - Categorized portfolio grid showcasing projects
- **About** - Professional studio bio and services
- **Contact** - Clean enquiry form for project requests

## Tech Stack

- Next.js 15 (React 19)
- CSS Modules
- Google Fonts (Inter)

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

```bash
node --version
npm --version
```

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
HOD Website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   ├── page.jsx
│   │   │   └── page.css
│   │   ├── contact/
│   │   │   ├── page.jsx
│   │   │   └── page.css
│   │   ├── work/
│   │   │   ├── page.jsx
│   │   │   └── page.css
│   │   ├── page.jsx (Home)
│   │   ├── page.css
│   │   ├── layout.jsx
│   │   └── globals.css
│   └── components/
│       ├── Header.jsx
│       ├── Header.css
│       ├── Footer.jsx
│       └── Footer.css
├── package.json
├── next.config.js
└── README.md
```

## Design System

### Colors
- Black: `#000000`
- White: `#ffffff`
- Gray variations for depth

### Typography
- Font: Inter (Google Fonts)
- Strong hierarchy with responsive sizing

### Spacing
- Consistent spacing scale using CSS custom properties
- Responsive padding and margins

## Customization

To customize content:

1. **Home page intro** - Edit `src/app/page.jsx`
2. **Portfolio items** - Edit `src/app/work/page.jsx`
3. **About content** - Edit `src/app/about/page.jsx`
4. **Form submission** - Add form handling in `src/app/contact/page.jsx`

To embed actual videos, replace the SVG placeholders with your video embed code (YouTube, Vimeo, etc.).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 House of Director. All rights reserved.
