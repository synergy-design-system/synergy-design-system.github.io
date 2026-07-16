# syn-drawer

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-drawer

## Rules

# syn-drawer

## Summary

Drawers slide in from a container to expose additional options and information.

## Common Use Cases

- Display supplementary information or options without navigating away from the main screen.
- Provide contextual help or guidance related to the current screen.
- House navigation menus on smaller devices.
- Present filter options, forms or settings that users can interact with without losing their place.

## Usage Guidelines

### Content

- Ensure the content is supplementary and does not include critical information that users must see immediately such as notifications or alerts; instead, use syn-alert or syn-dialog for those purposes.
- Check that the drawer content is fully visible and readable, even at larger font sizes.

### Interaction and Behavior

- Maintain the state of the content when it is reopened.
- Avoid opening automatically without user interaction.
- Provide multiple ways to close the interface for easy dismissal, such as a close button or clicking outside of it.

### Layout

- Ensure it does not cover critical content or actions on the main screen.
- If using a tertiary action in the header, adjust the left padding to 0px for proper alignment.

### Slots

- Use the "header-actions" slot to add navigation and/or action elements if desired.
- Use the "default" slot to add main content. The "default" slot is always scrollable.
- Use the "footer" slot to add action elements if desired. The "footer" slot is always fixed.

## Accessibility

- Always provide a label for the drawer so that screenreaders correctly announce the component.
- Make sure that the close button is always visible to ensure users are able to close the drawer.

## Related Templates

- AppShell

## Interface

# syn-drawer

## Summary

Drawers slide in from a container to expose additional options and information.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-drawer--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41163-282330)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=9983-7953)

## Class Information

- **Tag Name:** `syn-drawer`
- **Import Example:** `import SynDrawer from '@synergy-design-system/components/components/drawer/drawer.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.8.0

## Available Slots

- `(default)`: The drawer's main content.
- `label`: The drawer's label. Alternatively, you can use the `label` attribute.
- `header-actions`: Optional actions to add to the header. Works best with `<syn-icon-button>`.
- `footer`: The drawer's footer, usually one or more buttons representing various options.

## Available Properties

### contained

attribute: `contained`
reflects: yes
type: `boolean`
default: `false`

By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
its parent element, set this attribute and add `position: relative` to the parent.

### label

attribute: `label`
reflects: yes
type: `string`
default: `''`

The drawer's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.

### modal

attribute: -
reflects: -
type: `undefined`
default: `new Modal(this)`

Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Synergy modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Synergy's focus trapping.

### noHeader

attribute: `no-header`
reflects: yes
type: `boolean`
default: `false`

Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.

### placement

attribute: `placement`
reflects: yes
type: `'top' | 'end' | 'bottom' | 'start'`
default: `'end'`

The direction from which the drawer will open.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the drawer

### show()

parameters: -
returns: `void`

Shows the drawer.

## Available CSS Parts

- `base`: The component's base wrapper.
- `body`: The drawer's body.
- `close-button`: The close button, an `<syn-icon-button>`.
- `close-button__base`: The close button's exported `base` part.
- `footer`: The drawer's footer.
- `header`: The drawer's header. This element wraps the title and header actions.
- `header-actions`: Optional actions to add to the header. Works best with `<syn-icon-button>`.
- `overlay`: The overlay that covers the screen behind the drawer.
- `panel`: The drawer's panel (where the drawer and its content are rendered).
- `title`: The drawer's title.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the drawer closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the drawer opens and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the drawer closes.

### syn-initial-focus

type: `SynInitialFocusEvent`

Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.

### syn-request-close

type: `SynRequestCloseEvent`

Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.

### syn-show

type: `SynShowEvent`

Emitted when the drawer opens.

## Dependencies

- `syn-icon-button`

## Examples

## Default

Drawers slide in from a container to expose additional options and information.

```html
<syn-drawer open="" label="Drawer">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span slot="footer"> </span>
  <syn-button class="close-icon" slot="footer" variant="filled"
    >Close</syn-button
  >
  <span slot="footer"> </span>
  <script slot="footer">
    document.querySelector(".close-icon").addEventListener("click", (e) => {
      e.target.closest("syn-drawer").hide();
    });
  </script>
  <span slot="footer"> </span>
</syn-drawer>

<syn-button class="drawer-default-story-opener">Open Drawer</syn-button>
<script type="module">
  const openButtons = document.querySelectorAll(".drawer-default-story-opener");

  // Make sure to add each event only once!
  Array.from(openButtons).forEach((btn) => {
    if (!btn.classList.contains("story-loaded")) {
      const drawer = btn.parentElement.querySelector("syn-drawer");
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      btn.addEventListener("click", () => drawer.show());
      closeButton.addEventListener("click", () => drawer.hide());

      btn.classList.add("story-loaded");
    }
  });
</script>
```

---

## Slide In From Start

By default, drawers slide in from the end. To make the drawer slide in from the start, set the placement attribute to start.

```html
<syn-drawer
  label="Drawer"
  open=""
  placement="start"
  class="drawer-placement-start"
>
  This drawer slides in from the start.
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-placement-start");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```

---

## Slide In From Top

To make the drawer slide in from the top, set the placement attribute to top.

```html
<syn-drawer label="Drawer" open="" placement="top" class="drawer-placement-top">
  This drawer slides in from the top.
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-placement-top");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```

---

## Slide In From Bottom

To make the drawer slide in from the bottom, set the placement attribute to bottom.

```html
<syn-drawer
  label="Drawer"
  open=""
  placement="bottom"
  class="drawer-placement-bottom"
>
  This drawer slides in from the bottom.
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-placement-bottom");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```

---

## Contained To An Element

By default, drawers slide out of their containing block, which is usually the viewport. To make a drawer slide out of a parent element, add the contained attribute to the drawer and apply position: relative to its parent.Unlike normal drawers, contained drawers are not modal. This means they do not show an overlay, they do not trap focus, and they are not dismissible with Escape. This is intentional to allow users to interact with elements outside of the drawer.

```html
<div
  style="
    position: relative;
    border: solid 2px var(--syn-panel-border-color);
    height: 300px;
    padding: 1rem;
    margin-bottom: 1rem;
  "
>
  The drawer will be contained to this box. This content won't shift or be
  affected in any way when the drawer opens.

  <syn-drawer
    label="Drawer"
    open=""
    contained=""
    class="drawer-contained"
    style="--size: 50%"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <syn-button slot="footer" variant="filled">Close</syn-button>
  </syn-drawer>
</div>

<syn-button>Toggle Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-contained");
  const openButton = drawer.parentElement.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => (drawer.open = !drawer.open));
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```

---

## Custom Size

Use the --size custom property to set the drawer’s size. This will be applied to the drawer’s width or height depending on its placement.

```html
<syn-drawer
  label="Drawer"
  open=""
  placement="start"
  class="drawer-custom-size"
  style="--size: 50vw"
>
  This drawer is always 50% of the viewport.
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-custom-size");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```

---

## Scrolling

By design, a drawer’s height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.

```html
<syn-drawer label="Drawer" open="" placement="start" class="drawer-scrolling">
  <div>
    <p>Scroll down and give it a try! 👇</p>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </p>
  </div>
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-scrolling");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```

---

## Header Actions

The header shows a functional close button by default. You can use the header-actions slot to add additional icon buttons if needed.

```html
<syn-drawer
  label="Drawer"
  open=""
  placement="start"
  class="drawer-header-actions"
>
  <syn-icon-button
    class="new-window"
    slot="header-actions"
    name="open_in_new"
    label="Arrow Up"
  ></syn-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-header-actions");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');
  const newWindowButton = drawer.querySelector(".new-window");

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
  newWindowButton.addEventListener("click", () => window.open(location.href));
</script>
```

---

## Preventing The Drawer From Closing

By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the Escape key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.To keep the drawer open in such cases, you can cancel the syn-request-close event. When canceled, the drawer will remain open and pulse briefly to draw the user’s attention to it.You can use event.detail.source to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or Escape to dismiss it.

```html
<syn-drawer label="Drawer" open="" class="drawer-deny-close">
  This drawer will not close when you click on the overlay.
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-deny-close");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());

  // Prevent the drawer from closing when the user clicks on the overlay
  drawer.addEventListener("syn-request-close", (event) => {
    if (event.detail.source === "overlay") {
      event.preventDefault();
    }
  });
</script>
```

---

## Customizing Initial Focus

By default, the drawer’s panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the autofocus attribute to it as shown below.

```html
<syn-drawer label="Drawer" class="drawer-focus">
  <syn-input
    autofocus=""
    placeholder="I will have focus when the drawer is opened"
  ></syn-input>
  <syn-button slot="footer" variant="filled">Close</syn-button>
</syn-drawer>

<syn-button>Open Drawer</syn-button>

<script type="module">
  const drawer = document.querySelector(".drawer-focus");
  const input = drawer.querySelector("syn-input");
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('syn-button[variant="filled"]');

  openButton.addEventListener("click", () => drawer.show());
  closeButton.addEventListener("click", () => drawer.hide());
</script>
```