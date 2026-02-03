## ADDED Requirements

### Requirement: Language selector visibility

The system SHALL provide a visible language selector component accessible from all pages.

#### Scenario: Language selector in UI header
- **WHEN** viewing any page in the UI application
- **THEN** a language selector MUST be visible in the header component

#### Scenario: Language selector in Report header
- **WHEN** viewing the static report
- **THEN** a language selector MUST be visible in the report header

#### Scenario: Language selector positioning
- **WHEN** the header is displayed
- **THEN** the language selector MUST be positioned in the top-right area near the theme toggle

### Requirement: Language selector interaction

The system SHALL provide an intuitive interface for selecting languages.

#### Scenario: Opening language selector
- **WHEN** user clicks the language selector button
- **THEN** a dropdown menu MUST appear showing available languages

#### Scenario: Language option display
- **WHEN** the language dropdown is open
- **THEN** it MUST display "English" and "中文" options

#### Scenario: Current language indication
- **WHEN** viewing the language options
- **THEN** the currently active language MUST be visually indicated (e.g., checkmark, highlight)

#### Scenario: Selecting a language
- **WHEN** user clicks on a language option
- **THEN** the dropdown MUST close and the language MUST switch immediately

### Requirement: Language selector icon

The system SHALL use an appropriate icon to represent the language selector.

#### Scenario: Globe icon usage
- **WHEN** the language selector is displayed
- **THEN** it MUST show a globe icon or language icon (e.g., 🌐 or "A文" symbol)

#### Scenario: Icon accessibility
- **WHEN** user hovers over the language selector icon
- **THEN** a tooltip MUST appear with text "Select Language" / "选择语言"

#### Scenario: Icon button styling
- **WHEN** displaying the language selector icon
- **THEN** it MUST match the visual style of other header controls (theme toggle, etc.)

### Requirement: Language selector state

The system SHALL maintain and display the current language state.

#### Scenario: Current language label
- **WHEN** no dropdown is open
- **THEN** the language selector MAY display the current language code ("EN" / "中文") next to or instead of the icon

#### Scenario: Language code display
- **WHEN** the dropdown is closed
- **THEN** the button MUST indicate the current language through visual state

### Requirement: Keyboard accessibility

The system SHALL support keyboard navigation for the language selector.

#### Scenario: Tab navigation to selector
- **WHEN** user presses Tab key
- **THEN** focus MUST move to the language selector button in the expected order

#### Scenario: Opening with keyboard
- **WHEN** language selector is focused and user presses Enter or Space
- **THEN** the dropdown MUST open

#### Scenario: Arrow key navigation
- **WHEN** dropdown is open and user presses arrow keys
- **THEN** focus MUST move between language options

#### Scenario: Selecting with keyboard
- **WHEN** a language option is focused and user presses Enter
- **THEN** that language MUST be selected and the dropdown MUST close

#### Scenario: Closing with Escape
- **WHEN** dropdown is open and user presses Escape
- **THEN** the dropdown MUST close without changing the language

### Requirement: Mobile responsiveness

The system SHALL ensure the language selector works on mobile devices.

#### Scenario: Touch interaction
- **WHEN** user taps the language selector on a mobile device
- **THEN** the dropdown MUST open and be fully interactive

#### Scenario: Mobile layout
- **WHEN** viewing on mobile screen sizes
- **THEN** the language selector MUST remain visible and accessible in the header

#### Scenario: Mobile dropdown positioning
- **WHEN** dropdown opens on mobile
- **THEN** it MUST be positioned to avoid overflow off-screen

### Requirement: Click-away behavior

The system SHALL close the language selector dropdown when user clicks outside.

#### Scenario: Clicking outside dropdown
- **WHEN** dropdown is open and user clicks outside the dropdown area
- **THEN** the dropdown MUST close without changing the language

#### Scenario: Clicking on another control
- **WHEN** dropdown is open and user clicks on another header control
- **THEN** the dropdown MUST close before the other control activates

### Requirement: Language selector performance

The system SHALL ensure language selection provides immediate visual feedback.

#### Scenario: Instant language switch
- **WHEN** user selects a different language
- **THEN** the UI MUST update to the new language within 100ms

#### Scenario: No loading state needed
- **WHEN** switching languages
- **THEN** the system MUST NOT show loading indicators or delays

#### Scenario: Smooth transition
- **WHEN** language changes
- **THEN** text MUST update without causing layout shifts or jank

### Requirement: Language persistence indicator

The system SHALL indicate to users that their language preference is saved.

#### Scenario: Preference save confirmation
- **WHEN** user selects a language
- **THEN** the system MAY show a brief toast notification indicating "Language preference saved" / "语言偏好已保存"

#### Scenario: No confirmation required
- **WHEN** user selects a language
- **THEN** the immediate UI update serves as implicit confirmation, and explicit confirmation is optional

### Requirement: Language selector in both packages

The system SHALL include language selector in both UI and Report packages with consistent behavior.

#### Scenario: UI package language selector
- **WHEN** using the real-time dashboard (UI package)
- **THEN** the language selector MUST function as specified in all requirements

#### Scenario: Report package language selector
- **WHEN** viewing the static report (Report package)
- **THEN** the language selector MUST function identically to the UI package version

#### Scenario: Consistent visual appearance
- **WHEN** comparing language selectors in UI and Report packages
- **THEN** they MUST have the same visual appearance and behavior
