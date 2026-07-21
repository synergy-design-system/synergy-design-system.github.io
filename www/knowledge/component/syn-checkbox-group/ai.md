# syn-checkbox-group

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-checkbox-group

## Rules

# syn-checkbox-group

## Summary

Checkbox groups are used to group multiple checkboxes together.

## Common Use Cases

- Collect multiple independent selections in forms, such as feature preferences or notification channels.
- Present optional add-ons where users can choose any combination of available options.
- Capture consent combinations (for example, different communication or policy confirmations).
- Offer grouped filter criteria where users may activate multiple filters at once.

## Usage Guidelines

### Grouping and Labels

- Group related checkboxes together in syn-checkbox-group to provide shared context and improve scannability.
- Provide a group label that describes the decision category and use help text when users need additional guidance.
- Use checkboxes in this group when users may select none, one, or multiple options.

### Selection Behavior

- Do not use checkbox-group when users must select exactly one option; use syn-radio-group instead.
- Allow empty groups when selection is optional and avoid forcing a default checked state unless business rules require it.
- Do not disable all choices in a group; if no option is currently applicable, consider hiding the group or explaining why options are unavailable.

### Layout

- Use vertical layout as the default for most form scenarios, especially with longer labels or supporting help text.
- Use horizontal layout only when options are short, similar in length, and sufficient horizontal space is available.
- For long option lists, keep labels concise and consider splitting options into multiple logical groups to reduce scanning effort.

## Accessibility

- Ensure that the group label is short and descriptive, as assistive technologies announce it when users enter the group.
- Provide a clear label for every checkbox option and avoid ambiguous wording.
- Ensure checkbox options are easily tappable on touch devices and that disabled states remain understandable in context.

## Related Components

- syn-checkbox

## Related Templates

- Forms

## Interface

# syn-checkbox-group

## Summary

Checkbox groups are used to group multiple checkboxes together.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-checkbox-group--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=50279-43830)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=50279-41408)

## Class Information

- **Tag Name:** `syn-checkbox-group`
- **Import Example:** `import SynCheckboxGroup from '@synergy-design-system/components/components/checkbox-group/checkbox-group.js';`

## Usage Information

- **Status:** stable
- **Since:** 3.18.0

## Available Slots

- `(default)`: The default slot where `<syn-checkbox>` and `<syn-switch>` elements are placed.
- `label`: The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
- `help-text`: Text that describes how to use the checkbox group. Alternatively, you can use the `help-text` attribute.

## Available Properties

### form

attribute: `form`
reflects: yes
type: `string`
default: `''`

By default, form controls are associated with the nearest containing `<form>` element.
This property allows you to specify the `id` of a `<form>` element to associate all of the slotted checkboxes and radios with.

Please note that this property does not associate the checkbox group itself with a form, only the slotted checkboxes and radios.

### helpText

attribute: `help-text`
reflects: no
type: `string`
default: `''`

The checkbox groups's help text. If you need to display HTML, use the `help-text` slot instead.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The checkbox group's label. Required for proper accessibility.
If you need to display HTML, use the `label` slot instead.

### layout

attribute: `layout`
reflects: yes
type: `'horizontal' | 'vertical'`
default: `'vertical'`

The layout of the checkbox group. This determines how the checkboxes are displayed.

- `horizontal`: Checkboxes are displayed in a row.
- `vertical`: Checkboxes are displayed in a column.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The checkbox group's size. This size will be applied to all child checkboxes.

## Available Methods

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the checkbox-group.
Will automatically set focus on the first checkbox in the group that is not disabled.

## Available CSS Parts

- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The input's wrapper.
- `form-control-label`: The label's wrapper.

## Examples

## Default

Checkbox groups are used to visually group multiple checkboxes.

```html
<syn-checkbox-group label="This is a label">
  <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>
  <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Vertical Layout

Use a vertical layout to display the checkboxes in a column.

```html
<syn-checkbox-group label="This is a label" layout="vertical">
  <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

  <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Horizontal Layout

Use a horizontal layout to display the checkboxes in a row.

```html
<syn-checkbox-group label="This is a label" layout="horizontal">
  <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

  <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>

  <syn-checkbox name="checkbox-4" value="checkbox-4">Option</syn-checkbox>

  <syn-checkbox name="checkbox-5" value="checkbox-5">Option</syn-checkbox>

  <syn-checkbox name="checkbox-6" value="checkbox-6">Option</syn-checkbox>

  <syn-checkbox name="checkbox-7" value="checkbox-7">Option</syn-checkbox>

  <syn-checkbox name="checkbox-8" value="checkbox-8">Option</syn-checkbox>

  <syn-checkbox name="checkbox-9" value="checkbox-9">Option</syn-checkbox>

  <syn-checkbox name="checkbox-10" value="checkbox-10">Option</syn-checkbox>

  <syn-checkbox name="checkbox-11" value="checkbox-11">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Labels

Use the label attribute to give the checkbox-group an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-checkbox-group label="This is a label">
  <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

  <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Checked

Use the checked attribute on the corresponding syn-checkbox elements to set the checked state.

```html
<syn-checkbox-group label="This is a label">
  <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

  <syn-checkbox checked="" name="checkbox-2" value="checkbox-2"
    >Option</syn-checkbox
  >

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Help Text

Add descriptive help text to a checkbox-group with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-checkbox-group
  label="This is a label"
  help-text="Choose the most appropriate option."
>
  <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

  <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Focus

The focus event gives the user feedback that one of the Checkboxes has been focused by the keyboard interaction.

```html
<syn-checkbox-group
  label="This is a label"
  help-text="Choose the most appropriate option."
>
  <syn-checkbox disabled="" name="checkbox-1" value="checkbox-1"
    >Option</syn-checkbox
  >

  <syn-checkbox checked="" name="checkbox-2" value="checkbox-2"
    >Option</syn-checkbox
  >

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Disabled

Use the disabled attribute on the corresponding syn-checkbox elements to set the disabled state.

```html
<syn-checkbox-group label="This is a disabled">
  <syn-checkbox disabled="" name="checkbox-1" value="checkbox-1"
    >Option</syn-checkbox
  >

  <syn-checkbox checked="" disabled="" name="checkbox-2" value="checkbox-2"
    >Option</syn-checkbox
  >

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Readonly

Checkboxes can be displayed in a read-only state by applying the readonly attribute to the selected checkbox inside the checkbox group.

```html
<syn-checkbox-group label="This is a label">
  <syn-checkbox readonly="" name="checkbox-1" value="checkbox-1"
    >Option</syn-checkbox
  >

  <syn-checkbox checked="" readonly="" name="checkbox-2" value="checkbox-2"
    >Option</syn-checkbox
  >

  <syn-checkbox name="checkbox-3" value="checkbox-3">Option</syn-checkbox>
</syn-checkbox-group>
```

---

## Sizes

The size of checkboxes will be determined by the checkbox group’s size attribute.

```html
<div class="demo-checkbox-group-grid">
  <div class="demo-checkbox-group-tile">
    <syn-checkbox-group
      layout="vertical"
      label="Small size vertical"
      size="small"
    >
      <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

      <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
    </syn-checkbox-group>
  </div>
  <div class="demo-checkbox-group-tile">
    <syn-checkbox-group
      layout="horizontal"
      label="Small size horizontal"
      size="small"
    >
      <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

      <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
    </syn-checkbox-group>
  </div>

  <div class="demo-checkbox-group-tile">
    <syn-checkbox-group
      layout="vertical"
      label="Medium size vertical"
      size="medium"
    >
      <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

      <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
    </syn-checkbox-group>
  </div>
  <div class="demo-checkbox-group-tile">
    <syn-checkbox-group
      layout="horizontal"
      label="Medium size horizontal"
      size="medium"
    >
      <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

      <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
    </syn-checkbox-group>
  </div>

  <div class="demo-checkbox-group-tile">
    <syn-checkbox-group
      layout="vertical"
      label="Large size vertical"
      size="large"
    >
      <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

      <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
    </syn-checkbox-group>
  </div>
  <div class="demo-checkbox-group-tile">
    <syn-checkbox-group
      layout="horizontal"
      label="Large size horizontal"
      size="large"
    >
      <syn-checkbox name="checkbox-1" value="checkbox-1">Option</syn-checkbox>

      <syn-checkbox name="checkbox-2" value="checkbox-2">Option</syn-checkbox>
    </syn-checkbox-group>
  </div>
</div>
<style>
  .demo-checkbox-group-grid {
    column-gap: var(--syn-spacing-large);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }

  .demo-checkbox-group-tile {
    background: var(--syn-page-background);
    padding: var(--syn-spacing-large);
    box-sizing: border-box;
    height: 100%;
  }
</style>
```