# syn-card

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-card

## Rules

# syn-card

## Summary

Cards can be used to group related subjects in a container.

## Common Use Cases

- Display grouped information such as KPIs, summaries, or previews.
- Provide a reusable container for dashboard elements.
- Present actionable items with a compact overview and clear next steps.

## Usage Guidelines

### Content

- Group related information into one card and keep each card focused on a single topic.
- Use clear headings and concise body text to improve scanability.
- Avoid overloading a card with too many actions or dense information.

### Layout and Hierarchy

- Use spacing and visual hierarchy to separate header, body, and footer regions.
- Align card width and density with surrounding content so cards feel consistent.
- Use shadows or sharp style consistently across a view.

### Actions

- Place primary actions in a predictable location such as the card footer.
- Use action labels that clearly describe the result.
- Limit actions to the most relevant options for the card context.

## Accessibility

- Ensure card content has a logical heading and text order so screen readers can parse it correctly.
- Do not use cards as the only way to access critical information or actions.
- Keep interactive elements inside cards keyboard reachable with clear focus indicators.

## Interface

# syn-card

## Summary

Cards can be used to group related subjects in a container.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-card--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42207-351610)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=44847-125816)

## Class Information

- **Tag Name:** `syn-card`
- **Import Example:** `import SynCard from '@synergy-design-system/components/components/card/card.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.25.0

## Available Slots

- `(default)`: The card's main content.
- `header`: An optional header for the card.
- `footer`: An optional footer for the card.
- `image`: An optional image to render at the start of the card.

## Available Properties

### shadow

attribute: `shadow`
reflects: yes
type: `boolean`
default: `false`

Draws the card with a shadow. Can be used when the card has to stand out visually, for example in dashboards.

### sharp

attribute: `sharp`
reflects: yes
type: `boolean`
default: `false`

Draws the card with sharp edges. Can be used e.g. when nesting multiple syn-cards to create hierarchy.

## Available CSS Parts

- `base`: The component's base wrapper.
- `body`: The container that wraps the card's main content.
- `footer`: The container that wraps the card's footer.
- `header`: The container that wraps the card's header.
- `image`: The container that wraps the card's image.

## Examples

## Default

Cards can be used to group related subjects in a container.

```html
<syn-card>
  <h3>Headline</h3>
  These are some happy employees, but not just any employees. These are SICK
  employees.

  <span slot="footer"> </span>
  <footer slot="footer">
    <small>Optional information</small>
    <nav>
      <syn-button variant="filled" size="small">More info</syn-button>
    </nav>
  </footer>
  <span slot="footer"> </span>
  <style slot="footer">
    syn-card {
      max-width: 400px;
    }

    syn-card footer {
      align-items: center;
      color: var(--syn-color-neutral-800);
      display: flex;
      gap: var(--syn-spacing-x-small);
    }

    syn-card h3 {
      font: var(--syn-body-medium-bold);
      margin: 0 0 var(--syn-spacing-x-small);
    }

    syn-card small {
      font: var(--syn-body-x-small-regular);
    }

    syn-card footer nav {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      gap: var(--syn-spacing-x-small);
      justify-content: flex-end;
    }
  </style>
  <span slot="footer"> </span>
  <img
    slot="image"
    src="https://synergy-design-system.github.io/card-example.jpg"
    alt="Multiple persons having lunch in SICK Academy"
  />
</syn-card>
```

---

## Basic Card

Basic cards aren’t very exciting, but they can display any content you want them to.

```html
<syn-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your
  content.
</syn-card>
<style>
  .card-basic {
    max-width: 400px;
  }
</style>
```

---

## Card With Header

Headers can be used to display titles and more.

```html
<syn-card class="card-header">
  <div slot="header">
    Header Title
    <syn-icon-button
      color="neutral"
      name="share"
      label="Share"
    ></syn-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</syn-card>

<style>
  .card-header {
    max-width: 400px;
  }

  .card-header [slot="header"] {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header syn-icon-button {
    font-size: var(--syn-font-size-x-large);
  }
</style>
```

---

## Card With Footer

Footers can be used to display actions, summaries, or other relevant content.

```html
<syn-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <footer slot="footer">
    <small>Optional information</small>
    <nav>
      <syn-button variant="filled" size="small">Preview</syn-button>
    </nav>
  </footer>
  <style>
    syn-card {
      max-width: 400px;
    }

    syn-card footer {
      align-items: center;
      color: var(--syn-color-neutral-800);
      display: flex;
      gap: var(--syn-spacing-x-small);
    }

    syn-card h3 {
      font: var(--syn-body-medium-bold);
      margin: 0 0 var(--syn-spacing-x-small);
    }

    syn-card small {
      font: var(--syn-body-x-small-regular);
    }

    syn-card footer nav {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      gap: var(--syn-spacing-x-small);
      justify-content: flex-end;
    }
  </style>
</syn-card>

<style>
  .card-footer {
    max-width: 400px;
  }
</style>
```

---

## Images

Cards accept an image slot. The image is displayed atop the card and stretches to fit.

```html
<syn-card class="card-image">
  <img
    slot="image"
    src="https://synergy-design-system.github.io/card-example.jpg"
    alt="Multiple persons having lunch in SICK Academy"
  />
  These are some happy employees, but not just any employees. These are SICK
  employees.
</syn-card>

<style>
  .card-image {
    max-width: 400px;
  }
</style>
```

---

## Sharp Card

Use the sharp variant attribute for the Card to Use a different style.

```html
<syn-card class="sharp-card" sharp="">
  <img
    slot="image"
    src="https://synergy-design-system.github.io/card-example.jpg"
    alt="Multiple persons having lunch in SICK Academy"
  />
  These are some happy employees, but not just any employees. These are SICK
  employees.
</syn-card>

<style>
  .sharp-card {
    max-width: 400px;
  }
</style>
```

---

## Card With Shadow

Use the shadow attribute to add a shadow.

```html
<div class="shadow-card-wrapper">
  <syn-card shadow="">
    <img
      slot="image"
      src="https://synergy-design-system.github.io/card-example.jpg"
      alt="Multiple persons having lunch in SICK Academy"
    />
    These are some happy employees, but not just any employees. These are SICK
    employees.
  </syn-card>
  <syn-card shadow="" sharp="">
    <img
      slot="image"
      src="https://synergy-design-system.github.io/card-example.jpg"
      alt="Multiple persons having lunch in SICK Academy"
    />
    These are some happy employees, but not just any employees. These are SICK
    employees.
  </syn-card>
</div>

<style>
  .shadow-card-wrapper {
    display: flex;
    flex-direction: row;
    gap: var(--syn-spacing-large);
  }

  .shadow-card-wrapper syn-card {
    max-width: 400px;
  }
</style>
```