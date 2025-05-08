import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Shopify E-commerce Website",
      description: "A fully responsive e-commerce platform built with Shopify and custom JavaScript.",
      image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["Shopify", "JavaScript", "SCSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "A data visualization dashboard with real-time updates and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "D3.js", "Firebase"],
      link: "#"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "A cross-platform mobile application to track workouts and nutrition.",
      image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["React Native", "Redux", "Node.js"],
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      description: "A complete overhaul of a financial services company website.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["WordPress", "GSAP", "PHP"],
      link: "#"
    },
    {
      id: 5,
      title: "Project Management Tool",
      description: "A collaborative project management application with drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["Vue.js", "Express.js", "MongoDB"],
      link: "#"
    },
    {
      id: 6,
      title: "Photographer Portfolio",
      description: "A minimalist portfolio website for a professional photographer.",
      image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      technologies: ["Next.js", "Tailwind CSS", "GraphQL"],
      link: "#"
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-secondary/70 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my skills in web development and UI/UX design.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card bg-white rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <img 
                src={project.image} 
                alt={`${project.title} Project`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-light-gray text-secondary/80 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-primary font-medium hover:underline flex items-center">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
