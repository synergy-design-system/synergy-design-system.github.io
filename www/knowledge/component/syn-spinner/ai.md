# syn-spinner

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-spinner

## Rules

# syn-spinner

## Summary

Spinners are used to show the progress of an indeterminate operation.

## Common Use Cases

- Indicate that content is being loaded, such as when fetching data from a server or loading a new page.
- Show ongoing background processes, like file uploads or data processing tasks.
- Used within buttons or interactive elements to indicate that an action is being processed.
- Apply to sections of a page that are loading independently, such as widgets or panels.
- Display when a form is being submitted to show that the submission is in progress.

## Usage Guidelines

### Behavior and Placement

- Use for processes that take a short amount of time (typically under 4 seconds).
- Apply within specific sections rather than blocking the entire page, unless absolutely necessary.
- Place in a consistent location relative to the content it is loading.

### Content

- Include a label or message to provide context about what is being loaded, especially if the loading time is long.

### Styling

- Maintain consistency in size and style; avoid using spinners of varying sizes on the same page.

## Accessibility

- Assign role="status" or use a live region (e.g., aria-live="polite") to inform screen reader users of ongoing loading.
- A spinner shouldn't itself be focusable or interactive, nor prevent from navigating to other parts of the page while loading continues.

## Known Issues

- **Safari**: The spinner component may experience animation issues in Safari, causing it to appear wobbly.

## Interface

# syn-spinner

## Summary

Spinners are used to show the progress of an indeterminate operation.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-spinner--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41227-223775)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=17016-71772)

## Class Information

- **Tag Name:** `syn-spinner`
- **Import Example:** `import SynSpinner from '@synergy-design-system/components/components/spinner/spinner.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.22.0

## Available CSS Parts

- `base`: The component's base wrapper.

## Examples

## Default

Spinners are used to show the progress of an indeterminate operation.

```html
<syn-spinner></syn-spinner>
```

---

## Size

Spinners are sized based on the current font size. To change their size, set the font-size property on the spinner itself or on a parent element as shown below.

```html
<div
  style="align-items: baseline; display: flex; gap: var(--syn-spacing-large)"
>
  <syn-spinner style="font-size: var(--syn-font-size-medium)"></syn-spinner>
  <syn-spinner style="font-size: var(--syn-font-size-2x-large)"></syn-spinner>
  <syn-spinner style="font-size: 40px"></syn-spinner>
</div>
```

---

## Track Width

The width of the spinner’s track can be changed by setting the --track-width custom property.

```html
<syn-spinner style="font-size: 48px; --track-width: 8px"></syn-spinner>
```

---

## Color

The spinner’s colors can be changed by setting the --indicator-color and --track-color custom properties.

```html
<syn-spinner
  style="font-size: 48px; --indicator-color: var(--syn-color-error-600)"
></syn-spinner>
```