import{ae as r,af as m}from"./index-DOjxYo4o.js";import{useMDXComponents as l}from"./index-DecWcg07.js";import{g as u,s as x,M as h,B as p,C as j,a as o,b as n,c as d}from"./TokenHelpers-D2GwXNhO.js";import{d as i}from"./index-CDOHgizu.js";import"./iframe-U8inpbRF.js";import"../sb-preview/runtime.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";import"./if-defined-BaykDp1D.js";import"./directive-helpers-CDT6qhDs.js";import"./library-BZPO0bHa.js";import"./icon.component-Bf6Q7d-N.js";const C=(t=!1)=>Object.fromEntries(u("borderradius",t).sort((e,s)=>x(e,s,{orderArray:["none","small","medium","circle","pill"],replaceString:"synborderradius",sortType:"order"})));function a(t){const e={h1:"h1",td:"td",tr:"tr",...l(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Tokens/Border Radius"}),`
`,r.jsx(e.h1,{id:"",children:i?.tokens?.["border-radius"]?.title.value}),`
`,r.jsx(h,{value:i?.tokens?.["border-radius"]?.description?.value}),`
`,r.jsx("table",{children:r.jsx("tbody",{children:r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsx("th",{children:i?.tokens?.["border-radius"]?.title.value}),r.jsx("th",{children:"Raw Value"}),r.jsx("th",{children:"CSS Token"}),r.jsx("th",{children:"SCSS Token"}),r.jsx("th",{children:"JS Token"})]}),Object.entries(C(!0)).map(([s,c])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(p,{className:s.toLowerCase(),value:c})}),r.jsx(e.td,{children:r.jsx(j,{value:s.toLowerCase(),cssProperty:"border-radius"})}),r.jsx(e.td,{children:r.jsx(o,{value:n(s),children:n(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:s,children:s})})]},`${s}-row`))]})})}),`
`,r.jsx("style",{children:`
.synborderradiuspill {
  width: 80px !important;
}
`})]})}function A(t={}){const{wrapper:e}={...l(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(a,{...t})}):a(t)}export{A as default};
