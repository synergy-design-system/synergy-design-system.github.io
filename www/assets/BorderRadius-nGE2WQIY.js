import{ae as r,af as u}from"./index-CY2dWz47.js";import{useMDXComponents as l}from"./index-BSj771as.js";import{g as x,s as h,M as m,B as j,C as p,a as o,b as n,c as d}from"./TokenHelpers-CoTAshgB.js";import{d as i}from"./index-B_hd9aix.js";import"./iframe-CEN64XFB.js";import"../sb-preview/runtime.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-B-Igsje3.js";import"./index-DrFu-skq.js";import"./directive-helpers-CDT6qhDs.js";import"./icon.component-B8rlHAL9.js";const C=(t=!1)=>Object.fromEntries(x("borderradius",t).sort((e,s)=>h(e,s,{orderArray:["none","small","medium","circle","pill"],replaceString:"synborderradius",sortType:"order"})));function a(t){const e={h1:"h1",td:"td",tr:"tr",...l(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Tokens/Border Radius"}),`
`,r.jsx(e.h1,{id:"",children:i?.tokens?.["border-radius"]?.title.value}),`
`,r.jsx(m,{value:i?.tokens?.["border-radius"]?.description?.value}),`
`,r.jsx("table",{children:r.jsx("tbody",{children:r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsx("th",{children:i?.tokens?.["border-radius"]?.title.value}),r.jsx("th",{children:"Raw Value"}),r.jsx("th",{children:"CSS Token"}),r.jsx("th",{children:"SCSS Token"}),r.jsx("th",{children:"JS Token"})]}),Object.entries(C(!0)).map(([s,c])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(j,{className:s.toLowerCase(),value:c})}),r.jsx(e.td,{children:r.jsx(p,{value:s.toLowerCase(),cssProperty:"border-radius"})}),r.jsx(e.td,{children:r.jsx(o,{value:n(s),children:n(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:s,children:s})})]},`${s}-row`))]})})}),`
`,r.jsx("style",{children:`
.synborderradiuspill {
  width: 80px !important;
}
`})]})}function L(t={}){const{wrapper:e}={...l(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(a,{...t})}):a(t)}export{L as default};
