# syn-badge

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-badge

## Rules

# syn-badge

## Summary

Badges are used to draw attention and display statuses or counts.

## Common Use Cases

- Show the count of newly added items
- Display the number of messages received or tasks still pending
- Present the quantity of items collected, like those in a shopping cart

## Usage Guidelines

### Variants & When to Use Them

- **Primary** variant: Use for general status indicators, counts, or default emphasis.
- **Success** variant: Use for positive states such as completed, confirmed, or available.
- **Warning** variant: Use for cautionary states or information that needs attention.
- **Critical** variant: Use for urgent, high-severity states that require immediate awareness.
- **Error** variant: Use for failed, blocked, or problematic states.
- ~~**Danger** variant~~: Do not use. This variant is deprecated and will be removed in a future major release. Use the error variant instead.
- **Neutral** variant: Use for low-emphasis informational statuses that should remain visible but not draw strong attention.
- Use one variant consistently per badge so the color matches the status meaning.

### Content

- Use "+" for overflow values set by the application
- Use an empty badge when you only need a compact visual status indicator without a numeric count or text label.
- Reserve the dot-only badge for states that are already clear from the surrounding context, such as an anchored indicator on an icon or navigation item.
- Do not rely on the dot-only badge as the only way to communicate critical meaning. Provide nearby text or another accessible cue when the status matters.

### Placement

- Place where it preserves relation to the assigned element
- Do not obscure any informative element or text
- Do not alter the number formatting

## Accessibility

- Avoid using badges for purely decorative purposes
- Ensure badge is sized and placed so it does not obscure other content or controls
- If the badge conveys critical information, provide it in text elsewhere too
- Use aria-live when badge content updates dynamically

## Known Issues

- **Safari**: Badge with role='status' inside syn-button does not announce updates
- **Firefox**: Only announces content of the element that has updates when multiple elements are inside the badge

## Interface

# syn-badge

## Summary

Badges are used to draw attention and display statuses or counts.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-badge--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41137-656313)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=14127-697924)

## Class Information

- **Tag Name:** `syn-badge`
- **Import Example:** `import SynBadge from '@synergy-design-system/components/components/badge/badge.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.14.0

## Available Slots

- `(default)`: The badge's content.

## Available Properties

### variant

attribute: `variant`
reflects: yes
type: `'primary' | 'success' | 'neutral' | 'warning' | 'critical' | 'error' | 'danger'`
default: `'primary'`

The badge's theme variant.

The `danger` variant is deprecated and will be removed in a future release. Use `error` instead.

## Available CSS Parts

- `base`: The component's base wrapper.

## Examples

## Default

Badges are used to draw attention and display statuses or counts.

```html
<syn-badge> Badge </syn-badge>
```

---

## Variants

Set the variant attribute to change the badge’s variant.

```html
<div style="display: flex; gap: var(--syn-spacing-large)">
  <syn-badge variant="primary">primary</syn-badge>
  <syn-badge variant="success">success</syn-badge>
  <syn-badge variant="warning">warning</syn-badge>
  <syn-badge variant="critical">critical</syn-badge>
  <syn-badge variant="error">error</syn-badge>
  <syn-badge variant="danger">danger*</syn-badge>
  <syn-badge variant="neutral">neutral</syn-badge>
</div>
```

---

## With Buttons

One of the most common use cases for badges is attaching them to buttons. DEV: To make this easier, badges will be automatically positioned at the top-right when they’re a child of a button.

```html
<div style="display: flex; gap: var(--syn-spacing-2x-large)">
  <syn-button>
    Requests
    <syn-badge pill="">30</syn-badge>
  </syn-button>

  <syn-button>
    Warnings
    <syn-badge variant="warning" pill="">8</syn-badge>
  </syn-button>

  <syn-button>
    Errors
    <syn-badge variant="error" pill="">6</syn-badge>
  </syn-button>
</div>
```

---

## With Menu Items

When including badges in menu items, use the suffix slot to make sure they’re aligned correctly.

```html
<syn-menu style="max-width: 228px">
  <syn-menu-label>Messages</syn-menu-label>
  <syn-menu-item
    >Comments
    <syn-badge slot="suffix" variant="primary" pill=""
      >4</syn-badge
    ></syn-menu-item
  >
  <syn-menu-item
    >Replies
    <syn-badge slot="suffix" variant="primary" pill=""
      >12</syn-badge
    ></syn-menu-item
  >
</syn-menu>
```

---

## With Empty Content

Badges can be used without content to just show an status indicator.

```html
<div
  style="display: flex; position: relative; gap: var(--syn-spacing-3x-large)"
>
  <syn-popup active="" distance="-3" placement="right-start" skidding="-12">
    <syn-icon
      name="wallpaper"
      style="font-size: var(--syn-font-size-x-large)"
      slot="anchor"
    ></syn-icon>
    <syn-badge></syn-badge>
  </syn-popup>

  <syn-popup active="" distance="-10" placement="right-start" skidding="-14">
    <syn-icon
      name="wallpaper"
      style="font-size: var(--syn-font-size-x-large)"
      slot="anchor"
    ></syn-icon>
    <syn-badge>12</syn-badge>
  </syn-popup>
</div>
```