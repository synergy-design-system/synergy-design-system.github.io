import{j as e,M as x}from"./index-Dk4L_-9D.js";import{useMDXComponents as c}from"./index-CMNp7ghJ.js";import{g as m,s as p,M as h,h as j,C as u,a as n,b as i,c as o}from"./TokenHelpers-Dx3JvfqK.js";import{d as a}from"./index-ijgK_qyx.js";import"./iframe-TY_ASHm0.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";import"./static-WF-Q6H2i.js";import"./directive-helpers-B-JxG5af.js";import"./library-UYMiFSYt.js";import"./icon.component-h8lrLdNx.js";const g=(t=!1)=>Object.fromEntries(m("spacing",t).sort((s,r)=>p(s,r,{orderArray:["4xsmall","3xsmall","2xsmall","xsmall","small","medium","mediumlarge","large","xlarge","2xlarge","3xlarge","4xlarge","5xlarge"],replaceString:"synspacing",sortType:"order"})));function l(t){const s={h1:"h1",td:"td",tr:"tr",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Tokens/Spacings"}),`
`,e.jsx(s.h1,{id:"",children:a?.tokens?.spacing?.title.value}),`
`,e.jsx(h,{value:a?.tokens?.spacing?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:a?.tokens?.spacing?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"}),e.jsx("th",{children:"SCSS Token"}),e.jsx("th",{children:"JS Token"})]}),Object.entries(g(!0)).map(([r,d])=>e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(j,{className:r.toLowerCase(),borderRadius:"var(--syn-border-radius-none)",value:d})}),e.jsx(s.td,{children:e.jsx(u,{value:r.toLowerCase(),cssProperty:"width"})}),e.jsx(s.td,{children:e.jsx(n,{value:i(r),children:i(r)})}),e.jsx(s.td,{children:e.jsx(n,{value:o(r),children:o(r)})}),e.jsx(s.td,{children:e.jsx(n,{value:r,children:r})})]},`${r}-row`))]})})})]})}function A(t={}){const{wrapper:s}={...c(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{A as default};
