# ProveIt Landing Page

This is the landing page for ProveIt, a next-generation, project-based interview platform. The platform replaces traditional interview methods with realistic, project-based assessments for technical, design, managerial, and behavioral roles.

## Features

- Modern, responsive design built with Next.js and Tailwind CSS
- Mobile-friendly layout
- Smooth scrolling navigation
- Waitlist signup form with industry selection
- Dark mode support with toggle button
- Smooth transitions between light and dark themes

## Key Sections

1. **Hero Section** - Introduces ProveIt with a strong headline and call-to-action
2. **Problem Section** - Outlines the issues with traditional interview methods
3. **Solution Section** - Showcases how ProveIt transforms the interview experience
4. **Benefits Section** - Highlights advantages for both job seekers and recruiters
5. **Testimonials** - Social proof from users across different roles
6. **Waitlist Signup** - Form to capture early interest and feedback

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/proveit-landing.git
cd proveit-landing
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

### Setup

1. Create a new repository on GitHub
2. Push your code to the repository
3. In your repository settings, enable GitHub Pages:
   - Go to Settings > Pages
   - Set the Source to "GitHub Actions"

### Automatic Deployment

The site will automatically deploy to GitHub Pages when you push to the main branch. The deployment process:

1. Builds the Next.js application
2. Exports static files
3. Deploys to GitHub Pages
4. Makes the site available at `https://[username].github.io/proveit-landing`

### Manual Deployment

To trigger a manual deployment:

1. Go to your repository's Actions tab
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Geist Font](https://vercel.com/font) - Typography
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support

## License

This project is licensed under the MIT License - see the LICENSE file for details.
