# syn-select

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-select

## Rules

# syn-select

## Summary

Selects allow you to choose items from a menu of predefined options.

## Common Use Cases

- Enable users to select one or more options from a list of predefined choices in forms.
- Implement in filter panels to allow users to refine search results or data views.
- Provide options in settings pages where users need to choose preferences from a list.

## Usage Guidelines

### Content and Labels

- Keep each option to a single line of text for readability.
- Ensure all options have consistent line lengths for easier scanning.
- Avoid using the same word or phrase at the beginning of options.
- Provide a meaningful placeholder option to guide users.

### Selection Behavior

- Use for lists with more than five options; for fewer options, consider using syn-radio for single selection or syn-checkbox for multiple selection.
- Apply the "multiple" attribute when multiple selections are allowed.
- By default, the number of selected options is displayed after the text.
- Display selected options as tags within the field to help users track their selections.
- Consider limiting the maximum number of displayed selectable options to avoid overwhelming users. We recommend displaying 6-8 (with scrolling for additional results).

## Accessibility

- If multiple options can be selected, clearly announce this capability to screenreader users and offer a way to view all chosen items.
- Be aware that group labels in select components will be neglected by most assistive devices.

## Related Components

- syn-option
- syn-optgroup

## Related Templates

- Forms

## Interface

# syn-select

## Summary

Selects allow you to choose items from a menu of predefined options.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-select--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41325-310740)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=4825-30354)

## Class Information

- **Tag Name:** `syn-select`
- **Import Example:** `import SynSelect from '@synergy-design-system/components/components/select/select.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.5.0

## Available Slots

- `(default)`: The listbox options. Must be `<syn-option>` elements. You can use `<syn-divider>` to group items visually.
- `label`: The input's label. Alternatively, you can use the `label` attribute.
- `prefix`: Used to prepend a presentational icon or similar element to the combobox.
- `suffix`: Used to append a presentational icon or similar element to the combobox.
- `clear-icon`: An icon to use in lieu of the default clear icon.
- `expand-icon`: The icon to show when the control is expanded and collapsed. Rotates on open and close.
- `help-text`: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.

## Available Properties

### clearable

attribute: `clearable`
reflects: no
type: `boolean`
default: `false`

Adds a clear button when the select is not empty.

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
The default is a space, but you can set it to a comma or other character.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the select control.

### form

attribute: `form`
reflects: yes
type: `string`
default: `''`

By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work.

### getTag

attribute: `getTag`
reflects: no
type: `(option: SynOption, index: number) => TemplateResult | string | HTMLElement`
default: none

A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index. The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value.

### helpText

attribute: `help-text`
reflects: no
type: `string`
default: `''`

The select's help text. If you need to display HTML, use the `help-text` slot instead.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The select's label. If you need to display HTML, use the `label` slot instead.

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

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the select, submitted as a name/value pair with form data.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state.

### placeholder

attribute: `placeholder`
reflects: no
type: `string`
default: `''`

Placeholder text to show as a hint when the select is empty.

### placement

attribute: `placement`
reflects: yes
type: `'top' | 'bottom'`
default: `'bottom'`

The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the select to a readonly state.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

The select's required attribute.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The select's size.

### value

attribute: `value`
reflects: no
type: `undefined`
default: none

The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
value attribute will be a space-delimited list of values based on the options selected, and the value property will
be an array. **For this reason, values must not contain spaces.**

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the control.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.

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

Shows the listbox.

## Available CSS Parts

- `clear-button`: The clear button.
- `combobox`: The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
- `display-input`: The element that displays the selected option's label, an `<input>` element.
- `expand-icon`: The container that wraps the expand icon.
- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The select's wrapper.
- `form-control-label`: The label's wrapper.
- `listbox`: The listbox container where options are slotted.
- `popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
- `prefix`: The container that wraps the prefix slot.
- `suffix`: The container that wraps the suffix slot.
- `tag`: The individual tags that represent each multiselect option.
- `tag__base`: The tag's base part.
- `tag__content`: The tag's content part.
- `tag__remove-button`: The tag's remove button.
- `tag__remove-button__base`: The tag's remove button base part.
- `tags`: The container that houses option tags when `multiselect` is used.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the select's menu closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the select's menu opens and all animations are complete.

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when the control's value changes.

### syn-clear

type: `SynClearEvent`

Emitted when the control's value is cleared.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

### syn-hide

type: `SynHideEvent`

Emitted when the select's menu closes.

### syn-input

type: `SynInputEvent`

Emitted when the control receives input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### syn-show

type: `SynShowEvent`

Emitted when the select's menu opens.

## Dependencies

- `syn-icon`
- `syn-popup`
- `syn-tag`

## Examples

## Default

Selects allow you to choose items from a menu of predefined options.

```html
<syn-select max-options-visible="3">
  <syn-option value="Option_1">Option 1</syn-option>
  <syn-option value="Option_2">Option 2</syn-option>
  <syn-option value="Option_3">Option 3</syn-option>
</syn-select>
```

---

## Labels

Use the label attribute to give the select an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-select label="Select one">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-select label="Experience" help-text="Please tell us your skill level.">
  <syn-option value="1">Novice</syn-option>
  <syn-option value="2">Intermediate</syn-option>
  <syn-option value="3">Advanced</syn-option>
</syn-select>
```

---

## Placeholder

Use the placeholder attribute to add a placeholder.

```html
<syn-select placeholder="Select one">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>
```

---

## Clearable

Use the clearable attribute to make the control clearable. The clear button only appears when an option is selected.

```html
<syn-select clearable="" value="option-1">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>
```

---

## Focus

The focus event gives the user feedback that the Select has been focused by the keyboard interaction or active click from the user..

```html
<div style="padding: 5px">
  <syn-select label="Select one">
    <syn-option value="option-1">Option 1</syn-option>
    <syn-option value="option-2">Option 2</syn-option>
    <syn-option value="option-3">Option 3</syn-option>
  </syn-select>
</div>
```

---

## Disabled

Use the disabled attribute to disable a select.

```html
<syn-select placeholder="Disabled" disabled="">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>
```

---

## Readonly

Add the readonly attribute to a select to draw it in a readonly state.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-select placeholder="Readonly" value="option-1" readonly="">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-option value="option-1">Option 1</syn-option>
    <syn-option value="option-2">Option 2</syn-option>
    <syn-option value="option-3">Option 3</syn-option>
  </syn-select>
  <syn-select
    max-options-visible="2"
    multiple=""
    placeholder="Readonly"
    value="option-1 option-2 option-3"
    readonly=""
  >
    <syn-option value="option-1">Option 1</syn-option>
    <syn-option value="option-2">Option 2</syn-option>
    <syn-option value="option-3">Option 3</syn-option>
  </syn-select>
</div>
```

---

## Multiple

To allow multiple options to be selected, use the multiple attribute. It’s a good practice to use clearable when this option is enabled. To set multiple values at once, set value to a space-delimited list of values.

```html
<syn-select
  label="Select a Few"
  value="Option_1 Option_2 Option_3"
  multiple=""
  clearable=""
>
  <syn-option value="Option_1">Option 1</syn-option>
  <syn-option value="Option_2">Option 2</syn-option>
  <syn-option value="Option_3">Option 3</syn-option>
  <syn-option value="Option_4">Option 4</syn-option>
  <syn-option value="Option_5">Option 5</syn-option>
  <syn-option value="Option_6">Option 6</syn-option>
</syn-select>
```

---

## Setting Initial Values

Use the value attribute to set the initial selection.When using multiple, the value attribute uses space-delimited values to select more than one option. Because of this, <syn-option> values cannot contain spaces. If you’re accessing the value property through Javascript, it will be an array.

```html
<syn-select
  value="option-1 option-2 option-3 option-4"
  multiple=""
  clearable=""
  class="custom-tag"
>
  <syn-option value="option-1">Option</syn-option>
  <syn-option value="option-2">Option 1</syn-option>
  <syn-option value="option-3">Option 2</syn-option>
  <syn-option value="option-4">Option 3</syn-option>
</syn-select>
<script type="module">
  const select = document.querySelector(".custom-tag");

  select.getTag = (option, index) => {
    // Use the same icon used in the <syn-option>
    const optionElement = option.querySelector('syn-icon[slot="prefix"]');

    if (!optionElement) {
      return `
      <syn-tag removable>
      ${option.getTextLabel()}
      </syn-tag>
      `;
    }

    const { name } = optionElement;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <syn-tag removable>
        <syn-icon name="${name}"></syn-icon>
        ${option.getTextLabel()}
      </syn-tag>
    `;
  };
</script>
```

---

## Grouping Options

Use <syn-optgroup> to group listbox items visually.

```html
<syn-select placeholder="This is a value">
  <syn-optgroup label="Section 1">
    <syn-option value="1">Option</syn-option>
    <syn-option value="2">Option</syn-option>
  </syn-optgroup>
  <syn-optgroup label="Section 2">
    <syn-option value="3">Option</syn-option>
    <syn-option value="4">Option</syn-option>
  </syn-optgroup>
</syn-select>
```

---

## Sizes

Use the size attribute to change a select’s size. Note that size does not apply to listbox options.

```html
<syn-select placeholder="Small" size="small">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>

<br />

<syn-select placeholder="Medium" size="medium">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>

<br />

<syn-select placeholder="Large" size="large">
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
</syn-select>
```

---

## Invalid

The invalid status is used to warn the user that the Select is invalid. For example, if the entry of text is mandatory and nothing has been entered.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-select--invalid"
>
  <syn-select label="Select one" required="">
    <syn-option value="option-1">Option 1</syn-option>
    <syn-option value="option-2">Option 2</syn-option>
    <syn-option value="option-3">Option 3</syn-option>
  </syn-select>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-select--invalid {
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

## Prefix Suffix Icons

Use the prefix and suffix slots to add text and icons.

```html
<syn-select placeholder="Small" size="small" clearable="">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-select>
<br />
<syn-select placeholder="Medium" size="medium" clearable="">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-select>
<br />
<syn-select placeholder="Large" size="large" clearable="">
  <syn-icon name="wallpaper" slot="prefix"></syn-icon>
  <syn-option value="option-1">Option 1</syn-option>
  <syn-option value="option-2">Option 2</syn-option>
  <syn-option value="option-3">Option 3</syn-option>
  <syn-icon name="wallpaper" slot="suffix"></syn-icon>
</syn-select>
```

---

## Custom Tags

When multiple options can be selected, you can provide custom tags by passing a function to the getTag property. Your function can return a string of HTML, a Lit Template, or an HTMLElement. The getTag() function will be called for each option. The first argument is an <syn-option> element and the second argument is the tag’s index (its position in the tag list).Remember that custom tags are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own parts and target them with the ::part() selector.

```html
<syn-select
  clearable=""
  id="custom-tags-story"
  multiple=""
  placeholder="Select one"
  value="phone email"
>
  <syn-option value="email">
    <syn-icon slot="prefix" name="mail_outline"></syn-icon>
    Email
  </syn-option>
  <syn-option value="phone">
    <syn-icon slot="prefix" name="phone"></syn-icon>
    Phone
  </syn-option>
  <syn-option value="chat">
    <syn-icon slot="prefix" name="chat_bubble_outline"></syn-icon>
    Chat
  </syn-option>
</syn-select>

<script type="module">
  const select = document.querySelector("#custom-tags-story");

  select.getTag = (option, index) => {
    // Use the same icon used in the <syn-option>
    const optionElement = option.querySelector('syn-icon[slot="prefix"]');

    if (!optionElement) {
      return `
      <syn-tag removable>
      ${option.getTextLabel()}
      </syn-tag>
      `;
    }

    const { name } = optionElement;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <syn-tag removable>
        <syn-icon name="${name}"></syn-icon>
        ${option.getTextLabel()}
      </syn-tag>
    `;
  };
</script>
```