import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as i}from"./index-BSj771as.js";import{ae as l}from"./index-BKz2FSbF.js";import{g as m,s as c,M as h,S as p,C as x,a as j,b as n}from"./TokenHelpers-CHyrPF7a.js";import{d as s}from"./index-D8vHI8_K.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BELb2OGm.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DGdNYaqV.js";import"./index-DrFu-skq.js";import"./icon-button-BsnFsjAn.js";import"./lit-element-BsyMe9HG.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";const u=(r=!1)=>Object.fromEntries(m("shadow",r).sort((o,t)=>c(o,t,{orderArray:["medium","large","xlarge","overflowdown","overflowup","overflowleft","overflowright"],replaceString:"synshadow",sortType:"order"})));function a(r){const o={h1:"h1",td:"td",tr:"tr",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tokens/Shadows"}),`
`,e.jsx(o.h1,{id:"",children:s?.tokens?.shadow?.title.value}),`
`,e.jsx(h,{value:s?.tokens?.shadow?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:s?.tokens?.shadow?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"})]}),Object.entries(u(!0)).map(([t,d])=>e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(p,{className:t.toLowerCase(),value:d})}),e.jsx(o.td,{children:e.jsx(x,{value:t.toLowerCase(),cssProperty:"box-shadow"})}),e.jsx(o.td,{children:e.jsx(j,{value:n(t),children:n(t)})})]},`${t}-row`))]})})})]})}function E(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(a,{...r})}):a(r)}export{E as default};
