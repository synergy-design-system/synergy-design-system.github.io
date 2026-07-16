# Intent Policy: action

Phase: experimental (experimental and may change or be removed in future releases)

## Description
Contextual actions such as primary, submit, reset, or navigation actions.

## Intents
### action.primary

- Description: Use when the component should present the primary action in a context.
- User goal: Highlight the most important next action for the user.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-button](/knowledge/component/syn-button)

#### Variants
- Target: component:syn-button
- Reason: Primary action button styling for default primary interaction.
- Default: yes

##### vanilla
```html
<syn-button type="button" variant="filled">CONTENT</syn-button>
```

##### react-wrapper
```html
<SynButton type="button" variant="filled">CONTENT</SynButton>
```

##### react-web-components
```html
<syn-button type="button" variant="filled">CONTENT</syn-button>
```

##### angular
```html
<syn-button type="button" variant="filled">CONTENT</syn-button>
```

##### vue
```html
<SynVueButton type="button" variant="filled">CONTENT</SynVueButton>
```


### action.submit

- Description: Use when the component submits form data.
- User goal: Submit user-provided data to a form handler.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-button](/knowledge/component/syn-button)

#### Variants
- Target: component:syn-button
- Reason: Submit action with semantic submit type and filled emphasis.
- Default: no

##### vanilla
```html
<syn-button type="submit" variant="filled">CONTENT</syn-button>
```

##### react-wrapper
```html
<SynButton type="submit" variant="filled">CONTENT</SynButton>
```

##### react-web-components
```html
<syn-button type="submit" variant="filled">CONTENT</syn-button>
```

##### angular
```html
<syn-button type="submit" variant="filled">CONTENT</syn-button>
```

##### vue
```html
<SynVueButton type="submit" variant="filled">CONTENT</SynVueButton>
```


### action.reset

- Description: Use when the component resets form state to defaults.
- User goal: Clear or reset user-entered data.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-button](/knowledge/component/syn-button)

#### Variants
- Target: component:syn-button
- Reason: Reset action styling for secondary importance.
- Default: no

##### vanilla
```html
<syn-button type="reset" variant="text">CONTENT</syn-button>
```

##### react-wrapper
```html
<SynButton type="reset" variant="text">CONTENT</SynButton>
```

##### react-web-components
```html
<syn-button type="reset" variant="text">CONTENT</syn-button>
```

##### angular
```html
<syn-button type="reset" variant="text">CONTENT</syn-button>
```

##### vue
```html
<SynVueButton type="reset" variant="text">CONTENT</SynVueButton>
```


### action.navigation

- Description: Use when the component should navigate to another location.
- User goal: Move the user to another destination.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-button](/knowledge/component/syn-button)
- [style:syn-link](/knowledge/style/syn-link)

#### Variants
- Target: component:syn-button
- Reason: Navigation action uses href and text variant.
- Default: no

##### vanilla
```html
<syn-button href="#" variant="text">CONTENT</syn-button>
```

##### react-wrapper
```html
<SynButton href="#" variant="text">CONTENT</SynButton>
```

##### react-web-components
```html
<syn-button href="#" variant="text">CONTENT</syn-button>
```

##### angular
```html
<syn-button href="#" variant="text">CONTENT</syn-button>
```

##### vue
```html
<SynVueButton href="#" variant="text">CONTENT</SynVueButton>
```


- Target: style:syn-link
- Reason: Class-based link navigation pattern for inline or standalone links.
- Default: no

##### vanilla
```html
<a class="syn-link" href="#">Link</a>
```

##### react-wrapper
```html
<a class="syn-link" href="#">Link</a>
```

##### react-web-components
```html
<a class="syn-link" href="#">Link</a>
```

##### angular
```html
<a class="syn-link" href="#">Link</a>
```

##### vue
```html
<a class="syn-link" href="#">Link</a>
```


### action.button.icon

- Description: Use icon-only buttons for compact actions where space is constrained.
- User goal: Provide a compact action trigger while preserving quick recognition.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-icon-button](/knowledge/component/syn-icon-button)

#### Variants
- Target: component:syn-icon-button
- Reason: Compact icon-only action button with accessible label requirements.
- Default: no

##### vanilla
```html
<syn-icon-button>CONTENT</syn-icon-button>
```

##### react-wrapper
```html
<SynIconButton>CONTENT</SynIconButton>
```

##### react-web-components
```html
<syn-icon-button>CONTENT</syn-icon-button>
```

##### angular
```html
<syn-icon-button>CONTENT</syn-icon-button>
```

##### vue
```html
<SynVueIconButton>CONTENT</SynVueIconButton>
```


### action.grouped

- Description: Use grouped actions when related actions should be presented as one unit.
- User goal: Present related actions with clear grouping and consistent alignment.
- Phase: experimental (experimental and may change or be removed in future releases)

#### Linked targets
- [component:syn-button-group](/knowledge/component/syn-button-group)

#### Variants
- Target: component:syn-button-group
- Reason: Group related actions into one aligned unit for consistent interaction.
- Default: no

##### vanilla
```html
<syn-button-group>CONTENT</syn-button-group>
```

##### react-wrapper
```html
<SynButtonGroup>CONTENT</SynButtonGroup>
```

##### react-web-components
```html
<syn-button-group>CONTENT</syn-button-group>
```

##### angular
```html
<syn-button-group>CONTENT</syn-button-group>
```

##### vue
```html
<SynVueButtonGroup>CONTENT</SynVueButtonGroup>
```

