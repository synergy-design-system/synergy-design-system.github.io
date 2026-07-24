# syn-alert

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-alert

## Rules

# syn-alert

## Summary

Alerts are used to display important messages inline or as toast notifications.

## Common Use Cases

- Inline notifications can provide contextual feedback to users. They are directly embedded within the content of a page or form.
- Toast notifications provide brief, unobtrusive messages that appear as overlays to confirm actions or share updates without interrupting the user's current task.

## Usage Guidelines

### When to choose inline notifications

- Integrated into the area where the user is already focused to avoid disrupting the user's workflow.
- Provide feedback on user actions, such as errors, warnings, or confirmations (e.g. "Unable to save changes. Check your internet connection and try again.", "You have unsaved changes. Are you sure you want to leave this page?" or "Payment completed. Thank you for your purchase!").
- Announce important updates or changes within the application (e.g. "New feature alert! You can now schedule posts directly from the dashboard.", "Maintenance scheduled for January 30th, 2:00 AM - 4:00 AM. The application will be unavailable during this time.").
- Highlight critical information or display system messages that require user attention(e.g. "System update required. Please restart your application to apply the latest updates." or "Your account has been temporarily suspended due to suspicious activity. Contact support for assistance.").
- May contain interactive elements such as links and buttons.

### When to choose toast notifications

- Take the user's attention temporarily away from their current task by appearing on the screen with animations to ensure they are noticed.
- Provide feedback on user actions, such as errors, warnings, or confirmations. (e.g., "Failed to load data", "Your message has been sent", "Your settings have been saved").
- Announce updates, reminders, or confirmations (e.g., "Your settings have been saved").
- May contain interactive elements such as links and buttons.
- They can serve as supplementary information for content available on other pages (e.g., a toast notification "Item has been added to the cart" alongside a shopping cart page).

### Content

- Keep alert messages concise and clear, focusing on the most critical information.
- Use simple language that users can quickly understand without additional context.
- Include action items or next steps when appropriate (e.g., "Your session ended. Please login again").
- Avoid redundant information — don't repeat the title in the body text.

### Variants & When to Use Them

- **Primary** variant: Use for general informational messages that don't require urgent attention.
- **Success** variant: Use to confirm that an action was completed successfully.
- **Warning** variant: Use when an action has unexpected consequences or requires user attention.
- **Critical** variant: Use for urgent issues that require immediate user attention or action.
- **Error** variant: Use for critical errors, destructive actions, or situations requiring immediate response.
- ~~**Danger** variant~~: Do not use. This variant is deprecated and will be removed in a future major release. Use the error variant instead.
- **Neutral** variant: Use for updates or system messages that are neither positive nor negative.

### Icons

- Use icons for consistency (info, check_circle, warning, status-error, settings).
- Ensure the icon clearly represents the alert type — don't use confusing or misleading icons.
- Icons are optional but highly recommended for accessibility and visual clarity.

### Dismissal & Duration

- Make alerts closable for non-critical information that users might want to dismiss.
- For critical errors or required information, consider hiding the close button.
- Use auto-hide duration for informational alerts, especially toast notifications (typically 3000-5000ms).
- Pause the auto-hide timer when the user hovers over the alert to allow time for reading.

### Placement & Presentation

- For inline alerts: Place alerts near the relevant content (above forms, near inputs with errors). You may also use `syn-validate` for inline validation messages where appropriate.
- For toast notifications: Use the `toast()` method to display temporary notifications in a stack.
- Place success/confirmation alerts above affected content so users see confirmation after action.
- Place error alerts prominently and ensure they don't disappear automatically.

### What to Avoid

- Never use alerts for decorative purposes or non-essential information.
- Avoid stacking more than 3-4 alerts simultaneously to prevent cognitive overload.
- Reserve alerts for messages that meaningfully impact the user's current task or workflow.

## Accessibility

- Don't use alerts for trivial updates that don't require user awareness.
- Ensure the alert content is concise and clear, focusing on the most critical information.
- Use simple language that users can quickly understand without additional context.
- Include action items or next steps when appropriate (e.g., "Your session ended. Please login again").
- Avoid redundant information — don't repeat the title in the body text.

## Related Components

- syn-validate

## Interface

# syn-alert

## Summary

Alerts are used to display important messages inline or as toast notifications.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-alert--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41137-630160)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=45147-41625)

## Class Information

- **Tag Name:** `syn-alert`
- **Import Example:** `import SynAlert from '@synergy-design-system/components/components/alert/alert.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.20.0

## Available Slots

- `(default)`: The alert's main content.
- `icon`: An icon to show in the alert. Works best with `<syn-icon>`.

## Available Properties

### closable

attribute: `closable`
reflects: yes
type: `boolean`
default: `false`

Enables a close button that allows the user to dismiss the alert.

### duration

attribute: `duration`
reflects: no
type: `undefined`
default: `Infinity`

The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
the alert will not close on its own.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The alert's size.

### variant

attribute: `variant`
reflects: yes
type: `'primary' | 'success' | 'neutral' | 'warning' | 'critical' | 'error' | 'danger'`
default: `'primary'`

The alert's theme variant.

The `danger` variant is deprecated and will be removed in a future release. Use `error` instead.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the alert

### show()

parameters: -
returns: `void`

Shows the alert.

### toast()

parameters: -
returns: `void`

Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
calling this method again. The returned promise will resolve after the alert is hidden.

## Available CSS Parts

- `base`: The component's base wrapper.
- `close-button`: The close button, an `<syn-icon-button>`.
- `close-button__base`: The close button's exported `base` part.
- `icon`: The container that wraps the optional icon.
- `message`: The container that wraps the alert's main content.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the alert closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the alert opens and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the alert closes.

### syn-show

type: `SynShowEvent`

Emitted when the alert opens.

## Dependencies

- `syn-icon-button`

## Examples

## Default

Alerts are used to display important messages inline or as toast notifications.

```html
<syn-alert open="">
  This is a standard alert. You can customize its content and even the icon.
  <syn-icon slot="icon" name="info"></syn-icon>
</syn-alert>
```

---

## Variants

Set the variant attribute to change the alert’s variant.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium)"
>
  <syn-alert variant="primary" open="" id="something">
    <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </syn-alert>

  <syn-alert variant="success" open="">
    <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </syn-alert>

  <syn-alert variant="warning" open="">
    <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </syn-alert>

  <syn-alert variant="critical" open="">
    <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </syn-alert>

  <syn-alert variant="error" open="">
    <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </syn-alert>

  <syn-alert variant="danger" open="">
    <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
    <strong>Your account has been deleted*</strong><br />
    We're very sorry to see you go!
  </syn-alert>

  <syn-alert variant="neutral" open="">
    <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
  </syn-alert>
</div>
<style>
  #something::part(base) {
    overflow: hidden;
  }
</style>
```

---

## Closable

Add the closable attribute to show a close button that will hide the alert.

```html
<syn-alert variant="primary" open="" closable="" class="alert-closable">
  <syn-icon slot="icon" name="info"></syn-icon>
  You can close this alert any time!
</syn-alert>

<script type="module">
  const alert = document.querySelector(".alert-closable");
  alert.addEventListener("syn-after-hide", () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

---

## Without Icons

Icons are optional. Simply omit the icon slot if you don’t want them.

```html
<syn-alert variant="primary" open="">
  Nothing fancy here, just a simple alert.
</syn-alert>
```

---

## Sizes

Use the size attribute to change an alert’s size.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-large)"
>
  <syn-alert variant="primary" open="" size="small">
    <syn-icon slot="icon" name="info"></syn-icon>
    <strong>This is size small</strong><br />
    Nothing fancy here, just a simple alert.
  </syn-alert>

  <syn-alert variant="primary" open="" size="medium">
    <syn-icon slot="icon" name="info"></syn-icon>
    <strong>This is size medium</strong><br />
    Nothing fancy here, just a simple alert.
  </syn-alert>

  <syn-alert variant="primary" open="" size="large">
    <syn-icon slot="icon" name="info"></syn-icon>
    <strong>This is size large</strong><br />
    Nothing fancy here, just a simple alert.
  </syn-alert>
</div>
```

---

## Duration

Set the duration attribute to automatically hide an alert after a period of time. This is useful for alerts that don’t require acknowledgement.

```html
<div class="alert-duration">
  <syn-button variant="outline">Show Alert</syn-button>

  <syn-alert variant="primary" duration="3000" closable="">
    <syn-icon slot="icon" name="info"></syn-icon>
    This alert will automatically hide itself after three seconds, unless you
    interact with it.
  </syn-alert>
</div>

<script type="module">
  const container = document.querySelector(".alert-duration");
  const button = container.querySelector("syn-button");
  const alert = container.querySelector("syn-alert");

  button.addEventListener("click", () => alert.show());
</script>

<style>
  .alert-duration syn-alert {
    margin-top: var(--syn-spacing-small);
  }
</style>
```

---

## Toast Notifications

To display an alert as a toast notification, or “toast”, create the alert and call its toast() method. This will move the alert out of its position in the DOM and into the toast stack where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call toast() again later on.You should always use the closable attribute so users can dismiss the notification. It’s also common to set a reasonable duration when the notification doesn’t require acknowledgement.

```html
<div class="alert-toast">
  <div style="display: flex; gap: var(--syn-spacing-small)">
    <syn-button data-variant="primary">Primary</syn-button>
    <syn-button data-variant="success">Success</syn-button>
    <syn-button data-variant="warning">Warning</syn-button>
    <syn-button data-variant="critical">Critical</syn-button>
    <syn-button data-variant="error">Error</syn-button>
    <syn-button data-variant="neutral">Neutral</syn-button>
  </div>

  <syn-alert variant="primary" duration="3000" closable="">
    <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </syn-alert>

  <syn-alert variant="success" duration="3000" closable="">
    <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </syn-alert>

  <syn-alert variant="neutral" duration="3000" closable="">
    <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
  </syn-alert>

  <syn-alert variant="warning" duration="3000" closable="">
    <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </syn-alert>

  <syn-alert variant="critical" duration="3000" closable="">
    <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </syn-alert>

  <syn-alert variant="error" duration="3000" closable="">
    <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </syn-alert>
</div>

<script type="module">
  const container = document.querySelector(".alert-toast");

  ["primary", "success", "neutral", "warning", "critical", "error"].map(
    (variant) => {
      const button = container.querySelector(
        `syn-button[data-variant="${variant}"]`,
      );
      const alert = container.querySelector(`syn-alert[variant="${variant}"]`);

      button.addEventListener("click", () => alert.toast());
    },
  );
</script>
```

---

## Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the toast() method as shown in the example below.

```html
<div class="alert-toast-wrapper">
  <syn-button>Create Toast</syn-button>
</div>

<script type="module">
  const container = document.querySelector(".alert-toast-wrapper");
  const button = container.querySelector("syn-button");
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement("div");
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(
    message,
    variant = "primary",
    icon = "info",
    duration = 3000,
  ) {
    const alert = Object.assign(document.createElement("syn-alert"), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <syn-icon name="${icon}" slot="icon"></syn-icon>
        This alert will automatically hide itself after three seconds, unless you interact with it.
      `,
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener("click", () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```