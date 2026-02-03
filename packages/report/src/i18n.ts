import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import commonEn from '../public/locales/en/common.json'
import headerEn from '../public/locales/en/header.json'
import chartsEn from '../public/locales/en/charts.json'
import errorsEn from '../public/locales/en/errors.json'
import tablesEn from '../public/locales/en/tables.json'

import commonZh from '../public/locales/zh/common.json'
import headerZh from '../public/locales/zh/header.json'
import chartsZh from '../public/locales/zh/charts.json'
import errorsZh from '../public/locales/zh/errors.json'
import tablesZh from '../public/locales/zh/tables.json'

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
