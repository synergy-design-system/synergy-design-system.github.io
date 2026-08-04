import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,l as n,p as r}from"./blocks-CjiNIppL.js";import{i,r as a}from"./react-Bl2r1tuC.js";import{a as o}from"./chunk-W22LQPXL-G4bkWhvb.js";var s;function c(){return(c=e((()=>{s=`# Known Issues and limitations - React

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
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Limitations/React`,tags:[`Issues`,`React`]}),`
`,(0,d.jsx)(t,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=o(),a(),r(),c()})))()}f();export{u as default};