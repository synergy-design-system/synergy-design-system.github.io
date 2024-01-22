var V=Object.freeze,J=Object.defineProperty;var F=(s,t)=>V(J(s,"raw",{value:V(t||s.slice())}));import{i as tt,t as et,e as rt,n as h,a as y,b as st}from"./icon-button-e03d91d2.js";import{f as nt,T as at}from"./directive-helpers-a6c66f8a.js";import{s as ot}from"./chunk-HJCNT6QR-924d2471.js";import"./chunk-FJPRWHXQ-913159c4.js";import{d as lt}from"./_docs-3cda8374.js";import it from"./preview-15ab7bbf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const r of e)r._$AO?.(t,!1),k(r,t);return!0},O=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},I=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),pt(t)}};function ct(s){this._$AN!==void 0?(O(this),this._$AM=s,I(this)):this._$AM=s}function ut(s,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let a=e;a<r.length;a++)k(r[a],!1),O(r[a]);else r!=null&&(k(r,!1),O(r));else k(this,s)}const pt=s=>{s.type==et.CHILD&&(s._$AP??=ut,s._$AQ??=ct)};class ft extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),I(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(k(this,t),O(this))}setValue(t){if(nt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class dt extends ft{constructor(){super(...arguments),this.prevData={}}render(t){return at}update(t,[e]){var r;this.element!==t.element&&(this.element=t.element),this.host=((r=t.options)===null||r===void 0?void 0:r.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];a!==e[n]&&(r[n]=a)}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&(r[n]=void 0)}}class gt extends dt{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const e in t){const r=t[e];r!==this.eventData[e]&&this.applyEvent(e,r)}}applyEvent(t,e){const{prevData:r,element:n}=this;this.eventData[t]=e,r[t]&&n.removeEventListener(t,this,e),n.addEventListener(t,this,e)}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&this.groomEvent(n,e[n])}groomEvent(t,e){const{element:r}=this;delete this.eventData[t],r.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.removeEventListener(n,this,a)}}reconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.addEventListener(n,this,a)}}}class mt extends gt{apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];if(a===e[n])continue;const o=n.slice(1);switch(n[0]){case"@":this.eventData[o]=a,this.applyEvent(o,a);break;case".":r[o]=a;break;case"?":a?r.setAttribute(o,""):r.removeAttribute(o);break;default:a!=null?r.setAttribute(n,String(a)):r.removeAttribute(n);break}}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e){const a=n.slice(1);if(!t||!(n in t)&&r[a]===e[n])switch(n[0]){case"@":this.groomEvent(a,e[n]);break;case".":r[a]=void 0;break;case"?":r.removeAttribute(a);break;default:r.removeAttribute(n);break}}}}const ht=rt(mt);function $t(s,t){return t.modules?.find(r=>r.declarations?.some(n=>n.tagName===s))?.declarations.find(r=>r.kind==="class"&&r.tagName===s)}function M(s,t){const e={};return s?.members?.forEach(r=>{if(r.kind!=="field"||(r.attribute&&(e[r.attribute]={name:r.attribute,table:{disable:!0}}),e[r.name]={name:r.name,table:{disable:!0}},r.privacy==="private"||r.privacy==="protected"||r.static))return;const n=Y(r?.type?.text),a=r.attribute?`${r.attribute}-attr`:`${r.name}-prop`,o=P(r.default);e[a]={name:r.attribute||r.name,description:R(r.description,t?.showArgRef?a:"",r.deprecated),defaultValue:o==="''"?"":o,control:{type:H(n)},table:{category:r.attribute?"attributes":"properties",defaultValue:{summary:o},type:{summary:r?.type?.text}}};const c=n?.split("|");c&&c?.length>1&&(e[a].options=c.map(g=>P(g)))}),e}function yt(s){const t={};return s?.members?.forEach(e=>{if(e.kind!=="field"||(t[e.name]={name:e.name,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static))return;const r=Y(e?.type?.text),n=`${e.name}`,a=P(e.default);t[n]={name:e.name,description:e.description,defaultValue:a==="false"?!1:a==="''"?"":a,control:{type:H(r)},table:{category:"properties",defaultValue:{summary:a},type:{summary:e?.type?.text}}};const o=r?.split("|");o&&o?.length>1&&(t[n].options=o.map(c=>P(c)))}),t}function vt(s){const t={};return s?.events?.forEach(e=>{const r=bt(e.name);t[r]={name:r,description:e.description,table:{category:"events"}}}),t}function U(s){const t={};return s?.cssProperties?.forEach(e=>{t[e.name]={name:e.name,description:e.description,defaultValue:e.default,control:{type:"text"}}}),t}function z(s,t){const e={};return s?.cssParts?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}},e[`${r.name}-part`]={name:r.name,description:R(r.description,t?.showArgRef?`${r.name}-part`:""),control:"text",defaultValue:`${s?.tagName}::part(${r.name}) {
}`,table:{category:"css shadow parts"}}}),e}function Q(s,t){const e={};return s?.slots?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}};const n=r.name||"default";e[`${n}-slot`]={name:n,description:R(r.description,t?.showArgRef?`${n}-part`:""),control:"text",defaultValue:n==="default"?"":`<span slot="${n}"></span>`,table:{category:"slots"}}}),e}function H(s){if(!s)return"text";if(s.includes("boolean"))return"boolean";if(s.includes("number")&&!s.includes("string"))return"number";if(s.includes("Date"))return"date";const t=s.split("|");return t.length>1?t.length<3?"inline-radio":t.length<=4?"radio":"select":"text"}function Y(s){return s?s.replace(" | undefined","").replace(" | null",""):""}function P(s){return s?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function R(s,t,e){let r="";return e&&(r+=`\`@deprecated\` ${e}`),s&&(r+=r?`


`:"",r+=s),t&&(r+=r?`

`:"",r+=`arg ref - \`${t}\``),r}const bt=s=>`on${At(wt(s))}`;function wt(s=""){return s.split("-").map((r,n)=>n?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()).join("")}function At(s){return s.charAt(0).toUpperCase()+s.slice(1)}const{useArgs:Tt}=__STORYBOOK_MODULE_CLIENT_API__;let D,W;var B;function St(s,t,e){if(!t)return h`<${y(s.tagName)}></${y(s.tagName)}>`;s?.tagName!==W&&(D=void 0,W=s?.tagName);const r=Nt(s,t),n=_t(s,t);kt(s);const a=Et(s,t);return h(B||(B=F(["",`
<`," "," ",">","","</",`>

<script>
  component = document.querySelector('`,`');
<\/script>
`])),K(s,t),y(s.tagName),ht(r),a,n,e||"",y(s.tagName),s.tagName)}function K(s,t){const e=Ct(s,t);return`${e}`?.replaceAll(/\s+/g,"")!=""?h`<style>${e}</style>
`:""}function Nt(s,t){const e=M(s),r={};return Object.keys(e).filter(n=>n.endsWith("-attr")).forEach(n=>{const a=e[n],o=e[n].name,c=t[n];if(c){const g=a.control.type==="boolean"?`?${o}`:o;r[g]=c==="false"?!1:c}}),Object.keys(t).filter(n=>!n.endsWith("-attr")&&!n.endsWith("-part")&&!n.endsWith("-slot")).forEach(n=>{if(n.startsWith("on"))return;const a=t[n];a&&(r[`.${n}`]=a)}),r}function Et(s,t){const e=U(s);return Object.keys(e).some(a=>!!t[a])?y(`style="${Object.keys(e).map(a=>{const o=e[a].name,c=t[a];return c?`${o}: ${c||""}`:null}).filter(a=>a!==null).join(";")}"`):void 0}function Ct(s,t){const e=z(s);return Object.keys(e).some(a=>!!t[a])?y(`${Object.keys(e).filter(a=>a.endsWith("-part")).map(a=>{const o=e[a].name,c=t[a];return c?.replaceAll(/\s+/g,"")!==`${s?.tagName}::part(${o}){}`?`
${c}`:null}).filter(a=>a!==null).join(`
`)}
`):void 0}function _t(s,t){const e=Q(s);return y(`${Object.keys(e).filter(n=>n.endsWith("-slot")).map(n=>{const a=e[n].name,o=t[n];return a==="default"?o||null:o!==`<span slot="${a}"></span>`?o:null}).filter(n=>n!==null).join("")}`)}function kt(s){Ot(s),setTimeout(()=>{const t=document.querySelector(s.tagName);D?.observe(t,{attributes:!0})})}function Ot(s){let t=!1;const e=Tt()[1],r=M(s);D||(D=new MutationObserver(n=>{n.forEach(a=>{if(a.type!=="attributes"||a.attributeName==="class"&&t)return;t=!0;const o=r[`${a.attributeName}-attr`];o?.control==="boolean"||o?.control?.type==="boolean"?e({[`${a.attributeName}-attr`]:a.target?.hasAttribute(a.attributeName||"")}):e({[`${a.attributeName}-attr`]:a.target.getAttribute(a.attributeName||"")}),t=!1})}))}function x(s,t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const r=$t(s,e),n=r?.events?.map(a=>a.name)||[];return{argTypes:X(r,{showArgRef:t?.showArgRef}),reactArgTypes:Dt(r),args:Pt(r),events:n,styleTemplate:a=>K(r,a),template:(a,o)=>St(r,a,o),manifest:r}}function X(s,t){return{...M(s,{showArgRef:t?.showArgRef}),...Q(s,{showArgRef:t?.showArgRef}),...U(s),...z(s,{showArgRef:t?.showArgRef})}}function Pt(s){return Object.entries(X(s)).filter(([,e])=>e?.control).map(([e,r])=>({[e]:r.defaultValue||""})).reduce((e,r)=>({...e,...r}),{})}function Dt(s){return{...yt(s),...vt(s)}}const q=String.raw`[A-Za-z][^/\s>]*`,Lt=String.raw`(?<!\w)"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,jt=String.raw`(?<!\w)'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Z=String.raw`${Lt}|${jt}`,Mt=String.raw`"(?<quotedAttrValue>[^"]*)"`,Rt=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Vt=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Ft=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Wt=String.raw`${Mt}|${Rt}|${Vt}`,qt=String.raw`(?<attrName>${Ft})(?:\s*=\s*(?:${Wt}))?`,Bt=String.raw`${Z}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,G=String.raw`(?<attrSpace>\s*)(?:${qt}|(?<attrText>${Bt}))`,It={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${q})(?<attrs>(?:${G})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${q})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Z}|['"]`,wildcard:String.raw`.`},Ut=Object.entries(It).map(([s,t])=>`(?<${s}>${t})`).join("|");function*zt(s,t){let e,{lastIndex:r}=s;for(;e=s.exec(t);)yield e,{lastIndex:r}=s;if(r!=t.length)throw new Error("Failed to parse string")}const Qt=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function L(s,t="  ",e=80){const r=new RegExp(Ut,"gys"),n=new RegExp(G,"gy"),a=[];let o=null,c=0,g=!1,v=0;const i=(...d)=>{for(const u of d){if(!o)if(u==`
`)g=!0;else{const E=u.indexOf(`
`),m=E==-1?u.length:E;v+m>e&&/^[ \t]+$/.test(a[a.length-1])&&(a.pop(),i(`
`)),g&&(g=!1,i(t.repeat(c)))}const A=u.lastIndexOf(`
`);A==-1?v+=u.length:v=u.length-A-1,a.push(u)}};for(const d of zt(r,s)){if(L.__strict&&d.groups.wildcard)throw new Error("Unexpected wildcard");if(d.groups.endTag){const u=d.groups.endTagName.toLowerCase();u==o&&(o=null),o||(--c,i(`</${u}>`))}if(o)i(d[0]);else if(d.groups.space)i(...d[0].match(/\n/g)?.slice(0,2)??[" "]);else if(d.groups.comment||d.groups.dtd||d.groups.text||d.groups.wildcard)i(d[0]);else if(d.groups.startTag){const u=d.groups.startTagName.toLowerCase();if(i(`<${u}`),++c,d.groups.attrs){let{lastIndex:E}=n,m,S;for(;m=n.exec(d.groups.attrs);){if({lastIndex:E}=n,L.__strict&&m.groups.attrText)throw new Error("Unexpected attr text");m.groups.attrText?(m.groups.attrSpace&&i(/\n/.test(m.groups.attrSpace)?`
`:" "),i(m.groups.attrText)):((m.groups.attrSpace||!S?.groups.attrText)&&i(/\n/.test(m.groups.attrSpace)?`
`:" "),i(`${m.groups.attrName}${m.groups.quotedAttrValue?`="${m.groups.quotedAttrValue}"`:m.groups.singleQuotedAttrValue?`='${m.groups.singleQuotedAttrValue}'`:m.groups.unquotedAttrValue?`=${m.groups.unquotedAttrValue}`:""}`)),S=m}if(E!=d.groups.attrs.length)throw new Error("Failed to parse attributes")}const A=!!d.groups.closingSlash;i(A?" />":">"),A||Qt.has(u)?--c:["pre","script","style"].includes(u)&&(o=u)}}let $=!1;for(;/^\s+$/.test(a[a.length-1]);){const d=a.pop();/\n/.test(d)&&($=!0)}return $&&a.push(`
`),a.join("")}L.default=L;async function Ht(){await fetch("./custom-elements.json");const t=await(await fetch("./custom-elements.json")).json();ot(t),console.log("Custom elements manifest loaded")}await Ht();const j=s=>{const{args:t,events:e,argTypes:r,manifest:n}=x(s),a=Object.fromEntries(Object.entries(r).map(([g,v])=>v?.control?.type==="number"&&v.options&&v.options?.length>0?[g,{...v,control:{type:"select"}}]:[g,v])),o=()=>({status:{styles:{backgroundColor:n?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${n?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${n?.since}`}});return{args:t,argTypes:(()=>{const g=()=>{const i=n?.members?.filter(u=>u.kind==="field"),$=new Set(n?.attributes?.map(u=>u.fieldName));return i?.filter(u=>!$.has(u.name)&&u?.privacy!=="private")?.map(u=>u.name)};return{...a,...n?.events?.reduce((i,$)=>(i[$.name]={...$,control:!1,table:{category:"Events"}},i),{}),...n?.members?.filter(i=>i.kind==="method"&&i?.privacy!=="private").reduce((i,$)=>(i[$.name]={...$,control:!1,table:{category:"Methods"}},i),{}),...g()?.reduce((i,$)=>(i[`${$}-prop`]={table:{disable:!0}},i[$]={control:!1,table:{category:"Properties"}},i),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:e}}}},C=s=>({getSuffixFromType:t=>({attribute:"-attr",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:e}=j(s);return e[t]?.control?.type==="boolean"?[!0,!1]:e[t].options},getValuesFromAttributes:t=>t?.map(e=>(e.endsWith("-attr")||(e=`${e}-attr`),{name:e,values:C(s).getValuesFromAttribute(e)})),overrideArgs:(t,e)=>{const r=e||j(s).args,n=Array.isArray(t)?t:[t];for(const a of n){const o=C(s).getSuffixFromType(a.type);r[`${a.name}${o}`]=a.value}return r}}),te=s=>{const{template:t,manifest:e}=x(s),{args:r}=j(s),{getValuesFromAttribute:n}=C(s);return{generateTemplate:({axis:o,constants:c=[],options:g,args:v=r})=>{const i=l=>{if(!e?.style)return t(l);const p=Object.keys(l).filter(f=>f.endsWith("-attr")).reduce((f,w)=>{const b=w.substring(0,w.length-5);return l[w]===!0?f[b]=!0:l[w]==="false"||l[w]==="(default)"?f[b]=!1:l[w]&&(b.endsWith("...")?f[b.replace("...",l[w])]=!0:f[l[w]]=!0),f},{}),T=l["default-slot"]||"",N={[s]:!0,...p},_=Object.keys(N).filter(f=>N[f]).join(" ");if(g?.templateContent){const f=g.templateContent.replaceAll("%SLOT%",T).replaceAll("%CLASSES%",_);return y(f)}return h`<div class=${st(N)}>${y(T)}</div>`},$=(Array.isArray(c)?c:[c]).reduce((l,p)=>({...l,[`${p.name}${C(s).getSuffixFromType(p.type)}`]:p.value}),{});if(!o?.x&&!o?.y&&!g?.title)return h`${i({...v,...$})}`;const d=l=>l?Array.isArray(l)?l.map(p=>({...p,values:p.values||n(p.name)})):[{...l,values:l.values||n(l.name)}]:[{}],u=d(o?.x),A=d(o?.y),m=(Array.isArray(c)?c:[c]).find(l=>l.type==="template")?.value,S=`uuid-${crypto.randomUUID()}`;return h`
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

        ${g?.templateBackground&&`
          .${S}.story-template tbody tr.template-row td.template {
            background: ${g?.templateBackground};
          }
        `}

        ${g?.templateBackgrounds?.colors.map((l,p)=>{const T=N=>`${g?.templateBackgrounds?.colors.length}n + ${N+1}`;return g?.templateBackgrounds?.alternate==="y"?`
                .${S}.story-template tbody tr.template-row:nth-of-type(${T(p)}) td.template {
                  background: ${l};
                }
              `:`
                .${S}.story-template tbody tr.template-row td.template:nth-of-type(${T(p)}) {
                  background: ${l};
                }
              `})}
      </style>
      ${u.map(l=>h` ${A.map(p=>{let T=!0;const N=u.length>1||l.values,_=(l&&p||A.length>1)&&p?.values;return h`
            <table class="story-template ${S} ${g?.classes}">
              <thead>
                ${g?.title&&h`<tr>
                  <th class="title" colspan=${(l.values?.length||0)+3}><code>${g?.title}</code></th>
                </tr>`}
                ${l&&l.values&&h`
                  <tr>
                    ${_?h`<td></td>`:""} <td></td>
                    ${N&&h`<th colspan=${l.values?.length||0}><code>${l.title||l.name}</code></th>`}
                    </tr>
                  </tr>
                  ${h`
                    <tr>
                      ${_?h`<td></td>`:""}
                      <td></td>
                      ${l?.values?.map(f=>h`<td><code>${f.title||f}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(p?.values||[""]).map(f=>{const w=h`
                    <tr class="template-row">
                      ${T&&_?h`<th rowspan="${p?.values?.length}">
                            <span><code>${p.title||p.name}</code></span>
                          </th>`:""}
                      <th><code>${f.title||f}</code></th>
                      ${(l?.values||[""]).map(b=>h`
                          <td class="template template-x-${l?.values?.indexOf(b)||1} template-y-${p?.values?.indexOf(f.value||f)||1}">
                          ${l.type==="template"&&y((b.value||b).split("%TEMPLATE%")[0]||"")||""}
                          ${p.type==="template"&&y((f.value||f).split("%TEMPLATE%")[0]||"")||""}
                          ${m&&y(m.split("%TEMPLATE%")[0]||"")||""}
                            ${i({...v,...$,...l&&l.type!=="template"&&{[`${l.name}${C(s).getSuffixFromType(l.type)}`]:b.hasOwnProperty("value")?b.value:b},...p&&p.type!=="template"&&{[`${p.name}${C(s).getSuffixFromType(p.type)}`]:f.hasOwnProperty("value")?f.value:f}})}
                         ${p.type==="template"&&y((f.value||f).split("%TEMPLATE%")[1]||"")||""}
                         ${l.type==="template"&&y((b.value||b).split("%TEMPLATE%")[1]||"")||""}
                          ${m&&y(m.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return T=!1,w})}
              </tbody>
            </table>
          `})}`)}
    `}}},ee=(s,t)=>lt?.components?.[s]?.[t]?.description?.value??"No Description",re=(s,t=150)=>({parameters:{chromatic:{...it?.parameters?.chromatic,disableSnapshot:!1},docs:{disable:!0}},render:(e,r)=>h`${s.map(n=>h`
    <div style='height: ${t}px; margin: var(--syn-spacing-small)'>
      <h3>${n.name}</h3>
      ${n.render?.(e,r)}
    </div>
    `)}`});export{te as a,re as b,C as c,ee as g,j as s};
