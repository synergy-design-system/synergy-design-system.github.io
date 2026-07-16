# syn-textarea

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-textarea

## Rules

# syn-textarea

## Summary

Textareas collect data from the user and allow multiple lines of text.

## Common Use Cases

- Collect detailed user feedback or comments.
- Enable users to write comprehensive reviews of products or services.
- Gather extensive information about issues or requests.
- Capture detailed responses in surveys or questionnaires.

## Usage Guidelines

### Behavior and Interaction

- Provide real-time validation to help users correct errors as they type.
- Provide a visible scrollbar when text overflows.
- Adapt the size of the field to the expected length of user input.
- Avoid including a "clear" button to prevent unwanted loss of user input.

### Content and Guidance

- Inform users whenever minimum or maximum lengths are set; use the field's help text for this.
- Use placeholder text as an addition to label as it should not include essential information required to complete the field correctly.
- Use help text to provide hints or examples of expected inputs.

## Accessibility

- Ensure textarea fields are part of a logical tab order and provide a clearly visible focus state when focused.
- Always provide a descriptive label. Placeholder text may support the label but must not replace it.
- Ensure textarea fields remain usable across all screen sizes, including touch devices with sufficiently large touch targets.
- Inform users about input constraints such as minimum or maximum character limits, and expose validation feedback clearly.
- Use helper and error text that can be announced by assistive technologies (e.g., by linking descriptions and errors to the field).
- Prefer keeping the field enabled by default and validate on submit or during input instead of blocking input unnecessarily.

## Related Templates

- Forms

## Interface

# syn-textarea

## Summary

Textareas collect data from the user and allow multiple lines of text.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-textarea--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41337-204379)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=1101-1482)

## Class Information

- **Tag Name:** `syn-textarea`
- **Import Example:** `import SynTextarea from '@synergy-design-system/components/components/textarea/textarea.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `label`: The textarea's label. Alternatively, you can use the `label` attribute.
- `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.

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

Disables the textarea.

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

The textarea's help text. If you need to display HTML, use the `help-text` slot instead.

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

The textarea's label. If you need to display HTML, use the `label` slot instead.

### maxlength

attribute: `maxlength`
reflects: no
type: `number`
default: none

The maximum length of input that will be considered valid.

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

The name of the textarea, submitted as a name/value pair with form data.

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

Makes the textarea readonly.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

Makes the textarea a required field.

### resize

attribute: `resize`
reflects: no
type: `'none' | 'vertical' | 'auto'`
default: `'vertical'`

Controls how the textarea can be resized.

### rows

attribute: `rows`
reflects: no
type: `number`
default: `4`

The number of rows to display by default.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The textarea's size.

### spellcheck

attribute: `spellcheck`
reflects: no
type: `boolean`
default: `true`

Enables spell checking on the textarea.

### value

attribute: `value`
reflects: no
type: `string`
default: `''`

The current value of the textarea, submitted as a name/value pair with form data.

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

Removes focus from the textarea.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the textarea.

### getForm()

parameters: -
returns: `void`

Gets the associated form, if one exists.

### reportValidity()

parameters: -
returns: `void`

Checks for validity and shows the browser's validation message if the control is invalid.

### scrollPosition()

parameters: `position: { top?: number; left?: number }`
returns: `void`

Gets or sets the textarea's scroll position.

### select()

parameters: -
returns: `void`

Selects all the text in the textarea.

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

## Available CSS Parts

- `base`: The component's base wrapper.
- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The input's wrapper.
- `form-control-label`: The label's wrapper.
- `textarea`: The internal `<textarea>` control.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when an alteration to the control's value is committed by the user.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

### syn-input

type: `SynInputEvent`

Emitted when the control receives input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

## Examples

## Default

Textareas collect data from the user and allow multiple lines of text.

```html
<syn-textarea rows="4" spellcheck=""></syn-textarea>
```

---

## Labels

Use the label attribute to give the textarea an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-textarea label="Comments"></syn-textarea>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-textarea label="Feedback" help-text="Please tell us what you think.">
</syn-textarea>
```

---

## Rows

Use the rows attribute to change the number of text rows that get shown.

```html
<syn-textarea rows="1" placeholder="One row shown"></syn-textarea>
<syn-textarea rows="5" placeholder="Five rows shown"></syn-textarea>
<syn-textarea rows="3" placeholder="Three rows shown"></syn-textarea>
<style>
  syn-textarea {
    margin-bottom: 1rem;
  }
</style>
```

---

## Placeholders

Use the placeholder attribute to add a placeholder.

```html
<syn-textarea placeholder="Type something"></syn-textarea>
```

---

## Readonly Textareas

Add the readonly attribute to draw a read-only textarea.

```html
<syn-textarea value="Read-only content" readonly=""></syn-textarea>
```

---

## Focus

The focus event gives the user feedback that the Textarea has been focused by the keyboard interaction and that the Textarea component is ready for use.

```html
<div style="padding: 5px">
  <form>
    <syn-textarea placeholder="This is in focus"></syn-textarea>
  </form>
</div>
```

---

## Disabled

Use the disabled attribute to disable a textarea.

```html
<syn-textarea
  placeholder="Textarea"
  help-text="Please tell us what you think."
  label="Label"
  disabled=""
></syn-textarea>
```

---

## Sizes

Use the size attribute to change a textarea’s size.

```html
<syn-textarea placeholder="Small" size="small"></syn-textarea><br />
<syn-textarea placeholder="Medium" size="medium"></syn-textarea><br />
<syn-textarea placeholder="Large" size="large"></syn-textarea>
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
  id="components-syn-textarea--invalid"
>
  <syn-textarea
    placeholder="Type something"
    help-text="This textarea is required."
    required=""
  ></syn-textarea>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-textarea--invalid {
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

## Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the resize attribute to none.

```html
<syn-textarea resize="none"></syn-textarea>
```

---

## Expand With Content

Textareas will automatically resize to expand to fit their content when resize is set to auto.

```html
<syn-textarea resize="auto" placeholder="Type something"></syn-textarea>
```