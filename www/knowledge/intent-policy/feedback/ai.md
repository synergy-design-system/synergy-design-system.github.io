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


### feedback.error.inline

- Description: Use when an error or failure occurred and needs inline correction.
- User goal: Communicate validation failures or application errors at the point of failure.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Inline alert for communicating application or validation errors.
- Default: no

##### vanilla
```html
<syn-alert duration="0" variant="error">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="0" variant="error">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="0" variant="error">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="0" variant="error">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="0" variant="error">CONTENT</SynVueAlert>
```


### feedback.critical.inline

- Description: Use when a system-critical issue requires immediate user attention.
- User goal: Alert users to urgent system states that demand immediate acknowledgment.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Inline alert for critical system states requiring immediate attention.
- Default: no

##### vanilla
```html
<syn-alert duration="0" variant="critical">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="0" variant="critical">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="0" variant="critical">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="0" variant="critical">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="0" variant="critical">CONTENT</SynVueAlert>
```


### feedback.warning.inline

- Description: Use when a warning or caution is relevant to the current context.
- User goal: Inform users of potential issues or actions requiring attention.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Inline alert for warnings or cautions requiring user attention.
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


### feedback.success.inline

- Description: Use when a success or positive outcome should remain near the affected content.
- User goal: Confirm positive outcomes in context with clear visual affirmation.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Inline alert for positive outcomes or successful operations.
- Default: no

##### vanilla
```html
<syn-alert duration="0" variant="success">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="0" variant="success">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="0" variant="success">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="0" variant="success">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="0" variant="success">CONTENT</SynVueAlert>
```


### feedback.error.toast

- Description: Use when an error occurred and needs brief overlay notification.
- User goal: Notify users of errors without interrupting the current task.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Toast alert for brief error notifications.
- Default: no

##### vanilla
```html
<syn-alert duration="4000" variant="error">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="4000" variant="error">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="4000" variant="error">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="4000" variant="error">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="4000" variant="error">CONTENT</SynVueAlert>
```


### feedback.critical.toast

- Description: Use when a system-critical alert requires brief overlay notification.
- User goal: Alert users to urgent system states in a non-blocking manner.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Toast alert for critical system state notifications.
- Default: no

##### vanilla
```html
<syn-alert duration="4000" variant="critical">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="4000" variant="critical">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="4000" variant="critical">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="4000" variant="critical">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="4000" variant="critical">CONTENT</SynVueAlert>
```


### feedback.warning.toast

- Description: Use when a warning should be communicated as a brief overlay notification.
- User goal: Inform users of cautions in a non-blocking overlay.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Toast alert for warning notifications.
- Default: no

##### vanilla
```html
<syn-alert duration="4000" variant="warning">CONTENT</syn-alert>
```

##### react-wrapper
```html
<SynAlert duration="4000" variant="warning">CONTENT</SynAlert>
```

##### react-web-components
```html
<syn-alert duration="4000" variant="warning">CONTENT</syn-alert>
```

##### angular
```html
<syn-alert duration="4000" variant="warning">CONTENT</syn-alert>
```

##### vue
```html
<SynVueAlert duration="4000" variant="warning">CONTENT</SynVueAlert>
```


### feedback.success.toast

- Description: Use when a success message should be communicated as a brief overlay notification.
- User goal: Confirm positive outcomes in a brief, non-blocking notification.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-alert](/knowledge/component/syn-alert)

#### Variants
- Target: component:syn-alert
- Reason: Toast alert for success notifications.
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


### feedback.badge.success

- Description: Use badges to communicate compact positive or completed states inline.
- User goal: Expose concise success states without interrupting surrounding content.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-badge](/knowledge/component/syn-badge)

#### Variants
- Target: component:syn-badge
- Reason: Compact badge for positive or completed states.
- Default: no

##### vanilla
```html
<syn-badge variant="success">CONTENT</syn-badge>
```

##### react-wrapper
```html
<SynBadge variant="success">CONTENT</SynBadge>
```

##### react-web-components
```html
<syn-badge variant="success">CONTENT</syn-badge>
```

##### angular
```html
<syn-badge variant="success">CONTENT</syn-badge>
```

##### vue
```html
<SynVueBadge variant="success">CONTENT</SynVueBadge>
```


### feedback.badge.warning

- Description: Use badges to communicate compact cautionary or attention-needed states inline.
- User goal: Expose concise warning states that users should notice quickly.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-badge](/knowledge/component/syn-badge)

#### Variants
- Target: component:syn-badge
- Reason: Compact badge for cautionary or attention-needed states.
- Default: no

##### vanilla
```html
<syn-badge variant="warning">CONTENT</syn-badge>
```

##### react-wrapper
```html
<SynBadge variant="warning">CONTENT</SynBadge>
```

##### react-web-components
```html
<syn-badge variant="warning">CONTENT</syn-badge>
```

##### angular
```html
<syn-badge variant="warning">CONTENT</syn-badge>
```

##### vue
```html
<SynVueBadge variant="warning">CONTENT</SynVueBadge>
```


### feedback.badge.critical

- Description: Use badges to communicate compact urgent or high-severity states inline.
- User goal: Expose concise critical states that require immediate awareness.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-badge](/knowledge/component/syn-badge)

#### Variants
- Target: component:syn-badge
- Reason: Compact badge for urgent or high-severity states.
- Default: no

##### vanilla
```html
<syn-badge variant="critical">CONTENT</syn-badge>
```

##### react-wrapper
```html
<SynBadge variant="critical">CONTENT</SynBadge>
```

##### react-web-components
```html
<syn-badge variant="critical">CONTENT</syn-badge>
```

##### angular
```html
<syn-badge variant="critical">CONTENT</syn-badge>
```

##### vue
```html
<SynVueBadge variant="critical">CONTENT</SynVueBadge>
```


### feedback.badge.error

- Description: Use badges to communicate compact failed or problematic states inline.
- User goal: Expose concise error states without expanding into a full notification.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-badge](/knowledge/component/syn-badge)

#### Variants
- Target: component:syn-badge
- Reason: Compact badge for failed or problematic states.
- Default: no

##### vanilla
```html
<syn-badge variant="error">CONTENT</syn-badge>
```

##### react-wrapper
```html
<SynBadge variant="error">CONTENT</SynBadge>
```

##### react-web-components
```html
<syn-badge variant="error">CONTENT</syn-badge>
```

##### angular
```html
<syn-badge variant="error">CONTENT</syn-badge>
```

##### vue
```html
<SynVueBadge variant="error">CONTENT</SynVueBadge>
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

