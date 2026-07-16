# Intent Policy: input

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Data-entry and selection intents for forms and controls.

## Intents
### input.text.short

- Description: Use when a user should provide short, single-line text input.
- User goal: Capture compact textual values in a form field.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line input for compact textual values.
- Default: no

##### vanilla
```html
<syn-input type="text">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="text">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="text">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="text">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="text">CONTENT</SynVueInput>
```


### input.text.email

- Description: Use when a user should provide an email address in a format-aware field.
- User goal: Enter a valid email address with appropriate keyboard and validation behavior.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line email entry field with email-specific input behavior.
- Default: no

##### vanilla
```html
<syn-input type="email">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="email">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="email">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="email">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="email">CONTENT</SynVueInput>
```


### input.text.telephone

- Description: Use when a user should provide a telephone number.
- User goal: Enter a contact phone number with telephone-optimized keyboard behavior.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line telephone entry field with phone-oriented input behavior.
- Default: no

##### vanilla
```html
<syn-input type="tel">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="tel">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="tel">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="tel">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="tel">CONTENT</SynVueInput>
```


### input.text.url

- Description: Use when a user should provide a URL or web address.
- User goal: Enter a valid web address with URL-optimized keyboard behavior.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line URL entry field with web-address-oriented input behavior.
- Default: no

##### vanilla
```html
<syn-input type="url">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="url">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="url">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="url">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="url">CONTENT</SynVueInput>
```


### input.text.search

- Description: Use when a user should provide searchable text for filtering or querying.
- User goal: Enter and refine search terms quickly in a dedicated search field.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line search field for querying or filtering content.
- Default: no

##### vanilla
```html
<syn-input type="search">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="search">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="search">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="search">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="search">CONTENT</SynVueInput>
```


### input.text.secret

- Description: Use when a user should enter confidential text that must be masked, such as a password.
- User goal: Enter sensitive text securely with masked characters and optional reveal behavior.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line masked text field for passwords and other sensitive text values.
- Default: no

##### vanilla
```html
<syn-input type="password">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="password">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="password">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="password">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="password">CONTENT</SynVueInput>
```


### input.number.field

- Description: Use when a user should enter a numeric value directly in a form field.
- User goal: Type or adjust an exact numeric value with keyboard-friendly controls.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Single-line input field for direct numeric entry.
- Default: no

##### vanilla
```html
<syn-input type="number">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="number">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="number">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="number">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="number">CONTENT</SynVueInput>
```


### input.text.long

- Description: Use when a user should provide longer, multi-line input.
- User goal: Capture detailed comments, descriptions, or narrative responses.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-textarea](/knowledge/component/syn-textarea)

#### Variants
- Target: component:syn-textarea
- Reason: Multiline text entry for detailed user-provided information.
- Default: no

##### vanilla
```html
<syn-textarea resize="vertical">CONTENT</syn-textarea>
```

##### react-wrapper
```html
<SynTextarea resize="vertical">CONTENT</SynTextarea>
```

##### react-web-components
```html
<syn-textarea resize="vertical">CONTENT</syn-textarea>
```

##### angular
```html
<syn-textarea resize="vertical">CONTENT</syn-textarea>
```

##### vue
```html
<SynVueTextarea resize="vertical">CONTENT</SynVueTextarea>
```


### input.selection.single

- Description: Use when one option should be selected from predefined choices.
- User goal: Make one explicit selection from a known set.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-radio-group](/knowledge/component/syn-radio-group)
- [component:syn-select](/knowledge/component/syn-select)
- [component:syn-radio-button](/knowledge/component/syn-radio-button)
- [component:syn-radio](/knowledge/component/syn-radio)
- [component:syn-option](/knowledge/component/syn-option)

#### Variants
- Target: component:syn-radio-group
- Reason: Single required choice among related options.
- Default: no

##### vanilla
```html
<syn-radio-group>CONTENT</syn-radio-group>
```

##### react-wrapper
```html
<SynRadioGroup>CONTENT</SynRadioGroup>
```

##### react-web-components
```html
<syn-radio-group>CONTENT</syn-radio-group>
```

##### angular
```html
<syn-radio-group>CONTENT</syn-radio-group>
```

##### vue
```html
<SynVueRadioGroup>CONTENT</SynVueRadioGroup>
```


- Target: component:syn-select
- Reason: Single selection from a predefined options list.
- Default: no

##### vanilla
```html
<syn-select>CONTENT</syn-select>
```

##### react-wrapper
```html
<SynSelect>CONTENT</SynSelect>
```

##### react-web-components
```html
<syn-select>CONTENT</syn-select>
```

##### angular
```html
<syn-select>CONTENT</syn-select>
```

##### vue
```html
<SynVueSelect>CONTENT</SynVueSelect>
```


- Target: component:syn-radio-button
- Reason: Single selectable option used within a radio-button group.
- Default: no

##### vanilla
```html
<syn-radio-button>CONTENT</syn-radio-button>
```

##### react-wrapper
```html
<SynRadioButton>CONTENT</SynRadioButton>
```

##### react-web-components
```html
<syn-radio-button>CONTENT</syn-radio-button>
```

##### angular
```html
<syn-radio-button>CONTENT</syn-radio-button>
```

##### vue
```html
<SynVueRadioButton>CONTENT</SynVueRadioButton>
```


- Target: component:syn-radio
- Reason: Single selectable radio option used within a radio-group.
- Default: no

##### vanilla
```html
<syn-radio>CONTENT</syn-radio>
```

##### react-wrapper
```html
<SynRadio>CONTENT</SynRadio>
```

##### react-web-components
```html
<syn-radio>CONTENT</syn-radio>
```

##### angular
```html
<syn-radio>CONTENT</syn-radio>
```

##### vue
```html
<SynVueRadio>CONTENT</SynVueRadio>
```


- Target: component:syn-option
- Reason: Selectable option item used within select or optgroup structures for single-choice selection.
- Default: no

##### vanilla
```html
<syn-option>CONTENT</syn-option>
```

##### react-wrapper
```html
<SynOption>CONTENT</SynOption>
```

##### react-web-components
```html
<syn-option>CONTENT</syn-option>
```

##### angular
```html
<syn-option>CONTENT</syn-option>
```

##### vue
```html
<SynVueOption>CONTENT</SynVueOption>
```


### input.selection.multiple

- Description: Use when multiple options should be selected from predefined choices.
- User goal: Select multiple relevant options in one control.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-select](/knowledge/component/syn-select)
- [component:syn-checkbox-group](/knowledge/component/syn-checkbox-group)
- [component:syn-option](/knowledge/component/syn-option)

#### Variants
- Target: component:syn-select
- Reason: Multiple selection from a predefined options list.
- Default: no

##### vanilla
```html
<syn-select multiple>CONTENT</syn-select>
```

##### react-wrapper
```html
<SynSelect multiple={true}>CONTENT</SynSelect>
```

##### react-web-components
```html
<syn-select multiple>CONTENT</syn-select>
```

##### angular
```html
<syn-select multiple>CONTENT</syn-select>
```

##### vue
```html
<SynVueSelect multiple>CONTENT</SynVueSelect>
```


- Target: component:syn-checkbox-group
- Reason: Multi-select option set represented as grouped checkboxes or switches in a single form control context.
- Default: no

##### vanilla
```html
<syn-checkbox-group>CONTENT</syn-checkbox-group>
```

##### react-wrapper
```html
<SynCheckboxGroup>CONTENT</SynCheckboxGroup>
```

##### react-web-components
```html
<syn-checkbox-group>CONTENT</syn-checkbox-group>
```

##### angular
```html
<syn-checkbox-group>CONTENT</syn-checkbox-group>
```

##### vue
```html
<SynVueCheckboxGroup>CONTENT</SynVueCheckboxGroup>
```


- Target: component:syn-option
- Reason: Selectable option item used within select or optgroup structures for multiple-choice selection.
- Default: no

##### vanilla
```html
<syn-option>CONTENT</syn-option>
```

##### react-wrapper
```html
<SynOption>CONTENT</SynOption>
```

##### react-web-components
```html
<syn-option>CONTENT</syn-option>
```

##### angular
```html
<syn-option>CONTENT</syn-option>
```

##### vue
```html
<SynVueOption>CONTENT</SynVueOption>
```


### input.selection.searchable

- Description: Use when options are numerous and should be filtered by typing.
- User goal: Find and select options quickly through live filtering.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-combobox](/knowledge/component/syn-combobox)

#### Variants
- Target: component:syn-combobox
- Reason: Searchable selection with real-time filtering for larger option sets.
- Default: no

##### vanilla
```html
<syn-combobox>CONTENT</syn-combobox>
```

##### react-wrapper
```html
<SynCombobox>CONTENT</SynCombobox>
```

##### react-web-components
```html
<syn-combobox>CONTENT</syn-combobox>
```

##### angular
```html
<syn-combobox>CONTENT</syn-combobox>
```

##### vue
```html
<SynVueCombobox>CONTENT</SynVueCombobox>
```


### input.selection.searchable.multiple

- Description: Use when multiple options should be selected from a filterable list.
- User goal: Find and select multiple options quickly through live filtering.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-combobox](/knowledge/component/syn-combobox)

#### Variants
- Target: component:syn-combobox
- Reason: Searchable multi-selection with real-time filtering for larger option sets.
- Default: no

##### vanilla
```html
<syn-combobox multiple>CONTENT</syn-combobox>
```

##### react-wrapper
```html
<SynCombobox multiple={true}>CONTENT</SynCombobox>
```

##### react-web-components
```html
<syn-combobox multiple>CONTENT</syn-combobox>
```

##### angular
```html
<syn-combobox multiple>CONTENT</syn-combobox>
```

##### vue
```html
<SynVueCombobox multiple>CONTENT</SynVueCombobox>
```


### input.binary.immediate

- Description: Use for binary choices that apply immediately on toggle.
- User goal: Enable or disable a setting with instant effect.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-switch](/knowledge/component/syn-switch)

#### Variants
- Target: component:syn-switch
- Reason: Binary toggle that applies changes immediately.
- Default: no

##### vanilla
```html
<syn-switch>CONTENT</syn-switch>
```

##### react-wrapper
```html
<SynSwitch>CONTENT</SynSwitch>
```

##### react-web-components
```html
<syn-switch>CONTENT</syn-switch>
```

##### angular
```html
<syn-switch>CONTENT</syn-switch>
```

##### vue
```html
<SynVueSwitch>CONTENT</SynVueSwitch>
```


### input.binary.deferred

- Description: Use for binary choices that are submitted later with the form.
- User goal: Record a binary preference without immediate side effects.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-checkbox](/knowledge/component/syn-checkbox)

#### Variants
- Target: component:syn-checkbox
- Reason: Binary selection captured as part of a later form submit.
- Default: no

##### vanilla
```html
<syn-checkbox>CONTENT</syn-checkbox>
```

##### react-wrapper
```html
<SynCheckbox>CONTENT</SynCheckbox>
```

##### react-web-components
```html
<syn-checkbox>CONTENT</syn-checkbox>
```

##### angular
```html
<syn-checkbox>CONTENT</syn-checkbox>
```

##### vue
```html
<SynVueCheckbox>CONTENT</SynVueCheckbox>
```


### input.file.upload

- Description: Use when files or folders must be attached or uploaded.
- User goal: Provide one or more local files for processing.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-file](/knowledge/component/syn-file)

#### Variants
- Target: component:syn-file
- Reason: File attachment or upload control with optional multi-file mode.
- Default: no

##### vanilla
```html
<syn-file>CONTENT</syn-file>
```

##### react-wrapper
```html
<SynFile>CONTENT</SynFile>
```

##### react-web-components
```html
<syn-file>CONTENT</syn-file>
```

##### angular
```html
<syn-file>CONTENT</syn-file>
```

##### vue
```html
<SynVueFile>CONTENT</SynVueFile>
```


### input.number.range

- Description: Use when a user should select one numeric value within a bounded range, where quick adjustment matters more than exact precision.
- User goal: Pick a numeric value quickly with immediate visual feedback across a range.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-range](/knowledge/component/syn-range)

#### Variants
- Target: component:syn-range
- Reason: Bounded single-value numeric selection through a slider control for fast, approximate adjustment.
- Default: no

##### vanilla
```html
<syn-range>CONTENT</syn-range>
```

##### react-wrapper
```html
<SynRange>CONTENT</SynRange>
```

##### react-web-components
```html
<syn-range>CONTENT</syn-range>
```

##### angular
```html
<syn-range>CONTENT</syn-range>
```

##### vue
```html
<SynVueRange>CONTENT</SynVueRange>
```


### input.number.range.interval

- Description: Use when a user should select lower and upper numeric bounds within a bounded range, where quick adjustment matters more than exact precision.
- User goal: Pick lower and upper bounds quickly with immediate visual feedback across a range.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-range](/knowledge/component/syn-range)

#### Variants
- Target: component:syn-range
- Reason: Bounded numeric interval selection through a multi-knob slider control for fast, approximate bound adjustment.
- Default: no

##### vanilla
```html
<syn-range>CONTENT</syn-range>
```

##### react-wrapper
```html
<SynRange>CONTENT</SynRange>
```

##### react-web-components
```html
<syn-range>CONTENT</syn-range>
```

##### angular
```html
<syn-range>CONTENT</syn-range>
```

##### vue
```html
<SynVueRange>CONTENT</SynVueRange>
```


### input.date.day

- Description: Use when a user should pick a calendar date.
- User goal: Select or type a specific day with date-aware validation and picker support.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Date input field for selecting or entering a calendar date.
- Default: no

##### vanilla
```html
<syn-input type="date">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="date">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="date">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="date">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="date">CONTENT</SynVueInput>
```


### input.date.time

- Description: Use when a user should pick a time of day.
- User goal: Select or type a specific time with time-aware validation and picker support.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Time input field for selecting or entering a time value.
- Default: no

##### vanilla
```html
<syn-input type="time">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="time">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="time">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="time">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="time">CONTENT</SynVueInput>
```


### input.date.datetime-local

- Description: Use when a user should pick both date and time together in one field.
- User goal: Select or type a local date-time value with combined date and time controls.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-input](/knowledge/component/syn-input)

#### Variants
- Target: component:syn-input
- Reason: Combined date-time input field for selecting or entering local date and time values.
- Default: no

##### vanilla
```html
<syn-input type="datetime-local">CONTENT</syn-input>
```

##### react-wrapper
```html
<SynInput type="datetime-local">CONTENT</SynInput>
```

##### react-web-components
```html
<syn-input type="datetime-local">CONTENT</syn-input>
```

##### angular
```html
<syn-input type="datetime-local">CONTENT</syn-input>
```

##### vue
```html
<SynVueInput type="datetime-local">CONTENT</SynVueInput>
```


### input.selection.grouped-options

- Description: Use grouped options to organize long option lists into logical clusters.
- User goal: Find and choose options faster through labeled option groupings.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-select](/knowledge/component/syn-select)
- [component:syn-optgroup](/knowledge/component/syn-optgroup)

#### Variants
- Target: component:syn-select
- Reason: Grouped select options organized through optgroup labels.
- Default: no

##### vanilla
```html
<syn-select>CONTENT</syn-select>
```

##### react-wrapper
```html
<SynSelect>CONTENT</SynSelect>
```

##### react-web-components
```html
<syn-select>CONTENT</syn-select>
```

##### angular
```html
<syn-select>CONTENT</syn-select>
```

##### vue
```html
<SynVueSelect>CONTENT</SynVueSelect>
```


- Target: component:syn-optgroup
- Reason: Grouped option container used to label and organize related select options.
- Default: no

##### vanilla
```html
<syn-optgroup>CONTENT</syn-optgroup>
```

##### react-wrapper
```html
<SynOptgroup>CONTENT</SynOptgroup>
```

##### react-web-components
```html
<syn-optgroup>CONTENT</syn-optgroup>
```

##### angular
```html
<syn-optgroup>CONTENT</syn-optgroup>
```

##### vue
```html
<SynVueOptgroup>CONTENT</SynVueOptgroup>
```


### input.grouping.checkbox

- Description: Use when related checkbox or switch controls should be grouped under a shared label and optional help text.
- User goal: Understand and complete related checkboxes or switches as one coherent section.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-checkbox-group](/knowledge/component/syn-checkbox-group)

#### Variants
- Target: component:syn-checkbox-group
- Reason: Group related checkbox or switch controls in one form-scoped section with shared labeling and optional help text.
- Default: no

##### vanilla
```html
<syn-checkbox-group>CONTENT</syn-checkbox-group>
```

##### react-wrapper
```html
<SynCheckboxGroup>CONTENT</SynCheckboxGroup>
```

##### react-web-components
```html
<syn-checkbox-group>CONTENT</syn-checkbox-group>
```

##### angular
```html
<syn-checkbox-group>CONTENT</syn-checkbox-group>
```

##### vue
```html
<SynVueCheckboxGroup>CONTENT</SynVueCheckboxGroup>
```


### input.grouping.fieldset

- Description: Use when related form controls should be grouped under a shared legend and optional description.
- User goal: Understand and complete related form fields as one coherent section.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-fieldset](/knowledge/component/syn-fieldset)

#### Variants
- Target: component:syn-fieldset
- Reason: Group related form controls in a semantic section using legend and optional supporting description.
- Default: no

##### vanilla
```html
<syn-fieldset>CONTENT</syn-fieldset>
```

##### react-wrapper
```html
<SynFieldset>CONTENT</SynFieldset>
```

##### react-web-components
```html
<syn-fieldset>CONTENT</syn-fieldset>
```

##### angular
```html
<syn-fieldset>CONTENT</syn-fieldset>
```

##### vue
```html
<SynVueFieldset>CONTENT</SynVueFieldset>
```

