import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  icon?: string;
}

export const SectionHeader = ({ title, icon }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px 0px' }}
      className="mb-6 flex items-center gap-3"
    >
      {icon && (
        <i className={`fa-solid ${icon} text-gray-300 text-xl`}></i>
      )}
      <h2 className="text-2xl font-bold text-gray-100 border-b border-gray-700 pb-2">
        {title}
      </h2>
    </motion.div>
  );
};