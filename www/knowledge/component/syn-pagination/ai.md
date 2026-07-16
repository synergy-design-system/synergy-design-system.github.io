# syn-pagination

This page is assembled from the component metadata package layer files.

Human-facing HTML page: /knowledge/component/syn-pagination

## Rules

# syn-pagination

## Summary

<syn-pagination /> provides page navigation, direct page input, and page-size selection for large data sets.

## Common Use Cases

- Navigate through table records across pages.
- Paginate long result lists in search and catalog pages.
- Control page size in data heavy admin views.

## Usage Guidelines

### Navigation

- Use pagination for large datasets where loading all records at once is not practical.
- Keep page size options meaningful for the context, such as 10, 25, and 50.
- Show current page and total pages so users understand position.

### Compact and Size Variants

- Use compact mode when horizontal space is limited.
- Use size variants consistently with nearby form controls.
- Avoid changing pagination density between sibling views without reason.

### Behavior

- Preserve current page when filters and sorting stay compatible with the dataset.
- Reset to page one when filter changes invalidate the current page.
- Disable controls only when navigation is not possible, such as first or last page boundaries.

## Accessibility

- Provide clear labels for pagination controls and page size selectors.
- Ensure keyboard users can reach and operate next, previous, and direct page input.
- Announce page changes and invalid page input clearly.

## Related Components

- syn-select
- syn-input

## Interface

# syn-pagination

## Summary

<syn-pagination /> provides page navigation, direct page input, and page-size selection for large data sets.

## Documentation

- [Component Documentation](https://synergy-design-system.github.io/?path=/docs/components-syn-pagination--docs)

## Class Information

- **Tag Name:** `syn-pagination`
- **Import Example:** `import SynPagination from '@synergy-design-system/components/components/pagination/pagination.js';`

## Usage Information

- **Status:** stable
- **Since:** 3.12.0

## Available Properties

### ariaLabel

attribute: `aria-label`
reflects: no
type: `string`
default: `'Pagination'`

An accessible label for the navigation landmark. Customize for multiple paginations on a page.

### currentPage

attribute: `current-page`
reflects: yes
type: `number`
default: `1`

The current page number. The default value is 1.
The component will emit a `syn-pagination-page-changed` event whenever the page changes, allowing you to respond to page changes in your application.

### disabled

attribute: `disabled`
reflects: yes
type: `boolean`
default: `false`

When true, the pagination controls are disabled and non-interactive.

### divider

attribute: `divider`
reflects: no
type: `boolean`
default: `false`

When true, a divider is displayed at the top of the pagination component.

### pageSize

attribute: `page-size`
reflects: yes
type: `number`
default: `25`

The number of items to display per page. The default value is 25.
The component will emit a `syn-pagination-page-size-changed` event whenever the page size changes, allowing you to respond to page size changes in your application.

### pageSizeOptions

attribute: `page-size-options`
reflects: no
type: `number[]`
default: `[10, 25, 50, 100]`

An array of numbers representing the available options for the number of items to display per page. The default value is [10, 25, 50, 100].
The component will use this array to populate the rows-per-page selector, allowing users to choose from the specified options.

### size

attribute: `size`
reflects: yes
type: `'small' | 'medium' | 'large'`
default: `'medium'`

The size of the pagination controls.

### totalItems

attribute: `total-items`
reflects: yes
type: `number`
default: `0`

Total amount of items. The component will use this value to calculate the total number of pages based on the selected rows per page.

### variant

attribute: `variant`
reflects: yes
type: `'full' | 'compact'`
default: `'full'`

The pagination variant to use. The "full" variant includes comprehensive controls for navigating between pages and adjusting the number of displayed rows,
while the "compact" variant offers a streamlined interface with essential navigation controls.
The default value is "full".

## Available CSS Parts

- `base`: The component's base wrapper.
- `divider`: The divider element displayed at the top of the pagination component.
- `navigation`: The pagination navigation element.
- `navigation-action`: The individual navigation action buttons (first, previous, next, last).
- `page-input`: The page number input element.
- `page-input-section`: The section containing the page number input and total pages display.
- `page-item-summary`: The text element displaying the current page item range and total items.
- `page-size-select`: The page size select element.
- `page-size-select-wrapper`: The wrapper element containing the page size select and page item summary.

## Available Events

### syn-pagination-page-changed

type: `SynPaginationPageChangedEvent`

Emitted when the current page changes

### syn-pagination-page-size-changed

type: `SynPaginationPageSizeChangedEvent`

Emitted when the page size changes

## Examples

## Default

The default pagination offers the most comprehensive controls and is optimized for tables, lists, and complex data views. It is intended for use cases where users need to adjust both the number of displayed rows and the active page. The navigation controls allow switching between pages as well as jumping directly to the first or last page.

```html
<syn-pagination
  current-page="1"
  page-size="25"
  page-size-options="10, 25, 50, 100"
  total-items="500"
></syn-pagination>
```

---

## With Divider

An optional divider can be shown to provide visual separation depending on the layout needs.

```html
<syn-pagination
  divider=""
  current-page="2"
  page-size="25"
  total-items="500"
></syn-pagination>
```

---

## Disabled

Use the disabled attribute to disable all interactive elements like syn-select, syn-input, and the previous and next syn-icon-buttons. This can be useful if you want to prevent the user from entering something again immediately after an entry before the first entry has been processed.

```html
<syn-pagination
  disabled=""
  current-page="1"
  page-size="25"
  total-items="500"
></syn-pagination>
```

---

## Compact

The compact variant focuses on essential pagination controls and fits tight layouts or mobile environments. Use this variant when space is limited or page size stays fixed.

```html
<syn-pagination
  variant="compact"
  current-page="1"
  page-size="25"
  total-items="500"
></syn-pagination>
```

---

## Sizes

Use the size attribute to change the pagination size.

```html
<div
  style="
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-2x-large);
  "
>
  <syn-pagination
    current-page="1"
    page-size="25"
    total-items="500"
    size="small"
  ></syn-pagination>
  <syn-pagination
    current-page="1"
    page-size="25"
    total-items="500"
    size="medium"
  ></syn-pagination>
  <syn-pagination
    current-page="1"
    page-size="25"
    total-items="500"
    size="large"
  ></syn-pagination>
</div>
```