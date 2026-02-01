# Roblox Scripting Portfolio Website

A modern, responsive portfolio website showcasing Roblox scripting abilities and projects.

## Features

- **Modern Design**: Clean, dark-themed interface with gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Interactive Elements**: Hover effects, skill bars, and mobile navigation
- **Contact Form**: Ready-to-use contact form (requires backend integration)

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Projects**: Showcase of featured Roblox scripting projects
4. **Skills**: Detailed skills and expertise with progress bars
5. **Contact**: Contact information and form

## Getting Started

### Prerequisites

No build tools required! This is a static website that runs directly in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
   - You can simply double-click the file, or
   - Use a local development server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
3. Navigate to `http://localhost:8000` in your browser

## Customization

### Update Personal Information

1. **Contact Links** (in `index.html`):
   - Update Roblox profile URL
   - Add Discord server invite
   - Add GitHub profile URL
   - Update email address

2. **Statistics** (in `index.html`):
   - Modify the numbers in the stats section
   - Update the stat labels as needed

3. **Projects** (in `index.html`):
   - Replace placeholder projects with your actual work
   - Update project descriptions and tech stacks
   - Add more or fewer project cards as needed

4. **Skills** (in `index.html`):
   - Adjust skill percentages
   - Add or remove skills
   - Update skill categories

### Styling

All styles are in `styles.css`. Key customizable variables:

```css
:root {
    --primary-color: #1a73e8;
    --secondary-color: #ea4335;
    --accent-color: #fbbc04;
    /* ... more variables */
}
```

### Colors and Themes

The website uses a dark theme by default. To change colors:
- Modify CSS variables in `:root` section of `styles.css`
- Adjust gradient definitions for different color schemes

## File Structure

```
RBLXPORT/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Features Breakdown

### Navigation
- Fixed navbar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Animations
- Scroll-triggered fade-in animations
- Skill bar progress animations
- Hover effects on cards and buttons
- Typing effect on code block (hero section)

### Responsive Design
- Mobile-first approach
- Breakpoints at 968px and 640px
- Optimized for tablets and phones

## Contact Form

The contact form is currently set up for frontend-only. To make it functional:

1. **Backend Integration**: Connect to a backend service (Node.js, PHP, etc.)
2. **Email Service**: Use services like EmailJS, Formspree, or SendGrid
3. **Serverless Functions**: Deploy using Vercel, Netlify Functions, or AWS Lambda

Example with EmailJS:
```javascript
// Add to script.js
emailjs.send('service_id', 'template_id', {
    name: name,
    email: email,
    message: message
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch and folder
4. Your site will be live at `username.github.io/repo-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployments on push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Tips

- Replace placeholder content with your actual projects and information
- Add screenshots or videos of your Roblox projects
- Consider adding a blog section to share scripting tutorials
- Link to actual Roblox games you've worked on
- Add testimonials from clients or collaborators

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ for Roblox developers