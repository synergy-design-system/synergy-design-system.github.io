# syn-tab-group

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-tab-group

## Rules

# syn-tab-group

## Summary

Tab groups organize content into a container that shows one section at a time.

## Common Use Cases

- Organize content into different sections, allowing users to switch between them without leaving the page.
- Implement in dashboards where users need to access different data views or widgets.
- Group settings or configuration options into categories for easier navigation.
- Display different aspects of a product, such as description, reviews, and specifications.
- Arrange user profile information into sections like personal details, activity, and settings.

## Usage Guidelines

### Behavior

- Maintain a consistent tab order across different pages or sections to reduce confusion and enhance user familiarity.
- Limit the number of tabs (typically no more than six) to avoid overwhelming users; for more options, consider using side navigation.
- Do not nest tabs within other tab containers.

### Content

- Choose labels that are concise and use no more than two words.
- Ensure the first tab is the most relevant for the user.
- Place related tabs next to each other for logical grouping.
- Avoid overloading each tabs content with too much information; keep it manageable and focused.

## Accessibility

- Provide a clear label for the tab group (e.g., via aria-label or aria-labelledby).
- The tab group takes a single tabstop, then focus moves to the first interactive element in the tab panel, or the tab panel if there is none. Arrow keys should be used to move between tabs.
- Use only for non-critical information. Hiding content can become a potential barrier, making it more challenging for users to access information.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

## Interface

# syn-tab-group

## Summary

Tab groups organize content into a container that shows one section at a time.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-tab-group--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42207-338578)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=20730-44793)

## Class Information

- **Tag Name:** `syn-tab-group`
- **Import Example:** `import SynTabGroup from '@synergy-design-system/components/components/tab-group/tab-group.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.1.0

## Available Slots

- `(default)`: Used for grouping tab panels in the tab group. Must be `<syn-tab-panel>` elements.
- `nav`: Used for grouping tabs in the tab group. Must be `<syn-tab>` elements.

## Available Properties

### activation

attribute: `activation`
reflects: no
type: `'auto' | 'manual'`
default: `'auto'`

When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter.

### contained

attribute: `contained`
reflects: no
type: `boolean`
default: `false`

Draws the tab group as a contained element.

### fixedScrollControls

attribute: `fixed-scroll-controls`
reflects: no
type: `boolean`
default: `false`

Prevent scroll buttons from being hidden when inactive.

### noScrollControls

attribute: `no-scroll-controls`
reflects: no
type: `boolean`
default: `false`

Disables the scroll arrows that appear when tabs overflow.

### placement

attribute: `placement`
reflects: no
type: `'top' | 'start' | 'end'`
default: `'top'`

The placement of the tabs.

### sharp

attribute: `sharp`
reflects: no
type: `boolean`
default: `false`

Draws the tab group with edges instead of roundings. Takes only effect if used with the 'contained' property

## Available Methods

### show()

parameters: `panel: string`
returns: `void`

Shows the specified tab panel.

## Available CSS Parts

- `active-tab-indicator`: The line that highlights the currently selected tab.
- `base`: The component's base wrapper.
- `body`: The tab group's body where tab panels are slotted in.
- `nav`: The tab group's navigation container where tabs are slotted in.
- `scroll-button`: The previous/next scroll buttons that show when tabs are scrollable, an `<syn-icon-button>`.
- `scroll-button__base`: The scroll button's exported `base` part.
- `scroll-button--end`: The ending scroll button.
- `scroll-button--start`: The starting scroll button.
- `tabs`: The container that wraps the tabs.

## Available Events

### syn-tab-hide

type: `SynTabHideEvent`

Emitted when a tab is hidden. The payload of the event returns the "panel" attribute of the hidden tab.

### syn-tab-show

type: `SynTabShowEvent`

Emitted when a tab is shown. The payload of the event returns the "panel" attribute of the shown tab.

## Dependencies

- `syn-icon-button`

## Examples

## Default

Tab groups organize content into a container that shows one section at a time. Tab groups make use of tabs and tab panels. Each tab must be slotted into the nav slot and its panel must refer to a tab panel of the same name.

```html
<syn-tab-group>
  <syn-tab-panel name="general" active=""
    >This is the general tab panel.</syn-tab-panel
  >
  <syn-tab-panel name="custom">This is the custom tab panel.</syn-tab-panel>
  <syn-tab-panel name="advanced">This is the advanced tab panel.</syn-tab-panel>
  <syn-tab-panel name="disabled">This is the disabled tab panel.</syn-tab-panel>
  <syn-tab slot="nav" panel="general" active="">General</syn-tab>
  <span slot="nav"> </span> <syn-tab slot="nav" panel="custom">Custom</syn-tab>
  <span slot="nav"> </span>
  <syn-tab slot="nav" panel="advanced">Advanced</syn-tab>
  <span slot="nav"> </span>
  <syn-tab slot="nav" panel="disabled" disabled="">Disabled</syn-tab>
</syn-tab-group>
```

---

## Tabs On Start

Tabs can be shown on the starting side by setting placement to start.

```html
<syn-tab-group placement="start">
  <syn-tab slot="nav" panel="general" active="">General</syn-tab>
  <syn-tab slot="nav" panel="custom">Custom</syn-tab>
  <syn-tab slot="nav" panel="advanced">Advanced</syn-tab>
  <syn-tab slot="nav" panel="disabled" disabled="">Disabled</syn-tab>
  <syn-tab-panel name="general" active=""
    >This is the general tab panel.</syn-tab-panel
  >
  <syn-tab-panel name="custom">This is the custom tab panel.</syn-tab-panel>
  <syn-tab-panel name="advanced">This is the advanced tab panel.</syn-tab-panel>
  <syn-tab-panel name="disabled">This is the disabled tab panel.</syn-tab-panel>
</syn-tab-group>
```

---

## Tabs On End

Tabs can be shown on the ending side by setting placement to end.

```html
<syn-tab-group placement="end">
  <syn-tab slot="nav" panel="general" active="">General</syn-tab>
  <syn-tab slot="nav" panel="custom">Custom</syn-tab>
  <syn-tab slot="nav" panel="advanced">Advanced</syn-tab>
  <syn-tab slot="nav" panel="disabled" disabled="">Disabled</syn-tab>
  <syn-tab-panel name="general" active=""
    >This is the general tab panel.</syn-tab-panel
  >
  <syn-tab-panel name="custom">This is the custom tab panel.</syn-tab-panel>
  <syn-tab-panel name="advanced">This is the advanced tab panel.</syn-tab-panel>
  <syn-tab-panel name="disabled">This is the disabled tab panel.</syn-tab-panel>
</syn-tab-group>
```

---

## Closable Tabs

Add the closable attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html
<syn-tab-group class="tabs-closable">
  <!-- Tabs -->
  <syn-tab slot="nav" panel="general" active="">General</syn-tab
  ><syn-tab slot="nav" panel="closable-1" closable="">Closable 1</syn-tab
  ><syn-tab slot="nav" panel="closable-2" closable="">Closable 2</syn-tab
  ><syn-tab slot="nav" panel="closable-3" closable="">Closable 3</syn-tab>

  <!-- Tab Panels  -->
  <syn-tab-panel name="general" active=""
    >This is the general tab panel.</syn-tab-panel
  ><syn-tab-panel name="closable-1"
    >This is the first closable tab panel.</syn-tab-panel
  ><syn-tab-panel name="closable-2"
    >This is the second closable tab panel.</syn-tab-panel
  ><syn-tab-panel name="closable-3"
    >This is the third closable tab panel.</syn-tab-panel
  >
</syn-tab-group>

<script type="module">
  const tabGroup = document.querySelector(".tabs-closable");
  tabGroup.addEventListener("syn-close", async (event) => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`syn-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

---

## Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html
<syn-tab-group>
  <!-- Tabs -->
  <syn-tab slot="nav" panel="tab-1" active="">Tab 1</syn-tab
  ><syn-tab slot="nav" panel="tab-2">Tab 2</syn-tab
  ><syn-tab slot="nav" panel="tab-3">Tab 3</syn-tab
  ><syn-tab slot="nav" panel="tab-4">Tab 4</syn-tab
  ><syn-tab slot="nav" panel="tab-5">Tab 5</syn-tab
  ><syn-tab slot="nav" panel="tab-6">Tab 6</syn-tab
  ><syn-tab slot="nav" panel="tab-7">Tab 7</syn-tab
  ><syn-tab slot="nav" panel="tab-8">Tab 8</syn-tab
  ><syn-tab slot="nav" panel="tab-9">Tab 9</syn-tab
  ><syn-tab slot="nav" panel="tab-10">Tab 10</syn-tab
  ><syn-tab slot="nav" panel="tab-11">Tab 11</syn-tab
  ><syn-tab slot="nav" panel="tab-12">Tab 12</syn-tab
  ><syn-tab slot="nav" panel="tab-13">Tab 13</syn-tab
  ><syn-tab slot="nav" panel="tab-14">Tab 14</syn-tab
  ><syn-tab slot="nav" panel="tab-15">Tab 15</syn-tab
  ><syn-tab slot="nav" panel="tab-16">Tab 16</syn-tab
  ><syn-tab slot="nav" panel="tab-17">Tab 17</syn-tab
  ><syn-tab slot="nav" panel="tab-18">Tab 18</syn-tab
  ><syn-tab slot="nav" panel="tab-19">Tab 19</syn-tab
  ><syn-tab slot="nav" panel="tab-20">Tab 20</syn-tab>

  <!-- Tab Panels -->
  <syn-tab-panel name="tab-1" active="">Tab panel 1</syn-tab-panel
  ><syn-tab-panel name="tab-2">Tab panel 2</syn-tab-panel
  ><syn-tab-panel name="tab-3">Tab panel 3</syn-tab-panel
  ><syn-tab-panel name="tab-4">Tab panel 4</syn-tab-panel
  ><syn-tab-panel name="tab-5">Tab panel 5</syn-tab-panel
  ><syn-tab-panel name="tab-6">Tab panel 6</syn-tab-panel
  ><syn-tab-panel name="tab-7">Tab panel 7</syn-tab-panel
  ><syn-tab-panel name="tab-8">Tab panel 8</syn-tab-panel
  ><syn-tab-panel name="tab-9">Tab panel 9</syn-tab-panel
  ><syn-tab-panel name="tab-10">Tab panel 10</syn-tab-panel
  ><syn-tab-panel name="tab-11">Tab panel 11</syn-tab-panel
  ><syn-tab-panel name="tab-12">Tab panel 12</syn-tab-panel
  ><syn-tab-panel name="tab-13">Tab panel 13</syn-tab-panel
  ><syn-tab-panel name="tab-14">Tab panel 14</syn-tab-panel
  ><syn-tab-panel name="tab-15">Tab panel 15</syn-tab-panel
  ><syn-tab-panel name="tab-16">Tab panel 16</syn-tab-panel
  ><syn-tab-panel name="tab-17">Tab panel 17</syn-tab-panel
  ><syn-tab-panel name="tab-18">Tab panel 18</syn-tab-panel
  ><syn-tab-panel name="tab-19">Tab panel 19</syn-tab-panel
  ><syn-tab-panel name="tab-20">Tab panel 20</syn-tab-panel>
</syn-tab-group>
```

---

## Visual Hierarchy

To structure the Page, you can use different tab styles.

```html
<h3 class="body-medium">Default</h3>
<syn-tab-group>
  <syn-tab slot="nav" panel="tab-1" active="">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-2">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-3">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-4">Tab item</syn-tab>

  <syn-tab-panel name="tab-1" active="">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-2">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-3">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-4">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>
</syn-tab-group>

<h3 class="body-medium">Contained</h3>
<syn-tab-group contained="">
  <syn-tab slot="nav" panel="tab-1" active="">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-2">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-3">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-4">Tab item</syn-tab>

  <syn-tab-panel name="tab-1" active="">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-2">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-3">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-4">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>
</syn-tab-group>

<h3 class="body-medium">Sharp</h3>
<syn-tab-group contained="" sharp="">
  <syn-tab slot="nav" panel="tab-1" active="">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-2">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-3">Tab item</syn-tab
  ><syn-tab slot="nav" panel="tab-4">Tab item</syn-tab>

  <syn-tab-panel name="tab-1" active="">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-2">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-3">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab-4">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>
</syn-tab-group>

<style>
  .synergy-replace {
    border: 1px dashed #9747ff;
    border-radius: var(--syn-border-radius-small);
    color: #9747ff;
    font: var(--syn-body-small-bold);
    height: var(--syn-spacing-x-large);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body-medium:first-of-type {
    margin-top: 0;
  }

  .body-medium {
    font: var(--syn-body-medium-bold);
    color: var(--syn-color-neutral-1000);
    margin-top: var(--syn-spacing-2x-large);
    margin-bottom: var(--syn-spacing-large);
  }
</style>
```

---

## Manual Activation

When focused, keyboard users can press Left or Right to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting activation="manual" which will require the user to press Space or Enter before showing the tab panel (manual activation).

```html
<syn-tab-group activation="manual">
  <syn-tab slot="nav" panel="general" active="">General</syn-tab>
  <syn-tab slot="nav" panel="custom">Custom</syn-tab>
  <syn-tab slot="nav" panel="advanced">Advanced</syn-tab>
  <syn-tab slot="nav" panel="disabled" disabled="">Disabled</syn-tab>
  <syn-tab-panel name="general" active=""
    >This is the general tab panel.</syn-tab-panel
  >
  <syn-tab-panel name="custom">This is the custom tab panel.</syn-tab-panel>
  <syn-tab-panel name="advanced">This is the advanced tab panel.</syn-tab-panel>
  <syn-tab-panel name="disabled">This is the disabled tab panel.</syn-tab-panel>
</syn-tab-group>
```

---

## Icons

It is also possible to a Add icon to the Tabs.

```html
<syn-tab-group>
  <syn-tab slot="nav" panel="general" active="">
    <syn-icon name="style"></syn-icon>
    General
  </syn-tab>
  <syn-tab slot="nav" panel="custom">
    <syn-icon name="tune"></syn-icon>
    Custom
  </syn-tab>
  <syn-tab slot="nav" panel="advanced">
    <syn-icon name="verified_user"></syn-icon>
    Advanced
  </syn-tab>
  <syn-tab slot="nav" panel="disabled" disabled="">
    <syn-icon name="update_disabled"></syn-icon>
    Disabled
  </syn-tab>
  <syn-tab-panel name="general" active=""
    >This is the general tab panel.</syn-tab-panel
  >
  <syn-tab-panel name="custom">This is the custom tab panel.</syn-tab-panel>
  <syn-tab-panel name="advanced">This is the advanced tab panel.</syn-tab-panel>
  <syn-tab-panel name="disabled">This is the disabled tab panel.</syn-tab-panel>
</syn-tab-group>
```