# Code for Change 2.0 🚀

A modern, interactive event website built for **Cloud Native Durgapur's Code for Change 2.0** hackathon. This project showcases a beautiful, animated landing page with multiple sections including hero, about, venue, mentors & judges, sponsors, testimonials, and FAQs.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-12.23.12-purple?style=flat-square)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Components](#-components)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Animated Background**: Multi-layered gradient animations with wave decorations
- **Glassmorphism Design**: Frosted glass effects with backdrop blur
- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Layout**: Mobile-first design that works on all devices

### 🎭 **Interactive Components**
- **FocusCard**: Cards with blur effect on non-hovered items and "COMING SOON" watermark
- **InfiniteMovingCards**: Auto-scrolling testimonials and image galleries
- **HoverEffect**: Enhanced hover animations with scale and shadow effects
- **ProfileCard**: Team member cards with tilt effects
- **Dock**: macOS-style dock navigation

### 📱 **Sections**
1. **Hero Section**: Eye-catching landing with event title and CTA
2. **About Section**: Event description with photo gallery
3. **Venue Section**: Location details with map integration
4. **Mentors & Judges**: Showcase of event mentors and judges
5. **Sponsors Section**: Tiered sponsor display (Platinum, Gold, Silver)
6. **Community Partners**: Partner organizations showcase
7. **Testimonials**: Scrolling testimonials from past participants
8. **Team Page**: Dedicated page for organizers and core team
9. **FAQs**: Accordion-style frequently asked questions

### 🎯 **Performance Optimizations**
- Next.js Image optimization for faster loading
- Font optimization with `next/font`
- Lazy loading for images
- Smooth animations with Framer Motion
- CSS animations for background effects

---

## 🛠 Tech Stack

### **Core Framework**
- **[Next.js 15.4.5](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.1](https://react.dev/)** - UI library
- **[React DOM 19.1.1](https://react.dev/)** - React rendering

### **Styling**
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/postcss](https://tailwindcss.com/)** - PostCSS plugin
- **Custom CSS** - Additional animations and effects

### **Animation**
- **[Motion 12.23.12](https://motion.dev/)** - Framer Motion for React animations
- **[OGL 1.0.11](https://github.com/oframe/ogl)** - WebGL library for Aurora effects

### **Development Tools**
- **[ESLint 9](https://eslint.org/)** - Code linting
- **[eslint-config-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint)** - Next.js ESLint configuration

### **Fonts**
- **[Geist Sans](https://vercel.com/font)** - Primary font
- **[Geist Mono](https://vercel.com/font)** - Monospace font
- **[Michroma](https://fonts.google.com/specimen/Michroma)** - Headings and titles

---

## 📁 Project Structure

```
codeforchange2.0/
├── public/                          # Static assets
│   ├── LOGO__1_-removebg-preview.png
│   ├── waves-DawnI9IY.png
│   ├── bridge-transparent-background-with-blue-line_545677-12672-removebg-preview.png
│   └── icon.svg
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── components/              # Shared components
│   │   │   ├── Aurora.js            # WebGL Aurora background
│   │   │   └── Aurora.css
│   │   ├── team/                    # Team page
│   │   │   ├── page.js              # Team page component
│   │   │   └── loading.js           # Loading state
│   │   ├── AppClientBoot.js         # Client-side initialization
│   │   ├── Dock.js                  # macOS-style dock
│   │   ├── Dock.css
│   │   ├── ProfileCard.js           # Team member cards
│   │   ├── ProfileCard.css
│   │   ├── globals.css              # Global styles
│   │   ├── layout.js                # Root layout
│   │   ├── manifest.js              # PWA manifest
│   │   └── page.js                  # Homepage
│   └── ui/                          # Reusable UI components
│       ├── card-hover-effect.jsx    # Hover effect cards
│       ├── focus-card.jsx           # Focus effect cards
│       └── infinite-moving-cards.jsx # Infinite scroll cards
├── eslint.config.mjs                # ESLint configuration
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Dependencies
├── postcss.config.mjs               # PostCSS configuration
└── README.md                        # This file
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### **Installation**

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
Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🧩 Components

### **FocusCard** (`src/ui/focus-card.jsx`)
Interactive cards with focus effect - non-hovered cards blur and scale down.

**Props:**
- `cards` (array): Array of card objects with `description` field
- `columns` (number): Number of columns (3 or 4, default: 3)

**Features:**
- Light blue background (`bg-blue-100`)
- "COMING SOON" watermark animation
- Blur effect on non-hovered cards
- Responsive grid layout

**Usage:**
```jsx
<FocusCard
  cards={[
    { description: "Mentor - Technology & Innovation" },
    { description: "Judge - Cloud Native & DevOps" },
  ]}
  columns={3}
/>
```

---

### **InfiniteMovingCards** (`src/ui/infinite-moving-cards.jsx`)
Auto-scrolling cards for testimonials and image galleries.

**Props:**
- `items` (array): Array of items to display
- `direction` (string): Scroll direction ("left" or "right")
- `speed` (string): Animation speed ("slow", "normal", "fast")
- `pauseOnHover` (boolean): Pause animation on hover

**Features:**
- Seamless infinite loop
- Configurable speed and direction
- Supports both content and quote cards
- Pause on hover

**Usage:**
```jsx
<InfiniteMovingCards
  items={testimonials}
  direction="left"
  speed="slow"
  pauseOnHover={true}
/>
```

---

### **HoverEffect** (`src/ui/card-hover-effect.jsx`)
Grid of cards with enhanced hover animations.

**Props:**
- `items` (array): Array of card objects with `title`, `description`, `link`
- `className` (string): Additional CSS classes

**Features:**
- Glassmorphism design
- Scale and shadow on hover
- Optional link support
- Responsive grid

**Usage:**
```jsx
<HoverEffect
  items={[
    {
      title: "Workshop Title",
      description: "Workshop description",
      link: "/workshop"
    }
  ]}
/>
```

---

### **ProfileCard** (`src/app/ProfileCard.js`)
Team member cards with tilt effect.

**Props:**
- `name` (string): Member name
- `title` (string): Member title/role
- `handle` (string): Social media handle
- `status` (string): Status message
- `avatarUrl` (string): Avatar image URL
- `showUserInfo` (boolean): Show user information
- `enableTilt` (boolean): Enable tilt effect
- `enableMobileTilt` (boolean): Enable tilt on mobile

---

### **Dock** (`src/app/Dock.js`)
macOS-style dock navigation.

**Features:**
- Icon magnification on hover
- Smooth animations
- Customizable icons and links

---

### **Aurora** (`src/app/components/Aurora.js`)
WebGL-powered animated background.

**Props:**
- `colorStops` (array): Array of hex color codes
- `amplitude` (number): Wave amplitude
- `blend` (number): Blend mode intensity

---

## 🎨 Customization

### **Colors**
The project uses a blue color palette. Main colors are defined in Tailwind CSS:

- **Primary**: `blue-900`, `blue-800`, `blue-600`
- **Accents**: `blue-500`, `blue-400`, `blue-300`
- **Backgrounds**: `blue-100`, `blue-50`

To change colors, update the Tailwind classes in components.

### **Fonts**
Fonts are configured in `src/app/layout.js`:

```javascript
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});
```

### **Images**
Replace images in the `public/` folder:
- Logo: `LOGO__1_-removebg-preview.png`
- Waves: `waves-DawnI9IY.png`
- Bridge: `bridge-transparent-background-with-blue-line_545677-12672-removebg-preview.png`

Remote images (Unsplash) are configured in `next.config.mjs`:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### **Content**
Update content directly in `src/app/page.js` and `src/app/team/page.js`.

---

## 🌐 Deployment

### **Deploy on Vercel** (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CNCF-DURGAPUR/codeforchange2.0)

### **Other Platforms**

**Build for production:**
```bash
npm run build
npm run start
```

The app will be available at `http://localhost:3000`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is part of **Cloud Native Durgapur** community initiative.

---

## 🙏 Acknowledgments

- **Cloud Native Durgapur** - Community organization
- **Next.js Team** - Amazing framework
- **Vercel** - Hosting and fonts
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

---

## 📞 Contact

**Cloud Native Durgapur**
- Website: [Cloud Native Durgapur](https://codeforchange2.0)
- GitHub: [@CNCF-DURGAPUR](https://github.com/CNCF-DURGAPUR)

---

## 🎯 Roadmap

- [ ] Add dark mode support
- [ ] Implement registration form
- [ ] Add event schedule section
- [ ] Integrate with backend API
- [ ] Add live event updates
- [ ] Implement real-time chat

---

**Made with ❤️ by Cloud Native Durgapur Community**
