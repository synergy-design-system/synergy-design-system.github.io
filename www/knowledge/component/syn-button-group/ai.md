# syn-button-group

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-button-group

## Rules

# syn-button-group

## Summary

Button groups can be used to group related buttons into sections.

## Common Use Cases

- Group related buttons that serve a common purpose or function together.
- Use for actions that are logically connected (e.g., text formatting: bold, italic, underline).
- Group buttons that control related settings or options within the same UI context.
- Avoid grouping buttons that are unrelated or have conflicting purposes.
- Use for toolbars with icon buttons and tooltip hints.
- Use for segmented controls with radio buttons in a group.
- Use for text formatting controls (bold, italic, underline, etc.).
- Use for pagination or navigation controls with multiple related actions.
- Use for filter or view controls with related options.

## Usage Guidelines

### Variants

- Use outline variant (default) for secondary or neutral button groups.
- Use filled variant for primary actions or emphasized button groups.
- Keep variant consistent within a single button group for visual cohesion.
- Choose variant based on the importance and prominence needed in the layout.

### Composition & Related Elements

- Combine with syn-icon for icon-only toolbar-style button groups.
- Wrap buttons in syn-tooltip for additional context without cluttering the UI.
- Use with syn-dropdown for split-button or menu patterns within groups.
- Place all related interactive elements inside the button group slot.

### Visual Consistency

- Ensure adequate spacing between button groups and other UI elements.
- Keep the number of buttons in a group manageable (typically 2-5 buttons).

### Component Behavior

- Each button in the group retains its individual click handlers and states.
- Button states (focus, hover, active) are automatically managed by the component.
- The component handles size and variant propagation to all child buttons.

## Accessibility

- Always provide a label property for accessibility and screen readers.
- Label should describe the purpose of the button group (e.g., "Text formatting", "Page navigation").
- Use clear, descriptive labels that help users understand the grouped buttons' relationship.
- Labels are not displayed visually but are announced by assistive technologies.

## Related Components

- syn-button

## Interface

# syn-button-group

## Summary

Button groups can be used to group related buttons into sections.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-button-group--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=45597-333063)

## Class Information

- **Tag Name:** `syn-button-group`
- **Import Example:** `import SynButtonGroup from '@synergy-design-system/components/components/button-group/button-group.js';`

## Usage Information

- **Status:** stable
- **Since:** 3.1.0

## Available Slots

- `(default)`: One or more `<syn-button>` elements to display in the button group.

## Available Properties

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The button-groups size. This affects all buttons within the group.

### variant

attribute: `variant`
reflects: yes
type: `'filled' | 'outline'`
default: `'outline'`

The button-group's theme variant. This affects all buttons within the group.

## Available CSS Parts

- `base`: The component's base wrapper.

## Examples

## Default

Button groups can be used to group related buttons into sections.

```html
<syn-button-group>
  <syn-button>Left</syn-button>
  <syn-button>Center</syn-button>
  <syn-button>Right</syn-button>
</syn-button-group>
```

---

## Variants

Use the variant attribute to set the button’s variant. Variants can be Filled, Outline. There is no Text variant.

```html
<div
  style="display: flex; gap: var(--syn-spacing-large); flex-direction: column"
>
  <syn-button-group variant="outline" label="Variant (outline)">
    <syn-button>Left</syn-button>
    <syn-button>Center</syn-button>
    <syn-button>Right</syn-button>
  </syn-button-group>

  <syn-button-group variant="filled" label="Variant (filled)">
    <syn-button>Left</syn-button>
    <syn-button>Center</syn-button>
    <syn-button>Right</syn-button>
  </syn-button-group>
</div>
```

---

## Button Sizes

All button sizes are supported. The size of the button-group will be used to determine the size of the buttons.

```html
<div
  style="display: flex; gap: var(--syn-spacing-large); flex-direction: column"
>
  <syn-button-group size="small" label="Alignment (small)">
    <syn-button>Left</syn-button>
    <syn-button>Center</syn-button>
    <syn-button>Right</syn-button>
  </syn-button-group>

  <syn-button-group size="medium" label="Alignment (medium)">
    <syn-button>Left</syn-button>
    <syn-button>Center</syn-button>
    <syn-button>Right</syn-button>
  </syn-button-group>

  <syn-button-group size="large" label="Alignment (large)">
    <syn-button>Left</syn-button>
    <syn-button>Center</syn-button>
    <syn-button>Right</syn-button>
  </syn-button-group>
</div>
```

---

## Dropdowns In Button Groups

 Dropdowns can be placed inside button groups as long as the trigger is an <syn-button> element. 

```html
<syn-button-group label="Example Button Group">
  <syn-button>Button</syn-button>
  <syn-button>Button</syn-button>
  <syn-dropdown placement="bottom-end">
    <syn-button slot="trigger" caret="">Dropdown</syn-button>
    <syn-menu>
      <syn-menu-item>Save</syn-menu-item>
      <syn-menu-item>Save as…</syn-menu-item>
      <syn-menu-item>Save all</syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</syn-button-group>
```

---

## Split Buttons

Create a split button using a button and a dropdown. Use a visually hidden label to ensure the dropdown is accessible to users with assistive devices.

```html
<syn-button-group label="Example Button Group">
  <syn-button>Save</syn-button>
  <syn-dropdown placement="bottom-end">
    <syn-button slot="trigger" variant="primary" caret=""></syn-button>
    <syn-menu>
      <syn-menu-item>Save</syn-menu-item>
      <syn-menu-item>Save as…</syn-menu-item>
      <syn-menu-item>Save all</syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</syn-button-group>
```

---

## Tooltips In Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html
<syn-button-group label="Example Button Group">
  <syn-tooltip content="I am on the left">
    <syn-button>Left</syn-button>
  </syn-tooltip>
  <syn-tooltip content="I am in the center">
    <syn-button>Center</syn-button>
  </syn-tooltip>
  <syn-tooltip content="I am on the right">
    <syn-button>Right</syn-button>
  </syn-tooltip>
</syn-button-group>
```

---

## Toolbar Example

Create interactive toolbars with button groups.

```html
<div class="button-group-toolbar">
  <syn-button-group label="Download and save">
    <syn-tooltip content="Save">
      <syn-button><syn-icon name="save" label="Save"></syn-icon></syn-button>
    </syn-tooltip>
    <syn-tooltip content="Download">
      <syn-button
        ><syn-icon name="save_alt" label="Download"></syn-icon
      ></syn-button>
    </syn-tooltip>
  </syn-button-group>

  <syn-button-group label="Misc">
    <syn-tooltip content="Edit">
      <syn-button><syn-icon name="edit" label="Edit"></syn-icon></syn-button>
    </syn-tooltip>
    <syn-tooltip content="Settings">
      <syn-button
        ><syn-icon name="settings" label="Settings"></syn-icon
      ></syn-button>
    </syn-tooltip>
    <syn-tooltip content="Preview">
      <syn-button
        ><syn-icon name="wallpaper" label="Preview"></syn-icon
      ></syn-button>
    </syn-tooltip>
  </syn-button-group>

  <syn-button-group>
    <syn-tooltip content="Add">
      <syn-button><syn-icon name="add" label="Add"></syn-icon></syn-button>
    </syn-tooltip>
    <syn-tooltip content="Info">
      <syn-button><syn-icon name="info" label="Info"></syn-icon></syn-button>
    </syn-tooltip>
    <syn-tooltip content="Upload File">
      <syn-button
        ><syn-icon name="upload_file" label="Upload File"></syn-icon
      ></syn-button>
    </syn-tooltip>
  </syn-button-group>
</div>

<style>
  .button-group-toolbar syn-button-group:not(:last-of-type) {
    margin-right: var(--syn-spacing-large);
  }
</style>
```