import{ae as n,af as r}from"./index-B7q4XBLm.js";import{useMDXComponents as e}from"./index-DjKt9u9V.js";import"./iframe-CxH3XHFT.js";import"../sb-preview/runtime.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";function t(s){const i={h1:"h1",p:"p",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Limitations/Known Issues and limitations"}),`
`,n.jsx(i.h1,{id:"known-issues-and-limitations",children:"Known Issues and limitations"}),`
`,n.jsx(i.p,{children:"This section lists known issues and limitations for the Synergy Design System and its component wrappers."}),`
`,n.jsxs("ul",{className:"syn-navigation-list",children:[n.jsx("li",{children:n.jsxs("a",{href:"../?path=/docs/limitations-angular--docs",children:[n.jsx("img",{src:"/ng.webp"})," @synergy-design-system/angular"]})}),n.jsx("li",{children:n.jsxs("a",{href:"../?path=/docs/limitations-components--docs",children:[n.jsx("img",{src:"/html5.png"})," @synergy-design-system/components"]})}),n.jsx("li",{children:n.jsxs("a",{children:[n.jsx("img",{src:"/react.webp"})," @synergy-design-system/react"]})}),n.jsx("li",{children:n.jsxs("a",{href:"../?path=/docs/limitations-vue--docs",children:[n.jsx("img",{src:"/vue.webp"})," @synergy-design-system/vue"]})})]}),`
`,n.jsx("style",{children:`
.syn-navigation-list {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0;
  }

  a {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-medium);
    justify-content: center;
    align-items: center;
    padding: var(--syn-spacing-large);
    border-radius: var(--syn-spacing-3x-small);
    text-align: center;
  }

  a[href]:hover {
    color: var(--syn-color-primary-950);
    background: var(--syn-color-neutral-50);
    img {
      transform: scale(1.5);
      filter: grayscale(0);
    }
  }

  a:not([href]) {
    color: var(--syn-color-primary-600);
    cursor: not-allowed;
  }

  img {
    display: block;
    height: 50px;
    margin-bottom: 10px;
    will-change: transform;
    transition: transform var(--syn-transition-slow), filter var(--syn-transition-fast);
    filter: grayscale(1);
  }
}
`})]})}function h(s={}){const{wrapper:i}={...e(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(t,{...s})}):t(s)}export{h as default};
