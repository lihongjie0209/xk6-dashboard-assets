import 'react-i18next'

import commonEn from '../public/locales/en/common.json'
import headerEn from '../public/locales/en/header.json'
import chartsEn from '../public/locales/en/charts.json'
import errorsEn from '../public/locales/en/errors.json'
import tablesEn from '../public/locales/en/tables.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof commonEn
      header: typeof headerEn
      charts: typeof chartsEn
      errors: typeof errorsEn
      tables: typeof tablesEn
    }
  }
}
