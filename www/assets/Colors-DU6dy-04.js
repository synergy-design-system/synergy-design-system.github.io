import{j as r,M as m}from"./index-9wVQiXuv.js";import{useMDXComponents as x}from"./index-CMNp7ghJ.js";import{g as u,s as p,M as C,e as g,f as S,b as c,a,c as d}from"./TokenHelpers-CblP5_zt.js";import{d as f}from"./index-D8HpcxQN.js";import"./iframe-D_vLBakJ.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";import"./if-defined-CAYRA8Ae.js";import"./directive-helpers-B-JxG5af.js";import"./library-UYMiFSYt.js";import"./icon.component-CgdRPS1z.js";const n=(t,e=!1)=>Object.fromEntries(u(`color${t}`,e).sort((l,o)=>p(l,o,{replaceString:`syncolor${t}`}))),y=(t=!1)=>n("primary",t),T=(t=!1)=>n("accent",t),b=(t=!1)=>n("neutral",t);function h(t){const e={div:"div",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",...x(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Tokens/Colors"}),`
`,r.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,r.jsx(C,{value:f?.tokens?.color?.description?.value}),`
`,["light","dark"].map(l=>r.jsxs(e.div,{children:[r.jsxs(e.h2,{children:["Colors / ",l]}),r.jsx(e.table,{className:`syn-theme-${l}`,children:r.jsx(e.tbody,{children:[["Neutral",b(!0)],["Primary",y(!0)],["Accent",T(!0)],["Error",n("error",!0)],["Warning",n("warning",!0)],["Success",n("success",!0)]].map(([o,j])=>r.jsxs(r.Fragment,{children:[r.jsx(e.tr,{children:r.jsx(e.th,{colSpan:"5",children:o})},`${o}-header`),r.jsxs(e.tr,{children:[r.jsx(e.th,{children:"Color"}),r.jsx(e.th,{children:"Raw Value"}),r.jsx(e.th,{children:"CSS Token"}),r.jsx(e.th,{children:"SCSS Token"}),r.jsx(e.th,{children:"JS Token"})]},`${o}-others`),Object.entries(j).map(([s,i])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(g,{value:i})}),r.jsx(e.td,{children:r.jsx(S,{value:c(s),children:i})}),r.jsx(e.td,{children:r.jsx(a,{value:c(s),children:c(s)})}),r.jsx(e.td,{children:r.jsx(a,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(a,{value:s,children:s})})]},`${o}-row-${s}`))]}))})})]},l))]})}function L(t={}){const{wrapper:e}={...x(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(h,{...t})}):h(t)}export{L as default};
