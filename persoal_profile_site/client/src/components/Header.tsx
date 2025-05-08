import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-poppins text-secondary">
          Jason<span className="text-primary">.</span>Miller
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={`nav-link font-medium text-secondary hover:text-primary transition ${activeSection === link.href.substring(1) ? 'active-nav' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-secondary focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white w-full py-4 px-4 shadow-md transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={`font-medium text-secondary hover:text-primary transition py-2 ${activeSection === link.href.substring(1) ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
