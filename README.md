# 🐰 Bunny-Hamster Website

A responsive, interactive educational website showcasing information about bunnies and hamsters with playful animations and modern design patterns.

## 🎯 Project Overview

This project is a single-page web application built with vanilla HTML, CSS, and JavaScript. It features dynamic content switching, interactive elements, and a cohesive design system based on a carefully selected color palette.


## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Color Palette](#color-palette)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **Dynamic Navigation**: Single-page application with smooth section transitions
- **Interactive Fact Generator**: Random fact display with animation effects
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Accessibility**: Semantic HTML structure with ARIA-compliant elements

### Visual & UX
- **Custom Animations**: CSS keyframe animations for enhanced user engagement
- **Gradient Backgrounds**: Multi-layer gradient system using CSS
- **Hover Effects**: Interactive card transformations and button states
- **Typography**: Custom font stack for playful, readable content

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup and structure |
| CSS3 | Styling, animations, and responsive design |
| JavaScript (ES6+) | DOM manipulation and interactivity |
| Git | Version control |

## 🏁 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning)
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/CodeJunkie31/Bunny-Hamster.git
```

2. **Navigate to project directory**
```bash
   cd Bunny-Hamster
```

3. **Open in browser**
```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Live Server (VS Code extension)
   # Right-click index.html → Open with Live Server
```

### Development Setup

For local development with hot reload:
```bash
# Install Live Server globally (if not using VS Code extension)
npm install -g live-server

# Start development server
live-server
```

## 📁 Project Structure
```
bunny-hamster-website/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # All styling, animations, and responsive rules
├── script.js           # Navigation logic and interactive features
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

### Code Organization

#### HTML Structure
- Modular section-based layout
- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- BEM-inspired class naming convention

#### CSS Architecture
- Mobile-first responsive design
- CSS Custom Properties for theming (can be extended)
- Modular animation keyframes
- Organized by component hierarchy

#### JavaScript Modules
- `showSection()`: Handles SPA-style navigation
- `generateFact()`: Random content generation
- Event delegation for navigation buttons

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Burgundy | `#4B1D3F` | Primary brand color, headings, borders |
| Nude | `#E8D9C1` | Light backgrounds, text on dark |
| Rose Smoke | `#D8A7B1` | Accent color, gradients, hover states |
| Off Black | `#1B1B1B` | Body text, dark accents |

### Design Tokens (Future Enhancement)
```css
:root {
  --color-primary: #4B1D3F;
  --color-secondary: #E8D9C1;
  --color-accent: #D8A7B1;
  --color-text: #1B1B1B;
}
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

**Note**: Animations utilize modern CSS features and may degrade gracefully in older browsers.

## 🔮 Future Enhancements

### Planned Features
- [ ] Dark mode toggle with CSS variables
- [ ] Accessibility improvements (keyboard navigation, screen reader support)
- [ ] Performance optimization (lazy loading, CSS/JS minification)
- [ ] Search functionality for facts and content
- [ ] Filter/sort options for facts by category
- [ ] Local storage for user preferences
- [ ] Internationalization (i18n) support

### Technical Debt
- [ ] Migrate to CSS preprocessor (SASS/LESS)
- [ ] Implement build process (Webpack/Vite)
- [ ] Add unit tests (Jest)
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Implement progressive web app (PWA) features

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow existing code style and structure
- Write semantic, accessible HTML
- Use descriptive variable and function names
- Comment complex logic
- Test across multiple browsers before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Michelle Dlamini**
- GitHub: [@CodeJunkie31](https://github.com/CodeJunkie31)

## 🙏 Acknowledgments

- Color palette inspired by modern design trends
- Animation techniques from CSS-Tricks and MDN documentation
- Educational content researched from reputable pet care sources

---

**Built with 💜 for bunny and hamster enthusiasts**
