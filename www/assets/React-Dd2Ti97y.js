import{j as e,M as s,a as i}from"./index-t1uXpWaM.js";import{useMDXComponents as a}from"./index-CHrGa5Tm.js";import"./iframe-CcD-wS25.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";const r=`# Known Issues and limitations - React

> ⚠️ This file includes all known issues and limitations when using the react wrappers.
> There may be other interesting bits of information in the [components limitation documentation](https://synergy-design-system.github.io/?path=/docs/limitations-components--docs).

## Why is there a react wrapper package in the first place?

### Meta information

- Framework version: React < 19.0.0
- Synergy version: < 2.16.0

### Description

React did historically not ship with web components in mind. This means that is not possible to use all features of web components out of the box when using React until version 19.0.0.

### Cause

Unfortunately it seems that web components never got traction for react developers in the first place, so they where ignored for a long time.

### Proposed Solution

#### Solution 1: For react < 19.0.0

When using react version 18 and below, you may use our \`@synergy-design-system/react\` wrapper components.
They allow seamless use of our components as automatically wrapped react elements.

#### Solution 2: For react >= 19.0.0

React 19 comes with official support for web components. This means you are able to use synergies web components directly in React applications now.
We support this by providing a custom typescript module that may be installed in your react project that provides typechecking and autocompletion support for the native components in react. Please see \`@synergy-design-system/react\` installation instructions for using this.
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Limitations/React"}),`
`,e.jsx(i,{children:r})]})}function y(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{y as default};
