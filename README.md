# ZamZam Food Industry - React Mobile App

A modern, mobile-first React application for ZamZam Food Industry, rebuilt with React, Vite, and Swiper.js for image carousels.

## Features

- 🚀 Built with React 18 and Vite
- 📱 Mobile-first responsive design
- 🎠 Image carousels using Swiper.js
- 🎨 Tailwind CSS for styling
- ⚡ Fast and optimized performance
- 📦 Component-based architecture

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Important**: Make sure all images from the `images` folder are copied to `public/images/`. This should already be done, but if images are missing, copy them manually.

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Mobile-First Features

- **Hero Carousel**: Swiper.js carousel with coverflow effect showing product images
- **Products Carousel**: Mobile-optimized horizontal swipe carousel for products
- **Touch Gestures**: Full swipe support on all carousels
- **Responsive Navigation**: Mobile hamburger menu with smooth animations
- **Optimized Layouts**: All sections adapt perfectly to mobile screens

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Manufacturing.jsx
│   ├── Features.jsx
│   ├── Distribution.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Swiper.js** - Carousel library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Mobile Optimization

- Touch-friendly carousels
- Responsive navigation
- Optimized images
- Mobile-first breakpoints
- Swipe gestures for carousels

## License

© 2025 ZamZam Food Industry. All rights reserved.
