# Code for Change 2.0 🚀

<div align="center">

A modern, interactive event website built for **Cloud Native Durgapur's Code for Change 2.0** hackathon. Features stunning animations, glassmorphism design, and seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-15.0.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-12.23.12-FF0080?style=for-the-badge)

[Live Demo](https://codeforchange2.0) • [Report Bug](https://github.com/CNCF-DURGAPUR/codeforchange2.0/issues) • [Request Feature](https://github.com/CNCF-DURGAPUR/codeforchange2.0/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components Documentation](#-components-documentation)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

Code for Change 2.0 is a fully-featured event website showcasing modern web development practices. Built with Next.js 15 and React 19, it features:

- **8 Interactive Sections**: Hero, About, Venue, Mentors/Judges, Sponsors, Community Partners, Testimonials, and FAQs
- **Dedicated Team Page**: Showcase organizers and core team members
- **Advanced Animations**: WebGL Aurora effects, infinite scrolling, and smooth transitions
- **Mobile-First Design**: Fully responsive across all devices
- **Optimized Performance**: Fast loading times with Next.js optimization

---

## ✨ Features

### 🎨 **Visual Design**
- **Multi-layered Animated Background**: Gradient animations with wave decorations and Aurora effects
- **Glassmorphism UI**: Modern frosted glass aesthetic with backdrop blur
- **Smooth Scrolling**: Seamless navigation between sections with scroll-based animations
- **Responsive Layout**: Mobile-first design optimized for all screen sizes
- **Custom Typography**: Michroma for headings, Geist Sans for body text

### 🎭 **Interactive Components**

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **FocusCard** | Cards with selective focus | Blur non-hovered items, "COMING SOON" watermark |
| **InfiniteMovingCards** | Auto-scrolling galleries | Configurable speed/direction, pause on hover |
| **HoverEffect** | Enhanced hover animations | Scale effects, shadows, glassmorphism |
| **ProfileCard** | Team member showcase | Tilt effects, social links, status display |
| **Dock** | macOS-style navigation | Icon magnification, smooth animations |
| **Aurora** | WebGL background | Customizable colors, wave effects |

### 📱 **Section Breakdown**

1. **Hero Section** 🎯
   - Eye-catching landing with animated background
   - Event title with gradient text effects
   - Call-to-action buttons

2. **About Section** 📖
   - Event description and objectives
   - Auto-scrolling photo gallery
   - Key highlights and details

3. **Venue Section** 📍
   - Location information
   - Embedded map integration
   - Venue highlights

4. **Mentors & Judges** 👥
   - Showcase industry experts
   - Focus card layout with profiles
   - "Coming Soon" placeholder support

5. **Sponsors Section** 💎
   - Tiered display (Platinum, Gold, Silver)
   - Hover effects on sponsor cards
   - Responsive grid layout

6. **Community Partners** 🤝
   - Partner organizations showcase
   - Logo grid with hover effects

7. **Testimonials** 💬
   - Infinite scrolling testimonials
   - Past participant feedback
   - Smooth animations

8. **Team Page** 👨‍💻
   - Dedicated page for organizers
   - Profile cards with tilt effects
   - Role-based categorization

9. **FAQs** ❓
   - Accordion-style questions
   - Smooth expand/collapse animations
   - Easy-to-scan format

### ⚡ **Performance Optimizations**
- Next.js Image optimization for 50%+ faster loading
- Font optimization with `next/font` (zero layout shift)
- Lazy loading for images and heavy components
- GPU-accelerated animations with Framer Motion
- CSS-based background animations for better performance
- Code splitting for optimal bundle sizes

---

## 🛠 Tech Stack

### **Framework & Libraries**

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.0.4 | React framework with App Router |
| [React](https://react.dev/) | 19.1.1 | UI library with concurrent features |
| [React DOM](https://react.dev/) | 19.1.1 | React rendering engine |

### **Styling & Design**

| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 | Utility-first CSS framework |
| [@tailwindcss/postcss](https://tailwindcss.com/) | 4.0 | PostCSS plugin for Tailwind |
| Custom CSS | - | Additional animations and effects |

### **Animation & Effects**

| Technology | Version | Purpose |
|------------|---------|---------|
| [Motion](https://motion.dev/) | 12.23.12 | Framer Motion for React animations |
| [OGL](https://github.com/oframe/ogl) | 1.0.11 | WebGL library for Aurora effects |

### **Development Tools**

| Technology | Version | Purpose |
|------------|---------|---------|
| [ESLint](https://eslint.org/) | 9.x | Code linting and quality |
| [eslint-config-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint) | Latest | Next.js ESLint rules |

### **Typography**

- **[Geist Sans](https://vercel.com/font)** - Primary sans-serif font
- **[Geist Mono](https://vercel.com/font)** - Monospace font for code
- **[Michroma](https://fonts.google.com/specimen/Michroma)** - Display font for headings

---

## 🚀 Getting Started

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **Package Manager**: npm, yarn, pnpm, or bun
- **Git** ([Download](https://git-scm.com/))

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/CNCF-DURGAPUR/codeforchange2.0.git
   cd codeforchange2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📁 Project Structure

```
codeforchange2.0/
│
├── public/                                    # Static assets
│   ├── LOGO__1_-removebg-preview.png         # Main logo
│   ├── waves-DawnI9IY.png                     # Wave decoration
│   ├── bridge-transparent-background...png    # Bridge image
│   └── icon.svg                               # Favicon
│
├── src/
│   ├── app/                                   # Next.js App Router
│   │   │
│   │   ├── components/                        # Shared components
│   │   │   ├── Aurora.js                      # WebGL Aurora background
│   │   │   └── Aurora.css                     # Aurora styles
│   │   │
│   │   ├── team/                              # Team page route
│   │   │   ├── page.js                        # Team page component
│   │   │   └── loading.js                     # Loading state
│   │   │
│   │   ├── AppClientBoot.js                   # Client-side initialization
│   │   ├── Dock.js                            # macOS-style dock component
│   │   ├── Dock.css                           # Dock styles
│   │   ├── ProfileCard.js                     # Team member card component
│   │   ├── ProfileCard.css                    # ProfileCard styles
│   │   ├── globals.css                        # Global styles & animations
│   │   ├── layout.js                          # Root layout (fonts, metadata)
│   │   ├── manifest.js                        # PWA manifest configuration
│   │   └── page.js                            # Homepage (main landing)
│   │
│   └── ui/                                    # Reusable UI components
│       ├── card-hover-effect.jsx              # Hover effect cards
│       ├── focus-card.jsx                     # Focus effect cards
│       └── infinite-moving-cards.jsx          # Infinite scroll cards
│
├── .eslintrc.json                             # ESLint configuration
├── eslint.config.mjs                          # ESLint config (ESM)
├── next.config.mjs                            # Next.js configuration
├── package.json                               # Dependencies & scripts
├── postcss.config.mjs                         # PostCSS configuration
└── README.md                                  # This file
```

### **Key Directories**

- **`public/`**: Static files served directly (images, icons)
- **`src/app/`**: Next.js App Router pages and layouts
- **`src/app/components/`**: Shared components used across pages
- **`src/ui/`**: Reusable UI components and utilities
- **`src/app/team/`**: Team page with dedicated route

---

## 🧩 Components Documentation

### **1. FocusCard** (`src/ui/focus-card.jsx`)

Interactive card grid with selective focus effect.

#### Props
```typescript
{
  cards: Array<{ description: string }>,  // Card data
  columns?: 3 | 4                         // Grid columns (default: 3)
}
```

#### Features
- Blurs non-hovered cards for focus
- "COMING SOON" animated watermark
- Light blue background (`bg-blue-100`)
- Responsive grid layout
- Smooth hover transitions

#### Usage Example
```jsx
<FocusCard
  cards={[
    { description: "Mentor - AI & Machine Learning" },
    { description: "Judge - Cloud Native Technologies" },
    { description: "Mentor - Full Stack Development" },
  ]}
  columns={3}
/>
```

---

### **2. InfiniteMovingCards** (`src/ui/infinite-moving-cards.jsx`)

Auto-scrolling card carousel for testimonials and galleries.

#### Props
```typescript
{
  items: Array<any>,              // Items to display
  direction?: "left" | "right",   // Scroll direction (default: "left")
  speed?: "slow" | "normal" | "fast",  // Animation speed (default: "normal")
  pauseOnHover?: boolean          // Pause on hover (default: true)
}
```

#### Features
- Seamless infinite loop animation
- Configurable speed and direction
- Supports both content and quote cards
- Pause animation on hover
- Smooth GPU-accelerated animations

#### Usage Example
```jsx
<InfiniteMovingCards
  items={testimonials}
  direction="left"
  speed="slow"
  pauseOnHover={true}
/>
```

---

### **3. HoverEffect** (`src/ui/card-hover-effect.jsx`)

Grid of cards with enhanced hover animations.

#### Props
```typescript
{
  items: Array<{
    title: string,
    description: string,
    link?: string
  }>,
  className?: string              // Additional CSS classes
}
```

#### Features
- Glassmorphism design with backdrop blur
- Scale and shadow effects on hover
- Optional link support (Next.js Link)
- Responsive grid layout
- Smooth transitions

#### Usage Example
```jsx
<HoverEffect
  items={[
    {
      title: "Web Development Workshop",
      description: "Learn modern web technologies",
      link: "/workshops/web-dev"
    },
    {
      title: "AI/ML Session",
      description: "Introduction to machine learning",
    }
  ]}
  className="max-w-5xl mx-auto"
/>
```

---

### **4. ProfileCard** (`src/app/ProfileCard.js`)

Team member profile cards with 3D tilt effect.

#### Props
```typescript
{
  name: string,                   // Member name
  title: string,                  // Role/title
  handle: string,                 // Social media handle
  status: string,                 // Status message
  avatarUrl: string,              // Avatar image URL
  showUserInfo?: boolean,         // Show user info (default: true)
  enableTilt?: boolean,           // Enable tilt effect (default: true)
  enableMobileTilt?: boolean      // Enable on mobile (default: false)
}
```

#### Features
- 3D tilt effect on mouse/touch movement
- Responsive design
- Social media integration
- Custom avatar support
- Status indicator

#### Usage Example
```jsx
<ProfileCard
  name="John Doe"
  title="Lead Organizer"
  handle="@johndoe"
  status="Building amazing events"
  avatarUrl="/avatars/john.jpg"
  enableTilt={true}
/>
```

---

### **5. Dock** (`src/app/Dock.js`)

macOS-style dock navigation with icon magnification.

#### Features
- Icon magnification on hover
- Smooth spring animations
- Customizable icons and links
- Tooltip support
- Responsive behavior

#### Customization
Edit icon array in `Dock.js`:
```javascript
const icons = [
  { icon: HomeIcon, label: "Home", href: "/" },
  { icon: UsersIcon, label: "Team", href: "/team" },
  // Add more icons...
];
```

---

### **6. Aurora** (`src/app/components/Aurora.js`)

WebGL-powered animated background with gradient waves.

#### Props
```typescript
{
  colorStops?: string[],          // Array of hex colors
  amplitude?: number,             // Wave amplitude (default: 320)
  blend?: number                  // Blend intensity (default: 1)
}
```

#### Features
- GPU-accelerated WebGL rendering
- Customizable color gradients
- Wave amplitude control
- Blend mode effects
- Performance optimized

#### Usage Example
```jsx
<Aurora
  colorStops={["#3b82f6", "#8b5cf6", "#ec4899"]}
  amplitude={280}
  blend={0.8}
/>
```

---

## 🎨 Customization Guide

### **1. Color Palette**

The project uses a blue-centric color scheme. Update colors in components:

```javascript
// Primary Colors
bg-blue-900   // Dark backgrounds
bg-blue-800   // Headers
bg-blue-600   // Primary buttons

// Accent Colors
bg-blue-500   // Highlights
bg-blue-400   // Secondary elements
bg-blue-300   // Borders

// Light Backgrounds
bg-blue-100   // Card backgrounds
bg-blue-50    // Subtle backgrounds
```

**To change the entire color scheme:**
1. Find and replace color classes in components
2. Update Aurora color stops in `page.js`
3. Modify gradient backgrounds in `globals.css`

### **2. Typography**

Fonts are configured in `src/app/layout.js`:

```javascript
// Import custom fonts
import { Michroma } from "next/font/google";
import localFont from "next/font/local";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
```

**To change fonts:**
1. Import new font in `layout.js`
2. Add CSS variable
3. Update Tailwind config to use new variable
4. Apply throughout components

### **3. Images & Assets**

Replace images in `public/` directory:

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `LOGO__1_-removebg-preview.png` | Main logo | 500×500px, PNG with transparency |
| `waves-DawnI9IY.png` | Wave decoration | 1920×1080px, PNG |
| `bridge-transparent-background...png` | Bridge image | 1200×800px, PNG with transparency |
| `icon.svg` | Favicon | 32×32px, SVG |

**For external images (Unsplash), update `next.config.mjs`:**

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'your-cdn.com',  // Add your CDN
    },
  ],
}
```

### **4. Content Updates**

#### Homepage Content (`src/app/page.js`)
- Hero section text and CTA buttons
- About section description
- Venue information
- Sponsor tiers and logos
- FAQ items

#### Team Page (`src/app/team/page.js`)
- Team member profiles
- Roles and categories
- Social media links

#### Metadata (`src/app/layout.js`)
```javascript
export const metadata = {
  title: "Your Event Name",
  description: "Your event description",
  // Update other metadata fields
};
```

### **5. Animation Speeds**

Adjust animation durations in component files:

```javascript
// InfiniteMovingCards speed
speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"

// Hover effects
transition={{ duration: 0.3 }}  // Adjust duration

// Scroll animations
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

---

## 🌐 Deployment

### **Deploy on Vercel** (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CNCF-DURGAPUR/codeforchange2.0)

### **Other Deployment Platforms**

#### **Netlify**
```bash
npm run build
# Drag and drop .next folder to Netlify
```

#### **Railway**
```bash
# Connect GitHub repository to Railway
# Set build command: npm run build
# Set start command: npm run start
```

#### **AWS Amplify**
```bash
# Connect repository in AWS Console
# Use default Next.js build settings
```

#### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t codeforchange .
docker run -p 3000:3000 codeforchange
```

### **Environment Variables**

If you add environment variables, create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

Add to Vercel:
1. Project Settings → Environment Variables
2. Add each variable
3. Redeploy

---

## ⚡ Performance

### **Optimization Techniques Used**

| Technique | Implementation | Impact |
|-----------|----------------|--------|
| **Image Optimization** | Next.js `<Image>` component | 50%+ smaller images |
| **Font Optimization** | `next/font` with subsetting | Zero layout shift |
| **Code Splitting** | Automatic with App Router | Faster initial load |
| **Lazy Loading** | Images and heavy components | Better FCP/LCP scores |
| **GPU Acceleration** | CSS transforms, Framer Motion | Smooth 60fps animations |
| **Preloading** | Critical assets preloaded | Reduced time to interactive |

### **Lighthouse Scores** (Target)

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### **Performance Tips**

1. **Optimize images before uploading**
   - Use WebP format
   - Compress with tools like TinyPNG
   - Provide appropriate dimensions

2. **Minimize bundle size**
   ```bash
   npm run build
   # Check bundle size in output
   ```

3. **Use React DevTools Profiler**
   - Identify slow components
   - Optimize re-renders

4. **Enable compression** (handled by Vercel automatically)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **How to Contribute**

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/codeforchange2.0.git
   cd codeforchange2.0
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary

5. **Test your changes**
   ```bash
   npm run dev
   npm run build  # Ensure production build works
   npm run lint   # Check for linting errors
   ```

6. **Commit with meaningful messages**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

8. **Open a Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Describe your changes
   - Link any related issues

### **Contribution Guidelines**

- **Code Style**: Follow existing patterns and conventions
- **Commit Messages**: Use conventional commits (feat, fix, docs, style, refactor, test, chore)
- **Testing**: Test on multiple browsers and screen sizes
- **Documentation**: Update README if adding new features
- **Responsive**: Ensure changes work on mobile devices

### **Areas for Contribution**

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements
- 🌐 Internationalization (i18n)
- ⚡ Performance optimizations

---

## 🎯 Roadmap

### **Phase 1: Core Features** ✅
- [x] Homepage with all sections
- [x] Team page
- [x] Responsive design
- [x] Animation system
- [x] Component library

### **Phase 2: Enhanced Functionality** 🚧
- [ ] Dark mode support with theme toggle
- [ ] Registration form with validation
- [ ] Event schedule section with timeline
- [ ] Live event updates with real-time data
- [ ] Email notifications for registrations
- [ ] Admin dashboard for content management

### **Phase 3: Advanced Features** 📋
- [ ] Backend API integration (Next.js API routes)
- [ ] User authentication (OAuth, email/password)
- [ ] Real-time chat for participants
- [ ] Project submission portal
- [ ] Live leaderboard during event
- [ ] Photo gallery from event
- [ ] Blog/news section

### **Phase 4: Enhancements** 🔮
- [ ] Internationalization (i18n) support
- [ ] PWA features (offline support, push notifications)
- [ ] Advanced analytics dashboard
- [ ] Social media integration
- [ ] Video streaming integration
- [ ] Certificates generation and download

---

## 📄 License

This project is part of the **Cloud Native Durgapur** community initiative.

**License:** Open source (specify license type if applicable)

---

## 🙏 Acknowledgments

### **Built With**
- **[Next.js](https://nextjs.org)** by Vercel - The React Framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Vercel](https://vercel.com)** - Hosting and deployment platform

### **Inspiration & Resources**
- [Aceternity UI](https://ui.aceternity.com) - Component inspiration
- [Unsplash](https://unsplash.com) - High-quality images
- Next.js documentation and examples
- React documentation and patterns

### **Community**
Special thanks to **Cloud Native Durgapur** community members and contributors.

---

## 📞 Contact

### **Cloud Native Durgapur**

- 🌐 **Website**: [codeforchange2.0](https://codeforchange2.0)
- 💻 **GitHub**: [@CNCF-DURGAPUR](https://github.com/CNCF-DURGAPUR)
- 📧 **Email**: contact@cncfdurgapur.org (update with actual email)
- 🐦 **Twitter**: [@CNCFDurgapur](https://twitter.com/CNCFDurgapur) (update with actual handle)
- 💬 **Discord**: [Join our community](https://discord.gg/cncfdurgapur) (update with actual link)

### **Maintainers**

- **Lead Developer**: [Your Name](https://github.com/yourusername)
- **Design Lead**: [Designer Name](https://github.com/designerusername)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/CNCF-DURGAPUR/codeforchange2.0?style=social)
![GitHub forks](https://img.shields.io/github/forks/CNCF-DURGAPUR/codeforchange2.0?style=social)
![GitHub issues](https://img.shields.io/github/issues/CNCF-DURGAPUR/codeforchange2.0)
![GitHub pull requests](https://img.shields.io/github/issues-pr/CNCF-DURGAPUR/codeforchange2.0)
![GitHub last commit](https://img.shields.io/github/last-commit/CNCF-DURGAPUR/codeforchange2.0)

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=CNCF-DURGAPUR/codeforchange2.0&type=Date)](https://star-history.com/#CNCF-DURGAPUR/codeforchange2.0&Date)

---

<div align="center">

**Made with ❤️ by Cloud Native Durgapur Community**

[⬆ Back to Top](#code-for-change-20-)

</div>
