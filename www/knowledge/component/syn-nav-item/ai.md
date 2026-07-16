# syn-nav-item

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-nav-item

## Rules

# syn-nav-item

## Summary

Flexible button / link component that can be used to quickly build navigations.

## Common Use Cases

- Populate an `<syn-prio-nav>` within a `<syn-header>` navigation bar at the top of a page, helping users easily access different sections.
- Implement navigation items in a `<syn-side-nav>` for a more detailed and hierarchical navigation structure.

## Usage Guidelines

### Background Options

- Use with background options of white, neutral-100, and primary-100.

### Labels and Icons

- Use clear, concise labels for navigation items.
- Don't use icons alone unless they are universally understood.
- Use icons and labels together to enhance comprehension.

### Spacing

- Use indented for nested navigation items in vertical desktop or mobile viewports and in horizontal mobile menus.

### Text Styles and Descriptions

- Be consistent in the use of descriptions: Include them for all items at the same level and keep them similar in length.

## Accessibility

- Provide a logical tab order that follows the visual sequence of navigation items and their different levels.
- Use aria-current="page" or aria-current="location" on the active navigation item to communicate the user's current location.

## Related Components

- syn-side-nav
- syn-prio-nav

## Related Templates

- AppShell

## Interface

# syn-nav-item

## Summary

Flexible button / link component that can be used to quickly build navigations.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-nav-item--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41163-402744)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=12362-10922)

## Class Information

- **Tag Name:** `syn-nav-item`
- **Import Example:** `import SynNavItem from '@synergy-design-system/components/components/nav-item/nav-item.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.15.0

## Available Slots

- `(default)`: The navigation item's label.
- `prefix`: A presentational prefix icon or similar element.
- `suffix`: A presentational suffix icon or similar element.
- `children`: Slot used to provide nested child navigation elements. If provided, details and summary elements will be used. A chevron will be shown on the right side regardless of the chevron property.

## Available Properties

### chevron

attribute: `chevron`
reflects: yes
type: `boolean`
default: `false`

Appends a chevron to the right side of a navigation item.
Only used if `horizontal` is false.

### childrenSlot

attribute: -
reflects: -
type: `HTMLSlotElement`
default: none

Reference to the children slot

### control

attribute: -
reflects: -
type: `HTMLButtonElement | HTMLLinkElement | HTMLElement`
default: none

Reference to the outermost button

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the navigation item.

### divider

attribute: `divider`
reflects: yes
type: `boolean`
default: `false`

Toggle to true to show a divider above the element.
Only available when horizontal is false.

### horizontal

attribute: `horizontal`
reflects: yes
type: `boolean`
default: `false`

The navigation item's orientation.

### href

attribute: `href`
reflects: yes
type: `string`
default: none

The navigation item's href target.
If provided, the navigation item will use an anchor tag otherwise it will use a button tag.

If the 'children' slot is provided, the navigation item will ignore the 'href' and use
accordion behavior.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Reflects HTML details element state and allows control from parent.
Only used if `horizontal` is false and `children` is defined.

### rel

attribute: `rel`
reflects: no
type: `string`
default: `'noreferrer noopener'`

When using `href`, this attribute will map to the underlying link's `rel` attribute.
Unlike regular links, the default is `noreferrer noopener` to prevent security exploits.

However, if you're using `target` to point to a specific tab/window,
this will prevent that from working correctly.

You can remove or change the default value by setting the attribute
to an empty string or a value of your choice, respectively.

### target

attribute: `target`
reflects: no
type: `'_blank' | '_parent' | '_self' | '_top'`
default: none

Tells the browser where to open the link. Only used when `href` is present.

## Attribute-only Members

These attributes are reflected but not exposed as component properties.

### current

reflects: yes
type: `boolean`
default: `false`

-

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the button.

### click()

parameters: -
returns: `void`

Simulates a click on the nav-items button, link or summary.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the nav-item

## Available CSS Parts

- `base`: The component's base wrapper including children.
- `chevron`: The container that wraps the chevron.
- `children`: The wrapper that holds the children
- `content`: The component's content excluding children.
- `content-wrapper`: The component's content wrapper.
- `current-indicator`: The indicator used when current is set to true
- `details`: The details element rendered when there are children available
- `divider`: The components optional top divider.
- `prefix`: The container that wraps the prefix.
- `suffix`: The container that wraps the suffix.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the button loses focus.

### syn-focus

type: `SynFocusEvent`

Emitted when the button gains focus.

### syn-hide

type: `SynHideEvent`

Emitted when the navigation item: - has children, - and is clicked while HTML details are shown.

### syn-show

type: `SynShowEvent`

Emitted when the navigation item: - has children, - and is clicked while HTML details are hidden.

## Dependencies

- `syn-divider`
- `syn-icon`

## Examples

## Default

The navigation item is used to trigger page switches.

```html
<syn-nav-item> Label </syn-nav-item>
```

---

## Labels

Use the label attribute to change the content of a navigation item.

```html
<syn-nav-item>This is a label</syn-nav-item>
```

---

## Current

The current attribute provides the user feedback about which of the navigation elements is currently selected.

```html
<syn-nav-item current="">Current Navigation item</syn-nav-item>
```

---

## Horizontal Navigation

Use the horizontal attribute to indicate that an element is used in a horizontal navigation. (The example shows it in combination with the current attribute, to indicate the difference.)

```html
<div style="display: flex; gap: var(--syn-spacing-large)">
  <syn-nav-item current="" horizontal=""
    >Horizontal navigation item</syn-nav-item
  >
  <syn-nav-item horizontal="">Horizontal navigation item</syn-nav-item>
</div>
```

---

## Focus

The focus event gives the user feedback that the Navigation Item has been focused by the keyboard interaction or active click from the user.

```html
<div style="padding: 5px">
  <syn-nav-item>Current navigation item</syn-nav-item>
</div>
```

---

## Prefix And Suffix Slot

Use the prefix and suffix slots to add e. g. icons or tags. If available the prefix slot will be shown in the rail navigation.

```html
<style>
  .doc-number-helper {
    align-items: center;
    border: 1px solid var(--syn-color-neutral-400);
    border-radius: var(--syn-border-radius-circle);
    box-sizing: border-box;
    color: var(--syn-color-neutral-950);
    display: inline-flex;
    font-size: var(--syn-font-size-x-small);
    height: var(--syn-font-size-x-large);
    width: var(--syn-font-size-x-large);
    justify-content: center;
  }
</style>
<syn-nav-item>
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  Item with icon slots
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-nav-item>
<br />
<syn-nav-item>
  <span class="doc-number-helper" slot="prefix">1</span>
  Step-like item with a number
</syn-nav-item>
```

---

## Children Closed Or Open Vertical Only

Use the \*children attribute to indicate that a chevron should be shown. In development this will be handled automatically as soon as an element has children.Note:Since there should be no double use of functionality, a link cannot be mixed with an accordion behavior. The accordion always has priority, which means that if the href attribute is used at the same time as children, the link functionality is ignored and only the accordion behavior is provided.

```html
<nav style="width: 320px">
  <syn-nav-item>
    Children closed
    <nav slot="children">
      <syn-nav-item>Item 1</syn-nav-item>
      <syn-nav-item>Item 2</syn-nav-item>
    </nav>
  </syn-nav-item>
  <br />
  <syn-nav-item open="">
    Children open
    <nav slot="children">
      <syn-nav-item href="javascript:void(0)">Item 1</syn-nav-item>
      <syn-nav-item>Item 2</syn-nav-item>
    </nav>
  </syn-nav-item>
</nav>
```

---

## Divider

Use the divider attribute to add a border at the top. This should be used for first level elements in vertical navigations.

```html
<nav style="width: 320px">
  <syn-nav-item>Dividing element</syn-nav-item>
  <syn-nav-item divider="">Dividing element</syn-nav-item>
</nav>
```

---

## Indentation

Vertical navigation elements can be indented to indicate deeper navigation levels.

```html
<nav style="width: 320px; gap: 24px; display: flex; flex-direction: column">
  <syn-nav-item current="">Indentation: none</syn-nav-item>
  <syn-nav-item current="" style="--indentation: 1"
    >Indentation: 1</syn-nav-item
  >
  <syn-nav-item current="" style="--indentation: 2"
    >Indentation: 2</syn-nav-item
  >
</nav>
```

---

## Disabled

Use the disabled attribute to disable a navigation-item.

```html
<syn-nav-item disabled="">Parent Element</syn-nav-item>
```