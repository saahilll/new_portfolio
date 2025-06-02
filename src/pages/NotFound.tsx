import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-cyber-purple/20 blur-[100px]" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-cyber-blue/20 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24px,rgba(57,255,20,0.3)_25px),linear-gradient(90deg,transparent_24px,rgba(57,255,20,0.3)_25px)] bg-[size:25px_25px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-9xl font-display font-bold text-cyber-neon animate-glow">
            404
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-display text-white">
              System Malfunction
            </h2>
            <p className="text-white/80">
              The neural pathway you're looking for doesn't exist in the matrix.
            </p>
          </div>
          <div className="pt-8">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-cyber-neon text-cyber-dark hover:bg-cyber-neon/90 transition-all duration-300 font-cyber"
            >
              Return to Base
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyber-neon/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyber-neon/30" />
    </div>
  );
};

export default NotFound; 