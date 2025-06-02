import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'computer-vision' | 'llm' | 'real-time-ml' | 'open-source';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  category,
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'computer-vision':
        return 'bg-electric-blue text-space-black';
      case 'llm':
        return 'bg-deep-indigo text-stellar-white';
      case 'real-time-ml':
        return 'bg-cosmic-violet text-stellar-white';
      case 'open-source':
        return 'bg-neon-pink text-stellar-white';
      default:
        return 'bg-gray-700 text-stellar-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'computer-vision':
        return 'Computer Vision';
      case 'llm':
        return 'LLM';
      case 'real-time-ml':
        return 'Real-time ML';
      case 'open-source':
        return 'Open Source';
      default:
        return category;
    }
  };

  return (
    <motion.div 
      className="group relative glass-effect rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      {/* Project image with overlay */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent opacity-80"></div>
        
        {/* Category badge */}
        <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded ${getCategoryColor(category)}`}>
          {getCategoryLabel(category)}
        </span>
        
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none"></div>
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <h3 className="font-tech text-xl text-stellar-white mb-2 tracking-wide">{title}</h3>
        
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs glass-effect text-electric-blue rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project links */}
        <div className="flex justify-between items-center mt-4">
          {githubUrl && (
            <motion.a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} className="mr-1" />
              <span className="text-sm">Code</span>
            </motion.a>
          )}
          
          {demoUrl && (
            <motion.a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center px-3 py-1 rounded bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo <ArrowUpRight size={14} className="ml-1" />
            </motion.a>
          )}
        </div>
      </div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-lg border border-electric-blue/30 group-hover:border-electric-blue/60 transition-colors"></div>
    </motion.div>
  );
};