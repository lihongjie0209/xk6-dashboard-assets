## ADDED Requirements

### Requirement: Report language selection

Static reports SHALL support language selection and rendering in the chosen language.

#### Scenario: Language persists in generated report
- **WHEN** a report is generated
- **THEN** it MUST default to the user's current language preference

#### Scenario: Report language switching
- **WHEN** viewing a generated static report
- **THEN** users MUST be able to switch language using the language selector

#### Scenario: Language setting in static HTML
- **WHEN** report HTML file is opened
- **THEN** it MUST detect language from localStorage or browser preference

### Requirement: Embedded translation resources

Report package SHALL embed all translation resources in the single HTML file.

#### Scenario: Self-contained translations
- **WHEN** the report HTML is generated
- **THEN** all translation files MUST be embedded within the HTML bundle

#### Scenario: No external translation requests
- **WHEN** the report is opened offline
- **THEN** it MUST NOT attempt to load translations from external files or URLs

#### Scenario: All languages available
- **WHEN** viewing the report
- **THEN** both English and Chinese translations MUST be available without additional downloads

### Requirement: Report component translation

All Report package components SHALL use translated text.

#### Scenario: Report header translation
- **WHEN** the report header renders
- **THEN** title, subtitle, and metadata labels MUST be translated

#### Scenario: Tab names translation
- **WHEN** report tabs are displayed
- **THEN** tab labels MUST be translated

#### Scenario: Chart titles translation
- **WHEN** charts are rendered in the report
- **THEN** chart titles, axes labels, and legends MUST be translated

#### Scenario: Summary table translation
- **WHEN** summary tables are displayed
- **THEN** column headers and row labels MUST be translated

#### Scenario: Usage instructions translation
- **WHEN** the report includes usage instructions
- **THEN** instruction text MUST be translated

### Requirement: Report metadata rendering

Report metadata and timestamps SHALL be formatted according to the selected language.

#### Scenario: Test start time formatting
- **WHEN** displaying test start time
- **THEN** it MUST be formatted using the current locale (e.g., "2026-02-03 14:30" or "2026年2月3日 14:30")

#### Scenario: Duration formatting
- **WHEN** displaying test duration
- **THEN** it MUST use locale-appropriate duration format

#### Scenario: Metric value formatting
- **WHEN** displaying numeric metrics
- **THEN** numbers MUST be formatted according to the current locale (e.g., "1,000.50" for English, "1,000.50" for Chinese)

### Requirement: Report print compatibility

Translated reports SHALL print correctly in all supported languages.

#### Scenario: Print layout with Chinese text
- **WHEN** printing a report with Chinese translations
- **THEN** the layout MUST remain intact without text overflow or wrapping issues

#### Scenario: Print layout with English text
- **WHEN** printing a report with English translations
- **THEN** the layout MUST remain identical to screen display

### Requirement: Report build process

The build process SHALL bundle i18n resources correctly for the Report package.

#### Scenario: Vite build with embedded translations
- **WHEN** running the Report package build
- **THEN** Vite MUST embed all translation JSON files into the output HTML

#### Scenario: Build output size
- **WHEN** the Report package is built with i18n
- **THEN** the HTML file size increase MUST be less than 50KB

#### Scenario: Production optimization
- **WHEN** building for production
- **THEN** translation resources MUST be minified and compressed

### Requirement: Consistent report behavior

Reports SHALL behave consistently with the UI package regarding language handling.

#### Scenario: Same language detection logic
- **WHEN** a report is opened
- **THEN** it MUST use the same language detection logic as the UI package

#### Scenario: Same localStorage key
- **WHEN** storing language preference
- **THEN** both UI and Report packages MUST use the same localStorage key 'dashboard-language'

#### Scenario: Consistent translation keys
- **WHEN** the same UI element appears in both packages
- **THEN** it MUST use the same translation key and produce identical translated text

### Requirement: Report accessibility

Translated reports SHALL maintain accessibility standards.

#### Scenario: HTML lang attribute
- **WHEN** displaying a report in Chinese
- **THEN** the HTML document lang attribute MUST be set to "zh-CN"

#### Scenario: HTML lang attribute for English
- **WHEN** displaying a report in English
- **THEN** the HTML document lang attribute MUST be set to "en-US"

#### Scenario: Screen reader compatibility
- **WHEN** using screen readers with translated reports
- **THEN** translations MUST be properly announced in the selected language

### Requirement: Report offline functionality

Reports SHALL function completely offline with full translation support.

#### Scenario: Offline language switching
- **WHEN** viewing a report without internet connection
- **THEN** language switching MUST work without any errors or degraded functionality

#### Scenario: Offline first-load
- **WHEN** opening a report for the first time offline
- **THEN** it MUST successfully detect language and display appropriate translations

### Requirement: Report file portability

Generated report files SHALL be portable across different systems and browsers.

#### Scenario: Cross-browser compatibility
- **WHEN** opening a report in different browsers (Chrome, Firefox, Safari, Edge)
- **THEN** translations MUST work identically in all browsers

#### Scenario: Cross-platform compatibility
- **WHEN** opening a report on different operating systems (Windows, macOS, Linux)
- **THEN** translations MUST display correctly without OS-specific issues

#### Scenario: File sharing
- **WHEN** sharing a report file with another user
- **THEN** the recipient MUST be able to switch languages and view translations without any setup
