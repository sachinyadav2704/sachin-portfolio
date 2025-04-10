/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import SEO from '../components/SEO';
import ProgressBar from '../components/ProgressBar';

const About = () => {
    const { t, i18n } = useTranslation('common');

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 95 },
    { name: 'React', icon: <SiReact className="text-blue-500" />, level: 90 },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 80 }
  ];

  const experienceItems = [
    {
      title: t('about_exp_jio_title'),
      company: 'Jio Platforms Limited',
      period: t('about_exp_jio_period'),
      description: t('about_exp_jio_description'),
      icon: <FaBriefcase className="text-blue-500" />
    },
    // Add other experience items
  ];

  const educationItems = [
    {
      degree: t('about_edu_degree'),
      institution: 'SRM Institute of Science and Technology',
      period: t('about_edu_period'),
      score: '78%',
      icon: <FaGraduationCap className="text-purple-500" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <SEO
        title={`${t('about')} | ${t('portfolio')}`}
        description={t('about_meta_description')}
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('about_heading')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about_subheading')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{t('about_me_title')}</h3>
              <div className="space-y-6">
                <p className="text-gray-700">{t('about_me_paragraph1')}</p>
                <p className="text-gray-700">{t('about_me_paragraph2')}</p>
                <p className="text-gray-700">{t('about_me_paragraph3')}</p>
              </div>

              {/* Skills */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <FaTools className="mr-2 text-blue-500" />
                  {t('about_skills_title')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="mr-3 text-xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="ml-auto text-gray-500">{skill.level}%</span>
                      </div>
                      <ProgressBar percentage={skill.level} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaBriefcase className="mr-2 text-blue-500" />
                {t('about_experience_title')}
              </h3>
              <div className="space-y-6">
                {experienceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-blue-200"
                  >
                    <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                        <p className="text-blue-600 font-medium">{item.company}</p>
                        <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaGraduationCap className="mr-2 text-purple-500" />
                {t('about_education_title')}
              </h3>
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-purple-200"
                  >
                    <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white"></div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">{item.degree}</h4>
                        <p className="text-purple-600 font-medium">{item.institution}</p>
                        <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                        <p className="text-gray-700">
                          <span className="font-medium">{t('about_education_score')}:</span> {item.score}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('about_tech_title')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full shadow-lg mb-3">
                  <FaCode className="w-8 h-8 text-blue-600" />
                </div>
                <span className="font-medium">Frontend</span>
                <span className="text-sm opacity-80">React, Redux, JavaScript</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full shadow-lg mb-3">
                  <FaServer className="w-8 h-8 text-blue-600" />
                </div>
                <span className="font-medium">Backend</span>
                <span className="text-sm opacity-80">Node.js, Express</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full shadow-lg mb-3">
                  <FaDatabase className="w-8 h-8 text-blue-600" />
                </div>
                <span className="font-medium">Database</span>
                <span className="text-sm opacity-80">MongoDB, MySQL</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full shadow-lg mb-3">
                  <FaTools className="w-8 h-8 text-blue-600" />
                </div>
                <span className="font-medium">Tools</span>
                <span className="text-sm opacity-80">Git, Docker, AWS</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;