import{j as e}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as i}from"./index-rbP-kYFP.js";import{M as l}from"./index-Dsfb5LR7.js";import{g as m,s as c,M as h,S as p,C as x,a as j,b as n}from"./TokenHelpers-B_6lXkPt.js";import{d as s}from"./index-DdNRRk2F.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C9XJf8CR.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";import"./icon-button-CJSB8Ct7.js";import"./lit-element-DILkAbkc.js";import"./icon.component-oDvlVVHl.js";import"./directive-helpers-DbZfDV3x.js";const u=(r=!1)=>Object.fromEntries(m("shadow",r).sort((o,t)=>c(o,t,{orderArray:["medium","large","xlarge","overflowdown","overflowup","overflowleft","overflowright"],replaceString:"synshadow",sortType:"order"})));function a(r){const o={h1:"h1",td:"td",tr:"tr",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tokens/Shadows"}),`
`,e.jsx(o.h1,{id:"",children:s?.tokens?.shadow?.title.value}),`
`,e.jsx(h,{value:s?.tokens?.shadow?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:s?.tokens?.shadow?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"})]}),Object.entries(u(!0)).map(([t,d])=>e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(p,{className:t.toLowerCase(),value:d})}),e.jsx(o.td,{children:e.jsx(x,{value:t.toLowerCase(),cssProperty:"box-shadow"})}),e.jsx(o.td,{children:e.jsx(j,{value:n(t),children:n(t)})})]},`${t}-row`))]})})})]})}function E(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(a,{...r})}):a(r)}export{E as default};
