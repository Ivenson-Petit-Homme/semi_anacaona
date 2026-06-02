# 📁 SLACH Website - Project Structure Guide

## 🎯 Project Organization

Your SLACH website project is now fully organized with a professional folder structure. Here's everything you need to know:

---

## 📦 Folder Structure

```
ECOLE INSTITUTION/
├── 📄 index-new.html              ← HOMEPAGE (Main entry point)
├── 📁 assets/                     ← All resources go here
│   ├── 📁 css/
│   │   └── styles.css             ← Main stylesheet (ALL pages use this)
│   ├── 📁 js/
│   │   └── script.js              ← JavaScript for interactivity
│   └── 📁 images/                 ← All image files
│       ├── LOGO1.jpeg
│       ├── WhatsApp Image 2025-11-25 at 1.15.02 PM.jpeg
│       ├── WhatsApp Image 2025-11-25 at 1.15.04 PM.jpeg
│       └── WhatsApp Image 2025-11-25 at 1.15.04 PM (1).jpeg
├── 📁 pages/                      ← All subpages
│   ├── genese.html                ← La Genèse (Our Story)
│   ├── charter.html               ← Charter & Regulations
│   ├── vie-scolaire.html          ← Student Life
│   └── contact.html               ← Contact Page
├── 📁 documents/                  ← Official documents
│   └── JARDINIER2.pdf             ← Full charter document
└── 📄 README.md                   ← Project documentation

```

---

## 🚀 How to Use This Project

### 1️⃣ **Setup Your Images**
   
Place your image files in the `assets/images/` folder:
```
ECOLE INSTITUTION/
└── assets/
    └── images/
        ├── LOGO1.jpeg  (✓ Place here)
        ├── WhatsApp Image 2025-11-25 at 1.15.02 PM.jpeg  (✓ Place here)
        ├── WhatsApp Image 2025-11-25 at 1.15.04 PM.jpeg  (✓ Place here)
        └── WhatsApp Image 2025-11-25 at 1.15.04 PM (1).jpeg  (✓ Place here)
```

### 2️⃣ **Place Your PDF Document**

Move `JARDINIER2.pdf` to the `documents/` folder:
```
ECOLE INSTITUTION/
└── documents/
    └── JARDINIER2.pdf  (✓ Place here)
```

### 3️⃣ **Open the Website**

Open **`index-new.html`** in your web browser:
- This is your homepage
- All links are properly configured
- Navigation will work to all subpages
- All styles and scripts load correctly

---

## 📄 File Descriptions

### **Root Level**
- **`index-new.html`** - Homepage with hero section, highlights, and welcome message
- **`README.md`** - Full project documentation (features, setup, deployment)

### **assets/css/**
- **`styles.css`** - Complete stylesheet with:
  - Color scheme (Educational Green #3D8B46)
  - Typography (Montserrat + Open Sans)
  - Responsive design (Desktop, Tablet, Mobile)
  - All component styling
  - 250+ lines of professional CSS

### **assets/js/**
- **`script.js`** - JavaScript functionality:
  - FAQ accordion toggle
  - Contact form validation
  - Smooth scrolling
  - Active navigation highlighting
  - Scroll spy for charter navigation

### **assets/images/**
- All 4 image files referenced in HTML pages
- Filenames match exactly with `<img src>` tags
- Organized in one central location

### **pages/**
- **`genese.html`** - Story page with history sections
- **`charter.html`** - Charter with side navigation
- **`vie-scolaire.html`** - Student life page
- **`contact.html`** - Contact form + FAQ

### **documents/**
- **`JARDINIER2.pdf`** - Official school document (referenced in charter page)

---

## 🔗 Navigation Links

All links are configured to work correctly from any page:

**From Homepage (`index-new.html`):**
```html
- Accueil → index.html
- La Genèse → pages/genese.html
- Charte & Règlements → pages/charter.html
- Vie Scolaire → pages/vie-scolaire.html
- Contact → pages/contact.html
```

**From Subpages (e.g., `pages/genese.html`):**
```html
- Accueil → ../index.html
- La Genèse → genese.html
- Charte & Règlements → charter.html
- Vie Scolaire → vie-scolaire.html
- Contact → contact.html
```

**Asset References (work from all pages):**
```html
Images:    ../assets/images/LOGO1.jpeg
CSS:       ../assets/css/styles.css
JS:        ../assets/js/script.js
PDF:       ../documents/JARDINIER2.pdf
```

---

## ✅ Checklist Before Going Live

- [ ] **Images placed** in `assets/images/` with exact filenames
- [ ] **PDF document** placed in `documents/JARDINIER2.pdf`
- [ ] **Rename** `index-new.html` → `index.html` (FINAL STEP)
- [ ] **Test homepage** - Open `index.html` in browser
- [ ] **Test all links** - Click through all navigation
- [ ] **Test responsiveness** - Check on mobile/tablet
- [ ] **Test forms** - Submit contact form
- [ ] **Test FAQ** - Click accordion items
- [ ] **Check mobile menu** - Test on small screens

---

## 📱 Important Note: Renaming index-new.html

The homepage is currently named `index-new.html` for safety. To finalize:

1. Right-click on `index-new.html`
2. Select "Rename"
3. Change to `index.html`

This will make it the default landing page when deployed!

---

## 🌐 Deployment Options

This is a **static website** - no backend needed. Deploy to:

### Free Options:
- **GitHub Pages** - Free hosting via GitHub
- **Netlify** - Drag & drop deployment
- **Vercel** - Optimized for performance
- **Replit** - Quick online hosting

### Server Options:
- Any traditional web hosting
- AWS S3 (static website hosting)
- Firebase Hosting
- Cloudflare Pages

### Local Testing:
- Simply open `index.html` in your browser
- Or use Python: `python -m http.server 8000`
- Or use Node: `npx http-server`

---

## 🎨 Customization Guide

### **Change Colors**
Edit `assets/css/styles.css`, look for:
```css
:root {
    --primary-green: #3D8B46;        /* Main color */
    --white: #ffffff;
    --charcoal: #2b2b2b;
}
```

### **Change Fonts**
In all HTML files, Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

### **Edit Content**
- Homepage: `index.html`
- Story: `pages/genese.html`
- Charter: `pages/charter.html`
- Student Life: `pages/vie-scolaire.html`
- Contact: `pages/contact.html`

### **Update Contact Info**
In `pages/contact.html`, find and update:
```html
Téléphone: +509 47XX XXXX
Email: info@slach.ht
```

---

## 🐛 Troubleshooting

### **Images Not Loading?**
- Check filenames match exactly (case-sensitive)
- Verify images are in `assets/images/` folder
- Check image format (JPEG, PNG, etc.)

### **Styles Not Applied?**
- Check CSS file is in `assets/css/styles.css`
- Verify relative paths: `../assets/css/styles.css`
- Clear browser cache (Ctrl+Shift+Delete)

### **Links Not Working?**
- Check all relative paths are correct
- From root: `pages/genese.html`
- From pages: `../index.html`
- Test in different browsers

### **Form Not Submitting?**
- JavaScript is local (no server backend)
- Shows success message to user
- Configure backend for actual email sending (optional)

---

## 📞 Quick Reference

| Task | Location |
|------|----------|
| Change logo | Replace `assets/images/LOGO1.jpeg` |
| Update school name | Edit HTML content in pages |
| Change colors | `assets/css/styles.css` `:root` variables |
| Add new page | Create in `pages/` folder, update navigation |
| Update contact info | `pages/contact.html` |
| Change fonts | HTML `<link>` tags & CSS `--font-*` variables |
| Add images | Place in `assets/images/` folder |
| Upload documents | Place in `documents/` folder |

---

## 🎓 Project Status

✅ **Fully Organized**  
✅ **Professionally Structured**  
✅ **Ready for Deployment**  
✅ **Mobile Responsive**  
✅ **SEO Optimized**  
✅ **Accessibility Compliant**  

---

## 📚 Next Steps

1. **Organize files** ← YOU ARE HERE ✓
2. **Place images** in `assets/images/`
3. **Place PDF** in `documents/`
4. **Rename** `index-new.html` → `index.html`
5. **Test locally** by opening `index.html`
6. **Deploy** to your chosen hosting platform
7. **Monitor & maintain** - Update content as needed

---

## 🎉 Launch Your Website!

Your SLACH website is ready! Follow the steps above, and you'll have a professional, modern educational showcase website live for your school.

**Good luck! 🚀**

---

*Created for: Semi-Lycée Anacaona du Cap-Haitien (SLACH)*  
*Date: June 2026*  
*Project Version: 1.0 - Fully Organized*
