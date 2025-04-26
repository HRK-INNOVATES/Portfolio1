# Portfolio Website

A modern professional portfolio website showcasing developer skills, projects, and contact capabilities with an emphasis on interactive and responsive design.

## Features

- Responsive design
- Dark/light theme switching
- Project showcase section
- Skills and about sections
- Contact form with EmailJS integration
- Interactive animations

## Tech Stack

- React with Vite
- TypeScript
- Tailwind CSS
- EmailJS for contact form
- Framer Motion for animations
- Lucide React for icons
- Shadcn UI components

## Deployment Instructions for Netlify

### 1. Set up a Netlify account

If you don't already have one, create an account at [Netlify](https://www.netlify.com/).

### 2. Connect to your Git repository

- Push your code to GitHub, GitLab, or Bitbucket
- In the Netlify dashboard, click "Add new site" > "Import an existing project"
- Connect to your Git provider and select your repository

### 3. Configure build settings

These settings should be automatically detected from the `netlify.toml` file, but you can verify they are correct:

- Build command: `npm run build`
- Publish directory: `dist/public`
- Functions directory: `netlify/functions`

### 4. Set up environment variables

In your Netlify site dashboard, go to Site settings > Environment variables and add:

- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

### 5. Deploy

Click "Deploy site" in the Netlify dashboard to deploy your application.

### Important Notes

- Make sure your EmailJS template is correctly configured with a recipient email address (this is set up in the EmailJS dashboard, not in your code)
- The contact form sends emails directly from the client-side to avoid server requirements
- For detailed analytics or server-side functions, you can expand the Netlify functions

## Local Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory with:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Start the development server with `npm run dev`
5. Open [http://localhost:5000](http://localhost:5000) to view it in the browser

## License

MIT