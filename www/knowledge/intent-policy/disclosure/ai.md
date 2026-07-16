# Intent Policy: disclosure

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Progressive disclosure of secondary information.

## Intents
### disclosure.details.on-demand

- Description: Use details to progressively reveal one block of optional content.
- User goal: Show extra information only when requested by the user.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-details](/knowledge/component/syn-details)

#### Variants
- Target: component:syn-details
- Reason: On-demand disclosure for one optional information block.
- Default: no

##### vanilla
```html
<syn-details>CONTENT</syn-details>
```

##### react-wrapper
```html
<SynDetails>CONTENT</SynDetails>
```

##### react-web-components
```html
<syn-details>CONTENT</syn-details>
```

##### angular
```html
<syn-details>CONTENT</syn-details>
```

##### vue
```html
<SynVueDetails>CONTENT</SynVueDetails>
```


### disclosure.accordion.grouped

- Description: Use accordions to reveal grouped sections and reduce information overload.
- User goal: Organize larger content into scannable, expandable sections.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-accordion](/knowledge/component/syn-accordion)

#### Variants
- Target: component:syn-accordion
- Reason: Grouped progressive disclosure for multiple related sections.
- Default: no

##### vanilla
```html
<syn-accordion close-others>CONTENT</syn-accordion>
```

##### react-wrapper
```html
<SynAccordion close-others={true}>CONTENT</SynAccordion>
```

##### react-web-components
```html
<syn-accordion close-others>CONTENT</syn-accordion>
```

##### angular
```html
<syn-accordion close-others>CONTENT</syn-accordion>
```

##### vue
```html
<SynVueAccordion close-others>CONTENT</SynVueAccordion>
```


### disclosure.popup.on-demand

- Description: Use popups to reveal related secondary content on demand near a trigger.
- User goal: Show contextual secondary content without navigating away.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-popup](/knowledge/component/syn-popup)

#### Variants
- Target: component:syn-popup
- Reason: On-demand popup disclosure anchored to a trigger element.
- Default: no

##### vanilla
```html
<syn-popup>CONTENT</syn-popup>
```

##### react-wrapper
```html
<SynPopup>CONTENT</SynPopup>
```

##### react-web-components
```html
<syn-popup>CONTENT</syn-popup>
```

##### angular
```html
<syn-popup>CONTENT</syn-popup>
```

##### vue
```html
<SynVuePopup>CONTENT</SynVuePopup>
```

