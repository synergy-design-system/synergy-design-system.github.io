# syn-side-nav

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-side-nav

## Rules

# syn-side-nav

## Summary

The <syn-side-nav /> element contains secondary navigation and fits below the header.
It can be used to group multiple navigation items (<syn-nav-item />s) together.

## Common Use Cases

- Secondary navigation beneath a primary header.
- Section navigation in management and admin applications.
- Persistent workspace navigation for desktop oriented layouts.

## Usage Guidelines

### Navigation Structure

- Use side navigation for secondary or section level navigation.
- Organize items into clear groups with consistent naming patterns.
- Avoid deeply nested structures that are hard to scan and maintain.

### Layout Variants

- Use sticky mode when navigation should remain visible during page scroll.
- Use fixed mode only when it does not block core page content.
- Use rail mode for compact icon first navigation with strong icon semantics.

### Interaction

- Use indentation consistently to reflect hierarchy.
- Provide footer actions only for secondary utilities and account controls.
- Ensure collapse and expand behavior is predictable across breakpoints.

## Accessibility

- Provide clear navigation labels and preserve logical focus order.
- Ensure current location is communicated for active items and sections.
- Keep rail and collapsed states keyboard operable and understandable.

## Related Components

- syn-nav-item
- syn-header

## Related Templates

- AppShell

## Interface

# syn-side-nav

## Summary

The <syn-side-nav /> element contains secondary navigation and fits below the header.
It can be used to group multiple navigation items (<syn-nav-item />s) together.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-side-nav--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41227-327748)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=12362-15033)

## Class Information

- **Tag Name:** `syn-side-nav`
- **Import Example:** `import SynSideNav from '@synergy-design-system/components/components/side-nav/side-nav.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.15.0

## Available Slots

- `(default)`: The main content of the side-nav. Used for <syn-nav-item /> elements.
- `footer`: The footer content of the side-nav. Used for <syn-nav-item /> elements. Please avoid having to many nav-items as it can massively influence the user experience.
- `toggle-label`: The label of the toggle nav-item for variant="sticky".
- `toggle-icon`: An icon to use in lieu of the default icon for the toggle nav-item for variant="sticky".

## Available Properties

### noFocusTrapping

attribute: `no-focus-trapping`
reflects: yes
type: `boolean`
default: `false`

By default, the side-nav traps the focus if in variant="default" and open.
To disable the focus trapping, set this attribute.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the side-nav is open.
You can toggle this attribute to show and hide the side-nav, or you can use the `show()` and
`hide()` methods and this attribute will reflect the side-nav's open state.

Depending on the "variant" attribute, the behavior will differ.

**Default**:
With `open` will show the side-nav with an overlay.
Without `open`, the side-nav will be hidden.

**Rail**:
With `open` will show the whole side-nav with an overlay for touch devices
or without an overlay for non-touch devices.
Without `open`, the side-nav will only show the prefix of nav-item's.

**Sticky**:
With `open` will show the whole side-nav with an overlay for touch devices
or without an overlay for non-touch devices.
Without `open`, the side-nav will only show the prefix of nav-item's.

### variant

attribute: `variant`
reflects: yes
type: `'default' | 'rail' | 'sticky'`
default: `'default'`

The variant that should be used to show the side navigation.

The following variants are supported:

- **default** (default): Always shows the whole content and additionally an overlay.
  This makes especially sense for applications, where you navigate to a place and stay
  there for a longer time.
- **rail**: Only show the prefix of navigation items in closed state.
  This will open on hover on the rail navigation.
  On touch devices the navigation opens on click and shows an overlay.
  Note: The rail variant is only an option if all Navigation Items on the first level
  have an Icon.
  If this is not the case you should use a burger navigation.
- **sticky**: The side-nav has a pin button to show the side-nav in small (icon only)
  and full width. This variant is only possible for non-nested navigation items.
  Note: The sticky variant is only an option if all Navigation Items on the first level
  have an Icon and if there are only "first level" items.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the side-nav

### show()

parameters: -
returns: `void`

Shows the side-nav.

## Available CSS Parts

- `base`: The components base wrapper
- `body`: The side-nav's body (where the default slot content is rendered)
- `content`: The components main content
- `content-container`: The components main content container
- `drawer`: The drawer that is used under the hood for creating the side-nav
- `drawer__base`: The drawer's base wrapper
- `footer`: The components footer content
- `footer-container`: The components footer content container (where the footer slot content is rendered)
- `footer-divider`: The components footer divider
- `overlay`: The overlay that covers the screen behind the side-nav.
- `panel`: The side-nav's panel (where the whole content is rendered).
- `toggle-icon`: The icon of the toggle nav-item for variant="sticky"
- `toggle-label`: The label of the toggle nav-item for variant="sticky".
- `toggle-nav-item`: The nav-item to toggle open state for variant="sticky"

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the side-nav closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the side-nav opens and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the side-nav closes.

### syn-show

type: `SynShowEvent`

Emitted when the side-nav opens.

## Dependencies

- `syn-divider`
- `syn-drawer`
- `syn-icon`
- `syn-nav-item`

## Examples

## Default

Side navigation lets the user navigate through the entire content of a product. It supports single or nested navigation levels.

```html
<syn-header label="Side Navigation"></syn-header>
<main
  style="
    position: relative;
    height: 500px;
    background-color: var(--syn-color-neutral-200);
  "
  class="side-nav-default"
>
  <syn-side-nav open="">
    <syn-nav-item current="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
  </syn-side-nav>
</main>
<script type="module">
  const mainContents = document.querySelectorAll(".side-nav-default");

  Array.from(mainContents).forEach((mainContent, index) => {
    const selector = "story-loaded-".concat(index);
    if (!mainContent.classList.contains(selector)) {
      const header = mainContent.previousElementSibling;
      const sideNav = mainContent.querySelector("syn-side-nav");
      header.connectSideNavigation(sideNav);
      mainContent.classList.add(selector);
    }
  });
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-default")).forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest("syn-nav-item");

      if (!target) {
        return;
      }

      // Update the current indicator
      nav.querySelectorAll("syn-nav-item").forEach((item) => {
        item.removeAttribute("current");
        if (item === target) {
          item.setAttribute("current", "");
        }
      });
    });
  });
</script>
```

---

## Rail

Set the variant attribute to rail to only show a small navigation stripe at the left side using only the prefix-icons of the navigation items. This will open on hover on the rail navigation, therefore the header doesn't have an burger-menu-icon.On touch devices the navigation opens on click and shows an overlay to be closable.Note: The Rail is only an option if all Navigation Items on the first level have an Icon. If this is not the case you should use a burger navigation.

```html
<syn-header class="header-rail" label="Side Navigation"></syn-header>
<main class="main-rail">
  <syn-side-nav class="side-nav-rail" variant="rail">
    <syn-nav-item current="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
  </syn-side-nav>
  <div class="content-rail">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </div>
</main>
<script type="module">
  // Only needed to have correct behavior in our documentation "Docs" page
  const header =
    document.querySelector("#storybook-docs .header-rail") ||
    document.querySelector(".header-rail");
  const sideNav =
    document.querySelector("#storybook-docs .side-nav-rail") ||
    document.querySelector(".side-nav-rail");
  if (sideNav && header) {
    header.connectSideNavigation(sideNav);
  }
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-rail")).forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest("syn-nav-item");

      if (!target) {
        return;
      }

      // Update the current indicator
      nav.querySelectorAll("syn-nav-item").forEach((item) => {
        item.removeAttribute("current");
        if (item === target) {
          item.setAttribute("current", "");
        }
      });
    });
  });
</script>

<style>
  .main-rail {
    position: relative;
    height: 500px;
    display: flex;
    overflow: hidden;
    background-color: var(--syn-color-neutral-200);
  }

  .content-rail {
    padding: var(--syn-spacing-large);
    margin: var(--syn-spacing-large);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
    overflow-y: auto;
  }
</style>
```

---

## Sticky

Use the sticky variant when you need a persistent, toggleable side navigation that alternates between a compact “rail” (icon‐only) state and a full‐width state. Note: This pattern is only possible for flat navigation structures (no nesting) where every first‐level item has an icon.

```html
<syn-header class="header-sticky" label="Side Navigation"></syn-header>
<main class="main-sticky">
  <syn-side-nav class="side-nav-sticky" variant="sticky">
    <syn-nav-item current="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
  </syn-side-nav>
  <div class="content-sticky">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </div>
</main>
<script type="module">
  // Only needed to have correct behavior in our documentation "Docs" page
  const header =
    document.querySelector("#storybook-docs .header-sticky") ||
    document.querySelector(".header-sticky");
  const sideNav =
    document.querySelector("#storybook-docs .side-nav-sticky") ||
    document.querySelector(".side-nav-sticky");
  if (sideNav && header) {
    header.connectSideNavigation(sideNav);
  }
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-sticky")).forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest("syn-nav-item");

      if (!target) {
        return;
      }

      // Update the current indicator
      nav.querySelectorAll("syn-nav-item").forEach((item) => {
        item.removeAttribute("current");
        if (item === target) {
          item.setAttribute("current", "");
        }
      });
    });
  });
</script>

<style>
  .main-sticky {
    position: relative;
    height: 500px;
    display: flex;
    overflow: hidden;
    background-color: var(--syn-color-neutral-200);
  }

  .content-sticky {
    padding: var(--syn-spacing-large);
    margin: var(--syn-spacing-large);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
    overflow-y: auto;
  }
</style>
```

---

## Footer

The Side navigation can have an optional bottom navigation "slot" to split up the navigation entries.Please avoid having to many navigation entries (at the bottom) as it can massively influence the user experience.

```html
<syn-header class="header-footer" label="Side Navigation"></syn-header>
<main class="main-footer">
  <syn-side-nav class="side-nav-footer" open="">
    <syn-nav-item current="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>

    <syn-nav-item slot="footer">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Footer Item
    </syn-nav-item>
    <syn-nav-item divider="" slot="footer">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Footer Item
    </syn-nav-item>
  </syn-side-nav>
</main>
<script type="module">
  // Only needed to have correct behavior in our documentation "Docs" page
  const header =
    document.querySelector("#storybook-docs .header-footer") ||
    document.querySelector(".header-footer");
  const sideNav =
    document.querySelector("#storybook-docs .side-nav-footer") ||
    document.querySelector(".side-nav-footer");
  if (sideNav && header) {
    header.connectSideNavigation(sideNav);
  }
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-footer")).forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest("syn-nav-item");

      if (!target) {
        return;
      }

      // Update the current indicator
      nav.querySelectorAll("syn-nav-item").forEach((item) => {
        item.removeAttribute("current");
        if (item === target) {
          item.setAttribute("current", "");
        }
      });
    });
  });
</script>

<style>
  .main-footer {
    position: relative;
    height: 500px;
    background-color: var(--syn-color-neutral-200);
  }
</style>
```

---

## Fixed

Per default, the side navigation shows an overlay. This should always be the case, if the content of the app is not shrinking. This makes especially sense for applications, where you navigate to a place and stay there for a longer time.

```html
<div class="container-fixed">
  <syn-header class="header-fixed" label="Side Navigation"></syn-header>
  <main class="main-fixed">
    <syn-side-nav class="side-nav-fixed" open="">
      <syn-nav-item current="">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider="">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider="">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider="">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider="">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content-fixed">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </div>
  </main>
</div>
<script type="module">
  // Only needed to have correct behavior in our documentation "Docs" page
  const header =
    document.querySelector("#storybook-docs .header-fixed") ||
    document.querySelector(".header-fixed");
  const sideNav =
    document.querySelector("#storybook-docs .side-nav-fixed") ||
    document.querySelector(".side-nav-fixed");
  if (sideNav && header) {
    header.connectSideNavigation(sideNav);
  }
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-fixed")).forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest("syn-nav-item");

      if (!target) {
        return;
      }

      // Update the current indicator
      nav.querySelectorAll("syn-nav-item").forEach((item) => {
        item.removeAttribute("current");
        if (item === target) {
          item.setAttribute("current", "");
        }
      });
    });
  });
</script>

<style>
  .container-fixed {
    display: flex;
    flex-direction: column;
  }

  .main-fixed {
    position: relative;
    height: 500px;
    background-color: var(--syn-color-neutral-200);
  }

  .content-fixed {
    padding: var(--syn-spacing-large);
    margin: var(--syn-spacing-large);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
  }
</style>
```

---

## Shrink

For specific cases it might make sense to have the navigation open while still being able to interact with the app. This especially makes sense for cases where you switch a lot between areas to interact with an app.You can decide yourself depending on your app and screen size, when it makes sense to omit the overlay and shrink the content.This should never be used in combination with a Rail navigation, as this would lead to too much friction on hover.

```html
<syn-header class="header-shrink" label="Side Navigation"></syn-header>
<main class="main-shrink">
  <syn-side-nav open="" class="side-nav-shrink" no-focus-trapping="">
    <syn-nav-item current="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
  </syn-side-nav>
  <div class="content-shrink">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </div>
</main>
<script type="module">
  // Only needed to have correct behavior in our documentation "Docs" page
  const header =
    document.querySelector("#storybook-docs .header-shrink") ||
    document.querySelector(".header-shrink");
  const sideNav =
    document.querySelector("#storybook-docs .side-nav-shrink") ||
    document.querySelector(".side-nav-shrink");
  if (sideNav && header) {
    header.connectSideNavigation(sideNav);
  }
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-shrink")).forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest("syn-nav-item");

      if (!target) {
        return;
      }

      // Update the current indicator
      nav.querySelectorAll("syn-nav-item").forEach((item) => {
        item.removeAttribute("current");
        if (item === target) {
          item.setAttribute("current", "");
        }
      });
    });
  });
</script>

<style>
  .main-shrink {
    position: relative;
    height: 500px;
    display: flex;
    overflow: hidden;
    background-color: var(--syn-color-neutral-200);
  }

  .side-nav-shrink::part(overlay) {
    display: none;
  }

  .content-shrink {
    padding: var(--syn-spacing-large);
    margin: var(--syn-spacing-large);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
    overflow-y: auto;
  }
</style>
```

---

## Indentation

The different levels of navigation can be organized using the indention. The current status of a page shows the user directly which page they are browsing.

```html
<syn-header class="header-indentation" label="Side Navigation"></syn-header>
<main class="main-indentation">
  <syn-side-nav class="side-nav-indentation" open="">
    <syn-nav-item open="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
      <!-- second-level -->
      <syn-nav-item slot="children" open="">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
        <!-- third-level -->
        <syn-nav-item slot="children" current="">
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <!-- /third-level -->
      </syn-nav-item>
      <!-- /second-level -->
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
    <syn-nav-item divider="">
      <syn-icon name="wallpaper" slot="prefix"></syn-icon>
      Navigation Item
    </syn-nav-item>
  </syn-side-nav>
</main>
<script type="module">
  // Only needed to have correct behavior in our documentation "Docs" page
  const header =
    document.querySelector("#storybook-docs .header-indentation") ||
    document.querySelector(".header-indentation");
  const sideNav =
    document.querySelector("#storybook-docs .side-nav-indentation") ||
    document.querySelector(".side-nav-indentation");
  if (sideNav && header) {
    header.connectSideNavigation(sideNav);
  }
</script>

<script type="module">
  // This emulates a click on the side-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll(".side-nav-indentation")).forEach(
    (nav) => {
      nav.addEventListener("click", (e) => {
        const target = e.target.closest("syn-nav-item");

        if (!target) {
          return;
        }

        // Update the current indicator
        nav.querySelectorAll("syn-nav-item").forEach((item) => {
          item.removeAttribute("current");
          if (item === target) {
            item.setAttribute("current", "");
          }
        });
      });
    },
  );
</script>

<style>
  .main-indentation {
    position: relative;
    height: 500px;
    background-color: var(--syn-color-neutral-200);
  }
</style>
```