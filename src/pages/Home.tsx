import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Code, Cpu, GitHub, Linkedin } from 'react-feather';

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Vero – Realtime Chat Application",
      description: "A real-time chat system with personal/group messaging, file sharing, and live presence features. Built with Django Channels and HTMX for dynamic, asynchronous communication.",
      icon: <Activity className="w-6 h-6" />,
      tags: ["Python", "Django", "HTMX", "Redis", "Channels", "ASGI"],
      gradient: "from-primary via-accent to-secondary",
      github: "https://github.com/saahilll/vero"
    },
    {
      id: 2,
      title: "Little Garden – E-commerce Application",
      description: "A full-featured e-commerce platform with dynamic product catalog, category filtering, cart system, and order workflow. Implements session-aware cart and checkout logic with persistent user authentication.",
      icon: <Code className="w-6 h-6" />,
      tags: ["Python", "Django", "HTML", "CSS", "Git"],
      gradient: "from-secondary via-primary to-accent",
      github: "https://github.com/saahilll/little_garden"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features a sleek cyberpunk design, smooth animations, and dynamic content rendering. Implements best practices in UI/UX with a focus on performance.",
      icon: <Cpu className="w-6 h-6" />,
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git"],
      gradient: "from-accent via-secondary to-primary",
      github: "https://github.com/saahilll/portfolio"
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub className="w-5 h-5" />,
      url: 'https://github.com/saahilll',
      color: 'hover:text-[#2ea44f]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/saahill/',
      color: 'hover:text-[#0a66c2]'
    },
    {
      name: 'X',
      icon: <XIcon className="w-5 h-5" />,
      url: 'https://x.com/SaahilPandya',
      color: 'hover:text-[#000000]'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section id="hero" className="w-full h-screen relative">
        {/* Full screen image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
            style={{ 
              imageRendering: 'crisp-edges',
              clipPath: 'inset(0)',
            }}
            loading="eager"
          />
          {/* Gradient overlay only at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        </div>

        {/* Content Container - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-20">
          <div className="max-w-[2000px] mx-auto px-8 lg:px-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
                  <span className="text-text-primary drop-shadow-lg">Building the Future</span>
                </h1>
                <p className="text-lg md:text-xl text-text-secondary drop-shadow-lg max-w-xl">
                  Crafting intelligent solutions at the intersection of AI and engineering.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center items-center z-10">
          <motion.div 
            className="flex flex-col items-center space-y-2 px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <span className="text-text-secondary text-sm font-medium tracking-wide whitespace-nowrap">
              Scroll to explore
            </span>
            <motion.div
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-primary"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A showcase of what I've been building at the edge of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-surface/50 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-surface transition-all duration-500 min-h-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, ${project.gradient})` }}
                ></div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent p-[1px] mb-6">
                      <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-primary">
                        {project.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-text-primary group-hover:text-primary transition-colors mb-4">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-12">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-background/50 text-text-secondary border border-surface-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-8 right-8">
                      <a 
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-400 transition-colors flex items-center space-x-2"
                      >
                        <GitHub size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Connect <span className="text-primary">With Me</span>
            </h2>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Let's collaborate on exciting AI projects or discuss the future of technology. 
              Feel free to reach out through any of these platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 bg-surface/50 backdrop-blur-sm rounded-xl border border-surface-light/20 
                    transition-all duration-300 hover:scale-105 hover:bg-surface hover:border-primary/20 hover:shadow-neon-red`}
                  whileHover={{ y: -4 }}
                >
                  {/* Icon Background Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className={`p-4 rounded-full bg-surface-light/10 ${social.color} transition-colors duration-300`}>
                      {social.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">{social.name}</h3>
                    <p className="text-sm text-text-secondary">
                      {social.name === 'GitHub' && 'Check out my open-source projects'}
                      {social.name === 'LinkedIn' && 'Connect professionally'}
                      {social.name === 'X' && 'Follow my tech journey'}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Call to Action */}
            <div className="mt-16 pt-8 border-t border-surface-light/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-display font-semibold text-text-primary">
                  Looking for Collaboration?
                </h3>
                <p className="text-text-secondary max-w-xl mx-auto">
                  I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
                </p>
                <motion.a
                  href="mailto:saahilpandya@gmail.com"
                  className="inline-flex items-center px-6 py-3 mt-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full transition-all duration-300 hover:shadow-neon-red group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Send me an email</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;