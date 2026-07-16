# syn-progress-ring

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-progress-ring

## Rules

# syn-progress-ring

## Summary

Progress rings are used to show the progress of a determinate operation in a circular fashion.

## Common Use Cases

- Compact progress indication in cards or widgets.
- Show operation progress in dashboards and modal dialogs.
- Indicate completion state in space constrained UI areas.

## Usage Guidelines

### Progress Semantics

- Use progress rings when a compact circular indicator fits the layout better than a bar.
- Use determinate mode when the progress value is known.
- Avoid using rings for long verbose progress explanations.

### Size and Stroke

- Adjust size based on container density and reading distance.
- Use track and indicator width values that keep the ring legible at small sizes.
- Keep sizing consistent across similar components in one view.

### Labels and Values

- Include labels or nearby text describing the operation.
- Show percentage values when users need exact feedback.
- Use concise text to avoid crowding around the ring.

## Accessibility

- Provide clear labels for ring progress when meaning is not obvious from context.
- Use determinate values for measurable tasks and avoid ambiguous visual states.
- Ensure color choices meet contrast requirements against the background.

## Related Components

- syn-progress-bar
- syn-spinner

## Interface

# syn-progress-ring

## Summary

Progress rings are used to show the progress of a determinate operation in a circular fashion.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-progress-ring--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41203-296727)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=16193-20867)

## Class Information

- **Tag Name:** `syn-progress-ring`
- **Import Example:** `import SynProgressRing from '@synergy-design-system/components/components/progress-ring/progress-ring.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.18.0

## Available Slots

- `(default)`: A label to show inside the ring.

## Available Properties

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
- `label`: The progress ring label.

## Examples

## Default

Progress rings are used to show the progress of a determinate operation in a circular fashion.

```html
<syn-progress-ring value="25"></syn-progress-ring>
```

---

## Size

Use the --size custom property to set the diameter of the progress ring.

```html
<syn-progress-ring value="35" style="--size: 48px"></syn-progress-ring>
```

---

## Track And Indicator Width

Use the --track-width and --indicator-width custom properties to set the width of the progress ring’s track and indicator.

```html
<syn-progress-ring
  value="50"
  style="--track-width: 4px; --indicator-width: 8px"
></syn-progress-ring>
```

---

## Colors

To change the color, use the --track-color and --indicator-color custom properties.

```html
<syn-progress-ring
  value="50"
  style="--indicator-color: var(--syn-color-success-700)"
></syn-progress-ring>
```

---

## Labels

Use the label attribute to label the progress ring and tell assistive devices how to announce it.

```html
<syn-progress-ring value="50" label="Upload progress"></syn-progress-ring>
```

---

## Showing Values

Use the default slot to show a label inside the progress ring. To display the value correctly, you should keep to a minimum width of 85 pixels.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium)"
>
  <syn-progress-ring value="50" class="progress-ring-values"
    >50%</syn-progress-ring
  >
  <div style="display: flex; gap: var(--syn-spacing-x-small)">
    <syn-button variant="outline">
      <syn-icon
        name="indeterminate"
        library="system"
        label="Decrease"
      ></syn-icon>
    </syn-button>
    <syn-button variant="outline">
      <syn-icon name="add" library="system" label="Increase"></syn-icon>
    </syn-button>
  </div>
</div>

<script type="module">
  const progressRing = document.querySelector(".progress-ring-values");
  const subtractButton = progressRing.nextElementSibling.firstElementChild;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener("click", () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = value + "%";
  });

  subtractButton.addEventListener("click", () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = value + "%";
  });
</script>
```