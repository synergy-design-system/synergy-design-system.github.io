import{j as s,M as r}from"./index-DX_flYiH.js";import{useMDXComponents as e}from"./index-CHrGa5Tm.js";import"./iframe-B2bVberJ.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";function t(n){const i={h1:"h1",p:"p",...e(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Limitations/Known Issues and limitations"}),`
`,s.jsx(i.h1,{id:"known-issues-and-limitations",children:"Known Issues and limitations"}),`
`,s.jsx(i.p,{children:"This section lists known issues and limitations for the Synergy Design System and its component wrappers."}),`
`,s.jsxs("ul",{className:"syn-navigation-list",children:[s.jsx("li",{children:s.jsxs("a",{href:"../?path=/docs/limitations-angular--docs",children:[s.jsx("img",{src:"/ng.webp"})," @synergy-design-system/angular"]})}),s.jsx("li",{children:s.jsxs("a",{href:"../?path=/docs/limitations-components--docs",children:[s.jsx("img",{src:"/html5.png"})," @synergy-design-system/components"]})}),s.jsx("li",{children:s.jsxs("a",{href:"../?path=/docs/limitations-react--docs",children:[s.jsx("img",{src:"/react.webp"})," @synergy-design-system/react"]})}),s.jsx("li",{children:s.jsxs("a",{href:"../?path=/docs/limitations-vue--docs",children:[s.jsx("img",{src:"/vue.webp"})," @synergy-design-system/vue"]})})]}),`
`,s.jsx("style",{children:`
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
`})]})}function p(n={}){const{wrapper:i}={...e(),...n.components};return i?s.jsx(i,{...n,children:s.jsx(t,{...n})}):t(n)}export{p as default};
