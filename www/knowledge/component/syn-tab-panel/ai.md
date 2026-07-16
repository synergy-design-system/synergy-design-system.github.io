# syn-tab-panel

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-tab-panel

## Rules

# syn-tab-panel

## Summary

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

## Common Use Cases

- Display section content for settings tabs such as General, Security, and Notifications.
- Show contextual content areas in dashboards without navigating away from the current page.
- Present product details split into overview, specifications, and documentation sections.
- Render user-managed views paired with closable tabs in workspace-like interfaces.

## Usage Guidelines

### Structure and Mapping

- Use tab panels for related content sections that belong to the same workflow or information scope.
- Keep one active panel visible at a time and ensure inactive panels are not presented as primary content areas.
- Pair each panel with a unique name and keep naming consistent with corresponding tab panel attributes.

### Content Design

- Keep panel content focused and scannable; split dense content into subsections or supporting components.
- Use consistent spacing and hierarchy across panels so context switches feel predictable.
- Avoid large layout shifts between panels that can disorient users during navigation.

### Dynamic Content

- Use lazy loading or deferred rendering for heavy panel content when performance is a concern.
- Show clear loading or empty states when panel data is not immediately available.
- Do not remove active panel content without immediately providing a meaningful replacement.

## Accessibility

- Use syn-tab-panel only inside syn-tab-group and ensure each panel name matches exactly one syn-tab panel reference.
- Ensure panel content starts with clear, descriptive structure (for example headings) so users can quickly understand context after switching tabs.
- Avoid placing essential instructions only in inactive panels when users must complete tasks in sequence.
- When panel content updates dynamically, preserve user context and avoid unexpected focus jumps.

## Related Components

- syn-tab
- syn-tab-group

## Interface

# syn-tab-panel

## Summary

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-tab-panel--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42207-340626)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=20730-44681)

## Class Information

- **Tag Name:** `syn-tab-panel`
- **Import Example:** `import SynTabPanel from '@synergy-design-system/components/components/tab-panel/tab-panel.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.1.0

## Available Slots

- `(default)`: The tab panel's content.

## Available Properties

### active

attribute: `active`
reflects: yes
type: `boolean`
default: `false`

When true, the tab panel will be shown.

### name

attribute: `name`
reflects: yes
type: `string`
default: `''`

The tab panel's name.

## Available CSS Parts

- `base`: The component's base wrapper.

## Examples

## Default

Tab panels are used inside tab groups to display tabbed content.

```html
<syn-tab-group>
  <syn-tab slot="nav" panel="tab1">Tab Item</syn-tab>
  <syn-tab slot="nav" panel="tab2">Tab Item</syn-tab>
  <syn-tab slot="nav" panel="tab3">Tab Item</syn-tab>
  <syn-tab slot="nav" panel="tab4">Tab Item</syn-tab>

  <syn-tab-panel name="tab1">
    <main class="synergy-replace">Replace this slot</main>
  </syn-tab-panel>

  <syn-tab-panel name="tab2"
    ><main class="synergy-replace">Replace this slot</main></syn-tab-panel
  >
  <syn-tab-panel name="tab3"
    ><main class="synergy-replace">Replace this slot</main></syn-tab-panel
  >
  <syn-tab-panel name="tab4"
    ><main class="synergy-replace">Replace this slot</main></syn-tab-panel
  >
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
</style>
```