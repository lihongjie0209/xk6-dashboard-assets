import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import commonEn from './locales/en/common.json'
import headerEn from './locales/en/header.json'
import chartsEn from './locales/en/charts.json'
import errorsEn from './locales/en/errors.json'
import tablesEn from './locales/en/tables.json'

import commonZh from './locales/zh/common.json'
import headerZh from './locales/zh/header.json'
import chartsZh from './locales/zh/charts.json'
import errorsZh from './locales/zh/errors.json'
import tablesZh from './locales/zh/tables.json'

const resources = {
  en: {
    common: commonEn,
    header: headerEn,
    charts: chartsEn,
    errors: errorsEn,
    tables: tablesEn,
  },
  zh: {
    common: commonZh,
    header: headerZh,
    charts: chartsZh,
    errors: errorsZh,
    tables: tablesZh,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'header', 'charts', 'errors', 'tables'],
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'dashboard-language',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  })

// Update HTML lang attribute on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng === 'zh' ? 'zh-CN' : 'en-US'
})

export default i18n
