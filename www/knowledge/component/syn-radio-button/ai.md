# syn-radio-button

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-radio-button

## Rules

# syn-radio-button

## Summary

Radios buttons allow the user to select a single option from a group using a button-like control.

## Common Use Cases

- Filter or switch between views with button-style appearance and icon support.
- Select one option from a group where one is already preselected and no invalid state exists.
- Switch between groups of settings with visual button presentation.
- Display categorization choices with prominent, icon-enhanced options.
- Preference or mode selection in UI controls where traditional form input is not needed.

## Usage Guidelines

### When to Use

- Do not use syn-radio-button on its own; it must be slotted into syn-radio-group.
- Use syn-radio-button when you need button-style appearance for single option selection.
- Use syn-radio for traditional radio button appearance.
- Both work as form inputs when slotted inside syn-radio-group; the difference is visual presentation.
- Choose syn-radio-button for use cases like filtering, view switching, or category selection where button styling enhances UX.
- Slot inside syn-radio-group to participate in form submission and group state management.
- Use only in groups, as they are designed to allow the user to activate one of several options. For single options, use syn-checkbox instead.

### Behavior

- Always pre-select a "default" value. There is no invalid state; one option must always be selected.
- Limit the number of options in the group. Users should be able to retain all options available and not be overwhelmed by them.

### Content

- Include icons to support each option visually if possible.
- Label each choice clearly.

### Styling

- All radio buttons in the group must be styled similarly, e.g., each one is labelled with both text and icon.
- Avoid styling options only with icons if they are not common symbols, to prevent ambiguous interpretations.

## Accessibility

- syn-radio-button is not a standalone control; use it only inside syn-radio-group so assistive technologies interpret it as part of one exclusive choice set.
- Provide meaningful alternative text for icon-only radio buttons using the label attribute.
- Communicate the group's function—such as filtering or view switching—through clear context or labels.
- Ensure each button option has a unique, non-ambiguous label to help assistive technology users understand their choices.

## Related Components

- syn-radio
- syn-radio-group

## Related Templates

- Forms

## Interface

# syn-radio-button

## Summary

Radios buttons allow the user to select a single option from a group using a button-like control.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-radio-button--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=49697-83768)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=47863-30109)

## Class Information

- **Tag Name:** `syn-radio-button`
- **Import Example:** `import SynRadioButton from '@synergy-design-system/components/components/radio-button/radio-button.js';`

## Usage Information

- **Status:** stable
- **Since:** 3.17.0

## Available Slots

- `(default)`: The radio button's label.
- `prefix`: A presentational prefix icon or similar element.
- `suffix`: A presentational suffix icon or similar element.

## Available Properties

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the radio button.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the radio button to a readonly state.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted.

### value

attribute: `value`
reflects: no
type: `string | number`
default: none

The radio's value. When selected, the radio group will receive this value.

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the radio button.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the radio button.

## Available CSS Parts

- `base`: The component's base wrapper.
- `button`: The internal `<button>` element.
- `button--checked`: The internal button element when the radio button is checked.
- `label`: The container that wraps the radio button's label.
- `prefix`: The container that wraps the prefix.
- `suffix`: The container that wraps the suffix.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the button loses focus.

### syn-focus

type: `SynFocusEvent`

Emitted when the button gains focus.

## Examples

## Default

Radio buttons allow the user to select a single option from a group using a button-like control.Radio buttons are designed to be used with radio groups. When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html
<syn-radio-group label="Select an option" name="a" value="1">
  <syn-radio-button value="1"> Option 1 </syn-radio-button>

  <syn-radio-button value="2">Option 2</syn-radio-button>
  <syn-radio-button value="3">Option 3</syn-radio-button>
</syn-radio-group>
```

---

## Checked

To set the initial value and checked state, use the value attribute on the containing radio group.

```html
<syn-radio-group label="Select an option" name="b" value="2">
  <syn-radio-button value="1">Option 1</syn-radio-button>
  <syn-radio-button value="2">Option 2</syn-radio-button>
  <syn-radio-button value="3">Option 3</syn-radio-button>
</syn-radio-group>
```

---

## Focus

The focus event gives the user feedback that the radio button has been focused by the keyboard interaction.

```html
<syn-radio-group label="Select an option" name="b" value="1">
  <syn-radio-button value="1">Option 1</syn-radio-button>
  <syn-radio-button value="2">Option 2</syn-radio-button>
  <syn-radio-button value="3">Option 3</syn-radio-button>
</syn-radio-group>
```

---

## Disabled

Use the disabled attribute to disable a radio button.

```html
<syn-radio-group label="Select an option" name="b" value="1">
  <syn-radio-button value="1" disabled="">Option 1</syn-radio-button>
  <syn-radio-button value="2" disabled="">Option 2</syn-radio-button>
  <syn-radio-button value="3">Option 3</syn-radio-button>
</syn-radio-group>
```

---

## Readonly

Add the read-only attribute to render a readonly radio button. Please note that you need to enable the readonly state for each individual radio button.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium)"
>
  <syn-radio-group label="Select an option" name="b" value="1">
    <syn-radio-button value="1" readonly="">Option 1</syn-radio-button>
    <syn-radio-button value="2" readonly="">Option 2</syn-radio-button>
    <syn-radio-button value="3" readonly="">Option 3</syn-radio-button>
  </syn-radio-group>
  <syn-radio-group label="Select an option" name="b" value="1">
    <syn-radio-button value="1" readonly="">Option 1</syn-radio-button>
    <syn-radio-button value="2" readonly="">Option 2</syn-radio-button>
    <syn-radio-button value="3">Option 3</syn-radio-button>
  </syn-radio-group>
</div>
```

---

## Sizes

Use the size attribute to change a radio button’s size.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium)"
>
  <syn-radio-group label="Select an option" name="size" value="1" size="small">
    <syn-radio-button value="1">Option 1</syn-radio-button>
    <syn-radio-button value="2">Option 2</syn-radio-button>
    <syn-radio-button value="3">Option 3</syn-radio-button>
  </syn-radio-group>

  <syn-radio-group label="Select an option" name="size" value="1" size="medium">
    <syn-radio-button value="1">Option 1</syn-radio-button>
    <syn-radio-button value="2">Option 2</syn-radio-button>
    <syn-radio-button value="3">Option 3</syn-radio-button>
  </syn-radio-group>

  <syn-radio-group label="Select an option" name="size" value="1" size="large">
    <syn-radio-button value="1">Option 1</syn-radio-button>
    <syn-radio-button value="2">Option 2</syn-radio-button>
    <syn-radio-button value="3">Option 3</syn-radio-button>
  </syn-radio-group>
</div>
```

---

## Invalid

The invalid status is used to warn the user that the Radio Group is invalid. For example, if the radio-button is mandatory and nothing has been checked.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-radio-button--invalid"
>
  <syn-radio-group
    label="Select an option"
    name="a"
    help-text="This is required"
    required=""
  >
    <syn-radio-button value="1">Option 1</syn-radio-button>
    <syn-radio-button value="2">Option 2</syn-radio-button>
    <syn-radio-button value="3">Option 3</syn-radio-button>
  </syn-radio-group>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-radio-button--invalid {
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

## Prefix And Suffix Icons

Use the prefix and suffix slots to add icons.

```html
<syn-radio-group label="Select an option" name="b" value="1">
  <syn-radio-button value="1">
    <syn-icon slot="prefix" name="wallpaper"></syn-icon>
    Option 1
  </syn-radio-button>
  <syn-radio-button value="2">
    Option 2
    <syn-icon slot="suffix" name="wallpaper"></syn-icon>
  </syn-radio-button>
  <syn-radio-button value="3">
    <syn-icon slot="prefix" name="wallpaper"></syn-icon>
    Option 3
    <syn-icon slot="suffix" name="wallpaper"></syn-icon>
  </syn-radio-button>
</syn-radio-group>
```

---

## Buttons With Icons

You can omit button labels and use icons instead. Make sure to set a label attribute on each icon so screen readers will announce each option correctly.

```html
<syn-radio-group label="Select an option" name="a" value="neutral">
  <syn-radio-button value="angry">
    <syn-icon name="face_5" label="Angry"></syn-icon>
  </syn-radio-button>

  <syn-radio-button value="sad">
    <syn-icon name="face_4" label="Sad"></syn-icon>
  </syn-radio-button>

  <syn-radio-button value="neutral">
    <syn-icon name="face_3" label="Neutral"></syn-icon>
  </syn-radio-button>

  <syn-radio-button value="happy">
    <syn-icon name="face_2" label="Happy"></syn-icon>
  </syn-radio-button>

  <syn-radio-button value="laughing">
    <syn-icon name="face_6" label="Laughing"></syn-icon>
  </syn-radio-button>
</syn-radio-group>
```