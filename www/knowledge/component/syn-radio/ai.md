# syn-radio

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-radio

## Rules

# syn-radio

## Summary

Radios allow the user to select a single option from a group.

## Common Use Cases

- Choose one delivery method from a short list.
- Select one billing frequency such as monthly or yearly.
- Pick one preference in settings where only a single active mode is allowed.
- Answer single-choice questions in forms and surveys.

## Usage Guidelines

### Option Structure

- Do not use syn-radio on its own; slot it into syn-radio-group to get correct keyboard behavior, semantics, and form participation.
- Use radios when users must select exactly one option from a small, predefined list.
- Keep options mutually exclusive and avoid overlapping meanings between choices.
- Present options in a stable order and keep wording parallel to make comparison easier.

### Labels and Guidance

- Always provide a meaningful group label on the parent syn-radio-group.
- Use concise option labels and add help text when options need extra explanation.
- Prefer sentence case and domain terms users already know.

### Selection Behavior

- Set a sensible default when one option is expected in most cases, but avoid preselecting high-risk choices.
- If no safe default exists, require explicit user selection before submit.
- Do not mix radios and checkboxes for the same decision set.

## Accessibility

- syn-radio is not a standalone control; always use syn-radio inside syn-radio-group so assistive technologies can interpret options as one exclusive choice set.
- Ensure each radio has a clear, unique visible label; avoid ambiguous labels such as "Option 1" without context.
- Use disabled or readonly states only when users can still understand why an option is unavailable.

## Related Components

- syn-radio-group

## Related Templates

- Forms

## Interface

# syn-radio

## Summary

Radios allow the user to select a single option from a group.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-radio--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-252390)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=1345-21578)

## Class Information

- **Tag Name:** `syn-radio`
- **Import Example:** `import SynRadio from '@synergy-design-system/components/components/radio/radio.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `(default)`: The radio's label.

## Available Properties

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the radio.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the radio to a readonly state.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted.

### value

attribute: `value`
reflects: no
type: `string | number`
default: none

The radio's value. When selected, the radio group will receive this value.

## Available CSS Parts

- `base`: The component's base wrapper.
- `checked-icon`: The checked icon, an `<syn-icon>` element.
- `control`: The circular container that wraps the radio's checked state.
- `control--checked`: The radio control when the radio is checked.
- `label`: The container that wraps the radio's label.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

## Dependencies

- `syn-icon`

## Examples

## Default

Radios allow the user to select a single option from a group. \nRadios are designed to be used with radio groups.

```html
<syn-radio> Option </syn-radio>
```

---

## Initial Value

To set the initial value and checked state, use the value attribute on the radio element.

```html
<syn-radio-group value="1">
  <syn-radio value="1" selected="">Option</syn-radio>
</syn-radio-group>
```

---

## Focus

The focus event gives the user feedback that the Radio has been focused by the keyboard interaction.

```html
<syn-radio value="1">Option</syn-radio>
```

---

## Disabled

Use the disabled attribute to disable a radio.

```html
<syn-radio value="1" disabled="">Option</syn-radio>
```

---

## Readonly

Add the readonly attribute to draw a read-only radio.

```html
<syn-radio-group value="1">
  <syn-radio value="1" readonly="">Read-only content</syn-radio>
</syn-radio-group>
```

---

## Sizes

Add the size attribute to the Radio Group to change the radios’ size.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-radio value="1" size="small">Option</syn-radio>
  <syn-radio value="2" size="medium">Option</syn-radio>
  <syn-radio value="3" size="large">Option</syn-radio>
</div>
```

---

## Invalid

The invalid status is used to warn the user that the Radio is invalid. For example, if the radio is mandatory and nothing has been checked.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-radio--invalid"
>
  <syn-radio-group required="">
    <syn-radio value="1">Invalid</syn-radio>
    <syn-radio value="">Invalid</syn-radio>
  </syn-radio-group>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-radio--invalid {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-large);
  }
  syn-button {
    align-self: flex-start;
  }
</style>
```