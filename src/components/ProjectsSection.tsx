import { motion } from 'framer-motion';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          viewport={{ once: true, margin: '-100px 0px' }}
          className="p-5 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          <h3 className="text-xl font-bold text-gray-100 mb-3">{project.name}</h3>
          
          {/* Project image placeholder with star effect */}
          <div className="relative mb-4 rounded-lg overflow-hidden h-48 bg-gray-900 border border-gray-700">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={project.name}
                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <i className="fa-solid fa-code text-gray-700 text-5xl animate-pulse"></i>
              </div>
            )}
            
            {/* Decorative star elements */}
            <div className="absolute inset-0 pointer-events-none">
              <i className="fa-solid fa-star text-yellow-300 absolute top-3 left-3 animate-twinkle" style={{ animationDelay: '0s' }}></i>
              <i className="fa-solid fa-star text-blue-200 absolute bottom-4 right-6 animate-twinkle" style={{ animationDelay: '0.5s', fontSize: '0.8rem' }}></i>
              <i className="fa-solid fa-star text-purple-200 absolute top-1/2 left-1/3 animate-twinkle" style={{ animationDelay: '1s', fontSize: '0.6rem' }}></i>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          {/* Technologies tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Achievements list */}
          {project.achievements && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-200 mb-2">项目成果:</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fa-solid fa-check text-blue-400 mt-1 mr-2 text-xs"></i>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};