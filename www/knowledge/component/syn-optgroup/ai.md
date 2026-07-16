# syn-optgroup

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-optgroup

## Rules

# syn-optgroup

## Summary

The <syn-optgroup> element creates a grouping for <syn-option>s within a <syn-select>.

## Common Use Cases

- Provide options in selects or comboboxes.
- Allow users to select from a list of predefined choices in forms or settings, where they might choose one or more options.
- Present filter options in searches or data tables.

## Usage Guidelines

### Behavior

- Provide a reason or alternative if some choice is disabled.

### Content

- Make sure all items in the list are mutually exclusive and unambiguous to help users understand what they are selecting.
- Provide a default choice where applicable to guide users.
- Use the optional grouping label and/or divider attributes to visually identify the groups.

## Accessibility

- Ensure that the group label is short and concise as it may be read out when users enter the group.

## Related Components

- syn-select
- syn-combobox
- syn-option

## Related Templates

- Forms

## Interface

# syn-optgroup

## Summary

The <syn-optgroup> element creates a grouping for <syn-option>s within a <syn-select>.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-optgroup--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41325-324372)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=30344-112405)

## Class Information

- **Tag Name:** `syn-optgroup`
- **Import Example:** `import SynOptgroup from '@synergy-design-system/components/components/optgroup/optgroup.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.5.0

## Available Slots

- `(default)`: The given options. Must be `<syn-option>` elements.
- `prefix`: A presentational prefix icon or similar element.
- `label`: The label for the optgroup
- `suffix`: A presentational suffix icon or similar element.

## Available Properties

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables all options in the optgroup.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The optgroups label. If you need to display HTML, use the `label` slot instead.

## Available CSS Parts

- `base`: The component's base wrapper.
- `divider`: The divider that is displayed above the content
- `label-container`: The container that wraps prefix, label and base
- `options`: The container that wraps the <syn-option> elements.
- `prefix`: The container that wraps the prefix.
- `suffix`: The container that wraps the suffix.

## Dependencies

- `syn-divider`

## Examples

## Default

Use <syn-optgroup> to group listbox items visually.

```html
<syn-select>
  <syn-optgroup label="Section 1">
    <syn-option value="1">Option 1</syn-option>
    <syn-option value="2">Option 2</syn-option>
    <syn-option value="3">Option 3</syn-option>
  </syn-optgroup>

  <syn-optgroup label="Section 2">
    <syn-option value="4">Option 4</syn-option>
  </syn-optgroup>
</syn-select>
```

---

## Disabled

Use the disabled attribute in the <syn-optgroup> to disable the Section and prevent it from being selected.

```html
<syn-select>
  <syn-optgroup disabled="">
    <span slot="label">Section 1</span>
    <syn-option value="1">Option</syn-option>
    <syn-option value="2">Option</syn-option>
    <syn-option value="3">Option</syn-option>
  </syn-optgroup>
</syn-select>
```

---

## Prefix And Suffix

Add icons to the start and end of menu items using the prefix and suffix slots.

```html
<syn-select>
  <syn-optgroup label="Contact Support">
    <syn-icon name="contact_support" slot="prefix"></syn-icon>
    <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>

    <syn-option value="1">
      <syn-icon name="mail" slot="prefix"></syn-icon>
      <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
      E-Mail
    </syn-option>

    <syn-option value="2">
      <syn-icon name="phone" slot="prefix"></syn-icon>
      <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
      Phone
    </syn-option>

    <syn-option value="3">
      <syn-icon name="chat_bubble_outline" slot="prefix"></syn-icon>
      <syn-icon name="check_circle_outline" slot="suffix"></syn-icon>
      Chat
    </syn-option>
  </syn-optgroup>
</syn-select>
```