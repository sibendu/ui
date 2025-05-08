import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-5/12 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=900" 
              alt="Jason working on web development" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto" 
            />
          </motion.div>
          
          <motion.div 
            className="md:w-7/12 md:pl-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </div>
            <p className="text-base md:text-lg text-secondary/80 mb-6">
              I'm a passionate front-end developer and UX designer with over 7 years of experience creating exceptional digital experiences. Based in San Francisco, I specialize in building responsive websites and applications that are both visually appealing and highly functional.
            </p>
            <p className="text-base md:text-lg text-secondary/80 mb-8">
              My approach combines clean code with thoughtful design principles to deliver solutions that exceed client expectations. I'm constantly learning and experimenting with new technologies to stay at the forefront of web development trends.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="mb-2"><strong className="font-medium">Name:</strong> Jason Miller</p>
                <p className="mb-2"><strong className="font-medium">Email:</strong> jason@example.com</p>
              </div>
              <div>
                <p className="mb-2"><strong className="font-medium">Location:</strong> San Francisco, CA</p>
                <p className="mb-2"><strong className="font-medium">Availability:</strong> Freelance & Full-time</p>
              </div>
            </div>
            <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition shadow-lg hover:shadow-xl inline-block">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
