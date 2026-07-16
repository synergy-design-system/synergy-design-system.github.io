# Intent Policy: assistance

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Contextual micro-guidance for nearby controls or content.

## Intents
### assistance.tooltip.contextual

- Description: Use tooltip guidance for short, non-critical contextual help.
- User goal: Clarify a nearby control or value with concise supplemental text.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-tooltip](/knowledge/component/syn-tooltip)

#### Variants
- Target: component:syn-tooltip
- Reason: Short non-critical contextual help tied to a nearby trigger.
- Default: no

##### vanilla
```html
<syn-tooltip>CONTENT</syn-tooltip>
```

##### react-wrapper
```html
<SynTooltip>CONTENT</SynTooltip>
```

##### react-web-components
```html
<syn-tooltip>CONTENT</syn-tooltip>
```

##### angular
```html
<syn-tooltip>CONTENT</syn-tooltip>
```

##### vue
```html
<SynVueTooltip>CONTENT</SynVueTooltip>
```


### assistance.icon.contextual

- Description: Use contextual icons to visually support meaning near controls or status text.
- User goal: Improve scannability and comprehension with compact visual cues.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-icon](/knowledge/component/syn-icon)

#### Variants
- Target: component:syn-icon
- Reason: Contextual icon used as a compact visual hint near related content.
- Default: no

##### vanilla
```html
<syn-icon>CONTENT</syn-icon>
```

##### react-wrapper
```html
<SynIcon>CONTENT</SynIcon>
```

##### react-web-components
```html
<syn-icon>CONTENT</syn-icon>
```

##### angular
```html
<syn-icon>CONTENT</syn-icon>
```

##### vue
```html
<SynVueIcon>CONTENT</SynVueIcon>
```

