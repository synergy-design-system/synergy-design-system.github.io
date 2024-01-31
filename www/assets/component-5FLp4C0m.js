var V=Object.freeze,J=Object.defineProperty;var F=(s,t)=>V(J(s,"raw",{value:V(t||s.slice())}));import{i as tt,t as et,e as rt,n as y,a as v,b as st}from"./icon-button-tOTN_QA8.js";import{f as nt,T as at}from"./directive-helpers-dXnBnwbo.js";import{s as ot}from"./chunk-HJCNT6QR-zjy042Te.js";import"./chunk-FJPRWHXQ-npYaCjJl.js";import{n as lt,_ as it,d as ct}from"./index-XbIp15rW.js";import ut from"./preview-rNCdy3If.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const r of e)r._$AO?.(t,!1),k(r,t);return!0},O=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},B=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),dt(t)}};function pt(s){this._$AN!==void 0?(O(this),this._$AM=s,B(this)):this._$AM=s}function ft(s,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let a=e;a<r.length;a++)k(r[a],!1),O(r[a]);else r!=null&&(k(r,!1),O(r));else k(this,s)}const dt=s=>{s.type==et.CHILD&&(s._$AP??=ft,s._$AQ??=pt)};class gt extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),B(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(k(this,t),O(this))}setValue(t){if(nt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class mt extends gt{constructor(){super(...arguments),this.prevData={}}render(t){return at}update(t,[e]){var r;this.element!==t.element&&(this.element=t.element),this.host=((r=t.options)===null||r===void 0?void 0:r.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];a!==e[n]&&(r[n]=a)}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&(r[n]=void 0)}}class ht extends mt{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const e in t){const r=t[e];r!==this.eventData[e]&&this.applyEvent(e,r)}}applyEvent(t,e){const{prevData:r,element:n}=this;this.eventData[t]=e,r[t]&&n.removeEventListener(t,this,e),n.addEventListener(t,this,e)}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&this.groomEvent(n,e[n])}groomEvent(t,e){const{element:r}=this;delete this.eventData[t],r.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.removeEventListener(n,this,a)}}reconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.addEventListener(n,this,a)}}}class $t extends ht{apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];if(a===e[n])continue;const o=n.slice(1);switch(n[0]){case"@":this.eventData[o]=a,this.applyEvent(o,a);break;case".":r[o]=a;break;case"?":a?r.setAttribute(o,""):r.removeAttribute(o);break;default:a!=null?r.setAttribute(n,String(a)):r.removeAttribute(n);break}}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e){const a=n.slice(1);if(!t||!(n in t)&&r[a]===e[n])switch(n[0]){case"@":this.groomEvent(a,e[n]);break;case".":r[a]=void 0;break;case"?":r.removeAttribute(a);break;default:r.removeAttribute(n);break}}}}const yt=rt($t);function vt(s,t){return t.modules?.find(r=>r.declarations?.some(n=>n.tagName===s))?.declarations.find(r=>r.kind==="class"&&r.tagName===s)}function R(s,t){const e={};return s?.members?.forEach(r=>{if(r.kind!=="field"||(r.attribute&&(e[r.attribute]={name:r.attribute,table:{disable:!0}}),e[r.name]={name:r.name,table:{disable:!0}},r.privacy==="private"||r.privacy==="protected"||r.static))return;const n=x(r?.type?.text),a=r.attribute?`${r.attribute}-attr`:`${r.name}-prop`,o=P(r.default);e[a]={name:r.attribute||r.name,description:M(r.description,t?.showArgRef?a:"",r.deprecated),defaultValue:o==="''"?"":o,control:{type:H(n)},table:{category:r.attribute?"attributes":"properties",defaultValue:{summary:o},type:{summary:r?.type?.text}}};const c=n?.split("|");c&&c?.length>1&&(e[a].options=c.map(u=>P(u)))}),e}function bt(s){const t={};return s?.members?.forEach(e=>{if(e.kind!=="field"||(t[e.name]={name:e.name,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static))return;const r=x(e?.type?.text),n=`${e.name}`,a=P(e.default);t[n]={name:e.name,description:e.description,defaultValue:a==="false"?!1:a==="''"?"":a,control:{type:H(r)},table:{category:"properties",defaultValue:{summary:a},type:{summary:e?.type?.text}}};const o=r?.split("|");o&&o?.length>1&&(t[n].options=o.map(c=>P(c)))}),t}function wt(s){const t={};return s?.events?.forEach(e=>{const r=At(e.name);t[r]={name:r,description:e.description,table:{category:"events"}}}),t}function I(s){const t={};return s?.cssProperties?.forEach(e=>{t[e.name]={name:e.name,description:e.description,defaultValue:e.default,control:{type:"text"}}}),t}function z(s,t){const e={};return s?.cssParts?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}},e[`${r.name}-part`]={name:r.name,description:M(r.description,t?.showArgRef?`${r.name}-part`:""),control:"text",defaultValue:`${s?.tagName}::part(${r.name}) {
}`,table:{category:"css shadow parts"}}}),e}function Q(s,t){const e={};return s?.slots?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}};const n=r.name||"default";e[`${n}-slot`]={name:n,description:M(r.description,t?.showArgRef?`${n}-part`:""),control:"text",defaultValue:n==="default"?"":`<span slot="${n}"></span>`,table:{category:"slots"}}}),e}function H(s){if(!s)return"text";if(s.includes("boolean"))return"boolean";if(s.includes("number")&&!s.includes("string"))return"number";if(s.includes("Date"))return"date";const t=s.split("|");return t.length>1?t.length<3?"inline-radio":t.length<=4?"radio":"select":"text"}function x(s){return s?s.replace(" | undefined","").replace(" | null",""):""}function P(s){return s?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function M(s,t,e){let r="";return e&&(r+=`\`@deprecated\` ${e}`),s&&(r+=r?`


`:"",r+=s),t&&(r+=r?`

`:"",r+=`arg ref - \`${t}\``),r}const At=s=>`on${St(Tt(s))}`;function Tt(s=""){return s.split("-").map((r,n)=>n?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()).join("")}function St(s){return s.charAt(0).toUpperCase()+s.slice(1)}const{useArgs:Ct}=__STORYBOOK_MODULE_CLIENT_API__;let L,W;var q;function Nt(s,t,e){if(!t)return y`<${v(s.tagName)}></${v(s.tagName)}>`;s?.tagName!==W&&(L=void 0,W=s?.tagName);const r=_t(s,t),n=Ot(s,t);Pt(s);const a=Et(s,t);return y(q||(q=F(["",`
<`," "," ",">","","</",`>

<script>
  component = document.querySelector('`,`');
<\/script>
`])),Y(s,t),v(s.tagName),yt(r),a,n,e||"",v(s.tagName),s.tagName)}function Y(s,t){const e=kt(s,t);return`${e}`?.replaceAll(/\s+/g,"")!=""?y`<style>${e}</style>
`:""}function _t(s,t){const e=R(s),r={};return Object.keys(e).filter(n=>n.endsWith("-attr")).forEach(n=>{const a=e[n],o=e[n].name,c=t[n];if(c){const u=a.control.type==="boolean"?`?${o}`:o;r[u]=c==="false"?!1:c}}),Object.keys(t).filter(n=>!n.endsWith("-attr")&&!n.endsWith("-part")&&!n.endsWith("-slot")).forEach(n=>{if(n.startsWith("on"))return;const a=t[n];a&&(r[`.${n}`]=a)}),r}function Et(s,t){const e=I(s);return Object.keys(e).some(a=>!!t[a])?v(`style="${Object.keys(e).map(a=>{const o=e[a].name,c=t[a];return c?`${o}: ${c||""}`:null}).filter(a=>a!==null).join(";")}"`):void 0}function kt(s,t){const e=z(s);return Object.keys(e).some(a=>!!t[a])?v(`${Object.keys(e).filter(a=>a.endsWith("-part")).map(a=>{const o=e[a].name,c=t[a];return c?.replaceAll(/\s+/g,"")!==`${s?.tagName}::part(${o}){}`?`
${c}`:null}).filter(a=>a!==null).join(`
`)}
`):void 0}function Ot(s,t){const e=Q(s);return v(`${Object.keys(e).filter(n=>n.endsWith("-slot")).map(n=>{const a=e[n].name,o=t[n];return a==="default"?o||null:o!==`<span slot="${a}"></span>`?o:null}).filter(n=>n!==null).join("")}`)}function Pt(s){Lt(s),setTimeout(()=>{const t=document.querySelector(s.tagName);L?.observe(t,{attributes:!0})})}function Lt(s){let t=!1;const e=Ct()[1],r=R(s);L||(L=new MutationObserver(n=>{n.forEach(a=>{if(a.type!=="attributes"||a.attributeName==="class"&&t)return;t=!0;const o=r[`${a.attributeName}-attr`];o?.control==="boolean"||o?.control?.type==="boolean"?e({[`${a.attributeName}-attr`]:a.target?.hasAttribute(a.attributeName||"")}):e({[`${a.attributeName}-attr`]:a.target.getAttribute(a.attributeName||"")}),t=!1})}))}function K(s,t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const r=vt(s,e),n=r?.events?.map(a=>a.name)||[];return{argTypes:X(r,{showArgRef:t?.showArgRef}),reactArgTypes:jt(r),args:Dt(r),events:n,styleTemplate:a=>Y(r,a),template:(a,o)=>Nt(r,a,o),manifest:r}}function X(s,t){return{...R(s,{showArgRef:t?.showArgRef}),...Q(s,{showArgRef:t?.showArgRef}),...I(s),...z(s,{showArgRef:t?.showArgRef})}}function Dt(s){return Object.entries(X(s)).filter(([,e])=>e?.control).map(([e,r])=>({[e]:r.defaultValue||""})).reduce((e,r)=>({...e,...r}),{})}function jt(s){return{...bt(s),...wt(s)}}const U=String.raw`[A-Za-z][^/\s>]*`,Rt=String.raw`(?<!\w)"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Mt=String.raw`(?<!\w)'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Z=String.raw`${Rt}|${Mt}`,Vt=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ft=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Wt=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Ut=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,qt=String.raw`${Vt}|${Ft}|${Wt}`,Bt=String.raw`(?<attrName>${Ut})(?:\s*=\s*(?:${qt}))?`,It=String.raw`${Z}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,G=String.raw`(?<attrSpace>\s*)(?:${Bt}|(?<attrText>${It}))`,zt={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${U})(?<attrs>(?:${G})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${U})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Z}|['"]`,wildcard:String.raw`.`},Qt=Object.entries(zt).map(([s,t])=>`(?<${s}>${t})`).join("|");function*Ht(s,t){let e,{lastIndex:r}=s;for(;e=s.exec(t);)yield e,{lastIndex:r}=s;if(r!=t.length)throw new Error("Failed to parse string")}const xt=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function D(s,t="  ",e=80){const r=new RegExp(Qt,"gys"),n=new RegExp(G,"gy"),a=[];let o=null,c=0,u=0,$="",d=0,g="";const C=()=>{if(g&&g!=`
`){const b=$.indexOf(`
`),l=b==-1?$.length:b;u+g.length+l>e&&(g=`
`)}const f=g==`
`&&$?t.repeat(d):"",h=`${g}${f}${$}`;if(h){const b=h.lastIndexOf(`
`);b==-1?u+=h.length:u=h.length-b-1,a.push(h)}$=g=""},m=(...f)=>{for(const h of f)!o&&/^\s+$/.test(h)?(C(),g=h):($||(d=c),$+=h)};for(const f of Ht(r,s)){if(D.__strict&&f.groups.wildcard)throw new Error("Unexpected wildcard");if(f.groups.endTag){const h=f.groups.endTagName.toLowerCase();h==o&&(o=null),o||(--c,m(`</${h}>`))}if(o)m(f[0]);else if(f.groups.space)m(...f[0].match(/\n/g)?.slice(0,2)??[" "]);else if(f.groups.comment||f.groups.dtd||f.groups.text||f.groups.wildcard)m(f[0]);else if(f.groups.startTag){const h=f.groups.startTagName.toLowerCase();if(m(`<${h}`),++c,f.groups.attrs){let{lastIndex:l}=n,i,A;for(;i=n.exec(f.groups.attrs);){if({lastIndex:l}=n,D.__strict&&i.groups.attrText)throw new Error("Unexpected attr text");i.groups.attrText?(i.groups.attrSpace&&m(/\n/.test(i.groups.attrSpace)?`
`:" "),m(i.groups.attrText)):((i.groups.attrSpace||!A?.groups.attrText)&&m(/\n/.test(i.groups.attrSpace)?`
`:" "),m(`${i.groups.attrName}${i.groups.quotedAttrValue?`="${i.groups.quotedAttrValue}"`:i.groups.singleQuotedAttrValue?`='${i.groups.singleQuotedAttrValue}'`:i.groups.unquotedAttrValue?`=${i.groups.unquotedAttrValue}`:""}`)),A=i}if(l!=f.groups.attrs.length)throw new Error("Failed to parse attributes")}const b=!!f.groups.closingSlash;m(b?" />":">"),b||xt.has(h)?--c:["pre","textarea","script","style"].includes(h)&&(o=h)}}C();let _=!1;for(;/^\s+$/.test(a[a.length-1]);){const f=a.pop();/\n/.test(f)&&(_=!0)}return _&&a.push(`
`),a.join("")}D.default=D;function Yt(s){return s.charAt(0).toUpperCase()+s.substr(1)}function Kt(s,t){var e=s.toLowerCase();return t===0?Yt(e):e}function Xt(s,t){return t===void 0&&(t={}),lt(s,it({delimiter:" ",transform:Kt},t))}async function Zt(){await fetch("./custom-elements.json");const t=await(await fetch("./custom-elements.json")).json();ot(t),console.log("Custom elements manifest loaded")}await Zt();const j=s=>{const{args:t,events:e,argTypes:r,manifest:n}=K(s),a=Object.fromEntries(Object.entries(r).map(([u,$])=>$?.control?.type==="number"&&$.options&&$.options?.length>0?[u,{...$,control:{type:"select"}}]:[u,$])),o=()=>({status:{styles:{backgroundColor:n?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${n?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${n?.since}`}});return{args:t,argTypes:(()=>{const u=()=>{const d=n?.members?.filter(m=>m.kind==="field"),g=new Set(n?.attributes?.map(m=>m.fieldName));return d?.filter(m=>!g.has(m.name)&&m?.privacy!=="private")?.map(m=>m.name)};return{...a,...n?.events?.reduce((d,g)=>(d[g.name]={...g,control:!1,table:{category:"Events"}},d),{}),...n?.members?.filter(d=>d.kind==="method"&&d?.privacy!=="private").reduce((d,g)=>(d[g.name]={...g,control:!1,table:{category:"Methods"}},d),{}),...u()?.reduce((d,g)=>(d[`${g}-prop`]={table:{disable:!0}},d[g]={control:!1,table:{category:"Properties"}},d),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:e}}}},N=s=>({getSuffixFromType:t=>({attribute:"-attr",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:e}=j(s);return e[t]?.control?.type==="boolean"?[!0,!1]:e[t].options},getValuesFromAttributes:t=>t?.map(e=>(e.endsWith("-attr")||(e=`${e}-attr`),{name:e,values:N(s).getValuesFromAttribute(e)})),overrideArgs:(t,e)=>{const r=e||j(s).args,n=Array.isArray(t)?t:[t];for(const a of n){const o=N(s).getSuffixFromType(a.type);r[`${a.name}${o}`]=a.value}return r}}),ae=s=>{const{template:t,manifest:e}=K(s),{args:r}=j(s),{getValuesFromAttribute:n}=N(s);return{generateTemplate:({axis:o,constants:c=[],options:u,args:$=r})=>{const d=l=>{if(!e?.style)return t(l);const i=Object.keys(l).filter(p=>p.endsWith("-attr")).reduce((p,T)=>{const w=T.substring(0,T.length-5);return l[T]===!0?p[w]=!0:l[T]==="false"||l[T]==="(default)"?p[w]=!1:l[T]&&(w.endsWith("...")?p[w.replace("...",l[T])]=!0:p[l[T]]=!0),p},{}),A=l["default-slot"]||"",S={[s]:!0,...i},E=Object.keys(S).filter(p=>S[p]).join(" ");if(u?.templateContent){const p=u.templateContent.replaceAll("%SLOT%",A).replaceAll("%CLASSES%",E);return v(p)}return y`<div class=${st(S)}>${v(A)}</div>`},g=(Array.isArray(c)?c:[c]).reduce((l,i)=>({...l,[`${i.name}${N(s).getSuffixFromType(i.type)}`]:i.value}),{});if(!o?.x&&!o?.y&&!u?.title)return y`${d({...$,...g})}`;const C=l=>l?Array.isArray(l)?l.map(i=>({...i,values:i.values||n(i.name)})):[{...l,values:l.values||n(l.name)}]:[{}],m=C(o?.x),_=C(o?.y),h=(Array.isArray(c)?c:[c]).find(l=>l.type==="template")?.value,b=`uuid-${crypto.randomUUID()}`;return y`
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

        ${u?.templateBackground&&`
          .${b}.story-template tbody tr.template-row td.template {
            background: ${u?.templateBackground};
          }
        `}

        ${u?.templateBackgrounds?.colors.map((l,i)=>{const A=S=>`${u?.templateBackgrounds?.colors.length}n + ${S+1}`;return u?.templateBackgrounds?.alternate==="y"?`
                .${b}.story-template tbody tr.template-row:nth-of-type(${A(i)}) td.template {
                  background: ${l};
                }
              `:`
                .${b}.story-template tbody tr.template-row td.template:nth-of-type(${A(i)}) {
                  background: ${l};
                }
              `})}
      </style>
      ${m.map(l=>y` ${_.map(i=>{let A=!0;const S=m.length>1||l.values,E=(l&&i||_.length>1)&&i?.values;return y`
            <table class="story-template ${b} ${u?.classes}">
              <thead>
                ${u?.title&&y`<tr>
                  <th class="title" colspan=${(l.values?.length||0)+3}><code>${u?.title}</code></th>
                </tr>`}
                ${l&&l.values&&y`
                  <tr>
                    ${E?y`<td></td>`:""} <td></td>
                    ${S&&y`<th colspan=${l.values?.length||0}><code>${l.title||l.name}</code></th>`}
                    </tr>
                  </tr>
                  ${y`
                    <tr>
                      ${E?y`<td></td>`:""}
                      <td></td>
                      ${l?.values?.map(p=>y`<td><code>${p.title||p}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(i?.values||[""]).map(p=>{const T=y`
                    <tr class="template-row">
                      ${A&&E?y`<th rowspan="${i?.values?.length}">
                            <span><code>${i.title||i.name}</code></span>
                          </th>`:""}
                      <th><code>${p.title||p}</code></th>
                      ${(l?.values||[""]).map(w=>y`
                          <td class="template template-x-${l?.values?.indexOf(w)||1} template-y-${i?.values?.indexOf(p.value||p)||1}">
                          ${l.type==="template"&&v((w.value||w).split("%TEMPLATE%")[0]||"")||""}
                          ${i.type==="template"&&v((p.value||p).split("%TEMPLATE%")[0]||"")||""}
                          ${h&&v(h.split("%TEMPLATE%")[0]||"")||""}
                            ${d({...$,...g,...l&&l.type!=="template"&&{[`${l.name}${N(s).getSuffixFromType(l.type)}`]:w.hasOwnProperty("value")?w.value:w},...i&&i.type!=="template"&&{[`${i.name}${N(s).getSuffixFromType(i.type)}`]:p.hasOwnProperty("value")?p.value:p}})}
                         ${i.type==="template"&&v((p.value||p).split("%TEMPLATE%")[1]||"")||""}
                         ${l.type==="template"&&v((w.value||w).split("%TEMPLATE%")[1]||"")||""}
                          ${h&&v(h.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return A=!1,T})}
              </tbody>
            </table>
          `})}`)}
    `}}},oe=(s,t)=>ct?.components?.[s]?.[t]?.description?.value??"No Description",le=(s,t=150)=>{const e=isNaN(t)?t:{heightPx:t},{afterRender:r="",additionalChromaticOptions:n={},heightPx:a=150}=e;return{parameters:{chromatic:{...ut?.parameters?.chromatic,...n,disableSnapshot:!1},docs:{disable:!0}},render:(o,c)=>y`
      ${Object.entries(s).map(([u,$])=>{const d=$.name??Xt(u);return y`
          <div style='height: ${a}px; margin: var(--syn-spacing-small)'>
            <h3 data-chromatic="ignore">${d}</h3>
            ${$.render?.(o,c)}
          </div>
      `})}
      ${r}
    `}};export{ae as a,le as b,N as c,oe as g,j as s};
