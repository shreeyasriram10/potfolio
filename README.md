# Shreeya S - Professional Portfolio Website

A stunning, modern, and fully interactive personal portfolio website built with **HTML, CSS, and JavaScript** (no frameworks). Perfect for impressing recruiters, hackathon judges, and internship interviewers.

## 🎨 Features

### Design Elements
- **Dark Premium Theme**: Black and deep navy background with professional aesthetics
- **Glassmorphism Effects**: Modern glass-like cards with blur and transparency
- **Smooth Animations**: Fade-in, slide-in, floating, and glow effects
- **Gradient Accents**: Subtle blue/purple gradients throughout
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### Interactive Elements
- ✨ **Typing Animation**: Dynamic hero subtitle with cursor animation
- 🎯 **Smooth Scrolling**: Navigate sections smoothly with active nav highlighting
- 🌊 **Scroll Animations**: Cards and sections fade in as you scroll
- 🎮 **Hover Effects**: Interactive cards that lift and glow on hover
- 📱 **Mobile Menu**: Responsive hamburger menu for mobile devices
- 🎨 **Parallax Effects**: Subtle parallax scrolling in hero section
- 💬 **Contact Form**: Interactive contact form with success messaging

## 📂 File Structure

```
SHREE PORTFOLIO/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Using VS Code Live Server
1. Open the folder in VS Code
2. Install "Live Server" extension if not already installed
3. Right-click `index.html` and select "Open with Live Server"
4. The website will open in your default browser

### Option 2: Direct Browser Opening
1. Simply double-click `index.html` to open in your default browser
2. Or right-click and select "Open with" to choose a browser

### Option 3: Using Python Server
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000` in your browser.

## 🎯 Sections Included

1. **Navbar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching introduction with profile image
3. **About Section** - Brief bio with statistics
4. **Skills Section** - 8 key technical skills with icons
5. **Experience Section** - Vertical timeline of internships
6. **Projects Section** - 8 featured projects with descriptions
7. **Achievements Section** - 7 key accomplishments
8. **Contact Section** - Contact information and form
9. **Footer** - Social media links

## 🔧 Customization Guide

### Update Personal Information

**In `index.html`:**
- Change your name in the navbar logo (line ~20)
- Update hero title and subtitle (around line ~48-52)
- Modify contact information in the Contact Section (around line ~330-345)
- Update social links with your profiles

### Modify Skills
Replace the skills in the Skills Section (around line ~120-136):
```html
<div class="skill-card glass-effect">
    <i class="fab fa-python"></i>
    <h3>Your Skill Name</h3>
</div>
```

### Add/Update Projects
Edit the Projects Section (around line ~178-248):
```html
<div class="project-card glass-effect">
    <div class="project-icon"><i class="fas fa-icon-name"></i></div>
    <h3>Your Project Name</h3>
    <p>Your project description</p>
    <div class="project-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
    <a href="#" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
</div>
```

### Change Color Scheme
Edit the CSS variables in `styles.css` (lines 6-15):
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary gradient */
    --tertiary-color: #3b82f6;     /* Tertiary accent */
    --bg-primary: #0f172a;         /* Main background */
    /* ... more colors ... */
}
```

### Update Profile Image
Replace the placeholder image in the Hero Section:
```html
<img src="your-image-path.jpg" alt="Shreeya S">
```

You can use:
- Local image: `img/profile.jpg`
- URL: `https://example.com/image.jpg`
- Data URL: Base64 encoded image

### Enable Resume Download
In `script.js`, replace the resume button handler (around line ~290):
```javascript
resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with actual resume path
    window.location.href = 'path/to/your/resume.pdf';
});
```

### Update Typing Animation
In `script.js`, modify the `typingTexts` array (line ~7):
```javascript
const typingTexts = [
    "Your first text here",
    "Your second text here",
    "Your third text here",
];
```

## 🎨 Available Icons

The website uses **Font Awesome 6.4.0** icons. Browse available icons at:
- https://fontawesome.com/icons

To add icons:
```html
<i class="fas fa-icon-name"></i>        <!-- Solid icons -->
<i class="fab fa-brand-name"></i>       <!-- Brand icons -->
<i class="far fa-icon-name"></i>        <!-- Regular icons -->
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

The CSS automatically adapts to these breakpoints for optimal viewing.

## ⚡ Performance Features

- Lightweight (no dependencies or frameworks)
- Fast loading time
- Optimized animations (GPU-accelerated)
- Lazy-loaded scroll animations
- Mobile-first responsive design

## 🎬 Animation Types

1. **Fade In/Out**: Smooth opacity transitions
2. **Slide In**: Left/Right directional movement
3. **Float**: Gentle up-down movement
4. **Glow**: Pulsing shadow effects
5. **Scale & Rotate**: Icon transformations
6. **Typing**: Character-by-character text animation

## ♿ Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Respects `prefers-reduced-motion` setting
- High contrast text for readability
- ARIA labels (can be enhanced)

## 🔍 SEO Optimizations

- Semantic HTML headings
- Meta descriptions
- Alt text for images
- Proper heading hierarchy
- Mobile-friendly design

## 💡 Tips for Best Results

1. **Profile Image**: Use a high-quality headshot (300x300px minimum)
2. **Project Descriptions**: Keep them short and impactful (1-2 lines)
3. **Skills**: Highlight most relevant 8 skills
4. **Resume**: Have a PDF ready to link
5. **Social Links**: Ensure all links are valid and active
6. **Mobile Testing**: Test on real devices for best experience

## 📞 Contact Information

Update these in `index.html`:
- **Phone**: +91 9840787075 (line ~338)
- **Email**: shreeyas010@gmail.com (line ~345)
- **LinkedIn**: linkedin.com/in/shreeya010 (line ~352)

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in settings
4. Your site will be live at `yourusername.github.io/repo-name`

### Vercel (Free)
1. Connect your GitHub repository
2. Deploy automatically

### Netlify (Free)
1. Drag and drop your folder
2. Or connect GitHub for auto-deployment

### Traditional Hosting
Upload files via FTP to any web host.

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 📝 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Animations not working?
- Clear browser cache (Ctrl+Shift+Del)
- Check JavaScript console for errors (F12)
- Ensure all files are in the same directory

### Images not showing?
- Verify image file paths are correct
- Use absolute URLs for external images
- Check file permissions

### Form not working?
- Contact form is UI-only. To make it functional, add backend integration
- Recommend services: Formspree, Firebase, or Netlify Forms

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🌟 Credits

Built with modern web technologies:
- HTML5
- CSS3 (with advanced features like backdrop-filter, mix-blend-mode)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

---

**Last Updated**: April 18, 2026

**Version**: 1.0.0

**Made with ❤️ for Shreeya S**

For questions or customization help, refer to the code comments throughout the files.
