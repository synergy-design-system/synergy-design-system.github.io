var V=Object.freeze,pe=Object.defineProperty;var K=(t,e)=>V(pe(t,"raw",{value:V(e||t.slice())}));import{e as ue,s as g,u as m,a as de}from"./static-gmWA-8Kq.js";import{E as me,x as fe}from"./directive-helpers-DGrfjhaU.js";import{f as ye}from"./async-directive-PIeysb9D.js";import{s as ge}from"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import{d as he}from"./_docs-CrPFe_9C.js";import{d as be}from"./index-DrFu-skq.js";import"./index-_2TAQcTa.js";import{a as ve}from"./index-BmTV649i.js";import{c as O,s as $e}from"./custom-elements-manifest-Br-JURis.js";class Ee extends ye{host;element;prevData={};render(e){return me}update(e,[r]){this.element!==e.element&&(this.element=e.element),this.host=e.options?.host||this.element,this.apply(r),this.groom(r),this.prevData={...r}}apply(e){if(!e)return;const{prevData:r,element:s}=this;for(const n in e){const o=e[n];o!==r[n]&&A(s,n,o)}}groom(e){const{prevData:r,element:s}=this;if(r)for(const n in r)(!e||!(n in e)&&s[n]===r[n])&&A(s,n,void 0)}}class Te extends Ee{eventData={};apply(e){if(e)for(const r in e){const s=e[r];s!==this.eventData[r]&&this.applyEvent(r,s)}}applyEvent(e,r){const{prevData:s,element:n}=this;this.eventData[e]=r,s[e]&&n.removeEventListener(e,this,r),n.addEventListener(e,this,r)}groom(e){const{prevData:r,element:s}=this;if(r)for(const n in r)(!e||!(n in e)&&s[n]===r[n])&&this.groomEvent(n,r[n])}groomEvent(e,r){const{element:s}=this;delete this.eventData[e],s.removeEventListener(e,this,r)}handleEvent(e){const r=this.eventData[e.type];typeof r=="function"?r.call(this.host,e):r.handleEvent(e)}disconnected(){const{eventData:e,element:r}=this;for(const s in e){const n=s.slice(1),o=e[s];r.removeEventListener(n,this,o)}}reconnected(){const{eventData:e,element:r}=this;for(const s in e){const n=s.slice(1),o=e[s];r.addEventListener(n,this,o)}}}class _e extends Te{apply(e){if(!e)return;const{prevData:r,element:s}=this;for(const n in e){const o=e[n];if(o===r[n])continue;const i=n.slice(1);switch(n[0]){case"@":this.eventData[i]=o,this.applyEvent(i,o);break;case".":A(s,i,o);break;case"?":o?s.setAttribute(i,""):s.removeAttribute(i);break;default:o?s.setAttribute(n,String(o)):s.removeAttribute(n);break}}}groom(e){const{prevData:r,element:s}=this;if(r)for(const n in r){const o=n.slice(1);if(!e||!(n in e)&&s[o]===r[n])switch(n[0]){case"@":this.groomEvent(o,r[n]);break;case".":A(s,o,void 0);break;case"?":s.removeAttribute(o);break;default:s.removeAttribute(n);break}}}}function A(t,e,r){try{t[e]=r}catch{console.warn(`Could not set property "${e}" on ${t.tagName} because it has no "setter".`)}}const we=ue(_e);let _={};setTimeout(()=>{_=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});function J(t,e){return e.modules?.find(s=>s.declarations?.some(n=>n.tagName===t))?.declarations.find(s=>s.kind==="class"&&s.tagName===t)}function j(t,e=!0){const r={};return t?.members?.forEach(s=>{if(s.kind!=="field")return;const n=t.attributes?.find(f=>s.name===f.fieldName),o=s.name;if(r[o]={name:o,table:{disable:!0}},s.privacy==="private"||s.privacy==="protected"||s.static)return;const i=n?.name||s.name,l=_.typeRef&&s[`${_.typeRef}`]?.text||s?.type?.text,a=Z(l),c=S(s.default);r[i]={name:i,description:H(s.description,o,s.deprecated),defaultValue:c==="''"?"":c,control:e?{type:X(a,n!==void 0)}:!1,table:{category:n?"attributes":"properties",defaultValue:{summary:c},type:{summary:l}}};const y=a?.split("|");y&&y?.length>1&&(r[i].options=y.map(f=>S(f)))}),r}function Oe(t,e=!0){const r={};return t?.members?.forEach(s=>{if(s.kind!=="field"||(r[s.name]={name:s.name,table:{disable:!0}},s.privacy==="private"||s.privacy==="protected"||s.static))return;const n=_.typeRef&&s[`${_.typeRef}`]?.text||s?.type?.text,o=Z(n),i=`${s.name}`,l=X(o);r[i]={name:s.name,description:s.description,defaultValue:ke(l,s.default),control:e?{type:l}:!1,table:{category:"properties",defaultValue:{summary:S(s.default)},type:{summary:n}}};const a=o?.split("|");a&&a?.length>1&&(r[i].options=a.map(c=>S(c)))}),delete r.ref,r}function Q(t){const e={};return t?.events?.forEach(r=>{const s=Ce(r.name);e[s]={name:s,description:r.description,control:!1,table:{category:"events"}}}),e}function I(t,e=!0){const r={};return t?.cssProperties?.forEach(s=>{r[s.name]={name:s.name,description:s.description,defaultValue:s.default,control:e?{type:s.name.toLowerCase().includes("color")?"color":"text"}:!1,table:{category:"css properties"}}}),r}function F(t,e=!0){const r={};return t?.cssParts?.forEach(s=>{r[s.name]={name:s.name,table:{disable:!0}},r[`${s.name}-part`]={name:s.name,description:H(s.description,e?`${s.name}-part`:""),defaultValue:`${t?.tagName}::part(${s.name}) {
}`,control:e?"text":!1,table:{category:"css shadow parts"}}}),r}function B(t,e=!0){const r={};return t?.slots?.forEach(s=>{r[s.name]={name:s.name,table:{disable:!0}};const n=s.name||"default";r[`${n}-slot`]={control:"text",name:n,description:H(s.description,`${n}-slot`),defaultValue:n==="default"?"":`<span slot="${n}"></span>`,control:e?"text":!1,table:{category:"slots"}}}),r}function Se(t){const e={};return t?.events?.forEach(r=>{e[r.name]={name:r.name,description:r.description,control:!1,table:{category:"events",type:{summary:`CustomEvent${r.type?`<${r.type.text}>`:""}`}}}}),e}function ke(t,e){const r=S(e);return t==="boolean"?r==="true":r==="''"?"":r}function X(t,e=!1){if(!t)return"text";const r=t.toLowerCase(),s=r.split("|").map(n=>n.trim()).filter(n=>n!==""&&n!=="null"&&n!=="undefined");return Pe(r)&&!e?"object":C(s,"boolean")?"boolean":C(s,"number")&&!C(s,"string")&&s.every(n=>!n.includes("'"))?"number":C(s,"date")?"date":s.length>1&&s.every(n=>n.includes("'"))?"select":"text"}function Pe(t){return t.includes("array")||t.includes("object")||t.includes("{")||t.includes("[")||t.includes("<")}function C(t=[],e){return t?.find(r=>r===e)!==void 0}function Z(t){return t?t.replace(" | undefined","").replace(" | null",""):""}function S(t){return t?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function H(t,e,r){let s="";return r&&(s+=`\`@deprecated\` ${r}`),t&&(s+=s?`


`:"",s+=t),_.hideArgRef||!e?s:s+=`


arg ref - \`${e}\``}const Ce=t=>`on${Ne(Ae(t))}`;function Ae(t=""){return t.split("-").map((s,n)=>n?s.charAt(0).toUpperCase()+s.slice(1).toLowerCase():s.toLowerCase()).join("")}function Ne(t){return t.charAt(0).toUpperCase()+t.slice(1)}const{useArgs:Le}=__STORYBOOK_MODULE_PREVIEW_API__;let N,q,G={};setTimeout(()=>{G=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});var x;function De(t,e,r,s){if(!e)return m`<${g(t.tagName)}></${g(t.tagName)}>`;t?.tagName!==q&&(N=void 0,q=t?.tagName);const{attrOperators:n,additionalAttrs:o}=Re(t,e,s),i={...n,...o},l=Ie(t,e),a=Me(t,e);return Fe(t),m`${ee(t,e)}
<${g(t.tagName)} 
  ${we(i)}
  ${a}
  >
    ${l}${r||""}
</${g(t.tagName)}>
${G.hideScriptTag?"":m(x||(x=K([`<script>
  window.component = document.querySelector("`,`");
<\/script>`])),t.tagName)}
`}function ee(t,e){const r=je(t,e);return`${r}`?.replaceAll(/\s+/g,"")!=""?m`<style>${r}</style>`:""}function Re(t,e,r){const s=j(t),n={},o={},i={};return Object.keys(s).forEach(l=>{const a=s[l];if(a?.table?.category!=="attributes")return;const c=a.name,y=e[l],f=a.control.type==="boolean"?`?${c}`:c;(y!==s[l].defaultValue||G.renderDefaultAttributeValues)&&(n[f]=y==="false"?!1:y)}),Object.keys(e).filter(l=>s[l]?.table?.category==="properties").forEach(l=>{if(l.startsWith("on"))return;const a=e[l];o[`.${l}`]=a}),Object.keys(e).filter(l=>!Object.keys(r||{}).includes(l)).forEach(l=>{!l.startsWith("on")&&typeof e[l]!="function"&&(i[l]=e[l])}),{attrOperators:n,propOperators:o,additionalAttrs:i}}function Me(t,e){if(!t?.cssProperties?.length)return;const r=I(t);return g(`style="${Object.keys(r).map(s=>{const n=r[s].name,o=e[s];return o?`${n}: ${o||""}`:null}).filter(s=>s!==null).join(";")}"`)}function je(t,e){const r=F(t);if(!Object.keys(r).some(o=>!!e[o]))return;const n=Object.keys(r).filter(o=>o.endsWith("-part")).map(o=>{const i=r[o].name,l=e[o];return l?.replaceAll(/\s+/g,"")!==`${t?.tagName}::part(${i}){}`?`
${l}`:null}).filter(o=>o!==null).join(`
`);return n?g(`${n}
`):""}function Ie(t,e){const r=B(t);return g(`${Object.keys(r).filter(n=>n.endsWith("-slot")).map(n=>{const o=r[n].name,i=e[n];return o==="default"?i||null:i!==`<span slot="${o}"></span>`?i:null}).filter(n=>n!==null).join("")}`)}function Fe(t){Be(t),setTimeout(()=>{const e=document.querySelector(t.tagName);N?.observe(e,{attributes:!0})})}function Be(t){let e=!1;const r=Le()[1],s=j(t);N||(N=new MutationObserver(n=>{n.forEach(o=>{if(o.type!=="attributes"||o.attributeName==="class"&&e)return;e=!0;const i=s[`${o.attributeName}`];i?.control==="boolean"||i?.control?.type==="boolean"?r({[`${o.attributeName}`]:o.target?.hasAttribute(o.attributeName||"")}):r({[`${o.attributeName}`]:o.target.getAttribute(o.attributeName||"")}),e=!1})}))}function He(t){window.__WC_STORYBOOK_HELPERS_CONFIG__=t}function te(t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const r=J(t,e),s=r?.events?.map(o=>o.name)||[],n=se(r);return{args:re(r),argTypes:n,reactArgs:Ue(r),reactArgTypes:ne(r),events:s,styleTemplate:o=>ee(r,o),template:(o,i)=>De(r,o,i,n)}}function se(t){return{...I(t),...F(t),...B(t),...j(t),...Se(t)}}function re(t,e){return e||(e=se(t)),Object.entries(e).filter(([,s])=>s?.control).map(([s,n])=>{let o=Ge(n.defaultValue);return n.table?.category==="css properties"&&(o=o?.toString()),{[s]:o===void 0?"":o}}).reduce((s,n)=>({...s,...n}),{})}function Ge(t){try{return JSON.parse(t)}catch{return t}}function ne(t){return{...Oe(t),...Q(t),...I(t,!1),...F(t,!1),...B(t,!1)}}function Ue(t){const e=re(t,ne(t)),r=Object.entries(Q(t)).map(([s])=>({[s]:()=>{}})).reduce((s,n)=>({...s,...n}),{});return{...e,...r}}const{useParameter:We,addons:Ve,useEffect:Ke,useMemo:At,definePreview:Nt}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:qe}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var Ye=Object.defineProperty,oe=(t,e)=>{for(var r in e)Ye(t,r,{get:e[r],enumerable:!0})},ze={};oe(ze,{initialGlobals:()=>Qe});var L="themes",xe=`storybook/${L}`,ae="theme",Y={},Je={REGISTER_THEMES:`${xe}/REGISTER_THEMES`},Qe={[ae]:""},Xe={};oe(Xe,{initializeThemeState:()=>le,pluckThemeFromContext:()=>ie,useThemeParameters:()=>Ze});function ie({globals:t}){return t[ae]||""}function Ze(t){return qe(be`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),t?t.parameters[L]??Y:We(L,Y)}function le(t,e){Ve.getChannel().emit(Je.REGISTER_THEMES,{defaultTheme:e,themes:t})}var et="html",z=t=>t.split(" ").filter(Boolean),tt=({themes:t,defaultTheme:e,parentSelector:r=et})=>(le(Object.keys(t),e),(s,n)=>{let{themeOverride:o}=n.parameters[L]??{},i=ie(n);return Ke(()=>{let l=o||i||e,a=document.querySelector(r);if(!a)return;Object.entries(t).filter(([y])=>y!==l).forEach(([y,f])=>{let $=z(f);$.length>0&&a.classList.remove(...$)});let c=z(t[l]);c.length>0&&a.classList.add(...c)},[o,i]),s()});const{definePreview:Lt}=__STORYBOOK_MODULE_PREVIEW_API__;var st=Object.defineProperty,rt=(t,e)=>{for(var r in e)st(t,r,{get:e[r],enumerable:!0})},nt={};rt(nt,{initialGlobals:()=>lt});var ot="viewport",at={[ot]:{value:void 0,isRotated:!1}},it={viewport:"reset",viewportRotated:!1},lt=globalThis.FEATURES?.viewportStoryGlobals?at:it,ct={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};function pt(t){const e=typeof window<"u"&&window;return!!(e&&(/Chromatic/.test(e.navigator.userAgent)||/chromatic=true/.test(e.location.href)))}const ut=(t,...e)=>pt()?fe`
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
      ${t(...e)}
    `:t(...e),D="🌞 light",R="🌙 dark",dt=t=>`https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=${t}`,mt=(t,e="Go to Figma page")=>({label:e,type:"link",url:dt(t)});function ft(t,e){const r=document.querySelectorAll(`#anchor--${e.id}`),n=JSON.parse('{"@synergy-design-system/components":"2.37.0","@synergy-design-system/assets":"1.16.0","@synergy-design-system/styles":"1.7.1","@synergy-design-system/tokens":"2.20.0"}');return r.forEach(o=>{const i=o.querySelector(".docblock-code-toggle");if(i){const l=i.cloneNode(!0);l.textContent="Edit on CodePen",l.classList.add("docblock-codepen-button");const a=o.querySelector(".sb-bar");a?o.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.remove()}):o.querySelectorAll(".docblock-codepen-button").forEach(c=>{c.remove()}),i.parentElement.appendChild(l),a&&(o.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.style.display="block",c.style.borderRight="none"}),o.querySelector(".docblock-codepen-button:last-of-type").style.display="none"),l.addEventListener("click",()=>{const c=document.createElement("form");c.action="https://codepen.io/pen/define",c.method="POST",c.target="_blank";const y={css:`/* Import theme */
@import url("https://esm.sh/@synergy-design-system/tokens@${n["@synergy-design-system/tokens"]}/dist/themes/light.css");

/* Import utilities */
@import url("https://esm.sh/@synergy-design-system/components@${n["@synergy-design-system/components"]}/dist/styles/index.css");

/* Import styles */
@import url("https://esm.sh/@synergy-design-system/styles@${n["@synergy-design-system/styles"]}/dist/index.css");

body {
  font-family: var(--syn-font-sans);
}`,css_external:"",description:"",editors:1110,head:'<meta name="viewport" content="width=device-width">',html:t,js:`import * as components from "https://esm.sh/@synergy-design-system/components@${n["@synergy-design-system/components"]}/dist/synergy.js";

// Override to make icons work with CDN
const { registerIconLibrary } = components;

registerIconLibrary("default", {
resolver: (name) =>
\`https://esm.sh/@synergy-design-system/assets@${n["@synergy-design-system/assets"]}/src/icons/\${name}.svg\`
});`,js_external:"",js_module:!0,js_pre_processor:"none",tags:["synergy-design-system","web components"],title:""},f=document.createElement("input");f.type="hidden",f.name="data",f.value=JSON.stringify(y),c.append(f),document.documentElement.append(c),c.submit(),c.remove()})}}),t}const yt=tt({defaultTheme:D,parentSelector:"body",themes:{[D]:"syn-theme-light",[R]:"syn-theme-dark"}}),ce={decorators:[ut,yt],parameters:{backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{diffThreshold:.5,disableSnapshot:!0,modes:{[D]:{theme:D},[R]:{theme:R}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},design:mt("104-238"),docs:{stories:{inline:!1},toc:{headingSelector:"h2, h3"},source:{format:"html",transform:(t,e)=>ht.codeOptimizer(ft(t,e))}},viewport:{defaultViewport:"defaultViewPort",viewports:{...ct,defaultViewPort:{name:"Default",styles:{width:"100%",height:"100%"},type:"desktop"}}}}},Dt=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));He({hideArgRef:!0,hideScriptTag:!0});O.modules&&(O.modules=O.modules.map(t=>(t.declarations&&(t.declarations=t.declarations.map(e=>(e.members&&(e.members=e.members.filter(r=>r.description&&r.privacy!=="private")),e))),t)));const gt={...O,modules:[...O.modules,...$e.modules]};ge(gt);console.log("Custom elements manifest loaded for components and styles");const M=t=>{const{args:e,events:r,argTypes:s}=te(t),n=J(t,window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__),o=()=>({status:{styles:{backgroundColor:n?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${n?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${n?.since}`}});return{args:e,argTypes:(()=>{for(const a in s)s.hasOwnProperty(a)&&s[a].table&&s[a].table.category==="properties"&&(s[a].control={disabled:!0});return{...s,...n?.events?.reduce((a,c)=>(a[c.name]={...c,control:!1,table:{category:"Events"}},a),{}),...n?.members?.filter(a=>a.kind==="method").reduce((a,c)=>(a[c.name]={...c,control:!1,table:{category:"Methods"}},a),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:r}}}},T=t=>({getSuffixFromType:e=>({attribute:"",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[e],getValuesFromAttribute:e=>{e.endsWith("-attr")||(e=`${e}-attr`);const{argTypes:r}=M(t);return r[e]?.control?.type==="boolean"?[!0,!1]:r[e].options},getValuesFromAttributes:e=>e?.map(r=>(r.endsWith("-attr")||(r=`${r}-attr`),{name:r,values:T(t).getValuesFromAttribute(r)})),overrideArgs:(e,r)=>{const s=r||M(t).args,n=Array.isArray(e)?e:[e];for(const o of n){const i=T(t).getSuffixFromType(o.type);s[`${o.name}${i}`]=o.value}return s}}),Rt=t=>{const{template:e,manifest:r}=te(t),{args:s}=M(t),{getValuesFromAttribute:n}=T(t);return{generateTemplate:({axis:i,constants:l=[],options:a,args:c=s})=>{const y=p=>{if(!r?.style)return e(p);const u=Object.keys(p).filter(d=>d.endsWith("-attr")).reduce((d,b)=>{const h=b.substring(0,b.length-5);return p[b]===!0?d[h]=!0:p[b]==="false"||p[b]==="(default)"?d[h]=!1:p[b]&&(h.endsWith("...")?d[h.replace("...",p[b])]=!0:d[p[b]]=!0),d},{}),v=p["default-slot"]||"",E={[t]:!0,...u},w=Object.keys(E).filter(d=>E[d]).join(" ");if(a?.templateContent){const d=a.templateContent.replaceAll("%SLOT%",v).replaceAll("%CLASSES%",w);return g(d)}return m`<div class=${de(E)}>${g(v)}</div>`},f=(Array.isArray(l)?l:[l]).reduce((p,u)=>({...p,[`${u.name}${T(t).getSuffixFromType(u.type)}`]:u.value}),{});if(!i?.x&&!i?.y&&!a?.title)return m`${y({...c,...f})}`;const $=p=>p?Array.isArray(p)?p.map(u=>({...u,values:u.values||n(u.name)})):[{...p,values:p.values||n(p.name)}]:[{}],U=$(i?.x),W=$(i?.y),k=(Array.isArray(l)?l:[l]).find(p=>p.type==="template")?.value,P=`uuid-${crypto.randomUUID()}`;return m`
      <style>
        table:not(:first-of-type).story-template {
          margin-top: 72px;
        }
        .story-template th {
          text-align: left;
        }
        .story-template td {
          text-align: center;
        }
        .story-template th,
        .story-template td {
          padding: 16px;
          font-size: 12px;
        }
        td.template {
          font-size: 16px;
        }
        .story-template thead tr th {
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }
        .story-template thead th.title {
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
        }
        .story-template tbody tr th {
          font-weight: normal;
          text-align: center;
        }

        .story-template tbody tr:first-of-type th:first-of-type {
          width: 32px;
        }

        .story-template tbody tr th[rowspan] {
          text-align: center;
          padding-left: 0;
          border-right: 1px solid #e0e0e0;
          font-weight: bold;
        }

        .story-template tbody tr th span {
          -ms-writing-mode: tb-rl;
          -webkit-writing-mode: vertical-rl;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        ${a?.templateBackground&&`
          .${P}.story-template tbody tr.template-row td.template {
            background: ${a?.templateBackground};
          }
        `}

        ${a?.templateBackgrounds?.colors.map((p,u)=>{const v=E=>`${a?.templateBackgrounds?.colors.length}n + ${E+1}`;return a?.templateBackgrounds?.alternate==="y"?`
                .${P}.story-template tbody tr.template-row:nth-of-type(${v(u)}) td.template {
                  background: ${p};
                }
              `:`
                .${P}.story-template tbody tr.template-row td.template:nth-of-type(${v(u)}) {
                  background: ${p};
                }
              `})}
      </style>
      ${U.map(p=>m` ${W.map(u=>{let v=!0;const E=U.length>1||p.values,w=(p&&u||W.length>1)&&u?.values;return m`
            <table class="story-template ${P} ${a?.classes}">
              <thead>
                ${a?.title&&m`<tr>
                  <th class="title" colspan=${(p.values?.length||0)+3}><code>${a?.title}</code></th>
                </tr>`}
                ${p&&p.values&&m`
                  <tr>
                    ${w?m`<td></td>`:""} <td></td>
                    ${E&&m`<th colspan=${p.values?.length||0}><code>${p.title||p.name}</code></th>`}
                    </tr>
                  </tr>
                  ${m`
                    <tr>
                      ${w?m`<td></td>`:""}
                      <td></td>
                      ${p?.values?.map(d=>m`<td><code>${d.title||d}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(u?.values||[""]).map(d=>{const b=m`
                    <tr class="template-row">
                      ${v&&w?m`<th rowspan="${u?.values?.length}">
                            <span><code>${u.title||u.name}</code></span>
                          </th>`:""}
                      <th><code>${d.title||d}</code></th>
                      ${(p?.values||[""]).map(h=>m`
                          <td class="template template-x-${p?.values?.indexOf(h)||1} template-y-${u?.values?.indexOf(d.value||d)||1}">
                          ${p.type==="template"&&g((h.value||h).split("%TEMPLATE%")[0]||"")||""}
                          ${u.type==="template"&&g((d.value||d).split("%TEMPLATE%")[0]||"")||""}
                          ${k&&g(k.split("%TEMPLATE%")[0]||"")||""}
                            ${y({...c,...f,...p&&p.type!=="template"&&{[`${p.name}${T(t).getSuffixFromType(p.type)}`]:h.hasOwnProperty("value")?h.value:h},...u&&u.type!=="template"&&{[`${u.name}${T(t).getSuffixFromType(u.type)}`]:d.hasOwnProperty("value")?d.value:d}})}
                         ${u.type==="template"&&g((d.value||d).split("%TEMPLATE%")[1]||"")||""}
                         ${p.type==="template"&&g((h.value||h).split("%TEMPLATE%")[1]||"")||""}
                          ${k&&g(k.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return v=!1,b})}
              </tbody>
            </table>
          `})}`)}
    `}}},ht={codeOptimizer:t=>{const{body:e}=new DOMParser().parseFromString(t,"text/html"),r=e.querySelectorAll(".template");let s="";return r.length?s=Array.from(r).map(n=>n.innerHTML).join(`
`):s=e.innerHTML,s=s.replace(/<style><\/style>/g,"").replace(/<!-- preview-ignore:start -->[\s\S]*?<!-- preview-ignore:end -->/g,"").replace(/\/\/ preview-ignore:start[\s\S]*?\/\/ preview-ignore:end/g,"").replace(/<style>\n<\/style>/g,"").replace(/<script>\s*component = document\.querySelector\('(.+?)'\);\s*<\/script>/g,""),s}},Mt=(t,e,r="components")=>{const s=he[r][t]??{},n=s[e]?.description?.value??"No Description",o=s[e]?.note?.value??"",i=c=>c.replace(/\n/g,"<br/>"),l=i(n),a=o?`<br/><br/><strong>👨‍💻 Additional developer Information:</strong><br>${i(o)}`:"";return`${l}${a}`},jt=(t,e=150)=>{const r=isNaN(e)?e:{heightPx:e},{afterRender:s="",additionalChromaticOptions:n={},heightPx:o=150,styleHeading:i={}}=r,l=Object.entries(i).map(([a,c])=>`${a}: ${c};`).join(" ");return{parameters:{chromatic:{...ce?.parameters?.chromatic,...n,disableSnapshot:!1},docs:{disable:!0}},render:(a,c)=>m`
      ${Object.entries(t).map(([y,f])=>{const $=f.name??ve(y);return m`
          <div style='height: ${o}px; margin: var(--syn-spacing-small);'>
            <h3 data-chromatic="ignore" style='${l}'>${$}</h3>
            ${f.render?.(a,c)}
          </div>
      `})}
      ${s}
    `}};export{mt as a,T as b,jt as c,Rt as d,Dt as e,Mt as g,pt as i,ce as p,M as s};
