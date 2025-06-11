/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
   const { t, i18n } = useTranslation('common');
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isLangOpen, setIsLangOpen] = useState(false);
   const langSwitcherRef = useRef(null);

   const navLinks = [
      { id: '/', text: t('home') },
      { id: '/about', text: t('about') },
      { id: '/projects', text: t('projects') },
      { id: '/contact', text: t('contact') },
   ];

   // Close language dropdown when clicking outside
   useEffect(() => {
      const handleClickOutside = event => {
         if (langSwitcherRef.current && !langSwitcherRef.current.contains(event.target)) {
            setIsLangOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white shadow-lg fixed w-full z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               {/* <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            SachinYadav
          </Link> */}
               {/* <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            <span className="hidden md:inline">SachinYadav</span>
            <span className="md:hidden">SY</span>
          </Link> */}
               <Link to="/" className="flex items-center text-gray-800 hover:text-blue-600 transition-colors">
                  {/* Logo container */}
                  <div className="flex items-center">
                     {/* Logo icon - using a simple code bracket as example */}
                     <div className="mr-2 flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                           <path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6z" />
                           <path d="M9 8a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2h-4z" />
                        </svg>
                     </div>

                     {/* Text logo - responsive behavior */}
                     <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight hidden md:block">Sachin Yadav</span>
                        <span className="text-xl font-bold tracking-tighter md:hidden">SY</span>
                        <span className="text-xs text-gray-500 hidden md:block">MERN Stack Developer</span>
                     </div>
                  </div>
               </Link>

               {/* Desktop Menu */}
               <div className="hidden md:flex items-center space-x-8">
                  {navLinks.map(link => (
                     <NavLink
                        key={link.id}
                        to={link.id}
                        className={({ isActive }) => `text-gray-600 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-medium' : ''}`}
                     >
                        {link.text}
                     </NavLink>
                  ))}

                  {/* Language Switcher with Dropdown */}
                  <div className="relative" ref={langSwitcherRef}>
                     <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center text-gray-600 hover:text-blue-600">
                        {i18n.language.toUpperCase()}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                     </button>

                     <AnimatePresence>
                        {isLangOpen && (
                           <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg py-1 z-50"
                           >
                              <button
                                 onClick={() => {
                                    i18n.changeLanguage('en');
                                    setIsLangOpen(false);
                                 }}
                                 className={`block w-full text-left px-4 py-2 text-sm ${
                                    i18n.language === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                                 }`}
                              >
                                 English
                              </button>
                              <button
                                 onClick={() => {
                                    i18n.changeLanguage('hi');
                                    setIsLangOpen(false);
                                 }}
                                 className={`block w-full text-left px-4 py-2 text-sm ${
                                    i18n.language === 'hi' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                                 }`}
                              >
                                 हिंदी
                              </button>
                              <button
                                 onClick={() => {
                                    i18n.changeLanguage('de');
                                    setIsLangOpen(false);
                                 }}
                                 className={`block w-full text-left px-4 py-2 text-sm ${
                                    i18n.language === 'de' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                                 }`}
                              >
                                 Deutsch
                              </button>
                              <button
                                 onClick={() => {
                                    i18n.changeLanguage('fr');
                                    setIsLangOpen(false);
                                 }}
                                 className={`block w-full text-left px-4 py-2 text-sm ${
                                    i18n.language === 'fr' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                                 }`}
                              >
                                 French
                              </button>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>

               {/* Mobile Menu Button */}
               <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
                  aria-label="Toggle menu"
               >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
               </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
               {isMenuOpen && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.2 }}
                     className="md:hidden overflow-hidden"
                  >
                     <div className="pt-2 pb-4 space-y-2">
                        {navLinks.map(link => (
                           <NavLink
                              key={link.id}
                              to={link.id}
                              className={({ isActive }) =>
                                 `block px-3 py-2 ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`
                              }
                              onClick={() => setIsMenuOpen(false)}
                           >
                              {link.text}
                           </NavLink>
                        ))}

                        <div className="px-3 py-2 overflow-auto md:overflow-visible">
                           <div className="flex space-x-4">
                              <button
                                 onClick={() => i18n.changeLanguage('en')}
                                 className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                              >
                                 English
                              </button>
                              <button
                                 onClick={() => i18n.changeLanguage('hi')}
                                 className={`px-3 py-1 rounded ${i18n.language === 'hi' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                              >
                                 हिंदी
                              </button>
                              <button
                                 onClick={() => i18n.changeLanguage('fr')}
                                 className={`px-3 py-1 rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                              >
                                 French
                              </button>
                              <button
                                 onClick={() => i18n.changeLanguage('de')}
                                 className={`px-3 py-1 rounded ${i18n.language === 'de' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                              >
                                 Deutsch
                              </button>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </motion.nav>
   );
};

export default Header;
