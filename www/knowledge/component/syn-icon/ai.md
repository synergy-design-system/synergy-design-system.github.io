# syn-icon

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-icon

## Rules

# syn-icon

## Summary

Icons are symbols that can be used to represent various options within an application.

## Common Use Cases

- Add visual cues to buttons, alerts, and status messages.
- Represent actions in compact toolbars.
- Support navigation and quick scanning in dense layouts.

## Usage Guidelines

### Semantics

- Use icons to support text, not replace it, unless the icon is universally understood.
- For icon only interactions, pair with syn-icon-button and an accessible label.
- Choose icons that match the user intent and context.

### Styling

- Use consistent icon sizes within the same interface area.
- Use design tokens for color and avoid ad hoc hex colors.
- Keep visual weight balanced when combining icons with text.

### Icon Sources

- Use bundled libraries for common icons whenever possible.
- Use custom libraries only when required by brand or domain specific assets.
- Validate fallback behavior when loading icons from CDN or sprite sheets.

## Accessibility

- Provide a label when the icon conveys meaning or triggers an action.
- Use decorative icons without labels so assistive tech can ignore them.
- Do not rely on icon color alone to communicate state.

## Related Components

- syn-icon-button
- syn-button

## Interface

# syn-icon

## Summary

Icons are symbols that can be used to represent various options within an application.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-icon--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=1616-1512)

## Class Information

- **Tag Name:** `syn-icon`
- **Import Example:** `import SynIcon from '@synergy-design-system/components/components/icon/icon.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Properties

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices.

### library

attribute: `library`
reflects: yes
type: `string`
default: `'default'`

The name of a registered custom icon library.

### name

attribute: `name`
reflects: yes
type: `string | undefined`
default: none

The name of the icon to draw. Available names depend on the icon library being used.

### src

attribute: `src`
reflects: no
type: `string | undefined`
default: none

An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.

## Available CSS Parts

- `svg`: The internal SVG element.
- `use`: The <use> element generated when using `spriteSheet: true`

## Available Events

### syn-error

type: `SynErrorEvent`

Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.

### syn-load

type: `SynLoadEvent`

Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.

## Examples

## Default

This shows the syn-icon in its default state

```html
<syn-icon name="wallpaper"></syn-icon>
```

---

## Colors

Icons inherit their color from the current text color.
Thus, you can set the color property on the <syn-icon> element or an ancestor to change color.

```html
<div style="color: var(--syn-color-primary-600)">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
</div>
<div style="color: var(--syn-color-neutral-800)">
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
</div>
<div style="color: var(--syn-color-error-700)">
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>
```

---

## Sizing

Icons are sized relative to the current font size.
To change their size, set the font-size property on the icon itself
or on a parent element as shown below.

```html
<div style="font-size: var(--syn-font-size-2x-large)">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
  <syn-icon name="flag"></syn-icon>
  <syn-icon name="favorite"></syn-icon>
  <syn-icon name="image"></syn-icon>
  <syn-icon name="bolt"></syn-icon>
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>
```

---

## Labels

For non-decorative icons, use the label attribute to announce it to assistive devices.

```html
<syn-icon name="star" label="Add to favorites"></syn-icon>
```

---

## Custom Icons

Custom icons can be loaded individually with the src attribute.
Only SVGs on a local or CORS-enabled endpoint are supported.
If you're using more than one custom icon, it might make sense to register a custom icon library.

```html
<syn-icon src="/logo-claim.svg" style="font-size: 10rem"></syn-icon>
```

---

## CDN Icon Library

```html
<div style="font-size: var(--syn-font-size-x-large)">
  <syn-icon library="fa" name="far-bell"></syn-icon>
  <syn-icon library="fa" name="far-comment"></syn-icon>
  <syn-icon library="fa" name="far-hand-point-right"></syn-icon>
  <br />
  <syn-icon library="fa" name="fas-archive"></syn-icon>
  <syn-icon library="fa" name="fas-book"></syn-icon>
  <syn-icon library="fa" name="fas-chess-knight"></syn-icon>
  <br />
  <syn-icon library="fa" name="fab-apple"></syn-icon>
  <syn-icon library="fa" name="fab-chrome"></syn-icon>
  <syn-icon library="fa" name="fab-edge"></syn-icon>
</div>
```

---

## Bundled Icon Library

```html
<div style="font-size: var(--syn-font-size-x-large)">
  <syn-icon library="bundled-default" name="warning"></syn-icon>
  <syn-icon library="bundled-default" name="inventory"></syn-icon>
  <syn-icon library="bundled-default" name="battery_charging_full"></syn-icon>
  <syn-icon library="bundled-default" name="notifications"></syn-icon>
</div>
```

---

## Sprite Sheet Usage

```html
<div style="font-size: var(--syn-font-size-x-large)">
  <syn-icon library="sprite" name="settings"></syn-icon>
  <syn-icon library="sprite" name="refresh"></syn-icon>
</div>
```