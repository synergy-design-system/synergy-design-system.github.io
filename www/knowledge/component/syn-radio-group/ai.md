# syn-radio-group

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-radio-group

## Rules

# syn-radio-group

## Summary

Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

## Common Use Cases

- Present options in forms where only one selection is allowed (e.g., gender selection, payment methods).
- Provide clear and concise choices in settings or configuration panels.
- Enable users to make a selection in surveys or questionnaires.
- Offer options in filter panels where only one filter can be applied at a time.

## Usage Guidelines

### Background

- Use with light background options such as white, neutral-100, or primary-100.

### Grouping and Labels

- Group related options together using fieldsets and legends for better context and accessibility.
- Provide a group label that states the category or describes the actions to take.

### Selection Behavior

- Provide a default selected option; never display options without a default selection.
- Do not disable all choices in a group; if a selection is not applicable, consider hiding the group instead.
- Use only when users need to select one option; for multiple selections, use checkboxes instead.

### Layout

- Use the vertical layout as the default for most form scenarios, especially when labels are longer or when readability is more important than compactness.
- Use horizontal layout only when options are short, similar in length, and there is sufficient horizontal space.
- The layout setting applies to `syn-radio` options. `syn-radio-button` items are rendered in their own button-group and are not affected by this layout switch.

## Accessibility

- Ensure that the group label is short and concise as it may be read out when users enter the group.
- Ensure radios are easily tappable on touch devices.

## Related Components

- syn-radio
- syn-radio-button

## Related Templates

- Forms

## Interface

# syn-radio-group

## Summary

Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-radio-group--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-253349)

## Class Information

- **Tag Name:** `syn-radio-group`
- **Import Example:** `import SynRadioGroup from '@synergy-design-system/components/components/radio-group/radio-group.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `(default)`: The default slot where `<syn-radio>` or `<syn-radio-button>` elements are placed.
- `label`: The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
- `help-text`: Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.

## Available Properties

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

The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead.

### layout

attribute: `layout`
reflects: yes
type: `'horizontal' | 'vertical'`
default: `'vertical'`

The layout of the radio group. This determines how the radios are displayed.
This only applies to `syn-radio` elements.
`syn-radio-button` items are rendered in their own button-group and will always render vertically.

- `horizontal`: Radios are displayed in a row.
- `vertical`: Radios are displayed in a column.

### name

attribute: `name`
reflects: no
type: `string`
default: `'option'`

The name of the radio group, submitted as a name/value pair with form data.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

Ensures a child radio is checked before allowing the containing form to submit.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The radio group's size. This size will be applied to all child radios and radio buttons.

### value

attribute: `value`
reflects: yes
type: `string | number`
default: `''`

The current value of the radio group, submitted as a name/value pair with form data.

## Available Methods

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the radio-group.

### getForm()

parameters: -
returns: `void`

Gets the associated form, if one exists.

### reportValidity()

parameters: -
returns: `void`

Checks for validity and shows the browser's validation message if the control is invalid.

### setCustomValidity()

parameters: `message`
returns: `void`

Sets a custom validation message. Pass an empty string to restore validity.

## Available CSS Parts

- `button-group`: The button group that wraps radio buttons.
- `button-group__base`: The button group's `base` part.
- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The input's wrapper.
- `form-control-label`: The label's wrapper.

## Available Events

### syn-change

type: `SynChangeEvent`

Emitted when the radio group's selected value changes.

### syn-input

type: `SynInputEvent`

Emitted when the radio group receives user input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

## Dependencies

- `syn-button-group`

## Examples

## Default

Radio groups are used to group multiple radios or radio buttons so they function as a single form control.

```html
<syn-radio-group label="This is a label">
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Labels

Use the label attribute to give the radio-group an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-radio-group label="This is a label">
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Checked

To set the initial value and checked state, use the value attribute on the containing radio group.

```html
<syn-radio-group
  label="This is a label"
  help-text="This is checked"
  name="a"
  value="2"
>
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-radio-group
  label="This is a label"
  help-text="Choose the most appropriate option."
  name="a"
>
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Focus

The focus event gives the user feedback that one of the radio buttons has been focused by the keyboard interaction.

```html
<syn-radio-group label="This is a label" name="a">
  <syn-radio value="1" disabled="">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Disabled

Radios and radio buttons can be disabled by adding the disabled attribute to the respective options inside the radio group.

```html
<syn-radio-group label="This is a label" help-text="This is disabled" name="a">
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2" disabled="">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Readonly

Add the readonly attribute to a radio to draw it in a readonly state.

```html
<syn-radio-group
  label="This is a label"
  help-text="This is readonly"
  name="a"
  value="2"
>
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2" readonly="">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
</syn-radio-group>
```

---

## Sizes

The size of Radios and Radio Buttons will be determined by the Radio Group’s size attribute.

```html
<div class="demo-radio-group-grid">
  <div class="demo-radio-group-tile">
    <syn-radio-group layout="vertical" label="Small size vertical" size="small">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
    </syn-radio-group>
  </div>
  <div class="demo-radio-group-tile">
    <syn-radio-group
      layout="horizontal"
      label="Small size horizontal"
      size="small"
    >
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
    </syn-radio-group>
  </div>

  <div class="demo-radio-group-tile">
    <syn-radio-group
      layout="vertical"
      label="Medium size vertical"
      size="medium"
    >
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
    </syn-radio-group>
  </div>
  <div class="demo-radio-group-tile">
    <syn-radio-group
      layout="horizontal"
      label="Medium size horizontal"
      size="medium"
    >
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
    </syn-radio-group>
  </div>

  <div class="demo-radio-group-tile">
    <syn-radio-group layout="vertical" label="Large size vertical" size="large">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
    </syn-radio-group>
  </div>
  <div class="demo-radio-group-tile">
    <syn-radio-group
      layout="horizontal"
      label="Large size horizontal"
      size="large"
    >
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
    </syn-radio-group>
  </div>
</div>
<style>
  .demo-radio-group-grid {
    column-gap: var(--syn-spacing-large);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }

  .demo-radio-group-tile {
    background: var(--syn-page-background);
    padding: var(--syn-spacing-large);
    box-sizing: border-box;
    height: 100%;
  }
</style>
```

---

## Invalid

The invalid status is used to warn the user that the Radio Group is invalid. For example, if the radio is mandatory and nothing has been checked.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-radio-group--invalid"
>
  <syn-radio-group
    label="Select an option"
    name="a"
    help-text="This is required"
    required=""
  >
    <syn-radio value="1">Option 1</syn-radio>
    <syn-radio value="2">Option 2</syn-radio>
    <syn-radio value="3">Option 3</syn-radio>
  </syn-radio-group>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-radio-group--invalid {
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
<form>
  <syn-radio-group label="Select an option" name="a" value="1">
    <syn-radio value="1">Not me</syn-radio>
    <syn-radio value="2">Me neither</syn-radio>
    <syn-radio value="3">Choose me</syn-radio>
  </syn-radio-group>
  <br />
  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
```

---

## Radio Buttons

Radio buttons offer an alternate way to display radio controls. In this case, an internal button group is used to group the buttons into a single, cohesive control.

```html
<syn-radio-group
  label="Select an option"
  value="Option 1"
  help-text="Select an option that makes you proud."
>
  <syn-radio-button value="Option 1">Option 1</syn-radio-button>
  <syn-radio-button value="Option 2">Option 2</syn-radio-button>
  <syn-radio-button value="Option 3">Option 3</syn-radio-button>
</syn-radio-group>
```

---

## Horizontal Layout

Use a horizontal layout to display the radios in a row.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-radio-group layout="horizontal" label="Small size" size="small">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
  </syn-radio-group>
  <syn-radio-group layout="horizontal" label="Medium size" size="medium">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
  </syn-radio-group>
  <syn-radio-group layout="horizontal" label="Large size" size="large">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
  </syn-radio-group>
</div>
```