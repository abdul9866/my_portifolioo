# Shaik Abdul Rahamtulla - Premium Software Engineer Portfolio

A world-class, premium software engineering portfolio web application built with a modern technology stack. This project is highly interactive, fast, responsive, and fully optimized for recruiter review.

## 🚀 Features

- **Three.js Particles Background**: Dynamic interactive space dust particle field and wireframe grid reacting to mouse coordinates.
- **Custom Spotlight Trailing Cursor**: Fluid trailing neon cursor matching mouse velocity.
- **Interactive 3D Glass Cards**: Tilt responsive cards with dynamic mouse spotlight overlays that follow the cursor to illuminate borders.
- **Dynamic Case Study Expanding Drawer**: Expanding sliding overlay panel showcasing deep project case studies (Problem, Solution, Tech Stack, Features, Architecture, Challenges, Results).
- **Responsive Mobile Navigation Drawer**: Sleek mobile hamburger overlay menu.
- **Scroll-Driven Entrance Reveals**: 60 FPS CSS View-Timeline animations that fade and scale sections gracefully on scroll.
- **Confetti Form Success**: React contact form validation that triggers confetti upon successful submission.
- **Direct email communication**: Built-in EmailJS setup.

---

## 🛠️ Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Framer Motion, CSS Animations
- **Creative WebGL Engine**: Three.js
- **Smooth Scroll**: Lenis Scroll
- **Interactive FX**: Canvas Confetti
- **Email Gateway**: @emailjs/browser

---

## 💻 Local Development Setup

To run the project locally, follow these steps:

1. **Clone the repository or navigate to the project directory**:
   ```bash
   cd shaik-portfolio
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add your EmailJS configuration:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
   *(Note: The contact form will automatically fall back to mock successful delivery if these environment variables are left unconfigured, making it safe for immediate demo viewing).*

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🛠️ Build & Verification

To verify typescript safety and build for production, run:

```bash
# Verify TypeScript compile checks
npx tsc --noEmit

# Run Next.js production build compiler
npm run build
```

---

## ☁️ Deployment Guide

### Vercel Deployment (Recommended)

This portfolio is fully optimized to be deployed to **Vercel** with one click:

1. **Push your code to GitHub, GitLab, or Bitbucket**.
2. **Log into Vercel** and click **Add New Project**.
3. **Import your repository**.
4. **Configure Environment Variables**:
   In the Vercel dashboard configuration step, add the following key-value pairs matching your EmailJS credentials:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**. Vercel will automatically compile, optimize, and serve your app on a global edge network.

### Alternative Static Hosting (GitHub Pages, Netlify)

If you wish to export the portfolio as static HTML files for static hosting:

1. Update `next.config.ts` to output static pages:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true, // Required for static exports
     },
   };

   export default nextConfig;
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the contents of the generated `out/` folder to GitHub Pages or Netlify.
