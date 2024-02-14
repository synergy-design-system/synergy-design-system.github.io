var R=Object.freeze,X=Object.defineProperty;var V=(s,t)=>R(X(s,"raw",{value:R(t||s.slice())}));import{e as Z,n as y,i as v,a as G}from"./icon-button-hWu3VM7N.js";import{T as J}from"./directive-helpers-po9zzQFH.js";import{f as tt,p as et}from"./preview-nCQazbHG.js";import{s as rt}from"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import{n as st,_ as nt,d as at}from"./index-KdxdPlWM.js";class ot extends tt{constructor(){super(...arguments),this.prevData={}}render(t){return J}update(t,[e]){var r;this.element!==t.element&&(this.element=t.element),this.host=((r=t.options)===null||r===void 0?void 0:r.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];a!==e[n]&&(r[n]=a)}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&(r[n]=void 0)}}class lt extends ot{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const e in t){const r=t[e];r!==this.eventData[e]&&this.applyEvent(e,r)}}applyEvent(t,e){const{prevData:r,element:n}=this;this.eventData[t]=e,r[t]&&n.removeEventListener(t,this,e),n.addEventListener(t,this,e)}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e)(!t||!(n in t)&&r[n]===e[n])&&this.groomEvent(n,e[n])}groomEvent(t,e){const{element:r}=this;delete this.eventData[t],r.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];typeof e=="function"?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.removeEventListener(n,this,a)}}reconnected(){const{eventData:t,element:e}=this;for(const r in t){const n=r.slice(1),a=t[r];e.addEventListener(n,this,a)}}}class it extends lt{apply(t){if(!t)return;const{prevData:e,element:r}=this;for(const n in t){const a=t[n];if(a===e[n])continue;const o=n.slice(1);switch(n[0]){case"@":this.eventData[o]=a,this.applyEvent(o,a);break;case".":r[o]=a;break;case"?":a?r.setAttribute(o,""):r.removeAttribute(o);break;default:a!=null?r.setAttribute(n,String(a)):r.removeAttribute(n);break}}}groom(t){const{prevData:e,element:r}=this;if(e)for(const n in e){const a=n.slice(1);if(!t||!(n in t)&&r[a]===e[n])switch(n[0]){case"@":this.groomEvent(a,e[n]);break;case".":r[a]=void 0;break;case"?":r.removeAttribute(a);break;default:r.removeAttribute(n);break}}}}const ct=Z(it);function ut(s,t){return t.modules?.find(r=>r.declarations?.some(n=>n.tagName===s))?.declarations.find(r=>r.kind==="class"&&r.tagName===s)}function D(s,t){const e={};return s?.members?.forEach(r=>{if(r.kind!=="field"||(r.attribute&&(e[r.attribute]={name:r.attribute,table:{disable:!0}}),e[r.name]={name:r.name,table:{disable:!0}},r.privacy==="private"||r.privacy==="protected"||r.static))return;const n=I(r?.type?.text),a=r.attribute?`${r.attribute}-attr`:`${r.name}-prop`,o=O(r.default);e[a]={name:r.attribute||r.name,description:_(r.description,t?.showArgRef?a:"",r.deprecated),defaultValue:o==="''"?"":o,control:{type:z(n)},table:{category:r.attribute?"attributes":"properties",defaultValue:{summary:o},type:{summary:r?.type?.text}}};const c=n?.split("|");c&&c?.length>1&&(e[a].options=c.map(u=>O(u)))}),e}function pt(s){const t={};return s?.members?.forEach(e=>{if(e.kind!=="field"||(t[e.name]={name:e.name,table:{disable:!0}},e.privacy==="private"||e.privacy==="protected"||e.static))return;const r=I(e?.type?.text),n=`${e.name}`,a=O(e.default);t[n]={name:e.name,description:e.description,defaultValue:a==="false"?!1:a==="''"?"":a,control:{type:z(r)},table:{category:"properties",defaultValue:{summary:a},type:{summary:e?.type?.text}}};const o=r?.split("|");o&&o?.length>1&&(t[n].options=o.map(c=>O(c)))}),t}function ft(s){const t={};return s?.events?.forEach(e=>{const r=dt(e.name);t[r]={name:r,description:e.description,table:{category:"events"}}}),t}function q(s){const t={};return s?.cssProperties?.forEach(e=>{t[e.name]={name:e.name,description:e.description,defaultValue:e.default,control:{type:"text"}}}),t}function B(s,t){const e={};return s?.cssParts?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}},e[`${r.name}-part`]={name:r.name,description:_(r.description,t?.showArgRef?`${r.name}-part`:""),control:"text",defaultValue:`${s?.tagName}::part(${r.name}) {
}`,table:{category:"css shadow parts"}}}),e}function U(s,t){const e={};return s?.slots?.forEach(r=>{e[r.name]={name:r.name,table:{disable:!0}};const n=r.name||"default";e[`${n}-slot`]={name:n,description:_(r.description,t?.showArgRef?`${n}-part`:""),control:"text",defaultValue:n==="default"?"":`<span slot="${n}"></span>`,table:{category:"slots"}}}),e}function z(s){if(!s)return"text";if(s.includes("boolean"))return"boolean";if(s.includes("number")&&!s.includes("string"))return"number";if(s.includes("Date"))return"date";const t=s.split("|");return t.length>1?t.length<3?"inline-radio":t.length<=4?"radio":"select":"text"}function I(s){return s?s.replace(" | undefined","").replace(" | null",""):""}function O(s){return s?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function _(s,t,e){let r="";return e&&(r+=`\`@deprecated\` ${e}`),s&&(r+=r?`


`:"",r+=s),t&&(r+=r?`

`:"",r+=`arg ref - \`${t}\``),r}const dt=s=>`on${mt(gt(s))}`;function gt(s=""){return s.split("-").map((r,n)=>n?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()).join("")}function mt(s){return s.charAt(0).toUpperCase()+s.slice(1)}const{useArgs:ht}=__STORYBOOK_MODULE_CLIENT_API__;let P,M;var W;function $t(s,t,e){if(!t)return y`<${v(s.tagName)}></${v(s.tagName)}>`;s?.tagName!==M&&(P=void 0,M=s?.tagName);const r=yt(s,t),n=wt(s,t);Tt(s);const a=vt(s,t);return y(W||(W=V(["",`
<`," "," ",">","","</",`>

<script>
  component = document.querySelector('`,`');
<\/script>
`])),Q(s,t),v(s.tagName),ct(r),a,n,e||"",v(s.tagName),s.tagName)}function Q(s,t){const e=bt(s,t);return`${e}`?.replaceAll(/\s+/g,"")!=""?y`<style>${e}</style>
`:""}function yt(s,t){const e=D(s),r={};return Object.keys(e).filter(n=>n.endsWith("-attr")).forEach(n=>{const a=e[n],o=e[n].name,c=t[n];if(c){const u=a.control.type==="boolean"?`?${o}`:o;r[u]=c==="false"?!1:c}}),Object.keys(t).filter(n=>!n.endsWith("-attr")&&!n.endsWith("-part")&&!n.endsWith("-slot")).forEach(n=>{if(n.startsWith("on"))return;const a=t[n];a&&(r[`.${n}`]=a)}),r}function vt(s,t){const e=q(s);return Object.keys(e).some(a=>!!t[a])?v(`style="${Object.keys(e).map(a=>{const o=e[a].name,c=t[a];return c?`${o}: ${c||""}`:null}).filter(a=>a!==null).join(";")}"`):void 0}function bt(s,t){const e=B(s);return Object.keys(e).some(a=>!!t[a])?v(`${Object.keys(e).filter(a=>a.endsWith("-part")).map(a=>{const o=e[a].name,c=t[a];return c?.replaceAll(/\s+/g,"")!==`${s?.tagName}::part(${o}){}`?`
${c}`:null}).filter(a=>a!==null).join(`
`)}
`):void 0}function wt(s,t){const e=U(s);return v(`${Object.keys(e).filter(n=>n.endsWith("-slot")).map(n=>{const a=e[n].name,o=t[n];return a==="default"?o||null:o!==`<span slot="${a}"></span>`?o:null}).filter(n=>n!==null).join("")}`)}function Tt(s){St(s),setTimeout(()=>{const t=document.querySelector(s.tagName);P?.observe(t,{attributes:!0})})}function St(s){let t=!1;const e=ht()[1],r=D(s);P||(P=new MutationObserver(n=>{n.forEach(a=>{if(a.type!=="attributes"||a.attributeName==="class"&&t)return;t=!0;const o=r[`${a.attributeName}-attr`];o?.control==="boolean"||o?.control?.type==="boolean"?e({[`${a.attributeName}-attr`]:a.target?.hasAttribute(a.attributeName||"")}):e({[`${a.attributeName}-attr`]:a.target.getAttribute(a.attributeName||"")}),t=!1})}))}function H(s,t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const r=ut(s,e),n=r?.events?.map(a=>a.name)||[];return{argTypes:x(r,{showArgRef:t?.showArgRef}),reactArgTypes:Et(r),args:At(r),events:n,styleTemplate:a=>Q(r,a),template:(a,o)=>$t(r,a,o),manifest:r}}function x(s,t){return{...D(s,{showArgRef:t?.showArgRef}),...U(s,{showArgRef:t?.showArgRef}),...q(s),...B(s,{showArgRef:t?.showArgRef})}}function At(s){return Object.entries(x(s)).filter(([,e])=>e?.control).map(([e,r])=>({[e]:r.defaultValue||""})).reduce((e,r)=>({...e,...r}),{})}function Et(s){return{...pt(s),...ft(s)}}const F=String.raw`[A-Za-z][^/\s>]*`,Nt=String.raw`(?<!\w)"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Ct=String.raw`(?<!\w)'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Y=String.raw`${Nt}|${Ct}`,kt=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ot=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Pt=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Lt=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,jt=String.raw`${kt}|${Ot}|${Pt}`,Dt=String.raw`(?<attrName>${Lt})(?:\s*=\s*(?:${jt}))?`,_t=String.raw`${Y}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,K=String.raw`(?<attrSpace>\s*)(?:${Dt}|(?<attrText>${_t}))`,Rt={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${F})(?<attrs>(?:${K})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${F})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Y}|['"]`,wildcard:String.raw`.`},Vt=Object.entries(Rt).map(([s,t])=>`(?<${s}>${t})`).join("|");function*Mt(s,t){let e,{lastIndex:r}=s;for(;e=s.exec(t);)yield e,{lastIndex:r}=s;if(r!=t.length)throw new Error("Failed to parse string")}const Ft=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function L(s,t="  ",e=80){const r=new RegExp(Vt,"gys"),n=new RegExp(K,"gy"),a=[];let o=null,c=0,u=0,$="",d=0,g="";const E=()=>{if(g&&g!=`
`){const b=$.indexOf(`
`),l=b==-1?$.length:b;u+g.length+l>e&&(g=`
`)}const f=g==`
`&&$?t.repeat(d):"",h=`${g}${f}${$}`;if(h){const b=h.lastIndexOf(`
`);b==-1?u+=h.length:u=h.length-b-1,a.push(h)}$=g=""},m=(...f)=>{for(const h of f)!o&&/^\s+$/.test(h)?(E(),g=h):($||(d=c),$+=h)};for(const f of Mt(r,s)){if(L.__strict&&f.groups.wildcard)throw new Error("Unexpected wildcard");if(f.groups.endTag){const h=f.groups.endTagName.toLowerCase();h==o&&(o=null),o||(--c,m(`</${h}>`))}if(o)m(f[0]);else if(f.groups.space)m(...f[0].match(/\n/g)?.slice(0,2)??[" "]);else if(f.groups.comment||f.groups.dtd||f.groups.text||f.groups.wildcard)m(f[0]);else if(f.groups.startTag){const h=f.groups.startTagName.toLowerCase();if(m(`<${h}`),++c,f.groups.attrs){let{lastIndex:l}=n,i,T;for(;i=n.exec(f.groups.attrs);){if({lastIndex:l}=n,L.__strict&&i.groups.attrText)throw new Error("Unexpected attr text");i.groups.attrText?(i.groups.attrSpace&&m(/\n/.test(i.groups.attrSpace)?`
`:" "),m(i.groups.attrText)):((i.groups.attrSpace||!T?.groups.attrText)&&m(/\n/.test(i.groups.attrSpace)?`
`:" "),m(`${i.groups.attrName}${i.groups.quotedAttrValue?`="${i.groups.quotedAttrValue}"`:i.groups.singleQuotedAttrValue?`='${i.groups.singleQuotedAttrValue}'`:i.groups.unquotedAttrValue?`=${i.groups.unquotedAttrValue}`:""}`)),T=i}if(l!=f.groups.attrs.length)throw new Error("Failed to parse attributes")}const b=!!f.groups.closingSlash;m(b?" />":">"),b||Ft.has(h)?--c:["pre","textarea","script","style"].includes(h)&&(o=h)}}E();let C=!1;for(;/^\s+$/.test(a[a.length-1]);){const f=a.pop();/\n/.test(f)&&(C=!0)}return C&&a.push(`
`),a.join("")}L.default=L;function Wt(s){return s.charAt(0).toUpperCase()+s.substr(1)}function qt(s,t){var e=s.toLowerCase();return t===0?Wt(e):e}function Bt(s,t){return t===void 0&&(t={}),st(s,nt({delimiter:" ",transform:qt},t))}async function Ut(){await fetch("./custom-elements.json");const t=await(await fetch("./custom-elements.json")).json();rt(t),console.log("Custom elements manifest loaded")}await Ut();const j=s=>{const{args:t,events:e,argTypes:r,manifest:n}=H(s),a=Object.fromEntries(Object.entries(r).map(([u,$])=>$?.control?.type==="number"&&$.options&&$.options?.length>0?[u,{...$,control:{type:"select"}}]:[u,$])),o=()=>({status:{styles:{backgroundColor:n?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${n?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${n?.since}`}});return{args:t,argTypes:(()=>{const u=()=>{const d=n?.members?.filter(m=>m.kind==="field"),g=new Set(n?.attributes?.map(m=>m.fieldName));return d?.filter(m=>!g.has(m.name)&&m?.privacy!=="private")?.map(m=>m.name)};return{...a,...n?.events?.reduce((d,g)=>(d[g.name]={...g,control:!1,table:{category:"Events"}},d),{}),...n?.members?.filter(d=>d.kind==="method"&&d?.privacy!=="private").reduce((d,g)=>(d[g.name]={...g,control:!1,table:{category:"Methods"}},d),{}),...u()?.reduce((d,g)=>(d[`${g}-prop`]={table:{disable:!0}},d[g]={control:!1,table:{category:"Properties"}},d),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:e}}}},N=s=>({getSuffixFromType:t=>({attribute:"-attr",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:e}=j(s);return e[t]?.control?.type==="boolean"?[!0,!1]:e[t].options},getValuesFromAttributes:t=>t?.map(e=>(e.endsWith("-attr")||(e=`${e}-attr`),{name:e,values:N(s).getValuesFromAttribute(e)})),overrideArgs:(t,e)=>{const r=e||j(s).args,n=Array.isArray(t)?t:[t];for(const a of n){const o=N(s).getSuffixFromType(a.type);r[`${a.name}${o}`]=a.value}return r}}),Xt=s=>{const{template:t,manifest:e}=H(s),{args:r}=j(s),{getValuesFromAttribute:n}=N(s);return{generateTemplate:({axis:o,constants:c=[],options:u,args:$=r})=>{const d=l=>{if(!e?.style)return t(l);const i=Object.keys(l).filter(p=>p.endsWith("-attr")).reduce((p,S)=>{const w=S.substring(0,S.length-5);return l[S]===!0?p[w]=!0:l[S]==="false"||l[S]==="(default)"?p[w]=!1:l[S]&&(w.endsWith("...")?p[w.replace("...",l[S])]=!0:p[l[S]]=!0),p},{}),T=l["default-slot"]||"",A={[s]:!0,...i},k=Object.keys(A).filter(p=>A[p]).join(" ");if(u?.templateContent){const p=u.templateContent.replaceAll("%SLOT%",T).replaceAll("%CLASSES%",k);return v(p)}return y`<div class=${G(A)}>${v(T)}</div>`},g=(Array.isArray(c)?c:[c]).reduce((l,i)=>({...l,[`${i.name}${N(s).getSuffixFromType(i.type)}`]:i.value}),{});if(!o?.x&&!o?.y&&!u?.title)return y`${d({...$,...g})}`;const E=l=>l?Array.isArray(l)?l.map(i=>({...i,values:i.values||n(i.name)})):[{...l,values:l.values||n(l.name)}]:[{}],m=E(o?.x),C=E(o?.y),h=(Array.isArray(c)?c:[c]).find(l=>l.type==="template")?.value,b=`uuid-${crypto.randomUUID()}`;return y`
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

        ${u?.templateBackgrounds?.colors.map((l,i)=>{const T=A=>`${u?.templateBackgrounds?.colors.length}n + ${A+1}`;return u?.templateBackgrounds?.alternate==="y"?`
                .${b}.story-template tbody tr.template-row:nth-of-type(${T(i)}) td.template {
                  background: ${l};
                }
              `:`
                .${b}.story-template tbody tr.template-row td.template:nth-of-type(${T(i)}) {
                  background: ${l};
                }
              `})}
      </style>
      ${m.map(l=>y` ${C.map(i=>{let T=!0;const A=m.length>1||l.values,k=(l&&i||C.length>1)&&i?.values;return y`
            <table class="story-template ${b} ${u?.classes}">
              <thead>
                ${u?.title&&y`<tr>
                  <th class="title" colspan=${(l.values?.length||0)+3}><code>${u?.title}</code></th>
                </tr>`}
                ${l&&l.values&&y`
                  <tr>
                    ${k?y`<td></td>`:""} <td></td>
                    ${A&&y`<th colspan=${l.values?.length||0}><code>${l.title||l.name}</code></th>`}
                    </tr>
                  </tr>
                  ${y`
                    <tr>
                      ${k?y`<td></td>`:""}
                      <td></td>
                      ${l?.values?.map(p=>y`<td><code>${p.title||p}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(i?.values||[""]).map(p=>{const S=y`
                    <tr class="template-row">
                      ${T&&k?y`<th rowspan="${i?.values?.length}">
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
                  `;return T=!1,S})}
              </tbody>
            </table>
          `})}`)}
    `}}},Zt=(s,t)=>at?.components?.[s]?.[t]?.description?.value??"No Description",Gt=(s,t=150)=>{const e=isNaN(t)?t:{heightPx:t},{afterRender:r="",additionalChromaticOptions:n={},heightPx:a=150}=e;return{parameters:{chromatic:{...et?.parameters?.chromatic,...n,disableSnapshot:!1},docs:{disable:!0}},render:(o,c)=>y`
      ${Object.entries(s).map(([u,$])=>{const d=$.name??Bt(u);return y`
          <div style='height: ${a}px; margin: var(--syn-spacing-small)'>
            <h3 data-chromatic="ignore">${d}</h3>
            ${$.render?.(o,c)}
          </div>
      `})}
      ${r}
    `}};export{Xt as a,Gt as b,N as c,Zt as g,j as s};
