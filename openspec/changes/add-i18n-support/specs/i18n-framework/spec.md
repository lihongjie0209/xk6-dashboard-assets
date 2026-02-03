## ADDED Requirements

### Requirement: i18n library integration

The system SHALL integrate react-i18next and i18next libraries to provide internationalization infrastructure for both UI and Report packages.

#### Scenario: i18next initialization in UI package
- **WHEN** the UI application loads
- **THEN** i18next MUST be initialized with language detection, fallback to English, and namespace support

#### Scenario: i18next initialization in Report package
- **WHEN** the Report application loads
- **THEN** i18next MUST be initialized with language detection, fallback to English, and namespace support for Preact

#### Scenario: Translation key access
- **WHEN** a component requests a translation using a valid key
- **THEN** the system MUST return the translated string in the current language

#### Scenario: Missing translation fallback
- **WHEN** a translation key is not found in the current language
- **THEN** the system MUST fall back to the English translation

#### Scenario: Invalid translation key
- **WHEN** a translation key does not exist in any language
- **THEN** the system MUST return the key itself as the fallback value

### Requirement: Language detection

The system SHALL automatically detect the user's preferred language on first visit.

#### Scenario: Language preference exists in localStorage
- **WHEN** the application loads and localStorage contains a 'dashboard-language' key
- **THEN** the system MUST use that language regardless of browser settings

#### Scenario: No stored preference, browser language supported
- **WHEN** the application loads without a stored preference and navigator.language is 'zh' or 'zh-CN'
- **THEN** the system MUST set the language to Chinese

#### Scenario: No stored preference, browser language supported (English)
- **WHEN** the application loads without a stored preference and navigator.language is 'en' or 'en-US'
- **THEN** the system MUST set the language to English

#### Scenario: No stored preference, unsupported browser language
- **WHEN** the application loads without a stored preference and navigator.language is not 'zh' or 'en'
- **THEN** the system MUST fall back to English

### Requirement: Language switching

The system SHALL allow users to switch languages at runtime without page reload.

#### Scenario: User switches to Chinese
- **WHEN** user selects Chinese from the language selector
- **THEN** all UI text MUST immediately update to Chinese
- **AND** the preference MUST be saved to localStorage

#### Scenario: User switches to English
- **WHEN** user selects English from the language selector
- **THEN** all UI text MUST immediately update to English
- **AND** the preference MUST be saved to localStorage

#### Scenario: Language persistence across sessions
- **WHEN** user closes and reopens the application
- **THEN** the system MUST display content in the previously selected language

### Requirement: TypeScript type safety

The system SHALL provide TypeScript type definitions for all translation keys.

#### Scenario: Valid translation key usage
- **WHEN** a developer uses a valid translation key in TypeScript code
- **THEN** the TypeScript compiler MUST not report any errors
- **AND** IDE autocomplete MUST suggest available translation keys

#### Scenario: Invalid translation key usage
- **WHEN** a developer uses a non-existent translation key in TypeScript code
- **THEN** the TypeScript compiler MUST report a type error

#### Scenario: Namespace access
- **WHEN** a developer imports a specific translation namespace
- **THEN** TypeScript MUST enforce that only keys from that namespace are accessible

### Requirement: Namespace organization

The system SHALL organize translations into logical namespaces to improve maintainability.

#### Scenario: Common namespace access
- **WHEN** a component needs shared terms like "Save", "Cancel", "Loading"
- **THEN** it MUST access them from the 'common' namespace

#### Scenario: Feature-specific namespace access
- **WHEN** a component needs feature-specific translations
- **THEN** it MUST access them from the appropriate namespace (e.g., 'header', 'charts', 'errors')

#### Scenario: Multiple namespace usage
- **WHEN** a component needs translations from multiple namespaces
- **THEN** the system MUST allow accessing multiple namespaces simultaneously

### Requirement: Bundle optimization

The system SHALL minimize the bundle size impact of adding internationalization support.

#### Scenario: Production bundle size increase
- **WHEN** the application is built for production with i18n support
- **THEN** the gzipped bundle size increase MUST be less than 100KB for both languages combined

#### Scenario: Tree-shaking unused translations
- **WHEN** building for production
- **THEN** the build system MUST exclude translation keys that are not referenced in the code

### Requirement: Interpolation support

The system SHALL support variable interpolation in translated strings.

#### Scenario: Simple variable interpolation
- **WHEN** a translation contains a variable like "Hello {{name}}"
- **THEN** the system MUST replace {{name}} with the provided value

#### Scenario: Numeric interpolation
- **WHEN** a translation contains a numeric variable like "{{count}} items"
- **THEN** the system MUST replace {{count}} with the provided number formatted according to the current locale

#### Scenario: Multiple variable interpolation
- **WHEN** a translation contains multiple variables like "{{user}} added {{count}} items"
- **THEN** the system MUST replace all variables with their provided values
