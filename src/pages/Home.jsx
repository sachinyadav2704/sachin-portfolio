/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import SEO from '../components/SEO';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import DeveloperIllustration from '../components/DeveloperIllustrations';
import CodeEditorIllustration from '../components/CodeEditorIllustrations';

const Home = () => {
   const { t, i18n } = useTranslation('common');

   const socialLinks = [
      {
         name: 'GitHub',
         url: 'https://github.com/sachinyadav2704',
         icon: <FaGithub className="w-6 h-6" />,
         color: 'hover:text-gray-800',
      },
      {
         name: 'LinkedIn',
         url: 'https://www.linkedin.com/in/sachin-yadav-b57426141/',
         icon: <FaLinkedin className="w-6 h-6" />,
         color: 'hover:text-blue-600',
      },
      {
         name: 'Email',
         url: 'mailto:sachin2704.yadav@gmail.com',
         con: <HiOutlineMail className="w-6 h-6" />,
         color: 'hover:text-red-500',
      },
   ];

   return (
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
         <SEO title={`${t('name')} | ${t('title')}`} description={t('meta_description')} />

         {/* Animated background elements */}
         <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
         </div>

         <div className="w-full max-w-7xl px-8 py-20 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Column - Content */}
               <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-blue-600 font-medium mb-4">
                     <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 mr-6">{t('greeting')}</span>
                     <span className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-600">{t('name')}</span>
                  </motion.p>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                     {t('i_am')}{' '}
                     <TypeAnimation
                        sequence={[
                           //   t("title"),
                           //   2000,
                           'MERN Developer',
                           2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-blue-600"
                     />
                  </h1>

                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.4 }}
                     className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                  >
                     {t('summary')}
                  </motion.p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                     <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                     >
                        {t('hire_me')}
                     </motion.a>

                     <motion.a
                        href="/Sachin_Yadav_MERN.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                     >
                        <FaFileDownload />
                        {t('download_cv')}
                     </motion.a>
                  </div>

                  {/* Social Links */}
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.6 }}
                     className="flex justify-center lg:justify-start gap-4 mt-8"
                  >
                     {socialLinks.map((link, index) => (
                        <motion.a
                           key={index}
                           href={link.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           whileHover={{ y: -5 }}
                           whileTap={{ scale: 0.9 }}
                           className={`text-gray-500 ${link.color} transition-all`}
                           aria-label={link.name}
                        >
                           {link.icon}
                        </motion.a>
                     ))}
                  </motion.div>
               </motion.div>

               {/* Right Column - Illustration */}
               <LazyMotion features={domAnimation}>
                  {/* <DeveloperIllustration /> */}
                  <CodeEditorIllustration />
               </LazyMotion>
               {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-30"></div>
              <img 
                src="/developer-illustration.svg" 
                alt={t('developer_illustration_alt')} 
                className="relative w-full h-auto"
              />
            </div>
            
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 left-0 bg-white shadow-lg rounded-full px-4 py-2 flex items-center"
              >
                <span className="text-sm font-medium text-gray-700">
                  {t('expert_in')}:
                </span>
                <div className="flex ml-2">
                  <img src="/react-icon.svg" alt="React" className="w-6 h-6 mx-1" />
                  <img src="/nodejs-icon.svg" alt="Node.js" className="w-6 h-6 mx-1" />
                  <img src="/redux-icon.svg" alt="Node.js" className="w-6 h-6 mx-1" />
                  <img src="/mongodb-icon.svg" alt="MongoDB" className="w-6 h-6 mx-1" />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div> */}
            </div>
         </div>
      </section>
   );
};

export default Home;
