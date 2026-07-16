# syn-input

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-input

## Rules

# syn-input

## Summary

Inputs collect data from the user.

## Common Use Cases

- Collect user data in forms, including names, emails, dates, and passwords.
- Allow users to enter numerical values like quantities or prices.
- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Complex fields with adornments, counters, or tooltips.
- Compact layouts and simple fields.

## Usage Guidelines

### Input Types

- Use appropriate field types for the given purpose (e.g., "email", "password", "number"). For custom autocomplete functionalities (e.g., search fields) use syn-combobox.
- Use for brief text input only. For longer inputs, such as comments or user feedback, use syn-textarea instead.

### Labels and Placeholders

- Use descriptive and concise labels.
- Avoid using placeholder text as a substitute for labels.

### User Guidance

- Provide instructions within helper text for completing the field, such as password or character count (e.g., "maxlength" and "minlength"...).
- Offer additional guidance with tooltips or help text to guide users on the expected input format and prevent unclear or ambiguous interpretation.

### Validation and Formatting

- Use dynamic formatting to automatically format user input as they type.
- Validate user entries in real-time to provide immediate feedback whenever possible.
- Avoid using fields for actions that require immediate feedback; use buttons instead.

## Accessibility

- Ensure that focus moves in sequential order between input fields and other form elements. When an input field is focused, it should be clearly indicated.
- Avoid disabled input fields. If needed, ensure that they remain in the regular tab order but cannot be activated, allowing screen readers to announce their state and purpose. Use the native disabled attribute or appropriate ARIA attributes (e.g., aria-disabled="true").
- Ensure input fields are usable on all screen sizes. On smaller screens, consider using larger touch targets for input fields.
- Placeholder text should offer a hint of what the user should write and must always go together with a label.
- Prefer keeping the input enabled by default by relying on default values or by validating on submit.
- Use "autocomplete" attribute to enable automated browser assistance when filling out forms.

## Related Templates

- Forms

## Interface

# syn-input

## Summary

Inputs collect data from the user.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-input--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41337-165221)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=661-61526)

## Class Information

- **Tag Name:** `syn-input`
- **Import Example:** `import SynInput from '@synergy-design-system/components/components/input/input.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `label`: The input's label. Alternatively, you can use the `label` attribute.
- `prefix`: Used to prepend a presentational icon or similar element to the input.
- `suffix`: Used to append a presentational icon or similar element to the input.
- `clear-icon`: An icon to use in lieu of the default clear icon.
- `show-password-icon`: An icon to use in lieu of the default show password icon.
- `hide-password-icon`: An icon to use in lieu of the default hide password icon.
- `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
- `increment-number-stepper`: An icon to use in lieu of the default increment number stepper icon.
- `decrement-number-stepper`: An icon to use in lieu of the default decrement number stepper icon.

## Available Properties

### autocapitalize

attribute: `autocapitalize`
reflects: no
type: `'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'`
default: none

Controls whether and how text input is automatically capitalized as it is entered by the user.

### autocomplete

attribute: `autocomplete`
reflects: no
type: `string`
default: none

Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.

### autocorrect

attribute: `autocorrect`
reflects: yes
type: `boolean`
default: none

Indicates whether the browser's autocorrect feature is on or off.

### autofocus

attribute: `autofocus`
reflects: no
type: `boolean`
default: none

Indicates that the input should receive focus on page load.

### clearable

attribute: `clearable`
reflects: no
type: `boolean`
default: `false`

Adds a clear button when the input is not empty.

### defaultValue

attribute: -
reflects: -
type: `string`
default: `''`

The default value of the form control. Primarily used for resetting the form control.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the input.

### enterkeyhint

attribute: `enterkeyhint`
reflects: no
type: `'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'`
default: none

Used to customize the label or icon of the Enter key on virtual keyboards.

### form

attribute: `form`
reflects: yes
type: `string`
default: `''`

By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work.

### helpText

attribute: `help-text`
reflects: no
type: `string`
default: `''`

The input's help text. If you need to display HTML, use the `help-text` slot instead.

### inputmode

attribute: `inputmode`
reflects: no
type: `'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'`
default: none

Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The input's label. If you need to display HTML, use the `label` slot instead.

### max

attribute: `max`
reflects: no
type: `number | string`
default: none

The input's maximum value. Only applies to date and number input types.

### maxFractionDigits

attribute: `max-fraction-digits`
reflects: no
type: `number`
default: none

The maximal amount of fraction digits to use for numeric values.
Used to format the number when the input type is `number`.

### maxlength

attribute: `maxlength`
reflects: no
type: `number`
default: none

The maximum length of input that will be considered valid.

### min

attribute: `min`
reflects: no
type: `number | string`
default: none

The input's minimum value. Only applies to date and number input types.

### minFractionDigits

attribute: `min-fraction-digits`
reflects: no
type: `number`
default: none

The minimal amount of fraction digits to use for numeric values.
Used to format the number when the input type is `number`.

### minlength

attribute: `minlength`
reflects: no
type: `number`
default: none

The minimum length of input that will be considered valid.

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the input, submitted as a name/value pair with form data.

### noSpinButtons

attribute: `no-spin-buttons`
reflects: no
type: `boolean`
default: `false`

Hides the increment/decrement spin buttons for number inputs.

### numberFormatterOptions

attribute: -
reflects: -
type: `Intl.NumberFormatOptions`
default: none

Optional options that should be passed to the `NumberFormatter` when formatting the value.
This is used to format the number when the input type is `number`.
Note this can only be set via `property`, not as an `attribute`!

### numericStrategy

attribute: `numeric-strategy`
reflects: no
type: `'native' | 'modern' | Partial<NumericStrategy>`
default: `modernNumericStrategy`

Defines the strategy for handling numbers in the numeric input.
This is used to determine how the input behaves when the user interacts with it.

Includes the following configuration options:

- **autoClamp**: If true, the input will clamp the value to the min and max attributes.
- **noStepAlign**: If true, the input will not align the value to the step attribute.
- **noStepValidation**: If true, the input will not validate the value against the step attribute.

You may provide this as one of the following values:

- 'native': Uses the native browser implementation.
- 'modern': Uses a more intuitive implementation:
  - Values are clamped to the nearest min or max value.
  - Stepping is inclusive to the provided min and max values.
  - Provided stepping is no longer used in validation.
- An object that matches the `NumericStrategy` type. Note this can only be set via `property`, not as an `attribute`!

### passwordToggle

attribute: `password-toggle`
reflects: no
type: `boolean`
default: `false`

Adds a button to toggle the password's visibility. Only applies to password types.

### passwordVisible

attribute: `password-visible`
reflects: no
type: `boolean`
default: `false`

Determines whether or not the password is currently visible. Only applies to password input types.

### pattern

attribute: `pattern`
reflects: no
type: `string`
default: none

A regular expression pattern to validate input against.

### placeholder

attribute: `placeholder`
reflects: no
type: `string`
default: `''`

Placeholder text to show as a hint when the input is empty.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Makes the input readonly.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

Makes the input a required field.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The input's size.

### spellcheck

attribute: `spellcheck`
reflects: no
type: `boolean`
default: `true`

Enables spell checking on the input.

### step

attribute: `step`
reflects: no
type: `number | 'any'`
default: none

Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value. Only applies to date and number input types.

### type

attribute: `type`
reflects: yes
type: `| 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'`
default: `'text'`

The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
to `text`.

### value

attribute: `value`
reflects: no
type: `string`
default: `''`

The current value of the input, submitted as a name/value pair with form data.

### valueAsDate

attribute: -
reflects: -
type: `undefined`
default: none

Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.

### valueAsNumber

attribute: -
reflects: -
type: `undefined`
default: none

Gets or sets the current value as a number. Returns `NaN` if the value can't be converted.

## Attribute-only Members

These attributes are reflected but not exposed as component properties.

### title

reflects: yes
type: `string`
default: `''`

-

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the input.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the input.

### getForm()

parameters: -
returns: `void`

Gets the associated form, if one exists.

### reportValidity()

parameters: -
returns: `void`

Checks for validity and shows the browser's validation message if the control is invalid.

### select()

parameters: -
returns: `void`

Selects all the text in the input.

### setCustomValidity()

parameters: `message: string`
returns: `void`

Sets a custom validation message. Pass an empty string to restore validity.

### setRangeText()

parameters: `replacement: string`, `start: number`, `end: number`, `selectMode: 'select' | 'start' | 'end' | 'preserve'`
returns: `void`

Replaces a range of text with a new string.

### setSelectionRange()

parameters: `selectionStart: number`, `selectionEnd: number`, `selectionDirection: 'forward' | 'backward' | 'none'`
returns: `void`

Sets the start and end positions of the text selection (0-based).

### showPicker()

parameters: -
returns: `void`

Displays the browser picker for an input element (only works if the browser supports it for the input type).

### stepDown()

parameters: -
returns: `void`

Decrements the value of a numeric input type by the value of the step attribute.

### stepUp()

parameters: -
returns: `void`

Increments the value of a numeric input type by the value of the step attribute.

## Available CSS Parts

- `base`: The component's base wrapper.
- `clear-button`: The clear button.
- `decrement-number-stepper`: The decrement number stepper button.
- `divider`: The divider between the increment and decrement number stepper buttons.
- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The input's wrapper.
- `form-control-label`: The label's wrapper.
- `increment-number-stepper`: The increment number stepper button.
- `input`: The internal `<input>` control.
- `password-toggle-button`: The password toggle button.
- `prefix`: The container that wraps the prefix.
- `stepper`: The container that wraps the number stepper.
- `suffix`: The container that wraps the suffix.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when an alteration to the control's value is committed by the user.

### syn-clamp

type: `SynClampEvent`

Emitted if the numeric strategy allows autoClamp and the value is clamped to the min or max attribute.

### syn-clear

type: `SynClearEvent`

Emitted when the clear button is activated.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

### syn-input

type: `SynInputEvent`

Emitted when the control receives input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

## Dependencies

- `syn-divider`
- `syn-icon`

## Examples

## Default

Inputs collect data from the user.

```html
<syn-input spellcheck=""></syn-input>
```

---

## Labels

Use the label attribute to give the input an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-input label="What is your name?"></syn-input>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-input
  label="Nickname"
  help-text="What would you like people to call you?"
></syn-input>
```

---

## Placeholders

Use the placeholder attribute to add a placeholder.

```html
<syn-input placeholder="Type something"></syn-input>
```

---

## Clearable

Add the clearable attribute to add a clear button when the input has content.

```html
<syn-input value="Clearable" placeholder="Clearable" clearable=""></syn-input>
```

---

## Toggle Password

Add the password-toggle attribute to add a toggle button that will show the password when activated.

```html
<syn-input
  type="password"
  placeholder="Password Toggle"
  password-toggle=""
></syn-input>
```

---

## Readonly Inputs

Add the readonly attribute to draw a read-only input.

```html
<syn-input value="Readonly content" readonly=""></syn-input>
```

---

## Focus

The focus attribute provides feedback to the users, informing them that the input component is ready for use.

```html
<div style="padding: 5px">
  <form>
    <syn-input
      help-text="This input is focused."
      label="Label"
      placeholder="Insert text here..."
    ></syn-input>
  </form>
</div>
```

---

## Disabled

Use the disabled attribute to disable an input.

```html
<syn-input
  placeholder="Disabled"
  help-text="Help Text"
  label="Label"
  disabled=""
>
  <syn-icon name="home" slot="prefix"></syn-icon>
  <syn-icon name="chat" slot="suffix"></syn-icon>
</syn-input>
```

---

## Sizes

Use the size attribute to change an input's size.

```html
<syn-input placeholder="Small" size="small"></syn-input><br />
<syn-input placeholder="Medium" size="medium"></syn-input><br />
<syn-input placeholder="Large" size="large"></syn-input>
```

---

## Invalid

The invalid status is used to warn the user that the input is invalid. For example, if the entry of text is mandatory and nothing has been entered or if a text has been entered that does not have the correct format.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-input--invalid"
>
  <syn-input
    help-text="This input is required."
    label="Label"
    placeholder="Insert text here..."
    required=""
  ></syn-input>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-input--invalid {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-large);
  }
  syn-button {
    align-self: flex-start;
  }
</style>
```

---

## Input Types

The type attribute controls the type of input the browser renders.

```html
<syn-input type="email" placeholder="Email"></syn-input><br />
<syn-input type="number" placeholder="Number"></syn-input><br />
<syn-input type="date" placeholder="Date"></syn-input>
```

---

## Prefix Suffix Text And Icons

Use the prefix and suffix slots to add text and icons.

```html
<syn-input placeholder="Small" size="small">
  <span slot="prefix">prefix</span>
  <span slot="suffix">suffix</span>
</syn-input>
<br />
<syn-input placeholder="Medium" size="medium">
  <span slot="prefix">prefix</span>
  <span slot="suffix">suffix</span>
</syn-input>
<br />
<syn-input placeholder="Large" size="large">
  <span slot="prefix">prefix</span>
  <span slot="suffix">suffix</span>
</syn-input>
<br />
<syn-input placeholder="Small" size="small">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-input>
<br />
<syn-input placeholder="Medium" size="medium">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-input>
<br />
<syn-input placeholder="Large" size="large">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-input>
```

---

## Customizing Label Position

Use to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html
<syn-input
  class="label-on-left"
  label="Name"
  help-text="Enter your name"
></syn-input>
<syn-input
  class="label-on-left"
  label="Email"
  type="email"
  help-text="Enter your email"
></syn-input>
<syn-textarea
  class="label-on-left"
  label="Bio"
  help-text="Tell us something about yourself"
></syn-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--syn-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--syn-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
    margin-bottom: 0;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```

---

## Stepper

The Stepper (Input type number) attribute has additional step buttons at the right side for incrementing and decrementing values. It is ideal for situations where users need to adjust quantities or settings within a range.

```html
<syn-input type="number" min="0" max="10" value="0"></syn-input>
<br />
<syn-input type="number" min="0" max="10" value="2"></syn-input>
<br />
<syn-input type="number" min="0" max="10" value="10"></syn-input>
```

---

## Stepper Input Handling

The numeric-strategy property defines how numeric input is handled during user interaction. It lets you select between the browsers native control and Synergy’s enhanced number-input logic.native: Uses the browser’s built-in number control. Values are not auto-clamped, and stepping/validation can vary across browsers.modern: Provides a more intuitive and predictable behavior by automatically clamping values to the nearest min/max value, including those bounds when stepping, and ignoring the step attribute during validation.

```html
<syn-input
  label="Native (min and max)"
  max="10"
  min="0"
  numeric-strategy="native"
  step="0.3"
  type="number"
  value="0"
></syn-input>
<br />
<syn-input
  label="Modern (min and max)"
  max="10"
  min="0"
  numeric-strategy="modern"
  step="0.3"
  type="number"
  value="0"
></syn-input>
```