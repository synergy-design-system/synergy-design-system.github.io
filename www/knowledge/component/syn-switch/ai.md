# syn-switch

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-switch

## Rules

# syn-switch

## Summary

Switches allow the user to toggle an option on or off.

## Common Use Cases

- Allow users to switch between two states.
- Use to enable or disable settings, such as turning notifications on or off.
- Toggle features or functionalities within an application, applying changes immediately.

## Usage Guidelines

### Behavior

- Use for actions that take effect immediately without requiring additional confirmation.
- Ensure the visual state accurately reflects its functional state.
- If it's unclear whether the component is showing a state or an action, use syn-checkbox instead.

### Content

- Make sure both the label and action are clear by using appropriate text.
- Place label text on top of the control, such as in a header, while action text should be placed to the right, next to the control.
- Use adjectives to describe actions, as they are less ambiguous than verbs.
- Limit use to binary choices, such as "on/off" or "yes/no".

## Accessibility

- Consider alternatives to switches, as many users may find them confusing.
- If the switch triggers dynamic changes (e.g., loading new content), provide a corresponding announcement.

## Related Components

- syn-checkbox

## Related Templates

- Forms

## Interface

# syn-switch

## Summary

Switches allow the user to toggle an option on or off.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-switch--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-259132)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=2190-4038)

## Class Information

- **Tag Name:** `syn-switch`
- **Import Example:** `import SynSwitch from '@synergy-design-system/components/components/switch/switch.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `(default)`: The switch's label.
- `help-text`: Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.

## Available Properties

### checked

attribute: `checked`
reflects: yes
type: `boolean`
default: `false`

Draws the switch in a checked state.

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

Disables the switch.

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

The switch's help text. If you need to display HTML, use the `help-text` slot instead.

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the switch, submitted as a name/value pair with form data.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the switch to a readonly state.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

Makes the switch a required field.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The switch's size.

### value

attribute: `value`
reflects: no
type: `string`
default: none

The current value of the switch, submitted as a name/value pair with form data.

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

Removes focus from the switch.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

### click()

parameters: -
returns: `void`

Simulates a click on the switch.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the switch.

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

Sets a custom validation message. Pass an empty string to restore validity.

## Available CSS Parts

- `base`: The component's base wrapper.
- `control`: The control that houses the switch's thumb.
- `form-control-help-text`: The help text's wrapper.
- `label`: The switch's label.
- `thumb`: The switch's thumb.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when the control's checked state changes.

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

Switches allow the user to toggle an option on or off.

```html
<syn-switch> Option </syn-switch>
```

---

## Checked

Use the checked attribute to activate the switch.

```html
<syn-switch checked="">Checked</syn-switch>
```

---

## Focus

The focus event gives the user feedback that the Switch has been focused by the keyboard interaction.

```html
<syn-switch>Focused</syn-switch>
```

---

## Disabled

Use the disabled attribute to disable the switch.

```html
<syn-switch disabled="">Disabled</syn-switch>
```

---

## Readonly

Add the readonly attribute to draw a read-only switch.

```html
<div
  style="
    display: flex;
    gap: var(--syn-spacing-large);
    flex-direction: column;
    align-items: flex-start;
  "
>
  <syn-switch readonly="">Unchecked</syn-switch>
  <syn-switch checked="" readonly="">Checked</syn-switch>
</div>
```

---

## Sizes

Use the size attribute to change a switch’s size.

```html
<div
  style="
    gap: var(--syn-spacing-large);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  "
>
  <syn-switch size="small">Small</syn-switch>
  <syn-switch size="medium">Medium</syn-switch>
  <syn-switch size="large">Large</syn-switch>
</div>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-switch help-text="What should the user know about the switch?"
  >Label</syn-switch
>
```

---

## Invalid

The invalid status is used to warn the user that the Switch is invalid.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-switch--invalid"
>
  <syn-switch required="">Option</syn-switch>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-switch--invalid {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-large);
  }
  syn-button {
    align-self: flex-start;
  }
</style>
```