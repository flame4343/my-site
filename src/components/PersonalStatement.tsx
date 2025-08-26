import { motion } from 'framer-motion';

interface PersonalStatementProps {
  content: string;
}

export const PersonalStatement = ({ content }: PersonalStatementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, margin: '-100px 0px' }}
      className="text-gray-300 leading-relaxed"
    >
      <p>{content}</p>
      
      {/* Decorative separator */}
      <div className="my-6 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <i className="fa-solid fa-star text-gray-500 mx-4 animate-twinkle"></i>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>
    </motion.div>
  );
};