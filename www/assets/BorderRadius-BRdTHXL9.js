import{j as r}from"./jsx-runtime-gfuiFmrk.js";import{useMDXComponents as l}from"./index-rbP-kYFP.js";import{M as m}from"./index-tI_N1BqD.js";import{g as p,s as u,M as x,B as h,C as j,a as o,b as n,c as d}from"./TokenHelpers-H6CkBGIB.js";import{d as i}from"./index-uEr4O7Wk.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BI6v4uk_.js";import"../sb-preview/runtime.js";import"./index-DXimoRZY.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";import"./icon-button-BwQ2212h.js";import"./lit-element-DILkAbkc.js";import"./icon.component-CiyYcMke.js";import"./directive-helpers-DbZfDV3x.js";const C=(t=!1)=>Object.fromEntries(p("borderradius",t).sort((e,s)=>u(e,s,{orderArray:["none","small","medium","circle","pill"],replaceString:"synborderradius",sortType:"order"})));function a(t){const e={h1:"h1",td:"td",tr:"tr",...l(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Tokens/Border Radius"}),`
`,r.jsx(e.h1,{id:"",children:i?.tokens?.["border-radius"]?.title.value}),`
`,r.jsx(x,{value:i?.tokens?.["border-radius"]?.description?.value}),`
`,r.jsx("table",{children:r.jsx("tbody",{children:r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsx("th",{children:i?.tokens?.["border-radius"]?.title.value}),r.jsx("th",{children:"Raw Value"}),r.jsx("th",{children:"CSS Token"}),r.jsx("th",{children:"SCSS Token"}),r.jsx("th",{children:"JS Token"})]}),Object.entries(C(!0)).map(([s,c])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(h,{className:s.toLowerCase(),value:c})}),r.jsx(e.td,{children:r.jsx(j,{value:s.toLowerCase(),cssProperty:"border-radius"})}),r.jsx(e.td,{children:r.jsx(o,{value:n(s),children:n(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:s,children:s})})]},`${s}-row`))]})})}),`
`,r.jsx("style",{children:`
.synborderradiuspill {
  width: 80px !important;
}
`})]})}function E(t={}){const{wrapper:e}={...l(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(a,{...t})}):a(t)}export{E as default};
