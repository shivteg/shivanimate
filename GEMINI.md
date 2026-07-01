# ShivAnimate - Project Context & Instructions

## Overview
**ShivAnimate** is a 3D word animator application that allows users to type words (up to 9 characters) and animate them using Three.js in a full-stage 3D environment. It features 20 premium animation styles with rich bloom/glow post-processing. The app includes role-based access (Admin, Teacher, Student) and public shareable URLs that let anyone view an animation without logging in.

## Tech Stack
- **Frontend Framework:** Vanilla HTML, CSS, JavaScript (loaded via ES Modules and Import Maps)
- **3D Graphics & Rendering:** Three.js (v0.165.0), FontLoader, TextGeometry
- **Post-Processing Effects:** UnrealBloomPass, EffectComposer, RenderPass
- **Backend / Serverless:** Vercel Serverless Functions (Node.js API routes)
- **Database & Auth:** Supabase (Client-side Web SDK + Admin Service Role SDK on serverless endpoints)
- **Deployment:** Vercel

## Architecture
- **Single Page App Structure:** The primary UI, styling, and client-side JavaScript live in `index.html`.
- **Database & Role Authorization:**
  - Role-based login (Admin, Teacher, Student).
  - Admins and Teachers can access the user management panel, while Students are restricted to the animator workspace.
  - Supabase database configuration is retrieved dynamically from `/api/config` on application startup.
- **3D Animation Stage:**
  - Standard Three.js canvas setup with a perspective camera, directional lights, and ambient lighting.
  - Uses `EffectComposer` to apply a cinematic neon bloom/glow overlay via `UnrealBloomPass`.
  - Splices the input word letter-by-letter, generating individual mesh geometries for each character.
  - Animation tick loop updates the positions, rotations, colors, and scales of individual letter meshes on every frame based on the selected animation style.
- **Share Links:**
  - Implements hash-based routing: `/#animate/{WORD}/{STYLE}`.
  - When the URL contains this hash, the app bypasses authentication, parses the arguments, and directly initializes the 3D canvas to play the shared animation.
- **Serverless API Routes:**
  - `api/config.js`: Serves client-side Supabase URL and Anon Key.
  - `api/admin.js`: Leverages the `SUPABASE_SERVICE_ROLE_KEY` to perform user creation, approval, and deletion safely on the backend.

## Development Guidelines
- **Coding Style:**
  - Keep styling modular and clean inside the `<style>` tag in `index.html` using modern CSS variables.
  - Avoid breaking the Three.js animation tick loop. Add custom animation styles by registering them under the animation definitions in JS and matching their behaviour inside `animateLetters()`.
  - Since there is no build step for the frontend, all browser-facing JS must remain standard ES6 modules.
- **Adding Animation Styles:**
  1. Add a color profile or configuration in the style dictionary (`STYLE_COLORS`).
  2. Add the style selection chip element in the HTML panel.
  3. Implement the corresponding transform logic inside `applyLetterEffect()` or the render loop.
- **Testing Serverless Functions:**
  - Install Vercel CLI (`npm install -g vercel`).
  - Run `vercel dev` locally to test both the static frontend and local API serverless endpoints.

## Key Files
- [index.html](file:///C:/Users/user/shivanimate/index.html): Main entry point containing application layout, styling, Three.js render stage, and business logic.
- [vercel.json](file:///C:/Users/user/shivanimate/vercel.json): Configures Vercel routing rules, rewrites, and clean URLs.
- [package.json](file:///C:/Users/user/shivanimate/package.json): Defines dependencies for local execution and serverless API execution (e.g. `@supabase/supabase-js`).
- [api/config.js](file:///C:/Users/user/shivanimate/api/config.js): API endpoint to distribute public Supabase credentials.
- [api/admin.js](file:///C:/Users/user/shivanimate/api/admin.js): Admin control API endpoint for handling database-side user setup.

## Commands
- `npm install`: Install serverless API dependencies.
- `vercel dev`: Run local development server for both frontend and backend functions.
