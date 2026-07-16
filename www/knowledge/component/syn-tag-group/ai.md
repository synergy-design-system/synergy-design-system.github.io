# syn-tag-group

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-tag-group

## Rules

# syn-tag-group

## Summary

A tag group is used to display multiple tags that belong together, often representing selected filters, categories, or user‑generated labels.
It arranges tags in flexible rows and supports different sizes and layouts.
Tags can be removable, icon‑based, or purely textual.

## Common Use Cases

- Show currently active filters in search and table views.
- Display selected categories or labels in forms.
- Manage multi-select states with removable tag chips.

## Usage Guidelines

### Grouping Strategy

- Use tag groups for sets of related tags such as active filters or selected labels.
- Keep tags short and consistent to avoid visual noise.
- Use label alignment and group labels to clarify the meaning of the collection.

### Interaction

- Use removable tags when users can directly edit a selection.
- Provide clear feedback when a tag is removed from the group.
- Avoid mixing non-removable and removable semantics without clear distinction.

### Sizing and Layout

- Use group size variants consistently with nearby controls.
- Wrap tags cleanly and preserve readable spacing in narrow layouts.
- Avoid excessive tag counts without offering collapse or summary behavior.

## Accessibility

- Ensure each tag has clear readable text and a meaningful remove action when removable.
- Expose group labeling context when tags represent selected filters or categories.

## Related Components

- syn-tag

## Related Templates

- Tag-Group

## Interface

# syn-tag-group

## Summary

A tag group is used to display multiple tags that belong together, often representing selected filters, categories, or user‑generated labels.
It arranges tags in flexible rows and supports different sizes and layouts.
Tags can be removable, icon‑based, or purely textual.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-tag-group--docs)
- [Figma Examples](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=45275-186668)

## Class Information

- **Tag Name:** `syn-tag-group`
- **Import Example:** `import SynTagGroup from '@synergy-design-system/components/components/tag-group/tag-group.js';`

## Usage Information

- **Status:** stable
- **Since:** 3.7.0

## Available Slots

- `(default)`: The tag group's main content. Must be `<syn-tag />` elements.
- `label`: The tag group's label. Alternatively, you can use the `label` attribute.

## Available Properties

### label

attribute: `label`
reflects: no
type: `string`
default: `''`

The tag group's label. If you need to display HTML, use the `label` slot instead.

### labelPosition

attribute: `label-position`
reflects: yes
type: `'top' | 'start'`
default: `'top'`

Controls the label position. Use 'top' to place the label above the tags, or 'start' to place it to the begin of the tag group.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The size that should be applied to all slotted `<syn-tag>` elements

## Available CSS Parts

- `base`: The component's base wrapper.
- `tag-label`: The tag group's label.

## Examples

## Default

A tag group is used to display multiple tags that belong together, often representing selected filters, categories, or user‑generated labels. It arranges tags in flexible rows and supports different sizes and layouts. Tags can be removable, icon based, or purely textual.

```html
<syn-tag-group>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <span slot="label">This is a label</span>
</syn-tag-group>
```

---

## Labels

Use the label attribute to give the tag-group an accessible label. For labels that contain HTML, use the label slot instead.

```html
<syn-tag-group>
  <div slot="label">This is a label</div>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
</syn-tag-group>
```

---

## Sizes

Use the size attribute to change a tag group’s size.

```html
<div
  style="display: flex; flex-direction: column; gap: var(--syn-spacing-x-large)"
>
  <syn-tag-group size="small" label="Small">
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
  </syn-tag-group>

  <syn-tag-group size="medium" label="Medium">
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
  </syn-tag-group>

  <syn-tag-group size="large" label="Large">
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
    <syn-tag removable="">
      <syn-icon name="wallpaper"></syn-icon>
      Option
    </syn-tag>
  </syn-tag-group>
</div>
```

---

## Label Alignment

Use the label-position attribute to change the position of the label. Use 'top' to place the label above the tags, or 'start' to place it to the begin of the tag group.

```html
<syn-tag-group label="This is a label" label-position="start">
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
  <syn-tag removable="">
    <syn-icon name="wallpaper"></syn-icon>
    Option
  </syn-tag>
</syn-tag-group>
```