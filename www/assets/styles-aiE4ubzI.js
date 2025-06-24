import{s as n,h as p}from"./iframe-BlM2pOhP.js";const h=(i,c="span",u={})=>{const{"default-slot":$,...d}=i,r=Object.entries(d).map(([e,t])=>typeof t=="boolean"?t?e:null:t).filter(Boolean).join(" "),a=n(c),l=Object.entries(u);let s="";l.length===0?s=`class="${r}"`:s=l.reduce((e,[t,o])=>{const b=t==="class"?`${o} ${r}`:o;return`${e} ${t}="${b}"`},"");const f=s.length>0?n(s):"";return p`
    <${a} ${f}>
      ${n($)}
    </${a}>
  `};export{h as r};
