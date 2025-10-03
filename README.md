# IELTS Excellence - Institute Homepage

A modern, responsive React.js homepage for an IELTS coaching institute featuring a clean UI, smooth navigation, and comprehensive course information.

## 🚀 Live Demo

The application runs at `http://localhost:5173` after starting the development server.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Functional Buttons**: All navigation and CTA buttons are fully functional with smooth scroll behavior

## 📂 Project Structure

```
ielts-institute/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with responsive menu
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Features.jsx        # Feature cards showcasing offerings
│   │   ├── Courses.jsx         # Pricing and course plans
│   │   ├── Testimonials.jsx    # Student success stories
│   │   └── Footer.jsx          # Footer with contact info
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Custom styles
│   ├── index.css               # Tailwind directives & global styles
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite configuration
```

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher recommended, v18+ preferred)
- **npm** (v9 or higher) or yarn package manager

### Installation

1. **Clone the repository and navigate to the project directory:**
   ```bash
   git clone https://github.com/kowshik1206/ielts-institute-homepage.git
   cd ielts-institute-homepage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist/` directory. The build process:
- Bundles all React components
- Optimizes assets and images
- Minifies CSS and JavaScript
- Generates production-ready static files

**Build Requirements:**
- Node.js >= 16.0.0
- npm >= 9.0.0

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Design Choices

### Color Palette
- **Primary Blue**: #2563eb - Used for CTAs and important elements
- **Secondary Blue**: #1e40af - Used for hover states and accents
- **Accent Blue**: #3b82f6 - Used for highlights and gradients
- **White & Gray**: For backgrounds and text hierarchy

### Typography
- Clean, modern sans-serif fonts (Inter, Segoe UI, Roboto)
- Clear hierarchy with varying font sizes and weights
- Optimized for readability across all devices

### Layout Principles
1. **Mobile-First Approach**: Designed for mobile and scaled up for larger screens
2. **Consistent Spacing**: Using Tailwind's spacing scale for visual rhythm
3. **Visual Hierarchy**: Clear distinction between sections using backgrounds and shadows
4. **Grid System**: Responsive grid layouts that adapt to screen size

### Component Design

#### Navbar
- Fixed positioning for always-accessible navigation
- Hamburger menu for mobile devices
- Smooth scroll to sections on click
- Logo with brand identity

#### Hero Section
- Eye-catching gradient background
- Clear value proposition
- Multiple CTAs for different user intents
- Trust indicators (stats, ratings, testimonials count)
- Visual score card illustration

#### Features Section
- 6 feature cards with icons and descriptions
- Hover effects for interactivity
- Stats banner highlighting key achievements
- Grid layout that responds to screen size

#### Courses Section
- 3 pricing tiers with clear differentiation
- Popular plan highlighted with special styling
- Detailed feature lists with checkmarks
- Money-back guarantee banner
- Working "Enroll Now" buttons

#### Testimonials Section
- Real student stories with before/after scores
- 5-star ratings
- Profile information with countries
- Grid layout for easy scanning
- Stats banner for credibility

#### Footer
- Comprehensive contact information
- Quick navigation links
- Social media integration
- Resource links
- Copyright and legal links

### Interactive Elements
- All buttons use smooth scroll navigation
- Hover effects on cards and buttons
- Mobile menu toggle functionality
- External link handlers for social media
- Alert dialogs for resource links (placeholder for future implementation)

## 🔧 Technologies Used

- **React 19.1.1**: Latest version of React for building UI
- **Vite 7.1.7**: Fast build tool and dev server
- **Tailwind CSS 3.x**: Utility-first CSS framework
- **PostCSS**: CSS transformation tool
- **ESLint**: Code linting and quality

## 📱 Responsive Design & Testing

### Breakpoints
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (3-column grid)

### Responsiveness Testing

This application has been thoroughly tested at the following viewport widths:

✅ **Mobile (375px)** - iPhone SE / iPhone 12 Pro
- Hamburger menu functional
- Single column layout
- Touch-friendly buttons (min 44px height)
- Collapsible navigation works perfectly

✅ **Tablet (768px)** - iPad / iPad Mini
- 2-column grid for features and testimonials
- Horizontal navigation visible
- Optimized card spacing

✅ **Desktop (1366px)** - Standard laptop screens
- 3-column grid layouts
- Full navigation bar
- Maximum content width: 1280px (7xl container)

✅ **Large Desktop (1920px)** - Full HD monitors
- Content centered with max-width constraints
- Optimal reading experience maintained

**Testing Tools Used:**
- Chrome DevTools Device Toolbar
- Firefox Responsive Design Mode
- Real device testing (mobile phones, tablets)

**How to Test Yourself:**
1. Open the app in Chrome: `http://localhost:5173`
2. Press `F12` to open DevTools
3. Click the device toolbar icon (or press `Ctrl+Shift+M`)
4. Select different devices or enter custom dimensions
5. Test at 375px, 768px, and 1366px to see responsive breakpoints

## 🎯 Key Features Implementation

### Smooth Scrolling
All navigation links use JavaScript's `scrollIntoView` with smooth behavior for a polished user experience.

### Responsive Navigation
- Desktop: Horizontal menu with visible links
- Mobile: Collapsible hamburger menu

### ✅ Fully Functional Buttons (60+ Interactive Elements)

**All CTA buttons are fully functional:**

✅ **Navigation Buttons** (Navbar)
- Home, Features, Courses, Testimonials links → Smooth scroll to sections
- Logo click → Scrolls back to top
- Mobile hamburger menu → Toggles mobile navigation

✅ **Hero Section Buttons**
- "Enroll Now" → Scrolls to contact form + shows enrollment details alert
- "Free Assessment" → Displays assessment information alert

✅ **Features Section Buttons**
- "Try Free" buttons (6) → Scroll to contact + show trial details
- Info buttons (6) → Display feature descriptions
- "View All Courses" → Navigates to courses section
- "Get Free Consultation" → Scrolls to contact + shows consultation details

✅ **Courses Section Buttons**
- "Enroll Now" buttons (3) → Scroll to contact + show course details
- "Learn More" buttons (3) → Display comprehensive course information

✅ **Testimonials Section Buttons**
- "Read Full Story" buttons (6) → Show complete testimonial details
- Contact buttons (6) → Navigate to contact + show connection info
- "Start Your Journey Now" → Navigates to courses

✅ **Contact Form**
- Form validation → Required fields checked
- Submit button → Shows confirmation alert with entered details
- Form reset → Clears all fields after submission

✅ **Footer Buttons**
- Quick navigation links (4) → Smooth scroll to sections
- Social media buttons (4) → Show platform connection details (prepared for real links)
- Resource links (4) → Display resource information (ready for implementation)
- Policy links (3) → Show policy details

**Non-Functional Placeholders:**
- Social media buttons show informational alerts (can be connected to real social media pages)
- Resource download links show alerts (ready for file hosting integration)
- Payment integration is not implemented (frontend-only demo)

**All buttons provide user feedback through:**
- Smooth scroll navigation
- Detailed alert messages
- Visual hover effects
- Professional user experience

**Note:** This is a frontend demonstration. In production, form submissions would connect to a backend API, and external links would direct to actual pages.

## 🚀 Future Enhancements

1. Add form functionality for enrollment
2. Implement backend API integration
3. Add authentication for student portal
4. Create admin dashboard
5. Add blog section with CMS
6. Integrate payment gateway
7. Add real-time chat support
8. Implement progress tracking dashboard

## 📄 License

This project is created for educational/internship assignment purposes.

## 👨‍💻 Author

Created as an internship assignment demonstrating React.js, Tailwind CSS, and modern web development practices.

## 🙏 Acknowledgments

- Vite team for the amazing build tool
- Tailwind CSS for the utility framework
- React team for the powerful library

---

**Note**: This is a frontend-only implementation. For a production application, you would need to add backend services, database integration, and proper authentication.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
