## ADDED Requirements

### Requirement: Component translation integration

All UI components with user-facing text SHALL use translation keys instead of hardcoded strings.

#### Scenario: Header component translation
- **WHEN** the Header component renders
- **THEN** all text content MUST be loaded from translation keys

#### Scenario: Footer component translation
- **WHEN** the Footer component renders
- **THEN** all text content MUST be loaded from translation keys

#### Scenario: LoadingContainer translation
- **WHEN** the LoadingContainer displays a loading message
- **THEN** the message MUST be loaded from a translation key

#### Scenario: Chart component labels
- **WHEN** chart components render axes, legends, or tooltips
- **THEN** all labels MUST be loaded from translation keys

#### Scenario: Table component headers
- **WHEN** table components render column headers
- **THEN** all header text MUST be loaded from translation keys

### Requirement: useTranslation hook usage

Components SHALL use the useTranslation hook from react-i18next to access translations.

#### Scenario: Hook initialization
- **WHEN** a component needs translations
- **THEN** it MUST call const { t } = useTranslation() or const { t } = useTranslation('namespace')

#### Scenario: Translation key access
- **WHEN** rendering translated text
- **THEN** components MUST use {t('key')} or {t('namespace:key')} syntax

#### Scenario: Multiple namespace access
- **WHEN** a component needs translations from multiple namespaces
- **THEN** it MAY call useTranslation(['common', 'charts']) with an array of namespaces

### Requirement: Dynamic content handling

Components with dynamic content SHALL support interpolation in translations.

#### Scenario: Variable interpolation in Summary component
- **WHEN** Summary component displays counts or metrics
- **THEN** it MUST use t('key', { variable: value }) for interpolation

#### Scenario: Pluralization support
- **WHEN** displaying countable items (e.g., "1 test" vs "5 tests")
- **THEN** the system MUST support plural forms through translation keys with _one, _other suffixes

### Requirement: Icon-only components

Components with icons SHALL have accessible tooltip translations.

#### Scenario: Icon button tooltips
- **WHEN** an icon-only button is rendered
- **THEN** it MUST have a translated title or aria-label attribute

#### Scenario: Status icons with tooltips
- **WHEN** status icons are displayed
- **THEN** they MUST have translated tooltip text for accessibility

### Requirement: Error message translation

All error messages and user feedback SHALL be translated.

#### Scenario: Network error messages
- **WHEN** a network error occurs
- **THEN** the error message displayed to users MUST be translated

#### Scenario: Validation error messages
- **WHEN** validation fails
- **THEN** the error message MUST be translated

#### Scenario: Empty state messages
- **WHEN** displaying empty states or no-data messages
- **THEN** the message text MUST be translated

### Requirement: Time and number formatting

Components displaying dates, times, or numbers SHALL use locale-aware formatting.

#### Scenario: Date formatting
- **WHEN** displaying dates
- **THEN** the system MUST use Intl.DateTimeFormat with the current locale

#### Scenario: Number formatting
- **WHEN** displaying numbers
- **THEN** the system MUST use Intl.NumberFormat with the current locale

#### Scenario: Duration formatting
- **WHEN** displaying durations
- **THEN** the system MUST format them according to the current locale conventions

### Requirement: Component re-rendering on language change

Components SHALL automatically re-render when language changes.

#### Scenario: Automatic re-render on language switch
- **WHEN** user switches language
- **THEN** all components using useTranslation MUST automatically re-render with new translations

#### Scenario: No manual refresh needed
- **WHEN** language changes
- **THEN** users MUST NOT need to manually refresh the page to see translations

### Requirement: Preact compatibility (Report package)

Translation integration SHALL work with Preact components in the Report package.

#### Scenario: Preact component translation
- **WHEN** Report package components render
- **THEN** they MUST access translations using compatible i18next APIs

#### Scenario: Preact hooks compatibility
- **WHEN** using useTranslation in Preact
- **THEN** it MUST function identically to React version

### Requirement: Consistent component APIs

Translated components SHALL maintain their existing props and APIs.

#### Scenario: No breaking API changes
- **WHEN** adding translation support to existing components
- **THEN** component props and APIs MUST remain unchanged

#### Scenario: Backward compatibility
- **WHEN** components are updated with i18n support
- **THEN** they MUST function correctly in both languages without requiring parent component changes

### Requirement: Performance optimization

Translated components SHALL not introduce significant performance degradation.

#### Scenario: Render performance
- **WHEN** components with translations render
- **THEN** render time MUST NOT increase by more than 10% compared to hardcoded strings

#### Scenario: Memory usage
- **WHEN** translations are loaded
- **THEN** memory increase MUST be proportional to translation file size only

#### Scenario: Re-render optimization
- **WHEN** parent components re-render but language hasn't changed
- **THEN** child components with translations SHOULD use React.memo() or similar to avoid unnecessary re-renders
