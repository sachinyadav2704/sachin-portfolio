/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript } from 'react-icons/si';
import SEO from '../components/SEO';

const Projects = () => {
    const { t, i18n } = useTranslation('common');
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projects = [
    {
      id: 1,
      title: t('projects_jiofit_title'),
      description: t('projects_jiofit_description'),
      tags: ['React', 'Node.js', 'MongoDB'],
      code: 'https://github.com',
      demo: 'https://demo.com',
      image: '/project-jiofit.jpg',
      category: 'fullstack'
    },
    {
      id: 2,
      title: t('projects_reels_title'),
      description: t('projects_reels_description'),
      tags: ['React', 'Redux', 'TypeScript'],
      code: 'https://github.com',
      demo: 'https://demo.com',
      image: '/project-reels.jpg',
      category: 'frontend'
    },
    // Add more projects
  ];

  const projectCategories = [
    { name: 'all', label: t('projects_filter_all') },
    { name: 'frontend', label: t('projects_filter_frontend') },
    { name: 'backend', label: t('projects_filter_backend') },
    { name: 'fullstack', label: t('projects_filter_fullstack') }
  ];

  const techIcons = {
    'React': <SiReact className="text-blue-500" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'TypeScript': <SiTypescript className="text-blue-600" />
  };

  const handleProjectFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <SEO
        title={`${t('projects')} | ${t('portfolio')}`}
        description={t('projects_meta_description')}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('projects_heading')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('projects_subheading')}</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projectCategories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProjectFilter(category.name)}
              className={`flex items-center px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
              }`}
            >
              {category.name === 'all' && <FaFilter className="mr-2" />}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex space-x-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {techIcons[tag] && (
                            <span className="inline-block mr-1">
                              {techIcons[tag]}
                            </span>
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      {project.code && (
                        <motion.a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors"
                        >
                          <FaGithub className="mr-2" />
                          Code
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {t('projects_cta_title')}
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            {t('projects_cta_button')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;