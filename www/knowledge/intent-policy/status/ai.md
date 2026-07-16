# Intent Policy: status

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Transient loading and processing indicators.

## Intents
### status.loading.section

- Description: Use loading indicators inside a specific region while content is fetched.
- User goal: Communicate in-progress loading without blocking the full interface.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-spinner](/knowledge/component/syn-spinner)

#### Variants
- Target: component:syn-spinner
- Reason: Section-local loading indicator while content is fetched.
- Default: no

##### vanilla
```html
<syn-spinner size="medium">CONTENT</syn-spinner>
```

##### react-wrapper
```html
<SynSpinner size="medium">CONTENT</SynSpinner>
```

##### react-web-components
```html
<syn-spinner size="medium">CONTENT</syn-spinner>
```

##### angular
```html
<syn-spinner size="medium">CONTENT</syn-spinner>
```

##### vue
```html
<SynVueSpinner size="medium">CONTENT</SynVueSpinner>
```


### status.loading.action

- Description: Use loading indicators inside actions while a command is processing.
- User goal: Signal ongoing processing for a submitted user action.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-spinner](/knowledge/component/syn-spinner)

#### Variants
- Target: component:syn-spinner
- Reason: Inline processing indicator inside an action flow.
- Default: no

##### vanilla
```html
<syn-spinner size="small">CONTENT</syn-spinner>
```

##### react-wrapper
```html
<SynSpinner size="small">CONTENT</SynSpinner>
```

##### react-web-components
```html
<syn-spinner size="small">CONTENT</syn-spinner>
```

##### angular
```html
<syn-spinner size="small">CONTENT</syn-spinner>
```

##### vue
```html
<SynVueSpinner size="small">CONTENT</SynVueSpinner>
```


### status.progress.linear

- Description: Use linear progress bars to communicate determinate progress in workflows.
- User goal: Show measurable progress toward completion over time.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-progress-bar](/knowledge/component/syn-progress-bar)

#### Variants
- Target: component:syn-progress-bar
- Reason: Determinate linear progress indicator for measurable workflow completion.
- Default: no

##### vanilla
```html
<syn-progress-bar>CONTENT</syn-progress-bar>
```

##### react-wrapper
```html
<SynProgressBar>CONTENT</SynProgressBar>
```

##### react-web-components
```html
<syn-progress-bar>CONTENT</syn-progress-bar>
```

##### angular
```html
<syn-progress-bar>CONTENT</syn-progress-bar>
```

##### vue
```html
<SynVueProgressBar>CONTENT</SynVueProgressBar>
```


### status.progress.circular

- Description: Use circular progress rings for compact determinate progress indicators.
- User goal: Show measurable progress in compact UI regions.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-progress-ring](/knowledge/component/syn-progress-ring)

#### Variants
- Target: component:syn-progress-ring
- Reason: Determinate circular progress indicator for compact progress displays.
- Default: no

##### vanilla
```html
<syn-progress-ring>CONTENT</syn-progress-ring>
```

##### react-wrapper
```html
<SynProgressRing>CONTENT</SynProgressRing>
```

##### react-web-components
```html
<syn-progress-ring>CONTENT</syn-progress-ring>
```

##### angular
```html
<syn-progress-ring>CONTENT</syn-progress-ring>
```

##### vue
```html
<SynVueProgressRing>CONTENT</SynVueProgressRing>
```

