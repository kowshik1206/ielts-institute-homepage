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

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd c:\Users\Kowshik\Desktop\assignment\ielts-institute
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

The built files will be in the `dist/` directory.

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

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Implementation

### Smooth Scrolling
All navigation links use JavaScript's `scrollIntoView` with smooth behavior for a polished user experience.

### Responsive Navigation
- Desktop: Horizontal menu with visible links
- Mobile: Collapsible hamburger menu

### Working Buttons
- Navigation buttons scroll to respective sections
- "Get Started" and "Enroll Now" buttons navigate to contact section
- Social media buttons prepared for external links
- Resource buttons show alerts (ready for real implementations)

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
