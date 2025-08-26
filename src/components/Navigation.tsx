import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavigationProps {
  sections: string[];
  onNavigate: (section: string) => void;
}

export const Navigation = ({ sections, onNavigate }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const { scrollY } = useScroll();
  
  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = scrollY.get();
      
      // In a real implementation, we would check the position of each section
      // For this example, we'll just cycle through sections based on scroll position
      const sectionIndex = Math.min(
        Math.floor(currentPosition / 300),
        sections.length - 1
      );
      
      setActiveSection(sections[sectionIndex]);
    };
    
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [sections, scrollY]);
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-4">
          <ul className="flex gap-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => onNavigate(section)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    activeSection === section 
                      ? 'text-gray-100' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {section}
                  
                  {/* Active indicator */}
                  {activeSection === section && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};