# Semi-Lycée Anacaona du Cap-Haitien (SLACH) - Showcase Website

## 📋 Project Overview

This is a complete, professional, and modern multi-page responsive showcase website for "Semi-Lycée Anacaona du Cap-Haitien" (SLACH), a premier educational institution in Cap-Haitien, Haiti.

### ✨ Features

- **Multi-page responsive design** with 5 main pages
- **Premium color palette**: Educational Green (#3D8B46), white, and dark charcoal
- **Professional typography**: Montserrat (headers) and Open Sans (body text)
- **Rich, formal French content** across all pages
- **Fully integrated image placeholders** for the provided assets
- **Interactive elements**: FAQ accordion, contact form, scroll navigation
- **Mobile-first responsive design** (Desktop, Tablet, Mobile)
- **Accessibility standards** with semantic HTML5
- **Modern CSS** with custom design system and variables

---

## 📁 File Structure

```
SLACH-Website/
├── index.html              # Homepage (Accueil)
├── genese.html             # History page (La Genèse)
├── charter.html            # Charter & Rules (Charte & Règlements)
├── vie-scolaire.html       # Student Life (Vie Scolaire)
├── contact.html            # Contact page (Contact)
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── LOGO1.jpeg              # School logo
├── WhatsApp Image 2025-11-25 at 1.15.02 PM.jpeg    # School wall banner
├── WhatsApp Image 2025-11-25 at 1.15.04 PM.jpeg    # Infrastructure/Courtyard
├── WhatsApp Image 2025-11-25 at 1.15.04 PM (1).jpeg # Student group photo
├── JARDINIER2.pdf          # Official documents
└── README.md               # This file
```

---

## 🌐 Pages Overview

### 1. **INDEX.HTML (Accueil - Homepage)**
   - Hero section with compelling headline and CTA buttons
   - Welcome message from school direction
   - Key highlights showcasing:
     - Modern Computer Lab
     - Three-shift scheduling system
     - Strong cultural identity
   - Responsive image integration

### 2. **GENESE.HTML (La Genèse - Our Story)**
   - Page banner with school image
   - Five history sections:
     - **Le Temps des Épreuves**: Foundation story (1996)
     - **La Naissance d'une Résolution**: Core mission
     - **Le Jardinier de l'Ombre**: Tribute to co-founder
     - **L'Héritage d'Anacaona**: Cultural significance and "Fleur d'Or" concept
     - **Notre Engagement Continu**: Ongoing commitment
   - Smooth scroll navigation
   - Rich poetic and historical French content

### 3. **CHARTER.HTML (Textes Constitutifs - Charter & Rules)**
   - **Side sticky navigation** for easy section access
   - **Charte des Élèves** (Student Charter):
     - Identity, History & Memory
     - Six Fundamental Values (Dignity, Solidarity, Requirement, Loyalty, Inclusion, Gratitude)
     - Rights & Duties
     - Konbit Scolaire concept
   - **Règlement Intérieur** (Internal Rules):
     - Pedagogical organization
     - Three-shift system details
     - Evaluation methods
     - Educational (non-humiliating) discipline approach
   - **Download section** for full PDF document
   - Clean, document-style layout

### 4. **VIE-SCOLAIRE.HTML (Vie Scolaire - Student Life)**
   - Featured student group photo
   - **Un Parcours vers la Fleur d'Or**: Student journey explanation
   - Self-evaluation principles
   - **Partenaires de la Réussite**: 10 commandments for parents
   - **Infrastructures**: 
     - Main building
     - Computer lab
     - Sports area & courtyard
     - Library & resources
     - Counseling services
   - **Parascolastic Activities**: 8 clubs and programs
   - **Annual Events**: Celebrations and milestones

### 5. **CONTACT.HTML (Contact Us)**
   - Contact information cards with:
     - Physical address
     - Phone numbers
     - Email addresses
     - Business hours
   - **Contact form** with:
     - Name, Email, Phone fields
     - Subject dropdown
     - Message textarea
     - Form validation
     - Success message display
   - **Google Maps embed** for location
   - **FAQ section** with 6 toggle-able questions

---

## 🎨 Design System

### Color Palette
- **Primary Green**: #3D8B46 (Educational Green - School walls)
- **Primary Green Dark**: #2d6534 (Darker shade for hover)
- **Primary Green Light**: #5a9c5e (Lighter shade for accents)
- **White**: #ffffff
- **Charcoal**: #2b2b2b (Typography)
- **Gray**: #666666 (Body text)
- **Light Gray**: #f5f5f5 (Backgrounds)

### Typography
- **Headers**: Montserrat (600, 700, 800 weight)
- **Body**: Open Sans (400, 500, 600 weight)
- **Font Sizes**: Responsive, from 0.95rem to 3rem
- **Line Heights**: 1.6 - 1.9 for readability

### Components
- Buttons (Primary, Secondary, CTA)
- Cards (Highlight, Phase, Activity, Value)
- Forms (Input, Select, Textarea)
- Navigation (Header, Side Navigation, Footer)
- Sections (Welcome, Highlights, History, FAQ)

---

## 🖼️ Image Integration

All image files are referenced with their exact filenames. Place the following images in the root directory:

1. **LOGO1.jpeg**
   - Location: Header (all pages)
   - Description: Logo with indigenous cacique head, green circle, triangle, and motto

2. **WhatsApp Image 2025-11-25 at 1.15.02 PM.jpeg**
   - Locations: Genèse page banner, Homepage highlights
   - Description: Green wall with school name

3. **WhatsApp Image 2025-11-25 at 1.15.04 PM.jpeg**
   - Locations: Homepage hero, Vie Scolaire infrastructure section
   - Description: Two-story green building, basketball court, computer lab sign

4. **WhatsApp Image 2025-11-25 at 1.15.04 PM (1).jpeg**
   - Locations: Vie Scolaire featured section
   - Description: Students in green and white uniforms

5. **JARDINIER2.pdf**
   - Location: Charter page download link
   - Description: Official document with complete texts constitutifs

---

## 🚀 Getting Started

### 1. **Setup Files**
   - Download all HTML, CSS, and JS files
   - Place image files in the same directory
   - Ensure JARDINIER2.pdf is also in the same directory

### 2. **Open in Browser**
   - Open `index.html` in your web browser
   - Or deploy to a web server

### 3. **Testing**
   - Test on desktop (1920px), tablet (768px), and mobile (480px)
   - Verify all images load correctly
   - Test form submission and FAQ toggle
   - Check navigation links work properly

### 4. **Customization**
   - Update contact information in `contact.html`
   - Modify colors in `styles.css` (`:root` variables)
   - Update fonts in the Google Fonts import
   - Customize text content in each HTML file

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

All components adapt smoothly across breakpoints with media queries.

---

## ♿ Accessibility Features

- Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels where necessary
- Proper heading hierarchy (H1 → H6)
- Color contrast meets WCAG standards
- Form labels properly associated with inputs
- Alt text for images (to be filled with image descriptions)

---

## 📝 Content Structure

### French Language
All content is written in formal, professional French:
- Educational tone
- Proper grammar and structure
- Culturally appropriate language for Haitian context
- Inclusive and empowering messaging

### Key Content Areas
1. **Mission & Values**: Emphasized throughout
2. **History & Heritage**: Comprehensive in Genèse page
3. **Educational Philosophy**: Detailed in Charter page
4. **Student Experience**: Showcased in Vie Scolaire page
5. **Contact & Engagement**: Clear pathways in Contact page

---

## 🔧 JavaScript Functionality

### Features Implemented
1. **FAQ Toggle**: Click questions to reveal/hide answers
2. **Contact Form Validation**: Email validation and field checking
3. **Success Message**: Displays after form submission
4. **Scroll Spy**: Highlights active section in charter navigation
5. **Smooth Scrolling**: Anchor links scroll smoothly
6. **Active Navigation**: Highlights current page in menu
7. **Print Optimization**: Hides header/footer when printing

### Files
- `script.js`: All interactivity and DOM manipulation

---

## 🌍 Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📦 Deployment

### Static Hosting
- Suitable for GitHub Pages
- Netlify
- Vercel
- Any static web hosting service

### Server Requirements
- No backend needed
- Just serve the HTML/CSS/JS files
- Images must be accessible from web root

---

## 📧 Contact Information (To Update)

Update the following in `contact.html`:
```html
<!-- Phone -->
+509 47XX XXXX

<!-- Email -->
info@slach.ht
admissions@slach.ht

<!-- Address -->
Near Fort Saint-Michel, Cap-Haitien, Haiti
```

---

## 🎓 Content Credits

- School Information: JARDINIER2.pdf reference
- Motto: "Travail, Patrie, Dieu"
- Historical References: Semi-Lycée Anacaona du Cap-Haitien foundation story
- Cultural Name: Anacaona (Taïno cacique symbolizing resistance and freedom)

---

## 📞 Support

For questions about content, design, or functionality:
1. Review the relevant HTML file
2. Check `styles.css` for styling questions
3. Consult `script.js` for JavaScript functionality
4. Refer to this README for general guidance

---

## 📄 License

This website is designed specifically for Semi-Lycée Anacaona du Cap-Haitien.
Modify and use as needed for the institution.

---

## ✅ Checklist Before Launch

- [ ] All images placed in correct directory
- [ ] Image filenames match exactly
- [ ] JARDINIER2.pdf available for download
- [ ] Contact form backend setup (if needed)
- [ ] All links tested and working
- [ ] Mobile responsiveness verified
- [ ] Content proofread for accuracy
- [ ] Social media links added (if applicable)
- [ ] SEO metadata updated
- [ ] Website deployed to server

---

## 🎯 Future Enhancements

Potential additions:
- Student portal/login system
- Online admission form
- Blog/News section
- Photo gallery
- Event calendar
- Testimonials section
- Donation/Partnership portal
- Multi-language support

---

**Created for: Semi-Lycée Anacaona du Cap-Haitien (SLACH)**
**Date: 2024**
**Version: 1.0**
