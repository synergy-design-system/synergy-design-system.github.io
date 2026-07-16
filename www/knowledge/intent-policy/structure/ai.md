# Intent Policy: structure

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Structural interaction intent requiring composition, slots, and semantic roles.

## Intents
### structure.confirmation

- Description: Use when confirming a risky or destructive operation in a dialog.
- User goal: Require clear user confirmation before executing a destructive action.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-dialog](/knowledge/component/syn-dialog)

#### Variants
- Target: component:syn-dialog
- Reason: Confirmation dialog with explicit cancel and destructive actions in footer slot.
- Default: no

##### vanilla
```html
<syn-dialog open><nav slot="footer"><syn-button variant="text"></syn-button><syn-button variant="filled"></syn-button></nav></syn-dialog>
```

##### react-wrapper
```html
<SynDialog open={true}><nav slot="footer"><SynButton variant="text"></SynButton><SynButton variant="filled"></SynButton></nav></SynDialog>
```

##### react-web-components
```html
<syn-dialog open><nav slot="footer"><syn-button variant="text"></syn-button><syn-button variant="filled"></syn-button></nav></syn-dialog>
```

##### angular
```html
<syn-dialog open><nav slot="footer"><syn-button variant="text"></syn-button><syn-button variant="filled"></syn-button></nav></syn-dialog>
```

##### vue
```html
<SynVueDialog open><nav slot="footer"><SynVueButton variant="text"></SynVueButton><SynVueButton variant="filled"></SynVueButton></nav></SynVueDialog>
```


### structure.drawer.overlay

- Description: Use drawers to reveal supplemental panels from an edge overlay.
- User goal: Present secondary workflows without leaving the current context.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-drawer](/knowledge/component/syn-drawer)

#### Variants
- Target: component:syn-drawer
- Reason: Edge-aligned drawer overlay for secondary contextual workflows.
- Default: no

##### vanilla
```html
<syn-drawer>CONTENT</syn-drawer>
```

##### react-wrapper
```html
<SynDrawer>CONTENT</SynDrawer>
```

##### react-web-components
```html
<syn-drawer>CONTENT</syn-drawer>
```

##### angular
```html
<syn-drawer>CONTENT</syn-drawer>
```

##### vue
```html
<SynVueDrawer>CONTENT</SynVueDrawer>
```


### structure.header.shell

- Description: Use headers to establish a consistent top-level page shell structure.
- User goal: Provide a consistent frame for branding, navigation, and meta actions.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-header](/knowledge/component/syn-header)

#### Variants
- Target: component:syn-header
- Reason: Top-level header shell structure for branding and navigation regions.
- Default: no

##### vanilla
```html
<syn-header>CONTENT</syn-header>
```

##### react-wrapper
```html
<SynHeader>CONTENT</SynHeader>
```

##### react-web-components
```html
<syn-header>CONTENT</syn-header>
```

##### angular
```html
<syn-header>CONTENT</syn-header>
```

##### vue
```html
<SynVueHeader>CONTENT</SynVueHeader>
```


### structure.content.container

- Description: Use card containers to group related content into a bounded section.
- User goal: Improve scannability by grouping related information and actions.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-card](/knowledge/component/syn-card)

#### Variants
- Target: component:syn-card
- Reason: Card container grouping related content and supporting actions.
- Default: no

##### vanilla
```html
<syn-card>CONTENT</syn-card>
```

##### react-wrapper
```html
<SynCard>CONTENT</SynCard>
```

##### react-web-components
```html
<syn-card>CONTENT</syn-card>
```

##### angular
```html
<syn-card>CONTENT</syn-card>
```

##### vue
```html
<SynVueCard>CONTENT</SynVueCard>
```


### structure.content.separator

- Description: Use dividers to separate adjacent sections and improve visual hierarchy.
- User goal: Clarify boundaries between groups of content.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-divider](/knowledge/component/syn-divider)

#### Variants
- Target: component:syn-divider
- Reason: Visual separator between adjacent blocks of related content.
- Default: no

##### vanilla
```html
<syn-divider>CONTENT</syn-divider>
```

##### react-wrapper
```html
<SynDivider>CONTENT</SynDivider>
```

##### react-web-components
```html
<syn-divider>CONTENT</syn-divider>
```

##### angular
```html
<syn-divider>CONTENT</syn-divider>
```

##### vue
```html
<SynVueDivider>CONTENT</SynVueDivider>
```

