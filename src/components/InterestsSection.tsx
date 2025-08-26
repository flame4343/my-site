import { motion } from 'framer-motion';

interface Interest {
  name: string;
  icon: string;
}

interface InterestsSectionProps {
  interests: Interest[];
}

export const InterestsSection = ({ interests }: InterestsSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, margin: '-100px 0px' }}
    >
      <div className="grid grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300"
          >
            <i className={`fa-solid ${interest.icon} text-gray-300 text-lg`}></i>
            <span className="text-gray-300">{interest.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};