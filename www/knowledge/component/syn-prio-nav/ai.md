# syn-prio-nav

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-prio-nav

## Rules

# syn-prio-nav

## Summary

The `<syn-prio-nav />` element provides a generic navigation bar
that can be used to group multiple navigation items (usually horizontal `<syn-nav-item />`s)
together. It will automatically group all items not visible in the viewport into a custom
priority menu.

## Common Use Cases

- Primary horizontal navigation with overflow handling.
- App headers that must adapt to changing viewport widths.
- Section navigation where top destinations should stay visible.

## Usage Guidelines

### Priority Handling

- Place the most important destinations first so they stay visible longer.
- Move lower priority items into overflow menus when space is limited.
- Review priority order regularly as product usage evolves.

### Labels and Structure

- Keep labels short and distinct to prevent truncation and ambiguity.
- Avoid deep nesting in top level priority navigation.
- Use predictable ordering patterns such as task or category order.

### Responsive Behavior

- Test behavior at common breakpoints to ensure overflow remains usable.
- Ensure menu fallback remains discoverable on narrow viewports.
- Keep interaction patterns consistent between desktop and mobile.

## Accessibility

- Ensure navigation items are keyboard reachable and ordered logically.
- Use clear labels that reflect destination and not internal naming.
- Communicate current location with proper active state semantics.

## Related Components

- syn-nav-item
- syn-menu
- syn-menu-item
- syn-header

## Interface

# syn-prio-nav

## Summary

The `<syn-prio-nav />` element provides a generic navigation bar
that can be used to group multiple navigation items (usually horizontal `<syn-nav-item />`s)
together. It will automatically group all items not visible in the viewport into a custom
priority menu.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-prio-nav--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41227-206412)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=12362-10982)

## Class Information

- **Tag Name:** `syn-prio-nav`
- **Import Example:** `import SynPrioNav from '@synergy-design-system/components/components/prio-nav/prio-nav.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.15.0

## Available Slots

- `(default)`: The given navigation items. Must be horizontal `<syn-nav-item>`s or have a role of "menuitem"

## Available CSS Parts

- `base`: The component's base wrapper.
- `priority-menu`: The wrapper around the priority menu
- `priority-menu-container`: The container for the shifted navigation items, if there is not enough space.
- `priority-menu-icon`: The icon for the priority menu
- `priority-menu-label`: The label for the priority menu
- `priority-menu-nav-item`: The navigation item for the priority menu

## Dependencies

- `syn-dropdown`
- `syn-icon`
- `syn-menu`
- `syn-nav-item`

## Examples

## Default

Priority navigation is supported as product navigation if required. This navigation layout provides a high level of findability and support so that users know where they are at all times and can ensure that they can easily reach their goals.Note: Please note that the priority navigation does not have a child menu navigation, if you want to have a child navigation, combine the priority navigation and the side navigation

```html
<syn-prio-nav>
  <syn-nav-item current="" horizontal="">Domains</syn-nav-item>
  <syn-nav-item horizontal="">Projects</syn-nav-item>
  <syn-nav-item horizontal="" href="javascript:void(0)">Trainings</syn-nav-item>
</syn-prio-nav>
```

---

## Priority Menu

If there is not enough space, elements will move into a dropdown. If there is only space for one item, it will display the priority menu only.

```html
<div
  style="
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-2x-large);
  "
>
  <syn-prio-nav style="width: 220px">
    <syn-nav-item current="" horizontal="">Domains</syn-nav-item>
    <syn-nav-item horizontal="" href="javascript:void(0)"
      >Projects</syn-nav-item
    >
    <syn-nav-item horizontal="">Trainings</syn-nav-item>
  </syn-prio-nav>
  <syn-prio-nav style="width: 170px">
    <syn-nav-item current="" horizontal="">Domains</syn-nav-item>
    <syn-nav-item horizontal="" href="javascript:void(0)"
      >Projects</syn-nav-item
    >
    <syn-nav-item horizontal="">Trainings</syn-nav-item>
  </syn-prio-nav>
</div>
```