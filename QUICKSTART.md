# Quick Start Guide - ClinixAI Landing Page

## 🚀 Get Started in 2 Minutes

### Step 1: Install Dependencies (if not already done)
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

That's it! Your landing page is now running locally.

---

## 🎨 What You'll See

### Landing Page Sections (in order):
1. **Navigation Bar** - Logo, menu links, and "Join Waitlist" button
2. **Hero Section** - Bold headline with two CTA buttons
3. **Statistics** - 3 cards showing market data
4. **Services** - 6 service cards in a grid
5. **Mission & Vision** - Two side-by-side cards
6. **Market Opportunity** - Growth projections
7. **Call to Action** - Waitlist signup section
8. **Footer** - Links, contact info, and branding

### 🎬 Animations to Watch For
- **Scroll down slowly** to see each section slide in from right to left
- **Hover over cards** to see lift and glow effects
- **Click navigation links** to see smooth scroll
- **Try mobile view** to see the hamburger menu

---

## 📱 Test Responsive Design

### In Your Browser (Chrome/Edge/Firefox):
1. Open DevTools (F12)
2. Click the device toggle button (Ctrl+Shift+M)
3. Test different devices:
   - iPhone 12 Pro (Mobile)
   - iPad Air (Tablet)
   - Desktop (1920x1080)

### What Changes:
- **Mobile**: Single column, hamburger menu
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: Full multi-column layout, enhanced animations

---

## 🛠️ Development Commands

```bash
# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linter
npm run lint
```

---

## 🎯 Quick Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: "#YOUR_COLOR" },
  secondary: { DEFAULT: "#YOUR_COLOR" },
}
```

### Edit Content
Navigate to `components/` folder and edit the respective component:
- `Hero.tsx` - Main headline
- `Services.tsx` - Service descriptions
- `Footer.tsx` - Contact information

### Adjust Animations
In any component, modify Framer Motion props:
```typescript
transition={{ duration: 0.8, delay: 0.2 }}
```

---

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Option 2: Manual Build
```bash
npm run build
```
Then upload the `.next` folder to your hosting provider.

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run lint

# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

## 💡 Tips

1. **Performance**: Keep the dev server running for hot reload
2. **Animations**: Use `once: true` in useInView to prevent re-animations
3. **Images**: Add images to `/public` folder and import them
4. **SEO**: Update metadata in `app/layout.tsx`
5. **Analytics**: Add tracking scripts in layout.tsx

---

## ✅ Checklist Before Going Live

- [ ] Test on mobile, tablet, and desktop
- [ ] Check all links work correctly
- [ ] Verify contact email and phone numbers
- [ ] Test Google Form integrations
- [ ] Check loading speed (Lighthouse)
- [ ] Update meta tags for SEO
- [ ] Add favicon in `/public`
- [ ] Test in different browsers
- [ ] Enable analytics (optional)
- [ ] Set up custom domain (optional)

---

**Need Help?** Check the [FEATURES.md](./FEATURES.md) for detailed implementation docs or [README.md](./README.md) for project overview.

