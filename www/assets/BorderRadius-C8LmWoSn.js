import{j as r,M as m}from"./index-CRu0aY_a.js";import{useMDXComponents as l}from"./index-CMNp7ghJ.js";import{g as u,s as x,M as h,B as j,C as p,a as o,b as n,c as d}from"./TokenHelpers-C3AWxgtM.js";import{d as i}from"./icon-button-CeCeACzd.js";import"./iframe-D_XbbNf-.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";import"./index-Vx7n56Jp.js";import"./if-defined-98Biveud.js";import"./directive-helpers-B-JxG5af.js";import"./library-UYMiFSYt.js";import"./icon.component-CDVUHmCL.js";const C=(t=!1)=>Object.fromEntries(u("borderradius",t).sort((e,s)=>x(e,s,{orderArray:["none","small","medium","circle","pill"],replaceString:"synborderradius",sortType:"order"})));function a(t){const e={h1:"h1",td:"td",tr:"tr",...l(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Tokens/Border Radius"}),`
`,r.jsx(e.h1,{id:"",children:i?.tokens?.["border-radius"]?.title.value}),`
`,r.jsx(h,{value:i?.tokens?.["border-radius"]?.description?.value}),`
`,r.jsx("table",{children:r.jsx("tbody",{children:r.jsxs(r.Fragment,{children:[r.jsxs("tr",{children:[r.jsx("th",{children:i?.tokens?.["border-radius"]?.title.value}),r.jsx("th",{children:"Raw Value"}),r.jsx("th",{children:"CSS Token"}),r.jsx("th",{children:"SCSS Token"}),r.jsx("th",{children:"JS Token"})]}),Object.entries(C(!0)).map(([s,c])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(j,{className:s.toLowerCase(),value:c})}),r.jsx(e.td,{children:r.jsx(p,{value:s.toLowerCase(),cssProperty:"border-radius"})}),r.jsx(e.td,{children:r.jsx(o,{value:n(s),children:n(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(o,{value:s,children:s})})]},`${s}-row`))]})})}),`
`,r.jsx("style",{children:`
.synborderradiuspill {
  width: 80px !important;
}
`})]})}function A(t={}){const{wrapper:e}={...l(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(a,{...t})}):a(t)}export{A as default};
