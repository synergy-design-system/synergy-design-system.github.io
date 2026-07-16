# syn-range

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-range

## Rules

# syn-range

## Summary

Ranges allow the user to select values within a given range using one or two thumbs.

## Common Use Cases

- Adjust settings within a defined range (e.g., volume, brightness).
- Filter results by specifying a price range or product parameters.
- Select time intervals for scheduling or reminder tasks.
- Set minimum and maximum inputs (e.g., age, quantity, distance).
- Visualize progress by assigning milestones within a larger goal or process.

## Usage Guidelines

### Context

- Position the range component in an uncluttered area to facilitate easy interaction.
- Reserve the component for relevant, contextually meaningful ranges (e.g., price filters, time spans).

### Labels and Value Display

- Provide clear labels or tooltips indicating the current value or range.
- Pair the slider with text labels or numeric indicators for precise adjustments.
- Avoid relying solely on color or visuals; add a text representation for clarity.

### Range Definition

- Choose realistic minimum and maximum values for the intended use case.
- Avoid extremely large intervals (e.g., 1 to 1,000,000) unless necessary, and label them thoroughly.
- Use appropriate step sizes for fine control (e.g., increments of 5 or 10 for a price slider).
- Enable two-handle sliders (min/max) if the scenario requires independent adjustments.

## Accessibility

- Always provide a label for the range so that screenreaders correctly announce the component.
- Provide alternative input methods like numeric input fields or a stepper, allowing users who struggle with dragging to manually set values.

## Related Components

- syn-range-tick

## Related Templates

- Forms

## Interface

# syn-range

## Summary

Ranges allow the user to select values within a given range using one or two thumbs.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-range--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-323916)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=25215-36015)

## Class Information

- **Tag Name:** `syn-range`
- **Import Example:** `import SynRange from '@synergy-design-system/components/components/range/range.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.6.0

## Available Slots

- `label`: The range's label. Alternatively, you can use the `label` attribute.
- `prefix`: Used to prepend a presentational icon or similar element to the range.
- `suffix`: Used to append a presentational icon or similar element to the range.
- `help-text`: Text that describes how to use the range. Alternatively, you can use the `help-text` attribute.
- `ticks`: Used to display tick marks at specific intervals along the range.

## Available Properties

### defaultValue

attribute: -
reflects: -
type: `string`
default: `'0'`

The default value of the form control. Primarily used for resetting the form control.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the range.

### form

attribute: `form`
reflects: yes
type: `string`
default: `''`

By default, form controls are associated with the nearest containing `<form>` element.
This attribute allows you to place the form control outside of a form
and associate it with the form that has this `id`.
The form must be in the same document or shadow root for this to work.

### helpText

attribute: `help-text`
reflects: no
type: `string`
default: `''`

The range's help text. If you need to display HTML, use the help-text slot instead.

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The range's label. If you need to display HTML, use the `label` slot instead.

### max

attribute: `max`
reflects: no
type: `number`
default: `100`

The maximum acceptable value of the range.

### min

attribute: `min`
reflects: no
type: `number`
default: `0`

The minimum acceptable value of the range.

### name

attribute: `name`
reflects: no
type: `string`
default: `''`

The name of the range, submitted as a name/value pair with form data.

### readonly

attribute: `readonly`
reflects: yes
type: `boolean`
default: `false`

Sets the range to a readonly state.

### restrictMovement

attribute: `restrict-movement`
reflects: no
type: `boolean`
default: `false`

Set to true to restrict the movement of a thumb to its next and previous thumb.
This only affects multi range components

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The range's size.

### step

attribute: `step`
reflects: no
type: `number`
default: `1`

The interval at which the range will increase and decrease.

### tooltipFormatter

attribute: -
reflects: -
type: `(value: number) => string`
default: none

A function used to format the tooltip's value.
The value of the thumb is passed as the only argument.
The function should return a string to display in the tooltip.

### tooltipPlacement

attribute: `tooltip-placement`
reflects: no
type: `'top' | 'bottom' | 'none'`
default: `'top'`

The preferred placement of the range's tooltip. Use "none" to disable the tooltip

### value

attribute: `value`
reflects: no
type: `undefined`
default: none

The current values of the input (in ascending order) as a string of space separated values

### valueAsArray

attribute: -
reflects: -
type: `undefined`
default: none

Gets or sets the current values of the range as an array of numbers

## Available Methods

### checkValidity()

parameters: -
returns: `void`

Checks for validity but does not show a validation message.
Returns `true` when valid and `false` when invalid.

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

- `active-track`: The active track.
- `base`: The component's base wrapper.
- `form-control`: The form control that wraps the label, input, and help text.
- `form-control-help-text`: The help text's wrapper.
- `form-control-label`: The label's wrapper.
- `input-wrapper`: The container that wraps the input track and ticks.
- `prefix`: The container that wraps the prefix.
- `suffix`: The container that wraps the suffix.
- `thumb`: The thumb(s) that the user can drag to change the range.
- `ticks`: The container that wraps the tick marks.
- `tooltip__arrow`: The arrow of the tooltip
- `tooltip__base`: The base of the tooltip
- `tooltip__body`: The body of the tooltip
- `tooltip__popup`: The popup of the tooltip
- `track`: The inactive track.
- `track-wrapper`: The wrapper for the track.

## Available Events

### syn-blur

type: `SynBlurEvent`

Emitted when the control loses focus.

### syn-change

type: `SynChangeEvent`

Emitted when an alteration to the control's value is committed by the user.

### syn-focus

type: `SynFocusEvent`

Emitted when the control gains focus.

### syn-input

type: `SynInputEvent`

Emitted when the control receives input.

### syn-invalid

type: `SynInvalidEvent`

Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### syn-move

type: `SynMoveEvent`

Emitted when the user moves a thumb, either via touch or keyboard. Use `Event.preventDefault()` to prevent movement.

## Dependencies

- `syn-tooltip`

## Examples

## Default

Ranges allow the user to select values within a given range using a thumb.

```html
<syn-range max="100" step="1" value="50"></syn-range>
```

---

## Labels

Use the label attribute to give the range an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-range label="Label" max="100" min="0" value="50"></syn-range>
```

---

## Help Text

Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.The help-text attribute should not be used to display error messages. To handle validation and error messaging, use syn-validate for proper error management.

```html
<syn-range
  help-text="Controls the volume of the current song"
  label="Volume"
  max="100"
  min="0"
  value="50"
></syn-range>
```

---

## Disabled

Use the disabled attribute to disable a range.

```html
<syn-range disabled="" max="100" min="0" value="50"></syn-range>
```

---

## Invalid

The invalid status is used to warn the user that the input is invalid. As range validation is not supported by the browser, you will need to implement your own validation logic.

```html
<form
  onsubmit="
    event.preventDefault();
    event.stopPropagation();
  "
  id="components-syn-range--invalid"
>
  <syn-range
    help-text="This is an error text"
    id="range-invalid"
    max="100"
    min="0"
    value="50"
  ></syn-range>
  <script type="module">
    const range = document.querySelector("#range-invalid");
    range.setCustomValidity("Please enter a valid value");
  </script>

  <syn-button type="submit" variant="filled">Submit</syn-button>
</form>
<style>
  #components-syn-range--invalid {
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

## Focus

The focus event gives the user feedback that the Range has been focused by the keyboard interaction or active click from the user.

```html
<form>
  <syn-range max="100" min="0" value="50"></syn-range>
</form>
```

---

## Readonly

Add the readonly attribute to a range to draw it in a readonly state.

```html
<form>
  <syn-range max="100" min="0" value="50" readonly=""></syn-range>
</form>
```

---

## Sizes

Use the size attribute to change a range’s size.

```html
<div class="size-wrapper">
  <syn-range
    label="Small"
    max="100"
    min="0"
    size="small"
    value="33"
  ></syn-range>
  <syn-range
    label="Medium"
    max="100"
    min="0"
    size="medium"
    value="66"
  ></syn-range>
  <syn-range
    label="Large"
    max="100"
    min="0"
    size="large"
    value="99"
  ></syn-range>
</div>
<style>
  .size-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-medium);
  }
</style>
```

---

## Prefix Suffix Text

Add any element to the start and end of range items using the prefix and suffix slots.

```html
<syn-range
  help-text="Controls the volume of the current song"
  label="Volume"
  max="100"
  min="0"
  value="50"
>
  <span slot="prefix">0</span>
  <span slot="suffix">100</span>
</syn-range>

<br />
<p>This can be used to add input fields or icons.</p>
<br />

<syn-range
  label="Estimated Time"
  class="suffix-input-field"
  min="0"
  max="60"
  value="30"
>
  <span slot="prefix">0</span>
  <span slot="suffix">
    <div class="suffix-input">
      60
      <syn-input value="30" type="number" no-spin-buttons="" min="0" max="60">
        <span slot="suffix">sec</span>
      </syn-input>
    </div>
  </span>
</syn-range>

<style>
  .suffix-input {
    align-items: center;
    display: flex;
    gap: var(--syn-spacing-medium);

    syn-input {
      max-width: 6.5rem;
    }
  }
</style>
<script>
  [...document.querySelectorAll(".suffix-input-field")].forEach((range) => {
    const input = range.querySelector("syn-input");

    range.addEventListener("syn-input", (e) => {
      const { target } = e;
      if (target.tagName !== "SYN-RANGE") return;
      target.querySelector("syn-input").value = target.value;
      range.setCustomValidity("");
    });

    input.addEventListener("syn-input", (e) => {
      const { target } = e;
      target.closest("syn-range").value = target.value;

      const inputValidationMessage = target.validationMessage;

      if (inputValidationMessage) {
        range.setCustomValidity(inputValidationMessage);
      } else {
        range.setCustomValidity("");
      }
    });

    input.addEventListener("syn-change", (e) => {
      const { target } = e;
      if (!target.checkValidity()) {
        range.reportValidity();
      }
    });
  });
</script>
```

---

## Custom Track Colors

You can customize the active and inactive portions of the track using the --track-color-active and --track-color-inactive custom properties.

```html
<syn-range class="custom-track-color" max="100" min="0" value="50"></syn-range>
<style>
  .custom-track-color {
    --track-color-active: var(--syn-color-success-700);
  }
</style>
```

---

## Custom Track Offset

You can customize the initial offset of the active track using the --track-active-offset custom property.

```html
<syn-range
  class="custom-track-offset"
  max="50"
  min="-50"
  value="-15"
></syn-range>
<style>
  .custom-track-offset {
    --track-active-offset: 50%;
  }
</style>
```

---

## Multi Thumb

You can add multiple range-thumbs to your range.

```html
<syn-range max="100" min="0" value="30 70"></syn-range>
```

---

## Multi Thumb With Restricted Movement

Set the restrict-movement attribute to true to prevent the thumbs from overlapping.

```html
<syn-range
  value="30 70"
  label="Demo of restricting values"
  min="0"
  max="100"
  restrict-movement=""
  step="1"
></syn-range>
```

---

## Ticks

Use the ticks slot to insert ticks or groups with ticks to improve positioning.

```html
<div class="wrapper">
  <syn-range
    class="syn-range-with-tick"
    max="100"
    min="0"
    value="50"
    label="Volume"
  >
    <nav slot="ticks">
      <syn-range-tick>0</syn-range-tick>
      <syn-range-tick>50</syn-range-tick>
      <syn-range-tick>100</syn-range-tick>
    </nav>
  </syn-range>

  <p>
    It is possible to divide the space between major ticks for finer scale
    readings.
  </p>

  <syn-range
    class="syn-range-with-tick"
    max="100"
    min="0"
    value="50"
    label="Volume"
  >
    <nav slot="ticks">
      <syn-range-tick>0</syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick>50</syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick subdivision=""></syn-range-tick>
      <syn-range-tick>100</syn-range-tick>
    </nav>
  </syn-range>
</div>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-large);
  }

  .syn-range-with-tick nav {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }
</style>
```

---

## Tooltip Placement

By default, the tooltip is shown on top. Set tooltip-placement to bottom to show it below the range.

```html
<syn-range tooltip-placement="bottom" max="100" min="0" value="50"></syn-range>
```

---

## Tooltip Disabled

To disable the tooltip, set tooltip-placement to none.

```html
<syn-range max="100" min="0" tooltip-placement="none" value="50"></syn-range>
```

---

## Tooltip Formatter

You can change the tooltip’s content by setting the tooltipFormatter property to a function that accepts the range’s value as an argument.

```html
<syn-range class="tooltip-formatter" max="100" min="0" value="50">
  <nav slot="ticks">
    <syn-range-tick>0%</syn-range-tick>
    <syn-range-tick>50%</syn-range-tick>
    <syn-range-tick>100%</syn-range-tick>
  </nav>
</syn-range>
<style>
  .tooltip-formatter nav {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }
</style>
<script>
  document.querySelectorAll(".tooltip-formatter").forEach((tip) => {
    tip.tooltipFormatter = (value) => value + "%";
  });
</script>
```