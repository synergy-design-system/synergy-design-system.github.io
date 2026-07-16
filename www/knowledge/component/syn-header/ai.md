# syn-header

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-header

## Rules

# syn-header

## Summary

The <syn-header /> element provides a generic application header
that can be used to add applications name, toolbar and primary navigation.

## Common Use Cases

- Display primary navigation links for easy access to different sections of the website.
- Showcase the company logo prominently to reinforce brand identity.
- Include links for user account access.
- Provide a prominent search function to help users quickly find content.

## Usage Guidelines

### Layout

- Place navigation items in the navigation slot, the logo at the left, and meta navigation on the right in wider viewports to keep consistency across products.
- In smaller viewports, place an expandable menu on the left to host navigation items while keeping the logo consistently on the left across all viewport sizes.
- Keep the navigation fixed at the top of the website when scrolling back to the top.

### Navigation Structure and Content

- Include the logo, main navigation, and, if applicable, meta navigation.
- Use the number of navigation items that best suits the content, always ensuring categories are clearly labeled and mutually exclusive.
- Regularly update the navigation links to reflect current content and structure.

### Visual Style and Branding

- Provide clear visual indicators for active or selected navigation items.
- Refrain from customizing elements in ways that deviate from the brand identity.
- Include the company logo prominently; do not use a header without the corresponding logo.

## Accessibility

- Refrain from injecting non-navigation or unrelated content (like dynamic elements) into the header container to avoid distracting or confusing assistive technology.
- Provide a unique ID on the header container for skip links, ensuring keyboard users can quickly bypass navigation if desired.
- When placing a logo in the header, the alt text should describe its target (e.g., 'Start Page') rather than the image itself (e.g., 'SICK Logo'), and it should either match the visual label or at least start with the same words.

## Related Components

- syn-prio-nav
- syn-nav-item

## Related Templates

- AppShell

## Interface

# syn-header

## Summary

The <syn-header /> element provides a generic application header
that can be used to add applications name, toolbar and primary navigation.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41163-318668)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=42864-478896)

## Class Information

- **Tag Name:** `syn-header`
- **Import Example:** `import SynHeader from '@synergy-design-system/components/components/header/header.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.10.0

## Available Slots

- `label`: The label for the header
- `logo`: The logo that should be displayed. Will fall back to the SICK logo if not provided
- `meta-navigation`: The meta-navigation is used to add various application toolbar icons Best used with `<syn-icon-button />` and `<syn-drop-down />`
- `navigation`: This slot can be used to add an optional horizontal navigation
- `open-burger-menu-icon`: An icon to use in lieu of the default burger-menu=open state. The default close icon is a 'x'.
- `closed-burger-menu-icon`: An icon to use in lieu of the default burger-menu=closed state. The default open icon is a burger menu.

## Available Properties

### burgerMenu

attribute: `burger-menu`
reflects: yes
type: `'hidden' | 'open' | 'closed'`
default: `'hidden'`

Defines the current visibility and icon of the burger-menu icon.
The menu button is added automatically if the component finds a syn-side-nav in
variant="default".
The following values can be used:

- hidden: The burger menu is not visible
- open: The burger menu is visible and shows the close icon
- closed: The burger menu is visible and shows the open icon

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The headers label. If you need to display HTML, use the `label` slot instead.

### sticky

attribute: `sticky`
reflects: yes
type: `boolean`
default: `false`

Makes the header stick to the top of the viewport when scrolling.
Also applies a shadow to the header when scrolling.

## Available Methods

### connectSideNavigation()

parameters: `sideNav: SynSideNav | null`
returns: `void`

Connect a `syn-side-nav` to add automatic interaction of the header with the side navigation
like showing the burger menu icon and open / close handling.

If no side navigation is connected, the header will use the first `syn-side-nav` element it
finds.

## Available CSS Parts

- `base`: The component's base wrapper
- `burger-menu-toggle-button`: The button that toggles the burger menu
- `content`: The wrapper most content items reside
- `label`: The element wrapping the application name
- `logo`: The wrapper the application logo resides in
- `meta-navigation`: The Item wrapping the optional application menu
- `navigation`: The wrapper that is holding the optional top navigation section

## Available Events

### syn-burger-menu-closed

type: `SynBurgerMenuClosedEvent`

Emitted when the burger menu is toggled to closed

### syn-burger-menu-hidden

type: `SynBurgerMenuHiddenEvent`

Emitted when the burger menu is toggled to hidden

### syn-burger-menu-open

type: `SynBurgerMenuOpenEvent`

Emitted when the burger menu is toggled to open

## Examples

## Default

The header is used to indicate the name of the app, provide important actions in a toolbar and a navigation.

```html
<syn-header>
  <span slot="label">App Name</span>
</syn-header>
```

---

## Label

Use the label attribute to change the app name.

```html
<syn-header label="A new label"></syn-header>
```

---

## Logo

Use the logo slot to change the app logo. Usually this is only needed in whitelabel solutions, when the SICK branding explicitly has to be hidden.

```html
<syn-header label="App Name">
  <span
    style="
      width: 32px;
      height: 32px;
      border-radius: 32px;
      background: var(--syn-color-neutral-1000);
      display: block;
    "
    slot="logo"
  ></span>
</syn-header>
```

---

## Focus

The focus event gives the user feedback that a link in the logo has been focused by the keyboard interaction and that the link is ready to be navigated to.

```html
<style>
  .custom-header-link-with-logo {
    color: var(--syn-logo-color);
  }
  .custom-header-link-with-logo syn-icon {
    display: block;
    width: auto;
    height: 32px;
  }

  /* Safari fix for ##623 */
  .custom-header-link-with-logo syn-icon::part(svg) {
    width: auto;
  }
</style>
<syn-header label="App Name">
  <a href="#" slot="logo" tabindex="0" class="custom-header-link-with-logo">
    <syn-icon
      name="logo-color"
      library="system"
      label="Custom Logo with link"
    ></syn-icon>
  </a>
</syn-header>
```

---

## Meta Navigation

Use the Meta Navigation slot to add additional functionalities to your application. Please be aware of the guidelines regarding the order of icons in the toolbar.Important: The Options Menu doesn’t handle any responsive behaviour, e. g. if there is not enough space for all items in different screen sizes. You have to make sure yourself, that your app works correctly and e. g. move elements into the footer of the side navigation or inside a “more” button in the Options Menu.

```html
<syn-header label="App Name">
  <nav slot="meta-navigation">
    <syn-icon-button name="apps" label="Apps"></syn-icon-button>
    <syn-icon-button name="account_circle" label="Account"></syn-icon-button>
    <syn-icon-button name="more_vert" label="More"></syn-icon-button>
  </nav>
</syn-header>
```

---

## Meta Navigation With Dividers

If you need different icon groups or a separator between them, add a <syn-divider> between them.

```html
<syn-header label="App Name">
  <nav slot="meta-navigation">
    <syn-icon-button name="settings_outline" label="Settings"></syn-icon-button>
    <syn-icon-button
      name="insert_chart_outlined"
      label="Analytics"
    ></syn-icon-button>
    <syn-divider vertical=""></syn-divider>
    <syn-icon-button name="dark_mode" label="Dark Mode"></syn-icon-button>
    <syn-divider vertical=""></syn-divider>
    <syn-icon-button name="language" label="Language"></syn-icon-button>
    <syn-icon-button name="login" label="Login"></syn-icon-button>
  </nav>
</syn-header>
```

---

## Navigation

Use the top navigation slot to add syn-navigation and horizontal syn-navigation-items.

```html
<syn-header label="App Name">
  <syn-prio-nav slot="navigation">
    <syn-nav-item current="" horizontal="">Domains</syn-nav-item>
    <syn-nav-item horizontal="">Projects</syn-nav-item>
    <syn-nav-item horizontal="">Trainings</syn-nav-item>
    <syn-nav-item horizontal="">Evaluations</syn-nav-item>
    <syn-nav-item horizontal="">Deployments</syn-nav-item>
  </syn-prio-nav>
</syn-header>
<script type="module">
  // This emulates a click on the prio-nav and updates the main content
  // This will usually be provided by the application itself, e.g. via
  // built in routing functions like angular-router, react-router or vue-router
  Array.from(document.querySelectorAll("syn-prio-nav")).forEach((nav) => {
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

## Burger Menu

Use the Burger Menu as trigger to open and close the Navigation. In the open state, the icon changes to a cancel icon. This will be hidden, if you use a rail navigation.

```html
<syn-header burger-menu="closed" label="App Name"> </syn-header>
```

---

## Sticky

Use the sticky attribute to add a shadow when the header is fixed at the top and other content scrolls behind it.

```html
<syn-header label="App Name" sticky=""></syn-header>
```