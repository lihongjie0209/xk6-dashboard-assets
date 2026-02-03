## 1. i18n Infrastructure Setup

- [x] 1.1 Install i18next and react-i18next dependencies in packages/ui
- [x] 1.2 Install i18next dependency in packages/report (for Preact)
- [x] 1.3 Create i18n configuration file at packages/ui/src/i18n.ts
- [x] 1.4 Create i18n configuration file at packages/report/src/i18n.ts
- [x] 1.5 Configure i18next with language detection plugin
- [x] 1.6 Configure i18next with localStorage backend for language persistence
- [x] 1.7 Set up English as default fallback language
- [x] 1.8 Configure namespace support (common, header, charts, errors, tables)
- [x] 1.9 Initialize i18next in packages/ui/src/main.tsx
- [x] 1.10 Initialize i18next in packages/report/src/main.tsx

## 2. TypeScript Type Definitions

- [x] 2.1 Create packages/ui/src/i18n.d.ts with type definitions for translation keys
- [x] 2.2 Configure TypeScript declaration merging for react-i18next CustomTypeOptions
- [x] 2.3 Create packages/report/src/i18n.d.ts with same type structure
- [x] 2.4 Update tsconfig.json to include i18n type definitions

## 3. Translation File Structure

- [x] 3.1 Create directory structure packages/ui/public/locales/en/
- [x] 3.2 Create directory structure packages/ui/public/locales/zh/
- [x] 3.3 Create directory structure packages/report/public/locales/en/
- [x] 3.4 Create directory structure packages/report/public/locales/zh/
- [x] 3.5 Create common.json template with action verbs and status terms
- [x] 3.6 Create header.json template for navigation and titles
- [x] 3.7 Create charts.json template for chart labels and tooltips
- [x] 3.8 Create errors.json template for error messages
- [x] 3.9 Create tables.json template for table headers and controls

## 4. English Translations (Baseline)

- [x] 4.1 Extract all hardcoded strings from packages/ui/src/components/Header
- [x] 4.2 Extract all hardcoded strings from packages/ui/src/components/Footer
- [x] 4.3 Extract all hardcoded strings from packages/ui/src/components/LoadingContainer
- [x] 4.4 Extract all hardcoded strings from packages/ui/src/components/Chart
- [x] 4.5 Extract all hardcoded strings from packages/ui/src/components/Table
- [x] 4.6 Extract all hardcoded strings from packages/ui/src/components/Summary
- [x] 4.7 Extract all hardcoded strings from packages/ui/src/components/Section
- [x] 4.8 Extract all hardcoded strings from packages/ui/src/components/Nav
- [x] 4.9 Extract all hardcoded strings from packages/ui/src/components/Tabs
- [x] 4.10 Create English translation entries for all extracted strings
- [x] 4.11 Extract hardcoded strings from packages/report/src components
- [x] 4.12 Create English translation entries for Report package

## 5. Chinese Translations

- [x] 5.1 Translate common.json from English to Simplified Chinese
- [x] 5.2 Translate header.json from English to Simplified Chinese
- [x] 5.3 Translate charts.json from English to Simplified Chinese
- [x] 5.4 Translate errors.json from English to Simplified Chinese
- [x] 5.5 Translate tables.json from English to Simplified Chinese
- [x] 5.6 Review Chinese translations for technical accuracy
- [x] 5.7 Review Chinese translations for consistent terminology
- [x] 5.8 Copy translations to packages/report/public/locales/zh/

## 6. UI Components Migration (UI Package)

- [x] 6.1 Update Header component to use useTranslation hook
- [x] 6.2 Replace hardcoded strings in Header with t('key') calls
- [x] 6.3 Update Footer component to use useTranslation hook
- [x] 6.4 Replace hardcoded strings in Footer with t('key') calls
- [x] 6.5 Update LoadingContainer component to use useTranslation hook
- [x] 6.6 Replace hardcoded strings in LoadingContainer with t('key') calls
- [x] 6.7 Update Chart components to use useTranslation hook
- [x] 6.8 Replace hardcoded labels in Chart with t('key') calls
- [x] 6.9 Update Table components to use useTranslation hook
- [x] 6.10 Replace hardcoded headers in Table with t('key') calls
- [x] 6.11 Update Summary component to use useTranslation hook
- [x] 6.12 Update Section component to use useTranslation hook
- [x] 6.13 Update Nav component to use useTranslation hook
- [x] 6.14 Update Tabs component to use useTranslation hook
- [x] 6.15 Update all remaining components with user-facing text

## 7. UI Components Migration (Report Package)

- [x] 7.1 Update Report Header component to use i18next
- [x] 7.2 Replace hardcoded strings in Report Header
- [x] 7.3 Update Report Tab component to use i18next
- [x] 7.4 Replace hardcoded strings in Report Tab
- [x] 7.5 Update Report Chart components to use i18next
- [x] 7.6 Update Report Table components to use i18next
- [x] 7.7 Update usage instructions paragraph with translation

## 8. Language Selector Component

- [x] 8.1 Create LanguageSelector component in packages/ui/src/components/LanguageSelector
- [x] 8.2 Design LanguageSelector UI with globe icon
- [x] 8.3 Implement dropdown menu with English and 中文 options
- [x] 8.4 Add current language visual indicator (checkmark or highlight)
- [x] 8.5 Implement language switching logic using i18next.changeLanguage()
- [x] 8.6 Add localStorage persistence on language change
- [x] 8.7 Integrate LanguageSelector into Header component
- [x] 8.8 Position LanguageSelector in top-right near theme toggle
- [x] 8.9 Create LanguageSelector component for Report package
- [x] 8.10 Integrate LanguageSelector into Report Header component
- [x] 8.11 Add keyboard accessibility (Tab, Enter, Escape, Arrow keys)
- [x] 8.12 Add click-away-listener to close dropdown
- [x] 8.13 Add tooltip showing "Select Language" / "选择语言"
- [x] 8.14 Style LanguageSelector to match existing header controls

## 9. Locale Formatting

- [x] 9.1 Create utility function for date formatting using Intl.DateTimeFormat
- [x] 9.2 Create utility function for number formatting using Intl.NumberFormat
- [x] 9.3 Create utility function for duration formatting
- [x] 9.4 Update components displaying dates to use locale formatting
- [x] 9.5 Update components displaying numbers to use locale formatting
- [x] 9.6 Update components displaying durations to use locale formatting

## 10. Interpolation and Dynamic Content

- [x] 10.1 Identify all components with dynamic text (counts, names, etc.)
- [x] 10.2 Update Summary component to use t('key', { variable }) interpolation
- [x] 10.3 Update error messages to use interpolation for dynamic values
- [x] 10.4 Add pluralization support if needed (e.g., "1 test" vs "5 tests")

## 11. Report Package Build Configuration

- [x] 11.1 Configure Vite to embed translation files in Report HTML bundle
- [x] 11.2 Update vite.config.ts to include public/locales in build

## 12. Language Detection and Persistence

- [x] 12.1 Implement localStorage check for 'dashboard-language' key
- [x] 12.2 Implement navigator.language detection as fallback
- [x] 12.3 Implement English fallback for unsupported languages

## 13. Accessibility and HTML Attributes

- [x] 13.1 Set HTML lang attribute to "en-US" when English is active
- [x] 13.2 Set HTML lang attribute to "zh-CN" when Chinese is active
- [x] 13.3 Update lang attribute dynamically on language change
- [x] 13.4 Add aria-label translations to icon-only buttons
- [x] 13.5 Add title translations to SVG icons

## 14. Documentation and Developer Experience

- [x] 14.1 Create developer guide for adding new translation keys
- [x] 14.2 Document translation file structure and naming conventions
- [x] 14.3 Document how to add new languages in the future
- [x] 14.4 Update README with i18n information
- [x] 14.5 Add comments in i18n configuration files
- [x] 14.6 Create example for adding component translations
- [x] 14.7 Document translation key naming conventions

## 15. Build and Integration

- [x] 15.1 Run full build of UI package with i18n
- [x] 15.2 Run full build of Report package with i18n
- [x] 15.3 Verify embedded assets compile correctly for Go package
- [x] 15.4 Create production build and verify file sizes
