import{ae as r,af as h}from"./index-GzTxCkMr.js";import{useMDXComponents as l}from"./index-DecWcg07.js";import{g as m,s as x,d as j,C as p,a as o,b as n,c as d}from"./TokenHelpers-D5Pv4sNp.js";import{d as i}from"./index-CpvI6Xjn.js";import"./iframe-BRZ9l47S.js";import"../sb-preview/runtime.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";import"./static-9CmeQujl.js";import"./directive-helpers-CDT6qhDs.js";import"./library-BZPO0bHa.js";import"./icon.component-DOxq3uID.js";const u=(s=!1)=>Object.fromEntries(m("borderwidth",s).sort((e,t)=>x(e,t,{orderArray:["none","small","medium","large","xlarge"],replaceString:"synborderwidth",sortType:"order"})));function a(s){const e={h1:"h1",td:"td",tr:"tr",...l(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(h,{title:"Tokens/Border Width"}),`
`,r.jsx(e.h1,{id:"",children:i?.tokens?.["border-width"]?.title.value}),`
`,r.jsx("p",{children:i?.tokens?.["border-width"]?.description?.value}),`
`,r.jsx("table",{children:r.jsx("tbody",{children:r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsx("th",{children:i?.tokens?.["border-width"]?.title.value}),r.jsx("th",{children:"Raw Value"}),r.jsx("th",{children:"CSS Token"}),r.jsx("th",{children:"SCSS Token"}),r.jsx("th",{children:"JS Token"})]}),Object.entries(u(!0)).map(([t,c])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(j,{className:t.toLowerCase(),value:c})}),r.jsx(e.td,{children:r.jsx(p,{value:t.toLowerCase(),cssProperty:"border-width"})}),r.jsx(e.td,{children:r.jsx(o,{value:n(t),children:n(t)})}),r.jsx(e.td,{children:r.jsx(o,{value:d(t),children:d(t)})}),r.jsx(e.td,{children:r.jsx(o,{value:t,children:t})})]},`${t}-row`))]})})})]})}function W(s={}){const{wrapper:e}={...l(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(a,{...s})}):a(s)}export{W as default};