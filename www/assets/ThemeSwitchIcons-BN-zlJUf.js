import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,t as n}from"./lit-D4-0ovri.js";import{c as r,l as i,n as a,o,r as s,s as c}from"./library-Cm77zAf0.js";import{n as l,t as u}from"./esm-DoXhaCZR.js";import{t as d}from"./react-Q1GcV6wX.js";import{n as f}from"./isChromatic-3XEt0aYp.js";import{d as p,i as m,l as h,r as g,s as _}from"./modes-DiggSWQK.js";import{n as v,t as y}from"./library.migration-DdxuNU-p.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{b=Object.defineProperty,x=(e,t)=>{for(var n in t)b(e,n,{get:t[n],enumerable:!0})},S=`themes`,C=`storybook/${S}`,w=`theme`,`${C}`,T={},E={REGISTER_THEMES:`${C}/REGISTER_THEMES`}})))()}var O,k;function A(){return(A=e((()=>{D(),O={},x(O,{initialGlobals:()=>k}),k={[w]:``}})))()}function j({globals:e}){return e.theme||``}function M(e){return I(u`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters.themes??T:R(S,T)}function N(e,t){L.getChannel().emit(E.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{A(),D(),l(),d(),{useEffect:P}=__STORYBOOK_MODULE_PREVIEW_API__,F={},x(F,{initializeThemeState:()=>N,pluckThemeFromContext:()=>j,useThemeParameters:()=>M}),{deprecate:I}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{addons:L,useParameter:R}=__STORYBOOK_MODULE_PREVIEW_API__,z=`html`,B=e=>e.split(` `).filter(Boolean),V=({themes:e,defaultTheme:t,parentSelector:n=z})=>(N(Object.keys(e),t),(r,i)=>{let{themeOverride:a}=i.parameters.themes??{},o=j(i);return P(()=>{let r=a||o||t,i=document.querySelector(n);if(!i)return;Object.entries(e).filter(([e])=>e!==r).forEach(([e,t])=>{let n=B(t);n.length>0&&i.classList.remove(...n)});let s=B(e[r]);s.length>0&&i.classList.add(...s)},[a,o]),r()}),{useEffect:H}=__STORYBOOK_MODULE_PREVIEW_API__,{useMemo:U}=__STORYBOOK_MODULE_PREVIEW_API__})))()}var G;function K(){return(K=e((()=>{n(),G=(e,n)=>f()?t`
      <style>
      :root {
        --syn-transition-x-fast: -1s !important;
        --syn-transition-fast: -1s !important;
        --syn-transition-medium: -1s !important;
        --syn-transition-slow: -1s !important;
        --syn-transition-x-slow: -1s !important;
      }
      syn-spinner,
      syn-button::part(spinner),
      syn-menu-item::part(spinner),
      syn-progress-bar {
        --speed: -1s !important;
      }
      </style>
      ${e(n)}
    `:e(n.args)})))()}function q(e,t){let n=e.querySelectorAll(`syn-icon[library="system"]`);t.push(...Array.from(n)),e.querySelectorAll(`*`).forEach(e=>{e.shadowRoot&&q(e.shadowRoot,t)})}function J(){let e=[];q(document,e),e.forEach(e=>e.requestUpdate(`name`))}var Y;function X(){return(X=e((()=>{W(),r(),y(),a(),p(),c(),Y=(e,t)=>{let n=F.pluckThemeFromContext(t),r;switch(n){case g:case m:i(`sick2018`),r=e=>o(`assets/sick2018/${e}.svg`);break;case _:case h:default:i(`sick2025`),r=e=>o(`assets/sick2025/${v(e)}.svg`)}return s(`default`,{name:`default`,resolver:r}),setTimeout(J),e(t.args,t)}})))()}export{F as a,A as c,G as i,k as l,Y as n,W as o,K as r,V as s,X as t,D as u};