# syn-dropdown

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-dropdown

## Rules

# syn-dropdown

## Summary

Dropdowns expose additional content that "drops down" in a panel.

## Common Use Cases

- Provide a list of items in a compact space.
- Display additional options or settings related to a specific item.
- Enable navigation through different sections or categories.

## Usage Guidelines

### Behavior

- Avoid hiding sets of less than 4 items in dropdowns.
- Refrain from nesting dropdowns within each other. If nesting is strictly necessary, limit the menu to two layers to prevent complex operation and cognitive load.
- Keep the panel near its trigger so users understand its context.

### Panel Items

- Group related panel items to make them easier to find, especially if there are many. Use a group label and syn-divider to separate them visually.

### Triggers

- Maintain consistent styling for dropdown triggers placed at the same level or in the same group; i.e., if a trigger has both text and icon, other triggers on the same level or group should also display text and icon.
- Avoid truncating trigger labels if possible.

## Accessibility

- Ensure that when the menu is triggered via keyboard, the first item receives focus.

## Related Templates

- AppShell

## Interface

# syn-dropdown

## Summary

Dropdowns expose additional content that "drops down" in a panel.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-dropdown--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41203-538934)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=11573-375949)

## Class Information

- **Tag Name:** `syn-dropdown`
- **Import Example:** `import SynDropdown from '@synergy-design-system/components/components/dropdown/dropdown.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.12.0

## Available Slots

- `(default)`: The dropdown's main content.
- `trigger`: The dropdown's trigger, usually a `<syn-button>` element.

## Available Properties

### containingElement

attribute: -
reflects: -
type: `HTMLElement | undefined`
default: none

The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
components that use a dropdown internally.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the dropdown so the panel will not open.

### distance

attribute: `distance`
reflects: no
type: `number`
default: `0`

The distance in pixels from which to offset the panel away from its trigger.

### open

attribute: `open`
reflects: yes
type: `boolean`
default: `false`

Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.

### placement

attribute: `placement`
reflects: yes
type: `| 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'`
default: `'bottom-start'`

The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport.

### skidding

attribute: `skidding`
reflects: no
type: `number`
default: `0`

The distance in pixels from which to offset the panel along its trigger.

### stayOpenOnSelect

attribute: `stay-open-on-select`
reflects: yes
type: `boolean`
default: `false`

By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions.

### sync

attribute: `sync`
reflects: yes
type: `'width' | 'height' | 'both' | undefined`
default: `undefined`

Syncs the popup width or height to that of the trigger element.

## Available Methods

### hide()

parameters: -
returns: `void`

Hides the dropdown panel

### reposition()

parameters: -
returns: `void`

Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
is activated.

### show()

parameters: -
returns: `void`

Shows the dropdown panel.

## Available CSS Parts

- `base`: The component's base wrapper, an `<syn-popup>` element.
- `base__popup`: The popup's exported `popup` part. Use this to target the tooltip's popup container.
- `panel`: The panel that gets shown when the dropdown is open.
- `trigger`: The container that wraps the trigger.

## Available Events

### syn-after-hide

type: `SynAfterHideEvent`

Emitted after the dropdown closes and all animations are complete.

### syn-after-show

type: `SynAfterShowEvent`

Emitted after the dropdown opens and all animations are complete.

### syn-hide

type: `SynHideEvent`

Emitted when the dropdown closes.

### syn-show

type: `SynShowEvent`

Emitted when the dropdown opens.

## Dependencies

- `syn-popup`

## Examples

## Default

Dropdowns expose additional content that “drops down” in a panel.Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.Dropdowns are designed to work well with menus to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. color picker). The API gives you complete control over showing, hiding, and positioning the panel.

```html
<div style="position: relative">
  <syn-dropdown>
    <syn-button slot="trigger" caret="">Dropdown</syn-button>
    <syn-menu style="min-width: 240px">
      <syn-menu-item>Dropdown Item 1</syn-menu-item>
      <syn-menu-item>Dropdown Item 2</syn-menu-item>
      <syn-menu-item>Dropdown Item 3</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item type="checkbox" checked="">Checkbox</syn-menu-item>
      <syn-menu-item disabled="">Disabled</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item>
        Prefix
        <syn-icon slot="prefix" name="wallpaper"></syn-icon>
      </syn-menu-item>
      <syn-menu-item>
        Suffix Icon
        <syn-icon slot="suffix" name="wallpaper"></syn-icon>
      </syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</div>
```

---

## Getting The Selected Item

When dropdowns are used with menus, you can listen for the syn-select event to determine which menu item was selected. The menu item element will be exposed in event.detail.item. You can set value props to make it easier to identify commands. DEV: Alternatively, you can listen for the click event on individual menu items. Note that, using this approach, disabled menu items will still emit a click event.

```html
<div style="position: relative">
  <div class="dropdown-selection">
    <syn-dropdown>
      <syn-button slot="trigger" caret="">Edit</syn-button>
      <syn-menu style="min-width: 240px">
        <syn-menu-item value="cut">Cut</syn-menu-item>
        <syn-menu-item value="copy">Copy</syn-menu-item>
        <syn-menu-item value="paste">Paste</syn-menu-item>
      </syn-menu>
    </syn-dropdown>
  </div>
</div>

<script type="module">
  const container = document.querySelector(".dropdown-selection");
  const dropdown = container.querySelector("syn-dropdown");

  dropdown.addEventListener("syn-select", (event) => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

---

## Placement

The preferred placement of the dropdown can be set with the placement attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html
<div style="position: relative">
  <syn-dropdown placement="right-start">
    <syn-button slot="trigger" caret="">Edit</syn-button>
    <syn-menu style="min-width: 240px">
      <syn-menu-item>Cut</syn-menu-item>
      <syn-menu-item>Copy</syn-menu-item>
      <syn-menu-item>Paste</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item>Find</syn-menu-item>
      <syn-menu-item>Replace</syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</div>
```

---

## Distance

The distance from the panel to the trigger can be customized using the distance attribute. This value is specified in pixels.

```html
<div style="position: relative">
  <syn-dropdown distance="30">
    <syn-button slot="trigger" caret="">Edit</syn-button>
    <syn-menu style="min-width: 240px">
      <syn-menu-item>Cut</syn-menu-item>
      <syn-menu-item>Copy</syn-menu-item>
      <syn-menu-item>Paste</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item>Find</syn-menu-item>
      <syn-menu-item>Replace</syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</div>
```

---

## Skidding

The offset of the panel along the trigger can be customized using the skidding attribute. This value is specified in pixels.

```html
<div style="position: relative">
  <syn-dropdown skidding="30">
    <syn-button slot="trigger" caret="">Edit</syn-button>
    <syn-menu style="min-width: 240px">
      <syn-menu-item>Cut</syn-menu-item>
      <syn-menu-item>Copy</syn-menu-item>
      <syn-menu-item>Paste</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item>Find</syn-menu-item>
      <syn-menu-item>Replace</syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</div>
```

---

## Submenus

To create a submenu, nest an <syn-menu slot="submenu"> element in a menu item.

```html
<div style="position: relative">
  <syn-dropdown>
    <syn-button slot="trigger" caret="">Edit</syn-button>

    <syn-menu style="min-width: 240px">
      <syn-menu-item value="undo">Undo</syn-menu-item>
      <syn-menu-item value="redo">Redo</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item value="cut">Cut</syn-menu-item>
      <syn-menu-item value="copy">Copy</syn-menu-item>
      <syn-menu-item value="paste">Paste</syn-menu-item>
      <syn-divider></syn-divider>
      <syn-menu-item>
        Find
        <syn-menu slot="submenu">
          <syn-menu-item value="find">Find…</syn-menu-item>
          <syn-menu-item value="find-previous">Find Next</syn-menu-item>
          <syn-menu-item value="find-next">Find Previous</syn-menu-item>
        </syn-menu>
      </syn-menu-item>
      <syn-menu-item>
        Transformations
        <syn-menu slot="submenu">
          <syn-menu-item value="uppercase">Make uppercase</syn-menu-item>
          <syn-menu-item value="lowercase">Make lowercase</syn-menu-item>
          <syn-menu-item value="capitalize">Capitalize</syn-menu-item>
        </syn-menu>
      </syn-menu-item>
    </syn-menu>
  </syn-dropdown>
</div>
```