# syn-combobox

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-combobox

## Rules

# syn-combobox

## Summary

A combobox component that combines the functionality of a text input with a dropdown listbox,
allowing users to either select from predefined options or enter custom values (when not restricted).

## Common Use Cases

- Allow users to select one or more options from a potentially large list by typing a search string and filtering suggestions.
- Provide an autocomplete feature in forms where specific or complex entries benefit from quick lookup.
- Implement in search fields or filter panels when users may not recall the exact option name but can approximate it.
- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Compact layouts and simple fields.

## Usage Guidelines

### Content and Labels

- Keep option labels concise so that suggestions are easy to scan and select.
- Provide a clear, descriptive placeholder (e.g., "Search or select an option...") to help users understand they can type and choose from suggestions.
- Avoid repeating the same initial word in multiple suggestions to reduce scanning difficulty.

### Searching Behavior

- Filter available options in real time as the user types; highlight or bold matching text to indicate relevance.
- Consider limiting the maximum number of displayed suggestions to avoid overwhelming users. We recommend displaying 6-8 (with scrolling for additional results).

## Accessibility

- A visible label may be omitted for search input fields within a combobox if an associated button-complete with a clear search icon and an appropriate accessible name (e.g., aria-label="Search")-is provided.
- Be aware that group labels will be neglected by most assistive devices.

## Related Components

- syn-option
- syn-optgroup

## Related Templates

- Forms

## Interface

# syn-combobox

## Summary

A combobox component that combines the functionality of a text input with a dropdown listbox,
allowing users to either select from predefined options or enter custom values (when not restricted).

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-combobox--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42207-352063)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=26894-38120)

## Class Information

- **Tag Name:** `syn-combobox`
- **Import Example:** `import SynCombobox from '@synergy-design-system/components/components/combobox/combobox.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.8.0

## Available Slots

- `(default)`: The listbox options. Must be `<syn-option>` elements. You can use `<syn-optgroup>`'s to group items visually.
- `label`: The combobox's label. Alternatively, you can use the `label` attribute.
- `prefix`: Used to prepend a presentational icon or similar element to the combobox.
- `suffix`: Used to append a presentational icon or similar element to the combobox.
- `clear-icon`: An icon to use in lieu of the default clear icon.
- `expand-icon`: The icon to show when the control is expanded and collapsed. Rotates on open and close.
- `help-text`: Text that describes how to use the combobox. Alternatively, you can use the `help-text` attribute.

## Available Properties

### clearable

attribute: `clearable`
reflects: no
type: `boolean`
default: `false`

Adds a clear button when the combobox is not empty.

### defaultValue

attribute: -
reflects: -
type: `string | number | Array<string | number>`
default: `''`

The default value of the form control. Primarily used for resetting the form control.

### delimiter

attribute: `delimiter`
reflects: no
type: `string`
default: `' '`

The delimiter to use when setting the value when `multiple` is enabled.
The default is a space ' ', but you can set it to a comma or other character(s).

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the combobox control.

### filter

attribute: `filter`
reflects: no
type: `(option: SynOption, queryString: string) => boolean`
default: none

A function used to filter options in the combobox component.
The default filter method is a case- and diacritic-insensitive string comparison.

### form

attribute: `form`
reflects: yes
type: `string`
default: `''`

By default, form controls are associated with the nearest containing `<form>` element.
This attribute allows you to place the form control outside of a form and associate it
with the form that has this `id`.
The form must be in the same document or shadow root for this to work.

### getOption

attribute: `getOption`
reflects: no
type: `OptionRenderer`
default: `defaultOptionRenderer`

A function that customizes the rendered option. The first argument is the option, the second
is the query string, which is typed into the combobox.
The function should return either a Lit TemplateResult or a string containing trusted HTML
to render in the shown list of filtered options.
If the query string should be highlighted use the `highlightOptionRenderer` function.

### getTag

attribute: `getTag`
reflects: no
type: `(option: SynOption, index: number) => TemplateResult | string | HTMLElement`
default: none

A function that customizes the tags to be rendered when `multiple` is true. The first argument is the option, the second
is the current tag's index. The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value.

### helpText

attribute: `help-text`
reflects: no
type: `string`
default: `''`

The combobox's help text. If you need to display HTML, use the `help-text` slot instead.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The combobox's label. If you need to display HTML, use the `label` slot instead.

### maxlength

attribute: `maxlength`
reflects: no
type: `number`
default: none

The maximum length of input that will be considered valid.

### maxOptionsVisible

attribute: `max-options-visible`
reflects: no
type: `number`
default: `3`

The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit.

### multiple

attribute: `multiple`
reflects: yes
type: `boolean`
default: `false`

Allows more than one option to be selected.
If `multiple` is set, the combobox will always be `restricted` to the available options

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the combobox, submitted as a name/value pair with form data.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the combobox is open.
You can toggle this attribute to show and hide the listbox, or you can use the `show()`
and `hide()` methods and this attribute will reflect the combobox's open state.

### placeholder

attribute: `placeholder`
reflects: no
type: `string`
default: `''`

Placeholder text to show as a hint when the combobox is empty.

### placement

attribute: `placement`
reflects: yes
type: `'top' | 'bottom'`
default: `'bottom'`

The preferred placement of the combobox's menu.
Note that the actual placement may vary as needed to keep the listbox inside of the viewport.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the combobox to a readonly state.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

The combobox's required attribute.

### restricted

attribute: `restricted`
reflects: yes
type: `boolean`
default: `false`

When set to `true`, restricts the combobox to only allow selection from the available options.
Users will not be able to enter custom values that are not present in the list.
This will always be true, if `multiple` is active.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The combobox's size.

### value

attribute: `value`
reflects: no
type: `undefined`
default: none

The current value of the combobox, submitted as a name/value pair with form data. When `multiple` is enabled, the
value attribute will be a list of values separated by the delimiter, based on the options selected, and the value property will
be an array. **For this reason, values must not contain the delimiter character.**

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the control.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message.
Returns `true` when valid and `false` when invalid.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the control.

### getForm()

parameters: -
returns: `void`

Gets the associated form, if one exists.

### hide()

parameters: -
returns: `void`

Hides the listbox.

### reportValidity()

parameters: -
returns: `void`

Checks for validity and shows the browser's validation message if the control is invalid.

### setCustomValidity()

parameters: `message: string`
returns: `void`

Sets a custom validation message. Pass an empty string to restore validity.

### show()

parameters: -
returns: `void`

Shows the listbox. If it is not possible to open the listbox, because there are no
appropriate filtered options, a syn-error is emitted and the listbox stays closed.

## Available CSS Parts

- `clear-button`: The clear button.
- `combobox`: The container that wraps the prefix, combobox, clear icon, and expand button.
- `display-input`: The element that displays the selected option's label, an `<input>` element.
- `expand-icon`: The container that wraps the expand icon.
- `filtered-listbox`: The container that wraps the filtered options.
- `form-control`: The form control that wraps the label, combobox, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The combobox's wrapper.
- `form-control-label`: The label's wrapper.
- `listbox`: The listbox container where the options are slotted and the filtered options list exists.
- `no-results`: The container that wraps the "no results" message.
- `popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
- `prefix`: The container that wraps the prefix slot.
- `suffix`: The container that wraps the suffix slot.
- `tag`: The individual tags that represent each selected option in `multiple`.
- `tag__base`: The tag's base part.
- `tag__content`: The tag's content part.
- `tag__remove-button`: The tag's remove button.
- `tag__remove-button__base`: The tag's remove button base part.
- `tags`: The container that houses option tags when `multiple` is used.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the combobox's menu closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the combobox's menu opens and all animations are complete.

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when the control's value changes.

### syn-clear

type: `SynClearEvent`

Emitted when the control's value is cleared.

### syn-error

type: `SynErrorEvent`

Emitted when the combobox menu fails to open.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

### syn-hide

type: `SynHideEvent`

Emitted when the combobox's menu closes.

### syn-input

type: `SynInputEvent`

Emitted when the control receives input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### syn-show

type: `SynShowEvent`

Emitted when the combobox's menu opens.

## Dependencies

- `syn-icon`
- `syn-popup`
- `syn-tag`

## Examples

## Default

The combobox suggests items based on the user input.

```html
<syn-combobox max-options-visible="3">
  <syn-option>Option 1</syn-option>
  <syn-option>Option 2</syn-option>
  <syn-option>Option 3</syn-option>
</syn-combobox>
```

---

## Labels

Use the label attribute to give the combobox an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-combobox label="State">
  <syn-option>Option 1</syn-option>
  <syn-option>Option 2</syn-option>
  <syn-option>Option 3</syn-option>
</syn-combobox>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-combobox label="State" help-text="Select a State">
  <syn-option>Option 1</syn-option>
  <syn-option>Option 2</syn-option>
  <syn-option>Option 3</syn-option>
</syn-combobox>
```

---

## Placeholder

Use the placeholder attribute to add a placeholder.

```html
<syn-combobox
  label="State"
  help-text="Select a State"
  placeholder="Select a State"
>
  <syn-option>Option 1</syn-option>
  <syn-option>Option 2</syn-option>
  <syn-option>Option 3</syn-option>
</syn-combobox>
```

---

## Focus

The focus attribute provides feedback to the users, informing them that the combobox component is ready for use.

```html
<div style="padding: 5px">
  <syn-combobox>
    <syn-option>Option 1</syn-option>
    <syn-option>Option 2</syn-option>
    <syn-option>Option 3</syn-option>
  </syn-combobox>
</div>
```

---

## Clearable

Add the clearable attribute to add a clear button when the combobox has content.

```html
<syn-combobox value="Green" clearable="">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
```

---

## Disabled

Use the disabled attribute to disable a combobox.

```html
<syn-combobox disabled="" placeholder="Disabled">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
```

---

## Readonly

Add the readonly attribute to draw a read-only combobox.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-combobox placeholder="Readonly" value="option-1" readonly="">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-option value="option-1">Option 1</syn-option>
    <syn-option value="option-2">Option 2</syn-option>
    <syn-option value="option-3">Option 3</syn-option>
  </syn-combobox>
  <syn-combobox
    max-options-visible="2"
    multiple=""
    placeholder="Readonly"
    value="option-1 option-2 option-3"
    readonly=""
  >
    <syn-option value="option-1">Option 1</syn-option>
    <syn-option value="option-2">Option 2</syn-option>
    <syn-option value="option-3">Option 3</syn-option>
  </syn-combobox>
</div>
```

---

## Multiple

To allow multiple options to be selected, use the multiple attribute. It’s a good practice to use clearable when this option is enabled. To set multiple values at once, set value to a space-delimited list of values. Use the max-options-visible attribute to define the maximum number of selected options that will be visible. After the maximum, "+n" will be shown to indicate the number of additional items that are selected.

```html
<syn-combobox
  value="option-1 option-2 option-3"
  multiple=""
  clearable=""
  max-options-visible="2"
>
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
  <syn-option value="option-4">Option 4</syn-option>
  <syn-option value="option-5">Option 5</syn-option>
  <syn-option value="option-6">Option 6</syn-option>
</syn-combobox>
```

---

## Setting Initial Value

Use the value attribute to set the initial selection.When using multiple, the value attribute uses space-delimited values to select more than one option. Because of this, <syn-option> values cannot contain spaces. If you’re accessing the value property through Javascript, it will be an array.

```html
<syn-combobox
  value="option-1 option-2 option-3"
  multiple=""
  clearable=""
  max-options-visible="2"
>
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
  <syn-option value="option-4">Option 4</syn-option>
  <syn-option value="option-5">Option 5</syn-option>
  <syn-option value="option-6">Option 6</syn-option>
</syn-combobox>
```

---

## Restricted

This restricts the combobox to only allow selections from the available options. Users cannot enter custom values that are not in the list.

```html
<syn-combobox value="Option 1" restricted="">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-combobox>
```

---

## No Results Found

A “No results found” message is displayed, when the search term doesn’t match the options.

```html
<syn-combobox id="no-results" value="Search term" open="" restricted="">
  <syn-option>Option 1</syn-option>
  <syn-option>Option 2</syn-option>
  <syn-option>Option 3</syn-option>
</syn-combobox>
```

---

## Sizes

Use the size attribute to change a combobox size.

```html
<syn-combobox size="small" placeholder="Small">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>

<br />

<syn-combobox size="medium" placeholder="Medium">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>

<br />

<syn-combobox size="large" placeholder="Large">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
```

---

## Invalid

The invalid status is used to warn the user that the combobox is invalid. For example, if the entry is mandatory.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-combobox--invalid"
>
  <syn-combobox
    required=""
    placeholder="Type something"
    help-text="This is required"
  >
    <syn-option value="Black">Black</syn-option>
    <syn-option value="Blue">Blue</syn-option>
    <syn-option value="Brown">Brown</syn-option>
    <syn-option value="Green">Green</syn-option>
    <syn-option value="Grey">Grey</syn-option>
    <syn-option value="Light_Green">Light Green</syn-option>
    <syn-option value="Magenta">Magenta</syn-option>
    <syn-option value="Orange">Orange</syn-option>
    <syn-option value="Pink">Pink</syn-option>
    <syn-option value="Purple">Purple</syn-option>
    <syn-option value="Red">Red</syn-option>
    <syn-option value="White">White</syn-option>
    <syn-option value="Yellow">Yellow</syn-option>
  </syn-combobox>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-combobox--invalid {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-large);
  }
  syn-button {
    align-self: flex-start;
  }
</style>
```

---

## Prefix Suffix Text And Icons

Use the prefix and suffix slots to add text and icons.

```html
<syn-combobox placeholder="Small" size="small" clearable="">
  <span slot="prefix">prefix</span>
  <span slot="suffix">suffix</span>
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
<br />
<syn-combobox placeholder="Medium" size="medium" clearable="">
  <span slot="prefix">prefix</span>
  <span slot="suffix">suffix</span>
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
<br />
<syn-combobox placeholder="Large" size="large" clearable="">
  <span slot="prefix">prefix</span>
  <span slot="suffix">suffix</span>
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>

<br />

<syn-combobox placeholder="Small" size="small" clearable="">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-combobox>
<br />
<syn-combobox placeholder="Medium" size="medium" clearable="">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-combobox>
<br />
<syn-combobox placeholder="Large" size="large" clearable="">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-combobox>
```

---

## Simple Suggests

A simple suggestions list shows the user a filtered list.

```html
<syn-combobox label="Preferred Color" value="g">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
```

---

## Highlight Query

The filtered options shown in the list can be customized by passing a function to the getOption property. Your function can return a string of HTML, a Lit Template, or an HTMLElement. The getOption() function will be called for each option. The first argument is an <syn-option> element and the second argument is the query string.Remember that the options are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own parts and target them with the ::part() selector. Note: Be sure you trust the content you are outputting! Passing unsanitized user input to getOption() can result in XSS vulnerabilities.

```html
<syn-combobox label="Preferred color" class="highlight-combobox" value="g">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
<script type="module">
  // the highlight option renderer utility function can be imported via:
  // import { highlightOptionRenderer } from '@synergy-design-system/components';

  const comboboxes = document.querySelectorAll(".highlight-combobox");
  comboboxes.forEach((combobox) => {
    combobox.getOption = highlightOptionRenderer;
  });
</script>
```

---

## Grouping Query

Use <syn-optgroup> to group <syn-option>`s visually.

```html
<syn-combobox label="Group elements" value="g">
  <syn-optgroup label="B">
    <syn-option value="Black">Black</syn-option>
    <syn-option value="Blue">Blue</syn-option>
    <syn-option value="Brown">Brown</syn-option>
  </syn-optgroup>
  <syn-optgroup label="G">
    <syn-option value="Green">Green</syn-option>
    <syn-option value="Grey">Grey</syn-option>
  </syn-optgroup>
  <syn-optgroup label="L">
    <syn-option value="Light_Green">Light Green</syn-option>
  </syn-optgroup>
  <syn-optgroup label="M">
    <syn-option value="Magenta">Magenta</syn-option>
  </syn-optgroup>
  <syn-optgroup label="O">
    <syn-option value="Orange">Orange</syn-option>
  </syn-optgroup>
  <syn-optgroup label="W">
    <syn-option value="White">White</syn-option>
  </syn-optgroup>
  <syn-optgroup label="P">
    <syn-option value="Pink">Pink</syn-option>
    <syn-option value="Purple">Purple</syn-option>
  </syn-optgroup>
  <syn-optgroup label="R">
    <syn-option value="Red">Red</syn-option>
  </syn-optgroup>
  <syn-optgroup label="W">
    <syn-option value="White">White</syn-option>
  </syn-optgroup>
  <syn-optgroup label="Y">
    <syn-option value="Yellow">Yellow</syn-option>
  </syn-optgroup>
</syn-combobox>
```

---

## Suggestion Container Height

The height of the filtered options list can be customized by setting the max-height on the listbox part of the combobox.

```html
<syn-combobox id="max-height" label="Preferred color" value="g">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
<style>
  #max-height::part(listbox) {
    /* if there is not enough space for the desired height, use the available calculated height */
    max-height: min(var(--auto-size-available-height), 112px);
  }
</style>
```

---

## Custom Filter

A custom filter can be applied by passing a filter function to the filter property. This filter() function will be called for each option. The first argument is an <syn-option> element and the second argument is the query string.

```html
<syn-combobox label="Custom Filter" class="filter-combobox">
  <syn-option value="Black">Black</syn-option>
  <syn-option value="Blue">Blue</syn-option>
  <syn-option value="Brown">Brown</syn-option>
  <syn-option value="Green">Green</syn-option>
  <syn-option value="Grey">Grey</syn-option>
  <syn-option value="Light_Green">Light Green</syn-option>
  <syn-option value="Magenta">Magenta</syn-option>
  <syn-option value="Orange">Orange</syn-option>
  <syn-option value="Pink">Pink</syn-option>
  <syn-option value="Purple">Purple</syn-option>
  <syn-option value="Red">Red</syn-option>
  <syn-option value="White">White</syn-option>
  <syn-option value="Yellow">Yellow</syn-option>
</syn-combobox>
<script type="module">
  const comboboxes = document.querySelectorAll(".filter-combobox");
  comboboxes.forEach((combobox) => {
    const oldFilter = combobox.filter;
    combobox.filter = (option, queryString) => {
      // only show options for more than 2 characters on text input
      if (queryString && queryString.length > 2) {
        return oldFilter(option, queryString);
      }
      return false;
    };
  });
</script>
```