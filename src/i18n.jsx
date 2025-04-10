import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import all translation files
import enTranslations from './locales/en/common.json';
import hiTranslations from './locales/hi/common.json';
import frTranslations from './locales/fr/common.json';
import deTranslations from './locales/de/common.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources: {
      en: {
        common: enTranslations,
      },
      hi: {
        common: hiTranslations,
      },
      fr: {
        common: frTranslations,
      },
      de: {
        common: deTranslations,
      },
    },
    fallbackLng: "en", // Default language
    // debug: process.env.NODE_ENV === 'development', // Enable debug only in dev
    debug: true, // Enable debug only in dev
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ["localStorage", "navigator"], // Try localStorage first, then browser language
      caches: ["localStorage"], // Cache the language in localStorage
    },
    react: {
      useSuspense: false, // Set to true if you're using Suspense
    },
  });

export default i18n;
