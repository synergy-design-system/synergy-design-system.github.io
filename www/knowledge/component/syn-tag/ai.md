# syn-tag

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-tag

## Rules

# syn-tag

## Summary

Tags are used as labels to organize things or to indicate a selection.

## Common Use Cases

- Label and categorize items to help users filter and find relevant content.
- Highlight important keywords or attributes associated with an item.
- Allow users to filter content dynamically by clicking on tags.
- Display topics or categories associated with an article, post or product.

## Usage Guidelines

### Behavior

- Use the "removable" attribute to include a small close "x" button next to the label.
- Avoid using a standalone, non-removable tag, as its selected/unselected state could be unclear. Apply the "removable" attribute for those cases.

### Labels

- Try to keep a similar text length for all labels, and specially avoid excessively long ones. If necessary, truncate the label and show the full text in a tooltip on hover.
- Don't use tags to indicate the status of a task, use syn-status-badge instead.

## Accessibility

- Ensure each tag has a short, meaningful text label that can be understood without visual context alone.
- For removable tags, ensure the remove action is clearly announced by assistive technologies and communicates which tag will be removed.
- Provide visible focus indication for any interactive tag or remove control and keep focus order consistent with surrounding controls.
- When tags are presented as a set (for example, active filters), provide group context with a clear label via syn-tag-group or an equivalent labeled container.
- After a tag is removed, move focus predictably to a logical next element and provide feedback about the updated state when relevant.

## Related Components

- syn-tag-group

## Related Templates

- Tag Group

## Interface

# syn-tag

## Summary

Tags are used as labels to organize things or to indicate a selection.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-tag--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=41163-156701)
- [Figma Component](https://www.figma.com/design/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?node-id=2842-16750)

## Class Information

- **Tag Name:** `syn-tag`
- **Import Example:** `import SynTag from '@synergy-design-system/components/components/tag/tag.js';`

## Usage Information

- **Status:** stable
- **Since:** 1.2.0

## Available Slots

- `(default)`: The tag's content.

## Available Properties

### removable

attribute: `removable`
reflects: no
type: `boolean`
default: `false`

Makes the tag removable and shows a remove button.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The tag's size.

## Available CSS Parts

- `base`: The component's base wrapper.
- `content`: The tag's content.
- `remove-button`: The tag's remove button, an `<syn-icon-button>`.
- `remove-button__base`: The remove button's exported `base` part.

## Available Events

### syn-remove

type: `SynRemoveEvent`

Emitted when the remove button is activated.

## Dependencies

- `syn-icon-button`

## Examples

## Default

Tags are used as labels to organize things or to indicate a selection.

```html
<syn-tag> Option </syn-tag>
```

---

## With Icon

```html
<syn-tag>
  <syn-icon name="wallpaper"></syn-icon>
  Option
</syn-tag>
```

---

## Removable

Use the removable attribute to add a remove button to the tag.

```html
<div class="tags-removable">
  <syn-tag size="small" removable="">Small</syn-tag>
  <syn-tag size="medium" removable="">Medium</syn-tag>
  <syn-tag size="large" removable="">Large</syn-tag>
</div>

<script type="module">
  const div = document.querySelector(".tags-removable");

  div.addEventListener("syn-remove", (event) => {
    const tag = event.target;
    tag.style.opacity = "0";
    setTimeout(() => (tag.style.opacity = "1"), 2000);
  });
</script>

<style>
  .tags-removable syn-tag {
    transition: var(--syn-transition-medium) opacity;
  }
</style>
```

---

## Sizes

Use the size attribute to change a tab’s size.

```html
<syn-tag size="small">Small</syn-tag>
<syn-tag size="medium">Medium</syn-tag>
<syn-tag size="large">Large</syn-tag>
```