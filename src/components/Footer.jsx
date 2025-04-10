/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation('common');
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sachinyadav2704',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sachin-yadav-b57426141/',
      icon: <FaLinkedin className="w-5 h-5" />
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com',
    //   icon: <FaTwitter className="w-5 h-5" />
    // },
    {
      name: 'Email',
      url: 'mailto:sachin2704.yadav@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />
    }
  ];

  const footerLinks = [
    { name: t('privacy_policy'), url: '/privacy' },
    { name: t('terms_of_service'), url: '/terms' },
    { name: t('contact'), url: '/contact' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {t('portfolio')}
            </h2>
            <p className="text-gray-300 text-center md:text-left">
              {t('footer_description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">{t('connect_with_me')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="mailto:sachin2704.yadav@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg transition-all"
            >
              {t('hire_me')}
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} {t('portfolio')}. {t('all_rights_reserved')}
          </p>
          <p className="mt-2">
            {t('made_with')} <span className="text-red-500">❤️</span> {t('using_react')}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;