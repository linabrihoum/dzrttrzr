# DZRT TRZR - Electronic Music Artist Website

A modern, responsive website for the electronic music artist DZRT TRZR, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Theme**: Black background with red accents (#ff0000 to #b30000)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Hover effects, parallax scrolling, and animated elements
- **Music Player**: Mini audio player with playback controls
- **Tour Management**: Interactive tour dates with ticket status
- **Contact Forms**: Newsletter signup and contact forms
- **Social Integration**: Social media links with animated icons

## Sections

1. **Header**: Fixed navigation with glassmorphism effect
2. **Hero**: Animated background with floating particles and CTA buttons
3. **About**: Artist biography with statistics and features
4. **Music**: Grid layout of releases with play functionality
5. **Tour**: Table format showing tour dates and ticket availability
6. **Contact**: Social links and contact forms
7. **Footer**: Newsletter signup and site links
8. **Player**: Mini audio player with controls

## Technologies Used

- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **TypeScript**: Type safety (optional)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Music.js
│   ├── Tour.js
│   ├── Contact.js
│   ├── Footer.js
│   └── Player.js
└── hooks/
    └── useScroll.js
```

## Customization

### Colors
The theme uses a black and red color scheme:
- Primary red: `#ff0000` to `#b30000`
- Background: `#000000`
- Text: `#ffffff` with gray accents

### Animations
- Smooth scroll navigation
- Parallax background effects
- Hover animations on interactive elements
- Section reveal animations
- Text glow effects

### Components
All components are modular and can be easily customized:
- Update content in component files
- Modify styles using Tailwind classes
- Add new sections by creating new components

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is for demonstration purposes. All content and branding belong to DZRT TRZR.
