# syn-icon-button

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-icon-button

## Rules

# syn-icon-button

## Summary

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

## Common Use Cases

- Toolbar actions such as edit, delete, and settings.
- Compact controls in tables, cards, and dialogs.
- Navigation utility actions in headers and side panels.

## Usage Guidelines

### Labeling

- Use concise labels that describe the resulting action, such as "Edit" or "Close".
- Add a tooltip when extra context is helpful, especially in dense toolbars.
- Keep label wording consistent across the product.

### Interaction

- Use icon buttons for quick actions and compact controls.
- Prefer regular buttons when text improves clarity.
- Use disabled state sparingly and explain why an action is unavailable when possible.

### Size

- Use size variants consistently within a control group.

## Accessibility

- Always provide a meaningful label attribute for icon only buttons.
- Ensure focus styles remain visible in all variants and states.
- Avoid using icon buttons for destructive actions without clear context or confirmation.

## Related Components

- syn-icon
- syn-button
- syn-tooltip

## Interface

# syn-icon-button

## Summary

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-icon-button--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41137-747935)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=3173-8459)

## Class Information

- **Tag Name:** `syn-icon-button`
- **Import Example:** `import SynIconButton from '@synergy-design-system/components/components/icon-button/icon-button.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.1.0

## Available Properties

### color

attribute: `color`
reflects: yes
type: `'currentColor' | 'primary' | 'neutral'`
default: `'currentColor'`

The color of the icon button.
The default "currentColor" makes it possible to easily style the icon button from outside without any CSS variables.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the button.

### download

attribute: `download`
reflects: no
type: `string | undefined`
default: none

Tells the browser to download the linked file as this filename. Only used when `href` is set.

### href

attribute: `href`
reflects: no
type: `string | undefined`
default: none

When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does.

### library

attribute: `library`
reflects: no
type: `string | undefined`
default: none

The name of a registered custom icon library.

### name

attribute: `name`
reflects: no
type: `string | undefined`
default: none

The name of the icon to draw. Available names depend on the icon library being used.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large' | 'inherit'`
default: `'inherit'`

The icon button's size.

### src

attribute: `src`
reflects: no
type: `string | undefined`
default: none

An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.

### target

attribute: `target`
reflects: no
type: `'_blank' | '_parent' | '_self' | '_top' | undefined`
default: none

Tells the browser where to open the link. Only used when `href` is set.

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the icon button.

### click()

parameters: -
returns: `void`

Simulates a click on the icon button.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the icon button.

## Available CSS Parts

- `base`: The component's base wrapper.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the icon button loses focus.

### syn-focus

type: `SynFocusEvent`

Emitted when the icon button gains focus.

## Dependencies

- `syn-icon`

## Examples

## Default

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.For a full list of icons that come bundled with Synergy, refer to the Assets.Note: To make the icon-button work in development, have a look at the icon documentation for how to set up the assets package.

```html
<syn-icon-button
  name="wallpaper"
  label="Wallpaper"
  size="medium"
></syn-icon-button>
```

---

## Sizes

Use the size attribute to change a icon-button size.

```html
<div style="align-items: end; display: flex; gap: var(--syn-spacing-large)">
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="neutral"
    size="small"
  ></syn-icon-button>
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="neutral"
    size="medium"
  ></syn-icon-button>
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="neutral"
    size="large"
  ></syn-icon-button>
</div>
```

---

## Colors

The Icon button can have two color variants, Primary or Neutral Color.

```html
<div style="align-items: center; display: flex; gap: var(--syn-spacing-large)">
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="neutral"
    size="medium"
  ></syn-icon-button>
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="primary"
    size="medium"
  ></syn-icon-button>
</div>
```

---

## Link Button

It’s often helpful to have a button that works like a link. This is possible by setting the href attribute, which will make the component render an under the hood. This gives you all the default link behavior the browser provides (e.g. CMD/CTRL/SHIFT + CLICK) and exposes the target and download attributes.

```html
<syn-icon-button
  name="wallpaper"
  label="Wallpaper"
  color="neutral"
  href="https://example.com"
  target="_blank"
  size="medium"
></syn-icon-button>
```

---

## Disabled

Use the disabled attribute to disable the icon button.

```html
<div style="align-items: center; display: flex; gap: var(--syn-spacing-large)">
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="neutral"
    disabled=""
    size="medium"
  ></syn-icon-button>
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="primary"
    disabled=""
    size="medium"
  ></syn-icon-button>
</div>
```

---

## Focus

The focus event gives the user feedback that the icon-button has been focused by the keyboard interaction.

```html
<div style="padding: 5px">
  <div
    style="align-items: center; display: flex; gap: var(--syn-spacing-large)"
  >
    <syn-icon-button
      name="wallpaper"
      label="Wallpaper"
      color="neutral"
      size="small"
    ></syn-icon-button>
    <syn-icon-button
      name="wallpaper"
      label="Wallpaper"
      color="neutral"
      size="medium"
    ></syn-icon-button>
    <syn-icon-button
      name="wallpaper"
      label="Wallpaper"
      color="neutral"
      size="large"
    ></syn-icon-button>
  </div>
</div>
```

---

## Label

A description that gets read by assistive devices. For optimal accessibility, you have to include a label that describes what the icon button does.

```html
<div class="grid">
  <span>Unset label property: </span>
  <syn-icon-button
    name="wallpaper"
    color="neutral"
    size="medium"
  ></syn-icon-button>
  <span>Set label property: </span>
  <syn-icon-button
    name="wallpaper"
    label="Wallpaper"
    color="neutral"
    size="medium"
  ></syn-icon-button>
</div>
<style>
  .grid {
    font-size: var(--syn-font-size-x-small);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
</style>
```