import{ae as r,af as m}from"./index-DBBDfRVw.js";import{useMDXComponents as x}from"./index-DecWcg07.js";import{g as u,s as p,M as C,e as g,f as S,b as a,a as c,c as d}from"./TokenHelpers-CjggFQXj.js";import{d as f}from"./index-Bg6MV8Hn.js";import"./iframe-Hd3vmygn.js";import"../sb-preview/runtime.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";import"./if-defined-BaykDp1D.js";import"./directive-helpers-CDT6qhDs.js";import"./library-BZPO0bHa.js";import"./icon.component-CMNufm_P.js";const n=(t,e=!1)=>Object.fromEntries(u(`color${t}`,e).sort((l,o)=>p(l,o,{replaceString:`syncolor${t}`}))),y=(t=!1)=>n("primary",t),T=(t=!1)=>n("accent",t),b=(t=!1)=>n("neutral",t);function h(t){const e={div:"div",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",...x(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Tokens/Colors"}),`
`,r.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,r.jsx(C,{value:f?.tokens?.color?.description?.value}),`
`,["light","dark"].map(l=>r.jsxs(e.div,{children:[r.jsxs(e.h2,{children:["Colors / ",l]}),r.jsx(e.table,{className:`syn-theme-${l}`,children:r.jsx(e.tbody,{children:[["Neutral",b(!0)],["Primary",y(!0)],["Accent",T(!0)],["Error",n("error",!0)],["Warning",n("warning",!0)],["Success",n("success",!0)]].map(([o,j])=>r.jsxs(r.Fragment,{children:[r.jsx(e.tr,{children:r.jsx(e.th,{colSpan:"5",children:o})},`${o}-header`),r.jsxs(e.tr,{children:[r.jsx(e.th,{children:"Color"}),r.jsx(e.th,{children:"Raw Value"}),r.jsx(e.th,{children:"CSS Token"}),r.jsx(e.th,{children:"SCSS Token"}),r.jsx(e.th,{children:"JS Token"})]},`${o}-others`),Object.entries(j).map(([s,i])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(g,{value:i})}),r.jsx(e.td,{children:r.jsx(S,{value:a(s),children:i})}),r.jsx(e.td,{children:r.jsx(c,{value:a(s),children:a(s)})}),r.jsx(e.td,{children:r.jsx(c,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(c,{value:s,children:s})})]},`${o}-row-${s}`))]}))})})]},l))]})}function O(t={}){const{wrapper:e}={...x(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(h,{...t})}):h(t)}export{O as default};
