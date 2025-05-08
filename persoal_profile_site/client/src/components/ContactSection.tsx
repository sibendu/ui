import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally connect to a backend to send the email
    // For now, we'll just simulate the process
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: <MapPin className="text-lg text-primary" />, 
      title: 'Location',
      content: 'San Francisco, California'
    },
    { 
      icon: <Mail className="text-lg text-primary" />, 
      title: 'Email',
      content: 'jason@example.com'
    },
    { 
      icon: <Phone className="text-lg text-primary" />, 
      title: 'Phone',
      content: '(123) 456-7890'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaDribbble />, href: '#', label: 'Dribbble' }
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-5/12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-base md:text-lg text-secondary/70 mb-8">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the contact form or the information provided.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-secondary/70">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-7/12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-light p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-secondary font-medium mb-2">Your Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary font-medium mb-2">Your Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-lg" 
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-secondary font-medium mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                  className="w-full px-4 py-3 rounded-lg" 
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-secondary font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Your message here..." 
                  className="w-full px-4 py-3 rounded-lg resize-none" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition shadow-md hover:shadow-lg w-full h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
