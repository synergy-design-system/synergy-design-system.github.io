var Vn=Object.freeze,oa=Object.defineProperty;var Hn=(t,e)=>Vn(oa(t,"raw",{value:Vn(e||t.slice())}));import{n as r,c as y,f as pi,s as ue,u as S,e as u,b,o as g,i as zt,t as sa}from"./library-BeKtmk-e.js";import{i as h,x as p,E as hi,u as Bn,B as ra,T as la}from"./directive-helpers-Dvm_Ferq.js";import{a as Pt,k as ui,r as mi,L as da,l as Ot,b as ca,c as pa,d as Rn,f as ha,s as ua,e as ma,p as cn,g as fa,h as ya,o as fi,m as ba,n as ga,j as va,i as wa,t as xa}from"./ref-mC-OfJbg.js";import{s as ka}from"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import{c as k,w as m,S as w,e as ie,a as bt,b as ye,d as _a}from"./icon-button-DQOtW0BE.js";import{d as Ta}from"./index-DrFu-skq.js";import"./index-_2TAQcTa.js";import{m as yi,n as Kt,a as Ca,b as Sa}from"./index-DY0LrIOm.js";const za=h`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`;var Ea=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,dt=(t,e,n,i)=>{for(var a=i>1?void 0:i?$a(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Ea(e,n,a),a};let Pe=class extends w{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=t=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(e=>{e!==t.target&&e.parentNode===t.target.parentNode&&e.removeAttribute("open")})}}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(t=>{t.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(t=>{t.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return p`
      <div 
        part="base"
        class=${y({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Pe.styles=[k,za];dt([Pt({selector:"syn-details"})],Pe.prototype,"detailsInDefaultSlot",2);dt([r({attribute:"close-others",type:Boolean})],Pe.prototype,"closeOthers",2);dt([r({reflect:!0,type:Boolean})],Pe.prototype,"contained",2);dt([r({reflect:!0})],Pe.prototype,"size",2);dt([m("size",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleSizeChange",1);dt([m("contained",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleContainedChange",1);Pe=dt([ie("SynAccordion")],Pe);Pe.define("syn-accordion");class Oa extends ui{host;element;prevData={};render(e){return hi}update(e,[n]){this.element!==e.element&&(this.element=e.element),this.host=e.options?.host||this.element,this.apply(n),this.groom(n),this.prevData={...n}}apply(e){if(!e)return;const{prevData:n,element:i}=this;for(const a in e){const o=e[a];o!==n[a]&&Jt(i,a,o)}}groom(e){const{prevData:n,element:i}=this;if(n)for(const a in n)(!e||!(a in e)&&i[a]===n[a])&&Jt(i,a,void 0)}}class Da extends Oa{eventData={};apply(e){if(e)for(const n in e){const i=e[n];i!==this.eventData[n]&&this.applyEvent(n,i)}}applyEvent(e,n){const{prevData:i,element:a}=this;this.eventData[e]=n,i[e]&&a.removeEventListener(e,this,n),a.addEventListener(e,this,n)}groom(e){const{prevData:n,element:i}=this;if(n)for(const a in n)(!e||!(a in e)&&i[a]===n[a])&&this.groomEvent(a,n[a])}groomEvent(e,n){const{element:i}=this;delete this.eventData[e],i.removeEventListener(e,this,n)}handleEvent(e){const n=this.eventData[e.type];typeof n=="function"?n.call(this.host,e):n.handleEvent(e)}disconnected(){const{eventData:e,element:n}=this;for(const i in e){const a=i.slice(1),o=e[i];n.removeEventListener(a,this,o)}}reconnected(){const{eventData:e,element:n}=this;for(const i in e){const a=i.slice(1),o=e[i];n.addEventListener(a,this,o)}}}class Na extends Da{apply(e){if(!e)return;const{prevData:n,element:i}=this;for(const a in e){const o=e[a];if(o===n[a])continue;const s=a.slice(1);switch(a[0]){case"@":this.eventData[s]=o,this.applyEvent(s,o);break;case".":Jt(i,s,o);break;case"?":o?i.setAttribute(s,""):i.removeAttribute(s);break;default:o?i.setAttribute(a,String(o)):i.removeAttribute(a);break}}}groom(e){const{prevData:n,element:i}=this;if(n)for(const a in n){const o=a.slice(1);if(!e||!(a in e)&&i[o]===n[a])switch(a[0]){case"@":this.groomEvent(o,n[a]);break;case".":Jt(i,o,void 0);break;case"?":i.removeAttribute(o);break;default:i.removeAttribute(a);break}}}}function Jt(t,e,n){try{t[e]=n}catch{console.warn(`Could not set property "${e}" on ${t.tagName} because it has no "setter".`)}}const Ia=pi(Na);let yt={};setTimeout(()=>{yt=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});function bi(t,e){return e.modules?.find(i=>i.declarations?.some(a=>a.tagName===t))?.declarations.find(i=>i.kind==="class"&&i.tagName===t)}function wn(t,e=!0){const n={};return t?.members?.forEach(i=>{if(i.kind!=="field")return;const a=t.attributes?.find(_=>i.name===_.fieldName),o=i.name;if(n[o]={name:o,table:{disable:!0}},i.privacy==="private"||i.privacy==="protected"||i.static)return;const s=a?.name||i.name,l=yt.typeRef&&i[`${yt.typeRef}`]?.text||i?.type?.text,d=wi(l),c=Dt(i.default);n[s]={name:s,description:Tn(i.description,o,i.deprecated),defaultValue:c==="''"?"":c,control:e?{type:vi(d,a!==void 0)}:!1,table:{category:a?"attributes":"properties",defaultValue:{summary:c},type:{summary:l}}};const f=d?.split("|");f&&f?.length>1&&(n[s].options=f.map(_=>Dt(_)))}),n}function Aa(t,e=!0){const n={};return t?.members?.forEach(i=>{if(i.kind!=="field"||(n[i.name]={name:i.name,table:{disable:!0}},i.privacy==="private"||i.privacy==="protected"||i.static))return;const a=yt.typeRef&&i[`${yt.typeRef}`]?.text||i?.type?.text,o=wi(a),s=`${i.name}`,l=vi(o);n[s]={name:i.name,description:i.description,defaultValue:Pa(l,i.default),control:e?{type:l}:!1,table:{category:"properties",defaultValue:{summary:Dt(i.default)},type:{summary:a}}};const d=o?.split("|");d&&d?.length>1&&(n[s].options=d.map(c=>Dt(c)))}),delete n.ref,n}function gi(t){const e={};return t?.events?.forEach(n=>{const i=Fa(n.name);e[i]={name:i,description:n.description,control:!1,table:{category:"events"}}}),e}function xn(t,e=!0){const n={};return t?.cssProperties?.forEach(i=>{n[i.name]={name:i.name,description:i.description,defaultValue:i.default,control:e?{type:i.name.toLowerCase().includes("color")?"color":"text"}:!1,table:{category:"css properties"}}}),n}function kn(t,e=!0){const n={};return t?.cssParts?.forEach(i=>{n[i.name]={name:i.name,table:{disable:!0}},n[`${i.name}-part`]={name:i.name,description:Tn(i.description,e?`${i.name}-part`:""),defaultValue:`${t?.tagName}::part(${i.name}) {
}`,control:e?"text":!1,table:{category:"css shadow parts"}}}),n}function _n(t,e=!0){const n={};return t?.slots?.forEach(i=>{n[i.name]={name:i.name,table:{disable:!0}};const a=i.name||"default";n[`${a}-slot`]={control:"text",name:a,description:Tn(i.description,`${a}-slot`),defaultValue:a==="default"?"":`<span slot="${a}"></span>`,control:e?"text":!1,table:{category:"slots"}}}),n}function Ma(t){const e={};return t?.events?.forEach(n=>{e[n.name]={name:n.name,description:n.description,control:!1,table:{category:"events",type:{summary:`CustomEvent${n.type?`<${n.type.text}>`:""}`}}}}),e}function Pa(t,e){const n=Dt(e);return t==="boolean"?n==="true":n==="''"?"":n}function vi(t,e=!1){if(!t)return"text";const n=t.toLowerCase(),i=n.split("|").map(a=>a.trim()).filter(a=>a!==""&&a!=="null"&&a!=="undefined");return La(n)&&!e?"object":Ut(i,"boolean")?"boolean":Ut(i,"number")&&!Ut(i,"string")&&i.every(a=>!a.includes("'"))?"number":Ut(i,"date")?"date":i.length>1&&i.every(a=>a.includes("'"))?"select":"text"}function La(t){return t.includes("array")||t.includes("object")||t.includes("{")||t.includes("[")||t.includes("<")}function Ut(t=[],e){return t?.find(n=>n===e)!==void 0}function wi(t){return t?t.replace(" | undefined","").replace(" | null",""):""}function Dt(t){return t?.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function Tn(t,e,n){let i="";return n&&(i+=`\`@deprecated\` ${n}`),t&&(i+=i?`


`:"",i+=t),yt.hideArgRef||!e?i:i+=`


arg ref - \`${e}\``}const Fa=t=>`on${Va(ja(t))}`;function ja(t=""){return t.split("-").map((i,a)=>a?i.charAt(0).toUpperCase()+i.slice(1).toLowerCase():i.toLowerCase()).join("")}function Va(t){return t.charAt(0).toUpperCase()+t.slice(1)}const{useArgs:Ha}=__STORYBOOK_MODULE_PREVIEW_API__;let Qt,Un,Cn={};setTimeout(()=>{Cn=globalThis?.__WC_STORYBOOK_HELPERS_CONFIG__||{}});var ci;function Ba(t,e,n,i){if(!e)return S`<${ue(t.tagName)}></${ue(t.tagName)}>`;t?.tagName!==Un&&(Qt=void 0,Un=t?.tagName);const{attrOperators:a,additionalAttrs:o}=Ra(t,e,i),s={...a,...o},l=qa(t,e),d=Ua(t,e);return Ka(t),S`${xi(t,e)}
<${ue(t.tagName)} 
  ${Ia(s)}
  ${d}
  >
    ${l}${n||""}
</${ue(t.tagName)}>
${Cn.hideScriptTag?"":S(ci||(ci=Hn([`<script>
  window.component = document.querySelector("`,`");
<\/script>`])),t.tagName)}
`}function xi(t,e){const n=Wa(t,e);return`${n}`?.replaceAll(/\s+/g,"")!=""?S`<style>${n}</style>`:""}function Ra(t,e,n){const i=wn(t),a={},o={},s={};return Object.keys(i).forEach(l=>{const d=i[l];if(d?.table?.category!=="attributes")return;const c=d.name,f=e[l],_=d.control.type==="boolean"?`?${c}`:c;(f!==i[l].defaultValue||Cn.renderDefaultAttributeValues)&&(a[_]=f==="false"?!1:f)}),Object.keys(e).filter(l=>i[l]?.table?.category==="properties").forEach(l=>{if(l.startsWith("on"))return;const d=e[l];o[`.${l}`]=d}),Object.keys(e).filter(l=>!Object.keys(n||{}).includes(l)).forEach(l=>{!l.startsWith("on")&&typeof e[l]!="function"&&(s[l]=e[l])}),{attrOperators:a,propOperators:o,additionalAttrs:s}}function Ua(t,e){if(!t?.cssProperties?.length)return;const n=xn(t);return ue(`style="${Object.keys(n).map(i=>{const a=n[i].name,o=e[i];return o?`${a}: ${o||""}`:null}).filter(i=>i!==null).join(";")}"`)}function Wa(t,e){const n=kn(t);if(!Object.keys(n).some(o=>!!e[o]))return;const a=Object.keys(n).filter(o=>o.endsWith("-part")).map(o=>{const s=n[o].name,l=e[o];return l?.replaceAll(/\s+/g,"")!==`${t?.tagName}::part(${s}){}`?`
${l}`:null}).filter(o=>o!==null).join(`
`);return a?ue(`${a}
`):""}function qa(t,e){const n=_n(t);return ue(`${Object.keys(n).filter(a=>a.endsWith("-slot")).map(a=>{const o=n[a].name,s=e[a];return o==="default"?s||null:s!==`<span slot="${o}"></span>`?s:null}).filter(a=>a!==null).join("")}`)}function Ka(t){Ga(t),setTimeout(()=>{const e=document.querySelector(t.tagName);Qt?.observe(e,{attributes:!0})})}function Ga(t){let e=!1;const n=Ha()[1],i=wn(t);Qt||(Qt=new MutationObserver(a=>{a.forEach(o=>{if(o.type!=="attributes"||o.attributeName==="class"&&e)return;e=!0;const s=i[`${o.attributeName}`];s?.control==="boolean"||s?.control?.type==="boolean"?n({[`${o.attributeName}`]:o.target?.hasAttribute(o.attributeName||"")}):n({[`${o.attributeName}`]:o.target.getAttribute(o.attributeName||"")}),e=!1})}))}function Ya(t){window.__WC_STORYBOOK_HELPERS_CONFIG__=t}function ki(t){const e=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!e)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const n=bi(t,e),i=n?.events?.map(o=>o.name)||[],a=_i(n);return{args:Ti(n),argTypes:a,reactArgs:Ja(n),reactArgTypes:Ci(n),events:i,styleTemplate:o=>xi(n,o),template:(o,s)=>Ba(n,o,s,a)}}function _i(t){return{...xn(t),...kn(t),..._n(t),...wn(t),...Ma(t)}}function Ti(t,e){return e||(e=_i(t)),Object.entries(e).filter(([,i])=>i?.control).map(([i,a])=>{let o=Xa(a.defaultValue);return a.table?.category==="css properties"&&(o=o?.toString()),{[i]:o===void 0?"":o}}).reduce((i,a)=>({...i,...a}),{})}function Xa(t){try{return JSON.parse(t)}catch{return t}}function Ci(t){return{...Aa(t),...gi(t),...xn(t,!1),...kn(t,!1),..._n(t,!1)}}function Ja(t){const e=Ti(t,Ci(t)),n=Object.entries(gi(t)).map(([i])=>({[i]:()=>{}})).reduce((i,a)=>({...i,...a}),{});return{...e,...n}}const{useParameter:Qa,addons:Za,useEffect:eo,useMemo:od,definePreview:sd}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:to}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var no=Object.defineProperty,Si=(t,e)=>{for(var n in e)no(t,n,{get:e[n],enumerable:!0})},io={};Si(io,{initialGlobals:()=>so});var Zt="themes",ao=`storybook/${Zt}`,zi="theme",Wn={},oo={REGISTER_THEMES:`${ao}/REGISTER_THEMES`},so={[zi]:""},ro={};Si(ro,{initializeThemeState:()=>$i,pluckThemeFromContext:()=>Ei,useThemeParameters:()=>lo});function Ei({globals:t}){return t[zi]||""}function lo(t){return to(Ta`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),t?t.parameters[Zt]??Wn:Qa(Zt,Wn)}function $i(t,e){Za.getChannel().emit(oo.REGISTER_THEMES,{defaultTheme:e,themes:t})}var co="html",qn=t=>t.split(" ").filter(Boolean),po=({themes:t,defaultTheme:e,parentSelector:n=co})=>($i(Object.keys(t),e),(i,a)=>{let{themeOverride:o}=a.parameters[Zt]??{},s=Ei(a);return eo(()=>{let l=o||s||e,d=document.querySelector(n);if(!d)return;Object.entries(t).filter(([f])=>f!==l).forEach(([f,_])=>{let Y=qn(_);Y.length>0&&d.classList.remove(...Y)});let c=qn(t[l]);c.length>0&&d.classList.add(...c)},[o,s]),i()});const{definePreview:rd}=__STORYBOOK_MODULE_PREVIEW_API__;var ho=Object.defineProperty,uo=(t,e)=>{for(var n in e)ho(t,n,{get:e[n],enumerable:!0})},mo={};uo(mo,{initialGlobals:()=>go});var fo="viewport",yo={[fo]:{value:void 0,isRotated:!1}},bo={viewport:"reset",viewportRotated:!1},go=globalThis.FEATURES?.viewportStoryGlobals?yo:bo,vo={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};function W(t,e,n){return new Promise(i=>{if(n?.duration===1/0)throw new Error("Promise-based animations must be finite.");const a=t.animate(e,{...n,duration:wo()?0:n.duration});a.addEventListener("cancel",i,{once:!0}),a.addEventListener("finish",i,{once:!0})})}function Kn(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function wo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Q(t){return Promise.all(t.getAnimations().map(e=>new Promise(n=>{e.cancel(),requestAnimationFrame(n)})))}function Gn(t,e){return t.map(n=>({...n,height:n.height==="auto"?`${e}px`:n.height}))}const Sn=t=>{const{activeElement:e}=document;e&&t.contains(e)&&document.activeElement?.blur()},Oi=new Map,fn=new WeakMap;function Di(t){return t??{keyframes:[],options:{duration:0}}}function Yn(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function E(t,e){Oi.set(t,Di(e))}function Wt(t,e,n){fn.set(t,{...fn.get(t),[e]:Di(n)})}function F(t,e,n){const i=fn.get(t);if(i?.[e])return Yn(i[e],n.dir);const a=Oi.get(e);return a?Yn(a,n.dir):{keyframes:[],options:{duration:0}}}class J{constructor(e,...n){this.slotNames=[],this.handleSlotChange=i=>{const a=i.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=n}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const n=e;if(n.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!n.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}function Ni(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let n="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(n+=i.textContent)}),n}const Ii={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Choose file",fileButtonTextMultiple:"Choose files",folderButtonText:"Choose folder",fileDragDrop:"Drop or choose file",folderDragDrop:"Drop or choose folder",menu:"Menu",notification:"Notification",numFilesSelected:(t,e)=>t===0?`No ${e?"folder":"files"} chosen`:`${t} files`,openMenu:"Open menu",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Side navigation",sideNavHide:"Hide navigation",sideNavShow:"Show navigation",success:"Success",warning:"Warning"};mi(Ii);class R extends da{static{mi(Ii)}}function Z(t,e){return new Promise(n=>{function i(a){a.target===t&&(t.removeEventListener(e,i),n())}t.addEventListener(e,i)})}const xo=h`
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
`,ko=h`
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
`;var _o=Object.defineProperty,To=Object.getOwnPropertyDescriptor,Le=(t,e,n,i)=>{for(var a=i>1?void 0:i?To(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&_o(e,n,a),a};let X=class extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"icon","suffix"),this.localize=new R(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"syn-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",n="0";this.countdownAnimation=t.animate([{width:e},{width:n}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await Q(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=F(this,"alert.show",{dir:this.localize.dir()});await W(this.base,t,e),this.emit("syn-after-show")}else{Sn(this),this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Q(this.base);const{keyframes:t,options:e}=F(this,"alert.hide",{dir:this.localize.dir()});await W(this.base,t,e),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),X.toastStack.parentElement===null&&document.body.append(X.toastStack),X.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{X.toastStack.removeChild(this),t(),X.toastStack.querySelector("syn-alert")===null&&X.toastStack.remove()},{once:!0})})}render(){return p`
      <div
        part="base"
        class=${y({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?p`
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

        ${this.countdown?p`
              <div
                class=${y({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};X.styles=[k,xo,ko];X.dependencies={"syn-icon-button":bt};Le([u('[part~="base"]')],X.prototype,"base",2);Le([u(".alert__countdown-elapsed")],X.prototype,"countdownElement",2);Le([r({type:Boolean,reflect:!0})],X.prototype,"open",2);Le([r({type:Boolean,reflect:!0})],X.prototype,"closable",2);Le([r({reflect:!0})],X.prototype,"variant",2);Le([r({type:Number})],X.prototype,"duration",2);Le([b()],X.prototype,"remainingTime",2);Le([m("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);Le([m("duration")],X.prototype,"handleDurationChange",1);X=Le([ie("SynAlert")],X);E("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});E("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});X.define("syn-alert");const Co=h`
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
`,So=h`
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
`;var zo=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,Ai=(t,e,n,i)=>{for(var a=i>1?void 0:i?Eo(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&zo(e,n,a),a};let Nt=class extends w{constructor(){super(...arguments),this.localize=new R(this),this.variant="primary"}render(){return p`
      <span
        part="base"
        class=${y({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}};Nt.styles=[k,Co,So];Ai([r({reflect:!0})],Nt.prototype,"variant",2);Nt=Ai([ie("SynBadge")],Nt);Nt.define("syn-badge");const $o=h`
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
`,Oo=h`
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
`;var Do=Object.defineProperty,No=Object.getOwnPropertyDescriptor,gt=(t,e,n,i)=>{for(var a=i>1?void 0:i?No(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Do(e,n,a),a};class ct extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}static{this.styles=[k,$o,Oo]}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.tagName.toLowerCase()==="syn-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return p`
      <div
        part="base"
        class=${y({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?p`
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
        ${this.renderType==="button"?p`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?p`
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
    `}}gt([u("slot:not([name])")],ct.prototype,"defaultSlot",2);gt([b()],ct.prototype,"renderType",2);gt([r()],ct.prototype,"href",2);gt([r()],ct.prototype,"target",2);gt([r()],ct.prototype,"rel",2);gt([m("href",{waitUntilFirstUpdate:!0})],ct.prototype,"hrefChanged",1);ct.define("syn-breadcrumb-item");const Io=h`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ao=h`
  /* Write custom CSS here */
`;var Mo=Object.defineProperty,zn=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&Mo(e,n,a),a};class nn extends w{constructor(){super(...arguments),this.localize=new R(this),this.separatorDir=this.localize.dir(),this.label=""}static{this.styles=[k,Io,Ao]}static{this.dependencies={"syn-icon":ye}}getSeparator(){const n=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[n,...n.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),n.setAttribute("data-default",""),n.slot="separator",n}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(n=>n.tagName.toLowerCase()==="syn-breadcrumb-item");e.forEach((n,i)=>{const a=n.querySelector('[slot="separator"]');a===null?n.append(this.getSeparator()):a.hasAttribute("data-default")&&a.replaceWith(this.getSeparator()),i===e.length-1?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),p`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}}zn([u("slot")],nn.prototype,"defaultSlot");zn([u('slot[name="separator"]')],nn.prototype,"separatorSlot");zn([r()],nn.prototype,"label");nn.define("syn-breadcrumb");const Po=h`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Lo=Object.defineProperty,En=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&Lo(e,n,a),a};class Lt extends w{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=[k,Po]}handleFocus(e){xt(e.target)?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(e){xt(e.target)?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(e){xt(e.target)?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(e){xt(e.target)?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(n=>{const i=e.indexOf(n),a=xt(n);a&&(a.toggleAttribute("data-syn-button-group__button",!0),a.toggleAttribute("data-syn-button-group__button--first",i===0),a.toggleAttribute("data-syn-button-group__button--inner",i>0&&i<e.length-1),a.toggleAttribute("data-syn-button-group__button--last",i===e.length-1),a.toggleAttribute("data-syn-button-group__button--radio",a.tagName.toLowerCase()==="syn-radio-button"))})}render(){return p`
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
    `}}En([u("slot")],Lt.prototype,"defaultSlot");En([b()],Lt.prototype,"disableRole");En([r()],Lt.prototype,"label");function xt(t){const e="syn-button, syn-radio-button";return t.closest(e)??t.querySelector(e)}Lt.define("syn-button-group");const kt=new WeakMap,_t=new WeakMap,Tt=new WeakMap,pn=new WeakSet,qt=new WeakMap;class Fe{constructor(e,n){this.handleFormData=i=>{const a=this.options.disabled(this.host),o=this.options.name(this.host),s=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";if(this.host.isConnected&&!a&&!l&&typeof o=="string"&&o.length>0&&typeof s<"u"){if(s instanceof FileList){const d=s;for(const c of d)i.formData.append(o,c,c.name);return}Array.isArray(s)?s.forEach(d=>{i.formData.append(o,d.toString())}):i.formData.append(o,s.toString())}},this.handleFormSubmit=i=>{const a=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&kt.get(this.form)?.forEach(s=>{this.setUserInteracted(s,!0)}),this.form&&!this.form.noValidate&&!a&&!o(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),qt.set(this.host,[])},this.handleInteraction=i=>{const a=qt.get(this.host);a.includes(i.type)||a.push(i.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:i=>{const a=i.form;if(a){const s=i.getRootNode().querySelector(`#${a}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,a)=>i.value=a,assumeInteractionOn:["syn-input"],...n}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),qt.set(this.host,[]),this.options.assumeInteractionOn.forEach(n=>{this.host.addEventListener(n,this.handleInteraction)})}hostDisconnected(){this.detachForm(),qt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,kt.has(this.form)?kt.get(this.form).add(this.host):kt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_t.has(this.form)||(_t.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Tt.has(this.form)||(Tt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=kt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_t.has(this.form)&&(this.form.reportValidity=_t.get(this.form),_t.delete(this.form)),Tt.has(this.form)&&(this.form.checkValidity=Tt.get(this.form),Tt.delete(this.form)),this.form=void 0))}setUserInteracted(e,n){n?pn.add(e):pn.delete(e),e.requestUpdate()}doAction(e,n){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",n&&(i.name=n.name,i.value=n.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{n.hasAttribute(a)&&i.setAttribute(a,n.getAttribute(a))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const n=this.host,i=!!pn.has(n),a=!!n.required;n.toggleAttribute("data-required",a),n.toggleAttribute("data-optional",!a),n.toggleAttribute("data-invalid",!e),n.toggleAttribute("data-valid",e);const o=n.parentElement;if(o&&o.tagName.toLocaleUpperCase()==="SYN-VALIDATE"){const s=o.getValidity();n.toggleAttribute("data-user-invalid",!e&&!s)}else n.toggleAttribute("data-user-invalid",!e&&i);n.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const n=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||n.preventDefault(),this.host.dispatchEvent(n)||e?.preventDefault()}}const Ft=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Fo=Object.freeze({...Ft,valid:!1,valueMissing:!0}),Mi=Object.freeze({...Ft,valid:!1,customError:!0}),jo=h`
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
`,Vo=h`
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
`;class $n extends w{constructor(){super(...arguments),this.localize=new R(this)}static{this.styles=[k,jo,Vo]}render(){return p`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const Pi=h`
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
`,Ho=h`
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
`;var Bo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,U=(t,e,n,i)=>{for(var a=i>1?void 0:i?Ro(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Bo(e,n,a),a};let A=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new J(this,"[default]","prefix","suffix"),this.localize=new R(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ft}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){const t=Ni(this.defaultSlot).trim(),e=this.defaultSlot.assignedElements({flatten:!0}),n=e.length===1&&e[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=n&&t===""}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?zt`a`:zt`button`;return S`
      <${e}
        part="base"
        class=${y({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:this.type)}
        title=${this.title}
        name=${g(t?void 0:this.name)}
        value=${g(t?void 0:this.value)}
        href=${g(t&&!this.disabled?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t?this.rel:void 0)}
        role=${g(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${y({button__label:!0,"button__icon-only":this.iconOnly})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?S` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?S`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${e}>
    `}};A.styles=[k,Pi,Ho];A.dependencies={"syn-icon":ye,"syn-spinner":$n};U([u(".button")],A.prototype,"button",2);U([u("slot:not([name])")],A.prototype,"defaultSlot",2);U([b()],A.prototype,"iconOnly",2);U([b()],A.prototype,"hasFocus",2);U([b()],A.prototype,"invalid",2);U([r({reflect:!0})],A.prototype,"title",2);U([r({reflect:!0})],A.prototype,"variant",2);U([r({reflect:!0})],A.prototype,"size",2);U([r({type:Boolean,reflect:!0})],A.prototype,"caret",2);U([r({type:Boolean,reflect:!0})],A.prototype,"disabled",2);U([r({type:Boolean,reflect:!0})],A.prototype,"loading",2);U([r()],A.prototype,"type",2);U([r()],A.prototype,"name",2);U([r()],A.prototype,"value",2);U([r()],A.prototype,"href",2);U([r()],A.prototype,"target",2);U([r()],A.prototype,"rel",2);U([r()],A.prototype,"download",2);U([r()],A.prototype,"form",2);U([r({attribute:"formaction"})],A.prototype,"formAction",2);U([r({attribute:"formenctype"})],A.prototype,"formEnctype",2);U([r({attribute:"formmethod"})],A.prototype,"formMethod",2);U([r({attribute:"formnovalidate",type:Boolean})],A.prototype,"formNoValidate",2);U([r({attribute:"formtarget"})],A.prototype,"formTarget",2);U([m("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1);A=U([ie("SynButton")],A);A.define("syn-button");const Uo=h`
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
`,Wo=h`
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

`;var qo=Object.defineProperty,Ko=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&qo(e,n,a),a};class Li extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"footer","header","image"),this.sharp=!1}static{this.styles=[k,Uo,Wo]}render(){return p`
      <div
        part="base"
        class=${y({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}Ko([r({type:Boolean,reflect:!0})],Li.prototype,"sharp");Li.define("syn-card");const pt=(t="value")=>(e,n)=>{const i=e.constructor,a=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,s,l){const d=i.getPropertyOptions(t),c=typeof d.attribute=="string"?d.attribute:t;if(o===c){const f=d.converter||Bn,Y=(typeof f=="function"?f:f?.fromAttribute??Bn.fromAttribute)(l,d.type);this[t]!==Y&&(this[n]=Y)}a.call(this,o,s,l)}},We=h`
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
`,qe=h` 

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
`,Go=h`
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
`,Yo=h`
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
`;var Xo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,ce=(t,e,n,i)=>{for(var a=i>1?void 0:i?Jo(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Xo(e,n,a),a};let ee=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new J(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return p`
      <div
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${y({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${g(this.value)}
            .indeterminate=${Ot(this.indeterminate)}
            .checked=${Ot(this.checked)}
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
            ${this.checked?p`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?p`
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
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ee.styles=[k,We,Go,qe,Yo];ee.dependencies={"syn-icon":ye};ce([u('input[type="checkbox"]')],ee.prototype,"input",2);ce([b()],ee.prototype,"hasFocus",2);ce([r({reflect:!0})],ee.prototype,"title",2);ce([r()],ee.prototype,"name",2);ce([r()],ee.prototype,"value",2);ce([r({reflect:!0})],ee.prototype,"size",2);ce([r({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);ce([r({type:Boolean,reflect:!0})],ee.prototype,"checked",2);ce([r({type:Boolean,reflect:!0})],ee.prototype,"indeterminate",2);ce([pt("checked")],ee.prototype,"defaultChecked",2);ce([r({reflect:!0})],ee.prototype,"form",2);ce([r({type:Boolean,reflect:!0})],ee.prototype,"required",2);ce([r({attribute:"help-text"})],ee.prototype,"helpText",2);ce([m("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);ce([m(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ee.prototype,"handleStateChange",1);ee=ce([ie("SynCheckbox")],ee);ee.define("syn-checkbox");const Qo=h`
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
`;var Zo=Object.defineProperty,G=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&Zo(e,n,a),a};function es(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}class P extends w{constructor(){super(...arguments),this.localize=new R(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),n=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let a=0,o=0,s=0,l=0,d=0,c=0,f=0,_=0;i?e.top<n.top?(a=e.left,o=e.bottom,s=e.right,l=e.bottom,d=n.left,c=n.top,f=n.right,_=n.top):(a=n.left,o=n.bottom,s=n.right,l=n.bottom,d=e.left,c=e.top,f=e.right,_=e.top):e.left<n.left?(a=e.right,o=e.top,s=n.left,l=n.top,d=e.right,c=e.bottom,f=n.left,_=n.bottom):(a=n.right,o=n.top,s=e.left,l=e.top,d=n.right,c=n.bottom,f=e.left,_=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${f}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${_}px`)}}}static{this.styles=[k,Qo]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||es(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ca(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[pa({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Rn({apply:({rects:i})=>{const a=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(ha({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ua({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Rn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ma({element:this.arrowEl,padding:this.arrowPadding}));const n=this.strategy==="absolute"?i=>cn.getOffsetParent(i,fa):cn.getOffsetParent;ya(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:{...cn,getOffsetParent:n}}).then(({x:i,y:a,middlewareData:o,placement:s})=>{const l=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){const c=o.arrow.x,f=o.arrow.y;let _="",Y="",Ye="",Ae="";if(this.arrowPlacement==="start"){const Be=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";_=typeof f=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",Y=l?Be:"",Ae=l?"":Be}else if(this.arrowPlacement==="end"){const Be=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";Y=l?"":Be,Ae=l?Be:"",Ye=typeof f=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(Ae=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",_=typeof f=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(Ae=typeof c=="number"?`${c}px`:"",_=typeof f=="number"?`${f}px`:"");Object.assign(this.arrowEl.style,{top:_,right:Y,bottom:Ye,left:Ae,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return p`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${y({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${y({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?p`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}G([u(".popup")],P.prototype,"popup");G([u(".popup__arrow")],P.prototype,"arrowEl");G([r()],P.prototype,"anchor");G([r({type:Boolean,reflect:!0})],P.prototype,"active");G([r({reflect:!0})],P.prototype,"placement");G([r({reflect:!0})],P.prototype,"strategy");G([r({type:Number})],P.prototype,"distance");G([r({type:Number})],P.prototype,"skidding");G([r({type:Boolean})],P.prototype,"arrow");G([r({attribute:"arrow-placement"})],P.prototype,"arrowPlacement");G([r({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding");G([r({type:Boolean})],P.prototype,"flip");G([r({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],P.prototype,"flipFallbackPlacements");G([r({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy");G([r({type:Object})],P.prototype,"flipBoundary");G([r({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding");G([r({type:Boolean})],P.prototype,"shift");G([r({type:Object})],P.prototype,"shiftBoundary");G([r({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding");G([r({attribute:"auto-size"})],P.prototype,"autoSize");G([r()],P.prototype,"sync");G([r({type:Object})],P.prototype,"autoSizeBoundary");G([r({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding");G([r({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge");const ts=h`
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
`,ns=h`
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
`,is=(t,e)=>{const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(n,"g");return t.replace(i,"_")};var as=Object.defineProperty,os=Object.getOwnPropertyDescriptor,je=(t,e,n,i)=>{for(var a=i>1?void 0:i?os(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&as(e,n,a),a};class Oe extends w{constructor(){super(...arguments),this.localize=new R(this),this.isInitialized=!1,this.delimiter=" ",this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[k,ts,ns]}static{this.dependencies={"syn-icon":ye}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?(customElements.whenDefined("syn-combobox").then(()=>{const e=this.closest("syn-combobox");e&&e.handleDefaultSlotChange()}),customElements.whenDefined("syn-select").then(()=>{const e=this.closest("syn-select");e&&e.handleDefaultSlotChange()})):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){if(typeof this.value=="number")return;typeof this.value!="string"&&(this.value=String(this.value));const{delimiter:e}=this;this.value.includes(e)&&(console.error(`Option values cannot include "${e}". All occurrences of "${e}" have been replaced with "_".`,this),this.value=is(this.value,this.delimiter))}getTextLabel(){const e=this.childNodes;let n="";return[...e].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(n+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(n+=i.textContent)}),n.trim()}render(){return p`
      <div
        part="base"
        class=${y({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}je([u(".option__label")],Oe.prototype,"defaultSlot",2);je([b()],Oe.prototype,"delimiter",2);je([b()],Oe.prototype,"current",2);je([b()],Oe.prototype,"selected",2);je([b()],Oe.prototype,"hasHover",2);je([r({reflect:!0})],Oe.prototype,"value",2);je([r({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);je([m("disabled")],Oe.prototype,"handleDisabledChange",1);je([m("selected")],Oe.prototype,"handleSelectedChange",1);je([m("value")],Oe.prototype,"handleValueChange",1);const ss=h`
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
`,Fi=h`
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
`,rs=h`
  .combobox:not(.combobox--disabled) .combobox__display-input {
    cursor: text;
  }

  .listbox__options ::slotted(syn-option[hidden]), 
  .listbox__options ::slotted(syn-optgroup[hidden]) {
    display: none;
  }

  ${Fi}
`,Xn=t=>Array.from(t.assignedElements({flatten:!0})),ls=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:Array.from(t.querySelectorAll(":scope > syn-option")),ds=t=>t.tagName.toLocaleLowerCase()==="syn-optgroup",Jn=t=>t.map(ls),cs=t=>t.filter(ds),Qn=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Zn=t=>{const e=document.createElement("div");return ra(t,e),e.firstElementChild},hn=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:void 0,ps=t=>{if(t){if(t instanceof HTMLElement)return hn(t);if(typeof t=="string"){const e=p`${fi(t)}`,n=Zn(e);return hn(n)}if(Object.prototype.hasOwnProperty.call(t,"_$litType$")){const e=Zn(t);return hn(e)}}};function hs(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}const yn=new Set;function us(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ms(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Et(t){if(yn.add(t),!document.documentElement.classList.contains("syn-scroll-lock")){const e=us()+ms();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),e<2&&(n=""),document.documentElement.style.setProperty("--syn-scroll-lock-gutter",n),document.documentElement.classList.add("syn-scroll-lock"),document.documentElement.style.setProperty("--syn-scroll-lock-size",`${e}px`)}}function ft(t){yn.delete(t),yn.size===0&&(document.documentElement.classList.remove("syn-scroll-lock"),document.documentElement.style.removeProperty("--syn-scroll-lock-size"))}function en(t,e,n="vertical",i="smooth"){const a=hs(t,e),o=a.top+e.scrollTop,s=a.left+e.scrollLeft,l=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,c=e.scrollTop,f=e.scrollTop+e.offsetHeight;(n==="horizontal"||n==="both")&&(s<l?e.scrollTo({left:s,behavior:i}):s+t.clientWidth>d&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:i})),(n==="vertical"||n==="both")&&(o<c?e.scrollTo({top:o,behavior:i}):o+t.clientHeight>f&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:i}))}const fs=t=>t,ld=(t,e)=>{if(!e)return t;const n=t.cloneNode(!0),i=n.getTextLabel(),a=i.toLowerCase().indexOf(e.toLowerCase()),o=n.innerHTML.indexOf(i),s=document.createElement("mark");s.textContent=i.slice(a,a+e.length),s.classList.add("syn-highlight-style");const l=i.replace(new RegExp(e,"i"),s.outerHTML),d=n.innerHTML.slice(0,o),c=n.innerHTML.slice(o+i.length);return n.innerHTML=d.concat(l,c),n};var ys=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,I=(t,e,n,i)=>{for(var a=i>1?void 0:i?bs(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&ys(e,n,a),a};let $=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new J(this,"help-text","label"),this.localize=new R(this),this.lastOptionValue="",this.isOptionRendererTriggered=!1,this.isInitialized=!1,this.hasFocus=!1,this.displayLabel="",this.numberFilteredOptions=0,this.cachedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getOption=fs,this.filter=(t,e)=>{let n=t?.textContent||"";t instanceof Oe&&(n=t.getTextLabel());const i=Qn(n),a=Qn(e);return i.includes(a)?!0:t?.value===e},this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{if(t.target.closest(".combobox__clear")===null){if(t.key==="Escape"&&(this.open&&!this.closeWatcher?(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||this.clearCombobox()),t.key==="Enter"){const i=this.getCurrentOption(),a=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;if(!this.open&&!a){setTimeout(()=>{t.defaultPrevented||this.formControlController.submit()});return}if(!this.open||i&&i.disabled)return;if(i){const o=this.lastOptionValue;this.setSelectedOption(i),this.value!==o&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})}this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),this.open||this.show(),this.selectNextOption(t.key==="ArrowDown")),["Home","End"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),t.key==="Home"?this.displayInput.setSelectionRange(0,0):t.key==="End"&&this.displayInput.setSelectionRange(this.displayInput.value.length,this.displayInput.value.length))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}willUpdate(t){super.willUpdate(t),!this.isInitialized&&!this.defaultValue&&this.value&&(this.defaultValue=this.value)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){if(this.disabled)return;const e=()=>this.open?this.hide():this.show();t.preventDefault(),e().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(t){t.key!=="Tab"&&this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.clearCombobox()}clearCombobox(){this.value!==""&&(this.value="",this.displayInput.value="",this.lastOptionValue="",this.setSelectedOption(void 0),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const n=t.target.closest("syn-option"),i=this.lastOptionValue;n&&!n.disabled&&(this.setSelectedOption(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.hide(),this.displayInput.focus({preventScroll:!0}))}selectNextOption(t){const e=this.getAllFilteredOptions();if(e.length===0)return;const n=this.getCurrentOption(),i=e.indexOf(n);let a=Math.max(0,i);if(t){const o=i+1;a=o>e.length-1?0:o}else{const o=i-1;a=o<0?e.length-1:o}this.setCurrentOption(e[a]),en(this.getCurrentOption(),this.listbox,"vertical","auto")}getAllFilteredOptions(){return this.getSlottedOptions().filter(t=>!t.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(t=>t.current)}setCurrentOption(t){const e=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),e.forEach(n=>{n.current=!1,n.setAttribute("aria-selected","false")}),t&&(t.current=!0,t.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",t.id))}setSelectedOption(t){this.selectedOption=t;let e;this.selectedOption?.value?e=String(this.selectedOption.value):e=this.selectedOption?.getTextLabel(),t&&(this.lastOptionValue=e||""),this.value=e??this.displayInput.value,this.updateComplete.then(()=>{this.displayLabel=this.selectedOption?.getTextLabel()??this.displayInput.value,this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.value)}handleDisabledChange(){this.formControlController.setValidity(this.disabled),this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){this.updateSelectedOptionFromValue(),this.setCurrentOption(null)}async handleOpenChange(){if(this.open&&!this.disabled){if(this.numberFilteredOptions===0){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await Q(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:n,options:i}=F(this,"combobox.show",{dir:this.localize.dir()});await W(this.popup.popup,n,i),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await Q(this);const{keyframes:t,options:e}=F(this,"combobox.hide",{dir:this.localize.dir()});await W(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Promise.race([Z(this,"syn-after-show"),Z(this,"syn-error")])}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Z(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(t){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(n=>{const i=this.cachedOptions.find(l=>l.id===n.id)||n,a=this.getOption(i,t);let o=ps(a);o||(o=i);const s=!(this.filter(o,t)||t==="");o.hidden=s,n.replaceWith(o),s||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(n=>{const a=Jn(Array.from(n.children)).flat().some(o=>!o.hidden);return n.hidden=!a,a})[0]?.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1},0)}async handleInput(){const t=this.displayInput.value;this.value=t,await this.updateComplete,this.open=this.numberFilteredOptions>0,this.setSelectedOption(void 0),this.formControlController.updateValidity(),this.emit("syn-input")}handleChange(){this.selectedOption||(this.value=this.displayInput.value,this.updateComplete.then(()=>{this.formControlController.updateValidity()}),this.emit("syn-change"))}getSlottedOptions(){return Jn(Xn(this.defaultSlot)).flat()}getSlottedOptGroups(){return cs(Xn(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const t=this.getSlottedOptions(),e=this.getSlottedOptGroups();t.forEach((n,i)=>{n.id=n.id||`syn-combobox-option-${i}`}),e.forEach((n,i)=>{n.id=n.id||`syn-combobox-optgroup-${i}`}),this.cachedOptions=[...t]}updateSelectedOptionFromValue(){const t=this.cachedOptions.find(e=>e.value!==""&&e.value===this.value||e.getTextLabel()===this.value);t||(this.displayInput.value=this.value),this.setSelectedOption(t),this.createComboboxOptionsFromQuery(this.value)}handleDefaultSlotChange(){const e=this.getSlottedOptions().length,n=this.cachedOptions.length;if(!this.isOptionRendererTriggered||n!==e){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());return}this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue(),this.hasFocus&&this.value.length>0&&!this.open&&this.show()}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=this.label?!0:!!t,i=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value.length===0;return p`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--has-help-text":i,"form-control--has-label":n,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${y({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--open":this.open,"combobox--placeholder-visible":o,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--top":this.placement==="top"})}
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
       
              ${a?p`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$.styles=[k,We,ss,qe,rs];$.dependencies={"syn-icon":ye,"syn-popup":P};I([u(".combobox")],$.prototype,"popup",2);I([u(".combobox__inputs")],$.prototype,"combobox",2);I([u(".combobox__display-input")],$.prototype,"displayInput",2);I([u(".combobox__value-input")],$.prototype,"valueInput",2);I([u(".combobox__listbox")],$.prototype,"listbox",2);I([u("slot:not([name])")],$.prototype,"defaultSlot",2);I([b()],$.prototype,"hasFocus",2);I([b()],$.prototype,"displayLabel",2);I([b()],$.prototype,"selectedOption",2);I([b()],$.prototype,"numberFilteredOptions",2);I([b()],$.prototype,"cachedOptions",2);I([r()],$.prototype,"name",2);I([r()],$.prototype,"value",2);I([pt()],$.prototype,"defaultValue",2);I([r({reflect:!0})],$.prototype,"size",2);I([r()],$.prototype,"placeholder",2);I([r({reflect:!0,type:Boolean})],$.prototype,"disabled",2);I([r({type:Boolean})],$.prototype,"clearable",2);I([r({reflect:!0,type:Boolean})],$.prototype,"open",2);I([r({type:Boolean})],$.prototype,"hoist",2);I([r()],$.prototype,"label",2);I([r({reflect:!0})],$.prototype,"placement",2);I([r({attribute:"help-text"})],$.prototype,"helpText",2);I([r({reflect:!0})],$.prototype,"form",2);I([r({reflect:!0,type:Boolean})],$.prototype,"required",2);I([r()],$.prototype,"getOption",2);I([r()],$.prototype,"filter",2);I([m(["filter","getOption"],{waitUntilFirstUpdate:!0})],$.prototype,"handlePropertiesChange",1);I([m("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);I([m("value",{waitUntilFirstUpdate:!0})],$.prototype,"handleValueChange",1);I([m("open",{waitUntilFirstUpdate:!0})],$.prototype,"handleOpenChange",1);$=I([ie("SynCombobox")],$);E("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});E("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});$.define("syn-combobox");const gs=h`
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
`,vs=h`
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
`;var ws=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,De=(t,e,n,i)=>{for(var a=i>1?void 0:i?xs(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&ws(e,n,a),a};let me=class extends w{constructor(){super(...arguments),this.localize=new R(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size="medium"}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("syn-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Q(this.body);const{keyframes:e,options:n}=F(this,"details.show",{dir:this.localize.dir()});await W(this.body,Gn(e,this.body.scrollHeight),n),this.body.style.height="auto",this.emit("syn-after-show")}else{if(this.emit("syn-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Q(this.body);const{keyframes:e,options:n}=F(this,"details.hide",{dir:this.localize.dir()});await W(this.body,Gn(e,this.body.scrollHeight),n),this.body.style.height="auto",this.details.open=!1,this.emit("syn-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Z(this,"syn-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Z(this,"syn-after-hide")}render(){return p`
      <details
        part="base"
        class=${y({details:!0,"details--size-medium":this.size==="medium","details--size-large":this.size==="large","details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
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
    `}};me.styles=[k,gs,vs];me.dependencies={"syn-icon":ye};De([u(".details")],me.prototype,"details",2);De([u(".details__header")],me.prototype,"header",2);De([u(".details__body")],me.prototype,"body",2);De([u(".details__expand-icon-slot")],me.prototype,"expandIconSlot",2);De([r({type:Boolean,reflect:!0})],me.prototype,"open",2);De([r()],me.prototype,"summary",2);De([r({type:Boolean,reflect:!0})],me.prototype,"disabled",2);De([r({type:Boolean,reflect:!0})],me.prototype,"contained",2);De([r({reflect:!0})],me.prototype,"size",2);De([m("open",{waitUntilFirstUpdate:!0})],me.prototype,"handleOpenChange",1);me=De([ie("SynDetails")],me);E("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});E("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});me.define("syn-details");function*On(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*On(t.shadowRoot.activeElement)))}function ji(){return[...On()].pop()}const ei=new WeakMap;function Vi(t){let e=ei.get(t);return e||(e=window.getComputedStyle(t,null),ei.set(t,e)),e}function ks(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Vi(t);return e.visibility!=="hidden"&&e.display!=="none"}function _s(t){const e=Vi(t),{overflowY:n,overflowX:i}=e;return n==="scroll"||i==="scroll"?!0:n!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&n==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Ts(t){const e=t.tagName.toLowerCase(),n=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(n)||n<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const o=t.getRootNode(),s=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=o.querySelector(`${s}:checked`);return l?l===t:o.querySelector(s)===t}return ks(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:_s(t):!1}function Cs(t){const e=bn(t),n=e[0]??null,i=e[e.length-1]??null;return{start:n,end:i}}function Ss(t,e){return t.getRootNode({composed:!0})?.host!==e}function bn(t){const e=new WeakMap,n=[];function i(a){if(a instanceof Element){if(a.hasAttribute("inert")||a.closest("[inert]")||e.has(a))return;e.set(a,!0),!n.includes(a)&&Ts(a)&&n.push(a),a instanceof HTMLSlotElement&&Ss(a,t)&&a.assignedElements({flatten:!0}).forEach(o=>{i(o)}),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&i(a.shadowRoot)}for(const o of a.children)i(o)}return i(t),n.sort((a,o)=>{const s=Number(a.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-s})}let Ct=[];class Hi{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=n=>{if(n.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=ji();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;n.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const a=bn(this.element);let o=a.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const s=this.tabDirection==="forward"?1:-1;for(;;){o+s>=a.length?o=0:o+s<0?o=a.length-1:o+=s,this.previousFocus=this.currentFocus;const l=a[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;n.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const d=[...On()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Ct.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ct=Ct.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ct[Ct.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=bn(this.element);if(!this.element.matches(":focus-within")){const n=e[0],i=e[e.length-1],a=this.tabDirection==="forward"?n:i;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}const zs=h`
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
`,Es=h`
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
`;var $s=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,ht=(t,e,n,i)=>{for(var a=i>1?void 0:i?Os(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&$s(e,n,a),a};class Qe extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"footer"),this.localize=new R(this),this.modal=new Hi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[k,zs,Es]}static{this.dependencies={"syn-icon-button":bt}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Et(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ft(this),this.removeOpenListeners()}requestClose(e){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=F(this,"dialog.denyClose",{dir:this.localize.dir()});W(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Et(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Q(this.dialog),Q(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const n=F(this,"dialog.show",{dir:this.localize.dir()}),i=F(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([W(this.panel,n.keyframes,n.options),W(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{Sn(this),this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Q(this.dialog),Q(this.overlay)]);const e=F(this,"dialog.hide",{dir:this.localize.dir()}),n=F(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([W(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),W(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ft(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return p`
      <div
        part="base"
        class=${y({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":p`
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
    `}}ht([u(".dialog")],Qe.prototype,"dialog",2);ht([u(".dialog__panel")],Qe.prototype,"panel",2);ht([u(".dialog__overlay")],Qe.prototype,"overlay",2);ht([r({type:Boolean,reflect:!0})],Qe.prototype,"open",2);ht([r({reflect:!0})],Qe.prototype,"label",2);ht([r({attribute:"no-header",type:Boolean,reflect:!0})],Qe.prototype,"noHeader",2);ht([m("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);E("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});E("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});E("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});E("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});E("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Qe.define("syn-dialog");const Ds=h`
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
`,Ns=h`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var Is=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Bi=(t,e,n,i)=>{for(var a=i>1?void 0:i?As(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Is(e,n,a),a};class Ze extends w{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[k,Ds,Ns]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}Bi([r({type:Boolean,reflect:!0})],Ze.prototype,"vertical",2);Bi([m("vertical")],Ze.prototype,"handleVerticalChange",1);Ze.define("syn-divider");function ti(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ms=h`
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
`,Ps=h`
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
`;var Ls=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,Ne=(t,e,n,i)=>{for(var a=i>1?void 0:i?Fs(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Ls(e,n,a),a};class ze extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"footer"),this.localize=new R(this),this.modal=new Hi(this),this.isVisible=!1,this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=[k,Ms,Ps]}static{this.dependencies={"syn-icon-button":bt}}firstUpdated(){this.drawer.hidden=this.isVisible?!1:!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Et(this)))}disconnectedCallback(){super.disconnectedCallback(),ft(this),this.removeOpenListeners()}requestClose(e){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=F(this,"drawer.denyClose",{dir:this.localize.dir()});W(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Et(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Q(this.drawer),Q(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const n=F(this,`drawer.show${ti(this.placement)}`,{dir:this.localize.dir()}),i=F(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([W(this.panel,n.keyframes,n.options),W(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{Sn(this),this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ft(this)),await Promise.all([Q(this.drawer),Q(this.overlay)]);const e=F(this,`drawer.hide${ti(this.placement)}`,{dir:this.localize.dir()}),n=F(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([W(this.overlay,n.keyframes,n.options).then(()=>{this.overlay.hidden=!0}),W(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!this.isVisible,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Et(this)),this.open&&this.contained&&(this.modal.deactivate(),ft(this))}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}forceVisibility(e){this.isVisible=e,this.drawer.hidden=e?!1:!this.open}render(){return p`
      <div
        part="base"
        class=${y({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":p`
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
    `}}Ne([b()],ze.prototype,"isVisible",2);Ne([u(".drawer")],ze.prototype,"drawer",2);Ne([u(".drawer__panel")],ze.prototype,"panel",2);Ne([u(".drawer__overlay")],ze.prototype,"overlay",2);Ne([r({type:Boolean,reflect:!0})],ze.prototype,"open",2);Ne([r({reflect:!0})],ze.prototype,"label",2);Ne([r({reflect:!0})],ze.prototype,"placement",2);Ne([r({type:Boolean,reflect:!0})],ze.prototype,"contained",2);Ne([r({attribute:"no-header",type:Boolean,reflect:!0})],ze.prototype,"noHeader",2);Ne([m("open",{waitUntilFirstUpdate:!0})],ze.prototype,"handleOpenChange",1);Ne([m("contained",{waitUntilFirstUpdate:!0})],ze.prototype,"handleNoModalChange",1);E("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});E("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});E("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});E("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});E("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});E("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});E("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});E("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});E("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});E("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});E("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ze.define("syn-drawer");const js=h`
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
`,Vs=h`
  /* Write custom CSS here */
`;var Hs=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,Ee=(t,e,n,i)=>{for(var a=i>1?void 0:i?Bs(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Hs(e,n,a),a};class be extends w{constructor(){super(...arguments),this.localize=new R(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="syn-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const n=(i,a)=>{if(!i)return null;const o=i.closest(a);if(o)return o;const s=i.getRootNode();return s instanceof ShadowRoot?n(s.host,a):null};setTimeout(()=>{const i=this.containingElement?.getRootNode()instanceof ShadowRoot?ji():document.activeElement;(!this.containingElement||n(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const n=e.composedPath();this.containingElement&&!n.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const n=e.target;!this.stayOpenOnSelect&&n.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[k,js,Vs]}static{this.dependencies={"syn-popup":P}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const n=this.getMenu();if(n){const i=n.getAllItems(),a=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(n.setCurrentItem(a),a.focus()),(e.key==="ArrowUp"||e.key==="End")&&(n.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const n=this.trigger.assignedElements({flatten:!0}).find(a=>Cs(a).start);let i;if(n){switch(n.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":i=n.button;break;default:i=n}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("syn-select",this.handlePanelSelect),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await Q(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:n}=F(this,"dropdown.show",{dir:this.localize.dir()});await W(this.popup.popup,e,n),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await Q(this);const{keyframes:e,options:n}=F(this,"dropdown.hide",{dir:this.localize.dir()});await W(this.popup.popup,e,n),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return p`
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
        class=${y({dropdown:!0,"dropdown--open":this.open})}
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
    `}}Ee([u(".dropdown")],be.prototype,"popup",2);Ee([u(".dropdown__trigger")],be.prototype,"trigger",2);Ee([u(".dropdown__panel")],be.prototype,"panel",2);Ee([r({type:Boolean,reflect:!0})],be.prototype,"open",2);Ee([r({reflect:!0})],be.prototype,"placement",2);Ee([r({type:Boolean,reflect:!0})],be.prototype,"disabled",2);Ee([r({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],be.prototype,"stayOpenOnSelect",2);Ee([r({attribute:!1})],be.prototype,"containingElement",2);Ee([r({type:Number})],be.prototype,"distance",2);Ee([r({type:Number})],be.prototype,"skidding",2);Ee([r({type:Boolean})],be.prototype,"hoist",2);Ee([r({reflect:!0})],be.prototype,"sync",2);Ee([m("open",{waitUntilFirstUpdate:!0})],be.prototype,"handleOpenChange",1);E("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});E("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});be.define("syn-dropdown");const Rs=h`
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
`;var Us=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,q=(t,e,n,i)=>{for(var a=i>1?void 0:i?Ws(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Us(e,n,a),a};let j=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{assumeInteractionOn:["syn-change"],value:t=>t.files}),this.hasSlotController=new J(this,"help-text","label"),this.localize=new R(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(t){this.input&&(this.input.files=t)}get files(){return this.input?.files}set value(t){this.input&&(this.input.value=t)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){if(this.droparea){this.dropareaWrapper?.focus(t);return}this.button?.focus(t)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFiles(t){if(!t){this.value="";return}this.files=t}async handleTransferItems(t){if(!t)return this.value="",new Promise((s,l)=>{l(new Error("No proper items found"))});const n=Array.from(t).map(s=>s.webkitGetAsEntry()).map(s=>this.getFilesFromEntry(s)),a=(await Promise.all(n)).flat(),o=new DataTransfer;return Array.from(a).forEach(s=>o.items.add(s)),o.files}async getFilesFromEntry(t){return t?t.isFile?new Promise((e,n)=>{t.file(i=>e([i]),n)}):t.isDirectory?new Promise((e,n)=>{t.createReader().readEntries(a=>{Promise.all(a.map(o=>this.getFilesFromEntry(o))).then(o=>{e(o.flat())}).catch(n)})}):[]:[]}handleClick(t){t.preventDefault(),this.input.click()}handleChange(t){t.preventDefault(),t.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(t){t.preventDefault(),t.stopPropagation(),this.userIsDragging=!0}handleDragLeave(t){t.preventDefault(),t.stopPropagation(),this.userIsDragging=!1}async handleDrop(t){if(t.preventDefault(),t.stopPropagation(),!t.dataTransfer)return;const e=await this.handleTransferItems(t.dataTransfer?.items);if(this.userIsDragging=!1,!e)return;if(!this.multiple&&!this.webkitdirectory&&e.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(e);else{const i=F(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),a=F(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const o=F(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});W(this.dropareaIcon,o.keyframes,o.options)}await W(this.inputChosen,i.keyframes,i.options),this.handleFiles(e),await W(this.inputChosen,a.keyframes,a.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){let t=!1,e=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&this.files?.length>0&&(t=!0,e=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),p`
      <span
        class=${y({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!t})}
        part="value"
      >
        ${e}
      </span>
    `}renderDroparea(){return p`
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
    `}renderButton(){let t=this.localize.term("fileButtonText");return this.multiple&&(t=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(t=this.localize.term("folderButtonText")),p`
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
          ${t}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){const t=this.label||!!this.hasSlotController.test("label"),e=this.helpText?!0:!!this.hasSlotController.test("help-text"),n=!!this.hasSlotController.test("trigger");return p`
      <div
        class=${y({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":e,"form-control--has-label":t,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${n?p`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:p`
              <label
                aria-hidden=${t?"false":"true"}
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
                aria-hidden=${e?"false":"true"}
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
    `}};j.styles=[k,We,qe,Rs];j.dependencies={"syn-button":A,"syn-icon":ye};q([b()],j.prototype,"userIsDragging",2);q([r({type:Object})],j.prototype,"files",1);q([r({type:String})],j.prototype,"name",2);q([r({type:String})],j.prototype,"value",1);q([pt()],j.prototype,"defaultValue",2);q([r({reflect:!0})],j.prototype,"size",2);q([r()],j.prototype,"label",2);q([r({attribute:"help-text"})],j.prototype,"helpText",2);q([r({reflect:!0,type:Boolean})],j.prototype,"disabled",2);q([r({type:Boolean})],j.prototype,"droparea",2);q([r({type:String})],j.prototype,"accept",2);q([r({type:String})],j.prototype,"capture",2);q([r({reflect:!0,type:Boolean})],j.prototype,"multiple",2);q([r({reflect:!0,type:Boolean})],j.prototype,"webkitdirectory",2);q([r({reflect:!0})],j.prototype,"form",2);q([r({reflect:!0,type:Boolean})],j.prototype,"required",2);q([r({attribute:"hide-value",type:Boolean})],j.prototype,"hideValue",2);q([u(".input__control")],j.prototype,"input",2);q([u(".button")],j.prototype,"button",2);q([u(".droparea")],j.prototype,"dropareaWrapper",2);q([u(".droparea__icon")],j.prototype,"dropareaIcon",2);q([u(".input__value")],j.prototype,"inputChosen",2);q([m("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);q([m("value",{waitUntilFirstUpdate:!0})],j.prototype,"handleValueChange",1);j=q([ie("SynFile")],j);E("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});E("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});E("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});j.define("syn-file");const qs=h`
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
`;ye.define("syn-icon");var Ks=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,an=(t,e,n,i)=>{for(var a=i>1?void 0:i?Gs(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Ks(e,n,a),a};class jt extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new R(this),this.isSideNavAnimating=!1,this.label="",this.burgerMenu="hidden"}static{this.styles=[k,qs]}static{this.dependencies={"syn-icon":ye}}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&this.sideNav.variant==="default"&&!this.isSideNavAnimating&&(this.sideNav.open=!this.sideNav.open),this.isSideNavAnimating||this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.variant!=="default"?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}handleBurgerMenu(){const e=`syn-burger-menu-${this.burgerMenu}`;this.emit(e)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){this.updateComplete.then(()=>{const e=document.querySelector("syn-side-nav");this.connectSideNavigation(e)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(e){if(this.mutationObserver.disconnect(),this.sideNav=e||document.querySelector("syn-side-nav"),this.sideNav){this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","variant"],attributes:!0});const n=()=>{this.isSideNavAnimating=!0},i=()=>{this.isSideNavAnimating=!1};this.sideNav.addEventListener("syn-show",n),this.sideNav.addEventListener("syn-hide",n),this.sideNav.addEventListener("syn-after-show",i),this.sideNav.addEventListener("syn-after-hide",i)}}render(){const e=this.hasSlotController.test("navigation"),n=this.burgerMenu!=="hidden";return S`
      <header
        class=${y({header:!0,"header--has-burger-menu":n,"header--has-navigation":e})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${n?S`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?S`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:S`
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
    `}}an([r()],jt.prototype,"label",2);an([r({attribute:"burger-menu",reflect:!0})],jt.prototype,"burgerMenu",2);an([b()],jt.prototype,"sideNav",2);an([m("burgerMenu",{waitUntilFirstUpdate:!0})],jt.prototype,"handleBurgerMenu",1);jt.define("syn-header");class Ys extends ui{constructor(e){if(super(e),this.handlePointerDown=n=>{n.button!==0||this.host.disabled||this.spinOnLongPressCallback(n)},this.handlePointerUp=n=>{n?.preventDefault(),n?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},e.type!==sa.ELEMENT||!(e.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(e){return hi}update(e,[n]){return this.callbacks===void 0&&this.host===void 0&&(this.host=e.element,this.callbacks={...n},this.host.addEventListener("pointerdown",this.handlePointerDown)),la}reconnected(){this.host.addEventListener("pointerdown",this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(e){e.preventDefault(),e.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(n=>{n.forEach(i=>{i.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const ni=pi(Ys),Xs=h`
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
`,Js=h`
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
`,Qs=(t,e,n={})=>{const{maximumFractionDigits:i,minimumFractionDigits:a,...o}=n,l=(e==="any"||!e?1:+e).toString().split(".")[1]?.length||0;let d,c;const f=typeof a=="number",_=typeof i=="number";return f&&!_?(d=a,c=a):_&&!f?(d=i,c=i):f&&_&&(d=Math.min(a,i),c=Math.max(a,i)),l>(d||0)&&(d=l),l>(c||0)&&(c=l),typeof d<"u"&&d>100&&(d=100),typeof c<"u"&&c>100&&(c=100),new Intl.NumberFormat("en-US",{maximumFractionDigits:c,minimumFractionDigits:d,useGrouping:!1,...o}).format(t)};var Zs=Object.defineProperty,er=Object.getOwnPropertyDescriptor,Ri=t=>{throw TypeError(t)},C=(t,e,n,i)=>{for(var a=i>1?void 0:i?er(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Zs(e,n,a),a},Dn=(t,e,n)=>e.has(t)||Ri("Cannot "+n),Re=(t,e,n)=>(Dn(t,e,"read from private field"),n?n.call(t):e.get(t)),ii=(t,e,n)=>e.has(t)?Ri("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),un=(t,e,n,i)=>(Dn(t,e,"write to private field"),e.set(t,n),n),ot=(t,e,n)=>(Dn(t,e,"access private method"),n),we,Ue,Gt,St;let x=class extends w{constructor(){super(...arguments),ii(this,Ue),this.formControlController=new Fe(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new J(this,"help-text","label","prefix","suffix"),this.localize=new R(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0,ii(this,we,Kt)}set numericStrategy(t){switch(typeof t){case"string":un(this,we,t==="modern"?yi:Kt);break;case"object":un(this,we,Ca(t));break;default:un(this,we,Kt)}}get numericStrategy(){return Re(this,we)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return this.valueAsNumber<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return this.valueAsNumber>=t}handleNumericStrategyAutoClamp(){const{valueAsNumber:t,max:e,min:n}=this;if(!Re(this,we).autoClamp)return{eventObj:null,shouldClamp:!1,nextValue:t};const i=typeof n=="string"?parseFloat(n):n,a=typeof e=="string"?parseFloat(e):e;let o=t,s="";o<i?(o=i,s="min"):o>a&&(o=a,s="max");const l=s?{detail:{clampedTo:s,lastUserValue:t}}:null;return{eventObj:l,shouldClamp:!!l,nextValue:o}}handleChange(){if(this.type==="number"&&(ot(this,Ue,St).call(this)||Re(this,we).autoClamp)){const{eventObj:t,shouldClamp:e,nextValue:n}=this.handleNumericStrategyAutoClamp();let i=Re(this,we).autoClamp?n:this.valueAsNumber;if(isNaN(i)){const{max:a,min:o}=this;a!=null?i=typeof a=="string"?parseFloat(a):+a:o!=null?i=typeof o=="string"?parseFloat(o):+o:i=0}this.value=ot(this,Ue,St).call(this)?ot(this,Ue,Gt).call(this,i):i.toString(),this.updateComplete.then(()=>{e&&t&&this.emit("syn-clamp",t),this.formControlController.updateValidity(),this.emit("syn-change")});return}this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){if(Re(this,we).noStepAlign&&this.type==="number"){const{key:n}=t;if(n==="ArrowUp"||n==="ArrowDown"){t.preventDefault(),t.stopPropagation(),n==="ArrowUp"?this.handleStepUp():n==="ArrowDown"&&this.handleStepDown(),this.handleChange();return}}const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){Re(this,we).noStepValidation||(this.input.step=String(this.step),this.formControlController.updateValidity())}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const a=e??this.input.selectionStart,o=n??this.input.selectionEnd;this.input.setRangeText(t,a,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){if(Re(this,we).noStepAlign){const{max:t,step:e,valueAsNumber:n}=this,i=Number.isNaN(n)?0:n,a=typeof this.min=="string"?parseFloat(this.min):this.min,o=typeof t=="string"?parseFloat(t):t,s=typeof e>"u"||e===null||e==="any"?1:typeof e=="number"?e:parseFloat(e);let l=i+s;typeof o=="number"&&o<l?l=o:typeof a=="number"&&a>l&&(l=a);const d=ot(this,Ue,St).call(this)?ot(this,Ue,Gt).call(this,l):l.toString();this.input.value=d,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){if(Re(this,we).noStepAlign){const{min:t,max:e,step:n,valueAsNumber:i}=this,a=Number.isNaN(i)?0:i,o=typeof t=="string"?parseFloat(t):t,s=typeof e=="string"?parseFloat(e):e,l=typeof n>"u"||n===null||n==="any"?1:typeof n=="number"?n:parseFloat(n);let d=a-l;typeof o=="number"&&o>d?d=o:typeof s=="number"&&s<d&&(d=s);const c=ot(this,Ue,St).call(this)?ot(this,Ue,Gt).call(this,d):d.toString();this.input.value=c,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=this.hasSlotController.test("prefix"),i=this.hasSlotController.test("suffix"),a=this.label?!0:!!t,o=this.helpText?!0:!!e,l=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return p`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":a,"form-control--has-help-text":o,"form-control--has-prefix":n,"form-control--has-suffix":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${y({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              step=${g(Re(this,we).noStepValidation?"any":this.step)}
              .value=${Ot(this.value)}
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

            ${l?p`
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
            ${this.passwordToggle&&!this.disabled?p`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?p`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:p`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?p`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${ni({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${ni({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};we=new WeakMap;Ue=new WeakSet;Gt=function(t){return Qs(t,this.step,{maximumFractionDigits:this.maxFractionDigits,minimumFractionDigits:this.minFractionDigits,...this.numberFormatterOptions})};St=function(){const{numberFormatterOptions:t,maxFractionDigits:e,minFractionDigits:n,step:i}=this,a=typeof e<"u"&&!Number.isNaN(e),o=typeof n<"u"&&!Number.isNaN(n);return a||o||typeof t=="object"?!0:((i==="any"||!i?1:+i).toString().split(".")[1]?.length||0)>0};x.styles=[k,We,Xs,qe,Js];x.dependencies={"syn-icon":ye,"syn-divider":Ze};C([u(".input__control")],x.prototype,"input",2);C([b()],x.prototype,"hasFocus",2);C([r({reflect:!0})],x.prototype,"title",2);C([r({reflect:!0})],x.prototype,"type",2);C([r()],x.prototype,"name",2);C([r()],x.prototype,"value",2);C([pt()],x.prototype,"defaultValue",2);C([r({reflect:!0})],x.prototype,"size",2);C([r()],x.prototype,"label",2);C([r({attribute:"help-text"})],x.prototype,"helpText",2);C([r({type:Boolean})],x.prototype,"clearable",2);C([r({type:Boolean,reflect:!0})],x.prototype,"disabled",2);C([r()],x.prototype,"placeholder",2);C([r({type:Boolean,reflect:!0})],x.prototype,"readonly",2);C([r({attribute:"password-toggle",type:Boolean})],x.prototype,"passwordToggle",2);C([r({attribute:"password-visible",type:Boolean})],x.prototype,"passwordVisible",2);C([r({attribute:"no-spin-buttons",type:Boolean})],x.prototype,"noSpinButtons",2);C([r({reflect:!0})],x.prototype,"form",2);C([r({type:Boolean,reflect:!0})],x.prototype,"required",2);C([r()],x.prototype,"pattern",2);C([r({type:Number})],x.prototype,"minlength",2);C([r({type:Number})],x.prototype,"maxlength",2);C([r()],x.prototype,"min",2);C([r()],x.prototype,"max",2);C([r()],x.prototype,"step",2);C([r()],x.prototype,"autocapitalize",2);C([r()],x.prototype,"autocorrect",2);C([r()],x.prototype,"autocomplete",2);C([r({type:Boolean})],x.prototype,"autofocus",2);C([r()],x.prototype,"enterkeyhint",2);C([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],x.prototype,"spellcheck",2);C([r()],x.prototype,"inputmode",2);C([r({attribute:!1,reflect:!1,type:Object})],x.prototype,"numberFormatterOptions",2);C([r({attribute:"min-fraction-digits",type:Number})],x.prototype,"minFractionDigits",2);C([r({attribute:"max-fraction-digits",type:Number})],x.prototype,"maxFractionDigits",2);C([r({attribute:"numeric-strategy",converter:{fromAttribute:t=>t==="modern"?yi:Kt},type:Object})],x.prototype,"numericStrategy",1);C([m("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);C([m("step",{waitUntilFirstUpdate:!0})],x.prototype,"handleStepChange",1);C([m("value",{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1);x=C([ie("SynInput")],x);x.define("syn-input");class tr{constructor(e,n){this.popupRef=ba(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="syn-menu-item"||i.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const a=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(f=>f.localName==="syn-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!a)return;const{left:s,top:l,width:d,height:c}=a.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?s+d:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?s+d:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=n}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const n=this.host.renderRoot.querySelector("slot[name='submenu']");if(!n){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const a of n.assignedElements())if(i=a.querySelectorAll("syn-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let a=1;a!==i.length;++a)i[a].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((a,o)=>{const s=e.get(o)??new CSSUnitValue(0,"px"),d=(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px");return a-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?p`
      <syn-popup
        ${ga(this.popupRef)}
        placement=${e?"left-start":"right-start"}
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
    `:p` <slot name="submenu" hidden></slot> `}}const nr=h`
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
`,ir=h`
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
`;function ar(t,e){const n={waitUntilFirstUpdated:!1,...e};return i=>class extends i{#e=!n.waitUntilFirstUpdated;updated(a){if(!this.#e){this.#e=!0;return}const o=Array.from(a).filter(([l])=>t.includes(l));if(o.length===0){super.updated(a);return}const s=o.map(([l,d])=>({attribute:l,newValue:this[l],oldValue:d}));this.emit("syn-attributes-changed",{detail:s}),super.updated(a)}}}var or=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,Ie=(t,e,n,i)=>{for(var a=i>1?void 0:i?sr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&or(e,n,a),a};let fe=class extends w{constructor(){super(...arguments),this.localize=new R(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new J(this,"submenu"),this.submenuController=new tr(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ni(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return p`
      <div
        id="anchor"
        part="base"
        class=${y({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
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
        ${this.loading?p` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}};fe.styles=[k,nr,ir];fe.dependencies={"syn-icon":ye,"syn-popup":P,"syn-spinner":$n};Ie([u("slot:not([name])")],fe.prototype,"defaultSlot",2);Ie([u(".menu-item")],fe.prototype,"menuItem",2);Ie([r()],fe.prototype,"type",2);Ie([r({type:Boolean,reflect:!0})],fe.prototype,"checked",2);Ie([r()],fe.prototype,"value",2);Ie([r({type:Boolean,reflect:!0})],fe.prototype,"loading",2);Ie([r({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);Ie([m("checked")],fe.prototype,"handleCheckedChange",1);Ie([m("disabled")],fe.prototype,"handleDisabledChange",1);Ie([m("type")],fe.prototype,"handleTypeChange",1);fe=Ie([ar(["type","loading"],{waitUntilFirstUpdated:!0})],fe);fe.define("syn-menu-item");const rr=h`
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
`,lr=h`
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
`;class dr extends w{static{this.styles=[k,rr,lr]}static{this.dependencies={"syn-divider":Ze}}render(){return p`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}}dr.define("syn-menu-label");const cr=h`
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
`,pr=h`
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
`;var hr=Object.defineProperty,Ui=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&hr(e,n,a),a};class on extends w{constructor(){super(...arguments),this.hasMenuItemsWithCheckmarks=!1,this.updateCheckMarksByChildPropChange=e=>{e.stopImmediatePropagation(),this.handleUpdateCheckmarks(this.getAllItems())}}static{this.styles=[k,cr,pr]}handleUpdateCheckmarks(e){this.hasMenuItemsWithCheckmarks=e.some(n=>n.type==="checkbox"||n.loading)}disconnectedCallback(){this.removeEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.addEventListener("syn-attributes-changed",this.updateCheckMarksByChildPropChange)}handleClick(e){const n=["menuitem","menuitemcheckbox"],i=e.composedPath(),a=i.find(d=>n.includes(d?.getAttribute?.("role")||""));if(!a||i.find(d=>d?.getAttribute?.("role")==="menu")!==this)return;const l=a;l.type==="checkbox"&&(l.checked=!l.checked),this.emit("syn-select",{detail:{item:l}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const n=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),n?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const n=this.getAllItems(),i=this.getCurrentItem();let a=i?n.indexOf(i):0;n.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?a++:e.key==="ArrowUp"?a--:e.key==="Home"?a=0:e.key==="End"&&(a=n.length-1),a<0&&(a=n.length-1),a>n.length-1&&(a=0),this.setCurrentItem(n[a]),n[a].focus())}}handleMouseDown(e){const n=e.target;this.isMenuItem(n)&&this.setCurrentItem(n)}handleSlotChange(){const e=this.getAllItems();this.handleUpdateCheckmarks(e),e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(e.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return p`
      <slot
        class=${y({"menu--no-checkmarks":!this.hasMenuItemsWithCheckmarks})}
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}}Ui([u("slot")],on.prototype,"defaultSlot");Ui([b()],on.prototype,"hasMenuItemsWithCheckmarks");on.define("syn-menu");const ur=h`
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
`;var mr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,pe=(t,e,n,i)=>{for(var a=i>1?void 0:i?fr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&mr(e,n,a),a};class ae extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"[default]","children","prefix","suffix"),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.rel="noreferrer noopener",this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}static{this.styles=[k,ur]}static{this.dependencies={"syn-divider":Ze}}isButton(){return!this.href&&!this.hasSlotController.test("children")}isLink(){return!!this.href&&!this.hasSlotController.test("children")}isAccordion(){return this.hasSlotController.test("children")}getNavItemChildren(e){return Array.from(e?.assignedElements({flatten:!0})||[]).map(n=>n.tagName.toLowerCase()==="syn-nav-item"?n:Array.from(n.querySelectorAll(":scope > syn-nav-item"))).flat()}getAllNestedNavItems(e){const n=this.getNavItemChildren(e),i=n.map(a=>a.getAllNestedNavItems(a.childrenSlot)).flat();return n.concat(i)}handleCurrentMarkedChild(){const e=this.closest("syn-side-nav");(!this.open||e?.variant==="rail")&&(this.currentMarkedChild=this.getAllNestedNavItems(this.childrenSlot).some(n=>n.current))}handleClickButton(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}handleClickSummary(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit("syn-hide",{cancelable:!0})}showDetails(){this.open=!0,this.emit("syn-show",{cancelable:!0})}handleSlotChange(){const e=getComputedStyle(this);if(e.length===0){setTimeout(()=>{this.handleSlotChange()});return}this.handleCurrentMarkedChild();const i=e.getPropertyValue("--indentation"),a=Math.min(parseInt(i,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(o=>{o.style.setProperty("--indentation",a.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleWidth(e){e.forEach(n=>{requestAnimationFrame(()=>{if(n.contentRect.width<100){const i=this.hasSlotController.test("prefix");this.showPrefixOnly=i}else this.showPrefixOnly=!1;n.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})})}handleHorizontalChange(){this.horizontal?this.resizeObserver.disconnect():this.resizeObserver.observe(this)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleWidth(e)),this.horizontal||this.resizeObserver.observe(this)}firstUpdated(e){super.firstUpdated(e),this.mutationObserver=new MutationObserver(()=>{this.childrenSlot&&this.handleCurrentMarkedChild()}),this.mutationObserver.observe(this,{attributeFilter:["current","open"],childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(e){this.control.focus(e)}render(){const e=this.isButton(),n=this.isLink(),i=this.isAccordion(),a=this.closest("syn-side-nav"),o=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&a?.variant==="rail"&&!a?.open;let s=zt`button`;i?s=zt`summary`:n&&(s=zt`a`);const l=(this.chevron||i)&&!this.horizontal;let d;i?d=this.handleClickSummary:e&&(d=this.handleClickButton);const c=S`
      <${s}
        aria-controls=${g(i?"navigation-item-details":void 0)}
        aria-current=${g(this.current?"page":void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${y({"nav-item":!0,"nav-item--current":this.current||o,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test("[default]"),"nav-item--has-prefix":this.hasSlotController.test("prefix"),"nav-item--has-suffix":this.hasSlotController.test("suffix"),"nav-item--horizontal":this.horizontal,"nav-item--is-link":n,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":i})}
        @click=${d}
        ?disabled=${g(n?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${g(n?this.href:void 0)}
        part="base"
        role=${n?"link":"button"}
        rel=${g(n?this.rel:void 0)}
        tabindex=${this.disabled?"-1":"0"}
        target=${g(n?this.target:void 0)}
      >

        ${this.divider&&!this.horizontal?S`<syn-divider class="divider" part="divider"></syn-divider>`:""}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${l?S`
            <syn-icon
              class=${y({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              color="currentColor"
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:""}

          <div
            class=${y({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||o})}
            part="current-indicator"
          >
          </div>
        </div>

      </${s}>
    `;return i?S`
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
    `:c}}pe([b()],ae.prototype,"hasFocus",2);pe([b()],ae.prototype,"showPrefixOnly",2);pe([b()],ae.prototype,"currentMarkedChild",2);pe([b()],ae.prototype,"isMultiLine",2);pe([u('slot[name="children"]')],ae.prototype,"childrenSlot",2);pe([u(".nav-item")],ae.prototype,"control",2);pe([r({reflect:!0,type:String})],ae.prototype,"href",2);pe([r()],ae.prototype,"target",2);pe([r()],ae.prototype,"rel",2);pe([r({reflect:!0,type:Boolean})],ae.prototype,"current",2);pe([r({reflect:!0,type:Boolean})],ae.prototype,"disabled",2);pe([r({reflect:!0,type:Boolean})],ae.prototype,"horizontal",2);pe([r({reflect:!0,type:Boolean})],ae.prototype,"chevron",2);pe([r({reflect:!0,type:Boolean})],ae.prototype,"open",2);pe([r({reflect:!0,type:Boolean})],ae.prototype,"divider",2);pe([m("horizontal",{waitUntilFirstUpdate:!0})],ae.prototype,"handleHorizontalChange",1);ae.define("syn-nav-item");const yr=h`
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
`;var br=Object.defineProperty,Nn=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&br(e,n,a),a};const ai=(t,e)=>{t.disabled?t.dataset.originallyDisabled="true":delete t.dataset.originallyDisabled,e&&(t.disabled=!0)};class sn extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=yr}static{this.dependencies={"syn-divider":Ze}}enableObserver(){this.mutationObserver.observe(this,{attributeFilter:["disabled"],childList:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{const n=e.filter(o=>o.target===this),i=e.filter(o=>o.target.matches("syn-option")),a=n.length>0||i.length>0;a&&this.mutationObserver.disconnect(),i.length>0&&i.forEach(o=>{ai(o.target,this.disabled)}),n.length>0&&n.forEach(o=>{o.type==="attributes"&&this.assignedOptions.forEach(s=>{s.disabled=this.disabled?!0:!!s.dataset?.originallyDisabled}),o.type==="childList"&&o.addedNodes.forEach(s=>{s instanceof HTMLElement&&s.matches("syn-option")&&ai(s,this.disabled)})}),a&&this.updateComplete.then(()=>{this.enableObserver()})}),this.enableObserver()}render(){const{disabled:e}=this,n=this.hasSlotController.test("label"),i=this.label?!0:!!n;return S`
      <div
        class=${y({optgroup:!0,"optgroup--has-label":i,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
        role="${e?"presentation":"group"}"
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
    `}}Nn([Pt({selector:"syn-option"})],sn.prototype,"assignedOptions");Nn([r({reflect:!0,type:Boolean})],sn.prototype,"disabled");Nn([r()],sn.prototype,"label");sn.define("syn-optgroup");Oe.define("syn-option");P.define("syn-popup");const gr=h`
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
`,oi=t=>Array.from(t.assignedElements({flatten:!0})),vr=t=>t.tagName.toLocaleLowerCase()==="syn-nav-item"||(t.getAttribute("role")??"")==="menuitem",si=t=>t.filter(vr),wr=t=>{t.setAttribute("horizontal","true"),t.removeAttribute("slot"),t.removeAttribute("tabindex"),t.dataset.originalRole?t.setAttribute("role",t.dataset.originalRole):t.removeAttribute("role")},xr=t=>{t.removeAttribute("horizontal"),t.setAttribute("slot","menu"),t.setAttribute("role","menuitem")};var kr=Object.defineProperty,et=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&kr(e,n,a),a};class Ke extends w{constructor(){super(...arguments),this.localize=new R(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[k,gr]}static{this.dependencies={"syn-dropdown":be,"syn-icon":ye,"syn-menu":on,"syn-nav-item":ae}}getSlottedNavItems(){const e=si(oi(this.defaultSlot)),n=si(oi(this.menuSlot));return e.concat(n)}cacheItemPositions(e){const{left:n}=this.horizontalNav.getBoundingClientRect();e.forEach(i=>{i.removeAttribute("slot");const{right:a}=i.getBoundingClientRect();i.dataset.right=(a-n).toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const e=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(e);const{width:n}=this.horizontalNav.getBoundingClientRect(),i=this.priorityMenu.classList.contains("priority-menu--hidden")?0:this.priorityMenu.clientWidth,a=n-i;let o;const s=e.at(-1),l=e.map(f=>{const _=f===s?n:a,Y=!!(o||parseFloat(f.dataset.right)>_);return Y&&!o&&(o=parseFloat(f.dataset.right)),{isHidden:Y,item:f}}),d=l.filter(({isHidden:f})=>!f).length,c=d===1;l.forEach(({item:f,isHidden:_})=>{_||c?xr(f):wr(f)}),this.hasItemsInDropdown=d!==e.length,this.amountOfVisibleItems=c?0:d}renderPriorityMenu(){return S`
      <syn-dropdown
        class=${y({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${y({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const e=this.getSlottedNavItems();e.length!==this.amountOfNavItems&&(this.cacheItemPositions(e),this.handlePriorityMenu(),this.amountOfNavItems=e.length)}firstUpdated(){this.getSlottedNavItems().forEach(e=>{e.dataset.originalRole=e.getAttribute("role")??""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return S`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}}et([u("slot:not([name])")],Ke.prototype,"defaultSlot");et([u("slot[name=menu]")],Ke.prototype,"menuSlot");et([u(".horizontal-nav")],Ke.prototype,"horizontalNav");et([u(".priority-menu")],Ke.prototype,"priorityMenu");et([b()],Ke.prototype,"itemPositionsCached");et([b()],Ke.prototype,"amountOfNavItems");et([b()],Ke.prototype,"amountOfVisibleItems");et([b()],Ke.prototype,"hasItemsInDropdown");Ke.define("syn-prio-nav");const _r=h`
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
`,Tr=h`
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
`;var Cr=Object.defineProperty,In=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&Cr(e,n,a),a};class rn extends w{constructor(){super(...arguments),this.localize=new R(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[k,_r,Tr]}render(){return p`
      <div
        part="base"
        class=${y({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${g(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${va({width:`${this.value}%`})}>
          ${this.indeterminate?"":p` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}In([r({type:Number,reflect:!0})],rn.prototype,"value");In([r({type:Boolean,reflect:!0})],rn.prototype,"indeterminate");In([r()],rn.prototype,"label");rn.define("syn-progress-bar");const Sr=h`
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
`,zr=h`
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
`;var Er=Object.defineProperty,ln=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&Er(e,n,a),a};class Vt extends w{constructor(){super(...arguments),this.localize=new R(this),this.value=0,this.label=""}static{this.styles=[k,Sr,zr]}updated(e){if(super.updated(e),e.has("value")){const n=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*n,a=i-this.value/100*i;this.indicatorOffset=`${a}px`}}render(){return p`
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
    `}}ln([u(".progress-ring__indicator")],Vt.prototype,"indicator");ln([b()],Vt.prototype,"indicatorOffset");ln([r({type:Number,reflect:!0})],Vt.prototype,"value");ln([r()],Vt.prototype,"label");Vt.define("syn-progress-ring");const $r=h`
	/* stylelint-disable */
  ${Pi}

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
`;var Or=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Ve=(t,e,n,i)=>{for(var a=i>1?void 0:i?Dr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Or(e,n,a),a};let Se=class extends w{constructor(){super(...arguments),this.hasSlotController=new J(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return S`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${y({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};Se.styles=[k,$r];Ve([u(".button")],Se.prototype,"input",2);Ve([u(".hidden-input")],Se.prototype,"hiddenInput",2);Ve([b()],Se.prototype,"hasFocus",2);Ve([r({type:Boolean,reflect:!0})],Se.prototype,"checked",2);Ve([r()],Se.prototype,"value",2);Ve([r({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);Ve([r({reflect:!0})],Se.prototype,"size",2);Ve([r({type:Boolean,reflect:!0})],Se.prototype,"pill",2);Ve([m("disabled",{waitUntilFirstUpdate:!0})],Se.prototype,"handleDisabledChange",1);Se=Ve([ie("SynRadioButton")],Se);Se.define("syn-radio-button");const Nr=h`
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
`,Ir=h`
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

`;var Ar=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,ge=(t,e,n,i)=>{for(var a=i>1?void 0:i?Mr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Ar(e,n,a),a};let ne=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this),this.hasSlotController=new J(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Mi:t?Fo:Ft}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button"),n=this.getAllRadios(),i=this.value;!e||e.disabled||(this.value=e.value,n.forEach(a=>a.checked=a===e),this.value!==i&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(s=>!s.disabled),n=e.find(s=>s.checked)??e[0],i=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let o=e.indexOf(n)+i;o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.getAllRadios().forEach(s=>{s.checked=!1,this.hasButtonGroup||s.setAttribute("tabindex","-1")}),this.value=e[o].value,e[o].checked=!0,this.hasButtonGroup?e[o].shadowRoot.querySelector("button").focus():(e[o].setAttribute("tabindex","0"),e[o].focus()),this.value!==a&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="syn-radio-button"),t.length>0&&!t.some(e=>e.checked))if(this.hasButtonGroup){const e=t[0].shadowRoot?.querySelector("button");e&&e.setAttribute("tabindex","0")}else t[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const e=this.shadowRoot?.querySelector("syn-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),n=e.find(o=>o.checked),i=e.find(o=>!o.disabled),a=n||i;a&&a.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=this.label?!0:!!t,i=this.helpText?!0:!!e,a=p`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return p`
      <fieldset
        part="form-control"
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":n,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${n?"false":"true"}
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

          ${this.hasButtonGroup?p`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${a}
                </syn-button-group>
              `:a}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ne.styles=[k,We,Nr,qe,Ir];ne.dependencies={"syn-button-group":Lt};ge([u("slot:not([name])")],ne.prototype,"defaultSlot",2);ge([u(".radio-group__validation-input")],ne.prototype,"validationInput",2);ge([b()],ne.prototype,"hasButtonGroup",2);ge([b()],ne.prototype,"errorMessage",2);ge([b()],ne.prototype,"defaultValue",2);ge([r()],ne.prototype,"label",2);ge([r({attribute:"help-text"})],ne.prototype,"helpText",2);ge([r()],ne.prototype,"name",2);ge([r({reflect:!0})],ne.prototype,"value",2);ge([r({reflect:!0})],ne.prototype,"size",2);ge([r({reflect:!0})],ne.prototype,"form",2);ge([r({type:Boolean,reflect:!0})],ne.prototype,"required",2);ge([m("size",{waitUntilFirstUpdate:!0})],ne.prototype,"handleSizeChange",1);ge([m("value")],ne.prototype,"handleValueChange",1);ne=ge([ie("SynRadioGroup")],ne);ne.define("syn-radio-group");const Pr=h`
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
`,Lr=h`
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
`;var Fr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,tt=(t,e,n,i)=>{for(var a=i>1?void 0:i?jr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Fr(e,n,a),a};let $e=class extends w{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return p`
      <span
        part="base"
        class=${y({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?p` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};$e.styles=[k,Pr,Lr];$e.dependencies={"syn-icon":ye};tt([b()],$e.prototype,"checked",2);tt([b()],$e.prototype,"hasFocus",2);tt([r()],$e.prototype,"value",2);tt([r({reflect:!0})],$e.prototype,"size",2);tt([r({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);tt([m("checked")],$e.prototype,"handleCheckedChange",1);tt([m("disabled",{waitUntilFirstUpdate:!0})],$e.prototype,"handleDisabledChange",1);$e=tt([ie("SynRadio")],$e);$e.define("syn-radio");const Vr=h`
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
`;var Hr=Object.defineProperty,Br=(t,e,n,i)=>{for(var a=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=s(e,n,a)||a);return a&&Hr(e,n,a),a};class Wi extends w{constructor(){super(...arguments),this.subdivision=!1}static{this.styles=[k,Vr]}render(){return p`
      <div
        class=${y({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}}Br([r({reflect:!0,type:Boolean})],Wi.prototype,"subdivision");Wi.define("syn-range-tick");const Rr=h`
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
`,Ur=h`
  /* Write custom CSS here */
  .tooltip__body {
    box-shadow: var(--syn-shadow-large);
  }

  /** #640: Adjust the zIndex of the arrow to make sure the box-shadow above does not bleed out */
  :host::part(arrow) {
    z-index: 0;
  }
`;var Wr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,_e=(t,e,n,i)=>{for(var a=i>1?void 0:i?qr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Wr(e,n,a),a};class he extends w{constructor(){super(),this.localize=new R(this),this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Kn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Kn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static{this.styles=[k,Rr,Ur]}static{this.dependencies={"syn-popup":P}}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Q(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:n}=F(this,"tooltip.show",{dir:this.localize.dir()});await W(this.popup.popup,e,n),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Q(this.body);const{keyframes:e,options:n}=F(this,"tooltip.hide",{dir:this.localize.dir()});await W(this.popup.popup,e,n),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return p`
      <syn-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${y({tooltip:!0,"tooltip--open":this.open})}
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
    `}}_e([u("slot:not([name])")],he.prototype,"defaultSlot",2);_e([u(".tooltip__body")],he.prototype,"body",2);_e([u("syn-popup")],he.prototype,"popup",2);_e([r()],he.prototype,"content",2);_e([r()],he.prototype,"placement",2);_e([r({type:Boolean,reflect:!0})],he.prototype,"disabled",2);_e([r({type:Number})],he.prototype,"distance",2);_e([r({type:Boolean,reflect:!0})],he.prototype,"open",2);_e([r({type:Number})],he.prototype,"skidding",2);_e([r()],he.prototype,"trigger",2);_e([r({type:Boolean})],he.prototype,"hoist",2);_e([m("open",{waitUntilFirstUpdate:!0})],he.prototype,"handleOpenChange",1);_e([m(["content","distance","hoist","placement","skidding"])],he.prototype,"handleOptionsChange",1);_e([m("disabled")],he.prototype,"handleDisabledChange",1);E("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});E("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});const rt=(t,e)=>t-e,It=(t,e)=>{if(t.length!==e.length)return!0;const n=t.slice().sort(rt),i=e.slice().sort(rt);for(let a=0;a<n.length;a+=1)if(n[a]!==i[a])return!0;return!1},qi=(t,e,n)=>{const i=t.getBoundingClientRect(),a=i.width;if(a<=0)return 0;let o=e;return o-=i.left,o<=0?n?1:0:o>=a?n?0:1:(o/=a,n?1-o:o)},Kr=h`
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
`;var Gr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Ki=t=>{throw TypeError(t)},te=(t,e,n,i)=>{for(var a=i>1?void 0:i?Yr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Gr(e,n,a),a},An=(t,e,n)=>e.has(t)||Ki("Cannot "+n),v=(t,e,n)=>(An(t,e,"read from private field"),n?n.call(t):e.get(t)),st=(t,e,n)=>e.has(t)?Ki("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),xe=(t,e,n,i)=>(An(t,e,"write to private field"),e.set(t,n),n),V=(t,e,n)=>(An(t,e,"access private method"),n),M,se,At,ut,Yt,lt,O,Mt,Mn,Gi,Pn,Yi,Xi,Xt,Ht,Bt,Ji,Qi,vt,Zi,ea,ta;let K=class extends w{constructor(){super(),st(this,O),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.restrictMovement=!1,this.defaultValue="0",this.form="",this.hasSlotController=new J(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new Fe(this,{assumeInteractionOn:["syn-change"]}),this.localize=new R(this),st(this,M,[0]),st(this,se,new Map),st(this,At,!1),st(this,ut,""),st(this,Yt),st(this,lt,[]),this.tooltipFormatter=this.localize.number.bind(this.localize)}set value(t){xe(this,M,t?t.split(" ").map(Number).sort(rt):[])}get value(){return v(this,M).slice().sort(rt).join(" ")}set valueAsArray(t){const e=v(this,M);xe(this,M,Array.isArray(t)?t.slice().sort(rt):t||[]),It(e,v(this,M))&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...v(this,M)].sort(rt)}disconnectedCallback(){super.disconnectedCallback(),this?.visibilityObserver?.disconnect()}firstUpdated(){this.visibilityObserver=new IntersectionObserver(t=>{const e=t.at(0);e&&e.isIntersecting&&e.target.checkVisibility()&&V(this,O,ta).call(this,e.boundingClientRect.height)},{root:this.ticks.parentElement}),this.visibilityObserver.observe(this.ticks),this.formControlController.updateValidity(),xe(this,lt,Array.from(v(this,M))),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{e.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=v(this,M).map(n=>{if(n<=this.min)return this.min;if(n>=this.max)return this.max;const i=this.min+this.step*Math.round((n-this.min)/this.step);return i>this.max?this.max:i});It(v(this,M),e)&&xe(this,M,e)}updated(t){super.updated(t);for(const e of this.thumbs){const n=+e.dataset.rangeId;v(this,se).has(n)&&V(this,O,Ht).call(this,e,v(this,se).get(n))}V(this,O,Bt).call(this)}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!v(this,ut);return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(v(this,Yt)),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),xe(this,Yt,setTimeout(()=>{this.validationInput.hidden=!0},1e4))),t}setCustomValidity(t){xe(this,ut,t),this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return v(this,ut)?Mi:Ft}get validationMessage(){return v(this,ut)}renderThumbs(t){const e=v(this,M).length>1;return v(this,se).clear(),v(this,M).map((n,i)=>{const a=i+1;v(this,se).set(a,n);const o=`thumb-${a}`;let s="",l="";return e?(l=t?`label aria-label-hidden ${o}`:`aria-label-hidden ${o}`,i===0?s=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(n)})`:i===v(this,M).length-1?s=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(n)})`:s=this.tooltipFormatter(n)):l=t?"label aria-label-hidden":"",p`
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
            aria-label=${s}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${n}"
            aria-valuetext="${this.tooltipFormatter(n)}"
            class="thumb"
            data-range-id="${a}"
            id=${o}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${V(this,O,Yi)}
            @pointermove=${V(this,O,Xi)}
            @pointerup=${V(this,O,Xt)}
            @pointercancel=${V(this,O,Xt)}
            @pointerleave=${V(this,O,Xt)}
            @keydown=${V(this,O,Ji)}
            @focus=${V(this,O,Zi)}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=this.hasSlotController.test("prefix"),i=this.hasSlotController.test("suffix"),a=this.label?!0:!!t,o=this.helpText?!0:!!e;return p`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--has-help-text":o,"form-control--has-label":a,"form-control--has-prefix":n,"form-control--has-suffix":i,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${V(this,O,Qi)}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${a?"false":"true"}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${v(this,M).map(this.tooltipFormatter).join(" - ")})
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
              @invalid=${V(this,O,ea)}
            />

            <div
              class="track__wrapper"
              @pointerdown=${V(this,O,Mn)}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(a)}

            <div
              class="ticks"
              part="ticks"
              @pointerdown=${V(this,O,Gi)}
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};M=new WeakMap;se=new WeakMap;At=new WeakMap;ut=new WeakMap;Yt=new WeakMap;lt=new WeakMap;O=new WeakSet;Mt=function(){return this.localize.dir()==="rtl"};Mn=function(t,e=!0){if(this.disabled)return;const{clientX:n}=t,i=Array.from(this.thumbs),a=qi(this.baseDiv,n,v(this,O,Mt)),o=this.step/(this.max-this.min),s=this.min+this.step*Math.round(a/o),l=i.reduce((_,Y)=>{const Ye=v(this,se).get(+Y.dataset.rangeId),Ae=v(this,se).get(+_.dataset.rangeId),Be=Math.abs(Ye-s),it=Math.abs(Ae-s);return Be===it?Ye<s?Y:_:Be<it?Y:_}),d=+l.dataset.rangeId;if(!d)return;v(this,se).set(d,s),V(this,O,Ht).call(this,l,s);const c=v(this,M);xe(this,M,Array.from(v(this,se).values())),V(this,O,Bt).call(this),It(c,v(this,M))&&(xe(this,lt,Array.from(v(this,M))),this.emit("syn-input"),this.emit("syn-change"));const f=new PointerEvent("pointerdown",t);e&&l.dispatchEvent(f)&&V(this,O,vt).call(this,l)};Gi=function(t){V(this,O,Mn).call(this,t,!1)};Pn=function(t,e){const n=this.valueAsArray,a=Array.from(this.thumbs).indexOf(t),o=n[a-1]||this.min,s=n[a+1]||this.max,l=e<o||e>s;return{finalValue:Math.max(o,Math.min(s,e)),isRestricted:l,nextValue:s,prevValue:o}};Yi=async function(t){if(this.disabled)return;const e=t.target;V(this,O,vt).call(this,e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()};Xi=function(t){if(this.disabled)return;const e=t.target,n=+e.dataset.rangeId;if(!v(this,se).has(n)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const a=qi(this.baseDiv,t.clientX,v(this,O,Mt)),o=this.step/(this.max-this.min);let s=this.min+this.step*Math.round(a/o);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:s}}).defaultPrevented)return;if(this.restrictMovement){const c=V(this,O,Pn).call(this,e,s);c.isRestricted?(s=c.finalValue,e.style.zIndex=(3+this.thumbs.length).toFixed(0)):e.style.zIndex="3"}v(this,se).set(n,s),V(this,O,Ht).call(this,e,s);const d=v(this,M);xe(this,M,Array.from(v(this,se).values())),V(this,O,Bt).call(this),It(d,v(this,M))&&this.emit("syn-input")};Xt=async function(t){const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,It(v(this,lt),v(this,M))&&(xe(this,lt,Array.from(v(this,M))),this.emit("syn-change")),await e.parentElement.hide())};Ht=function(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const n=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc(${100*n}% - var(--half-thumb-size))`,V(this,O,vt).call(this,t)};Bt=function(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(v(this,M).length===1){const a=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",o=100*(v(this,M)[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${a}, ${o}%)`,t.style.insetInlineEnd=`min(calc(100% - ${a}), calc(100% - ${o}%))`;return}const e=v(this,M).slice().sort(rt),n=100*(e[0]-this.min)/(this.max-this.min),i=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${n}%`,t.style.insetInlineEnd=`calc(100% - ${i}%)`};Ji=function(t){const e=t.target,n=+e.dataset.rangeId,i=v(this,se).get(n);if(i===void 0)return;let a=i;switch(t.key){case"ArrowUp":case"Up":a=Math.min(i+this.step,this.max);break;case"ArrowDown":case"Down":a=Math.max(i-this.step,this.min);break;case"ArrowLeft":case"Left":a=v(this,O,Mt)?Math.min(i+this.step,this.max):Math.max(i-this.step,this.min);break;case"ArrowRight":case"Right":a=v(this,O,Mt)?Math.max(i-this.step,this.min):Math.min(i+this.step,this.max);break;case"PageUp":a=Math.min(i+(this.max-this.min)/5,this.max);break;case"PageDown":a=Math.max(i-(this.max-this.min)/5,this.min);break;case"Home":a=this.min;break;case"End":a=this.max;break;default:return}if(a!==i){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:a}}).defaultPrevented)return;if(this.restrictMovement){const s=V(this,O,Pn).call(this,e,a);s.isRestricted&&(a=s.finalValue)}V(this,O,Ht).call(this,e,a),v(this,se).set(n,a),xe(this,M,Array.from(v(this,se).values())),V(this,O,Bt).call(this),V(this,O,vt).call(this,e),xe(this,lt,Array.from(v(this,M))),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()};Qi=function(t){t.relatedTarget&&this.shadowRoot?.contains(t.relatedTarget)||(this.emit("syn-blur"),xe(this,At,!1))};vt=function(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!v(this,se).has(e))return;const n=v(this,se).get(e),i=t.parentElement;i.content=this.tooltipFormatter(n)};Zi=function(t){if(this.disabled)return;v(this,At)||(xe(this,At,!0),this.emit("syn-focus"));const e=t.target;e?.dataset?.rangeId&&V(this,O,vt).call(this,e)};ea=function(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)};ta=function(t){const e=this.hasSlotController.test("ticks"),n=this.hasSlotController.test("prefix"),i=this.hasSlotController.test("suffix");if(!e)return;let a=t||this.shadowRoot?.querySelector(".ticks")?.clientHeight;if(a){if(a+=2,a/=2,n){const o=this.shadowRoot?.querySelector(".input__prefix");o.style.transform=`translateY(-${a}px)`}if(i){const o=this.shadowRoot?.querySelector(".input__suffix");o.style.transform=`translateY(-${a}px)`}}};K.styles=[k,We,qe,Kr];K.dependencies={"syn-tooltip":he};te([r()],K.prototype,"name",2);te([r()],K.prototype,"label",2);te([r({attribute:"help-text"})],K.prototype,"helpText",2);te([r({reflect:!0,type:Boolean})],K.prototype,"disabled",2);te([r({type:Number})],K.prototype,"min",2);te([r({type:Number})],K.prototype,"max",2);te([r({type:Number})],K.prototype,"step",2);te([r({reflect:!0})],K.prototype,"size",2);te([r({attribute:"tooltip-placement",type:String})],K.prototype,"tooltipPlacement",2);te([r({type:String})],K.prototype,"value",1);te([r({attribute:"restrict-movement",type:Boolean})],K.prototype,"restrictMovement",2);te([pt()],K.prototype,"defaultValue",2);te([r({reflect:!0})],K.prototype,"form",2);te([r({attribute:!1})],K.prototype,"tooltipFormatter",2);te([u(".input__wrapper")],K.prototype,"baseDiv",2);te([u(".active-track")],K.prototype,"activeTrack",2);te([u(".ticks")],K.prototype,"ticks",2);te([wa(".thumb")],K.prototype,"thumbs",2);te([u(".range__validation-input")],K.prototype,"validationInput",2);K=te([ie("SynRange")],K);K.define("syn-range");const Xr=h`
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

  
`,Jr=h`
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
`;var Qr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Ln=(t,e,n,i)=>{for(var a=i>1?void 0:i?Zr(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Qr(e,n,a),a};let Je=class extends w{constructor(){super(...arguments),this.localize=new R(this),this.size="medium",this.removable=!1}handleRemoveClick(){this.emit("syn-remove")}render(){return p`
      <span
        part="base"
        class=${y({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?p`
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
    `}};Je.styles=[k,Xr,Jr];Je.dependencies={"syn-icon-button":bt};Ln([r({reflect:!0})],Je.prototype,"size",2);Ln([r({type:Boolean})],Je.prototype,"removable",2);Je=Ln([ie("SynTag")],Je);const el=h`
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
`,tl=h`
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

  ${Fi}
`,nl=t=>Array.isArray(t)||typeof t=="string"?t.length>0:typeof t=="number"?!0:!!t,il=(t,e)=>Array.isArray(t)&&Array.isArray(e)?t.length!==e.length?!1:t.every((n,i)=>n===e[i]):t===e;var al=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,D=(t,e,n,i)=>{for(var a=i>1?void 0:i?ol(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&al(e,n,a),a};let z=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new J(this,"help-text","label"),this.localize=new R(this),this.isInitialized=!1,this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.delimiter=" ",this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>p`
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
        @syn-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </syn-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,n=e.closest(".select__clear")!==null,i=e.closest("syn-icon-button")!==null;if(!(n||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const a=this.getAllOptions(),o=a.indexOf(this.currentOption);let s=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(s=o+1,s>a.length-1&&(s=0)):t.key==="ArrowUp"?(s=o-1,s<0&&(s=a.length-1)):t.key==="Home"?s=0:t.key==="End"&&(s=a.length-1),this.setCurrentOption(a[s])}if(t.key&&t.key.length===1||t.key==="Backspace"){const a=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of a)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?Array.isArray(t)||(t=typeof t=="string"?t.split(this.delimiter):[t].filter(Boolean)):t=Array.isArray(t)?t.join(this.delimiter):t,!il(this._value,t)&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver=new ResizeObserver(t=>{const e=t.at(0);this.tagContainer.style.setProperty("--syn-select-tag-max-width",`${e.contentRect.width}px`)}),this.resizeObserver.observe(this.tagContainer))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const n=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="syn-icon-button");this.disabled||n||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const n=t.target.closest("syn-option"),i=this.value;n&&!n.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("syn-option")||customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue;this.handleDelimiterChange();const n=Array.isArray(e)?e:typeof e=="string"?e.split(this.delimiter):[e].filter(Boolean),i=[];t.forEach(s=>i.push(s.value));const a=n.map(String),o=t.filter(s=>a.includes(String(s.value)));this.setSelectedOptions(o)}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),n=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),n.length&&n.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions();this.selectedOptions=t.filter(n=>n.selected);const e=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.value=n?.value??"",this.displayLabel=n?.getTextLabel?.()??""}this.valueHasChanged=e,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(t,e);return p`<div @syn-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof n=="string"?fi(n):n}
        </div>`}else if(e===this.maxOptionsVisible)return p`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`;return p``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDelimiterChange(){this.getAllOptions().forEach(t=>{t.delimiter=this.delimiter})}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}firstUpdated(){this.isInitialized=!0}updated(t){super.updated(t),t.has("multiple")&&(this.multiple?this.enableResizeObserver():this.resizeObserver?.disconnect())}willUpdate(t){super.willUpdate(t),!this.isInitialized&&!this.defaultValue&&this.value&&(this.defaultValue=this.value,this.valueHasChanged=!1)}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}handleValueChange(){if(!this.valueHasChanged){const a=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=a}const t=this.getAllOptions(),n=(Array.isArray(this.value)?this.value:[this.value]).map(String),i=t.filter(a=>n.includes(String(a.value)));this.setSelectedOptions(i)}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await Q(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=F(this,"select.show",{dir:this.localize.dir()});await W(this.popup.popup,t,e),this.currentOption&&en(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await Q(this);const{keyframes:t,options:e}=F(this,"select.hide",{dir:this.localize.dir()});await W(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Z(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Z(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=nl(this.value),e=this.hasSlotController.test("label"),n=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,a=this.helpText?!0:!!n,o=this.clearable&&!this.disabled&&t,s=this.placeholder&&this.value&&!t;return p`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
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
            class=${y({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?p`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?p`
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
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z.styles=[k,We,el,qe,tl];z.dependencies={"syn-icon":ye,"syn-popup":P,"syn-tag":Je};D([u(".select")],z.prototype,"popup",2);D([u(".select__combobox")],z.prototype,"combobox",2);D([u(".select__display-input")],z.prototype,"displayInput",2);D([u(".select__value-input")],z.prototype,"valueInput",2);D([u(".select__listbox")],z.prototype,"listbox",2);D([u(".select__tags")],z.prototype,"tagContainer",2);D([b()],z.prototype,"hasFocus",2);D([b()],z.prototype,"displayLabel",2);D([b()],z.prototype,"currentOption",2);D([b()],z.prototype,"selectedOptions",2);D([b()],z.prototype,"valueHasChanged",2);D([r()],z.prototype,"delimiter",2);D([r()],z.prototype,"name",2);D([b()],z.prototype,"value",1);D([r({attribute:"value"})],z.prototype,"defaultValue",2);D([r({reflect:!0})],z.prototype,"size",2);D([r()],z.prototype,"placeholder",2);D([r({type:Boolean,reflect:!0})],z.prototype,"multiple",2);D([r({attribute:"max-options-visible",type:Number})],z.prototype,"maxOptionsVisible",2);D([r({type:Boolean,reflect:!0})],z.prototype,"disabled",2);D([r({type:Boolean})],z.prototype,"clearable",2);D([r({type:Boolean,reflect:!0})],z.prototype,"open",2);D([r({type:Boolean})],z.prototype,"hoist",2);D([r()],z.prototype,"label",2);D([r({reflect:!0})],z.prototype,"placement",2);D([r({attribute:"help-text"})],z.prototype,"helpText",2);D([r({reflect:!0})],z.prototype,"form",2);D([r({type:Boolean,reflect:!0})],z.prototype,"required",2);D([r()],z.prototype,"getTag",2);D([m("delimiter")],z.prototype,"handleDelimiterChange",1);D([m("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);D([m(["defaultValue","value","delimiter"],{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1);D([m("open",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpenChange",1);z=D([ie("SynSelect")],z);E("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});E("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});z.define("syn-select");const sl=h`
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
`;var rl=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,He=(t,e,n,i)=>{for(var a=i>1?void 0:i?ll(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&rl(e,n,a),a};let ke=class extends w{constructor(){super(),this.hasSlotController=new J(this,"[default]","footer"),this.localize=new R(this),this.isAnimationActive=!1,this.open=!1,this.rail=!1,this.variant="default",this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener("syn-initial-focus",t=>{this.variant!=="default"&&(t.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener("focusin",t=>{t.target.tagName.toLowerCase()==="syn-nav-item"&&this.variant==="rail"&&!this.open&&(this.open=!0)}),this.addEventListener("focusout",t=>{const e=t.target.tagName.toLowerCase(),n=t.relatedTarget?.tagName.toLowerCase();e==="syn-nav-item"&&n!=="syn-nav-item"&&this.variant==="rail"&&this.open&&(this.open=!1)})}setDelayedCallback(t){clearTimeout(this.timeout),this.timeout=setTimeout(t,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerAnimations(){const t=F(this,`sideNav.show${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),e=F(this,`sideNav.hide${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),n=F(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),i=F(this,"sideNav.overlay.show",{dir:this.localize.dir()});Wt(this.drawer,"drawer.showStart",t),Wt(this.drawer,"drawer.hideStart",e),Wt(this.drawer,"drawer.overlay.hide",n),Wt(this.drawer,"drawer.overlay.show",i)}handleVariantChange(){switch(this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant){case"rail":this.addMouseListener();break;case"sticky":case"default":default:this.removeMouseListener()}}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,Z(this.drawer,`syn-after-${this.open?"show":"hide"}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,Z(this.drawer,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this.drawer,"syn-after-hide")}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(".drawer__panel").tabIndex=-1}),this.variant){case"rail":this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case"sticky":break;case"default":default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(ft(this.drawer),this.drawer.modal.deactivate())}willUpdate(t){super.willUpdate(t),t.has("rail")&&(this.rail&&console.warn("<syn-side-nav/>: The `rail` attribute is deprecated. Please use the `variant` attribute with `rail` instead. It will be removed in synergy version 3.0"),(!t.has("variant")||this.rail)&&(this.variant=this.rail?"rail":"default"))}toggleOpenState(){this.open=!this.open}render(){const t=window.navigator.maxTouchPoints>0||"ontouchstart"in window,e=this.hasSlotController.test("footer"),n=e||this.variant==="sticky";return S`
      <nav
        class=${y({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":e,"side-nav--open":this.open,"side-nav--rail":this.variant==="rail","side-nav--sticky":this.variant==="sticky","side-nav--touch":t})}
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

            ${n?S`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot>
            ${this.variant==="sticky"?S`<syn-nav-item part="toggle-nav-item" class="side-nav__toggle-nav-item" @click=${this.toggleOpenState} ?divider=${e}>
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
    `}};ke.styles=[k,sl];ke.dependencies={"syn-divider":Ze,"syn-drawer":ze,"syn-icon":ye,"syn-nav-item":ae};He([b()],ke.prototype,"isAnimationActive",2);He([u(".side-nav__drawer")],ke.prototype,"drawer",2);He([r({reflect:!0,type:Boolean})],ke.prototype,"open",2);He([r({reflect:!0,type:Boolean})],ke.prototype,"rail",2);He([r({reflect:!0})],ke.prototype,"variant",2);He([r({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],ke.prototype,"noFocusTrapping",2);He([m("variant",{waitUntilFirstUpdate:!0})],ke.prototype,"handleVariantChange",1);He([m("open",{waitUntilFirstUpdate:!0})],ke.prototype,"handleOpenChange",1);He([m("noFocusTrapping",{waitUntilFirstUpdate:!0})],ke.prototype,"handleFocusTrapping",1);ke=He([ie("SynSideNav")],ke);E("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});E("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});E("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});E("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});E("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});E("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ke.define("syn-side-nav");$n.define("syn-spinner");const dl=h`
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
`,cl=h`
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
  `;var pl=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,ve=(t,e,n,i)=>{for(var a=i>1?void 0:i?hl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&pl(e,n,a),a};let re=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new J(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return p`
      <div
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${y({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${g(this.value)}
            .checked=${Ot(this.checked)}
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
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};re.styles=[k,We,dl,qe,cl];ve([u('input[type="checkbox"]')],re.prototype,"input",2);ve([b()],re.prototype,"hasFocus",2);ve([r({reflect:!0})],re.prototype,"title",2);ve([r()],re.prototype,"name",2);ve([r()],re.prototype,"value",2);ve([r({reflect:!0})],re.prototype,"size",2);ve([r({type:Boolean,reflect:!0})],re.prototype,"disabled",2);ve([r({type:Boolean,reflect:!0})],re.prototype,"checked",2);ve([pt("checked")],re.prototype,"defaultChecked",2);ve([r({reflect:!0})],re.prototype,"form",2);ve([r({type:Boolean,reflect:!0})],re.prototype,"required",2);ve([r({attribute:"help-text"})],re.prototype,"helpText",2);ve([m("checked",{waitUntilFirstUpdate:!0})],re.prototype,"handleCheckedChange",1);ve([m("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);re=ve([ie("SynSwitch")],re);re.define("syn-switch");const ul=(t,e)=>{let n=0;return function(...i){window.clearTimeout(n),n=window.setTimeout(()=>{t.call(this,...i)},e)}},ri=(t,e,n)=>{const i=t[e];t[e]=function(...a){i.call(this,...a),n.call(this,i,...a)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,n=new WeakMap,i=o=>{for(const s of o.changedTouches)e.add(s.identifier)},a=o=>{for(const s of o.changedTouches)e.delete(s.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",a,!0),document.addEventListener("touchcancel",a,!0),ri(EventTarget.prototype,"addEventListener",function(o,s){if(s!=="scrollend")return;const l=ul(()=>{e.size?l():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",l,{passive:!0}),n.set(this,l)}),ri(EventTarget.prototype,"removeEventListener",function(o,s){if(s!=="scrollend")return;const l=n.get(this);l&&o.call(this,"scroll",l,{passive:!0})})}})();const ml=h`
	/* stylelint-disable */
  :host {
    display: contents;
  }
`;var fl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,na=(t,e,n,i)=>{for(var a=i>1?void 0:i?yl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&fl(e,n,a),a};class Fn extends w{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}static{this.styles=[k,ml]}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("syn-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const n=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],n.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}}na([r({type:Boolean,reflect:!0})],Fn.prototype,"disabled",2);na([m("disabled",{waitUntilFirstUpdate:!0})],Fn.prototype,"handleDisabledChange",1);const bl=h`
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
`,gl=h`
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
`;var vl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,de=(t,e,n,i)=>{for(var a=i>1?void 0:i?wl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&vl(e,n,a),a};class oe extends w{constructor(){super(...arguments),this.focusableTabs=[],this.localize=new R(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1,this.fixedScrollControls=!1,this.scrollOffset=1}static{this.styles=[k,bl,gl]}static{this.dependencies={"syn-icon-button":bt,"syn-resize-observer":Fn}}connectedCallback(){const e=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(n=>{const i=n.filter(({target:a})=>{if(a===this)return!0;if(a.closest("syn-tab-group")!==this)return!1;const o=a.tagName.toLowerCase();return o==="syn-tab"||o==="syn-tab-panel"});if(i.length!==0){if(i.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(a=>a.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(a=>a.attributeName==="active")){const o=i.filter(s=>s.attributeName==="active"&&s.target.tagName.toLowerCase()==="syn-tab").map(s=>s.target).find(s=>s.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((i,a)=>{i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),a.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("syn-tab");i?.closest("syn-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("syn-tab");if(i?.closest("syn-tab-group")===this&&(["Enter"," "].includes(e.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(d=>d.matches(":focus")),s=this.localize.dir()==="rtl";let l=null;if(o?.tagName.toLowerCase()==="syn-tab"){if(e.key==="Home")l=this.focusableTabs[0];else if(e.key==="End")l=this.focusableTabs[this.focusableTabs.length-1];else if(["top"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const d=this.tabs.findIndex(c=>c===o);l=this.findNextFocusableTab(d,"backward")}else if(["top"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const d=this.tabs.findIndex(c=>c===o);l=this.findNextFocusableTab(d,"forward")}if(!l)return;l.tabIndex=0,l.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(l,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===l?0:-1}),["top"].includes(this.placement)&&en(l,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,n){if(n={emitEvents:!0,scrollBehavior:"auto",...n},e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>a.active=a.name===this.activeTab?.panel),this.syncIndicator(),["top"].includes(this.placement)&&en(this.activeTab,this.nav,"horizontal",n.scrollBehavior),n.emitEvents&&(i&&this.emit("syn-tab-hide",{detail:{name:i.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const n=this.panels.find(i=>i.name===e.panel);n&&(e.setAttribute("aria-controls",n.getAttribute("id")),n.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const n=e.clientWidth,i=e.clientHeight,a=this.localize.dir()==="rtl",s=this.tabs.slice(0,this.tabs.indexOf(e)).reduce((l,d)=>({left:l.left+d.clientWidth,top:l.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${n}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${a?"-":""}1 * (${s.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${i}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${s.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,n){let i=null;const a=n==="forward"?1:-1;let o=e+a;for(;e<this.tabs.length;){if(i=this.tabs[o]||null,i===null){n==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=a}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const n=this.tabs.find(i=>i.panel===e);n&&this.setActiveTab(n,{scrollBehavior:"smooth"})}preventFocus(e){e.preventDefault()}render(){return p`
      <div
        part="base"
        class=${y({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?p`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${y({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?p`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${y({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}}de([Pt({slot:"nav",selector:"syn-tab"})],oe.prototype,"tabs",2);de([Pt({selector:"syn-tab-panel"})],oe.prototype,"panels",2);de([u(".tab-group")],oe.prototype,"tabGroup",2);de([u(".tab-group__body")],oe.prototype,"body",2);de([u(".tab-group__nav")],oe.prototype,"nav",2);de([u(".tab-group__indicator")],oe.prototype,"indicator",2);de([b()],oe.prototype,"hasScrollControls",2);de([b()],oe.prototype,"shouldHideScrollStartButton",2);de([b()],oe.prototype,"shouldHideScrollEndButton",2);de([r()],oe.prototype,"placement",2);de([r()],oe.prototype,"activation",2);de([r({attribute:"no-scroll-controls",type:Boolean})],oe.prototype,"noScrollControls",2);de([r({type:Boolean})],oe.prototype,"contained",2);de([r({type:Boolean})],oe.prototype,"sharp",2);de([r({attribute:"fixed-scroll-controls",type:Boolean})],oe.prototype,"fixedScrollControls",2);de([xa({passive:!0})],oe.prototype,"updateScrollButtons",1);de([m("noScrollControls",{waitUntilFirstUpdate:!0})],oe.prototype,"updateScrollControls",1);de([m("placement",{waitUntilFirstUpdate:!0})],oe.prototype,"syncIndicator",1);oe.define("syn-tab-group");const xl=h`
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
`,kl=h`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`;var _l=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,jn=(t,e,n,i)=>{for(var a=i>1?void 0:i?Tl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&_l(e,n,a),a};let Cl=0;class dn extends w{constructor(){super(...arguments),this.attrId=++Cl,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}static{this.styles=[k,xl,kl]}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return p`
      <slot
        part="base"
        class=${y({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}}jn([r({reflect:!0})],dn.prototype,"name",2);jn([r({type:Boolean,reflect:!0})],dn.prototype,"active",2);jn([m("active")],dn.prototype,"handleActiveChange",1);dn.define("syn-tab-panel");const Sl=h`
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
`,zl=h`
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
`;var El=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,nt=(t,e,n,i)=>{for(var a=i>1?void 0:i?$l(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&El(e,n,a),a};let Ol=0;class Ge extends w{constructor(){super(...arguments),this.localize=new R(this),this.attrId=++Ol,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}static{this.styles=[k,Sl,zl]}static{this.dependencies={"syn-icon-button":bt}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,p`
      <div
        part="base"
        class=${y({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?p`
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
    `}}nt([u(".tab")],Ge.prototype,"tab",2);nt([r({reflect:!0})],Ge.prototype,"panel",2);nt([r({type:Boolean,reflect:!0})],Ge.prototype,"active",2);nt([r({type:Boolean,reflect:!0})],Ge.prototype,"closable",2);nt([r({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);nt([r({type:Number,reflect:!0})],Ge.prototype,"tabIndex",2);nt([m("active")],Ge.prototype,"handleActiveChange",1);nt([m("disabled")],Ge.prototype,"handleDisabledChange",1);Ge.define("syn-tab");Je.define("syn-tag");const Dl=h`
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
`,Nl=h`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`;var Il=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,L=(t,e,n,i)=>{for(var a=i>1?void 0:i?Al(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Il(e,n,a),a};let N=class extends w{constructor(){super(...arguments),this.formControlController=new Fe(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new J(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const a=e??this.input.selectionStart,o=n??this.input.selectionEnd;this.input.setRangeText(t,a,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=this.label?!0:!!t,i=this.helpText?!0:!!e;return p`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${y({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${g(this.name)}
              .value=${Ot(this.value)}
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};N.styles=[k,We,Dl,qe,Nl];L([u(".textarea__control")],N.prototype,"input",2);L([u(".textarea__size-adjuster")],N.prototype,"sizeAdjuster",2);L([b()],N.prototype,"hasFocus",2);L([r({reflect:!0})],N.prototype,"title",2);L([r()],N.prototype,"name",2);L([r()],N.prototype,"value",2);L([r({reflect:!0})],N.prototype,"size",2);L([r()],N.prototype,"label",2);L([r({attribute:"help-text"})],N.prototype,"helpText",2);L([r()],N.prototype,"placeholder",2);L([r({type:Number})],N.prototype,"rows",2);L([r()],N.prototype,"resize",2);L([r({type:Boolean,reflect:!0})],N.prototype,"disabled",2);L([r({type:Boolean,reflect:!0})],N.prototype,"readonly",2);L([r({reflect:!0})],N.prototype,"form",2);L([r({type:Boolean,reflect:!0})],N.prototype,"required",2);L([r({type:Number})],N.prototype,"minlength",2);L([r({type:Number})],N.prototype,"maxlength",2);L([r()],N.prototype,"autocapitalize",2);L([r()],N.prototype,"autocorrect",2);L([r()],N.prototype,"autocomplete",2);L([r({type:Boolean})],N.prototype,"autofocus",2);L([r()],N.prototype,"enterkeyhint",2);L([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],N.prototype,"spellcheck",2);L([r()],N.prototype,"inputmode",2);L([pt()],N.prototype,"defaultValue",2);L([m("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);L([m("rows",{waitUntilFirstUpdate:!0})],N.prototype,"handleRowsChange",1);L([m("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1);N=L([ie("SynTextarea")],N);N.define("syn-textarea");he.define("syn-tooltip");const Ml=["blur","change","clear","focus","invalid","input","move"],ia=(t,e)=>t.includes(e),li=t=>ia(t,"blur"),mn=t=>ia(t,"invalid"),Pl=(t="")=>t.split(" ").map(e=>e.trim()).filter(Boolean),di=(t,e)=>{const n=e.trim();return t instanceof w&&Ml.includes(n)?`syn-${n}`:n},Ll=h`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`;var Fl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,Te=(t,e,n,i)=>{for(var a=i>1?void 0:i?jl(e,n):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(a=(i?s(e,n,a):s(a))||a);return i&&a&&Fl(e,n,a),a};let le=class extends w{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=t=>{t.currentTarget.validity?.valid&&(this.validationMessage="")},this.validate=t=>{if(mn(t.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}mn(t.type)&&this.variant!=="native"&&(t.preventDefault(),t.stopPropagation());const e=t.currentTarget;if(this.isValid=e.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(e);return}!this.isValid&&!li(t.type)&&this.handleFocus(e),this.setValidationMessage(e),!li(t.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,e.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const t=this.getInput();await this.updateComplete,t?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const t=this.getInput();t&&(this.setCustomValidationMessage(t),this.setValidationMessage(t))}getValidity(){return this.isValid}getInput(){const t=this.slottedChildren[0];return t||void 0}getUsedEventNames(){const t=this.getInput();if(!t)return[];const e=Pl(this.on),[...n]=e.filter(Boolean);return n.includes("invalid")||n.push("invalid"),n.includes("live")&&(n.push("input"),n.push("blur")),Array.from(new Set(n.filter(i=>i!=="live").map(i=>di(t,i))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const t=this.getInput();if(!t)return;const e=this.getUsedEventNames();e.forEach(i=>{t.addEventListener(i,this.validate,{capture:mn(i),signal:this.controller.signal})});const n=di(t,"change");e.includes(n)||t.addEventListener(n,this.internalRevalidate,{signal:this.controller.signal})}setValidationMessage(t){const{customValidationMessage:e}=this,n=e||t.validationMessage;this.validationMessage=n}setCustomValidationMessage(t){t.setCustomValidity(this.customValidationMessage)}handleFocus(t){const e=document.activeElement,n=e.closest("syn-validate");!e.validity?.valid&&n||(t.scrollIntoView({block:"nearest"}),t.focus())}async firstUpdated(t){super.firstUpdated(t),this.updateEvents();const e=this.getInput();this.customValidationMessage&&(e instanceof w&&await e.updateComplete,e?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=e?.validity?.valid??!1,e?.reportValidity())}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(t=>{const e=this.getInput();if(!e)return;t.filter(({target:i})=>i===e).every(i=>{const a=i.target;return a.hasAttribute("disabled")||a.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(e instanceof w?e.updateComplete:Promise.resolve()).then(()=>{this.isValid=e?.validity?.valid??!1,this.validationMessage=e?.validationMessage??""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect()}renderInlineValidation(){return this.variant!=="inline"||!this.validationMessage?"":p`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        variant="danger"
      >
        ${this.hideIcon?"":p`<syn-icon slot="icon" name="error" library="system"></syn-icon>`}
        ${this.validationMessage}
      </syn-alert>
    `}render(){return p`
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
    `}};le.styles=[k,Ll];le.dependencies={"syn-alert":X};Te([Pt()],le.prototype,"slottedChildren",2);Te([b()],le.prototype,"validationMessage",2);Te([b()],le.prototype,"eagerFirstMount",2);Te([b()],le.prototype,"isInternalTriggeredInvalid",2);Te([b()],le.prototype,"isValid",2);Te([r({reflect:!0})],le.prototype,"variant",2);Te([r({attribute:"hide-icon",reflect:!0,type:Boolean})],le.prototype,"hideIcon",2);Te([r({reflect:!0})],le.prototype,"on",2);Te([r({attribute:"custom-validation-message",type:String})],le.prototype,"customValidationMessage",2);Te([r({type:Boolean})],le.prototype,"eager",2);Te([m("on",{waitUntilFirstUpdate:!0})],le.prototype,"handleListenerChange",1);Te([m("eager",{waitUntilFirstUpdate:!1})],le.prototype,"handleEagerChange",1);Te([m("customValidationMessage",{waitUntilFirstUpdate:!0})],le.prototype,"handleCustomValidationMessageChange",1);le=Te([ie("SynValidate")],le);le.define("syn-validate");function Vl(t){const e=typeof window<"u"&&window;return!!(e&&(/Chromatic/.test(e.navigator.userAgent)||/chromatic=true/.test(e.location.href)))}const Hl=(t,...e)=>Vl()?p`
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
    `:t(...e),tn="🌞 light",gn="🌙 dark",Bl=t=>`https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=${t}`,Rl=(t,e="Go to Figma page")=>({label:e,type:"link",url:Bl(t)});function Ul(t,e){const n=document.querySelectorAll(`#anchor--${e.id}`),a=JSON.parse('{"@synergy-design-system/components":"2.34.0","@synergy-design-system/assets":"1.14.0","@synergy-design-system/styles":"1.7.1","@synergy-design-system/tokens":"2.20.0"}');return n.forEach(o=>{const s=o.querySelector(".docblock-code-toggle");if(s){const l=s.cloneNode(!0);l.textContent="Edit on CodePen",l.classList.add("docblock-codepen-button");const d=o.querySelector(".sb-bar");d?o.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.remove()}):o.querySelectorAll(".docblock-codepen-button").forEach(c=>{c.remove()}),s.parentElement.appendChild(l),d&&(o.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.style.display="block",c.style.borderRight="none"}),o.querySelector(".docblock-codepen-button:last-of-type").style.display="none"),l.addEventListener("click",()=>{const c=document.createElement("form");c.action="https://codepen.io/pen/define",c.method="POST",c.target="_blank";const f={css:`/* Import theme */
@import url("https://esm.sh/@synergy-design-system/tokens@${a["@synergy-design-system/tokens"]}/dist/themes/light.css");

/* Import utilities */
@import url("https://esm.sh/@synergy-design-system/components@${a["@synergy-design-system/components"]}/dist/styles/index.css");

/* Import styles */
@import url("https://esm.sh/@synergy-design-system/styles@${a["@synergy-design-system/styles"]}/dist/index.css");

body {
  font-family: var(--syn-font-sans);
}`,css_external:"",description:"",editors:1110,head:'<meta name="viewport" content="width=device-width">',html:t,js:`import * as components from "https://esm.sh/@synergy-design-system/components@${a["@synergy-design-system/components"]}/dist/synergy.js";

// Override to make icons work with CDN
const { registerIconLibrary } = components;

registerIconLibrary("default", {
resolver: (name) =>
\`https://esm.sh/@synergy-design-system/assets@${a["@synergy-design-system/assets"]}/src/icons/\${name}.svg\`
});`,js_external:"",js_module:!0,js_pre_processor:"none",tags:["synergy-design-system","web components"],title:""},_=document.createElement("input");_.type="hidden",_.name="data",_.value=JSON.stringify(f),c.append(_),document.documentElement.append(c),c.submit(),c.remove()})}}),t}const Wl=po({defaultTheme:tn,parentSelector:"body",themes:{[tn]:"syn-theme-light",[gn]:"syn-theme-dark"}}),aa={decorators:[Hl,Wl],parameters:{backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{diffThreshold:.5,disableSnapshot:!0,modes:{[tn]:{theme:tn},[gn]:{theme:gn}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},design:Rl("104-238"),docs:{stories:{inline:!1},toc:{headingSelector:"h2, h3"},source:{format:"html",transform:(t,e)=>Gl.codeOptimizer(Ul(t,e))}},viewport:{defaultViewport:"defaultViewPort",viewports:{...vo,defaultViewPort:{name:"Default",styles:{width:"100%",height:"100%"},type:"desktop"}}}}},dd=Object.freeze(Object.defineProperty({__proto__:null,default:aa},Symbol.toStringTag,{value:"Module"})),$t={schemaVersion:"1.0.0",readme:"",modules:[{kind:"javascript-module",path:"../components/src/components/accordion/accordion.js",declarations:[{kind:"class",description:"",name:"SynAccordion",cssParts:[{description:"The component's base wrapper.",name:"base"}],slots:[{description:"The accordion's main content. Must be `<syn-details />` elements.",name:""}],members:[{kind:"field",name:"detailsInDefaultSlot",type:{text:"SynDetails[]"}},{kind:"field",name:"closeOthers",type:{text:"boolean"},default:"false",description:"Indicates whether or not multiple `<syn-detail>` elements can be open at the same time.",attribute:"close-others"},{kind:"field",name:"contained",type:{text:"boolean"},default:"false",description:"Draws the accordion and the slotted `<syn-details>` as contained elements.",attribute:"contained",reflects:!0},{kind:"field",name:"size",type:{text:"'medium' | 'large'"},default:"'medium'",description:"The size that should be applied to all slotted `<syn-details>` elements",attribute:"size",reflects:!0},{kind:"method",name:"adjustDetailsSize",privacy:"private"},{kind:"method",name:"adjustDetailsContained",privacy:"private"},{kind:"method",name:"handleSizeChange"},{kind:"method",name:"handleContainedChange"},{kind:"method",name:"handleSlotChange"},{kind:"field",name:"handleAccordionShow",privacy:"private"}],attributes:[{name:"close-others",type:{text:"boolean"},default:"false",description:"Indicates whether or not multiple `<syn-detail>` elements can be open at the same time.",fieldName:"closeOthers"},{name:"contained",type:{text:"boolean"},default:"false",description:"Draws the accordion and the slotted `<syn-details>` as contained elements.",fieldName:"contained"},{name:"size",type:{text:"'medium' | 'large'"},default:"'medium'",description:"The size that should be applied to all slotted `<syn-details>` elements",fieldName:"size"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Accordions provide the ability to group a list of `<syn-details>`.",tagNameWithoutPrefix:"accordion",tagName:"syn-accordion",customElement:!0,jsDoc:`/**
 * @summary Accordions provide the ability to group a list of \`<syn-details>\`.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-accordion--docs
 * @status stable
 * @since 1.23.0
 *
 * @slot - The accordion's main content. Must be \`<syn-details />\` elements.
 *
 * @csspart base - The component's base wrapper.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-accordion--docs",status:"stable",since:"1.23.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynAccordion",module:"../components/src/components/accordion/accordion.js"}}]},{kind:"javascript-module",path:"../components/src/components/alert/alert.js",declarations:[{kind:"class",description:"",name:"SynAlert",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The container that wraps the optional icon.",name:"icon"},{description:"The container that wraps the alert's main content.",name:"message"},{description:"The close button, an `<syn-icon-button>`.",name:"close-button"},{description:"The close button's exported `base` part.",name:"close-button__base"}],slots:[{description:"The alert's main content.",name:""},{description:"An icon to show in the alert. Works best with `<syn-icon>`.",name:"icon"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon-button': SynIconButton }"},{kind:"field",name:"autoHideTimeout",type:{text:"number"},privacy:"private"},{kind:"field",name:"remainingTimeInterval",type:{text:"number"},privacy:"private"},{kind:"field",name:"countdownAnimation",type:{text:"Animation | undefined"},privacy:"private"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'icon', 'suffix')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"currentToastStack",type:{text:"HTMLDivElement"},privacy:"private",static:!0},{kind:"field",name:"toastStack",privacy:"private",static:!0,readonly:!0},{kind:"field",name:"base",type:{text:"HTMLElement"}},{kind:"field",name:"countdownElement",type:{text:"HTMLElement"}},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the alert's open state.",attribute:"open",reflects:!0},{kind:"field",name:"closable",type:{text:"boolean"},default:"false",description:"Enables a close button that allows the user to dismiss the alert.",attribute:"closable",reflects:!0},{kind:"field",name:"variant",type:{text:"'primary' | 'success' | 'neutral' | 'warning' | 'danger'"},default:"'primary'",description:"The alert's theme variant.",attribute:"variant",reflects:!0},{kind:"field",name:"duration",default:"Infinity",description:"The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with\nthe alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning\nthe alert will not close on its own.",attribute:"duration"},{kind:"field",name:"countdown",type:{text:"'rtl' | 'ltr' | undefined"},privacy:"private",description:`Enables a countdown that indicates the remaining time the alert will be displayed.
Typically used to indicate the remaining time before a whole app refresh.`},{kind:"field",name:"remainingTime",privacy:"private"},{kind:"method",name:"restartAutoHide",privacy:"private"},{kind:"method",name:"pauseAutoHide",privacy:"private"},{kind:"method",name:"resumeAutoHide",privacy:"private"},{kind:"method",name:"handleCountdownChange",privacy:"private"},{kind:"method",name:"handleCloseClick",privacy:"private"},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"handleDurationChange"},{kind:"method",name:"show",description:"Shows the alert."},{kind:"method",name:"hide",description:"Hides the alert"},{kind:"method",name:"toast",description:`Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
calling this method again. The returned promise will resolve after the alert is hidden.`}],events:[{description:"Emitted when the alert opens.",name:"syn-show"},{description:"Emitted after the alert opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the alert closes.",name:"syn-hide"},{description:"Emitted after the alert closes and all animations are complete.",name:"syn-after-hide"}],attributes:[{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the alert's open state.",fieldName:"open"},{name:"closable",type:{text:"boolean"},default:"false",description:"Enables a close button that allows the user to dismiss the alert.",fieldName:"closable"},{name:"variant",type:{text:"'primary' | 'success' | 'neutral' | 'warning' | 'danger'"},default:"'primary'",description:"The alert's theme variant.",fieldName:"variant"},{name:"duration",default:"Infinity",description:"The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with\nthe alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning\nthe alert will not close on its own.",fieldName:"duration"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Alerts are used to display important messages inline or as toast notifications.",tagNameWithoutPrefix:"alert",tagName:"syn-alert",customElement:!0,jsDoc:`/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-alert--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with \`<syn-icon>\`.
 *
 * @event syn-show - Emitted when the alert opens.
 * @event syn-after-show - Emitted after the alert opens and all animations are complete.
 * @event syn-hide - Emitted when the alert closes.
 * @event syn-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an \`<syn-icon-button>\`.
 * @csspart close-button__base - The close button's exported \`base\` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-alert--docs",status:"stable",since:"2.0",dependencies:["syn-icon-button"],animations:[{name:"alert.show",description:"The animation to use when showing the alert."},{name:"alert.hide",description:"The animation to use when hiding the alert."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynAlert",module:"../components/src/components/alert/alert.js"}}]},{kind:"javascript-module",path:"../components/src/components/badge/badge.js",declarations:[{kind:"class",description:"",name:"SynBadge",cssParts:[{description:"The component's base wrapper.",name:"base"}],slots:[{description:"The badge's content.",name:""}],members:[{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"variant",type:{text:"'primary' | 'success' | 'neutral' | 'warning' | 'danger'"},default:"'primary'",description:"The badge's theme variant.",attribute:"variant",reflects:!0}],attributes:[{name:"variant",type:{text:"'primary' | 'success' | 'neutral' | 'warning' | 'danger'"},default:"'primary'",description:"The badge's theme variant.",fieldName:"variant"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Badges are used to draw attention and display statuses or counts.",tagNameWithoutPrefix:"badge",tagName:"syn-badge",customElement:!0,jsDoc:`/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-badge--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's base wrapper.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-badge--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynBadge",module:"../components/src/components/badge/badge.js"}}]},{kind:"javascript-module",path:"../components/src/components/breadcrumb-item/breadcrumb-item.js",declarations:[{kind:"class",description:"",name:"SynBreadcrumbItem",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The breadcrumb item's label.",name:"label"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The container that wraps the suffix.",name:"suffix"},{description:"The container that wraps the separator.",name:"separator"}],slots:[{description:"The breadcrumb item's label.",name:""},{description:"An optional prefix, usually an icon or icon button.",name:"prefix"},{description:"An optional suffix, usually an icon or icon button.",name:"suffix"},{description:"The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<syn-breadcrumb>` instead.",name:"separator"}],members:[{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'prefix', 'suffix')"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"renderType",type:{text:"'button' | 'link' | 'dropdown'"},privacy:"private",default:"'button'"},{kind:"field",name:"href",type:{text:"string | undefined"},description:`Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead.`,attribute:"href"},{kind:"field",name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top' | undefined"},description:"Tells the browser where to open the link. Only used when `href` is set.",attribute:"target"},{kind:"field",name:"rel",type:{text:"string"},default:"'noreferrer noopener'",description:"The `rel` attribute to use on the link. Only used when `href` is set.",attribute:"rel"},{kind:"method",name:"setRenderType",privacy:"private"},{kind:"method",name:"hrefChanged"},{kind:"method",name:"handleSlotChange"}],attributes:[{name:"href",type:{text:"string | undefined"},description:`Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead.`,fieldName:"href"},{name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top' | undefined"},description:"Tells the browser where to open the link. Only used when `href` is set.",fieldName:"target"},{name:"rel",type:{text:"string"},default:"'noreferrer noopener'",description:"The `rel` attribute to use on the link. Only used when `href` is set.",fieldName:"rel"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.",tagNameWithoutPrefix:"breadcrumb-item",tagName:"syn-breadcrumb-item",customElement:!0,jsDoc:`/**
 * @summary Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-breadcrumb-item--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The breadcrumb item's label.
 * @slot prefix - An optional prefix, usually an icon or icon button.
 * @slot suffix - An optional suffix, usually an icon or icon button.
 * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If
 * you want to change it for all items in the group, set the separator on \`<syn-breadcrumb>\` instead.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The breadcrumb item's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart separator - The container that wraps the separator.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-breadcrumb-item--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynBreadcrumbItem",module:"../components/src/components/breadcrumb-item/breadcrumb-item.js"}}]},{kind:"javascript-module",path:"../components/src/components/breadcrumb/breadcrumb.js",declarations:[{kind:"class",description:"",name:"SynBreadcrumb",cssParts:[{description:"The component's base wrapper.",name:"base"}],slots:[{description:"One or more breadcrumb items to display.",name:""},{description:"The separator to use between breadcrumb items. Works best with `<syn-icon>`.",name:"separator"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon }"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"separatorDir",privacy:"private"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"separatorSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users.`,attribute:"label"},{kind:"method",name:"getSeparator",privacy:"private"},{kind:"method",name:"handleSlotChange",privacy:"private"}],attributes:[{name:"label",type:{text:"string"},default:"''",description:`The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users.`,fieldName:"label"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.",tagNameWithoutPrefix:"breadcrumb",tagName:"syn-breadcrumb",customElement:!0,jsDoc:`/**
 * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-breadcrumb--docs
 * @status stable
 * @since 2.0
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with \`<syn-icon>\`.
 *
 * @dependency syn-icon
 *
 * @csspart base - The component's base wrapper.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-breadcrumb--docs",status:"stable",since:"2.0",dependencies:["syn-icon"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynBreadcrumb",module:"../components/src/components/breadcrumb/breadcrumb.js"}}]},{kind:"javascript-module",path:"../components/src/components/button-group/button-group.js",declarations:[{kind:"class",description:"",name:"SynButtonGroup",cssParts:[{description:"The component's base wrapper.",name:"base"}],slots:[{description:"One or more `<syn-button>` elements to display in the button group.",name:""}],members:[{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"disableRole",type:{text:"boolean"},default:"false"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended.`,attribute:"label"},{kind:"method",name:"handleFocus",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleBlur",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleMouseOver",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleMouseOut",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleSlotChange",privacy:"private"}],attributes:[{name:"label",type:{text:"string"},default:"''",description:`A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended.`,fieldName:"label"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Button groups can be used to group related buttons into sections.",tagNameWithoutPrefix:"button-group",tagName:"syn-button-group",customElement:!0,jsDoc:`/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-button-group--docs
 * @status stable
 * @since 2.0
 *
 * @slot - One or more \`<syn-button>\` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-button-group--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynButtonGroup",module:"../components/src/components/button-group/button-group.js"}}]},{kind:"javascript-module",path:"../components/src/components/button/button.js",declarations:[{kind:"class",description:"",name:"SynButton",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The button's label.",name:"label"},{description:"The container that wraps the suffix.",name:"suffix"},{description:"The button's caret icon, an `<syn-icon>` element.",name:"caret"},{description:"The spinner that shows when the button is in the loading state.",name:"spinner"}],slots:[{description:"The button's label.",name:""},{description:"A presentational prefix icon or similar element.",name:"prefix"},{description:"A presentational suffix icon or similar element.",name:"suffix"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon, 'syn-spinner': SynSpinner }"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['click'] })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, '[default]', 'prefix', 'suffix')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"button",type:{text:"HTMLButtonElement | HTMLLinkElement"}},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"iconOnly",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"invalid",type:{text:"boolean"},default:"false"},{kind:"field",name:"title",type:{text:"string"},default:"''",attribute:"title",reflects:!0},{kind:"field",name:"variant",type:{text:"'filled' | 'outline' | 'text'"},default:"'outline'",description:"The button's theme variant.",attribute:"variant",reflects:!0},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The button's size.",attribute:"size",reflects:!0},{kind:"field",name:"caret",type:{text:"boolean"},default:"false",description:"Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.",attribute:"caret",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the button.",attribute:"disabled",reflects:!0},{kind:"field",name:"loading",type:{text:"boolean"},default:"false",description:"Draws the button in a loading state.",attribute:"loading",reflects:!0},{kind:"field",name:"type",type:{text:"'button' | 'submit' | 'reset'"},default:"'button'",description:"The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native\n`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.",attribute:"type"},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.\nThis attribute is ignored when `href` is present.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"The value of the button, submitted as a pair with the button's name as part of the form data, but only when this\nbutton is the submitter. This attribute is ignored when `href` is present.",attribute:"value"},{kind:"field",name:"href",type:{text:"string"},default:"''",description:"When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",attribute:"href"},{kind:"field",name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top'"},description:"Tells the browser where to open the link. Only used when `href` is present.",attribute:"target"},{kind:"field",name:"rel",type:{text:"string"},default:"'noreferrer noopener'",description:"When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the\ndefault is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a\nspecific tab/window, this will prevent that from working correctly. You can remove or change the default value by\nsetting the attribute to an empty string or a value of your choice, respectively.",attribute:"rel"},{kind:"field",name:"download",type:{text:"string | undefined"},description:"Tells the browser to download the linked file as this filename. Only used when `href` is present.",attribute:"download"},{kind:"field",name:"form",type:{text:"string"},description:`The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button.`,attribute:"form"},{kind:"field",name:"formAction",type:{text:"string"},description:"Used to override the form owner's `action` attribute.",attribute:"formaction"},{kind:"field",name:"formEnctype",type:{text:"'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'"},description:"Used to override the form owner's `enctype` attribute.",attribute:"formenctype"},{kind:"field",name:"formMethod",type:{text:"'post' | 'get'"},description:"Used to override the form owner's `method` attribute.",attribute:"formmethod"},{kind:"field",name:"formNoValidate",type:{text:"boolean"},description:"Used to override the form owner's `novalidate` attribute.",attribute:"formnovalidate"},{kind:"field",name:"formTarget",type:{text:"'_self' | '_blank' | '_parent' | '_top' | string"},description:"Used to override the form owner's `target` attribute.",attribute:"formtarget"},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleClick",privacy:"private"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"isButton",privacy:"private"},{kind:"method",name:"isLink",privacy:"private"},{kind:"method",name:"handleSlotChange",privacy:"private"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"click",description:"Simulates a click on the button."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the button."},{kind:"method",name:"blur",description:"Removes focus from the button."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."}],events:[{description:"Emitted when the button loses focus.",name:"syn-blur"},{description:"Emitted when the button gains focus.",name:"syn-focus"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"}],attributes:[{name:"title",type:{text:"string"},default:"''",fieldName:"title"},{name:"variant",type:{text:"'filled' | 'outline' | 'text'"},default:"'outline'",description:"The button's theme variant.",fieldName:"variant"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The button's size.",fieldName:"size"},{name:"caret",type:{text:"boolean"},default:"false",description:"Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.",fieldName:"caret"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the button.",fieldName:"disabled"},{name:"loading",type:{text:"boolean"},default:"false",description:"Draws the button in a loading state.",fieldName:"loading"},{name:"type",type:{text:"'button' | 'submit' | 'reset'"},default:"'button'",description:"The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native\n`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.",fieldName:"type"},{name:"name",type:{text:"string"},default:"''",description:"The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.\nThis attribute is ignored when `href` is present.",fieldName:"name"},{name:"value",type:{text:"string"},default:"''",description:"The value of the button, submitted as a pair with the button's name as part of the form data, but only when this\nbutton is the submitter. This attribute is ignored when `href` is present.",fieldName:"value"},{name:"href",type:{text:"string"},default:"''",description:"When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",fieldName:"href"},{name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top'"},description:"Tells the browser where to open the link. Only used when `href` is present.",fieldName:"target"},{name:"rel",type:{text:"string"},default:"'noreferrer noopener'",description:"When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the\ndefault is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a\nspecific tab/window, this will prevent that from working correctly. You can remove or change the default value by\nsetting the attribute to an empty string or a value of your choice, respectively.",fieldName:"rel"},{name:"download",type:{text:"string | undefined"},description:"Tells the browser to download the linked file as this filename. Only used when `href` is present.",fieldName:"download"},{name:"form",type:{text:"string"},description:`The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button.`,fieldName:"form"},{name:"formaction",type:{text:"string"},description:"Used to override the form owner's `action` attribute.",fieldName:"formAction"},{name:"formenctype",type:{text:"'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'"},description:"Used to override the form owner's `enctype` attribute.",fieldName:"formEnctype"},{name:"formmethod",type:{text:"'post' | 'get'"},description:"Used to override the form owner's `method` attribute.",fieldName:"formMethod"},{name:"formnovalidate",type:{text:"boolean"},description:"Used to override the form owner's `novalidate` attribute.",fieldName:"formNoValidate"},{name:"formtarget",type:{text:"'_self' | '_blank' | '_parent' | '_top' | string"},description:"Used to override the form owner's `target` attribute.",fieldName:"formTarget"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Buttons represent actions that are available to the user.",tagNameWithoutPrefix:"button",tagName:"syn-button",customElement:!0,jsDoc:`/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-button--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-spinner
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an \`<syn-icon>\` element.
 * @csspart spinner - The spinner that shows when the button is in the loading state.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-button--docs",status:"stable",since:"2.0",dependencies:["syn-icon","syn-spinner"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynButton",module:"../components/src/components/button/button.js"}}]},{kind:"javascript-module",path:"../components/src/components/card/card.js",declarations:[{kind:"class",description:"",name:"SynCard",cssProperties:[{description:"The card's border color, including borders that occur inside the card.",name:"--border-color"},{description:"The border radius for the card's edges.",name:"--border-radius"},{description:"The width of the card's borders.",name:"--border-width"},{description:"The padding to use for the card's sections.",name:"--padding"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The container that wraps the card's image.",name:"image"},{description:"The container that wraps the card's header.",name:"header"},{description:"The container that wraps the card's main content.",name:"body"},{description:"The container that wraps the card's footer.",name:"footer"}],slots:[{description:"The card's main content.",name:""},{description:"An optional header for the card.",name:"header"},{description:"An optional footer for the card.",name:"footer"},{description:"An optional image to render at the start of the card.",name:"image"}],members:[{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'footer', 'header', 'image')"},{kind:"field",name:"sharp",type:{text:"boolean"},default:"false",description:"Draws the card with sharp edges. Can be used e.g. when nesting multiple syn-cards to create hierarchy.",attribute:"sharp",reflects:!0}],attributes:[{name:"sharp",type:{text:"boolean"},default:"false",description:"Draws the card with sharp edges. Can be used e.g. when nesting multiple syn-cards to create hierarchy.",fieldName:"sharp"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Cards can be used to group related subjects in a container.",tagNameWithoutPrefix:"card",tagName:"syn-card",customElement:!0,jsDoc:`/**
 * @summary Cards can be used to group related subjects in a container.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-card--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot image - An optional image to render at the start of the card.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The container that wraps the card's image.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for the card's edges.
 * @cssproperty --border-width - The width of the card's borders.
 * @cssproperty --padding - The padding to use for the card's sections.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-card--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynCard",module:"../components/src/components/card/card.js"}}]},{kind:"javascript-module",path:"../components/src/components/checkbox/checkbox.js",declarations:[{kind:"class",description:"",name:"SynCheckbox",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The square container that wraps the checkbox's checked state.",name:"control"},{description:"Matches the control part when the checkbox is checked.",name:"control--checked"},{description:"Matches the control part when the checkbox is indeterminate.",name:"control--indeterminate"},{description:"The checked icon, an `<syn-icon>` element.",name:"checked-icon"},{description:"The indeterminate icon, an `<syn-icon>` element.",name:"indeterminate-icon"},{description:"The container that wraps the checkbox's label.",name:"label"},{description:"The help text's wrapper.",name:"form-control-help-text"}],slots:[{description:"The checkbox's label.",name:""},{description:"Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.",name:"help-text"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon }"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { value: (control: SynCheckbox) => (control.checked ? control.value || 'on' : undefined), defaultValue: (control: SynCheckbox) => control.defaultChecked, setValue: (control: SynCheckbox, checked: boolean) => (control.checked = checked) })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text')"},{kind:"field",name:"input",type:{text:"HTMLInputElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"title",type:{text:"string"},default:"''",attribute:"title",reflects:!0},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the checkbox, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},description:"The current value of the checkbox, submitted as a name/value pair with form data.",attribute:"value"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The checkbox's size.",attribute:"size",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the checkbox.",attribute:"disabled",reflects:!0},{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Draws the checkbox in a checked state.",attribute:"checked",reflects:!0},{kind:"field",name:"indeterminate",type:{text:"boolean"},default:"false",description:`Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states.`,attribute:"indeterminate",reflects:!0},{kind:"field",name:"defaultChecked",type:{text:"boolean"},default:"false",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"Makes the checkbox a required field.",attribute:"required",reflects:!0},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"handleClick",privacy:"private"},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleInput",privacy:"private"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleStateChange"},{kind:"method",name:"click",description:"Simulates a click on the checkbox."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the checkbox."},{kind:"method",name:"blur",description:"Removes focus from the checkbox."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:`Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
the custom validation message, call this method with an empty string.`}],events:[{description:"Emitted when the checkbox loses focus.",name:"syn-blur"},{description:"Emitted when the checked state changes.",name:"syn-change"},{description:"Emitted when the checkbox gains focus.",name:"syn-focus"},{description:"Emitted when the checkbox receives input.",name:"syn-input"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"}],attributes:[{name:"title",type:{text:"string"},default:"''",fieldName:"title"},{name:"name",type:{text:"string"},default:"''",description:"The name of the checkbox, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",type:{text:"string"},description:"The current value of the checkbox, submitted as a name/value pair with form data.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The checkbox's size.",fieldName:"size"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the checkbox.",fieldName:"disabled"},{name:"checked",type:{text:"boolean"},default:"false",description:"Draws the checkbox in a checked state.",fieldName:"checked"},{name:"indeterminate",type:{text:"boolean"},default:"false",description:`Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states.`,fieldName:"indeterminate"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"Makes the checkbox a required field.",fieldName:"required"},{name:"help-text",type:{text:"string"},default:"''",description:"The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Checkboxes allow the user to toggle an option on or off.",tagNameWithoutPrefix:"checkbox",tagName:"syn-checkbox",customElement:!0,jsDoc:`/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-checkbox--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the \`help-text\` attribute.
 *
 * @event syn-blur - Emitted when the checkbox loses focus.
 * @event syn-change - Emitted when the checked state changes.
 * @event syn-focus - Emitted when the checkbox gains focus.
 * @event syn-input - Emitted when the checkbox receives input.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an \`<syn-icon>\` element.
 * @csspart indeterminate-icon - The indeterminate icon, an \`<syn-icon>\` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart form-control-help-text - The help text's wrapper.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-checkbox--docs",status:"stable",since:"2.0",dependencies:["syn-icon"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynCheckbox",module:"../components/src/components/checkbox/checkbox.js"}}]},{kind:"javascript-module",path:"../components/src/components/combobox/combobox.js",declarations:[{kind:"class",description:"",name:"SynCombobox",cssParts:[{description:"The form control that wraps the label, combobox, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The combobox's wrapper.",name:"form-control-input"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The container the wraps the prefix, combobox, clear icon, and expand button.",name:"combobox"},{description:"The container that wraps the prefix slot.",name:"prefix"},{description:"The container that wraps the suffix slot.",name:"suffix"},{description:"The element that displays the selected option's label, an `<input>` element.",name:"display-input"},{description:"The listbox container where the options are slotted and the filtered options list exists.",name:"listbox"},{description:"The container that wraps the filtered options.",name:"filtered-listbox"},{description:"The clear button.",name:"clear-button"},{description:"The container that wraps the expand icon.",name:"expand-icon"},{description:"The popup's exported `popup` part. Use this to target the tooltip's popup container.",name:"popup"}],slots:[{description:"The listbox options. Must be `<syn-option>` elements. You can use `<syn-optgroup>`'s to group items visually.",name:""},{description:"The combobox's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Used to prepend a presentational icon or similar element to the combobox.",name:"prefix"},{description:"Used to append a presentational icon or similar element to the combobox.",name:"suffix"},{description:"An icon to use in lieu of the default clear icon.",name:"clear-icon"},{description:"The icon to show when the control is expanded and collapsed. Rotates on open and close.",name:"expand-icon"},{description:"Text that describes how to use the combobox. Alternatively, you can use the `help-text` attribute.",name:"help-text"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon, 'syn-popup': SynPopup, }"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['syn-blur', 'syn-input'], })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"closeWatcher",type:{text:"CloseWatcher | null"},privacy:"private"},{kind:"field",name:"lastOptionValue",type:{text:"string"},privacy:"private",default:"''",description:"The last value of a syn-option, that was selected by click or via keyboard navigation"},{kind:"field",name:"isOptionRendererTriggered",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"isInitialized",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"popup",type:{text:"SynPopup"}},{kind:"field",name:"combobox",type:{text:"HTMLSlotElement"}},{kind:"field",name:"displayInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"valueInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"listbox",type:{text:"HTMLSlotElement"}},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"},privacy:"private"},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"displayLabel",type:{text:"string"},default:"''"},{kind:"field",name:"selectedOption",type:{text:"SynOption | undefined"}},{kind:"field",name:"numberFilteredOptions",type:{text:"number"},default:"0"},{kind:"field",name:"cachedOptions",type:{text:"SynOption []"},default:"[]"},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the combobox, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"The current value of the combobox, submitted as a name/value pair with form data.",attribute:"value"},{kind:"field",name:"defaultValue",type:{text:"string"},default:"''",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The combobox's size.",attribute:"size",reflects:!0},{kind:"field",name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the combobox is empty.",attribute:"placeholder"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the combobox control.",attribute:"disabled",reflects:!0},{kind:"field",name:"clearable",type:{text:"boolean"},default:"false",description:"Adds a clear button when the combobox is not empty.",attribute:"clearable"},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the combobox is open.\nYou can toggle this attribute to show and hide the listbox, or you can use the `show()`\nand `hide()` methods and this attribute will reflect the combobox's open state.",attribute:"open",reflects:!0},{kind:"field",name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the listbox from being clipped,\nwhen the component is placed inside a container with `overflow: auto|scroll`.\nHoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",attribute:"hoist"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The combobox's label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"placement",type:{text:"'top' | 'bottom'"},default:"'bottom'",description:`The preferred placement of the combobox's menu.
Note that the actual placement may vary as needed to keep the listbox inside of the viewport.`,attribute:"placement",reflects:!0},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The combobox's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element.\nThis attribute allows you to place the form control outside of a form and associate it\nwith the form that has this `id`.\nThe form must be in the same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"The combobox's required attribute.",attribute:"required",reflects:!0},{kind:"field",name:"getOption",type:{text:"OptionRenderer"},default:"defaultOptionRenderer",description:`A function that customizes the rendered option. The first argument is the option, the second
is the query string, which is typed into the combobox.
The function should return either a Lit TemplateResult or a string containing trusted HTML
to render in the shown list of filtered options.
If the query string should be highlighted use the \`highlightOptionRenderer\` function.`,attribute:"getOption"},{kind:"field",name:"filter",type:{text:"(option: SynOption, queryString: string) => boolean"},description:`A function used to filter options in the combobox component.
The default filter method is a case- and diacritic-insensitive string comparison.`,parameters:[{description:"The option to be filtered.",name:"option"},{description:"The query string used for filtering.",name:"queryString"}],return:{type:{text:""}},attribute:"filter"},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"addOpenListeners",privacy:"private"},{kind:"method",name:"removeOpenListeners",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"field",name:"handleDocumentFocusIn",privacy:"private"},{kind:"field",name:"handleDocumentKeyDown",privacy:"private"},{kind:"field",name:"handleDocumentMouseDown",privacy:"private"},{kind:"method",name:"handleLabelClick",privacy:"private"},{kind:"method",name:"handleComboboxMouseDown",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleComboboxKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleClearClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"clearCombobox",privacy:"private"},{kind:"method",name:"preventLoosingFocus",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleOptionClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"selectNextOption",privacy:"private",parameters:[{name:"isNext",type:{text:"boolean"},description:`A boolean indicating whether to select the following option (true)
  or the previous option (false).`}],description:"Selects the following or previous option."},{kind:"method",name:"getAllFilteredOptions",privacy:"private"},{kind:"method",name:"getCurrentOption",privacy:"private"},{kind:"method",name:"setCurrentOption",privacy:"private",parameters:[{name:"option",type:{text:"SynOption | null"}}]},{kind:"method",name:"setSelectedOption",privacy:"private",parameters:[{name:"option",type:{text:"SynOption | undefined"}}],description:"Updates the selected options cache, the current value, and the display value"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handlePropertiesChange"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"show",description:`Shows the listbox. If it is not possible to open the listbox, because there are no
appropriate filtered options, a syn-error is emitted and the listbox stays closed.`},{kind:"method",name:"hide",description:"Hides the listbox."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message.\nReturns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the control."},{kind:"method",name:"blur",description:"Removes focus from the control."},{kind:"method",name:"createComboboxOptionsFromQuery",privacy:"private",parameters:[{name:"queryString",type:{text:"string"}}]},{kind:"method",name:"handleInput",privacy:"private"},{kind:"method",name:"handleChange",privacy:"private"},{kind:"method",name:"getSlottedOptions",privacy:"private"},{kind:"method",name:"getSlottedOptGroups",privacy:"private",return:{type:{text:"SynOptGroup[]"}}},{kind:"method",name:"cacheSlottedOptionsAndOptgroups",privacy:"private"},{kind:"method",name:"updateSelectedOptionFromValue",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"handleDefaultSlotChange",privacy:"public"}],events:[{description:"Emitted when the control's value changes.",name:"syn-change"},{description:"Emitted when the control's value is cleared.",name:"syn-clear"},{description:"Emitted when the control receives input.",name:"syn-input"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when the combobox's menu opens.",name:"syn-show"},{description:"Emitted after the combobox's menu opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the combobox's menu closes.",name:"syn-hide"},{description:"Emitted after the combobox's menu closes and all animations are complete.",name:"syn-after-hide"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"},{description:"Emitted when the combobox menu fails to open.",name:"syn-error"}],attributes:[{name:"name",type:{text:"string"},default:"''",description:"The name of the combobox, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",type:{text:"string"},default:"''",description:"The current value of the combobox, submitted as a name/value pair with form data.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The combobox's size.",fieldName:"size"},{name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the combobox is empty.",fieldName:"placeholder"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the combobox control.",fieldName:"disabled"},{name:"clearable",type:{text:"boolean"},default:"false",description:"Adds a clear button when the combobox is not empty.",fieldName:"clearable"},{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the combobox is open.\nYou can toggle this attribute to show and hide the listbox, or you can use the `show()`\nand `hide()` methods and this attribute will reflect the combobox's open state.",fieldName:"open"},{name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the listbox from being clipped,\nwhen the component is placed inside a container with `overflow: auto|scroll`.\nHoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",fieldName:"hoist"},{name:"label",type:{text:"string"},default:"''",description:"The combobox's label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"placement",type:{text:"'top' | 'bottom'"},default:"'bottom'",description:`The preferred placement of the combobox's menu.
Note that the actual placement may vary as needed to keep the listbox inside of the viewport.`,fieldName:"placement"},{name:"help-text",type:{text:"string"},default:"''",description:"The combobox's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element.\nThis attribute allows you to place the form control outside of a form and associate it\nwith the form that has this `id`.\nThe form must be in the same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"The combobox's required attribute.",fieldName:"required"},{name:"getOption",type:{text:"OptionRenderer"},default:"defaultOptionRenderer",description:`A function that customizes the rendered option. The first argument is the option, the second
is the query string, which is typed into the combobox.
The function should return either a Lit TemplateResult or a string containing trusted HTML
to render in the shown list of filtered options.
If the query string should be highlighted use the \`highlightOptionRenderer\` function.`,fieldName:"getOption"},{name:"filter",type:{text:"(option: SynOption, queryString: string) => boolean"},description:`A function used to filter options in the combobox component.
The default filter method is a case- and diacritic-insensitive string comparison.`,parameters:[{description:"The option to be filtered.",name:"option"},{description:"The query string used for filtering.",name:"queryString"}],return:{type:{text:""}},fieldName:"filter"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Comboboxes allow you to choose items from a menu of predefined options.",tagNameWithoutPrefix:"combobox",tagName:"syn-combobox",customElement:!0,jsDoc:`/**
 * @summary Comboboxes allow you to choose items from a menu of predefined options.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-combobox--docs
 * @status stable
 *
 * @dependency syn-icon
 * @dependency syn-popup
 *
 * @slot - The listbox options. Must be \`<syn-option>\` elements.
 *    You can use \`<syn-optgroup>\`'s to group items visually.
 * @slot label - The combobox's label. Alternatively, you can use the \`label\` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed.
 *    Rotates on open and close.
 * @slot help-text - Text that describes how to use the combobox.
 *    Alternatively, you can use the \`help-text\` attribute.
 *
 * @event syn-change - Emitted when the control's value changes.
 * @event syn-clear - Emitted when the control's value is cleared.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-show - Emitted when the combobox's menu opens.
 * @event syn-after-show - Emitted after the combobox's menu opens and all animations are complete.
 * @event syn-hide - Emitted when the combobox's menu closes.
 * @event syn-after-hide - Emitted after the combobox's menu closes and all animations are complete.
 * @event syn-invalid - Emitted when the form control has been checked for validity
 *    and its constraints aren't satisfied.
 * @event syn-error - Emitted when the combobox menu fails to open.
 *
 * @csspart form-control - The form control that wraps the label, combobox, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The combobox's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label,
 *     an \`<input>\` element.
 * @csspart listbox - The listbox container where the options are slotted
 *   and the filtered options list exists.
 * @csspart filtered-listbox - The container that wraps the filtered options.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 * @csspart popup - The popup's exported \`popup\` part.
 * Use this to target the tooltip's popup container.
 *
 * @animation combobox.show - The animation to use when showing the combobox.
 * @animation combobox.hide - The animation to use when hiding the combobox.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-combobox--docs",status:"stable",dependencies:["syn-icon","syn-popup"],animations:[{name:"combobox.show",description:"The animation to use when showing the combobox."},{name:"combobox.hide",description:"The animation to use when hiding the combobox."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynCombobox",module:"../components/src/components/combobox/combobox.js"}}]},{kind:"javascript-module",path:"../components/src/components/details/details.js",declarations:[{kind:"class",description:"",name:"SynDetails",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The header that wraps both the summary and the expand/collapse icon.",name:"header"},{description:"The container that wraps the summary.",name:"summary"},{description:"The container that wraps the expand/collapse icons.",name:"summary-icon"},{description:"The details content.",name:"content"},{description:"The container that wraps the details content.",name:"body"}],slots:[{description:"The details' main content.",name:""},{description:"The details' summary. Alternatively, you can use the `summary` attribute.",name:"summary"},{description:"Optional expand icon to use instead of the default. Works best with `<syn-icon>`.",name:"expand-icon"},{description:"Optional collapse icon to use instead of the default. Works best with `<syn-icon>`.",name:"collapse-icon"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon }"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"details",type:{text:"HTMLDetailsElement"}},{kind:"field",name:"header",type:{text:"HTMLElement"}},{kind:"field",name:"body",type:{text:"HTMLElement"}},{kind:"field",name:"expandIconSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"detailsObserver",type:{text:"MutationObserver"}},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the details' open state.",attribute:"open",reflects:!0},{kind:"field",name:"summary",type:{text:"string"},description:"The summary to show in the header. If you need to display HTML, use the `summary` slot instead.",attribute:"summary"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the details so it can't be toggled.",attribute:"disabled",reflects:!0},{kind:"field",name:"contained",type:{text:"boolean"},default:"false",description:"Draws the details as contained element.",attribute:"contained",reflects:!0},{kind:"field",name:"size",type:{text:"'medium' | 'large'"},default:"'medium'",description:"The details's size.",attribute:"size",reflects:!0},{kind:"method",name:"handleSummaryClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleSummaryKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"show",description:"Shows the details."},{kind:"method",name:"hide",description:"Hides the details"}],events:[{description:"Emitted when the details opens.",name:"syn-show"},{description:"Emitted after the details opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the details closes.",name:"syn-hide"},{description:"Emitted after the details closes and all animations are complete.",name:"syn-after-hide"}],attributes:[{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the details' open state.",fieldName:"open"},{name:"summary",type:{text:"string"},description:"The summary to show in the header. If you need to display HTML, use the `summary` slot instead.",fieldName:"summary"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the details so it can't be toggled.",fieldName:"disabled"},{name:"contained",type:{text:"boolean"},default:"false",description:"Draws the details as contained element.",fieldName:"contained"},{name:"size",type:{text:"'medium' | 'large'"},default:"'medium'",description:"The details's size.",fieldName:"size"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Details show a brief summary and expand to show additional content.",tagNameWithoutPrefix:"details",tagName:"syn-details",customElement:!0,jsDoc:`/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-details--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the \`summary\` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with \`<syn-icon>\`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with \`<syn-icon>\`.
 *
 * @event syn-show - Emitted when the details opens.
 * @event syn-after-show - Emitted after the details opens and all animations are complete.
 * @event syn-hide - Emitted when the details closes.
 * @event syn-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 * @csspart body - The container that wraps the details content.
 *
 * @animation details.show - The animation to use when showing details. You can use \`height: auto\` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use \`height: auto\` with this animation.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-details--docs",status:"stable",since:"2.0",dependencies:["syn-icon"],animations:[{name:"details.show",description:"The animation to use when showing details. You can use `height: auto` with this animation."},{name:"details.hide",description:"The animation to use when hiding details. You can use `height: auto` with this animation."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynDetails",module:"../components/src/components/details/details.js"}}]},{kind:"javascript-module",path:"../components/src/components/dialog/dialog.js",declarations:[{kind:"class",description:"",name:"SynDialog",cssProperties:[{description:"The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.",name:"--width"},{description:"The amount of padding to use for the header.",name:"--header-spacing"},{description:"The amount of padding to use for the body.",name:"--body-spacing"},{description:"The amount of padding to use for the footer.",name:"--footer-spacing"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The overlay that covers the screen behind the dialog.",name:"overlay"},{description:"The dialog's panel (where the dialog and its content are rendered).",name:"panel"},{description:"The dialog's header. This element wraps the title and header actions.",name:"header"},{description:"Optional actions to add to the header. Works best with `<syn-icon-button>`.",name:"header-actions"},{description:"The dialog's title.",name:"title"},{description:"The close button, an `<syn-icon-button>`.",name:"close-button"},{description:"The close button's exported `base` part.",name:"close-button__base"},{description:"The dialog's body.",name:"body"},{description:"The dialog's footer.",name:"footer"}],slots:[{description:"The dialog's main content.",name:""},{description:"The dialog's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Optional actions to add to the header. Works best with `<syn-icon-button>`.",name:"header-actions"},{description:"The dialog's footer, usually one or more buttons representing various options.",name:"footer"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon-button': SynIconButton }"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'footer')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"originalTrigger",type:{text:"HTMLElement | null"},privacy:"private"},{kind:"field",name:"modal",privacy:"public",default:"new Modal(this)",description:"Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Synergy modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Synergy's focus trapping."},{kind:"field",name:"closeWatcher",type:{text:"CloseWatcher | null"},privacy:"private"},{kind:"field",name:"dialog",type:{text:"HTMLElement"}},{kind:"field",name:"panel",type:{text:"HTMLElement"}},{kind:"field",name:"overlay",type:{text:"HTMLElement"}},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.",attribute:"open",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The dialog's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",attribute:"label",reflects:!0},{kind:"field",name:"noHeader",type:{text:"boolean"},default:"false",description:`Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog.`,attribute:"no-header",reflects:!0},{kind:"method",name:"requestClose",privacy:"private",parameters:[{name:"source",type:{text:"'close-button' | 'keyboard' | 'overlay'"}}]},{kind:"method",name:"addOpenListeners",privacy:"private"},{kind:"method",name:"removeOpenListeners",privacy:"private"},{kind:"field",name:"handleDocumentKeyDown",privacy:"private"},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"show",description:"Shows the dialog."},{kind:"method",name:"hide",description:"Hides the dialog"}],events:[{description:"Emitted when the dialog opens.",name:"syn-show"},{description:"Emitted after the dialog opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the dialog closes.",name:"syn-hide"},{description:"Emitted after the dialog closes and all animations are complete.",name:"syn-after-hide"},{description:"Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.",name:"syn-initial-focus"},{type:{text:"{ source: 'close-button' | 'keyboard' | 'overlay' }"},description:"Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.",name:"syn-request-close"}],attributes:[{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.",fieldName:"open"},{name:"label",type:{text:"string"},default:"''",description:"The dialog's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"no-header",type:{text:"boolean"},default:"false",description:`Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog.`,fieldName:"noHeader"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:`Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.`,tagNameWithoutPrefix:"dialog",tagName:"syn-dialog",customElement:!0,jsDoc:`/**
 * @summary Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-dialog--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The dialog's main content.
 * @slot label - The dialog's label. Alternatively, you can use the \`label\` attribute.
 * @slot header-actions - Optional actions to add to the header. Works best with \`<syn-icon-button>\`.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 *
 * @event syn-show - Emitted when the dialog opens.
 * @event syn-after-show - Emitted after the dialog opens and all animations are complete.
 * @event syn-hide - Emitted when the dialog closes.
 * @event syn-after-hide - Emitted after the dialog closes and all animations are complete.
 * @event syn-initial-focus - Emitted when the dialog opens and is ready to receive focus. Calling
 *   \`event.preventDefault()\` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} syn-request-close - Emitted when the user attempts to
 *   close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   \`event.preventDefault()\` will keep the dialog open. Avoid using this unless closing the dialog will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's base wrapper.
 * @csspart overlay - The overlay that covers the screen behind the dialog.
 * @csspart panel - The dialog's panel (where the dialog and its content are rendered).
 * @csspart header - The dialog's header. This element wraps the title and header actions.
 * @csspart header-actions - Optional actions to add to the header. Works best with \`<syn-icon-button>\`.
 * @csspart title - The dialog's title.
 * @csspart close-button - The close button, an \`<syn-icon-button>\`.
 * @csspart close-button__base - The close button's exported \`base\` part.
 * @csspart body - The dialog's body.
 * @csspart footer - The dialog's footer.
 *
 * @cssproperty --width - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.
 * @cssproperty --header-spacing - The amount of padding to use for the header.
 * @cssproperty --body-spacing - The amount of padding to use for the body.
 * @cssproperty --footer-spacing - The amount of padding to use for the footer.
 *
 * @animation dialog.show - The animation to use when showing the dialog.
 * @animation dialog.hide - The animation to use when hiding the dialog.
 * @animation dialog.denyClose - The animation to use when a request to close the dialog is denied.
 * @animation dialog.overlay.show - The animation to use when showing the dialog's overlay.
 * @animation dialog.overlay.hide - The animation to use when hiding the dialog's overlay.
 *
 * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus
 *   trapping and allow third-party modals spawned from an active Synergy modal, call \`modal.activateExternal()\` when
 *   the third-party modal opens. Upon closing, call \`modal.deactivateExternal()\` to restore Synergy's focus trapping.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-dialog--docs",status:"stable",since:"2.0",dependencies:["syn-icon-button"],animations:[{name:"dialog.show",description:"The animation to use when showing the dialog."},{name:"dialog.hide",description:"The animation to use when hiding the dialog."},{name:"dialog.denyClose",description:"The animation to use when a request to close the dialog is denied."},{name:"dialog.overlay.show",description:"The animation to use when showing the dialog's overlay."},{name:"dialog.overlay.hide",description:"The animation to use when hiding the dialog's overlay."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynDialog",module:"../components/src/components/dialog/dialog.js"}}]},{kind:"javascript-module",path:"../components/src/components/divider/divider.js",declarations:[{kind:"class",description:"",name:"SynDivider",cssProperties:[{description:"The color of the divider.",name:"--color"},{description:"The width of the divider.",name:"--width"},{description:"The spacing of the divider.",name:"--spacing"}],members:[{kind:"field",name:"vertical",type:{text:"boolean"},default:"false",description:"Draws the divider in a vertical orientation.",attribute:"vertical",reflects:!0},{kind:"method",name:"handleVerticalChange"}],attributes:[{name:"vertical",type:{text:"boolean"},default:"false",description:"Draws the divider in a vertical orientation.",fieldName:"vertical"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Dividers are used to visually separate or group elements.",tagNameWithoutPrefix:"divider",tagName:"syn-divider",customElement:!0,jsDoc:`/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-divider--docs
 * @status stable
 * @since 2.0
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-divider--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynDivider",module:"../components/src/components/divider/divider.js"}}]},{kind:"javascript-module",path:"../components/src/components/drawer/drawer.js",declarations:[{kind:"class",description:"",name:"SynDrawer",cssProperties:[{description:"The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.",name:"--size"},{description:"The amount of padding to use for the header.",name:"--header-spacing"},{description:"The amount of padding to use for the body.",name:"--body-spacing"},{description:"The amount of padding to use for the footer.",name:"--footer-spacing"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The overlay that covers the screen behind the drawer.",name:"overlay"},{description:"The drawer's panel (where the drawer and its content are rendered).",name:"panel"},{description:"The drawer's header. This element wraps the title and header actions.",name:"header"},{description:"Optional actions to add to the header. Works best with `<syn-icon-button>`.",name:"header-actions"},{description:"The drawer's title.",name:"title"},{description:"The close button, an `<syn-icon-button>`.",name:"close-button"},{description:"The close button's exported `base` part.",name:"close-button__base"},{description:"The drawer's body.",name:"body"},{description:"The drawer's footer.",name:"footer"}],slots:[{description:"The drawer's main content.",name:""},{description:"The drawer's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Optional actions to add to the header. Works best with `<syn-icon-button>`.",name:"header-actions"},{description:"The drawer's footer, usually one or more buttons representing various options.",name:"footer"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon-button': SynIconButton }"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'footer')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"originalTrigger",type:{text:"HTMLElement | null"},privacy:"private"},{kind:"field",name:"modal",privacy:"public",default:"new Modal(this)",description:"Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Synergy modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Synergy's focus trapping."},{kind:"field",name:"closeWatcher",type:{text:"CloseWatcher | null"},privacy:"private"},{kind:"field",name:"isVisible",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"drawer",type:{text:"HTMLElement"}},{kind:"field",name:"panel",type:{text:"HTMLElement"}},{kind:"field",name:"overlay",type:{text:"HTMLElement"}},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.",attribute:"open",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The drawer's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",attribute:"label",reflects:!0},{kind:"field",name:"placement",type:{text:"'top' | 'end' | 'bottom' | 'start'"},default:"'end'",description:"The direction from which the drawer will open.",attribute:"placement",reflects:!0},{kind:"field",name:"contained",type:{text:"boolean"},default:"false",description:"By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of\nits parent element, set this attribute and add `position: relative` to the parent.",attribute:"contained",reflects:!0},{kind:"field",name:"noHeader",type:{text:"boolean"},default:"false",description:`Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer.`,attribute:"no-header",reflects:!0},{kind:"method",name:"requestClose",privacy:"private",parameters:[{name:"source",type:{text:"'close-button' | 'keyboard' | 'overlay'"}}]},{kind:"method",name:"addOpenListeners",privacy:"private"},{kind:"method",name:"removeOpenListeners",privacy:"private"},{kind:"field",name:"handleDocumentKeyDown",privacy:"private"},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"handleNoModalChange"},{kind:"method",name:"show",description:"Shows the drawer."},{kind:"method",name:"hide",description:"Hides the drawer"},{kind:"method",name:"forceVisibility",parameters:[{name:"isVisible",type:{text:"boolean"}}]}],events:[{description:"Emitted when the drawer opens.",name:"syn-show"},{description:"Emitted after the drawer opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the drawer closes.",name:"syn-hide"},{description:"Emitted after the drawer closes and all animations are complete.",name:"syn-after-hide"},{description:"Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.",name:"syn-initial-focus"},{type:{text:"{ source: 'close-button' | 'keyboard' | 'overlay' }"},description:"Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.",name:"syn-request-close"}],attributes:[{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.",fieldName:"open"},{name:"label",type:{text:"string"},default:"''",description:"The drawer's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"placement",type:{text:"'top' | 'end' | 'bottom' | 'start'"},default:"'end'",description:"The direction from which the drawer will open.",fieldName:"placement"},{name:"contained",type:{text:"boolean"},default:"false",description:"By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of\nits parent element, set this attribute and add `position: relative` to the parent.",fieldName:"contained"},{name:"no-header",type:{text:"boolean"},default:"false",description:`Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer.`,fieldName:"noHeader"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Drawers slide in from a container to expose additional options and information.",tagNameWithoutPrefix:"drawer",tagName:"syn-drawer",customElement:!0,jsDoc:`/**
 * @summary Drawers slide in from a container to expose additional options and information.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-drawer--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The drawer's main content.
 * @slot label - The drawer's label. Alternatively, you can use the \`label\` attribute.
 * @slot header-actions - Optional actions to add to the header. Works best with \`<syn-icon-button>\`.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @event syn-show - Emitted when the drawer opens.
 * @event syn-after-show - Emitted after the drawer opens and all animations are complete.
 * @event syn-hide - Emitted when the drawer closes.
 * @event syn-after-hide - Emitted after the drawer closes and all animations are complete.
 * @event syn-initial-focus - Emitted when the drawer opens and is ready to receive focus. Calling
 *   \`event.preventDefault()\` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} syn-request-close - Emitted when the user attempts to
 *   close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   \`event.preventDefault()\` will keep the drawer open. Avoid using this unless closing the drawer will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's base wrapper.
 * @csspart overlay - The overlay that covers the screen behind the drawer.
 * @csspart panel - The drawer's panel (where the drawer and its content are rendered).
 * @csspart header - The drawer's header. This element wraps the title and header actions.
 * @csspart header-actions - Optional actions to add to the header. Works best with \`<syn-icon-button>\`.
 * @csspart title - The drawer's title.
 * @csspart close-button - The close button, an \`<syn-icon-button>\`.
 * @csspart close-button__base - The close button's exported \`base\` part.
 * @csspart body - The drawer's body.
 * @csspart footer - The drawer's footer.
 *
 * @cssproperty --size - The preferred size of the drawer. This will be applied to the drawer's width or height
 *   depending on its \`placement\`. Note that the drawer will shrink to accommodate smaller screens.
 * @cssproperty --header-spacing - The amount of padding to use for the header.
 * @cssproperty --body-spacing - The amount of padding to use for the body.
 * @cssproperty --footer-spacing - The amount of padding to use for the footer.
 *
 * @animation drawer.showTop - The animation to use when showing a drawer with \`top\` placement.
 * @animation drawer.showEnd - The animation to use when showing a drawer with \`end\` placement.
 * @animation drawer.showBottom - The animation to use when showing a drawer with \`bottom\` placement.
 * @animation drawer.showStart - The animation to use when showing a drawer with \`start\` placement.
 * @animation drawer.hideTop - The animation to use when hiding a drawer with \`top\` placement.
 * @animation drawer.hideEnd - The animation to use when hiding a drawer with \`end\` placement.
 * @animation drawer.hideBottom - The animation to use when hiding a drawer with \`bottom\` placement.
 * @animation drawer.hideStart - The animation to use when hiding a drawer with \`start\` placement.
 * @animation drawer.denyClose - The animation to use when a request to close the drawer is denied.
 * @animation drawer.overlay.show - The animation to use when showing the drawer's overlay.
 * @animation drawer.overlay.hide - The animation to use when hiding the drawer's overlay.
 *
 * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus
 *   trapping and allow third-party modals spawned from an active Synergy modal, call \`modal.activateExternal()\` when
 *   the third-party modal opens. Upon closing, call \`modal.deactivateExternal()\` to restore Synergy's focus trapping.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-drawer--docs",status:"stable",since:"2.0",dependencies:["syn-icon-button"],animations:[{name:"drawer.showTop",description:"The animation to use when showing a drawer with `top` placement."},{name:"drawer.showEnd",description:"The animation to use when showing a drawer with `end` placement."},{name:"drawer.showBottom",description:"The animation to use when showing a drawer with `bottom` placement."},{name:"drawer.showStart",description:"The animation to use when showing a drawer with `start` placement."},{name:"drawer.hideTop",description:"The animation to use when hiding a drawer with `top` placement."},{name:"drawer.hideEnd",description:"The animation to use when hiding a drawer with `end` placement."},{name:"drawer.hideBottom",description:"The animation to use when hiding a drawer with `bottom` placement."},{name:"drawer.hideStart",description:"The animation to use when hiding a drawer with `start` placement."},{name:"drawer.denyClose",description:"The animation to use when a request to close the drawer is denied."},{name:"drawer.overlay.show",description:"The animation to use when showing the drawer's overlay."},{name:"drawer.overlay.hide",description:"The animation to use when hiding the drawer's overlay."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynDrawer",module:"../components/src/components/drawer/drawer.js"}}]},{kind:"javascript-module",path:"../components/src/components/dropdown/dropdown.js",declarations:[{kind:"class",description:"",name:"SynDropdown",cssParts:[{description:"The component's base wrapper, an `<syn-popup>` element.",name:"base"},{description:"The popup's exported `popup` part. Use this to target the tooltip's popup container.",name:"base__popup"},{description:"The container that wraps the trigger.",name:"trigger"},{description:"The panel that gets shown when the dropdown is open.",name:"panel"}],slots:[{description:"The dropdown's main content.",name:""},{description:"The dropdown's trigger, usually a `<syn-button>` element.",name:"trigger"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-popup': SynPopup }"},{kind:"field",name:"popup",type:{text:"SynPopup"}},{kind:"field",name:"trigger",type:{text:"HTMLSlotElement"}},{kind:"field",name:"panel",type:{text:"HTMLSlotElement"}},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"closeWatcher",type:{text:"CloseWatcher | null"},privacy:"private"},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.",attribute:"open",reflects:!0},{kind:"field",name:"placement",type:{text:`| 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'`},default:"'bottom-start'",description:`The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport.`,attribute:"placement",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the dropdown so the panel will not open.",attribute:"disabled",reflects:!0},{kind:"field",name:"stayOpenOnSelect",type:{text:"boolean"},default:"false",description:`By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions.`,attribute:"stay-open-on-select",reflects:!0},{kind:"field",name:"containingElement",type:{text:"HTMLElement | undefined"},description:`The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
components that use a dropdown internally.`},{kind:"field",name:"distance",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel away from its trigger.",attribute:"distance"},{kind:"field",name:"skidding",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel along its trigger.",attribute:"skidding"},{kind:"field",name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",attribute:"hoist"},{kind:"field",name:"sync",type:{text:"'width' | 'height' | 'both' | undefined"},default:"undefined",description:"Syncs the popup width or height to that of the trigger element.",attribute:"sync",reflects:!0},{kind:"method",name:"focusOnTrigger"},{kind:"method",name:"getMenu"},{kind:"field",name:"handleKeyDown",privacy:"private"},{kind:"field",name:"handleDocumentKeyDown",privacy:"private"},{kind:"field",name:"handleDocumentMouseDown",privacy:"private"},{kind:"field",name:"handlePanelSelect",privacy:"private"},{kind:"method",name:"handleTriggerClick"},{kind:"method",name:"handleTriggerKeyDown",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleTriggerKeyUp",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleTriggerSlotChange"},{kind:"method",name:"updateAccessibleTrigger"},{kind:"method",name:"show",description:"Shows the dropdown panel."},{kind:"method",name:"hide",description:"Hides the dropdown panel"},{kind:"method",name:"reposition",description:`Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
is activated.`},{kind:"method",name:"addOpenListeners"},{kind:"method",name:"removeOpenListeners"},{kind:"method",name:"handleOpenChange"}],events:[{description:"Emitted when the dropdown opens.",name:"syn-show"},{description:"Emitted after the dropdown opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the dropdown closes.",name:"syn-hide"},{description:"Emitted after the dropdown closes and all animations are complete.",name:"syn-after-hide"}],attributes:[{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.",fieldName:"open"},{name:"placement",type:{text:`| 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'`},default:"'bottom-start'",description:`The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport.`,fieldName:"placement"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the dropdown so the panel will not open.",fieldName:"disabled"},{name:"stay-open-on-select",type:{text:"boolean"},default:"false",description:`By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions.`,fieldName:"stayOpenOnSelect"},{name:"distance",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel away from its trigger.",fieldName:"distance"},{name:"skidding",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel along its trigger.",fieldName:"skidding"},{name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",fieldName:"hoist"},{name:"sync",type:{text:"'width' | 'height' | 'both' | undefined"},default:"undefined",description:"Syncs the popup width or height to that of the trigger element.",fieldName:"sync"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:'Dropdowns expose additional content that "drops down" in a panel.',tagNameWithoutPrefix:"dropdown",tagName:"syn-dropdown",customElement:!0,jsDoc:`/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-dropdown--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a \`<syn-button>\` element.
 *
 * @event syn-show - Emitted when the dropdown opens.
 * @event syn-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event syn-hide - Emitted when the dropdown closes.
 * @event syn-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an \`<syn-popup>\` element.
 * @csspart base__popup - The popup's exported \`popup\` part. Use this to target the tooltip's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-dropdown--docs",status:"stable",since:"2.0",dependencies:["syn-popup"],animations:[{name:"dropdown.show",description:"The animation to use when showing the dropdown."},{name:"dropdown.hide",description:"The animation to use when hiding the dropdown."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynDropdown",module:"../components/src/components/dropdown/dropdown.js"}}]},{kind:"javascript-module",path:"../components/src/components/file/file.js",declarations:[{kind:"class",description:"",name:"SynFile",cssParts:[{description:"The form control that wraps the label, input, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The input's wrapper.",name:"form-control-input"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The wrapper around the button and text value.",name:"button-wrapper"},{description:"The syn-button acting as a file input.",name:"button"},{description:"The syn-button's exported `base` part.",name:"button__base"},{description:"The chosen files or placeholder text for the file input.",name:"value"},{description:"The element wrapping the drop zone.",name:"droparea"},{description:"The background of the drop zone.",name:"droparea-background"},{description:"The container that wraps the icon for the drop zone.",name:"droparea-icon"},{description:"The text for the drop zone.",name:"droparea-value"},{description:"The container that wraps the trigger.",name:"trigger"}],slots:[{description:"The file control's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Text that describes how to use the file control. Alternatively, you can use the `help-text` attribute.",name:"help-text"},{description:"Optional droparea icon to use instead of the default. Works best with `<syn-icon>`.",name:"droparea-icon"},{description:"Optional content to be used as trigger instead of the default content. Opening the file dialog on click and as well as drag and drop will work for this content. Following attributes will no longer work: *label*, *droparea*, *help-text*, *size*, *hide-value*. Also if using the disabled attribute, the disabled styling will not be applied and must be taken care of yourself.",name:"trigger"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-button': SynButton, 'syn-icon': SynIcon, }"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['syn-change'], // This makes sure the value sent in formdata events is always the files object // @see internals/form.ts #handleFormData for more information value: (el: SynFile) => el.files, })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"userIsDragging",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"files",description:`The selected files as a FileList object containing a list of File objects.
The FileList behaves like an array, so you can get the number of selected files
via its length property.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files)`,attribute:"files"},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the file control, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",description:`The value of the file control contains a string that represents the path of the selected file.
If multiple files are selected, the value represents the first file in the list.
If no file is selected, the value is an empty string.
Beware that the only valid value when setting a file control is an empty string!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#value)`,attribute:"value"},{kind:"field",name:"defaultValue",type:{text:"string"},default:"''",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The file control's size.",attribute:"size",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The file control's label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The file control's help text.\nIf you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the file control.",attribute:"disabled",reflects:!0},{kind:"field",name:"droparea",type:{text:"boolean"},default:"false",description:"Draw the file control as a drop area",attribute:"droparea"},{kind:"field",name:"accept",type:{text:"string"},default:"''",description:`Comma separated list of supported file types
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,attribute:"accept"},{kind:"field",name:"capture",type:{text:"'user' | 'environment'"},description:`Specifies the types of files that the server accepts.
Can be set either to user or environment.
Works only when not using a droparea!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)`,attribute:"capture"},{kind:"field",name:"multiple",type:{text:"boolean"},default:"false",description:`Indicates whether the user can select more than one file.
Has no effect if webkitdirectory is set.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)`,attribute:"multiple",reflects:!0},{kind:"field",name:"webkitdirectory",type:{text:"boolean"},default:"false",description:`Indicates that the file control should let the user select directories instead of files.
When a directory is selected, the directory and its entire hierarchy of contents are included
in the set of selected items.
Note: This is a non-standard attribute but is supported in the major browsers.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)`,attribute:"webkitdirectory",reflects:!0},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element.\nThis attribute allows you to place the form control outside of a form and associate it\nwith the form that has this `id`. The form must be in the same document\nor shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"Makes the input a required field.",attribute:"required",reflects:!0},{kind:"field",name:"hideValue",type:{text:"boolean"},default:"false",description:"Suppress the value from being displayed in the file control",attribute:"hide-value"},{kind:"field",name:"input",type:{text:"HTMLInputElement"}},{kind:"field",name:"button",type:{text:"SynButton"}},{kind:"field",name:"dropareaWrapper",type:{text:"HTMLDivElement"}},{kind:"field",name:"dropareaIcon",type:{text:"HTMLSpanElement"}},{kind:"field",name:"inputChosen",type:{text:"HTMLSpanElement"}},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message.\nReturns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the button or droparea."},{kind:"method",name:"blur",description:"Removes focus from the button or droparea."},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleFiles",privacy:"private",parameters:[{name:"files",type:{text:"FileList | null"}}]},{kind:"method",name:"handleTransferItems",privacy:"private",return:{type:{text:"Promise<FileList>"}},parameters:[{name:"items",type:{text:"DataTransferItemList | null"}}]},{kind:"method",name:"getFilesFromEntry",privacy:"private",return:{type:{text:"Promise<File[]>"}},parameters:[{name:"entry",type:{text:"FileSystemEntry | null"}}]},{kind:"method",name:"handleClick",privacy:"private",parameters:[{name:"e",type:{text:"Event"}}]},{kind:"method",name:"handleChange",privacy:"private",parameters:[{name:"e",type:{text:"Event"}}],description:"Handles the change event of the native input"},{kind:"method",name:"handleDragOver",privacy:"private",parameters:[{name:"e",type:{text:"DragEvent"}}]},{kind:"method",name:"handleDragLeave",privacy:"private",parameters:[{name:"e",type:{text:"DragEvent"}}]},{kind:"method",name:"handleDrop",privacy:"private",parameters:[{name:"e",type:{text:"DragEvent"}}]},{kind:"method",name:"handleFocus",privacy:"private",description:"Handle the focus of the droparea and emit focus event"},{kind:"method",name:"handleBlur",privacy:"private",description:"Handle the blur of the droparea and emit blur event"},{kind:"method",name:"renderValue",privacy:"private"},{kind:"method",name:"renderDroparea",privacy:"private"},{kind:"method",name:"renderButton",privacy:"private"}],events:[{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when an alteration to the control's value is committed by the user.",name:"syn-change"},{description:"Emitted when multiple files are selected via drag and drop, without the `multiple` property being set.",name:"syn-error"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the control receives input.",name:"syn-input"}],attributes:[{name:"files",description:`The selected files as a FileList object containing a list of File objects.
The FileList behaves like an array, so you can get the number of selected files
via its length property.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files)`,fieldName:"files"},{name:"name",type:{text:"string"},default:"''",description:"The name of the file control, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",description:`The value of the file control contains a string that represents the path of the selected file.
If multiple files are selected, the value represents the first file in the list.
If no file is selected, the value is an empty string.
Beware that the only valid value when setting a file control is an empty string!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#value)`,fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The file control's size.",fieldName:"size"},{name:"label",type:{text:"string"},default:"''",description:"The file control's label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"help-text",type:{text:"string"},default:"''",description:"The file control's help text.\nIf you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the file control.",fieldName:"disabled"},{name:"droparea",type:{text:"boolean"},default:"false",description:"Draw the file control as a drop area",fieldName:"droparea"},{name:"accept",type:{text:"string"},default:"''",description:`Comma separated list of supported file types
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,fieldName:"accept"},{name:"capture",type:{text:"'user' | 'environment'"},description:`Specifies the types of files that the server accepts.
Can be set either to user or environment.
Works only when not using a droparea!
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)`,fieldName:"capture"},{name:"multiple",type:{text:"boolean"},default:"false",description:`Indicates whether the user can select more than one file.
Has no effect if webkitdirectory is set.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)`,fieldName:"multiple"},{name:"webkitdirectory",type:{text:"boolean"},default:"false",description:`Indicates that the file control should let the user select directories instead of files.
When a directory is selected, the directory and its entire hierarchy of contents are included
in the set of selected items.
Note: This is a non-standard attribute but is supported in the major browsers.
[see MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)`,fieldName:"webkitdirectory"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element.\nThis attribute allows you to place the form control outside of a form and associate it\nwith the form that has this `id`. The form must be in the same document\nor shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"Makes the input a required field.",fieldName:"required"},{name:"hide-value",type:{text:"boolean"},default:"false",description:"Suppress the value from being displayed in the file control",fieldName:"hideValue"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"File controls allow selecting an arbitrary number of files for uploading.",tagNameWithoutPrefix:"file",tagName:"syn-file",customElement:!0,jsDoc:`/**
 * @summary File controls allow selecting an arbitrary number of files for uploading.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-file--docs
 * @status stable
 *
 * @dependency syn-button
 * @dependency syn-icon
 *
 * @slot label - The file control's label. Alternatively, you can use the \`label\` attribute.
 * @slot help-text - Text that describes how to use the file control.
 *    Alternatively, you can use the \`help-text\` attribute.
 * @slot droparea-icon - Optional droparea icon to use instead of the default.
 *    Works best with \`<syn-icon>\`.
 * @slot trigger - Optional content to be used as trigger instead of the default content.
 *    Opening the file dialog on click and as well as drag and drop will work for this content.
 *    Following attributes will no longer work: *label*, *droparea*, *help-text*, *size*,
 *    *hide-value*. Also if using the disabled attribute, the disabled styling will not be
 *    applied and must be taken care of yourself.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-error - Emitted when multiple files are selected via drag and drop, without
 * the \`multiple\` property being set.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-wrapper - The wrapper around the button and text value.
 * @csspart button - The syn-button acting as a file input.
 * @csspart button__base - The syn-button's exported \`base\` part.
 * @csspart value - The chosen files or placeholder text for the file input.
 * @csspart droparea - The element wrapping the drop zone.
 * @csspart droparea-background - The background of the drop zone.
 * @csspart droparea-icon - The container that wraps the icon for the drop zone.
 * @csspart droparea-value - The text for the drop zone.
 * @csspart trigger - The container that wraps the trigger.
 *
 * @animation file.iconDrop - The animation to use for the file icon
 * when a file is dropped
 * @animation file.text.disappear - The disappear animation to use for the file placeholder text
 * when a file is dropped
 * @animation file.text.appear - The appear animation to use for the file placeholder text
 * when a file is dropped
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-file--docs",status:"stable",dependencies:["syn-button","syn-icon"],animations:[{name:"file.iconDrop",description:"The animation to use for the file icon when a file is dropped"},{name:"file.text.disappear",description:"The disappear animation to use for the file placeholder text when a file is dropped"},{name:"file.text.appear",description:"The appear animation to use for the file placeholder text when a file is dropped"}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynFile",module:"../components/src/components/file/file.js"}}]},{kind:"javascript-module",path:"../components/src/components/header/header.js",declarations:[{kind:"class",description:"",name:"SynHeader",cssParts:[{description:"The component's base wrapper",name:"base"},{description:"The wrapper most content items reside",name:"content"},{description:"The wrapper the application logo resides in",name:"logo"},{description:"The element wrapping the application name",name:"label"},{description:"The Item wrapping the optional application menu",name:"meta-navigation"},{description:"The wrapper that is holding the optional top navigation section",name:"navigation"},{description:"The button that toggles the burger menu",name:"burger-menu-toggle-button"}],slots:[{description:"The label for the header",name:"label"},{description:"The logo that should be displayed. Will fall back to the SICK logo if not provided",name:"logo"},{description:"The meta-navigation is used to add various application toolbar icons Best used with `<syn-icon-button />` and `<syn-drop-down />`",name:"meta-navigation"},{description:"This slot can be used to add an optional horizontal navigation",name:"navigation"},{description:"An icon to use in lieu of the default burger-menu=open state. The default close icon is a 'x'.",name:"open-burger-menu-icon"},{description:"An icon to use in lieu of the default burger-menu=closed state. The default open icon is a burger menu.",name:"closed-burger-menu-icon"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon, }"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, '[default]', 'logo', 'label', 'meta-navigation', 'navigation')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"mutationObserver",type:{text:"MutationObserver"},privacy:"private",description:"Internal mutation observer"},{kind:"field",name:"isSideNavAnimating",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The headers label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"burgerMenu",type:{text:"'hidden' | 'open' | 'closed'"},default:"'hidden'",description:`Defines the current visibility and icon of the burger-menu icon.
The menu button is added automatically if the component finds a syn-side-nav in
variant="default".
The following values can be used:
- hidden: The burger menu is not visible
- open: The burger menu is visible and shows the close icon
- closed: The burger menu is visible and shows the open icon`,attribute:"burger-menu",reflects:!0},{kind:"field",name:"sideNav",type:{text:"SynSideNav | null"},privacy:"private",description:"The side nav"},{kind:"method",name:"toggleBurgerMenu",privacy:"private"},{kind:"method",name:"handleBurgerMenuToggle",privacy:"private"},{kind:"method",name:"updateBurgerMenuBasedOnSideNav",privacy:"private",description:`Automatically update the burger menu icon based
on the state of the side-nav, if one is connected.`},{kind:"method",name:"handleBurgerMenu"},{kind:"method",name:"connectSideNavigation",parameters:[{name:"sideNav",type:{text:"SynSideNav | null"},description:"The side navigation to connect to the header"}],description:"Connect a `syn-side-nav` to add automatic interaction of the header with the side navigation\nlike showing the burger menu icon and open / close handling.\n\nIf no side navigation is connected, the header will use the first `syn-side-nav` element it\nfinds."}],events:[{description:"Emitted when the burger menu is toggled to closed",name:"syn-burger-menu-closed"},{description:"Emitted when the burger menu is toggled to hidden",name:"syn-burger-menu-hidden"},{description:"Emitted when the burger menu is toggled to open",name:"syn-burger-menu-open"}],attributes:[{name:"label",type:{text:"string"},default:"''",description:"The headers label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"burger-menu",type:{text:"'hidden' | 'open' | 'closed'"},default:"'hidden'",description:`Defines the current visibility and icon of the burger-menu icon.
The menu button is added automatically if the component finds a syn-side-nav in
variant="default".
The following values can be used:
- hidden: The burger menu is not visible
- open: The burger menu is visible and shows the close icon
- closed: The burger menu is visible and shows the open icon`,fieldName:"burgerMenu"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:`The <syn-header /> element provides a generic application header
that can be used to add applications name, toolbar and primary navigation.`,tagNameWithoutPrefix:"header",tagName:"syn-header",customElement:!0,jsDoc:`/**
 * @summary The <syn-header /> element provides a generic application header
 * that can be used to add applications name, toolbar and primary navigation.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs
 * @status stable
 * @since 1.10.0
 *
 * @slot label - The label for the header
 * @slot logo - The logo that should be displayed. Will fall back to the SICK logo if not provided
 * @slot meta-navigation - The meta-navigation is used to add various application toolbar icons
 *                     Best used with \`<syn-icon-button />\` and \`<syn-drop-down />\`
 * @slot navigation - This slot can be used to add an optional horizontal navigation
 * @slot open-burger-menu-icon - An icon to use in lieu of the default burger-menu=open state.
 *                      The default close icon is a 'x'.
 * @slot closed-burger-menu-icon - An icon to use in lieu of the default burger-menu=closed state.
 *                      The default open icon is a burger menu.
 *
 * @event syn-burger-menu-closed - Emitted when the burger menu is toggled to closed
 * @event syn-burger-menu-hidden - Emitted when the burger menu is toggled to hidden
 * @event syn-burger-menu-open - Emitted when the burger menu is toggled to open
 *
 * @csspart base - The component's base wrapper
 * @csspart content - The wrapper most content items reside
 * @csspart logo - The wrapper the application logo resides in
 * @csspart label - The element wrapping the application name
 * @csspart meta-navigation - The Item wrapping the optional application menu
 * @csspart navigation - The wrapper that is holding the optional top navigation section
 * @csspart burger-menu-toggle-button - The button that toggles the burger menu
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-header--docs",status:"stable",since:"1.10.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynHeader",module:"../components/src/components/header/header.js"}}]},{kind:"javascript-module",path:"../components/src/components/icon-button/icon-button.js",declarations:[{kind:"class",description:"",name:"SynIconButton",cssParts:[{description:"The component's base wrapper.",name:"base"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon }"},{kind:"field",name:"button",type:{text:"HTMLButtonElement | HTMLLinkElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"name",type:{text:"string | undefined"},description:"The name of the icon to draw. Available names depend on the icon library being used.",attribute:"name"},{kind:"field",name:"library",type:{text:"string | undefined"},description:"The name of a registered custom icon library.",attribute:"library"},{kind:"field",name:"src",type:{text:"string | undefined"},description:`An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.`,attribute:"src"},{kind:"field",name:"href",type:{text:"string | undefined"},description:"When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",attribute:"href"},{kind:"field",name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top' | undefined"},description:"Tells the browser where to open the link. Only used when `href` is set.",attribute:"target"},{kind:"field",name:"download",type:{text:"string | undefined"},description:"Tells the browser to download the linked file as this filename. Only used when `href` is set.",attribute:"download"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does.`,attribute:"label"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large' | 'inherit'"},default:"'inherit'",description:"The icon button's size.",attribute:"size",reflects:!0},{kind:"field",name:"color",type:{text:"'currentColor' | 'primary' | 'neutral'"},default:"'currentColor'",description:`The color of the icon button.
The default "currentColor" makes it possible to easily style the icon button from outside without any CSS variables.`,attribute:"color",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the button.",attribute:"disabled",reflects:!0},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"click",description:"Simulates a click on the icon button."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the icon button."},{kind:"method",name:"blur",description:"Removes focus from the icon button."}],events:[{description:"Emitted when the icon button loses focus.",name:"syn-blur"},{description:"Emitted when the icon button gains focus.",name:"syn-focus"}],attributes:[{name:"name",type:{text:"string | undefined"},description:"The name of the icon to draw. Available names depend on the icon library being used.",fieldName:"name"},{name:"library",type:{text:"string | undefined"},description:"The name of a registered custom icon library.",fieldName:"library"},{name:"src",type:{text:"string | undefined"},description:`An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.`,fieldName:"src"},{name:"href",type:{text:"string | undefined"},description:"When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",fieldName:"href"},{name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top' | undefined"},description:"Tells the browser where to open the link. Only used when `href` is set.",fieldName:"target"},{name:"download",type:{text:"string | undefined"},description:"Tells the browser to download the linked file as this filename. Only used when `href` is set.",fieldName:"download"},{name:"label",type:{text:"string"},default:"''",description:`A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does.`,fieldName:"label"},{name:"size",type:{text:"'small' | 'medium' | 'large' | 'inherit'"},default:"'inherit'",description:"The icon button's size.",fieldName:"size"},{name:"color",type:{text:"'currentColor' | 'primary' | 'neutral'"},default:"'currentColor'",description:`The color of the icon button.
The default "currentColor" makes it possible to easily style the icon button from outside without any CSS variables.`,fieldName:"color"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the button.",fieldName:"disabled"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.",tagNameWithoutPrefix:"icon-button",tagName:"syn-icon-button",customElement:!0,jsDoc:`/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-icon-button--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @event syn-blur - Emitted when the icon button loses focus.
 * @event syn-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-icon-button--docs",status:"stable",since:"2.0",dependencies:["syn-icon"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynIconButton",module:"../components/src/components/icon-button/icon-button.js"}}]},{kind:"javascript-module",path:"../components/src/components/icon/icon.js",declarations:[{kind:"class",description:"",name:"SynIcon",cssParts:[{description:"The internal SVG element.",name:"svg"},{description:"The <use> element generated when using `spriteSheet: true`",name:"use"}],members:[{kind:"field",name:"initialRender",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"method",name:"resolveIcon",privacy:"private",return:{type:{text:"Promise<SVGResult>"}},parameters:[{name:"url",type:{text:"string"}},{name:"library",optional:!0,type:{text:"IconLibrary"}}],description:"Given a URL, this function returns the resulting SVG element or an appropriate error symbol."},{kind:"field",name:"svg",type:{text:"SVGElement | HTMLTemplateResult | null"},privacy:"private",default:"null"},{kind:"field",name:"name",type:{text:"string | undefined"},description:"The name of the icon to draw. Available names depend on the icon library being used.",attribute:"name",reflects:!0},{kind:"field",name:"src",type:{text:"string | undefined"},description:`An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.`,attribute:"src"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:`An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices.`,attribute:"label"},{kind:"field",name:"library",type:{text:"string"},default:"'default'",description:"The name of a registered custom icon library.",attribute:"library",reflects:!0},{kind:"method",name:"getIconSource",privacy:"private",return:{type:{text:"IconSource"}}},{kind:"method",name:"handleLabelChange"},{kind:"method",name:"setIcon"}],events:[{description:"Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.",name:"syn-load"},{description:"Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.",name:"syn-error"}],attributes:[{name:"name",type:{text:"string | undefined"},description:"The name of the icon to draw. Available names depend on the icon library being used.",fieldName:"name"},{name:"src",type:{text:"string | undefined"},description:`An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks.`,fieldName:"src"},{name:"label",type:{text:"string"},default:"''",description:`An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices.`,fieldName:"label"},{name:"library",type:{text:"string"},default:"'default'",description:"The name of a registered custom icon library.",fieldName:"library"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Icons are symbols that can be used to represent various options within an application.",tagNameWithoutPrefix:"icon",tagName:"syn-icon",customElement:!0,jsDoc:`/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-icon--docs
 * @status stable
 * @since 2.0
 *
 * @event syn-load - Emitted when the icon has loaded. When using \`spriteSheet: true\` this will not emit.
 * @event syn-error - Emitted when the icon fails to load due to an error. When using \`spriteSheet: true\` this will not emit.
 *
 * @csspart svg - The internal SVG element.
 * @csspart use - The <use> element generated when using \`spriteSheet: true\`
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-icon--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynIcon",module:"../components/src/components/icon/icon.js"}}]},{kind:"javascript-module",path:"../components/src/components/input/input.js",declarations:[{kind:"class",description:"",name:"SynInput",cssProperties:[{description:"The shadow to apply when the input is autofilled.",name:"--syn-input-autofill-shadow"},{description:"The shadow to apply when the input is readonly and autofilled.",name:"--syn-input-autofill-readonly-shadow"},{description:"The text fill color to apply when the input is autofilled.",name:"--syn-input-autofill-text-fill-color"},{description:"The caret color to apply when the input is autofilled.",name:"--syn-input-autofill-caret-color"}],cssParts:[{description:"The form control that wraps the label, input, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The input's wrapper.",name:"form-control-input"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The component's base wrapper.",name:"base"},{description:"The internal `<input>` control.",name:"input"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The clear button.",name:"clear-button"},{description:"The password toggle button.",name:"password-toggle-button"},{description:"The container that wraps the suffix.",name:"suffix"},{description:"The container that wraps the number stepper.",name:"stepper"},{description:"The decrement number stepper button.",name:"decrement-number-stepper"},{description:"The increment number stepper button.",name:"increment-number-stepper"},{description:"The divider between the increment and decrement number stepper buttons.",name:"divider"}],slots:[{description:"The input's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Used to prepend a presentational icon or similar element to the input.",name:"prefix"},{description:"Used to append a presentational icon or similar element to the input.",name:"suffix"},{description:"An icon to use in lieu of the default clear icon.",name:"clear-icon"},{description:"An icon to use in lieu of the default show password icon.",name:"show-password-icon"},{description:"An icon to use in lieu of the default hide password icon.",name:"hide-password-icon"},{description:"Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",name:"help-text"},{description:"An icon to use in lieu of the default increment number stepper icon.",name:"increment-number-stepper"},{description:"An icon to use in lieu of the default decrement number stepper icon.",name:"decrement-number-stepper"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon, 'syn-divider': SynDivider }"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['syn-blur', 'syn-input'] })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label', 'prefix', 'suffix')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"input",type:{text:"HTMLInputElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"title",type:{text:"string"},default:"''",attribute:"title",reflects:!0},{kind:"field",name:"__numberInput",privacy:"private"},{kind:"field",name:"__dateInput",privacy:"private"},{kind:"field",name:"type",type:{text:`| 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'`},default:"'text'",description:"The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults\nto `text`.",attribute:"type",reflects:!0},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the input, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"The current value of the input, submitted as a name/value pair with form data.",attribute:"value"},{kind:"field",name:"defaultValue",type:{text:"string"},default:"''",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The input's size.",attribute:"size",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The input's label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The input's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"clearable",type:{text:"boolean"},default:"false",description:"Adds a clear button when the input is not empty.",attribute:"clearable"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the input.",attribute:"disabled",reflects:!0},{kind:"field",name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the input is empty.",attribute:"placeholder"},{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:"Makes the input readonly.",attribute:"readonly",reflects:!0},{kind:"field",name:"passwordToggle",type:{text:"boolean"},default:"false",description:"Adds a button to toggle the password's visibility. Only applies to password types.",attribute:"password-toggle"},{kind:"field",name:"passwordVisible",type:{text:"boolean"},default:"false",description:"Determines whether or not the password is currently visible. Only applies to password input types.",attribute:"password-visible"},{kind:"field",name:"noSpinButtons",type:{text:"boolean"},default:"false",description:"Hides the increment/decrement spin buttons for number inputs.",attribute:"no-spin-buttons"},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"Makes the input a required field.",attribute:"required",reflects:!0},{kind:"field",name:"pattern",type:{text:"string"},description:"A regular expression pattern to validate input against.",attribute:"pattern"},{kind:"field",name:"minlength",type:{text:"number"},description:"The minimum length of input that will be considered valid.",attribute:"minlength"},{kind:"field",name:"maxlength",type:{text:"number"},description:"The maximum length of input that will be considered valid.",attribute:"maxlength"},{kind:"field",name:"min",type:{text:"number | string"},description:"The input's minimum value. Only applies to date and number input types.",attribute:"min"},{kind:"field",name:"max",type:{text:"number | string"},description:"The input's maximum value. Only applies to date and number input types.",attribute:"max"},{kind:"field",name:"step",type:{text:"number | 'any'"},description:"Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is\nimplied, allowing any numeric value. Only applies to date and number input types.",attribute:"step"},{kind:"field",name:"autocapitalize",type:{text:"'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'"},description:"Controls whether and how text input is automatically capitalized as it is entered by the user.",attribute:"autocapitalize"},{kind:"field",name:"autocorrect",type:{text:"'off' | 'on'"},description:"Indicates whether the browser's autocorrect feature is on or off.",attribute:"autocorrect"},{kind:"field",name:"autocomplete",type:{text:"string"},description:`Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.`,attribute:"autocomplete"},{kind:"field",name:"autofocus",type:{text:"boolean"},description:"Indicates that the input should receive focus on page load.",attribute:"autofocus"},{kind:"field",name:"enterkeyhint",type:{text:"'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'"},description:"Used to customize the label or icon of the Enter key on virtual keyboards.",attribute:"enterkeyhint"},{kind:"field",name:"spellcheck",type:{text:"boolean"},default:"true",description:"Enables spell checking on the input.",attribute:"spellcheck"},{kind:"field",name:"inputmode",type:{text:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'"},description:`Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices.`,attribute:"inputmode"},{kind:"field",name:"numberFormatterOptions",type:{text:"Intl.NumberFormatOptions"},description:"Optional options that should be passed to the `NumberFormatter` when formatting the value.\nThis is used to format the number when the input type is `number`.\nNote this can only be set via `property`, not as an `attribute`!"},{kind:"field",name:"minFractionDigits",type:{text:"number"},description:"The minimal amount of fraction digits to use for numeric values.\nUsed to format the number when the input type is `number`.",attribute:"min-fraction-digits"},{kind:"field",name:"maxFractionDigits",type:{text:"number"},description:"The maximal amount of fraction digits to use for numeric values.\nUsed to format the number when the input type is `number`.",attribute:"max-fraction-digits"},{kind:"field",name:"#numericStrategy",privacy:"private",type:{text:"NumericStrategy"},default:"nativeNumericStrategy"},{kind:"field",name:"numericStrategy",description:`Defines the strategy for handling numbers in the numeric input.
This is used to determine how the input behaves when the user interacts with it.

Includes the following configuration options:

- **autoClamp**: If true, the input will clamp the value to the min and max attributes.
- **noStepAlign**: If true, the input will not align the value to the step attribute.
- **noStepValidation**: If true, the input will not validate the value against the step attribute.

You may provide this as one of the following values:

- 'native': Uses the native browser implementation.
- 'modern': Uses a more intuitive implementation:
  - Values are clamped to the nearest min or max value.
  - Stepping is inclusive to the provided min and max values.
  - Provided stepping is no longer used in validation.
- An object that matches the \`NumericStrategy\` type. Note this can only be set via \`property\`, not as an \`attribute\`!`,type:{text:"'native' | 'modern' | Partial<NumericStrategy>"},default:"nativeNumericStrategy",attribute:"numeric-strategy"},{kind:"field",name:"valueAsDate",description:'Gets or sets the current value as a `Date` object. Returns `null` if the value can\'t be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.'},{kind:"field",name:"valueAsNumber",description:"Gets or sets the current value as a number. Returns `NaN` if the value can't be converted."},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleStep",privacy:"private"},{kind:"method",name:"handleStepUp",privacy:"private"},{kind:"method",name:"handleStepDown",privacy:"private"},{kind:"method",name:"isDecrementDisabled",privacy:"private"},{kind:"method",name:"isIncrementDisabled",privacy:"private"},{kind:"method",name:"handleNumericStrategyAutoClamp",privacy:"private"},{kind:"method",name:"handleChange",privacy:"private"},{kind:"method",name:"handleClearClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleInput",privacy:"private"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handlePasswordToggle",privacy:"private"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleStepChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the input."},{kind:"method",name:"blur",description:"Removes focus from the input."},{kind:"method",name:"select",description:"Selects all the text in the input."},{kind:"method",name:"setSelectionRange",parameters:[{name:"selectionStart",type:{text:"number"}},{name:"selectionEnd",type:{text:"number"}},{name:"selectionDirection",default:"'none'",type:{text:"'forward' | 'backward' | 'none'"}}],description:"Sets the start and end positions of the text selection (0-based)."},{kind:"method",name:"setRangeText",parameters:[{name:"replacement",type:{text:"string"}},{name:"start",optional:!0,type:{text:"number"}},{name:"end",optional:!0,type:{text:"number"}},{name:"selectMode",default:"'preserve'",type:{text:"'select' | 'start' | 'end' | 'preserve'"}}],description:"Replaces a range of text with a new string."},{kind:"method",name:"showPicker",description:"Displays the browser picker for an input element (only works if the browser supports it for the input type)."},{kind:"method",name:"stepUp",description:"Increments the value of a numeric input type by the value of the step attribute."},{kind:"method",name:"stepDown",description:"Decrements the value of a numeric input type by the value of the step attribute."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."},{kind:"method",name:"#formatNumber",privacy:"private",parameters:[{name:"value",type:{text:"number"}}]},{kind:"method",name:"#isNumberFormattingEnabled",privacy:"private"}],events:[{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when an alteration to the control's value is committed by the user.",name:"syn-change"},{description:"Emitted when the clear button is activated.",name:"syn-clear"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the control receives input.",name:"syn-input"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"},{description:"Emitted if the numeric strategy allows autoClamp and the value is clamped to the min or max attribute.",name:"syn-clamp"}],attributes:[{name:"title",type:{text:"string"},default:"''",fieldName:"title"},{name:"type",type:{text:`| 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'`},default:"'text'",description:"The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults\nto `text`.",fieldName:"type"},{name:"name",type:{text:"string"},default:"''",description:"The name of the input, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",type:{text:"string"},default:"''",description:"The current value of the input, submitted as a name/value pair with form data.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The input's size.",fieldName:"size"},{name:"label",type:{text:"string"},default:"''",description:"The input's label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"help-text",type:{text:"string"},default:"''",description:"The input's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"},{name:"clearable",type:{text:"boolean"},default:"false",description:"Adds a clear button when the input is not empty.",fieldName:"clearable"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the input.",fieldName:"disabled"},{name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the input is empty.",fieldName:"placeholder"},{name:"readonly",type:{text:"boolean"},default:"false",description:"Makes the input readonly.",fieldName:"readonly"},{name:"password-toggle",type:{text:"boolean"},default:"false",description:"Adds a button to toggle the password's visibility. Only applies to password types.",fieldName:"passwordToggle"},{name:"password-visible",type:{text:"boolean"},default:"false",description:"Determines whether or not the password is currently visible. Only applies to password input types.",fieldName:"passwordVisible"},{name:"no-spin-buttons",type:{text:"boolean"},default:"false",description:"Hides the increment/decrement spin buttons for number inputs.",fieldName:"noSpinButtons"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"Makes the input a required field.",fieldName:"required"},{name:"pattern",type:{text:"string"},description:"A regular expression pattern to validate input against.",fieldName:"pattern"},{name:"minlength",type:{text:"number"},description:"The minimum length of input that will be considered valid.",fieldName:"minlength"},{name:"maxlength",type:{text:"number"},description:"The maximum length of input that will be considered valid.",fieldName:"maxlength"},{name:"min",type:{text:"number | string"},description:"The input's minimum value. Only applies to date and number input types.",fieldName:"min"},{name:"max",type:{text:"number | string"},description:"The input's maximum value. Only applies to date and number input types.",fieldName:"max"},{name:"step",type:{text:"number | 'any'"},description:"Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is\nimplied, allowing any numeric value. Only applies to date and number input types.",fieldName:"step"},{name:"autocapitalize",type:{text:"'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'"},description:"Controls whether and how text input is automatically capitalized as it is entered by the user.",fieldName:"autocapitalize"},{name:"autocorrect",type:{text:"'off' | 'on'"},description:"Indicates whether the browser's autocorrect feature is on or off.",fieldName:"autocorrect"},{name:"autocomplete",type:{text:"string"},description:`Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.`,fieldName:"autocomplete"},{name:"autofocus",type:{text:"boolean"},description:"Indicates that the input should receive focus on page load.",fieldName:"autofocus"},{name:"enterkeyhint",type:{text:"'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'"},description:"Used to customize the label or icon of the Enter key on virtual keyboards.",fieldName:"enterkeyhint"},{name:"spellcheck",type:{text:"boolean"},default:"true",description:"Enables spell checking on the input.",fieldName:"spellcheck"},{name:"inputmode",type:{text:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'"},description:`Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices.`,fieldName:"inputmode"},{name:"min-fraction-digits",type:{text:"number"},description:"The minimal amount of fraction digits to use for numeric values.\nUsed to format the number when the input type is `number`.",fieldName:"minFractionDigits"},{name:"max-fraction-digits",type:{text:"number"},description:"The maximal amount of fraction digits to use for numeric values.\nUsed to format the number when the input type is `number`.",fieldName:"maxFractionDigits"},{name:"numeric-strategy",description:`Defines the strategy for handling numbers in the numeric input.
This is used to determine how the input behaves when the user interacts with it.

Includes the following configuration options:

- **autoClamp**: If true, the input will clamp the value to the min and max attributes.
- **noStepAlign**: If true, the input will not align the value to the step attribute.
- **noStepValidation**: If true, the input will not validate the value against the step attribute.

You may provide this as one of the following values:

- 'native': Uses the native browser implementation.
- 'modern': Uses a more intuitive implementation:
  - Values are clamped to the nearest min or max value.
  - Stepping is inclusive to the provided min and max values.
  - Provided stepping is no longer used in validation.
- An object that matches the \`NumericStrategy\` type. Note this can only be set via \`property\`, not as an \`attribute\`!`,type:{text:"'native' | 'modern' | Partial<NumericStrategy>"},default:"nativeNumericStrategy",fieldName:"numericStrategy"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Inputs collect data from the user.",tagNameWithoutPrefix:"input",tagName:"syn-input",customElement:!0,jsDoc:`/**
 * @summary Inputs collect data from the user.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-input--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-divider
 *
 * @slot label - The input's label. Alternatively, you can use the \`label\` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the input.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the \`help-text\` attribute.
 * @slot increment-number-stepper - An icon to use in lieu of the default increment number stepper icon.
 * @slot decrement-number-stepper - An icon to use in lieu of the default decrement number stepper icon.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-clear - Emitted when the clear button is activated.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 * @event syn-clamp - Emitted if the numeric strategy allows autoClamp and the value is clamped to the min or max attribute.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal \`<input>\` control.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart stepper - The container that wraps the number stepper.
 * @csspart decrement-number-stepper - The decrement number stepper button.
 * @csspart increment-number-stepper - The increment number stepper button.
 * @csspart divider - The divider between the increment and decrement number stepper buttons.
 *
 * @cssproperty --syn-input-autofill-shadow - The shadow to apply when the input is autofilled.
 * @cssproperty --syn-input-autofill-readonly-shadow - The shadow to apply when the input is readonly and autofilled.
 * @cssproperty --syn-input-autofill-text-fill-color - The text fill color to apply when the input is autofilled.
 * @cssproperty --syn-input-autofill-caret-color - The caret color to apply when the input is autofilled.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-input--docs",status:"stable",since:"2.0",dependencies:["syn-icon","syn-divider"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynInput",module:"../components/src/components/input/input.js"}}]},{kind:"javascript-module",path:"../components/src/components/menu-item/menu-item.js",declarations:[{kind:"class",description:"",name:"SynMenuItem",cssProperties:[{description:"The distance submenus shift to overlap the parent menu.",name:"--submenu-offset",default:"-2px"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The checked icon, which is only visible when the menu item is checked.",name:"checked-icon"},{description:"The prefix container.",name:"prefix"},{description:"The menu item label.",name:"label"},{description:"The suffix container.",name:"suffix"},{description:"The spinner that shows when the menu item is in the loading state.",name:"spinner"},{description:"The spinner's base part.",name:"spinner__base"},{description:"The submenu icon, visible only when the menu item has a submenu (not yet implemented).",name:"submenu-icon"}],slots:[{description:"The menu item's label.",name:""},{description:"Used to prepend an icon or similar element to the menu item.",name:"prefix"},{description:"Used to append an icon or similar element to the menu item.",name:"suffix"},{description:"Used to denote a nested menu.",name:"submenu"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon, 'syn-popup': SynPopup, 'syn-spinner': SynSpinner }"},{kind:"field",name:"cachedTextLabel",type:{text:"string"},privacy:"private"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"menuItem",type:{text:"HTMLElement"}},{kind:"field",name:"type",type:{text:"'normal' | 'checkbox'"},default:"'normal'",description:"The type of menu item to render. To use `checked`, this value must be set to `checkbox`.",attribute:"type"},{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Draws the item in a checked state.",attribute:"checked",reflects:!0},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"A unique value to store in the menu item. This can be used as a way to identify menu items when selected.",attribute:"value"},{kind:"field",name:"loading",type:{text:"boolean"},default:"false",description:"Draws the menu item in a loading state.",attribute:"loading",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Draws the menu item in a disabled state, preventing selection.",attribute:"disabled",reflects:!0},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'submenu')"},{kind:"field",name:"submenuController",type:{text:"SubmenuController"},privacy:"private",default:"new SubmenuController(this, this.hasSlotController)"},{kind:"method",name:"handleDefaultSlotChange",privacy:"private"},{kind:"field",name:"handleHostClick",privacy:"private"},{kind:"field",name:"handleMouseOver",privacy:"private"},{kind:"method",name:"handleCheckedChange"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleTypeChange"},{kind:"method",name:"getTextLabel",description:"Returns a text label based on the contents of the menu item's default slot."},{kind:"method",name:"isSubmenu"}],attributes:[{name:"type",type:{text:"'normal' | 'checkbox'"},default:"'normal'",description:"The type of menu item to render. To use `checked`, this value must be set to `checkbox`.",fieldName:"type"},{name:"checked",type:{text:"boolean"},default:"false",description:"Draws the item in a checked state.",fieldName:"checked"},{name:"value",type:{text:"string"},default:"''",description:"A unique value to store in the menu item. This can be used as a way to identify menu items when selected.",fieldName:"value"},{name:"loading",type:{text:"boolean"},default:"false",description:"Draws the menu item in a loading state.",fieldName:"loading"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Draws the menu item in a disabled state, preventing selection.",fieldName:"disabled"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Menu items provide options for the user to pick from in a menu.",tagNameWithoutPrefix:"menu-item",tagName:"syn-menu-item",customElement:!0,jsDoc:`/**
 * @summary Menu items provide options for the user to pick from in a menu.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-menu-item--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-popup
 * @dependency syn-spinner
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 * @slot submenu - Used to denote a nested menu.
 *
 * @csspart base - The component's base wrapper.
 * @csspart checked-icon - The checked icon, which is only visible when the menu item is checked.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 * @csspart spinner - The spinner that shows when the menu item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart submenu-icon - The submenu icon, visible only when the menu item has a submenu (not yet implemented).
 *
 * @cssproperty [--submenu-offset=-2px] - The distance submenus shift to overlap the parent menu.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-menu-item--docs",status:"stable",since:"2.0",dependencies:["syn-icon","syn-popup","syn-spinner"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynMenuItem",module:"../components/src/components/menu-item/menu-item.js"}}]},{kind:"javascript-module",path:"../components/src/components/menu-label/menu-label.js",declarations:[{kind:"class",description:"",name:"SynMenuLabel",cssProperties:[{description:'Display property of the divider. Defaults to "block"',name:"--display-divider"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The divider that is displayed above the content",name:"divider"},{description:"The label that is displayed below the divider",name:"label"}],slots:[{description:"The menu label's content.",name:""}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-divider': SynDivider, }"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Menu labels are used to describe a group of menu items.",tagNameWithoutPrefix:"menu-label",tagName:"syn-menu-label",customElement:!0,jsDoc:`/**
 * @summary Menu labels are used to describe a group of menu items.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-menu-label--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-divider
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 * @csspart divider - The divider that is displayed above the content
 * @csspart label - The label that is displayed below the divider
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-menu-label--docs",status:"stable",since:"2.0",dependencies:["syn-divider"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynMenuLabel",module:"../components/src/components/menu-label/menu-label.js"}}]},{kind:"javascript-module",path:"../components/src/components/menu/menu.js",declarations:[{kind:"class",description:"",name:"SynMenu",slots:[{description:"The menu's content, including menu items, menu labels, and dividers.",name:""}],members:[{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"hasMenuItemsWithCheckmarks",type:{text:"boolean"},default:"false"},{kind:"method",name:"handleUpdateCheckmarks",privacy:"private",parameters:[{name:"items",type:{text:"SynMenuItem[]"}}]},{kind:"field",name:"updateCheckMarksByChildPropChange",privacy:"private"},{kind:"method",name:"handleClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleMouseDown",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleSlotChange",privacy:"private"},{kind:"method",name:"isMenuItem",privacy:"private",parameters:[{name:"item",type:{text:"HTMLElement"}}]}],events:[{type:{text:"{ item: SynMenuItem }"},description:"Emitted when a menu item is selected.",name:"syn-select"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Menus provide a list of options for the user to choose from.",tagNameWithoutPrefix:"menu",tagName:"syn-menu",customElement:!0,jsDoc:`/**
 * @summary Menus provide a list of options for the user to choose from.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-menu--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The menu's content, including menu items, menu labels, and dividers.
 *
 * @event {{ item: SynMenuItem }} syn-select - Emitted when a menu item is selected.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-menu--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynMenu",module:"../components/src/components/menu/menu.js"}}]},{kind:"javascript-module",path:"../components/src/components/nav-item/nav-item.js",declarations:[{kind:"class",description:"",name:"SynNavItem",cssProperties:[{description:"Numeric value, indicating the level the item is placed at.",name:"--indentation"},{description:"The amount of pixels each level will indent.",name:"--indentation-stepping"},{description:'Display property of the children. Defaults to "contents"',name:"--display-children"}],cssParts:[{description:"The component's base wrapper including children.",name:"base"},{description:"The wrapper that holds the children",name:"children"},{description:"The component's content wrapper.",name:"content-wrapper"},{description:"The component's content excluding children.",name:"content"},{description:"The indicator used when current is set to true",name:"current-indicator"},{description:"The container that wraps the chevron.",name:"chevron"},{description:"The details element rendered when there are children available",name:"details"},{description:"The components optional top divider.",name:"divider"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The container that wraps the suffix.",name:"suffix"}],slots:[{description:"The navigation item's label.",name:""},{description:"A presentational prefix icon or similar element.",name:"prefix"},{description:"A presentational suffix icon or similar element.",name:"suffix"},{description:"Slot used to provide nested child navigation elements. If provided, details and summary elements will be used. A chevron will be shown on the right side regardless of the chevron property.",name:"children"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-divider': SynDivider, }"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, '[default]', 'children', 'prefix', 'suffix')"},{kind:"field",name:"resizeObserver",type:{text:"ResizeObserver"},privacy:"private"},{kind:"field",name:"mutationObserver",type:{text:"MutationObserver"},privacy:"private"},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false",description:"The current focus state"},{kind:"field",name:"showPrefixOnly",type:{text:"boolean"},privacy:"private",default:"false",description:"Only the prefix should be displayed"},{kind:"field",name:"currentMarkedChild",type:{text:"boolean"},privacy:"private",default:"false",description:"A nested nav-item is marked as current"},{kind:"field",name:"isMultiLine",type:{text:"boolean"},privacy:"private",default:"false",description:"The content area is multiline"},{kind:"field",name:"childrenSlot",type:{text:"HTMLSlotElement"},description:"Reference to the children slot"},{kind:"field",name:"control",type:{text:"HTMLButtonElement | HTMLLinkElement | HTMLElement"},description:"Reference to the outermost button"},{kind:"field",name:"href",type:{text:"string"},description:`The navigation item's href target.
If provided, the navigation item will use an anchor tag otherwise it will use a button tag.

If the 'children' slot is provided, the navigation item will ignore the 'href' and use
accordion behavior.`,attribute:"href",reflects:!0},{kind:"field",name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top'"},description:"Tells the browser where to open the link. Only used when `href` is present.",attribute:"target"},{kind:"field",name:"rel",type:{text:"string"},default:"'noreferrer noopener'",description:"When using `href`, this attribute will map to the underlying link's `rel` attribute.\nUnlike regular links, the default is `noreferrer noopener` to prevent security exploits.\n\nHowever, if you're using `target` to point to a specific tab/window,\nthis will prevent that from working correctly.\n\nYou can remove or change the default value by setting the attribute\nto an empty string or a value of your choice, respectively.",attribute:"rel"},{kind:"field",name:"current",type:{text:"boolean"},default:"false",attribute:"current",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the navigation item.",attribute:"disabled",reflects:!0},{kind:"field",name:"horizontal",type:{text:"boolean"},default:"false",description:"The navigation item's orientation.",attribute:"horizontal",reflects:!0},{kind:"field",name:"chevron",type:{text:"boolean"},default:"false",description:"Appends a chevron to the right side of a navigation item.\nOnly used if `horizontal` is false.",attribute:"chevron",reflects:!0},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Reflects HTML details element state and allows control from parent.\nOnly used if `horizontal` is false and `children` is defined.",attribute:"open",reflects:!0},{kind:"field",name:"divider",type:{text:"boolean"},default:"false",description:`Toggle to true to show a divider above the element.
Only available when horizontal is false.`,attribute:"divider",reflects:!0},{kind:"method",name:"isButton",privacy:"private",return:{type:{text:"boolean"}}},{kind:"method",name:"isLink",privacy:"private",return:{type:{text:"boolean"}}},{kind:"method",name:"isAccordion",privacy:"private",return:{type:{text:"boolean"}}},{kind:"method",name:"getNavItemChildren",privacy:"private",return:{type:{text:"SynNavItem[]"}},parameters:[{name:"childrenSlot",type:{text:"HTMLSlotElement"}}]},{kind:"method",name:"getAllNestedNavItems",privacy:"private",return:{type:{text:"SynNavItem[]"}},parameters:[{name:"childrenSlot",type:{text:"HTMLSlotElement"}}]},{kind:"method",name:"handleCurrentMarkedChild",privacy:"private"},{kind:"method",name:"handleClickButton",privacy:"private",parameters:[{name:"e",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleClickSummary",privacy:"private",parameters:[{name:"e",type:{text:"MouseEvent"}}]},{kind:"method",name:"hideDetails",privacy:"private"},{kind:"method",name:"showDetails",privacy:"private"},{kind:"method",name:"handleSlotChange",privacy:"private",description:"Automatically add the correct level of indentation for sub items if none is provided"},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleWidth",privacy:"private",parameters:[{name:"entries",type:{text:"ResizeObserverEntry[]"}}]},{kind:"method",name:"handleHorizontalChange"},{kind:"method",name:"blur",description:"Removes focus from the button."},{kind:"method",name:"click",description:"Simulates a click on the nav-items button, link or summary."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the nav-item"}],events:[{description:"Emitted when the navigation item: - has children, - and is clicked while HTML details are hidden.",name:"syn-show"},{description:"Emitted when the navigation item: - has children, - and is clicked while HTML details are shown.",name:"syn-hide"},{description:"Emitted when the button loses focus.",name:"syn-blur"},{description:"Emitted when the button gains focus.",name:"syn-focus"}],attributes:[{name:"href",type:{text:"string"},description:`The navigation item's href target.
If provided, the navigation item will use an anchor tag otherwise it will use a button tag.

If the 'children' slot is provided, the navigation item will ignore the 'href' and use
accordion behavior.`,fieldName:"href"},{name:"target",type:{text:"'_blank' | '_parent' | '_self' | '_top'"},description:"Tells the browser where to open the link. Only used when `href` is present.",fieldName:"target"},{name:"rel",type:{text:"string"},default:"'noreferrer noopener'",description:"When using `href`, this attribute will map to the underlying link's `rel` attribute.\nUnlike regular links, the default is `noreferrer noopener` to prevent security exploits.\n\nHowever, if you're using `target` to point to a specific tab/window,\nthis will prevent that from working correctly.\n\nYou can remove or change the default value by setting the attribute\nto an empty string or a value of your choice, respectively.",fieldName:"rel"},{name:"current",type:{text:"boolean"},default:"false",fieldName:"current"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the navigation item.",fieldName:"disabled"},{name:"horizontal",type:{text:"boolean"},default:"false",description:"The navigation item's orientation.",fieldName:"horizontal"},{name:"chevron",type:{text:"boolean"},default:"false",description:"Appends a chevron to the right side of a navigation item.\nOnly used if `horizontal` is false.",fieldName:"chevron"},{name:"open",type:{text:"boolean"},default:"false",description:"Reflects HTML details element state and allows control from parent.\nOnly used if `horizontal` is false and `children` is defined.",fieldName:"open"},{name:"divider",type:{text:"boolean"},default:"false",description:`Toggle to true to show a divider above the element.
Only available when horizontal is false.`,fieldName:"divider"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Flexible button / link component that can be used to quickly build navigations.",tagNameWithoutPrefix:"nav-item",tagName:"syn-nav-item",customElement:!0,jsDoc:`/**
 * @summary Flexible button / link component that can be used to quickly build navigations.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-nav-item--docs
 * Takes one of 3 forms:
 * - button (default),
 * - link (overrides button if a 'href' is provided),
 * - or accordion (overrides all other if 'children' slot is defined).
 *
 * @status stable
 * @since 1.14.0
 *
 * @dependency syn-divider
 *
 * @event syn-show - Emitted when the navigation item:
 * - has children,
 * - and is clicked while HTML details are hidden.
 *
 * @event syn-hide - Emitted when the navigation item:
 * - has children,
 * - and is clicked while HTML details are shown.
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 *
 * @slot - The navigation item's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 * @slot children - Slot used to provide nested child navigation elements.
 * If provided, details and summary elements will be used.
 * A chevron will be shown on the right side regardless of the chevron property.
 *
 * @csspart base - The component's base wrapper including children.
 * @csspart children - The wrapper that holds the children
 * @csspart content-wrapper - The component's content wrapper.
 * @csspart content - The component's content excluding children.
 * @csspart current-indicator - The indicator used when current is set to true
 * @csspart chevron - The container that wraps the chevron.
 * @csspart details - The details element rendered when there are children available
 * @csspart divider - The components optional top divider.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 *
 * @cssproperty --indentation - Numeric value, indicating the level the item is placed at.
 * @cssproperty --indentation-stepping - The amount of pixels each level will indent.
 * @cssproperty --display-children - Display property of the children. Defaults to "contents"
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-nav-item--docs",status:"stable",since:"1.14.0",dependencies:["syn-divider"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynNavItem",module:"../components/src/components/nav-item/nav-item.js"}}]},{kind:"javascript-module",path:"../components/src/components/optgroup/optgroup.js",declarations:[{kind:"class",description:"",name:"SynOptgroup",cssProperties:[{description:'Display property of the divider. Defaults to "block"',name:"--display-divider"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The container that wraps prefix, label and base",name:"label-container"},{description:"The divider that is displayed above the content",name:"divider"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The container that wraps the suffix.",name:"suffix"},{description:"The container that wraps the <syn-option> elements.",name:"options"}],slots:[{description:"The given options. Must be `<syn-option>` elements.",name:""},{description:"A presentational prefix icon or similar element.",name:"prefix"},{description:"The label for the optgroup",name:"label"},{description:"A presentational suffix icon or similar element.",name:"suffix"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-divider': SynDivider, }"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, '[default]', 'prefix', 'suffix', 'label')"},{kind:"field",name:"mutationObserver",type:{text:"MutationObserver"},privacy:"private"},{kind:"method",name:"enableObserver",privacy:"private"},{kind:"field",name:"assignedOptions",type:{text:"SynOption[]"}},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables all options in the optgroup.",attribute:"disabled",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The optgroups label. If you need to display HTML, use the `label` slot instead.",attribute:"label"}],attributes:[{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables all options in the optgroup.",fieldName:"disabled"},{name:"label",type:{text:"string"},default:"''",description:"The optgroups label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"The <syn-optgroup> element creates a grouping for <syn-option>s within a <syn-select>.",tagNameWithoutPrefix:"optgroup",tagName:"syn-optgroup",customElement:!0,jsDoc:`/**
 * @summary The <syn-optgroup> element creates a grouping for <syn-option>s within a <syn-select>.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-optgroup--docs
 * @status stable
 * @since 1.3.0
 *
 * @dependency syn-divider
 *
 * @slot - The given options. Must be \`<syn-option>\` elements.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot label - The label for the optgroup
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label-container - The container that wraps prefix, label and base
 * @csspart divider - The divider that is displayed above the content
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart options - The container that wraps the <syn-option> elements.
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-optgroup--docs",status:"stable",since:"1.3.0",dependencies:["syn-divider"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynOptgroup",module:"../components/src/components/optgroup/optgroup.js"}}]},{kind:"javascript-module",path:"../components/src/components/option/option.js",declarations:[{kind:"class",description:"",name:"SynOption",cssParts:[{description:"The checked icon, an `<syn-icon>` element.",name:"checked-icon"},{description:"The component's base wrapper.",name:"base"},{description:"The option's label.",name:"label"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The container that wraps the suffix.",name:"suffix"}],slots:[{description:"The option's label.",name:""},{description:"Used to prepend an icon or similar element to the menu item.",name:"prefix"},{description:"Used to append an icon or similar element to the menu item.",name:"suffix"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon }"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"isInitialized",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"delimiter",type:{text:"string"},default:"' '"},{kind:"field",name:"current",type:{text:"boolean"},default:"false"},{kind:"field",name:"selected",type:{text:"boolean"},default:"false"},{kind:"field",name:"hasHover",type:{text:"boolean"},default:"false"},{kind:"field",name:"value",type:{text:"string | number"},default:"''",description:`The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values.`,attribute:"value",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Draws the option in a disabled state, preventing selection.",attribute:"disabled",reflects:!0},{kind:"method",name:"handleDefaultSlotChange",privacy:"private"},{kind:"method",name:"handleMouseEnter",privacy:"private"},{kind:"method",name:"handleMouseLeave",privacy:"private"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleSelectedChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"getTextLabel",description:"Returns a plain text label based on the option's content."}],attributes:[{name:"value",type:{text:"string | number"},default:"''",description:`The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values.`,fieldName:"value"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Draws the option in a disabled state, preventing selection.",fieldName:"disabled"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Options define the selectable items within various form controls such as [select](/components/select).",tagNameWithoutPrefix:"option",tagName:"syn-option",customElement:!0,jsDoc:`/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-option--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The option's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart checked-icon - The checked icon, an \`<syn-icon>\` element.
 * @csspart base - The component's base wrapper.
 * @csspart label - The option's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-option--docs",status:"stable",since:"2.0",dependencies:["syn-icon"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynOption",module:"../components/src/components/option/option.js"}}]},{kind:"javascript-module",path:"../components/src/components/popup/popup.js",declarations:[{kind:"class",description:"",name:"SynPopup",cssProperties:[{description:"The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used.",name:"--arrow-size",default:"6px"},{description:"The color of the arrow.",name:"--arrow-color",default:"var(--syn-color-neutral-0)"},{description:"A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`.",name:"--auto-size-available-width"},{description:"A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`.",name:"--auto-size-available-height"}],cssParts:[{description:"The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.",name:"arrow"},{description:"The popup's container. Useful for setting a background color, box shadow, etc.",name:"popup"},{description:"The hover bridge element. Only available when the `hover-bridge` option is enabled.",name:"hover-bridge"}],slots:[{description:"The popup's content.",name:""},{description:"The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.",name:"anchor"}],members:[{kind:"field",name:"anchorEl",type:{text:"Element | VirtualElement | null"},privacy:"private"},{kind:"field",name:"cleanup",type:{text:"ReturnType<typeof autoUpdate> | undefined"},privacy:"private"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"popup",type:{text:"HTMLElement"},description:"A reference to the internal popup container. Useful for animating and styling the popup with JavaScript."},{kind:"field",name:"arrowEl",type:{text:"HTMLElement"},privacy:"private"},{kind:"field",name:"anchor",type:{text:"Element | string | VirtualElement"},description:"The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor\nelement `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the\n`anchor` slot instead.",attribute:"anchor"},{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:`Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden.`,attribute:"active",reflects:!0},{kind:"field",name:"placement",type:{text:`| 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'`},default:"'top'",description:`The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport.`,attribute:"placement",reflects:!0},{kind:"field",name:"strategy",type:{text:"'absolute' | 'fixed'"},default:"'absolute'",description:"Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is\nclipped, using a `fixed` position strategy can often workaround it.",attribute:"strategy",reflects:!0},{kind:"field",name:"distance",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel away from its anchor.",attribute:"distance"},{kind:"field",name:"skidding",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel along its anchor.",attribute:"skidding"},{kind:"field",name:"arrow",type:{text:"boolean"},default:"false",description:"Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and\n`--arrow-color` custom properties. For additional customizations, you can also target the arrow using\n`::part(arrow)` in your stylesheet.",attribute:"arrow"},{kind:"field",name:"arrowPlacement",type:{text:"'start' | 'end' | 'center' | 'anchor'"},default:"'anchor'",description:"The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the\nanchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will\nalign the arrow to the start, end, or center of the popover instead.",attribute:"arrow-placement"},{kind:"field",name:"arrowPadding",type:{text:"number"},default:"10",description:`The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners.`,attribute:"arrow-padding"},{kind:"field",name:"flip",type:{text:"boolean"},default:"false",description:"When set, placement of the popup will flip to the opposite site to keep it in view. You can use\n`flipFallbackPlacements` to further configure how the fallback placement is determined.",attribute:"flip"},{kind:"field",name:"flipFallbackPlacements",type:{text:"string"},default:"''",description:`If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead.`,attribute:"flip-fallback-placements"},{kind:"field",name:"flipFallbackStrategy",type:{text:"'best-fit' | 'initial'"},default:"'best-fit'",description:`When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred.`,attribute:"flip-fallback-strategy"},{kind:"field",name:"flipBoundary",type:{text:"Element | Element[]"},description:`The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.`,attribute:"flipBoundary"},{kind:"field",name:"flipPadding",type:{text:"number"},default:"0",description:"The amount of padding, in pixels, to exceed before the flip behavior will occur.",attribute:"flip-padding"},{kind:"field",name:"shift",type:{text:"boolean"},default:"false",description:"Moves the popup along the axis to keep it in view when clipped.",attribute:"shift"},{kind:"field",name:"shiftBoundary",type:{text:"Element | Element[]"},description:`The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.`,attribute:"shiftBoundary"},{kind:"field",name:"shiftPadding",type:{text:"number"},default:"0",description:"The amount of padding, in pixels, to exceed before the shift behavior will occur.",attribute:"shift-padding"},{kind:"field",name:"autoSize",type:{text:"'horizontal' | 'vertical' | 'both'"},description:"When set, this will cause the popup to automatically resize itself to prevent it from overflowing.",attribute:"auto-size"},{kind:"field",name:"sync",type:{text:"'width' | 'height' | 'both'"},description:"Syncs the popup's width or height to that of the anchor element.",attribute:"sync"},{kind:"field",name:"autoSizeBoundary",type:{text:"Element | Element[]"},description:`The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.`,attribute:"autoSizeBoundary"},{kind:"field",name:"autoSizePadding",type:{text:"number"},default:"0",description:"The amount of padding, in pixels, to exceed before the auto-size behavior will occur.",attribute:"auto-size-padding"},{kind:"field",name:"hoverBridge",type:{text:"boolean"},default:"false",description:'When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the\ngap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane\nbecause the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is\nactive.',attribute:"hover-bridge"},{kind:"method",name:"handleAnchorChange",privacy:"private"},{kind:"method",name:"start",privacy:"private"},{kind:"method",name:"stop",privacy:"private",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"reposition",description:"Forces the popup to recalculate and reposition itself."},{kind:"field",name:"updateHoverBridge",privacy:"private"}],events:[{description:"Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.",name:"syn-reposition"}],attributes:[{name:"anchor",type:{text:"Element | string | VirtualElement"},description:"The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor\nelement `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the\n`anchor` slot instead.",fieldName:"anchor"},{name:"active",type:{text:"boolean"},default:"false",description:`Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden.`,fieldName:"active"},{name:"placement",type:{text:`| 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'`},default:"'top'",description:`The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport.`,fieldName:"placement"},{name:"strategy",type:{text:"'absolute' | 'fixed'"},default:"'absolute'",description:"Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is\nclipped, using a `fixed` position strategy can often workaround it.",fieldName:"strategy"},{name:"distance",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel away from its anchor.",fieldName:"distance"},{name:"skidding",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the panel along its anchor.",fieldName:"skidding"},{name:"arrow",type:{text:"boolean"},default:"false",description:"Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and\n`--arrow-color` custom properties. For additional customizations, you can also target the arrow using\n`::part(arrow)` in your stylesheet.",fieldName:"arrow"},{name:"arrow-placement",type:{text:"'start' | 'end' | 'center' | 'anchor'"},default:"'anchor'",description:"The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the\nanchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will\nalign the arrow to the start, end, or center of the popover instead.",fieldName:"arrowPlacement"},{name:"arrow-padding",type:{text:"number"},default:"10",description:`The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners.`,fieldName:"arrowPadding"},{name:"flip",type:{text:"boolean"},default:"false",description:"When set, placement of the popup will flip to the opposite site to keep it in view. You can use\n`flipFallbackPlacements` to further configure how the fallback placement is determined.",fieldName:"flip"},{name:"flip-fallback-placements",type:{text:"string"},default:"''",description:`If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead.`,fieldName:"flipFallbackPlacements"},{name:"flip-fallback-strategy",type:{text:"'best-fit' | 'initial'"},default:"'best-fit'",description:`When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred.`,fieldName:"flipFallbackStrategy"},{name:"flipBoundary",type:{text:"Element | Element[]"},description:`The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.`,fieldName:"flipBoundary"},{name:"flip-padding",type:{text:"number"},default:"0",description:"The amount of padding, in pixels, to exceed before the flip behavior will occur.",fieldName:"flipPadding"},{name:"shift",type:{text:"boolean"},default:"false",description:"Moves the popup along the axis to keep it in view when clipped.",fieldName:"shift"},{name:"shiftBoundary",type:{text:"Element | Element[]"},description:`The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.`,fieldName:"shiftBoundary"},{name:"shift-padding",type:{text:"number"},default:"0",description:"The amount of padding, in pixels, to exceed before the shift behavior will occur.",fieldName:"shiftPadding"},{name:"auto-size",type:{text:"'horizontal' | 'vertical' | 'both'"},description:"When set, this will cause the popup to automatically resize itself to prevent it from overflowing.",fieldName:"autoSize"},{name:"sync",type:{text:"'width' | 'height' | 'both'"},description:"Syncs the popup's width or height to that of the anchor element.",fieldName:"sync"},{name:"autoSizeBoundary",type:{text:"Element | Element[]"},description:`The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property.`,fieldName:"autoSizeBoundary"},{name:"auto-size-padding",type:{text:"number"},default:"0",description:"The amount of padding, in pixels, to exceed before the auto-size behavior will occur.",fieldName:"autoSizePadding"},{name:"hover-bridge",type:{text:"boolean"},default:"false",description:'When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the\ngap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane\nbecause the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is\nactive.',fieldName:"hoverBridge"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:'Popup is a utility that lets you declaratively anchor "popup" containers to another element.',tagNameWithoutPrefix:"popup",tagName:"syn-popup",customElement:!0,jsDoc:`/**
 * @summary Popup is a utility that lets you declaratively anchor "popup" containers to another element.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-popup--docs
 * @status stable
 * @since 2.0
 *
 * @event syn-reposition - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive
 *  operations in your listener or consider debouncing it.
 *
 * @slot - The popup's content.
 * @slot anchor - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the
 *  \`anchor\` attribute or property instead.
 *
 * @csspart arrow - The arrow's container. Avoid setting \`top|bottom|left|right\` properties, as these values are
 *  assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and
 *  maybe a border or box shadow.
 * @csspart popup - The popup's container. Useful for setting a background color, box shadow, etc.
 * @csspart hover-bridge - The hover bridge element. Only available when the \`hover-bridge\` option is enabled.
 *
 * @cssproperty [--arrow-size=6px] - The size of the arrow. Note that an arrow won't be shown unless the \`arrow\`
 *  attribute is used.
 * @cssproperty [--arrow-color=var(--syn-color-neutral-0)] - The color of the arrow.
 * @cssproperty [--auto-size-available-width] - A read-only custom property that determines the amount of width the
 *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only
 *  available when using \`auto-size\`.
 * @cssproperty [--auto-size-available-height] - A read-only custom property that determines the amount of height the
 *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only
 *  available when using \`auto-size\`.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-popup--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynPopup",module:"../components/src/components/popup/popup.js"}}]},{kind:"javascript-module",path:"../components/src/components/prio-nav/prio-nav.js",declarations:[{kind:"class",description:"",name:"SynPrioNav",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The wrapper around the priority menu",name:"priority-menu"},{description:"The navigation item for the priority menu",name:"priority-menu-nav-item"},{description:"The label for the priority menu",name:"priority-menu-label"},{description:"The icon for the priority menu",name:"priority-menu-icon"},{description:"The container for the shifted navigation items, if there is not enough space.",name:"priority-menu-container"}],slots:[{description:'The given navigation items. Must be horizontal `<syn-nav-item>`s or have a role of "menuitem"',name:""}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-dropdown': SynDropdown, 'syn-icon': SynIcon, 'syn-menu': SynMenu, 'syn-nav-item': SynNavItem, }"},{kind:"field",name:"resizeObserver",type:{text:"ResizeObserver"},privacy:"private",description:"Internal resize observer"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"},privacy:"private",description:"Reference to the rendered children slot"},{kind:"field",name:"menuSlot",type:{text:"HTMLSlotElement"},privacy:"private",description:"Reference to the slot where priority menu items are placed"},{kind:"field",name:"horizontalNav",type:{text:"HTMLDivElement"},privacy:"private",description:"The wrapper that holds the horizontal navigation items"},{kind:"field",name:"priorityMenu",type:{text:"SynDropdown"},privacy:"private",description:"The priority menu dropdown"},{kind:"field",name:"itemPositionsCached",type:{text:"boolean"},privacy:"private",default:"false",description:"Internal state reflecting if the item positions have been cached"},{kind:"field",name:"amountOfNavItems",type:{text:"number"},privacy:"private",default:"0",description:"The amount of nav items that are currently slotted"},{kind:"field",name:"amountOfVisibleItems",type:{text:"number"},privacy:"private",default:"0",description:"The amount of items that are currently visible"},{kind:"field",name:"hasItemsInDropdown",type:{text:"boolean"},privacy:"private",default:"false",description:"Internal state reflecting if there are items in the priority menu"},{kind:"method",name:"getSlottedNavItems",privacy:"private",description:"Get a list of all slotted `<syn-nav-item />` elements\nthat are either in the main slot or the priority menu slot"},{kind:"method",name:"cacheItemPositions",privacy:"private",parameters:[{name:"items",type:{text:"SynNavItem[]"},description:"The items to cache the position for"}],description:"Cache the items right offset position to make faster checks placement into priority menu"},{kind:"method",name:"handlePriorityMenu",privacy:"private",description:"Determines which items should be shown or hidden, depending on the current width"},{kind:"method",name:"renderPriorityMenu",privacy:"private"},{kind:"method",name:"slotChange",privacy:"private"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"The `<syn-prio-nav />` element provides a generic navigation bar\nthat can be used to group multiple navigation items  (usually horizontal `<syn-nav-item />`s)\ntogether. It will automatically group all items not visible in the viewport into a custom\npriority menu.",tagNameWithoutPrefix:"prio-nav",tagName:"syn-prio-nav",customElement:!0,jsDoc:`/**
 * @summary The \`<syn-prio-nav />\` element provides a generic navigation bar
 * that can be used to group multiple navigation items  (usually horizontal \`<syn-nav-item />\`s)
 * together. It will automatically group all items not visible in the viewport into a custom
 * priority menu.
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-prio-nav--docs
 * @example
 * <syn-prio-nav>
 *  <syn-nav-item current horizontal>Item 1</syn-nav-item>
 *  <button role="menuitem">Item 2 (custom)</button>
 *  <syn-nav-item horizontal>Item 3</syn-nav-item>
 * </syn-prio-nav>
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-prio-nav--docs
 * @status stable
 * @since 1.14.0
 *
 * @dependency syn-dropdown
 * @dependency syn-icon
 * @dependency syn-menu
 * @dependency syn-nav-item
 *
 * @slot - The given navigation items. Must be horizontal \`<syn-nav-item>\`s
 *    or have a role of "menuitem"
 *
 * @csspart base - The component's base wrapper.
 * @csspart priority-menu - The wrapper around the priority menu
 * @csspart priority-menu-nav-item - The navigation item for the priority menu
 * @csspart priority-menu-label - The label for the priority menu
 * @csspart priority-menu-icon - The icon for the priority menu
 * @csspart priority-menu-container - The container for the shifted navigation items,
 *    if there is not enough space.
 *
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-prio-nav--docs",status:"stable",since:"1.14.0",dependencies:["syn-dropdown","syn-icon","syn-menu","syn-nav-item"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynPrioNav",module:"../components/src/components/prio-nav/prio-nav.js"}}]},{kind:"javascript-module",path:"../components/src/components/progress-bar/progress-bar.js",declarations:[{kind:"class",description:"",name:"SynProgressBar",cssProperties:[{description:"The progress bar's height.",name:"--height"},{description:"The color of the track.",name:"--track-color"},{description:"The color of the indicator.",name:"--indicator-color"},{description:"The color of the label.",name:"--label-color"},{description:"The speed of the progress bar when in indeterminate state.",name:"--speed"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The progress bar's indicator.",name:"indicator"},{description:"The progress bar's label.",name:"label"}],slots:[{description:"A label to show inside the progress indicator.",name:""}],members:[{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"value",type:{text:"number"},default:"0",description:"The current progress as a percentage, 0 to 100.",attribute:"value",reflects:!0},{kind:"field",name:"indeterminate",type:{text:"boolean"},default:"false",description:"When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.",attribute:"indeterminate",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"A custom label for assistive devices.",attribute:"label"}],attributes:[{name:"value",type:{text:"number"},default:"0",description:"The current progress as a percentage, 0 to 100.",fieldName:"value"},{name:"indeterminate",type:{text:"boolean"},default:"false",description:"When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.",fieldName:"indeterminate"},{name:"label",type:{text:"string"},default:"''",description:"A custom label for assistive devices.",fieldName:"label"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Progress bars are used to show the status of an ongoing operation.",tagNameWithoutPrefix:"progress-bar",tagName:"syn-progress-bar",customElement:!0,jsDoc:`/**
 * @summary Progress bars are used to show the status of an ongoing operation.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-progress-bar--docs
 * @status stable
 * @since 2.0
 *
 * @slot - A label to show inside the progress indicator.
 *
 * @csspart base - The component's base wrapper.
 * @csspart indicator - The progress bar's indicator.
 * @csspart label - The progress bar's label.
 *
 * @cssproperty --height - The progress bar's height.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The color of the indicator.
 * @cssproperty --label-color - The color of the label.
 * @cssproperty --speed - The speed of the progress bar when in indeterminate state.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-progress-bar--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynProgressBar",module:"../components/src/components/progress-bar/progress-bar.js"}}]},{kind:"javascript-module",path:"../components/src/components/progress-ring/progress-ring.js",declarations:[{kind:"class",description:"",name:"SynProgressRing",cssProperties:[{description:"The diameter of the progress ring (cannot be a percentage).",name:"--size"},{description:"The width of the track.",name:"--track-width"},{description:"The color of the track.",name:"--track-color"},{description:"The width of the indicator. Defaults to the track width.",name:"--indicator-width"},{description:"The color of the indicator.",name:"--indicator-color"},{description:"The duration of the indicator's transition when the value changes.",name:"--indicator-transition-duration"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The progress ring label.",name:"label"}],slots:[{description:"A label to show inside the ring.",name:""}],members:[{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"indicator",type:{text:"SVGCircleElement"}},{kind:"field",name:"indicatorOffset",type:{text:"string"}},{kind:"field",name:"value",type:{text:"number"},default:"0",description:"The current progress as a percentage, 0 to 100.",attribute:"value",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"A custom label for assistive devices.",attribute:"label"}],attributes:[{name:"value",type:{text:"number"},default:"0",description:"The current progress as a percentage, 0 to 100.",fieldName:"value"},{name:"label",type:{text:"string"},default:"''",description:"A custom label for assistive devices.",fieldName:"label"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Progress rings are used to show the progress of a determinate operation in a circular fashion.",tagNameWithoutPrefix:"progress-ring",tagName:"syn-progress-ring",customElement:!0,jsDoc:`/**
 * @summary Progress rings are used to show the progress of a determinate operation in a circular fashion.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-progress-ring--docs
 * @status stable
 * @since 2.0
 *
 * @slot - A label to show inside the ring.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The progress ring label.
 *
 * @cssproperty --size - The diameter of the progress ring (cannot be a percentage).
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-width - The width of the indicator. Defaults to the track width.
 * @cssproperty --indicator-color - The color of the indicator.
 * @cssproperty --indicator-transition-duration - The duration of the indicator's transition when the value changes.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-progress-ring--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynProgressRing",module:"../components/src/components/progress-ring/progress-ring.js"}}]},{kind:"javascript-module",path:"../components/src/components/radio-button/radio-button.js",declarations:[{kind:"class",description:"",name:"SynRadioButton",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The internal `<button>` element.",name:"button"},{description:"The internal button element when the radio button is checked.",name:"button--checked"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The container that wraps the radio button's label.",name:"label"},{description:"The container that wraps the suffix.",name:"suffix"}],slots:[{description:"The radio button's label.",name:""},{description:"A presentational prefix icon or similar element.",name:"prefix"},{description:"A presentational suffix icon or similar element.",name:"suffix"}],members:[{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, '[default]', 'prefix', 'suffix')"},{kind:"field",name:"input",type:{text:"HTMLInputElement"}},{kind:"field",name:"hiddenInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"protected",default:"false"},{kind:"field",name:"value",type:{text:"string"},description:"The radio's value. When selected, the radio group will receive this value.",attribute:"value"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the radio button.",attribute:"disabled",reflects:!0},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:`The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted.`,attribute:"size",reflects:!0},{kind:"field",name:"pill",type:{text:"boolean"},default:"false",description:"Draws a pill-style radio button with rounded edges.",attribute:"pill",reflects:!0},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleClick",privacy:"private",parameters:[{name:"e",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the radio button."},{kind:"method",name:"blur",description:"Removes focus from the radio button."}],events:[{description:"Emitted when the button loses focus.",name:"syn-blur"},{description:"Emitted when the button gains focus.",name:"syn-focus"}],attributes:[{name:"value",type:{text:"string"},description:"The radio's value. When selected, the radio group will receive this value.",fieldName:"value"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the radio button.",fieldName:"disabled"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:`The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted.`,fieldName:"size"},{name:"pill",type:{text:"boolean"},default:"false",description:"Draws a pill-style radio button with rounded edges.",fieldName:"pill"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Radios buttons allow the user to select a single option from a group using a button-like control.",tagNameWithoutPrefix:"radio-button",tagName:"syn-radio-button",customElement:!0,jsDoc:`/**
 * @summary Radios buttons allow the user to select a single option from a group using a button-like control.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-radio-button--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The radio button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @event syn-blur - Emitted when the button loses focus.
 * @event syn-focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal \`<button>\` element.
 * @csspart button--checked - The internal button element when the radio button is checked.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The container that wraps the radio button's label.
 * @csspart suffix - The container that wraps the suffix.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-radio-button--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynRadioButton",module:"../components/src/components/radio-button/radio-button.js"}}]},{kind:"javascript-module",path:"../components/src/components/radio-group/radio-group.js",declarations:[{kind:"class",description:"",name:"SynRadioGroup",cssParts:[{description:"The form control that wraps the label, input, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The input's wrapper.",name:"form-control-input"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The button group that wraps radio buttons.",name:"button-group"},{description:"The button group's `base` part.",name:"button-group__base"}],slots:[{description:"The default slot where `<syn-radio>` or `<syn-radio-button>` elements are placed.",name:""},{description:"The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.",name:"help-text"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-button-group': SynButtonGroup }"},{kind:"field",name:"formControlController",privacy:"protected",readonly:!0,default:"new FormControlController(this)"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label')"},{kind:"field",name:"customValidityMessage",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"validationTimeout",type:{text:"number"},privacy:"private"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"validationInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"hasButtonGroup",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"errorMessage",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"defaultValue",type:{text:"string"},default:"''"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot\ninstead.",attribute:"label"},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"name",type:{text:"string"},default:"'option'",description:"The name of the radio group, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"The current value of the radio group, submitted as a name/value pair with form data.",attribute:"value",reflects:!0},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The radio group's size. This size will be applied to all child radios and radio buttons.",attribute:"size",reflects:!0},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"Ensures a child radio is checked before allowing the containing form to submit.",attribute:"required",reflects:!0},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"getAllRadios",privacy:"private"},{kind:"method",name:"handleRadioClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleLabelClick",privacy:"private"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"syncRadioElements",privacy:"private"},{kind:"method",name:"syncRadios",privacy:"private"},{kind:"method",name:"updateCheckedRadio",privacy:"private"},{kind:"method",name:"handleSizeChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",return:{type:{text:"boolean"}},description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",default:"''"}],description:"Sets a custom validation message. Pass an empty string to restore validity."},{kind:"method",name:"focus",privacy:"public",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the radio-group."}],events:[{description:"Emitted when the radio group's selected value changes.",name:"syn-change"},{description:"Emitted when the radio group receives user input.",name:"syn-input"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"}],attributes:[{name:"label",type:{text:"string"},default:"''",description:"The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot\ninstead.",fieldName:"label"},{name:"help-text",type:{text:"string"},default:"''",description:"The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"},{name:"name",type:{text:"string"},default:"'option'",description:"The name of the radio group, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",type:{text:"string"},default:"''",description:"The current value of the radio group, submitted as a name/value pair with form data.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The radio group's size. This size will be applied to all child radios and radio buttons.",fieldName:"size"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"Ensures a child radio is checked before allowing the containing form to submit.",fieldName:"required"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.",tagNameWithoutPrefix:"radio-group",tagName:"syn-radio-group",customElement:!0,jsDoc:`/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-radio-group--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-button-group
 *
 * @slot - The default slot where \`<syn-radio>\` or \`<syn-radio-button>\` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the \`label\`
 *  attribute.
 * @slot help-text - Text that describes how to use the radio group. Alternatively, you can use the \`help-text\` attribute.
 *
 * @event syn-change - Emitted when the radio group's selected value changes.
 * @event syn-input - Emitted when the radio group receives user input.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-group - The button group that wraps radio buttons.
 * @csspart button-group__base - The button group's \`base\` part.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-radio-group--docs",status:"stable",since:"2.0",dependencies:["syn-button-group"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynRadioGroup",module:"../components/src/components/radio-group/radio-group.js"}}]},{kind:"javascript-module",path:"../components/src/components/radio/radio.js",declarations:[{kind:"class",description:"",name:"SynRadio",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The circular container that wraps the radio's checked state.",name:"control"},{description:"The radio control when the radio is checked.",name:"control--checked"},{description:"The checked icon, an `<syn-icon>` element.",name:"checked-icon"},{description:"The container that wraps the radio's label.",name:"label"}],slots:[{description:"The radio's label.",name:""}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon }"},{kind:"field",name:"checked",type:{text:"boolean"},default:"false"},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"protected",default:"false"},{kind:"field",name:"value",type:{text:"string"},description:"The radio's value. When selected, the radio group will receive this value.",attribute:"value"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:`The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted.`,attribute:"size",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the radio.",attribute:"disabled",reflects:!0},{kind:"field",name:"handleBlur",privacy:"private"},{kind:"field",name:"handleClick",privacy:"private"},{kind:"field",name:"handleFocus",privacy:"private"},{kind:"method",name:"setInitialAttributes",privacy:"private"},{kind:"method",name:"handleCheckedChange"},{kind:"method",name:"handleDisabledChange"}],events:[{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when the control gains focus.",name:"syn-focus"}],attributes:[{name:"value",type:{text:"string"},description:"The radio's value. When selected, the radio group will receive this value.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:`The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted.`,fieldName:"size"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the radio.",fieldName:"disabled"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Radios allow the user to select a single option from a group.",tagNameWithoutPrefix:"radio",tagName:"syn-radio",customElement:!0,jsDoc:`/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-radio--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 *
 * @slot - The radio's label.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an \`<syn-icon>\` element.
 * @csspart label - The container that wraps the radio's label.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-radio--docs",status:"stable",since:"2.0",dependencies:["syn-icon"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynRadio",module:"../components/src/components/radio/radio.js"}}]},{kind:"javascript-module",path:"../components/src/components/range-tick/range-tick.js",declarations:[{kind:"class",description:"",name:"SynRangeTick",cssProperties:[{description:"The height of the tick marker.",name:"--tick-height"},{description:"The top offset of the tick label.",name:"--tick-label-top"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The component's label.",name:"label"},{description:"The component's tick line.",name:"line"}],slots:[{description:"The tick's label",name:""}],members:[{kind:"field",name:"subdivision",type:{text:"boolean"},default:"false",description:"Whether the tick should be shown as a subdivision.",attribute:"subdivision",reflects:!0}],attributes:[{name:"subdivision",type:{text:"boolean"},default:"false",description:"Whether the tick should be shown as a subdivision.",fieldName:"subdivision"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Ticks visually improve positioning on range sliders.",tagNameWithoutPrefix:"range-tick",tagName:"syn-range-tick",customElement:!0,jsDoc:`/**
 * @summary Ticks visually improve positioning on range sliders.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-range-tick--docs
 * @status stable
 *
 * @slot - The tick's label
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The component's label.
 * @csspart line - The component's tick line.
 *
 * @cssproperty --tick-height - The height of the tick marker.
 * @cssproperty --tick-label-top - The top offset of the tick label.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-range-tick--docs",status:"stable"}],exports:[{kind:"js",name:"default",declaration:{name:"SynRangeTick",module:"../components/src/components/range-tick/range-tick.js"}}]},{kind:"javascript-module",path:"../components/src/components/range/range.js",declarations:[{kind:"class",description:"",name:"SynRange",cssProperties:[{description:"The size of a thumb.",name:"--thumb-size"},{description:"The clickable area around the thumb. Per default this is set to 140% of the thumb size. Must be a scale css value (defaults to 1.4).",name:"--thumb-hit-area-size"},{description:"The clickable area around the track (top and left).",name:"--track-hit-area-size"},{description:"Color of the track representing the current value.",name:"--track-color-active"},{description:"Color of the track that represents the remaining value.",name:"--track-color-inactive"},{description:"The height of the track.",name:"--track-height"},{description:"The point of origin of the active track, starting at the left side of the range.",name:"--track-active-offset"}],cssParts:[{description:"The form control that wraps the label, input, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The component's base wrapper.",name:"base"},{description:"The container that wraps the input track and ticks.",name:"input-wrapper"},{description:"The wrapper for the track.",name:"track-wrapper"},{description:"The inactive track.",name:"track"},{description:"The active track.",name:"active-track"},{description:"The container that wraps the prefix.",name:"prefix"},{description:"The container that wraps the suffix.",name:"suffix"},{description:"The container that wraps the tick marks.",name:"ticks"},{description:"The thumb(s) that the user can drag to change the range.",name:"thumb"},{description:"The base of the tooltip",name:"tooltip__base"},{description:"The arrow of the tooltip",name:"tooltip__arrow"},{description:"The popup of the tooltip",name:"tooltip__popup"},{description:"The body of the tooltip",name:"tooltip__body"}],slots:[{description:"The range's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Used to prepend a presentational icon or similar element to the range.",name:"prefix"},{description:"Used to append a presentational icon or similar element to the range.",name:"suffix"},{description:"Text that describes how to use the range. Alternatively, you can use the `help-text` attribute.",name:"help-text"},{description:"Used to display tick marks at specific intervals along the range.",name:"ticks"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-tooltip': SynTooltip, }"},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the range, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The range's label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The range's help text. If you need to display HTML, use the help-text slot instead.",attribute:"help-text"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the range.",attribute:"disabled",reflects:!0},{kind:"field",name:"min",type:{text:"number"},default:"0",description:"The minimum acceptable value of the range.",attribute:"min"},{kind:"field",name:"max",type:{text:"number"},default:"100",description:"The maximum acceptable value of the range.",attribute:"max"},{kind:"field",name:"step",type:{text:"number"},default:"1",description:"The interval at which the range will increase and decrease.",attribute:"step"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The range's size.",attribute:"size",reflects:!0},{kind:"field",name:"tooltipPlacement",type:{text:"'top' | 'bottom' | 'none'"},default:"'top'",description:`The preferred placement of the range's tooltip. Use "none" to disable the tooltip`,attribute:"tooltip-placement"},{kind:"field",name:"value",description:"The current values of the input (in ascending order) as a string of space separated values",attribute:"value"},{kind:"field",name:"restrictMovement",type:{text:"boolean"},default:"false",description:`Set to true to restrict the movement of a thumb to its next and previous thumb.
This only affects multi range components`,attribute:"restrict-movement"},{kind:"field",name:"valueAsArray",description:"Gets or sets the current values of the range as an array of numbers"},{kind:"field",name:"defaultValue",type:{text:"string"},default:"'0'",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element.\nThis attribute allows you to place the form control outside of a form\nand associate it with the form that has this `id`.\nThe form must be in the same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"tooltipFormatter",type:{text:"(value: number) => string"},description:`A function used to format the tooltip's value.
The value of the thumb is passed as the only argument.
The function should return a string to display in the tooltip.`},{kind:"field",name:"baseDiv",type:{text:"HTMLDivElement"}},{kind:"field",name:"activeTrack",type:{text:"HTMLDivElement"}},{kind:"field",name:"ticks",type:{text:"HTMLDivElement"}},{kind:"field",name:"thumbs",type:{text:"NodeListOf<HTMLDivElement>"}},{kind:"field",name:"validationInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label', 'prefix', 'suffix', 'ticks')"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['syn-change'] })"},{kind:"field",name:"localize",privacy:"private",default:"new LocalizeController(this)"},{kind:"field",name:"visibilityObserver",type:{text:"IntersectionObserver"},privacy:"private"},{kind:"field",name:"#value",privacy:"private",type:{text:"readonly number[]"},default:"[0]"},{kind:"field",name:"#rangeValues",privacy:"private",default:"new Map<number, number>()"},{kind:"field",name:"#hasFocus",privacy:"private",type:{text:"boolean"},default:"false"},{kind:"field",name:"#validationError",privacy:"private",type:{text:"string"},default:"''"},{kind:"field",name:"#validationTimeout",privacy:"private",type:{text:"NodeJS.Timeout"}},{kind:"field",name:"#lastChangeValue",privacy:"private",type:{text:"number []"},default:"[]"},{kind:"field",name:"#rtl",privacy:"private",readonly:!0},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}]},{kind:"method",name:"checkValidity",privacy:"public",description:"Checks for validity but does not show a validation message.\nReturns `true` when valid and `false` when invalid."},{kind:"method",name:"reportValidity",privacy:"public",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",privacy:"public",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."},{kind:"method",name:"getForm",privacy:"public",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"field",name:"validity",type:{text:"ValidityState"},privacy:"public",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",privacy:"public",description:"Gets the validation message",readonly:!0},{kind:"method",name:"#onClickTrack",privacy:"private",parameters:[{name:"event",type:{text:"PointerEvent"}},{name:"focusThumb",default:"true"}]},{kind:"method",name:"#onClickTrackItem",privacy:"private",parameters:[{name:"event",type:{text:"PointerEvent"}}],description:`Special method for handling clicks on track items
When clicking track items, we do not want the thumb to have focus`},{kind:"method",name:"#movementBoundariesForThumb",privacy:"private",parameters:[{name:"thumb",type:{text:"HTMLDivElement"},description:"The thumb element that was moved"},{name:"value",type:{text:"number"},description:"The current value of a thumb"}],description:"Get the boundaries of a given thumb",return:{type:{text:""}}},{kind:"method",name:"#onClickThumb",privacy:"private",parameters:[{name:"event",type:{text:"PointerEvent"}}]},{kind:"method",name:"#onDragThumb",privacy:"private",parameters:[{name:"event",type:{text:"PointerEvent"}}]},{kind:"method",name:"#onReleaseThumb",privacy:"private",parameters:[{name:"event",type:{text:"PointerEvent"}}]},{kind:"method",name:"#moveThumb",privacy:"private",parameters:[{name:"thumb",type:{text:"HTMLDivElement"}},{name:"value",type:{text:"number"}}]},{kind:"method",name:"#updateActiveTrack",privacy:"private"},{kind:"method",name:"#onKeyPress",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"#onBlur",privacy:"private",parameters:[{name:"event",type:{text:"FocusEvent"}}]},{kind:"method",name:"#updateTooltip",privacy:"private",parameters:[{name:"thumb",type:{text:"HTMLDivElement"}}]},{kind:"method",name:"#onFocusThumb",privacy:"private",parameters:[{name:"event",type:{text:"FocusEvent"}}]},{kind:"method",name:"#handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"#updatePrefixSuffixPosition",privacy:"private",parameters:[{name:"height",optional:!0,type:{text:"number"}}]},{kind:"method",name:"renderThumbs",privacy:"private",parameters:[{name:"hasLabel",type:{text:"boolean"}}]}],events:[{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when an alteration to the control's value is committed by the user.",name:"syn-change"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the control receives input.",name:"syn-input"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"},{description:"Emitted when the user moves a thumb, either via touch or keyboard. Use `Event.preventDefault()` to prevent movement.",name:"syn-move"}],attributes:[{name:"name",type:{text:"string"},default:"''",description:"The name of the range, submitted as a name/value pair with form data.",fieldName:"name"},{name:"label",type:{text:"string"},default:"''",description:"The range's label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"help-text",type:{text:"string"},default:"''",description:"The range's help text. If you need to display HTML, use the help-text slot instead.",fieldName:"helpText"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the range.",fieldName:"disabled"},{name:"min",type:{text:"number"},default:"0",description:"The minimum acceptable value of the range.",fieldName:"min"},{name:"max",type:{text:"number"},default:"100",description:"The maximum acceptable value of the range.",fieldName:"max"},{name:"step",type:{text:"number"},default:"1",description:"The interval at which the range will increase and decrease.",fieldName:"step"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The range's size.",fieldName:"size"},{name:"tooltip-placement",type:{text:"'top' | 'bottom' | 'none'"},default:"'top'",description:`The preferred placement of the range's tooltip. Use "none" to disable the tooltip`,fieldName:"tooltipPlacement"},{name:"value",description:"The current values of the input (in ascending order) as a string of space separated values",fieldName:"value"},{name:"restrict-movement",type:{text:"boolean"},default:"false",description:`Set to true to restrict the movement of a thumb to its next and previous thumb.
This only affects multi range components`,fieldName:"restrictMovement"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element.\nThis attribute allows you to place the form control outside of a form\nand associate it with the form that has this `id`.\nThe form must be in the same document or shadow root for this to work.",fieldName:"form"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Ranges allow the user to select values within a given range using one or two thumbs.",tagNameWithoutPrefix:"range",tagName:"syn-range",customElement:!0,jsDoc:`/**
 * @summary Ranges allow the user to select values within a given range using one or two thumbs.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-range--docs
 * @status stable
 *
 * @dependency syn-tooltip
 *
 * @slot label - The range's label. Alternatively, you can use the \`label\` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the range.
 * @slot suffix - Used to append a presentational icon or similar element to the range.
 * @slot help-text - Text that describes how to use the range.
 * Alternatively, you can use the \`help-text\` attribute.
 * @slot ticks - Used to display tick marks at specific intervals along the range.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-invalid - Emitted when the form control has been checked for validity
 * and its constraints aren't satisfied.
 * @event syn-move - Emitted when the user moves a thumb, either via touch or keyboard.
 * Use \`Event.preventDefault()\` to prevent movement.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input-wrapper - The container that wraps the input track and ticks.
 * @csspart track-wrapper - The wrapper for the track.
 * @csspart track - The inactive track.
 * @csspart active-track - The active track.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart ticks - The container that wraps the tick marks.
 * @csspart thumb - The thumb(s) that the user can drag to change the range.
 *
 * @csspart tooltip__base - The base of the tooltip
 * @csspart tooltip__arrow - The arrow of the tooltip
 * @csspart tooltip__popup - The popup of the tooltip
 * @csspart tooltip__body - The body of the tooltip
 *
 * @cssproperty --thumb-size - The size of a thumb.
 * @cssproperty --thumb-hit-area-size - The clickable area around the thumb.
 * Per default this is set to 140% of the thumb size. Must be a scale css value (defaults to 1.4).
 * @cssproperty --track-hit-area-size - The clickable area around the track (top and left).
 * @cssproperty --track-color-active - Color of the track representing the current value.
 * @cssproperty --track-color-inactive - Color of the track that represents the remaining value.
 * @cssproperty --track-height - The height of the track.
 * @cssproperty --track-active-offset - The point of origin of the active track,
 * starting at the left side of the range.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-range--docs",status:"stable",dependencies:["syn-tooltip"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynRange",module:"../components/src/components/range/range.js"}}]},{kind:"javascript-module",path:"../components/src/components/resize-observer/resize-observer.js",declarations:[{kind:"class",description:"",name:"SynResizeObserver",slots:[{description:"One or more elements to watch for resizing.",name:""}],members:[{kind:"field",name:"resizeObserver",type:{text:"ResizeObserver"},privacy:"private"},{kind:"field",name:"observedElements",type:{text:"HTMLElement[]"},privacy:"private",default:"[]"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the observer.",attribute:"disabled",reflects:!0},{kind:"method",name:"handleSlotChange",privacy:"private"},{kind:"method",name:"startObserver",privacy:"private"},{kind:"method",name:"stopObserver",privacy:"private"},{kind:"method",name:"handleDisabledChange"}],events:[{type:{text:"{ entries: ResizeObserverEntry[] }"},description:"Emitted when the element is resized.",name:"syn-resize"}],attributes:[{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the observer.",fieldName:"disabled"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).",tagNameWithoutPrefix:"resize-observer",tagName:"syn-resize-observer",customElement:!0,jsDoc:`/**
 * @summary The Resize Observer component offers a thin, declarative interface to the [\`ResizeObserver API\`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-resize-observer--docs
 * @status stable
 * @since 2.0
 *
 * @slot - One or more elements to watch for resizing.
 *
 * @event {{ entries: ResizeObserverEntry[] }} syn-resize - Emitted when the element is resized.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-resize-observer--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynResizeObserver",module:"../components/src/components/resize-observer/resize-observer.js"}}]},{kind:"javascript-module",path:"../components/src/components/select/select.js",declarations:[{kind:"class",description:"",name:"SynSelect",cssParts:[{description:"The form control that wraps the label, input, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The select's wrapper.",name:"form-control-input"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The container the wraps the prefix, suffix, combobox, clear icon, and expand button.",name:"combobox"},{description:"The container that wraps the prefix slot.",name:"prefix"},{description:"The container that wraps the suffix slot.",name:"suffix"},{description:"The element that displays the selected option's label, an `<input>` element.",name:"display-input"},{description:"The listbox container where options are slotted.",name:"listbox"},{description:"The container that houses option tags when `multiselect` is used.",name:"tags"},{description:"The individual tags that represent each multiselect option.",name:"tag"},{description:"The tag's base part.",name:"tag__base"},{description:"The tag's content part.",name:"tag__content"},{description:"The tag's remove button.",name:"tag__remove-button"},{description:"The tag's remove button base part.",name:"tag__remove-button__base"},{description:"The clear button.",name:"clear-button"},{description:"The container that wraps the expand icon.",name:"expand-icon"},{description:"The popup's exported `popup` part. Use this to target the tooltip's popup container.",name:"popup"}],slots:[{description:"The listbox options. Must be `<syn-option>` elements. You can use `<syn-divider>` to group items visually.",name:""},{description:"The input's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Used to prepend a presentational icon or similar element to the combobox.",name:"prefix"},{description:"Used to append a presentational icon or similar element to the combobox.",name:"suffix"},{description:"An icon to use in lieu of the default clear icon.",name:"clear-icon"},{description:"The icon to show when the control is expanded and collapsed. Rotates on open and close.",name:"expand-icon"},{description:"Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",name:"help-text"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon': SynIcon, 'syn-popup': SynPopup, 'syn-tag': SynTag }"},{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['syn-blur', 'syn-input'] })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"isInitialized",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"typeToSelectString",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"typeToSelectTimeout",type:{text:"number"},privacy:"private"},{kind:"field",name:"closeWatcher",type:{text:"CloseWatcher | null"},privacy:"private"},{kind:"field",name:"resizeObserver",type:{text:"ResizeObserver"},privacy:"private"},{kind:"field",name:"popup",type:{text:"SynPopup"}},{kind:"field",name:"combobox",type:{text:"HTMLSlotElement"}},{kind:"field",name:"displayInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"valueInput",type:{text:"HTMLInputElement"}},{kind:"field",name:"listbox",type:{text:"HTMLSlotElement"}},{kind:"field",name:"tagContainer",type:{text:"HTMLDivElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"displayLabel",type:{text:"string"},default:"''"},{kind:"field",name:"currentOption",type:{text:"SynOption"}},{kind:"field",name:"selectedOptions",type:{text:"SynOption[]"},default:"[]"},{kind:"field",name:"valueHasChanged",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"delimiter",type:{text:"string"},default:"' '",description:"The delimiter to use when setting the value when `multiple` is enabled.\nThe default is a space, but you can set it to a comma or other character.",attribute:"delimiter"},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the select, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"_value",type:{text:"string | number | Array<string | number>"},privacy:"private",default:"''"},{kind:"field",name:"value",description:"The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the\nvalue attribute will be a space-delimited list of values based on the options selected, and the value property will\nbe an array. **For this reason, values must not contain spaces.**"},{kind:"field",name:"defaultValue",type:{text:"string | number | Array<string | number>"},default:"''",description:"The default value of the form control. Primarily used for resetting the form control.",attribute:"value"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The select's size.",attribute:"size",reflects:!0},{kind:"field",name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the select is empty.",attribute:"placeholder"},{kind:"field",name:"multiple",type:{text:"boolean"},default:"false",description:"Allows more than one option to be selected.",attribute:"multiple",reflects:!0},{kind:"field",name:"maxOptionsVisible",type:{text:"number"},default:"3",description:'The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to\nindicate the number of additional items that are selected. Set to 0 to remove the limit.',attribute:"max-options-visible"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the select control.",attribute:"disabled",reflects:!0},{kind:"field",name:"clearable",type:{text:"boolean"},default:"false",description:"Adds a clear button when the select is not empty.",attribute:"clearable"},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the select's open state.",attribute:"open",reflects:!0},{kind:"field",name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the listbox from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",attribute:"hoist"},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The select's label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"placement",type:{text:"'top' | 'bottom'"},default:"'bottom'",description:`The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport.`,attribute:"placement",reflects:!0},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The select's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"The select's required attribute.",attribute:"required",reflects:!0},{kind:"field",name:"getTag",type:{text:"(option: SynOption, index: number) => TemplateResult | string | HTMLElement"},description:`A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value.`,attribute:"getTag"},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"enableResizeObserver",privacy:"private"},{kind:"method",name:"addOpenListeners",privacy:"private"},{kind:"method",name:"removeOpenListeners",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"field",name:"handleDocumentFocusIn",privacy:"private"},{kind:"field",name:"handleDocumentKeyDown",privacy:"private"},{kind:"field",name:"handleDocumentMouseDown",privacy:"private"},{kind:"method",name:"handleLabelClick",privacy:"private"},{kind:"method",name:"handleComboboxMouseDown",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleComboboxKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleClearClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleClearMouseDown",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleOptionClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleDefaultSlotChange",privacy:"public"},{kind:"method",name:"handleTagRemove",privacy:"private",parameters:[{name:"event",type:{text:"SynRemoveEvent"}},{name:"option",type:{text:"SynOption"}}]},{kind:"method",name:"getAllOptions",privacy:"private"},{kind:"method",name:"getFirstOption",privacy:"private"},{kind:"method",name:"setCurrentOption",privacy:"private",parameters:[{name:"option",type:{text:"SynOption | null"}}]},{kind:"method",name:"setSelectedOptions",privacy:"private",parameters:[{name:"option",type:{text:"SynOption | SynOption[]"}}]},{kind:"method",name:"toggleOptionSelection",privacy:"private",parameters:[{name:"option",type:{text:"SynOption"}},{name:"force",optional:!0,type:{text:"boolean"}}]},{kind:"method",name:"selectionChanged",privacy:"private"},{kind:"field",name:"tags",privacy:"protected",readonly:!0},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleDelimiterChange"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"show",description:"Shows the listbox."},{kind:"method",name:"hide",description:"Hides the listbox."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the control."},{kind:"method",name:"blur",description:"Removes focus from the control."}],events:[{description:"Emitted when the control's value changes.",name:"syn-change"},{description:"Emitted when the control's value is cleared.",name:"syn-clear"},{description:"Emitted when the control receives input.",name:"syn-input"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when the select's menu opens.",name:"syn-show"},{description:"Emitted after the select's menu opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the select's menu closes.",name:"syn-hide"},{description:"Emitted after the select's menu closes and all animations are complete.",name:"syn-after-hide"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"}],attributes:[{name:"delimiter",type:{text:"string"},default:"' '",description:"The delimiter to use when setting the value when `multiple` is enabled.\nThe default is a space, but you can set it to a comma or other character.",fieldName:"delimiter"},{name:"name",type:{text:"string"},default:"''",description:"The name of the select, submitted as a name/value pair with form data.",fieldName:"name"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The select's size.",fieldName:"size"},{name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the select is empty.",fieldName:"placeholder"},{name:"multiple",type:{text:"boolean"},default:"false",description:"Allows more than one option to be selected.",fieldName:"multiple"},{name:"max-options-visible",type:{text:"number"},default:"3",description:'The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to\nindicate the number of additional items that are selected. Set to 0 to remove the limit.',fieldName:"maxOptionsVisible"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the select control.",fieldName:"disabled"},{name:"clearable",type:{text:"boolean"},default:"false",description:"Adds a clear button when the select is not empty.",fieldName:"clearable"},{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the select's open state.",fieldName:"open"},{name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the listbox from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",fieldName:"hoist"},{name:"label",type:{text:"string"},default:"''",description:"The select's label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"placement",type:{text:"'top' | 'bottom'"},default:"'bottom'",description:`The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport.`,fieldName:"placement"},{name:"help-text",type:{text:"string"},default:"''",description:"The select's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"The select's required attribute.",fieldName:"required"},{name:"getTag",type:{text:"(option: SynOption, index: number) => TemplateResult | string | HTMLElement"},description:`A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value.`,fieldName:"getTag"},{name:"value",type:{text:"string | number | Array<string | number>"},default:"''",description:"The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the\nvalue attribute will be a space-delimited list of values based on the options selected, and the value property will\nbe an array. **For this reason, values must not contain spaces.**",fieldName:"value"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Selects allow you to choose items from a menu of predefined options.",tagNameWithoutPrefix:"select",tagName:"syn-select",customElement:!0,jsDoc:`/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-select--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon
 * @dependency syn-popup
 * @dependency syn-tag
 *
 * @slot - The listbox options. Must be \`<syn-option>\` elements. You can use \`<syn-divider>\` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the \`label\` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the \`help-text\` attribute.
 *
 * @event syn-change - Emitted when the control's value changes.
 * @event syn-clear - Emitted when the control's value is cleared.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-show - Emitted when the select's menu opens.
 * @event syn-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event syn-hide - Emitted when the select's menu closes.
 * @event syn-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label, an \`<input>\` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when \`multiselect\` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 * @csspart popup - The popup's exported \`popup\` part. Use this to target the tooltip's popup container.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-select--docs",status:"stable",since:"2.0",dependencies:["syn-icon","syn-popup","syn-tag"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynSelect",module:"../components/src/components/select/select.js"}}]},{kind:"javascript-module",path:"../components/src/components/side-nav/side-nav.js",declarations:[{kind:"class",description:"",name:"SynSideNav",cssProperties:[{description:"The width of the side-nav if in open state",name:"--side-nav-open-width"}],cssParts:[{description:"The components base wrapper",name:"base"},{description:"The drawer that is used under the hood for creating the side-nav",name:"drawer"},{description:"The components main content container",name:"content-container"},{description:"The components main content",name:"content"},{description:"The components footer content container (where the footer slot content is rendered)",name:"footer-container"},{description:"The components footer divider",name:"footer-divider"},{description:"The components footer content",name:"footer"},{description:"The overlay that covers the screen behind the side-nav.",name:"overlay"},{description:"The side-nav's panel (where the whole content is rendered).",name:"panel"},{description:"The side-nav's body (where the default slot content is rendered)",name:"body"},{description:"The drawer's base wrapper",name:"drawer__base"},{description:'The nav-item to toggle open state for variant="sticky"',name:"toggle-nav-item"},{description:'The icon of the toggle nav-item for variant="sticky"',name:"toggle-icon"},{description:'The label of the toggle nav-item for variant="sticky".',name:"toggle-label"}],slots:[{description:"The main content of the side-nav. Used for <syn-nav-item /> elements.",name:""},{description:"The footer content of the side-nav. Used for <syn-nav-item /> elements. Please avoid having to many nav-items as it can massively influence the user experience.",name:"footer"},{description:'The label of the toggle nav-item for variant="sticky".',name:"toggle-label"},{description:'An icon to use in lieu of the default icon for the toggle nav-item for variant="sticky".',name:"toggle-icon"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-divider': SynDivider, 'syn-drawer': SynDrawer, 'syn-icon': SynIcon, 'syn-nav-item': SynNavItem, }"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, '[default]', 'footer')"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"timeout",type:{text:"NodeJS.Timeout"},privacy:"private"},{kind:"field",name:"isAnimationActive",type:{text:"boolean"},privacy:"private",default:"false",description:"Current animation active state"},{kind:"field",name:"drawer",type:{text:"SynDrawer"},privacy:"private",description:"Reference to the drawer"},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:`Indicates whether or not the side-nav is open.
You can toggle this attribute to show and hide the side-nav, or you can use the \`show()\` and
\`hide()\` methods and this attribute will reflect the side-nav's open state.

Depending on the "variant" attribute, the behavior will differ.

__Default__:
With \`open\` will show the side-nav with an overlay.
Without \`open\`, the side-nav will be hidden.

__Rail__:
With \`open\` will show the whole side-nav with an overlay for touch devices
or without an overlay for non-touch devices.
Without \`open\`, the side-nav will only show the prefix of nav-item's.

__Sticky__:
With \`open\` will show the whole side-nav with an overlay for touch devices
or without an overlay for non-touch devices.
Without \`open\`, the side-nav will only show the prefix of nav-item's.`,attribute:"open",reflects:!0},{kind:"field",name:"rail",type:{text:"boolean"},default:"false",description:`Use the rail attribute to only show the prefix of navigation items in closed state.
This will open on hover on the rail navigation.
On touch devices the navigation opens on click and shows an overlay.

Note: The Rail is only an option if all Navigation Items on the first level have an Icon.
If this is not the case you should use a burger navigation.`,deprecated:"Use the `variant` attribute with `rail` instead.\nWill be removed in synergy version 3.0",attribute:"rail",reflects:!0},{kind:"field",name:"variant",type:{text:"'default' | 'rail' | 'sticky'"},default:"'default'",description:`The variant that should be used to show the side navigation.

The following variants are supported:
- **default** (default): Always shows the whole content and additionally an overlay.
This makes especially sense for applications, where you navigate to a place and stay
there for a longer time.
- **rail**: Only show the prefix of navigation items in closed state.
This will open on hover on the rail navigation.
On touch devices the navigation opens on click and shows an overlay.
Note: The rail variant is only an option if all Navigation Items on the first level
have an Icon.
If this is not the case you should use a burger navigation.
- **sticky**: The side-nav has a pin button to show the side-nav in small (icon only)
and full width. This variant is only possible for non-nested navigation items.
Note: The sticky variant is only an option if all Navigation Items on the first level
have an Icon and if there are only "first level" items.`,attribute:"variant",reflects:!0},{kind:"field",name:"noFocusTrapping",type:{text:"boolean"},default:"false",description:`By default, the side-nav traps the focus if in variant="default" and open.
To disable the focus trapping, set this attribute.`,attribute:"no-focus-trapping",reflects:!0},{kind:"method",name:"setDelayedCallback",privacy:"private",parameters:[{name:"callback",type:{text:"() => void"}}]},{kind:"method",name:"handleMouseEnter",privacy:"private"},{kind:"method",name:"handleMouseLeave",privacy:"private"},{kind:"method",name:"handleRequestClose",privacy:"private"},{kind:"method",name:"addMouseListener",privacy:"private"},{kind:"method",name:"removeMouseListener",privacy:"private"},{kind:"method",name:"setDrawerAnimations",privacy:"private"},{kind:"method",name:"handleVariantChange"},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"handleFocusTrapping"},{kind:"method",name:"show",description:"Shows the side-nav."},{kind:"method",name:"hide",description:"Hides the side-nav"},{kind:"method",name:"toggleOpenState",privacy:"private"}],events:[{description:"Emitted when the side-nav opens.",name:"syn-show"},{description:"Emitted after the side-nav opens and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the side-nav closes.",name:"syn-hide"},{description:"Emitted after the side-nav closes and all animations are complete.",name:"syn-after-hide"}],attributes:[{name:"open",type:{text:"boolean"},default:"false",description:`Indicates whether or not the side-nav is open.
You can toggle this attribute to show and hide the side-nav, or you can use the \`show()\` and
\`hide()\` methods and this attribute will reflect the side-nav's open state.

Depending on the "variant" attribute, the behavior will differ.

__Default__:
With \`open\` will show the side-nav with an overlay.
Without \`open\`, the side-nav will be hidden.

__Rail__:
With \`open\` will show the whole side-nav with an overlay for touch devices
or without an overlay for non-touch devices.
Without \`open\`, the side-nav will only show the prefix of nav-item's.

__Sticky__:
With \`open\` will show the whole side-nav with an overlay for touch devices
or without an overlay for non-touch devices.
Without \`open\`, the side-nav will only show the prefix of nav-item's.`,fieldName:"open"},{name:"rail",type:{text:"boolean"},default:"false",description:`Use the rail attribute to only show the prefix of navigation items in closed state.
This will open on hover on the rail navigation.
On touch devices the navigation opens on click and shows an overlay.

Note: The Rail is only an option if all Navigation Items on the first level have an Icon.
If this is not the case you should use a burger navigation.`,deprecated:"Use the `variant` attribute with `rail` instead.\nWill be removed in synergy version 3.0",fieldName:"rail"},{name:"variant",type:{text:"'default' | 'rail' | 'sticky'"},default:"'default'",description:`The variant that should be used to show the side navigation.

The following variants are supported:
- **default** (default): Always shows the whole content and additionally an overlay.
This makes especially sense for applications, where you navigate to a place and stay
there for a longer time.
- **rail**: Only show the prefix of navigation items in closed state.
This will open on hover on the rail navigation.
On touch devices the navigation opens on click and shows an overlay.
Note: The rail variant is only an option if all Navigation Items on the first level
have an Icon.
If this is not the case you should use a burger navigation.
- **sticky**: The side-nav has a pin button to show the side-nav in small (icon only)
and full width. This variant is only possible for non-nested navigation items.
Note: The sticky variant is only an option if all Navigation Items on the first level
have an Icon and if there are only "first level" items.`,fieldName:"variant"},{name:"no-focus-trapping",type:{text:"boolean"},default:"false",description:`By default, the side-nav traps the focus if in variant="default" and open.
To disable the focus trapping, set this attribute.`,fieldName:"noFocusTrapping"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:`The <syn-side-nav /> element contains secondary navigation and fits below the header.
It can be used to group multiple navigation items (<syn-nav-item />s) together.`,tagNameWithoutPrefix:"side-nav",tagName:"syn-side-nav",customElement:!0,jsDoc:`/**
 * @summary The <syn-side-nav /> element contains secondary navigation and fits below the header.
 * It can be used to group multiple navigation items (<syn-nav-item />s) together.
 *
 * @example
 * <syn-side-nav open>
 *  <syn-nav-item >Item 1</syn-nav-item>
 *  <syn-nav-item divider>Item 2</syn-nav-item>
 * </syn-side-nav>
 *
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-side-nav--docs
 * @status stable
 * @since 1.14.0
 *
 * @dependency syn-divider
 * @dependency syn-drawer
 * @dependency syn-icon
 * @dependency syn-nav-item
 *
 * @slot - The main content of the side-nav. Used for <syn-nav-item /> elements.
 * @slot footer - The footer content of the side-nav. Used for <syn-nav-item /> elements.
 *    Please avoid having to many nav-items as it can massively influence the user experience.
 * @slot toggle-label - The label of the toggle nav-item for variant="sticky".
 * @slot toggle-icon - An icon to use in lieu of the default icon for the toggle nav-item
 * for variant="sticky".
 *
 * @event syn-show - Emitted when the side-nav opens.
 * @event syn-after-show - Emitted after the side-nav opens and all animations are complete.
 * @event syn-hide - Emitted when the side-nav closes.
 * @event syn-after-hide - Emitted after the side-nav closes and all animations are complete.
 *
 * @csspart base - The components base wrapper
 * @csspart drawer - The drawer that is used under the hood for creating the side-nav
 * @csspart content-container - The components main content container
 * @csspart content - The components main content
 * @csspart footer-container - The components footer content container
  (where the footer slot content is rendered)
 * @csspart footer-divider - The components footer divider
 * @csspart footer - The components footer content
 * @csspart overlay - The overlay that covers the screen behind the side-nav.
 * @csspart panel - The side-nav's panel (where the whole content is rendered).
 * @csspart body - The side-nav's body (where the default slot content is rendered)
 * @csspart drawer__base - The drawer's base wrapper
 * @csspart toggle-nav-item - The nav-item to toggle open state for variant="sticky"
 * @csspart toggle-icon - The icon of the toggle nav-item for variant="sticky"
 * @csspart toggle-label - The label of the toggle nav-item for variant="sticky".

 * @cssproperty  --side-nav-open-width - The width of the side-nav if in open state
 *
 * @animation sideNav.showNonRail - The animation to use when showing the side-nav
 *  in variant="default".
 * @animation sideNav.showRail - The animation to use when showing the side-nav in variant="rail"
 *  and variant="sticky".
 * @animation sideNav.hideNonRail - The animation to use when hiding the side-nav
 *  in variant="default".
 * @animation sideNav.hideRail - The animation to use when hiding the side-nav in variant="rail"
 *  and variant="sticky".
 * @animation sideNav.overlay.show - The animation to use when showing the side-nav's overlay.
 * @animation sideNav.overlay.hide - The animation to use when hiding the side-nav's overlay.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-side-nav--docs",status:"stable",since:"1.14.0",dependencies:["syn-divider","syn-drawer","syn-icon","syn-nav-item"],animations:[{name:"sideNav.showNonRail",description:'The animation to use when showing the side-nav in variant="default".'},{name:"sideNav.showRail",description:'The animation to use when showing the side-nav in variant="rail" and variant="sticky".'},{name:"sideNav.hideNonRail",description:'The animation to use when hiding the side-nav in variant="default".'},{name:"sideNav.hideRail",description:'The animation to use when hiding the side-nav in variant="rail" and variant="sticky".'},{name:"sideNav.overlay.show",description:"The animation to use when showing the side-nav's overlay."},{name:"sideNav.overlay.hide",description:"The animation to use when hiding the side-nav's overlay."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynSideNav",module:"../components/src/components/side-nav/side-nav.js"}}]},{kind:"javascript-module",path:"../components/src/components/spinner/spinner.js",declarations:[{kind:"class",description:"",name:"SynSpinner",cssProperties:[{description:"The width of the track.",name:"--track-width"},{description:"The color of the spinner's indicator.",name:"--indicator-color"},{description:"The time it takes for the spinner to complete one animation cycle.",name:"--speed"}],cssParts:[{description:"The component's base wrapper.",name:"base"}],members:[{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Spinners are used to show the progress of an indeterminate operation.",tagNameWithoutPrefix:"spinner",tagName:"syn-spinner",customElement:!0,jsDoc:`/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-spinner--docs
 * @status stable
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --indicator-color - The color of the spinner's indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-spinner--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynSpinner",module:"../components/src/components/spinner/spinner.js"}}]},{kind:"javascript-module",path:"../components/src/components/switch/switch.js",declarations:[{kind:"class",description:"",name:"SynSwitch",cssProperties:[{description:"The width of the switch.",name:"--width"},{description:"The height of the switch.",name:"--height"},{description:"The size of the thumb.",name:"--thumb-size"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The control that houses the switch's thumb.",name:"control"},{description:"The switch's thumb.",name:"thumb"},{description:"The switch's label.",name:"label"},{description:"The help text's wrapper.",name:"form-control-help-text"}],slots:[{description:"The switch's label.",name:""},{description:"Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.",name:"help-text"}],members:[{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { value: (control: SynSwitch) => (control.checked ? control.value || 'on' : undefined), defaultValue: (control: SynSwitch) => control.defaultChecked, setValue: (control: SynSwitch, checked: boolean) => (control.checked = checked) })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text')"},{kind:"field",name:"input",type:{text:"HTMLInputElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"title",type:{text:"string"},default:"''",attribute:"title",reflects:!0},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the switch, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},description:"The current value of the switch, submitted as a name/value pair with form data.",attribute:"value"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The switch's size.",attribute:"size",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the switch.",attribute:"disabled",reflects:!0},{kind:"field",name:"checked",type:{text:"boolean"},default:"false",description:"Draws the switch in a checked state.",attribute:"checked",reflects:!0},{kind:"field",name:"defaultChecked",type:{text:"boolean"},default:"false",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"Makes the switch a required field.",attribute:"required",reflects:!0},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The switch's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleInput",privacy:"private"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleClick",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleCheckedChange"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"click",description:"Simulates a click on the switch."},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the switch."},{kind:"method",name:"blur",description:"Removes focus from the switch."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."}],events:[{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when the control's checked state changes.",name:"syn-change"},{description:"Emitted when the control receives input.",name:"syn-input"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"}],attributes:[{name:"title",type:{text:"string"},default:"''",fieldName:"title"},{name:"name",type:{text:"string"},default:"''",description:"The name of the switch, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",type:{text:"string"},description:"The current value of the switch, submitted as a name/value pair with form data.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The switch's size.",fieldName:"size"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the switch.",fieldName:"disabled"},{name:"checked",type:{text:"boolean"},default:"false",description:"Draws the switch in a checked state.",fieldName:"checked"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"Makes the switch a required field.",fieldName:"required"},{name:"help-text",type:{text:"string"},default:"''",description:"The switch's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Switches allow the user to toggle an option on or off.",tagNameWithoutPrefix:"switch",tagName:"syn-switch",customElement:!0,jsDoc:`/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-switch--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The switch's label.
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the \`help-text\` attribute.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when the control's checked state changes.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the switch's thumb.
 * @csspart thumb - The switch's thumb.
 * @csspart label - The switch's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --width - The width of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-size - The size of the thumb.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-switch--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynSwitch",module:"../components/src/components/switch/switch.js"}}]},{kind:"javascript-module",path:"../components/src/components/tab-group/tab-group.js",declarations:[{kind:"class",description:"",name:"SynTabGroup",cssProperties:[{description:"The color of the active tab indicator.",name:"--indicator-color"},{description:"The width of the active tab indicator.",name:"--indicator-width"},{description:"The color of the indicator's track (the line that separates tabs from panels).",name:"--track-color"},{description:"The width of the indicator's track (the line that separates tabs from panels).",name:"--track-width"}],cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The tab group's navigation container where tabs are slotted in.",name:"nav"},{description:"The container that wraps the tabs.",name:"tabs"},{description:"The line that highlights the currently selected tab.",name:"active-tab-indicator"},{description:"The tab group's body where tab panels are slotted in.",name:"body"},{description:"The previous/next scroll buttons that show when tabs are scrollable, an `<syn-icon-button>`.",name:"scroll-button"},{description:"The starting scroll button.",name:"scroll-button--start"},{description:"The ending scroll button.",name:"scroll-button--end"},{description:"The scroll button's exported `base` part.",name:"scroll-button__base"}],slots:[{description:"Used for grouping tab panels in the tab group. Must be `<syn-tab-panel>` elements.",name:""},{description:"Used for grouping tabs in the tab group. Must be `<syn-tab>` elements.",name:"nav"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon-button': SynIconButton, 'syn-resize-observer': SynResizeObserver }"},{kind:"field",name:"activeTab",type:{text:"SynTab | undefined"},privacy:"private"},{kind:"field",name:"mutationObserver",type:{text:"MutationObserver"},privacy:"private"},{kind:"field",name:"resizeObserver",type:{text:"ResizeObserver"},privacy:"private"},{kind:"field",name:"tabs",type:{text:"SynTab[]"}},{kind:"field",name:"focusableTabs",type:{text:"SynTab[]"},privacy:"private",default:"[]"},{kind:"field",name:"panels",type:{text:"SynTabPanel[]"}},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"tabGroup",type:{text:"HTMLElement"}},{kind:"field",name:"body",type:{text:"HTMLSlotElement"}},{kind:"field",name:"nav",type:{text:"HTMLElement"}},{kind:"field",name:"indicator",type:{text:"HTMLElement"}},{kind:"field",name:"hasScrollControls",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"shouldHideScrollStartButton",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"shouldHideScrollEndButton",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"placement",type:{text:"'top' | 'start' | 'end'"},default:"'top'",description:"The placement of the tabs.",attribute:"placement"},{kind:"field",name:"activation",type:{text:"'auto' | 'manual'"},default:"'auto'",description:`When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter.`,attribute:"activation"},{kind:"field",name:"noScrollControls",type:{text:"boolean"},default:"false",description:"Disables the scroll arrows that appear when tabs overflow.",attribute:"no-scroll-controls"},{kind:"field",name:"contained",type:{text:"boolean"},default:"false",description:"Draws the tab group as a contained element.",attribute:"contained"},{kind:"field",name:"sharp",type:{text:"boolean"},default:"false",description:"Draws the tab group with edges instead of roundings. Takes only effect if used with the 'contained' property",attribute:"sharp"},{kind:"field",name:"fixedScrollControls",type:{text:"boolean"},default:"false",description:"Prevent scroll buttons from being hidden when inactive.",attribute:"fixed-scroll-controls"},{kind:"method",name:"getActiveTab",privacy:"private"},{kind:"method",name:"handleClick",privacy:"private",parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"handleKeyDown",privacy:"private",parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleScrollToStart",privacy:"private"},{kind:"method",name:"handleScrollToEnd",privacy:"private"},{kind:"method",name:"setActiveTab",privacy:"private",parameters:[{name:"tab",type:{text:"SynTab"}},{name:"options",optional:!0,type:{text:"{ emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }"}}]},{kind:"method",name:"setAriaLabels",privacy:"private"},{kind:"method",name:"repositionIndicator",privacy:"private"},{kind:"method",name:"syncTabsAndPanels",privacy:"private"},{kind:"method",name:"findNextFocusableTab",privacy:"private",parameters:[{name:"currentIndex",type:{text:"number"}},{name:"direction",type:{text:"'forward' | 'backward'"}}]},{kind:"field",name:"scrollOffset",type:{text:"number"},privacy:"private",default:"1",description:`The reality of the browser means that we can't expect the scroll position to be exactly what we want it to be, so
we add one pixel of wiggle room to our calculations.`},{kind:"method",name:"updateScrollButtons",privacy:"private"},{kind:"method",name:"isScrolledToEnd",privacy:"private"},{kind:"method",name:"scrollFromStart",privacy:"private"},{kind:"method",name:"updateScrollControls"},{kind:"method",name:"syncIndicator"},{kind:"method",name:"show",parameters:[{name:"panel",type:{text:"string"}}],description:"Shows the specified tab panel."},{kind:"method",name:"preventFocus",parameters:[{name:"e",type:{text:"MouseEvent"}}]}],events:[{type:{text:"{ name: String }"},description:'Emitted when a tab is shown. The payload of the event returns the "panel" attribute of the shown tab.',name:"syn-tab-show"},{type:{text:"{ name: String }"},description:'Emitted when a tab is hidden. The payload of the event returns the "panel" attribute of the hidden tab.',name:"syn-tab-hide"}],attributes:[{name:"placement",type:{text:"'top' | 'start' | 'end'"},default:"'top'",description:"The placement of the tabs.",fieldName:"placement"},{name:"activation",type:{text:"'auto' | 'manual'"},default:"'auto'",description:`When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter.`,fieldName:"activation"},{name:"no-scroll-controls",type:{text:"boolean"},default:"false",description:"Disables the scroll arrows that appear when tabs overflow.",fieldName:"noScrollControls"},{name:"contained",type:{text:"boolean"},default:"false",description:"Draws the tab group as a contained element.",fieldName:"contained"},{name:"sharp",type:{text:"boolean"},default:"false",description:"Draws the tab group with edges instead of roundings. Takes only effect if used with the 'contained' property",fieldName:"sharp"},{name:"fixed-scroll-controls",type:{text:"boolean"},default:"false",description:"Prevent scroll buttons from being hidden when inactive.",fieldName:"fixedScrollControls"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Tab groups organize content into a container that shows one section at a time.",tagNameWithoutPrefix:"tab-group",tagName:"syn-tab-group",customElement:!0,jsDoc:`/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-tab-group--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be \`<syn-tab-panel>\` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be \`<syn-tab>\` elements.
 *
 * @event {{ name: String }} syn-tab-show - Emitted when a tab is shown. The payload of the event returns the "panel" attribute of the shown tab.
 * @event {{ name: String }} syn-tab-hide - Emitted when a tab is hidden. The payload of the event returns the "panel" attribute of the hidden tab.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an \`<syn-icon-button>\`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported \`base\` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --indicator-width - The width of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-tab-group--docs",status:"stable",since:"2.0",dependencies:["syn-icon-button"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynTabGroup",module:"../components/src/components/tab-group/tab-group.js"}}]},{kind:"javascript-module",path:"../components/src/components/tab-panel/tab-panel.js",declarations:[{kind:"class",description:"",name:"SynTabPanel",cssProperties:[{description:"The tab panel's padding.",name:"--padding"}],cssParts:[{description:"The component's base wrapper.",name:"base"}],slots:[{description:"The tab panel's content.",name:""}],members:[{kind:"field",name:"attrId",type:{text:"number"},privacy:"private",readonly:!0,default:"++id"},{kind:"field",name:"componentId",privacy:"private",readonly:!0,default:"`syn-tab-panel-${this.attrId}`"},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The tab panel's name.",attribute:"name",reflects:!0},{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:"When true, the tab panel will be shown.",attribute:"active",reflects:!0},{kind:"method",name:"handleActiveChange"}],attributes:[{name:"name",type:{text:"string"},default:"''",description:"The tab panel's name.",fieldName:"name"},{name:"active",type:{text:"boolean"},default:"false",description:"When true, the tab panel will be shown.",fieldName:"active"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.",tagNameWithoutPrefix:"tab-panel",tagName:"syn-tab-panel",customElement:!0,jsDoc:`/**
 * @summary Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-tab-panel--docs
 * @status stable
 * @since 2.0
 *
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --padding - The tab panel's padding.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-tab-panel--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynTabPanel",module:"../components/src/components/tab-panel/tab-panel.js"}}]},{kind:"javascript-module",path:"../components/src/components/tab/tab.js",declarations:[{kind:"class",description:"",name:"SynTab",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The close button, an `<syn-icon-button>`.",name:"close-button"},{description:"The close button's exported `base` part.",name:"close-button__base"}],slots:[{description:"The tab's label.",name:""}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon-button': SynIconButton }"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"attrId",type:{text:"number"},privacy:"private",readonly:!0,default:"++id"},{kind:"field",name:"componentId",privacy:"private",readonly:!0,default:"`syn-tab-${this.attrId}`"},{kind:"field",name:"tab",type:{text:"HTMLElement"}},{kind:"field",name:"panel",type:{text:"string"},default:"''",description:"The name of the tab panel this tab is associated with. The panel must be located in the same tab group.",attribute:"panel",reflects:!0},{kind:"field",name:"active",type:{text:"boolean"},default:"false",description:"Draws the tab in an active state.",attribute:"active",reflects:!0},{kind:"field",name:"closable",type:{text:"boolean"},default:"false",description:"Makes the tab closable and shows a close button.",attribute:"closable",reflects:!0},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the tab and prevents selection.",attribute:"disabled",reflects:!0},{kind:"method",name:"handleCloseClick",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"handleActiveChange"},{kind:"method",name:"handleDisabledChange"}],events:[{description:"Emitted when the tab is closable and the close button is activated.",name:"syn-close"}],attributes:[{name:"panel",type:{text:"string"},default:"''",description:"The name of the tab panel this tab is associated with. The panel must be located in the same tab group.",fieldName:"panel"},{name:"active",type:{text:"boolean"},default:"false",description:"Draws the tab in an active state.",fieldName:"active"},{name:"closable",type:{text:"boolean"},default:"false",description:"Makes the tab closable and shows a close button.",fieldName:"closable"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the tab and prevents selection.",fieldName:"disabled"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).",tagNameWithoutPrefix:"tab",tagName:"syn-tab",customElement:!0,jsDoc:`/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-tab--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The tab's label.
 *
 * @event syn-close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart close-button - The close button, an \`<syn-icon-button>\`.
 * @csspart close-button__base - The close button's exported \`base\` part.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-tab--docs",status:"stable",since:"2.0",dependencies:["syn-icon-button"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynTab",module:"../components/src/components/tab/tab.js"}}]},{kind:"javascript-module",path:"../components/src/components/tag/tag.js",declarations:[{kind:"class",description:"",name:"SynTag",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The tag's content.",name:"content"},{description:"The tag's remove button, an `<syn-icon-button>`.",name:"remove-button"},{description:"The remove button's exported `base` part.",name:"remove-button__base"}],slots:[{description:"The tag's content.",name:""}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-icon-button': SynIconButton }"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The tag's size.",attribute:"size",reflects:!0},{kind:"field",name:"removable",type:{text:"boolean"},default:"false",description:"Makes the tag removable and shows a remove button.",attribute:"removable"},{kind:"method",name:"handleRemoveClick",privacy:"private"}],events:[{description:"Emitted when the remove button is activated.",name:"syn-remove"}],attributes:[{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The tag's size.",fieldName:"size"},{name:"removable",type:{text:"boolean"},default:"false",description:"Makes the tag removable and shows a remove button.",fieldName:"removable"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Tags are used as labels to organize things or to indicate a selection.",tagNameWithoutPrefix:"tag",tagName:"syn-tag",customElement:!0,jsDoc:`/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-tag--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-icon-button
 *
 * @slot - The tag's content.
 *
 * @event syn-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 * @csspart remove-button - The tag's remove button, an \`<syn-icon-button>\`.
 * @csspart remove-button__base - The remove button's exported \`base\` part.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-tag--docs",status:"stable",since:"2.0",dependencies:["syn-icon-button"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynTag",module:"../components/src/components/tag/tag.js"}}]},{kind:"javascript-module",path:"../components/src/components/textarea/textarea.js",declarations:[{kind:"class",description:"",name:"SynTextarea",cssParts:[{description:"The form control that wraps the label, input, and help text.",name:"form-control"},{description:"The label's wrapper.",name:"form-control-label"},{description:"The input's wrapper.",name:"form-control-input"},{description:"The help text's wrapper.",name:"form-control-help-text"},{description:"The component's base wrapper.",name:"base"},{description:"The internal `<textarea>` control.",name:"textarea"}],slots:[{description:"The textarea's label. Alternatively, you can use the `label` attribute.",name:"label"},{description:"Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",name:"help-text"}],members:[{kind:"field",name:"formControlController",privacy:"private",readonly:!0,default:"new FormControlController(this, { assumeInteractionOn: ['syn-blur', 'syn-input'] })"},{kind:"field",name:"hasSlotController",privacy:"private",readonly:!0,default:"new HasSlotController(this, 'help-text', 'label')"},{kind:"field",name:"resizeObserver",type:{text:"ResizeObserver"},privacy:"private"},{kind:"field",name:"input",type:{text:"HTMLTextAreaElement"}},{kind:"field",name:"sizeAdjuster",type:{text:"HTMLTextAreaElement"}},{kind:"field",name:"hasFocus",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"title",type:{text:"string"},default:"''",attribute:"title",reflects:!0},{kind:"field",name:"name",type:{text:"string"},default:"''",description:"The name of the textarea, submitted as a name/value pair with form data.",attribute:"name"},{kind:"field",name:"value",type:{text:"string"},default:"''",description:"The current value of the textarea, submitted as a name/value pair with form data.",attribute:"value"},{kind:"field",name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The textarea's size.",attribute:"size",reflects:!0},{kind:"field",name:"label",type:{text:"string"},default:"''",description:"The textarea's label. If you need to display HTML, use the `label` slot instead.",attribute:"label"},{kind:"field",name:"helpText",type:{text:"string"},default:"''",description:"The textarea's help text. If you need to display HTML, use the `help-text` slot instead.",attribute:"help-text"},{kind:"field",name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the input is empty.",attribute:"placeholder"},{kind:"field",name:"rows",type:{text:"number"},default:"4",description:"The number of rows to display by default.",attribute:"rows"},{kind:"field",name:"resize",type:{text:"'none' | 'vertical' | 'auto'"},default:"'vertical'",description:"Controls how the textarea can be resized.",attribute:"resize"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the textarea.",attribute:"disabled",reflects:!0},{kind:"field",name:"readonly",type:{text:"boolean"},default:"false",description:"Makes the textarea readonly.",attribute:"readonly",reflects:!0},{kind:"field",name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",attribute:"form",reflects:!0},{kind:"field",name:"required",type:{text:"boolean"},default:"false",description:"Makes the textarea a required field.",attribute:"required",reflects:!0},{kind:"field",name:"minlength",type:{text:"number"},description:"The minimum length of input that will be considered valid.",attribute:"minlength"},{kind:"field",name:"maxlength",type:{text:"number"},description:"The maximum length of input that will be considered valid.",attribute:"maxlength"},{kind:"field",name:"autocapitalize",type:{text:"'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'"},description:"Controls whether and how text input is automatically capitalized as it is entered by the user.",attribute:"autocapitalize"},{kind:"field",name:"autocorrect",type:{text:"string"},description:"Indicates whether the browser's autocorrect feature is on or off.",attribute:"autocorrect"},{kind:"field",name:"autocomplete",type:{text:"string"},description:`Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.`,attribute:"autocomplete"},{kind:"field",name:"autofocus",type:{text:"boolean"},description:"Indicates that the input should receive focus on page load.",attribute:"autofocus"},{kind:"field",name:"enterkeyhint",type:{text:"'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'"},description:"Used to customize the label or icon of the Enter key on virtual keyboards.",attribute:"enterkeyhint"},{kind:"field",name:"spellcheck",type:{text:"boolean"},default:"true",description:"Enables spell checking on the textarea.",attribute:"spellcheck"},{kind:"field",name:"inputmode",type:{text:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'"},description:`Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices.`,attribute:"inputmode"},{kind:"field",name:"defaultValue",type:{text:"string"},default:"''",description:"The default value of the form control. Primarily used for resetting the form control."},{kind:"field",name:"validity",description:"Gets the validity state object",readonly:!0},{kind:"field",name:"validationMessage",description:"Gets the validation message",readonly:!0},{kind:"method",name:"handleBlur",privacy:"private"},{kind:"method",name:"handleChange",privacy:"private"},{kind:"method",name:"handleFocus",privacy:"private"},{kind:"method",name:"handleInput",privacy:"private"},{kind:"method",name:"handleInvalid",privacy:"private",parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"setTextareaHeight",privacy:"private"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"handleRowsChange"},{kind:"method",name:"handleValueChange"},{kind:"method",name:"focus",parameters:[{name:"options",optional:!0,type:{text:"FocusOptions"}}],description:"Sets focus on the textarea."},{kind:"method",name:"blur",description:"Removes focus from the textarea."},{kind:"method",name:"select",description:"Selects all the text in the textarea."},{kind:"method",name:"scrollPosition",return:{type:{text:"{ top: number; left: number } | undefined"}},parameters:[{name:"position",optional:!0,type:{text:"{ top?: number; left?: number }"}}],description:"Gets or sets the textarea's scroll position."},{kind:"method",name:"setSelectionRange",parameters:[{name:"selectionStart",type:{text:"number"}},{name:"selectionEnd",type:{text:"number"}},{name:"selectionDirection",default:"'none'",type:{text:"'forward' | 'backward' | 'none'"}}],description:"Sets the start and end positions of the text selection (0-based)."},{kind:"method",name:"setRangeText",parameters:[{name:"replacement",type:{text:"string"}},{name:"start",optional:!0,type:{text:"number"}},{name:"end",optional:!0,type:{text:"number"}},{name:"selectMode",default:"'preserve'",type:{text:"'select' | 'start' | 'end' | 'preserve'"}}],description:"Replaces a range of text with a new string."},{kind:"method",name:"checkValidity",description:"Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid."},{kind:"method",name:"getForm",return:{type:{text:"HTMLFormElement | null"}},description:"Gets the associated form, if one exists."},{kind:"method",name:"reportValidity",description:"Checks for validity and shows the browser's validation message if the control is invalid."},{kind:"method",name:"setCustomValidity",parameters:[{name:"message",type:{text:"string"}}],description:"Sets a custom validation message. Pass an empty string to restore validity."}],events:[{description:"Emitted when the control loses focus.",name:"syn-blur"},{description:"Emitted when an alteration to the control's value is committed by the user.",name:"syn-change"},{description:"Emitted when the control gains focus.",name:"syn-focus"},{description:"Emitted when the control receives input.",name:"syn-input"},{description:"Emitted when the form control has been checked for validity and its constraints aren't satisfied.",name:"syn-invalid"}],attributes:[{name:"title",type:{text:"string"},default:"''",fieldName:"title"},{name:"name",type:{text:"string"},default:"''",description:"The name of the textarea, submitted as a name/value pair with form data.",fieldName:"name"},{name:"value",type:{text:"string"},default:"''",description:"The current value of the textarea, submitted as a name/value pair with form data.",fieldName:"value"},{name:"size",type:{text:"'small' | 'medium' | 'large'"},default:"'medium'",description:"The textarea's size.",fieldName:"size"},{name:"label",type:{text:"string"},default:"''",description:"The textarea's label. If you need to display HTML, use the `label` slot instead.",fieldName:"label"},{name:"help-text",type:{text:"string"},default:"''",description:"The textarea's help text. If you need to display HTML, use the `help-text` slot instead.",fieldName:"helpText"},{name:"placeholder",type:{text:"string"},default:"''",description:"Placeholder text to show as a hint when the input is empty.",fieldName:"placeholder"},{name:"rows",type:{text:"number"},default:"4",description:"The number of rows to display by default.",fieldName:"rows"},{name:"resize",type:{text:"'none' | 'vertical' | 'auto'"},default:"'vertical'",description:"Controls how the textarea can be resized.",fieldName:"resize"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the textarea.",fieldName:"disabled"},{name:"readonly",type:{text:"boolean"},default:"false",description:"Makes the textarea readonly.",fieldName:"readonly"},{name:"form",type:{text:"string"},default:"''",description:"By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",fieldName:"form"},{name:"required",type:{text:"boolean"},default:"false",description:"Makes the textarea a required field.",fieldName:"required"},{name:"minlength",type:{text:"number"},description:"The minimum length of input that will be considered valid.",fieldName:"minlength"},{name:"maxlength",type:{text:"number"},description:"The maximum length of input that will be considered valid.",fieldName:"maxlength"},{name:"autocapitalize",type:{text:"'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'"},description:"Controls whether and how text input is automatically capitalized as it is entered by the user.",fieldName:"autocapitalize"},{name:"autocorrect",type:{text:"string"},description:"Indicates whether the browser's autocorrect feature is on or off.",fieldName:"autocorrect"},{name:"autocomplete",type:{text:"string"},description:`Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.`,fieldName:"autocomplete"},{name:"autofocus",type:{text:"boolean"},description:"Indicates that the input should receive focus on page load.",fieldName:"autofocus"},{name:"enterkeyhint",type:{text:"'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'"},description:"Used to customize the label or icon of the Enter key on virtual keyboards.",fieldName:"enterkeyhint"},{name:"spellcheck",type:{text:"boolean"},default:"true",description:"Enables spell checking on the textarea.",fieldName:"spellcheck"},{name:"inputmode",type:{text:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'"},description:`Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices.`,fieldName:"inputmode"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Textareas collect data from the user and allow multiple lines of text.",tagNameWithoutPrefix:"textarea",tagName:"syn-textarea",customElement:!0,jsDoc:`/**
 * @summary Textareas collect data from the user and allow multiple lines of text.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-textarea--docs
 * @status stable
 * @since 2.0
 *
 * @slot label - The textarea's label. Alternatively, you can use the \`label\` attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the \`help-text\` attribute.
 *
 * @event syn-blur - Emitted when the control loses focus.
 * @event syn-change - Emitted when an alteration to the control's value is committed by the user.
 * @event syn-focus - Emitted when the control gains focus.
 * @event syn-input - Emitted when the control receives input.
 * @event syn-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart textarea - The internal \`<textarea>\` control.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-textarea--docs",status:"stable",since:"2.0"}],exports:[{kind:"js",name:"default",declaration:{name:"SynTextarea",module:"../components/src/components/textarea/textarea.js"}}]},{kind:"javascript-module",path:"../components/src/components/tooltip/tooltip.js",declarations:[{kind:"class",description:"",name:"SynTooltip",cssProperties:[{description:"The maximum width of the tooltip before its content will wrap.",name:"--max-width"},{description:"The amount of time to wait before hiding the tooltip when hovering.",name:"--hide-delay"},{description:"The amount of time to wait before showing the tooltip when hovering.",name:"--show-delay"}],cssParts:[{description:"The component's base wrapper, an `<syn-popup>` element.",name:"base"},{description:"The popup's exported `popup` part. Use this to target the tooltip's popup container.",name:"base__popup"},{description:"The popup's exported `arrow` part. Use this to target the tooltip's arrow.",name:"base__arrow"},{description:"The tooltip's body where its content is rendered.",name:"body"}],slots:[{description:"The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.",name:""},{description:"The content to render in the tooltip. Alternatively, you can use the `content` attribute.",name:"content"}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-popup': SynPopup }"},{kind:"field",name:"hoverTimeout",type:{text:"number"},privacy:"private"},{kind:"field",name:"localize",privacy:"private",readonly:!0,default:"new LocalizeController(this)"},{kind:"field",name:"closeWatcher",type:{text:"CloseWatcher | null"},privacy:"private"},{kind:"field",name:"defaultSlot",type:{text:"HTMLSlotElement"}},{kind:"field",name:"body",type:{text:"HTMLElement"}},{kind:"field",name:"popup",type:{text:"SynPopup"}},{kind:"field",name:"content",type:{text:"string"},default:"''",description:"The tooltip's content. If you need to display HTML, use the `content` slot instead.",attribute:"content"},{kind:"field",name:"placement",type:{text:`| 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'`},default:"'top'",description:`The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport.`,attribute:"placement"},{kind:"field",name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the tooltip so it won't show when triggered.",attribute:"disabled",reflects:!0},{kind:"field",name:"distance",type:{text:"number"},default:"13",description:"The distance in pixels from which to offset the tooltip away from its target.",attribute:"distance"},{kind:"field",name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",attribute:"open",reflects:!0},{kind:"field",name:"skidding",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the tooltip along its target.",attribute:"skidding"},{kind:"field",name:"trigger",type:{text:"string"},default:"'hover focus'",description:"Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple\noptions can be passed by separating them with a space. When manual is used, the tooltip must be activated\nprogrammatically.",attribute:"trigger"},{kind:"field",name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",attribute:"hoist"},{kind:"field",name:"handleBlur",privacy:"private"},{kind:"field",name:"handleClick",privacy:"private"},{kind:"field",name:"handleFocus",privacy:"private"},{kind:"field",name:"handleDocumentKeyDown",privacy:"private"},{kind:"field",name:"handleMouseOver",privacy:"private"},{kind:"field",name:"handleMouseOut",privacy:"private"},{kind:"method",name:"hasTrigger",privacy:"private",parameters:[{name:"triggerType",type:{text:"string"}}]},{kind:"method",name:"handleOpenChange"},{kind:"method",name:"handleOptionsChange"},{kind:"method",name:"handleDisabledChange"},{kind:"method",name:"show",description:"Shows the tooltip."},{kind:"method",name:"hide",description:"Hides the tooltip"}],events:[{description:"Emitted when the tooltip begins to show.",name:"syn-show"},{description:"Emitted after the tooltip has shown and all animations are complete.",name:"syn-after-show"},{description:"Emitted when the tooltip begins to hide.",name:"syn-hide"},{description:"Emitted after the tooltip has hidden and all animations are complete.",name:"syn-after-hide"}],attributes:[{name:"content",type:{text:"string"},default:"''",description:"The tooltip's content. If you need to display HTML, use the `content` slot instead.",fieldName:"content"},{name:"placement",type:{text:`| 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'`},default:"'top'",description:`The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport.`,fieldName:"placement"},{name:"disabled",type:{text:"boolean"},default:"false",description:"Disables the tooltip so it won't show when triggered.",fieldName:"disabled"},{name:"distance",type:{text:"number"},default:"13",description:"The distance in pixels from which to offset the tooltip away from its target.",fieldName:"distance"},{name:"open",type:{text:"boolean"},default:"false",description:"Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",fieldName:"open"},{name:"skidding",type:{text:"number"},default:"0",description:"The distance in pixels from which to offset the tooltip along its target.",fieldName:"skidding"},{name:"trigger",type:{text:"string"},default:"'hover focus'",description:"Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple\noptions can be passed by separating them with a space. When manual is used, the tooltip must be activated\nprogrammatically.",fieldName:"trigger"},{name:"hoist",type:{text:"boolean"},default:"false",description:"Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",fieldName:"hoist"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:"Tooltips display additional information based on a specific action.",tagNameWithoutPrefix:"tooltip",tagName:"syn-tooltip",customElement:!0,jsDoc:`/**
 * @summary Tooltips display additional information based on a specific action.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-tooltip--docs
 * @status stable
 * @since 2.0
 *
 * @dependency syn-popup
 *
 * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
 * @slot content - The content to render in the tooltip. Alternatively, you can use the \`content\` attribute.
 *
 * @event syn-show - Emitted when the tooltip begins to show.
 * @event syn-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event syn-hide - Emitted when the tooltip begins to hide.
 * @event syn-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an \`<syn-popup>\` element.
 * @csspart base__popup - The popup's exported \`popup\` part. Use this to target the tooltip's popup container.
 * @csspart base__arrow - The popup's exported \`arrow\` part. Use this to target the tooltip's arrow.
 * @csspart body - The tooltip's body where its content is rendered.
 *
 * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.
 * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.
 *
 * @animation tooltip.show - The animation to use when showing the tooltip.
 * @animation tooltip.hide - The animation to use when hiding the tooltip.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-tooltip--docs",status:"stable",since:"2.0",dependencies:["syn-popup"],animations:[{name:"tooltip.show",description:"The animation to use when showing the tooltip."},{name:"tooltip.hide",description:"The animation to use when hiding the tooltip."}]}],exports:[{kind:"js",name:"default",declaration:{name:"SynTooltip",module:"../components/src/components/tooltip/tooltip.js"}}]},{kind:"javascript-module",path:"../components/src/components/validate/validate.js",declarations:[{kind:"class",description:"",name:"SynValidate",cssParts:[{description:"The component's base wrapper.",name:"base"},{description:"The container that wraps the form field.",name:"input-wrapper"},{description:'The syn-alert that is shown when the variant is set to "inline".',name:"alert"},{description:"The container that wraps the alert.",name:"alert__base"},{description:"The container that wraps the alert message.",name:"alert__message"},{description:"The container that wraps the alert icon.",name:"alert__icon"}],slots:[{description:"The form field that should be validated. Avoid slotting in more than one element, as subsequent ones will be ignored.",name:""}],members:[{kind:"field",name:"dependencies",type:{text:"object"},static:!0,default:"{ 'syn-alert': SynAlert, }"},{kind:"field",name:"controller",default:"new AbortController()"},{kind:"field",name:"observer",type:{text:"MutationObserver"}},{kind:"field",name:"slottedChildren",type:{text:"HTMLElement[]"},privacy:"private"},{kind:"field",name:"validationMessage",type:{text:"string"},default:"''"},{kind:"field",name:"eagerFirstMount",type:{text:"boolean"},default:"true"},{kind:"field",name:"isInternalTriggeredInvalid",type:{text:"boolean"},default:"false"},{kind:"field",name:"isValid",type:{text:"boolean"},default:"true"},{kind:"field",name:"variant",type:{text:"'native' | 'inline'"},default:"'native'",description:`The variant that should be used to show validation alerts.

The following variants are supported:
- **native** (default): Uses the native browser validation, usually a browser tooltip.
- **inline**: Show the validation message underneath the element, using a \`<syn-alert>\``,attribute:"variant",reflects:!0},{kind:"field",name:"hideIcon",type:{text:"boolean"},default:"false",description:"Do not show the error icon when using the inline variant validation",attribute:"hide-icon",reflects:!0},{kind:"field",name:"on",type:{text:"string"},default:"''",description:"Defines the events that trigger the validation.\n`invalid` will always automatically be included.\nYou may also use the `live` keyword to validate on every input change.\n`live` will make sure to listen to the `invalid`, `input` and `blur` events.\n\nPlease have a look at the [documentation for native form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)\nand [the use of form invalid events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) for further information.",attribute:"on",reflects:!0},{kind:"field",name:"customValidationMessage",type:{text:"string"},default:"''",description:`Custom validation message to be displayed when the input is invalid.
Will override the default browser validation message.
Set to an empty string to reset the validation message.`,attribute:"custom-validation-message"},{kind:"field",name:"eager",type:{text:"boolean"},default:"false",description:"Set this to true to validate the input immediately when it is rendered.\nBest used with a `variant` of `inline`.\nWhen setting eager, the input will not be focused automatically.\n\nWhen using a `variant` of `native` the browser will focus\nthe last eager field as it is using a tooltip.\nIn this case it is better to just provide one eager field.",attribute:"eager"},{kind:"method",name:"handleListenerChange"},{kind:"method",name:"handleEagerChange"},{kind:"method",name:"handleCustomValidationMessageChange"},{kind:"method",name:"getValidity",description:"Returns the validity state of the input component.\n`true` for valid and `false` for invalid."},{kind:"method",name:"getInput",privacy:"private",description:"Get the input element to validate. Defined as the first slotted element",return:{type:{text:""}}},{kind:"method",name:"getUsedEventNames",privacy:"private",description:`Get the event names to listen for.
If the input is a synergy element, will use syn- prefixes.`,return:{type:{text:""}}},{kind:"method",name:"updateEvents",privacy:"private",description:"Update the events on the input element."},{kind:"method",name:"setValidationMessage",privacy:"private",parameters:[{name:"input",type:{text:"HTMLInputElement"}}]},{kind:"method",name:"setCustomValidationMessage",privacy:"private",parameters:[{name:"input",type:{text:"HTMLInputElement"}}],description:`Set the custom validation message to the input. This will make sure to either:
- use the custom message if one is set or
- use the default message if the custom message is empty`},{kind:"field",name:"internalRevalidate",privacy:"private",description:"Set the validation message from the input element",parameters:[{description:"The event that was received",name:"e"}]},{kind:"method",name:"handleFocus",privacy:"private",parameters:[{name:"input",type:{text:"HTMLInputElement"}}],description:"Handle the blur event during validation"},{kind:"field",name:"validate",privacy:"private",description:"Triggers a validation run, showing the validation message if needed."},{kind:"method",name:"renderInlineValidation",privacy:"private"}],attributes:[{name:"variant",type:{text:"'native' | 'inline'"},default:"'native'",description:`The variant that should be used to show validation alerts.

The following variants are supported:
- **native** (default): Uses the native browser validation, usually a browser tooltip.
- **inline**: Show the validation message underneath the element, using a \`<syn-alert>\``,fieldName:"variant"},{name:"hide-icon",type:{text:"boolean"},default:"false",description:"Do not show the error icon when using the inline variant validation",fieldName:"hideIcon"},{name:"on",type:{text:"string"},default:"''",description:"Defines the events that trigger the validation.\n`invalid` will always automatically be included.\nYou may also use the `live` keyword to validate on every input change.\n`live` will make sure to listen to the `invalid`, `input` and `blur` events.\n\nPlease have a look at the [documentation for native form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)\nand [the use of form invalid events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) for further information.",fieldName:"on"},{name:"custom-validation-message",type:{text:"string"},default:"''",description:`Custom validation message to be displayed when the input is invalid.
Will override the default browser validation message.
Set to an empty string to reset the validation message.`,fieldName:"customValidationMessage"},{name:"eager",type:{text:"boolean"},default:"false",description:"Set this to true to validate the input immediately when it is rendered.\nBest used with a `variant` of `inline`.\nWhen setting eager, the input will not be focused automatically.\n\nWhen using a `variant` of `native` the browser will focus\nthe last eager field as it is using a tooltip.\nIn this case it is better to just provide one eager field.",fieldName:"eager"}],superclass:{name:"SynergyElement",module:"/components/src/internal/synergy-element.js"},summary:`Validate provides form field validation messages in a unified way.
It does this by using [the native browser validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
and showing the validation message in a consistent, user defined way.`,tagNameWithoutPrefix:"validate",tagName:"syn-validate",customElement:!0,jsDoc:`/**
 * @summary Validate provides form field validation messages in a unified way.
 * It does this by using [the native browser validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
 * and showing the validation message in a consistent, user defined way.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-syn-validate--docs
 * @dependency syn-alert
 *
 * @slot - The form field that should be validated.
 * Avoid slotting in more than one element, as subsequent ones will be ignored.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input-wrapper - The container that wraps the form field.
 * @csspart alert - The syn-alert that is shown when the variant is set to "inline".
 * @csspart alert__base - The container that wraps the alert.
 * @csspart alert__message - The container that wraps the alert message.
 * @csspart alert__icon - The container that wraps the alert icon.
 */`,documentation:"https://synergy-design-system.github.io/?path=/docs/components-syn-validate--docs",dependencies:["syn-alert"]}],exports:[{kind:"js",name:"default",declaration:{name:"SynValidate",module:"../components/src/components/validate/validate.js"}}]}],package:{author:{name:"SICK Global UX Foundation",url:"https://www.sick.com"},description:"",homepage:"https://synergy-design-system.github.io",license:"MIT",name:"@synergy-design-system/components",version:"2.34.0"}},ql={modules:[{declarations:[{attributes:[{default:"'syn-link--small'",description:"The size of the link",name:"syn-link",type:{text:"'syn-link--small' | 'syn-link--medium' | 'syn-link--large'"}},{default:"false",description:"Applies the quiet link styling",name:"syn-link--quiet",type:{text:"boolean"}},{default:"false",description:"Applies the disabled link styling",name:"syn-link--disabled",type:{text:"boolean"}}],customElement:!0,kind:"class",members:[{attribute:"syn-link",default:"'syn-link--small'",description:"The size of the link",kind:"field",name:"syn-link",type:{text:"'syn-link--small' | 'syn-link--medium' | 'syn-link--large'"}},{attribute:"syn-link--quiet",default:"false",description:"Applies the quiet link styling",kind:"field",name:"syn-link--quiet",type:{text:"boolean"}},{attribute:"syn-link--disabled",default:"false",description:"Applies the disabled link styling",kind:"field",name:"syn-link--disabled",type:{text:"boolean"}}],name:"syn-link",slots:[{description:"Main content of syn-link",name:""}],tagName:"syn-link",tagNameWithoutPrefix:"link"}],description:"The size of the link",kind:"javascript-module",path:"../styles/src/link/index.css"},{declarations:[{attributes:[{default:"'syn-link-list--medium'",description:"The size of the link list",name:"syn-link-list",type:{text:"'syn-link-list--medium' | 'syn-link-list--small' | 'syn-link-list--large'"}},{default:"false",description:"Applies horizontal styling to the link list",name:"syn-link-list--horizontal",type:{text:"boolean"}}],customElement:!0,kind:"class",members:[{attribute:"syn-link-list",default:"'syn-link-list--medium'",description:"The size of the link list",kind:"field",name:"syn-link-list",type:{text:"'syn-link-list--medium' | 'syn-link-list--small' | 'syn-link-list--large'"}},{attribute:"syn-link-list--horizontal",default:"false",description:"Applies horizontal styling to the link list",kind:"field",name:"syn-link-list--horizontal",type:{text:"boolean"}}],name:"syn-link-list",slots:[{description:"Main content of syn-link-list",name:""}],tagName:"syn-link-list",tagNameWithoutPrefix:"link-list"}],description:"The size of the link list",kind:"javascript-module",path:"../styles/src/link-list/index.css"},{declarations:[{attributes:[{default:"true",description:"Applies the table cell styling",name:"syn-table-cell",type:{text:"boolean"}},{default:"false",description:"Applies an alternating style to help separate rows visually",name:"syn-table-cell--alternating",type:{text:"boolean"}},{default:"false",description:"Applies a border to the left of the table cell",name:"syn-table-cell--border-start",type:{text:"boolean"}},{default:"false",description:"Applies a border to the right of the table cell",name:"syn-table-cell--border-end",type:{text:"boolean"}},{default:"false",description:"Applies a border to the top of the table cell",name:"syn-table-cell--border-top",type:{text:"boolean"}},{default:"false",description:"Applies a border to the bottom of the table cell",name:"syn-table-cell--border-bottom",type:{text:"boolean"}},{default:"false",description:"Applies the table cell header styling",name:"syn-table-cell--header",type:{text:"boolean"}},{default:"",description:"Applies the selected shadow to the table cell",name:"syn-table-cell--shadow",type:{text:" | 'syn-table-cell--shadow-bottom' | 'syn-table-cell--shadow-top' | 'syn-table-cell--shadow-start' | 'syn-table-cell--shadow-end'"}},{default:"false",description:"Displays the table shadow",name:"syn-table-cell--shadow-active",type:{text:"boolean"}}],customElement:!0,kind:"class",members:[{attribute:"syn-table-cell",default:"true",description:"Applies the table cell styling",kind:"field",name:"syn-table-cell",type:{text:"boolean"}},{attribute:"syn-table-cell--alternating",default:"false",description:"Applies an alternating style to help separate rows visually",kind:"field",name:"syn-table-cell--alternating",type:{text:"boolean"}},{attribute:"syn-table-cell--border-start",default:"false",description:"Applies a border to the left of the table cell",kind:"field",name:"syn-table-cell--border-start",type:{text:"boolean"}},{attribute:"syn-table-cell--border-end",default:"false",description:"Applies a border to the right of the table cell",kind:"field",name:"syn-table-cell--border-end",type:{text:"boolean"}},{attribute:"syn-table-cell--border-top",default:"false",description:"Applies a border to the top of the table cell",kind:"field",name:"syn-table-cell--border-top",type:{text:"boolean"}},{attribute:"syn-table-cell--border-bottom",default:"false",description:"Applies a border to the bottom of the table cell",kind:"field",name:"syn-table-cell--border-bottom",type:{text:"boolean"}},{attribute:"syn-table-cell--header",default:"false",description:"Applies the table cell header styling",kind:"field",name:"syn-table-cell--header",type:{text:"boolean"}},{attribute:"syn-table-cell--shadow",default:"",description:"Applies the selected shadow to the table cell",kind:"field",name:"syn-table-cell--shadow",type:{text:" | 'syn-table-cell--shadow-bottom' | 'syn-table-cell--shadow-top' | 'syn-table-cell--shadow-start' | 'syn-table-cell--shadow-end'"}},{attribute:"syn-table-cell--shadow-active",default:"false",description:"Displays the table shadow",kind:"field",name:"syn-table-cell--shadow-active",type:{text:"boolean"}}],name:"syn-table-cell",slots:[{description:"Main content of syn-table-cell",name:""}],tagName:"syn-table-cell",tagNameWithoutPrefix:"table-cell"}],description:"Applies the table cell styling",kind:"javascript-module",path:"../styles/src/tables/table-cell.css"},{declarations:[{attributes:[{default:"false",description:"Applies the styling to a table element",name:"syn-table",type:{text:"boolean"}},{default:"true",description:"Applies all default table stylings to a table and its children",name:"syn-table--default",type:{text:"boolean"}},{default:"false",description:"Applies all alternate table stylings to a table and its children",name:"syn-table--alternating",type:{text:"boolean"}},{default:"false",description:"Applies all border table stylings to a table and its children",name:"syn-table--border",type:{text:"boolean"}}],customElement:!0,kind:"class",members:[{attribute:"syn-table",default:"false",description:"Applies the styling to a table element",kind:"field",name:"syn-table",type:{text:"boolean"}},{attribute:"syn-table--default",default:"true",description:"Applies all default table stylings to a table and its children",kind:"field",name:"syn-table--default",type:{text:"boolean"}},{attribute:"syn-table--alternating",default:"false",description:"Applies all alternate table stylings to a table and its children",kind:"field",name:"syn-table--alternating",type:{text:"boolean"}},{attribute:"syn-table--border",default:"false",description:"Applies all border table stylings to a table and its children",kind:"field",name:"syn-table--border",type:{text:"boolean"}}],name:"syn-table",slots:[{description:"Main content of syn-table",name:""}],tagName:"syn-table",tagNameWithoutPrefix:"table"}],description:"Applies the styling to a table element",kind:"javascript-module",path:"../styles/src/tables/table.css"},{declarations:[{attributes:[{default:"'syn-body--x-small'",description:"The font size of the body text",name:"syn-body",type:{text:"'syn-body--x-small' | 'syn-body--small' | 'syn-body--medium' | 'syn-body--large'"}}],customElement:!0,kind:"class",members:[{attribute:"syn-body",default:"'syn-body--x-small'",description:"The font size of the body text",kind:"field",name:"syn-body",type:{text:"'syn-body--x-small' | 'syn-body--small' | 'syn-body--medium' | 'syn-body--large'"}}],name:"syn-body",slots:[{description:"Main content of syn-body",name:""}],tagName:"syn-body",tagNameWithoutPrefix:"body"}],description:"The font size of the body text",kind:"javascript-module",path:"../styles/src/typography/body.css"},{declarations:[{attributes:[{default:"'syn-heading--3x-large'",description:"The size of the headline",name:"syn-heading",type:{text:"'syn-heading--3x-large' | 'syn-heading--2x-large' | 'syn-heading--x-large' | 'syn-heading--large'"}}],customElement:!0,kind:"class",members:[{attribute:"syn-heading",default:"'syn-heading--3x-large'",description:"The size of the headline",kind:"field",name:"syn-heading",type:{text:"'syn-heading--3x-large' | 'syn-heading--2x-large' | 'syn-heading--x-large' | 'syn-heading--large'"}}],name:"syn-heading",slots:[{description:"Main content of syn-heading",name:""}],tagName:"syn-heading",tagNameWithoutPrefix:"heading"}],description:"The size of the headline",kind:"javascript-module",path:"../styles/src/typography/heading.css"},{declarations:[{attributes:[{default:"'syn-weight--normal'",description:"The font weight to apply",name:"syn-weight",type:{text:"'syn-weight--normal' | 'syn-weight--semibold' | 'syn-weight--bold'"}}],customElement:!0,kind:"class",members:[{attribute:"syn-weight",default:"'syn-weight--normal'",description:"The font weight to apply",kind:"field",name:"syn-weight",type:{text:"'syn-weight--normal' | 'syn-weight--semibold' | 'syn-weight--bold'"}}],name:"syn-weight",slots:[{description:"Main content of syn-weight",name:""}],tagName:"syn-weight",tagNameWithoutPrefix:"weight"}],description:"The font weight to apply",kind:"javascript-module",path:"../styles/src/typography/weight.css"}]};Ya({hideArgRef:!0,hideScriptTag:!0});$t.modules&&($t.modules=$t.modules.map(t=>(t.declarations&&(t.declarations=t.declarations.map(e=>(e.members&&(e.members=e.members.filter(n=>n.description&&n.privacy!=="private")),e))),t)));const Kl={...$t,modules:[...$t.modules,...ql.modules]};ka(Kl);console.log("Custom elements manifest loaded for components and styles");const vn=t=>{const{args:e,events:n,argTypes:i}=ki(t),a=bi(t,window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__),o=()=>({status:{styles:{backgroundColor:a?.status==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${a?.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${a?.since}`}});return{args:e,argTypes:(()=>{for(const d in i)i.hasOwnProperty(d)&&i[d].table&&i[d].table.category==="properties"&&(i[d].control={disabled:!0});return{...i,...a?.events?.reduce((d,c)=>(d[c.name]={...c,control:!1,table:{category:"Events"}},d),{}),...a?.members?.filter(d=>d.kind==="method").reduce((d,c)=>(d[c.name]={...c,control:!1,table:{category:"Methods"}},d),{})}})(),parameters:{badges:["status","since"],badgesConfig:o(),actions:{handles:n}}}},mt=t=>({getSuffixFromType:e=>({attribute:"",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[e],getValuesFromAttribute:e=>{e.endsWith("-attr")||(e=`${e}-attr`);const{argTypes:n}=vn(t);return n[e]?.control?.type==="boolean"?[!0,!1]:n[e].options},getValuesFromAttributes:e=>e?.map(n=>(n.endsWith("-attr")||(n=`${n}-attr`),{name:n,values:mt(t).getValuesFromAttribute(n)})),overrideArgs:(e,n)=>{const i=n||vn(t).args,a=Array.isArray(e)?e:[e];for(const o of a){const s=mt(t).getSuffixFromType(o.type);i[`${o.name}${s}`]=o.value}return i}}),cd=t=>{const{template:e,manifest:n}=ki(t),{args:i}=vn(t),{getValuesFromAttribute:a}=mt(t);return{generateTemplate:({axis:s,constants:l=[],options:d,args:c=i})=>{const f=T=>{if(!n?.style)return e(T);const H=Object.keys(T).filter(B=>B.endsWith("-attr")).reduce((B,Me)=>{const Ce=Me.substring(0,Me.length-5);return T[Me]===!0?B[Ce]=!0:T[Me]==="false"||T[Me]==="(default)"?B[Ce]=!1:T[Me]&&(Ce.endsWith("...")?B[Ce.replace("...",T[Me])]=!0:B[T[Me]]=!0),B},{}),Xe=T["default-slot"]||"",at={[t]:!0,...H},wt=Object.keys(at).filter(B=>at[B]).join(" ");if(d?.templateContent){const B=d.templateContent.replaceAll("%SLOT%",Xe).replaceAll("%CLASSES%",wt);return ue(B)}return S`<div class=${y(at)}>${ue(Xe)}</div>`},_=(Array.isArray(l)?l:[l]).reduce((T,H)=>({...T,[`${H.name}${mt(t).getSuffixFromType(H.type)}`]:H.value}),{});if(!s?.x&&!s?.y&&!d?.title)return S`${f({...c,..._})}`;const Y=T=>T?Array.isArray(T)?T.map(H=>({...H,values:H.values||a(H.name)})):[{...T,values:T.values||a(T.name)}]:[{}],Ye=Y(s?.x),Ae=Y(s?.y),it=(Array.isArray(l)?l:[l]).find(T=>T.type==="template")?.value,Rt=`uuid-${crypto.randomUUID()}`;return S`
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
          .${Rt}.story-template tbody tr.template-row td.template {
            background: ${d?.templateBackground};
          }
        `}

        ${d?.templateBackgrounds?.colors.map((T,H)=>{const Xe=at=>`${d?.templateBackgrounds?.colors.length}n + ${at+1}`;return d?.templateBackgrounds?.alternate==="y"?`
                .${Rt}.story-template tbody tr.template-row:nth-of-type(${Xe(H)}) td.template {
                  background: ${T};
                }
              `:`
                .${Rt}.story-template tbody tr.template-row td.template:nth-of-type(${Xe(H)}) {
                  background: ${T};
                }
              `})}
      </style>
      ${Ye.map(T=>S` ${Ae.map(H=>{let Xe=!0;const at=Ye.length>1||T.values,wt=(T&&H||Ae.length>1)&&H?.values;return S`
            <table class="story-template ${Rt} ${d?.classes}">
              <thead>
                ${d?.title&&S`<tr>
                  <th class="title" colspan=${(T.values?.length||0)+3}><code>${d?.title}</code></th>
                </tr>`}
                ${T&&T.values&&S`
                  <tr>
                    ${wt?S`<td></td>`:""} <td></td>
                    ${at&&S`<th colspan=${T.values?.length||0}><code>${T.title||T.name}</code></th>`}
                    </tr>
                  </tr>
                  ${S`
                    <tr>
                      ${wt?S`<td></td>`:""}
                      <td></td>
                      ${T?.values?.map(B=>S`<td><code>${B.title||B}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${(H?.values||[""]).map(B=>{const Me=S`
                    <tr class="template-row">
                      ${Xe&&wt?S`<th rowspan="${H?.values?.length}">
                            <span><code>${H.title||H.name}</code></span>
                          </th>`:""}
                      <th><code>${B.title||B}</code></th>
                      ${(T?.values||[""]).map(Ce=>S`
                          <td class="template template-x-${T?.values?.indexOf(Ce)||1} template-y-${H?.values?.indexOf(B.value||B)||1}">
                          ${T.type==="template"&&ue((Ce.value||Ce).split("%TEMPLATE%")[0]||"")||""}
                          ${H.type==="template"&&ue((B.value||B).split("%TEMPLATE%")[0]||"")||""}
                          ${it&&ue(it.split("%TEMPLATE%")[0]||"")||""}
                            ${f({...c,..._,...T&&T.type!=="template"&&{[`${T.name}${mt(t).getSuffixFromType(T.type)}`]:Ce.hasOwnProperty("value")?Ce.value:Ce},...H&&H.type!=="template"&&{[`${H.name}${mt(t).getSuffixFromType(H.type)}`]:B.hasOwnProperty("value")?B.value:B}})}
                         ${H.type==="template"&&ue((B.value||B).split("%TEMPLATE%")[1]||"")||""}
                         ${T.type==="template"&&ue((Ce.value||Ce).split("%TEMPLATE%")[1]||"")||""}
                          ${it&&ue(it.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `)}
                    </tr>
                  `;return Xe=!1,Me})}
              </tbody>
            </table>
          `})}`)}
    `}}},Gl={codeOptimizer:t=>{const{body:e}=new DOMParser().parseFromString(t,"text/html"),n=e.querySelectorAll(".template");let i="";return n.length?i=Array.from(n).map(a=>a.innerHTML).join(`
`):i=e.innerHTML,i=i.replace(/<style><\/style>/g,"").replace(/<!-- preview-ignore:start -->[\s\S]*?<!-- preview-ignore:end -->/g,"").replace(/\/\/ preview-ignore:start[\s\S]*?\/\/ preview-ignore:end/g,"").replace(/<style>\n<\/style>/g,"").replace(/<script>\s*component = document\.querySelector\('(.+?)'\);\s*<\/script>/g,""),i}},pd=(t,e,n="components")=>{const i=_a[n][t]??{},a=i[e]?.description?.value??"No Description",o=i[e]?.note?.value??"",s=c=>c.replace(/\n/g,"<br/>"),l=s(a),d=o?`<br/><br/><strong>👨‍💻 Additional developer Information:</strong><br>${s(o)}`:"";return`${l}${d}`},hd=(t,e=150)=>{const n=isNaN(e)?e:{heightPx:e},{afterRender:i="",additionalChromaticOptions:a={},heightPx:o=150,styleHeading:s={}}=n,l=Object.entries(s).map(([d,c])=>`${d}: ${c};`).join(" ");return{parameters:{chromatic:{...aa?.parameters?.chromatic,...a,disableSnapshot:!1},docs:{disable:!0}},render:(d,c)=>S`
      ${Object.entries(t).map(([f,_])=>{const Y=_.name??Sa(f);return S`
          <div style='height: ${o}px; margin: var(--syn-spacing-small);'>
            <h3 data-chromatic="ignore" style='${l}'>${Y}</h3>
            ${_.render?.(d,c)}
          </div>
      `})}
      ${i}
    `}};export{Rl as a,mt as b,cd as c,hd as d,dd as e,pd as g,ld as h,Vl as i,aa as p,vn as s};
