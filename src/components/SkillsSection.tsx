import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 1 to 5
}

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });
  
// Animation variants
  const starVariants = {
    off: { opacity: 0, scale: 0.5 },
    on: { opacity: [0, 1], scale: [0.5, 1.2, 1], transition: { duration: 0.5 } }
  };
  
  return (
    <div ref={ref} className="space-y-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 font-medium">{skill.name}</span>
            <span className="text-xs text-gray-500">{skill.level}/5</span>
          </div>
          
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.i
                key={i}
                variants={starVariants}
                initial="off"
                animate={isInView && i < skill.level ? "on" : "off"}
                transition={{ delay: 0.1 * i + 0.1 * index }}
                className={`fa-solid fa-star ${i < skill.level ? 'text-yellow-300' : 'text-gray-700'}`}
              ></motion.i>
            ))}
          </div>
          
          {/* Skill level bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level * 20}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.1 * index }}
            className="h-1 bg-gray-700 rounded-full overflow-hidden"
          >
            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};