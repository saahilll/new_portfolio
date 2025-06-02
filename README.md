# AI Engineer Portfolio

A modern, cyberpunk-themed portfolio website for AI Engineers, built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](public/images/preview.png)

## Features

- 🤖 Modern, cyberpunk-inspired design
- 🧠 Showcase AI/ML projects and expertise
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎨 Custom cyberpunk color scheme
- 📝 Blog section for sharing insights
- 📬 Contact form for potential clients

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-engineer-portfolio.git
cd ai-engineer-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Project Structure

```
ai-engineer-portfolio/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   └── Layout/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Customization

### Colors

The cyberpunk color scheme can be customized in `tailwind.config.js` and `src/index.css`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cyber': {
          'neon': '#39FF14',
          'purple': '#B026FF',
          'blue': '#00FFFF',
          'pink': '#FF10F0',
          'dark': '#0A0A0A',
          'darker': '#050505',
        }
      }
    }
  }
}
```

### Content

Update the content in the respective page components:

- `src/pages/Home.tsx` - Landing page content
- `src/pages/About.tsx` - Your background and skills
- `src/pages/Projects.tsx` - AI/ML projects showcase
- `src/pages/Blog.tsx` - Blog posts and articles
- `src/pages/Contact.tsx` - Contact form and information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Fonts: [Orbitron](https://fonts.google.com/specimen/Orbitron) and [Rajdhani](https://fonts.google.com/specimen/Rajdhani)
- Icons: Custom cyberpunk-themed icons
- Animations: [Framer Motion](https://www.framer.com/motion/)

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/ai-engineer-portfolio](https://github.com/yourusername/ai-engineer-portfolio) 