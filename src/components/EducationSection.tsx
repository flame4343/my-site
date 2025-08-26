import { motion } from 'framer-motion';

interface EducationItem {
  school: string;
  major: string;
  degree: string;
  period: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <div className="space-y-6">
      {education.map((item, index) => (
        <motion.div
          key={item.school}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          viewport={{ once: true, margin: '-100px 0px' }}
          className="p-5 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-100">{item.school}</h3>
            <span className="text-sm text-gray-400 bg-gray-800/60 px-2 py-1 rounded-full">{item.period}</span>
          </div>
          <p className="text-gray-300">{item.major} - {item.degree}</p>
        </motion.div>
      ))}
    </div>
  );
};