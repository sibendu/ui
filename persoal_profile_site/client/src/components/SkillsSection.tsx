import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaSass, FaGitAlt } from 'react-icons/fa';
import { 
  LightbulbIcon, PencilRulerIcon, CodeIcon, RocketIcon 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { icon: <FaHtml5 className="text-4xl text-[#E44D26] mb-2" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-4xl text-[#264DE4] mb-2" />, name: 'CSS3' },
    { icon: <FaJs className="text-4xl text-[#F7DF1E] mb-2" />, name: 'JavaScript' },
    { icon: <FaReact className="text-4xl text-[#61DAFB] mb-2" />, name: 'React' },
    { icon: <FaNodeJs className="text-4xl text-[#68A063] mb-2" />, name: 'Node.js' },
    { icon: <FaFigma className="text-4xl text-[#F24E1E] mb-2" />, name: 'Figma' },
    { icon: <FaSass className="text-4xl text-[#CD6799] mb-2" />, name: 'Sass' },
    { icon: <FaGitAlt className="text-4xl text-[#F05033] mb-2" />, name: 'Git' }
  ];

  const processes = [
    { 
      icon: <LightbulbIcon className="text-2xl text-primary" />, 
      title: 'Discovery',
      description: 'Understanding project goals and requirements through detailed research.'
    },
    { 
      icon: <PencilRulerIcon className="text-2xl text-primary" />, 
      title: 'Design',
      description: 'Creating wireframes and visual designs focused on user experience.'
    },
    { 
      icon: <CodeIcon className="text-2xl text-primary" />, 
      title: 'Development',
      description: 'Building responsive, accessible, and performant websites.'
    },
    { 
      icon: <RocketIcon className="text-2xl text-primary" />, 
      title: 'Deployment',
      description: 'Testing and launching with ongoing support and optimization.'
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
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-secondary/70 max-w-2xl mx-auto">
            A collection of technologies and tools I've mastered throughout my career as a front-end developer and UX designer.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-pill bg-light rounded-lg p-4 text-center shadow-md"
              variants={itemVariants}
            >
              {skill.icon}
              <h3 className="font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">My Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <motion.div 
                key={index} 
                className="bg-light p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {process.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{process.title}</h4>
                <p className="text-secondary/70">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
