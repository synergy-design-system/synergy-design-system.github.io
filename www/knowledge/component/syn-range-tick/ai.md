# syn-range-tick

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-range-tick

## Rules

# syn-range-tick

## Summary

Ticks visually improve positioning on range sliders.

## Common Use Cases

- Mark key values such as minimum, midpoint, and maximum on a range slider.
- Show meaningful breakpoints for pricing, durations, or configurable thresholds.
- Improve readability of uneven or grouped value scales in advanced range scenarios.
- Provide subdivision markers between primary ticks for better visual orientation.

## Usage Guidelines

### Scale Mapping

- Use syn-range-tick inside the ticks slot of syn-range to visualize value intervals along the slider track.
- Align tick labels with actual slider values so visual markers and range behavior stay consistent.
- Use short, scannable labels for major points such as min, mid, and max values.

### Subdivisions

- Use subdivision ticks to improve orientation between major labeled ticks.
- Avoid labeling every subdivision when it creates visual clutter; prioritize key waypoints.
- Keep spacing patterns predictable to avoid implying incorrect value intervals.

### Layout and Density

- Keep tick density proportional to available width so labels do not overlap on smaller screens.
- Test responsive behavior when using uneven spacing or custom groupings to ensure labels remain readable.
- Do not use ticks as standalone indicators outside a range context where values cannot be interpreted reliably.

## Accessibility

- Treat range ticks as supportive visual markers; do not rely on ticks alone to communicate critical values or state.
- Provide meaningful text labels for major ticks so users can understand the scale together with the range label and value output.
- Ensure tick labels have sufficient contrast and remain readable at all supported sizes and viewport widths.
- When subdivision ticks are unlabeled, ensure major labeled ticks still provide enough context for orientation.
- For precise input scenarios, provide an additional text or numeric input method because ticks are not interactive controls.

## Related Components

- syn-range

## Related Templates

- Forms

## Interface

# syn-range-tick

## Summary

Ticks visually improve positioning on range sliders.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-range-tick--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-326049)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=25215-38412)

## Class Information

- **Tag Name:** `syn-range-tick`
- **Import Example:** `import SynRangeTick from '@synergy-design-system/components/components/range-tick/range-tick.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.6.0

## Available Slots

- `(default)`: The tick's label

## Available Properties

### subdivision

attribute: `subdivision`
reflects: yes
type: `boolean`
default: `false`

Whether the tick should be shown as a subdivision.

## Available CSS Parts

- `base`: The component's base wrapper.
- `label`: The component's label.
- `line`: The component's tick line.

## Examples

## Default

Use the ticks slot to insert ticks or groups with ticks to improve positioning.

```html
<syn-range-tick></syn-range-tick>
```

---

## Labels

Use the default slot to give the tick a label.

```html
<syn-range-tick>0</syn-range-tick>
```

---

## Grouping

Grouping multiple ticks can be used as a scale. This can be used for uneven distributions as well.

```html
<div class="groupings">
  <div class="even-group">
    <syn-range-tick>0</syn-range-tick>
    <syn-range-tick>50</syn-range-tick>
    <syn-range-tick>100</syn-range-tick>
  </div>

  <div class="uneven-group">
    <syn-range-tick>1</syn-range-tick>
    <syn-range-tick>2</syn-range-tick>
    <syn-range-tick>3</syn-range-tick>
    <syn-range-tick>5</syn-range-tick>
    <syn-range-tick>8</syn-range-tick>
    <syn-range-tick>13</syn-range-tick>
  </div>
</div>
<style>
  .groupings {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-4x-large);
  }

  .even-group {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }

  .uneven-group {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }

  .uneven-group syn-range-tick {
    flex-grow: 1;
  }

  .uneven-group syn-range-tick:nth-child(3) {
    flex-grow: 2;
  }

  .uneven-group syn-range-tick:nth-child(4) {
    flex-grow: 3;
  }

  .uneven-group syn-range-tick:nth-child(5) {
    flex-grow: 5;
  }

  .uneven-group syn-range-tick:nth-child(6) {
    flex-grow: 0;
  }
</style>
```

---

## Subdivision Ticks

It is possible to divide the space between major ticks for finer scale readings.

```html
<div class="grouping">
  <syn-range-tick>0</syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick>50</syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick subdivision=""></syn-range-tick>
  <syn-range-tick>100</syn-range-tick>
</div>
<style>
  .grouping {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }
</style>
```