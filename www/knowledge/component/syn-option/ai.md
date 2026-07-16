# syn-option

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-option

## Rules

# syn-option

## Summary

Options define the selectable items within various form controls such as [select](/components/select).

## Common Use Cases

- Provide options in selects or comboboxes.
- Allow users to select from a list of predefined choices in forms or settings, where they might choose one or more options.
- Present filter options in searches or data tables.

## Usage Guidelines

### Content

- Make sure all items in the list are mutually exclusive and unambiguous to help users understand what they are selecting.
- Provide a default choice where applicable to guide users.

## Accessibility

- Long option names can be difficult to understand and perceive, so it's best to keep them concise.
- Ensure that the beginning of each option is unique to avoid confusion, especially for screen reader users.
- Don't include headings or interactive elements like links, buttons, or checkboxes within dropdown options.

## Related Components

- syn-select
- syn-combobox
- syn-optgroup

## Related Templates

- Forms

## Interface

# syn-option

## Summary

Options define the selectable items within various form controls such as [select](/components/select).

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-option--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41325-312743)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=30345-113913)

## Class Information

- **Tag Name:** `syn-option`
- **Import Example:** `import SynOption from '@synergy-design-system/components/components/option/option.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.5.0

## Available Slots

- `(default)`: The option's label.
- `prefix`: Used to prepend an icon or similar element to the menu item.
- `suffix`: Used to append an icon or similar element to the menu item.

## Available Properties

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Draws the option in a disabled state, preventing selection.

### value

attribute: `value`
reflects: yes
type: `string | number`
default: `''`

The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values.

## Available Methods

### getTextLabel()

parameters: -
returns: `void`

Returns a plain text label based on the option's content.

### sanitizeValueForDelimiter()

parameters: -
returns: `void`

Replaces any occurrences of the delimiter in the option's original value with underscores.

## Available CSS Parts

- `base`: The component's base wrapper.
- `checked-icon`: The checked icon, an `<syn-icon>` element.
- `label`: The option's label.
- `prefix`: The container that wraps the prefix.
- `suffix`: The container that wraps the suffix.

## Dependencies

- `syn-icon`

## Examples

## Default

Options define the selectable items within various form controls such as select.

```html
<syn-select label="Select one">
  <syn-option value="Option_1"> Option 1 </syn-option>

  <syn-option value="Option_2">Option 2</syn-option>
  <syn-option value="Option_3">Option 3</syn-option>
</syn-select>
```

---

## Disabled

Use the disabled attribute to disable an option and prevent it from being selected.

```html
<syn-select label="Select one">
  <syn-option value="option-1">Email</syn-option>
  <syn-option value="option-2" disabled="">Phone</syn-option>
  <syn-option value="option-3">Chat</syn-option>

  <syn-option value="option-4" disabled="">
    <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
    <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
    Other
  </syn-option>
  <!-- /Regression#1277 -->
</syn-select>
```

---

## Prefix And Suffix

Add icons to the start and end of menu items using the prefix and suffix slots.

```html
<syn-select label="Select one" open="">
  <syn-option value="option-1">
    <syn-icon slot="prefix" name="email"></syn-icon>
    Email
    <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
  </syn-option>

  <syn-option value="option-2">
    <syn-icon slot="prefix" name="local_phone"></syn-icon>
    Phone
    <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
  </syn-option>

  <syn-option value="option-3">
    <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
    Chat
    <syn-icon slot="suffix" name="check_circle_outline"></syn-icon>
  </syn-option>
</syn-select>
```