import{j as e}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as p}from"./index-COxJNofV.js";import{M as g}from"./index-dy1A7ebh.js";import{d as i,c as y}from"./index-CB6aPP22.js";import{g as a,s as h,M as f,C as u,a as l,b as c,c as d}from"./TokenHelpers-BmEPQ3qW.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DCS6A16K.js";import"../sb-preview/runtime.js";import"./index-COebWTXQ.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";import"./icon-button-BlEnXLJ8.js";import"./lit-element-DILkAbkc.js";import"./icon.component-BNRCpE4R.js";import"./directive-helpers-DbZfDV3x.js";const T="The quick brown fox jumps over the lazy dog.",S=(r=!1)=>{const t=["fontsans","fontmono"].map(s=>{const o=a(s,r);return Object.fromEntries(o)});return{...t[0],...t[1]}},b=(r=!1)=>Object.fromEntries(a("fontsize",r).sort((t,s)=>h(t,s,{orderArray:["xsmall","small","medium","large","xlarge","2xlarge","3xlarge"],replaceString:"synfontsize",sortType:"order"}))),C=(r=!1)=>Object.fromEntries(a("fontweight",r).sort((t,s)=>h(t,s,{orderArray:["normal","semibold","bold"],replaceString:"synfontweight",sortType:"order"}))),w=(r=!1)=>Object.fromEntries(a("lineheight",r).sort((t,s)=>h(t,s,{orderArray:["denser","dense","normal","loose","looser"],replaceString:"synlineheight",sortType:"order"})));function m(r){const t={h1:"h1",h2:"h2",p:"p",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Tokens/Typography"}),`
`,e.jsx(t.h1,{id:"",children:i?.tokens?.typography?.title.value}),`
`,e.jsx(f,{value:i?.tokens?.typography?.description?.value}),`
`,[["font-family",i?.tokens?.typography?.["font-family"]?.title.value,S(!0)],["font-size","Font Size",b(!0)],["font-weight","Font Weight",C(!0)],["line-height","Line Height",w(!0)]].map(([s,o,x])=>e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:o}),e.jsx(t.p,{children:i?.tokens?.typography?.[s]?.description?.value??""}),e.jsx(t.table,{children:e.jsx(t.tbody,{children:e.jsxs(e.Fragment,{children:[e.jsxs(t.tr,{children:[e.jsx(t.th,{children:o}),e.jsx(t.th,{children:"Raw Value"}),e.jsx(t.th,{children:"CSS Token"}),e.jsx(t.th,{children:"SCSS Token"}),e.jsx(t.th,{children:"JS Token"})]}),Object.entries(x).map(([n,j])=>e.jsxs(t.tr,{children:[e.jsx(t.td,{className:s,children:e.jsx(t.span,{className:n.toLowerCase(),style:{[y(s)]:j},children:T})}),e.jsx(t.td,{children:e.jsx(u,{value:n.toLowerCase(),cssProperty:s})}),e.jsx(t.td,{children:e.jsx(l,{value:c(n),children:c(n)})}),e.jsx(t.td,{children:e.jsx(l,{value:d(n),children:d(n)})}),e.jsx(t.td,{children:e.jsx(l,{value:n,children:n})})]},`${n}-row`))]})})},`syn-${s}`)]})),`
`,e.jsx("style",{children:`
  .line-height {
    width: 200px;
  }
`})]})}function V(r={}){const{wrapper:t}={...p(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(m,{...r})}):m(r)}export{V as default};
