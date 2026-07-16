# syn-tab

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-tab

## Rules

# syn-tab

## Summary

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

## Common Use Cases

- Switch between related settings categories within a single page.
- Organize product detail content such as overview, specifications, and resources.
- Provide document-style workspaces with optional closable tabs for temporary views.
- Separate dashboard subviews without full page navigation.

## Usage Guidelines

### Structure and Mapping

- Use tabs to switch between related sections within the same context, not for unrelated destinations.
- Keep one tab active at all times and align each tab panel value with a corresponding tab-panel name.
- Prefer short labels (one to three words) and avoid wrapping labels to multiple lines where possible.

### Interaction Model

- Use default activation for faster navigation when content updates are lightweight.
- Use manual activation when panel content is heavy, expensive to load, or likely to cause disorientation during arrow-key navigation.
- Avoid adding too many tabs in one row; if overflow is common, verify scrolling tabs remain understandable and easy to navigate.

### Closable Tabs

- Use closable tabs only when users create temporary or user-managed views (for example document tabs).
- When closing tabs, also remove or update the related panel and immediately show a logical fallback tab.
- Do not use closable tabs for essential navigation where accidental removal would block user progress.

## Accessibility

- Use syn-tab only inside syn-tab-group together with matching syn-tab-panel elements to preserve correct tab and tabpanel semantics.
- Ensure every tab has a concise, unique label so users can identify sections quickly with both visual and assistive technologies.
- Use disabled tabs only when users are informed why content is unavailable, and avoid disabling tabs that are required to complete core tasks.
- When tabs are closable, ensure closing a tab moves focus predictably to the next logical tab and keeps users oriented in the updated set.

## Related Components

- syn-tab-group
- syn-tab-panel

## Interface

# syn-tab

## Summary

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-tab--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=42207-338162)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=20730-47184)

## Class Information

- **Tag Name:** `syn-tab`
- **Import Example:** `import SynTab from '@synergy-design-system/components/components/tab/tab.js';`

## Usage Information

- **Status:** stable
- **Since:** 2.1.0

## Available Slots

- `(default)`: The tab's label.

## Available Properties

### active

attribute: `active`
reflects: yes
type: `boolean`
default: `false`

Draws the tab in an active state.

### closable

attribute: `closable`
reflects: yes
type: `boolean`
default: `false`

Makes the tab closable and shows a close button.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

Disables the tab and prevents selection.

### panel

attribute: `panel`
reflects: yes
type: `string`
default: `''`

The name of the tab panel this tab is associated with. The panel must be located in the same tab group.

## Available CSS Parts

- `base`: The component's base wrapper.
- `close-button`: The close button, an `<syn-icon-button>`.
- `close-button__base`: The close button's exported `base` part.

## Available Events

### syn-close

type: `SynCloseEvent`

Emitted when the tab is closable and the close button is activated.

## Dependencies

- `syn-icon-button`

## Examples

## Default

Tabs are used inside tab groups to represent and activate tab panels.

```html
<syn-tab> Tab </syn-tab>

<syn-tab active="">Active</syn-tab>
<syn-tab closable="">Closable</syn-tab>
<syn-tab disabled="">Disabled</syn-tab>
```