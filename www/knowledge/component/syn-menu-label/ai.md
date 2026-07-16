# syn-menu-label

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-menu-label

## Rules

# syn-menu-label

## Summary

Menu labels are used to describe a group of menu items.

## Common Use Cases

- Organize command menus with multiple categories.
- Separate account actions from content actions.
- Improve scannability in dropdown and context menus.

## Usage Guidelines

### Grouping

- Use menu labels to separate related item groups in large menus.
- Use consistent grouping logic such as task type, frequency, or section.
- Avoid too many groups that make scanning harder.

### Content

- Use concise titles such as "File" or "Account".
- Use sentence case or title case consistently across the menu.
- Avoid verbose labels that duplicate menu item wording.

### Menu Structure

- Pair menu labels with separators when visual grouping needs reinforcement.
- Keep group sizes balanced to avoid very long unbroken sections.
- Ensure grouped items remain logically ordered within each section.

## Accessibility

- Use menu labels to improve orientation in long menus and grouped options.
- Keep label text short so assistive technologies announce groups efficiently.
- Do not use menu labels as interactive menu items.

## Related Components

- syn-menu
- syn-menu-item
- syn-divider

## Interface

# syn-menu-label

## Summary

Menu labels are used to describe a group of menu items.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-menu-label--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41203-427127)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=10666-9080)

## Class Information

- **Tag Name:** `syn-menu-label`
- **Import Example:** `import SynMenuLabel from '@synergy-design-system/components/components/menu-label/menu-label.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.12.0

## Available Slots

- `(default)`: The menu label's content.

## Available CSS Parts

- `base`: The component's base wrapper.
- `divider`: The divider that is displayed above the content
- `label`: The label that is displayed below the divider

## Dependencies

- `syn-divider`

## Examples

## Default

Menu labels are used to describe a group of menu items.

```html
<syn-menu style="width: 200px">
  <syn-menu-label> Fruits </syn-menu-label>

  <syn-menu-item>Apple</syn-menu-item>
  <syn-menu-item>Banana</syn-menu-item>
  <syn-menu-item>Orange</syn-menu-item>
  <syn-menu-label>Vegetables</syn-menu-label>
  <syn-menu-item>Broccoli</syn-menu-item>
  <syn-menu-item>Carrot</syn-menu-item>
  <syn-menu-item>Zucchini</syn-menu-item>
</syn-menu>
```