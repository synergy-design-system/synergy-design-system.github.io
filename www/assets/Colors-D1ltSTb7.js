import{j as r}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as m}from"./index-BSj771as.js";import{ae as j}from"./index-7VXiAY-K.js";import{g as p,s as u,M as C,e as g,f as S,b as i,a,c as d}from"./TokenHelpers-DbODW_u3.js";import{d as f}from"./index-C_Koh2Wx.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-gbE3gsEw.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DGdNYaqV.js";import"./index-DrFu-skq.js";import"./icon-button-BsnFsjAn.js";import"./lit-element-BsyMe9HG.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";const n=(t,e=!1)=>Object.fromEntries(p(`color${t}`,e).sort((l,o)=>u(l,o,{replaceString:`syncolor${t}`}))),y=(t=!1)=>n("primary",t),T=(t=!1)=>n("accent",t),b=(t=!1)=>n("neutral",t);function h(t){const e={div:"div",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(j,{title:"Tokens/Colors"}),`
`,r.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,r.jsx(C,{value:f?.tokens?.color?.description?.value}),`
`,["light","dark"].map(l=>r.jsxs(e.div,{children:[r.jsxs(e.h2,{children:["Colors / ",l]}),r.jsx(e.table,{className:`syn-theme-${l}`,children:r.jsx(e.tbody,{children:[["Neutral",b(!0)],["Primary",y(!0)],["Accent",T(!0)],["Error",n("error",!0)],["Warning",n("warning",!0)],["Success",n("success",!0)]].map(([o,x])=>r.jsxs(r.Fragment,{children:[r.jsx(e.tr,{children:r.jsx(e.th,{colSpan:"5",children:o})},`${o}-header`),r.jsxs(e.tr,{children:[r.jsx(e.th,{children:"Color"}),r.jsx(e.th,{children:"Raw Value"}),r.jsx(e.th,{children:"CSS Token"}),r.jsx(e.th,{children:"SCSS Token"}),r.jsx(e.th,{children:"JS Token"})]},`${o}-others`),Object.entries(x).map(([s,c])=>r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(g,{value:c})}),r.jsx(e.td,{children:r.jsx(S,{value:i(s),children:c})}),r.jsx(e.td,{children:r.jsx(a,{value:i(s),children:i(s)})}),r.jsx(e.td,{children:r.jsx(a,{value:d(s),children:d(s)})}),r.jsx(e.td,{children:r.jsx(a,{value:s,children:s})})]},`${o}-row-${s}`))]}))})})]},l))]})}function V(t={}){const{wrapper:e}={...m(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(h,{...t})}):h(t)}export{V as default};
