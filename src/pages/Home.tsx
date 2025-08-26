import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StarryBackground } from '@/components/StarryBackground';

export default function Home() {
 const navigate = useNavigate();
 
 return ( 
   <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
     {/* Starry background */}
     <StarryBackground />
     
     {/* Main content container */}
     <div className="relative z-10 w-full max-w-3xl px-6 py-12 text-center">
       {/* Welcome message */}
       <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: 'easeOut' }}
         className="mb-16"
       >
         <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">欢迎来到我的个人主页</h1>
         <p className="text-xl text-gray-300 leading-relaxed">
           我是一名充满热情的前端开发工程师，专注于创建优雅且功能强大的Web应用。
         </p>
       </motion.div>
       
       {/* CTA Button */}
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
         className="bg-transparent border border-gray-300 text-gray-100 rounded-full px-8 py-4 cursor-pointer transition-all duration-300"
       >
         查看我的简历
       </motion.button>
     </div>
   </div>
 );
}