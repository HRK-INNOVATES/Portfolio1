# Modern Portfolio Website 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://hritikinnovates.netlify.app/)
[![GitHub license](https://img.shields.io/github/license/yourusername/portfolio-website)](https://github.com/yourusername/portfolio-website/blob/main/LICENSE)

## 🔗 [View Live Demo](https://hritikinnovates.netlify.app/)

A modern, responsive, and interactive professional portfolio website showcasing developer skills, projects, and contact capabilities. Built with the latest web technologies and designed with a focus on user experience and accessibility.



## ✨ Features

- **Responsive Design**: Perfectly adapts to any device - mobile, tablet, or desktop
- **Dark/Light Theme**: Elegant theme switching with persistence via localStorage
- **Project Showcase**: Interactive gallery featuring highlighted development projects
- **Skills Visualization**: Clear and visually appealing presentation of technical skills
- **Interactive Contact Form**: Fully functional contact form with EmailJS integration
- **Smooth Animations**: Engaging animations using Framer Motion
- **Optimized Performance**: Fast loading times and optimized assets
- **Accessibility Focused**: WCAG compliant design elements
- **SEO Optimized**: Properly structured for search engine visibility

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite for lightning-fast builds
- **Language**: TypeScript for type safety and improved developer experience
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Shadcn UI components for consistent design
- **Email Integration**: EmailJS for serverless contact form functionality
- **Animation**: Framer Motion for smooth, physics-based animations
- **Icons**: Lucide React for beautiful, customizable icons
- **Deployment**: Netlify for continuous deployment and serverless functions

## 📁 Project Structure

The project follows a clean, maintainable structure:

```
portfolio-website/
├── client/                # Frontend code
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── data/          # Portfolio data and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and helpers
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main application component
├── server/                # Backend code (Express server)
├── shared/                # Shared types and utilities
├── netlify/
│   └── functions/         # Serverless functions for Netlify
└── netlify.toml           # Netlify configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5000](http://localhost:5000) to view it in the browser

## 🔄 Deployment

This project is configured for easy deployment to Netlify. The live version is deployed at:

👉 [https://your-portfolio-site-url.netlify.app/](https://your-portfolio-site-url.netlify.app/)

### Deployment Steps

1. Fork or clone this repository to your own GitHub account
2. Connect your GitHub repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`
4. Add the required environment variables in Netlify's dashboard
5. Deploy!

## 📱 Project Showcase

The project showcase section uses a dynamic card-based layout to highlight various development projects. Each project card includes:

- Project title and description
- Technologies used
- Interactive preview links
- Source code access via GitHub repository links

The repository links are implemented using the following component:
```jsx
<Button 
  variant="link" 
  className="text-primary hover:text-primary font-medium p-0 h-auto animated-underline"
  asChild
>
  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
    <Code className="w-4 h-4 mr-1.5" />
    Code
  </a>
</Button>
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

If you have any questions or would like to connect, feel free to reach out through the contact form on the live site or via:

- Email: hritik.innovates@gmail.com
- LinkedIn: [HRITIK SINGH](https://www.linkedin.com/in/hritiksingh751/)


---

Built with ❤️ using React, TypeScript, and Tailwind CSS
