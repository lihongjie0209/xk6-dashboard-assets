## Why

The xk6-dashboard-assets provides real-time monitoring and reporting interfaces used by developers worldwide. Currently, all UI text is hardcoded in English, limiting accessibility for non-English speaking users, particularly in China where k6 adoption is growing. Adding internationalization support with Chinese and English languages will improve usability and expand the tool's reach to international audiences.

## What Changes

- Add i18n framework and infrastructure to support multiple languages
- Implement language detection and switching mechanism in both UI and Report packages
- Create translation files for Chinese (zh-CN) and English (en-US) languages
- Translate all user-facing text in components, headers, labels, messages, and tooltips
- Add language selector UI component in the header/settings area
- Store user's language preference (localStorage/browser preference)
- Ensure all generated reports can be rendered in the selected language

## Capabilities

### New Capabilities

- `i18n-framework`: Core internationalization infrastructure including library integration (e.g., react-i18next), translation file structure, and language detection/switching logic
- `translation-files`: Translation resource files for English and Chinese languages covering all UI strings, component labels, error messages, and static content
- `language-selector`: UI component allowing users to select and switch between supported languages with persistence across sessions

### Modified Capabilities

- `ui-components`: Existing UI components (Header, Footer, Table, Chart, Section, LoadingContainer, etc.) will be updated to use translation keys instead of hardcoded strings
- `report-generation`: Static report generation must support rendering in the user's selected language

## Impact

**Affected Code:**
- `packages/ui/src/` - All React components with user-facing text
- `packages/report/src/` - All Preact components and static HTML generation
- `packages/ui/src/components/Header/` - Add language selector component
- `packages/ui/src/components/Footer/` - Update footer text
- `packages/ui/src/components/LoadingContainer/` - Update loading messages
- `packages/report/index.html` - Report template with i18n support

**Dependencies:**
- Add i18n library dependency (e.g., `react-i18next`, `i18next`)
- Add TypeScript type definitions for translations

**Browser APIs:**
- Use `localStorage` for language preference persistence
- Use `navigator.language` for automatic language detection

**Configuration:**
- May need to add default language configuration option
- Translation files will be bundled with the embedded assets

**Breaking Changes:**
None - this is an additive feature with English as the default language
