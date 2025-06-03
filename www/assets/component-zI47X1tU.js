var Ni=Object.freeze,oo=Object.defineProperty;var Bi=(e,t)=>Ni(oo(e,"raw",{value:Ni(t||e.slice())}));import{n as a,c as f,f as cs,s as mt,u as $,e as u,b as y,o as g,i as Se,t as no}from"./library-BeKtmk-e.js";import{i as p,x as h,E as hs,u as Ri,B as ro,T as ao}from"./directive-helpers-Dvm_Ferq.js";import{a as Le,k as ps,r as us,L as lo,l as Ee,b as co,c as ho,d as Ui,f as po,s as uo,e as mo,p as di,g as bo,h as fo,o as ms,m as yo,n as go,j as vo,i as _o,t as wo}from"./ref-mC-OfJbg.js";import{s as xo}from"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import{c as x,w as m,S as _,e as st,a as ye,b as ct,d as ko}from"./icon-button-dyHaNbso.js";import{d as Co}from"./index-DrFu-skq.js";import"./index-_2TAQcTa.js";import{m as bs,n as Ke,c as zo}from"./functions-CDi3doZH.js";import{a as $o}from"./index-BmTV649i.js";import{c as Oe,s as So}from"./custom-elements-manifest-CDx8exsq.js";const Oo=p`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`;var To=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,de=(e,t,i,s)=>{for(var o=s>1?void 0:s?Eo(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&To(t,i,o),o};let Lt=class extends _{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=e=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(t=>{t!==e.target&&t.parentNode===e.target.parentNode&&t.removeAttribute("open")})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(e=>{e.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(e=>{e.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return h`
      <div 
        part="base"
        class=${f({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Lt.styles=[x,Oo];de([Le({selector:"syn-details"})],Lt.prototype,"detailsInDefaultSlot",2);de([a({attribute:"close-others",type:Boolean})],Lt.prototype,"closeOthers",2);de([a({reflect:!0,type:Boolean})],Lt.prototype,"contained",2);de([a({reflect:!0})],Lt.prototype,"size",2);de([m("size",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleSizeChange",1);de([m("contained",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleContainedChange",1);Lt=de([st("SynAccordion")],Lt);Lt.define("syn-accordion");class Ao extends ps{host;element;prevData={};render(t){return hs}update(t,[i]){this.element!==t.element&&(this.element=t.element),this.host=t.options?.host||this.element,this.apply(i),this.groom(i),this.prevData={...i}}apply(t){if(!t)return;const{prevData:i,element:s}=this;for(const o in t){const n=t[o];n!==i[o]&&Qe(s,o,n)}}groom(t){const{prevData:i,element:s}=this;if(i)for(const o in i)(!t||!(o in t)&&s[o]===i[o])&&Qe(s,o,void 0)}}class Do extends Ao{eventData={};apply(t){if(t)for(const i in t){const s=t[i];s!==this.eventData[i]&&this.applyEvent(i,s)}}applyEvent(t,i){const{prevData:s,element:o}=this;this.eventData[t]=i,s[t]&&o.removeEventListener(t,this,i),o.addEventListener(t,this,i)}groom(t){const{prevData:i,element:s}=this;if(i)for(const o in i)(!t||!(o in t)&&s[o]===i[o])&&this.groomEvent(o,i[o])}groomEvent(t,i){const{element:s}=this;delete this.eventData[t],s.removeEventListener(t,this,i)}handleEvent(t){const i=this.eventData[t.type];typeof i=="function"?i.call(this.host,t):i.handleEvent(t)}disconnected(){const{eventData:t,element:i}=this;for(const s in t){const o=s.slice(1),n=t[s];i.removeEventListener(o,this,n)}}reconnected(){const{eventData:t,element:i}=this;for(const s in t){const o=s.slice(1),n=t[s];i.addEventListener(o,this,n)}}}class Io extends Do{apply(t){if(!t)return;const{prevData:i,element:s}=this;for(const o in t){const n=t[o];if(n===i[o])continue;const r=o.slice(1);switch(o[0]){case"@":this.eventData[r]=n,this.applyEvent(r,n);break;case".":Qe(s,r,n);break;case"?":n?s.setAttribute(r,""):s.removeAttribute(r);break;default:n?s.setAttribute(o,String(n)):s.removeAttribute(o);break}}}groom(t){const{prevData:i,element:s}=this;if(i)for(const o in i){const n=o.slice(1);if(!t||!(o in t)&&s[n]===i[o])switch(o[0]){case"@":this.groomEvent(n,i[o]);break;case".":Qe(s,n,void 0);break;case"?":s.removeAttribute(n);break;default:s.removeAttribute(o);break}}}}function Qe(e,t,i){try{e[t]=i}catch{console.warn(`Could not set property "${t}" on ${e.tagName} because it has no "setter".`)}}const Po=cs(Io);let fe={};setTimeout(()=>{fe=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});function fs(e,t){return t.modules?.find(s=>s.declarations?.some(o=>o.tagName===e))?.declarations.find(s=>s.kind==="class"&&s.tagName===e)}function vi(e,t=!0){const i={};return e?.members?.forEach(s=>{if(s.kind!=="field")return;const o=e.attributes?.find(k=>s.name===k.fieldName),n=s.name;if(i[n]={name:n,table:{disable:!0}},s.privacy==="private"||s.privacy==="protected"||s.static)return;const r=o?.name||s.name,l=fe.typeRef&&s[`${fe.typeRef}`]?.text||s?.type?.text,d=vs(l),c=Ae(s.default);i[r]={name:r,description:ki(s.description,n,s.deprecated),defaultValue:c==="''"?"":c,control:t?{type:gs(d,o!==void 0)}:!1,table:{category:o?"attributes":"properties",defaultValue:{summary:c},type:{summary:l}}};const b=d?.split("|");b&&b?.length>1&&(i[r].options=b.map(k=>Ae(k)))}),i}function Fo(e,t=!0){const i={};return e?.members?.forEach(s=>{if(s.kind!=="field"||(i[s.name]={name:s.name,table:{disable:!0}},s.privacy==="private"||s.privacy==="protected"||s.static))return;const o=fe.typeRef&&s[`${fe.typeRef}`]?.text||s?.type?.text,n=vs(o),r=`${s.name}`,l=gs(n);i[r]={name:s.name,description:s.description,defaultValue:Vo(l,s.default),control:t?{type:l}:!1,table:{category:"properties",defaultValue:{summary:Ae(s.default)},type:{summary:o}}};const d=n?.split("|");d&&d?.length>1&&(i[r].options=d.map(c=>Ae(c)))}),delete i.ref,i}function ys(e){const t={};return e?.events?.forEach(i=>{const s=No(i.name);t[s]={name:s,description:i.description,control:!1,table:{category:"events"}}}),t}function _i(e,t=!0){const i={};return e?.cssProperties?.forEach(s=>{i[s.name]={name:s.name,description:s.description,defaultValue:s.default,control:t?{type:s.name.toLowerCase().includes("color")?"color":"text"}:!1,table:{category:"css properties"}}}),i}function wi(e,t=!0){const i={};return e?.cssParts?.forEach(s=>{i[s.name]={name:s.name,table:{disable:!0}},i[`${s.name}-part`]={name:s.name,description:ki(s.description,t?`${s.name}-part`:""),defaultValue:`${e?.tagName}::part(${s.name}) {
}`,control:t?"text":!1,table:{category:"css shadow parts"}}}),i}function xi(e,t=!0){const i={};return e?.slots?.forEach(s=>{i[s.name]={name:s.name,table:{disable:!0}};const o=s.name||"default";i[`${o}-slot`]={control:"text",name:o,description:ki(s.description,`${o}-slot`),defaultValue:o==="default"?"":`<span slot="${o}"></span>`,control:t?"text":!1,table:{category:"slots"}}}),i}function Lo(e){const t={};return e?.events?.forEach(i=>{t[i.name]={name:i.name,description:i.description,control:!1,table:{category:"events",type:{summary:`CustomEvent${i.type?`<${i.type.text}>`:""}`}}}}),t}function Vo(e,t){const i=Ae(t);return e==="boolean"?i==="true":i==="''"?"":i}function gs(e,t=!1){if(!e)return"text";const i=e.toLowerCase(),s=i.split("|").map(o=>o.trim()).filter(o=>o!==""&&o!=="null"&&o!=="undefined");return Mo(i)&&!t?"object":He(s,"boolean")?"boolean":He(s,"number")&&!He(s,"string")&&s.every(o=>!o.includes("'"))?"number":He(s,"date")?"date":s.length>1&&s.every(o=>o.includes("'"))?"select":"text"}function Mo(e){return e.includes("array")||e.includes("object")||e.includes("{")||e.includes("[")||e.includes("<")}function He(e=[],t){return e?.find(i=>i===t)!==void 0}function vs(e){return e?e.replace(" | undefined","").replace(" | null",""):""}function Ae(e){return e?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function ki(e,t,i){let s="";return i&&(s+=`\`@deprecated\` ${i}`),e&&(s+=s?`


`:"",s+=e),fe.hideArgRef||!t?s:s+=`


arg ref - \`${t}\``}const No=e=>`on${Ro(Bo(e))}`;function Bo(e=""){return e.split("-").map((s,o)=>o?s.charAt(0).toUpperCase()+s.slice(1).toLowerCase():s.toLowerCase()).join("")}function Ro(e){return e.charAt(0).toUpperCase()+e.slice(1)}const{useArgs:Uo}=__STORYBOOK_MODULE_PREVIEW_API__;let Je,ji,Ci={};setTimeout(()=>{Ci=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});var ds;function jo(e,t,i,s){if(!t)return $`<${mt(e.tagName)}></${mt(e.tagName)}>`;e?.tagName!==ji&&(Je=void 0,ji=e?.tagName);const{attrOperators:o,additionalAttrs:n}=Ho(e,t,s),r={...o,...n},l=Ko(e,t),d=Wo(e,t);return Go(e),$`${_s(e,t)}
<${mt(e.tagName)} 
  ${Po(r)}
  ${d}
  >
    ${l}${i||""}
</${mt(e.tagName)}>
${Ci.hideScriptTag?"":$(ds||(ds=Bi([`<script>
  window.component = document.querySelector("`,`");
<\/script>`])),e.tagName)}
`}function _s(e,t){const i=qo(e,t);return`${i}`?.replaceAll(/\s+/g,"")!=""?$`<style>${i}</style>`:""}function Ho(e,t,i){const s=vi(e),o={},n={},r={};return Object.keys(s).forEach(l=>{const d=s[l];if(d?.table?.category!=="attributes")return;const c=d.name,b=t[l],k=d.control.type==="boolean"?`?${c}`:c;(b!==s[l].defaultValue||Ci.renderDefaultAttributeValues)&&(o[k]=b==="false"?!1:b)}),Object.keys(t).filter(l=>s[l]?.table?.category==="properties").forEach(l=>{if(l.startsWith("on"))return;const d=t[l];n[`.${l}`]=d}),Object.keys(t).filter(l=>!Object.keys(i||{}).includes(l)).forEach(l=>{!l.startsWith("on")&&typeof t[l]!="function"&&(r[l]=t[l])}),{attrOperators:o,propOperators:n,additionalAttrs:r}}function Wo(e,t){if(!e?.cssProperties?.length)return;const i=_i(e);return mt(`style="${Object.keys(i).map(s=>{const o=i[s].name,n=t[s];return n?`${o}: ${n||""}`:null}).filter(s=>s!==null).join(";")}"`)}function qo(e,t){const i=wi(e);if(!Object.keys(i).some(n=>!!t[n]))return;const o=Object.keys(i).filter(n=>n.endsWith("-part")).map(n=>{const r=i[n].name,l=t[n];return l?.replaceAll(/\s+/g,"")!==`${e?.tagName}::part(${r}){}`?`
${l}`:null}).filter(n=>n!==null).join(`
`);return o?mt(`${o}
`):""}function Ko(e,t){const i=xi(e);return mt(`${Object.keys(i).filter(o=>o.endsWith("-slot")).map(o=>{const n=i[o].name,r=t[o];return n==="default"?r||null:r!==`<span slot="${n}"></span>`?r:null}).filter(o=>o!==null).join("")}`)}function Go(e){Yo(e),setTimeout(()=>{const t=document.querySelector(e.tagName);Je?.observe(t,{attributes:!0})})}function Yo(e){let t=!1;const i=Uo()[1],s=vi(e);Je||(Je=new MutationObserver(o=>{o.forEach(n=>{if(n.type!=="attributes"||n.attributeName==="class"&&t)return;t=!0;const r=s[`${n.attributeName}`];r?.control==="boolean"||r?.control?.type==="boolean"?i({[`${n.attributeName}`]:n.target?.hasAttribute(n.attributeName||"")}):i({[`${n.attributeName}`]:n.target.getAttribute(n.attributeName||"")}),t=!1})}))}function Xo(e){window.__WC_STORYBOOK_HELPERS_CONFIG__=e}function ws(e){const t=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!t)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const i=fs(e,t),s=i?.events?.map(n=>n.name)||[],o=xs(i);return{args:ks(i),argTypes:o,reactArgs:Jo(i),reactArgTypes:Cs(i),events:s,styleTemplate:n=>_s(i,n),template:(n,r)=>jo(i,n,r,o)}}function xs(e){return{..._i(e),...wi(e),...xi(e),...vi(e),...Lo(e)}}function ks(e,t){return t||(t=xs(e)),Object.entries(t).filter(([,s])=>s?.control).map(([s,o])=>{let n=Qo(o.defaultValue);return o.table?.category==="css properties"&&(n=n?.toString()),{[s]:n===void 0?"":n}}).reduce((s,o)=>({...s,...o}),{})}function Qo(e){try{return JSON.parse(e)}catch{return e}}function Cs(e){return{...Fo(e),...ys(e),..._i(e,!1),...wi(e,!1),...xi(e,!1)}}function Jo(e){const t=ks(e,Cs(e)),i=Object.entries(ys(e)).map(([s])=>({[s]:()=>{}})).reduce((s,o)=>({...s,...o}),{});return{...t,...i}}const{useParameter:Zo,addons:tn,useEffect:en,useMemo:ad,definePreview:ld}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:sn}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var on=Object.defineProperty,zs=(e,t)=>{for(var i in t)on(e,i,{get:t[i],enumerable:!0})},nn={};zs(nn,{initialGlobals:()=>ln});var Ze="themes",rn=`storybook/${Ze}`,$s="theme",Hi={},an={REGISTER_THEMES:`${rn}/REGISTER_THEMES`},ln={[$s]:""},dn={};zs(dn,{initializeThemeState:()=>Os,pluckThemeFromContext:()=>Ss,useThemeParameters:()=>cn});function Ss({globals:e}){return e[$s]||""}function cn(e){return sn(Co`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[Ze]??Hi:Zo(Ze,Hi)}function Os(e,t){tn.getChannel().emit(an.REGISTER_THEMES,{defaultTheme:t,themes:e})}var hn="html",Wi=e=>e.split(" ").filter(Boolean),pn=({themes:e,defaultTheme:t,parentSelector:i=hn})=>(Os(Object.keys(e),t),(s,o)=>{let{themeOverride:n}=o.parameters[Ze]??{},r=Ss(o);return en(()=>{let l=n||r||t,d=document.querySelector(i);if(!d)return;Object.entries(e).filter(([b])=>b!==l).forEach(([b,k])=>{let Y=Wi(k);Y.length>0&&d.classList.remove(...Y)});let c=Wi(e[l]);c.length>0&&d.classList.add(...c)},[n,r]),s()});const{definePreview:dd}=__STORYBOOK_MODULE_PREVIEW_API__;var un=Object.defineProperty,mn=(e,t)=>{for(var i in t)un(e,i,{get:t[i],enumerable:!0})},bn={};mn(bn,{initialGlobals:()=>vn});var fn="viewport",yn={[fn]:{value:void 0,isRotated:!1}},gn={viewport:"reset",viewportRotated:!1},vn=globalThis.FEATURES?.viewportStoryGlobals?yn:gn,_n={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};function W(e,t,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,{...i,duration:wn()?0:i.duration});o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function qi(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function wn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function J(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}function Ki(e,t){return e.map(i=>({...i,height:i.height==="auto"?`${t}px`:i.height}))}const zi=e=>{const{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()},Ts=new Map,mi=new WeakMap;function Es(e){return e??{keyframes:[],options:{duration:0}}}function Gi(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function O(e,t){Ts.set(e,Es(t))}function We(e,t,i){mi.set(e,{...mi.get(e),[t]:Es(i)})}function M(e,t,i){const s=mi.get(e);if(s?.[t])return Gi(s[t],i.dir);const o=Ts.get(t);return o?Gi(o,i.dir):{keyframes:[],options:{duration:0}}}class Q{constructor(t,...i){this.slotNames=[],this.handleSlotChange=s=>{const o=s.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}function As(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}const Ds={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Choose file",fileButtonTextMultiple:"Choose files",folderButtonText:"Choose folder",fileDragDrop:"Drop or choose file",folderDragDrop:"Drop or choose folder",menu:"Menu",notification:"Notification",numFilesSelected:(e,t)=>e===0?`No ${t?"folder":"files"} chosen`:`${e} files`,openMenu:"Open menu",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Side navigation",sideNavHide:"Hide navigation",sideNavShow:"Show navigation",success:"Success",warning:"Warning"};us(Ds);class j extends lo{static{us(Ds)}}function Z(e,t){return new Promise(i=>{function s(o){o.target===e&&(e.removeEventListener(t,s),i())}e.addEventListener(t,s)})}const xn=p`
	/* stylelint-disable */
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-top-width: calc(var(--syn-panel-border-width) * 3);
    border-radius: var(--syn-border-radius-medium);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-normal);
    line-height: 1.6;
    color: var(--syn-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-large);
    padding-inline-start: var(--syn-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--syn-spacing-large);
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
    margin-inline-end: var(--syn-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--syn-panel-border-width) * 3);
    background-color: var(--syn-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--syn-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--syn-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--syn-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--syn-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--syn-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,kn=p`
  .alert {
    /* Defines the used border and icon color for variants */
    --variant-accent-color: var(--syn-panel-border-color);

    border: var(--syn-panel-border-width) solid var(--syn-panel-border-color);
    border-left: 0;
    border-radius: var(--syn-border-radius-none);
    color: var(--syn-typography-color-text);
    font-size: var(--syn-font-size-medium);
    line-height: var(--syn-line-height-normal);
    min-height: 56px;
  }

  /**
   * Add back the items left borders
   * This is done to prevent border clipping with the large border-left needed on .alert
   * Note we also need to adjust our paddings to add the border width here
   */
  .alert::before {
    background: var(--variant-accent-color);
    bottom: -1px;
    content: "";
    left: 0;
    position: absolute;
    top: -1px;
    width: var(--syn-spacing-2x-small);
  }

  .alert :first-child {
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  /**
   * Make sure everything is aligned to top
   */
  .alert__icon,
  .alert__close-button {
    align-items: flex-start;
    font-size: var(--syn-font-size-x-large);
  }

  .alert__message {
    padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-medium) var(--syn-spacing-medium);
  }

  /**
   * Alert Icon
   */
  .alert__icon {
    color: var(--variant-accent-color);
    padding-block: var(--syn-spacing-medium);
    padding-inline-start: var(--syn-spacing-medium);
  }

  /**
   * Close Icon
   */
  .alert__close-button {
    align-self: start;
    color: var(--syn-typography-color-text);
    margin-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Variants should highlight the left border instead of top
   */
  .alert--primary {
    --variant-accent-color: var(--syn-color-primary-600);
  }

  .alert--success {
    --variant-accent-color: var(--syn-color-success-500);
  }

  .alert--neutral {
    --variant-accent-color: var(--syn-color-neutral-800);
  }

  .alert--warning {
    --variant-accent-color: var(--syn-color-warning-400);
  }

  .alert--danger {
    --variant-accent-color: var(--syn-color-error-600);
  }
`;var Cn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Vt=(e,t,i,s)=>{for(var o=s>1?void 0:s?zn(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Cn(t,i,o),o};let X=class extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"icon","suffix"),this.localize=new j(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"syn-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,t="100%",i="0";this.countdownAnimation=e.animate([{width:t},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await J(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=M(this,"alert.show",{dir:this.localize.dir()});await W(this.base,e,t),this.emit("syn-after-show")}else{zi(this),this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await J(this.base);const{keyframes:e,options:t}=M(this,"alert.hide",{dir:this.localize.dir()});await W(this.base,e,t),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),X.toastStack.parentElement===null&&document.body.append(X.toastStack),X.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{X.toastStack.removeChild(this),e(),X.toastStack.querySelector("syn-alert")===null&&X.toastStack.remove()},{once:!0})})}render(){return h`
      <div
        part="base"
        class=${f({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?h`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></syn-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?h`
              <div
                class=${f({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};X.styles=[x,xn,kn];X.dependencies={"syn-icon-button":ye};Vt([u('[part~="base"]')],X.prototype,"base",2);Vt([u(".alert__countdown-elapsed")],X.prototype,"countdownElement",2);Vt([a({type:Boolean,reflect:!0})],X.prototype,"open",2);Vt([a({type:Boolean,reflect:!0})],X.prototype,"closable",2);Vt([a({reflect:!0})],X.prototype,"variant",2);Vt([a({type:Number})],X.prototype,"duration",2);Vt([y()],X.prototype,"remainingTime",2);Vt([m("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);Vt([m("duration")],X.prototype,"handleDurationChange",1);X=Vt([st("SynAlert")],X);O("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});O("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});X.define("syn-alert");const $n=p`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--syn-border-radius-small);
    border: solid 1px var(--syn-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--success {
    background-color: var(--syn-color-success-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--syn-color-warning-600);
    color: var(--syn-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--syn-color-danger-600);
    color: var(--syn-color-neutral-0);
  }
`,Sn=p`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-medium-bold);
    height: var(--syn-spacing-large);
    line-height: var(--syn-spacing-large);
    min-width: var(--syn-spacing-large);
    padding: 0 var(--syn-spacing-x-small);
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-typography-color-text-inverted);
  }

  .badge--success {
    background-color: var(--syn-color-success-500);
    color: var(--syn-typography-color-text);
  }

  .badge--neutral {
    background-color: var(--syn-color-neutral-800);
    color: var(--syn-typography-color-text-inverted);
  }

  .badge--warning {
    background-color: var(--syn-color-warning-400);
    color: var(--syn-typography-color-text);
  }

  .badge--danger {
    background-color: var(--syn-color-error-600);
    color: var(--syn-typography-color-text-inverted);
  }

  /**
   * Special treatment: If the badge is empty, show it as a dot only
   */
  :host(:empty) .badge {
    height: var(--syn-spacing-x-small);
    min-width: initial;
    padding: 0;
    width: var(--syn-spacing-x-small);
  }

  .visually-hidden {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;var On=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Is=(e,t,i,s)=>{for(var o=s>1?void 0:s?Tn(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&On(t,i,o),o};let De=class extends _{constructor(){super(...arguments),this.localize=new j(this),this.variant="primary"}render(){return h`
      <span
        part="base"
        class=${f({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}};De.styles=[x,$n,Sn];Is([a({reflect:!0})],De.prototype,"variant",2);De=Is([st("SynBadge")],De);De.define("syn-badge");const En=p`
	/* stylelint-disable */
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-600);
    line-height: var(--syn-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--syn-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--syn-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--syn-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--syn-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--syn-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--syn-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,An=p`
  .breadcrumb-item {
    color: var(--syn-color-neutral-500);
    font-size: var(--syn-font-size-x-small);
    font-weight: var(--syn-font-weight-normal);
  }

  /**
   * Make sure to remove the border radius.
   * Without this, focus will be rounded
   */
  .breadcrumb-item__label {
    border-radius: var(--syn-border-radius-none);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--syn-typography-color-text);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--syn-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--syn-color-primary-950);
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    margin-inline-end: var(--syn-spacing-2x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  /**
   * Adjust color and font size to match Synergy's typography.
   */
  .breadcrumb-item--has-prefix .breadcrumb-item__prefix,
  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    color: var(--syn-typography-color-text);
    font-size: var(--syn-spacing-medium);
  }

  /**
   * Make sure the color of the last item's prefix and suffix matches the text.
   */
  :host(:last-of-type) .breadcrumb-item--has-prefix .breadcrumb-item__prefix,
  :host(:last-of-type) .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    color: var(--syn-color-neutral-500);
  }

  .breadcrumb-item__separator {
    font-size: var(--syn-spacing-medium);
    margin: 0 var(--syn-spacing-x-small) 0 var(--syn-spacing-2x-small);
  }

  /**
   * Make sure the direction of the chevron matches the direction of the text.
   */
  .breadcrumb-item__separator ::slotted(syn-icon.ltr) {
    rotate: -90deg;
  }

  .breadcrumb-item__separator ::slotted(syn-icon.rtl) {
    rotate: 90deg;
  }

  .breadcrumb-item__label--drop-down {
    display: flex;
  }
`;var Dn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,ge=(e,t,i,s)=>{for(var o=s>1?void 0:s?In(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Dn(t,i,o),o};class ce extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}static{this.styles=[x,En,An]}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(i=>i.tagName.toLowerCase()==="syn-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return h`
      <div
        part="base"
        class=${f({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?h`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${g(this.target?this.target:void 0)}"
                rel=${g(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?h`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?h`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}}ge([u("slot:not([name])")],ce.prototype,"defaultSlot",2);ge([y()],ce.prototype,"renderType",2);ge([a()],ce.prototype,"href",2);ge([a()],ce.prototype,"target",2);ge([a()],ce.prototype,"rel",2);ge([m("href",{waitUntilFirstUpdate:!0})],ce.prototype,"hrefChanged",1);ce.define("syn-breadcrumb-item");const Pn=p`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Fn=p`
  /* Write custom CSS here */
`;var Ln=Object.defineProperty,$i=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&Ln(t,i,o),o};class ii extends _{constructor(){super(...arguments),this.localize=new j(this),this.separatorDir=this.localize.dir(),this.label=""}static{this.styles=[x,Pn,Fn]}static{this.dependencies={"syn-icon":ct}}getSeparator(){const i=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),i.setAttribute("data-default",""),i.slot="separator",i}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(i=>i.tagName.toLowerCase()==="syn-breadcrumb-item");t.forEach((i,s)=>{const o=i.querySelector('[slot="separator"]');o===null?i.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),s===t.length-1?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),h`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}}$i([u("slot")],ii.prototype,"defaultSlot");$i([u('slot[name="separator"]')],ii.prototype,"separatorSlot");$i([a()],ii.prototype,"label");ii.define("syn-breadcrumb");const Vn=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Mn=Object.defineProperty,Si=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&Mn(t,i,o),o};class Ve extends _{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=[x,Vn]}handleFocus(t){we(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(t){we(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(t){we(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(t){we(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(i=>{const s=t.indexOf(i),o=we(i);o&&(o.toggleAttribute("data-syn-button-group__button",!0),o.toggleAttribute("data-syn-button-group__button--first",s===0),o.toggleAttribute("data-syn-button-group__button--inner",s>0&&s<t.length-1),o.toggleAttribute("data-syn-button-group__button--last",s===t.length-1),o.toggleAttribute("data-syn-button-group__button--radio",o.tagName.toLowerCase()==="syn-radio-button"))})}render(){return h`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}}Si([u("slot")],Ve.prototype,"defaultSlot");Si([y()],Ve.prototype,"disableRole");Si([a()],Ve.prototype,"label");function we(e){const t="syn-button, syn-radio-button";return e.closest(t)??e.querySelector(t)}Ve.define("syn-button-group");const xe=new WeakMap,ke=new WeakMap,Ce=new WeakMap,ci=new WeakSet,qe=new WeakMap;class Mt{constructor(t,i){this.handleFormData=s=>{const o=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";if(this.host.isConnected&&!o&&!l&&typeof n=="string"&&n.length>0&&typeof r<"u"){if(r instanceof FileList){const d=r;for(const c of d)s.formData.append(n,c,c.name);return}Array.isArray(r)?r.forEach(d=>{s.formData.append(n,d.toString())}):s.formData.append(n,r.toString())}},this.handleFormSubmit=s=>{const o=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&xe.get(this.form)?.forEach(r=>{this.setUserInteracted(r,!0)}),this.form&&!this.form.noValidate&&!o&&!n(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),qe.set(this.host,[])},this.handleInteraction=s=>{const o=qe.get(this.host);o.includes(s.type)||o.push(s.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:s=>{const o=s.form;if(o){const r=s.getRootNode().querySelector(`#${o}`);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>s.disabled??!1,reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,o)=>s.value=o,assumeInteractionOn:["syn-input"],...i}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),qe.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),qe.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,xe.has(this.form)?xe.get(this.form).add(this.host):xe.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ke.has(this.form)||(ke.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ce.has(this.form)||(Ce.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=xe.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ke.has(this.form)&&(this.form.reportValidity=ke.get(this.form),ke.delete(this.form)),Ce.has(this.form)&&(this.form.checkValidity=Ce.get(this.form),Ce.delete(this.form)),this.form=void 0))}setUserInteracted(t,i){i?ci.add(t):ci.delete(t),t.requestUpdate()}doAction(t,i){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",i&&(s.name=i.name,s.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&s.setAttribute(o,i.getAttribute(o))})),this.form.append(s),s.click(),s.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const i=this.host,s=!!ci.has(i),o=!!i.required;i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t);const n=i.parentElement;if(n&&n.tagName.toLocaleUpperCase()==="SYN-VALIDATE"){const r=n.getValidity();i.toggleAttribute("data-user-invalid",!t&&!r)}else i.toggleAttribute("data-user-invalid",!t&&s);i.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const i=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||i.preventDefault(),this.host.dispatchEvent(i)||t?.preventDefault()}}const Me=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Nn=Object.freeze({...Me,valid:!1,valueMissing:!0}),Ps=Object.freeze({...Me,valid:!1,customError:!0}),Bn=p`
	/* stylelint-disable */
  :host {
    --track-width: 2px;
    --indicator-color: var(--syn-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }
`,Rn=p`
  :host {
    --speed: var(--syn-transition-x-slow);
  }

  .spinner__indicator {
    stroke-dasharray: 75% 360%;
    stroke-linecap: initial;
  }

  /**
   * Make sure the spinner track is using the correct color.
   */
  .spinner__track {
    filter: saturate(0);
    opacity: 0.16;
    stroke: var(--indicator-color);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;class Oi extends _{constructor(){super(...arguments),this.localize=new j(this)}static{this.styles=[x,Bn,Rn]}render(){return h`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const Fs=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--syn-input-border-width);
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--syn-transition-x-fast) background-color,
      var(--syn-transition-x-fast) color,
      var(--syn-transition-x-fast) border,
      var(--syn-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(syn-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Primary */
  .button--filled.button--primary {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:hover:not(.button--disabled) {
    background-color: var(--syn-color-primary-500);
    border-color: var(--syn-color-primary-500);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:active:not(.button--disabled) {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--syn-color-primary-600);
    color: var(--syn-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--syn-color-primary-700);
    background-color: var(--syn-color-primary-700);
    color: var(--syn-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--syn-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--syn-input-height-small);
    font-size: var(--syn-button-font-size-small);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--syn-input-height-medium);
    font-size: var(--syn-button-font-size-medium);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--syn-input-height-large);
    font-size: var(--syn-button-font-size-large);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-large);
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading syn-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(syn-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(syn-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--syn-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--syn-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--syn-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--syn-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--syn-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--syn-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-syn-button-group__button--first]:not([data-syn-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-syn-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-syn-button-group__button--last]:not([data-syn-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-syn-button-group__button]:not([data-syn-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--syn-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-syn-button-group__button]:not(
          [data-syn-button-group__button--first],
          [data-syn-button-group__button--radio],
          [variant='filled']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-syn-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-syn-button-group__button--focus]),
  :host([data-syn-button-group__button][checked]) {
    z-index: 2;
  }
`,Un=p`
  .button {
    font-weight: var(--syn-font-weight-bold);
  }

  .button:focus-visible {
    outline: var(--syn-focus-ring-color) solid var(--syn-focus-ring-width);
    outline-offset: var(--syn-focus-ring-width);
  }

  /*
   * Adjustments for button label paddings
   * @see https://github.com/synergy-design-system/synergy-design-system/issues/243
   */
  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--syn-spacing-2x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--syn-spacing-2x-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--syn-spacing-x-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Icon-only buttons
   */
  .button--small .button__label.button__icon-only {
    padding: 0 calc(var(--syn-spacing-x-small) + var(--syn-spacing-4x-small));
  }

  .button--small .button__label::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
    vertical-align: -3px;
  }

  .button--medium .button__label.button__icon-only {
    padding: 0 calc(var(--syn-spacing-small) - var(--syn-spacing-4x-small));
  }

  .button--medium .button__label::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    vertical-align: -6px;
  }

  .button--large .button__label.button__icon-only {
    padding: 0 calc(var(--syn-spacing-medium) - var(--syn-spacing-4x-small));
  }

  .button--large .button__label::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
    vertical-align: -8px;
  }


  /**
   * Size modifiers
   */
  .button.button--medium.button--has-label .button__label {
    font-size: var(--syn-font-size-medium);
  } 

  .button.button--large.button--has-label .button__label {
    font-size: var(--syn-font-size-large);
  }

  /*
   * Standard buttons
   */
  .button--filled.button--primary.button--disabled {
    background-color: var(--syn-color-neutral-600);
    border-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:hover:not(.button--disabled) {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-neutral-0);
  }

  .button--filled.button--primary:active:not(.button--disabled) {
    background-color: var(--syn-color-primary-950);
    border-color: var(--syn-color-primary-950);
    color: var(--syn-color-neutral-0);
  }

  /*
   * Outline buttons
   */
  .button--outline.button--primary.button--disabled {
    background: none;
    border-color: var(--syn-color-neutral-600);
    color: var(--syn-color-neutral-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background: none;
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-primary-900);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    background: inherit;
    border-color:  var(--syn-color-primary-950);
    color:  var(--syn-color-primary-950);
  }

  /*
   * Text buttons
   */
  .button--text:hover:not(.button--disabled) {
    color: var(--syn-color-primary-900);
  }

  .button--text.button--primary:active:not(.button--disabled) {
    background: inherit;
    border-color: transparent;
    color:  var(--syn-color-primary-950);
  }

  .button--text.button--primary.button--disabled {
    color: var(--syn-color-neutral-600);
  }

  /**
   * Button spacing
   */
  .button.button--small.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button.button--small.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button.button--small.button--has-prefix .button__prefix, 
  .button.button--small.button--has-suffix .button__suffix {
    font-size: var(--syn-spacing-medium);
  }

  .button.button--medium.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-medium);
  } 

  .button.button--medium.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-medium);
  }

  .button.button--medium.button--has-prefix .button__prefix, 
  .button.button--medium.button--has-suffix .button__suffix {
    font-size: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-prefix {
    padding-inline-start: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-prefix .button__label {
    padding-inline-start: var(--syn-spacing-small);
  }

  .button.button--large.button--has-label.button--has-suffix {
    padding-inline-end: var(--syn-spacing-large);
  }

  .button.button--large.button--has-label.button--has-suffix .button__label {
    padding-inline-end: var(--syn-spacing-small);
  }

  .button.button--large.button--has-prefix .button__prefix, 
  .button.button--large.button--has-suffix .button__suffix {
    font-size: var(--syn-font-size-2x-large);
  }

  /*
   * Caret modifier
   */
  .button--caret.button--small .button__caret{
    font-size: var(--syn-font-size-medium);
  }

  .button--caret.button--medium .button__caret{
    font-size: var(--syn-font-size-x-large);
  }

  .button--caret.button--large .button__caret{
    font-size: var(--syn-font-size-2x-large);
  }
`;var jn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,H=(e,t,i,s)=>{for(var o=s>1?void 0:s?Hn(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&jn(t,i,o),o};let P=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Q(this,"[default]","prefix","suffix"),this.localize=new j(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Me}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){const e=As(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),i=t.length===1&&t[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=i&&e===""}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Se`a`:Se`button`;return $`
      <${t}
        part="base"
        class=${f({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(e?void 0:this.disabled)}
        type=${g(e?void 0:this.type)}
        title=${this.title}
        name=${g(e?void 0:this.name)}
        value=${g(e?void 0:this.value)}
        href=${g(e&&!this.disabled?this.href:void 0)}
        target=${g(e?this.target:void 0)}
        download=${g(e?this.download:void 0)}
        rel=${g(e?this.rel:void 0)}
        role=${g(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${f({button__label:!0,"button__icon-only":this.iconOnly})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?$` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?$`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${t}>
    `}};P.styles=[x,Fs,Un];P.dependencies={"syn-icon":ct,"syn-spinner":Oi};H([u(".button")],P.prototype,"button",2);H([u("slot:not([name])")],P.prototype,"defaultSlot",2);H([y()],P.prototype,"iconOnly",2);H([y()],P.prototype,"hasFocus",2);H([y()],P.prototype,"invalid",2);H([a({reflect:!0})],P.prototype,"title",2);H([a({reflect:!0})],P.prototype,"variant",2);H([a({reflect:!0})],P.prototype,"size",2);H([a({type:Boolean,reflect:!0})],P.prototype,"caret",2);H([a({type:Boolean,reflect:!0})],P.prototype,"disabled",2);H([a({type:Boolean,reflect:!0})],P.prototype,"loading",2);H([a()],P.prototype,"type",2);H([a()],P.prototype,"name",2);H([a()],P.prototype,"value",2);H([a()],P.prototype,"href",2);H([a()],P.prototype,"target",2);H([a()],P.prototype,"rel",2);H([a()],P.prototype,"download",2);H([a()],P.prototype,"form",2);H([a({attribute:"formaction"})],P.prototype,"formAction",2);H([a({attribute:"formenctype"})],P.prototype,"formEnctype",2);H([a({attribute:"formmethod"})],P.prototype,"formMethod",2);H([a({attribute:"formnovalidate",type:Boolean})],P.prototype,"formNoValidate",2);H([a({attribute:"formtarget"})],P.prototype,"formTarget",2);H([m("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);P=H([st("SynButton")],P);P.define("syn-button");const Wn=p`
	/* stylelint-disable */
  :host {
    --border-color: var(--syn-color-neutral-200);
    --border-radius: var(--syn-border-radius-medium);
    --border-width: 1px;
    --padding: var(--syn-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,qn=p`
  :host {
    --border-color: var(--syn-color-neutral-300);
    --border-width: var(--syn-border-width-small);
    --border-radius: var(--syn-border-radius-medium);
  }

  .card {
    box-shadow: none;
  }

  /**
   * Header adjustments
   */
  .card__header {
    border: none;
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-large);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * Card body
   */
  .card__body {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-medium-regular);
  }

  /**
   * Card Footer
   */
  .card--has-footer .card__footer {
    border-top: none;
    padding: var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  /**
   * Cards that are sharp do not receive a border radius
   */
  .card--sharp {
    border-radius: var(--syn-border-radius-none);
  }

  /**
   * Do not apply border radius to sharp card images
   */
  .card--sharp .card__image {
    border-top-left-radius: var(--syn-border-radius-none);
    border-top-right-radius: var(--syn-border-radius-none);
  }

`;var Kn=Object.defineProperty,Gn=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&Kn(t,i,o),o};class Ls extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"footer","header","image"),this.sharp=!1}static{this.styles=[x,Wn,qn]}render(){return h`
      <div
        part="base"
        class=${f({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}Gn([a({type:Boolean,reflect:!0})],Ls.prototype,"sharp");Ls.define("syn-card");const he=(e="value")=>(t,i)=>{const s=t.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(n,r,l){const d=s.getPropertyOptions(e),c=typeof d.attribute=="string"?d.attribute:e;if(n===c){const b=d.converter||Ri,Y=(typeof b=="function"?b:b?.fromAttribute??Ri.fromAttribute)(l,d.type);this[e]!==Y&&(this[i]=Y)}o.call(this,n,r,l)}},Wt=p`
	/* stylelint-disable */
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    margin-bottom: var(--syn-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--syn-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--syn-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--syn-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
    color: var(--syn-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--syn-input-help-text-color);
    margin-top: var(--syn-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-2x-small);
  }
`,qt=p` 

   /* Label */
  .form-control--has-label .form-control__label {
   font-weight: var(--syn-font-weight-semibold);
  }

  .form-control--has-label.form-control--small .form-control__label {
    margin-bottom: var(--syn-spacing-x-small);
  }
  
  .form-control--has-label.form-control--medium .form-control__label {
    margin-bottom: var(--syn-input-spacing-small);
  }

  .form-control--has-label.form-control--large .form-control__label {
    margin-bottom: var(--syn-input-spacing-medium);
  }

    /* Help text */
  .form-control--has-help-text .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

    /* ERROR */
  :host([data-user-invalid]:not([disabled])) .form-control__help-text {
    color: var(--syn-input-help-text-color-error);
   }

  /* DISABLED */
  :host([disabled]) .form-control--has-label .form-control__label,
  :host([disabled]) .form-control--has-help-text .form-control__help-text {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Yn=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--syn-toggle-size-small);
    font-size: var(--syn-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--syn-toggle-size-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--syn-toggle-size-large);
    font-size: var(--syn-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 2px;
    background-color: var(--syn-input-background-color);
    color: var(--syn-color-neutral-0);
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--syn-input-border-color-hover);
    background-color: var(--syn-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--syn-color-primary-600);
    background-color: var(--syn-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--syn-color-primary-500);
    background-color: var(--syn-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--syn-input-required-content);
    color: var(--syn-input-required-content-color);
    margin-inline-start: var(--syn-input-required-content-offset);
  }
`,Xn=p`
  .checkbox__control {
    border-radius: var(--syn-input-border-radius-small);
  }

  :host([data-user-invalid]) .checkbox__control {
    border-color: var(--syn-input-border-color-focus-error);
  }

  /**
   * Hover
   * Applies the hover state to the whole component
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):hover .checkbox__control {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /**
   * Checked/indeterminate + hover
   * Applies the hover state to the whole component
   */
  .checkbox.checkbox--checked:not(.checkbox--disabled):hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):hover .checkbox__control {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
  }

  .checkbox__label {
    line-height: var(--syn-line-height-normal);
    margin-inline-start: var(--syn-spacing-x-small);
    position: relative;
  }

  .checkbox--small .checkbox__label {
    top: -3px;
  }

  .checkbox--medium .checkbox__label {
    top: -3px;
  }

  .checkbox--large .checkbox__label {
    top: -2px;
  }
`;var Qn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,ht=(e,t,i,s)=>{for(var o=s>1?void 0:s?Jn(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Qn(t,i,o),o};let tt=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Q(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return h`
      <div
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${f({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${g(this.value)}
            .indeterminate=${Ee(this.indeterminate)}
            .checked=${Ee(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?h`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?h`
                  <syn-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></syn-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};tt.styles=[x,Wt,Yn,qt,Xn];tt.dependencies={"syn-icon":ct};ht([u('input[type="checkbox"]')],tt.prototype,"input",2);ht([y()],tt.prototype,"hasFocus",2);ht([a({reflect:!0})],tt.prototype,"title",2);ht([a()],tt.prototype,"name",2);ht([a()],tt.prototype,"value",2);ht([a({reflect:!0})],tt.prototype,"size",2);ht([a({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);ht([a({type:Boolean,reflect:!0})],tt.prototype,"checked",2);ht([a({type:Boolean,reflect:!0})],tt.prototype,"indeterminate",2);ht([he("checked")],tt.prototype,"defaultChecked",2);ht([a({reflect:!0})],tt.prototype,"form",2);ht([a({type:Boolean,reflect:!0})],tt.prototype,"required",2);ht([a({attribute:"help-text"})],tt.prototype,"helpText",2);ht([m("disabled",{waitUntilFirstUpdate:!0})],tt.prototype,"handleDisabledChange",1);ht([m(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],tt.prototype,"handleStateChange",1);tt=ht([st("SynCheckbox")],tt);tt.define("syn-checkbox");const Zn=p`
	/* stylelint-disable */
  :host {
    --arrow-color: var(--syn-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var tr=Object.defineProperty,G=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&tr(t,i,o),o};function er(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}class L extends _{constructor(){super(...arguments),this.localize=new j(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let o=0,n=0,r=0,l=0,d=0,c=0,b=0,k=0;s?t.top<i.top?(o=t.left,n=t.bottom,r=t.right,l=t.bottom,d=i.left,c=i.top,b=i.right,k=i.top):(o=i.left,n=i.bottom,r=i.right,l=i.bottom,d=t.left,c=t.top,b=t.right,k=t.top):t.left<i.left?(o=t.right,n=t.top,r=i.left,l=i.top,d=t.right,c=t.bottom,b=i.left,k=i.bottom):(o=i.right,n=i.top,r=t.left,l=t.top,d=i.right,c=i.bottom,b=t.left,k=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${k}px`)}}}static{this.styles=[x,Zn]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||er(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=co(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ho({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ui({apply:({rects:s})=>{const o=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${s.reference.width}px`:"",this.popup.style.height=n?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(po({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(uo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ui({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(mo({element:this.arrowEl,padding:this.arrowPadding}));const i=this.strategy==="absolute"?s=>di.getOffsetParent(s,bo):di.getOffsetParent;fo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...di,getOffsetParent:i}}).then(({x:s,y:o,middlewareData:n,placement:r})=>{const l=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${o}px`}),this.arrow){const c=n.arrow.x,b=n.arrow.y;let k="",Y="",Yt="",Pt="";if(this.arrowPlacement==="start"){const Ut=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";k=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",Y=l?Ut:"",Pt=l?"":Ut}else if(this.arrowPlacement==="end"){const Ut=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";Y=l?"":Ut,Pt=l?Ut:"",Yt=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(Pt=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",k=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(Pt=typeof c=="number"?`${c}px`:"",k=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:k,right:Y,bottom:Yt,left:Pt,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return h`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${f({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${f({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?h`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}G([u(".popup")],L.prototype,"popup");G([u(".popup__arrow")],L.prototype,"arrowEl");G([a()],L.prototype,"anchor");G([a({type:Boolean,reflect:!0})],L.prototype,"active");G([a({reflect:!0})],L.prototype,"placement");G([a({reflect:!0})],L.prototype,"strategy");G([a({type:Number})],L.prototype,"distance");G([a({type:Number})],L.prototype,"skidding");G([a({type:Boolean})],L.prototype,"arrow");G([a({attribute:"arrow-placement"})],L.prototype,"arrowPlacement");G([a({attribute:"arrow-padding",type:Number})],L.prototype,"arrowPadding");G([a({type:Boolean})],L.prototype,"flip");G([a({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],L.prototype,"flipFallbackPlacements");G([a({attribute:"flip-fallback-strategy"})],L.prototype,"flipFallbackStrategy");G([a({type:Object})],L.prototype,"flipBoundary");G([a({attribute:"flip-padding",type:Number})],L.prototype,"flipPadding");G([a({type:Boolean})],L.prototype,"shift");G([a({type:Object})],L.prototype,"shiftBoundary");G([a({attribute:"shift-padding",type:Number})],L.prototype,"shiftPadding");G([a({attribute:"auto-size"})],L.prototype,"autoSize");G([a()],L.prototype,"sync");G([a({type:Object})],L.prototype,"autoSizeBoundary");G([a({attribute:"auto-size-padding",type:Number})],L.prototype,"autoSizePadding");G([a({attribute:"hover-bridge",type:Boolean})],L.prototype,"hoverBridge");const ir=p`
	/* stylelint-disable */
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    color: var(--syn-color-neutral-700);
    padding: var(--syn-spacing-x-small) var(--syn-spacing-medium) var(--syn-spacing-x-small) var(--syn-spacing-x-small);
    transition: var(--syn-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--syn-color-neutral-100);
    color: var(--syn-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--syn-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--syn-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,sr=p`
  /**
   * The syn-option is now able to adjust its height from a parent item
   * This is done by exposing multiple css variables to the outside:
   *
   * --option-min-height (defaults to 48px) The minimal height of an element
   * --option-padding (defaults to var(--syn-spacing-small) var(--syn-spacing-medium)) The padding to use
   * --option-font-size (defaults to var(--syn-font-size-medium)) The font size to use
   * --option-icon-size (defaults to var(--syn-spacing-large)) The size of the checkmark
   * 
   * See below for usage of these variables
   */
  .option {
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    
    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--option-min-height, var(--syn-input-height-medium));
    padding: var(--option-padding, var(--syn-spacing-small) var(--syn-spacing-medium));
  }

  .option:not(.option--current) {
    color: var(--syn-color-neutral-950);
  }

  .option__label {
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-color-primary-600);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option .option__check {
    padding-inline-end: var(--syn-spacing-small);
  }

  /* Invert the check mark when keyboard navigation is used */
  .option--current .option__check {
    color: var(--syn-color-neutral-0);
  }

  /* Use larger spacing between icons and content */
  .option__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Set correct icon size when someone uses syn-icon in the slots */
  .option__prefix::slotted(syn-icon),
  .option__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-800);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option--current .option__prefix::slotted(syn-icon),
  .option--current .option__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-0);
  }

  /* This is needed for the highlight styling of the options in syn-combobox */
  .option__label::slotted(.syn-highlight-style) {
    background-color: transparent;
    color: var(--syn-color-neutral-950);
    font: var(--syn-body-medium-bold);
  }

  :host([aria-selected='true']) .option__label::slotted(.syn-highlight-style) {
    color: var(--syn-color-neutral-0);
  }
`,or=(e,t)=>{const i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(i,"g");return e.replace(s,"_")};var nr=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,Nt=(e,t,i,s)=>{for(var o=s>1?void 0:s?rr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&nr(t,i,o),o};class Et extends _{constructor(){super(...arguments),this.localize=new j(this),this.isInitialized=!1,this.delimiter=" ",this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[x,ir,sr]}static{this.dependencies={"syn-icon":ct}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?(customElements.whenDefined("syn-combobox").then(()=>{const t=this.closest("syn-combobox");t&&t.handleDefaultSlotChange()}),customElements.whenDefined("syn-select").then(()=>{const t=this.closest("syn-select");t&&t.handleDefaultSlotChange()})):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){if(typeof this.value=="number")return;typeof this.value!="string"&&(this.value=String(this.value));const{delimiter:t}=this;this.value.includes(t)&&(console.error(`Option values cannot include "${t}". All occurrences of "${t}" have been replaced with "_".`,this),this.value=or(this.value,this.delimiter))}getTextLabel(){const t=this.childNodes;let i="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(i+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i.trim()}render(){return h`
      <div
        part="base"
        class=${f({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}Nt([u(".option__label")],Et.prototype,"defaultSlot",2);Nt([y()],Et.prototype,"delimiter",2);Nt([y()],Et.prototype,"current",2);Nt([y()],Et.prototype,"selected",2);Nt([y()],Et.prototype,"hasHover",2);Nt([a({reflect:!0})],Et.prototype,"value",2);Nt([a({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);Nt([m("disabled")],Et.prototype,"handleDisabledChange",1);Nt([m("selected")],Et.prototype,"handleSelectedChange",1);Nt([m("value")],Et.prototype,"handleValueChange",1);const ar=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  /** The popup */
  .combobox {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .combobox::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .combobox[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .combobox[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .combobox__inputs {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  .combobox__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--syn-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .combobox__display-input::placeholder {
    color: var(--syn-input-placeholder-color);
  }

  .combobox:not(.combobox--disabled):hover .combobox__display-input {
    color: var(--syn-input-color-hover);
  }

  .combobox__display-input:focus {
    outline: none;
  }

  .combobox__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  /* Standard combobox */
  .combobox--standard .combobox__inputs {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .combobox--standard.combobox--disabled .combobox__inputs {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    color: var(--syn-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .combobox--standard:not(.combobox--disabled).combobox--open .combobox__inputs,
  .combobox--standard:not(.combobox--disabled).combobox--focused .combobox__inputs {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

/* Sizes */
  .combobox--small .combobox__inputs {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    min-height: var(--syn-input-height-small);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-small);
  }

  .combobox--small .combobox__clear {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .combobox--small .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .combobox--medium .combobox__inputs {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    min-height: var(--syn-input-height-medium);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-medium);
  }

  .combobox--medium .combobox__clear {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .combobox--medium .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .combobox--large .combobox__inputs {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    min-height: var(--syn-input-height-large);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-large);
  }

  .combobox--large .combobox__clear {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .combobox--large .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

/* Prefix and Suffix */
  .combobox__prefix,
  .combobox__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--syn-input-placeholder-color);
  }

  .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Clear button */
  .combobox__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--syn-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--syn-transition-fast) color;
    cursor: pointer;
  }

  .combobox__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .combobox__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .combobox__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--syn-spacing-small);
  }

  .combobox--open .combobox__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .combobox__listbox {
    display: block;
    position: relative;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .combobox__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .combobox__listbox ::slotted(small) {
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-500);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }


  /**
   * Invalid user data
   */
  :host([data-user-invalid]) .combobox__inputs {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .combobox--standard:not(.combobox--disabled).combobox--open .combobox__inputs,
  :host([data-user-invalid]) .combobox--standard:not(.combobox--disabled).combobox--focused .combobox__inputs {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  /* Clear button */
  .combobox__clear {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-spacing-large);
  }

  .combobox--small .combobox__clear {
    font-size: var(--syn-spacing-medium);
  }

  .combobox--large .combobox__clear {
    font-size: var(--syn-spacing-x-large);
  }

  .combobox--medium .combobox__clear {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Expand icon */
  .combobox__expand-icon {
    color: var(--syn-color-neutral-950);
    margin-inline-start: var(--syn-spacing-small);
  }

  .combobox--small .combobox__expand-icon {
    font-size: var(--syn-spacing-medium);
  }

  .combobox--medium .combobox__expand-icon {
    font-size: var(--syn-spacing-large);
  }

  .combobox--large .combobox__expand-icon {
    font-size: var(--syn-spacing-x-large);
  }

  /* Change combobox border on hover */
  .combobox:not(.combobox--disabled):hover .combobox__inputs {
    border-color: var(--syn-input-color-hover);
  }

  /* Prefix and Suffix */

  /* Small */
  .combobox--small .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .combobox--small .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .combobox--small .combobox__suffix::slotted(syn-icon),
  .combobox--small .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
  }

  /* Medium */
  .combobox--medium .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .combobox--medium .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .combobox--medium .combobox__suffix::slotted(syn-icon),
  .combobox--medium .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
  }

  /* Large */
  .combobox--large .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .combobox--large .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .combobox--large .combobox__suffix::slotted(syn-icon),
  .combobox--large .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
  }


  .combobox__prefix,
  .combobox__suffix {
    color: var(--syn-input-help-text-color);
  }



  /* Listbox */
  .combobox__listbox {
    /* @todo: Should be --syn-border-radius-medium, which should be set to 0 */
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-medium);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .combobox__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }

  /**
   * #850: Allow to measure the size of the combobox.
   * This is needed so we can automatically size and truncate the tags in the <syn-combobox multiple> component.
   * Scoped to multiple to not break the single combobox per accident.
   */
  :host([multiple]) .combobox__tags {
    min-width: 100px;
    overflow: hidden;
  }

  :host([multiple]) .combobox__tags > div {
    display: contents;
  }

  :host([multiple]) .combobox__tags > div > syn-tag {
    --syn-tag-position-adjustment: var(--syn-spacing-3x-small);

    max-width: var(--syn-combobox-tag-max-width);
  }

  :host([multiple]) .combobox__tags > div > syn-tag::part(content) {
    display: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Vs=p`
  /**
   * Size adjustments for syn-select and other widgets that use syn-option
   * This allows to share the common settings between all components that
   * should be able to set the size of a syn-option tag.
   */
  :host([size="small"]) {
    --option-min-height: var(--syn-input-height-small);
    --option-padding: 0 var(--syn-input-spacing-small);
    --option-font-size: var(--syn-input-font-size-small);
    --option-icon-size: var(--syn-spacing-medium);
  }

  :host([size="medium"]) {
    --option-min-height: var(--syn-input-height-medium);
    --option-padding: 0 var(--syn-input-spacing-medium);
    --option-font-size: var(--syn-input-font-size-medium);
    --option-icon-size: var(--syn-spacing-large);
  }

  :host([size="large"]) {
    --option-min-height: var(--syn-input-height-large);
    --option-padding: 0 var(--syn-input-spacing-large);
    --option-font-size: var(--syn-input-font-size-large);
    --option-icon-size: var(--syn-spacing-x-large);
  }
`,lr=p`
  .combobox:not(.combobox--disabled) .combobox__display-input {
    cursor: text;
  }

  .listbox__options ::slotted(syn-option[hidden]), 
  .listbox__options ::slotted(syn-optgroup[hidden]) {
    display: none;
  }

  ${Vs}
`,Yi=e=>Array.from(e.assignedElements({flatten:!0})),dr=e=>e.tagName.toLocaleLowerCase()==="syn-option"?e:Array.from(e.querySelectorAll(":scope > syn-option")),cr=e=>e.tagName.toLocaleLowerCase()==="syn-optgroup",Xi=e=>e.map(dr),hr=e=>e.filter(cr),Qi=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Ji=e=>{const t=document.createElement("div");return ro(e,t),t.firstElementChild},hi=e=>e.tagName.toLocaleLowerCase()==="syn-option"?e:void 0,pr=e=>{if(e){if(e instanceof HTMLElement)return hi(e);if(typeof e=="string"){const t=h`${ms(e)}`,i=Ji(t);return hi(i)}if(Object.prototype.hasOwnProperty.call(e,"_$litType$")){const t=Ji(e);return hi(t)}}};function ur(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}const bi=new Set;function mr(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function br(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Te(e){if(bi.add(e),!document.documentElement.classList.contains("syn-scroll-lock")){const t=mr()+br();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--syn-scroll-lock-gutter",i),document.documentElement.classList.add("syn-scroll-lock"),document.documentElement.style.setProperty("--syn-scroll-lock-size",`${t}px`)}}function be(e){bi.delete(e),bi.size===0&&(document.documentElement.classList.remove("syn-scroll-lock"),document.documentElement.style.removeProperty("--syn-scroll-lock-size"))}function ti(e,t,i="vertical",s="smooth"){const o=ur(e,t),n=o.top+t.scrollTop,r=o.left+t.scrollLeft,l=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,c=t.scrollTop,b=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(r<l?t.scrollTo({left:r,behavior:s}):r+e.clientWidth>d&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(n<c?t.scrollTo({top:n,behavior:s}):n+e.clientHeight>b&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:s}))}const fr=e=>e,cd=(e,t)=>{if(!t)return e;const i=e.cloneNode(!0),s=i.getTextLabel(),o=s.toLowerCase().indexOf(t.toLowerCase()),n=i.innerHTML.indexOf(s),r=document.createElement("mark");r.textContent=s.slice(o,o+t.length),r.classList.add("syn-highlight-style");const l=s.replace(new RegExp(t,"i"),r.outerHTML),d=i.innerHTML.slice(0,n),c=i.innerHTML.slice(n+s.length);return i.innerHTML=d.concat(l,c),i};var yr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,I=(e,t,i,s)=>{for(var o=s>1?void 0:s?gr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&yr(t,i,o),o};let T=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Q(this,"help-text","label"),this.localize=new j(this),this.lastOptionValue="",this.isOptionRendererTriggered=!1,this.isInitialized=!1,this.hasFocus=!1,this.displayLabel="",this.numberFilteredOptions=0,this.cachedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getOption=fr,this.filter=(e,t)=>{let i=e?.textContent||"";e instanceof Et&&(i=e.getTextLabel());const s=Qi(i),o=Qi(t);return s.includes(o)?!0:e?.value===t},this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{if(e.target.closest(".combobox__clear")===null){if(e.key==="Escape"&&(this.open&&!this.closeWatcher?(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||this.clearCombobox()),e.key==="Enter"){const s=this.getCurrentOption(),o=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;if(!this.open&&!o){setTimeout(()=>{e.defaultPrevented||this.formControlController.submit()});return}if(!this.open||s&&s.disabled)return;if(s){const n=this.lastOptionValue;this.setSelectedOption(s),this.value!==n&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})}this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),this.open||this.show(),this.selectNextOption(e.key==="ArrowDown")),["Home","End"].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),e.key==="Home"?this.displayInput.setSelectionRange(0,0):e.key==="End"&&this.displayInput.setSelectionRange(this.displayInput.value.length,this.displayInput.value.length))}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}willUpdate(e){super.willUpdate(e),!this.isInitialized&&!this.defaultValue&&this.value&&(this.defaultValue=this.value)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){if(this.disabled)return;const t=()=>this.open?this.hide():this.show();e.preventDefault(),t().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(e){e.key!=="Tab"&&this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.clearCombobox()}clearCombobox(){this.value!==""&&(this.value="",this.displayInput.value="",this.lastOptionValue="",this.setSelectedOption(void 0),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("syn-option"),s=this.lastOptionValue;i&&!i.disabled&&(this.setSelectedOption(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.hide(),this.displayInput.focus({preventScroll:!0}))}selectNextOption(e){const t=this.getAllFilteredOptions();if(t.length===0)return;const i=this.getCurrentOption(),s=t.indexOf(i);let o=Math.max(0,s);if(e){const n=s+1;o=n>t.length-1?0:n}else{const n=s-1;o=n<0?t.length-1:n}this.setCurrentOption(t[o]),ti(this.getCurrentOption(),this.listbox,"vertical","auto")}getAllFilteredOptions(){return this.getSlottedOptions().filter(e=>!e.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(e=>e.current)}setCurrentOption(e){const t=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),t.forEach(i=>{i.current=!1,i.setAttribute("aria-selected","false")}),e&&(e.current=!0,e.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",e.id))}setSelectedOption(e){this.selectedOption=e;let t;this.selectedOption?.value?t=String(this.selectedOption.value):t=this.selectedOption?.getTextLabel(),e&&(this.lastOptionValue=t||""),this.value=t??this.displayInput.value,this.updateComplete.then(()=>{this.displayLabel=this.selectedOption?.getTextLabel()??this.displayInput.value,this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.value)}handleDisabledChange(){this.formControlController.setValidity(this.disabled),this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){this.updateSelectedOptionFromValue(),this.setCurrentOption(null)}async handleOpenChange(){if(this.open&&!this.disabled){if(this.numberFilteredOptions===0){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await J(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=M(this,"combobox.show",{dir:this.localize.dir()});await W(this.popup.popup,i,s),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await J(this);const{keyframes:e,options:t}=M(this,"combobox.hide",{dir:this.localize.dir()});await W(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Promise.race([Z(this,"syn-after-show"),Z(this,"syn-error")])}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Z(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(e){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(i=>{const s=this.cachedOptions.find(l=>l.id===i.id)||i,o=this.getOption(s,e);let n=pr(o);n||(n=s);const r=!(this.filter(n,e)||e==="");n.hidden=r,i.replaceWith(n),r||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(i=>{const o=Xi(Array.from(i.children)).flat().some(n=>!n.hidden);return i.hidden=!o,o})[0]?.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1},0)}async handleInput(){const e=this.displayInput.value;this.value=e,await this.updateComplete,this.open=this.numberFilteredOptions>0,this.setSelectedOption(void 0),this.formControlController.updateValidity(),this.emit("syn-input")}handleChange(){this.selectedOption||(this.value=this.displayInput.value,this.updateComplete.then(()=>{this.formControlController.updateValidity()}),this.emit("syn-change"))}getSlottedOptions(){return Xi(Yi(this.defaultSlot)).flat()}getSlottedOptGroups(){return hr(Yi(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const e=this.getSlottedOptions(),t=this.getSlottedOptGroups();e.forEach((i,s)=>{i.id=i.id||`syn-combobox-option-${s}`}),t.forEach((i,s)=>{i.id=i.id||`syn-combobox-optgroup-${s}`}),this.cachedOptions=[...e]}updateSelectedOptionFromValue(){const e=this.cachedOptions.find(t=>t.value!==""&&t.value===this.value||t.getTextLabel()===this.value);e||(this.displayInput.value=this.value),this.setSelectedOption(e),this.createComboboxOptionsFromQuery(this.value)}handleDefaultSlotChange(){const t=this.getSlottedOptions().length,i=this.cachedOptions.length;if(!this.isOptionRendererTriggered||i!==t){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());return}this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue(),this.hasFocus&&this.value.length>0&&!this.open&&this.show()}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return h`
      <div
        part="form-control"
        class=${f({"form-control":!0,"form-control--has-help-text":s,"form-control--has-label":i,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${f({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--open":this.open,"combobox--placeholder-visible":n,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--top":this.placement==="top"})}
            placement=${`${this.placement}-start`}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="popup"
          >
            <div
              part="combobox"
              class="combobox__inputs"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="combobox__prefix"></slot>

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}

                aria-autocomplete="list"
                aria-owns="listbox"
                @input=${this.handleInput}
                @change=${this.handleChange}
              />

              <input
                class="combobox__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${o?h`
                    <button
                      part="clear-button"
                      class="combobox__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.preventLoosingFocus}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:""}

                <slot name="suffix" part="suffix" class="combobox__suffix"></slot>

                <slot name="expand-icon" part="expand-icon" class="combobox__expand-icon">
                  <syn-icon library="system" name="chevron-down"></syn-icon>
                </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">
                <slot @slotchange=${this.handleDefaultSlotChange}></slot>      
              </div>
            </div>
          </syn-popup>
        </div>
        
        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=[x,Wt,ar,qt,lr];T.dependencies={"syn-icon":ct,"syn-popup":L};I([u(".combobox")],T.prototype,"popup",2);I([u(".combobox__inputs")],T.prototype,"combobox",2);I([u(".combobox__display-input")],T.prototype,"displayInput",2);I([u(".combobox__value-input")],T.prototype,"valueInput",2);I([u(".combobox__listbox")],T.prototype,"listbox",2);I([u("slot:not([name])")],T.prototype,"defaultSlot",2);I([y()],T.prototype,"hasFocus",2);I([y()],T.prototype,"displayLabel",2);I([y()],T.prototype,"selectedOption",2);I([y()],T.prototype,"numberFilteredOptions",2);I([y()],T.prototype,"cachedOptions",2);I([a()],T.prototype,"name",2);I([a()],T.prototype,"value",2);I([he()],T.prototype,"defaultValue",2);I([a({reflect:!0})],T.prototype,"size",2);I([a()],T.prototype,"placeholder",2);I([a({reflect:!0,type:Boolean})],T.prototype,"disabled",2);I([a({type:Boolean})],T.prototype,"clearable",2);I([a({reflect:!0,type:Boolean})],T.prototype,"open",2);I([a({type:Boolean})],T.prototype,"hoist",2);I([a()],T.prototype,"label",2);I([a({reflect:!0})],T.prototype,"placement",2);I([a({attribute:"help-text"})],T.prototype,"helpText",2);I([a({reflect:!0})],T.prototype,"form",2);I([a({reflect:!0,type:Boolean})],T.prototype,"required",2);I([a()],T.prototype,"getOption",2);I([a()],T.prototype,"filter",2);I([m(["filter","getOption"],{waitUntilFirstUpdate:!0})],T.prototype,"handlePropertiesChange",1);I([m("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);I([m("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);I([m("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1);T=I([st("SynCombobox")],T);O("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});O("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});T.define("syn-combobox");const vr=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--syn-color-neutral-200);
    border-radius: var(--syn-border-radius-medium);
    background-color: var(--syn-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--syn-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: calc(1px + var(--syn-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--syn-spacing-medium);
  }
`,_r=p`
  .details {
    background-color: unset;
    border-color: var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    border-width: 0 0 var(--syn-border-width-small);
  }

  .details--disabled {
    opacity: var(--syn-opacity-50);
  }

  .details__summary-icon {
    align-self: flex-start;
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-spacing-large);

    /**
     * As we are using an alignment of "start"  instead of "center" make sure
     * the arrow starts on the same visual line as the first line of headline text
     */
    position: relative;
    top: 2px;
  }

  .details .details__summary {
    color: var(--syn-typography-color-text);
  }

  .details__header {
    gap: var(--syn-spacing-medium);
  }

  /**
   * As we are using top/down arrows for the details element,
   * we have to adjust the rotation of the icon when the details is open.
   */
  .details--open .details__summary-icon {
    rotate: -180deg;
  }

  /**
   * Adjustments for medium variant
   */
  .details--size-medium .details__header {
    padding: var(--syn-spacing-medium-large) 0;
  }

  .details--size-medium .details__content {
    font-size: var(--syn-font-size-small);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-medium) 0 var(--syn-spacing-large);
  }

  .details--size-medium .details__summary {
    font: var(--syn-body-medium-regular);
  }

  .details--size-medium .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--syn-spacing-large);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Adjustment for large variant
   */
  .details--size-large .details__header {
    padding: var(--syn-spacing-large) 0;
  }

  .details--size-large .details__content {
    font-size: var(--syn-font-size-medium);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-medium-large) 0 var(--syn-spacing-large);
  }

  .details--size-large .details__summary {
    font: var(--syn-body-large-regular);
  }

  .details--size-large .details__summary-icon {
    font-size: var(--syn-spacing-x-large);
  }

  .details--size-large .details__summary::slotted(syn-icon) {
    /* Avoid shrinking of the icon, if the text content of the summary is very long and multi line */
    flex-shrink: 0;
    font-size: var(--syn-spacing-x-large);
    margin-right: var(--syn-spacing-small);
  }

  /**
   * Mark the details as open by adjusting its label
   */
  .details--open .details__summary {
    font-weight: var(--syn-font-weight-bold);
  }

  /**
   * Add a visually visible hover effect to the summary element
   */
  .details:not(.details--disabled) .details__header:hover .details__summary,
  .details:not(.details--disabled) .details__header:hover .details__summary-icon {
    color: var(--syn-color-primary-700);
  }

  /**
   *  Contained style
   */
  .details--contained {
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    border-width: var(--syn-panel-border-width);
  }

  .details--contained .details__header:focus-visible {
    border-radius: var(--syn-border-radius-medium);
  }

  .details--size-medium.details--contained .details__header {
    padding: var(--syn-spacing-medium-large) var(--syn-spacing-large);
  }

  .details--size-medium.details--contained .details__content {
    padding: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  .details--size-large.details--contained .details__header {
    padding: var(--syn-spacing-large);
  }

  .details--size-large.details--contained .details__content {
    padding: var(--syn-spacing-medium-large) var(--syn-spacing-large) var(--syn-spacing-large);
  }
`;var wr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,At=(e,t,i,s)=>{for(var o=s>1?void 0:s?xr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&wr(t,i,o),o};let bt=class extends _{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size="medium"}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("syn-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await J(this.body);const{keyframes:t,options:i}=M(this,"details.show",{dir:this.localize.dir()});await W(this.body,Ki(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("syn-after-show")}else{if(this.emit("syn-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await J(this.body);const{keyframes:t,options:i}=M(this,"details.hide",{dir:this.localize.dir()});await W(this.body,Ki(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("syn-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Z(this,"syn-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Z(this,"syn-after-hide")}render(){return h`
      <details
        part="base"
        class=${f({details:!0,"details--size-medium":this.size==="medium","details--size-large":this.size==="large","details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <syn-icon library="system" name="chevron-down"></syn-icon>
            </slot>
            <slot name="collapse-icon">
              <syn-icon library="system" name="chevron-down"></syn-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" part="body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};bt.styles=[x,vr,_r];bt.dependencies={"syn-icon":ct};At([u(".details")],bt.prototype,"details",2);At([u(".details__header")],bt.prototype,"header",2);At([u(".details__body")],bt.prototype,"body",2);At([u(".details__expand-icon-slot")],bt.prototype,"expandIconSlot",2);At([a({type:Boolean,reflect:!0})],bt.prototype,"open",2);At([a()],bt.prototype,"summary",2);At([a({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);At([a({type:Boolean,reflect:!0})],bt.prototype,"contained",2);At([a({reflect:!0})],bt.prototype,"size",2);At([m("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);bt=At([st("SynDetails")],bt);O("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});O("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});bt.define("syn-details");function*Ti(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Ti(e.shadowRoot.activeElement)))}function Ms(){return[...Ti()].pop()}const Zi=new WeakMap;function Ns(e){let t=Zi.get(e);return t||(t=window.getComputedStyle(e,null),Zi.set(e,t)),t}function kr(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Ns(e);return t.visibility!=="hidden"&&t.display!=="none"}function Cr(e){const t=Ns(e),{overflowY:i,overflowX:s}=t;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function zr(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const n=e.getRootNode(),r=`input[type='radio'][name="${e.getAttribute("name")}"]`,l=n.querySelector(`${r}:checked`);return l?l===e:n.querySelector(r)===e}return kr(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Cr(e):!1}function $r(e){const t=fi(e),i=t[0]??null,s=t[t.length-1]??null;return{start:i,end:s}}function Sr(e,t){return e.getRootNode({composed:!0})?.host!==t}function fi(e){const t=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!i.includes(o)&&zr(o)&&i.push(o),o instanceof HTMLSlotElement&&Sr(o,e)&&o.assignedElements({flatten:!0}).forEach(n=>{s(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const n of o.children)s(n)}return s(e),i.sort((o,n)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}let ze=[];class Bs{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Ms();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=fi(this.element);let n=o.findIndex(l=>l===s);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const l=o[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;i.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const d=[...Ti()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){ze.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ze=ze.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ze[ze.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=fi(this.element);if(!this.element.matches(":focus-within")){const i=t[0],s=t[t.length-1],o=this.tabDirection==="forward"?i:s;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}const Or=p`
	/* stylelint-disable */
  :host {
    --width: 31rem;
    --header-spacing: var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--syn-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--syn-spacing-2x-large));
    max-height: calc(100% - var(--syn-spacing-2x-large));
    background-color: var(--syn-panel-background-color);
    border-radius: var(--syn-border-radius-medium);
    box-shadow: var(--syn-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--syn-font-size-large);
    line-height: var(--syn-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--syn-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(syn-button:not(:first-of-type)) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--syn-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`,Tr=p`
  :host {
    /**
     * Used as the default padding for the dialog title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);
  }

  .dialog__panel {
    border: var(--syn-spacing-4x-small) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-large);
  }

  .dialog__header-actions {
    align-items: flex-start;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  /**
   * We need this to make sure we are big enough as defined in the layout
   * When omitting this statement, we will get rounding problems via line-height
   */
  .dialog__title,
  .dialog__header-actions {
    min-height: 88px;
  }

  .dialog__header-actions syn-icon-button,
  .dialog__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }

  .dialog__title {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
  }
`;var Er=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,pe=(e,t,i,s)=>{for(var o=s>1?void 0:s?Ar(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Er(t,i,o),o};class Jt extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"footer"),this.localize=new j(this),this.modal=new Bs(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[x,Or,Tr]}static{this.dependencies={"syn-icon-button":ye}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Te(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),be(this),this.removeOpenListeners()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=M(this,"dialog.denyClose",{dir:this.localize.dir()});W(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Te(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([J(this.dialog),J(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const i=M(this,"dialog.show",{dir:this.localize.dir()}),s=M(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([W(this.panel,i.keyframes,i.options),W(this.overlay,s.keyframes,s.options)]),this.emit("syn-after-show")}else{zi(this),this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([J(this.dialog),J(this.overlay)]);const t=M(this,"dialog.hide",{dir:this.localize.dir()}),i=M(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([W(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),W(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,be(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return h`
      <div
        part="base"
        class=${f({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":h`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></syn-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}}pe([u(".dialog")],Jt.prototype,"dialog",2);pe([u(".dialog__panel")],Jt.prototype,"panel",2);pe([u(".dialog__overlay")],Jt.prototype,"overlay",2);pe([a({type:Boolean,reflect:!0})],Jt.prototype,"open",2);pe([a({reflect:!0})],Jt.prototype,"label",2);pe([a({attribute:"no-header",type:Boolean,reflect:!0})],Jt.prototype,"noHeader",2);pe([m("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);O("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});O("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});O("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});O("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});O("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Jt.define("syn-dialog");const Dr=p`
	/* stylelint-disable */
  :host {
    --color: var(--syn-panel-border-color);
    --width: var(--syn-panel-border-width);
    --spacing: var(--syn-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Ir=p`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var Pr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Rs=(e,t,i,s)=>{for(var o=s>1?void 0:s?Fr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Pr(t,i,o),o};class Zt extends _{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[x,Dr,Ir]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}Rs([a({type:Boolean,reflect:!0})],Zt.prototype,"vertical",2);Rs([m("vertical")],Zt.prototype,"handleVerticalChange",1);Zt.define("syn-divider");function ts(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Lr=p`
	/* stylelint-disable */
  :host {
    --size: 25rem;
    --header-spacing: var(--syn-spacing-large);
    --body-spacing: var(--syn-spacing-large);
    --footer-spacing: var(--syn-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--syn-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--syn-panel-background-color);
    box-shadow: var(--syn-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--syn-font-size-large);
    line-height: var(--syn-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--syn-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(syn-button:not(:last-of-type)) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--syn-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--syn-color-neutral-0);
    }
  }
`,Vr=p`
  :host {
    /**
     * Used as the default padding for the drawer title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) var(--syn-spacing-large) var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large) var(--syn-spacing-medium);
  }

  /**
   * Synergy uses a border to distinguish the drawer from its background and
   * removes the default shoelace shadow completely
   */
  .drawer__panel {
    border: 0 solid var(--syn-panel-border-color);
    box-shadow: none;
    color: var(--syn-color-neutral-950);
  }

  /*
   * The border of the panel is always placed in direction to the content,
   * depending on the position of the drawer itself
   */
  .drawer--end .drawer__panel {
    border-left-width: var(--syn-border-width-small);
  }

  .drawer--start .drawer__panel {
    border-right-width: var(--syn-border-width-small);
  }

  .drawer--top .drawer__panel {
    border-bottom-width: var(--syn-border-width-small);
  }

  .drawer--bottom .drawer__panel {
    border-top-width: var(--syn-border-width-small);
  }

  .drawer__header-actions {
    align-items: flex-start;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-large) var(--syn-spacing-small) var(--syn-spacing-large) 0;
  }

  .drawer__title {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-x-large);
    font-weight: var(--syn-font-weight-bold);
    line-height: var(--syn-line-height-normal);
  }

  /**
   * We need this to make sure we are big enough as defined in the layout
   * When omitting this statement, we will get rounding problems via line-height
   */
  .drawer__title,
  .drawer__header-actions {
    min-height: 88px;
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }
`;var Mr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Dt=(e,t,i,s)=>{for(var o=s>1?void 0:s?Nr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Mr(t,i,o),o};class St extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"footer"),this.localize=new j(this),this.modal=new Bs(this),this.isVisible=!1,this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=[x,Lr,Vr]}static{this.dependencies={"syn-icon-button":ye}}firstUpdated(){this.drawer.hidden=this.isVisible?!1:!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Te(this)))}disconnectedCallback(){super.disconnectedCallback(),be(this),this.removeOpenListeners()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=M(this,"drawer.denyClose",{dir:this.localize.dir()});W(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Te(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([J(this.drawer),J(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const i=M(this,`drawer.show${ts(this.placement)}`,{dir:this.localize.dir()}),s=M(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([W(this.panel,i.keyframes,i.options),W(this.overlay,s.keyframes,s.options)]),this.emit("syn-after-show")}else{zi(this),this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),be(this)),await Promise.all([J(this.drawer),J(this.overlay)]);const t=M(this,`drawer.hide${ts(this.placement)}`,{dir:this.localize.dir()}),i=M(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([W(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),W(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Te(this)),this.open&&this.contained&&(this.modal.deactivate(),be(this))}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}forceVisibility(t){this.isVisible=t,this.drawer.hidden=t?!1:!this.open}render(){return h`
      <div
        part="base"
        class=${f({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.isVisible||this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":h`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <syn-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></syn-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}}Dt([y()],St.prototype,"isVisible",2);Dt([u(".drawer")],St.prototype,"drawer",2);Dt([u(".drawer__panel")],St.prototype,"panel",2);Dt([u(".drawer__overlay")],St.prototype,"overlay",2);Dt([a({type:Boolean,reflect:!0})],St.prototype,"open",2);Dt([a({reflect:!0})],St.prototype,"label",2);Dt([a({reflect:!0})],St.prototype,"placement",2);Dt([a({type:Boolean,reflect:!0})],St.prototype,"contained",2);Dt([a({attribute:"no-header",type:Boolean,reflect:!0})],St.prototype,"noHeader",2);Dt([m("open",{waitUntilFirstUpdate:!0})],St.prototype,"handleOpenChange",1);Dt([m("contained",{waitUntilFirstUpdate:!0})],St.prototype,"handleNoModalChange",1);O("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});O("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});O("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});O("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});O("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});O("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});O("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});O("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});O("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});O("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});O("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});St.define("syn-drawer");const Br=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    border-radius: var(--syn-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(syn-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Rr=p`
  /* Write custom CSS here */
`;var Ur=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Ot=(e,t,i,s)=>{for(var o=s>1?void 0:s?jr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Ur(t,i,o),o};class yt extends _{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="syn-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(s,o)=>{if(!s)return null;const n=s.closest(o);if(n)return n;const r=s.getRootNode();return r instanceof ShadowRoot?i(r.host,o):null};setTimeout(()=>{const s=this.containingElement?.getRootNode()instanceof ShadowRoot?Ms():document.activeElement;(!this.containingElement||i(s,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const i=t.composedPath();this.containingElement&&!i.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const i=t.target;!this.stayOpenOnSelect&&i.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[x,Br,Rr]}static{this.dependencies={"syn-popup":L}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const i=this.getMenu();if(i){const s=i.getAllItems(),o=s[0],n=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(i.setCurrentItem(o),o.focus()),(t.key==="ArrowUp"||t.key==="End")&&(i.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const i=this.trigger.assignedElements({flatten:!0}).find(o=>$r(o).start);let s;if(i){switch(i.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":s=i.button;break;default:s=i}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("syn-select",this.handlePanelSelect),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await J(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=M(this,"dropdown.show",{dir:this.localize.dir()});await W(this.popup.popup,t,i),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await J(this);const{keyframes:t,options:i}=M(this,"dropdown.hide",{dir:this.localize.dir()});await W(this.popup.popup,t,i),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return h`
      <syn-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${g(this.sync?this.sync:void 0)}
        class=${f({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </syn-popup>
    `}}Ot([u(".dropdown")],yt.prototype,"popup",2);Ot([u(".dropdown__trigger")],yt.prototype,"trigger",2);Ot([u(".dropdown__panel")],yt.prototype,"panel",2);Ot([a({type:Boolean,reflect:!0})],yt.prototype,"open",2);Ot([a({reflect:!0})],yt.prototype,"placement",2);Ot([a({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);Ot([a({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],yt.prototype,"stayOpenOnSelect",2);Ot([a({attribute:!1})],yt.prototype,"containingElement",2);Ot([a({type:Number})],yt.prototype,"distance",2);Ot([a({type:Number})],yt.prototype,"skidding",2);Ot([a({type:Boolean})],yt.prototype,"hoist",2);Ot([a({reflect:!0})],yt.prototype,"sync",2);Ot([m("open",{waitUntilFirstUpdate:!0})],yt.prototype,"handleOpenChange",1);O("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});O("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});yt.define("syn-dropdown");const Hr=p`
  :host {
    display: block;
  }

  .input__control {
    /**
     * Visually hide the input type=file without display:none
     * This is necessary for accessibility reasons and so the native html input validation popup 
     * is shown.
     */
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .form-control--droparea .input__control {
    /* move the input into the center, so the native validation popup is centered to the droparea */
    left: 50%;
  }

  .form-control-input {
    /* needed, so the native validation popup is centered correctly */
    position: relative;
  }

  /* Regular Input with button only */
  .button__wrapper {
    align-items: center;
    display: flex;
    gap: var(--syn-input-spacing-medium);
  }

  .form-control--small .button__wrapper {
    gap: var(--syn-input-spacing-small);
  }

  :host([size="large"]) .button__wrapper {
    gap: var(--syn-input-spacing-large);
  }

  /**
   * The value of the chosen file(s) or the placeholder text
   */
  .input__value {
    color: var(--syn-input-color);
    font-size: var(--syn-input-label-font-size-medium);
  }

  .input__value.input__value--hidden {
    display: none;
  }

  .input__value--placeholder {
    color: var(--syn-input-help-text-color);
  }

  .form-control--small .input__value {
    font-size: var(--syn-input-label-font-size-small);
  }

  .form-control--large .input__value {
    font-size: var(--syn-input-label-font-size-large);
  }

  /**
   * Special case for regular inputs:
   * When the user uses drag and drop, highlight the button with the primary color
   */
  .form-control--user-dragging:not([disabled]) .button::part(base) {
    background: none;
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-primary-900);
  }

  /* Drop Area */
  .droparea {
    --highlight-color: var(--syn-color-primary-600);

    border: var(--syn-border-width-small) dashed var(--syn-input-border-color);
    font: var(--syn-body-medium-regular);
    padding: var(--syn-spacing-x-large) var(--syn-spacing-large);
    transition: var(--syn-transition-medium) background;
  }

  .droparea:focus-visible {
    border: var(--syn-border-width-small) dashed var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Adjust the highlight to match an inactive item */
  :host([disabled]) .droparea {
    --highlight-color: var(--syn-color-neutral-600);
  }

  :host([disabled]) .input__value {
    display: none;
  }

  .droparea__background {
    align-items: center;
    display: flex;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-x-small) var(--syn-spacing-medium);
  }

  .droparea__icon {
    align-items: center;
    color: var(--highlight-color);
    display: flex;
    font-size: var(--syn-spacing-3x-large);
  }

  .droparea__text {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-3x-small);
    margin: 0;
  }

  .droparea__text strong {
    color: var(--highlight-color);
    font-weight: var(--syn-font-weight-bold);
  }

  /* Sizes */
  /* stylelint-disable-next-line no-descending-specificity */
  .form-control--small .droparea {
    font: var(--syn-body-small-regular);
  }

  .form-control--small .droparea__icon {
    font-size: var(--syn-spacing-2x-large)
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .form-control--large .droparea {
    font: var(--syn-body-large-regular);
  }

  .form-control--large .droparea__icon {
    font-size: var(--syn-spacing-4x-large)
  }

  /* Disabled Styles */
  :host([disabled]) .droparea,
  :host([disabled]) .input__value {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host(:not([disabled])) .form-control--user-dragging .droparea {
    background: var(--syn-color-primary-50);
    border: var(--syn-border-width-small) solid var(--syn-color-primary-600);
    cursor: pointer;
  }

  :host(:not([disabled])) .droparea:not(:focus-visible):hover {
    --highlight-color: var(--syn-color-primary-900);

    border: var(--syn-border-width-small) dashed var(--syn-color-primary-900);
    cursor: pointer;
  }

  /* Validation */
  /* stylelint-disable-next-line no-descending-specificity */
  :host([data-user-invalid]:not([disabled])) .droparea {
    border: var(--syn-border-width-small) dashed var(--syn-input-border-color-focus-error);
  }
`;var Wr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,q=(e,t,i,s)=>{for(var o=s>1?void 0:s?qr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Wr(t,i,o),o};let N=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-change"],value:e=>e.files}),this.hasSlotController=new Q(this,"help-text","label"),this.localize=new j(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(e){this.input&&(this.input.files=e)}get files(){return this.input?.files}set value(e){this.input&&(this.input.value=e)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){if(this.droparea){this.dropareaWrapper?.focus(e);return}this.button?.focus(e)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value="";return}this.files=e}async handleTransferItems(e){if(!e)return this.value="",new Promise((r,l)=>{l(new Error("No proper items found"))});const i=Array.from(e).map(r=>r.webkitGetAsEntry()).map(r=>this.getFilesFromEntry(r)),o=(await Promise.all(i)).flat(),n=new DataTransfer;return Array.from(o).forEach(r=>n.items.add(r)),n.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((t,i)=>{e.file(s=>t([s]),i)}):e.isDirectory?new Promise((t,i)=>{e.createReader().readEntries(o=>{Promise.all(o.map(n=>this.getFilesFromEntry(n))).then(n=>{t(n.flat())}).catch(i)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!0}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!1}async handleDrop(e){if(e.preventDefault(),e.stopPropagation(),!e.dataTransfer)return;const t=await this.handleTransferItems(e.dataTransfer?.items);if(this.userIsDragging=!1,!t)return;if(!this.multiple&&!this.webkitdirectory&&t.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(t);else{const s=M(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),o=M(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const n=M(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});W(this.dropareaIcon,n.keyframes,n.options)}await W(this.inputChosen,s.keyframes,s.options),this.handleFiles(t),await W(this.inputChosen,o.keyframes,o.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){let e=!1,t=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&this.files?.length>0&&(e=!0,t=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),h`
      <span
        class=${f({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${t}
      </span>
    `}renderDroparea(){return h`
      <div
        class="droparea"
        @click=${this.handleClick}
        @keypress=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        tabindex=${this.disabled?-1:0}
        part="droparea"
      >
        <div
          class="droparea__background"
          part="droparea-background"
        >
          <span part="droparea-icon" class="droparea__icon">
            <slot name="droparea-icon">
              <syn-icon name="upload-file" library="system" ></syn-icon>
            </slot>
          </span>
          <p
            class="droparea__text"
            part="droparea-value"
          >
            <strong>${this.localize.term(this.webkitdirectory?"folderDragDrop":"fileDragDrop")}</strong>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `}renderButton(){let e=this.localize.term("fileButtonText");return this.multiple&&(e=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(e=this.localize.term("folderButtonText")),h`
      <div
        class="button__wrapper"
        part="button-wrapper"
      >
        <syn-button
          class="button"
          @click=${this.handleClick}
          ?disabled=${this.disabled}
          exportparts="base:button__base"
          part="button"
          size=${this.size}
          variant="outline"
        >
          ${e}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){const e=this.label||!!this.hasSlotController.test("label"),t=this.helpText?!0:!!this.hasSlotController.test("help-text"),i=!!this.hasSlotController.test("trigger");return h`
      <div
        class=${f({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":t,"form-control--has-label":e,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${i?h`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:h`
              <label
                aria-hidden=${e?"false":"true"}
                class="form-control__label"
                for="input"
                part="form-control-label"
              >
                <slot name="label">${this.label}</slot>
              </label>

              <div
                class="form-control-input"
                part="form-control-input"
              >

                ${this.droparea?this.renderDroparea():this.renderButton()}
              </div>

              <div
                aria-hidden=${t?"false":"true"}
                class="form-control__help-text"
                id="help-text"
                part="form-control-help-text"
              >
                <slot name="help-text">${this.helpText}</slot>
              </div>
            `}
        <input
          accept=${this.accept}
          aria-describedby="help-text"
          @change=${this.handleChange}
          class="input__control"
          ?disabled=${this.disabled}
          id="input"
          @invalid=${this.handleInvalid}
          ?multiple=${this.multiple}
          name=${g(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}};N.styles=[x,Wt,qt,Hr];N.dependencies={"syn-button":P,"syn-icon":ct};q([y()],N.prototype,"userIsDragging",2);q([a({type:Object})],N.prototype,"files",1);q([a({type:String})],N.prototype,"name",2);q([a({type:String})],N.prototype,"value",1);q([he()],N.prototype,"defaultValue",2);q([a({reflect:!0})],N.prototype,"size",2);q([a()],N.prototype,"label",2);q([a({attribute:"help-text"})],N.prototype,"helpText",2);q([a({reflect:!0,type:Boolean})],N.prototype,"disabled",2);q([a({type:Boolean})],N.prototype,"droparea",2);q([a({type:String})],N.prototype,"accept",2);q([a({type:String})],N.prototype,"capture",2);q([a({reflect:!0,type:Boolean})],N.prototype,"multiple",2);q([a({reflect:!0,type:Boolean})],N.prototype,"webkitdirectory",2);q([a({reflect:!0})],N.prototype,"form",2);q([a({reflect:!0,type:Boolean})],N.prototype,"required",2);q([a({attribute:"hide-value",type:Boolean})],N.prototype,"hideValue",2);q([u(".input__control")],N.prototype,"input",2);q([u(".button")],N.prototype,"button",2);q([u(".droparea")],N.prototype,"dropareaWrapper",2);q([u(".droparea__icon")],N.prototype,"dropareaIcon",2);q([u(".input__value")],N.prototype,"inputChosen",2);q([m("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);q([m("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1);N=q([st("SynFile")],N);O("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});O("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});O("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});N.define("syn-file");const Kr=p`
  :host {
    display: block;
  }

  .header {
    background: var(--syn-color-neutral-0);
    box-shadow: inset 0 -1px 0 0 var(--syn-color-neutral-400);
  }

  /**
   * The primary content area displays one to many slotted items
   * and contains the following items:
   * - side nav state icon (OPTIONAL)
   * - company or application logo
   * - application name
   * - meta-navigation
   */
  .header__content {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    min-height: 40px;
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
  }

  /**
   * The logo slot includes the application or company logo
   */
  .header__logo ::slotted(*),
  .header__logo syn-icon {
    display: block;
  }

  /**
   * Make sure to use the correct color and outline for links
   */
  .header__logo ::slotted(a),
  .header__logo ::slotted(a:hover) {
    color: var(--syn-color-primary-600);
  }

  .header__logo ::slotted(a:is(:focus-visible)) {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /**
   * Styles for the default logo. This makes sure the default SICK logo has the correct size and color
   */
  .header__logo syn-icon,
  .header__logo syn-icon::part(svg) {
    color: var(--syn-color-primary-600);
    height: 32px;
    width: auto;
  }

  /**
   * The label section hosts the application name
   */
  .header__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-body-large-bold);
    padding: 0 var(--syn-spacing-2x-large);
    white-space: nowrap;
  }

  /**
   * The options menu holds an arbitrary list of <syn-icon-button />
   */
  .header__meta-navigation {
    display: flex;
    flex: 1;
    gap: var(--syn-spacing-x-small);
    justify-content: end;
  }

  .header__meta-navigation ::slotted(*) {
    color: var(--syn-color-neutral-950);
    display: contents;
    font-size: var(--syn-font-size-x-large);
  }

  /**
   * The horizontal top navigation section
   */
  .header__navigation {
    padding: 0 var(--syn-spacing-large);
  }

  /**
   * The burger menu icon styles
   */
  .header__burger-menu-toggle {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-color-neutral-950);
    cursor: pointer;
    display: flex;
    font-size: var(--syn-font-size-x-large);
    margin-right: calc(var(--syn-spacing-medium) + var(--syn-spacing-2x-small));
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .header__burger-menu-toggle:hover {
    color: var(--syn-color-primary-600);
  }

  .header__burger-menu-toggle:active {
    color: var(--syn-color-primary-700);
  }

  .header__burger-menu-toggle:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /**
   * If the burger menu is provided, use a smaller spacing on the left side
   */
   .header--has-burger-menu .header__content {
    padding-left: var(--syn-spacing-medium);
   }
`;ct.define("syn-icon");var Gr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,si=(e,t,i,s)=>{for(var o=s>1?void 0:s?Yr(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Gr(t,i,o),o};class Ne extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new j(this),this.isSideNavAnimating=!1,this.label="",this.burgerMenu="hidden"}static{this.styles=[x,Kr]}static{this.dependencies={"syn-icon":ct}}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant!=="default"?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}handleBurgerMenu(){const t=`syn-burger-menu-${this.burgerMenu}`;this.emit(t)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{const t=document.querySelector("syn-side-nav");this.connectSideNavigation(t)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(t){if(this.mutationObserver.disconnect(),this.sideNav=t||document.querySelector("syn-side-nav"),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","variant"],attributes:!0});const i=()=>{this.isSideNavAnimating=!0},s=()=>{this.isSideNavAnimating=!1};this.sideNav.addEventListener("syn-show",i),this.sideNav.addEventListener("syn-hide",i),this.sideNav.addEventListener("syn-after-show",s),this.sideNav.addEventListener("syn-after-hide",s)}}render(){const t=this.hasSlotController.test("navigation"),i=this.burgerMenu!=="hidden";return $`
      <header
        class=${f({header:!0,"header--has-burger-menu":i,"header--has-navigation":t})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${i?$`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?$`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:$`
                          <slot name="closed-burger-menu-icon">
                            <syn-icon name="menu" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

          <div part="logo" class="header__logo">
            <slot name="logo">
              <syn-icon name="logo-color" library="system" label="SICK Sensor Intelligence"></syn-icon>
            </slot>
          </div>

          <div part="label" class="header__label">
            <slot name="label">
              ${this.label}
            </slot>
          </div>

          <div part="meta-navigation" class="header__meta-navigation">
            <slot name="meta-navigation"></slot>
          </div>
        </div>
        <!-- /.header__content -->

        <div part="navigation" class="header__navigation">
          <slot name="navigation"></slot>
        </div>
      </header>
    `}}si([a()],Ne.prototype,"label",2);si([a({attribute:"burger-menu",reflect:!0})],Ne.prototype,"burgerMenu",2);si([y()],Ne.prototype,"sideNav",2);si([m("burgerMenu",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleBurgerMenu",1);Ne.define("syn-header");class Xr extends ps{constructor(t){if(super(t),this.handlePointerDown=i=>{i.button!==0||this.host.disabled||this.spinOnLongPressCallback(i)},this.handlePointerUp=i=>{i?.preventDefault(),i?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},t.type!==no.ELEMENT||!(t.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(t){return hs}update(t,[i]){return this.callbacks===void 0&&this.host===void 0&&(this.host=t.element,this.callbacks={...i},this.host.addEventListener("pointerdown",this.handlePointerDown)),ao}reconnected(){this.host.addEventListener("pointerdown",this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(t){t.preventDefault(),t.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(i=>{i.forEach(s=>{s.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const es=cs(Xr),Qr=p`
	/* stylelint-disable */
  :host {
    display: block;

    --syn-input-autofill-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-background-color-hover) inset;
    --syn-input-autofill-readonly-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-readonly-background-color) inset;
    --syn-input-autofill-text-fill-color: var(--syn-color-primary-500);
    --syn-input-autofill-caret-color: var(--syn-input-color);
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--syn-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--syn-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly inputs */
  .input--readonly {
    border: none;
    background-color: var(--syn-input-readonly-background-color);
    color: var(--syn-input-color);
  }

  .input--readonly:hover:not(.input--disabled) {
    background-color: var(--syn-input-readonly-background-color-hover);
  }

  .input--readonly.input--focused:not(.input--disabled) {
    background-color: var(--syn-input-readonly-background-color-focus);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .input--readonly.input--disabled {
    background-color: var(--syn-input-readonly-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--syn-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: var(--syn-input-autofill-shadow) !important;
    -webkit-text-fill-color: var(--syn-input-autofill-text-fill-color);
    caret-color: var(--syn-input-autofill-caret-color);
  }

  .input--readonly .input__control:-webkit-autofill,
  .input--readonly .input__control:-webkit-autofill:hover,
  .input--readonly .input__control:-webkit-autofill:focus,
  .input--readonly .input__control:-webkit-autofill:active {
    box-shadow: var(--syn-input-autofill-readonly-shadow) !important;
  }

  .input__control::placeholder {
    color: var(--syn-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--syn-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(syn-icon),
  .input__suffix ::slotted(syn-icon) {
    color: var(--syn-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    height: var(--syn-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    height: var(--syn-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    height: var(--syn-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--syn-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--syn-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`,Jr=p`
  /**
  * Fixes overflowing of the syn-input in flex and grid containers with fix width (https://github.com/synergy-design-system/synergy-design-system/issues/761)
  */
  .input__control {
    width: 100%;
  }

  /**
  * Min-width size adjusted for each size so 2 full digits are shown for type number
  */ 
 
  :host([size="small"][type="number"]:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-small)*8.3);
  }

  :host([size="medium"][type="number"]:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-medium)*9.4);
  }

  :host([size="large"][type="number"]:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-large)*10);
  }

   /**
   * Clearable + Password Toggle
   */
   .input__clear {
    color: var(--syn-input-icon-icon-clearable-color);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    font-size: var(--syn-font-size-medium);
    padding-left: var(--syn-spacing-x-small);
    padding-right: var(--syn-spacing-small);
    width: auto;
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    font-size: var(--syn-font-size-x-large);
    padding-left: var(--syn-spacing-small);
    padding-right: var(--syn-spacing-medium);
    width: auto;
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    font-size: var(--syn-font-size-2x-large);
    padding-left: var(--syn-spacing-medium);
    padding-right: var(--syn-spacing-large);
    width: auto;
  }

  /* Prefix / Suffix color */
  .input__prefix ::slotted(*),
  .input__suffix ::slotted(*) {
    color: var(--syn-input-icon-color);
  }


  /* PADDINGS */
  .input--small .input__control {
    padding: var(--syn-spacing-3x-small) var(--syn-input-spacing-small);
  }

  .input--medium .input__control {
    padding: var(--syn-spacing-x-small) var(--syn-input-spacing-medium);
  }

  .input--large .input__control {
    padding: var(--syn-input-spacing-small) var(--syn-input-spacing-large);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-small) var(--syn-spacing-x-small);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-medium) var(--syn-input-spacing-small);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-large) var(--syn-input-spacing-medium);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline: var(--syn-spacing-x-small) var(--syn-input-spacing-small);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-small) var(--syn-input-spacing-medium);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline: var(--syn-input-spacing-medium) var(--syn-input-spacing-large);
  }

  .input__clear + .input__suffix ::slotted(*),
  .input__password-toggle + .input__suffix ::slotted(*) {
    margin-inline-start: 0;  
  }

  .input--small .input__clear + .input__password-toggle {
    padding-left: var(--syn-spacing-2x-small);
  }

  .input--medium .input__clear + .input__password-toggle {
    padding-left: calc(var(--syn-spacing-2x-small) + var(--syn-spacing-3x-small));
  }

  .input--large .input__clear + .input__password-toggle {
    padding-left: var(--syn-spacing-x-small);
  }

  .input--small .input__clear:has(+ .input__password-toggle) {
    padding-right: var(--syn-spacing-2x-small);
  }

  .input--medium .input__clear:has(+ .input__password-toggle) {
    padding-right: calc(var(--syn-spacing-2x-small) + var(--syn-spacing-3x-small));
  }

  .input--large .input__clear:has(+ .input__password-toggle) {
    padding-right: var(--syn-spacing-x-small);
  }

  .form-control--has-suffix .input--large .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input--large .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--syn-spacing-medium);
  }

  .form-control--has-suffix .input--small .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input--small .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--syn-spacing-x-small);
  }

  .form-control--has-suffix .input--medium .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input--medium .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--syn-spacing-small);
  }

  /* Fixes wrong paddings on some suffix special cases: https://github.com/synergy-design-system/synergy-design-system/issues/817  */
  .form-control--has-prefix .input__control {
    padding-left: 0;
  }

  /* Fixes wrong paddings on some suffix special cases: https://github.com/synergy-design-system/synergy-design-system/issues/817  */
  .form-control--has-suffix .input__control,
  .input:has(.input__clear) .input__control,
  .input:has(.input__password-toggle) .input__control {
    padding-right: 0;
  }

  :host([type='number']) .input--large:not(.input--no-spin-buttons) .input__clear,
  :host([type='number']) .input--large:not(.input--no-spin-buttons) .input__password-toggle {
    padding-right: var(--syn-spacing-medium);
  }

  /* ICONS SIZE */
   .input--small .input__prefix ::slotted(syn-icon),
   .input--small .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
   }

  .input--medium .input__prefix ::slotted(syn-icon),
  .input--medium .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
   }

  .input--large .input__prefix ::slotted(syn-icon),
  .input--large .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
   }

  :host([data-user-invalid]) .input--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .input--standard.input--focused:not(.input--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  .input--standard.input--disabled .input__suffix, 
  .input--standard.input--disabled .input__prefix {
    cursor: not-allowed;
  } 


  /**
  * Number stepper
  */
  .input__number-stepper {
    align-items: center;
    display: flex;
  }

  .input--small .input__number-stepper {
    margin-left: var(--syn-spacing-2x-small);
  }

  .input--medium .input__number-stepper {
    margin-right: var(--syn-spacing-2x-small);
  }

  .input--large .input__number-stepper {
    margin-right: var(--syn-spacing-x-small);
  }


  /**
  * Number stepper buttons
  */
  .input__number-stepper-button {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-color-primary-600);
    cursor: pointer;
    display: flex;
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .input--small .input__number-stepper-button {
    font-size: var(--syn-font-size-medium);
  }

  .input--medium .input__number-stepper-button {
    font-size: var(--syn-font-size-x-large);
  }

  .input--large .input__number-stepper-button {
    font-size: var(--syn-font-size-2x-large);
  }

  .input__number-stepper-button:hover:not([disabled]) {
    color: var(--syn-color-primary-900)
  }

  .input__number-stepper-button:active:not([disabled]) {
    color: var(--syn-color-primary-950)
  }

  .input__number-stepper-button[disabled] {
    color: var(--syn-color-neutral-400);
    cursor: not-allowed;
    opacity: 0.5;
  }



  /**
  * Number stepper divider
  */
  .input--small .input__number-divider {
    height: var(--syn-font-size-medium);
    margin: 0;
  }

  .input--medium .input__number-divider {
    height: var(--syn-font-size-x-large);
    margin: 0 var(--syn-spacing-2x-small);
  }

  .input--large .input__number-divider {
    height: var(--syn-font-size-2x-large);
    margin: 0 var(--syn-spacing-x-small);
  }
`,Zr=(e,t,i={})=>{const{maximumFractionDigits:s,minimumFractionDigits:o,...n}=i,l=(t==="any"||!t?1:+t).toString().split(".")[1]?.length||0;let d,c;const b=typeof o=="number",k=typeof s=="number";return b&&!k?(d=o,c=o):k&&!b?(d=s,c=s):b&&k&&(d=Math.min(o,s),c=Math.max(o,s)),l>(d||0)&&(d=l),l>(c||0)&&(c=l),typeof d<"u"&&d>100&&(d=100),typeof c<"u"&&c>100&&(c=100),new Intl.NumberFormat("en-US",{maximumFractionDigits:c,minimumFractionDigits:d,useGrouping:!1,...n}).format(e)};var ta=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,Us=e=>{throw TypeError(e)},z=(e,t,i,s)=>{for(var o=s>1?void 0:s?ea(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&ta(t,i,o),o},Ei=(e,t,i)=>t.has(e)||Us("Cannot "+i),jt=(e,t,i)=>(Ei(e,t,"read from private field"),i?i.call(e):t.get(e)),is=(e,t,i)=>t.has(e)?Us("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),pi=(e,t,i,s)=>(Ei(e,t,"write to private field"),t.set(e,i),i),ne=(e,t,i)=>(Ei(e,t,"access private method"),i),_t,Ht,Ge,$e;let w=class extends _{constructor(){super(...arguments),is(this,Ht),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Q(this,"help-text","label","prefix","suffix"),this.localize=new j(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0,is(this,_t,Ke)}set numericStrategy(e){switch(typeof e){case"string":pi(this,_t,e==="modern"?bs:Ke);break;case"object":pi(this,_t,zo(e));break;default:pi(this,_t,Ke)}}get numericStrategy(){return jt(this,_t)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null)return!1;const e=typeof this.min=="string"?parseFloat(this.min):this.min;return parseFloat(this.value)<=e}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const e=typeof this.max=="string"?parseFloat(this.max):this.max;return parseFloat(this.value)>=e}handleNumericStrategyAutoClamp(){const{valueAsNumber:e,max:t,min:i}=this;if(!jt(this,_t).autoClamp)return{eventObj:null,shouldClamp:!1,nextValue:e};const s=typeof i=="string"?parseFloat(i):i,o=typeof t=="string"?parseFloat(t):t;let n=e,r="";n<s?(n=s,r="min"):n>o&&(n=o,r="max");const l=r?{detail:{clampedTo:r,lastUserValue:e}}:null;return{eventObj:l,shouldClamp:!!l,nextValue:n}}handleChange(){if(this.type==="number"&&(ne(this,Ht,$e).call(this)||jt(this,_t).autoClamp)){const{eventObj:e,shouldClamp:t,nextValue:i}=this.handleNumericStrategyAutoClamp();let s=jt(this,_t).autoClamp?i:this.valueAsNumber;if(isNaN(s)){const{max:o,min:n}=this;o!=null?s=typeof o=="string"?parseFloat(o):+o:n!=null?s=typeof n=="string"?parseFloat(n):+n:s=0}this.value=ne(this,Ht,$e).call(this)?ne(this,Ht,Ge).call(this,s):s.toString(),this.updateComplete.then(()=>{t&&e&&this.emit("syn-clamp",e),this.formControlController.updateValidity(),this.emit("syn-change")});return}this.value=this.input.value,this.emit("syn-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){if(jt(this,_t).noStepAlign&&this.type==="number"){const{key:i}=e;if(i==="ArrowUp"||i==="ArrowDown"){e.preventDefault(),e.stopPropagation(),i==="ArrowUp"?this.handleStepUp():i==="ArrowDown"&&this.handleStepDown(),this.handleChange();return}}const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){jt(this,_t).noStepValidation||(this.input.step=String(this.step),this.formControlController.updateValidity())}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,s="preserve"){const o=t??this.input.selectionStart,n=i??this.input.selectionEnd;this.input.setRangeText(e,o,n,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){if(jt(this,_t).noStepAlign){const{max:e,step:t,valueAsNumber:i}=this,s=Number.isNaN(i)?0:i,o=typeof this.min=="string"?parseFloat(this.min):this.min,n=typeof e=="string"?parseFloat(e):e,r=typeof t>"u"||t===null||t==="any"?1:typeof t=="number"?t:parseFloat(t);let l=s+r;typeof n=="number"&&n<l?l=n:typeof o=="number"&&o>l&&(l=o);const d=ne(this,Ht,$e).call(this)?ne(this,Ht,Ge).call(this,l):l.toString();this.input.value=d,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){if(jt(this,_t).noStepAlign){const{min:e,max:t,step:i,valueAsNumber:s}=this,o=Number.isNaN(s)?0:s,n=typeof e=="string"?parseFloat(e):e,r=typeof t=="string"?parseFloat(t):t,l=typeof i>"u"||i===null||i==="any"?1:typeof i=="number"?i:parseFloat(i);let d=o-l;typeof n=="number"&&n>d?d=n:typeof r=="number"&&r<d&&(d=r);const c=ne(this,Ht,$e).call(this)?ne(this,Ht,Ge).call(this,d):d.toString();this.input.value=c,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),o=this.label?!0:!!e,n=this.helpText?!0:!!t,l=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return h`
      <div
        part="form-control"
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":n,"form-control--has-prefix":i,"form-control--has-suffix":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${f({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${g(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              min=${g(this.min)}
              max=${g(this.max)}
              step=${g(jt(this,_t).noStepValidation?"any":this.step)}
              .value=${Ee(this.value)}
              autocapitalize=${g(this.autocapitalize)}
              autocomplete=${g(this.autocomplete)}
              autocorrect=${g(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${g(this.pattern)}
              enterkeyhint=${g(this.enterkeyhint)}
              inputmode=${g(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${l?h`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <syn-icon name="x-circle-fill" library="system"></syn-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?h`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?h`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:h`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?h`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${es({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
                  tabindex="-1"
                >
                  <slot name="decrement-number-stepper">
                    <syn-icon name="indeterminate" library="system"></syn-icon>
                  </slot>
                </button>
                <syn-divider class="input__number-divider" part="divider" vertical></syn-divider>
                <button
                  part="increment-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isIncrementDisabled()}
                  aria-hidden="true"
                  ${es({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
                  tabindex="-1"
                >
                  <slot name="increment-number-stepper">
                    <syn-icon name="add" library="system"></syn-icon>
                  </slot>
                </button>
              </div>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_t=new WeakMap;Ht=new WeakSet;Ge=function(e){return Zr(e,this.step,{maximumFractionDigits:this.maxFractionDigits,minimumFractionDigits:this.minFractionDigits,...this.numberFormatterOptions})};$e=function(){const{numberFormatterOptions:e,maxFractionDigits:t,minFractionDigits:i,step:s}=this,o=typeof t<"u"&&!Number.isNaN(t),n=typeof i<"u"&&!Number.isNaN(i);return o||n||typeof e=="object"?!0:((s==="any"||!s?1:+s).toString().split(".")[1]?.length||0)>0};w.styles=[x,Wt,Qr,qt,Jr];w.dependencies={"syn-icon":ct,"syn-divider":Zt};z([u(".input__control")],w.prototype,"input",2);z([y()],w.prototype,"hasFocus",2);z([a({reflect:!0})],w.prototype,"title",2);z([a({reflect:!0})],w.prototype,"type",2);z([a()],w.prototype,"name",2);z([a()],w.prototype,"value",2);z([he()],w.prototype,"defaultValue",2);z([a({reflect:!0})],w.prototype,"size",2);z([a()],w.prototype,"label",2);z([a({attribute:"help-text"})],w.prototype,"helpText",2);z([a({type:Boolean})],w.prototype,"clearable",2);z([a({type:Boolean,reflect:!0})],w.prototype,"disabled",2);z([a()],w.prototype,"placeholder",2);z([a({type:Boolean,reflect:!0})],w.prototype,"readonly",2);z([a({attribute:"password-toggle",type:Boolean})],w.prototype,"passwordToggle",2);z([a({attribute:"password-visible",type:Boolean})],w.prototype,"passwordVisible",2);z([a({attribute:"no-spin-buttons",type:Boolean})],w.prototype,"noSpinButtons",2);z([a({reflect:!0})],w.prototype,"form",2);z([a({type:Boolean,reflect:!0})],w.prototype,"required",2);z([a()],w.prototype,"pattern",2);z([a({type:Number})],w.prototype,"minlength",2);z([a({type:Number})],w.prototype,"maxlength",2);z([a()],w.prototype,"min",2);z([a()],w.prototype,"max",2);z([a()],w.prototype,"step",2);z([a()],w.prototype,"autocapitalize",2);z([a()],w.prototype,"autocorrect",2);z([a()],w.prototype,"autocomplete",2);z([a({type:Boolean})],w.prototype,"autofocus",2);z([a()],w.prototype,"enterkeyhint",2);z([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],w.prototype,"spellcheck",2);z([a()],w.prototype,"inputmode",2);z([a({attribute:!1,reflect:!1,type:Object})],w.prototype,"numberFormatterOptions",2);z([a({attribute:"min-fraction-digits",type:Number})],w.prototype,"minFractionDigits",2);z([a({attribute:"max-fraction-digits",type:Number})],w.prototype,"maxFractionDigits",2);z([a({attribute:"numeric-strategy",converter:{fromAttribute:e=>e==="modern"?bs:Ke},type:Object})],w.prototype,"numericStrategy",1);z([m("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);z([m("step",{waitUntilFirstUpdate:!0})],w.prototype,"handleStepChange",1);z([m("value",{waitUntilFirstUpdate:!0})],w.prototype,"handleValueChange",1);w=z([st("SynInput")],w);w.define("syn-input");class ia{constructor(t,i){this.popupRef=yo(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="syn-menu-item"||s.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const o=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(b=>b.localName==="syn-menu")[0],n=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:r,top:l,width:d,height:c}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?r+d:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?r+d:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=t).addController(this),this.hasSlotController=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const o of i.assignedElements())if(s=o.querySelectorAll("syn-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let o=1;o!==s.length;++o)s[o].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{const r=t.get(n)??new CSSUnitValue(0,"px"),d=(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px");return o-d.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?h`
      <syn-popup
        ${go(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </syn-popup>
    `:h` <slot name="submenu" hidden></slot> `}}const sa=p`
	/* stylelint-disable */
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    color: var(--syn-color-neutral-700);
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-2x-small);
    transition: var(--syn-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(syn-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading syn-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--syn-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--syn-color-neutral-100);
    color: var(--syn-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--syn-color-primary-600);
    color: var(--syn-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  syn-popup::part(popup) {
    box-shadow: var(--syn-shadow-large);
    z-index: var(--syn-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl syn-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(syn-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,oa=p`
  :host {
    /* Custom override for hiding the checkmark in menus it is not needed */
    --display-checkmark: flex;
  }

  .menu-item {
    color: var(--syn-typography-color-text);
    font-size: var(--syn-font-size-medium);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);
  }

  /**
   * Handling for slotted prefix and suffix
   */
  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-small);
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /**
   * Set the default font size to make icons appear correct
   */
  .menu-item .menu-item__prefix::slotted(syn-icon),
  .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-800);
    font-size: var(--syn-font-size-x-large);
  }

  :host(:focus-visible)  .menu-item .menu-item__prefix::slotted(syn-icon),
  :host(:focus-visible)  .menu-item .menu-item__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-0);
  }

  /**
   * Adjust the size of icons
   */
  .menu-item .menu-item__chevron,
  .menu-item .menu-item__check {
    display: var(--display-checkmark);
    font-size: var(--syn-font-size-x-large);
    width: var(--syn-font-size-x-large);
  }

  /**
   * This makes sure the chevron does not take any space if we do not have children
   */
  .menu-item .menu-item__chevron {
    display: none;
    margin-inline-start: var(--syn-spacing-small);
  }

  .menu-item .menu-item__check {
    color: var(--syn-color-primary-600);
    margin-inline-end: var(--syn-spacing-small);
  }

  /**
   * When in loading state, do not show the checkmark as it would bleed through
   */
  .menu-item--loading .menu-item__check {
    visibility: hidden;
  }

  /**
   * Make sure the checkbox is also visible when the item is active
   */
  :host(:focus-visible) .menu-item--checked .menu-item__check {
    color: var(--syn-color-neutral-0);
  }

  /**
   * Special handling for the submenu chevron:
   * We are using the "chevron-down" icon per default as
   * we do not want all chevrons to be part of the bundle
   * Therefore, we have to transform it into the right direction
   */
  .menu-item .menu-item__chevron syn-icon {
    transform: rotate(-90deg);
  }

  .menu-item--rtl .menu-item__chevron syn-icon {
    transform: rotate(90deg);
  }

  /**
   * Make sure to show the chevron if there are children
   */
  .menu-item--has-submenu .menu-item__chevron {
    display: flex;
  }

  /**
   * Adjustments for the spinner in loading state
   */
  .menu-item--loading syn-spinner {
    --indicator-color: currentColor;
    --track-width: 2px;

    font-size: var(--syn-font-size-medium);
    left: var(--syn-spacing-medium);
    opacity: 1;
    position: absolute;
    top: calc(50% - 0.5em);
  }

  /**
   * Highlight checked items
   */
  .menu-item--checked .menu-item__label {
    font-weight: var(--syn-font-weight-semibold);
  }

  /* Needed if we do not show the checkmark */
  :host(:not([type="checkmark"]):not([loading])) .menu-item__label {
    min-height: var(--syn-font-size-x-large);
  }
`;function na(e,t){const i={waitUntilFirstUpdated:!1,...t};return s=>class extends s{#t=!i.waitUntilFirstUpdated;updated(o){if(!this.#t){this.#t=!0;return}const n=Array.from(o).filter(([l])=>e.includes(l));if(n.length===0){super.updated(o);return}const r=n.map(([l,d])=>({attribute:l,newValue:this[l],oldValue:d}));this.emit("syn-attributes-changed",{detail:r}),super.updated(o)}}}var ra=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,It=(e,t,i,s)=>{for(var o=s>1?void 0:s?aa(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&ra(t,i,o),o};let ft=class extends _{constructor(){super(...arguments),this.localize=new j(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Q(this,"submenu"),this.submenuController=new ia(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return As(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return h`
      <div
        id="anchor"
        part="base"
        class=${f({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <syn-icon name="check" library="system" aria-hidden="true"></syn-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <syn-icon name="chevron-down" library="system" aria-hidden="true"></syn-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?h` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}};ft.styles=[x,sa,oa];ft.dependencies={"syn-icon":ct,"syn-popup":L,"syn-spinner":Oi};It([u("slot:not([name])")],ft.prototype,"defaultSlot",2);It([u(".menu-item")],ft.prototype,"menuItem",2);It([a()],ft.prototype,"type",2);It([a({type:Boolean,reflect:!0})],ft.prototype,"checked",2);It([a()],ft.prototype,"value",2);It([a({type:Boolean,reflect:!0})],ft.prototype,"loading",2);It([a({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);It([m("checked")],ft.prototype,"handleCheckedChange",1);It([m("disabled")],ft.prototype,"handleDisabledChange",1);It([m("type")],ft.prototype,"handleTypeChange",1);ft=It([na(["type","loading"],{waitUntilFirstUpdated:!0})],ft);ft.define("syn-menu-item");const la=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    color: var(--syn-color-neutral-500);
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,da=p`
  :host {
    --display-divider: block;
  }

  .menu-label__divider {
    --spacing: 0;

    display: var(--display-divider);
    margin-bottom: var(--syn-spacing-x-small);
  }

  .menu-label {
    color: var(--syn-typography-color-text);
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-semibold);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);
  }
`;class ca extends _{static{this.styles=[x,la,da]}static{this.dependencies={"syn-divider":Zt}}render(){return h`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}}ca.define("syn-menu-label");const ha=p`
	/* stylelint-disable */
  :host {
    display: block;
    position: relative;
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding: var(--syn-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }
`,pa=p`
  :host {
    border-radius: 0;
  }

  /*
   * #368: Hide the checkmarks for menu items
   * when no syn-menu-item[checkbox] or loading is present
   */
  .menu--no-checkmarks::slotted(syn-menu-item) {
    --display-checkmark: none;
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  ::slotted(syn-menu-label:first-of-type) {
    --display-divider: none;
  }

  ::slotted(syn-divider) {
    /* #369: Slotted syn-dividers should use a lighter color so they do not crash with the border visually */
    --color: var(--syn-color-neutral-200);
  }
`;var ua=Object.defineProperty,js=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&ua(t,i,o),o};class oi extends _{constructor(){super(...arguments),this.hasMenuItemsWithCheckmarks=!1,this.updateCheckMarksByChildPropChange=t=>{t.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}static{this.styles=[x,ha,pa]}handleUpdateCheckmarks(t){this.hasMenuItemsWithCheckmarks=t.some(i=>i.type==="checkbox"||i.loading)}disconnectedCallback(){this.removeEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}handleClick(t){const i=["menuitem","menuitemcheckbox"],s=t.composedPath(),o=s.find(d=>i.includes(d?.getAttribute?.("role")||""));if(!o||s.find(d=>d?.getAttribute?.("role")==="menu")!==this)return;const l=o;l.type==="checkbox"&&(l.checked=!l.checked),this.emit("syn-select",{detail:{item:l}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const i=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),i?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const i=this.getAllItems(),s=this.getCurrentItem();let o=s?i.indexOf(s):0;i.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?o++:t.key==="ArrowUp"?o--:t.key==="Home"?o=0:t.key==="End"&&(o=i.length-1),o<0&&(o=i.length-1),o>i.length-1&&(o=0),this.setCurrentItem(i[o]),i[o].focus())}}handleMouseDown(t){const i=t.target;this.isMenuItem(i)&&this.setCurrentItem(i)}handleSlotChange(){const t=this.getAllItems();this.handleUpdateCheckmarks(t),t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){return t.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(t.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return h`
      <slot
        class=${f({"menu--no-checkmarks":!this.hasMenuItemsWithCheckmarks})}
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}}js([u("slot")],oi.prototype,"defaultSlot");js([y()],oi.prototype,"hasMenuItemsWithCheckmarks");oi.define("syn-menu");const ma=p`
  /**
   * Default alignment is inline block when we are in horizontal mode
   */
  :host {
    /**
     * The indentation property defines the current "level" the component is on
     * It may be set per hand, but is normally set during the render phase
     * of a <syn-nav-item /> for slotted children
     */
    --indentation: 0;

    /**
     * Defines the amount of pixels each indentation level will shift the content to the left
     */
    --indentation-stepping: var(--syn-spacing-x-large);

    /**
     * Display property of the children. Defaults to "contents"
     */
    --display-children: contents;

    display: block;
  }

  /**
   * Switch alignment to inline-block when we are in horizontal mode
   */
  :host([horizontal]) {
    display: inline-block;
  }

  /**
   * Core nav item wrapper
   */
  .nav-item {
    align-items: center;
    background: transparent;
    border: none;
    box-shadow: inset 0 -1px 0 0 transparent;
    box-sizing: border-box;
    color: var(--syn-color-neutral-950);
    cursor: pointer;
    display: inline-flex;
    font: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: background-color var(--syn-transition-fast) ease-in-out, box-shadow var(--syn-transition-fast) ease-in-out;
    width: 100%;
    z-index: 0;
  }

  .nav-item:focus-visible {
    outline: none;
  }

  .nav-item:focus-visible::after {
    content: '';
    display: block;
    height: 100%;
    left: calc(var(--syn-spacing-x-small) * -1);
    outline: var(--syn-focus-ring);
    outline-offset: -2px;
    position: absolute;
    top: 0;
    width: calc(100% + 2 * var(--syn-spacing-x-small));
  }

  .nav-item--vertical:focus-visible::after {
    left: 0;
    width: 100%;
  }

  /**
   * Horizontal nav items use narrower paddings
   */
  .nav-item--horizontal {
    padding: var(--syn-spacing-small) 0;
  }

  /**
   * Nav Items acting as accordion use a slightly narrower padding on the right side
   */
  .nav-item.nav-item-is-accordion {
    padding-right: var(--syn-spacing-medium);
  }

  .nav-item--disabled {
    cursor: not-allowed;
  }

  .nav-item--current {
    font-weight: var(--syn-font-weight-bold);
  }

  /**
   * Basic set up for the nav item prefix.
   */
  .nav-item:not(.nav-item--disabled)::before {
    background: var(--syn-color-neutral-600);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /**
   * Hover effect for the nav item.
   * We use opacity to make sure the border-bottom is visible if used in the prio-nav in header
   */
  .nav-item:not(.nav-item--disabled):hover::before {
    opacity: 0.11;
  }

  /**
   * When using horizontal, the background should extend the element
   * on the left and right so the animation for the indicator can be seen
   */
  .nav-item--horizontal:not(.nav-item--disabled)::before {
    left: calc(var(--syn-spacing-x-small) * -1);
    width: calc(100% + 2 * var(--syn-spacing-x-small));
  }

  /**
   * The content wrapper is needed to get the disabled state right
   * and also sets the left padding, according to the given indentation level.
   *
   * Normally, we would just use opacity directly on the button.
   * However, when using the divider prop, this leads to problems
   * as the divider itself will also get opaque.
   */
  .nav-item__content {
    align-items: center;
    display: flex;
    padding-inline-start: calc(var(--indentation) * var(--indentation-stepping));
    width: 100%;
  }

  .nav-item--disabled .nav-item__content {
    opacity: 0.5;
  }

  /**
   * Slotted icons should use a default font size of large
   */
  .nav-item--has-prefix ::slotted(syn-icon),
  .nav-item--has-suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /**
   * The chevron indicates the use as a <details /> element OR a link
   */
  .nav-item__chevron {
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-x-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .nav-item__chevron-open {
    rotate: -180deg;
  }

  /**
   * Items that have the chevron attribute set and are NOT accordions should always show a chevron pointing to the right
   */
  .nav-item:not(.nav-item-is-accordion) .nav-item__chevron {
    rotate: -90deg;
  }

  /**
   * Make the primary content container fill all available space
   */
  .nav-item__content-container {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /**
   * Horizontal navigation items should not break words
   */
    .nav-item--horizontal .nav-item__content-container {
    font-weight: var(--syn-font-weight-bold);
    white-space: nowrap;
  }

  /**
   * Show prefix only
   */
  /* stylelint-disable no-descending-specificity */
  .nav-item--show-prefix-only .nav-item__content-container,
  .nav-item--show-prefix-only .nav-item__suffix,
  .nav-item--show-prefix-only .nav-item__chevron {
    height: var(--syn-spacing-large);
  }
  /* stylelint-enable no-descending-specificity */

  /**
   * Adjust the paddings for the label, depending if there is a pre- and/or suffix available.
   * But only if the there is a main content or additionally a prefix / suffix
   */
  .nav-item--has-prefix.nav-item--has-content .nav-item__content-container,
  .nav-item--has-prefix.nav-item--has-suffix .nav-item__content-container {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .nav-item--has-suffix.nav-item--has-content .nav-item__content-container,
  .nav-item--has-suffix.nav-item--has-prefix .nav-item__content-container {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  /**
   * Multi line content
   */
  /* stylelint-disable no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix,
  .nav-item--multi-line .nav-item__prefix,
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }
  /* stylelint-enable no-descending-specificity */

  /* stylelint-disable no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix::slotted(syn-icon),
  :not(.nav-item--show-prefix-only).nav-item--multi-line .nav-item__prefix::slotted(syn-icon),
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }
  /* stylelint-enable no-descending-specificity */

  /**
   * The current indicator tells the user that the nav-item is the active one
   */
  .current-indicator {
    background: transparent;
    border: none;
    margin: 0;
    position: absolute;
    transition: var(--syn-transition-medium) top ease,
      var(--syn-transition-medium) right ease,
      var(--syn-transition-medium) bottom ease,
      var(--syn-transition-medium) left ease;
    z-index: 1;
  }

  .current-indicator--visible.current-indicator--disabled {
    background: var(--syn-color-neutral-500);
  }

  .current-indicator--visible {
    background: var(--syn-color-primary-600);
  }

  .nav-item--horizontal .current-indicator {
    bottom: 0;
    height: var(--syn-spacing-2x-small);
    left: 0;
    right: 0;
  }

  .nav-item--horizontal:hover .current-indicator--visible,
  .nav-item--horizontal:focus-visible .current-indicator--visible {
    left: calc(var(--syn-spacing-x-small) * -1);
    right: calc(var(--syn-spacing-x-small) * -1);
  }

  .nav-item--vertical .current-indicator {
    bottom: var(--syn-spacing-x-small);
    left: 0;
    top: var(--syn-spacing-x-small);
    width: var(--syn-spacing-2x-small);
  }

  .nav-item--vertical:hover .current-indicator--visible,
  .nav-item--vertical:focus-visible .current-indicator--visible {
    bottom: 0;
    top: 0;
  }

  /**
   * Dividers are optionally displayed in horizontal nav items
   */
  .divider {
    --color: var(--syn-color-neutral-200);

    left: var(--syn-spacing-medium);
    margin: 0;
    position: absolute;
    right: var(--syn-spacing-medium);
    top: 0;
    transition: border var(--syn-transition-fast) ease-in-out;
  }

  /**
   * Hide the divider for active elements
   */
  .nav-item:focus-visible .divider {
    --color: transparent;
  }

  /**
   * Make sure the divider is not visible anymore when hovering
   */
  .nav-item:not(.nav-item--disabled):hover .divider {
    --color: transparent;
  }

  /**
   * Sub menu styling
   */
  summary.nav-item {
    box-sizing: border-box;
    display: flex;
  }

  details summary::-webkit-details-marker {
    visibility: hidden;
  }

  .children {
    display: var(--display-children)
  }
`;var ba=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,pt=(e,t,i,s)=>{for(var o=s>1?void 0:s?fa(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&ba(t,i,o),o};class ot extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"[default]","children","prefix","suffix"),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.rel="noreferrer noopener",this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}static{this.styles=[x,ma]}static{this.dependencies={"syn-divider":Zt,"syn-icon":ct}}isButton(){return!this.href&&!this.hasSlotController.test("children")}isLink(){return!!this.href&&!this.hasSlotController.test("children")}isAccordion(){return this.hasSlotController.test("children")}getNavItemChildren(t){return Array.from(t?.assignedElements({flatten:!0})||[]).map(i=>i.tagName.toLowerCase()==="syn-nav-item"?i:Array.from(i.querySelectorAll(":scope > syn-nav-item"))).flat()}getAllNestedNavItems(t){const i=this.getNavItemChildren(t),s=i.map(o=>o.getAllNestedNavItems(o.childrenSlot)).flat();return i.concat(s)}handleCurrentMarkedChild(){const t=this.closest("syn-side-nav");(!this.open||t?.variant==="rail")&&(this.currentMarkedChild=this.getAllNestedNavItems(this.childrenSlot).some(i=>i.current))}handleClickButton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}handleClickSummary(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit("syn-hide",{cancelable:!0})}showDetails(){this.open=!0,this.emit("syn-show",{cancelable:!0})}handleSlotChange(){const t=getComputedStyle(this);if(t.length===0){setTimeout(()=>{this.handleSlotChange()});return}this.handleCurrentMarkedChild();const s=t.getPropertyValue("--indentation"),o=Math.min(parseInt(s,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(n=>{n.style.setProperty("--indentation",o.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleWidth(t){t.forEach(i=>{requestAnimationFrame(()=>{if(i.contentRect.width<100){const s=this.hasSlotController.test("prefix");this.showPrefixOnly=s}else this.showPrefixOnly=!1;i.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})})}handleHorizontalChange(){this.horizontal?this.resizeObserver.disconnect():this.resizeObserver.observe(this)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleWidth(t)),this.horizontal||this.resizeObserver.observe(this)}firstUpdated(t){super.firstUpdated(t),this.mutationObserver=new MutationObserver(()=>{this.childrenSlot&&this.handleCurrentMarkedChild()}),this.mutationObserver.observe(this,{attributeFilter:["current","open"],childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(t){this.control.focus(t)}render(){const t=this.isButton(),i=this.isLink(),s=this.isAccordion(),o=this.closest("syn-side-nav"),n=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&o?.variant==="rail"&&!o?.open;let r=Se`button`;s?r=Se`summary`:i&&(r=Se`a`);const l=(this.chevron||s)&&!this.horizontal;let d;s?d=this.handleClickSummary:t&&(d=this.handleClickButton);const c=$`
      <${r}
        aria-controls=${g(s?"navigation-item-details":void 0)}
        aria-current=${g(this.current?"page":void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${f({"nav-item":!0,"nav-item--current":this.current||n,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test("[default]"),"nav-item--has-prefix":this.hasSlotController.test("prefix"),"nav-item--has-suffix":this.hasSlotController.test("suffix"),"nav-item--horizontal":this.horizontal,"nav-item--is-link":i,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":s})}
        @click=${d}
        ?disabled=${g(i?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${g(i?this.href:void 0)}
        part="base"
        role=${i?"link":"button"}
        rel=${g(i?this.rel:void 0)}
        tabindex=${this.disabled?"-1":"0"}
        target=${g(i?this.target:void 0)}
      >

        ${this.divider&&!this.horizontal?$`<syn-divider class="divider" part="divider"></syn-divider>`:""}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${l?$`
            <syn-icon
              class=${f({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              color="currentColor"
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:""}

          <div
            class=${f({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||n})}
            part="current-indicator"
          >
          </div>
        </div>

      </${r}>
    `;return s?$`
      <details
        id="navigation-item-details"
        ?open=${this.open}
        part="details"
      >
        ${c}
        <slot
          class="children"
          name="children"
          part="children"
          @slotchange=${this.handleSlotChange}
        ></slot>
      </details>
    `:c}}pt([y()],ot.prototype,"hasFocus",2);pt([y()],ot.prototype,"showPrefixOnly",2);pt([y()],ot.prototype,"currentMarkedChild",2);pt([y()],ot.prototype,"isMultiLine",2);pt([u('slot[name="children"]')],ot.prototype,"childrenSlot",2);pt([u(".nav-item")],ot.prototype,"control",2);pt([a({reflect:!0,type:String})],ot.prototype,"href",2);pt([a()],ot.prototype,"target",2);pt([a()],ot.prototype,"rel",2);pt([a({reflect:!0,type:Boolean})],ot.prototype,"current",2);pt([a({reflect:!0,type:Boolean})],ot.prototype,"disabled",2);pt([a({reflect:!0,type:Boolean})],ot.prototype,"horizontal",2);pt([a({reflect:!0,type:Boolean})],ot.prototype,"chevron",2);pt([a({reflect:!0,type:Boolean})],ot.prototype,"open",2);pt([a({reflect:!0,type:Boolean})],ot.prototype,"divider",2);pt([m("horizontal",{waitUntilFirstUpdate:!0})],ot.prototype,"handleHorizontalChange",1);ot.define("syn-nav-item");const ya=p`
  :host {
    --display-divider: block;
  }

  .optgroup__divider {
    --spacing: var(--syn-spacing-x-small);

    display: var(--display-divider);
  }

  .optgroup__label-container {
    align-items: center;
    box-sizing: border-box;
    color: var(--syn-color-neutral-950);
    display: flex;
    gap: var(--syn-spacing-small);
    min-height: var(--option-min-height, var(--syn-input-height-medium));
  }

  /**
   * Only show the label container when there is a label at all
   */
  .optgroup--has-prefix .optgroup__label-container,
  .optgroup--has-label .optgroup__label-container,
  .optgroup--has-suffix .optgroup__label-container {
    padding: var(--option-padding, var(--syn-spacing-small) var(--syn-spacing-medium));
  }

  /**
   * Format main label.
   * Make sure this works for props and slotted content
   */
  .optgroup__label-content,
  .optgroup__label::slotted(*) {
    flex: 1;
    font-family: var(--syn-font-sans);
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    font-weight: var(--syn-font-weight-semibold);
    line-height: var(--syn-line-height-normal);
  }

  /* Disabled Label */
  .optgroup--is-disabled .optgroup__label-container {
    opacity: var(--syn-input-disabled-opacity);
  }

  .optgroup__prefix,
  .optgroup__suffix {
    color: var(--syn-color-neutral-800);
    font-size: var(--syn-spacing-large);
  }

  .optgroup__options ::slotted(syn-option[hidden]) {
    display: none;
  }
`;var ga=Object.defineProperty,Ai=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&ga(t,i,o),o};const ss=(e,t)=>{e.disabled?e.dataset.originallyDisabled="true":delete e.dataset.originallyDisabled,t&&(e.disabled=!0)};class ni extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=ya}static{this.dependencies={"syn-divider":Zt}}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:["disabled"],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{const i=t.filter(n=>n.target===this),s=t.filter(n=>n.target.matches("syn-option")),o=i.length>0||s.length>0;o&&this.mutationObserver.disconnect(),s.length>0&&s.forEach(n=>{ss(n.target,this.disabled)}),i.length>0&&i.forEach(n=>{n.type==="attributes"&&this.assignedOptions.forEach(r=>{r.disabled=this.disabled?!0:!!r.dataset?.originallyDisabled}),n.type==="childList"&&n.addedNodes.forEach(r=>{r instanceof HTMLElement&&r.matches("syn-option")&&ss(r,this.disabled)})}),o&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){const{disabled:t}=this,i=this.hasSlotController.test("label"),s=this.label?!0:!!i;return $`
      <div
        class=${f({optgroup:!0,"optgroup--has-label":s,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
        role="${t?"presentation":"group"}"
        part="base"
      >
        <syn-divider class="optgroup__divider" part="divider"></syn-divider>
        <div class="optgroup__label-container" part="label-container">
          <slot name="prefix" part="prefix" class="optgroup__prefix"></slot>
          <slot name="label" part="label" class="optgroup__label">
            <span class="optgroup__label-content">
              ${this.label}
            </span>
          </slot>
          <slot name="suffix" part="suffix" class="optgroup__suffix"></slot>
        </div>
        <div class="optgroup__options" role="group" part="options">
          <slot></slot>
        </div>
      </div>
    `}}Ai([Le({selector:"syn-option"})],ni.prototype,"assignedOptions");Ai([a({reflect:!0,type:Boolean})],ni.prototype,"disabled");Ai([a()],ni.prototype,"label");ni.define("syn-optgroup");Et.define("syn-option");L.define("syn-popup");const va=p`
  :host {
    display: block;

    /**
     * Needed because the positioning of the priority menu is absolute
     */
    position: relative !important;
  }

  .horizontal-nav {
    display: flex;
    flex: 1;
    gap: var(--syn-spacing-large);
  }

  /**
   * Priority Menu adjustments
   */
  .priority-menu--hidden {
    visibility: hidden;
  }

  .priority-menu__label {
    display: none;
  }

  .priority-menu__label--visible {
    display: block;
  }

  /**
   * Make the available small click area accessible by adding paddings
   */
  .priority-menu--has-visible-items .priority-menu__icon {
    padding-left: var(--syn-spacing-small);
    padding-right: var(--syn-spacing-small);
  }

  /**
   * Remove the margin from the content container if it is not visible
   */
  .priority-menu--has-visible-items .priority-menu__nav-item::part(content-container) {
    margin-inline-start: 0;
  }
`,os=e=>Array.from(e.assignedElements({flatten:!0})),_a=e=>e.tagName.toLocaleLowerCase()==="syn-nav-item"||(e.getAttribute("role")??"")==="menuitem",ns=e=>e.filter(_a),wa=e=>{e.setAttribute("horizontal","true"),e.removeAttribute("slot"),e.removeAttribute("tabindex"),e.dataset.originalRole?e.setAttribute("role",e.dataset.originalRole):e.removeAttribute("role")},xa=e=>{e.removeAttribute("horizontal"),e.setAttribute("slot","menu"),e.setAttribute("role","menuitem")};var ka=Object.defineProperty,te=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&ka(t,i,o),o};class Kt extends _{constructor(){super(...arguments),this.localize=new j(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[x,va]}static{this.dependencies={"syn-dropdown":yt,"syn-icon":ct,"syn-menu":oi,"syn-nav-item":ot}}getSlottedNavItems(){const t=ns(os(this.defaultSlot)),i=ns(os(this.menuSlot));return t.concat(i)}cacheItemPositions(t){const{left:i}=this.horizontalNav.getBoundingClientRect();t.forEach(s=>{s.removeAttribute("slot");const{right:o}=s.getBoundingClientRect();s.dataset.right=(o-i).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const t=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(t);const{width:i}=this.horizontalNav.getBoundingClientRect(),s=this.priorityMenu.classList.contains("priority-menu--hidden")?0:this.priorityMenu.clientWidth,o=i-s;let n;const r=t.at(-1),l=t.map(b=>{const k=b===r?i:o,Y=!!(n||parseFloat(b.dataset.right)>k);return Y&&!n&&(n=parseFloat(b.dataset.right)),{isHidden:Y,item:b}}),d=l.filter(({isHidden:b})=>!b).length,c=d===1;l.forEach(({item:b,isHidden:k})=>{k||c?xa(b):wa(b)}),this.hasItemsInDropdown=d!==t.length,this.amountOfVisibleItems=c?0:d}renderPriorityMenu(){return $`
      <syn-dropdown
        class=${f({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
        part="priority-menu"
        placement="bottom-end"
      >
        <syn-nav-item class="priority-menu__nav-item" slot="trigger" horizontal part="priority-menu-nav-item">
          <syn-icon 
            class="priority-menu__icon"
            label="More"
            library="system"
            name="more"
            part="priority-menu-icon"
            slot="prefix"
          >
          </syn-icon>
          <span
            class=${f({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const t=this.getSlottedNavItems();t.length!==this.amountOfNavItems&&(this.cacheItemPositions(t),this.handlePriorityMenu(),this.amountOfNavItems=t.length)}firstUpdated(){this.getSlottedNavItems().forEach(t=>{t.dataset.originalRole=t.getAttribute("role")??""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return $`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}}te([u("slot:not([name])")],Kt.prototype,"defaultSlot");te([u("slot[name=menu]")],Kt.prototype,"menuSlot");te([u(".horizontal-nav")],Kt.prototype,"horizontalNav");te([u(".priority-menu")],Kt.prototype,"priorityMenu");te([y()],Kt.prototype,"itemPositionsCached");te([y()],Kt.prototype,"amountOfNavItems");te([y()],Kt.prototype,"amountOfVisibleItems");te([y()],Kt.prototype,"hasItemsInDropdown");Kt.define("syn-prio-nav");const Ca=p`
	/* stylelint-disable */
  :host {
    --height: 1rem;
    --track-color: var(--syn-color-neutral-200);
    --indicator-color: var(--syn-color-primary-600);
    --label-color: var(--syn-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--syn-border-radius-pill);
    box-shadow: inset var(--syn-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--syn-font-sans);
    font-size: 12px;
    font-weight: var(--syn-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--syn-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,za=p`
  :host {
    --height: var(--syn-font-size-medium);
    --speed: 2.5s;
  }

  .progress-bar {
    border-radius: var(--syn-border-radius-none);
    box-shadow: none;
  }

  .progress-bar__indicator {
    font: var(--syn-body-x-small-bold);
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    animation-duration: var(--speed);
  }
`;var $a=Object.defineProperty,Di=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&$a(t,i,o),o};class ri extends _{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[x,Ca,za]}render(){return h`
      <div
        part="base"
        class=${f({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${g(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${vo({width:`${this.value}%`})}>
          ${this.indeterminate?"":h` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}Di([a({type:Number,reflect:!0})],ri.prototype,"value");Di([a({type:Boolean,reflect:!0})],ri.prototype,"indeterminate");Di([a()],ri.prototype,"label");ri.define("syn-progress-bar");const Sa=p`
	/* stylelint-disable */
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--syn-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--syn-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Oa=p`
  :host {
    --size: 120px;
    --track-width: var(--syn-spacing-x-small);
  }

  .progress-ring__indicator {
    stroke-linecap: initial;
  }

  .progress-ring__label {
    color: var(--syn-typography-color-text);
    font: var(--syn-heading-x-large);
  }
`;var Ta=Object.defineProperty,ai=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&Ta(t,i,o),o};class Be extends _{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.label=""}static{this.styles=[x,Sa,Oa]}updated(t){if(super.updated(t),t.has("value")){const i=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*i,o=s-this.value/100*s;this.indicatorOffset=`${o}px`}}render(){return h`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}}ai([u(".progress-ring__indicator")],Be.prototype,"indicator");ai([y()],Be.prototype,"indicatorOffset");ai([a({type:Number,reflect:!0})],Be.prototype,"value");ai([a()],Be.prototype,"label");Be.define("syn-progress-ring");const Ea=p`
	/* stylelint-disable */
  ${Fs}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var Aa=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Bt=(e,t,i,s)=>{for(var o=s>1?void 0:s?Da(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Aa(t,i,o),o};let $t=class extends _{constructor(){super(...arguments),this.hasSlotController=new Q(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return $`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${f({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${g(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};$t.styles=[x,Ea];Bt([u(".button")],$t.prototype,"input",2);Bt([u(".hidden-input")],$t.prototype,"hiddenInput",2);Bt([y()],$t.prototype,"hasFocus",2);Bt([a({type:Boolean,reflect:!0})],$t.prototype,"checked",2);Bt([a()],$t.prototype,"value",2);Bt([a({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);Bt([a({reflect:!0})],$t.prototype,"size",2);Bt([a({type:Boolean,reflect:!0})],$t.prototype,"pill",2);Bt([m("disabled",{waitUntilFirstUpdate:!0})],$t.prototype,"handleDisabledChange",1);$t=Bt([st("SynRadioButton")],$t);$t.define("syn-radio-button");const Ia=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Pa=p`
  :host([data-user-invalid]) {
    --syn-input-border-color: var(--syn-input-border-color-focus-error);
    --syn-input-border-color-hover: var(--syn-input-border-color-focus-error);
    --syn-color-primary-600: var(--syn-color-error-700);
    --syn-color-primary-900: var(--syn-color-error-900);
    --syn-color-primary-950: var(--syn-color-error-950);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-x-small);
  }

`;var Fa=Object.defineProperty,La=Object.getOwnPropertyDescriptor,gt=(e,t,i,s)=>{for(var o=s>1?void 0:s?La(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Fa(t,i,o),o};let it=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this),this.hasSlotController=new Q(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Ps:e?Nn:Me}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(e){const t=e.target.closest("syn-radio, syn-radio-button"),i=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,i.forEach(o=>o.checked=o===t),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const t=this.getAllRadios().filter(r=>!r.disabled),i=t.find(r=>r.checked)??t[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let n=t.indexOf(i)+s;n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.getAllRadios().forEach(r=>{r.checked=!1,this.hasButtonGroup||r.setAttribute("tabindex","-1")}),this.value=t[n].value,t[n].checked=!0,this.hasButtonGroup?t[n].shadowRoot.querySelector("button").focus():(t[n].setAttribute("tabindex","0"),t[n].focus()),this.value!==o&&(this.emit("syn-change"),this.emit("syn-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){const e=this.getAllRadios();if(await Promise.all(e.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=e.some(t=>t.tagName.toLowerCase()==="syn-radio-button"),e.length>0&&!e.some(t=>t.checked))if(this.hasButtonGroup){const t=e[0].shadowRoot?.querySelector("button");t&&t.setAttribute("tabindex","0")}else e[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=this.shadowRoot?.querySelector("syn-button-group");t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),i=t.find(n=>n.checked),s=t.find(n=>!n.disabled),o=i||s;o&&o.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t,o=h`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return h`
      <fieldset
        part="form-control"
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?h`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </syn-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};it.styles=[x,Wt,Ia,qt,Pa];it.dependencies={"syn-button-group":Ve};gt([u("slot:not([name])")],it.prototype,"defaultSlot",2);gt([u(".radio-group__validation-input")],it.prototype,"validationInput",2);gt([y()],it.prototype,"hasButtonGroup",2);gt([y()],it.prototype,"errorMessage",2);gt([y()],it.prototype,"defaultValue",2);gt([a()],it.prototype,"label",2);gt([a({attribute:"help-text"})],it.prototype,"helpText",2);gt([a()],it.prototype,"name",2);gt([a({reflect:!0})],it.prototype,"value",2);gt([a({reflect:!0})],it.prototype,"size",2);gt([a({reflect:!0})],it.prototype,"form",2);gt([a({type:Boolean,reflect:!0})],it.prototype,"required",2);gt([m("size",{waitUntilFirstUpdate:!0})],it.prototype,"handleSizeChange",1);gt([m("value")],it.prototype,"handleValueChange",1);it=gt([st("SynRadioGroup")],it);it.define("syn-radio-group");const Va=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--syn-toggle-size-small);
    font-size: var(--syn-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--syn-toggle-size-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--syn-toggle-size-large);
    font-size: var(--syn-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 50%;
    background-color: var(--syn-input-background-color);
    color: transparent;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-input-border-color-hover);
    background-color: var(--syn-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    background-color: var(--syn-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-color-primary-500);
    background-color: var(--syn-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ma=p`
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled):hover  .radio__control {
    background-color: var(--syn-color-primary-950);
    border-color: var(--syn-color-primary-950);
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled):hover .radio__control {
    border-color: var(--syn-color-primary-900);
  }

  /* Fix#456: Multi line radio fixes */
  .radio__label {
    margin-inline-start: var(--syn-spacing-x-small);
    position: relative;
  }

  .radio--small .radio__label {
    font: var(--syn-body-small-regular);
    top: -3px;
  }

  .radio--medium .radio__label {
    font: var(--syn-body-medium-regular);
    top: -3px;
  }

  .radio--large .radio__label {
    font: var(--syn-body-large-regular);
    top: -2px;
  }

  /* /Fix#456 */

  /* Size modifiers */
  .radio--small {
    --toggle-size: var(--syn-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--syn-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--syn-spacing-large);
  }

  .radio--small .radio__label, .radio--large .radio__label  {
    margin-inline-start: var(--syn-spacing-x-small);
  }
`;var Na=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,ee=(e,t,i,s)=>{for(var o=s>1?void 0:s?Ba(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Na(t,i,o),o};let Tt=class extends _{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return h`
      <span
        part="base"
        class=${f({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?h` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Tt.styles=[x,Va,Ma];Tt.dependencies={"syn-icon":ct};ee([y()],Tt.prototype,"checked",2);ee([y()],Tt.prototype,"hasFocus",2);ee([a()],Tt.prototype,"value",2);ee([a({reflect:!0})],Tt.prototype,"size",2);ee([a({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);ee([m("checked")],Tt.prototype,"handleCheckedChange",1);ee([m("disabled",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleDisabledChange",1);Tt=ee([st("SynRadio")],Tt);Tt.define("syn-radio");const Ra=p`
  :host {
    --tick-height: var(--syn-spacing-x-small);
    --tick-label-top: 10px;
  }

  .tick {
    color: var(--syn-input-icon-color);
    font-family: var(--syn-font-family);
    font-weight: var(--syn-font-weight-normal);
    line-height: var(--syn-line-height-denser);
    width: 1px;
  }

  .tick-line {
    background: var(--syn-color-neutral-400);
    height: var(--tick-height);
  }

  .tick--subdivision .tick-line{
    height: calc(var(--tick-height) / 2);
  }

  .tick-label {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: var(--tick-label-top);
    text-align: center;
    white-space: nowrap;
  }
`;var Ua=Object.defineProperty,ja=(e,t,i,s)=>{for(var o=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=r(t,i,o)||o);return o&&Ua(t,i,o),o};class Hs extends _{constructor(){super(...arguments),this.subdivision=!1}static{this.styles=[x,Ra]}render(){return h`
      <div
        class=${f({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}}ja([a({reflect:!0,type:Boolean})],Hs.prototype,"subdivision");Hs.define("syn-range-tick");const Ha=p`
	/* stylelint-disable */
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--syn-tooltip-arrow-size);
    --arrow-color: var(--syn-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--syn-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--syn-tooltip-border-radius);
    background-color: var(--syn-tooltip-background-color);
    font-family: var(--syn-tooltip-font-family);
    font-size: var(--syn-tooltip-font-size);
    font-weight: var(--syn-tooltip-font-weight);
    line-height: var(--syn-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--syn-tooltip-color);
    padding: var(--syn-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Wa=p`
  /* Write custom CSS here */
  .tooltip__body {
    box-shadow: var(--syn-shadow-large);
  }

  /** #640: Adjust the zIndex of the arrow to make sure the box-shadow above does not bleed out */
  :host::part(arrow) {
    z-index: 0;
  }
`;var qa=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,kt=(e,t,i,s)=>{for(var o=s>1?void 0:s?Ka(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&qa(t,i,o),o};class ut extends _{constructor(){super(),this.localize=new j(this),this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=qi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=qi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static{this.styles=[x,Ha,Wa]}static{this.dependencies={"syn-popup":L}}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await J(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=M(this,"tooltip.show",{dir:this.localize.dir()});await W(this.popup.popup,t,i),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await J(this.body);const{keyframes:t,options:i}=M(this,"tooltip.hide",{dir:this.localize.dir()});await W(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return h`
      <syn-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${f({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </syn-popup>
    `}}kt([u("slot:not([name])")],ut.prototype,"defaultSlot",2);kt([u(".tooltip__body")],ut.prototype,"body",2);kt([u("syn-popup")],ut.prototype,"popup",2);kt([a()],ut.prototype,"content",2);kt([a()],ut.prototype,"placement",2);kt([a({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);kt([a({type:Number})],ut.prototype,"distance",2);kt([a({type:Boolean,reflect:!0})],ut.prototype,"open",2);kt([a({type:Number})],ut.prototype,"skidding",2);kt([a()],ut.prototype,"trigger",2);kt([a({type:Boolean})],ut.prototype,"hoist",2);kt([m("open",{waitUntilFirstUpdate:!0})],ut.prototype,"handleOpenChange",1);kt([m(["content","distance","hoist","placement","skidding"])],ut.prototype,"handleOptionsChange",1);kt([m("disabled")],ut.prototype,"handleDisabledChange",1);O("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});O("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});const ae=(e,t)=>e-t,Ie=(e,t)=>{if(e.length!==t.length)return!0;const i=e.slice().sort(ae),s=t.slice().sort(ae);for(let o=0;o<i.length;o+=1)if(i[o]!==s[o])return!0;return!1},Ws=(e,t,i)=>{const s=e.getBoundingClientRect(),o=s.width;if(o<=0)return 0;let n=t;return n-=s.left,n<=0?i?1:0:n>=o?i?0:1:(n/=o,i?1-n:n)},Ga=p`
  :host {
    /*
     * Values here apply for the default size of "medium"
     * For other sizes, see below
     */
    --thumb-size: var(--syn-spacing-medium);
    --thumb-hit-area-size: 1.4;
    --track-hit-area-size: var(--syn-spacing-medium);
    --track-active-offset: 0px;
    --track-color-active: var(--syn-color-primary-600);
    --track-color-inactive: var(--syn-color-neutral-200);
    --track-height: var(--syn-spacing-2x-small);

    /* This is needed to get the full with of the element, including the border */
    --full-thumb-size: calc(var(--thumb-size) + (var(--syn-focus-ring-width) * 2));

    /*
     * There are multiple places where we need the half width of the thumb
     * This is needed for example to position the knob on the track or
     * provide the spacing to the left and right for the track to make it stand "over"
     */
    --half-thumb-size: calc(var(--full-thumb-size) / 2);
  }

  /* Sizes */
  :host([size='small']) {
    --thumb-size: var(--syn-spacing-small);
  }

  :host([size='large']) {
    --thumb-size: var(--syn-spacing-medium-large);
  }

  .form-control {
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    writing-mode: horizontal-tb;
  }

  .base {
    align-items: center;
    cursor: text;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    position: relative;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    touch-action: none; /* Prevent misbehavior in mobile by disabling native touch */
    -webkit-touch-callout: none;
    transition: var(--syn-transition-fast) color, var(--syn-transition-fast) border, var(--syn-transition-fast) box-shadow, var(--syn-transition-fast) background-color;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    vertical-align: middle;
    width: 100%;
  }

  .input__wrapper {
    flex: 1 0 auto;
    margin: 0 var(--half-thumb-size);
    position: relative;
  }

  :host([disabled]) .base {
    opacity: var(--syn-input-disabled-opacity);
  }

  .input__prefix,
  .input__suffix {
    align-items: center;
    color: var(--syn-input-icon-color);
    cursor: default;
    display: inline-flex;
    flex: 0 0 auto;
  }

  /* Sizing for the prefix and suffix */
  .form-control--small .input__prefix ::slotted(*) {
    font-size: var(--syn-input-font-size-small);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .form-control--small .input__suffix ::slotted(*) {
    font-size: var(--syn-input-font-size-small);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .form-control--medium .input__prefix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .form-control--medium .input__suffix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .form-control--large .input__prefix ::slotted(*) {
    font-size: var(--syn-input-font-size-large);
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .form-control--large .input__suffix ::slotted(*) {
    font-size: var(--syn-input-font-size-large);
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .form-control--small .input__prefix ::slotted(syn-icon),
  .form-control--small .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
  }

  .form-control--medium .input__prefix ::slotted(syn-icon),
  .form-control--medium .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
  }
  
  .form-control--large .input__prefix ::slotted(syn-icon),
  .form-control--large .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
  }

  .track__wrapper {
    cursor: pointer;
    position: relative;
  }

  /* Internal helper for a better click surface on tracks */
  .track__click-helper {
    inset: calc(var(--track-hit-area-size) * -1) calc(var(--half-thumb-size) * -1);
    position: absolute;
  }

  .track {
    background-color: var(--track-color-inactive);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    margin: calc((var(--full-thumb-size) - var(--track-height)) / 2) calc(var(--half-thumb-size) * -1);
  }

  .active-track {
    background-color: var(--track-color-active);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    margin: 0 calc(var(--half-thumb-size) * -1);
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .thumb {
    background-color: var(--syn-color-primary-600);
    border: var(--syn-focus-ring-width) solid var(--syn-color-neutral-0);
    border-radius: var(--syn-border-radius-circle);
    cursor: pointer;
    display: block;
    height: var(--full-thumb-size);
    position: absolute;
    top: 0;
    transition: transform var(--syn-transition-fast) ease-in-out, background-color var(--syn-transition-fast) ease-in-out, box-shadow var(--syn-transition-fast) ease-in-out;
    user-select: none;
    width: var(--full-thumb-size);
    z-index: 3;
  }

  /**
   * Adds some space to the thumb that makes it easier to click and drag
   */
  .thumb::after {
    background: transparent;
    border-radius: var(--syn-border-radius-circle);
    content: "";
    display: block;
  
    /* The --thumb-size needs to be used to subtract from, because the border of the thumb is not calculated into the inset */
    inset: calc((var(--thumb-size) - (var(--full-thumb-size) * var(--thumb-hit-area-size)) ) / 2);

    /* This is needed as we also attach a pointerleave listener that stops */
    pointer-events: none;
    position: absolute;
  }

  .thumb:hover {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: grab;
  }

  .thumb.grabbed {
    background: var(--syn-color-primary-950);
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: grabbing;
  }

  .thumb:focus-visible {
    outline: none;
  }

  .thumb:not(.grabbed):focus-visible {
    background: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: 0;
  }

  :host([disabled]) .track__wrapper,
  :host([disabled]) .thumb,
  :host([disabled]) .thumb.grabbed {
    cursor: not-allowed;
  }

  /*
   * Guard against mobile devices not removing the transform
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover
   */
  @media (any-hover: hover) {
    :host(:not([disabled])) .thumb:hover  {
      transform: scale(var(--thumb-hit-area-size));
    }

    :host(:not([disabled])) .thumb:not(.grabbed):hover  {
      background: var(--syn-color-primary-900);
    }
    
    :host(:not([disabled])) .thumb:hover::after  {
      /* Unset the area of the thumb click and drag area space, so it does not scale with the hover */
      inset: unset;
    }
  }

  /* Ticks */
  .ticks {
    cursor: pointer;
    margin: 1px 0;
    position: relative;
    user-select: none;
  }

  .form-control--small .ticks ::slotted(*) {
    font-size: var(--syn-font-size-small);
  }

  .form-control--large .ticks ::slotted(*) {
    font-size: var(--syn-font-size-large);
  }

  /**
   * Visually hide elements without display:none to make aria and other accessibility stuff work correctly
   * This is necessary for accessibility reasons and e.g. for the native html input validation popup to be
   * shown.
   */
  .visually-hidden {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /**
   * Position the validation input to the bottom and center of the range track
   */
  .range__validation-input {
    bottom: 0;
    left: 50%;
  }
  

  :host([data-user-invalid]) .active-track {
    --track-color-active: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .thumb {
    background-color: var(--syn-input-border-color-focus-error);
  }
`;var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,qs=e=>{throw TypeError(e)},et=(e,t,i,s)=>{for(var o=s>1?void 0:s?Xa(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Ya(t,i,o),o},Ii=(e,t,i)=>t.has(e)||qs("Cannot "+i),v=(e,t,i)=>(Ii(e,t,"read from private field"),i?i.call(e):t.get(e)),re=(e,t,i)=>t.has(e)?qs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),wt=(e,t,i,s)=>(Ii(e,t,"write to private field"),t.set(e,i),i),B=(e,t,i)=>(Ii(e,t,"access private method"),i),F,rt,Pe,ue,Ye,le,E,Fe,Pi,Ks,Fi,Gs,Ys,Xe,Re,Ue,Xs,Qs,ve,Js,Zs,to;let K=class extends _{constructor(){super(),re(this,E),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new Q(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-change"]}),this.localize=new j(this),re(this,F,[0]),re(this,rt,new Map),re(this,Pe,!1),re(this,ue,""),re(this,Ye),re(this,le,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(e){wt(this,F,e?e.split(" ").map(Number).sort(ae):[])}get value(){return v(this,F).slice().sort(ae).join(" ")}set valueAsArray(e){const t=v(this,F);wt(this,F,Array.isArray(e)?e.slice().sort(ae):e||[]),Ie(t,v(this,F))&&this.requestUpdate("value",t.join(" "))}get valueAsArray(){return[...v(this,F)].sort(ae)}disconnectedCallback(){super.disconnectedCallback(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.visibilityObserver=new IntersectionObserver(e=>{const t=e.at(0);t&&t.isIntersecting&&t.target.checkVisibility()&&B(this,E,to).call(this,t.boundingClientRect.height)},{root:this.ticks.parentElement}),this.visibilityObserver.observe(this.ticks),this.formControlController.updateValidity(),wt(this,le,Array.from(v(this,F))),this.thumbs.forEach(e=>{const t=e.parentElement;t.updateComplete.then(()=>{t.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(e){super.willUpdate(e),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const t=v(this,F).map(i=>{if(i<=this.min)return this.min;if(i>=this.max)return this.max;const s=this.min+this.step*Math.round((i-this.min)/this.step);return s>this.max?this.max:s});Ie(v(this,F),t)&&wt(this,F,t)}updated(e){super.updated(e);for(const t of this.thumbs){const i=+t.dataset.rangeId;v(this,rt).has(i)&&B(this,E,Re).call(this,t,v(this,rt).get(i))}B(this,E,Ue).call(this)}focus(e){const t=this.thumbs.item(0);t?t.focus(e):super.focus(e)}checkValidity(){if(this.disabled)return!0;const e=!v(this,ue);return e||this.formControlController.emitInvalidEvent(),e}reportValidity(){if(this.disabled)return!0;const e=this.validity.valid;return this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(v(this,Ye)),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),wt(this,Ye,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),e}setCustomValidity(e){wt(this,ue,e),this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return v(this,ue)?Ps:Me}get validationMessage(){return v(this,ue)}renderThumbs(e){const t=v(this,F).length>1;return v(this,rt).clear(),v(this,F).map((i,s)=>{const o=s+1;v(this,rt).set(o,i);const n=`thumb-${o}`;let r="",l="";return t?(l=e?`label aria-label-hidden ${n}`:`aria-label-hidden ${n}`,s===0?r=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(i)})`:s===v(this,F).length-1?r=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(i)})`:r=this.tooltipFormatter(i)):l=e?"label aria-label-hidden":"",h`
        <syn-tooltip
          exportparts="base:tooltip__base, base__arrow:tooltip__arrow, base__popup:tooltip__popup, body:tooltip__body"
          hoist
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${g(this.disabled?"true":void 0)}
            aria-labelledby=${l}
            aria-label=${r}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${i}"
            aria-valuetext="${this.tooltipFormatter(i)}"
            class="thumb"
            data-range-id="${o}"
            id=${n}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${B(this,E,Gs)}
            @pointermove=${B(this,E,Ys)}
            @pointerup=${B(this,E,Xe)}
            @pointercancel=${B(this,E,Xe)}
            @pointerleave=${B(this,E,Xe)}
            @keydown=${B(this,E,Xs)}
            @focus=${B(this,E,Js)}
          ></div>
        </syn-tooltip>
      `})}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),o=this.label?!0:!!e,n=this.helpText?!0:!!t;return h`
      <div
        part="form-control"
        class=${f({"form-control":!0,"form-control--has-help-text":n,"form-control--has-label":o,"form-control--has-prefix":i,"form-control--has-suffix":s,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${B(this,E,Qs)}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${v(this,F).map(this.tooltipFormatter).join(" - ")})
        </label>

        <div class="base input__control" part="base">
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <div class="input__wrapper" part="input-wrapper">
            <input
              class="range__validation-input visually-hidden"
              tabindex="-1"
              hidden
              @invalid=${B(this,E,Zs)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${B(this,E,Pi)}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(o)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${B(this,E,Ks)}
              role="presentation"
            >
              <slot name="ticks"></slot>
            </div>
          </div>

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>

        <div
          part="form-control-help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F=new WeakMap;rt=new WeakMap;Pe=new WeakMap;ue=new WeakMap;Ye=new WeakMap;le=new WeakMap;E=new WeakSet;Fe=function(){return this.localize.dir()==="rtl"};Pi=function(e,t=!0){if(this.disabled)return;const{clientX:i}=e,s=Array.from(this.thumbs),o=Ws(this.baseDiv,i,v(this,E,Fe)),n=this.step/(this.max-this.min),r=this.min+this.step*Math.round(o/n),l=s.reduce((k,Y)=>{const Yt=v(this,rt).get(+Y.dataset.rangeId),Pt=v(this,rt).get(+k.dataset.rangeId),Ut=Math.abs(Yt-r),se=Math.abs(Pt-r);return Ut===se?Yt<r?Y:k:Ut<se?Y:k}),d=+l.dataset.rangeId;if(!d)return;v(this,rt).set(d,r),B(this,E,Re).call(this,l,r);const c=v(this,F);wt(this,F,Array.from(v(this,rt).values())),B(this,E,Ue).call(this),Ie(c,v(this,F))&&(wt(this,le,Array.from(v(this,F))),this.emit("syn-input"),this.emit("syn-change"));const b=new PointerEvent("pointerdown",e);t&&l.dispatchEvent(b)&&B(this,E,ve).call(this,l)};Ks=function(e){B(this,E,Pi).call(this,e,!1)};Fi=function(e,t){const i=this.valueAsArray,o=Array.from(this.thumbs).indexOf(e),n=i[o-1]||this.min,r=i[o+1]||this.max,l=t<n||t>r;return{finalValue:Math.max(n,Math.min(r,t)),isRestricted:l,nextValue:r,prevValue:n}};Gs=async function(e){if(this.disabled)return;const t=e.target;B(this,E,ve).call(this,t),t.dataset.pointerId&&t.releasePointerCapture(+t.dataset.pointerId),t.dataset.pointerId=e.pointerId.toString(),t.setPointerCapture(e.pointerId),t.classList.add("grabbed"),await t.parentElement.show()};Ys=function(e){if(this.disabled)return;const t=e.target,i=+t.dataset.rangeId;if(!v(this,rt).has(i)||(t.dataset.pointerId?+t.dataset.pointerId:null)!==e.pointerId)return;const o=Ws(this.baseDiv,e.clientX,v(this,E,Fe)),n=this.step/(this.max-this.min);let r=this.min+this.step*Math.round(o/n);if(this.emit("syn-move",{cancelable:!0,detail:{element:t,value:r}}).defaultPrevented)return;if(this.restrictMovement){const c=B(this,E,Fi).call(this,t,r);c.isRestricted?(r=c.finalValue,t.style.zIndex=(3+this.thumbs.length).toFixed(0)):t.style.zIndex="3"}v(this,rt).set(i,r),B(this,E,Re).call(this,t,r);const d=v(this,F);wt(this,F,Array.from(v(this,rt).values())),B(this,E,Ue).call(this),Ie(d,v(this,F))&&this.emit("syn-input")};Xe=async function(e){const t=e.target;!t.dataset.pointerId||e.pointerId!==+t.dataset.pointerId||(t.classList.remove("grabbed"),t.releasePointerCapture(e.pointerId),delete t.dataset.pointerId,Ie(v(this,le),v(this,F))&&(wt(this,le,Array.from(v(this,F))),this.emit("syn-change")),await t.parentElement.hide())};Re=function(e,t){e.setAttribute("aria-valuenow",t.toString()),e.setAttribute("aria-valuetext",this.tooltipFormatter(t));const i=(t-this.min)/(this.max-this.min);e.style.insetInlineStart=`calc(${100*i}% - var(--half-thumb-size))`,B(this,E,ve).call(this,e)};Ue=function(){const{activeTrack:e}=this;if(!e)return;if(this.min===this.max){e.style.insetInlineStart="0%",e.style.insetInlineEnd="0%";return}if(v(this,F).length===1){const o=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",n=100*(v(this,F)[0]-this.min)/(this.max-this.min);e.style.insetInlineStart=`min(${o}, ${n}%)`,e.style.insetInlineEnd=`min(calc(100% - ${o}), calc(100% - ${n}%))`;return}const t=v(this,F).slice().sort(ae),i=100*(t[0]-this.min)/(this.max-this.min),s=100*(t[t.length-1]-this.min)/(this.max-this.min);e.style.insetInlineStart=`${i}%`,e.style.insetInlineEnd=`calc(100% - ${s}%)`};Xs=function(e){const t=e.target,i=+t.dataset.rangeId,s=v(this,rt).get(i);if(s===void 0)return;let o=s;switch(e.key){case"ArrowUp":case"Up":o=Math.min(s+this.step,this.max);break;case"ArrowDown":case"Down":o=Math.max(s-this.step,this.min);break;case"ArrowLeft":case"Left":o=v(this,E,Fe)?Math.min(s+this.step,this.max):Math.max(s-this.step,this.min);break;case"ArrowRight":case"Right":o=v(this,E,Fe)?Math.max(s-this.step,this.min):Math.min(s+this.step,this.max);break;case"PageUp":o=Math.min(s+(this.max-this.min)/5,this.max);break;case"PageDown":o=Math.max(s-(this.max-this.min)/5,this.min);break;case"Home":o=this.min;break;case"End":o=this.max;break;default:return}if(o!==s){if(this.emit("syn-move",{cancelable:!0,detail:{element:t,value:o}}).defaultPrevented)return;if(this.restrictMovement){const r=B(this,E,Fi).call(this,t,o);r.isRestricted&&(o=r.finalValue)}B(this,E,Re).call(this,t,o),v(this,rt).set(i,o),wt(this,F,Array.from(v(this,rt).values())),B(this,E,Ue).call(this),B(this,E,ve).call(this,t),wt(this,le,Array.from(v(this,F))),this.emit("syn-input"),this.emit("syn-change")}e.stopPropagation(),e.preventDefault()};Qs=function(e){e.relatedTarget&&this.shadowRoot?.contains(e.relatedTarget)||(this.emit("syn-blur"),wt(this,Pe,!1))};ve=function(e){if(this.tooltipPlacement==="none")return;const t=+e.dataset.rangeId;if(!v(this,rt).has(t))return;const i=v(this,rt).get(t),s=e.parentElement;s.content=this.tooltipFormatter(i)};Js=function(e){if(this.disabled)return;v(this,Pe)||(wt(this,Pe,!0),this.emit("syn-focus"));const t=e.target;t?.dataset?.rangeId&&B(this,E,ve).call(this,t)};Zs=function(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)};to=function(e){const t=this.hasSlotController.test("ticks"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix");if(!t)return;let o=e||this.shadowRoot?.querySelector(".ticks")?.clientHeight;if(o){if(o+=2,o/=2,i){const n=this.shadowRoot?.querySelector(".input__prefix");n.style.transform=`translateY(-${o}px)`}if(s){const n=this.shadowRoot?.querySelector(".input__suffix");n.style.transform=`translateY(-${o}px)`}}};K.styles=[x,Wt,qt,Ga];K.dependencies={"syn-tooltip":ut};et([a()],K.prototype,"name",2);et([a()],K.prototype,"label",2);et([a({attribute:"help-text"})],K.prototype,"helpText",2);et([a({reflect:!0,type:Boolean})],K.prototype,"disabled",2);et([a({type:Number})],K.prototype,"min",2);et([a({type:Number})],K.prototype,"max",2);et([a({type:Number})],K.prototype,"step",2);et([a({reflect:!0})],K.prototype,"size",2);et([a({attribute:"tooltip-placement",type:String})],K.prototype,"tooltipPlacement",2);et([a({type:String})],K.prototype,"value",1);et([a({attribute:"restrict-movement",type:Boolean})],K.prototype,"restrictMovement",2);et([he()],K.prototype,"defaultValue",2);et([a({reflect:!0})],K.prototype,"form",2);et([a({attribute:!1})],K.prototype,"tooltipFormatter",2);et([u(".input__wrapper")],K.prototype,"baseDiv",2);et([u(".active-track")],K.prototype,"activeTrack",2);et([u(".ticks")],K.prototype,"ticks",2);et([_o(".thumb")],K.prototype,"thumbs",2);et([u(".range__validation-input")],K.prototype,"validationInput",2);K=et([st("SynRange")],K);K.define("syn-range");const Qa=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--syn-button-font-size-small);
    height: calc(var(--syn-input-height-small) * 0.8);
    line-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-small);
    padding: 0 var(--syn-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--syn-button-font-size-medium);
    height: calc(var(--syn-input-height-medium) * 0.8);
    line-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-medium);
    padding: 0 var(--syn-spacing-small);
  }

  .tag--large {
    font-size: var(--syn-button-font-size-large);
    height: calc(var(--syn-input-height-large) * 0.8);
    line-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    border-radius: var(--syn-input-border-radius-large);
    padding: 0 var(--syn-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  
`,Ja=p`
  :host {
    /*
     * #850: This is needed for position adjustments when using the tags in syn-select[multiple].
     * It will get adjusted in the syn-select component.
     */
    --syn-tag-position-adjustment: 0px;
  }

  .tag {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-neutral-400);
    border-radius: var(--syn-border-radius-small);
    color: var(--syn-input-color);
  }

  .tag .tag__remove {
    color: var(--syn-color-neutral-500);
  }


  /* Size small */
  .tag--small {
    font-size: var(--syn-font-size-x-small);
    height: var(--syn-font-size-x-large);
    line-height: calc(var(--syn-font-size-x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--small.tag--removable {
    padding-inline-end: var(--syn-spacing-2x-small);
  }


  /* Size medium */
  .tag--medium {
    font-size: var(--syn-font-size-small);
    height: var(--syn-font-size-2x-large);
    line-height: calc(var(--syn-font-size-2x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--medium.tag--removable {
    padding-inline-end: var(--syn-spacing-x-small);
  }

  .tag--medium .tag__remove {
    margin-inline-start: var(--syn-spacing-small);
  }


  /* Size large */
  .tag--large {
    font-size: var(--syn-font-size-medium);
    height: var(--syn-font-size-3x-large);
    line-height: calc(var(--syn-font-size-3x-large) - var(--syn-input-border-width) * 2);
  }

  .tag--large .tag__remove {
    margin-inline-start: var(--syn-spacing-medium);
  }

  .tag--large.tag--removable {
    padding-inline-end: var(--syn-spacing-small);
  }


  /* Hover */
  .tag.tag--removable:hover {
    background-color: var(--syn-color-neutral-100);
  }
  
  .tag .tag__remove:hover {
    color: var(--syn-color-neutral-950);
  }


  /* Focus 
     ! Focus styling is currently not working because shoelace does not support to focus icon-button 
  */
  .tag.tag--removable:focus ~ .tag__remove {
    border: solid 1px var(--syn-color-primary-500);
  }


  /* Slotted icon style */
  .tag ::slotted(syn-icon) {
    position: relative;
    top: var(--syn-tag-position-adjustment);
  }

  .tag--small ::slotted(syn-icon) {
    font-size: var(--syn-font-size-small);
    margin-inline-end: var(--syn-spacing-2x-small);
  }

  .tag--medium ::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .tag--large ::slotted(syn-icon) {
    font-size: var(--syn-font-size-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }


  /* Remove icon-button style */
  .tag--small .tag__remove::part(base){
    font-size: var(--syn-font-size-medium);
  }

  .tag--medium .tag__remove::part(base){
    font-size: var(--syn-font-size-x-large);
  }

  .tag--large .tag__remove::part(base){
    font-size: var(--syn-font-size-2x-large);
  }
`;var Za=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,Li=(e,t,i,s)=>{for(var o=s>1?void 0:s?tl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Za(t,i,o),o};let Qt=class extends _{constructor(){super(...arguments),this.localize=new j(this),this.size="medium",this.removable=!1}handleRemoveClick(){this.emit("syn-remove")}render(){return h`
      <span
        part="base"
        class=${f({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?h`
              <syn-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></syn-icon-button>
            `:""}
      </span>
    `}};Qt.styles=[x,Qa,Ja];Qt.dependencies={"syn-icon-button":ye};Li([a({reflect:!0})],Qt.prototype,"size",2);Li([a({type:Boolean})],Qt.prototype,"removable",2);Qt=Li([st("SynTag")],Qt);const el=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--syn-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--syn-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--syn-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--syn-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .select__tags::slotted(syn-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(syn-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    color: var(--syn-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

/* Sizes */
  .select--small .select__combobox {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    min-height: var(--syn-input-height-small);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    min-height: var(--syn-input-height-medium);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    min-height: var(--syn-input-height-large);
    padding-block: 0;
    padding-inline: var(--syn-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }/* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--syn-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--syn-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--syn-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--syn-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--syn-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    box-shadow: var(--syn-shadow-large);
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-500);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }
`,il=p`
  /**
   * Invalid user data
   */
  :host([data-user-invalid]) .select__combobox {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .select--standard:not(.select--disabled).select--open .select__combobox,
  :host([data-user-invalid]) .select--standard:not(.select--disabled).select--focused .select__combobox {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  /* Clear button */
  .select__clear {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-spacing-large);
  }

  .select--small .select__clear {
    font-size: var(--syn-spacing-medium);
  }

  .select--large .select__clear {
    font-size: var(--syn-spacing-x-large);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Expand icon */
  .select__expand-icon {
    color: var(--syn-color-neutral-950);
    margin-inline-start: var(--syn-spacing-small);
  }

  .select--small .select__expand-icon {
    font-size: var(--syn-spacing-medium);
  }

  .select--medium .select__expand-icon {
    font-size: var(--syn-spacing-large);
  }

  .select--large .select__expand-icon {
    font-size: var(--syn-spacing-x-large);
  }

  /* Change select border on hover */
  /* stylelint-disable-next-line no-descending-specificity */
  .select:not(.select--disabled):hover .select__combobox {
    border-color: var(--syn-input-color-hover);
  }

  /* Prefix and Suffix */

  /* Small */
  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .select--small .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .select--small .select__suffix::slotted(syn-icon),
  .select--small .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-medium);
  }

  /* Medium */
  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .select--medium .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .select--medium .select__suffix::slotted(syn-icon),
  .select--medium .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
  }

  /* Large */
  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .select--large .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .select--large .select__suffix::slotted(syn-icon),
  .select--large .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
  }


  .select__prefix,
  .select__suffix {
    color: var(--syn-input-help-text-color);
  }

  /* Multi Select */
  .select__tags {
    margin-inline-start: var(--syn-spacing-medium);
  }

  .select--small .select__tags {
    gap: var(--syn-spacing-2x-small);
  }

  .select--medium .select__tags {
    gap: var(--syn-spacing-x-small);
  }

  .select--large .select__tags {
    gap: var(--syn-spacing-small);
  }

  /* Listbox */
  .select__listbox {
    /* @todo: Should be --syn-border-radius-medium, which should be set to 0 */
    border-radius: var(--syn-border-radius-none);
    box-shadow: var(--syn-shadow-medium);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .select__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }

  /**
   * #850: Allow to measure the size of the combobox.
   * This is needed so we can automatically size and truncate the tags in the <syn-select multiple> component.
   * Scoped to multiple to not break the single select per accident.
   */
  :host([multiple]) .select__tags {
    min-width: 100px;
    overflow: hidden;
  }

  :host([multiple]) .select__tags > div {
    display: contents;
  }

  :host([multiple]) .select__tags > div > syn-tag {
    --syn-tag-position-adjustment: var(--syn-spacing-3x-small);

    max-width: var(--syn-select-tag-max-width);
  }

  :host([multiple]) .select__tags > div > syn-tag::part(content) {
    display: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${Vs}
`,sl=e=>Array.isArray(e)||typeof e=="string"?e.length>0:typeof e=="number"?!0:!!e,ol=(e,t)=>Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:e.every((i,s)=>i===t[s]):e===t;var nl=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,A=(e,t,i,s)=>{for(var o=s>1?void 0:s?rl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&nl(t,i,o),o};let S=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Q(this,"help-text","label"),this.localize=new j(this),this.isInitialized=!1,this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.delimiter=" ",this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>h`
      <syn-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        size=${this.size}
        removable
        @syn-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </syn-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest(".select__clear")!==null,s=t.closest("syn-icon-button")!==null;if(!(i||s)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),n=o.indexOf(this.currentOption);let r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(r=n+1,r>o.length-1&&(r=0)):e.key==="ArrowUp"?(r=n-1,r<0&&(r=o.length-1)):e.key==="Home"?r=0:e.key==="End"&&(r=o.length-1),this.setCurrentOption(o[r])}if(e.key&&e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of o)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?Array.isArray(e)||(e=typeof e=="string"?e.split(this.delimiter):[e].filter(Boolean)):e=Array.isArray(e)?e.join(this.delimiter):e,!ol(this._value,e)&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver=new ResizeObserver(e=>{const t=e.at(0);this.tagContainer.style.setProperty("--syn-select-tag-max-width",`${t.contentRect.width}px`)}),this.resizeObserver.observe(this.tagContainer))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const i=e.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="syn-icon-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("syn-option"),s=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("syn-option")||customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue;this.handleDelimiterChange();const i=Array.isArray(t)?t:typeof t=="string"?t.split(this.delimiter):[t].filter(Boolean),s=[];e.forEach(r=>s.push(r.value));const o=i.map(String),n=e.filter(r=>o.includes(String(r.value)));this.setSelectedOptions(n)}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){const e=this.getAllOptions();this.selectedOptions=e.filter(i=>i.selected);const t=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const i=this.selectedOptions[0];this.value=i?.value??"",this.displayLabel=i?.getTextLabel?.()??""}this.valueHasChanged=t,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return h`<div @syn-remove=${s=>this.handleTagRemove(s,e)}>
          ${typeof i=="string"?ms(i):i}
        </div>`}else if(t===this.maxOptionsVisible)return h`<syn-tag size=${this.size}>+${this.selectedOptions.length-t}</syn-tag>`;return h``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDelimiterChange(){this.getAllOptions().forEach(e=>{e.delimiter=this.delimiter})}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}firstUpdated(){this.isInitialized=!0}updated(e){super.updated(e),e.has("multiple")&&(this.multiple?this.enableResizeObserver():this.resizeObserver?.disconnect())}willUpdate(e){super.willUpdate(e),!this.isInitialized&&!this.defaultValue&&this.value&&(this.defaultValue=this.value,this.valueHasChanged=!1)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}const e=this.getAllOptions(),i=(Array.isArray(this.value)?this.value:[this.value]).map(String),s=e.filter(o=>i.includes(String(o.value)));this.setSelectedOptions(s)}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await J(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=M(this,"select.show",{dir:this.localize.dir()});await W(this.popup.popup,e,t),this.currentOption&&ti(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await J(this);const{keyframes:e,options:t}=M(this,"select.hide",{dir:this.localize.dir()});await W(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Z(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Z(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=sl(this.value),t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,o=this.helpText?!0:!!i,n=this.clearable&&!this.disabled&&e,r=this.placeholder&&this.value&&!e;return h`
      <div
        part="form-control"
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${f({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement+"-start"}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="popup"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?h`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value?.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${n?h`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <syn-icon library="system" name="chevron-down"></syn-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </syn-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};S.styles=[x,Wt,el,qt,il];S.dependencies={"syn-icon":ct,"syn-popup":L,"syn-tag":Qt};A([u(".select")],S.prototype,"popup",2);A([u(".select__combobox")],S.prototype,"combobox",2);A([u(".select__display-input")],S.prototype,"displayInput",2);A([u(".select__value-input")],S.prototype,"valueInput",2);A([u(".select__listbox")],S.prototype,"listbox",2);A([u(".select__tags")],S.prototype,"tagContainer",2);A([y()],S.prototype,"hasFocus",2);A([y()],S.prototype,"displayLabel",2);A([y()],S.prototype,"currentOption",2);A([y()],S.prototype,"selectedOptions",2);A([y()],S.prototype,"valueHasChanged",2);A([a()],S.prototype,"delimiter",2);A([a()],S.prototype,"name",2);A([y()],S.prototype,"value",1);A([a({attribute:"value"})],S.prototype,"defaultValue",2);A([a({reflect:!0})],S.prototype,"size",2);A([a()],S.prototype,"placeholder",2);A([a({type:Boolean,reflect:!0})],S.prototype,"multiple",2);A([a({attribute:"max-options-visible",type:Number})],S.prototype,"maxOptionsVisible",2);A([a({type:Boolean,reflect:!0})],S.prototype,"disabled",2);A([a({type:Boolean})],S.prototype,"clearable",2);A([a({type:Boolean,reflect:!0})],S.prototype,"open",2);A([a({type:Boolean})],S.prototype,"hoist",2);A([a()],S.prototype,"label",2);A([a({reflect:!0})],S.prototype,"placement",2);A([a({attribute:"help-text"})],S.prototype,"helpText",2);A([a({reflect:!0})],S.prototype,"form",2);A([a({type:Boolean,reflect:!0})],S.prototype,"required",2);A([a()],S.prototype,"getTag",2);A([m("delimiter")],S.prototype,"handleDelimiterChange",1);A([m("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);A([m(["defaultValue","value","delimiter"],{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);A([m("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);S=A([st("SynSelect")],S);O("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});O("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("syn-select");const al=p`
  :host {
    --side-nav-open-width: 320px;
    --side-nav-rail-width: 72px;

    display: block;
  }

  /**
   * Syn-drawer styling
   */
  .side-nav__drawer {
    --size: var(--side-nav-open-width);
  }
  
  .side-nav__drawer::part(base){
    position: absolute;
    z-index: var(--syn-z-index-drawer);
  }

  .side-nav__drawer::part(body),
  .side-nav__drawer::part(footer) {
    padding: 0;
  }

  /** 
   * Overlay 
   */
  .side-nav__drawer::part(overlay){
    position: absolute;
  }




  /****
   *
   * variant="default"
   *
   ****/
  
  /* Side nav should have a width, so it behave correct in an e.g. display flex context */
  .side-nav.side-nav--fix.side-nav--open {
    width: var(--side-nav-open-width);
  }

  /* Fixed mode  */
  .side-nav--fix .side-nav__drawer::part(overlay){
    display: block;
  }




  /****
   *
   * variant="rail"
   *
   ****/

  /* 
   * Side nav should have a width, so it behave correct in an e.g. display flex context. 
   * in variant="rail" the width is always the small rail width, because there should be no shrinking possible of the main content area.
   */
  .side-nav.side-nav--rail {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--rail .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  /* Show the overlay of the drawer on touch devices */
  .side-nav--open.side-nav--rail.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--rail.side-nav--animation {
    white-space: nowrap;
  }

  /* Hide the scrollbars in closed variant="rail" */ 
  :not(.side-nav--open).side-nav--rail .side-nav__drawer::part(body){
    overflow: hidden;
  }




  /****
   *
   * variant="sticky"
   *
   ****/

  /*
   * Side nav should have a width, so it behave correct in an e.g. display flex context.
   * In variant="sticky" the width is the rail width if closed and the open width if open.
   */
  .side-nav.side-nav--sticky {
    width: var(--side-nav-open-width);
  }

  .side-nav.side-nav--sticky:not(.side-nav--open) {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--sticky .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }


  /*
   * For touch devices the content should not shrink in a flex container
   */ 
  .side-nav--sticky.side-nav--touch {
    width: var(--side-nav-rail-width);
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--sticky.side-nav--animation {
    white-space: nowrap;
  }

  /* Show the overlay of the drawer on touch devices */
   .side-nav--open.side-nav--sticky.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }


  /* Hide the scrollbars in closed variant="sticky" */ 
  :not(.side-nav--open).side-nav--sticky .side-nav__drawer::part(body){
    overflow: hidden;
  }


  .side-nav__toggle-icon > syn-icon {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /****
   *
   * Footer divider
   *
   ****/
  .side-nav__footer-divider{
    --spacing: 0;
    --color: var(--syn-color-neutral-300);
  }

  :not(.side-nav--open).side-nav--rail ::slotted(syn-nav-item){
    --display-children: none;
  }
`;var ll=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,Rt=(e,t,i,s)=>{for(var o=s>1?void 0:s?dl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&ll(t,i,o),o};let xt=class extends _{constructor(){super(),this.hasSlotController=new Q(this,"[default]","footer"),this.localize=new j(this),this.isAnimationActive=!1,this.open=!1,this.rail=!1,this.variant="default",this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener("syn-initial-focus",e=>{this.variant!=="default"&&(e.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener("focusin",e=>{e.target.tagName.toLowerCase()==="syn-nav-item"&&this.variant==="rail"&&!this.open&&(this.open=!0)}),this.addEventListener("focusout",e=>{const t=e.target.tagName.toLowerCase(),i=e.relatedTarget?.tagName.toLowerCase();t==="syn-nav-item"&&i!=="syn-nav-item"&&this.variant==="rail"&&this.open&&(this.open=!1)})}setDelayedCallback(e){clearTimeout(this.timeout),this.timeout=setTimeout(e,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerAnimations(){const e=M(this,`sideNav.show${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),t=M(this,`sideNav.hide${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),i=M(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),s=M(this,"sideNav.overlay.show",{dir:this.localize.dir()});We(this.drawer,"drawer.showStart",e),We(this.drawer,"drawer.hideStart",t),We(this.drawer,"drawer.overlay.hide",i),We(this.drawer,"drawer.overlay.show",s)}handleVariantChange(){switch(this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant){case"rail":this.addMouseListener();break;case"sticky":case"default":default:this.removeMouseListener()}}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,Z(this.drawer,`syn-after-${this.open?"show":"hide"}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,Z(this.drawer,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this.drawer,"syn-after-hide")}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(".drawer__panel").tabIndex=-1}),this.variant){case"rail":this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case"sticky":break;case"default":default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(be(this.drawer),this.drawer.modal.deactivate())}willUpdate(e){super.willUpdate(e),e.has("rail")&&(this.rail&&console.warn("<syn-side-nav/>: The `rail` attribute is deprecated. Please use the `variant` attribute with `rail` instead. It will be removed in synergy version 3.0"),(!e.has("variant")||this.rail)&&(this.variant=this.rail?"rail":"default"))}toggleOpenState(){this.open=!this.open}render(){const e=window.navigator.maxTouchPoints>0||"ontouchstart"in window,t=this.hasSlotController.test("footer"),i=t||this.variant==="sticky";return $`
      <nav
        class=${f({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":t,"side-nav--open":this.open,"side-nav--rail":this.variant==="rail","side-nav--sticky":this.variant==="sticky","side-nav--touch":e})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.variant!=="default"}
          exportparts="overlay,panel,body,base:drawer__base"
          label=${this.localize.term("sideNav")}
          no-header
          ?open=${this.open}
          part="drawer"
          placement="start"
          @syn-request-close=${this.handleRequestClose} 
        >
          <div part="content-container" class="side-nav__content-container">
            <slot part="content"></slot>
          </div>
          
          <footer class="side-nav__footer" part="footer-container" slot="footer">  

            ${i?$`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot>
            ${this.variant==="sticky"?$`<syn-nav-item part="toggle-nav-item" class="side-nav__toggle-nav-item" @click=${this.toggleOpenState} ?divider=${t}>
                      <slot name="toggle-icon" slot="prefix" class="side-nav__toggle-icon">
                        <syn-icon library="system" name="sticky_sidebar" part="toggle-icon"></syn-icon>
                      </slot>
                      <slot name="toggle-label" part="toggle-label">
                        ${!this.open&&!this.isAnimationActive?this.localize.term("sideNavShow"):this.localize.term("sideNavHide")}
                      </slot>
                    </syn-nav-item>`:""}
          
          </footer>

        </syn-drawer>

      </nav>
    `}};xt.styles=[x,al];xt.dependencies={"syn-divider":Zt,"syn-drawer":St,"syn-icon":ct,"syn-nav-item":ot};Rt([y()],xt.prototype,"isAnimationActive",2);Rt([u(".side-nav__drawer")],xt.prototype,"drawer",2);Rt([a({reflect:!0,type:Boolean})],xt.prototype,"open",2);Rt([a({reflect:!0,type:Boolean})],xt.prototype,"rail",2);Rt([a({reflect:!0})],xt.prototype,"variant",2);Rt([a({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],xt.prototype,"noFocusTrapping",2);Rt([m("variant",{waitUntilFirstUpdate:!0})],xt.prototype,"handleVariantChange",1);Rt([m("open",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpenChange",1);Rt([m("noFocusTrapping",{waitUntilFirstUpdate:!0})],xt.prototype,"handleFocusTrapping",1);xt=Rt([st("SynSideNav")],xt);O("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});O("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});O("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});O("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});O("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});O("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});xt.define("syn-side-nav");Oi.define("syn-spinner");const cl=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--syn-toggle-size-small);
    --thumb-size: calc(var(--syn-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--syn-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--syn-toggle-size-medium);
    --thumb-size: calc(var(--syn-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--syn-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--syn-toggle-size-large);
    --thumb-size: calc(var(--syn-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--syn-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-input-font-family);
    font-size: inherit;
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--syn-color-neutral-400);
    border: solid var(--syn-input-border-width) var(--syn-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--syn-color-neutral-0);
    border-radius: 50%;
    border: solid var(--syn-input-border-width) var(--syn-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-primary-600);
    border-color: var(--syn-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--syn-input-required-content);
    color: var(--syn-input-required-content-color);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,hl=p`
:host([size='small']) {
    --height: calc(var(--syn-font-size-medium) + 2px);
    --thumb-size: var(--syn-font-size-small);
    --width: calc((var(--height) * 2) - 6px);
  }

  :host([size='medium']) {
    --height: var(--syn-font-size-large);
    --thumb-size: var(--syn-font-size-medium);
    --width: calc((var(--height) * 2) - 6px);
  }

  :host([size='large']) {
    --height: calc(var(--syn-toggle-size-large) + 4px);
    --thumb-size: var(--syn-toggle-size-large);
    --width: calc((var(--height) * 2) - 6px);
  }

  .switch.switch--small {
    padding: var(--syn-spacing-2x-small) 0;
  }

  .switch.switch--medium {
    padding: var(--syn-spacing-2x-small) 0;
  }

  .switch.switch--large {
    padding: var(--syn-spacing-3x-small) 0;
  }

  /* Hint: can be removed, if the padding stylings for sizes from above are removed */
  .form-control--has-help-text .switch {
    padding-bottom: 0;
  }

  .switch__control {
    background-color: var(--syn-color-neutral-600);
    border: solid var(--syn-border-width-medium) var(--syn-color-neutral-600);
  }

   .switch__control .switch__thumb {
    border: none;
   }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-neutral-900);
    border-color: var(--syn-color-neutral-900);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--syn-color-neutral-0);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-neutral-600);
    border-color: var(--syn-color-neutral-600);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-color-primary-900);
    border-color: var(--syn-color-primary-900);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  .switch__label {
    margin-inline-start: var(--syn-spacing-x-small);
  }
  
  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled) .switch__control {
    background-color: var(--syn-color-error-700);
    border-color: var(--syn-color-error-700);
  }

  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--syn-color-error-900);
    border-color: var(--syn-color-error-900);
  }
  `;var pl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,vt=(e,t,i,s)=>{for(var o=s>1?void 0:s?ul(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&pl(t,i,o),o};let at=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Q(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return h`
      <div
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${f({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${g(this.value)}
            .checked=${Ee(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};at.styles=[x,Wt,cl,qt,hl];vt([u('input[type="checkbox"]')],at.prototype,"input",2);vt([y()],at.prototype,"hasFocus",2);vt([a({reflect:!0})],at.prototype,"title",2);vt([a()],at.prototype,"name",2);vt([a()],at.prototype,"value",2);vt([a({reflect:!0})],at.prototype,"size",2);vt([a({type:Boolean,reflect:!0})],at.prototype,"disabled",2);vt([a({type:Boolean,reflect:!0})],at.prototype,"checked",2);vt([he("checked")],at.prototype,"defaultChecked",2);vt([a({reflect:!0})],at.prototype,"form",2);vt([a({type:Boolean,reflect:!0})],at.prototype,"required",2);vt([a({attribute:"help-text"})],at.prototype,"helpText",2);vt([m("checked",{waitUntilFirstUpdate:!0})],at.prototype,"handleCheckedChange",1);vt([m("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);at=vt([st("SynSwitch")],at);at.define("syn-switch");const ml=(e,t)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...s)},t)}},rs=(e,t,i)=>{const s=e[t];e[t]=function(...o){s.call(this,...o),i.call(this,s,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,i=new WeakMap,s=n=>{for(const r of n.changedTouches)t.add(r.identifier)},o=n=>{for(const r of n.changedTouches)t.delete(r.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),rs(EventTarget.prototype,"addEventListener",function(n,r){if(r!=="scrollend")return;const l=ml(()=>{t.size?l():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",l,{passive:!0}),i.set(this,l)}),rs(EventTarget.prototype,"removeEventListener",function(n,r){if(r!=="scrollend")return;const l=i.get(this);l&&n.call(this,"scroll",l,{passive:!0})})}})();const bl=p`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`;var fl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,eo=(e,t,i,s)=>{for(var o=s>1?void 0:s?yl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&fl(t,i,o),o};class Vi extends _{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}static{this.styles=[x,bl]}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("syn-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const i=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],i.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return h` <slot @slotchange=${this.handleSlotChange}></slot> `}}eo([a({type:Boolean,reflect:!0})],Vi.prototype,"disabled",2);eo([m("disabled",{waitUntilFirstUpdate:!0})],Vi.prototype,"handleDisabledChange",1);const gl=p`
	/* stylelint-disable */
  :host {
    --indicator-color: var(--syn-color-primary-600);
    --track-color: var(--syn-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--syn-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--syn-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-medium);
  }
`,vl=p`
  /* stylelint-disable no-descending-specificity */
  /* Write custom CSS here */
  :host {
    --track-width: var(--syn-border-width-small);
    --track-color: var(--syn-color-neutral-300);
    --indicator-width: var(--syn-border-width-x-large);
  }

  /* we need to augment the size of the height of the tab-group__nav to make the focus outline and the hiding white border visible of the tab because of overflow-x value  */
  .tab-group--top .tab-group__body {
    position: relative;
    top: calc(-1 * var(--syn-panel-border-width));
  }

  .tab-group--top .tab-group__nav {
    padding: 0 0 var(--syn-panel-border-width) 0;
  }

  /**
   * Indicator
   */
  .tab-group--top .tab-group__indicator {
    border-bottom: solid var(--indicator-width) var(--indicator-color);
    bottom: 0;
  }

  .tab-group--start .tab-group__indicator {
    border-right: solid var(--indicator-width) var(--indicator-color);
    right: 0;
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    left: 0;
  }

  .tab-group--end .tab-group__indicator {
    border-inline-start: solid var(--indicator-width) var(--indicator-color);
    left: 0;
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: 0;
  }

  /**
   * Panel
   */
  .tab-group--top ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-large) 0;
  }

  .tab-group--start ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-large);
  }

  .tab-group--end ::slotted(syn-tab-panel) {
    --padding: 0 var(--syn-spacing-large);
  }

  /**
   * Contained styling
   */ 
  .tab-group--contained .tab-group__tabs {
    border: none;
  }

  .tab-group--contained ::slotted(syn-tab-panel) {
    --padding: var(--syn-spacing-large);

    background-color: var(--syn-panel-background-color);
    border: var(--syn-panel-border-width) solid var(--syn-panel-border-color);
    border-radius: var(--syn-border-radius-medium);
  }

  /* Stretch the tab panel container for non-top placements, otherwise the borders are not drawn correctly */
  .tab-group--contained:not(.tab-group--top) ::slotted(syn-tab-panel) {
    height: 100%;
  }

  /* Draw the correct border radii of the panel depending on the placement and direction */
  .tab-group--top.tab-group--contained:not(.tab-group--sharp):not(.tab-group--has-scroll-controls) ::slotted(syn-tab-panel:first-of-type),
  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:first-of-type) {
    border-start-start-radius: var(--syn-border-radius-none);
  }

  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:last-of-type) {
    border-end-start-radius: var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:last-of-type) {
    border-end-end-radius: var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab-panel:first-of-type) {
    border-start-end-radius: var(--syn-border-radius-none);
  }

  .tab-group--contained .tab-group__indicator {
    /* Remove the animation of the indicator */
    transition: none;
    
    /* Needed, otherwise the indicator is hidden under the background of the tab */
    z-index: 2;
  }

  /* Contained styling for tabs */
  .tab-group--contained ::slotted(syn-tab) {
    --background-color: var(--syn-panel-background-color);
    --border-width: var(--syn-panel-border-width);

    position: relative;
    z-index: 1;
  }

  /* Top */
  .tab-group--top.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-medium) var(--syn-border-radius-medium) var(--syn-border-radius-none) var(--syn-border-radius-none);
  }

  .tab-group--top.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-background-color);

    /* We need to move the tab down, so the bottom border, hides parts of the border of the tab-group */
    top: var(--syn-panel-border-width);
  }

  .tab-group--top.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move down the non-active tabs also, so we don't get jumping of the tab text content */
    top: var(--syn-panel-border-width);
  }

  /* Start & End with rtl */
  .tab-group--start.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab),
  .tab-group--end.tab-group--rtl.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-medium) var(--syn-border-radius-none) var(--syn-border-radius-none) var(--syn-border-radius-medium);
  }

  .tab-group--start.tab-group--contained ::slotted(syn-tab[active]),
  .tab-group--end.tab-group--rtl.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-background-color) var(--syn-panel-border-color)  var(--syn-panel-border-color) ;

    /* We need to move the tab right, so the right border, hides parts of the border of the tab-group */
    left: var(--syn-panel-border-width);
    right: unset;
  }

  .tab-group--start.tab-group--contained ::slotted(syn-tab:not([active])),
  .tab-group--end.tab-group--rtl.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move right the non-active tabs also, so we don't get jumping of the tab text content */
    left: var(--syn-panel-border-width);
    right: unset;
  }

  /* End & Start with rtl */
  .tab-group--end.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab),
  .tab-group--start.tab-group--rtl.tab-group--contained:not(.tab-group--sharp) ::slotted(syn-tab) {
    --border-radius: var(--syn-border-radius-none) var(--syn-border-radius-medium) var(--syn-border-radius-medium) var(--syn-border-radius-none);
  }

  .tab-group--end.tab-group--contained ::slotted(syn-tab[active]),
  .tab-group--start.tab-group--rtl.tab-group--contained ::slotted(syn-tab[active]) {
    --border-color: var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-border-color) var(--syn-panel-background-color);

    /* We need to move the tab left, so the left border, hides parts of the border of the tab-group */
    left: unset;
    right: var(--syn-panel-border-width);
  }

  .tab-group--end.tab-group--contained ::slotted(syn-tab:not([active])),
  .tab-group--start.tab-group--rtl.tab-group--contained ::slotted(syn-tab:not([active])) {
    /*  We need to move left the non-active tabs also, so we don't get jumping of the tab text content */
    left: unset;
    right: var(--syn-panel-border-width);
  }


  /**
   * Sharp styling
   */
  .tab-group--sharp ::slotted(syn-tab-panel) {
    border-radius: var(--syn-border-radius-none);
  }


  /**
   * Scroll buttons
   */
  .tab-group--has-scroll-controls .tab-group__nav-container {
    padding: 0 calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button {
    /* we need to move the scroll buttons to the top, to align the borders with the border of the tab-group--nav  */
    bottom: var(--syn-panel-border-width);
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-medium);
    width: calc(var(--syn-spacing-x-large) + var( --syn-spacing-2x-small));
  }

  .tab-group__scroll-button::part(base) {
    padding: calc(var(--syn-spacing-small) - var(--syn-spacing-3x-small));
  }

  /* Make sure the direction of the chevrons match the scrolling directions. */
  .tab-group--has-scroll-controls:not(.tab-group--rtl) .tab-group__scroll-button--start,
  .tab-group--rtl .tab-group__scroll-button--end {
    rotate: 180deg;
  }

  .tab-group--has-scroll-controls:not(.tab-group--contained) .tab-group__scroll-button--start {
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--has-scroll-controls:not(.tab-group--contained) .tab-group__scroll-button--end {
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--rtl:not(.tab-group--contained) .tab-group__scroll-button--start {
    border-bottom: solid var(--track-width) var(--track-color);
    border-top: none;
  }

  .tab-group--rtl:not(.tab-group--contained) .tab-group__scroll-button--end {
    border-bottom: none;
    border-top: solid var(--track-width) var(--track-color);
  }

  /**
   * Shoelace 2.17 introduced a new attribute "fixed-scroll-controls".
   * Per default, tab-groups now hide the scroll buttons when they are not needed.
   * "fixed-scroll-controls" will keep the scroll buttons visible at all times,
   * which is the default behavior of Synergy.
   * For this reason, we make the buttons visible by default, but show them in a "disabled" state when they are not needed.
   */
  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: visible;
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden::part(base),
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden::part(base) {
    opacity: var(--syn-input-disabled-opacity);
    pointer-events: none;
  }
`;var _l=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,dt=(e,t,i,s)=>{for(var o=s>1?void 0:s?wl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&_l(t,i,o),o};class nt extends _{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new j(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}static{this.styles=[x,gl,vl]}static{this.dependencies={"syn-icon-button":ye,"syn-resize-observer":Vi}}connectedCallback(){const t=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(i=>{const s=i.filter(({target:o})=>{if(o===this)return!0;if(o.closest("syn-tab-group")!==this)return!1;const n=o.tagName.toLowerCase();return n==="syn-tab"||n==="syn-tab-panel"});if(s.length!==0){if(s.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(o=>o.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(o=>o.attributeName==="active")){const n=s.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="syn-tab").map(r=>r.target).find(r=>r.active);n&&this.setActiveTab(n)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,o)=>{s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),o.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("syn-tab");s?.closest("syn-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("syn-tab");if(s?.closest("syn-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const n=this.tabs.find(d=>d.matches(":focus")),r=this.localize.dir()==="rtl";let l=null;if(n?.tagName.toLowerCase()==="syn-tab"){if(t.key==="Home")l=this.focusableTabs[0];else if(t.key==="End")l=this.focusableTabs[this.focusableTabs.length-1];else if(["top"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const d=this.tabs.findIndex(c=>c===n);l=this.findNextFocusableTab(d,"backward")}else if(["top"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const d=this.tabs.findIndex(c=>c===n);l=this.findNextFocusableTab(d,"forward")}if(!l)return;l.tabIndex=0,l.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(l,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===l?0:-1}),["top"].includes(this.placement)&&ti(l,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,i){if(i={emitEvents:!0,scrollBehavior:"auto",...i},t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>o.active=o.name===this.activeTab?.panel),this.syncIndicator(),["top"].includes(this.placement)&&ti(this.activeTab,this.nav,"horizontal",i.scrollBehavior),i.emitEvents&&(s&&this.emit("syn-tab-hide",{detail:{name:s.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const i=this.panels.find(s=>s.name===t.panel);i&&(t.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const i=t.clientWidth,s=t.clientHeight,o=this.localize.dir()==="rtl",r=this.tabs.slice(0,this.tabs.indexOf(t)).reduce((l,d)=>({left:l.left+d.clientWidth,top:l.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${i}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${o?"-":""}1 * (${r.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${s}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${r.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,i){let s=null;const o=i==="forward"?1:-1;let n=t+o;for(;t<this.tabs.length;){if(s=this.tabs[n]||null,s===null){i==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;n+=o}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const i=this.tabs.find(s=>s.panel===t);i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}preventFocus(t){t.preventDefault()}render(){return h`
      <div
        part="base"
        class=${f({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?h`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${f({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name="chevron-right"
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToStart}
                ></syn-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <syn-resize-observer @syn-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </syn-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?h`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${f({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name="chevron-right"
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @mousedown=${this.preventFocus}
                  @click=${this.handleScrollToEnd}
                ></syn-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}}dt([Le({slot:"nav",selector:"syn-tab"})],nt.prototype,"tabs",2);dt([Le({selector:"syn-tab-panel"})],nt.prototype,"panels",2);dt([u(".tab-group")],nt.prototype,"tabGroup",2);dt([u(".tab-group__body")],nt.prototype,"body",2);dt([u(".tab-group__nav")],nt.prototype,"nav",2);dt([u(".tab-group__indicator")],nt.prototype,"indicator",2);dt([y()],nt.prototype,"hasScrollControls",2);dt([y()],nt.prototype,"shouldHideScrollStartButton",2);dt([y()],nt.prototype,"shouldHideScrollEndButton",2);dt([a()],nt.prototype,"placement",2);dt([a()],nt.prototype,"activation",2);dt([a({attribute:"no-scroll-controls",type:Boolean})],nt.prototype,"noScrollControls",2);dt([a({type:Boolean})],nt.prototype,"contained",2);dt([a({type:Boolean})],nt.prototype,"sharp",2);dt([a({attribute:"fixed-scroll-controls",type:Boolean})],nt.prototype,"fixedScrollControls",2);dt([wo({passive:!0})],nt.prototype,"updateScrollButtons",1);dt([m("noScrollControls",{waitUntilFirstUpdate:!0})],nt.prototype,"updateScrollControls",1);dt([m("placement",{waitUntilFirstUpdate:!0})],nt.prototype,"syncIndicator",1);nt.define("syn-tab-group");const xl=p`
	/* stylelint-disable */
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,kl=p`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`;var Cl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Mi=(e,t,i,s)=>{for(var o=s>1?void 0:s?zl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Cl(t,i,o),o};let $l=0;class li extends _{constructor(){super(...arguments),this.attrId=++$l,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}static{this.styles=[x,xl,kl]}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return h`
      <slot
        part="base"
        class=${f({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}}Mi([a({reflect:!0})],li.prototype,"name",2);Mi([a({type:Boolean,reflect:!0})],li.prototype,"active",2);Mi([m("active")],li.prototype,"handleActiveChange",1);li.define("syn-tab-panel");const Sl=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    border-radius: var(--syn-border-radius-medium);
    color: var(--syn-color-neutral-600);
    padding: var(--syn-spacing-medium) var(--syn-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: calc(-1 * var(--syn-focus-ring-width) - var(--syn-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--syn-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--syn-font-size-small);
    margin-inline-start: var(--syn-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ol=p`
  /* Write custom CSS here */

  :host {
    --background-color: none;
    --border-width: var(--syn-border-width-none);
    --border-color: none;
    --border-radius: var(--syn-border-radius-none);
  }

  .tab {
    border-color: transparent;
    border-radius: var(--border-radius);
    border-style: solid;
    border-width: var(--border-width);
    color: var(--syn-typography-color-text);
    font: var(--syn-body-small-bold);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);

    /* Stretch the tabs so they are aligned to each other vertically and the focus width stays the same  */
    width: 100%;
  }


  /**
   * Focus
   */
  :host(:focus-visible) {
    outline-offset: calc(var(--syn-focus-ring-offset) * -1);
  }

  :host(:focus-visible:not(.tab--disabled)) {
    color: var(--syn-typography-color-text);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline-offset: calc(var(--syn-focus-ring-offset) * -1);
    }
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-color-primary-700);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--syn-typography-color-text);
  }


  /**
   * Closable
   */
  .tab.tab--closable {
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-large);
  }

  .tab__close-button {
    color: var(--syn-color-neutral-500);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-x-small);
  }

  .tab__close-button::part(base):hover {
    color: var(--syn-color-primary-700);
  }

  .tab--active {
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-style: solid;
    border-width: var(--border-width);
  }

  /* Slotted icon style */
  .tab ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }
`;var Tl=Object.defineProperty,El=Object.getOwnPropertyDescriptor,ie=(e,t,i,s)=>{for(var o=s>1?void 0:s?El(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Tl(t,i,o),o};let Al=0;class Gt extends _{constructor(){super(...arguments),this.localize=new j(this),this.attrId=++Al,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}static{this.styles=[x,Sl,Ol]}static{this.dependencies={"syn-icon-button":ye}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,h`
      <div
        part="base"
        class=${f({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?h`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></syn-icon-button>
            `:""}
      </div>
    `}}ie([u(".tab")],Gt.prototype,"tab",2);ie([a({reflect:!0})],Gt.prototype,"panel",2);ie([a({type:Boolean,reflect:!0})],Gt.prototype,"active",2);ie([a({type:Boolean,reflect:!0})],Gt.prototype,"closable",2);ie([a({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);ie([a({type:Number,reflect:!0})],Gt.prototype,"tabIndex",2);ie([m("active")],Gt.prototype,"handleActiveChange",1);ie([m("disabled")],Gt.prototype,"handleDisabledChange",1);Gt.define("syn-tab");Qt.define("syn-tag");const Dl=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    color: var(--syn-input-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--syn-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly textareas */
  .textarea--readonly {
    border: none;
    background-color: var(--syn-input-readonly-background-color);
    color: var(--syn-input-color);
  }

  .textarea--readonly:hover:not(.textarea--disabled) {
    background-color: var(--syn-input-readonly-background-color-hover);
  }

  .textarea--readonly.textarea--focused:not(.textarea--disabled) {
    background-color: var(--syn-input-readonly-background-color-focus);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .textarea--readonly.textarea--disabled {
    background-color: var(--syn-input-readonly-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--syn-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--syn-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--syn-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--syn-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Il=p`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`;var Pl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,V=(e,t,i,s)=>{for(var o=s>1?void 0:s?Fl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Pl(t,i,o),o};let D=class extends _{constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new Q(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,s="preserve"){const o=t??this.input.selectionStart,n=i??this.input.selectionEnd;this.input.setRangeText(e,o,n,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t;return h`
      <div
        part="form-control"
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${f({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${g(this.name)}
              .value=${Ee(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              rows=${g(this.rows)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              autocapitalize=${g(this.autocapitalize)}
              autocorrect=${g(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${g(this.spellcheck)}
              enterkeyhint=${g(this.enterkeyhint)}
              inputmode=${g(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};D.styles=[x,Wt,Dl,qt,Il];V([u(".textarea__control")],D.prototype,"input",2);V([u(".textarea__size-adjuster")],D.prototype,"sizeAdjuster",2);V([y()],D.prototype,"hasFocus",2);V([a({reflect:!0})],D.prototype,"title",2);V([a()],D.prototype,"name",2);V([a()],D.prototype,"value",2);V([a({reflect:!0})],D.prototype,"size",2);V([a()],D.prototype,"label",2);V([a({attribute:"help-text"})],D.prototype,"helpText",2);V([a()],D.prototype,"placeholder",2);V([a({type:Number})],D.prototype,"rows",2);V([a()],D.prototype,"resize",2);V([a({type:Boolean,reflect:!0})],D.prototype,"disabled",2);V([a({type:Boolean,reflect:!0})],D.prototype,"readonly",2);V([a({reflect:!0})],D.prototype,"form",2);V([a({type:Boolean,reflect:!0})],D.prototype,"required",2);V([a({type:Number})],D.prototype,"minlength",2);V([a({type:Number})],D.prototype,"maxlength",2);V([a()],D.prototype,"autocapitalize",2);V([a()],D.prototype,"autocorrect",2);V([a()],D.prototype,"autocomplete",2);V([a({type:Boolean})],D.prototype,"autofocus",2);V([a()],D.prototype,"enterkeyhint",2);V([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],D.prototype,"spellcheck",2);V([a()],D.prototype,"inputmode",2);V([he()],D.prototype,"defaultValue",2);V([m("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);V([m("rows",{waitUntilFirstUpdate:!0})],D.prototype,"handleRowsChange",1);V([m("value",{waitUntilFirstUpdate:!0})],D.prototype,"handleValueChange",1);D=V([st("SynTextarea")],D);D.define("syn-textarea");ut.define("syn-tooltip");const Ll=["blur","change","clear","focus","invalid","input","move"],io=(e,t)=>e.includes(t),as=e=>io(e,"blur"),ui=e=>io(e,"invalid"),Vl=(e="")=>e.split(" ").map(t=>t.trim()).filter(Boolean),ls=(e,t)=>{const i=t.trim();return e instanceof _&&Ll.includes(i)?`syn-${i}`:i},Ml=p`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`;var Nl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Ct=(e,t,i,s)=>{for(var o=s>1?void 0:s?Bl(t,i):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(s?r(t,i,o):r(o))||o);return s&&o&&Nl(t,i,o),o};let lt=class extends _{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage="")},this.validate=e=>{if(ui(e.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}ui(e.type)&&this.variant!=="native"&&(e.preventDefault(),e.stopPropagation());const t=e.currentTarget;if(this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!as(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!as(e.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){const e=this.slottedChildren[0];return e||void 0}getUsedEventNames(){const e=this.getInput();if(!e)return[];const t=Vl(this.on),[...i]=t.filter(Boolean);return i.includes("invalid")||i.push("invalid"),i.includes("live")&&(i.push("input"),i.push("blur")),Array.from(new Set(i.filter(s=>s!=="live").map(s=>ls(e,s))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const e=this.getInput();if(!e)return;const t=this.getUsedEventNames();t.forEach(s=>{e.addEventListener(s,this.validate,{capture:ui(s),signal:this.controller.signal})});const i=ls(e,"change");t.includes(i)||e.addEventListener(i,this.internalRevalidate,{signal:this.controller.signal})}setValidationMessage(e){const{customValidationMessage:t}=this,i=t||e.validationMessage;this.validationMessage=i}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){const t=document.activeElement,i=t.closest("syn-validate");!t.validity?.valid&&i||(e.scrollIntoView({block:"nearest"}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();const t=this.getInput();this.customValidationMessage&&(t instanceof _&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:s})=>s===t).every(s=>{const o=s.target;return o.hasAttribute("disabled")||o.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(t instanceof _?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect()}renderInlineValidation(){return this.variant!=="inline"||!this.validationMessage?"":h`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        variant="danger"
      >
        ${this.hideIcon?"":h`<syn-icon slot="icon" name="error" library="system"></syn-icon>`}
        ${this.validationMessage}
      </syn-alert>
    `}render(){return h`
      <div
        class="validate"
        part="base"
      >
        <slot
          class="validate__input-wrapper"
          part="input-wrapper"
        ></slot>
        
        ${this.renderInlineValidation()}
      </div>
    `}};lt.styles=[x,Ml];lt.dependencies={"syn-alert":X};Ct([Le()],lt.prototype,"slottedChildren",2);Ct([y()],lt.prototype,"validationMessage",2);Ct([y()],lt.prototype,"eagerFirstMount",2);Ct([y()],lt.prototype,"isInternalTriggeredInvalid",2);Ct([y()],lt.prototype,"isValid",2);Ct([a({reflect:!0})],lt.prototype,"variant",2);Ct([a({attribute:"hide-icon",reflect:!0,type:Boolean})],lt.prototype,"hideIcon",2);Ct([a({reflect:!0})],lt.prototype,"on",2);Ct([a({attribute:"custom-validation-message",type:String})],lt.prototype,"customValidationMessage",2);Ct([a({type:Boolean})],lt.prototype,"eager",2);Ct([m("on",{waitUntilFirstUpdate:!0})],lt.prototype,"handleListenerChange",1);Ct([m("eager",{waitUntilFirstUpdate:!1})],lt.prototype,"handleEagerChange",1);Ct([m("customValidationMessage",{waitUntilFirstUpdate:!0})],lt.prototype,"handleCustomValidationMessageChange",1);lt=Ct([st("SynValidate")],lt);lt.define("syn-validate");function Rl(e){const t=typeof window<"u"&&window;return!!(t&&(/Chromatic/.test(t.navigator.userAgent)||/chromatic=true/.test(t.location.href)))}const Ul=(e,...t)=>Rl()?h`
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
      ${e(...t)}
    `:e(...t),ei="🌞 light",yi="🌙 dark",jl=e=>`https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=${e}`,Hl=(e,t="Go to Figma page")=>({label:t,type:"link",url:jl(e)});function Wl(e,t){const i=document.querySelectorAll(`#anchor--${t.id}`),o=JSON.parse('{"@synergy-design-system/components":"2.34.2","@synergy-design-system/assets":"1.15.1","@synergy-design-system/styles":"1.7.1","@synergy-design-system/tokens":"2.20.0"}');return i.forEach(n=>{const r=n.querySelector(".docblock-code-toggle");if(r){const l=r.cloneNode(!0);l.textContent="Edit on CodePen",l.classList.add("docblock-codepen-button");const d=n.querySelector(".sb-bar");d?n.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.remove()}):n.querySelectorAll(".docblock-codepen-button").forEach(c=>{c.remove()}),r.parentElement.appendChild(l),d&&(n.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.style.display="block",c.style.borderRight="none"}),n.querySelector(".docblock-codepen-button:last-of-type").style.display="none"),l.addEventListener("click",()=>{const c=document.createElement("form");c.action="https://codepen.io/pen/define",c.method="POST",c.target="_blank";const b={css:`/* Import theme */
@import url("https://esm.sh/@synergy-design-system/tokens@${o["@synergy-design-system/tokens"]}/dist/themes/light.css");

/* Import utilities */
@import url("https://esm.sh/@synergy-design-system/components@${o["@synergy-design-system/components"]}/dist/styles/index.css");

/* Import styles */
@import url("https://esm.sh/@synergy-design-system/styles@${o["@synergy-design-system/styles"]}/dist/index.css");

body {
  font-family: var(--syn-font-sans);
}`,css_external:"",description:"",editors:1110,head:'<meta name="viewport" content="width=device-width">',html:e,js:`import * as components from "https://esm.sh/@synergy-design-system/components@${o["@synergy-design-system/components"]}/dist/synergy.js";

// Override to make icons work with CDN
const { registerIconLibrary } = components;

registerIconLibrary("default", {
resolver: (name) =>
\`https://esm.sh/@synergy-design-system/assets@${o["@synergy-design-system/assets"]}/src/icons/\${name}.svg\`
});`,js_external:"",js_module:!0,js_pre_processor:"none",tags:["synergy-design-system","web components"],title:""},k=document.createElement("input");k.type="hidden",k.name="data",k.value=JSON.stringify(b),c.append(k),document.documentElement.append(c),c.submit(),c.remove()})}}),e}const ql=pn({defaultTheme:ei,parentSelector:"body",themes:{[ei]:"syn-theme-light",[yi]:"syn-theme-dark"}}),so={decorators:[Ul,ql],parameters:{backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{diffThreshold:.5,disableSnapshot:!0,modes:{[ei]:{theme:ei},[yi]:{theme:yi}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},design:Hl("104-238"),docs:{stories:{inline:!1},toc:{headingSelector:"h2, h3"},source:{format:"html",transform:(e,t)=>Gl.codeOptimizer(Wl(e,t))}},viewport:{defaultViewport:"defaultViewPort",viewports:{..._n,defaultViewPort:{name:"Default",styles:{width:"100%",height:"100%"},type:"desktop"}}}}},hd=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"}));Xo({hideArgRef:!0,hideScriptTag:!0});Oe.modules&&(Oe.modules=Oe.modules.map(e=>(e.declarations&&(e.declarations=e.declarations.map(t=>(t.members&&(t.members=t.members.filter(i=>i.description&&i.privacy!=="private")),t))),e)));const Kl={...Oe,modules:[...Oe.modules,...So.modules]};xo(Kl);console.log("Custom elements manifest loaded for components and styles");const gi=e=>{const{args:t,events:i,argTypes:s}=ws(e),o=fs(e,window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__),n=()=>({status:{styles:{backgroundColor:o?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${o?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${o?.since}`}});return{args:t,argTypes:(()=>{for(const d in s)s.hasOwnProperty(d)&&s[d].table&&s[d].table.category==="properties"&&(s[d].control={disabled:!0});return{...s,...o?.events?.reduce((d,c)=>(d[c.name]={...c,control:!1,table:{category:"Events"}},d),{}),...o?.members?.filter(d=>d.kind==="method").reduce((d,c)=>(d[c.name]={...c,control:!1,table:{category:"Methods"}},d),{})}})(),parameters:{badges:["status","since"],badgesConfig:n(),actions:{handles:i}}}},me=e=>({getSuffixFromType:t=>({attribute:"",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:i}=gi(e);return i[t]?.control?.type==="boolean"?[!0,!1]:i[t].options},getValuesFromAttributes:t=>t?.map(i=>(i.endsWith("-attr")||(i=`${i}-attr`),{name:i,values:me(e).getValuesFromAttribute(i)})),overrideArgs:(t,i)=>{const s=i||gi(e).args,o=Array.isArray(t)?t:[t];for(const n of o){const r=me(e).getSuffixFromType(n.type);s[`${n.name}${r}`]=n.value}return s}}),pd=e=>{const{template:t,manifest:i}=ws(e),{args:s}=gi(e),{getValuesFromAttribute:o}=me(e);return{generateTemplate:({axis:r,constants:l=[],options:d,args:c=s})=>{const b=C=>{if(!i?.style)return t(C);const R=Object.keys(C).filter(U=>U.endsWith("-attr")).reduce((U,Ft)=>{const zt=Ft.substring(0,Ft.length-5);return C[Ft]===!0?U[zt]=!0:C[Ft]==="false"||C[Ft]==="(default)"?U[zt]=!1:C[Ft]&&(zt.endsWith("...")?U[zt.replace("...",C[Ft])]=!0:U[C[Ft]]=!0),U},{}),Xt=C["default-slot"]||"",oe={[e]:!0,...R},_e=Object.keys(oe).filter(U=>oe[U]).join(" ");if(d?.templateContent){const U=d.templateContent.replaceAll("%SLOT%",Xt).replaceAll("%CLASSES%",_e);return mt(U)}return $`<div class=${f(oe)}>${mt(Xt)}</div>`},k=(Array.isArray(l)?l:[l]).reduce((C,R)=>({...C,[`${R.name}${me(e).getSuffixFromType(R.type)}`]:R.value}),{});if(!r?.x&&!r?.y&&!d?.title)return $`${b({...c,...k})}`;const Y=C=>C?Array.isArray(C)?C.map(R=>({...R,values:R.values||o(R.name)})):[{...C,values:C.values||o(C.name)}]:[{}],Yt=Y(r?.x),Pt=Y(r?.y),se=(Array.isArray(l)?l:[l]).find(C=>C.type==="template")?.value,je=`uuid-${crypto.randomUUID()}`;return $`
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

        ${d?.templateBackground&&`
          .${je}.story-template tbody tr.template-row td.template {
            background: ${d?.templateBackground};
          }
        `}

        ${d?.templateBackgrounds?.colors.map((C,R)=>{const Xt=oe=>`${d?.templateBackgrounds?.colors.length}n + ${oe+1}`;return d?.templateBackgrounds?.alternate==="y"?`
                .${je}.story-template tbody tr.template-row:nth-of-type(${Xt(R)}) td.template {
                  background: ${C};
                }
              `:`
                .${je}.story-template tbody tr.template-row td.template:nth-of-type(${Xt(R)}) {
                  background: ${C};
                }
              `})}
      </style>
      ${Yt.map(C=>$` ${Pt.map(R=>{let Xt=!0;const oe=Yt.length>1||C.values,_e=(C&&R||Pt.length>1)&&R?.values;return $`
            <table class="story-template ${je} ${d?.classes}">
              <thead>
                ${d?.title&&$`<tr>
                  <th class="title" colspan=${(C.values?.length||0)+3}><code>${d?.title}</code></th>
                </tr>`}
                ${C&&C.values&&$`
                  <tr>
                    ${_e?$`<td></td>`:""} <td></td>
                    ${oe&&$`<th colspan=${C.values?.length||0}><code>${C.title||C.name}</code></th>`}
                    </tr>
                  </tr>
                  ${$`
                    <tr>
                      ${_e?$`<td></td>`:""}
                      <td></td>
                      ${C?.values?.map(U=>$`<td><code>${U.title||U}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(R?.values||[""]).map(U=>{const Ft=$`
                    <tr class="template-row">
                      ${Xt&&_e?$`<th rowspan="${R?.values?.length}">
                            <span><code>${R.title||R.name}</code></span>
                          </th>`:""}
                      <th><code>${U.title||U}</code></th>
                      ${(C?.values||[""]).map(zt=>$`
                          <td class="template template-x-${C?.values?.indexOf(zt)||1} template-y-${R?.values?.indexOf(U.value||U)||1}">
                          ${C.type==="template"&&mt((zt.value||zt).split("%TEMPLATE%")[0]||"")||""}
                          ${R.type==="template"&&mt((U.value||U).split("%TEMPLATE%")[0]||"")||""}
                          ${se&&mt(se.split("%TEMPLATE%")[0]||"")||""}
                            ${b({...c,...k,...C&&C.type!=="template"&&{[`${C.name}${me(e).getSuffixFromType(C.type)}`]:zt.hasOwnProperty("value")?zt.value:zt},...R&&R.type!=="template"&&{[`${R.name}${me(e).getSuffixFromType(R.type)}`]:U.hasOwnProperty("value")?U.value:U}})}
                         ${R.type==="template"&&mt((U.value||U).split("%TEMPLATE%")[1]||"")||""}
                         ${C.type==="template"&&mt((zt.value||zt).split("%TEMPLATE%")[1]||"")||""}
                          ${se&&mt(se.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return Xt=!1,Ft})}
              </tbody>
            </table>
          `})}`)}
    `}}},Gl={codeOptimizer:e=>{const{body:t}=new DOMParser().parseFromString(e,"text/html"),i=t.querySelectorAll(".template");let s="";return i.length?s=Array.from(i).map(o=>o.innerHTML).join(`
`):s=t.innerHTML,s=s.replace(/<style><\/style>/g,"").replace(/<!-- preview-ignore:start -->[\s\S]*?<!-- preview-ignore:end -->/g,"").replace(/\/\/ preview-ignore:start[\s\S]*?\/\/ preview-ignore:end/g,"").replace(/<style>\n<\/style>/g,"").replace(/<script>\s*component = document\.querySelector\('(.+?)'\);\s*<\/script>/g,""),s}},ud=(e,t,i="components")=>{const s=ko[i][e]??{},o=s[t]?.description?.value??"No Description",n=s[t]?.note?.value??"",r=c=>c.replace(/\n/g,"<br/>"),l=r(o),d=n?`<br/><br/><strong>👨‍💻 Additional developer Information:</strong><br>${r(n)}`:"";return`${l}${d}`},md=(e,t=150)=>{const i=isNaN(t)?t:{heightPx:t},{afterRender:s="",additionalChromaticOptions:o={},heightPx:n=150,styleHeading:r={}}=i,l=Object.entries(r).map(([d,c])=>`${d}: ${c};`).join(" ");return{parameters:{chromatic:{...so?.parameters?.chromatic,...o,disableSnapshot:!1},docs:{disable:!0}},render:(d,c)=>$`
      ${Object.entries(e).map(([b,k])=>{const Y=k.name??$o(b);return $`
          <div style='height: ${n}px; margin: var(--syn-spacing-small);'>
            <h3 data-chromatic="ignore" style='${l}'>${Y}</h3>
            ${k.render?.(d,c)}
          </div>
      `})}
      ${s}
    `}};export{Hl as a,me as b,pd as c,md as d,hd as e,ud as g,cd as h,Rl as i,so as p,gi as s};
