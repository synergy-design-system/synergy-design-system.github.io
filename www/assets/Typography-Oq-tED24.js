import{j as e,M as g}from"./index-BqrhBtIR.js";import{useMDXComponents as p}from"./index-CMNp7ghJ.js";import{c as j}from"./index-Vx7n56Jp.js";import{g as a,s as c,M as u,C as y,a as l,b as d,c as h}from"./TokenHelpers-DQjnSMYA.js";import{d as i}from"./icon-button-D-sG795Z.js";import"./iframe-JWM7p3VP.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BfiLiMku.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";import"./if-defined-98Biveud.js";import"./directive-helpers-B-JxG5af.js";import"./library-UYMiFSYt.js";import"./icon.component-C_7FYL5Y.js";const b="The quick brown fox jumps over the lazy dog.",S=(s=!1)=>{const t=["fontsans","fontmono"].map(r=>{const n=a(r,s);return Object.fromEntries(n)});return{...t[0],...t[1]}},T=(s=!1)=>Object.fromEntries(a("fontsize",s).sort((t,r)=>c(t,r,{orderArray:["xsmall","small","medium","large","xlarge","2xlarge","3xlarge"],replaceString:"synfontsize",sortType:"order"}))),C=(s=!1)=>Object.fromEntries(a("fontweight",s).sort((t,r)=>c(t,r,{orderArray:["normal","semibold","bold"],replaceString:"synfontweight",sortType:"order"}))),k=(s=!1)=>Object.fromEntries(a("lineheight",s).sort((t,r)=>c(t,r,{orderArray:["denser","dense","normal","loose","looser"],replaceString:"synlineheight",sortType:"order"})));function m(s){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",tr:"tr",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Tokens/Typography"}),`
`,e.jsx(t.h1,{id:"",children:i?.tokens?.typography?.title.value}),`
`,e.jsx(u,{value:i?.tokens?.typography?.description?.value}),`
`,[["font-family",i?.tokens?.typography?.["font-family"]?.title.value,S(!0)],["font-size","Font Size",T(!0)],["font-weight","Font Weight",C(!0)],["line-height","Line Height",k(!0)]].map(([r,n,x])=>e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:n}),e.jsxs(t.p,{children:[i?.tokens?.typography?.[r]?.description?.value??"",r==="font-family"&&e.jsxs(t.blockquote,{children:[e.jsx(t.strong,{children:"⚠️ Note"}),": As there are many possible setups for font loading (e.g. bundler, pre- and postprocessors, cdn...), we decided to not include the font files. Because of this, ",e.jsx(t.strong,{children:"you"})," are responsible to provide the required ",e.jsx(t.strong,{children:"Open Sans"})," font. Please make sure to load the font files via ",e.jsx(t.code,{children:"@font-face"})," ",e.jsx(t.strong,{children:"before"})," using the tokens. Examples for this can be seen at our ",e.jsx(t.a,{href:"?path=/docs/prerequisites--docs",children:"Prerequisites Documentation section"}),"."]})]}),e.jsx(t.table,{children:e.jsx(t.tbody,{children:e.jsxs(e.Fragment,{children:[e.jsxs(t.tr,{children:[e.jsx(t.th,{children:n}),e.jsx(t.th,{children:"Raw Value"}),e.jsx(t.th,{children:"CSS Token"}),e.jsx(t.th,{children:"SCSS Token"}),e.jsx(t.th,{children:"JS Token"})]}),Object.entries(x).map(([o,f])=>e.jsxs(t.tr,{children:[e.jsx(t.td,{className:r,children:e.jsx(t.span,{className:o.toLowerCase(),style:{[j(r)]:f},children:b})}),e.jsx(t.td,{children:e.jsx(y,{value:o.toLowerCase(),cssProperty:r})}),e.jsx(t.td,{children:e.jsx(l,{value:d(o),children:d(o)})}),e.jsx(t.td,{children:e.jsx(l,{value:h(o),children:h(o)})}),e.jsx(t.td,{children:e.jsx(l,{value:o,children:o})})]},`${o}-row`))]})})},`syn-${r}`)]})),`
`,e.jsx("style",{children:`
  .line-height {
    width: 200px;
  }
`})]})}function X(s={}){const{wrapper:t}={...p(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(m,{...s})}):m(s)}export{X as default};
