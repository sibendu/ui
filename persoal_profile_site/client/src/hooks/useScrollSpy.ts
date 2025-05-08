import { useState, useEffect } from 'react';

interface ScrollSpyOptions {
  offset?: number;
}

export function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {}
): string {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const { offset = 0 } = options;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the current section
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
      
      // If we're at the very top of the page (before any sections), activate the first section
      if (scrollPosition < offset && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
      
      // If we're at the bottom of the page, set the last section as active
      if (window.innerHeight + scrollPosition >= document.body.offsetHeight - 100) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options]);
  
  return activeSection;
}
