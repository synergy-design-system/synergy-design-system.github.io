# syn-fieldset

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-fieldset

## Rules

# syn-fieldset

## Summary

Fieldsets are used to group related elements in a form.

## Common Use Cases

- Group related personal information fields such as name, email, and phone into a single form section.
- Separate billing and shipping sections in checkout flows while keeping each section semantically connected.
- Group preference controls such as notification channels or consent options under a shared legend.
- Structure longer forms into meaningful sections so users can scan and complete them with less cognitive load.

## Usage Guidelines

### Grouping and Scope

- Use fieldsets to group controls that belong to the same question, task, or domain (for example shipping address, billing details, or communication preferences).
- Avoid using a fieldset for single standalone controls with no meaningful group context.

### Legend and Description

- Write concise, descriptive legends that describe the intent of the group and avoid generic titles such as "Details" or "Options".
- Use the description for optional context or constraints, not as a replacement for clear field labels and helper text.

### Disabled Behavior

- When disabling a fieldset, ensure users still understand why input is blocked and what action is needed to re-enable it.
- Do not use disabled groups to hide required steps in a form flow; prefer progressive disclosure patterns with clear triggers.

### Layout

- Use one-column layout for longer inputs and mixed controls to preserve scanability and reduce visual noise.
- Use two-column layout only when controls have similar weight and labels remain easy to read on all supported viewport sizes.
- Keep in mind that two-column layouts will automatically switch to a single column on smaller viewports, so ensure the reading order remains logical and accessible.
- Nested grouped controls (for example syn-radio-group) are automatically aligned with the fieldset's effective layout: horizontal in effective two-column mode and vertical when collapsed to one-column.
- Set `disable-auto-group-layout` when nested grouped controls must keep their own explicit layout and should not be changed by the fieldset.

## Accessibility

- Always provide a clear legend so assistive technologies can announce the group context before users interact with controls inside it.
- Use a short description only for supporting information and keep critical instructions in labels, helper text, or validation messages of the contained fields.
- Keep grouped fields in a logical reading and tab order so keyboard and screen reader users can complete the section predictably.
- Use the disabled state sparingly and only when the entire group is unavailable; explain why the section is disabled whenever possible.

## Related Components

- syn-button
- syn-checkbox
- syn-checkbox-group
- syn-combobox
- syn-dropdown
- syn-file
- syn-input
- syn-radio
- syn-radio-group
- syn-range
- syn-select
- syn-switch
- syn-textarea

## Related Templates

- Forms

## Interface

# syn-fieldset

## Summary

Fieldsets are used to group related elements in a form.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-fieldset--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=50945-47173)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=50975-46749)

## Class Information

- **Tag Name:** `syn-fieldset`
- **Import Example:** `import SynFieldset from '@synergy-design-system/components/components/fieldset/fieldset.js';`

## Usage Information

- **Status:** stable
- **Since:** 3.18.0

## Available Slots

- `(default)`: The fieldset's main content. Place form controls inside the fieldset to group them together.
- `legend`: Add a legend to the fieldset. This is displayed as the title of the fieldset. Alternatively, you can use the `legend` attribute.
- `description`: Add a description to the fieldset. This is displayed below the legend and provides additional information about the fieldset. Alternatively, you can use the `description` attribute.

## Available Properties

### description

attribute: `description`
reflects: yes
type: `string`
default: `''`

The description for the fieldset. This is displayed below the legend.
If not provided, the fieldset will not have a description.

### disableAutoGroupLayout

attribute: `disable-auto-group-layout`
reflects: yes
type: `boolean`
default: `false`

Disables automatic grouped control layout syncing.
When true, nested grouped controls keep their own layout configuration.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Whether the fieldset is disabled.
When true, all form controls inside the fieldset are disabled

### layout

attribute: `layout`
reflects: yes
type: `'one-column' | 'two-columns'`
default: `'one-column'`

The layout of the fieldset. This determines how the fields are displayed.
Defaults to `one-column`.

- `one-column`: All fields are displayed in a single column.
- `two-columns`: Fields are displayed in two columns. Will automatically fall back to one-column if the fieldset is too narrow to display two columns.

### legend

attribute: `legend`
reflects: yes
type: `string`
default: `''`

The legend for the fieldset. This is displayed as the title of the fieldset.
If not provided, the fieldset will not have a legend.

## Available CSS Parts

- `base`: The component's base wrapper.
- `description`: The component's description element.
- `field-container`: The container for the fieldset's fields.
- `legend`: The component's legend element.

## Examples

## Default

Fieldset is a component used to group related form controls and labels. It provides a visual and semantic grouping for better accessibility and organization.

```html
<syn-fieldset
  description="Description text for the fieldset. This is optional and can be used to provide additional information about the fieldset."
  legend="Legend"
  layout="two-columns"
>
  <syn-input name="item-1" label="Item 1"></syn-input>
  <syn-input name="item-2" label="Item 2"></syn-input>
  <syn-input name="item-3" label="Item 3"></syn-input>
  <syn-input name="item-4" label="Item 4"></syn-input>
  <syn-input name="item-5" label="Item 5"></syn-input>
  <syn-input name="item-6" label="Item 6"></syn-input>
</syn-fieldset>
```

---

## One Column Layout

The one-column layout applies to container widths below 640px and stacks the nested elements within a row. Overall, please make sure that no more than two items are nested within a single row.

```html
<syn-fieldset
  description="For container widths &lt; 640px"
  layout="one-column"
  legend="One column layout"
>
  <syn-input name="item-1" label="Item 1"></syn-input>
  <syn-input name="item-2" label="Item 2"></syn-input>
  <syn-input name="item-3" label="Item 3"></syn-input>
  <syn-input name="item-4" label="Item 4"></syn-input>
  <syn-input name="item-5" label="Item 5"></syn-input>
  <syn-input name="item-6" label="Item 6"></syn-input>
</syn-fieldset>
```

---

## Two Column Layout

For container widths of 640px or above, the nested elements within each row switch to a horizontal layout.This layout is ideal for forms with multiple fields, as it allows for a more compact and organized presentation of the form controls.Will automatically switch to a one-column layout for container widths below 640px.

```html
<syn-fieldset
  description="For container widths ≥ 640px"
  layout="two-columns"
  legend="Two column layout"
>
  <syn-input name="item-1" label="Item 1"></syn-input>
  <syn-input name="item-2" label="Item 2"></syn-input>
  <syn-input name="item-3" label="Item 3"></syn-input>
  <syn-input name="item-4" label="Item 4"></syn-input>
  <syn-input name="item-5" label="Item 5"></syn-input>
  <syn-input name="item-6" label="Item 6"></syn-input>
</syn-fieldset>
```

---

## Disabled

Enable the disabled toggle to disable all nested elements simultaneously.

```html
<syn-fieldset disabled="" layout="two-columns" legend="Disabled fieldset">
  <syn-input name="item-1" label="Item 1"></syn-input>
  <syn-input name="item-2" label="Item 2"></syn-input>
  <syn-input name="item-3" label="Item 3"></syn-input>
  <syn-input name="item-4" label="Item 4"></syn-input>
  <syn-input name="item-5" label="Item 5"></syn-input>
  <syn-input name="item-6" label="Item 6"></syn-input>
</syn-fieldset>
```