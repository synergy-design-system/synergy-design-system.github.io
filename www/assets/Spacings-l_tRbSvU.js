import{ae as e,af as x}from"./index-hB_L5hD2.js";import{useMDXComponents as c}from"./index-BSj771as.js";import{g as m,s as p,M as h,h as j,C as u,a as n,b as i,c as o}from"./TokenHelpers-BoTH0FQK.js";import{d as a}from"./index-Cz_2oFRt.js";import"./iframe-DDp2t-Xh.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-B-Igsje3.js";import"./index-DrFu-skq.js";import"./directive-helpers-CDT6qhDs.js";import"./icon.component-B8rlHAL9.js";const g=(t=!1)=>Object.fromEntries(m("spacing",t).sort((s,r)=>p(s,r,{orderArray:["4xsmall","3xsmall","2xsmall","xsmall","small","medium","large","xlarge","2xlarge","3xlarge","4xlarge","5xlarge"],replaceString:"synspacing",sortType:"order"})));function l(t){const s={h1:"h1",td:"td",tr:"tr",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Tokens/Spacings"}),`
`,e.jsx(s.h1,{id:"",children:a?.tokens?.spacing?.title.value}),`
`,e.jsx(h,{value:a?.tokens?.spacing?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:a?.tokens?.spacing?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"}),e.jsx("th",{children:"SCSS Token"}),e.jsx("th",{children:"JS Token"})]}),Object.entries(g(!0)).map(([r,d])=>e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(j,{className:r.toLowerCase(),borderRadius:"var(--syn-border-radius-none)",value:d})}),e.jsx(s.td,{children:e.jsx(u,{value:r.toLowerCase(),cssProperty:"width"})}),e.jsx(s.td,{children:e.jsx(n,{value:i(r),children:i(r)})}),e.jsx(s.td,{children:e.jsx(n,{value:o(r),children:o(r)})}),e.jsx(s.td,{children:e.jsx(n,{value:r,children:r})})]},`${r}-row`))]})})})]})}function X(t={}){const{wrapper:s}={...c(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{X as default};
