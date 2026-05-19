# Portfolio Website — Agent Reference Guide

> **Owner:** Abdullah Noman  
> **Domain:** Personal Portfolio — Textile Engineer & Software Developer  
> **Live URL:** https://abdnomancv.netlify.app/  
> **Last analyzed:** May 19, 2026

---

## 1. Project Overview

A single-page-style personal portfolio website for **Abdullah Noman**, a Textile Engineering graduate from BUTEX (Bangladesh University of Textiles). The site showcases his profile, works/projects, blog posts, 3D renders, and contact information. It features a dark-themed, glassmorphism-heavy design with smooth animations.

---

## 2. Tech Stack

| Layer | Technology | Version / Notes |
|---|---|---|
| **Framework** | React | 19.1.1 |
| **Language** | TypeScript | ~5.9.3 |
| **Build Tool** | Vite (rolldown-vite) | 7.1.14 (aliased via `npm:rolldown-vite`) |
| **Styling** | TailwindCSS v4 + DaisyUI v5 | `@tailwindcss/vite` plugin, `tw-animate-css` |
| **UI Primitives** | shadcn/ui (New York style) | Radix UI primitives, `class-variance-authority`, `lucide-react` icons |
| **Routing** | React Router v7 | `react-router-dom` 7.9.4, lazy-loaded routes |
| **SEO** | react-helmet-async | Dynamic meta tags per page |
| **Deployment** | Netlify | SPA redirects via `netlify.toml` + `_redirects` |
| **Package Manager** | npm | `--legacy-peer-deps` used in build |

---

## 3. Project Structure

```
PortfolioByFrontend/
├── index.html                     # HTML entry, Google site verification
├── package.json                   # Dependencies & scripts
├── vite.config.ts                 # Vite + Tailwind + React plugins, @ alias
├── tsconfig.json                  # TS project references + @/* path alias
├── tsconfig.app.json              # App-specific TS config
├── tsconfig.node.json             # Node TS config (vite config)
├── eslint.config.js               # ESLint flat config
├── components.json                # shadcn/ui configuration (new-york style)
├── netlify.toml                   # Netlify build & SPA redirect config
├── IMPLEMENTATION_SUMMARY.md      # Prior implementation changelog
├── public/
│   ├── _redirects                 # Netlify SPA fallback
│   ├── cv.pdf                     # Downloadable CV (not used in UI currently)
│   ├── icon.svg                   # Favicon
│   ├── robots.txt                 # SEO crawler rules
│   └── sitemap.xml                # XML sitemap
└── src/
    ├── main.tsx                   # App entry: HelmetProvider → BrowserRouter → App
    ├── App.tsx                    # Root: ThemeProvider → ScrollToTop → Navbar → Routes
    ├── App.css                    # Legacy Vite template styles (mostly unused)
    ├── index.css                  # Global styles: Tailwind, theme tokens, animations
    ├── routes.tsx                 # All route definitions with lazy imports
    ├── vite-env.d.ts              # Vite type declarations
    ├── assets/
    │   └── react.svg              # Default Vite asset (unused)
    ├── components/
    │   ├── AppLayout.tsx           # Mouse-tracking background wrapper (COMMENTED OUT in App.tsx)
    │   ├── ContentCard.tsx         # Reusable card component for works & blog posts
    │   ├── Navbar.tsx              # Fixed top navigation bar with scroll effect
    │   ├── ScrollToTop.tsx         # Scrolls to top on route change
    │   ├── SEO.tsx                 # react-helmet-async wrapper for meta tags
    │   └── ui/
    │       ├── navigation-menu.tsx # shadcn/ui Radix navigation menu (NOT used in Navbar)
    │       └── theme-provider.tsx  # Dark/light/system theme context provider
    ├── data/
    │   ├── worksData.ts            # Project portfolio entries (3 active works)
    │   ├── blogData.ts             # Blog post entries (6 posts, Unsplash images)
    │   └── splatsData.ts           # 3D Gaussian splat viewer entries (1 splat)
    ├── images/
    │   ├── profile.jpg             # Profile photo (3.7MB — oversized!)
    │   ├── landing.jpg, input.jpg, result.jpg, history.jpg  # Misc project images
    │   ├── dashboard/              # PowerBI + Excel dashboard GIFs
    │   ├── labdip/                 # Lab Dip app screenshots (2 images)
    │   ├── merchmate/              # MerchMate app screenshots (10 images)
    │   └── supersplat/             # 3D render thumbnails (1 image)
    ├── lib/
    │   └── utils.ts                # `cn()` — Tailwind class merge utility
    └── pages/
        ├── Home.tsx                # Profile/About page (hero, about, experience, education, skills, certifications, achievements, footer + embedded MyWorks)
        ├── MyWorks.tsx             # Works listing grid (uses ContentCard)
        ├── WorkDetail.tsx          # Individual work detail with lightbox gallery
        ├── Blog.tsx                # Blog listing grid (uses ContentCard)
        ├── BlogDetail.tsx          # Individual blog post view
        ├── ThreeD.tsx              # 3D renders listing page
        ├── Render.tsx              # Individual 3D render viewer (iframe embed)
        ├── Contact.tsx             # Contact info + social media links
        └── NotFound.tsx            # 404 page
```

---

## 4. Routing Architecture

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Profile/about page (hero + about + experience + education + skills + works + certifications + achievements + footer) |
| `/about` | `Home` | Same as `/` (alias) |
| `/works` | `MyWorks` | Works listing grid |
| `/works/:workId` | `WorkDetail` | Individual project detail + lightbox gallery |
| `/blog` | `Blog` | Blog posts listing grid |
| `/blog/:blogId` | `BlogDetail` | Individual blog post |
| `/renders` | `ThreeD` | 3D renders listing |
| `/render/:renderId` | `Render` | Individual 3D render viewer (iframe) |
| `/contact` | `Contact` | Contact information + social links |
| `*` | `NotFound` | 404 page |

> **Note:** All routes are **lazy-loaded** via `React.lazy()` with a simple text `Suspense` fallback.

---

## 5. Component Architecture

### 5.1 Core Components

| Component | File | Purpose |
|---|---|---|
| `App` | `App.tsx` | Root wrapper: ThemeProvider → ScrollToTop → Navbar → AppRoutes |
| `AppRoutes` | `routes.tsx` | Centralized route definitions |
| `Navbar` | `components/Navbar.tsx` | Fixed top nav with 5 links (Profile, Works, 3D Renders, Blog, Contact). Scroll-aware glassmorphism background. |
| `ScrollToTop` | `components/ScrollToTop.tsx` | Scrolls window to top on pathname change |
| `SEO` | `components/SEO.tsx` | Helmet-based meta tag injection (title, OG, Twitter) |
| `ContentCard` | `components/ContentCard.tsx` | Reusable card with image, title, description, category badge. Used by MyWorks and Blog. |
| `ThemeProvider` | `components/ui/theme-provider.tsx` | React context for dark/light/system theme, persisted to localStorage |

### 5.2 Component Relationships

```
main.tsx
└── HelmetProvider
    └── BrowserRouter
        └── App
            └── ThemeProvider (default: "dark")
                ├── ScrollToTop
                ├── Navbar
                └── AppRoutes (Suspense)
                    ├── Home (embeds MyWorks inline)
                    ├── MyWorks → ContentCard[]
                    ├── WorkDetail (lightbox gallery)
                    ├── Blog → ContentCard[]
                    ├── BlogDetail
                    ├── ThreeD
                    ├── Render (iframe viewer)
                    ├── Contact
                    └── NotFound
```

### 5.3 Unused / Dormant Code

- **`AppLayout.tsx` (`AppWrapper`)** — Mouse-tracking grid background with blob animations. **Commented out** in `App.tsx` but still exists.
- **`navigation-menu.tsx`** — shadcn/ui navigation menu primitive. **Not imported anywhere** — the Navbar uses custom NavLink-based navigation instead.
- **`App.css`** — Mostly Vite boilerplate (logo spin, card padding). Minimal actual usage.
- **Commented-out works** in `worksData.ts` — "Book Finder" (id: 1) and "Portfolio Website" (id: 2) are fully commented out.
- **Commented-out projects** in `Home.tsx` — A `projects` array with sustainability/QC/dyeing projects is commented out.
- **`RunesSplat` import** in `worksData.ts` — Imported but never used.
- **`scrollY` and `mousePosition`** state in `Home.tsx` — Tracked but never used in rendering.

---

## 6. Data Architecture

### 6.1 Content Types

All content types share the `ContentItem` interface from `ContentCard.tsx`:

```typescript
interface ContentItem {
    id: number;
    title: string;
    description: string;
    date?: string;
    image: string;
    images?: string[];
    sections?: ContentSection[];
    category: string;
    link?: string;
}

interface ContentSection {
    title?: string;
    description: string;
    image: string;
}
```

### 6.2 Data Sources (all static, no backend)

| Data | File | Count | Notes |
|---|---|---|---|
| **Works** | `data/worksData.ts` | 3 active (ids: 3, 4, 5) | Images bundled via imports |
| **Blogs** | `data/blogData.ts` | 6 posts | External Unsplash images |
| **3D Splats** | `data/splatsData.ts` | 1 splat | Uses `superspl.at` iframe |

### 6.3 Active Works

| ID | Title | Category | External Link |
|---|---|---|---|
| 3 | Excel - Power BI Dashboard | Dashboard | — |
| 4 | MerchMate - FOB Costing Calculator | Mobile App | GitHub releases |
| 5 | Lab Dip & Shade Intelligence | Desktop App | GitHub repo |

---

## 7. Styling Architecture

### 7.1 Design System

- **Theme:** Dark-first design using oklch color space CSS variables
- **Tailwind v4** with `@tailwindcss/vite` plugin (no `tailwind.config.js` — configured inline via `@theme` and CSS variables)
- **DaisyUI v5** plugin loaded but minimally used
- **shadcn/ui** "new-york" style configured but only `navigation-menu` and `theme-provider` are installed
- **Color scheme:** Neutral/grayscale with purple-to-pink gradient accents
- **Typography:** System fonts (no custom Google Fonts imported)

### 7.2 Custom CSS Classes (defined in `index.css`)

| Class | Effect |
|---|---|
| `.glass-card` | Glassmorphism card with blur backdrop, hover lift animation |
| `.glow-effect` | Pulsing drop-shadow animation |
| `.fade-in-section` | FadeInUp entrance animation |
| `.animate-fadeIn` | Simple fade in |
| `.animate-slideUp` | Slide up + fade in |
| `.animate-scaleIn` | Scale from 0 to 1 on X axis |
| `.animate-blob` | Organic floating blob movement |
| `.delay-200`, `.delay-300` | Animation delays |
| `.animation-delay-2000`, `.animation-delay-4000` | Longer delays for blob staggering |

### 7.3 Scrollbar

Custom webkit scrollbar: dark track (#000), subtle thumb (#222), wider on hover.

---

## 8. SEO Configuration

- **react-helmet-async** wraps every page with dynamic `<title>`, `<meta description>`, OG tags, and Twitter cards
- **Canonical URLs** set per page
- **sitemap.xml** in `/public/` (needs updating with actual domain)
- **robots.txt** allows all crawlers
- **Google Site Verification** meta tag present in `index.html`

### ⚠️ Placeholder Values Requiring Update

| Item | Location | Current Value |
|---|---|---|
| Site URL | `SEO.tsx:21` | `https://yourdomain.com` |
| Sitemap URLs | `public/sitemap.xml` | `https://yourdomain.com/*` |
| Robots sitemap | `public/robots.txt` | `https://yourdomain.com/sitemap.xml` |

---

## 9. Build & Deployment

### 9.1 Scripts

```bash
npm run dev       # Start Vite dev server
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # Preview production build
```

### 9.2 Netlify Configuration

- **Build command:** `npm install --legacy-peer-deps && npm run build`
- **Publish dir:** `dist`
- **SPA redirect:** `/* → /index.html` (status 200)
- **`--legacy-peer-deps`** required due to dependency conflicts

### 9.3 Path Aliases

- `@/*` → `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`)

---

## 10. Key Patterns & Conventions

### 10.1 Code Patterns

- **Lazy loading:** All page components use `React.lazy()` + `Suspense`
- **Data-driven pages:** Works, Blog, and 3D pages all iterate over static arrays
- **Reusable cards:** `ContentCard` component is shared between Works and Blog listings
- **URL-based routing:** Detail pages use `:id` params, lookup via `.find()` on static arrays
- **Image imports:** Project images are imported as ES modules (bundled by Vite), blog images use external Unsplash URLs
- **No state management library:** Plain React `useState`/`useEffect`
- **No API calls:** Fully static site, all data hardcoded in `/data/` files
- **No form submission backend:** Contact page only has links (mailto, social), no form

### 10.2 Naming Conventions

- **Pages:** PascalCase (e.g., `WorkDetail.tsx`, `BlogDetail.tsx`)
- **Components:** PascalCase (e.g., `ContentCard.tsx`, `AppLayout.tsx`)
- **Data files:** camelCase (e.g., `worksData.ts`, `blogData.ts`)
- **Images:** lowercase with hyphens/underscores in folders, mixed in filenames
- **Default exports** used throughout; named exports for types/interfaces

### 10.3 Theme System

- Default theme: `"dark"` (hardcoded in `App.tsx`)
- Theme stored in `localStorage` under key `"vite-ui-theme"`
- CSS variables switch between `:root` (light) and `.dark` (dark) rulesets
- **No theme toggle is exposed in the UI** — always dark mode

---

## 11. Known Issues & Technical Debt

| Issue | Severity | Details |
|---|---|---|
| **Oversized profile image** | Medium | `profile.jpg` is 3.7MB — should be optimized/compressed |
| **Unused imports & dead code** | Low | `scrollY`, `mousePosition` state in Home.tsx; unused `RunesSplat` import in worksData.ts |
| **AppLayout not used** | Low | `AppWrapper` component exists but is commented out in App.tsx |
| **navigation-menu.tsx unused** | Low | shadcn/ui navigation menu installed but not imported anywhere |
| **Placeholder SEO URLs** | Medium | `yourdomain.com` needs replacing with actual domain |
| **No responsive hamburger menu** | Medium | Navbar links wrap on mobile but no hamburger/drawer menu exists |
| **Contact page copy inconsistency** | Low | Says "We're here to help" (plural) but is a personal portfolio |
| **Blog detail is minimal** | Low | BlogDetail only shows the same description as the listing — no full article content |
| **Inconsistent email** | Low | Home shows `abdullahnoman001@gmail.com`, Contact shows `abdnoman001@gmail.com` |
| **Copyright year hardcoded** | Low | Footer in Home.tsx says "© 2024" — Contact.tsx uses `new Date().getFullYear()` correctly |
| **Typos in content** | Low | "Excell" (should be "Excel"), "spinnig" (spinning), "knittinging" (knitting) in Home.tsx |
| **No loading states for images** | Low | Large images (profile, dashboard GIFs) have no skeleton/blur-up placeholders |
| **`App.css` is mostly dead code** | Low | Contains Vite template boilerplate not used by the portfolio |

---

## 12. Personal Information (from codebase)

| Field | Value |
|---|---|
| **Full Name** | Abdullah Noman |
| **Degree** | B.Sc. in Textile Engineering (Yarn Manufacturing) |
| **University** | Bangladesh University of Textiles (BUTEX), 2025 |
| **Location** | Dhaka, Bangladesh |
| **Email** | abdullahnoman001@gmail.com / abdnoman001@gmail.com |
| **GitHub** | https://github.com/shahriartamim2 |
| **LinkedIn** | https://www.linkedin.com/in/me-noman/ |
| **Facebook** | https://www.facebook.com/abdnoman001 |
| **Google Drive CV** | [Link](https://drive.google.com/file/d/1fdKbflctG2yfV0lJLM4Xa6cTjBYc_QyQ/view?usp=drivesdk) |

---

## 13. Quick Reference for Future Agents

### Adding a New Work
1. Add images to `src/images/<project-name>/`
2. Import images in `src/data/worksData.ts`
3. Add a new `ContentItem` object to the `works` array with a unique `id`
4. The work will automatically appear on both `/` (Home) and `/works` pages
5. Detail page is auto-generated at `/works/:id`

### Adding a New Blog Post
1. Add a new `ContentItem` to `blogPosts` array in `src/data/blogData.ts`
2. Use an external image URL or import a local image
3. Post appears on `/blog` automatically; detail at `/blog/:id`

### Adding a New 3D Render
1. Add thumbnail to `src/images/supersplat/`
2. Add a `Splat` object to `splatsData` in `src/data/splatsData.ts`
3. Render listing at `/renders`, viewer at `/render/:id`

### Modifying Navigation
- Edit `src/components/Navbar.tsx` — all nav links are hardcoded `NavLink` elements
- Update `src/routes.tsx` if adding new routes

### Changing Colors/Theme
- Light theme: `:root` block in `src/index.css` (lines 45-78)
- Dark theme: `.dark` block in `src/index.css` (lines 80-112)
- Gradient accents: Search for `from-purple-` and `to-pink-` in component files

### Running Locally
```bash
npm install --legacy-peer-deps
npm run dev
```

### Deploying
- Push to the connected Git repo → Netlify auto-deploys
- Or run `npm run build` and deploy the `dist/` folder manually
