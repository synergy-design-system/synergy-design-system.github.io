import{j as e,M as l}from"./index-B3etUtd0.js";import{useMDXComponents as i}from"./index-CHrGa5Tm.js";import{g as c,s as h,M as m,S as x,C as p,a as j,b as n}from"./TokenHelpers-BIRz2CNd.js";import{d as r}from"./icon-button-M_xuVFUt.js";import"./iframe-eeTzFn9N.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BwkS7JH_.js";import"./index-DrFu-skq.js";import"./index-Vx7n56Jp.js";import"./library-BX4ONXik.js";import"./directive-helpers-Dvm_Ferq.js";const u=(s=!1)=>Object.fromEntries(c("shadow",s).sort((o,t)=>h(o,t,{orderArray:["medium","large","xlarge","overflowdown","overflowup","overflowleft","overflowright"],replaceString:"synshadow",sortType:"order"})));function a(s){const o={h1:"h1",td:"td",tr:"tr",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tokens/Shadows"}),`
`,e.jsx(o.h1,{id:"",children:r?.tokens?.shadow?.title.value}),`
`,e.jsx(m,{value:r?.tokens?.shadow?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:r?.tokens?.shadow?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"})]}),Object.entries(u(!0)).map(([t,d])=>e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(x,{className:t.toLowerCase(),value:d})}),e.jsx(o.td,{children:e.jsx(p,{value:t.toLowerCase(),cssProperty:"box-shadow"})}),e.jsx(o.td,{children:e.jsx(j,{value:n(t),children:n(t)})})]},`${t}-row`))]})})})]})}function L(s={}){const{wrapper:o}={...i(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(a,{...s})}):a(s)}export{L as default};
