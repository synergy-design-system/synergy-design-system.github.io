# syn-file

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-file

## Rules

# syn-file

## Summary

File controls allow selecting an arbitrary number of files for uploading.

## Common Use Cases

- Upload one or more documents in forms.
- Attach files to support tickets or feedback forms.
- Collect folders or batches of assets for import workflows.

## Usage Guidelines

### File Selection

- Use single file mode for one required document and multiple mode only when truly needed.
- Use directory selection only for workflows where folder upload is expected.
- Use hide-value only when file names are presented elsewhere in the UI.

### Labels and Guidance

- Describe allowed file types and size limits near the control.
- Provide examples for naming or formatting if uploads must follow a convention.
- Keep helper text short and task specific.

### Validation and States

- Use invalid state and clear error copy when upload constraints are not met.
- Use readonly when users can inspect but not change the selected files.
- Avoid disabling file input unless there is a clear blocking condition.

## Accessibility

- Always provide a visible label and use help text to explain accepted files and limits.
- Ensure drag and drop interactions are complemented by a clickable file picker.
- Expose validation errors in text and not by color alone.

## Related Components

- syn-validate

## Related Templates

- Forms

## Interface

# syn-file

## Summary

File controls allow selecting an arbitrary number of files for uploading.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-file--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-271865)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=21709-47500)

## Class Information

- **Tag Name:** `syn-file`
- **Import Example:** `import SynFile from '@synergy-design-system/components/components/file/file.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.5.0

## Available Slots

- `label`: The file control's label. Alternatively, you can use the `label` attribute.
- `help-text`: Text that describes how to use the file control. Alternatively, you can use the `help-text` attribute.
- `droparea-icon`: Optional droparea icon to use instead of the default. Works best with `<syn-icon>`.
- `trigger`: Optional content to be used as trigger instead of the default content. Opening the file dialog on click and as well as drag and drop will work for this content. Following attributes will no longer work: _label_, _droparea_, _help-text_, _size_, _hide-value_. Also if using the disabled attribute, the disabled styling will not be applied and must be taken care of yourself.

## Available Properties

### accept

attribute: `accept`
reflects: no
type: `string`
default: `''`

Comma separated list of supported file types
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)

### capture

attribute: `capture`
reflects: no
type: `'user' | 'environment'`
default: none

Specifies the types of files that the server accepts.
Can be set either to user or environment.
Works only when not using a droparea!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)

### defaultValue

attribute: -
reflects: -
type: `string`
default: `''`

The default value of the form control. Primarily used for resetting the form control.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the file control.

### droparea

attribute: `droparea`
reflects: no
type: `boolean`
default: `false`

Draw the file control as a drop area

### files

attribute: `files`
reflects: no
type: `undefined`
default: none

The selected files as a FileList object containing a list of File objects.
The FileList behaves like an array, so you can get the number of selected files
via its length property.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files)

### form

attribute: `form`
reflects: yes
type: `string`
default: `''`

By default, form controls are associated with the nearest containing `<form>` element.
This attribute allows you to place the form control outside of a form and associate it
with the form that has this `id`. The form must be in the same document
or shadow root for this to work.

### helpText

attribute: `help-text`
reflects: no
type: `string`
default: `''`

The file control's help text.
If you need to display HTML, use the `help-text` slot instead.

### hideValue

attribute: `hide-value`
reflects: no
type: `boolean`
default: `false`

Suppress the value from being displayed in the file control

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The file control's label. If you need to display HTML, use the `label` slot instead.

### multiple

attribute: `multiple`
reflects: yes
type: `boolean`
default: `false`

Indicates whether the user can select more than one file.
Has no effect if webkitdirectory is set.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the file control, submitted as a name/value pair with form data.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the file control to a readonly state.

### required

attribute: `required`
reflects: yes
type: `boolean`
default: `false`

Makes the input a required field.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The file control's size.

### value

attribute: `value`
reflects: no
type: `undefined`
default: none

The value of the file control contains a string that represents the path of the selected file.
If multiple files are selected, the value represents the first file in the list.
If no file is selected, the value is an empty string.
Beware that the only valid value when setting a file control is an empty string!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#value)

### webkitdirectory

attribute: `webkitdirectory`
reflects: yes
type: `boolean`
default: `false`

Indicates that the file control should let the user select directories instead of files.
When a directory is selected, the directory and its entire hierarchy of contents are included
in the set of selected items.
Note: This is a non-standard attribute but is supported in the major browsers.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)

## Available Methods

### blur()

parameters: -
returns: `void`

Removes focus from the button or droparea.

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message.
Returns `true` when valid and `false` when invalid.

### focus()

parameters: `options: FocusOptions`
returns: `void`

Sets focus on the button or droparea.

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

- `button`: The syn-button acting as a file input.
- `button__base`: The syn-button's exported `base` part.
- `button-wrapper`: The wrapper around the button and text value.
- `droparea`: The element wrapping the drop zone.
- `droparea-background`: The background of the drop zone.
- `droparea-icon`: The container that wraps the icon for the drop zone.
- `droparea-value`: The text for the drop zone.
- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-input`: The input's wrapper.
- `form-control-label`: The label's wrapper.
- `trigger`: The container that wraps the trigger.
- `value`: The chosen files or placeholder text for the file input.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when an alteration to the control's value is committed by the user.

### syn-error

type: `SynErrorEvent`

Emitted when multiple files are selected via drag and drop, without the `multiple` property being set.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

### syn-input

type: `SynInputEvent`

Emitted when the control receives input.

## Dependencies

- `syn-button`
- `syn-icon`

## Examples

## Default

File control is a component with which a user can select a local file. It shows the value of the selected file.

```html
<syn-file></syn-file>
```

---

## Label

Use the label attribute to give the file selector an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-file label="This is a label"></syn-file>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-file help-text="This is a help text." label="This is a label"></syn-file>
```

---

## Multiple

Use the multiple attribute to allow the selection of multiple files.Figma only: Override the button/droparea and value text directly, to indicate that multiple files are selected (“file” -> “files”)

```html
<syn-file label="Multiple file input" multiple=""></syn-file>
```

---

## Hide Value

There might be situations, where you don’t want to show the selected value (e. g. when something is automatically uploading).

```html
<syn-file hide-value="" label="This is a label"></syn-file>
```

---

## Focus

The focus event gives the user feedback that the Dropzone has been focused by the keyboard interaction and that the syn-file component is ready for use.

```html
<div style="padding: 5px">
  <syn-file
    label="This is a label"
    help-text="This is a help text"
    droparea=""
  ></syn-file>
</div>
```

---

## Disabled

Use the disabled attribute to disable a file input.

```html
<div style="display: flex; flex-direction: column; gap: 1rem">
  <syn-file disabled="" label="This is a label"></syn-file>
  <syn-file disabled="" droparea="" label="This is a label"></syn-file>
</div>
```

---

## Readonly

Use the readonly attribute to set a file input to a readonly state.

```html
<div style="display: flex; flex-direction: column; gap: 1rem">
  <syn-file readonly="" label="This is a label"></syn-file>
  <syn-file readonly="" droparea="" label="This is a label"></syn-file>
</div>
```

---

## Sizes

Use the size attribute to change the component's size.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-file size="small" label="Small"></syn-file>
  <syn-file size="medium" label="Medium"></syn-file>
  <syn-file size="large" label="Large"></syn-file>
</div>
```

---

## Invalid

The invalid status is used to warn the user that the syn-file is invalid. For example, if the entry of text is mandatory and nothing has been entered or if a text has been entered that does not have the correct format.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-file--invalid"
>
  <syn-file
    class="syn-file-invalid"
    droparea=""
    help-text="This is an error text."
    label="This is a label"
  ></syn-file>
  <script type="module">
    const files = document.querySelectorAll(".syn-file-invalid");
    files.forEach((file) => {
      file.setCustomValidity("This is an error text");
    });
  </script>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-file--invalid {
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

## Droparea

Use the droparea attribute to switch to a full-width button with a drop area.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-file
    accept="text/plain,image/*"
    droparea=""
    help-text="This is a help text"
    label="Small"
    multiple=""
    size="small"
  ></syn-file>
  <syn-file
    accept="text/plain,image/*"
    droparea=""
    help-text="This is a help text"
    label="Medium"
    multiple=""
    size="medium"
  ></syn-file>
  <syn-file
    accept="text/plain,image/*"
    droparea=""
    help-text="This is a help text"
    label="Large"
    multiple=""
    size="large"
  ></syn-file>
</div>
```

---

## Directory

The webkitdirectory setting allows users to select entire directories instead of individual files. When a directory is chosen, all files inside (including those in sub-directories) are selected. Although this feature is not part of the official HTML specification, it is widely supported across major browsers.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-file label="Button" webkitdirectory=""></syn-file>
  <syn-file droparea="" label="Droparea" webkitdirectory=""></syn-file>
</div>
```