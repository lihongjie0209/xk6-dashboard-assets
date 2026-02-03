## Context

The xk6-dashboard-assets is a monorepo containing two main SPAs (UI and Report) built with React/Preact. The UI package provides real-time monitoring during test execution, while the Report package generates static HTML reports. Both packages share common components and utilities but are built separately. All user-facing text is currently hardcoded in English within component files.

**Current State:**
- Text strings are scattered throughout ~50+ component files
- No centralized i18n infrastructure exists
- Both packages (UI and Report) need separate but coordinated i18n implementation
- Assets are embedded into Go binary, so bundle size matters

**Constraints:**
- Must support both React (UI) and Preact (Report) ecosystems
- Bundle size impact should be minimal (translations add ~20-50KB per language)
- Language switching should work without page reload
- Default language is English to maintain backward compatibility
- No server-side rendering - purely client-side i18n

## Goals / Non-Goals

**Goals:**
- Implement production-ready i18n framework supporting Chinese and English
- Centralize all translatable strings into structured resource files
- Enable runtime language switching with instant UI updates
- Auto-detect user's browser language on first load
- Persist language preference across sessions
- Keep bundle size increase under 100KB
- Provide clear developer patterns for adding future languages

**Non-Goals:**
- Server-side translations (all translations are client-side)
- Right-to-left (RTL) language support
- Pluralization rules beyond English/Chinese (can be added later)
- Translation management system or automated translation workflows
- Dynamic/runtime translation loading (all languages bundled)

## Decisions

### 1. i18n Library: react-i18next + i18next

**Decision:** Use `react-i18next` for UI package and `i18next` directly for Report package.

**Rationale:**
- Industry standard with React ecosystem (2M+ weekly npm downloads)
- Works with both React and Preact (Preact via preact/compat)
- Lightweight core (~5KB gzipped)
- Supports all required features: namespaces, interpolation, language detection, fallback
- TypeScript support with typed translation keys
- No external dependencies on backend services

**Alternatives Considered:**
- `react-intl`: Heavier bundle size (~50KB), more focused on complex formatting
- `FormatJS`: Similar to react-intl, more enterprise-focused
- Custom solution: Would require implementing language switching, fallback, interpolation - reinventing the wheel

### 2. Translation File Structure: Namespace-based JSON

**Decision:** Organize translations into feature-based namespaces:
```
packages/ui/public/locales/
  en/
    common.json      # Shared terms, actions
    header.json      # Header component strings
    charts.json      # Chart-related labels
    errors.json      # Error messages
  zh/
    common.json
    header.json
    charts.json
    errors.json
```

**Rationale:**
- Namespaces prevent massive single JSON files
- Easier to code-split and lazy-load if needed
- Clear ownership (each namespace maps to a feature area)
- Reduces merge conflicts in team environments

**Alternatives Considered:**
- Single flat JSON file: Would become unwieldy (500+ keys)
- Component-based split: Too granular, would create 50+ files

### 3. Language Detection Strategy: Browser > localStorage > English

**Decision:** Detection order:
1. Check `localStorage.getItem('dashboard-language')`
2. If not set, check `navigator.language` (browser preference)
3. If not supported, fall back to English

**Rationale:**
- Respects explicit user choice (localStorage) first
- Provides good UX for new users via auto-detection
- Graceful fallback ensures app always works

**Alternatives Considered:**
- Only localStorage: Poor UX for first-time users
- Only browser detection: No way for users to override
- URL parameter: Would complicate routing and sharing

### 4. Language Selector Placement: Header component

**Decision:** Add language selector dropdown in the Header component, right side near theme toggle.

**Rationale:**
- Header is present on all pages
- Consistent with common web UI patterns
- Non-intrusive but discoverable
- Works for both UI and Report packages

**Alternatives Considered:**
- Footer: Less visible, users wouldn't find it
- Settings modal: Requires extra clicks, harder to discover
- Browser-only: Some users want to override browser settings

### 5. TypeScript Integration: Strict typing with declaration merging

**Decision:** Use TypeScript declaration merging to create typed translation keys:
```typescript
// i18n.d.ts
import 'react-i18next';
import en from './public/locales/en/common.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof en;
    };
  }
}
```

**Rationale:**
- Compile-time safety for translation keys
- Autocomplete in IDE
- Prevents typos in translation keys
- Refactoring support

**Alternatives Considered:**
- No typing: Too error-prone, no autocomplete
- Manual type definitions: Would drift from actual JSON files

### 6. Report Package Strategy: Embed i18n in HTML bundle

**Decision:** Report package will bundle all translations into the single HTML file using Vite's build process.

**Rationale:**
- Report is a single static HTML file (self-contained)
- Can't make additional HTTP requests for translation files
- Keeps report fully offline-capable

**Alternatives Considered:**
- Separate translation files: Would break single-file report model
- Go template variables: Would require Go-side language handling, not client-side

## Risks / Trade-offs

**Risk: Bundle size increase**
→ Mitigation: Use tree-shaking, only include used translations, compress JSON. Expected increase: ~40KB gzipped for 2 languages.

**Risk: Translation quality**
→ Mitigation: Start with English as source of truth, use professional translation for Chinese. Create translation guide with context for translators.

**Risk: Incomplete translations**
→ Mitigation: i18next automatically falls back to English key if translation missing. Use TypeScript strict mode to catch missing keys at compile time.

**Risk: Performance impact on language switching**
→ Mitigation: All languages are pre-loaded, switching is instant (just React re-render). Use React.memo() on translated components to minimize re-renders.

**Risk: Maintenance overhead**
→ Mitigation: Clear documentation on adding new strings. Linting rule to detect hardcoded strings. Consider adding i18n scanner tool to detect missing translations.

**Trade-off: All languages bundled**
We bundle all languages instead of lazy-loading. This increases initial bundle by ~40KB but simplifies implementation and avoids network requests. For a 2-language app, this is acceptable. If we add 10+ languages, revisit with lazy loading.

**Trade-off: No server-side language negotiation**
Since this is a pure client-side app embedded in Go binary, we can't do server-side language negotiation. Users must manually switch or rely on browser detection. This is acceptable given the architecture.

## Migration Plan

**Phase 1: Infrastructure (1-2 days)**
1. Install i18next dependencies in both packages
2. Create i18n configuration files
3. Set up TypeScript types
4. Create initial translation file structure with English baseline

**Phase 2: UI Components (3-4 days)**
5. Migrate Header, Footer, LoadingContainer components
6. Migrate Chart components and labels
7. Migrate Table components
8. Migrate Summary and Stat components
9. Test language switching in dev environment

**Phase 3: Chinese Translations (2 days)**
10. Translate all English strings to Chinese
11. Review with native speaker
12. Test Chinese UI for layout issues (longer text, character wrapping)

**Phase 4: Report Package (2 days)**
13. Apply same i18n patterns to Report package
14. Test static report generation in both languages

**Phase 5: Polish & Testing (1-2 days)**
15. Add language selector UI component
16. Implement localStorage persistence
17. End-to-end testing in both languages
18. Update documentation

**Rollback Strategy:**
- Changes are additive (English remains default)
- Can be feature-flagged if needed
- Git revert is straightforward since changes are isolated to new files + component updates

## Open Questions

**Q: Should we support language-specific number/date formatting?**
Currently using browser's built-in `Intl` API for numbers/dates. Do we need explicit locale formatting? Decision: Use `Intl.NumberFormat` with locale parameter - it's built-in and free.

**Q: How to handle dynamic text like error messages from backend?**
Backend is Go (xk6-dashboard), returns English error messages. Options: (1) Keep backend errors in English, (2) Add error code mapping. Decision: Keep backend errors in English for now - they're technical and developers understand English. Mark as future enhancement.

**Q: Should we add more languages beyond Chinese?**
Not in this change. Once Chinese is proven, adding new languages is straightforward (just new JSON files). Document the process for future contributors.
