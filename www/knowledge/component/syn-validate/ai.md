# syn-validate

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-validate

## Rules

# syn-validate

## Summary

Validate provides form field validation messages in a unified way.
It does this by using [the native browser validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
and showing the validation message in a consistent, user defined way.

## Common Use Cases

- Display field validation for forms and wizards.
- Show custom validation messages for domain specific rules.
- Integrate consistent error handling across native and custom form controls.

## Usage Guidelines

### Validation Messages

- Write actionable messages that tell users what to fix and how.
- Prefer field specific messages over generic form level errors.
- Use consistent wording for recurring validation rules.

### Display Variants

- Use inline variant for persistent field level feedback.
- Use tooltip variant where space is constrained and interaction remains clear.
- Hide icons only when another strong error cue is present.

### Validation Timing

- Use eager validation for high risk fields that benefit from immediate feedback.
- Use submit time validation to reduce interruption in long forms.
- Support custom validation events when integrating non-standard controls.

## Accessibility

- Validation messages must be text based and clearly associated with the target field.
- Use live validation thoughtfully to avoid excessive announcement noise for screen readers.
- Provide specific corrective guidance instead of generic error statements.

## Related Components

- syn-input
- syn-select
- syn-textarea
- syn-file

## Related Templates

- Forms

## Interface

# syn-validate

## Summary

Validate provides form field validation messages in a unified way.
It does this by using [the native browser validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
and showing the validation message in a consistent, user defined way.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-validate--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41310-284767)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=25638-40480)

## Class Information

- **Tag Name:** `syn-validate`
- **Import Example:** `import SynValidate from '@synergy-design-system/components/components/validate/validate.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.12.0

## Available Slots

- `(default)`: The form field that should be validated. Avoid slotting in more than one element, as subsequent ones will be ignored.

## Available Properties

### customValidationMessage

attribute: `custom-validation-message`
reflects: no
type: `string`
default: `''`

Custom validation message to be displayed when the input is invalid.
Will override the default browser validation message.
Set to an empty string to reset the validation message.

### eager

attribute: `eager`
reflects: no
type: `boolean`
default: `false`

Set this to true to validate the input immediately when it is rendered.
Best used with a `variant` of `inline`.
When setting eager, the input will not be focused automatically.

When using a `variant` of `native` the browser will focus
the last eager field as it is using a tooltip.
In this case it is better to just provide one eager field.

### hideIcon

attribute: `hide-icon`
reflects: yes
type: `boolean`
default: `false`

Do not show the error icon when using the inline variant validation

### on

attribute: `on`
reflects: yes
type: `string`
default: `''`

Defines the events that trigger the validation.
`invalid` will always automatically be included.
You may also use the `live` keyword to validate on every input change.
`live` will make sure to listen to the `invalid`, `input` and `blur` events.

Please have a look at the [documentation for native form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
and [the use of form invalid events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) for further information.

### variant

attribute: `variant`
reflects: yes
type: `'native' | 'tooltip' | 'inline'`
default: `'native'`

The variant that should be used to show validation alerts.

The following variants are supported:

- **native** (default): Uses the native browser validation, usually a browser tooltip.
- **tooltip**: Show the validation message as a tooltip using a `<syn-tooltip>`.
- **inline**: Show the validation message underneath the element, using a `<syn-alert>`

## Available Methods

### getValidity()

parameters: -
returns: `void`

Returns the validity state of the input component.
`true` for valid and `false` for invalid.

## Available CSS Parts

- `alert`: The syn-alert that is shown when the variant is set to "inline".
- `alert__base`: The container that wraps the alert.
- `alert__icon`: The container that wraps the alert icon.
- `alert__message`: The container that wraps the alert message.
- `base`: The component's base wrapper.
- `input-wrapper`: The container that wraps the form field.
- `tooltip`: The syn-tooltip that is shown when the variant is set to "tooltip".
- `tooltip__arrow`: The container that wraps the tooltip arrow.
- `tooltip__base`: The container that wraps the tooltip.
- `tooltip__body`: The container that wraps the tooltip body.
- `tooltip__popup`: The container that wraps the tooltip popup.

## Dependencies

- `syn-alert`
- `syn-tooltip`

## Examples

## Default

Validate offers options for convenient error handling in form elements.

```html
<form id="components-syn-validate--default-validate-demo-form">
  <syn-validate>
    <syn-input
      label="Invalid input"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--default-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Tooltip Variant

When the tooltip variant is chosen, validation errors are displayed in a <syn-tooltip> component that has its center at the invalid element. The native tooltip is suppressed.

```html
<form id="components-syn-validate--tooltip-variant-validate-demo-form">
  <syn-validate class="validation-tooltip" variant="tooltip" on="live">
    <syn-input
      label="Invalid input"
      type="email"
      value="team(at)synergy.com"
      required=""
    ></syn-input>
  </syn-validate>
  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--tooltip-variant-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Inline Variant

Set the variant attribute to inline to show the invalid message below the selected element.👨‍💻 Additional developer Information:Per default, syn-validate uses the browser’s built-in validation. This shows only one error at a time and is optimized for accessbility.When using the inline variant, you have to ensure accessibility on your side and have to have in mind it most likely will lead to layout shifts.

```html
<form id="components-syn-validate--inline-variant-validate-demo-form">
  <syn-validate class="validation-inline" variant="inline">
    <syn-input
      label="Inline validation"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--inline-variant-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Hide Icon

Use hide-icon to hide the icon in inline style. This is especially useful when showing more than one error at a time.

```html
<form id="components-syn-validate--hide-icon-validate-demo-form">
  <syn-validate class="validation-hide-icon" hide-icon="" variant="inline">
    <syn-input
      label="Hide icon"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--hide-icon-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Sizes

In development use the size attribute of the form element e.g. syn-input to set the size of the inline syn-validate automatically.

```html
<form id="components-syn-validate--sizes-validate-demo-form">
  <div
    style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
  >
    <syn-validate eager="" variant="inline">
      <syn-input
        type="email"
        value="team(at)synergy.com"
        label="Size small"
        size="small"
      ></syn-input>
    </syn-validate>

    <syn-validate eager="" variant="inline">
      <syn-input
        type="email"
        value="team(at)synergy.com"
        label="Size medium"
        size="medium"
      ></syn-input>
    </syn-validate>

    <syn-validate eager="" variant="inline">
      <syn-input
        type="email"
        value="team(at)synergy.com"
        label="Size large"
        size="large"
      ></syn-input>
    </syn-validate>
  </div>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--sizes-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Live

Use the live value for the on attribute to validate on every input change (e. g. typing a character or checking a checkbox.) instead of form submit. This will automatically bind to the input and blur events.👨‍💻 Additional developer Information:Please ensure, that you really need live validation for your use case as this can have implications on accessibility.

```html
<form id="components-syn-validate--live-validate-demo-form">
  <syn-validate class="validation-live" variant="inline" on="live">
    <syn-input
      label="Invalid input"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--live-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Custom Validation Message

Use the custom-validation-message attribute to use whichever error you need as text, overriding the default browser errors.👨‍💻 Additional developer Information:By using the custom-validation-message attribute, you can override the default browser error messages with custom text. However, please note that applying this attribute disables the browser’s native validation functionality. This means the standard error messages will not be displayed until the custom-validation attribute is removed, at which point the native functionality will be restored.

```html
<form
  id="components-syn-validate--custom-validation-message-validate-demo-form"
>
  <syn-validate
    class="validation-custom-validation"
    custom-validation-message='Include an "@" in the email address, otherwise you will never get our marvelous newsletter'
    variant="inline"
  >
    <syn-input
      label="Custom validation"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--custom-validation-message-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Custom Form Field

Wrap the element around any other form field, that follows browser standards to use all features.

```html
<form id="components-syn-validate--custom-form-field-validate-demo-form">
  <h3 style="margin: 0; padding: 0">Choose SICK´s brand color</h3>
  <syn-validate class="validation-custom-form-field" on="live" variant="inline">
    <validate-demo-radio name="color" required=""></validate-demo-radio>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--custom-form-field-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Binding To Custom Event Names

Use the on attribute to listen for one or many custom events. This may be useful if you want to validate on keypress or custom events that may be fired by third party web-components.👨‍💻 Additional developer Information:You can provide one or multiple events in the on property. Please use a whitespace separated list of DOM event names. <syn-validate> will make sure to automatically use Synergies custom events. This means <syn-validate on="change click"> will bind to the syn-change and click events for a <syn-input> or change and click events for a regular <input> element.

```html
<form
  id="components-syn-validate--binding-to-custom-event-names-validate-demo-form"
>
  <syn-validate
    class="validation-custom-validation"
    on="mouseover blur"
    variant="inline"
  >
    <syn-input
      label="Custom validation (triggered on hover and blur)"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--binding-to-custom-event-names-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```

---

## Eager

Use the eager attribute to validate the field when the component is mounted. This may be used to prefill validation messages, e.g. during page loads. Please be aware that when mixed with a variant of native, this will display the error of the last eager element in your <form> only!

```html
<form id="components-syn-validate--eager-validate-demo-form">
  <syn-validate eager="" variant="inline">
    <syn-input
      label="Eager validation (triggered on page load)"
      type="email"
      value="team(at)synergy.com"
    ></syn-input>
  </syn-validate>

  <p>
    <syn-button type="submit">Submit</syn-button>
  </p>
</form>
<script type="module">
  customElements.whenDefined("syn-validate").then(() => {
    const form = document.getElementById(
      "components-syn-validate--eager-validate-demo-form",
    );
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
</script>
```