# syn-breadcrumb

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-breadcrumb

## Rules

# syn-breadcrumb

## Summary

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

## Common Use Cases

- Clarify user location within the website or app hierarchy, improving orientation.
- Allow easy navigation back to previous pages or higher-level sections.
- Enhance discoverability by displaying category paths or product hierarchy levels.
- Simplify backtracking from filtered or search result pages to broader content areas.

## Usage Guidelines

### Content and Labeling

- Use clear and descriptive labels that accurately represent each page or section in the navigation path.
- Keep breadcrumb trails short and easy to read to avoid overwhelming users.
- The final breadcrumb item should be non-clickable, as it represents the current page or location.

### Placement and Consistency

- Ensure breadcrumbs are placed consistently across pages to align with user expectations.
- Use breadcrumbs primarily in structured, multi-level navigation contexts. Avoid implementing them for non-hierarchical or dynamically generated paths, where they may confuse rather than assist users.

### Responsiveness

- On mobile devices breadcrumb must be shortened to only provide a link to the higher-level page.

## Accessibility

- Dynamically update breadcrumbs and announce changes with aria-live for screen readers.
- Provide clear labels for breadcrumb items to ensure screen readers convey the navigation path effectively.

## Related Components

- syn-breadcrumb-item

## Related Templates

- Breadcrumb

## Interface

# syn-breadcrumb

## Summary

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-breadcrumb--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41137-748938)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=18458-27241)

## Class Information

- **Tag Name:** `syn-breadcrumb`
- **Import Example:** `import SynBreadcrumb from '@synergy-design-system/components/components/breadcrumb/breadcrumb.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.26.0

## Available Slots

- `(default)`: One or more breadcrumb items to display.
- `separator`: The separator to use between breadcrumb items. Works best with `<syn-icon>`.

## Available Properties

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users.

## Available CSS Parts

- `base`: The component's base wrapper.

## Dependencies

- `syn-icon`

## Examples

## Default

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy. Breadcrumbs are usually placed before a page’s main content with the current page shown last to indicate the user’s position in the navigation.

```html
<syn-breadcrumb>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
</syn-breadcrumb>
```

---

## Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you’ll need to add event listeners to handle clicks.For websites, you’ll probably want to use links instead. You can make any breadcrumb item a link by applying an href attribute to it. Now, when the user activates it, they’ll be taken to the corresponding page — no event listeners required.

```html
<syn-breadcrumb>
  <syn-breadcrumb-item href="#" target="_blank"
    >Breadcrumb Item</syn-breadcrumb-item
  >
  <syn-breadcrumb-item href="#" target="_blank"
    >Breadcrumb Item</syn-breadcrumb-item
  >
  <syn-breadcrumb-item href="#" target="_blank"
    >Breadcrumb Item</syn-breadcrumb-item
  >
  <syn-breadcrumb-item href="#" target="_blank"
    >Breadcrumb Item</syn-breadcrumb-item
  >
</syn-breadcrumb>
```

---

## Prefixes

Use the prefix slot to add content before any breadcrumb item.

```html
<syn-breadcrumb>
  <syn-breadcrumb-item>
    <syn-icon slot="prefix" name="home"></syn-icon>
    Breadcrumb Item
  </syn-breadcrumb-item>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
</syn-breadcrumb>
```

---

## Suffixes

Use the suffix slot to add content after any breadcrumb item.

```html
<syn-breadcrumb>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  <syn-breadcrumb-item>
    Breadcrumb Item
    <syn-icon slot="suffix" name="security"></syn-icon>
  </syn-breadcrumb-item>
</syn-breadcrumb>
```

---

## With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html
<!-- This <div> is only here for positioning the dropdown in storybook -->
<div style="position: relative">
  <syn-breadcrumb>
    <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    <syn-breadcrumb-item>
      <syn-dropdown>
        <button slot="trigger" class="manual-trigger">
          <syn-icon label="More options" name="more_horiz"></syn-icon>
        </button>
        <syn-menu>
          <syn-menu-item>Breadcrumb Item</syn-menu-item>
          <syn-menu-item>Breadcrumb Item</syn-menu-item>
          <syn-menu-item>Breadcrumb Item</syn-menu-item>
        </syn-menu>
      </syn-dropdown>
    </syn-breadcrumb-item>
    <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
    <syn-breadcrumb-item>Breadcrumb Item</syn-breadcrumb-item>
  </syn-breadcrumb>
</div>
<style>
  .manual-trigger {
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: var(--syn-font-size-small);
    margin: 0;
    padding: 0;
  }
</style>
```