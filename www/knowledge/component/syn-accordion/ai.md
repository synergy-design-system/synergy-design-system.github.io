# syn-accordion

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-accordion

## Rules

# syn-accordion

## Summary

Accordions provide the ability to group a list of `<syn-details>`.

## Common Use Cases

- Organise content into collapsible sections to save space.
- Display FAQs where each question can be expanded to reveal its answer.
- Structure lengthy content into manageable expandable sections.
- Create navigational menus where each section can be expanded to show sub-items, mainly for small viewports.

## Usage Guidelines

### Behavior

- Keep only one section open at a time to prevent information overload, unless multiple open sections are necessary.
- Avoid nesting collapsible sections within each other to prevent a confusing user experience.

### Content

- Ensure the content is relevant and necessary; avoid including unrelated information.
- Avoid using collapsible sections for content that needs to be always visible or is critical for immediate user attention.

## Accessibility

- Use only for non-critical information. Hiding content can become a potential barrier, making content more challenging to discover.
- Use “close-others” attribute to keep only one item from the group open at a time, reducing the amount of information displayed at once and therefore reducing the cognitive load on the user.

## Related Components

- syn-details

## Interface

# syn-accordion

## Summary

Accordions provide the ability to group a list of `<syn-details>`.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-accordion--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41094-279501)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=20877-88547)

## Class Information

- **Tag Name:** `syn-accordion`
- **Import Example:** `import SynAccordion from '@synergy-design-system/components/components/accordion/accordion.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.3.0

## Available Slots

- `(default)`: The accordion's main content. Must be `<syn-details />` elements.

## Available Properties

### closeOthers

attribute: `close-others`
reflects: no
type: `boolean`
default: `false`

Indicates whether or not multiple `<syn-detail>` elements can be open at the same time.

### contained

attribute: `contained`
reflects: yes
type: `boolean`
default: `false`

Draws the accordion and the slotted `<syn-details>` as contained elements.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The size that should be applied to all slotted `<syn-details>` elements

## Available CSS Parts

- `base`: The component's base wrapper.

## Examples

## Default

Accordion is a group of syn-details to show a brief summary and expand to show additional content.

```html
<syn-accordion>
  <syn-details summary="First" open="">
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
  <syn-details summary="Second">
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
  <syn-details summary="Third">
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
</syn-accordion>
```

---

## Contained

To give content more structure, you can use the property contained.

```html
<syn-accordion contained="">
  <syn-details open="">
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
  <syn-details>
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
  <syn-details>
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
</syn-accordion>
```

---

## Grouping Details

Set the close-others property to true to ensure only one detail is open at a time.

```html
<syn-accordion close-others="">
  <syn-details summary="First" open="">
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
  <syn-details summary="Second">
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
  <syn-details summary="Third">
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
</syn-accordion>
```

---

## Focus

The focus event gives the user feedback that the detail has been focused by the keyboard interaction.

```html
<div style="padding: 5px">
  <syn-accordion>
    <syn-details summary="Accordion Element">
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
    <syn-details summary="Accordion Element">
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
    <syn-details summary="Accordion Element">
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
  </syn-accordion>
</div>
```

---

## Disabled

Use the disable attribute to prevent the details from expanding.

```html
<syn-accordion>
  <syn-details summary="Accordion Element">
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
  <syn-details summary="Accordion Element" disabled="">
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
  <syn-details summary="Accordion Element">
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
</syn-accordion>
```

---

## Sizes

Use the size attribute to change a detail’s size. The size attribute should not be mixed within an accordion

```html
<syn-accordion class="accordion-size" size="small">
  <syn-details>
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
  <syn-details>
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
  <syn-details>
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
</syn-accordion>

<syn-accordion class="accordion-size" size="medium">
  <syn-details>
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
  <syn-details>
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
  <syn-details>
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
</syn-accordion>

<syn-accordion class="accordion-size" size="large">
  <syn-details>
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
  <syn-details>
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
  <syn-details>
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
</syn-accordion>

<style>
  .accordion-size:not(:first-of-type) {
    margin-top: var(--syn-spacing-2x-large);
  }
</style>

<script type="module">
  document.querySelectorAll(".accordion-size form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
</script>
```