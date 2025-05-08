import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Jason Miller</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-secondary/80 mb-6">Front-end Developer & UX Designer</h2>
            <p className="text-base md:text-lg text-secondary/70 mb-8 max-w-lg">
              I create beautiful, functional, and user-friendly digital experiences that help businesses grow and succeed online.
            </p>
            <div className="flex space-x-4">
              <a href="#portfolio" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition shadow-lg hover:shadow-xl">
                View Portfolio
              </a>
              <a href="#contact" className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition">
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Jason Miller, Front-end Developer" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
