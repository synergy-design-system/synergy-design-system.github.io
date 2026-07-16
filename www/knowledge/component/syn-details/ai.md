# syn-details

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-details

## Rules

# syn-details

## Summary

Details show a brief summary and expand to show additional content.

## Common Use Cases

- Revealing additional content, such as a detailed description, specifications, or additional options without overwhelming the user with too much content at once.
- Interactive elements like a single FAQ item, where the user can expand to see the answer.
- Useful in forms to hide optional sections that the user can expand if needed, keeping the form clean and concise.

## Usage Guidelines

### Slots

- Use the "summary" slot to add text to the header.
- Use the "default" slot to add content.

### Header Summary

- Make sure the header summary clearly describes the content inside.
- Keep header summaries concise to prevent them from wrapping onto multiple lines.

### Content

- Ensure the content is focused and necessary. If the information can be splitted into different meaningful units, consider using syn-accordion.
- Avoid using collapsible sections for information that must always be visible.

## Accessibility

- Use only for non-critical information. Hiding content can become a potential barrier, making content more challenging to discover.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

## Related Components

- syn-accordion

## Interface

# syn-details

## Summary

Details show a brief summary and expand to show additional content.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-details--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41227-232486)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=20877-88398)

## Class Information

- **Tag Name:** `syn-details`
- **Import Example:** `import SynDetails from '@synergy-design-system/components/components/details/details.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.3.0

## Available Slots

- `(default)`: The details' main content.
- `summary`: The details' summary. Alternatively, you can use the `summary` attribute.
- `expand-icon`: Optional expand icon to use instead of the default. Works best with `<syn-icon>`.
- `collapse-icon`: Optional collapse icon to use instead of the default. Works best with `<syn-icon>`.

## Available Properties

### contained

attribute: `contained`
reflects: yes
type: `boolean`
default: `false`

Draws the details as contained element.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the details so it can't be toggled.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The details's size.

### summary

attribute: `summary`
reflects: no
type: `string`
default: none

The summary to show in the header. If you need to display HTML, use the `summary` slot instead.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the details

### show()

parameters: -
returns: `void`

Shows the details.

## Available CSS Parts

- `base`: The component's base wrapper.
- `body`: The container that wraps the details content.
- `content`: The details content.
- `header`: The header that wraps both the summary and the expand/collapse icon.
- `summary`: The container that wraps the summary.
- `summary-icon`: The container that wraps the expand/collapse icons.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the details closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the details opens and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the details closes.

### syn-show

type: `SynShowEvent`

Emitted when the details opens.

## Dependencies

- `syn-icon`

## Examples

## Default

Details show a brief summary and expand to show additional content. If you want to group the details, we recommend that you use the syn-accordion component.

```html
<syn-details summary="Toggle Me" contained="">
  <h3
    style="
      margin: 0 0 var(--syn-spacing-x-small);
      font: var(--syn-body-small-bold);
    "
  >
    Subheadline
  </h3>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</syn-details>
```

---

## Open

Details show a brief summary and expand to show additional content.

```html
<syn-details summary="Toggle Me" open="">
  <h3
    style="
      margin: 0 0 var(--syn-spacing-x-small);
      font: var(--syn-body-small-bold);
    "
  >
    Subheadline
  </h3>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</syn-details>
```

---

## Contained

To give content more structure, you can use the property contained.

```html
<syn-details summary="Toggle Me" contained="">
  <h3
    style="
      margin: 0 0 var(--syn-spacing-x-small);
      font: var(--syn-body-small-bold);
    "
  >
    Subheadline
  </h3>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</syn-details>
<br />
<syn-details summary="Toggle Me" open="" contained="">
  <h3
    style="
      margin: 0 0 var(--syn-spacing-x-small);
      font: var(--syn-body-small-bold);
    "
  >
    Subheadline
  </h3>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</syn-details>
```

---

## Focus

The focus event gives the user feedback that the detail has been focused by the keyboard interaction.

```html
<div style="padding: 5px">
  <syn-details summary="Toggle Me" contained="">
    <h3
      style="
        margin: 0 0 var(--syn-spacing-x-small);
        font: var(--syn-body-small-bold);
      "
    >
      Subheadline
    </h3>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </syn-details>
</div>
```

---

## Disabled

Use the disable attribute to prevent the details from expanding.

```html
<syn-details summary="Toggle Me" disabled="">
  <h3
    style="
      margin: 0 0 var(--syn-spacing-x-small);
      font: var(--syn-body-small-bold);
    "
  >
    Subheadline
  </h3>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</syn-details>
```

---

## Sizes

Use the size attribute to change a detail’s size.

```html
<div
  style="display: flex; gap: var(--syn-spacing-x-small); flex-direction: column"
>
  <syn-details size="small" contained="">
    <span slot="summary">Toggle Me</span>
    <h3
      style="
        margin: 0 0 var(--syn-spacing-x-small);
        font: var(--syn-body-x-small-bold);
      "
    >
      Subheadline
    </h3>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </syn-details>
  <syn-details size="medium" contained="">
    <span slot="summary">Toggle Me</span>
    <h3
      style="
        margin: 0 0 var(--syn-spacing-x-small);
        font: var(--syn-body-small-bold);
      "
    >
      Subheadline
    </h3>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </syn-details>
  <syn-details size="large" contained="">
    <span slot="summary">Toggle Me</span>
    <h3
      style="
        margin: 0 0 var(--syn-spacing-x-small);
        font: var(--syn-body-medium-bold);
      "
    >
      Subheadline
    </h3>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </syn-details>
</div>
```

---

## Prefix Icons

Use the prefix Icon to prepend an icon to the details.

```html
<syn-details open="">
  <syn-icon name="home" slot="summary"></syn-icon>
  <span slot="summary">Accordion Element</span>
  <h3
    style="
      margin: 0 0 var(--syn-spacing-x-small);
      font: var(--syn-body-small-bold);
    "
  >
    Subheadline
  </h3>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
</syn-details>
```