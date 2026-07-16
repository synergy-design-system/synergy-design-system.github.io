# syn-divider

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-divider

## Rules

# syn-divider

## Summary

Dividers are used to visually separate or group elements.

## Common Use Cases

- Separate distinct item groups to help users clearly see and understand how different pieces of content relate to one another.
- Provide visual breaks in long pages or forms to improve readability.

## Usage Guidelines

### Spacing and Consistency

- Maintain consistent spacing around separators to prevent them from appearing cramped or too distant from the content they divide.
- Ensure consistent use to prevent confusion, especially for users relying on assistive technologies.

### Whitespace vs Visual Separators

- Leverage whitespace effectively as a natural divider, which can offer a clean, easy to read and organised design without additional visual elements.

## Accessibility

- Verify that dividers are visible and distinct in high contrast mode settings, which are often used by users with visual impairments.
- Use to provide clear separation between sections, helping users understand content flow. Screen readers announce dividers, offering context about transitions between sections.

## Interface

# syn-divider

## Summary

Dividers are used to visually separate or group elements.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-divider--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41227-216341)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=4933-9570)

## Class Information

- **Tag Name:** `syn-divider`
- **Import Example:** `import SynDivider from '@synergy-design-system/components/components/divider/divider.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.4.0

## Available Properties

### vertical

attribute: `vertical`
reflects: yes
type: `boolean`
default: `false`

Draws the divider in a vertical orientation.

## Examples

## Default

Dividers are used to visually separate or group elements.

```html
<syn-divider></syn-divider>
```

---

## Width

Use the --width custom property to change the width of the divider.

```html
<syn-divider style="--width: var(--syn-spacing-x-small)"></syn-divider>
```

---

## Color

Use the --color custom property to change the color of the divider.

```html
<syn-divider style="--color: var(--syn-color-primary-600)"></syn-divider>
```

---

## Spacing

Use the --spacing custom property to change the amount of space between the divider and it’s neighboring elements.

```html
<div style="text-align: center">
  Above
  <syn-divider style="--spacing: var(--syn-spacing-large)"></syn-divider>
  Below
</div>
```

---

## Vertical

Add the vertical attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html
<div style="display: flex; align-items: center; height: 2rem">
  First
  <syn-divider vertical=""></syn-divider>
  Middle
  <syn-divider vertical=""></syn-divider>
  Last
</div>
```