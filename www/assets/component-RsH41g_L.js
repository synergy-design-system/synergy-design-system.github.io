var U=Object.freeze,x=Object.defineProperty;var H=(s,e)=>U(x(s,"raw",{value:U(e||s.slice())}));import{e as tt,n as f,i as m,a as et}from"./icon-button-C6r21gbd.js";import{T as rt}from"./lit-element-DILkAbkc.js";import{f as st,p as nt}from"./preview-CrOPaXSp.js";import{s as at}from"./chunk-GKNNPQCW-Dc4YePFK.js";import{d as ot,s as lt}from"./index-DlOq3jis.js";class it extends st{host;element;prevData={};render(e){return rt}update(e,[r]){this.element!==e.element&&(this.element=e.element),this.host=e.options?.host||this.element,this.apply(r),this.groom(r),this.prevData={...r}}apply(e){if(!e)return;const{prevData:r,element:t}=this;for(const n in e){const a=e[n];a!==r[n]&&N(t,n,a)}}groom(e){const{prevData:r,element:t}=this;if(r)for(const n in r)(!e||!(n in e)&&t[n]===r[n])&&N(t,n,void 0)}}class ct extends it{eventData={};apply(e){if(e)for(const r in e){const t=e[r];t!==this.eventData[r]&&this.applyEvent(r,t)}}applyEvent(e,r){const{prevData:t,element:n}=this;this.eventData[e]=r,t[e]&&n.removeEventListener(e,this,r),n.addEventListener(e,this,r)}groom(e){const{prevData:r,element:t}=this;if(r)for(const n in r)(!e||!(n in e)&&t[n]===r[n])&&this.groomEvent(n,r[n])}groomEvent(e,r){const{element:t}=this;delete this.eventData[e],t.removeEventListener(e,this,r)}handleEvent(e){const r=this.eventData[e.type];typeof r=="function"?r.call(this.host,e):r.handleEvent(e)}disconnected(){const{eventData:e,element:r}=this;for(const t in e){const n=t.slice(1),a=e[t];r.removeEventListener(n,this,a)}}reconnected(){const{eventData:e,element:r}=this;for(const t in e){const n=t.slice(1),a=e[t];r.addEventListener(n,this,a)}}}class ut extends ct{apply(e){if(!e)return;const{prevData:r,element:t}=this;for(const n in e){const a=e[n];if(a===r[n])continue;const i=n.slice(1);switch(n[0]){case"@":this.eventData[i]=a,this.applyEvent(i,a);break;case".":N(t,i,a);break;case"?":a?t.setAttribute(i,""):t.removeAttribute(i);break;default:a?t.setAttribute(n,String(a)):t.removeAttribute(n);break}}}groom(e){const{prevData:r,element:t}=this;if(r)for(const n in r){const a=n.slice(1);if(!e||!(n in e)&&t[a]===r[n])switch(n[0]){case"@":this.groomEvent(a,r[n]);break;case".":N(t,a,void 0);break;case"?":t.removeAttribute(a);break;default:t.removeAttribute(n);break}}}}function N(s,e,r){try{s[e]=r}catch{console.warn(`Could not set property "${e}" on ${s.tagName} because it has no "setter".`)}}const pt=tt(ut);let O={};setTimeout(()=>{O=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});function Y(s,e){return e.modules?.find(t=>t.declarations?.some(n=>n.tagName===s))?.declarations.find(t=>t.kind==="class"&&t.tagName===s)}function A(s,e=!0){const r={};return s?.members?.forEach(t=>{if(t.kind!=="field")return;const n=s.attributes?.find($=>t.name===$.fieldName),a=t.name;if(r[a]={name:a,table:{disable:!0}},t.privacy==="private"||t.privacy==="protected"||t.static)return;const i=n?.name||t.name,c=O.typeRef&&t[`${O.typeRef}`]?.text||t?.type?.text,o=G(c),d=E(t.default);r[i]={name:i,description:R(t.description,a,t.deprecated),defaultValue:d==="''"?"":d,control:e?{type:K(o,n!==void 0)}:!1,table:{category:n?"attributes":"properties",defaultValue:{summary:d},type:{summary:c}}};const h=o?.split("|");h&&h?.length>1&&(r[i].options=h.map($=>E($)))}),r}function ft(s,e=!0){const r={};return s?.members?.forEach(t=>{if(t.kind!=="field"||(r[t.name]={name:t.name,table:{disable:!0}},t.privacy==="private"||t.privacy==="protected"||t.static))return;const n=O.typeRef&&t[`${O.typeRef}`]?.text||t?.type?.text,a=G(n),i=`${t.name}`,c=K(a);r[i]={name:t.name,description:t.description,defaultValue:mt(c,t.default),control:e?{type:c}:!1,table:{category:"properties",defaultValue:{summary:E(t.default)},type:{summary:n}}};const o=a?.split("|");o&&o?.length>1&&(r[i].options=o.map(d=>E(d)))}),delete r.ref,r}function z(s){const e={};return s?.events?.forEach(r=>{const t=ht(r.name);e[t]={name:t,description:r.description,control:!1,table:{category:"events"}}}),e}function D(s,e=!0){const r={};return s?.cssProperties?.forEach(t=>{r[t.name]={name:t.name,description:t.description,defaultValue:t.default,control:e?{type:t.name.toLowerCase().includes("color")?"color":"text"}:!1,table:{category:"css properties"}}}),r}function j(s,e=!0){const r={};return s?.cssParts?.forEach(t=>{r[t.name]={name:t.name,table:{disable:!0}},r[`${t.name}-part`]={name:t.name,description:R(t.description,e?`${t.name}-part`:""),defaultValue:`${s?.tagName}::part(${t.name}) {
}`,control:e?"text":!1,table:{category:"css shadow parts"}}}),r}function L(s,e=!0){const r={};return s?.slots?.forEach(t=>{r[t.name]={name:t.name,table:{disable:!0}};const n=t.name||"default";r[`${n}-slot`]={control:"text",name:n,description:R(t.description,`${n}-slot`),defaultValue:n==="default"?"":`<span slot="${n}"></span>`,control:e?"text":!1,table:{category:"slots"}}}),r}function dt(s){const e={};return s?.events?.forEach(r=>{e[r.name]={name:r.name,description:r.description,control:!1,table:{category:"events",type:{summary:`CustomEvent${r.type?`<${r.type.text}>`:""}`}}}}),e}function mt(s,e){const r=E(e);return s==="boolean"?r==="true":r==="''"?"":r}function K(s,e=!1){if(!s)return"text";const r=s.toLowerCase(),t=r.split("|").map(n=>n.trim()).filter(n=>n!==""&&n!=="null"&&n!=="undefined");return gt(r)&&!e?"object":_(t,"boolean")?"boolean":_(t,"number")&&!_(t,"string")&&t.every(n=>!n.includes("'"))?"number":_(t,"date")?"date":t.length>1&&t.every(n=>n.includes("'"))?"select":"text"}function gt(s){return s.includes("array")||s.includes("object")||s.includes("{")||s.includes("[")||s.includes("<")}function _(s=[],e){return s?.find(r=>r===e)!==void 0}function G(s){return s?s.replace(" | undefined","").replace(" | null",""):""}function E(s){return s?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function R(s,e,r){let t="";return r&&(t+=`\`@deprecated\` ${r}`),s&&(t+=t?`


`:"",t+=s),O.hideArgRef||!e?t:t+=`


arg ref - \`${e}\``}const ht=s=>`on${$t(yt(s))}`;function yt(s=""){return s.split("-").map((t,n)=>n?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()).join("")}function $t(s){return s.charAt(0).toUpperCase()+s.slice(1)}const{useArgs:bt}=__STORYBOOK_MODULE_PREVIEW_API__;let P,I,M={};setTimeout(()=>{M=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});var V;function vt(s,e,r,t){if(!e)return f`<${m(s.tagName)}></${m(s.tagName)}>`;s?.tagName!==I&&(P=void 0,I=s?.tagName);const{attrOperators:n,additionalAttrs:a}=Tt(s,e,t),i={...n,...a},c=Et(s,e),o=Ot(s,e);return St(s),f`${q(s,e)}
<${m(s.tagName)} 
  ${pt(i)}
  ${o}
  >
    ${c}${r||""}
</${m(s.tagName)}>
${M.hideScriptTag?"":f(V||(V=H([`<script>
  window.component = document.querySelector("`,`");
<\/script>`])),s.tagName)}
`}function q(s,e){const r=wt(s,e);return`${r}`?.replaceAll(/\s+/g,"")!=""?f`<style>${r}</style>`:""}function Tt(s,e,r){const t=A(s),n={},a={},i={};return Object.keys(t).forEach(c=>{const o=t[c];if(o?.table?.category!=="attributes")return;const d=o.name,h=e[c],$=o.control.type==="boolean"?`?${d}`:d;(h!==t[c].defaultValue||M.renderDefaultAttributeValues)&&(n[$]=h==="false"?!1:h)}),Object.keys(e).filter(c=>t[c]?.table?.category==="properties").forEach(c=>{if(c.startsWith("on"))return;const o=e[c];a[`.${c}`]=o}),Object.keys(e).filter(c=>!Object.keys(r||{}).includes(c)).forEach(c=>{!c.startsWith("on")&&typeof e[c]!="function"&&(i[c]=e[c])}),{attrOperators:n,propOperators:a,additionalAttrs:i}}function Ot(s,e){if(!s?.cssProperties?.length)return;const r=D(s);return m(`style="${Object.keys(r).map(t=>{const n=r[t].name,a=e[t];return a?`${n}: ${a||""}`:null}).filter(t=>t!==null).join(";")}"`)}function wt(s,e){const r=j(s);if(!Object.keys(r).some(a=>!!e[a]))return;const n=Object.keys(r).filter(a=>a.endsWith("-part")).map(a=>{const i=r[a].name,c=e[a];return c?.replaceAll(/\s+/g,"")!==`${s?.tagName}::part(${i}){}`?`
${c}`:null}).filter(a=>a!==null).join(`
`);return n?m(`${n}
`):""}function Et(s,e){const r=L(s);return m(`${Object.keys(r).filter(n=>n.endsWith("-slot")).map(n=>{const a=r[n].name,i=e[n];return a==="default"?i||null:i!==`<span slot="${a}"></span>`?i:null}).filter(n=>n!==null).join("")}`)}function St(s){Ct(s),setTimeout(()=>{const e=document.querySelector(s.tagName);P?.observe(e,{attributes:!0})})}function Ct(s){let e=!1;const r=bt()[1],t=A(s);P||(P=new MutationObserver(n=>{n.forEach(a=>{if(a.type!=="attributes"||a.attributeName==="class"&&e)return;e=!0;const i=t[`${a.attributeName}`];i?.control==="boolean"||i?.control?.type==="boolean"?r({[`${a.attributeName}`]:a.target?.hasAttribute(a.attributeName||"")}):r({[`${a.attributeName}`]:a.target.getAttribute(a.attributeName||"")}),e=!1})}))}function _t(s){window.__WC_STORYBOOK_HELPERS_CONFIG__=s}function J(s){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const r=Y(s,e),t=r?.events?.map(a=>a.name)||[],n=Q(r);return{args:X(r),argTypes:n,reactArgs:Pt(r),reactArgTypes:Z(r),events:t,styleTemplate:a=>q(r,a),template:(a,i)=>vt(r,a,i,n)}}function Q(s){return{...D(s),...j(s),...L(s),...A(s),...dt(s)}}function X(s,e){return e||(e=Q(s)),Object.entries(e).filter(([,t])=>t?.control).map(([t,n])=>{let a=Nt(n.defaultValue);return n.table?.category==="css properties"&&(a=a?.toString()),{[t]:a===void 0?"":a}}).reduce((t,n)=>({...t,...n}),{})}function Nt(s){try{return JSON.parse(s)}catch{return s}}function Z(s){return{...ft(s),...z(s),...D(s,!1),...j(s,!1),...L(s,!1)}}function Pt(s){const e=X(s,Z(s)),r=Object.entries(z(s)).map(([t])=>({[t]:()=>{}})).reduce((t,n)=>({...t,...n}),{});return{...e,...r}}_t({hideArgRef:!0,hideScriptTag:!0});async function kt(){await fetch("./custom-elements.json");let e=await(await fetch("./custom-elements.json")).json();e.modules&&(e.modules=e.modules.map(r=>(r.declarations&&(r.declarations=r.declarations.map(t=>(t.members&&(t.members=t.members.filter(n=>n.description&&n.privacy!=="private")),t))),r))),at(e),console.log("Custom elements manifest loaded")}await kt();const k=s=>{const{args:e,events:r,argTypes:t}=J(s),n=Y(s,window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__),a=()=>({status:{styles:{backgroundColor:n?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${n?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${n?.since}`}});return{args:e,argTypes:(()=>{for(const o in t)t.hasOwnProperty(o)&&t[o].table&&t[o].table.category==="properties"&&(t[o].control={disabled:!0});return{...t,...n?.events?.reduce((o,d)=>(o[d.name]={...d,control:!1,table:{category:"Events"}},o),{}),...n?.members?.filter(o=>o.kind==="method").reduce((o,d)=>(o[d.name]={...d,control:!1,table:{category:"Methods"}},o),{})}})(),parameters:{badges:["status","since"],badgesConfig:a(),actions:{handles:r}}}},T=s=>({getSuffixFromType:e=>({attribute:"",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[e],getValuesFromAttribute:e=>{e.endsWith("-attr")||(e=`${e}-attr`);const{argTypes:r}=k(s);return r[e]?.control?.type==="boolean"?[!0,!1]:r[e].options},getValuesFromAttributes:e=>e?.map(r=>(r.endsWith("-attr")||(r=`${r}-attr`),{name:r,values:T(s).getValuesFromAttribute(r)})),overrideArgs:(e,r)=>{const t=r||k(s).args,n=Array.isArray(e)?e:[e];for(const a of n){const i=T(s).getSuffixFromType(a.type);t[`${a.name}${i}`]=a.value}return t}}),Wt=s=>{const{template:e,manifest:r}=J(s),{args:t}=k(s),{getValuesFromAttribute:n}=T(s);return{generateTemplate:({axis:i,constants:c=[],options:o,args:d=t})=>{const h=l=>{if(!r?.style)return e(l);const u=Object.keys(l).filter(p=>p.endsWith("-attr")).reduce((p,y)=>{const g=y.substring(0,y.length-5);return l[y]===!0?p[g]=!0:l[y]==="false"||l[y]==="(default)"?p[g]=!1:l[y]&&(g.endsWith("...")?p[g.replace("...",l[y])]=!0:p[l[y]]=!0),p},{}),b=l["default-slot"]||"",v={[s]:!0,...u},w=Object.keys(v).filter(p=>v[p]).join(" ");if(o?.templateContent){const p=o.templateContent.replaceAll("%SLOT%",b).replaceAll("%CLASSES%",w);return m(p)}return f`<div class=${et(v)}>${m(b)}</div>`},$=(Array.isArray(c)?c:[c]).reduce((l,u)=>({...l,[`${u.name}${T(s).getSuffixFromType(u.type)}`]:u.value}),{});if(!i?.x&&!i?.y&&!o?.title)return f`${h({...d,...$})}`;const F=l=>l?Array.isArray(l)?l.map(u=>({...u,values:u.values||n(u.name)})):[{...l,values:l.values||n(l.name)}]:[{}],W=F(i?.x),B=F(i?.y),S=(Array.isArray(c)?c:[c]).find(l=>l.type==="template")?.value,C=`uuid-${crypto.randomUUID()}`;return f`
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

        ${o?.templateBackground&&`
          .${C}.story-template tbody tr.template-row td.template {
            background: ${o?.templateBackground};
          }
        `}

        ${o?.templateBackgrounds?.colors.map((l,u)=>{const b=v=>`${o?.templateBackgrounds?.colors.length}n + ${v+1}`;return o?.templateBackgrounds?.alternate==="y"?`
                .${C}.story-template tbody tr.template-row:nth-of-type(${b(u)}) td.template {
                  background: ${l};
                }
              `:`
                .${C}.story-template tbody tr.template-row td.template:nth-of-type(${b(u)}) {
                  background: ${l};
                }
              `})}
      </style>
      ${W.map(l=>f` ${B.map(u=>{let b=!0;const v=W.length>1||l.values,w=(l&&u||B.length>1)&&u?.values;return f`
            <table class="story-template ${C} ${o?.classes}">
              <thead>
                ${o?.title&&f`<tr>
                  <th class="title" colspan=${(l.values?.length||0)+3}><code>${o?.title}</code></th>
                </tr>`}
                ${l&&l.values&&f`
                  <tr>
                    ${w?f`<td></td>`:""} <td></td>
                    ${v&&f`<th colspan=${l.values?.length||0}><code>${l.title||l.name}</code></th>`}
                    </tr>
                  </tr>
                  ${f`
                    <tr>
                      ${w?f`<td></td>`:""}
                      <td></td>
                      ${l?.values?.map(p=>f`<td><code>${p.title||p}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(u?.values||[""]).map(p=>{const y=f`
                    <tr class="template-row">
                      ${b&&w?f`<th rowspan="${u?.values?.length}">
                            <span><code>${u.title||u.name}</code></span>
                          </th>`:""}
                      <th><code>${p.title||p}</code></th>
                      ${(l?.values||[""]).map(g=>f`
                          <td class="template template-x-${l?.values?.indexOf(g)||1} template-y-${u?.values?.indexOf(p.value||p)||1}">
                          ${l.type==="template"&&m((g.value||g).split("%TEMPLATE%")[0]||"")||""}
                          ${u.type==="template"&&m((p.value||p).split("%TEMPLATE%")[0]||"")||""}
                          ${S&&m(S.split("%TEMPLATE%")[0]||"")||""}
                            ${h({...d,...$,...l&&l.type!=="template"&&{[`${l.name}${T(s).getSuffixFromType(l.type)}`]:g.hasOwnProperty("value")?g.value:g},...u&&u.type!=="template"&&{[`${u.name}${T(s).getSuffixFromType(u.type)}`]:p.hasOwnProperty("value")?p.value:p}})}
                         ${u.type==="template"&&m((p.value||p).split("%TEMPLATE%")[1]||"")||""}
                         ${l.type==="template"&&m((g.value||g).split("%TEMPLATE%")[1]||"")||""}
                          ${S&&m(S.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return b=!1,y})}
              </tbody>
            </table>
          `})}`)}
    `}}},Bt=(s,e)=>(ot?.components?.[s]?.[e]?.description?.value??"No Description").replace(/\n/g,"<br/>"),Ut=(s,e=150)=>{const r=isNaN(e)?e:{heightPx:e},{afterRender:t="",additionalChromaticOptions:n={},heightPx:a=150}=r;return{parameters:{chromatic:{...nt?.parameters?.chromatic,...n,disableSnapshot:!1},docs:{disable:!0}},render:(i,c)=>f`
      ${Object.entries(s).map(([o,d])=>{const h=d.name??lt(o);return f`
          <div style='height: ${a}px; margin: var(--syn-spacing-small)'>
            <h3 data-chromatic="ignore">${h}</h3>
            ${d.render?.(i,c)}
          </div>
      `})}
      ${t}
    `}};export{Wt as a,Ut as b,T as c,Bt as g,k as s};
