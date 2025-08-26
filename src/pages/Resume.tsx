import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { StarryBackground } from '@/components/StarryBackground';
import { SectionHeader } from '@/components/SectionHeader';
import { PersonalStatement } from '@/components/PersonalStatement';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceItem } from '@/components/ExperienceItem';
import { ProjectsSection } from '@/components/ProjectsSection';
import { InterestsSection } from '@/components/InterestsSection';
import { Navigation } from '@/components/Navigation';

// Personal information data
const personalInfo = {
  name: "冯泽邦",
  title: "工程师",
  statement: "深耕工程算法领域，具备丰富的团队管理与项目落地经验，核心团队涵盖数据湖搭建、数据挖掘及工程应用，并在甲方沟通与需求落地方面积累了扎实经验。多次获得国家发明创业奖、测绘科技奖等省部级奖励。性格开朗，待人真诚，吃苦耐劳；有足够的学习能力与积极性，对工作与科研认真负责有耐心，有坚忍不拔的精神，目标意识强，动手能力强；有良好的团队能力，抗压能力强，有优秀的解决问题能力。喜欢探索和尝试前沿技术，善于结合多种思路实现算法落地。",
  contacts: [
    { type: "email", value: "1801210364@pku.edu.cn", icon: "fa-envelope" },
    { type: "phone", value: "15010257166", icon: "fa-phone" },
    { type: "github", value: "github.com/flame4343", icon: "fa-github" },
    { type: "location", value: "北京", icon: "fa-map-marker-alt" },
    { type: "scholar", value: "Google Scholar", icon: "fa-graduation-cap" }
  ]
};

// Skills data
const skillsData = [
  { name: "TensorFlow", level: 4 },
  { name: "PyTorch", level: 4 },
  { name: "Python", level: 5 },
  { name: "C++", level: 4 },
  { name: "机器学习", level: 5 },
  { name: "大数据", level: 4 },
  { name: "图神经网络", level: 4 },
  { name: "深度学习", level: 5 },
  { name: "Java", level: 3 },
  { name: "数据挖掘", level: 5 }
];

// Education data
const educationData = [
  {
    school: "北京大学",
    major: "电子与通信工程",
    degree: "硕士",
    period: "2018.09 - 2021.07"
  },
  {
    school: "北京工业大学",
    major: "软件工程",
    degree: "本科",
    period: "2014.09 - 2018.07"
  }
];

// Work experience data
const experienceData = [
  {
    company: "北京四维图新科技股份有限公司",
    position: "算法工程师",
    period: "2021.07 - 至今",
    achievements: [
      "近五年在人工智能领域发表论文10余篇，其中4篇发表于JCR一区期刊，2篇为国际顶级会议论文",
      "已授权发明专利4项，另有11项专利处于受理中",
      "熟悉tensorflow、pytorch、sklearn等机器学习框架",
      "熟悉mysql、Mongodb、hadoop、hive、spark等大数据工具",
      "熟悉图神经网络（GCN、GAT等），集成算法（XGBoost、LightGBM等）",
      "熟悉时序预测（RNN、LSTM），NLP（Transformer、Bert等），常见推荐算法"
    ],
    logoInitials: "四"
  }
];

// Projects data
const projectsData = [
  {
    name: "动态交通服务（RTTI）",
    description: "负责带领团队支持丰田、宝马、大众等KA客户动态交通服务算法交付和改善，涵盖预计到达时间（ETA）、红绿灯倒计时（SPAT）等核心AI能力。从0到1构建ETA、SPAT业务体系，主导方案设计、数据处理、算法建模与推理部署。",
    technologies: ["ETA", "SPAT", "AI", "机器学习", "数据挖掘"],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=traffic%20light%20system%20with%20data%20visualization%20interface%20showing%20real-time%20traffic%20data%20dark%20background%20with%20starlight%20effect&sign=fef4ba7f6815e37b9ec99e38b6152c49",
    achievements: [
      "服务上线主流车企，日请求量超1亿",
      "SMAPE精度达13.37%、负向率0.36%",
      "在4核CPU、8G内存环境下达600+QPS，TP99<3ms",
      "召回率从66%提升到74%，周期3s准确率从97%提升到99%"
    ]
  },
  {
    name: "导航算路服务（Routing）",
    description: "负责带领团队支持丰田、宝马等KA客户导航算路服务算法交付和改善，覆盖路径召回（CRP AI权）与路径排序（Route Ranker）两大核心模块。",
    technologies: ["路径规划", "AI算法", "LightGBM", "DeepWalk", "DBSCAN"],
    achievements: [
      "Top3路径召回率由67.93%提升至71.36%",
      "首条最优率从63.91%提升至65.41%"
     ],
     imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=navigation%20route%20planning%20system%20with%20map%20visualization%20dark%20theme%20starlight%20effect&sign=458717ed673881b6898f920642ec08b3"
  },
  {
    name: "轨迹数据湖平台",
    description: "主导轨迹大数据平台从0到1的整体建设，负责架构设计、技术选型与数据质量评估体系构建，为导航服务、POI挖掘、路网挖掘等核心业务提供高质量数据支撑。",
    technologies: ["Spark", "Hadoop", "数据挖掘", "Flask", "数据可视化"],
    achievements: [
      "平台日均处理轨迹数据超1200万条",
      "数据一致性与稳定性显著提升"
     ],
     imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=big%20data%20lake%20platform%20data%20flow%20visualization%20dark%20background%20starlight%20effect&sign=24c917dd11c274ae5bf776e57cd8ba82"
  },
  {
    name: "车企定制项目",
    description: "带领团队支持丰田、宝马等KA客户定制化POC项目开发，涵盖个性化目的地预测与导航播报智能体。负责整体方案设计、数据建模与业务落地。",
    technologies: ["DBSCAN", "随机森林", "LLM", "Prompt工程", "SFT", "DPO"],
    achievements: [
      "为20万+月活用户提供稳定服务",
      "实现语音播报从模板向语义生成的跃迁"
     ],
     imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=car%20navigation%20system%20voice%20assistant%20interface%20dark%20theme%20with%20starlight%20effect&sign=e90d8ba567c5183de895adcd0aa04586"
  }
];

// Interests data
const interestsData = [
  { name: "技术探索", icon: "fa-lightbulb" },
  { name: "算法研究", icon: "fa-calculator" },
  { name: "团队协作", icon: "fa-users" },
  { name: "问题解决", icon: "fa-puzzle-piece" }
];

// Navigation sections
const navSections = ["关于我", "技能", "教育", "工作经历", "项目", "兴趣爱好"];

export default function Resume() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (section: string) => {
    const element = sectionRefs.current[section];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  // Create star particles on scroll
  useEffect(() => {
    const createStarParticles = () => {
      if (scrollY % 50 < 5) {
        const container = document.getElementById('resume-container');
        if (!container) return;
        
        const particle = document.createElement('i');
        particle.className = 'fa-solid fa-star star-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = '0.8';
        particle.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          particle.style.transition = 'opacity 1s ease-out';
          particle.style.opacity = '0';
          setTimeout(() => particle.remove(), 1000);
        }, 3000);
      }
    };
    
    createStarParticles();
  }, [scrollY]);
  
  return (
    <div className="relative min-h-screen">
      {/* Starry background */}
      <StarryBackground />
      
      {/* Navigation */}
      <Navigation 
        sections={navSections} 
        onNavigate={scrollToSection} 
      />
      
      {/* Main content container */}
      <div 
        id="resume-container"
        className="relative z-10 container mx-auto px-4 pt-24 pb-16"
        style={{ maxWidth: '1200px' }}
      >
        {/* Header with name and title */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2 tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-gray-300">{personalInfo.title}</p>
          
          {/* Contact information */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-400">
            {personalInfo.contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-1">
                <i className={`fa-solid ${contact.icon} text-gray-500`}></i>
                <span>{contact.value}</span>
              </div>))}
          </div>
        </motion.header>
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="md:col-span-1 space-y-12">
            {/* About me section */}
            <div ref={el => sectionRefs.current["关于我"] = el}>
              <SectionHeader title="关于我" icon="fa-user" />
              <PersonalStatement content={personalInfo.statement} />
            </div>
            
            {/* Skills section */}
            <div ref={el => sectionRefs.current["技能"] = el}>
              <SectionHeader title="技能栈" icon="fa-code" />
              <SkillsSection skills={skillsData} />
            </div>
            
            {/* Interests section */}
            <div ref={el => sectionRefs.current["兴趣爱好"] = el}>
              <SectionHeader title="兴趣爱好" icon="fa-heart" />
              <InterestsSection interests={interestsData} />
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-2 space-y-12">
            {/* Education section */}
            <div ref={el => sectionRefs.current["教育"] = el}>
              <SectionHeader title="教育背景" icon="fa-graduation-cap" />
              <EducationSection education={educationData} />
            </div>
            
            {/* Work experience section */}
            <div ref={el => sectionRefs.current["工作经历"] = el}>
              <SectionHeader title="工作经历" icon="fa-briefcase" />
              <div className="space-y-1">
                {experienceData.map((exp) => (
                  <ExperienceItem key={exp.company} {...exp} />
                ))}
              </div>
            </div>
            
            {/* Projects section */}
            <div ref={el => sectionRefs.current["项目"] = el}>
              <SectionHeader title="个人项目" icon="fa-project-diagram" />
              <ProjectsSection projects={projectsData} />
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: scrollY > 500 ? 1 : 0, y: scrollY > 500 ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-gray-800/50 hover:bg-gray-700/50 text-gray-100 p-3 rounded-full border border-gray-700 backdrop-blur-sm"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </motion.button>
      </div>
    </div>
  );
}