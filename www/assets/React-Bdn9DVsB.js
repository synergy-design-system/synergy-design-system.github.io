import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t}from"./react-XnqUzw--.js";import{a as n}from"./chunk-W22LQPXL-BdLf72SR.js";import{c as r,l as i,p as a}from"./blocks-7PJzwYwY.js";import{t as o}from"./mdx-react-shim-y1jXGhTh.js";var s,c=e((()=>{s=`# Known Issues and limitations - React

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
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`Limitations/React`,tags:[`Issues`,`React`]}),`
`,(0,d.jsx)(r,{children:s})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=n(),o(),a(),c()}))();export{u as default};