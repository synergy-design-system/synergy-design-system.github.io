import"./index-B3ehnkiM.js";import{i as p,x as m,u as Fi,w as re,T as ge}from"./lit-element-DILkAbkc.js";import{a as k,c as C,w as g,n as a,b as S,S as _t}from"./icon.component-DQyUHKqc.js";import{b as Qi,a as w,c as ii,t as At,S as _e,d as f,o as _,s as Ie,n as Q,e as Re}from"./icon-button-B6Lh2FYd.js";import{f as ts,m as Ms}from"./directive-helpers-DbZfDV3x.js";import"./icon-BPsRcIoP.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fs;function Vs(s){return(t,e)=>Qi(t,e,{get(){return(this.renderRoot??(Fs??=document.createDocumentFragment())).querySelectorAll(s)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rs(s){return(t,e)=>{const{slot:o,selector:i}=s??{},r="slot"+(o?`[name=${o}]`:":not([name])");return Qi(t,e,{get(){const n=this.renderRoot?.querySelector(r),l=n?.assignedElements(s)??[];return i===void 0?l:l.filter(d=>d.matches(i))}})}}const Bs=p`
  :host {
    display: block;
  }

  .accordion--contained ::slotted(syn-details) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  .accordion--contained ::slotted(syn-details:last-of-type){
    margin-bottom: 0;
  }
`;var Ns=Object.defineProperty,js=Object.getOwnPropertyDescriptor,we=(s,t,e,o)=>{for(var i=o>1?void 0:o?js(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ns(t,e,i),i};class ae extends k{constructor(){super(...arguments),this.closeOthers=!1,this.contained=!1,this.size="medium",this.handleAccordionShow=t=>{this.closeOthers&&this.detailsInDefaultSlot.forEach(e=>{e!==t.target&&e.parentNode===t.target.parentNode&&e.removeAttribute("open")})}}static{this.styles=[C,Bs]}adjustDetailsSize(){this.detailsInDefaultSlot.forEach(t=>{t.setAttribute("size",this.size)})}adjustDetailsContained(){this.detailsInDefaultSlot.forEach(t=>{t.contained=this.contained})}handleSizeChange(){this.adjustDetailsSize()}handleContainedChange(){this.adjustDetailsContained()}connectedCallback(){super.connectedCallback(),this.addEventListener("syn-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("syn-show",this.handleAccordionShow)}handleSlotChange(){this.adjustDetailsSize(),this.adjustDetailsContained()}render(){return m`
      <div 
        part="base"
        class=${w({accordion:!0,"accordion--contained":this.contained})}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}}we([Rs({selector:"syn-details"})],ae.prototype,"detailsInDefaultSlot",2);we([a({attribute:"close-others",type:Boolean})],ae.prototype,"closeOthers",2);we([a({reflect:!0,type:Boolean})],ae.prototype,"contained",2);we([a({reflect:!0})],ae.prototype,"size",2);we([g("size",{waitUntilFirstUpdate:!0})],ae.prototype,"handleSizeChange",1);we([g("contained",{waitUntilFirstUpdate:!0})],ae.prototype,"handleContainedChange",1);ae.define("syn-accordion");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const o of e)o._$AO?.(t,!1),Le(o,t);return!0},Ze=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},es=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),qs(t)}};function Us(s){this._$AN!==void 0?(Ze(this),this._$AM=s,es(this)):this._$AM=s}function Hs(s,t=!1,e=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let r=e;r<o.length;r++)Le(o[r],!1),Ze(o[r]);else o!=null&&(Le(o,!1),Ze(o));else Le(this,s)}const qs=s=>{s.type==At.CHILD&&(s._$AP??=Hs,s._$AQ??=Us)};class is extends ii{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),es(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Le(this,t),Ze(this))}setValue(t){if(ts(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{useParameter:Ws,addons:Ks,useEffect:Ys,useMemo:dl}=__STORYBOOK_MODULE_PREVIEW_API__;var Gs=Object.defineProperty,Xs=(s,t)=>{for(var e in t)Gs(s,e,{get:t[e],enumerable:!0})},Zs={};Xs(Zs,{initializeThemeState:()=>ns,pluckThemeFromContext:()=>os,useThemeParameters:()=>rs});var ss="themes",Js=`storybook/${ss}`,Qs="theme",to={},eo={REGISTER_THEMES:`${Js}/REGISTER_THEMES`};function os({globals:s}){return s[Qs]||""}function rs(){return Ws(ss,to)}function ns(s,t){Ks.getChannel().emit(eo.REGISTER_THEMES,{defaultTheme:t,themes:s})}var io="html",Vi=s=>s.split(" ").filter(Boolean),so=({themes:s,defaultTheme:t,parentSelector:e=io})=>(ns(Object.keys(s),t),(o,i)=>{let{themeOverride:r}=rs(),n=os(i);return Ys(()=>{let l=r||n||t,d=document.querySelector(e);if(!d)return;Object.entries(s).filter(([h])=>h!==l).forEach(([h,u])=>{let b=Vi(u);b.length>0&&d.classList.remove(...b)});let c=Vi(s[l]);c.length>0&&d.classList.add(...c)},[r,n,e]),o()}),oo={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};function q(s,t,e){return new Promise(o=>{if(e?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=s.animate(t,{...e,duration:ro()?0:e.duration});i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function Ri(s){return s=s.toString().toLowerCase(),s.indexOf("ms")>-1?parseFloat(s):s.indexOf("s")>-1?parseFloat(s)*1e3:parseFloat(s)}function ro(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function X(s){return Promise.all(s.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function Bi(s,t){return s.map(e=>({...e,height:e.height==="auto"?`${t}px`:e.height}))}const as=new Map,fi=new WeakMap;function ls(s){return s??{keyframes:[],options:{duration:0}}}function Ni(s,t){return t.toLowerCase()==="rtl"?{keyframes:s.rtlKeyframes||s.keyframes,options:s.options}:s}function A(s,t){as.set(s,ls(t))}function Ke(s,t,e){fi.set(s,{...fi.get(s),[t]:ls(e)})}function V(s,t,e){const o=fi.get(s);if(o?.[t])return Ni(o[t],e.dir);const i=as.get(t);return i?Ni(i,e.dir):{keyframes:[],options:{duration:0}}}class G{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}function ds(s){if(!s)return"";const t=s.assignedNodes({flatten:!0});let e="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(e+=o.textContent)}),e}const yi=new Set,no=new MutationObserver(ps),fe=new Map;let cs=document.documentElement.dir||"ltr",hs=document.documentElement.lang||navigator.language,se;no.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function us(...s){s.map(t=>{const e=t.$code.toLowerCase();fe.has(e)?fe.set(e,Object.assign(Object.assign({},fe.get(e)),t)):fe.set(e,t),se||(se=t)}),ps()}function ps(){cs=document.documentElement.dir||"ltr",hs=document.documentElement.lang||navigator.language,[...yi.keys()].map(s=>{typeof s.requestUpdate=="function"&&s.requestUpdate()})}let ao=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yi.add(this.host)}hostDisconnected(){yi.delete(this.host)}dir(){return`${this.host.dir||cs}`.toLowerCase()}lang(){return`${this.host.lang||hs}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),r=i?.language.toLowerCase(),n=(o=(e=i?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",l=fe.get(`${r}-${n}`),d=fe.get(r);return{locale:i,language:r,region:n,primary:l,secondary:d}}exists(t,e){var o;const{primary:i,secondary:r}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||r&&r[t]||e.includeFallback&&se&&se[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(i&&i[t])r=i[t];else if(se&&se[t])r=se[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};const ms={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(s,t)=>`Go to slide ${s} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:s=>s===0?"No options selected":s===1?"1 option selected":`${s} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:s=>`Slide ${s}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",fileButtonText:"Choose file",fileButtonTextMultiple:"Choose files",fileDragDrop:"Drop or choose file",menu:"Menu",notification:"Notification",numFilesSelected:s=>s===0?"No files chosen":`${s} files`,openMenu:"Open menu",rangeMax:"Maximum",rangeMin:"Minimum",sideNav:"Side navigation",success:"Success",warning:"Warning"};us(ms);class j extends ao{static{us(ms)}}function Z(s,t){return new Promise(e=>{function o(i){i.target===s&&(s.removeEventListener(t,o),e())}s.addEventListener(t,o)})}const lo=p`
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

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--syn-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--syn-font-size-medium);
    padding-inline-end: var(--syn-spacing-medium);
  }
`,co=p`
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
    color: var(--syn-typography-color-text);
    padding-block: calc(var(--syn-spacing-x-small) - var(--syn-panel-border-width));
    padding-inline-end: var(--syn-spacing-x-small);
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
`;var ho=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,le=(s,t,e,o)=>{for(var i=o>1?void 0:o?uo(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ho(t,e,i),i};const me=Object.assign(document.createElement("div"),{className:"syn-toast-stack"});class Yt extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"icon","suffix"),this.localize=new j(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}static{this.styles=[C,lo,co]}static{this.dependencies={"syn-icon-button":_e}}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await X(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=V(this,"alert.show",{dir:this.localize.dir()});await q(this.base,t,e),this.emit("syn-after-show")}else{this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),await X(this.base);const{keyframes:t,options:e}=V(this,"alert.hide",{dir:this.localize.dir()});await q(this.base,t,e),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}async toast(){return new Promise(t=>{me.parentElement===null&&document.body.append(me),me.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{me.removeChild(this),t(),me.querySelector("syn-alert")===null&&me.remove()},{once:!0})})}render(){return m`
      <div
        part="base"
        class=${w({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?m`
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
      </div>
    `}}le([f('[part~="base"]')],Yt.prototype,"base",2);le([a({type:Boolean,reflect:!0})],Yt.prototype,"open",2);le([a({type:Boolean,reflect:!0})],Yt.prototype,"closable",2);le([a({reflect:!0})],Yt.prototype,"variant",2);le([a({type:Number})],Yt.prototype,"duration",2);le([g("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1);le([g("duration")],Yt.prototype,"handleDurationChange",1);A("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});A("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Yt.define("syn-alert");const po=p`
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
`,mo=p`
  .badge {
    border: none;
    border-radius: var(--syn-border-radius-pill);
    font: var(--syn-body-x-small-bold);
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
`;var fo=Object.defineProperty,yo=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&fo(t,e,i),i};class fs extends k{constructor(){super(...arguments),this.localize=new j(this),this.variant="primary"}static{this.styles=[C,po,mo]}render(){return m`
      <span
        part="base"
        class=${w({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}}yo([a({reflect:!0})],fs.prototype,"variant");fs.define("syn-badge");const bo=p`
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
`,go=p`
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
`;var vo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,xe=(s,t,e,o)=>{for(var i=o>1?void 0:o?_o(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&vo(t,e,i),i};class de extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}static{this.styles=[C,bo,go]}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="syn-dropdown").length>0;this.renderType=this.href?"link":t?"drop-down":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return m`
      <div
        part="base"
        class=${w({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?m`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${_(this.target?this.target:void 0)}"
                rel=${_(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
          ${this.renderType==="button"?m`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}

          ${this.renderType==="drop-down"?m`
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
    `}}xe([f("slot:not([name])")],de.prototype,"defaultSlot",2);xe([S()],de.prototype,"renderType",2);xe([a()],de.prototype,"href",2);xe([a()],de.prototype,"target",2);xe([a()],de.prototype,"rel",2);xe([g("href",{waitUntilFirstUpdate:!0})],de.prototype,"hrefChanged",1);de.define("syn-breadcrumb-item");const wo=p`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,xo=p`
  /* Write custom CSS here */
`;var ko=Object.defineProperty,Ci=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&ko(t,e,i),i};class si extends k{constructor(){super(...arguments),this.localize=new j(this),this.separatorDir=this.localize.dir(),this.label=""}static{this.styles=[C,wo,xo]}static{this.dependencies={"syn-icon":_t}}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="syn-breadcrumb-item");t.forEach((e,o)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),m`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}}Ci([f("slot")],si.prototype,"defaultSlot");Ci([f('slot[name="separator"]')],si.prototype,"separatorSlot");Ci([a()],si.prototype,"label");si.define("syn-breadcrumb");const Co=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var zo=Object.defineProperty,zi=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&zo(t,e,i),i};class Be extends k{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=[C,Co]}handleFocus(t){Ae(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(t){Ae(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(t){Ae(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(t){Ae(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=Ae(e);i&&(i.toggleAttribute("data-syn-button-group__button",!0),i.toggleAttribute("data-syn-button-group__button--first",o===0),i.toggleAttribute("data-syn-button-group__button--inner",o>0&&o<t.length-1),i.toggleAttribute("data-syn-button-group__button--last",o===t.length-1),i.toggleAttribute("data-syn-button-group__button--radio",i.tagName.toLowerCase()==="syn-radio-button"))})}render(){return m`
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
    `}}zi([f("slot")],Be.prototype,"defaultSlot");zi([S()],Be.prototype,"disableRole");zi([a()],Be.prototype,"label");function Ae(s){const t="syn-button, syn-radio-button";return s.closest(t)??s.querySelector(t)}Be.define("syn-button-group");const Oe=new WeakMap,Te=new WeakMap,Ee=new WeakMap,ui=new WeakSet,Ye=new WeakMap;class Ft{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";if(this.host.isConnected&&!i&&!l&&typeof r=="string"&&r.length>0&&typeof n<"u"){if(n instanceof FileList){const d=n;for(const c of d)o.formData.append(r,c,c.name);return}Array.isArray(n)?n.forEach(d=>{o.formData.append(r,d.toString())}):o.formData.append(r,n.toString())}},this.handleFormSubmit=o=>{const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&Oe.get(this.form)?.forEach(n=>{this.setUserInteracted(n,!0)}),this.form&&!this.form.noValidate&&!i&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ye.set(this.host,[])},this.handleInteraction=o=>{const i=Ye.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{const i=o.form;if(i){const n=o.getRootNode().querySelector(`#${i}`);if(n)return n}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["syn-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ye.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ye.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Oe.has(this.form)?Oe.get(this.form).add(this.host):Oe.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Te.has(this.form)||(Te.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ee.has(this.form)||(Ee.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Oe.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Te.has(this.form)&&(this.form.reportValidity=Te.get(this.form),Te.delete(this.form)),Ee.has(this.form)&&(this.form.checkValidity=Ee.get(this.form),Ee.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ui.add(t):ui.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!ui.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}}const Ne=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),$o=Object.freeze({...Ne,valid:!1,valueMissing:!0}),ys=Object.freeze({...Ne,valid:!1,customError:!0}),So=p`
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
`,Ao=p`
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
`;class $i extends k{constructor(){super(...arguments),this.localize=new j(this)}static{this.styles=[C,So,Ao]}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const bs=p`
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
`,Oo=p`
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
    border-color:  none;
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
`;var To=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,B=(s,t,e,o)=>{for(var i=o>1?void 0:o?Eo(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&To(t,e,i),i};class R extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new G(this,"[default]","prefix","suffix"),this.localize=new j(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}static{this.styles=[C,bs,Oo]}static{this.dependencies={"syn-icon":_t,"syn-spinner":$i}}get validity(){return this.isButton()?this.button.validity:Ne}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){const t=ds(this.defaultSlot).trim(),e=this.defaultSlot.assignedElements({flatten:!0}),o=e.length===1&&e[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=o&&t===""}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Ie`a`:Ie`button`;return Q`
      <${e}
        part="base"
        class=${w({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(t?void 0:this.disabled)}
        type=${_(t?void 0:this.type)}
        title=${this.title}
        name=${_(t?void 0:this.name)}
        value=${_(t?void 0:this.value)}
        href=${_(t?this.href:void 0)}
        target=${_(t?this.target:void 0)}
        download=${_(t?this.download:void 0)}
        rel=${_(t?this.rel:void 0)}
        role=${_(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${w({button__label:!0,"button__icon-only":this.iconOnly})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Q` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?Q`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${e}>
    `}}B([f(".button")],R.prototype,"button",2);B([f("slot:not([name])")],R.prototype,"defaultSlot",2);B([S()],R.prototype,"iconOnly",2);B([S()],R.prototype,"hasFocus",2);B([S()],R.prototype,"invalid",2);B([a()],R.prototype,"title",2);B([a({reflect:!0})],R.prototype,"variant",2);B([a({reflect:!0})],R.prototype,"size",2);B([a({type:Boolean,reflect:!0})],R.prototype,"caret",2);B([a({type:Boolean,reflect:!0})],R.prototype,"disabled",2);B([a({type:Boolean,reflect:!0})],R.prototype,"loading",2);B([a()],R.prototype,"type",2);B([a()],R.prototype,"name",2);B([a()],R.prototype,"value",2);B([a()],R.prototype,"href",2);B([a()],R.prototype,"target",2);B([a()],R.prototype,"rel",2);B([a()],R.prototype,"download",2);B([a()],R.prototype,"form",2);B([a({attribute:"formaction"})],R.prototype,"formAction",2);B([a({attribute:"formenctype"})],R.prototype,"formEnctype",2);B([a({attribute:"formmethod"})],R.prototype,"formMethod",2);B([a({attribute:"formnovalidate",type:Boolean})],R.prototype,"formNoValidate",2);B([a({attribute:"formtarget"})],R.prototype,"formTarget",2);B([g("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1);R.define("syn-button");const Do=p`
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
`,Po=p`
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
  .card__body,
  .card__body::slotted(*) {
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

`;var Io=Object.defineProperty,Lo=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&Io(t,e,i),i};class gs extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"footer","header","image"),this.sharp=!1}static{this.styles=[C,Do,Po]}render(){return m`
      <div
        part="base"
        class=${w({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}Lo([a({type:Boolean,reflect:!0})],gs.prototype,"sharp");gs.define("syn-card");const ce=(s="value")=>(t,e)=>{const o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,n,l){const d=o.getPropertyOptions(s),c=typeof d.attribute=="string"?d.attribute:s;if(r===c){const h=d.converter||Fi,b=(typeof h=="function"?h:h?.fromAttribute??Fi.fromAttribute)(l,d.type);this[s]!==b&&(this[e]=b)}i.call(this,r,n,l)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=Re(class extends ii{constructor(s){if(super(s),s.type!==At.PROPERTY&&s.type!==At.ATTRIBUTE&&s.type!==At.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ts(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===re||t===ge)return t;const e=s.element,o=s.name;if(s.type===At.PROPERTY){if(t===e[o])return re}else if(s.type===At.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(o))return re}else if(s.type===At.ATTRIBUTE&&e.getAttribute(o)===t+"")return re;return Ms(s),t}}),Gt=p`
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
`,Xt=p` 

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

  .form-control--small.form-control--has-prefix .input__control  {
    padding: var(--syn-spacing-3x-small) 0;
  }

  .form-control--has-prefix.form-control--medium .input__control {
    padding: var(--syn-spacing-x-small) 0;
  }

  .form-control--large.form-control--has-prefix .input__control {
   padding: var(--syn-input-spacing-small) 0;
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
`,Mo=p`
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
`,Fo=p`
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

  /* Disabled */
  .checkbox--disabled .checkbox__label {
    color: var(--syn-color-neutral-700);
  }
`;var Vo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,ot=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ro(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Vo(t,e,i),i};class et extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new G(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}static{this.styles=[C,Gt,Mo,Xt,Fo]}static{this.dependencies={"syn-icon":_t}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${w({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${w({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_(this.value)}
            .indeterminate=${Fe(this.indeterminate)}
            .checked=${Fe(this.checked)}
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
            ${this.checked?m`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?m`
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
    `}}ot([f('input[type="checkbox"]')],et.prototype,"input",2);ot([S()],et.prototype,"hasFocus",2);ot([a()],et.prototype,"title",2);ot([a()],et.prototype,"name",2);ot([a()],et.prototype,"value",2);ot([a({reflect:!0})],et.prototype,"size",2);ot([a({type:Boolean,reflect:!0})],et.prototype,"disabled",2);ot([a({type:Boolean,reflect:!0})],et.prototype,"checked",2);ot([a({type:Boolean,reflect:!0})],et.prototype,"indeterminate",2);ot([ce("checked")],et.prototype,"defaultChecked",2);ot([a({reflect:!0})],et.prototype,"form",2);ot([a({type:Boolean,reflect:!0})],et.prototype,"required",2);ot([a({attribute:"help-text"})],et.prototype,"helpText",2);ot([g("disabled",{waitUntilFirstUpdate:!0})],et.prototype,"handleDisabledChange",1);ot([g(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],et.prototype,"handleStateChange",1);et.define("syn-checkbox");const Bo=p`
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
`,No=p`
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
`;var jo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,Tt=(s,t,e,o)=>{for(var i=o>1?void 0:o?Uo(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&jo(t,e,i),i};class kt extends k{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.disabled=!1,this.contained=!1,this.size="medium"}static{this.styles=[C,Bo,No]}static{this.dependencies={"syn-icon":_t}}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("syn-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await X(this.body);const{keyframes:e,options:o}=V(this,"details.show",{dir:this.localize.dir()});await q(this.body,Bi(e,this.body.scrollHeight),o),this.body.style.height="auto",this.emit("syn-after-show")}else{if(this.emit("syn-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await X(this.body);const{keyframes:e,options:o}=V(this,"details.hide",{dir:this.localize.dir()});await q(this.body,Bi(e,this.body.scrollHeight),o),this.body.style.height="auto",this.details.open=!1,this.emit("syn-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Z(this,"syn-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Z(this,"syn-after-hide")}render(){return m`
      <details
        part="base"
        class=${w({details:!0,"details--size-medium":this.size==="medium","details--size-large":this.size==="large","details--open":this.open,"details--disabled":this.disabled,"details--contained":this.contained})}
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

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}}Tt([f(".details")],kt.prototype,"details",2);Tt([f(".details__header")],kt.prototype,"header",2);Tt([f(".details__body")],kt.prototype,"body",2);Tt([f(".details__expand-icon-slot")],kt.prototype,"expandIconSlot",2);Tt([a({type:Boolean,reflect:!0})],kt.prototype,"open",2);Tt([a()],kt.prototype,"summary",2);Tt([a({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);Tt([a({type:Boolean,reflect:!0})],kt.prototype,"contained",2);Tt([a({reflect:!0})],kt.prototype,"size",2);Tt([g("open",{waitUntilFirstUpdate:!0})],kt.prototype,"handleOpenChange",1);A("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});A("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});kt.define("syn-details");function Ho(s,t){return{top:Math.round(s.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(s.getBoundingClientRect().left-t.getBoundingClientRect().left)}}const bi=new Set;function qo(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}function Wo(){const s=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(s)||!s?0:s}function Me(s){if(bi.add(s),!document.documentElement.classList.contains("syn-scroll-lock")){const t=qo()+Wo();document.documentElement.classList.add("syn-scroll-lock"),document.documentElement.style.setProperty("--syn-scroll-lock-size",`${t}px`)}}function ye(s){bi.delete(s),bi.size===0&&(document.documentElement.classList.remove("syn-scroll-lock"),document.documentElement.style.removeProperty("--syn-scroll-lock-size"))}function gi(s,t,e="vertical",o="smooth"){const i=Ho(s,t),r=i.top+t.scrollTop,n=i.left+t.scrollLeft,l=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(n<l?t.scrollTo({left:n,behavior:o}):n+s.clientWidth>d&&t.scrollTo({left:n-t.offsetWidth+s.clientWidth,behavior:o})),(e==="vertical"||e==="both")&&(r<c?t.scrollTo({top:r,behavior:o}):r+s.clientHeight>h&&t.scrollTo({top:r-t.offsetHeight+s.clientHeight,behavior:o}))}function*Si(s=document.activeElement){s!=null&&(yield s,"shadowRoot"in s&&s.shadowRoot&&s.shadowRoot.mode!=="closed"&&(yield*Si(s.shadowRoot.activeElement)))}function Ko(){return[...Si()].pop()}const ji=new WeakMap;function vs(s){let t=ji.get(s);return t||(t=window.getComputedStyle(s,null),ji.set(s,t)),t}function Yo(s){if(typeof s.checkVisibility=="function")return s.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=vs(s);return t.visibility!=="hidden"&&t.display!=="none"}function Go(s){const t=vs(s),{overflowY:e,overflowX:o}=t;return e==="scroll"||o==="scroll"?!0:e!=="auto"||o!=="auto"?!1:s.scrollHeight>s.clientHeight&&e==="auto"||s.scrollWidth>s.clientWidth&&o==="auto"}function Xo(s){const t=s.tagName.toLowerCase(),e=Number(s.getAttribute("tabindex"));return s.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||s.hasAttribute("disabled")||s.closest("[inert]")||t==="input"&&s.getAttribute("type")==="radio"&&!s.hasAttribute("checked")||!Yo(s)?!1:(t==="audio"||t==="video")&&s.hasAttribute("controls")||s.hasAttribute("tabindex")||s.hasAttribute("contenteditable")&&s.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Go(s)}function Zo(s){const t=vi(s),e=t[0]??null,o=t[t.length-1]??null;return{start:e,end:o}}function Jo(s,t){return s.getRootNode({composed:!0})?.host!==t}function vi(s){const t=new WeakMap,e=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!e.includes(i)&&Xo(i)&&e.push(i),i instanceof HTMLSlotElement&&Jo(i,s)&&i.assignedElements({flatten:!0}).forEach(r=>{o(r)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}for(const r of i.children)o(r)}return o(s),e.sort((i,r)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-n})}let De=[];class _s{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=Ko();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=vi(this.element);let r=i.findIndex(l=>l===o);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){r+n>=i.length?r=0:r+n<0?r=i.length-1:r+=n,this.previousFocus=this.currentFocus;const l=i[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const d=[...Si()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){De.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){De=De.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return De[De.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=vi(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}const Qo=p`
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
`,tr=p`
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
`;var er=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,he=(s,t,e,o)=>{for(var i=o>1?void 0:o?ir(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&er(t,e,i),i};class Zt extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"footer"),this.localize=new j(this),this.modal=new _s(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[C,Qo,tr]}static{this.dependencies={"syn-icon-button":_e}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Me(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ye(this),this.closeWatcher?.destroy()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=V(this,"dialog.denyClose",{dir:this.localize.dir()});q(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Me(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([X(this.dialog),X(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=V(this,"dialog.show",{dir:this.localize.dir()}),o=V(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([q(this.panel,e.keyframes,e.options),q(this.overlay,o.keyframes,o.options)]),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([X(this.dialog),X(this.overlay)]);const t=V(this,"dialog.hide",{dir:this.localize.dir()}),e=V(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([q(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),q(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ye(this);const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return m`
      <div
        part="base"
        class=${w({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
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
    `}}he([f(".dialog")],Zt.prototype,"dialog",2);he([f(".dialog__panel")],Zt.prototype,"panel",2);he([f(".dialog__overlay")],Zt.prototype,"overlay",2);he([a({type:Boolean,reflect:!0})],Zt.prototype,"open",2);he([a({reflect:!0})],Zt.prototype,"label",2);he([a({attribute:"no-header",type:Boolean,reflect:!0})],Zt.prototype,"noHeader",2);he([g("open",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleOpenChange",1);A("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});A("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});A("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});A("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});A("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Zt.define("syn-dialog");const sr=p`
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
`,or=p`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var rr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,ws=(s,t,e,o)=>{for(var i=o>1?void 0:o?nr(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&rr(t,e,i),i};class Jt extends k{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[C,sr,or]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}ws([a({type:Boolean,reflect:!0})],Jt.prototype,"vertical",2);ws([g("vertical")],Jt.prototype,"handleVerticalChange",1);Jt.define("syn-divider");function Ui(s){return s.charAt(0).toUpperCase()+s.slice(1)}const ar=p`
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
`,lr=p`
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
`;var dr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,Et=(s,t,e,o)=>{for(var i=o>1?void 0:o?cr(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&dr(t,e,i),i};class wt extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"footer"),this.localize=new j(this),this.modal=new _s(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=[C,ar,lr]}static{this.dependencies={"syn-icon-button":_e}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Me(this)))}disconnectedCallback(){super.disconnectedCallback(),ye(this),this.closeWatcher?.destroy()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=V(this,"drawer.denyClose",{dir:this.localize.dir()});q(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Me(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([X(this.drawer),X(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=V(this,`drawer.show${Ui(this.placement)}`,{dir:this.localize.dir()}),o=V(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([q(this.panel,e.keyframes,e.options),q(this.overlay,o.keyframes,o.options)]),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ye(this)),await Promise.all([X(this.drawer),X(this.overlay)]);const t=V(this,`drawer.hide${Ui(this.placement)}`,{dir:this.localize.dir()}),e=V(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([q(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),q(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Me(this)),this.open&&this.contained&&(this.modal.deactivate(),ye(this))}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return m`
      <div
        part="base"
        class=${w({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":m`
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
    `}}Et([f(".drawer")],wt.prototype,"drawer",2);Et([f(".drawer__panel")],wt.prototype,"panel",2);Et([f(".drawer__overlay")],wt.prototype,"overlay",2);Et([a({type:Boolean,reflect:!0})],wt.prototype,"open",2);Et([a({reflect:!0})],wt.prototype,"label",2);Et([a({reflect:!0})],wt.prototype,"placement",2);Et([a({type:Boolean,reflect:!0})],wt.prototype,"contained",2);Et([a({attribute:"no-header",type:Boolean,reflect:!0})],wt.prototype,"noHeader",2);Et([g("open",{waitUntilFirstUpdate:!0})],wt.prototype,"handleOpenChange",1);Et([g("contained",{waitUntilFirstUpdate:!0})],wt.prototype,"handleNoModalChange",1);A("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});A("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});A("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});A("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});A("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});A("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});A("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});A("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});A("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});A("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});A("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});wt.define("syn-drawer");const Ht=Math.min,mt=Math.max,Je=Math.round,Ge=Math.floor,qt=s=>({x:s,y:s}),hr={left:"right",right:"left",bottom:"top",top:"bottom"},ur={start:"end",end:"start"};function _i(s,t,e){return mt(s,Ht(t,e))}function ke(s,t){return typeof s=="function"?s(t):s}function Wt(s){return s.split("-")[0]}function Ce(s){return s.split("-")[1]}function xs(s){return s==="x"?"y":"x"}function Ai(s){return s==="y"?"height":"width"}function je(s){return["top","bottom"].includes(Wt(s))?"y":"x"}function Oi(s){return xs(je(s))}function pr(s,t,e){e===void 0&&(e=!1);const o=Ce(s),i=Oi(s),r=Ai(i);let n=i==="x"?o===(e?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(n=Qe(n)),[n,Qe(n)]}function mr(s){const t=Qe(s);return[wi(s),t,wi(t)]}function wi(s){return s.replace(/start|end/g,t=>ur[t])}function fr(s,t,e){const o=["left","right"],i=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(s){case"top":case"bottom":return e?t?i:o:t?o:i;case"left":case"right":return t?r:n;default:return[]}}function yr(s,t,e,o){const i=Ce(s);let r=fr(Wt(s),e==="start",o);return i&&(r=r.map(n=>n+"-"+i),t&&(r=r.concat(r.map(wi)))),r}function Qe(s){return s.replace(/left|right|bottom|top/g,t=>hr[t])}function br(s){return{top:0,right:0,bottom:0,left:0,...s}}function ks(s){return typeof s!="number"?br(s):{top:s,right:s,bottom:s,left:s}}function ti(s){return{...s,top:s.y,left:s.x,right:s.x+s.width,bottom:s.y+s.height}}function Hi(s,t,e){let{reference:o,floating:i}=s;const r=je(t),n=Oi(t),l=Ai(n),d=Wt(t),c=r==="y",h=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,b=o[l]/2-i[l]/2;let y;switch(d){case"top":y={x:h,y:o.y-i.height};break;case"bottom":y={x:h,y:o.y+o.height};break;case"right":y={x:o.x+o.width,y:u};break;case"left":y={x:o.x-i.width,y:u};break;default:y={x:o.x,y:o.y}}switch(Ce(t)){case"start":y[n]-=b*(e&&c?-1:1);break;case"end":y[n]+=b*(e&&c?-1:1);break}return y}const gr=async(s,t,e)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:n}=e,l=r.filter(Boolean),d=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:s,floating:t,strategy:i}),{x:h,y:u}=Hi(c,o,d),b=o,y={},v=0;for(let x=0;x<l.length;x++){const{name:T,fn:z}=l[x],{x:E,y:M,data:K,reset:W}=await z({x:h,y:u,initialPlacement:o,placement:b,strategy:i,middlewareData:y,rects:c,platform:n,elements:{reference:s,floating:t}});h=E??h,u=M??u,y={...y,[T]:{...y[T],...K}},W&&v<=50&&(v++,typeof W=="object"&&(W.placement&&(b=W.placement),W.rects&&(c=W.rects===!0?await n.getElementRects({reference:s,floating:t,strategy:i}):W.rects),{x:h,y:u}=Hi(c,b,d)),x=-1)}return{x:h,y:u,placement:b,strategy:i,middlewareData:y}};async function Ti(s,t){var e;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:n,elements:l,strategy:d}=s,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:y=0}=ke(t,s),v=ks(y),T=l[b?u==="floating"?"reference":"floating":u],z=ti(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(T)))==null||e?T:T.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:d})),E=u==="floating"?{...n.floating,x:o,y:i}:n.reference,M=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),K=await(r.isElement==null?void 0:r.isElement(M))?await(r.getScale==null?void 0:r.getScale(M))||{x:1,y:1}:{x:1,y:1},W=ti(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:E,offsetParent:M,strategy:d}):E);return{top:(z.top-W.top+v.top)/K.y,bottom:(W.bottom-z.bottom+v.bottom)/K.y,left:(z.left-W.left+v.left)/K.x,right:(W.right-z.right+v.right)/K.x}}const vr=s=>({name:"arrow",options:s,async fn(t){const{x:e,y:o,placement:i,rects:r,platform:n,elements:l,middlewareData:d}=t,{element:c,padding:h=0}=ke(s,t)||{};if(c==null)return{};const u=ks(h),b={x:e,y:o},y=Oi(i),v=Ai(y),x=await n.getDimensions(c),T=y==="y",z=T?"top":"left",E=T?"bottom":"right",M=T?"clientHeight":"clientWidth",K=r.reference[v]+r.reference[y]-b[y]-r.floating[v],W=b[y]-r.reference[y],Y=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let ut=Y?Y[M]:0;(!ut||!await(n.isElement==null?void 0:n.isElement(Y)))&&(ut=l.floating[M]||r.floating[v]);const zt=K/2-W/2,Ut=ut/2-x[v]/2-1,ze=Ht(u[z],Ut),$e=Ht(u[E],Ut),gt=ze,Se=ut-x[v]-$e,pt=ut/2-x[v]/2+zt,$t=_i(gt,pt,Se),St=!d.arrow&&Ce(i)!=null&&pt!==$t&&r.reference[v]/2-(pt<gt?ze:$e)-x[v]/2<0,Lt=St?pt<gt?pt-gt:pt-Se:0;return{[y]:b[y]+Lt,data:{[y]:$t,centerOffset:pt-$t-Lt,...St&&{alignmentOffset:Lt}},reset:St}}}),_r=function(s){return s===void 0&&(s={}),{name:"flip",options:s,async fn(t){var e,o;const{placement:i,middlewareData:r,rects:n,initialPlacement:l,platform:d,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:b,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...T}=ke(s,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const z=Wt(i),E=Wt(l)===l,M=await(d.isRTL==null?void 0:d.isRTL(c.floating)),K=b||(E||!x?[Qe(l)]:mr(l));!b&&v!=="none"&&K.push(...yr(l,x,v,M));const W=[l,...K],Y=await Ti(t,T),ut=[];let zt=((o=r.flip)==null?void 0:o.overflows)||[];if(h&&ut.push(Y[z]),u){const gt=pr(i,n,M);ut.push(Y[gt[0]],Y[gt[1]])}if(zt=[...zt,{placement:i,overflows:ut}],!ut.every(gt=>gt<=0)){var Ut,ze;const gt=(((Ut=r.flip)==null?void 0:Ut.index)||0)+1,Se=W[gt];if(Se)return{data:{index:gt,overflows:zt},reset:{placement:Se}};let pt=(ze=zt.filter($t=>$t.overflows[0]<=0).sort(($t,St)=>$t.overflows[1]-St.overflows[1])[0])==null?void 0:ze.placement;if(!pt)switch(y){case"bestFit":{var $e;const $t=($e=zt.map(St=>[St.placement,St.overflows.filter(Lt=>Lt>0).reduce((Lt,Ls)=>Lt+Ls,0)]).sort((St,Lt)=>St[1]-Lt[1])[0])==null?void 0:$e[0];$t&&(pt=$t);break}case"initialPlacement":pt=l;break}if(i!==pt)return{reset:{placement:pt}}}return{}}}};async function wr(s,t){const{placement:e,platform:o,elements:i}=s,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),n=Wt(e),l=Ce(e),d=je(e)==="y",c=["left","top"].includes(n)?-1:1,h=r&&d?-1:1,u=ke(t,s);let{mainAxis:b,crossAxis:y,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof v=="number"&&(y=l==="end"?v*-1:v),d?{x:y*h,y:b*c}:{x:b*c,y:y*h}}const xr=function(s){return s===void 0&&(s=0),{name:"offset",options:s,async fn(t){var e,o;const{x:i,y:r,placement:n,middlewareData:l}=t,d=await wr(t,s);return n===((e=l.offset)==null?void 0:e.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+d.x,y:r+d.y,data:{...d,placement:n}}}}},kr=function(s){return s===void 0&&(s={}),{name:"shift",options:s,async fn(t){const{x:e,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:T=>{let{x:z,y:E}=T;return{x:z,y:E}}},...d}=ke(s,t),c={x:e,y:o},h=await Ti(t,d),u=je(Wt(i)),b=xs(u);let y=c[b],v=c[u];if(r){const T=b==="y"?"top":"left",z=b==="y"?"bottom":"right",E=y+h[T],M=y-h[z];y=_i(E,y,M)}if(n){const T=u==="y"?"top":"left",z=u==="y"?"bottom":"right",E=v+h[T],M=v-h[z];v=_i(E,v,M)}const x=l.fn({...t,[b]:y,[u]:v});return{...x,data:{x:x.x-e,y:x.y-o}}}}},Cr=function(s){return s===void 0&&(s={}),{name:"size",options:s,async fn(t){const{placement:e,rects:o,platform:i,elements:r}=t,{apply:n=()=>{},...l}=ke(s,t),d=await Ti(t,l),c=Wt(e),h=Ce(e),u=je(e)==="y",{width:b,height:y}=o.floating;let v,x;c==="top"||c==="bottom"?(v=c,x=h===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(x=c,v=h==="end"?"top":"bottom");const T=y-d[v],z=b-d[x],E=!t.middlewareData.shift;let M=T,K=z;if(u){const Y=b-d.left-d.right;K=h||E?Ht(z,Y):Y}else{const Y=y-d.top-d.bottom;M=h||E?Ht(T,Y):Y}if(E&&!h){const Y=mt(d.left,0),ut=mt(d.right,0),zt=mt(d.top,0),Ut=mt(d.bottom,0);u?K=b-2*(Y!==0||ut!==0?Y+ut:mt(d.left,d.right)):M=y-2*(zt!==0||Ut!==0?zt+Ut:mt(d.top,d.bottom))}await n({...t,availableWidth:K,availableHeight:M});const W=await i.getDimensions(r.floating);return b!==W.width||y!==W.height?{reset:{rects:!0}}:{}}}};function Kt(s){return Cs(s)?(s.nodeName||"").toLowerCase():"#document"}function ft(s){var t;return(s==null||(t=s.ownerDocument)==null?void 0:t.defaultView)||window}function Vt(s){var t;return(t=(Cs(s)?s.ownerDocument:s.document)||window.document)==null?void 0:t.documentElement}function Cs(s){return s instanceof Node||s instanceof ft(s).Node}function Mt(s){return s instanceof Element||s instanceof ft(s).Element}function Ot(s){return s instanceof HTMLElement||s instanceof ft(s).HTMLElement}function qi(s){return typeof ShadowRoot>"u"?!1:s instanceof ShadowRoot||s instanceof ft(s).ShadowRoot}function Ue(s){const{overflow:t,overflowX:e,overflowY:o,display:i}=vt(s);return/auto|scroll|overlay|hidden|clip/.test(t+o+e)&&!["inline","contents"].includes(i)}function zr(s){return["table","td","th"].includes(Kt(s))}function Ei(s){const t=Di(),e=vt(s);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(e.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(e.contain||"").includes(o))}function $r(s){let t=ve(s);for(;Ot(t)&&!oi(t);){if(Ei(t))return t;t=ve(t)}return null}function Di(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function oi(s){return["html","body","#document"].includes(Kt(s))}function vt(s){return ft(s).getComputedStyle(s)}function ri(s){return Mt(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function ve(s){if(Kt(s)==="html")return s;const t=s.assignedSlot||s.parentNode||qi(s)&&s.host||Vt(s);return qi(t)?t.host:t}function zs(s){const t=ve(s);return oi(t)?s.ownerDocument?s.ownerDocument.body:s.body:Ot(t)&&Ue(t)?t:zs(t)}function Ve(s,t,e){var o;t===void 0&&(t=[]),e===void 0&&(e=!0);const i=zs(s),r=i===((o=s.ownerDocument)==null?void 0:o.body),n=ft(i);return r?t.concat(n,n.visualViewport||[],Ue(i)?i:[],n.frameElement&&e?Ve(n.frameElement):[]):t.concat(i,Ve(i,[],e))}function $s(s){const t=vt(s);let e=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=Ot(s),r=i?s.offsetWidth:e,n=i?s.offsetHeight:o,l=Je(e)!==r||Je(o)!==n;return l&&(e=r,o=n),{width:e,height:o,$:l}}function Pi(s){return Mt(s)?s:s.contextElement}function be(s){const t=Pi(s);if(!Ot(t))return qt(1);const e=t.getBoundingClientRect(),{width:o,height:i,$:r}=$s(t);let n=(r?Je(e.width):e.width)/o,l=(r?Je(e.height):e.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const Sr=qt(0);function Ss(s){const t=ft(s);return!Di()||!t.visualViewport?Sr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ar(s,t,e){return t===void 0&&(t=!1),!e||t&&e!==ft(s)?!1:t}function ne(s,t,e,o){t===void 0&&(t=!1),e===void 0&&(e=!1);const i=s.getBoundingClientRect(),r=Pi(s);let n=qt(1);t&&(o?Mt(o)&&(n=be(o)):n=be(s));const l=Ar(r,e,o)?Ss(r):qt(0);let d=(i.left+l.x)/n.x,c=(i.top+l.y)/n.y,h=i.width/n.x,u=i.height/n.y;if(r){const b=ft(r),y=o&&Mt(o)?ft(o):o;let v=b,x=v.frameElement;for(;x&&o&&y!==v;){const T=be(x),z=x.getBoundingClientRect(),E=vt(x),M=z.left+(x.clientLeft+parseFloat(E.paddingLeft))*T.x,K=z.top+(x.clientTop+parseFloat(E.paddingTop))*T.y;d*=T.x,c*=T.y,h*=T.x,u*=T.y,d+=M,c+=K,v=ft(x),x=v.frameElement}}return ti({width:h,height:u,x:d,y:c})}const Or=[":popover-open",":modal"];function As(s){return Or.some(t=>{try{return s.matches(t)}catch{return!1}})}function Tr(s){let{elements:t,rect:e,offsetParent:o,strategy:i}=s;const r=i==="fixed",n=Vt(o),l=t?As(t.floating):!1;if(o===n||l&&r)return e;let d={scrollLeft:0,scrollTop:0},c=qt(1);const h=qt(0),u=Ot(o);if((u||!u&&!r)&&((Kt(o)!=="body"||Ue(n))&&(d=ri(o)),Ot(o))){const b=ne(o);c=be(o),h.x=b.x+o.clientLeft,h.y=b.y+o.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-d.scrollLeft*c.x+h.x,y:e.y*c.y-d.scrollTop*c.y+h.y}}function Er(s){return Array.from(s.getClientRects())}function Os(s){return ne(Vt(s)).left+ri(s).scrollLeft}function Dr(s){const t=Vt(s),e=ri(s),o=s.ownerDocument.body,i=mt(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=mt(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let n=-e.scrollLeft+Os(s);const l=-e.scrollTop;return vt(o).direction==="rtl"&&(n+=mt(t.clientWidth,o.clientWidth)-i),{width:i,height:r,x:n,y:l}}function Pr(s,t){const e=ft(s),o=Vt(s),i=e.visualViewport;let r=o.clientWidth,n=o.clientHeight,l=0,d=0;if(i){r=i.width,n=i.height;const c=Di();(!c||c&&t==="fixed")&&(l=i.offsetLeft,d=i.offsetTop)}return{width:r,height:n,x:l,y:d}}function Ir(s,t){const e=ne(s,!0,t==="fixed"),o=e.top+s.clientTop,i=e.left+s.clientLeft,r=Ot(s)?be(s):qt(1),n=s.clientWidth*r.x,l=s.clientHeight*r.y,d=i*r.x,c=o*r.y;return{width:n,height:l,x:d,y:c}}function Wi(s,t,e){let o;if(t==="viewport")o=Pr(s,e);else if(t==="document")o=Dr(Vt(s));else if(Mt(t))o=Ir(t,e);else{const i=Ss(s);o={...t,x:t.x-i.x,y:t.y-i.y}}return ti(o)}function Ts(s,t){const e=ve(s);return e===t||!Mt(e)||oi(e)?!1:vt(e).position==="fixed"||Ts(e,t)}function Lr(s,t){const e=t.get(s);if(e)return e;let o=Ve(s,[],!1).filter(l=>Mt(l)&&Kt(l)!=="body"),i=null;const r=vt(s).position==="fixed";let n=r?ve(s):s;for(;Mt(n)&&!oi(n);){const l=vt(n),d=Ei(n);!d&&l.position==="fixed"&&(i=null),(r?!d&&!i:!d&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ue(n)&&!d&&Ts(s,n))?o=o.filter(h=>h!==n):i=l,n=ve(n)}return t.set(s,o),o}function Mr(s){let{element:t,boundary:e,rootBoundary:o,strategy:i}=s;const n=[...e==="clippingAncestors"?Lr(t,this._c):[].concat(e),o],l=n[0],d=n.reduce((c,h)=>{const u=Wi(t,h,i);return c.top=mt(u.top,c.top),c.right=Ht(u.right,c.right),c.bottom=Ht(u.bottom,c.bottom),c.left=mt(u.left,c.left),c},Wi(t,l,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Fr(s){const{width:t,height:e}=$s(s);return{width:t,height:e}}function Vr(s,t,e){const o=Ot(t),i=Vt(t),r=e==="fixed",n=ne(s,!0,r,t);let l={scrollLeft:0,scrollTop:0};const d=qt(0);if(o||!o&&!r)if((Kt(t)!=="body"||Ue(i))&&(l=ri(t)),o){const u=ne(t,!0,r,t);d.x=u.x+t.clientLeft,d.y=u.y+t.clientTop}else i&&(d.x=Os(i));const c=n.left+l.scrollLeft-d.x,h=n.top+l.scrollTop-d.y;return{x:c,y:h,width:n.width,height:n.height}}function Ki(s,t){return!Ot(s)||vt(s).position==="fixed"?null:t?t(s):s.offsetParent}function Es(s,t){const e=ft(s);if(!Ot(s)||As(s))return e;let o=Ki(s,t);for(;o&&zr(o)&&vt(o).position==="static";)o=Ki(o,t);return o&&(Kt(o)==="html"||Kt(o)==="body"&&vt(o).position==="static"&&!Ei(o))?e:o||$r(s)||e}const Rr=async function(s){const t=this.getOffsetParent||Es,e=this.getDimensions;return{reference:Vr(s.reference,await t(s.floating),s.strategy),floating:{x:0,y:0,...await e(s.floating)}}};function Br(s){return vt(s).direction==="rtl"}const Xe={convertOffsetParentRelativeRectToViewportRelativeRect:Tr,getDocumentElement:Vt,getClippingRect:Mr,getOffsetParent:Es,getElementRects:Rr,getClientRects:Er,getDimensions:Fr,getScale:be,isElement:Mt,isRTL:Br};function Nr(s,t){let e=null,o;const i=Vt(s);function r(){var l;clearTimeout(o),(l=e)==null||l.disconnect(),e=null}function n(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),r();const{left:c,top:h,width:u,height:b}=s.getBoundingClientRect();if(l||t(),!u||!b)return;const y=Ge(h),v=Ge(i.clientWidth-(c+u)),x=Ge(i.clientHeight-(h+b)),T=Ge(c),E={rootMargin:-y+"px "+-v+"px "+-x+"px "+-T+"px",threshold:mt(0,Ht(1,d))||1};let M=!0;function K(W){const Y=W[0].intersectionRatio;if(Y!==d){if(!M)return n();Y?n(!1,Y):o=setTimeout(()=>{n(!1,1e-7)},100)}M=!1}try{e=new IntersectionObserver(K,{...E,root:i.ownerDocument})}catch{e=new IntersectionObserver(K,E)}e.observe(s)}return n(!0),r}function jr(s,t,e,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,c=Pi(s),h=i||r?[...c?Ve(c):[],...Ve(t)]:[];h.forEach(z=>{i&&z.addEventListener("scroll",e,{passive:!0}),r&&z.addEventListener("resize",e)});const u=c&&l?Nr(c,e):null;let b=-1,y=null;n&&(y=new ResizeObserver(z=>{let[E]=z;E&&E.target===c&&y&&(y.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var M;(M=y)==null||M.observe(t)})),e()}),c&&!d&&y.observe(c),y.observe(t));let v,x=d?ne(s):null;d&&T();function T(){const z=ne(s);x&&(z.x!==x.x||z.y!==x.y||z.width!==x.width||z.height!==x.height)&&e(),x=z,v=requestAnimationFrame(T)}return e(),()=>{var z;h.forEach(E=>{i&&E.removeEventListener("scroll",e),r&&E.removeEventListener("resize",e)}),u?.(),(z=y)==null||z.disconnect(),y=null,d&&cancelAnimationFrame(v)}}const Ur=kr,Hr=_r,Yi=Cr,qr=vr,Wr=(s,t,e)=>{const o=new Map,i={platform:Xe,...e},r={...i.platform,_c:o};return gr(s,t,{...i,platform:r})};function Kr(s){return Yr(s)}function pi(s){return s.assignedSlot?s.assignedSlot:s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}function Yr(s){for(let t=s;t;t=pi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=pi(s);t;t=pi(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if(e.display!=="contents"&&(e.position!=="static"||e.filter!=="none"||t.tagName==="BODY"))return t}return null}const Gr=p`
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
`;var Xr=Object.defineProperty,U=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&Xr(t,e,i),i};function Zr(s){return s!==null&&typeof s=="object"&&"getBoundingClientRect"in s&&("contextElement"in s?s instanceof Element:!0)}class P extends k{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,n=0,l=0,d=0,c=0,h=0,u=0;o?t.top<e.top?(i=t.left,r=t.bottom,n=t.right,l=t.bottom,d=e.left,c=e.top,h=e.right,u=e.top):(i=e.left,r=e.bottom,n=e.right,l=e.bottom,d=t.left,c=t.top,h=t.right,u=t.top):t.left<e.left?(i=t.right,r=t.top,n=e.left,l=e.top,d=t.right,c=t.bottom,h=e.left,u=e.bottom):(i=e.right,r=e.top,n=t.left,l=t.top,d=e.right,c=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}static{this.styles=[C,Gr]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Zr(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=jr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[xr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Yi({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Hr({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ur({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Yi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(qr({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Xe.getOffsetParent(o,Kr):Xe.getOffsetParent;Wr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...Xe,getOffsetParent:e}}).then(({x:o,y:i,middlewareData:r,placement:n})=>{const l=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const c=r.arrow.x,h=r.arrow.y;let u="",b="",y="",v="";if(this.arrowPlacement==="start"){const x=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",b=l?x:"",v=l?"":x}else if(this.arrowPlacement==="end"){const x=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=l?"":x,v=l?x:"",y=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof c=="number"?`${c}px`:"",u=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:u,right:b,bottom:y,left:v,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${w({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${w({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}U([f(".popup")],P.prototype,"popup");U([f(".popup__arrow")],P.prototype,"arrowEl");U([a()],P.prototype,"anchor");U([a({type:Boolean,reflect:!0})],P.prototype,"active");U([a({reflect:!0})],P.prototype,"placement");U([a({reflect:!0})],P.prototype,"strategy");U([a({type:Number})],P.prototype,"distance");U([a({type:Number})],P.prototype,"skidding");U([a({type:Boolean})],P.prototype,"arrow");U([a({attribute:"arrow-placement"})],P.prototype,"arrowPlacement");U([a({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding");U([a({type:Boolean})],P.prototype,"flip");U([a({attribute:"flip-fallback-placements",converter:{fromAttribute:s=>s.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:s=>s.join(" ")}})],P.prototype,"flipFallbackPlacements");U([a({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy");U([a({type:Object})],P.prototype,"flipBoundary");U([a({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding");U([a({type:Boolean})],P.prototype,"shift");U([a({type:Object})],P.prototype,"shiftBoundary");U([a({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding");U([a({attribute:"auto-size"})],P.prototype,"autoSize");U([a()],P.prototype,"sync");U([a({type:Object})],P.prototype,"autoSizeBoundary");U([a({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding");U([a({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge");const Jr=p`
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
`,Qr=p`
  /* Write custom CSS here */
`;var tn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,yt=(s,t,e,o)=>{for(var i=o>1?void 0:o?en(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&tn(t,e,i),i};class rt extends k{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="syn-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{const e=this.containingElement?.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this.containingElement||e?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[C,Jr,Qr]}static{this.dependencies={"syn-popup":P}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Zo(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("syn-select",this.handlePanelSelect),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await X(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=V(this,"dropdown.show",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await X(this);const{keyframes:t,options:e}=V(this,"dropdown.hide",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return m`
      <syn-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${_(this.sync?this.sync:void 0)}
        class=${w({dropdown:!0,"dropdown--open":this.open})}
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
    `}}yt([f(".dropdown")],rt.prototype,"popup",2);yt([f(".dropdown__trigger")],rt.prototype,"trigger",2);yt([f(".dropdown__panel")],rt.prototype,"panel",2);yt([a({type:Boolean,reflect:!0})],rt.prototype,"open",2);yt([a({reflect:!0})],rt.prototype,"placement",2);yt([a({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);yt([a({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],rt.prototype,"stayOpenOnSelect",2);yt([a({attribute:!1})],rt.prototype,"containingElement",2);yt([a({type:Number})],rt.prototype,"distance",2);yt([a({type:Number})],rt.prototype,"skidding",2);yt([a({type:Boolean})],rt.prototype,"hoist",2);yt([a({reflect:!0})],rt.prototype,"sync",2);yt([g("open",{waitUntilFirstUpdate:!0})],rt.prototype,"handleOpenChange",1);A("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});A("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});rt.define("syn-dropdown");const sn=p`
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
`;var on=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,H=(s,t,e,o)=>{for(var i=o>1?void 0:o?rn(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&on(t,e,i),i};class N extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["syn-change"],value:t=>t.files}),this.hasSlotController=new G(this,"help-text","label"),this.localize=new j(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}static{this.styles=[C,Gt,Xt,sn]}static{this.dependencies={"syn-button":R,"syn-icon":_t}}set files(t){this.input&&(this.input.files=t)}get files(){return this.input?.files}set value(t){this.input&&(this.input.value=t)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){if(this.droparea){this.dropareaWrapper?.focus(t);return}this.button?.focus(t)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFiles(t){if(!t){this.value="";return}this.files=t}handleClick(t){t.preventDefault(),this.input.click()}handleChange(t){t.preventDefault(),t.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(t){t.preventDefault(),t.stopPropagation(),this.userIsDragging=!0}handleDragLeave(t){t.preventDefault(),t.stopPropagation(),this.userIsDragging=!1}async handleDrop(t){t.preventDefault(),t.stopPropagation();const e=t.dataTransfer?.files;if(e)if(!this.multiple&&e.length>1)this.emit("syn-error");else{if(this.hasSlotController.test("trigger"))this.handleFiles(e);else{const i=V(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),r=V(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const n=V(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});q(this.dropareaIcon,n.keyframes,n.options)}await q(this.inputChosen,i.keyframes,i.options),this.handleFiles(e),await q(this.inputChosen,r.keyframes,r.options)}this.input.dispatchEvent(new Event("change"))}this.userIsDragging=!1}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){let t=!1,e=this.localize.term("numFilesSelected",0);return this.files&&this.files?.length>0&&(t=!0,e=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length)),m`
      <span
        class=${w({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!t})}
        part="value"
      >
        ${e}
      </span>
    `}renderDroparea(){return m`
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
            <strong>${this.localize.term("fileDragDrop")}</strong>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `}renderButton(){const t=this.multiple?this.localize.term("fileButtonTextMultiple"):this.localize.term("fileButtonText");return m`
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
    `}render(){const t=this.label||!!this.hasSlotController.test("label"),e=this.helpText?!0:!!this.hasSlotController.test("help-text"),o=!!this.hasSlotController.test("trigger");return m`
      <div
        class=${w({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":e,"form-control--has-label":t,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${o?m`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:m`
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
          name=${_(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}}H([S()],N.prototype,"userIsDragging",2);H([a({type:Object})],N.prototype,"files",1);H([a({type:String})],N.prototype,"name",2);H([a({type:String})],N.prototype,"value",1);H([ce()],N.prototype,"defaultValue",2);H([a({reflect:!0})],N.prototype,"size",2);H([a()],N.prototype,"label",2);H([a({attribute:"help-text"})],N.prototype,"helpText",2);H([a({reflect:!0,type:Boolean})],N.prototype,"disabled",2);H([a({type:Boolean})],N.prototype,"droparea",2);H([a({type:String})],N.prototype,"accept",2);H([a({type:String})],N.prototype,"capture",2);H([a({reflect:!0,type:Boolean})],N.prototype,"multiple",2);H([a({reflect:!0,type:Boolean})],N.prototype,"webkitdirectory",2);H([a({reflect:!0})],N.prototype,"form",2);H([a({reflect:!0,type:Boolean})],N.prototype,"required",2);H([a({attribute:"hide-value",type:Boolean})],N.prototype,"hideValue",2);H([f(".input__control")],N.prototype,"input",2);H([f(".button")],N.prototype,"button",2);H([f(".droparea")],N.prototype,"dropareaWrapper",2);H([f(".droparea__icon")],N.prototype,"dropareaIcon",2);H([f(".input__value")],N.prototype,"inputChosen",2);H([g("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);H([g("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1);A("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});A("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});A("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});N.define("syn-file");const nn=p`
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
    padding: var(--syn-spacing-large);
  }

  /**
   * If the primary navigation is provided, use a smaller spacing
   * between the primary content area and the navigation area
   */
  .header--has-navigation .header__content {
    padding-bottom: var(--syn-spacing-medium);
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
`;var an=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,ni=(s,t,e,o)=>{for(var i=o>1?void 0:o?ln(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&an(t,e,i),i};class He extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new j(this),this.label="",this.burgerMenu="hidden"}static{this.styles=[C,nn]}static{this.dependencies={"syn-icon":_t}}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&!this.sideNav.rail&&(this.sideNav.open=!this.sideNav.open),this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.rail?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}handleBurgerMenu(){const t=`syn-burger-menu-${this.burgerMenu}`;this.emit(t)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){const t=document.querySelector("syn-side-nav");this.connectSideNavigation(t)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(t){this.mutationObserver.disconnect(),this.sideNav=t||document.querySelector("syn-side-nav"),this.sideNav&&(this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","rail"],attributes:!0}))}render(){const t=this.hasSlotController.test("navigation"),e=this.burgerMenu!=="hidden";return Q`
      <header
        class=${w({header:!0,"header--has-burger-menu":e,"header--has-navigation":t})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${e?Q`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?Q`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:Q`
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
    `}}ni([a()],He.prototype,"label",2);ni([a({attribute:"burger-menu",reflect:!0})],He.prototype,"burgerMenu",2);ni([S()],He.prototype,"sideNav",2);ni([g("burgerMenu",{waitUntilFirstUpdate:!0})],He.prototype,"handleBurgerMenu",1);He.define("syn-header");class dn extends is{constructor(t){if(super(t),this.handlePointerDown=e=>{e.button!==0||this.host.disabled||this.spinOnLongPressCallback(e)},this.handlePointerUp=e=>{e?.preventDefault(),e?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},t.type!==At.ELEMENT||!(t.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(t){return ge}update(t,[e]){return this.callbacks===void 0&&this.host===void 0&&(this.host=t.element,this.callbacks={...e},this.host.addEventListener("pointerdown",this.handlePointerDown)),re}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(t){t.preventDefault(),t.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(e=>{e.forEach(o=>{o.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const Gi=Re(dn),cn=p`
	/* stylelint-disable */
  :host {
    display: block;
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
    box-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--syn-color-primary-500);
    caret-color: var(--syn-input-color);
  }

  .input--readonly .input__control:-webkit-autofill,
  .input--readonly .input__control:-webkit-autofill:hover,
  .input--readonly .input__control:-webkit-autofill:focus,
  .input--readonly .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-readonly-background-color) inset !important;
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
`,hn=p`

  /**
  * Min-width size adjusted for each size so 2 full digits are shown for type number
  */ 
 
  :host([size="small"]) {
    min-width: calc(var(--syn-input-font-size-small)*8.3);
  }

  :host([size="medium"]) {
    min-width: calc(var(--syn-input-font-size-medium)*9.4);
  }

  :host([size="large"]) {
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
`;var un=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,O=(s,t,e,o)=>{for(var i=o>1?void 0:o?pn(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&un(t,e,i),i};class $ extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new G(this,"help-text","label","prefix","suffix"),this.localize=new j(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}static{this.styles=[C,Gt,cn,Xt,hn]}static{this.dependencies={"syn-icon":_t,"syn-divider":Jt}}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null||this.disabled)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return this.valueAsNumber<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return this.valueAsNumber>=t}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const r=e??this.input.selectionStart,n=o??this.input.selectionEnd;this.input.setRangeText(t,r,n,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.hasSlotController.test("prefix"),i=this.hasSlotController.test("suffix"),r=this.label?!0:!!t,n=this.helpText?!0:!!e,d=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${w({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n,"form-control--has-prefix":o,"form-control--has-suffix":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${w({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${_(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              min=${_(this.min)}
              max=${_(this.max)}
              step=${_(this.step)}
              .value=${Fe(this.value)}
              autocapitalize=${_(this.autocapitalize)}
              autocomplete=${_(this.autocomplete)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${_(this.pattern)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${d?m`
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
            ${this.passwordToggle&&!this.disabled?m`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?m`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:m`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?m`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${Gi({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${Gi({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
    `}}O([f(".input__control")],$.prototype,"input",2);O([S()],$.prototype,"hasFocus",2);O([a()],$.prototype,"title",2);O([a({reflect:!0})],$.prototype,"type",2);O([a()],$.prototype,"name",2);O([a()],$.prototype,"value",2);O([ce()],$.prototype,"defaultValue",2);O([a({reflect:!0})],$.prototype,"size",2);O([a()],$.prototype,"label",2);O([a({attribute:"help-text"})],$.prototype,"helpText",2);O([a({type:Boolean})],$.prototype,"clearable",2);O([a({type:Boolean,reflect:!0})],$.prototype,"disabled",2);O([a()],$.prototype,"placeholder",2);O([a({type:Boolean,reflect:!0})],$.prototype,"readonly",2);O([a({attribute:"password-toggle",type:Boolean})],$.prototype,"passwordToggle",2);O([a({attribute:"password-visible",type:Boolean})],$.prototype,"passwordVisible",2);O([a({attribute:"no-spin-buttons",type:Boolean})],$.prototype,"noSpinButtons",2);O([a({reflect:!0})],$.prototype,"form",2);O([a({type:Boolean,reflect:!0})],$.prototype,"required",2);O([a()],$.prototype,"pattern",2);O([a({type:Number})],$.prototype,"minlength",2);O([a({type:Number})],$.prototype,"maxlength",2);O([a()],$.prototype,"min",2);O([a()],$.prototype,"max",2);O([a()],$.prototype,"step",2);O([a()],$.prototype,"autocapitalize",2);O([a()],$.prototype,"autocorrect",2);O([a()],$.prototype,"autocomplete",2);O([a({type:Boolean})],$.prototype,"autofocus",2);O([a()],$.prototype,"enterkeyhint",2);O([a({type:Boolean,converter:{fromAttribute:s=>!(!s||s==="false"),toAttribute:s=>s?"true":"false"}})],$.prototype,"spellcheck",2);O([a()],$.prototype,"inputmode",2);O([g("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);O([g("step",{waitUntilFirstUpdate:!0})],$.prototype,"handleStepChange",1);O([g("value",{waitUntilFirstUpdate:!0})],$.prototype,"handleValueChange",1);$.define("syn-input");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=()=>new fn;class fn{}const mi=new WeakMap,yn=Re(class extends is{render(s){return ge}update(s,[t]){const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),ge}rt(s){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=mi.get(t);e===void 0&&(e=new WeakMap,mi.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){return typeof this.Y=="function"?mi.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class bn{constructor(t,e,o){this.popupRef=mn(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="syn-menu-item"||i.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const r=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(u=>u.localName==="syn-menu")[0],n=this.localize.dir()==="rtl";if(!r)return;const{left:l,top:d,width:c,height:h}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?l+c:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?l+c:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${d+h}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const i of e.assignedElements())if(o=i.querySelectorAll("syn-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;const t=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((i,r)=>{const n=t.get(r)??new CSSUnitValue(0,"px"),d=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return i-d.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?m`
      <syn-popup
        ${yn(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </syn-popup>
    `:m` <slot name="submenu" hidden></slot> `}}const gn=p`
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
`,vn=p`
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
    font-size: var(--syn-font-size-x-large);
  }

  /**
   * Adjust the size of icons
   */
  .menu-item .menu-item__chevron,
  .menu-item .menu-item__check {
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
`;var _n=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,Dt=(s,t,e,o)=>{for(var i=o>1?void 0:o?wn(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&_n(t,e,i),i};class Ct extends k{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new j(this),this.hasSlotController=new G(this,"submenu"),this.submenuController=new bn(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}static{this.styles=[C,gn,vn]}static{this.dependencies={"syn-icon":_t,"syn-popup":P,"syn-spinner":$i}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return ds(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return m`
      <div
        id="anchor"
        part="base"
        class=${w({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?m` <syn-spinner part="spinner" exportparts="base:spinner__base"></syn-spinner> `:""}
      </div>
    `}}Dt([f("slot:not([name])")],Ct.prototype,"defaultSlot",2);Dt([f(".menu-item")],Ct.prototype,"menuItem",2);Dt([a()],Ct.prototype,"type",2);Dt([a({type:Boolean,reflect:!0})],Ct.prototype,"checked",2);Dt([a()],Ct.prototype,"value",2);Dt([a({type:Boolean,reflect:!0})],Ct.prototype,"loading",2);Dt([a({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);Dt([g("checked")],Ct.prototype,"handleCheckedChange",1);Dt([g("disabled")],Ct.prototype,"handleDisabledChange",1);Dt([g("type")],Ct.prototype,"handleTypeChange",1);Ct.define("syn-menu-item");const xn=p`
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
`,kn=p`
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
`;class Cn extends k{static{this.styles=[C,xn,kn]}static{this.dependencies={"syn-divider":Jt}}render(){return m`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}}Cn.define("syn-menu-label");const zn=p`
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
`,$n=p`
  :host {
    border-radius: 0;
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
`;var Sn=Object.defineProperty,An=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&Sn(t,e,i),i};class Ii extends k{static{this.styles=[C,zn,$n]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath().find(r=>e.includes(r?.getAttribute?.("role")||""));if(!o)return;const i=o;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("syn-select",{detail:{item:i}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){return t.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(t.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}}An([f("slot")],Ii.prototype,"defaultSlot");Ii.define("syn-menu");const On=p`
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
    background: transparent;
    border: none;
    box-shadow: inset 0 -1px 0 0 transparent;
    box-sizing: border-box;
    color: var(--syn-color-neutral-950);
    cursor: pointer;
    display: inline-block;
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
   * Hover effect for the nav item.
   * We use opacity to make sure the border-bottom is visible if used in the prio-nav in header
   */
  .nav-item:not(.nav-item--disabled):hover::before {
    background: var(--syn-color-neutral-600);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.11;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .nav-item--horizontal:not(.nav-item--disabled):hover::before {
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
  /* stylelint-disable-next-line no-descending-specificity */
  .nav-item--show-prefix-only .nav-item__content-container,
  .nav-item--show-prefix-only .nav-item__suffix,
  .nav-item--show-prefix-only .nav-item__chevron {
    height: var(--syn-spacing-large);
  }

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
  /* stylelint-disable-next-line no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix,
  .nav-item--multi-line .nav-item__prefix,
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .nav-item--multi-line .nav-item__suffix::slotted(syn-icon),
  :not(.nav-item--show-prefix-only).nav-item--multi-line .nav-item__prefix::slotted(syn-icon),
  .nav-item--multi-line .nav-item__chevron {
    align-self: flex-start;
  }

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
`;var Tn=Object.defineProperty,En=Object.getOwnPropertyDescriptor,lt=(s,t,e,o)=>{for(var i=o>1?void 0:o?En(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Tn(t,e,i),i};class it extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"[default]","children","prefix","suffix"),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}static{this.styles=[C,On]}static{this.dependencies={"syn-divider":Jt}}isButton(){return!this.href&&!this.hasSlotController.test("children")}isLink(){return!!this.href&&!this.hasSlotController.test("children")}isAccordion(){return this.hasSlotController.test("children")}getNavItemChildren(t){return Array.from(t?.assignedElements({flatten:!0})||[]).map(e=>e.tagName.toLowerCase()==="syn-nav-item"?e:Array.from(e.querySelectorAll(":scope > syn-nav-item"))).flat()}getAllNestedNavItems(t){const e=this.getNavItemChildren(t),o=e.map(i=>i.getAllNestedNavItems(i.childrenSlot)).flat();return e.concat(o)}handleCurrentMarkedChild(){const t=this.closest("syn-side-nav");if(!this.open||t?.rail){const o=this.getAllNestedNavItems(this.childrenSlot).findIndex(i=>!!i.shadowRoot?.querySelector(".nav-item--current"));this.currentMarkedChild=o!==-1}}handleClickButton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}handleClickSummary(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit("syn-hide",{cancelable:!0})}showDetails(){this.open=!0,this.emit("syn-show",{cancelable:!0})}handleSlotChange(){this.handleCurrentMarkedChild();const t=getComputedStyle(this).getPropertyValue("--indentation"),e=Math.min(parseInt(t,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(o=>{o.style.setProperty("--indentation",e.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleWidth(t){t.forEach(e=>{if(e.contentRect.width<100){const o=this.hasSlotController.test("prefix");this.showPrefixOnly=o}else this.showPrefixOnly=!1;e.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})}handleOpenChange(){this.handleCurrentMarkedChild()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleWidth(t)),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(t){this.control.focus(t)}render(){const t=this.isButton(),e=this.isLink(),o=this.isAccordion(),i=this.closest("syn-side-nav"),r=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&!!i?.rail&&!i?.open;let n=Ie`button`;o?n=Ie`summary`:e&&(n=Ie`a`);const l=(this.chevron||o)&&!this.horizontal;let d;o?d=this.handleClickSummary:t&&(d=this.handleClickButton);const c=Q`
      <${n}
        aria-controls=${_(o?"navigation-item-details":void 0)}
        aria-current=${_(this.current?"page":void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${w({"nav-item":!0,"nav-item--current":this.current||r,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test("[default]"),"nav-item--has-prefix":this.hasSlotController.test("prefix"),"nav-item--has-suffix":this.hasSlotController.test("suffix"),"nav-item--horizontal":this.horizontal,"nav-item--is-link":e,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":o})}
        @click=${d}
        ?disabled=${_(e?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${_(e?this.href:void 0)}
        part="base"
        role=${e?"link":"button"}
        tabindex=${this.disabled?"-1":"0"}
      >

        ${this.divider&&!this.horizontal?Q`<syn-divider class="divider" part="divider"></syn-divider>`:""}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${l?Q`
            <syn-icon
              class=${w({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              color="currentColor"
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:""}

          <div
            class=${w({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||r})}
            part="current-indicator"
          >
          </div>
        </div>

      </${n}>
    `;return o?Q`
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
    `:c}}lt([S()],it.prototype,"hasFocus",2);lt([S()],it.prototype,"showPrefixOnly",2);lt([S()],it.prototype,"currentMarkedChild",2);lt([S()],it.prototype,"isMultiLine",2);lt([f('slot[name="children"]')],it.prototype,"childrenSlot",2);lt([f(".nav-item")],it.prototype,"control",2);lt([a({reflect:!0,type:String})],it.prototype,"href",2);lt([a({reflect:!0,type:Boolean})],it.prototype,"current",2);lt([a({reflect:!0,type:Boolean})],it.prototype,"disabled",2);lt([a({reflect:!0,type:Boolean})],it.prototype,"horizontal",2);lt([a({reflect:!0,type:Boolean})],it.prototype,"chevron",2);lt([a({reflect:!0,type:Boolean})],it.prototype,"open",2);lt([a({reflect:!0,type:Boolean})],it.prototype,"divider",2);lt([g("open")],it.prototype,"handleOpenChange",1);it.define("syn-nav-item");const Dn=p`
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
  }

  /**
   * Only show the label container when there is a label at all
   */
  .optgroup--has-prefix .optgroup__label-container,
  .optgroup--has-label .optgroup__label-container,
  .optgroup--has-suffix .optgroup__label-container {
    padding-block: var(--syn-spacing-small);
    padding-inline: var(--syn-spacing-medium);
  }

  /**
   * Format main label.
   * Make sure this works for props and slotted content
   */
  .optgroup__label-content,
  .optgroup__label::slotted(*) {
    flex: 1;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-semibold);
    line-height: var(--syn-line-height-normal);
  }

  /* Disabled Label */
  .optgroup--is-disabled .optgroup__label-container {
    opacity: var(--syn-input-disabled-opacity);
  }

  .optgroup__prefix,
  .optgroup__suffix {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-spacing-large);
  }
`;var Pn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,ai=(s,t,e,o)=>{for(var i=o>1?void 0:o?In(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Pn(t,e,i),i};class qe extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=Dn}static{this.dependencies={"syn-divider":Jt}}handleDisableOptions(){const{disabled:t}=this;this.defaultSlot.assignedElements().filter(e=>e.tagName.toLowerCase()==="syn-option").forEach(e=>{e.disabled=t})}handleDisabledChange(){this.handleDisableOptions()}render(){const{disabled:t}=this,e=this.hasSlotController.test("label"),o=this.label?!0:!!e;return Q`
      <div
        class=${w({optgroup:!0,"optgroup--has-label":o,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
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
          <slot @slotchange=${this.handleDisableOptions}></slot>
        </div>
      </div>
    `}}ai([f("slot:not([name])")],qe.prototype,"defaultSlot",2);ai([a({reflect:!0,type:Boolean})],qe.prototype,"disabled",2);ai([a()],qe.prototype,"label",2);ai([g("disabled",{waitUntilFirstUpdate:!0})],qe.prototype,"handleDisabledChange",1);qe.define("syn-optgroup");const Ln=p`
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
`,Mn=p`
  .option {
    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: 48px;
    padding: var(--syn-spacing-small) var(--syn-spacing-medium);
  }

  .option:not(.option--current) {
    color: var(--syn-color-neutral-950);
  }

  .option__label {
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-color-primary-600);
    font-size: var(--syn-spacing-large);
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
    font-size: var(--syn-spacing-large);
  }
`;var Fn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Rt=(s,t,e,o)=>{for(var i=o>1?void 0:o?Vn(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Fn(t,e,i),i};class Pt extends k{constructor(){super(...arguments),this.localize=new j(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[C,Ln,Mn]}static{this.dependencies={"syn-icon":_t}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("slot")||(e+=o.textContent)),o.nodeType===Node.TEXT_NODE&&(e+=o.textContent)}),e.trim()}render(){return m`
      <div
        part="base"
        class=${w({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}Rt([f(".option__label")],Pt.prototype,"defaultSlot",2);Rt([S()],Pt.prototype,"current",2);Rt([S()],Pt.prototype,"selected",2);Rt([S()],Pt.prototype,"hasHover",2);Rt([a({reflect:!0})],Pt.prototype,"value",2);Rt([a({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);Rt([g("disabled")],Pt.prototype,"handleDisabledChange",1);Rt([g("selected")],Pt.prototype,"handleSelectedChange",1);Rt([g("value")],Pt.prototype,"handleValueChange",1);Pt.define("syn-option");P.define("syn-popup");const Rn=p`
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
`,Xi=s=>Array.from(s.assignedElements({flatten:!0})),Bn=s=>s.tagName.toLocaleLowerCase()==="syn-nav-item"||(s.getAttribute("role")??"")==="menuitem",Zi=s=>s.filter(Bn);var Nn=Object.defineProperty,Qt=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&Nn(t,e,i),i};class Bt extends k{constructor(){super(...arguments),this.localize=new j(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[C,Rn]}static{this.dependencies={"syn-dropdown":rt,"syn-icon":_t,"syn-menu":Ii,"syn-nav-item":it}}getSlottedNavItems(){const t=Zi(Xi(this.defaultSlot)),e=Zi(Xi(this.menuSlot));return t.concat(e)}cacheItemPositions(t){t.forEach(e=>{e.removeAttribute("slot");const{right:o}=e.getBoundingClientRect();e.dataset.right=o.toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const t=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(t);const{width:e}=this.horizontalNav.getBoundingClientRect(),{clientWidth:o}=this.priorityMenu,i=e-o;let r,n=0;t.forEach(l=>{r||parseFloat(l.dataset.right)>=i?(l.removeAttribute("horizontal"),l.setAttribute("slot","menu"),l.setAttribute("role","menuitem"),r||(r=parseFloat(l.dataset.right))):(n+=1,l.setAttribute("horizontal","true"),l.removeAttribute("slot"),l.removeAttribute("tabindex"),l.dataset.originalRole?l.setAttribute("role",l.dataset.originalRole):l.removeAttribute("role"))}),this.hasItemsInDropdown=n!==t.length,this.amountOfVisibleItems=n}renderPriorityMenu(){return Q`
      <syn-dropdown
        class=${w({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${w({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const t=this.getSlottedNavItems();t.length!==this.amountOfNavItems&&(this.cacheItemPositions(t),this.handlePriorityMenu(),this.amountOfNavItems=t.length)}firstUpdated(){this.getSlottedNavItems().forEach(t=>{t.dataset.originalRole=t.getAttribute("role")??""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return Q`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}}Qt([f("slot:not([name])")],Bt.prototype,"defaultSlot");Qt([f("slot[name=menu]")],Bt.prototype,"menuSlot");Qt([f(".horizontal-nav")],Bt.prototype,"horizontalNav");Qt([f(".priority-menu")],Bt.prototype,"priorityMenu");Qt([S()],Bt.prototype,"itemPositionsCached");Qt([S()],Bt.prototype,"amountOfNavItems");Qt([S()],Bt.prototype,"amountOfVisibleItems");Qt([S()],Bt.prototype,"hasItemsInDropdown");Bt.define("syn-prio-nav");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds="important",jn=" !"+Ds,Un=Re(class extends ii{constructor(s){if(super(s),s.type!==At.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const o=s[e];return o==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(s,[t]){const{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?e.removeProperty(o):e[o]=null);for(const o in t){const i=t[o];if(i!=null){this.ft.add(o);const r=typeof i=="string"&&i.endsWith(jn);o.includes("-")||r?e.setProperty(o,r?i.slice(0,-11):i,r?Ds:""):e[o]=i}}return re}}),Hn=p`
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
`,qn=p`
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
`;var Wn=Object.defineProperty,Li=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&Wn(t,e,i),i};class li extends k{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[C,Hn,qn]}render(){return m`
      <div
        part="base"
        class=${w({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${_(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Un({width:`${this.value}%`})}>
          ${this.indeterminate?"":m` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}Li([a({type:Number,reflect:!0})],li.prototype,"value");Li([a({type:Boolean,reflect:!0})],li.prototype,"indeterminate");Li([a()],li.prototype,"label");li.define("syn-progress-bar");const Kn=p`
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
`,Yn=p`
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
`;var Gn=Object.defineProperty,di=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&Gn(t,e,i),i};class We extends k{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.label=""}static{this.styles=[C,Kn,Yn]}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*e,i=o-this.value/100*o;this.indicatorOffset=`${i}px`}}render(){return m`
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
    `}}di([f(".progress-ring__indicator")],We.prototype,"indicator");di([S()],We.prototype,"indicatorOffset");di([a({type:Number,reflect:!0})],We.prototype,"value");di([a()],We.prototype,"label");We.define("syn-progress-ring");const Xn=p`
	/* stylelint-disable */
  ${bs}

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
`;var Zn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Nt=(s,t,e,o)=>{for(var i=o>1?void 0:o?Jn(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Zn(t,e,i),i};class It extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}static{this.styles=[C,Xn]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Q`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${w({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${_(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}}Nt([f(".button")],It.prototype,"input",2);Nt([f(".hidden-input")],It.prototype,"hiddenInput",2);Nt([S()],It.prototype,"hasFocus",2);Nt([a({type:Boolean,reflect:!0})],It.prototype,"checked",2);Nt([a()],It.prototype,"value",2);Nt([a({type:Boolean,reflect:!0})],It.prototype,"disabled",2);Nt([a({reflect:!0})],It.prototype,"size",2);Nt([a({type:Boolean,reflect:!0})],It.prototype,"pill",2);Nt([g("disabled",{waitUntilFirstUpdate:!0})],It.prototype,"handleDisabledChange",1);It.define("syn-radio-button");const Qn=p`
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
`,ta=p`
  ::slotted(syn-radio:not(:last-child)) {
    margin-bottom: var(--syn-spacing-x-small);
  }

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

`;var ea=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,dt=(s,t,e,o)=>{for(var i=o>1?void 0:o?ia(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ea(t,e,i),i};class nt extends k{constructor(){super(...arguments),this.formControlController=new Ft(this),this.hasSlotController=new G(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}static{this.styles=[C,Gt,Qn,Xt,ta]}static{this.dependencies={"syn-button-group":Be}}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?ys:t?$o:Ne}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button"),o=this.getAllRadios(),i=this.value;e.disabled||(this.value=e.value,o.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(l=>!l.disabled),o=e.find(l=>l.checked)??e[0],i=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let n=e.indexOf(o)+i;n<0&&(n=e.length-1),n>e.length-1&&(n=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=e[n].value,e[n].checked=!0,this.hasButtonGroup?e[n].shadowRoot.querySelector("button").focus():(e[n].tabIndex=0,e[n].focus()),this.value!==r&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),o=t.find(i=>i.checked)||t[0];o&&o.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="syn-radio-button"),t.length>0&&!t.some(e=>e.checked))if(this.hasButtonGroup){const e=t[0].shadowRoot?.querySelector("button");e&&(e.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){const e=this.shadowRoot?.querySelector("syn-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=m`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return m`
      <fieldset
        part="form-control"
        class=${w({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
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

          ${this.hasButtonGroup?m`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </syn-button-group>
              `:r}
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
    `}}dt([f("slot:not([name])")],nt.prototype,"defaultSlot",2);dt([f(".radio-group__validation-input")],nt.prototype,"validationInput",2);dt([S()],nt.prototype,"hasButtonGroup",2);dt([S()],nt.prototype,"errorMessage",2);dt([S()],nt.prototype,"defaultValue",2);dt([a()],nt.prototype,"label",2);dt([a({attribute:"help-text"})],nt.prototype,"helpText",2);dt([a()],nt.prototype,"name",2);dt([a({reflect:!0})],nt.prototype,"value",2);dt([a({reflect:!0})],nt.prototype,"size",2);dt([a({reflect:!0})],nt.prototype,"form",2);dt([a({type:Boolean,reflect:!0})],nt.prototype,"required",2);dt([g("size",{waitUntilFirstUpdate:!0})],nt.prototype,"handleSizeChange",1);dt([g("value")],nt.prototype,"handleValueChange",1);nt.define("syn-radio-group");const sa=p`
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
`,oa=p`

  .radio {
    padding: var(--syn-spacing-2x-small) 0;
  }

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

  /*
 * Size modifiers
 */

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
`;var ra=Object.defineProperty,na=Object.getOwnPropertyDescriptor,ue=(s,t,e,o)=>{for(var i=o>1?void 0:o?na(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ra(t,e,i),i};class te extends k{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}static{this.styles=[C,sa,oa]}static{this.dependencies={"syn-icon":_t}}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return m`
      <span
        part="base"
        class=${w({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?m` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}}ue([S()],te.prototype,"checked",2);ue([S()],te.prototype,"hasFocus",2);ue([a()],te.prototype,"value",2);ue([a({reflect:!0})],te.prototype,"size",2);ue([a({type:Boolean,reflect:!0})],te.prototype,"disabled",2);ue([g("checked")],te.prototype,"handleCheckedChange",1);ue([g("disabled",{waitUntilFirstUpdate:!0})],te.prototype,"handleDisabledChange",1);te.define("syn-radio");const aa=p`
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
`;var la=Object.defineProperty,da=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&la(t,e,i),i};class Ps extends k{constructor(){super(...arguments),this.subdivision=!1}static{this.styles=[C,aa]}render(){return m`
      <div
        class=${w({tick:!0,"tick--subdivision":this.subdivision})}
        part="base"
      >
        <div class="tick-line" part="line"></div>
        <div class="tick-label" part="label">
          <slot></slot>
        </div>
      </div>
    `}}da([a({reflect:!0,type:Boolean})],Ps.prototype,"subdivision");Ps.define("syn-range-tick");const ca=p`
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
    color: var(--syn-tooltip-color);
    padding: var(--syn-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ha=p`
  /* Write custom CSS here */
  .tooltip__body {
    box-shadow: var(--syn-shadow-large);
  }
`;var ua=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,ct=(s,t,e,o)=>{for(var i=o>1?void 0:o?pa(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ua(t,e,i),i};class st extends k{constructor(){super(),this.localize=new j(this),this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Ri(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Ri(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static{this.styles=[C,ca,ha]}static{this.dependencies={"syn-popup":P}}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await X(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=V(this,"tooltip.show",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await X(this.body);const{keyframes:t,options:e}=V(this,"tooltip.hide",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}render(){return m`
      <syn-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${w({tooltip:!0,"tooltip--open":this.open})}
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
    `}}ct([f("slot:not([name])")],st.prototype,"defaultSlot",2);ct([f(".tooltip__body")],st.prototype,"body",2);ct([f("syn-popup")],st.prototype,"popup",2);ct([a()],st.prototype,"content",2);ct([a()],st.prototype,"placement",2);ct([a({type:Boolean,reflect:!0})],st.prototype,"disabled",2);ct([a({type:Number})],st.prototype,"distance",2);ct([a({type:Boolean,reflect:!0})],st.prototype,"open",2);ct([a({type:Number})],st.prototype,"skidding",2);ct([a()],st.prototype,"trigger",2);ct([a({type:Boolean})],st.prototype,"hoist",2);ct([g("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);ct([g(["content","distance","hoist","placement","skidding"])],st.prototype,"handleOptionsChange",1);ct([g("disabled")],st.prototype,"handleDisabledChange",1);A("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});A("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});const oe=(s,t)=>s-t,Pe=(s,t)=>{if(s.length!==t.length)return!0;const e=s.slice().sort(oe),o=t.slice().sort(oe);for(let i=0;i<e.length;i+=1)if(e[i]!==o[i])return!0;return!1},Ji=(s,t,e)=>{const o=s.getBoundingClientRect(),i=o.width;if(i<=0)return 0;let r=t;return r-=o.left,r<=0?e?1:0:r>=i?e?0:1:(r/=i,e?1-r:r)},ma=p`
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
    touch-action: none; /* Prevent misbehaviour in mobile by disabling native touch */
    -webkit-touch-callout: none;
    transition: var(--syn-transition-fast) color, var(--syn-transition-fast) border, var(--syn-transition-fast) box-shadow, var(--syn-transition-fast) background-color;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    vertical-align: middle;
    width: 100%;
  }

  .input__wrapper {
    flex: 1 0 auto;

    /* Needed so the active track and thumb do not bleed into other elements like the side-nav because of their z-indices */
    isolation: isolate;
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
    inset: calc(var(--track-hit-area-size) * -1) calc(var(--full-thumb-size) / 2 * -1);
    position: absolute;
  }

  .track {
    background-color: var(--track-color-inactive);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
    margin: calc((var(--full-thumb-size) - var(--track-height)) / 2) 0;
  }

  .active-track {
    background-color: var(--track-color-active);
    border-radius: var(--syn-border-radius-small);
    height: var(--track-height);
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
    position: absolute;
  }

  .thumb:hover {
    cursor: grab;  
  }

  .thumb.grabbed {
    background: var(--syn-color-primary-950);
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
`;var fa=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,tt=(s,t,e,o)=>{for(var i=o>1?void 0:o?ya(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&fa(t,e,i),i};class J extends k{constructor(){super(),this.name="",this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.size="medium",this.tooltipPlacement="top",this.defaultValue="0",this.form="",this.hasSlotController=new G(this,"help-text","label","prefix","suffix","ticks"),this.formControlController=new Ft(this,{assumeInteractionOn:["syn-change"]}),this.localize=new j(this),this.#t=[0],this.#e=new Map,this.#o=!1,this.#s="",this.#d=1,this.#i=[],this.tooltipFormatter=this.localize.number.bind(this.localize)}static{this.styles=[C,Gt,Xt,ma]}static{this.dependencies={"syn-tooltip":st}}set value(t){this.#t=t?t.split(" ").map(e=>+e).sort(oe):[]}get value(){return this.#t.slice().sort(oe).join(" ")}set valueAsArray(t){const e=this.#t;this.#t=Array.isArray(t)?t.slice().sort(oe):t||[],Pe(e,this.#t)&&this.requestUpdate("value",e.join(" "))}get valueAsArray(){return[...this.#t].sort(oe)}#t;#e;#o;#s;#c;#d;#i;get#r(){return this.localize.dir()==="rtl"}firstUpdated(){this.formControlController.updateValidity(),this.#i=Array.from(this.#t),this.thumbs.forEach(t=>{const e=t.parentElement;e.updateComplete.then(()=>{e.shadowRoot.querySelector(".tooltip__body")?.setAttribute("aria-hidden","true")})})}willUpdate(t){super.willUpdate(t),this.min>this.max&&([this.min,this.max]=[this.max,this.min]),this.step>this.max-this.min&&(this.step=this.max-this.min),this.step<=0&&(this.step=1);const e=this.#t.map(o=>{if(o<=this.min)return this.min;if(o>=this.max)return this.max;const i=this.min+this.step*Math.round((o-this.min)/this.step);return i>this.max?this.max:i});Pe(this.#t,e)&&(this.#t=e)}updated(t){super.updated(t);for(const e of this.thumbs){const o=+e.dataset.rangeId;this.#e.has(o)&&this.#n(e,this.#e.get(o))}this.#a()}focus(t){const e=this.thumbs.item(0);e?e.focus(t):super.focus(t)}checkValidity(){if(this.disabled)return!0;const t=!this.#s;return t||this.formControlController.emitInvalidEvent(),t}reportValidity(){if(this.disabled)return!0;const t=this.validity.valid;return this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.#c),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.#c=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),t}setCustomValidity(t){this.#s=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return this.#s?ys:Ne}get validationMessage(){return this.#s}#h(t){if(this.disabled)return;const{clientX:e}=t,o=Array.from(this.thumbs),i=Ji(this.baseDiv,e,this.#r),r=this.step/(this.max-this.min),n=this.min+this.step*Math.round(i/r),l=o.reduce((h,u)=>{const b=this.#e.get(+u.dataset.rangeId),y=this.#e.get(+h.dataset.rangeId);return Math.abs(b-n)<=Math.abs(y-n)?u:h}),d=+l.dataset.rangeId;if(!d)return;this.#e.set(d,n),this.#n(l,n);const c=this.#t;this.#t=Array.from(this.#e.values()),this.#a(),Pe(c,this.#t)&&(this.#i=Array.from(this.#t),this.emit("syn-input"),this.emit("syn-change"))}async#p(t){if(this.disabled)return;const e=t.target;this.#l(e),e.dataset.pointerId&&e.releasePointerCapture(+e.dataset.pointerId),e.dataset.pointerId=t.pointerId.toString(),e.setPointerCapture(t.pointerId),e.classList.add("grabbed"),await e.parentElement.show()}#m(t){if(this.disabled)return;const e=t.target,o=+e.dataset.rangeId;if(!this.#e.has(o)||(e.dataset.pointerId?+e.dataset.pointerId:null)!==t.pointerId)return;const r=Ji(this.baseDiv,t.clientX,this.#r),n=this.step/(this.max-this.min),l=this.min+this.step*Math.round(r/n);if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:l}}).defaultPrevented)return;this.#e.set(o,l),this.#n(e,l);const c=this.#t;this.#t=Array.from(this.#e.values()),this.#a(),Pe(c,this.#t)&&this.emit("syn-input")}async#u(t){const e=t.target;!e.dataset.pointerId||t.pointerId!==+e.dataset.pointerId||(e.classList.remove("grabbed"),e.releasePointerCapture(t.pointerId),delete e.dataset.pointerId,Pe(this.#i,this.#t)&&(this.#i=Array.from(this.#t),this.emit("syn-change")),await e.parentElement.hide())}#n(t,e){t.setAttribute("aria-valuenow",e.toString()),t.setAttribute("aria-valuetext",this.tooltipFormatter(e));const o=(e-this.min)/(this.max-this.min);t.style.insetInlineStart=`calc( ${100*o}% - var(--full-thumb-size) / 2 )`,this.#l(t)}#a(){const{activeTrack:t}=this;if(!t)return;if(this.min===this.max){t.style.insetInlineStart="0%",t.style.insetInlineEnd="0%";return}if(this.#t.length===1){const r=getComputedStyle(this).getPropertyValue("--track-active-offset")||"0%",n=100*(this.#t[0]-this.min)/(this.max-this.min);t.style.insetInlineStart=`min(${r}, ${n}%)`,t.style.insetInlineEnd=`min(calc(100% - ${r}), calc(100% - ${n}%))`;return}const e=this.#t.slice().sort(oe),o=100*(e[0]-this.min)/(this.max-this.min),i=100*(e[e.length-1]-this.min)/(this.max-this.min);t.style.insetInlineStart=`${o}%`,t.style.insetInlineEnd=`calc(100% - ${i}%)`}#f(t){const e=t.target,o=+e.dataset.rangeId,i=this.#e.get(o);if(i===void 0)return;let r=i;switch(t.key){case"ArrowUp":case"Up":r=Math.min(i+this.step,this.max);break;case"ArrowDown":case"Down":r=Math.max(i-this.step,this.min);break;case"ArrowLeft":case"Left":r=this.#r?Math.min(i+this.step,this.max):Math.max(i-this.step,this.min);break;case"ArrowRight":case"Right":r=this.#r?Math.max(i-this.step,this.min):Math.min(i+this.step,this.max);break;case"PageUp":r=Math.min(i+(this.max-this.min)/5,this.max);break;case"PageDown":r=Math.max(i-(this.max-this.min)/5,this.min);break;case"Home":r=this.min;break;case"End":r=this.max;break;default:return}if(r!==i){if(this.emit("syn-move",{cancelable:!0,detail:{element:e,value:r}}).defaultPrevented)return;this.#n(e,r),this.#e.set(o,r),this.#t=Array.from(this.#e.values()),this.#a(),this.#l(e),this.#i=Array.from(this.#t),this.emit("syn-input"),this.emit("syn-change")}t.stopPropagation(),t.preventDefault()}#y(t){t.relatedTarget&&this.shadowRoot?.contains(t.relatedTarget)||(this.emit("syn-blur"),this.#o=!1)}#l(t){if(this.tooltipPlacement==="none")return;const e=+t.dataset.rangeId;if(!this.#e.has(e))return;const o=this.#e.get(e),i=t.parentElement;i.content=this.tooltipFormatter(o)}#b(t){if(this.disabled)return;this.#o||(this.#o=!0,this.emit("syn-focus"));const e=t.target;e?.dataset?.rangeId&&this.#l(e)}#g(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}#v(){const t=this.hasSlotController.test("ticks"),e=this.hasSlotController.test("prefix"),o=this.hasSlotController.test("suffix");if(!t)return;let i=this.shadowRoot?.querySelector(".ticks")?.clientHeight;if(i){if(i+=2,i/=2,e){const r=this.shadowRoot?.querySelector(".input__prefix");r.style.transform=`translateY(-${i}px)`}if(o){const r=this.shadowRoot?.querySelector(".input__suffix");r.style.transform=`translateY(-${i}px)`}}}renderThumbs(t){const e=this.#t.length>1;return this.#e.clear(),this.#t.map((o,i)=>{this.#d+=1;const r=this.#d;this.#e.set(r,o);const n=`thumb-${r}`;let l="",d="";return e?(d=t?`label aria-label-hidden ${n}`:`aria-label-hidden ${n}`,i===0?l=`${this.localize.term("rangeMin")} (${this.tooltipFormatter(o)})`:i===this.#t.length-1?l=`${this.localize.term("rangeMax")} (${this.tooltipFormatter(o)})`:l=this.tooltipFormatter(o)):d=t?"label aria-label-hidden":"",m`
        <syn-tooltip
          hoist
          .disabled=${this.tooltipPlacement==="none"||this.disabled}
          .placement=${this.tooltipPlacement}
          trigger="focus"
        >
          <div
            aria-disabled=${_(this.disabled?"true":void 0)}
            aria-labelledby=${d}
            aria-label=${l}
            aria-valuemax="${this.max}"
            aria-valuemin="${this.min}"
            aria-valuenow="${o}"
            aria-valuetext="${this.tooltipFormatter(o)}"
            class="thumb"
            data-range-id="${r}"
            id=${n}
            part="thumb"
            role="slider"
            tabindex="${this.disabled?-1:0}"
            @pointerdown=${this.#p}
            @pointermove=${this.#m}
            @pointerup=${this.#u}
            @pointercancel=${this.#u}
            @keydown=${this.#f}
            @focus=${this.#b}
          ></div>
        </syn-tooltip>
      `})}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.hasSlotController.test("prefix"),i=this.hasSlotController.test("suffix"),r=this.label?!0:!!t,n=this.helpText?!0:!!e;return this.#v(),m`
      <div
        part="form-control"
        class=${w({"form-control":!0,"form-control--has-help-text":n,"form-control--has-label":r,"form-control--has-prefix":o,"form-control--has-suffix":i,"form-control--is-disabled":this.disabled,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @focusout=${this.#y}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.focus}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <label id="aria-label-hidden" class="visually-hidden">
          (${this.#t.map(this.tooltipFormatter).join(" - ")})
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
              @invalid=${this.#g}
            />

            <div
              class="track__wrapper"
              @click=${this.#h}
              part="track-wrapper"
              role="presentation"
            >
              <div class="track__click-helper"></div>
              <div class="track" part="track"></div>
              <div class="active-track" part="active-track"></div>
            </div>

            ${this.renderThumbs(r)}

            <div
              class="ticks"
              part="ticks"
              @click=${this.#h}
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
    `}}tt([a()],J.prototype,"name",2);tt([a()],J.prototype,"label",2);tt([a({attribute:"help-text"})],J.prototype,"helpText",2);tt([a({reflect:!0,type:Boolean})],J.prototype,"disabled",2);tt([a({type:Number})],J.prototype,"min",2);tt([a({type:Number})],J.prototype,"max",2);tt([a({type:Number})],J.prototype,"step",2);tt([a({reflect:!0})],J.prototype,"size",2);tt([a({attribute:"tooltip-placement",type:String})],J.prototype,"tooltipPlacement",2);tt([a({type:String})],J.prototype,"value",1);tt([ce()],J.prototype,"defaultValue",2);tt([a({reflect:!0})],J.prototype,"form",2);tt([a({attribute:!1})],J.prototype,"tooltipFormatter",2);tt([f(".input__wrapper")],J.prototype,"baseDiv",2);tt([f(".active-track")],J.prototype,"activeTrack",2);tt([Vs(".thumb")],J.prototype,"thumbs",2);tt([f(".range__validation-input")],J.prototype,"validationInput",2);J.define("syn-range");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xi extends ii{constructor(t){if(super(t),this.it=ge,t.type!==At.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ge||t==null)return this._t=void 0,this.it=t;if(t===re)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}xi.directiveName="unsafeHTML",xi.resultType=1;const ba=Re(xi),ga=p`
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

  
`,va=p`
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
  }

  .tag--small.tag--removable {
    padding-inline-end: var(--syn-spacing-2x-small);
  }


  /* Size medium */
  .tag--medium {
    font-size: var(--syn-font-size-small);
    height: var(--syn-font-size-2x-large);
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
`;var _a=Object.defineProperty,Is=(s,t,e,o)=>{for(var i=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=n(t,e,i)||i);return i&&_a(t,e,i),i};class ci extends k{constructor(){super(...arguments),this.localize=new j(this),this.size="medium",this.removable=!1}static{this.styles=[C,ga,va]}static{this.dependencies={"syn-icon-button":_e}}handleRemoveClick(){this.emit("syn-remove")}render(){return m`
      <span
        part="base"
        class=${w({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?m`
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
    `}}Is([a({reflect:!0})],ci.prototype,"size");Is([a({type:Boolean})],ci.prototype,"removable");const wa=p`
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

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }/* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--syn-input-placeholder-color);
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
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    color: var(--syn-color-neutral-500);
    padding-block: var(--syn-spacing-x-small);
    padding-inline: var(--syn-spacing-x-large);
  }
`,xa=p`
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

  .select--medium .select__clear {
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Expand icon */
  .select__expand-icon {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-spacing-large);
    margin-inline-start: var(--syn-spacing-small);
  }

  /* Change select border on hover */
  /* stylelint-disable-next-line no-descending-specificity */
  .select:not(.select--disabled):hover .select__combobox {
    border-color: var(--syn-input-color-hover);
  }

  /* Prefix */

  /* Small */
  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .select__prefix {
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
    border-radius: 0;
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
`;var ka=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,I=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ca(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&ka(t,e,i),i};class D extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new G(this,"help-text","label"),this.localize=new j(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>m`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=e.closest(".select__clear")!==null,i=e.closest("syn-icon-button")!==null;if(!(o||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),n=r.indexOf(this.currentOption);let l=Math.max(0,n);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(l=n+1,l>r.length-1&&(l=0)):t.key==="ArrowUp"?(l=n-1,l<0&&(l=r.length-1)):t.key==="Home"?l=0:t.key==="End"&&(l=r.length-1),this.setCurrentOption(r[l])}if(t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const n of r)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static{this.styles=[C,Gt,wa,Xt,xa]}static{this.dependencies={"syn-icon":_t,"syn-popup":P,"syn-tag":ci}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const o=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="syn-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("syn-option"),i=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("syn-option")?(t.forEach(i=>o.push(i.value)),this.setSelectedOptions(t.filter(i=>e.includes(i.value)))):customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),o.length&&o.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=this.selectedOptions[0]?.value??"",this.displayLabel=this.selectedOptions[0]?.getTextLabel()??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return m`<div @syn-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof o=="string"?ba(o):o}
        </div>`}else if(e===this.maxOptionsVisible)return m`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`;return m``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>e.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await X(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=V(this,"select.show",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.currentOption&&gi(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await X(this);const{keyframes:t,options:e}=V(this,"select.hide",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Z(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Z(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return m`
      <div
        part="form-control"
        class=${w({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${w({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
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

              ${this.multiple?m`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?m`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}I([f(".select")],D.prototype,"popup",2);I([f(".select__combobox")],D.prototype,"combobox",2);I([f(".select__display-input")],D.prototype,"displayInput",2);I([f(".select__value-input")],D.prototype,"valueInput",2);I([f(".select__listbox")],D.prototype,"listbox",2);I([S()],D.prototype,"hasFocus",2);I([S()],D.prototype,"displayLabel",2);I([S()],D.prototype,"currentOption",2);I([S()],D.prototype,"selectedOptions",2);I([a()],D.prototype,"name",2);I([a({converter:{fromAttribute:s=>s.split(" "),toAttribute:s=>s.join(" ")}})],D.prototype,"value",2);I([ce()],D.prototype,"defaultValue",2);I([a({reflect:!0})],D.prototype,"size",2);I([a()],D.prototype,"placeholder",2);I([a({type:Boolean,reflect:!0})],D.prototype,"multiple",2);I([a({attribute:"max-options-visible",type:Number})],D.prototype,"maxOptionsVisible",2);I([a({type:Boolean,reflect:!0})],D.prototype,"disabled",2);I([a({type:Boolean})],D.prototype,"clearable",2);I([a({type:Boolean,reflect:!0})],D.prototype,"open",2);I([a({type:Boolean})],D.prototype,"hoist",2);I([a()],D.prototype,"label",2);I([a({reflect:!0})],D.prototype,"placement",2);I([a({attribute:"help-text"})],D.prototype,"helpText",2);I([a({reflect:!0})],D.prototype,"form",2);I([a({type:Boolean,reflect:!0})],D.prototype,"required",2);I([a()],D.prototype,"getTag",2);I([g("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);I([g("value",{waitUntilFirstUpdate:!0})],D.prototype,"handleValueChange",1);I([g("open",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",1);A("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});A("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});D.define("syn-select");const za=p`
  :host {
    --side-nav-open-width: 320px;
    --side-nav-rail-width: 72px;

    display: block;
  }

  /* Side nav should have a width, so it behave correct in an e.g. display flex context */
  .side-nav:not(.side-nav--rail).side-nav--open {
    width: var(--side-nav-open-width);
  }
  
  /**
   * Side nav should have a width, so it behave correct in an e.g. display flex context.
   * In rail mode the width is always the small rail width, because there should be no shrinking possible of the main content area.
   */
  .side-nav.side-nav--rail {
    width: var(--side-nav-rail-width);
  }



  /**
   * Syn-drawer styling
   */
  .side-nav__drawer {
    --size: var(--side-nav-open-width);
  }
  
  .side-nav__drawer::part(base){
    position: absolute;
  }

  .side-nav__drawer::part(body), .side-nav__drawer::part(footer) {
    padding: 0;
  }

  /** 
   * Overlay 
   */
  .side-nav__drawer::part(overlay){
    position: absolute;
  }

  /**
   * Fixed mode
   */
  .side-nav--fix .side-nav__drawer::part(overlay){
    display: block;
  }

  /**
   * Rail mode
   */
  :not(.side-nav--open).side-nav--rail .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  .side-nav--open.side-nav--rail.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  /**
   * Avoid multiline flickering on open and close animation
   */
  .side-nav--rail.side-nav--animation {
    white-space: nowrap;
  }

  /**
   * Hide the scrollbars in closed rail mode
   */ 
  :not(.side-nav--open).side-nav--rail .side-nav__drawer::part(body){
    overflow: hidden;
  }

  /**
   * Footer divider
   */
  .side-nav__footer-divider{
    --spacing: 0;
    --color: var(--syn-color-neutral-300);
  }

  :not(.side-nav--open).side-nav--rail ::slotted(syn-nav-item){
    --display-children: none;
  }
`;var $a=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,ee=(s,t,e,o)=>{for(var i=o>1?void 0:o?Sa(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&$a(t,e,i),i};class jt extends k{constructor(){super(),this.hasSlotController=new G(this,"[default]","footer"),this.localize=new j(this),this.isAnimationActive=!1,this.open=!1,this.rail=!1,this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener("syn-initial-focus",t=>{this.rail&&(t.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener("focusin",t=>{t.target.tagName.toLowerCase()==="syn-nav-item"&&this.rail&&!this.open&&(this.open=!0)}),this.addEventListener("focusout",t=>{const e=t.target.tagName.toLowerCase(),o=t.relatedTarget?.tagName.toLowerCase();e==="syn-nav-item"&&o!=="syn-nav-item"&&this.rail&&this.open&&(this.open=!1)})}static{this.styles=[C,za]}static{this.dependencies={"syn-divider":Jt,"syn-drawer":wt}}setDelayedCallback(t){clearTimeout(this.timeout),this.timeout=setTimeout(t,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerVisibility(t){this.drawer.shadowRoot.querySelector(".drawer").hidden=!t,this.drawer.shadowRoot.querySelector(".drawer__panel")?.setAttribute("aria-hidden",t?"false":"true")}forceDrawerVisibilityForRailMode(){return Z(this,"syn-after-hide").then(()=>{this.setDrawerVisibility(!0),this.isAnimationActive=!1})}setDrawerAnimations(){const t=V(this,`sideNav.show${this.rail?"Rail":"NonRail"}`,{dir:this.localize.dir()}),e=V(this,`sideNav.hide${this.rail?"Rail":"NonRail"}`,{dir:this.localize.dir()}),o=V(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),i=V(this,"sideNav.overlay.show",{dir:this.localize.dir()});Ke(this.drawer,"drawer.showStart",t),Ke(this.drawer,"drawer.hideStart",e),Ke(this.drawer,"drawer.overlay.hide",o),Ke(this.drawer,"drawer.overlay.show",i)}handleModeChange(){this.setDrawerAnimations(),this.rail?(this.addMouseListener(),this.setDrawerVisibility(!0)):(this.removeMouseListener(),this.open||this.setDrawerVisibility(!1))}handleOpenChange(){this.rail&&(this.isAnimationActive=!0,this.open?Z(this.drawer,"syn-after-show").then(()=>{this.isAnimationActive=!1}):this.forceDrawerVisibilityForRailMode())}handleFocusTrapping(){this.rail||(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,Z(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,Z(this,"syn-after-hide")}firstUpdated(){this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.shadowRoot.querySelector(".drawer__panel").tabIndex=-1}),this.rail?this.drawer.updateComplete.then(()=>{this.addMouseListener(),this.setDrawerVisibility(!0)}):this.noFocusTrapping&&this.drawer.modal.activateExternal()}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(ye(this.drawer),this.drawer.modal.deactivate())}render(){const t=window.navigator.maxTouchPoints>0||"ontouchstart"in window,e=this.hasSlotController.test("footer");return Q`
      <nav
        class=${w({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":!this.rail,"side-nav--has-footer":e,"side-nav--open":this.open,"side-nav--rail":this.rail,"side-nav--touch":t})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.rail}
          exportparts="overlay"
          label=${this.localize.term("sideNav")}
          no-header
          ?open=${this.open}
          part="drawer"
          placement="start"
          @syn-request-close=${this.handleRequestClose} 
        >
          <div part="content-container" class="side-nav__content-container">
            <slot part="content" ></slot>
          </div>
          
          <footer class="side-nav__footer" part="footer-container" slot="footer">  

            ${e?Q`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot> 
          
          </footer>

        </syn-drawer>

      </nav>
    `}}ee([S()],jt.prototype,"isAnimationActive",2);ee([f(".side-nav__drawer")],jt.prototype,"drawer",2);ee([a({reflect:!0,type:Boolean})],jt.prototype,"open",2);ee([a({reflect:!0,type:Boolean})],jt.prototype,"rail",2);ee([a({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],jt.prototype,"noFocusTrapping",2);ee([g("rail",{waitUntilFirstUpdate:!0})],jt.prototype,"handleModeChange",1);ee([g("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);ee([g("noFocusTrapping",{waitUntilFirstUpdate:!0})],jt.prototype,"handleFocusTrapping",1);A("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});A("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});A("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});A("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});A("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});A("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});jt.define("syn-side-nav");$i.define("syn-spinner");const Aa=p`
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
`,Oa=p`
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
  `;var Ta=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,ht=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ea(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ta(t,e,i),i};class at extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new G(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}static{this.styles=[C,Gt,Aa,Xt,Oa]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${w({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${w({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_(this.value)}
            .checked=${Fe(this.checked)}
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
    `}}ht([f('input[type="checkbox"]')],at.prototype,"input",2);ht([S()],at.prototype,"hasFocus",2);ht([a()],at.prototype,"title",2);ht([a()],at.prototype,"name",2);ht([a()],at.prototype,"value",2);ht([a({reflect:!0})],at.prototype,"size",2);ht([a({type:Boolean,reflect:!0})],at.prototype,"disabled",2);ht([a({type:Boolean,reflect:!0})],at.prototype,"checked",2);ht([ce("checked")],at.prototype,"defaultChecked",2);ht([a({reflect:!0})],at.prototype,"form",2);ht([a({type:Boolean,reflect:!0})],at.prototype,"required",2);ht([a({attribute:"help-text"})],at.prototype,"helpText",2);ht([g("checked",{waitUntilFirstUpdate:!0})],at.prototype,"handleCheckedChange",1);ht([g("disabled",{waitUntilFirstUpdate:!0})],at.prototype,"handleDisabledChange",1);at.define("syn-switch");const Da=p`
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
`,Pa=p`
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
`;var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,xt=(s,t,e,o)=>{for(var i=o>1?void 0:o?La(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ia(t,e,i),i};class bt extends k{constructor(){super(...arguments),this.localize=new j(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1}static{this.styles=[C,Da,Pa]}static{this.dependencies={"syn-icon-button":_e}}connectedCallback(){const t=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,i)=>{o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),i.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.nav&&this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(o=>t.includeDisabled?o.tagName.toLowerCase()==="syn-tab":o.tagName.toLowerCase()==="syn-tab"&&!o.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="syn-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const o=t.target.closest("syn-tab");o?.closest("syn-tab-group")===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){const o=t.target.closest("syn-tab");if(o?.closest("syn-tab-group")===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(l=>l.matches(":focus")),n=this.localize.dir()==="rtl";if(r?.tagName.toLowerCase()==="syn-tab"){let l=this.tabs.indexOf(r);t.key==="Home"?l=0:t.key==="End"?l=this.tabs.length-1:["top"].includes(this.placement)&&t.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?l--:(["top"].includes(this.placement)&&t.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&l++,l<0&&(l=this.tabs.length-1),l>this.tabs.length-1&&(l=0),this.tabs[l].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[l],{scrollBehavior:"smooth"}),["top"].includes(this.placement)&&gi(this.tabs[l],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>i.active=i.name===this.activeTab?.panel),this.syncIndicator(),["top"].includes(this.placement)&&gi(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("syn-tab-hide",{detail:{name:o.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),l=r.slice(0,r.indexOf(t)).reduce((d,c)=>({left:d.left+c.clientWidth,top:d.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${e}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${i?"-":""}1 * (${l.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${o}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${l.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(o=>o.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){return m`
      <div
        part="base"
        class=${w({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?m`
                <syn-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></syn-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?m`
                <syn-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></syn-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}}xt([f(".tab-group")],bt.prototype,"tabGroup",2);xt([f(".tab-group__body")],bt.prototype,"body",2);xt([f(".tab-group__nav")],bt.prototype,"nav",2);xt([f(".tab-group__indicator")],bt.prototype,"indicator",2);xt([S()],bt.prototype,"hasScrollControls",2);xt([a()],bt.prototype,"placement",2);xt([a()],bt.prototype,"activation",2);xt([a({attribute:"no-scroll-controls",type:Boolean})],bt.prototype,"noScrollControls",2);xt([a({type:Boolean})],bt.prototype,"contained",2);xt([a({type:Boolean})],bt.prototype,"sharp",2);xt([g("noScrollControls",{waitUntilFirstUpdate:!0})],bt.prototype,"updateScrollControls",1);xt([g("placement",{waitUntilFirstUpdate:!0})],bt.prototype,"syncIndicator",1);bt.define("syn-tab-group");const Ma=p`
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
`,Fa=p`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`;var Va=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,Mi=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ra(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Va(t,e,i),i};let Ba=0;class hi extends k{constructor(){super(...arguments),this.attrId=++Ba,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}static{this.styles=[C,Ma,Fa]}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return m`
      <slot
        part="base"
        class=${w({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}}Mi([a({reflect:!0})],hi.prototype,"name",2);Mi([a({type:Boolean,reflect:!0})],hi.prototype,"active",2);Mi([g("active")],hi.prototype,"handleActiveChange",1);hi.define("syn-tab-panel");const Na=p`
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

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  .tab:focus-visible {
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
`,ja=p`
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
  .tab:focus-visible {
    outline-offset: calc(var(--syn-focus-ring-offset) * -1);
  }

  .tab:focus-visible:not(.tab--disabled) {
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
`;var Ua=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,pe=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ha(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ua(t,e,i),i};let qa=0;class ie extends k{constructor(){super(...arguments),this.localize=new j(this),this.attrId=++qa,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}static{this.styles=[C,Na,ja]}static{this.dependencies={"syn-icon-button":_e}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,m`
      <div
        part="base"
        class=${w({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?m`
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
    `}}pe([f(".tab")],ie.prototype,"tab",2);pe([a({reflect:!0})],ie.prototype,"panel",2);pe([a({type:Boolean,reflect:!0})],ie.prototype,"active",2);pe([a({type:Boolean})],ie.prototype,"closable",2);pe([a({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);pe([g("active")],ie.prototype,"handleActiveChange",1);pe([g("disabled")],ie.prototype,"handleDisabledChange",1);ie.define("syn-tab");ci.define("syn-tag");const Wa=p`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .textarea {
    display: flex;
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
    flex: 1 1 auto;
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
`,Ka=p`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`;var Ya=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,F=(s,t,e,o)=>{for(var i=o>1?void 0:o?Ga(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&Ya(t,e,i),i};class L extends k{constructor(){super(...arguments),this.formControlController=new Ft(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new G(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}static{this.styles=[C,Gt,Wa,Xt,Ka]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const r=e??this.input.selectionStart,n=o??this.input.selectionEnd;this.input.setRangeText(t,r,n,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e;return m`
      <div
        part="form-control"
        class=${w({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${w({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${_(this.name)}
              .value=${Fe(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              rows=${_(this.rows)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              autocapitalize=${_(this.autocapitalize)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${_(this.spellcheck)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
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
    `}}F([f(".textarea__control")],L.prototype,"input",2);F([S()],L.prototype,"hasFocus",2);F([a()],L.prototype,"title",2);F([a()],L.prototype,"name",2);F([a()],L.prototype,"value",2);F([a({reflect:!0})],L.prototype,"size",2);F([a()],L.prototype,"label",2);F([a({attribute:"help-text"})],L.prototype,"helpText",2);F([a()],L.prototype,"placeholder",2);F([a({type:Number})],L.prototype,"rows",2);F([a()],L.prototype,"resize",2);F([a({type:Boolean,reflect:!0})],L.prototype,"disabled",2);F([a({type:Boolean,reflect:!0})],L.prototype,"readonly",2);F([a({reflect:!0})],L.prototype,"form",2);F([a({type:Boolean,reflect:!0})],L.prototype,"required",2);F([a({type:Number})],L.prototype,"minlength",2);F([a({type:Number})],L.prototype,"maxlength",2);F([a()],L.prototype,"autocapitalize",2);F([a()],L.prototype,"autocorrect",2);F([a()],L.prototype,"autocomplete",2);F([a({type:Boolean})],L.prototype,"autofocus",2);F([a()],L.prototype,"enterkeyhint",2);F([a({type:Boolean,converter:{fromAttribute:s=>!(!s||s==="false"),toAttribute:s=>s?"true":"false"}})],L.prototype,"spellcheck",2);F([a()],L.prototype,"inputmode",2);F([ce()],L.prototype,"defaultValue",2);F([g("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);F([g("rows",{waitUntilFirstUpdate:!0})],L.prototype,"handleRowsChange",1);F([g("value",{waitUntilFirstUpdate:!0})],L.prototype,"handleValueChange",1);L.define("syn-textarea");st.define("syn-tooltip");function Xa(s){const t=typeof window<"u"&&window;return!!(t&&(t.navigator.userAgent.match(/Chromatic/)||t.location.href.match(/chromatic=true/)))}const Za=(s,...t)=>Xa()?m`
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
      ${s(...t)}
    `:s(...t),ei="🌞 light",ki="🌙 dark",Ja=s=>`https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=${s}`,Qa=(s,t="Go to Figma page")=>({label:t,type:"link",url:Ja(s)});function tl(s,t){const e=document.querySelectorAll(`#anchor--${t.id}`),i=JSON.parse('{"@synergy-design-system/components":"2.5.0","@synergy-design-system/assets":"1.7.0","@synergy-design-system/styles":"1.1.0","@synergy-design-system/tokens":"2.7.0"}');return e.forEach(r=>{const n=r.querySelector(".docblock-code-toggle");if(n){const l=n.cloneNode(!0);l.textContent="Edit on CodePen",l.classList.add("docblock-codepen-button");const d=r.querySelector(".sb-bar");d?r.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.remove()}):r.querySelectorAll(".docblock-codepen-button").forEach(c=>{c.remove()}),n.parentElement.appendChild(l),d&&(r.querySelectorAll(".docblock-codepen-button:not(:last-of-type)").forEach(c=>{c.style.display="block",c.style.borderRight="none"}),r.querySelector(".docblock-codepen-button:last-of-type").style.display="none"),l.addEventListener("click",()=>{const c=document.createElement("form");c.action="https://codepen.io/pen/define",c.method="POST",c.target="_blank";const h={css:`/* Import theme */
@import url("https://esm.sh/@synergy-design-system/tokens@${i["@synergy-design-system/tokens"]}/dist/themes/light.css");

/* Import utilities */
@import url("https://esm.sh/@synergy-design-system/components@${i["@synergy-design-system/components"]}/dist/styles/index.css");

/* Import styles */
@import url("https://esm.sh/@synergy-design-system/styles@${i["@synergy-design-system/styles"]}/dist/index.css");

body {
  font-family: var(--syn-font-sans);
}`,css_external:"",description:"",editors:1110,head:'<meta name="viewport" content="width=device-width">',html:s,js:`import * as components from "https://esm.sh/@synergy-design-system/components@${i["@synergy-design-system/components"]}/dist/synergy.js";

// Override to make icons work with CDN
const { registerIconLibrary } = components;

registerIconLibrary("default", {
resolver: (name) =>
\`https://esm.sh/@synergy-design-system/assets@${i["@synergy-design-system/assets"]}/src/icons/\${name}.svg\`
});`,js_external:"",js_module:!0,js_pre_processor:"none",tags:["synergy-design-system","web components"],title:""},u=document.createElement("input");u.type="hidden",u.name="data",u.value=JSON.stringify(h),c.append(u),document.documentElement.append(c),c.submit(),c.remove()})}}),s}const el=so({defaultTheme:ei,parentSelector:"body",themes:{[ei]:"syn-theme-light",[ki]:"syn-theme-dark"}}),il={decorators:[Za,el],parameters:{backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{disableSnapshot:!0,modes:{[ei]:{theme:ei},[ki]:{theme:ki}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},design:Qa("104-238"),docs:{stories:{inline:!1},toc:{headingSelector:"h2, h3"},source:{format:"html",transform:tl}},viewport:{defaultViewport:"defaultViewPort",viewports:{...oo,defaultViewPort:{name:"Default",styles:{width:"100%",height:"100%"},type:"desktop"}}}}},hl=Object.freeze(Object.defineProperty({__proto__:null,default:il},Symbol.toStringTag,{value:"Module"}));export{hl as a,is as f,Qa as g,Xa as i,ba as o,il as p};
