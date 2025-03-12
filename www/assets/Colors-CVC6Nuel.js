import{j as r,M as m}from"./index-DCaNCkn3.js";import{useMDXComponents as x}from"./index-CMNp7ghJ.js";import{g as u,s as p,M as C,e as g,f as S,b as c,a as i,c as d}from"./TokenHelpers-B-gmrd0a.js";import{d as f}from"./icon-button-BbTH43IY.js";import"./iframe-BNGWLgq7.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";import"./index-Vx7n56Jp.js";import"./if-defined-98Biveud.js";import"./directive-helpers-B-JxG5af.js";import"./library-UYMiFSYt.js";import"./icon.component-B0TOuoEq.js";const n=(t,e=!1)=>Object.fromEntries(u(`color${t}`,e).sort((l,o)=>p(l,o,{replaceString:`syncolor${t}`}))),y=(t=!1)=>n("primary",t),T=(t=!1)=>n("accent",t),b=(t=!1)=>n("neutral",t);function h(t){const e={div:"div",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",...x(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Tokens/Colors"}),`
`,r.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,r.jsx(C,{value:f?.tokens?.color?.description?.value}),`
`,["light","dark"].map(l=>r.jsxs(e.div,{children:[r.jsxs(e.h2,{children:["Colors / ",l]}),r.jsx(e.table,{className:`syn-theme-${l}`,children:r.jsx(e.tbody,{children:[["Neutral",b(!0)],["Primary",y(!0)],["Accent",T(!0)],["Error",n("error",!0)],["Warning",n("warning",!0)],["Success",n("success",!0)]].map(([o,j])=>r.jsxs(r.Fragment,{children:[r.jsx(e.tr,{children:r.jsx(e.th,{colSpan:"5",children:o})},`${o}-header`),r.jsxs(e.tr,{children:[r.jsx(e.th,{children:"Color"}),r.jsx(e.th,{children:"Raw Value"}),r.jsx(e.th,{children:"CSS Token"}),r.jsx(e.th,{children:"SCSS Token"}),r.jsx(e.th,{children:"JS Token"})]},`${o}-others`),Object.entries(j).map(([s,a])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(g,{value:a})}),r.jsx(e.td,{children:r.jsx(S,{value:c(s),children:a})}),r.jsx(e.td,{children:r.jsx(i,{value:c(s),children:c(s)})}),r.jsx(e.td,{children:r.jsx(i,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(i,{value:s,children:s})})]},`${o}-row-${s}`))]}))})})]},l))]})}function O(t={}){const{wrapper:e}={...x(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(h,{...t})}):h(t)}export{O as default};
