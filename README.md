# Halah's Portfolio Website

A unique, minimalistic portfolio website with a retro-futuristic aesthetic inspired by glitch art and cyberpunk design. Built with React, TypeScript, and Framer Motion.

## Features

- **Unique Design**: Glitch effects, retro-futuristic aesthetic, and smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Four Main Pages**:
  - **About**: Personal introduction and skills showcase
  - **CV**: Professional experience and downloadable resume
  - **Projects**: Portfolio of technical projects and achievements
  - **Misc**: Photography, hobbies, and personal interests
- **Modern Tech Stack**: React 18, TypeScript, Vite, Framer Motion
- **Performance Optimized**: Fast loading and smooth interactions

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS3 with custom properties and animations
- **Animations**: Framer Motion for smooth page transitions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation
- **Fonts**: Space Mono & Orbitron for the unique aesthetic

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Personal Information

Update the following files with your information:

- `src/pages/About.tsx`: Update personal description, skills, and contact links
- `src/pages/CV.tsx`: Add your education, experience, and projects
- `src/pages/Projects.tsx`: Replace with your actual projects
- `src/pages/Misc.tsx`: Add your hobbies, photography, and interests

### Styling

The design uses CSS custom properties for easy customization:

```css
:root {
  --primary-color: #00ff41;    /* Main green color */
  --secondary-color: #ff0080;  /* Pink accent */
  --bg-color: #0a0a0a;        /* Dark background */
  --text-color: #ffffff;       /* White text */
  --accent-color: #00d4ff;     /* Blue accent */
  --glitch-color: #ff0000;     /* Red for glitch effects */
}
```

### Adding Your Resume

1. Place your resume PDF in the `public/` folder as `resume.pdf`
2. The CV page will automatically link to it

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Option 2: Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Deploy: `npm run deploy`

## Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Navigation component
├── pages/
│   ├── About.tsx           # About page
│   ├── CV.tsx             # CV/Resume page
│   ├── Projects.tsx       # Projects showcase
│   └── Misc.tsx           # Photography & hobbies
├── App.tsx                 # Main app component
├── App.css                 # Global styles
└── main.tsx               # Entry point
```

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Animations**: Hardware-accelerated with Framer Motion
- **Images**: Optimized and lazy-loaded

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

This is a personal portfolio project, but feel free to fork and customize for your own use!

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

For questions or customization help, reach out through the contact links on the website.

---

**Built with ❤️ and lots of coffee**
