# BURAQ_TRAVELHUB - Travel Landing Page

A modern, premium landing page for BURAQ_TRAVELHUB travel services featuring the Mangalore-Dandeli-Goa 4-day tour package.

![BURAQ_TRAVELHUB](public/hero-bg.jpg)

## Features

- **Premium Design** - Dark theme with elegant typography and smooth animations
- **Responsive Layout** - Works beautifully on all devices
- **Interactive Sections**:
  - Hero with animated particles
  - About with 3D card effects
  - Destinations gallery
  - Day-by-day itinerary with tabs
  - Package details (includes/excludes)
  - Contact CTA with WhatsApp integration
- **Smooth Scroll Navigation**
- **WhatsApp Booking Integration**

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (display), Poppins (body)

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd buraq-travelhub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/              # Static assets (images)
├── src/
│   ├── sections/        # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Destinations.tsx
│   │   ├── Itinerary.tsx
│   │   ├── PackageDetails.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── components/ui/   # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Add New Project"
4. Import your GitHub repository
5. Framework preset: Vite
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click Deploy

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click Deploy

### Option 3: GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/buraq-travelhub"
}
```

3. Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/buraq-travelhub/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## Customization

### Changing Contact Information

Edit the following files:
- `src/sections/Navbar.tsx` - Phone number in WhatsApp link
- `src/sections/CTA.tsx` - Email, phone, WhatsApp link
- `src/sections/Footer.tsx` - All contact details

### Changing Colors

Edit `tailwind.config.js` and `src/index.css` to update the brand colors.

### Adding/Modifying Tour Details

Edit `src/sections/Itinerary.tsx` to update the day-by-day schedule.

## License

MIT License - feel free to use this template for your projects.

---

**BURAQ_TRAVELHUB** - Adventure Awaits!
