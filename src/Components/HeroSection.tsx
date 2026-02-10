import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/31679785/"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left"
          >

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
              Data Driven Leads That Power{' '}
              <span className="text-purple-400">
                Business Growth
              </span>
            </h1>

            {/* Sub Text */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Accurate B2B and B2C lead generation powered by reliable data and smart automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
              >
                Start Growing
              </Link>

              <Link
                to="/about"
                className="px-8 py-4 rounded-full border-2 border-white/40 hover:bg-white/10 text-white font-semibold transition-all duration-300"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
