import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StarryBackground } from '@/components/StarryBackground';

export default function Landing() {
  const navigate = useNavigate();
  
  // Personal statement content
  const personalStatement = "我是一名工程师";
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Starry background */}
      <StarryBackground />
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-3xl px-6 py-12 text-center">
        {/* Personal statement with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="text-[clamp(1.5rem,5vw,2.5rem)] font-light text-gray-100 leading-relaxed">
            {personalStatement}
          </p>
        </motion.div>
        
        {/* CTA Button - Scroll to resume */}
        <motion.button
          onClick={() => navigate('/resume')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 0.5,
              duration: 0.8 
            } 
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
          }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center justify-center gap-2 bg-transparent border border-gray-300 text-gray-100 rounded-full px-8 py-4 cursor-pointer transition-all duration-300"
        >
          <span className="text-lg font-medium">进入简历</span>
          <i className="fa-solid fa-chevron-down animate-bounce" style={{ animationDuration: '2s' }}></i>
        </motion.button>
      </div>
    </div>
  );
}