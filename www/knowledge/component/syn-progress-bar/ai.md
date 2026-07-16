# syn-progress-bar

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-progress-bar

## Rules

# syn-progress-bar

## Summary

Progress bars are used to show the status of an ongoing operation.

## Common Use Cases

- Show progress for uploads, downloads, or data processing.
- Indicate completion status in multi-step operations.
- Display background task progress in dashboards and forms.

## Usage Guidelines

### Determinate vs Indeterminate

- Use determinate mode for measurable tasks such as uploads or imports.
- Use indeterminate mode for short operations when duration cannot be estimated.
- Switch to determinate mode as soon as reliable progress information is available.

### Labels and Values

- Provide descriptive labels that state what process is progressing.
- Show values when users benefit from precise completion feedback.
- Keep labeling consistent across similar processes.

### Visual Styling

- Use custom heights carefully to preserve readability and visual balance.
- Maintain sufficient contrast between track and indicator.
- Avoid decorative overuse of animated progress indicators.

## Accessibility

- Provide accessible labels for progress context, especially when multiple bars are visible.
- Use determinate mode when actual progress is known and indeterminate only when unknown.
- Do not rely on color only to communicate progress status.

## Related Components

- syn-progress-ring
- syn-spinner

## Interface

# syn-progress-bar

## Summary

Progress bars are used to show the status of an ongoing operation.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-progress-bar--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41203-297162)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=16209-20856)

## Class Information

- **Tag Name:** `syn-progress-bar`
- **Import Example:** `import SynProgressBar from '@synergy-design-system/components/components/progress-bar/progress-bar.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.19.0

## Available Slots

- `(default)`: A label to show inside the progress indicator.

## Available Properties

### indeterminate

attribute: `indeterminate`
reflects: yes
type: `boolean`
default: `false`

When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

A custom label for assistive devices.

### value

attribute: `value`
reflects: yes
type: `number`
default: `0`

The current progress as a percentage, 0 to 100.

## Available CSS Parts

- `base`: The component's base wrapper.
- `indicator`: The progress bar's indicator.
- `label`: The progress bar's label.

## Examples

## Default

Progress bars are used to show the status of an ongoing operation.

```html
<syn-progress-bar value="33.3"></syn-progress-bar>
```

---

## Labels

Use the label attribute to label the progress bar and tell assistive devices how to announce it.

```html
<syn-progress-bar value="25" label="Upload progress">25%</syn-progress-bar>
```

---

## Custom Height

Use the --height custom property to set the progress bar’s height.

```html
<syn-progress-bar
  value="50"
  style="--height: var(--syn-spacing-2x-small)"
></syn-progress-bar>
```

---

## Showing Values

Use the default slot to show a value.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium)"
>
  <syn-progress-bar value="60" class="progress-bar-values"
    >60%</syn-progress-bar
  >

  <div style="display: flex; gap: var(--syn-spacing-x-small)">
    <syn-button variant="outline" size="small">
      <syn-icon
        name="indeterminate"
        library="system"
        label="Decrease"
      ></syn-icon>
    </syn-button>
    <syn-button variant="outline" size="small">
      <syn-icon name="add" library="system" label="Increase"></syn-icon>
    </syn-button>
  </div>
</div>

<script type="module">
  const progressBar = document.querySelector(".progress-bar-values");
  const subtractButton = progressBar.nextElementSibling.firstElementChild;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener("click", () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = value + "%";
  });

  subtractButton.addEventListener("click", () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = value + "%";
  });
</script>
```

---

## Indeterminate

The indeterminate attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, value is ignored and the label, if present, will not be shown.

```html
<syn-progress-bar indeterminate=""></syn-progress-bar>
```