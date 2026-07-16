# syn-dialog

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-dialog

## Rules

# syn-dialog

## Summary

Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.

## Common Use Cases

- Confirm an action which can have significant consequences and explicit user approval or input is needed (e.g. deleting a file).
- Present important information that must be seen and acknowledged before proceeding (e.g., session expired and renewed login required).
- Require users to enter information or select from multiple options before continuing.
- For non-critical content or information that doesn't require immediate user input, please use syn-alert to avoid workflow disruption.

## Usage Guidelines

### Actions

- Ensure a clear user journey by using a single primary button for the main action and secondary buttons for less important actions.
- Provide an action to close the interaction if a close button is not present in the top-right corner.
- Avoid having multiple primary action buttons within the same dialog.

### Headline and Content

- Use clear and concise headlines that describe the purpose.
- Avoid displaying content unrelated to the current workflow.
- Refrain from using dialogs for complex forms or large amounts of information.

### Slots

- Use the "label" slot to add a headline.
- Add main content on the "default" slot. The "default" slot is always scrollable.
- Use the "footer" slot to add action elements. The "footer" slot is always fixed.

### User Interaction

- Require users to take an action before they can continue interacting with the rest of the interface.
- Provide multiple ways to close the dialog, such as an "X" button, a cancel button, or clicking outside the dialog.
- Avoid excessive use of dialogs, as they can be disruptive to the user experience.

## Accessibility

- Always provide a headline for the dialog.
- Always include a visible and easily accessible close button within the modal.

## Known Issues

- **Firefox / Chrome**: When the headline is set by slot instead of attribute, the dialog name is not being announced by VoiceOver in Chrome and Firefox.

## Interface

# syn-dialog

## Summary

Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-dialog--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42207-348565)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=17938-28299)

## Class Information

- **Tag Name:** `syn-dialog`
- **Import Example:** `import SynDialog from '@synergy-design-system/components/components/dialog/dialog.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.23.0

## Available Slots

- `(default)`: The dialog's main content.
- `label`: The dialog's label. Alternatively, you can use the `label` attribute.
- `header-actions`: Optional actions to add to the header. Works best with `<syn-icon-button>`.
- `footer`: The dialog's footer, usually one or more buttons representing various options.

## Available Properties

### label

attribute: `label`
reflects: yes
type: `string`
default: `''`

The dialog's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.

### modal

attribute: -
reflects: -
type: `undefined`
default: `new Modal(this)`

Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Synergy modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Synergy's focus trapping.

### noHeader

attribute: `no-header`
reflects: yes
type: `boolean`
default: `false`

Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the dialog

### show()

parameters: -
returns: `void`

Shows the dialog.

## Available CSS Parts

- `base`: The component's base wrapper.
- `body`: The dialog's body.
- `close-button`: The close button, an `<syn-icon-button>`.
- `close-button__base`: The close button's exported `base` part.
- `footer`: The dialog's footer.
- `header`: The dialog's header. This element wraps the title and header actions.
- `header-actions`: Optional actions to add to the header. Works best with `<syn-icon-button>`.
- `overlay`: The overlay that covers the screen behind the dialog.
- `panel`: The dialog's panel (where the dialog and its content are rendered).
- `title`: The dialog's title.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the dialog closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the dialog opens and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the dialog closes.

### syn-initial-focus

type: `SynInitialFocusEvent`

Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.

### syn-request-close

type: `SynRequestCloseEvent`

Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.

### syn-show

type: `SynShowEvent`

Emitted when the dialog opens.

## Dependencies

- `syn-icon-button`

## Examples

## Default

Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.

```html
<syn-dialog open="" label="Dialog">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span slot="footer"> </span>
  <syn-button class="default-close-icon" variant="filled" slot="footer"
    >Close</syn-button
  >
  <span slot="footer"> </span>
  <script slot="footer">
    [...document.querySelectorAll(".default-close-icon")].forEach((elm) => {
      elm.addEventListener("click", (e) => {
        const dialog = e.target.closest("syn-dialog");
        dialog.label += " - Clicked";
        dialog.hide();
        dialog.modal.deactivateExternal();
      });
    });
  </script>
  <span slot="footer"> </span>
</syn-dialog>

<syn-button class="dialog-default-story-opener">Open Dialog</syn-button>
<script type="module">
  const createOpener = (opener) => {
    // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
    // Remove the initial trap and make sure to do the same when recreating the story.
    const loadedDialog = opener.parentElement.querySelector("syn-dialog");
    loadedDialog.modal.activateExternal();

    opener.addEventListener("click", (e) => {
      const currentDialog = e.target.parentElement.querySelector("syn-dialog");
      currentDialog.show();
      currentDialog.modal.activateExternal();
    });
  };

  [...document.querySelectorAll(".dialog-default-story-opener")].forEach(
    (i) => {
      createOpener(i);
    },
  );
</script>
```

---

## Custom Width

Use the --width custom property to set the dialog’s width.

```html
<syn-dialog open="" label="Dialog" style="--width: 50vw">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  <syn-button class="dialog-custom-width" variant="filled" slot="footer"
    >Close</syn-button
  >
  <script>
    [...document.querySelectorAll(".dialog-custom-width")].forEach((elm) => {
      elm.addEventListener("click", (e) => {
        const dialog = e.target.closest("syn-dialog");
        dialog.label += " - Clicked";
        dialog.hide();
        dialog.modal.deactivateExternal();
      });
    });
  </script>
</syn-dialog>

<syn-button class="dialog-custom-width-story-opener">Open Dialog</syn-button>
<script type="module">
  const createOpener = (opener) => {
    // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
    // Remove the initial trap and make sure to do the same when recreating the story.
    const loadedDialog = opener.parentElement.querySelector("syn-dialog");
    loadedDialog.modal.activateExternal();

    opener.addEventListener("click", (e) => {
      const currentDialog = e.target.parentElement.querySelector("syn-dialog");
      currentDialog.show();
      currentDialog.modal.activateExternal();
    });
  };

  [...document.querySelectorAll(".dialog-custom-width-story-opener")].forEach(
    (i) => {
      createOpener(i);
    },
  );
</script>
```

---

## Scrolling

By design, a dialog’s height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html
<syn-dialog open="" label="Dialog">
  <div>
    <p>Scroll down and give it a try! 👇</p>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </p>
  </div>

  <syn-button class="dialog-scrolling" variant="filled" slot="footer"
    >Close</syn-button
  >
  <script>
    [...document.querySelectorAll(".dialog-scrolling")].forEach((elm) => {
      elm.addEventListener("click", (e) => {
        const dialog = e.target.closest("syn-dialog");
        dialog.label += " - Clicked";
        dialog.hide();
        dialog.modal.deactivateExternal();
      });
    });
  </script>
</syn-dialog>

<syn-button class="dialog-scrolling-story-opener">Open Dialog</syn-button>
<script type="module">
  const createOpener = (opener) => {
    // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
    // Remove the initial trap and make sure to do the same when recreating the story.
    const loadedDialog = opener.parentElement.querySelector("syn-dialog");
    loadedDialog.modal.activateExternal();

    opener.addEventListener("click", (e) => {
      const currentDialog = e.target.parentElement.querySelector("syn-dialog");
      currentDialog.show();
      currentDialog.modal.activateExternal();
    });
  };

  [...document.querySelectorAll(".dialog-scrolling-story-opener")].forEach(
    (i) => {
      createOpener(i);
    },
  );
</script>
```

---

## Header Actions

The header shows a functional close button by default. You can use the header-actions slot to add additional icon buttons if needed.

```html
<syn-dialog open="" label="Dialog">
  <syn-icon-button
    class="new-window"
    slot="header-actions"
    name="open_in_new"
    label="Open in new Tab"
  ></syn-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  <syn-button class="dialog-header-actions" variant="filled" slot="footer"
    >Close</syn-button
  >
  <script>
    [...document.querySelectorAll(".dialog-header-actions")].forEach((elm) => {
      elm.addEventListener("click", (e) => {
        const dialog = e.target.closest("syn-dialog");
        dialog.label += " - Clicked";
        dialog.hide();
        dialog.modal.deactivateExternal();
      });
    });
  </script>
</syn-dialog>
<script type="module">
  document
    .querySelector(".new-window")
    .addEventListener("click", () => window.open(location.href));
</script>

<syn-button class="dialog-header-actions-story-opener">Open Dialog</syn-button>
<script type="module">
  const createOpener = (opener) => {
    // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
    // Remove the initial trap and make sure to do the same when recreating the story.
    const loadedDialog = opener.parentElement.querySelector("syn-dialog");
    loadedDialog.modal.activateExternal();

    opener.addEventListener("click", (e) => {
      const currentDialog = e.target.parentElement.querySelector("syn-dialog");
      currentDialog.show();
      currentDialog.modal.activateExternal();
    });
  };

  [...document.querySelectorAll(".dialog-header-actions-story-opener")].forEach(
    (i) => {
      createOpener(i);
    },
  );
</script>
```

---

## Preventing The Dialog From Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the Escape key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.To keep the dialog open in such cases, you can cancel the syn-request-close event. When canceled, the dialog will remain open and pulse briefly to draw the user’s attention to it.You can use event.detail.source to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or Escape to dismiss it.

```html
<syn-dialog open="" label="Dialog" class="dialog-deny-close">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.

  <syn-button class="dialog-deny-close-actions" variant="filled" slot="footer"
    >Close</syn-button
  >
  <script>
    [...document.querySelectorAll(".dialog-deny-close-actions")].forEach(
      (elm) => {
        elm.addEventListener("click", (e) => {
          const dialog = e.target.closest("syn-dialog");
          dialog.label += " - Clicked";
          dialog.hide();
          dialog.modal.deactivateExternal();
        });
      },
    );
  </script>
</syn-dialog>
<script type="module">
  const dialog = document.querySelector(".dialog-deny-close");
  dialog.addEventListener("syn-request-close", (event) => {
    if (event.detail.source === "overlay") {
      event.preventDefault();
    }
  });
</script>

<syn-button class="dialog-deny-close-story-opener">Open Dialog</syn-button>
<script type="module">
  const createOpener = (opener) => {
    // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
    // Remove the initial trap and make sure to do the same when recreating the story.
    const loadedDialog = opener.parentElement.querySelector("syn-dialog");
    loadedDialog.modal.activateExternal();

    opener.addEventListener("click", (e) => {
      const currentDialog = e.target.parentElement.querySelector("syn-dialog");
      currentDialog.show();
      currentDialog.modal.activateExternal();
    });
  };

  [...document.querySelectorAll(".dialog-deny-close-story-opener")].forEach(
    (i) => {
      createOpener(i);
    },
  );
</script>
```

---

## Customizing Initial Focus

By default, the dialog’s panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the autofocus attribute to it as shown below.

```html
<syn-dialog label="Dialog">
  <syn-input
    autofocus=""
    placeholder="I will have focus when the dialog is opened"
  ></syn-input>

  <syn-button
    class="dialog-initial-focus-actions"
    variant="filled"
    slot="footer"
    >Close</syn-button
  >
  <script>
    [...document.querySelectorAll(".dialog-initial-focus-actions")].forEach(
      (elm) => {
        elm.addEventListener("click", (e) => {
          const dialog = e.target.closest("syn-dialog");
          dialog.label += " - Clicked";
          dialog.hide();
          dialog.modal.deactivateExternal();
        });
      },
    );
  </script>
</syn-dialog>

<syn-button class="dialog-initial-focus-story-opener">Open Dialog</syn-button>
<script type="module">
  const createOpener = (opener) => {
    // Storybook only: When loading the docs page, all dialogs are applying a focus trap.
    // Remove the initial trap and make sure to do the same when recreating the story.
    const loadedDialog = opener.parentElement.querySelector("syn-dialog");
    loadedDialog.modal.activateExternal();

    opener.addEventListener("click", (e) => {
      const currentDialog = e.target.parentElement.querySelector("syn-dialog");
      currentDialog.show();
      currentDialog.modal.activateExternal();
    });
  };

  [...document.querySelectorAll(".dialog-initial-focus-story-opener")].forEach(
    (i) => {
      createOpener(i);
    },
  );
</script>
```