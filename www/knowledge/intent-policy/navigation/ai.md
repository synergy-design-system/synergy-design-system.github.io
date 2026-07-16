# Intent Policy: navigation

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Information architecture and movement between sections or datasets.

## Intents
### navigation.link-list.grouped

- Description: Use link-list styles to present grouped navigation links with consistent spacing.
- User goal: Scan and navigate related links quickly in a vertical list.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [style:syn-link-list](/knowledge/style/syn-link-list)

#### Variants
- Target: style:syn-link-list
- Reason: Grouped navigation links using the link-list utility class.
- Default: no

##### vanilla
```html
<ul class="syn-link-list"><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li></ul>
```

##### react-wrapper
```html
<ul class="syn-link-list"><li><a class="syn-link" href="#"><SynIcon name="keyboard_arrow_right"></SynIcon>Link</a></li><li><a class="syn-link" href="#"><SynIcon name="keyboard_arrow_right"></SynIcon>Link</a></li><li><a class="syn-link" href="#"><SynIcon name="keyboard_arrow_right"></SynIcon>Link</a></li><li><a class="syn-link" href="#"><SynIcon name="keyboard_arrow_right"></SynIcon>Link</a></li></ul>
```

##### react-web-components
```html
<ul class="syn-link-list"><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li></ul>
```

##### angular
```html
<ul class="syn-link-list"><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li><li><a class="syn-link" href="#"><syn-icon name="keyboard_arrow_right"></syn-icon>Link</a></li></ul>
```

##### vue
```html
<ul class="syn-link-list"><li><a class="syn-link" href="#"><SynVueIcon name="keyboard_arrow_right"></SynVueIcon>Link</a></li><li><a class="syn-link" href="#"><SynVueIcon name="keyboard_arrow_right"></SynVueIcon>Link</a></li><li><a class="syn-link" href="#"><SynVueIcon name="keyboard_arrow_right"></SynVueIcon>Link</a></li><li><a class="syn-link" href="#"><SynVueIcon name="keyboard_arrow_right"></SynVueIcon>Link</a></li></ul>
```


### navigation.tabs.section

- Description: Use tabs to switch between related content sections in-place.
- User goal: Move between grouped views without leaving the current page.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-tab-group](/knowledge/component/syn-tab-group)
- [component:syn-tab](/knowledge/component/syn-tab)
- [component:syn-tab-panel](/knowledge/component/syn-tab-panel)

#### Variants
- Target: component:syn-tab-group
- Reason: In-page section navigation through related tabs.
- Default: no

##### vanilla
```html
<syn-tab-group>CONTENT</syn-tab-group>
```

##### react-wrapper
```html
<SynTabGroup>CONTENT</SynTabGroup>
```

##### react-web-components
```html
<syn-tab-group>CONTENT</syn-tab-group>
```

##### angular
```html
<syn-tab-group>CONTENT</syn-tab-group>
```

##### vue
```html
<SynVueTabGroup>CONTENT</SynVueTabGroup>
```


- Target: component:syn-tab
- Reason: Single navigable tab item used to activate one related content panel.
- Default: no

##### vanilla
```html
<syn-tab>CONTENT</syn-tab>
```

##### react-wrapper
```html
<SynTab>CONTENT</SynTab>
```

##### react-web-components
```html
<syn-tab>CONTENT</syn-tab>
```

##### angular
```html
<syn-tab>CONTENT</syn-tab>
```

##### vue
```html
<SynVueTab>CONTENT</SynVueTab>
```


- Target: component:syn-tab-panel
- Reason: Content panel associated with one tab in a tab-group navigation flow.
- Default: no

##### vanilla
```html
<syn-tab-panel>CONTENT</syn-tab-panel>
```

##### react-wrapper
```html
<SynTabPanel>CONTENT</SynTabPanel>
```

##### react-web-components
```html
<syn-tab-panel>CONTENT</syn-tab-panel>
```

##### angular
```html
<syn-tab-panel>CONTENT</syn-tab-panel>
```

##### vue
```html
<SynVueTabPanel>CONTENT</SynVueTabPanel>
```


### navigation.menu.actions

- Description: Use menus to provide grouped actions or destinations.
- User goal: Access frequently used commands through a structured action list.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-menu](/knowledge/component/syn-menu)
- [component:syn-menu-item](/knowledge/component/syn-menu-item)
- [component:syn-menu-label](/knowledge/component/syn-menu-label)

#### Variants
- Target: component:syn-menu
- Reason: Action-oriented menu with logical grouping and keyboard access.
- Default: no

##### vanilla
```html
<syn-menu>CONTENT</syn-menu>
```

##### react-wrapper
```html
<SynMenu>CONTENT</SynMenu>
```

##### react-web-components
```html
<syn-menu>CONTENT</syn-menu>
```

##### angular
```html
<syn-menu>CONTENT</syn-menu>
```

##### vue
```html
<SynVueMenu>CONTENT</SynVueMenu>
```


- Target: component:syn-menu-item
- Reason: Selectable action or destination entry inside a menu.
- Default: no

##### vanilla
```html
<syn-menu-item>CONTENT</syn-menu-item>
```

##### react-wrapper
```html
<SynMenuItem>CONTENT</SynMenuItem>
```

##### react-web-components
```html
<syn-menu-item>CONTENT</syn-menu-item>
```

##### angular
```html
<syn-menu-item>CONTENT</syn-menu-item>
```

##### vue
```html
<SynVueMenuItem>CONTENT</SynVueMenuItem>
```


- Target: component:syn-menu-label
- Reason: Non-interactive grouping label used to organize related menu items.
- Default: no

##### vanilla
```html
<syn-menu-label>CONTENT</syn-menu-label>
```

##### react-wrapper
```html
<SynMenuLabel>CONTENT</SynMenuLabel>
```

##### react-web-components
```html
<syn-menu-label>CONTENT</syn-menu-label>
```

##### angular
```html
<syn-menu-label>CONTENT</syn-menu-label>
```

##### vue
```html
<SynVueMenuLabel>CONTENT</SynVueMenuLabel>
```


### navigation.pagination.dataset

- Description: Use pagination controls for large datasets split across pages.
- User goal: Navigate through bounded result sets efficiently.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-pagination](/knowledge/component/syn-pagination)

#### Variants
- Target: component:syn-pagination
- Reason: Dataset paging controls for large result sets.
- Default: no

##### vanilla
```html
<syn-pagination>CONTENT</syn-pagination>
```

##### react-wrapper
```html
<SynPagination>CONTENT</SynPagination>
```

##### react-web-components
```html
<syn-pagination>CONTENT</syn-pagination>
```

##### angular
```html
<syn-pagination>CONTENT</syn-pagination>
```

##### vue
```html
<SynVuePagination>CONTENT</SynVuePagination>
```


### navigation.dropdown.compact-options

- Description: Use dropdowns to reveal compact, related options from a trigger.
- User goal: Access secondary options while preserving layout space.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-dropdown](/knowledge/component/syn-dropdown)

#### Variants
- Target: component:syn-dropdown
- Reason: Compact trigger-based reveal of related options or destinations.
- Default: no

##### vanilla
```html
<syn-dropdown>CONTENT</syn-dropdown>
```

##### react-wrapper
```html
<SynDropdown>CONTENT</SynDropdown>
```

##### react-web-components
```html
<syn-dropdown>CONTENT</syn-dropdown>
```

##### angular
```html
<syn-dropdown>CONTENT</syn-dropdown>
```

##### vue
```html
<SynVueDropdown>CONTENT</SynVueDropdown>
```


### navigation.breadcrumb.trail

- Description: Use breadcrumb trails to show hierarchy and support quick backtracking.
- User goal: Understand current location and navigate to ancestor levels quickly.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-breadcrumb](/knowledge/component/syn-breadcrumb)
- [component:syn-breadcrumb-item](/knowledge/component/syn-breadcrumb-item)

#### Variants
- Target: component:syn-breadcrumb
- Reason: Hierarchy-aware breadcrumb trail for location and backtracking.
- Default: no

##### vanilla
```html
<syn-breadcrumb>CONTENT</syn-breadcrumb>
```

##### react-wrapper
```html
<SynBreadcrumb>CONTENT</SynBreadcrumb>
```

##### react-web-components
```html
<syn-breadcrumb>CONTENT</syn-breadcrumb>
```

##### angular
```html
<syn-breadcrumb>CONTENT</syn-breadcrumb>
```

##### vue
```html
<SynVueBreadcrumb>CONTENT</SynVueBreadcrumb>
```


- Target: component:syn-breadcrumb-item
- Reason: Breadcrumb item representing one navigable hierarchy level.
- Default: no

##### vanilla
```html
<syn-breadcrumb-item>CONTENT</syn-breadcrumb-item>
```

##### react-wrapper
```html
<SynBreadcrumbItem>CONTENT</SynBreadcrumbItem>
```

##### react-web-components
```html
<syn-breadcrumb-item>CONTENT</syn-breadcrumb-item>
```

##### angular
```html
<syn-breadcrumb-item>CONTENT</syn-breadcrumb-item>
```

##### vue
```html
<SynVueBreadcrumbItem>CONTENT</SynVueBreadcrumbItem>
```


### navigation.sidenav.menu

- Description: Use side navigation to expose primary navigation sections in vertical layouts.
- User goal: Move between major sections in an app shell efficiently.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-side-nav](/knowledge/component/syn-side-nav)
- [component:syn-nav-item](/knowledge/component/syn-nav-item)

#### Variants
- Target: component:syn-side-nav
- Reason: Primary vertical navigation for app shell section switching.
- Default: no

##### vanilla
```html
<syn-side-nav>CONTENT</syn-side-nav>
```

##### react-wrapper
```html
<SynSideNav>CONTENT</SynSideNav>
```

##### react-web-components
```html
<syn-side-nav>CONTENT</syn-side-nav>
```

##### angular
```html
<syn-side-nav>CONTENT</syn-side-nav>
```

##### vue
```html
<SynVueSideNav>CONTENT</SynVueSideNav>
```


- Target: component:syn-nav-item
- Reason: Single destination entry within side navigation structures.
- Default: no

##### vanilla
```html
<syn-nav-item>CONTENT</syn-nav-item>
```

##### react-wrapper
```html
<SynNavItem>CONTENT</SynNavItem>
```

##### react-web-components
```html
<syn-nav-item>CONTENT</syn-nav-item>
```

##### angular
```html
<syn-nav-item>CONTENT</syn-nav-item>
```

##### vue
```html
<SynVueNavItem>CONTENT</SynVueNavItem>
```


### navigation.prio.menu

- Description: Use priority navigation bars to expose primary destinations and automatically overflow secondary items.
- User goal: Reach high-priority destinations quickly while keeping overflow destinations accessible.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-prio-nav](/knowledge/component/syn-prio-nav)
- [component:syn-nav-item](/knowledge/component/syn-nav-item)

#### Variants
- Target: component:syn-prio-nav
- Reason: Priority navigation bar placed in the header navigation slot to keep key destinations visible while overflowing secondary entries.
- Default: no

##### vanilla
```html
<syn-header><syn-prio-nav slot="navigation"></syn-prio-nav></syn-header>
```

##### react-wrapper
```html
<SynHeader><SynPrioNav slot="navigation"></SynPrioNav></SynHeader>
```

##### react-web-components
```html
<syn-header><syn-prio-nav slot="navigation"></syn-prio-nav></syn-header>
```

##### angular
```html
<syn-header><syn-prio-nav slot="navigation"></syn-prio-nav></syn-header>
```

##### vue
```html
<SynVueHeader><SynVuePrioNav slot="navigation"></SynVuePrioNav></SynVueHeader>
```


- Target: component:syn-nav-item
- Reason: Priority navigation entry within a responsive overflow-capable navigation bar.
- Default: no

##### vanilla
```html
<syn-nav-item>CONTENT</syn-nav-item>
```

##### react-wrapper
```html
<SynNavItem>CONTENT</SynNavItem>
```

##### react-web-components
```html
<syn-nav-item>CONTENT</syn-nav-item>
```

##### angular
```html
<syn-nav-item>CONTENT</syn-nav-item>
```

##### vue
```html
<SynVueNavItem>CONTENT</SynVueNavItem>
```

