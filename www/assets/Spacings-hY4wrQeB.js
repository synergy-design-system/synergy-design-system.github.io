import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as c}from"./index-rbP-kYFP.js";import{M as x}from"./index-Bm0xe65d.js";import{g as m,s as p,M as h,h as j,C as u,a as n,b as i,c as o}from"./TokenHelpers-BFn5T38K.js";import{d as a}from"./index-PzU9tuEL.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cxy5PBT4.js";import"../sb-preview/runtime.js";import"./index-DXimoRZY.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";import"./icon-button-VQJM0drS.js";import"./lit-element-DILkAbkc.js";import"./icon.component-s_WyQyC2.js";import"./directive-helpers-DbZfDV3x.js";const g=(t=!1)=>Object.fromEntries(m("spacing",t).sort((r,s)=>p(r,s,{orderArray:["4xsmall","3xsmall","2xsmall","xsmall","small","medium","large","xlarge","2xlarge","3xlarge","4xlarge","5xlarge"],replaceString:"synspacing",sortType:"order"})));function l(t){const r={h1:"h1",td:"td",tr:"tr",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Tokens/Spacings"}),`
`,e.jsx(r.h1,{id:"",children:a?.tokens?.spacing?.title.value}),`
`,e.jsx(h,{value:a?.tokens?.spacing?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:a?.tokens?.spacing?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"}),e.jsx("th",{children:"SCSS Token"}),e.jsx("th",{children:"JS Token"})]}),Object.entries(g(!0)).map(([s,d])=>e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(j,{className:s.toLowerCase(),borderRadius:"var(--syn-border-radius-none)",value:d})}),e.jsx(r.td,{children:e.jsx(u,{value:s.toLowerCase(),cssProperty:"width"})}),e.jsx(r.td,{children:e.jsx(n,{value:i(s),children:i(s)})}),e.jsx(r.td,{children:e.jsx(n,{value:o(s),children:o(s)})}),e.jsx(r.td,{children:e.jsx(n,{value:s,children:s})})]},`${s}-row`))]})})})]})}function E(t={}){const{wrapper:r}={...c(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(l,{...t})}):l(t)}export{E as default};
