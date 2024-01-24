var V=Object.freeze,J=Object.defineProperty;var F=(s,t)=>V(J(s,"raw",{value:V(t||s.slice())}));import{i as tt,t as et,e as rt,n as $,a as v,b as st}from"./icon-button-12422ba0.js";import{f as nt,T as at}from"./directive-helpers-17655c40.js";import{s as ot}from"./chunk-HJCNT6QR-ff17d49b.js";import"./chunk-FJPRWHXQ-67692e6d.js";import{n as lt,_ as it,d as ct}from"./index-e6a48dec.js";import ut from"./preview-91825abc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const r of e)r._$AO?.(t,!1),k(r,t);return!0},O=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},B=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),dt(t)}};function pt(s){this._$AN!==void 0?(O(this),this._$AM=s,B(this)):this._$AM=s}function ft(s,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let a=e;a<r.length;a++)k(r[a],!1),O(r[a]);else r!=null&&(k(r,!1),O(r));else k(this,s)}const dt=s=>{s.type==et.CHILD&&(s._$AP??=ft,s._$AQ??=pt)};class gt extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),B(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(k(this,t),O(this))}setValue(t){if(nt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class mt extends gt{constructor(){super(...arguments),this.prevData={}}render(t){return at}update(t,[e]){var r;this.element!==t.element&&(this.element=t.element),this.host=((r=t.options)===null||r===void 0?void 0:r.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];a!==e[n]&&(r[n]=a)}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&(r[n]=void 0)}}class ht extends mt{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const e in t){const r=t[e];r!==this.eventData[e]&&this.applyEvent(e,r)}}applyEvent(t,e){const{prevData:r,element:n}=this;this.eventData[t]=e,r[t]&&n.removeEventListener(t,this,e),n.addEventListener(t,this,e)}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&this.groomEvent(n,e[n])}groomEvent(t,e){const{element:r}=this;delete this.eventData[t],r.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.removeEventListener(n,this,a)}}reconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.addEventListener(n,this,a)}}}class $t extends ht{apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];if(a===e[n])continue;const o=n.slice(1);switch(n[0]){case"@":this.eventData[o]=a,this.applyEvent(o,a);break;case".":r[o]=a;break;case"?":a?r.setAttribute(o,""):r.removeAttribute(o);break;default:a!=null?r.setAttribute(n,String(a)):r.removeAttribute(n);break}}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e){const a=n.slice(1);if(!t||!(n in t)&&r[a]===e[n])switch(n[0]){case"@":this.groomEvent(a,e[n]);break;case".":r[a]=void 0;break;case"?":r.removeAttribute(a);break;default:r.removeAttribute(n);break}}}}const yt=rt($t);function vt(s,t){return t.modules?.find(r=>r.declarations?.some(n=>n.tagName===s))?.declarations.find(r=>r.kind==="class"&&r.tagName===s)}function M(s,t){const e={};return s?.members?.forEach(r=>{if(r.kind!=="field"||(r.attribute&&(e[r.attribute]={name:r.attribute,table:{disable:!0}}),e[r.name]={name:r.name,table:{disable:!0}},r.privacy==="private"||r.privacy==="protected"||r.static))return;const n=Y(r?.type?.text),a=r.attribute?`${r.attribute}-attr`:`${r.name}-prop`,o=P(r.default);e[a]={name:r.attribute||r.name,description:R(r.description,t?.showArgRef?a:"",r.deprecated),defaultValue:o==="''"?"":o,control:{type:H(n)},table:{category:r.attribute?"attributes":"properties",defaultValue:{summary:o},type:{summary:r?.type?.text}}};const c=n?.split("|");c&&c?.length>1&&(e[a].options=c.map(p=>P(p)))}),e}function bt(s){const t={};return s?.members?.forEach(e=>{if(e.kind!=="field"||(t[e.name]={name:e.name,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static))return;const r=Y(e?.type?.text),n=`${e.name}`,a=P(e.default);t[n]={name:e.name,description:e.description,defaultValue:a==="false"?!1:a==="''"?"":a,control:{type:H(r)},table:{category:"properties",defaultValue:{summary:a},type:{summary:e?.type?.text}}};const o=r?.split("|");o&&o?.length>1&&(t[n].options=o.map(c=>P(c)))}),t}function wt(s){const t={};return s?.events?.forEach(e=>{const r=At(e.name);t[r]={name:r,description:e.description,table:{category:"events"}}}),t}function I(s){const t={};return s?.cssProperties?.forEach(e=>{t[e.name]={name:e.name,description:e.description,defaultValue:e.default,control:{type:"text"}}}),t}function z(s,t){const e={};return s?.cssParts?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}},e[`${r.name}-part`]={name:r.name,description:R(r.description,t?.showArgRef?`${r.name}-part`:""),control:"text",defaultValue:`${s?.tagName}::part(${r.name}) {
}`,table:{category:"css shadow parts"}}}),e}function Q(s,t){const e={};return s?.slots?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}};const n=r.name||"default";e[`${n}-slot`]={name:n,description:R(r.description,t?.showArgRef?`${n}-part`:""),control:"text",defaultValue:n==="default"?"":`<span slot="${n}"></span>`,table:{category:"slots"}}}),e}function H(s){if(!s)return"text";if(s.includes("boolean"))return"boolean";if(s.includes("number")&&!s.includes("string"))return"number";if(s.includes("Date"))return"date";const t=s.split("|");return t.length>1?t.length<3?"inline-radio":t.length<=4?"radio":"select":"text"}function Y(s){return s?s.replace(" | undefined","").replace(" | null",""):""}function P(s){return s?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function R(s,t,e){let r="";return e&&(r+=`\`@deprecated\` ${e}`),s&&(r+=r?`


`:"",r+=s),t&&(r+=r?`

`:"",r+=`arg ref - \`${t}\``),r}const At=s=>`on${St(Tt(s))}`;function Tt(s=""){return s.split("-").map((r,n)=>n?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()).join("")}function St(s){return s.charAt(0).toUpperCase()+s.slice(1)}const{useArgs:Ct}=__STORYBOOK_MODULE_CLIENT_API__;let L,W;var q;function Nt(s,t,e){if(!t)return $`<${v(s.tagName)}></${v(s.tagName)}>`;s?.tagName!==W&&(L=void 0,W=s?.tagName);const r=_t(s,t),n=Ot(s,t);Pt(s);const a=Et(s,t);return $(q||(q=F(["",`
<`," "," ",">","","</",`>

<script>
  component = document.querySelector('`,`');
<\/script>
`])),x(s,t),v(s.tagName),yt(r),a,n,e||"",v(s.tagName),s.tagName)}function x(s,t){const e=kt(s,t);return`${e}`?.replaceAll(/\s+/g,"")!=""?$`<style>${e}</style>
`:""}function _t(s,t){const e=M(s),r={};return Object.keys(e).filter(n=>n.endsWith("-attr")).forEach(n=>{const a=e[n],o=e[n].name,c=t[n];if(c){const p=a.control.type==="boolean"?`?${o}`:o;r[p]=c==="false"?!1:c}}),Object.keys(t).filter(n=>!n.endsWith("-attr")&&!n.endsWith("-part")&&!n.endsWith("-slot")).forEach(n=>{if(n.startsWith("on"))return;const a=t[n];a&&(r[`.${n}`]=a)}),r}function Et(s,t){const e=I(s);return Object.keys(e).some(a=>!!t[a])?v(`style="${Object.keys(e).map(a=>{const o=e[a].name,c=t[a];return c?`${o}: ${c||""}`:null}).filter(a=>a!==null).join(";")}"`):void 0}function kt(s,t){const e=z(s);return Object.keys(e).some(a=>!!t[a])?v(`${Object.keys(e).filter(a=>a.endsWith("-part")).map(a=>{const o=e[a].name,c=t[a];return c?.replaceAll(/\s+/g,"")!==`${s?.tagName}::part(${o}){}`?`
${c}`:null}).filter(a=>a!==null).join(`
`)}
`):void 0}function Ot(s,t){const e=Q(s);return v(`${Object.keys(e).filter(n=>n.endsWith("-slot")).map(n=>{const a=e[n].name,o=t[n];return a==="default"?o||null:o!==`<span slot="${a}"></span>`?o:null}).filter(n=>n!==null).join("")}`)}function Pt(s){Lt(s),setTimeout(()=>{const t=document.querySelector(s.tagName);L?.observe(t,{attributes:!0})})}function Lt(s){let t=!1;const e=Ct()[1],r=M(s);L||(L=new MutationObserver(n=>{n.forEach(a=>{if(a.type!=="attributes"||a.attributeName==="class"&&t)return;t=!0;const o=r[`${a.attributeName}-attr`];o?.control==="boolean"||o?.control?.type==="boolean"?e({[`${a.attributeName}-attr`]:a.target?.hasAttribute(a.attributeName||"")}):e({[`${a.attributeName}-attr`]:a.target.getAttribute(a.attributeName||"")}),t=!1})}))}function K(s,t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const r=vt(s,e),n=r?.events?.map(a=>a.name)||[];return{argTypes:X(r,{showArgRef:t?.showArgRef}),reactArgTypes:jt(r),args:Dt(r),events:n,styleTemplate:a=>x(r,a),template:(a,o)=>Nt(r,a,o),manifest:r}}function X(s,t){return{...M(s,{showArgRef:t?.showArgRef}),...Q(s,{showArgRef:t?.showArgRef}),...I(s),...z(s,{showArgRef:t?.showArgRef})}}function Dt(s){return Object.entries(X(s)).filter(([,e])=>e?.control).map(([e,r])=>({[e]:r.defaultValue||""})).reduce((e,r)=>({...e,...r}),{})}function jt(s){return{...bt(s),...wt(s)}}const U=String.raw`[A-Za-z][^/\s>]*`,Mt=String.raw`(?<!\w)"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Rt=String.raw`(?<!\w)'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Z=String.raw`${Mt}|${Rt}`,Vt=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ft=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Wt=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Ut=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,qt=String.raw`${Vt}|${Ft}|${Wt}`,Bt=String.raw`(?<attrName>${Ut})(?:\s*=\s*(?:${qt}))?`,It=String.raw`${Z}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,G=String.raw`(?<attrSpace>\s*)(?:${Bt}|(?<attrText>${It}))`,zt={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${U})(?<attrs>(?:${G})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${U})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Z}|['"]`,wildcard:String.raw`.`},Qt=Object.entries(zt).map(([s,t])=>`(?<${s}>${t})`).join("|");function*Ht(s,t){let e,{lastIndex:r}=s;for(;e=s.exec(t);)yield e,{lastIndex:r}=s;if(r!=t.length)throw new Error("Failed to parse string")}const Yt=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function D(s,t="  ",e=80){const r=new RegExp(Qt,"gys"),n=new RegExp(G,"gy"),a=[];let o=null,c=0,p=0,y="",h=0,d="";const C=()=>{if(d&&d!=`
`){const b=y.indexOf(`
`),l=b==-1?y.length:b;p+d.length+l>e&&(d=`
`)}const f=d==`
`&&y?t.repeat(h):"",m=`${d}${f}${y}`;if(m){const b=m.lastIndexOf(`
`);b==-1?p+=m.length:p=m.length-b-1,a.push(m)}y=d=""},g=(...f)=>{for(const m of f)!o&&/^\s+$/.test(m)?(C(),d=m):(y||(h=c),y+=m)};for(const f of Ht(r,s)){if(D.__strict&&f.groups.wildcard)throw new Error("Unexpected wildcard");if(f.groups.endTag){const m=f.groups.endTagName.toLowerCase();m==o&&(o=null),o||(--c,g(`</${m}>`))}if(o)g(f[0]);else if(f.groups.space)g(...f[0].match(/\n/g)?.slice(0,2)??[" "]);else if(f.groups.comment||f.groups.dtd||f.groups.text||f.groups.wildcard)g(f[0]);else if(f.groups.startTag){const m=f.groups.startTagName.toLowerCase();if(g(`<${m}`),++c,f.groups.attrs){let{lastIndex:l}=n,i,A;for(;i=n.exec(f.groups.attrs);){if({lastIndex:l}=n,D.__strict&&i.groups.attrText)throw new Error("Unexpected attr text");i.groups.attrText?(i.groups.attrSpace&&g(/\n/.test(i.groups.attrSpace)?`
`:" "),g(i.groups.attrText)):((i.groups.attrSpace||!A?.groups.attrText)&&g(/\n/.test(i.groups.attrSpace)?`
`:" "),g(`${i.groups.attrName}${i.groups.quotedAttrValue?`="${i.groups.quotedAttrValue}"`:i.groups.singleQuotedAttrValue?`='${i.groups.singleQuotedAttrValue}'`:i.groups.unquotedAttrValue?`=${i.groups.unquotedAttrValue}`:""}`)),A=i}if(l!=f.groups.attrs.length)throw new Error("Failed to parse attributes")}const b=!!f.groups.closingSlash;g(b?" />":">"),b||Yt.has(m)?--c:["pre","textarea","script","style"].includes(m)&&(o=m)}}C();let _=!1;for(;/^\s+$/.test(a[a.length-1]);){const f=a.pop();/\n/.test(f)&&(_=!0)}return _&&a.push(`
`),a.join("")}D.default=D;function xt(s){return s.charAt(0).toUpperCase()+s.substr(1)}function Kt(s,t){var e=s.toLowerCase();return t===0?xt(e):e}function Xt(s,t){return t===void 0&&(t={}),lt(s,it({delimiter:" ",transform:Kt},t))}async function Zt(){await fetch("./custom-elements.json");const t=await(await fetch("./custom-elements.json")).json();ot(t),console.log("Custom elements manifest loaded")}await Zt();const j=s=>{const{args:t,events:e,argTypes:r,manifest:n}=K(s),a=Object.fromEntries(Object.entries(r).map(([p,y])=>y?.control?.type==="number"&&y.options&&y.options?.length>0?[p,{...y,control:{type:"select"}}]:[p,y])),o=()=>({status:{styles:{backgroundColor:n?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${n?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${n?.since}`}});return{args:t,argTypes:(()=>{const p=()=>{const h=n?.members?.filter(g=>g.kind==="field"),d=new Set(n?.attributes?.map(g=>g.fieldName));return h?.filter(g=>!d.has(g.name)&&g?.privacy!=="private")?.map(g=>g.name)};return{...a,...n?.events?.reduce((h,d)=>(h[d.name]={...d,control:!1,table:{category:"Events"}},h),{}),...n?.members?.filter(h=>h.kind==="method"&&h?.privacy!=="private").reduce((h,d)=>(h[d.name]={...d,control:!1,table:{category:"Methods"}},h),{}),...p()?.reduce((h,d)=>(h[`${d}-prop`]={table:{disable:!0}},h[d]={control:!1,table:{category:"Properties"}},h),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:e}}}},N=s=>({getSuffixFromType:t=>({attribute:"-attr",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:e}=j(s);return e[t]?.control?.type==="boolean"?[!0,!1]:e[t].options},getValuesFromAttributes:t=>t?.map(e=>(e.endsWith("-attr")||(e=`${e}-attr`),{name:e,values:N(s).getValuesFromAttribute(e)})),overrideArgs:(t,e)=>{const r=e||j(s).args,n=Array.isArray(t)?t:[t];for(const a of n){const o=N(s).getSuffixFromType(a.type);r[`${a.name}${o}`]=a.value}return r}}),ae=s=>{const{template:t,manifest:e}=K(s),{args:r}=j(s),{getValuesFromAttribute:n}=N(s);return{generateTemplate:({axis:o,constants:c=[],options:p,args:y=r})=>{const h=l=>{if(!e?.style)return t(l);const i=Object.keys(l).filter(u=>u.endsWith("-attr")).reduce((u,T)=>{const w=T.substring(0,T.length-5);return l[T]===!0?u[w]=!0:l[T]==="false"||l[T]==="(default)"?u[w]=!1:l[T]&&(w.endsWith("...")?u[w.replace("...",l[T])]=!0:u[l[T]]=!0),u},{}),A=l["default-slot"]||"",S={[s]:!0,...i},E=Object.keys(S).filter(u=>S[u]).join(" ");if(p?.templateContent){const u=p.templateContent.replaceAll("%SLOT%",A).replaceAll("%CLASSES%",E);return v(u)}return $`<div class=${st(S)}>${v(A)}</div>`},d=(Array.isArray(c)?c:[c]).reduce((l,i)=>({...l,[`${i.name}${N(s).getSuffixFromType(i.type)}`]:i.value}),{});if(!o?.x&&!o?.y&&!p?.title)return $`${h({...y,...d})}`;const C=l=>l?Array.isArray(l)?l.map(i=>({...i,values:i.values||n(i.name)})):[{...l,values:l.values||n(l.name)}]:[{}],g=C(o?.x),_=C(o?.y),m=(Array.isArray(c)?c:[c]).find(l=>l.type==="template")?.value,b=`uuid-${crypto.randomUUID()}`;return $`
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

        ${p?.templateBackground&&`
          .${b}.story-template tbody tr.template-row td.template {
            background: ${p?.templateBackground};
          }
        `}

        ${p?.templateBackgrounds?.colors.map((l,i)=>{const A=S=>`${p?.templateBackgrounds?.colors.length}n + ${S+1}`;return p?.templateBackgrounds?.alternate==="y"?`
                .${b}.story-template tbody tr.template-row:nth-of-type(${A(i)}) td.template {
                  background: ${l};
                }
              `:`
                .${b}.story-template tbody tr.template-row td.template:nth-of-type(${A(i)}) {
                  background: ${l};
                }
              `})}
      </style>
      ${g.map(l=>$` ${_.map(i=>{let A=!0;const S=g.length>1||l.values,E=(l&&i||_.length>1)&&i?.values;return $`
            <table class="story-template ${b} ${p?.classes}">
              <thead>
                ${p?.title&&$`<tr>
                  <th class="title" colspan=${(l.values?.length||0)+3}><code>${p?.title}</code></th>
                </tr>`}
                ${l&&l.values&&$`
                  <tr>
                    ${E?$`<td></td>`:""} <td></td>
                    ${S&&$`<th colspan=${l.values?.length||0}><code>${l.title||l.name}</code></th>`}
                    </tr>
                  </tr>
                  ${$`
                    <tr>
                      ${E?$`<td></td>`:""}
                      <td></td>
                      ${l?.values?.map(u=>$`<td><code>${u.title||u}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(i?.values||[""]).map(u=>{const T=$`
                    <tr class="template-row">
                      ${A&&E?$`<th rowspan="${i?.values?.length}">
                            <span><code>${i.title||i.name}</code></span>
                          </th>`:""}
                      <th><code>${u.title||u}</code></th>
                      ${(l?.values||[""]).map(w=>$`
                          <td class="template template-x-${l?.values?.indexOf(w)||1} template-y-${i?.values?.indexOf(u.value||u)||1}">
                          ${l.type==="template"&&v((w.value||w).split("%TEMPLATE%")[0]||"")||""}
                          ${i.type==="template"&&v((u.value||u).split("%TEMPLATE%")[0]||"")||""}
                          ${m&&v(m.split("%TEMPLATE%")[0]||"")||""}
                            ${h({...y,...d,...l&&l.type!=="template"&&{[`${l.name}${N(s).getSuffixFromType(l.type)}`]:w.hasOwnProperty("value")?w.value:w},...i&&i.type!=="template"&&{[`${i.name}${N(s).getSuffixFromType(i.type)}`]:u.hasOwnProperty("value")?u.value:u}})}
                         ${i.type==="template"&&v((u.value||u).split("%TEMPLATE%")[1]||"")||""}
                         ${l.type==="template"&&v((w.value||w).split("%TEMPLATE%")[1]||"")||""}
                          ${m&&v(m.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return A=!1,T})}
              </tbody>
            </table>
          `})}`)}
    `}}},oe=(s,t)=>ct?.components?.[s]?.[t]?.description?.value??"No Description",le=(s,t=150)=>({parameters:{chromatic:{...ut?.parameters?.chromatic,disableSnapshot:!1},docs:{disable:!0}},render:(e,r)=>$`${Object.entries(s).map(([n,a])=>{const o=Xt(n);return $`
    <div style='height: ${t}px; margin: var(--syn-spacing-small)'>
      <h3 data-chromatic="ignore">${o}</h3>
      ${a.render?.(e,r)}
    </div>
    `})}`});export{ae as a,le as b,N as c,oe as g,j as s};
