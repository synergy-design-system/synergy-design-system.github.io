# syn-tooltip

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-tooltip

## Rules

# syn-tooltip

## Summary

Tooltips display additional information based on a specific action.

## Common Use Cases

- Provide additional, useful, and non-essential information about form fields.
- Expand abbreviations or acronyms that might be unfamiliar to users.
- Offer detailed information about specific data points in charts or graphs.
- Provide more context for error messages or warnings and anticipate any questions that users may have.

## Usage Guidelines

### Behavior and Placement

- Place the tooltip where the floating element does not obscure important content related to the subject.
- Ensure it disappears when the user interacts with other elements.
- Avoid tooltips being cropped by other elements of the interface; use appropriate placement for this purpose.

### Content

- Use short, descriptive text; if a longer explanation is required, consider non-interactive means to convey this information.
- Avoid jargon or highly technical language; aim to solve questions, not trigger more.
- Do not use for critical or unique information.
- Do not place links, buttons, or other interactive elements within the content.

### Styling

- Display a headline by bolding the text if it makes the content easier to understand.
- Emphasize key information by bolding parts of the text.

### Trigger Element

- Use any interactive element as a tooltip trigger by placing it in the provided slot. The tooltip will open when the user hovers over or focuses on the trigger element.

## Accessibility

- Avoid placing buttons, links, or other interactive controls inside a tooltip, as it's designed to be an ephemeral container for supplementary information.
- On desktop, tooltips open by default on hover over the trigger element, or optionally on click. They close by clicking the trigger again or by moving the pointer away.
- On touch devices, tooltips open when tapping on the trigger element and close by tapping on the trigger element again.
- For keyboard navigation, tooltips should open by focusing (Tab) on the trigger element and close by pressing Escape or by moving focus away.

## Related Templates

- tooltip

## Interface

# syn-tooltip

## Summary

Tooltips display additional information based on a specific action.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-tooltip--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41337-203414)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=16910-25970)

## Class Information

- **Tag Name:** `syn-tooltip`
- **Import Example:** `import SynTooltip from '@synergy-design-system/components/components/tooltip/tooltip.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.21.0

## Available Slots

- `(default)`: The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
- `content`: The content to render in the tooltip. Alternatively, you can use the `content` attribute.

## Available Properties

### content

attribute: `content`
reflects: no
type: `string`
default: `''`

The tooltip's content. If you need to display HTML, use the `content` slot instead.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the tooltip so it won't show when triggered.

### distance

attribute: `distance`
reflects: no
type: `number`
default: `13`

The distance in pixels from which to offset the tooltip away from its target.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.

### placement

attribute: `placement`
reflects: no
type: `| 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'`
default: `'top'`

The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport.

### skidding

attribute: `skidding`
reflects: no
type: `number`
default: `0`

The distance in pixels from which to offset the tooltip along its target.

### trigger

attribute: `trigger`
reflects: no
type: `string`
default: `'hover focus'`

Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the tooltip

### show()

parameters: -
returns: `void`

Shows the tooltip.

## Available CSS Parts

- `base`: The component's base wrapper, an `<syn-popup>` element.
- `base__arrow`: The popup's exported `arrow` part. Use this to target the tooltip's arrow.
- `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
- `body`: The tooltip's body where its content is rendered.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the tooltip has hidden and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the tooltip has shown and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the tooltip begins to hide.

### syn-show

type: `SynShowEvent`

Emitted when the tooltip begins to show.

## Dependencies

- `syn-popup`

## Examples

## Default

Tooltips display additional information based on a specific action.A tooltip’s target is its first child element, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.Tooltips use display: contents so they won’t interfere with how elements are positioned in a flex or grid layout.

```html
<syn-tooltip content="This is a tooltip" distance="13" open="">
  <syn-button>Hover me</syn-button>
</syn-tooltip>
```

---

## Placement

Use the placement attribute to set the preferred placement of the tooltip.

```html
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <syn-tooltip content="top-start" placement="top-start" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="top" placement="top" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="top-end" placement="top-end" open="">
      <syn-button></syn-button>
    </syn-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <syn-tooltip content="left-start" placement="left-start" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="right-start" placement="right-start" open="">
      <syn-button></syn-button>
    </syn-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <syn-tooltip content="left" placement="left" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="right" placement="right" open="">
      <syn-button></syn-button>
    </syn-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <syn-tooltip content="left-end" placement="left-end" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="right-end" placement="right-end" open="">
      <syn-button></syn-button>
    </syn-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <syn-tooltip content="bottom-start" placement="bottom-start" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="bottom" placement="bottom" open="">
      <syn-button></syn-button>
    </syn-tooltip>

    <syn-tooltip content="bottom-end" placement="bottom-end" open="">
      <syn-button></syn-button>
    </syn-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 500px;
    margin: 5rem 6rem;
  }

  .tooltip-placement-example-row:after {
    content: "";
    display: table;
    clear: both;
  }

  .tooltip-placement-example syn-button {
    float: left;
    width: var(--syn-spacing-2x-large);
    margin-bottom: var(--syn-spacing-medium);
  }

  .tooltip-placement-example-row:nth-child(1)
    syn-tooltip:first-child
    syn-button,
  .tooltip-placement-example-row:nth-child(5)
    syn-tooltip:first-child
    syn-button {
    margin-left: var(--syn-spacing-3x-large);
    margin-right: var(--syn-spacing-4x-large);
  }

  .tooltip-placement-example-row:nth-child(1)
    syn-tooltip:nth-child(2)
    syn-button,
  .tooltip-placement-example-row:nth-child(5)
    syn-tooltip:nth-child(2)
    syn-button {
    margin-right: var(--syn-spacing-4x-large);
  }

  .tooltip-placement-example-row:nth-child(2)
    syn-tooltip:nth-child(2)
    syn-button,
  .tooltip-placement-example-row:nth-child(3)
    syn-tooltip:nth-child(2)
    syn-button,
  .tooltip-placement-example-row:nth-child(4)
    syn-tooltip:nth-child(2)
    syn-button {
    margin-left: calc(
      (var(--syn-spacing-2x-large) * 3) + (var(--syn-spacing-4x-large) * 2) +
        (var(--syn-spacing-medium) * 2)
    );
  }
</style>
```

---

## Click Trigger

Set the trigger attribute to click to toggle the tooltip on click instead of hover.

```html
<syn-tooltip content="Click again to dismiss" trigger="click" open="">
  <syn-button>Click to Toggle</syn-button>
</syn-tooltip>
```

---

## Manual Trigger

Tooltips can be controlled programmatically by setting the trigger attribute to manual. Use the open attribute to control when the tooltip is shown.

```html
<syn-button style="margin-right: 4rem">Toggle Manually</syn-button>
<syn-tooltip
  content="This is an avatar"
  trigger="manual"
  class="manual-tooltip"
  open=""
>
  <syn-icon-button
    name="person"
    label="Person"
    size="medium"
    color="neutral"
  ></syn-icon-button>
</syn-tooltip>

<script type="module">
  const tooltip = document.querySelector(".manual-tooltip");
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener("click", () => (tooltip.open = !tooltip.open));
</script>
```

---

## Removing Arrows

You can control the size of tooltip arrows by overriding the --syn-tooltip-arrow-size design token. To remove them, set the value to 0 as shown below.

```html
<syn-tooltip
  content="This is a tooltip"
  style="--syn-tooltip-arrow-size: 0"
  open=""
>
  <syn-button>No Arrow</syn-button>
</syn-tooltip>
```

---

## HTML In Tooltips

Use the content slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html
<syn-tooltip open="">
  <div slot="content">
    I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
  </div>

  <syn-button>Hover me</syn-button>
</syn-tooltip>
```

---

## Setting A Maximum Width

Use the --max-width custom property to change the width the tooltip can grow to before wrapping occurs.

```html
<syn-tooltip
  style="--max-width: 80px"
  content="This tooltip will wrap after only 80 pixels."
  open=""
>
  <syn-button>Hover me</syn-button>
</syn-tooltip>
```