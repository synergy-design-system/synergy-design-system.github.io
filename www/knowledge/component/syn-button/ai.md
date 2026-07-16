# syn-button

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-button

## Rules

# syn-button

## Summary

Buttons represent actions that are available to the user.

## Common Use Cases

- Highlight key actions, like "Request information" or "Next step".
- Provide supporting actions, like "Learn more", "Explore topic", or "Cancel".
- Use for functional actions after user input, such as submitting a form or searching for content.

## Usage Guidelines

### Action Labels

- Write simple, self-explanatory labels that include both a verb (action) and a noun.
- Use text-only labels whenever possible.
- Avoid generic labels like "OK" or "Download". Use "Confirm selection" or "Download Report" instead.
- Limit action labels to 1 to 3 words or 15 to 20 characters.

### Action Priority

- Select the appropriate variant for each action based on context and importance.
- Avoid displaying more than one Call To Action (CTA) at a time on the screen, especially in the same context (e.g., teaser).

### Function

- Use to trigger an action or place a link inside it to navigate to other content.

### Icons

- Add icons to labels only when they clearly support the associated action (e.g., print, email, share), and reserve icon-only buttons for exceptions.
- Avoid displaying both left and right icons simultaneously.
- To prevent overcrowding, do not use icons on buttons with extensive copy that spans multiple lines.

### Placement and Responsiveness

- Maintain consistent placement of interactive elements throughout the user interface.
- Position the primary action at the top (in vertical layout) or on the right (in horizontal layout) when paired with a secondary option.
- Avoid placing two primary actions next to each other; opt for a secondary action instead.
- Expand to full width on small devices if applicable.

## Accessibility

- Ensure that button text is unique and contextual. Screen readers will read it aloud, helping users understand the action associated with the button.
- Keep button text short. Longer copy is harder to scan and increases cognitive load. Remember that translations may double the length of the text.
- Be aware that button's height may change based on the user's preferred font size set system-wide.
- For icon-only: Include an ARIA label describing its function (e.g., "Expand section") to ensure the button is accessible to screen readers.
- Prefer keeping the button enabled by default by relying on default values or by validating on submit.

## Related Templates

- Forms

## Interface

# syn-button

## Summary

Buttons represent actions that are available to the user.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-button--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42076-167749)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=1080-6566)

## Class Information

- **Tag Name:** `syn-button`
- **Import Example:** `import SynButton from '@synergy-design-system/components/components/button/button.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.0.0

## Available Slots

- `(default)`: The button's label.
- `prefix`: A presentational prefix icon or similar element.
- `suffix`: A presentational suffix icon or similar element.

## Available Properties

### caret

attribute: `caret`
reflects: yes
type: `boolean`
default: `false`

Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.

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

Tells the browser to download the linked file as this filename. Only used when `href` is present.

### form

attribute: `form`
reflects: no
type: `string`
default: none

The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button.

### formAction

attribute: `formaction`
reflects: no
type: `string`
default: none

Used to override the form owner's `action` attribute.

### formEnctype

attribute: `formenctype`
reflects: no
type: `'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'`
default: none

Used to override the form owner's `enctype` attribute.

### formMethod

attribute: `formmethod`
reflects: no
type: `'post' | 'get'`
default: none

Used to override the form owner's `method` attribute.

### formNoValidate

attribute: `formnovalidate`
reflects: no
type: `boolean`
default: none

Used to override the form owner's `novalidate` attribute.

### formTarget

attribute: `formtarget`
reflects: no
type: `'_self' | '_blank' | '_parent' | '_top' | string`
default: none

Used to override the form owner's `target` attribute.

### href

attribute: `href`
reflects: no
type: `string`
default: `''`

When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.

### loading

attribute: `loading`
reflects: yes
type: `boolean`
default: `false`

Draws the button in a loading state.

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present.

### rel

attribute: `rel`
reflects: no
type: `string`
default: `'noreferrer noopener'`

When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The button's size.

### target

attribute: `target`
reflects: no
type: `'_blank' | '_parent' | '_self' | '_top'`
default: none

Tells the browser where to open the link. Only used when `href` is present.

### type

attribute: `type`
reflects: no
type: `'button' | 'submit' | 'reset'`
default: `'button'`

The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.

### value

attribute: `value`
reflects: no
type: `string`
default: `''`

The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present.

### variant

attribute: `variant`
reflects: yes
type: `'filled' | 'outline' | 'text'`
default: `'outline'`

The button's theme variant.

## Attribute-only Members

These attributes are reflected but not exposed as component properties.

### title

reflects: yes
type: `string`
default: `''`

-

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the button.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

### click()

parameters: -
returns: `void`

Simulates a click on the button.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the button.

### getForm()

parameters: -
returns: `void`

Gets the associated form, if one exists.

### reportValidity()

parameters: -
returns: `void`

Checks for validity and shows the browser's validation message if the control is invalid.

### setCustomValidity()

parameters: `message: string`
returns: `void`

Sets a custom validation message. Pass an empty string to restore validity.

## Available CSS Parts

- `base`: The component's base wrapper.
- `caret`: The button's caret icon, an `<syn-icon>` element.
- `label`: The button's label.
- `prefix`: The container that wraps the prefix.
- `spinner`: The spinner that shows when the button is in the loading state.
- `suffix`: The container that wraps the suffix.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the button loses focus.

### syn-focus

type: `SynFocusEvent`

Emitted when the button gains focus.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

## Dependencies

- `syn-icon`
- `syn-spinner`

## Examples

## Default

Buttons represent actions that are available to the user.

```html
<syn-button> Default </syn-button>
```

---

## Variants

Use the variant attribute to set the button’s variant. Variants can be Filled, Outline and Text Buttons. Use the outline attribute to draw outlined buttons with transparent backgrounds. Use the text variant to create text buttons that share the same size as regular buttons but don’t have backgrounds or borders.

```html
<div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)">
  <syn-button variant="filled">Filled</syn-button>
  <syn-button variant="outline">Outline</syn-button>
  <syn-button variant="text">Text</syn-button>
</div>
```

---

## Sizes

Use the size attribute to change a button’s size.

```html
<div
  style="
    align-items: anchor-center;
    display: flex;
    flex-direction: row;
    gap: var(--syn-spacing-large);
  "
>
  <syn-button size="small">Small</syn-button>
  <syn-button size="medium">Medium</syn-button>
  <syn-button size="large">Large</syn-button>
</div>
```

---

## Focus

The focus event gives the user feedback that the Button has been focused by the keyboard interaction and that the button component is ready for use.

```html
<div style="padding: 5px">
  <syn-button>Default</syn-button>
</div>
```

---

## Link Buttons

It’s often helpful to have a button that works like a link. This is possible by setting the href attribute, which will make the component render an under the hood. This gives you all the default link behavior the browser provides (e.g. CMD/CTRL/SHIFT + CLICK) and exposes the target and download attributes.

```html
<div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)">
  <syn-button href="https://example.com/">Link</syn-button>
  <syn-button href="https://example.com/" target="_blank"
    >New Window</syn-button
  >
  <syn-button href="/assets/images/wordmark.svg" download="synergy.svg"
    >Download</syn-button
  >
  <syn-button href="https://example.com/" disabled="">Disabled</syn-button>
</div>
```

---

## Setting A Custom Width

As expected, buttons can be given a custom width by setting the width attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-button size="small" style="width: 100%">Small</syn-button>
  <syn-button size="medium" style="width: 100%">Medium</syn-button>
  <syn-button size="large" style="width: 100%">Large</syn-button>
</div>
```

---

## Icon Only

Insert just a single icon to use the same button style.

```html
<div
  style="
    display: flex;
    flex-direction: row;
    gap: var(--syn-spacing-large);
    margin-bottom: var(--syn-spacing-small);
  "
>
  <syn-button size="small" variant="filled">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
  <syn-button size="small">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
  <syn-button size="small" variant="text">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
</div>

<div
  style="
    display: flex;
    flex-direction: row;
    gap: var(--syn-spacing-large);
    margin-bottom: var(--syn-spacing-small);
  "
>
  <syn-button size="medium" variant="filled">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
  <syn-button size="medium">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
  <syn-button size="medium" variant="text">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
</div>

<div
  style="
    display: flex;
    flex-direction: row;
    gap: var(--syn-spacing-large);
    margin-bottom: var(--syn-spacing-small);
  "
>
  <syn-button size="large" variant="filled">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
  <syn-button size="large">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
  <syn-button size="large" variant="text">
    <syn-icon name="settings" label="Settings"></syn-icon>
  </syn-button>
</div>
```

---

## Prefix And Suffix Icons

Use the prefix and suffix slots to add icons.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <div
    style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)"
  >
    <syn-button size="small">
      <syn-icon slot="prefix" name="settings"></syn-icon>
      Settings
    </syn-button>

    <syn-button size="small">
      <syn-icon slot="suffix" name="refresh"></syn-icon>
      Refresh
    </syn-button>

    <syn-button size="small">
      <syn-icon slot="prefix" name="link"></syn-icon>
      <syn-icon slot="suffix" name="launch"></syn-icon>
      Open
    </syn-button>
  </div>

  <div
    style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)"
  >
    <syn-button>
      <syn-icon slot="prefix" name="settings"></syn-icon>
      Settings
    </syn-button>

    <syn-button>
      <syn-icon slot="suffix" name="refresh"></syn-icon>
      Refresh
    </syn-button>

    <syn-button>
      <syn-icon slot="prefix" name="link"></syn-icon>
      <syn-icon slot="suffix" name="launch"></syn-icon>
      Open
    </syn-button>
  </div>

  <div
    style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)"
  >
    <syn-button size="large">
      <syn-icon slot="prefix" name="settings"></syn-icon>
      Settings
    </syn-button>

    <syn-button size="large">
      <syn-icon slot="suffix" name="refresh"></syn-icon>
      Refresh
    </syn-button>

    <syn-button size="large">
      <syn-icon slot="prefix" name="link"></syn-icon>
      <syn-icon slot="suffix" name="launch"></syn-icon>
      Open
    </syn-button>
  </div>
</div>
```

---

## Caret

Use the caret attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html
<div
  style="
    align-items: anchor-center;
    display: flex;
    flex-direction: row;
    gap: var(--syn-spacing-large);
  "
>
  <syn-button size="small" caret="">Small</syn-button>
  <syn-button size="medium" caret="">Medium</syn-button>
  <syn-button size="large" caret="">Large</syn-button>
</div>
```

---

## Loading

Use the loading attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html
<div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)">
  <syn-button variant="filled" loading="">Filled</syn-button>
  <syn-button variant="outline" loading="">Outline</syn-button>
  <syn-button variant="text" loading="">Text</syn-button>
</div>
```

---

## Disabled

Use the disabled attribute to disable a button.

```html
<div style="display: flex; flex-direction: row; gap: var(--syn-spacing-large)">
  <syn-button variant="filled" disabled="">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    Button
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-button>

  <syn-button variant="outline" disabled="">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    Button
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-button>

  <syn-button variant="text" disabled="">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    Button
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-button>
</div>
```