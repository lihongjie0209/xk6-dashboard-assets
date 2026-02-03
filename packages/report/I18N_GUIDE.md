# Internationalization (i18n) Guide - Report Package

## Overview

The Report package uses vanilla [i18next](https://www.i18next.com/) (not react-i18next) because it uses Preact instead of React. Translations are embedded directly in the single-file HTML report.

## Usage in Preact Components

Since we're using Preact, we use the i18next instance directly:

```tsx
import i18n from '../i18n'

function MyComponent() {
  // Access translations directly
  const text = i18n.t('common:loading')
  
  return <div>{text}</div>
}
```

## With Namespace

```tsx
import i18n from '../i18n'

function Chart({ panel, digest }) {
  return (
    <div>
      <h4>{panel.title}</h4>
      {!hasData && <p>{i18n.t('noData')}</p>}
    </div>
  )
}
```

## Dynamic Updates

To reactively update when language changes, use `useState` and `useEffect`:

```tsx
import { useState, useEffect } from 'preact/hooks'
import i18n from '../i18n'

function MyComponent() {
  const [text, setText] = useState(i18n.t('common:welcome'))
  
  useEffect(() => {
    const updateText = () => setText(i18n.t('common:welcome'))
    i18n.on('languageChanged', updateText)
    return () => i18n.off('languageChanged', updateText)
  }, [])
  
  return <p>{text}</p>
}
```

## Locale Formatting

Use the formatting utilities in `src/utils/i18n.ts`:

```tsx
import { formatDate, formatNumber } from '../utils/i18n'

function Summary({ digest }) {
  return (
    <div>
      <p>Date: {formatDate(digest.start)}</p>
      <p>Count: {formatNumber(digest.samples.length)}</p>
    </div>
  )
}
```

## Translation Files

Same structure as UI package:

```
packages/report/
└── public/
    └── locales/
        ├── en/
        │   ├── common.json
        │   ├── header.json
        │   ├── charts.json
        │   ├── errors.json
        │   └── tables.json
        └── zh/
            └── (same files)
```

## Build Process

The `vite-plugin-singlefile` plugin automatically inlines all assets, including translation JSON files, into the final HTML. No additional configuration needed.

## Key Differences from UI Package

| Feature | UI Package | Report Package |
|---------|-----------|----------------|
| Framework | React | Preact |
| i18n Library | react-i18next | i18next (vanilla) |
| Usage | `useTranslation()` hook | `i18n.t()` direct call |
| Build Output | Multiple files | Single HTML file |

## Adding Translations

1. Add keys to `public/locales/en/*.json`
2. Add Chinese translations to `public/locales/zh/*.json`
3. Use in components: `i18n.t('key')` or `i18n.t('namespace:key')`
4. Build: `npm run build`

## Testing

1. Build the report: `npm run build`
2. Open `dist/index.html` in browser
3. Click globe icon to change language
4. Language preference saves to localStorage
5. Close and reopen - language persists
