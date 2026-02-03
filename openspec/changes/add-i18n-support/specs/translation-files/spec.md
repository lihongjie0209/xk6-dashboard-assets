## ADDED Requirements

### Requirement: Translation file structure

The system SHALL organize translation files in a hierarchical directory structure by language and namespace.

#### Scenario: English translation files location
- **WHEN** the build system looks for English translations
- **THEN** it MUST find them at packages/ui/public/locales/en/*.json and packages/report/public/locales/en/*.json

#### Scenario: Chinese translation files location
- **WHEN** the build system looks for Chinese translations
- **THEN** it MUST find them at packages/ui/public/locales/zh/*.json and packages/report/public/locales/zh/*.json

#### Scenario: Namespace file mapping
- **WHEN** code requests the 'common' namespace
- **THEN** the system MUST load translations from common.json in the active language directory

### Requirement: Translation completeness

The system SHALL ensure all translation keys exist in both English and Chinese languages.

#### Scenario: English translation availability
- **WHEN** any translation key is defined
- **THEN** it MUST have a corresponding English translation in the appropriate namespace file

#### Scenario: Chinese translation availability
- **WHEN** any translation key is defined in English
- **THEN** it MUST have a corresponding Chinese translation with the same key path

#### Scenario: Missing translation detection
- **WHEN** building for production
- **THEN** the build system SHOULD warn about missing translations in any language

### Requirement: Common namespace translations

The system SHALL provide a 'common' namespace containing frequently used terms across the application.

#### Scenario: Action verbs in common namespace
- **WHEN** a component needs action words like "Save", "Cancel", "Delete", "Export", "Close"
- **THEN** they MUST be available in common.json

#### Scenario: Status terms in common namespace
- **WHEN** a component needs status indicators like "Loading", "Error", "Success", "Warning"
- **THEN** they MUST be available in common.json

#### Scenario: Time-related terms in common namespace
- **WHEN** a component needs time-related terms like "Duration", "Time", "Start", "End", "Timestamp"
- **THEN** they MUST be available in common.json

### Requirement: Component-specific namespaces

The system SHALL provide feature-specific namespaces for domain-specific translations.

#### Scenario: Header namespace
- **WHEN** header components need translations for navigation, titles, or controls
- **THEN** they MUST be available in header.json

#### Scenario: Charts namespace
- **WHEN** chart components need translations for labels, axes, tooltips, or legends
- **THEN** they MUST be available in charts.json

#### Scenario: Errors namespace
- **WHEN** error handling code needs user-facing error messages
- **THEN** they MUST be available in errors.json

#### Scenario: Tables namespace
- **WHEN** table components need translations for column headers, pagination, or sorting controls
- **THEN** they MUST be available in tables.json

### Requirement: JSON format validation

The system SHALL validate that all translation files are valid JSON with correct structure.

#### Scenario: Valid JSON structure
- **WHEN** parsing any translation file
- **THEN** it MUST be valid JSON without syntax errors

#### Scenario: Consistent key structure
- **WHEN** comparing translation files across languages
- **THEN** they MUST have the same key structure (nested object paths must match)

#### Scenario: String values only
- **WHEN** processing translation values
- **THEN** all leaf values MUST be strings (not numbers, booleans, or objects)

### Requirement: Translation key naming conventions

The system SHALL enforce consistent naming conventions for translation keys.

#### Scenario: Camel case key names
- **WHEN** defining translation keys
- **THEN** they MUST use camelCase naming (e.g., "loadingMessage", not "loading_message" or "LoadingMessage")

#### Scenario: Descriptive key names
- **WHEN** creating new translation keys
- **THEN** they MUST be descriptive of their content or purpose (e.g., "errorNetworkTimeout" not "error1")

#### Scenario: Nested key organization
- **WHEN** multiple related translations exist
- **THEN** they SHOULD be grouped under a common parent key (e.g., "header.title", "header.subtitle")

### Requirement: Chinese translation quality

The system SHALL provide accurate and natural Chinese translations appropriate for technical content.

#### Scenario: Simplified Chinese usage
- **WHEN** displaying Chinese text
- **THEN** the system MUST use Simplified Chinese (zh-CN) characters, not Traditional Chinese

#### Scenario: Technical term translation
- **WHEN** translating technical terms like "dashboard", "metrics", "duration"
- **THEN** translations MUST use commonly accepted technical Chinese terms

#### Scenario: Consistent terminology
- **WHEN** the same English term appears in multiple places
- **THEN** it MUST be translated consistently to the same Chinese term throughout the application

### Requirement: Text length considerations

The system SHALL account for differences in text length between English and Chinese translations.

#### Scenario: UI layout with Chinese text
- **WHEN** displaying Chinese translations in UI components
- **THEN** the layout MUST accommodate potential text length differences without breaking or overflowing

#### Scenario: Button text with Chinese
- **WHEN** buttons contain Chinese text
- **THEN** they MUST remain readable and properly sized

#### Scenario: Tooltip text with Chinese
- **WHEN** tooltips contain Chinese text
- **THEN** they MUST wrap correctly and remain readable

### Requirement: Special characters and formatting

The system SHALL correctly handle special characters and formatting in translations.

#### Scenario: HTML entities in translations
- **WHEN** a translation contains HTML entities like &amp;, &lt;, &gt;
- **THEN** they MUST be properly escaped or rendered

#### Scenario: Line breaks in translations
- **WHEN** a translation needs a line break
- **THEN** it MUST use \n character which the system interprets correctly

#### Scenario: Interpolation markers preservation
- **WHEN** a translation contains interpolation markers like {{variable}}
- **THEN** they MUST be preserved exactly as-is in all languages
