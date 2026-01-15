# Developer Documentation

This document serves as a guide for maintaining and extending the "Creativity is Joy" portfolio.

## Project Architecture

The project follows a standard Next.js App Router structure:

-   `src/app`: Page routes and layouts.
-   `src/components`: Reusable UI components.
    -   `layout`: Header, Footer, and structural elements.
    -   `sections`: Individual landing page sections (Hero, About, Toolkit, Services, etc.).
    -   `ui`: Specific UI elements (Buttons, Cards, etc.) if separated.
-   `public/images`: Static assets organized by section (`about`, `projects`, `blog`).

## Customization Guide

### Updating Project Data
All dynamic data (Testimonials, Services, Toolkit items) is currently located within their respective component files in `src/components/sections/`.
-   **Services**: Edit `src/components/sections/services.tsx`
-   **Toolkit**: Edit `src/components/sections/toolkit.tsx`
-   **Testimonials**: Edit `src/components/sections/testimonials.tsx`

### Adding/Replacing Images
1.  Place new image files in the appropriate `public/images/` subdirectory.
2.  Update the `src` path in the corresponding component file (e.g., `src/components/sections/about.tsx`).
3.  Ensure you provide `width` and `height` or use `fill` with a parent container for Next.js Image optimization.

### Theme & Styling
-   **Tailwind CSS**: Global styles are in `src/app/globals.css`. Configuration is in `tailwind.config.ts`.
-   **Colors**: The project uses a dark theme by default using Tailwind's slate/zinc palette.

## Deployment

### Netlify CI/CD
This project is optimized for deployment on Netlify.
1.  Connect the GitHub repository to Netlify.
2.  Set the build command to `npm run build`.
3.  Set the publish directory to `.next`. (or let Netlify auto-detect Next.js settings).

For manual production builds locally:
```bash
npm run build
npm start
```
