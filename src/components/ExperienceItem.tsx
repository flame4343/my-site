import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  achievements: string[];
  logoInitials: string;
}

export const ExperienceItem = ({ 
  company, 
  position, 
  period, 
  achievements,
  logoInitials
}: ExperienceItemProps) => {
  const [expanded, setExpanded] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div 
        className="p-5 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 cursor-pointer transition-all duration-300 hover:border-gray-600/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-4">
          {/* Company logo placeholder */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-gray-700">
            <span className="text-gray-100 font-bold text-lg">{logoInitials}</span>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <h3 className="text-xl font-bold text-gray-100">{company}</h3>
              <span className="text-sm text-gray-400 bg-gray-800/60 px-2 py-1 rounded-full">{period}</span>
            </div>
            
            <p className="text-blue-300 mb-3">{position}</p>
            
            {/* Toggle button */}
            <button className="text-gray-400 hover:text-gray-100 transition-colors">
              <i className={`fa-solid ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
            </button>
          </div>
        </div>
        
        {/* Achievements list with animation */}
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={expanded ? { maxHeight: '500px', opacity: 1 } : { maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mt-4 overflow-hidden"
        >
          <ul className="space-y-2 pl-16">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={expanded && isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="text-gray-300 list-disc"
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};