import{s as n,u as p}from"./iframe-DxhJXqnf.js";const m=(i,c="span",u={})=>{const{"default-slot":$,...d}=i,r=Object.entries(d).map(([s,t])=>typeof t=="boolean"?t?s:null:t).filter(Boolean).join(" "),l=n(c),o=Object.entries(u);let e="";o.length===0?e=`class="${r}"`:e=o.reduce((s,[t,a])=>{const b=t==="class"?`${a} ${r}`:a;return`${s} ${t}="${b}"`},"");const f=e.length>0?n(e):"";return p`
    <${l} ${f}>
      ${n($)}
    </${l}>
  `};export{m as r};
