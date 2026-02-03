# Internationalization (i18n) Guide

## Overview

This project uses [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/) for internationalization support. Currently supported languages:

- English (en)
- Simplified Chinese (zh)

## File Structure

```
packages/ui/
├── src/
│   ├── i18n.ts          # i18n configuration
│   ├── i18n.d.ts        # TypeScript type definitions
│   └── utils/
│       └── i18n.ts      # Locale formatting utilities
└── public/
    └── locales/
        ├── en/          # English translations
        │   ├── common.json
        │   ├── header.json
        │   ├── charts.json
        │   ├── errors.json
        │   └── tables.json
        └── zh/          # Chinese translations
            ├── common.json
            ├── header.json
            ├── charts.json
            ├── errors.json
            └── tables.json
```

## Adding Translations

### 1. Add Translation Keys

Add new keys to the appropriate namespace JSON file:

**English** (`public/locales/en/common.json`):
```json
{
  "welcome": "Welcome",
  "newKey": "New translation"
}
```

**Chinese** (`public/locales/zh/common.json`):
```json
{
  "welcome": "欢迎",
  "newKey": "新翻译"
}
```

### 2. Use in Components

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation('common')
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('newKey')}</p>
    </div>
  )
}
```

### 3. Use Different Namespaces

```tsx
import { useTranslation } from 'react-i18next'

function HeaderComponent() {
  // Specify namespace
  const { t } = useTranslation('header')
  
  return <button>{t('report')}</button>
}
```

### 4. Interpolation

```tsx
// Add to translation file:
// "greeting": "Hello, {{name}}!"

const { t } = useTranslation('common')
return <p>{t('greeting', { name: 'John' })}</p>
// Renders: "Hello, John!"
```

## Locale Formatting

Use the formatting utilities in `src/utils/i18n.ts` for locale-aware formatting:

```tsx
import { formatDate, formatNumber, formatDuration, formatBytes } from 'utils/i18n'

// Format dates
formatDate(new Date())  // "Jan 1, 2024" or "2024年1月1日"

// Format numbers
formatNumber(1234.56)   // "1,234.56" or "1,234.56"

// Format durations
formatDuration(5400000) // "1h 30m"

// Format bytes
formatBytes(1024000)    // "1 MB"
```

## Translation Namespaces

### common.json
General UI terms, action verbs, status messages
- `loading`, `save`, `cancel`, `delete`, `export`, `close`
- `error`, `success`, `warning`
- `reset`, `apply`, `confirm`

### header.json
Navigation and header-specific text
- `report`, `help`
- `lightMode`, `darkMode`
- `refreshRate`, `duration`
- `selectLanguage`

### charts.json
Chart-related labels and messages
- `tooltip`, `legend`
- `xAxis`, `yAxis`
- `noData`

### errors.json
Error messages
- `networkError`, `unknownError`
- `loadingFailed`, `invalidData`

### tables.json
Table headers and controls
- `columnHeader`
- `sortAscending`, `sortDescending`
- `noResults`, `rowsPerPage`

## Language Detection

The language is automatically detected from:

1. **localStorage**: Key `dashboard-language` (set by LanguageSelector)
2. **Browser language**: Falls back to `navigator.language`
3. **Default**: English (`en`)

## Adding a New Language

1. Create new directory in `public/locales/` (e.g., `fr/` for French)
2. Copy all JSON files from `en/` directory
3. Translate all values (keep keys unchanged)
4. Update `src/i18n.ts` to include the new language in resources
5. Update `src/i18n.d.ts` types
6. Add the language option to `LanguageSelector` component

## Best Practices

### ✅ Do

- Use meaningful, descriptive key names: `resetTimeRange` not `btn1`
- Group related translations in appropriate namespaces
- Keep translation keys in English for consistency
- Use interpolation for dynamic values: `t('greeting', { name })`
- Format dates/numbers with locale utilities

### ❌ Don't

- Hardcode text in components: ❌ `<button>Save</button>`
- Use HTML in translation strings
- Translate key names
- Mix text and JSX in translation strings

## TypeScript Support

Type definitions provide autocomplete and type safety:

```tsx
const { t } = useTranslation('common')

// ✅ TypeScript knows 'loading' exists
t('loading')  

// ❌ TypeScript error: Key doesn't exist
t('nonexistentKey')
```

## Accessibility

Always provide translated `aria-label` for icon-only buttons:

```tsx
const { t } = useTranslation('header')

<IconButton 
  aria-label={t('openOptions')}
  name="menu" 
/>
```

## Testing Language Switching

1. Open the UI
2. Click the globe icon in the header
3. Select "中文" or "English"
4. Language preference is saved to localStorage
5. Reload page - language persists

## Troubleshooting

### Translations not showing

- Check if JSON files are in correct location
- Verify namespace is imported in `src/i18n.ts`
- Check browser console for i18next errors
- Ensure correct namespace is specified in `useTranslation()`

### Missing translation keys

- Add key to both `en/` and `zh/` JSON files
- Restart dev server
- Check TypeScript types are updated in `i18n.d.ts`
