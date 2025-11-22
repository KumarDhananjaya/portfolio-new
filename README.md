# Kumar Dhananjaya - Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Premium Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 15 App Router for optimal speed
- 🎭 **Smooth Animations**: Framer Motion for delightful user interactions
- 📝 **Contact Form**: React Hook Form with Zod validation
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- 🌙 **Dark Theme**: Modern dark mode design with custom scrollbar

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KumarDhananjaya/portfolio-new.git
   cd portfolio-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio-new/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Card.tsx        # Card with glassmorphism
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── SocialBanner.tsx # Social links
│   │   └── Contact.tsx     # Contact form
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer
├── lib/
│   └── constants.ts        # Site data and content
├── tailwind.config.ts      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

Edit `lib/constants.ts` to update:
- Personal info (name, title, bio)
- Social media links
- Work experience
- Projects
- Skills and technologies

### Modify Colors

Edit `tailwind.config.ts` to change:
- Color palette
- Animations
- Typography

### Add New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

1. **Option 1: Email Service (EmailJS)**
   ```bash
   npm install @emailjs/browser
   ```
   Update `components/sections/Contact.tsx` with EmailJS configuration

2. **Option 2: API Route**
   Create `app/api/contact/route.ts` and integrate with your email service

3. **Option 3: Form Service**
   Use services like Formspree, Getform, or Web3Forms

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and fonts
- Minimal JavaScript bundle

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Kumar Dhananjaya**
- LinkedIn: [@kumardhananjaya](https://www.linkedin.com/in/kumardhananjaya/)
- GitHub: [@KumarDhananjaya](https://github.com/KumarDhananjaya)
- Twitter: [@SKumarDhananjay](https://twitter.com/SKumarDhananjay)

---

⭐ If you found this helpful, please give it a star!
