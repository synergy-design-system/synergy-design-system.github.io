# Intent Policy: feedback

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Contextual user feedback such as inline or toast notifications.

## Intents
### feedback.inline

- Description: Use when contextual feedback should remain near the affected content.
- User goal: Explain outcome directly in the current workflow context.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Inline alert for contextual feedback near related content.
- Default: no

##### vanilla
```html
<syn-alert duration="0" variant="warning">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="0" variant="warning">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="0" variant="warning">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="0" variant="warning">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="0" variant="warning">CONTENT</SynVueAlert>
```


### feedback.toast

- Description: Use when a short, non-blocking overlay notification is sufficient.
- User goal: Acknowledge an event without interrupting the current task.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Toast alert for brief, non-blocking status acknowledgement.
- Default: no

##### vanilla
```html
<syn-alert duration="4000" variant="success">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="4000" variant="success">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="4000" variant="success">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="4000" variant="success">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="4000" variant="success">CONTENT</SynVueAlert>
```


### feedback.badge.status

- Description: Use badges to communicate compact status or count information inline.
- User goal: Expose concise status signals without interrupting surrounding content.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-badge](/knowledge/component/syn-badge)

#### Variants
- Target: component:syn-badge
- Reason: Compact status or count feedback using badge visuals.
- Default: no

##### vanilla
```html
<syn-badge>CONTENT</syn-badge>
```

##### react-wrapper
```html
<SynBadge>CONTENT</SynBadge>
```

##### react-web-components
```html
<syn-badge>CONTENT</syn-badge>
```

##### angular
```html
<syn-badge>CONTENT</syn-badge>
```

##### vue
```html
<SynVueBadge>CONTENT</SynVueBadge>
```


### feedback.tag.label

- Description: Use tag labels to communicate categorization or state in compact form.
- User goal: Help users identify and scan categories or states quickly.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-tag](/knowledge/component/syn-tag)
- [component:syn-tag-group](/knowledge/component/syn-tag-group)

#### Variants
- Target: component:syn-tag
- Reason: Compact categorical or state labeling using tags.
- Default: no

##### vanilla
```html
<syn-tag>CONTENT</syn-tag>
```

##### react-wrapper
```html
<SynTag>CONTENT</SynTag>
```

##### react-web-components
```html
<syn-tag>CONTENT</syn-tag>
```

##### angular
```html
<syn-tag>CONTENT</syn-tag>
```

##### vue
```html
<SynVueTag>CONTENT</SynVueTag>
```


- Target: component:syn-tag-group
- Reason: Grouped tags for concise display of multiple labels or states.
- Default: no

##### vanilla
```html
<syn-tag-group>CONTENT</syn-tag-group>
```

##### react-wrapper
```html
<SynTagGroup>CONTENT</SynTagGroup>
```

##### react-web-components
```html
<syn-tag-group>CONTENT</syn-tag-group>
```

##### angular
```html
<syn-tag-group>CONTENT</syn-tag-group>
```

##### vue
```html
<SynVueTagGroup>CONTENT</SynVueTagGroup>
```


### feedback.validation.generic

- Description: Use generic validation feedback to explain invalid or missing input.
- User goal: Guide users to correct invalid form input with clear feedback.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-validate](/knowledge/component/syn-validate)

#### Variants
- Target: component:syn-validate
- Reason: Generic validation feedback for incorrect or missing user input.
- Default: no

##### vanilla
```html
<syn-validate>CONTENT</syn-validate>
```

##### react-wrapper
```html
<SynValidate>CONTENT</SynValidate>
```

##### react-web-components
```html
<syn-validate>CONTENT</syn-validate>
```

##### angular
```html
<syn-validate>CONTENT</syn-validate>
```

##### vue
```html
<SynVueValidate>CONTENT</SynVueValidate>
```

