# syn-popup

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-popup

## Rules

# syn-popup

## Summary

Popup is a utility that lets you declaratively anchor "popup" containers to another element.

## Common Use Cases

- Anchor floating menus to trigger controls.
- Display contextual information near data points.
- Implement custom positioned overlays in advanced layouts.

## Usage Guidelines

### Placement

- Choose placements that keep popup content near the trigger and inside the viewport.
- Use distance and skidding to fine tune alignment in complex layouts.
- Use arrows when they help users relate popup content to its anchor.

### Activation and Lifecycle

- Use explicit activation logic for interactive popups and dismiss on outside interaction.
- Handle flip and shift options to avoid clipping in constrained containers.
- Prefer stable anchor elements and verify behavior when anchors resize.

### Content and Scope

- Keep popup content focused and short for quick understanding.
- Avoid placing long workflows inside simple popup containers.
- Use dialog or drawer for complex multi-step interactions.

## Accessibility

- Ensure popup content remains reachable by keyboard when interactive elements are present.
- Do not hide critical information in popups that are hard to trigger on touch devices.
- Use clear trigger affordances so users understand where popup content comes from.

## Related Components

- syn-dropdown
- syn-tooltip

## Interface

# syn-popup

## Summary

Popup is a utility that lets you declaratively anchor "popup" containers to another element.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-popup--docs)

## Class Information

- **Tag Name:** `syn-popup`
- **Import Example:** `import SynPopup from '@synergy-design-system/components/components/popup/popup.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.12.0

## Available Slots

- `(default)`: The popup's content.
- `anchor`: The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.

## Available Properties

### active

attribute: `active`
reflects: yes
type: `boolean`
default: `false`

Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden.

### anchor

attribute: `anchor`
reflects: no
type: `Element | string | VirtualElement`
default: none

The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead.

### arrow

attribute: `arrow`
reflects: no
type: `boolean`
default: `false`

Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet.

### arrowPadding

attribute: `arrow-padding`
reflects: no
type: `number`
default: `10`

The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners.

### arrowPlacement

attribute: `arrow-placement`
reflects: no
type: `'start' | 'end' | 'center' | 'anchor'`
default: `'anchor'`

The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead.

### autoSize

attribute: `auto-size`
reflects: no
type: `'horizontal' | 'vertical' | 'both'`
default: none

When set, this will cause the popup to automatically resize itself to prevent it from overflowing.

### autoSizeBoundary

attribute: `autoSizeBoundary`
reflects: no
type: `Element | Element[]`
default: none

The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.

### autoSizePadding

attribute: `auto-size-padding`
reflects: no
type: `number`
default: `0`

The amount of padding, in pixels, to exceed before the auto-size behavior will occur.

### distance

attribute: `distance`
reflects: no
type: `number`
default: `0`

The distance in pixels from which to offset the panel away from its anchor.

### flip

attribute: `flip`
reflects: no
type: `boolean`
default: `false`

When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined.

### flipBoundary

attribute: `flipBoundary`
reflects: no
type: `Element | Element[]`
default: none

The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.

### flipFallbackPlacements

attribute: `flip-fallback-placements`
reflects: no
type: `string`
default: `''`

If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead.

### flipFallbackStrategy

attribute: `flip-fallback-strategy`
reflects: no
type: `'best-fit' | 'initial'`
default: `'best-fit'`

When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred.

### flipPadding

attribute: `flip-padding`
reflects: no
type: `number`
default: `0`

The amount of padding, in pixels, to exceed before the flip behavior will occur.

### hoverBridge

attribute: `hover-bridge`
reflects: no
type: `boolean`
default: `false`

When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active.

### placement

attribute: `placement`
reflects: yes
type: `| 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'`
default: `'top'`

The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport.

### popup

attribute: -
reflects: -
type: `HTMLElement`
default: none

A reference to the internal popup container. Useful for animating and styling the popup with JavaScript.

### shift

attribute: `shift`
reflects: no
type: `boolean`
default: `false`

Moves the popup along the axis to keep it in view when clipped.

### shiftBoundary

attribute: `shiftBoundary`
reflects: no
type: `Element | Element[]`
default: none

The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.

### shiftPadding

attribute: `shift-padding`
reflects: no
type: `number`
default: `0`

The amount of padding, in pixels, to exceed before the shift behavior will occur.

### skidding

attribute: `skidding`
reflects: no
type: `number`
default: `0`

The distance in pixels from which to offset the panel along its anchor.

### sync

attribute: `sync`
reflects: no
type: `'width' | 'height' | 'both'`
default: none

Syncs the popup's width or height to that of the anchor element.

## Available Methods

### reposition()

parameters: -
returns: `void`

Forces the popup to recalculate and reposition itself.

## Available CSS Parts

- `arrow`: The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
- `hover-bridge`: The hover bridge element. Only available when the `hover-bridge` option is enabled.
- `popup`: The popup's container. Useful for setting a background color, box shadow, etc.

## Available Events

### syn-reposition

type: `SynRepositionEvent`

Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.

## Examples

## Default

Popup is a utility that lets you declaratively anchor “popup” containers to another element.This component’s name is inspired by <popup>. It uses Floating UI under the hood to provide a well-tested, lightweight, and fully declarative positioning utility for tooltips, dropdowns, and more.Popup doesn’t provide any styles — just positioning! The popup’s preferred placement, distance, and skidding (offset) can be configured using attributes. An arrow that points to the anchor can be shown and customized to your liking. Additional positioning options are available and described in more detail below.

```html
<div class="popup-default">
  <syn-popup active="" arrow-padding="10">
    <div class="box"></div>
    <span slot="anchor"></span>
  </syn-popup>
</div>
<style>
  .popup-default span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-default .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>
```

---

## Activating

Popups are inactive and hidden until the active attribute is applied.
Removing the attribute will tear down all positioning logic and listeners,
meaning you can have many idle popups on the page without affecting performance.

```html
<div class="popup-active">
  <syn-popup placement="top" active="">
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <br />
  <syn-switch checked="">Active</syn-switch>
</div>

<style>
  .popup-active span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-active");
  const popup = container.querySelector("syn-popup");
  const active = container.querySelector("syn-switch");

  active.addEventListener("syn-change", () => (popup.active = active.checked));
</script>
```

---

## External Anchors

By default, anchors are slotted into the popup using the anchor slot.
If your anchor needs to live outside of the popup,
you can pass the anchor's id to the anchor attribute.
Alternatively, you can pass an element reference
to the anchor property to achieve the same effect without using an id.

```html
<span id="external-anchor"></span>

<syn-popup anchor="external-anchor" placement="top" active="">
  <div class="box"></div>
</syn-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ syn-popup .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>
```

---

## Placement

Use the placement attribute to tell the popup the preferred placement of the popup.
Note that the actual position will vary to ensure the panel remains in the viewport
if you're using positioning features such as flip and shift.
Since placement is preferred when using flip, you can observe the popup's current placement
when it's active by looking at the data-current-placement attribute.
This attribute will update as the popup flips to find
available space and it will be removed when the popup is deactivated.

```html
<div class="popup-placement">
  <syn-popup placement="top" active="">
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-select label="Placement" value="top">
    <syn-option value="top">top</syn-option>
    <syn-option value="top-start">top-start</syn-option>
    <syn-option value="top-end">top-end</syn-option>
    <syn-option value="bottom">bottom</syn-option>
    <syn-option value="bottom-start">bottom-start</syn-option>
    <syn-option value="bottom-end">bottom-end</syn-option>
    <syn-option value="right">right</syn-option>
    <syn-option value="right-start">right-start</syn-option>
    <syn-option value="right-end">right-end</syn-option>
    <syn-option value="left">left</syn-option>
    <syn-option value="left-start">left-start</syn-option>
    <syn-option value="left-end">left-end</syn-option>
  </syn-select>
</div>

<style>
  .popup-placement span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-placement syn-select {
    max-width: 280px;
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-placement");
  const popup = container.querySelector("syn-popup");
  const select = container.querySelector("syn-select");

  select.addEventListener("syn-change", () => (popup.placement = select.value));
</script>
```

---

## Distance

Use the distance attribute to change the distance between the popup and its anchor.
A positive value will move the popup further away and a negative value will move it closer.

```html
<div class="popup-distance">
  <syn-popup placement="top" distance="0" active="">
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-range min="-50" max="50" step="1" value="0" label="Distance"></syn-range>
</div>

<style>
  .popup-distance span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-distance syn-range {
    max-width: 260px;
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-distance");
  const popup = container.querySelector("syn-popup");
  const distance = container.querySelector("syn-range");

  distance.addEventListener(
    "syn-input",
    () => (popup.distance = distance.value),
  );
</script>
```

---

## Skidding

The skidding attribute is similar to distance,
but instead allows you to offset the popup along the anchor's axis.
Both positive and negative values are allowed.

```html
<div class="popup-skidding">
  <syn-popup placement="top" skidding="0" active="">
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-range min="-50" max="50" step="1" value="0" label="Skidding"></syn-range>
</div>

<style>
  .popup-skidding span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-skidding syn-range {
    max-width: 260px;
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-skidding");
  const popup = container.querySelector("syn-popup");
  const skidding = container.querySelector("syn-range");

  skidding.addEventListener(
    "syn-input",
    () => (popup.skidding = skidding.value),
  );
</script>
```

---

## Arrows

Add an arrow to your popup with the arrow attribute.
It's usually a good idea to set a distance to make room for the arrow.
To adjust the arrow's color and size,
use the --arrow-color and --arrow-size custom properties, respectively.
You can also target the arrow part to add additional styles such as shadows and borders.
By default, the arrow will be aligned as close to
the center as possible, considering available space and arrow-padding.
You can use the arrow-placement attribute to force
the arrow to align to the start, end, or center of the instead.

```html
<div class="popup-arrow">
  <syn-popup
    placement="top"
    arrow=""
    arrow-placement="anchor"
    distance="8"
    active=""
  >
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <div class="popup-arrow-options">
    <syn-select
      label="Placement"
      name="placement"
      value="top"
      class="popup-overview-select"
    >
      <syn-option value="top">top</syn-option>
      <syn-option value="top-start">top-start</syn-option>
      <syn-option value="top-end">top-end</syn-option>
      <syn-option value="bottom">bottom</syn-option>
      <syn-option value="bottom-start">bottom-start</syn-option>
      <syn-option value="bottom-end">bottom-end</syn-option>
      <syn-option value="right">right</syn-option>
      <syn-option value="right-start">right-start</syn-option>
      <syn-option value="right-end">right-end</syn-option>
      <syn-option value="left">left</syn-option>
      <syn-option value="left-start">left-start</syn-option>
      <syn-option value="left-end">left-end</syn-option>
    </syn-select>

    <syn-select label="Arrow Placement" name="arrow-placement" value="anchor">
      <syn-option value="anchor">anchor</syn-option>
      <syn-option value="start">start</syn-option>
      <syn-option value="end">end</syn-option>
      <syn-option value="center">center</syn-option>
    </syn-select>
  </div>

  <div class="popup-arrow-options">
    <syn-switch name="arrow" checked="">Arrow</syn-switch>
  </div>

  <style>
    .popup-arrow syn-popup {
      --arrow-color: var(--syn-color-primary-600);
    }

    .popup-arrow span[slot="anchor"] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--syn-color-neutral-600);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--syn-color-primary-600);
      border-radius: var(--syn-border-radius-medium);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options syn-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script type="module">
    const container = document.querySelector(".popup-arrow");
    const popup = container.querySelector("syn-popup");
    const placement = container.querySelector('[name="placement"]');
    const arrowPlacement = container.querySelector('[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    placement.addEventListener(
      "syn-change",
      () => (popup.placement = placement.value),
    );
    arrowPlacement.addEventListener(
      "syn-change",
      () => (popup.arrowPlacement = arrowPlacement.value),
    );
    arrow.addEventListener("syn-change", () => (popup.arrow = arrow.checked));
  </script>
</div>
```

---

## Syncing With The Anchors Dimensions

Use the sync attribute to make the popup the same width or height as the anchor element.
This is useful for controls that need the popup to stay the same width or height as the trigger.

```html
<div class="popup-sync">
  <syn-popup placement="top" sync="width" active="">
    <span slot="anchor"></span>
    <div class="box"></div>
  </syn-popup>

  <syn-select value="width" label="Sync">
    <syn-option value="width">Width</syn-option>
    <syn-option value="height">Height</syn-option>
    <syn-option value="both">Both</syn-option>
    <syn-option value="">None</syn-option>
  </syn-select>
</div>

<style>
  .popup-sync span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }

  .popup-sync syn-select {
    width: 160px;
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-sync");
  const popup = container.querySelector("syn-popup");
  const fixed = container.querySelector("syn-switch");
  const sync = container.querySelector("syn-select");

  sync.addEventListener("syn-change", () => (popup.sync = sync.value));
</script>
```

---

## Flip

When the popup doesn't have enough room in its preferred placement,
it can automatically flip to keep it in view.
To enable this, use the flip attribute.
By default, the popup will flip to the opposite placement, but you can configure
preferred fallback placements using flip-fallback-placement and flip-fallback-strategy.
Additional options are available to control the flip behavior's boundary and padding.

```html
<div class="popup-flip">
  <div class="overflow">
    <syn-popup placement="top" flip="" active="" id="popup-flip">
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>

  <br />
  <syn-switch checked="">Flip</syn-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-flip span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-flip");
  const popup = container.querySelector("#popup-flip");
  const flip = container.querySelector(".popup-flip syn-switch");

  flip.addEventListener("syn-change", () => (popup.flip = flip.checked));
</script>
```

---

## Flip Fallbacks

While using the flip attribute, you can customize the placement
of the popup when the preferred placement doesn't have room.
For this, use flip-fallback-placements and flip-fallback-strategy.
If the preferred placement doesn't have room,
the first suitable placement found in flip-fallback-placement will be used.
The value of this attribute must be a string,
including any number of placements separated by a space, e.g. "right bottom".
If no fallback placement works, the final placement will be determined by flip-fallback-strategy.
This value can be either initial (default),
where the placement reverts to the position in placement,
or best-fit, where the placement is chosen based on available space.
Scroll the container to see how the popup changes it's fallback placement to prevent clipping.

```html
<div class="popup-flip-fallbacks">
  <div class="overflow">
    <syn-popup
      placement="top"
      flip=""
      flip-fallback-placements="right bottom"
      flip-fallback-strategy="initial"
      active=""
    >
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>
```

---

## Shift

When a popup is longer than its anchor, it risks being clipped by an overflowing container.
In this case, use the shift attribute to shift the popup along its axis and back into view.
You can customize the shift behavior using shiftBoundary and shift-padding.
Toggle the switch to see the difference.

```html
<div class="popup-shift">
  <div class="overflow">
    <syn-popup placement="top" shift="" shift-padding="10" active="">
      <span slot="anchor"></span>
      <div class="box"></div>
    </syn-popup>
  </div>

  <syn-switch checked="">Shift</syn-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--syn-color-neutral-200);
    overflow: auto;
  }

  .popup-shift span[slot="anchor"] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--syn-color-neutral-600);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--syn-color-primary-600);
    border-radius: var(--syn-border-radius-medium);
  }
</style>

<script type="module">
  const container = document.querySelector(".popup-shift");
  const popup = container.querySelector("syn-popup");
  const shift = container.querySelector("syn-switch");

  shift.addEventListener("syn-change", () => (popup.shift = shift.checked));
</script>
```

---

## Virtual Elements

In most cases, popups are anchored to an actual element.
Sometimes, it can be useful to anchor them to a non-element.
To do this, you can pass a VirtualElement to the anchor property.
A virtual element must contain a function called getBoundingClientRect() that returns
a object as shown below.
This example anchors a popup to the mouse cursor using a virtual element.
As such, a mouse is required to properly view it.

```html
<div class="popup-virtual-element">
  <syn-popup placement="right-start">
    <div class="circle"></div>
  </syn-popup>

  <syn-switch>Highlight mouse cursor</syn-switch>
</div>

<script type="module">
  const container = document.querySelector(".popup-virtual-element");
  const popup = container.querySelector("syn-popup");
  const circle = container.querySelector(".circle");
  const enabled = container.querySelector("syn-switch");
  let clientX = 0;
  let clientY = 0;

  // Set the virtual element as a property
  popup.anchor = {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: clientX,
        y: clientY,
        top: clientY,
        left: clientX,
        right: clientX,
        bottom: clientY,
      };
    },
  };

  // Only activate the popup when the switch is checked
  enabled.addEventListener("syn-change", () => {
    popup.active = enabled.checked;
  });

  // Listen for the mouse to move
  document.addEventListener("mousemove", handleMouseMove);

  // Update the virtual element as the mouse moves
  function handleMouseMove(event) {
    clientX = event.clientX;
    clientY = event.clientY;

    // Reposition the popup when the virtual anchor moves
    if (popup.active) {
      popup.reposition();
    }
  }
</script>

<style>
  /* If you need to set a z-index, set it on the popup part like this */
  .popup-virtual-element syn-popup::part(popup) {
    z-index: 1000;
    pointer-events: none;
  }

  .popup-virtual-element .circle {
    width: 100px;
    height: 100px;
    border: solid 4px var(--syn-color-primary-600);
    border-radius: 50%;
    translate: -50px -50px;
    animation: 1s virtual-cursor infinite;
  }

  @keyframes virtual-cursor {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.1;
    }
  }
</style>
```