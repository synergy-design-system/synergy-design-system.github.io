# syn-menu-item

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-menu-item

## Rules

# syn-menu-item

## Summary

Menu items provide options for the user to pick from in a menu.

## Common Use Cases

- Offer contextual actions in dropdown and overflow menus.
- Expose compact command lists in app headers and toolbars.
- Provide preference toggles with checkbox-style menu items.
- Present grouped navigation shortcuts in compact surfaces.

## Usage Guidelines

### Structure and Order

- Use menu items for action lists or option lists that are secondary to the main page flow.
- Order items by user priority and group related actions together, separated by dividers when needed.
- Keep labels short and action-oriented (for example, "Rename", "Export", "Delete").

### Item Types and States

- Use normal items for immediate actions and checkbox items for persistent on/off preferences.
- Avoid mixing destructive actions among neutral actions without clear visual separation.
- Use loading state only for actions with pending async work and keep feedback short-lived.

### Content and Density

- Use prefix icons to improve scanability, but ensure labels are still self-explanatory without icons.
- Use suffix content for supplementary context such as status or additional hints.
- Avoid overly dense menus with long labels, deep nesting, or too many checkable items in one list.

## Accessibility

- Use menu items inside syn-menu so keyboard navigation and selection events remain consistent.
- Ensure each item has a clear text label; icons in prefix or suffix slots must not be the only way to convey meaning.
- For type="checkbox" items, ensure checked states communicate meaningful toggles and can be understood without visual cues alone.
- Use disabled state only when necessary and provide context when an action is unavailable.

## Related Components

- syn-menu

## Related Templates

- AppShell

## Interface

# syn-menu-item

## Summary

Menu items provide options for the user to pick from in a menu.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-menu-item--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41203-369012)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=10514-9627)

## Class Information

- **Tag Name:** `syn-menu-item`
- **Import Example:** `import SynMenuItem from '@synergy-design-system/components/components/menu-item/menu-item.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.12.0

## Available Slots

- `(default)`: The menu item's label.
- `prefix`: Used to prepend an icon or similar element to the menu item.
- `suffix`: Used to append an icon or similar element to the menu item.
- `submenu`: Used to denote a nested menu.

## Available Properties

### checked

attribute: `checked`
reflects: yes
type: `boolean`
default: `false`

Draws the item in a checked state.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Draws the menu item in a disabled state, preventing selection.

### loading

attribute: `loading`
reflects: yes
type: `boolean`
default: `false`

Draws the menu item in a loading state.

### type

attribute: `type`
reflects: no
type: `'normal' | 'checkbox'`
default: `'normal'`

The type of menu item to render. To use `checked`, this value must be set to `checkbox`.

### value

attribute: `value`
reflects: no
type: `string`
default: `''`

A unique value to store in the menu item. This can be used as a way to identify menu items when selected.

## Available Methods

### getTextLabel()

parameters: -
returns: `void`

Returns a text label based on the contents of the menu item's default slot.

## Available CSS Parts

- `base`: The component's base wrapper.
- `checked-icon`: The checked icon, which is only visible when the menu item is checked.
- `label`: The menu item label.
- `prefix`: The prefix container.
- `spinner`: The spinner that shows when the menu item is in the loading state.
- `spinner__base`: The spinner's base part.
- `submenu-icon`: The submenu icon, visible only when the menu item has a submenu (not yet implemented).
- `suffix`: The suffix container.

## Dependencies

- `syn-icon`
- `syn-popup`
- `syn-spinner`

## Examples

## Default

Menu items provide options for the user to pick from in a menu.

```html
<syn-menu>
  <syn-menu-item> Option 1 </syn-menu-item>
</syn-menu>
```

---

## Prefix And Suffix

Add content to the start and end of menu items using the prefix and suffix slots.

```html
<syn-menu style="max-width: 240px">
  <syn-menu-item>
    <syn-icon slot="prefix" name="house"></syn-icon>
    Home
  </syn-menu-item>

  <syn-menu-item>
    <syn-icon slot="prefix" name="mail"></syn-icon>
    Messages
    <syn-icon slot="suffix" name="info"></syn-icon>
  </syn-menu-item>

  <syn-divider></syn-divider>

  <syn-menu-item>
    <syn-icon slot="prefix" name="settings"></syn-icon>
    Settings
  </syn-menu-item>
</syn-menu>
```

---

## Disabled

Use the disabled attribute to disable an option and prevent it from being selected.

```html
<syn-menu style="max-width: 240px">
  <syn-menu-item>Option 1</syn-menu-item>
  <syn-menu-item disabled="">Option 2</syn-menu-item>
  <syn-menu-item>Option 3</syn-menu-item>
</syn-menu>
```

---

## Loading

Use the loading attribute to indicate that a menu item is busy. Like a disabled menu item, clicks will be suppressed until the loading state is removed.

```html
<syn-menu style="max-width: 240px">
  <syn-menu-item>Option 1</syn-menu-item>
  <syn-menu-item loading="">Option 2</syn-menu-item>
  <syn-menu-item>Option 3</syn-menu-item>
</syn-menu>
```

---

## Focus

The focus event gives the user feedback that the Menu Item has been focused by the keyboard interaction from the user.

```html
<syn-menu style="max-width: 240px">
  <syn-menu-item>Option 1</syn-menu-item>
  <syn-menu-item disabled="">Option 2</syn-menu-item>
  <syn-menu-item>Option 3</syn-menu-item>
</syn-menu>
```

---

## Checkbox Menu Items

Set the type attribute to checkbox to create a menu item that will toggle on and off when selected. You can use the checked attribute to set the initial state.Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you’d find in the menu of a native app.

```html
<syn-menu style="max-width: 240px">
  <syn-menu-item type="checkbox">Autosave</syn-menu-item>
  <syn-menu-item type="checkbox" checked="">Check Spelling</syn-menu-item>
  <syn-menu-item type="checkbox">Word Wrap</syn-menu-item>
</syn-menu>
```

---

## Value Selection

The value attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the syn-select event will be emitted and a reference to the item will be available at event.detail.item. You can use this reference to access the selected item’s value, its checked state, and more.

```html
<syn-menu class="menu-value" style="max-width: 200px">
  <syn-menu-item value="opt-1">Option 1</syn-menu-item>
  <syn-menu-item value="opt-2">Option 2</syn-menu-item>
  <syn-menu-item value="opt-3">Option 3</syn-menu-item>
  <syn-divider></syn-divider>
  <syn-menu-item type="checkbox" value="opt-4" checked=""
    >Checkbox 4</syn-menu-item
  >
  <syn-menu-item type="checkbox" value="opt-5">Checkbox 5</syn-menu-item>
  <syn-menu-item type="checkbox" value="opt-6">Checkbox 6</syn-menu-item>
</syn-menu>

<script type="module">
  const menu = document.querySelector(".menu-value");

  menu.addEventListener("syn-select", (event) => {
    const item = event.detail.item;

    // Log value
    if (item.type === "checkbox") {
      console.log(
        "Selected value: ",
        item.value,
        item.checked ? "checked" : "unchecked",
      );
    } else {
      console.log("Selected value: ", item.value);
    }
  });
</script>
```