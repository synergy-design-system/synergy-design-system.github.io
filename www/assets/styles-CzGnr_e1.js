import{t as n,k as p}from"./index-BhlDfQD0.js";const m=(i,c="span",u={})=>{const{"default-slot":$,...d}=i,r=Object.entries(d).map(([s,t])=>typeof t=="boolean"?t?s:null:t).filter(Boolean).join(" "),a=n(c),l=Object.entries(u);let e="";l.length===0?e=`class="${r}"`:e=l.reduce((s,[t,o])=>{const b=t==="class"?`${o} ${r}`:o;return`${s} ${t}="${b}"`},"");const f=e.length>0?n(e):"";return p`
    <${a} ${f}>
      ${n($)}
    </${a}>
  `};export{m as r};
