import{ae as e,af as h}from"./index-BACWQU-g.js";import{useMDXComponents as l}from"./index-BSj771as.js";import{g as x,s as m,d as j,C as p,a as o,b as d,c as i}from"./TokenHelpers-hWpfQKfq.js";import{d as n}from"./index-BpTwKCb_.js";import"./iframe-DI4PInzp.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-B-Igsje3.js";import"./index-DrFu-skq.js";import"./directive-helpers-CDT6qhDs.js";import"./icon.component-BGOBP71j.js";const u=(s=!1)=>Object.fromEntries(x("borderwidth",s).sort((r,t)=>m(r,t,{orderArray:["none","small","medium","large","xlarge"],replaceString:"synborderwidth",sortType:"order"})));function a(s){const r={h1:"h1",td:"td",tr:"tr",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Tokens/Border Width"}),`
`,e.jsx(r.h1,{id:"",children:n?.tokens?.["border-width"]?.title.value}),`
`,e.jsx("p",{children:n?.tokens?.["border-width"]?.description?.value}),`
`,e.jsx("table",{children:e.jsx("tbody",{children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{children:n?.tokens?.["border-width"]?.title.value}),e.jsx("th",{children:"Raw Value"}),e.jsx("th",{children:"CSS Token"}),e.jsx("th",{children:"SCSS Token"}),e.jsx("th",{children:"JS Token"})]}),Object.entries(u(!0)).map(([t,c])=>e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(j,{className:t.toLowerCase(),value:c})}),e.jsx(r.td,{children:e.jsx(p,{value:t.toLowerCase(),cssProperty:"border-width"})}),e.jsx(r.td,{children:e.jsx(o,{value:d(t),children:d(t)})}),e.jsx(r.td,{children:e.jsx(o,{value:i(t),children:i(t)})}),e.jsx(r.td,{children:e.jsx(o,{value:t,children:t})})]},`${t}-row`))]})})})]})}function L(s={}){const{wrapper:r}={...l(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(a,{...s})}):a(s)}export{L as default};