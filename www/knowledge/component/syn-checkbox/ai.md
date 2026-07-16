# syn-checkbox

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-checkbox

## Rules

# syn-checkbox

## Summary

Checkboxes allow the user to toggle an option on or off.

## Common Use Cases

- Used for selections that don't immediately trigger an action.
- Selecting an option like "Agree to Terms and Conditions" before submitting a registration form.
- Opt-in/Opt-out of notifications or subscriptions.

## Usage Guidelines

### Content

- Provide a clear, descriptive label for each selection to avoid confusion.
- Frame labels positively, such as "Enable notifications" instead of "Disable notifications."

### Interaction and Usage

- Ensure each selection operates independently unless used for bulk actions.
- When multiple related checkbox options are shown together, prefer wrapping them in syn-checkbox-group for shared labeling and guidance.
- List selections in a logical order, such as alphabetical or numerical.
- Refrain from using a single checkbox when the action should take effect immediately - use syn-switch instead.

## Accessibility

- Checkboxes should always look like checkboxes to meet user's expectations.
- Nesting other interactive elements like links inside labels should be avoided.
- An error-text with a warning icon should be placed underneath an invalid checkbox. Error messages should always provide hints for solutions.

## Related Components

- syn-checkbox-group

## Related Templates

- Forms

## Interface

# syn-checkbox

## Summary

Checkboxes allow the user to toggle an option on or off.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-checkbox--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-257927)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=1847-5746)

## Class Information

- **Tag Name:** `syn-checkbox`
- **Import Example:** `import SynCheckbox from '@synergy-design-system/components/components/checkbox/checkbox.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `(default)`: The checkbox's label.
- `help-text`: Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.

## Available Properties

### checked

attribute: `checked`
reflects: yes
type: `boolean`
default: `false`

Draws the checkbox in a checked state.

### defaultChecked

attribute: -
reflects: -
type: `boolean`
default: `false`

The default value of the form control. Primarily used for resetting the form control.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the checkbox.

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

The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.

### indeterminate

attribute: `indeterminate`
reflects: yes
type: `boolean`
default: `false`

Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states.

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the checkbox, submitted as a name/value pair with form data.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the checkbox to a readonly state.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

Makes the checkbox a required field.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The checkbox's size.

### value

attribute: `value`
reflects: no
type: `string`
default: none

The current value of the checkbox, submitted as a name/value pair with form data.

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

Removes focus from the checkbox.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

### click()

parameters: -
returns: `void`

Simulates a click on the checkbox.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the checkbox.

### getForm()

parameters: -
returns: `void`

Gets the associated form, if one exists.

### reportValidity()

parameters: -
returns: `void`

Checks for validity and shows the browser's validation message if the control is invalid.

### setCustomValidity()

parameters: `message: string`
returns: `void`

Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
the custom validation message, call this method with an empty string.

## Available CSS Parts

- `base`: The component's base wrapper.
- `checked-icon`: The checked icon, an `<syn-icon>` element.
- `control`: The square container that wraps the checkbox's checked state.
- `control--checked`: Matches the control part when the checkbox is checked.
- `control--indeterminate`: Matches the control part when the checkbox is indeterminate.
- `form-control-help-text`: The help text's wrapper.
- `indeterminate-icon`: The indeterminate icon, an `<syn-icon>` element.
- `label`: The container that wraps the checkbox's label.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the checkbox loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when the checked state changes.

### syn-focus

type: `SynFocusEvent`

Emitted when the checkbox gains focus.

### syn-input

type: `SynInputEvent`

Emitted when the checkbox receives input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

## Dependencies

- `syn-icon`

## Examples

## Default

Checkboxes allow the user to toggle an option on or off.

```html
<syn-checkbox> Checkbox </syn-checkbox>
```

---

## Checked

Use the checked attribute to activate the checkbox.

```html
<syn-checkbox checked="">Checked</syn-checkbox>
```

---

## Help Text

Add descriptive help text to a checkbox with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-checkbox help-text="What should the user know about the checkbox?"
  >Label</syn-checkbox
>
```

---

## Indeterminate

Use the indeterminate attribute to make the checkbox indeterminate.

```html
<syn-checkbox indeterminate="">Indeterminate</syn-checkbox>
```

---

## Focus

The focus event gives the user feedback that the Checkbox has been focused by the keyboard interaction.

```html
<syn-checkbox>Focused</syn-checkbox>
```

---

## Disabled

Use the disabled attribute to disable the checkbox.

```html
<syn-checkbox disabled="">Disabled</syn-checkbox>
```

---

## Readonly

Add the readonly attribute to draw a read-only checkbox.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-checkbox name="a" value="a" readonly="">Read only content</syn-checkbox>
  <syn-checkbox name="b" value="b" readonly="" indeterminate=""
    >Read only content (indet)</syn-checkbox
  >
  <syn-checkbox name="c" value="c" readonly="" checked=""
    >Read only content (checked)</syn-checkbox
  >
</div>
```

---

## Sizes

Use the size attribute to change a checkbox’s size.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-checkbox size="small">Small</syn-checkbox>
  <syn-checkbox size="medium">Medium</syn-checkbox>
  <syn-checkbox size="large">Large</syn-checkbox>
</div>
```

---

## Invalid

The invalid status is used to warn the user that the Checkbox is invalid. For example, if the check is mandatory and nothing has been checked.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-checkbox--invalid"
>
  <div class="custom-validity">
    <syn-checkbox required="">Invalid</syn-checkbox>
    <syn-checkbox required="" indeterminate="">Invalid</syn-checkbox>
    <syn-checkbox required="" checked="">Invalid</syn-checkbox>
  </div>
  <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: var(--syn-spacing-large);
    }
  </style>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-checkbox--invalid {
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

## Custom Validity

Use the setCustomValidity() method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html
<form class="custom-validity">
  <syn-checkbox name="checked" value="on">Check me</syn-checkbox>
  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  .custom-validity {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>

<script type="module">
  const form = document.querySelector(".custom-validity");
  const checkbox = form.querySelector("syn-checkbox");
  const errorMessage = "Don't forget to check me!";

  // Update validity on change
  checkbox.addEventListener("syn-change", () => {
    checkbox.setCustomValidity(checkbox.checked ? "" : errorMessage);
  });

  // Handle submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("All fields are valid!");
  });
</script>
```