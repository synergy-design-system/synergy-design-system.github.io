import"./index-B3ehnkiM.js";import{S as ce,a as x,b,c as We,t as xt,o as v,s as ke,n as Y,e as Oe}from"./icon-button-at3U5XDM.js";import{i as u,x as m,u as Si,w as Gt,T as ae}from"./lit-element-DILkAbkc.js";import{a as C,c as $,w as _,n as a,b as O,S as Ct}from"./icon.component-ByoCKD1b.js";import{f as Ni,m as xo}from"./directive-helpers-DbZfDV3x.js";import"./icon-DcK8x6ha.js";function q(i,t,e){return new Promise(s=>{if(e?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=i.animate(t,{...e,duration:ko()?0:e.duration});o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function Oi(i){return i=i.toString().toLowerCase(),i.indexOf("ms")>-1?parseFloat(i):i.indexOf("s")>-1?parseFloat(i)*1e3:parseFloat(i)}function ko(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function G(i){return Promise.all(i.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}const Ui=new Map,ni=new WeakMap;function Hi(i){return i??{keyframes:[],options:{duration:0}}}function Ai(i,t){return t.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function T(i,t){Ui.set(i,Hi(t))}function Me(i,t,e){ni.set(i,{...ni.get(i),[t]:Hi(e)})}function U(i,t,e){const s=ni.get(i);if(s?.[t])return Ai(s[t],e.dir);const o=Ui.get(t);return o?Ai(o,e.dir):{keyframes:[],options:{duration:0}}}class K{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const o=s.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}function ji(i){if(!i)return"";const t=i.assignedNodes({flatten:!0});let e="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e}const ri=new Set,Co=new MutationObserver(Yi),se=new Map;let Wi=document.documentElement.dir||"ltr",qi=document.documentElement.lang||navigator.language,Yt;Co.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ki(...i){i.map(t=>{const e=t.$code.toLowerCase();se.has(e)?se.set(e,Object.assign(Object.assign({},se.get(e)),t)):se.set(e,t),Yt||(Yt=t)}),Yi()}function Yi(){Wi=document.documentElement.dir||"ltr",qi=document.documentElement.lang||navigator.language,[...ri.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}let $o=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ri.add(this.host)}hostDisconnected(){ri.delete(this.host)}dir(){return`${this.host.dir||Wi}`.toLowerCase()}lang(){return`${this.host.lang||qi}`.toLowerCase()}getTranslationData(t){var e,s;const o=new Intl.Locale(t.replace(/_/g,"-")),n=o?.language.toLowerCase(),r=(s=(e=o?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&s!==void 0?s:"",l=se.get(`${n}-${r}`),c=se.get(n);return{locale:o,language:n,region:r,primary:l,secondary:c}}exists(t,e){var s;const{primary:o,secondary:n}=this.getTranslationData((s=e.lang)!==null&&s!==void 0?s:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||n&&n[t]||e.includeFallback&&Yt&&Yt[t])}term(t,...e){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let n;if(s&&s[t])n=s[t];else if(o&&o[t])n=o[t];else if(Yt&&Yt[t])n=Yt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,e)}};const Gi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(i,t)=>`Go to slide ${i} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:i=>`Slide ${i}`,toggleColorFormat:"Toggle color format",closeMenu:"Close menu",danger:"Danger",notification:"Notification",menu:"Menu",openMenu:"Open menu",sideNav:"Side navigation",success:"Success",warning:"Warning"};Ki(Gi);class H extends $o{static{Ki(Gi)}}function X(i,t){return new Promise(e=>{function s(o){o.target===i&&(i.removeEventListener(t,s),e())}i.addEventListener(t,s)})}const zo=u`
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
`,So=u`
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
`;var Oo=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Zt=(i,t,e,s)=>{for(var o=s>1?void 0:s?Ao(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Oo(t,e,o),o};const oe=Object.assign(document.createElement("div"),{className:"syn-toast-stack"});class Nt extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"icon","suffix"),this.localize=new H(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}static{this.styles=[$,zo,So]}static{this.dependencies={"syn-icon-button":ce}}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.duration<1/0&&this.restartAutoHide(),await G(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=U(this,"alert.show",{dir:this.localize.dir()});await q(this.base,t,e),this.emit("syn-after-show")}else{this.emit("syn-hide"),clearTimeout(this.autoHideTimeout),await G(this.base);const{keyframes:t,options:e}=U(this,"alert.hide",{dir:this.localize.dir()});await q(this.base,t,e),this.base.hidden=!0,this.emit("syn-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,X(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,X(this,"syn-after-hide")}async toast(){return new Promise(t=>{oe.parentElement===null&&document.body.append(oe),oe.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("syn-after-hide",()=>{oe.removeChild(this),t(),oe.querySelector("syn-alert")===null&&oe.remove()},{once:!0})})}render(){return m`
      <div
        part="base"
        class=${x({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
    `}}Zt([b('[part~="base"]')],Nt.prototype,"base",2);Zt([a({type:Boolean,reflect:!0})],Nt.prototype,"open",2);Zt([a({type:Boolean,reflect:!0})],Nt.prototype,"closable",2);Zt([a({reflect:!0})],Nt.prototype,"variant",2);Zt([a({type:Number})],Nt.prototype,"duration",2);Zt([_("open",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleOpenChange",1);Zt([_("duration")],Nt.prototype,"handleDurationChange",1);T("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});T("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Nt.define("syn-alert");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=(i,t)=>{const e=i._$AN;if(e===void 0)return!1;for(const s of e)s._$AO?.(t,!1),Ce(s,t);return!0},Ve=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Xi=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Do(t)}};function Eo(i){this._$AN!==void 0?(Ve(this),this._$AM=i,Xi(this)):this._$AM=i}function To(i,t=!1,e=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(s))for(let n=e;n<s.length;n++)Ce(s[n],!1),Ve(s[n]);else s!=null&&(Ce(s,!1),Ve(s));else Ce(this,i)}const Do=i=>{i.type==xt.CHILD&&(i._$AP??=To,i._$AQ??=Eo)};class Zi extends We{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Xi(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ce(this,t),Ve(this))}setValue(t){if(Ni(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{useParameter:Po,addons:Lo,useEffect:Io,useMemo:Ea}=__STORYBOOK_MODULE_PREVIEW_API__;var Mo=Object.defineProperty,Fo=(i,t)=>{for(var e in t)Mo(i,e,{get:t[e],enumerable:!0})},Ro={};Fo(Ro,{initializeThemeState:()=>eo,pluckThemeFromContext:()=>Ji,useThemeParameters:()=>to});var Qi="themes",Bo=`storybook/${Qi}`,Vo="theme",No={},Uo={REGISTER_THEMES:`${Bo}/REGISTER_THEMES`};function Ji({globals:i}){return i[Vo]||""}function to(){return Po(Qi,No)}function eo(i,t){Lo.getChannel().emit(Uo.REGISTER_THEMES,{defaultTheme:t,themes:i})}var Ho="html",Ei=i=>i.split(" ").filter(Boolean),jo=({themes:i,defaultTheme:t,parentSelector:e=Ho})=>(eo(Object.keys(i),t),(s,o)=>{let{themeOverride:n}=to(),r=Ji(o);return Io(()=>{let l=n||r||t,c=document.querySelector(e);if(!c)return;Object.entries(i).filter(([h])=>h!==l).forEach(([h,p])=>{let y=Ei(p);y.length>0&&c.classList.remove(...y)});let d=Ei(i[l]);d.length>0&&c.classList.add(...d)},[n,r,e]),s()}),Wo={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};const qo=u`
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
`,Ko=u`
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
`;var Yo=Object.defineProperty,Go=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&Yo(t,e,o),o};class io extends C{constructor(){super(...arguments),this.localize=new H(this),this.variant="primary"}static{this.styles=[$,qo,Ko]}render(){return m`
      <span
        part="base"
        class=${x({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger"})}
        role="status"
      >
        <slot>
          <span class="visually-hidden">
            ${this.localize.term(this.variant==="primary"||this.variant==="neutral"?"notification":this.variant)}
          </span>
        </slot>
      </span>
    `}}Go([a({reflect:!0})],io.prototype,"variant");io.define("syn-badge");const Xo=u`
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
`,Zo=u`
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
`;var Qo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,de=(i,t,e,s)=>{for(var o=s>1?void 0:s?Jo(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Qo(t,e,o),o};class Qt extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}static{this.styles=[$,Xo,Zo]}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="syn-dropdown").length>0;this.renderType=this.href?"link":t?"drop-down":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return m`
      <div
        part="base"
        class=${x({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?m`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${v(this.target?this.target:void 0)}"
                rel=${v(this.target?this.rel:void 0)}
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
    `}}de([b("slot:not([name])")],Qt.prototype,"defaultSlot",2);de([O()],Qt.prototype,"renderType",2);de([a()],Qt.prototype,"href",2);de([a()],Qt.prototype,"target",2);de([a()],Qt.prototype,"rel",2);de([_("href",{waitUntilFirstUpdate:!0})],Qt.prototype,"hrefChanged",1);Qt.define("syn-breadcrumb-item");const ts=u`
	/* stylelint-disable */
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,es=u`
  /* Write custom CSS here */
`;var is=Object.defineProperty,mi=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&is(t,e,o),o};class qe extends C{constructor(){super(...arguments),this.localize=new H(this),this.separatorDir=this.localize.dir(),this.label=""}static{this.styles=[$,ts,es]}static{this.dependencies={"syn-icon":Ct}}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="syn-breadcrumb-item");t.forEach((e,s)=>{const o=e.querySelector('[slot="separator"]');o===null?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),m`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <syn-icon name="chevron-down" library="system" class=${this.localize.dir()}></syn-icon>
        </slot>
      </span>
    `}}mi([b("slot")],qe.prototype,"defaultSlot");mi([b('slot[name="separator"]')],qe.prototype,"separatorSlot");mi([a()],qe.prototype,"label");qe.define("syn-breadcrumb");const os=u`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var ss=Object.defineProperty,fi=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&ss(t,e,o),o};class Ae extends C{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=[$,os]}handleFocus(t){ge(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(t){ge(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(t){ge(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(t){ge(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),o=ge(e);o&&(o.toggleAttribute("data-syn-button-group__button",!0),o.toggleAttribute("data-syn-button-group__button--first",s===0),o.toggleAttribute("data-syn-button-group__button--inner",s>0&&s<t.length-1),o.toggleAttribute("data-syn-button-group__button--last",s===t.length-1),o.toggleAttribute("data-syn-button-group__button--radio",o.tagName.toLowerCase()==="syn-radio-button"))})}render(){return m`
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
    `}}fi([b("slot")],Ae.prototype,"defaultSlot");fi([O()],Ae.prototype,"disableRole");fi([a()],Ae.prototype,"label");function ge(i){const t="syn-button, syn-radio-button";return i.closest(t)??i.querySelector(t)}Ae.define("syn-button-group");const ve=new WeakMap,_e=new WeakMap,we=new WeakMap,ii=new WeakSet,Fe=new WeakMap;class Jt{constructor(t,e){this.handleFormData=s=>{const o=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";this.host.isConnected&&!o&&!l&&typeof n=="string"&&n.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{s.formData.append(n,c.toString())}):s.formData.append(n,r.toString()))},this.handleFormSubmit=s=>{const o=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&ve.get(this.form)?.forEach(r=>{this.setUserInteracted(r,!0)}),this.form&&!this.form.noValidate&&!o&&!n(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Fe.set(this.host,[])},this.handleInteraction=s=>{const o=Fe.get(this.host);o.includes(s.type)||o.push(s.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:s=>{const o=s.form;if(o){const r=s.getRootNode().querySelector(`#${o}`);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>s.disabled??!1,reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,o)=>s.value=o,assumeInteractionOn:["syn-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Fe.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Fe.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ve.has(this.form)?ve.get(this.form).add(this.host):ve.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),_e.has(this.form)||(_e.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),we.has(this.form)||(we.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=ve.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),_e.has(this.form)&&(this.form.reportValidity=_e.get(this.form),_e.delete(this.form)),we.has(this.form)&&(this.form.checkValidity=we.get(this.form),we.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ii.add(t):ii.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const s=document.createElement("button");s.type=t,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",e&&(s.name=e.name,s.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&s.setAttribute(o,e.getAttribute(o))})),this.form.append(s),s.click(),s.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,s=!!ii.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&s),e.toggleAttribute("data-user-valid",t&&s)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}}const Ke=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ns=Object.freeze({...Ke,valid:!1,valueMissing:!0}),rs=Object.freeze({...Ke,valid:!1,customError:!0}),as=u`
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
`,ls=u`
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
`;class bi extends C{constructor(){super(...arguments),this.localize=new H(this)}static{this.styles=[$,as,ls]}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const oo=u`
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
`,cs=u`
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
`;var ds=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,B=(i,t,e,s)=>{for(var o=s>1?void 0:s?hs(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ds(t,e,o),o};class R extends C{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new K(this,"[default]","prefix","suffix"),this.localize=new H(this),this.iconOnly=!1,this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}static{this.styles=[$,oo,cs]}static{this.dependencies={"syn-icon":Ct,"syn-spinner":bi}}get validity(){return this.isButton()?this.button.validity:Ke}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleSlotChange(){const t=ji(this.defaultSlot).trim(),e=this.defaultSlot.assignedElements({flatten:!0}),s=e.length===1&&e[0].tagName.toLowerCase()==="syn-icon";this.iconOnly=s&&t===""}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?ke`a`:ke`button`;return Y`
      <${e}
        part="base"
        class=${x({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${v(t?void 0:this.disabled)}
        type=${v(t?void 0:this.type)}
        title=${this.title}
        name=${v(t?void 0:this.name)}
        value=${v(t?void 0:this.value)}
        href=${v(t?this.href:void 0)}
        target=${v(t?this.target:void 0)}
        download=${v(t?this.download:void 0)}
        rel=${v(t?this.rel:void 0)}
        role=${v(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class=${x({button__label:!0,"button__icon-only":this.iconOnly})} @slotchange=${this.handleSlotChange}></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Y` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?Y`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${e}>
    `}}B([b(".button")],R.prototype,"button",2);B([b("slot:not([name])")],R.prototype,"defaultSlot",2);B([O()],R.prototype,"iconOnly",2);B([O()],R.prototype,"hasFocus",2);B([O()],R.prototype,"invalid",2);B([a()],R.prototype,"title",2);B([a({reflect:!0})],R.prototype,"variant",2);B([a({reflect:!0})],R.prototype,"size",2);B([a({type:Boolean,reflect:!0})],R.prototype,"caret",2);B([a({type:Boolean,reflect:!0})],R.prototype,"disabled",2);B([a({type:Boolean,reflect:!0})],R.prototype,"loading",2);B([a()],R.prototype,"type",2);B([a()],R.prototype,"name",2);B([a()],R.prototype,"value",2);B([a()],R.prototype,"href",2);B([a()],R.prototype,"target",2);B([a()],R.prototype,"rel",2);B([a()],R.prototype,"download",2);B([a()],R.prototype,"form",2);B([a({attribute:"formaction"})],R.prototype,"formAction",2);B([a({attribute:"formenctype"})],R.prototype,"formEnctype",2);B([a({attribute:"formmethod"})],R.prototype,"formMethod",2);B([a({attribute:"formnovalidate",type:Boolean})],R.prototype,"formNoValidate",2);B([a({attribute:"formtarget"})],R.prototype,"formTarget",2);B([_("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1);R.define("syn-button");const us=u`
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
`,ps=u`
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

`;var ms=Object.defineProperty,fs=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&ms(t,e,o),o};class so extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer","header","image"),this.sharp=!1}static{this.styles=[$,us,ps]}render(){return m`
      <div
        part="base"
        class=${x({card:!0,"card--sharp":this.sharp,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}}fs([a({type:Boolean,reflect:!0})],so.prototype,"sharp");so.define("syn-card");const Ee=(i="value")=>(t,e)=>{const s=t.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(n,r,l){const c=s.getPropertyOptions(i),d=typeof c.attribute=="string"?c.attribute:i;if(n===d){const h=c.converter||Si,y=(typeof h=="function"?h:h?.fromAttribute??Si.fromAttribute)(l,c.type);this[i]!==y&&(this[e]=y)}o.call(this,n,r,l)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=Oe(class extends We{constructor(i){if(super(i),i.type!==xt.PROPERTY&&i.type!==xt.ATTRIBUTE&&i.type!==xt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ni(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Gt||t===ae)return t;const e=i.element,s=i.name;if(i.type===xt.PROPERTY){if(t===e[s])return Gt}else if(i.type===xt.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(s))return Gt}else if(i.type===xt.ATTRIBUTE&&e.getAttribute(s)===t+"")return Gt;return xo(i),t}}),he=u`
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
`,ue=u` 

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
  
  :host([data-user-invalid]) .form-control__help-text {
    color: var(--syn-input-help-text-color-error);
   }

    /* DISABLED */

  :host([disabled]) .form-control--has-label .form-control__label,
  :host([disabled]) .form-control--has-help-text .form-control__help-text {
    cursor: not-allowed;
    opacity: 0.5;
  }

`,bs=u`
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
`,ys=u`
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
`;var gs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,J=(i,t,e,s)=>{for(var o=s>1?void 0:s?vs(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&gs(t,e,o),o};class Z extends C{constructor(){super(...arguments),this.formControlController=new Jt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new K(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}static{this.styles=[$,he,bs,ue,ys]}static{this.dependencies={"syn-icon":Ct}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${x({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${x({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${v(this.value)}
            .indeterminate=${ze(this.indeterminate)}
            .checked=${ze(this.checked)}
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
    `}}J([b('input[type="checkbox"]')],Z.prototype,"input",2);J([O()],Z.prototype,"hasFocus",2);J([a()],Z.prototype,"title",2);J([a()],Z.prototype,"name",2);J([a()],Z.prototype,"value",2);J([a({reflect:!0})],Z.prototype,"size",2);J([a({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);J([a({type:Boolean,reflect:!0})],Z.prototype,"checked",2);J([a({type:Boolean,reflect:!0})],Z.prototype,"indeterminate",2);J([Ee("checked")],Z.prototype,"defaultChecked",2);J([a({reflect:!0})],Z.prototype,"form",2);J([a({type:Boolean,reflect:!0})],Z.prototype,"required",2);J([a({attribute:"help-text"})],Z.prototype,"helpText",2);J([_("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);J([_(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Z.prototype,"handleStateChange",1);Z.define("syn-checkbox");function _s(i,t){return{top:Math.round(i.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(i.getBoundingClientRect().left-t.getBoundingClientRect().left)}}const ai=new Set;function ws(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}function xs(){const i=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(i)||!i?0:i}function $e(i){if(ai.add(i),!document.documentElement.classList.contains("syn-scroll-lock")){const t=ws()+xs();document.documentElement.classList.add("syn-scroll-lock"),document.documentElement.style.setProperty("--syn-scroll-lock-size",`${t}px`)}}function ne(i){ai.delete(i),ai.size===0&&(document.documentElement.classList.remove("syn-scroll-lock"),document.documentElement.style.removeProperty("--syn-scroll-lock-size"))}function li(i,t,e="vertical",s="smooth"){const o=_s(i,t),n=o.top+t.scrollTop,r=o.left+t.scrollLeft,l=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,d=t.scrollTop,h=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(r<l?t.scrollTo({left:r,behavior:s}):r+i.clientWidth>c&&t.scrollTo({left:r-t.offsetWidth+i.clientWidth,behavior:s})),(e==="vertical"||e==="both")&&(n<d?t.scrollTo({top:n,behavior:s}):n+i.clientHeight>h&&t.scrollTo({top:n-t.offsetHeight+i.clientHeight,behavior:s}))}function*yi(i=document.activeElement){i!=null&&(yield i,"shadowRoot"in i&&i.shadowRoot&&i.shadowRoot.mode!=="closed"&&(yield*yi(i.shadowRoot.activeElement)))}function ks(){return[...yi()].pop()}const Ti=new WeakMap;function no(i){let t=Ti.get(i);return t||(t=window.getComputedStyle(i,null),Ti.set(i,t)),t}function Cs(i){if(typeof i.checkVisibility=="function")return i.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=no(i);return t.visibility!=="hidden"&&t.display!=="none"}function $s(i){const t=no(i),{overflowY:e,overflowX:s}=t;return e==="scroll"||s==="scroll"?!0:e!=="auto"||s!=="auto"?!1:i.scrollHeight>i.clientHeight&&e==="auto"||i.scrollWidth>i.clientWidth&&s==="auto"}function zs(i){const t=i.tagName.toLowerCase(),e=Number(i.getAttribute("tabindex"));return i.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||i.hasAttribute("disabled")||i.closest("[inert]")||t==="input"&&i.getAttribute("type")==="radio"&&!i.hasAttribute("checked")||!Cs(i)?!1:(t==="audio"||t==="video")&&i.hasAttribute("controls")||i.hasAttribute("tabindex")||i.hasAttribute("contenteditable")&&i.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:$s(i)}function Ss(i){const t=ci(i),e=t[0]??null,s=t[t.length-1]??null;return{start:e,end:s}}function Os(i,t){return i.getRootNode({composed:!0})?.host!==t}function ci(i){const t=new WeakMap,e=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!e.includes(o)&&zs(o)&&e.push(o),o instanceof HTMLSlotElement&&Os(o,i)&&o.assignedElements({flatten:!0}).forEach(n=>{s(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const n of o.children)s(n)}return s(i),e.sort((o,n)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}let xe=[];class ro{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=ks();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=ci(this.element);let n=o.findIndex(l=>l===s);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const l=o[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const c=[...yi()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){xe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){xe=xe.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return xe[xe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=ci(this.element);if(!this.element.matches(":focus-within")){const e=t[0],s=t[t.length-1],o=this.tabDirection==="forward"?e:s;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}const As=u`
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
`,Es=u`
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
`;var Ts=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,te=(i,t,e,s)=>{for(var o=s>1?void 0:s?Ds(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Ts(t,e,o),o};class Ut extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer"),this.localize=new H(this),this.modal=new ro(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[$,As,Es]}static{this.dependencies={"syn-icon-button":ce}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),$e(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ne(this),this.closeWatcher?.destroy()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=U(this,"dialog.denyClose",{dir:this.localize.dir()});q(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),$e(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([G(this.dialog),G(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,"dialog.show",{dir:this.localize.dir()}),s=U(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([q(this.panel,e.keyframes,e.options),q(this.overlay,s.keyframes,s.options)]),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([G(this.dialog),G(this.overlay)]);const t=U(this,"dialog.hide",{dir:this.localize.dir()}),e=U(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([q(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),q(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ne(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("syn-after-hide")}}async show(){if(!this.open)return this.open=!0,X(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,X(this,"syn-after-hide")}render(){return m`
      <div
        part="base"
        class=${x({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${v(this.noHeader?this.label:void 0)}
          aria-labelledby=${v(this.noHeader?void 0:"title")}
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
    `}}te([b(".dialog")],Ut.prototype,"dialog",2);te([b(".dialog__panel")],Ut.prototype,"panel",2);te([b(".dialog__overlay")],Ut.prototype,"overlay",2);te([a({type:Boolean,reflect:!0})],Ut.prototype,"open",2);te([a({reflect:!0})],Ut.prototype,"label",2);te([a({attribute:"no-header",type:Boolean,reflect:!0})],Ut.prototype,"noHeader",2);te([_("open",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleOpenChange",1);T("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});T("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});T("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});T("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});T("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ut.define("syn-dialog");const Ps=u`
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
`,Ls=u`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var Is=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,ao=(i,t,e,s)=>{for(var o=s>1?void 0:s?Ms(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Is(t,e,o),o};class Ht extends C{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[$,Ps,Ls]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}ao([a({type:Boolean,reflect:!0})],Ht.prototype,"vertical",2);ao([_("vertical")],Ht.prototype,"handleVerticalChange",1);Ht.define("syn-divider");function Di(i){return i.charAt(0).toUpperCase()+i.slice(1)}const Fs=u`
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
`,Rs=u`
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
`;var Bs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,$t=(i,t,e,s)=>{for(var o=s>1?void 0:s?Vs(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Bs(t,e,o),o};class bt extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer"),this.localize=new H(this),this.modal=new ro(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=[$,Fs,Rs]}static{this.dependencies={"syn-icon-button":ce}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),$e(this)))}disconnectedCallback(){super.disconnectedCallback(),ne(this),this.closeWatcher?.destroy()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=U(this,"drawer.denyClose",{dir:this.localize.dir()});q(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),$e(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([G(this.drawer),G(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,`drawer.show${Di(this.placement)}`,{dir:this.localize.dir()}),s=U(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([q(this.panel,e.keyframes,e.options),q(this.overlay,s.keyframes,s.options)]),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ne(this)),await Promise.all([G(this.drawer),G(this.overlay)]);const t=U(this,`drawer.hide${Di(this.placement)}`,{dir:this.localize.dir()}),e=U(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([q(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),q(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),$e(this)),this.open&&this.contained&&(this.modal.deactivate(),ne(this))}async show(){if(!this.open)return this.open=!0,X(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,X(this,"syn-after-hide")}render(){return m`
      <div
        part="base"
        class=${x({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${v(this.noHeader?this.label:void 0)}
          aria-labelledby=${v(this.noHeader?void 0:"title")}
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
    `}}$t([b(".drawer")],bt.prototype,"drawer",2);$t([b(".drawer__panel")],bt.prototype,"panel",2);$t([b(".drawer__overlay")],bt.prototype,"overlay",2);$t([a({type:Boolean,reflect:!0})],bt.prototype,"open",2);$t([a({reflect:!0})],bt.prototype,"label",2);$t([a({reflect:!0})],bt.prototype,"placement",2);$t([a({type:Boolean,reflect:!0})],bt.prototype,"contained",2);$t([a({attribute:"no-header",type:Boolean,reflect:!0})],bt.prototype,"noHeader",2);$t([_("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);$t([_("contained",{waitUntilFirstUpdate:!0})],bt.prototype,"handleNoModalChange",1);T("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});T("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});T("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});T("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});T("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});T("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});T("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});T("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});T("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});T("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});T("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});bt.define("syn-drawer");const Ft=Math.min,dt=Math.max,Ne=Math.round,Re=Math.floor,Rt=i=>({x:i,y:i}),Ns={left:"right",right:"left",bottom:"top",top:"bottom"},Us={start:"end",end:"start"};function di(i,t,e){return dt(i,Ft(t,e))}function pe(i,t){return typeof i=="function"?i(t):i}function Bt(i){return i.split("-")[0]}function me(i){return i.split("-")[1]}function lo(i){return i==="x"?"y":"x"}function gi(i){return i==="y"?"height":"width"}function Te(i){return["top","bottom"].includes(Bt(i))?"y":"x"}function vi(i){return lo(Te(i))}function Hs(i,t,e){e===void 0&&(e=!1);const s=me(i),o=vi(i),n=gi(o);let r=o==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(r=Ue(r)),[r,Ue(r)]}function js(i){const t=Ue(i);return[hi(i),t,hi(t)]}function hi(i){return i.replace(/start|end/g,t=>Us[t])}function Ws(i,t,e){const s=["left","right"],o=["right","left"],n=["top","bottom"],r=["bottom","top"];switch(i){case"top":case"bottom":return e?t?o:s:t?s:o;case"left":case"right":return t?n:r;default:return[]}}function qs(i,t,e,s){const o=me(i);let n=Ws(Bt(i),e==="start",s);return o&&(n=n.map(r=>r+"-"+o),t&&(n=n.concat(n.map(hi)))),n}function Ue(i){return i.replace(/left|right|bottom|top/g,t=>Ns[t])}function Ks(i){return{top:0,right:0,bottom:0,left:0,...i}}function co(i){return typeof i!="number"?Ks(i):{top:i,right:i,bottom:i,left:i}}function He(i){return{...i,top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height}}function Pi(i,t,e){let{reference:s,floating:o}=i;const n=Te(t),r=vi(t),l=gi(r),c=Bt(t),d=n==="y",h=s.x+s.width/2-o.width/2,p=s.y+s.height/2-o.height/2,y=s[l]/2-o[l]/2;let f;switch(c){case"top":f={x:h,y:s.y-o.height};break;case"bottom":f={x:h,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:p};break;case"left":f={x:s.x-o.width,y:p};break;default:f={x:s.x,y:s.y}}switch(me(t)){case"start":f[r]-=y*(e&&d?-1:1);break;case"end":f[r]+=y*(e&&d?-1:1);break}return f}const Ys=async(i,t,e)=>{const{placement:s="bottom",strategy:o="absolute",middleware:n=[],platform:r}=e,l=n.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:i,floating:t,strategy:o}),{x:h,y:p}=Pi(d,s,c),y=s,f={},g=0;for(let w=0;w<l.length;w++){const{name:A,fn:k}=l[w],{x:E,y:M,data:j,reset:N}=await k({x:h,y:p,initialPlacement:s,placement:y,strategy:o,middlewareData:f,rects:d,platform:r,elements:{reference:i,floating:t}});h=E??h,p=M??p,f={...f,[A]:{...f[A],...j}},N&&g<=50&&(g++,typeof N=="object"&&(N.placement&&(y=N.placement),N.rects&&(d=N.rects===!0?await r.getElementRects({reference:i,floating:t,strategy:o}):N.rects),{x:h,y:p}=Pi(d,y,c)),w=-1)}return{x:h,y:p,placement:y,strategy:o,middlewareData:f}};async function _i(i,t){var e;t===void 0&&(t={});const{x:s,y:o,platform:n,rects:r,elements:l,strategy:c}=i,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:y=!1,padding:f=0}=pe(t,i),g=co(f),A=l[y?p==="floating"?"reference":"floating":p],k=He(await n.getClippingRect({element:(e=await(n.isElement==null?void 0:n.isElement(A)))==null||e?A:A.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),E=p==="floating"?{...r.floating,x:s,y:o}:r.reference,M=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),j=await(n.isElement==null?void 0:n.isElement(M))?await(n.getScale==null?void 0:n.getScale(M))||{x:1,y:1}:{x:1,y:1},N=He(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:E,offsetParent:M,strategy:c}):E);return{top:(k.top-N.top+g.top)/j.y,bottom:(N.bottom-k.bottom+g.bottom)/j.y,left:(k.left-N.left+g.left)/j.x,right:(N.right-k.right+g.right)/j.x}}const Gs=i=>({name:"arrow",options:i,async fn(t){const{x:e,y:s,placement:o,rects:n,platform:r,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=pe(i,t)||{};if(d==null)return{};const p=co(h),y={x:e,y:s},f=vi(o),g=gi(f),w=await r.getDimensions(d),A=f==="y",k=A?"top":"left",E=A?"bottom":"right",M=A?"clientHeight":"clientWidth",j=n.reference[g]+n.reference[f]-y[f]-n.floating[g],N=y[f]-n.reference[f],W=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d));let lt=W?W[M]:0;(!lt||!await(r.isElement==null?void 0:r.isElement(W)))&&(lt=l.floating[M]||n.floating[g]);const vt=j/2-N/2,Mt=lt/2-w[g]/2-1,fe=Ft(p[k],Mt),be=Ft(p[E],Mt),mt=fe,ye=lt-w[g]-be,ct=lt/2-w[g]/2+vt,_t=di(mt,ct,ye),wt=!c.arrow&&me(o)!=null&&ct!==_t&&n.reference[g]/2-(ct<mt?fe:be)-w[g]/2<0,At=wt?ct<mt?ct-mt:ct-ye:0;return{[f]:y[f]+At,data:{[f]:_t,centerOffset:ct-_t-At,...wt&&{alignmentOffset:At}},reset:wt}}}),Xs=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:o,middlewareData:n,rects:r,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:y,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:w=!0,...A}=pe(i,t);if((e=n.arrow)!=null&&e.alignmentOffset)return{};const k=Bt(o),E=Bt(l)===l,M=await(c.isRTL==null?void 0:c.isRTL(d.floating)),j=y||(E||!w?[Ue(l)]:js(l));!y&&g!=="none"&&j.push(...qs(l,w,g,M));const N=[l,...j],W=await _i(t,A),lt=[];let vt=((s=n.flip)==null?void 0:s.overflows)||[];if(h&&lt.push(W[k]),p){const mt=Hs(o,r,M);lt.push(W[mt[0]],W[mt[1]])}if(vt=[...vt,{placement:o,overflows:lt}],!lt.every(mt=>mt<=0)){var Mt,fe;const mt=(((Mt=n.flip)==null?void 0:Mt.index)||0)+1,ye=N[mt];if(ye)return{data:{index:mt,overflows:vt},reset:{placement:ye}};let ct=(fe=vt.filter(_t=>_t.overflows[0]<=0).sort((_t,wt)=>_t.overflows[1]-wt.overflows[1])[0])==null?void 0:fe.placement;if(!ct)switch(f){case"bestFit":{var be;const _t=(be=vt.map(wt=>[wt.placement,wt.overflows.filter(At=>At>0).reduce((At,wo)=>At+wo,0)]).sort((wt,At)=>wt[1]-At[1])[0])==null?void 0:be[0];_t&&(ct=_t);break}case"initialPlacement":ct=l;break}if(o!==ct)return{reset:{placement:ct}}}return{}}}};async function Zs(i,t){const{placement:e,platform:s,elements:o}=i,n=await(s.isRTL==null?void 0:s.isRTL(o.floating)),r=Bt(e),l=me(e),c=Te(e)==="y",d=["left","top"].includes(r)?-1:1,h=n&&c?-1:1,p=pe(t,i);let{mainAxis:y,crossAxis:f,alignmentAxis:g}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof g=="number"&&(f=l==="end"?g*-1:g),c?{x:f*h,y:y*d}:{x:y*d,y:f*h}}const Qs=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(t){var e,s;const{x:o,y:n,placement:r,middlewareData:l}=t,c=await Zs(t,i);return r===((e=l.offset)==null?void 0:e.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:o+c.x,y:n+c.y,data:{...c,placement:r}}}}},Js=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:o}=t,{mainAxis:n=!0,crossAxis:r=!1,limiter:l={fn:A=>{let{x:k,y:E}=A;return{x:k,y:E}}},...c}=pe(i,t),d={x:e,y:s},h=await _i(t,c),p=Te(Bt(o)),y=lo(p);let f=d[y],g=d[p];if(n){const A=y==="y"?"top":"left",k=y==="y"?"bottom":"right",E=f+h[A],M=f-h[k];f=di(E,f,M)}if(r){const A=p==="y"?"top":"left",k=p==="y"?"bottom":"right",E=g+h[A],M=g-h[k];g=di(E,g,M)}const w=l.fn({...t,[y]:f,[p]:g});return{...w,data:{x:w.x-e,y:w.y-s}}}}},tn=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(t){const{placement:e,rects:s,platform:o,elements:n}=t,{apply:r=()=>{},...l}=pe(i,t),c=await _i(t,l),d=Bt(e),h=me(e),p=Te(e)==="y",{width:y,height:f}=s.floating;let g,w;d==="top"||d==="bottom"?(g=d,w=h===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(w=d,g=h==="end"?"top":"bottom");const A=f-c[g],k=y-c[w],E=!t.middlewareData.shift;let M=A,j=k;if(p){const W=y-c.left-c.right;j=h||E?Ft(k,W):W}else{const W=f-c.top-c.bottom;M=h||E?Ft(A,W):W}if(E&&!h){const W=dt(c.left,0),lt=dt(c.right,0),vt=dt(c.top,0),Mt=dt(c.bottom,0);p?j=y-2*(W!==0||lt!==0?W+lt:dt(c.left,c.right)):M=f-2*(vt!==0||Mt!==0?vt+Mt:dt(c.top,c.bottom))}await r({...t,availableWidth:j,availableHeight:M});const N=await o.getDimensions(n.floating);return y!==N.width||f!==N.height?{reset:{rects:!0}}:{}}}};function Vt(i){return ho(i)?(i.nodeName||"").toLowerCase():"#document"}function ht(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function Tt(i){var t;return(t=(ho(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function ho(i){return i instanceof Node||i instanceof ht(i).Node}function Et(i){return i instanceof Element||i instanceof ht(i).Element}function kt(i){return i instanceof HTMLElement||i instanceof ht(i).HTMLElement}function Li(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof ht(i).ShadowRoot}function De(i){const{overflow:t,overflowX:e,overflowY:s,display:o}=ft(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(o)}function en(i){return["table","td","th"].includes(Vt(i))}function wi(i){const t=xi(),e=ft(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function on(i){let t=le(i);for(;kt(t)&&!Ye(t);){if(wi(t))return t;t=le(t)}return null}function xi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ye(i){return["html","body","#document"].includes(Vt(i))}function ft(i){return ht(i).getComputedStyle(i)}function Ge(i){return Et(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function le(i){if(Vt(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Li(i)&&i.host||Tt(i);return Li(t)?t.host:t}function uo(i){const t=le(i);return Ye(t)?i.ownerDocument?i.ownerDocument.body:i.body:kt(t)&&De(t)?t:uo(t)}function Se(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const o=uo(i),n=o===((s=i.ownerDocument)==null?void 0:s.body),r=ht(o);return n?t.concat(r,r.visualViewport||[],De(o)?o:[],r.frameElement&&e?Se(r.frameElement):[]):t.concat(o,Se(o,[],e))}function po(i){const t=ft(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const o=kt(i),n=o?i.offsetWidth:e,r=o?i.offsetHeight:s,l=Ne(e)!==n||Ne(s)!==r;return l&&(e=n,s=r),{width:e,height:s,$:l}}function ki(i){return Et(i)?i:i.contextElement}function re(i){const t=ki(i);if(!kt(t))return Rt(1);const e=t.getBoundingClientRect(),{width:s,height:o,$:n}=po(t);let r=(n?Ne(e.width):e.width)/s,l=(n?Ne(e.height):e.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const sn=Rt(0);function mo(i){const t=ht(i);return!xi()||!t.visualViewport?sn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nn(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==ht(i)?!1:t}function Xt(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const o=i.getBoundingClientRect(),n=ki(i);let r=Rt(1);t&&(s?Et(s)&&(r=re(s)):r=re(i));const l=nn(n,e,s)?mo(n):Rt(0);let c=(o.left+l.x)/r.x,d=(o.top+l.y)/r.y,h=o.width/r.x,p=o.height/r.y;if(n){const y=ht(n),f=s&&Et(s)?ht(s):s;let g=y,w=g.frameElement;for(;w&&s&&f!==g;){const A=re(w),k=w.getBoundingClientRect(),E=ft(w),M=k.left+(w.clientLeft+parseFloat(E.paddingLeft))*A.x,j=k.top+(w.clientTop+parseFloat(E.paddingTop))*A.y;c*=A.x,d*=A.y,h*=A.x,p*=A.y,c+=M,d+=j,g=ht(w),w=g.frameElement}}return He({width:h,height:p,x:c,y:d})}const rn=[":popover-open",":modal"];function fo(i){return rn.some(t=>{try{return i.matches(t)}catch{return!1}})}function an(i){let{elements:t,rect:e,offsetParent:s,strategy:o}=i;const n=o==="fixed",r=Tt(s),l=t?fo(t.floating):!1;if(s===r||l&&n)return e;let c={scrollLeft:0,scrollTop:0},d=Rt(1);const h=Rt(0),p=kt(s);if((p||!p&&!n)&&((Vt(s)!=="body"||De(r))&&(c=Ge(s)),kt(s))){const y=Xt(s);d=re(s),h.x=y.x+s.clientLeft,h.y=y.y+s.clientTop}return{width:e.width*d.x,height:e.height*d.y,x:e.x*d.x-c.scrollLeft*d.x+h.x,y:e.y*d.y-c.scrollTop*d.y+h.y}}function ln(i){return Array.from(i.getClientRects())}function bo(i){return Xt(Tt(i)).left+Ge(i).scrollLeft}function cn(i){const t=Tt(i),e=Ge(i),s=i.ownerDocument.body,o=dt(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),n=dt(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-e.scrollLeft+bo(i);const l=-e.scrollTop;return ft(s).direction==="rtl"&&(r+=dt(t.clientWidth,s.clientWidth)-o),{width:o,height:n,x:r,y:l}}function dn(i,t){const e=ht(i),s=Tt(i),o=e.visualViewport;let n=s.clientWidth,r=s.clientHeight,l=0,c=0;if(o){n=o.width,r=o.height;const d=xi();(!d||d&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:n,height:r,x:l,y:c}}function hn(i,t){const e=Xt(i,!0,t==="fixed"),s=e.top+i.clientTop,o=e.left+i.clientLeft,n=kt(i)?re(i):Rt(1),r=i.clientWidth*n.x,l=i.clientHeight*n.y,c=o*n.x,d=s*n.y;return{width:r,height:l,x:c,y:d}}function Ii(i,t,e){let s;if(t==="viewport")s=dn(i,e);else if(t==="document")s=cn(Tt(i));else if(Et(t))s=hn(t,e);else{const o=mo(i);s={...t,x:t.x-o.x,y:t.y-o.y}}return He(s)}function yo(i,t){const e=le(i);return e===t||!Et(e)||Ye(e)?!1:ft(e).position==="fixed"||yo(e,t)}function un(i,t){const e=t.get(i);if(e)return e;let s=Se(i,[],!1).filter(l=>Et(l)&&Vt(l)!=="body"),o=null;const n=ft(i).position==="fixed";let r=n?le(i):i;for(;Et(r)&&!Ye(r);){const l=ft(r),c=wi(r);!c&&l.position==="fixed"&&(o=null),(n?!c&&!o:!c&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||De(r)&&!c&&yo(i,r))?s=s.filter(h=>h!==r):o=l,r=le(r)}return t.set(i,s),s}function pn(i){let{element:t,boundary:e,rootBoundary:s,strategy:o}=i;const r=[...e==="clippingAncestors"?un(t,this._c):[].concat(e),s],l=r[0],c=r.reduce((d,h)=>{const p=Ii(t,h,o);return d.top=dt(p.top,d.top),d.right=Ft(p.right,d.right),d.bottom=Ft(p.bottom,d.bottom),d.left=dt(p.left,d.left),d},Ii(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function mn(i){const{width:t,height:e}=po(i);return{width:t,height:e}}function fn(i,t,e){const s=kt(t),o=Tt(t),n=e==="fixed",r=Xt(i,!0,n,t);let l={scrollLeft:0,scrollTop:0};const c=Rt(0);if(s||!s&&!n)if((Vt(t)!=="body"||De(o))&&(l=Ge(t)),s){const p=Xt(t,!0,n,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else o&&(c.x=bo(o));const d=r.left+l.scrollLeft-c.x,h=r.top+l.scrollTop-c.y;return{x:d,y:h,width:r.width,height:r.height}}function Mi(i,t){return!kt(i)||ft(i).position==="fixed"?null:t?t(i):i.offsetParent}function go(i,t){const e=ht(i);if(!kt(i)||fo(i))return e;let s=Mi(i,t);for(;s&&en(s)&&ft(s).position==="static";)s=Mi(s,t);return s&&(Vt(s)==="html"||Vt(s)==="body"&&ft(s).position==="static"&&!wi(s))?e:s||on(i)||e}const bn=async function(i){const t=this.getOffsetParent||go,e=this.getDimensions;return{reference:fn(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function yn(i){return ft(i).direction==="rtl"}const Be={convertOffsetParentRelativeRectToViewportRelativeRect:an,getDocumentElement:Tt,getClippingRect:pn,getOffsetParent:go,getElementRects:bn,getClientRects:ln,getDimensions:mn,getScale:re,isElement:Et,isRTL:yn};function gn(i,t){let e=null,s;const o=Tt(i);function n(){var l;clearTimeout(s),(l=e)==null||l.disconnect(),e=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),n();const{left:d,top:h,width:p,height:y}=i.getBoundingClientRect();if(l||t(),!p||!y)return;const f=Re(h),g=Re(o.clientWidth-(d+p)),w=Re(o.clientHeight-(h+y)),A=Re(d),E={rootMargin:-f+"px "+-g+"px "+-w+"px "+-A+"px",threshold:dt(0,Ft(1,c))||1};let M=!0;function j(N){const W=N[0].intersectionRatio;if(W!==c){if(!M)return r();W?r(!1,W):s=setTimeout(()=>{r(!1,1e-7)},100)}M=!1}try{e=new IntersectionObserver(j,{...E,root:o.ownerDocument})}catch{e=new IntersectionObserver(j,E)}e.observe(i)}return r(!0),n}function vn(i,t,e,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,d=ki(i),h=o||n?[...d?Se(d):[],...Se(t)]:[];h.forEach(k=>{o&&k.addEventListener("scroll",e,{passive:!0}),n&&k.addEventListener("resize",e)});const p=d&&l?gn(d,e):null;let y=-1,f=null;r&&(f=new ResizeObserver(k=>{let[E]=k;E&&E.target===d&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var M;(M=f)==null||M.observe(t)})),e()}),d&&!c&&f.observe(d),f.observe(t));let g,w=c?Xt(i):null;c&&A();function A(){const k=Xt(i);w&&(k.x!==w.x||k.y!==w.y||k.width!==w.width||k.height!==w.height)&&e(),w=k,g=requestAnimationFrame(A)}return e(),()=>{var k;h.forEach(E=>{o&&E.removeEventListener("scroll",e),n&&E.removeEventListener("resize",e)}),p?.(),(k=f)==null||k.disconnect(),f=null,c&&cancelAnimationFrame(g)}}const _n=Js,wn=Xs,Fi=tn,xn=Gs,kn=(i,t,e)=>{const s=new Map,o={platform:Be,...e},n={...o.platform,_c:s};return Ys(i,t,{...o,platform:n})};function Cn(i){return $n(i)}function oi(i){return i.assignedSlot?i.assignedSlot:i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}function $n(i){for(let t=i;t;t=oi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=oi(i);t;t=oi(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if(e.display!=="contents"&&(e.position!=="static"||e.filter!=="none"||t.tagName==="BODY"))return t}return null}const zn=u`
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
`;var Sn=Object.defineProperty,V=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&Sn(t,e,o),o};function On(i){return i!==null&&typeof i=="object"&&"getBoundingClientRect"in i&&("contextElement"in i?i instanceof Element:!0)}class P extends C{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let o=0,n=0,r=0,l=0,c=0,d=0,h=0,p=0;s?t.top<e.top?(o=t.left,n=t.bottom,r=t.right,l=t.bottom,c=e.left,d=e.top,h=e.right,p=e.top):(o=e.left,n=e.bottom,r=e.right,l=e.bottom,c=t.left,d=t.top,h=t.right,p=t.top):t.left<e.left?(o=t.right,n=t.top,r=e.left,l=e.top,c=t.right,d=t.bottom,h=e.left,p=e.bottom):(o=e.right,n=e.top,r=t.left,l=t.top,c=e.right,d=e.bottom,h=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}static{this.styles=[$,zn]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||On(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=vn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Qs({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Fi({apply:({rects:s})=>{const o=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${s.reference.width}px`:"",this.popup.style.height=n?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(wn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(_n({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Fi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(xn({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?s=>Be.getOffsetParent(s,Cn):Be.getOffsetParent;kn(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...Be,getOffsetParent:e}}).then(({x:s,y:o,middlewareData:n,placement:r})=>{const l=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${o}px`}),this.arrow){const d=n.arrow.x,h=n.arrow.y;let p="",y="",f="",g="";if(this.arrowPlacement==="start"){const w=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",y=l?w:"",g=l?"":w}else if(this.arrowPlacement==="end"){const w=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";y=l?"":w,g=l?w:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof d=="number"?`${d}px`:"",p=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:p,right:y,bottom:f,left:g,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${x({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${x({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}V([b(".popup")],P.prototype,"popup");V([b(".popup__arrow")],P.prototype,"arrowEl");V([a()],P.prototype,"anchor");V([a({type:Boolean,reflect:!0})],P.prototype,"active");V([a({reflect:!0})],P.prototype,"placement");V([a({reflect:!0})],P.prototype,"strategy");V([a({type:Number})],P.prototype,"distance");V([a({type:Number})],P.prototype,"skidding");V([a({type:Boolean})],P.prototype,"arrow");V([a({attribute:"arrow-placement"})],P.prototype,"arrowPlacement");V([a({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding");V([a({type:Boolean})],P.prototype,"flip");V([a({attribute:"flip-fallback-placements",converter:{fromAttribute:i=>i.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:i=>i.join(" ")}})],P.prototype,"flipFallbackPlacements");V([a({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy");V([a({type:Object})],P.prototype,"flipBoundary");V([a({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding");V([a({type:Boolean})],P.prototype,"shift");V([a({type:Object})],P.prototype,"shiftBoundary");V([a({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding");V([a({attribute:"auto-size"})],P.prototype,"autoSize");V([a()],P.prototype,"sync");V([a({type:Object})],P.prototype,"autoSizeBoundary");V([a({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding");V([a({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge");const An=u`
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
`,En=u`
  /* Write custom CSS here */
`;var Tn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,ut=(i,t,e,s)=>{for(var o=s>1?void 0:s?Dn(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Tn(t,e,o),o};class tt extends C{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="syn-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{const e=this.containingElement?.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this.containingElement||e?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="syn-menu"&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[$,An,En]}static{this.dependencies={"syn-popup":P}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="syn-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),o=s[0],n=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(o),o.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(o=>Ss(o).start);let s;if(e){switch(e.tagName.toLowerCase()){case"syn-button":case"syn-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,X(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,X(this,"syn-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("syn-select",this.handlePanelSelect),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("syn-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("syn-show"),this.addOpenListeners(),await G(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=U(this,"dropdown.show",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await G(this);const{keyframes:t,options:e}=U(this,"dropdown.hide",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}render(){return m`
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
        sync=${v(this.sync?this.sync:void 0)}
        class=${x({dropdown:!0,"dropdown--open":this.open})}
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
    `}}ut([b(".dropdown")],tt.prototype,"popup",2);ut([b(".dropdown__trigger")],tt.prototype,"trigger",2);ut([b(".dropdown__panel")],tt.prototype,"panel",2);ut([a({type:Boolean,reflect:!0})],tt.prototype,"open",2);ut([a({reflect:!0})],tt.prototype,"placement",2);ut([a({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);ut([a({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],tt.prototype,"stayOpenOnSelect",2);ut([a({attribute:!1})],tt.prototype,"containingElement",2);ut([a({type:Number})],tt.prototype,"distance",2);ut([a({type:Number})],tt.prototype,"skidding",2);ut([a({type:Boolean})],tt.prototype,"hoist",2);ut([a({reflect:!0})],tt.prototype,"sync",2);ut([_("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);T("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});T("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});tt.define("syn-dropdown");const Pn=u`
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
`;var Ln=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Xe=(i,t,e,s)=>{for(var o=s>1?void 0:s?In(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Ln(t,e,o),o};class Pe extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","logo","label","meta-navigation","navigation"),this.localize=new H(this),this.label="",this.burgerMenu="hidden"}static{this.styles=[$,Pn]}static{this.dependencies={"syn-icon":Ct}}toggleBurgerMenu(){switch(this.burgerMenu){case"closed":this.burgerMenu="open";break;case"open":this.burgerMenu="closed";break}}handleBurgerMenuToggle(){this.sideNav&&!this.sideNav.rail&&(this.sideNav.open=!this.sideNav.open),this.toggleBurgerMenu()}updateBurgerMenuBasedOnSideNav(){this.sideNav&&(this.sideNav.rail?this.burgerMenu="hidden":this.burgerMenu=this.sideNav.open?"open":"closed")}handleBurgerMenu(){const t=`syn-burger-menu-${this.burgerMenu}`;this.emit(t)}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.updateBurgerMenuBasedOnSideNav())}firstUpdated(){const t=document.querySelector("syn-side-nav");this.connectSideNavigation(t)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}connectSideNavigation(t){this.mutationObserver.disconnect(),this.sideNav=t||document.querySelector("syn-side-nav"),this.sideNav&&(this.updateBurgerMenuBasedOnSideNav(),this.mutationObserver.observe(this.sideNav,{attributeFilter:["open","rail"],attributes:!0}))}render(){const t=this.hasSlotController.test("navigation"),e=this.burgerMenu!=="hidden";return Y`
      <header
        class=${x({header:!0,"header--has-burger-menu":e,"header--has-navigation":t})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          ${e?Y`
                  <button
                    aria-label=${this.localize.term(this.burgerMenu==="closed"?"openMenu":"closeMenu")}
                    class="header__burger-menu-toggle"
                    @click=${this.handleBurgerMenuToggle}
                    part="burger-menu-toggle-button"
                    type="button"
                  >
                    ${this.burgerMenu==="open"?Y`
                          <slot name="open-burger-menu-icon">
                            <syn-icon name="x-lg" library="system"></syn-icon>
                          </slot>
                        `:Y`
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
    `}}Xe([a()],Pe.prototype,"label",2);Xe([a({attribute:"burger-menu",reflect:!0})],Pe.prototype,"burgerMenu",2);Xe([O()],Pe.prototype,"sideNav",2);Xe([_("burgerMenu",{waitUntilFirstUpdate:!0})],Pe.prototype,"handleBurgerMenu",1);Pe.define("syn-header");class Mn extends Zi{constructor(t){if(super(t),this.handlePointerDown=e=>{e.button!==0||this.host.disabled||this.spinOnLongPressCallback(e)},this.handlePointerUp=e=>{e?.preventDefault(),e?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},t.type!==xt.ELEMENT||!(t.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(t){return ae}update(t,[e]){return this.callbacks===void 0&&this.host===void 0&&(this.host=t.element,this.callbacks={...e},this.host.addEventListener("pointerdown",this.handlePointerDown)),Gt}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(t){t.preventDefault(),t.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(e=>{e.forEach(s=>{s.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const Ri=Oe(Mn),Fn=u`
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
`,Rn=u`

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
`;var Bn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,S=(i,t,e,s)=>{for(var o=s>1?void 0:s?Vn(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Bn(t,e,o),o};class z extends C{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label","prefix","suffix"),this.localize=new H(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}static{this.styles=[$,he,Fn,ue,Rn]}static{this.dependencies={"syn-icon":Ct,"syn-divider":Ht}}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null||this.disabled)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return this.valueAsNumber<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return this.valueAsNumber>=t}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,o="preserve"){const n=e??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(t,n,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.hasSlotController.test("prefix"),o=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!e,c=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${x({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r,"form-control--has-prefix":s,"form-control--has-suffix":o})}
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
            class=${x({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${v(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${v(this.placeholder)}
              minlength=${v(this.minlength)}
              maxlength=${v(this.maxlength)}
              min=${v(this.min)}
              max=${v(this.max)}
              step=${v(this.step)}
              .value=${ze(this.value)}
              autocapitalize=${v(this.autocapitalize)}
              autocomplete=${v(this.autocomplete)}
              autocorrect=${v(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${v(this.pattern)}
              enterkeyhint=${v(this.enterkeyhint)}
              inputmode=${v(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${c?m`
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
                  ${Ri({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${Ri({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}S([b(".input__control")],z.prototype,"input",2);S([O()],z.prototype,"hasFocus",2);S([a()],z.prototype,"title",2);S([a({reflect:!0})],z.prototype,"type",2);S([a()],z.prototype,"name",2);S([a()],z.prototype,"value",2);S([Ee()],z.prototype,"defaultValue",2);S([a({reflect:!0})],z.prototype,"size",2);S([a()],z.prototype,"label",2);S([a({attribute:"help-text"})],z.prototype,"helpText",2);S([a({type:Boolean})],z.prototype,"clearable",2);S([a({type:Boolean,reflect:!0})],z.prototype,"disabled",2);S([a()],z.prototype,"placeholder",2);S([a({type:Boolean,reflect:!0})],z.prototype,"readonly",2);S([a({attribute:"password-toggle",type:Boolean})],z.prototype,"passwordToggle",2);S([a({attribute:"password-visible",type:Boolean})],z.prototype,"passwordVisible",2);S([a({attribute:"no-spin-buttons",type:Boolean})],z.prototype,"noSpinButtons",2);S([a({reflect:!0})],z.prototype,"form",2);S([a({type:Boolean,reflect:!0})],z.prototype,"required",2);S([a()],z.prototype,"pattern",2);S([a({type:Number})],z.prototype,"minlength",2);S([a({type:Number})],z.prototype,"maxlength",2);S([a()],z.prototype,"min",2);S([a()],z.prototype,"max",2);S([a()],z.prototype,"step",2);S([a()],z.prototype,"autocapitalize",2);S([a()],z.prototype,"autocorrect",2);S([a()],z.prototype,"autocomplete",2);S([a({type:Boolean})],z.prototype,"autofocus",2);S([a()],z.prototype,"enterkeyhint",2);S([a({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],z.prototype,"spellcheck",2);S([a()],z.prototype,"inputmode",2);S([_("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);S([_("step",{waitUntilFirstUpdate:!0})],z.prototype,"handleStepChange",1);S([_("value",{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1);z.define("syn-input");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=()=>new Un;class Un{}const si=new WeakMap,Hn=Oe(class extends Zi{render(i){return ae}update(i,[t]){const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=i.options?.host,this.rt(this.ct=i.element)),ae}rt(i){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=si.get(t);e===void 0&&(e=new WeakMap,si.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){return typeof this.Y=="function"?si.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class jn{constructor(t,e,s){this.popupRef=Nn(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break}},this.handleClick=o=>{o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="syn-menu-item"||o.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(p=>p.localName==="syn-menu")[0],r=this.localize.dir()==="rtl";if(!n)return;const{left:l,top:c,width:d,height:h}=n.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?l+d:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${c}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?l+d:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${c+h}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("syn-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const o of e.assignedElements())if(s=o.querySelectorAll("syn-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let o=1;o!==s.length;++o)s[o].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{const r=t.get(n)??new CSSUnitValue(0,"px"),c=(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?m`
      <syn-popup
        ${Hn(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </syn-popup>
    `:m` <slot name="submenu" hidden></slot> `}}const Wn=u`
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
`,qn=u`
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
`;var Kn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,zt=(i,t,e,s)=>{for(var o=s>1?void 0:s?Yn(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Kn(t,e,o),o};class gt extends C{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new H(this),this.hasSlotController=new K(this,"submenu"),this.submenuController=new jn(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}static{this.styles=[$,Wn,qn]}static{this.dependencies={"syn-icon":Ct,"syn-popup":P,"syn-spinner":bi}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return ji(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return m`
      <div
        id="anchor"
        part="base"
        class=${x({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
    `}}zt([b("slot:not([name])")],gt.prototype,"defaultSlot",2);zt([b(".menu-item")],gt.prototype,"menuItem",2);zt([a()],gt.prototype,"type",2);zt([a({type:Boolean,reflect:!0})],gt.prototype,"checked",2);zt([a()],gt.prototype,"value",2);zt([a({type:Boolean,reflect:!0})],gt.prototype,"loading",2);zt([a({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);zt([_("checked")],gt.prototype,"handleCheckedChange",1);zt([_("disabled")],gt.prototype,"handleDisabledChange",1);zt([_("type")],gt.prototype,"handleTypeChange",1);gt.define("syn-menu-item");const Gn=u`
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
`,Xn=u`
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
`;class Zn extends C{static{this.styles=[$,Gn,Xn]}static{this.dependencies={"syn-divider":Ht}}render(){return m`
      <div part="base" class="menu-label-wrapper">
        <syn-divider class="menu-label__divider" part="divider"></syn-divider>
        <slot part="label" class="menu-label"></slot>
      </div>
    `}}Zn.define("syn-menu-label");const Qn=u`
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
`,Jn=u`
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
`;var tr=Object.defineProperty,er=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&tr(t,e,o),o};class Ci extends C{static{this.styles=[$,Qn,Jn]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath().find(n=>e.includes(n?.getAttribute?.("role")||""));if(!s)return;const o=s;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("syn-select",{detail:{item:o}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let o=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?o++:t.key==="ArrowUp"?o--:t.key==="Home"?o=0:t.key==="End"&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){return t.tagName.toLowerCase()==="syn-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(t.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}}er([b("slot")],Ci.prototype,"defaultSlot");Ci.define("syn-menu");const ir=u`
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
`;var or=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,st=(i,t,e,s)=>{for(var o=s>1?void 0:s?sr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&or(t,e,o),o};class Q extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","children","prefix","suffix"),this.hasFocus=!1,this.showPrefixOnly=!1,this.currentMarkedChild=!1,this.isMultiLine=!1,this.current=!1,this.disabled=!1,this.horizontal=!1,this.chevron=!1,this.open=!1,this.divider=!1}static{this.styles=[$,ir]}static{this.dependencies={"syn-divider":Ht}}isButton(){return!this.href&&!this.hasSlotController.test("children")}isLink(){return!!this.href&&!this.hasSlotController.test("children")}isAccordion(){return this.hasSlotController.test("children")}getNavItemChildren(t){return Array.from(t?.assignedElements({flatten:!0})||[]).map(e=>e.tagName.toLowerCase()==="syn-nav-item"?e:Array.from(e.querySelectorAll(":scope > syn-nav-item"))).flat()}getAllNestedNavItems(t){const e=this.getNavItemChildren(t),s=e.map(o=>o.getAllNestedNavItems(o.childrenSlot)).flat();return e.concat(s)}handleCurrentMarkedChild(){const t=this.closest("syn-side-nav");if(!this.open||t?.rail){const s=this.getAllNestedNavItems(this.childrenSlot).findIndex(o=>!!o.shadowRoot?.querySelector(".nav-item--current"));this.currentMarkedChild=s!==-1}}handleClickButton(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}handleClickSummary(t){t.preventDefault(),t.stopPropagation(),!this.disabled&&(this.open?this.hideDetails():this.showDetails())}hideDetails(){this.open=!1,this.emit("syn-hide",{cancelable:!0})}showDetails(){this.open=!0,this.emit("syn-show",{cancelable:!0})}handleSlotChange(){this.handleCurrentMarkedChild();const t=getComputedStyle(this).getPropertyValue("--indentation"),e=Math.min(parseInt(t,10)+1,2);this.getNavItemChildren(this.childrenSlot).forEach(s=>{s.style.setProperty("--indentation",e.toFixed(0))})}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleWidth(t){t.forEach(e=>{if(e.contentRect.width<100){const s=this.hasSlotController.test("prefix");this.showPrefixOnly=s}else this.showPrefixOnly=!1;e.contentRect.height>48?this.isMultiLine=!0:this.isMultiLine=!1})}handleOpenChange(){this.handleCurrentMarkedChild()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleWidth(t)),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}blur(){this.control.blur()}click(){this.control.click()}focus(t){this.control.focus(t)}render(){const t=this.isButton(),e=this.isLink(),s=this.isAccordion(),o=this.closest("syn-side-nav"),n=this.currentMarkedChild&&!this.open||this.currentMarkedChild&&this.open&&!!o?.rail&&!o?.open;let r=ke`button`;s?r=ke`summary`:e&&(r=ke`a`);const l=(this.chevron||s)&&!this.horizontal;let c;s?c=this.handleClickSummary:t&&(c=this.handleClickButton);const d=Y`
      <${r}
        aria-controls=${v(s?"navigation-item-details":void 0)}
        aria-current=${v(this.current?"page":void 0)}
        aria-disabled=${this.disabled}
        @blur=${this.handleBlur}
        class=${x({"nav-item":!0,"nav-item--current":this.current||n,"nav-item--disabled":this.disabled,"nav-item--focused":this.hasFocus,"nav-item--has-content":this.hasSlotController.test("[default]"),"nav-item--has-prefix":this.hasSlotController.test("prefix"),"nav-item--has-suffix":this.hasSlotController.test("suffix"),"nav-item--horizontal":this.horizontal,"nav-item--is-link":e,"nav-item--multi-line":this.isMultiLine,"nav-item--show-prefix-only":this.showPrefixOnly,"nav-item--vertical":!this.horizontal,"nav-item-is-accordion":s})}
        @click=${c}
        ?disabled=${v(e?void 0:this.disabled)}
        @focus=${this.handleFocus}
        href=${v(e?this.href:void 0)}
        part="base"
        role=${e?"link":"button"}
        tabindex=${this.disabled?"-1":"0"}
      >

        ${this.divider&&!this.horizontal?Y`<syn-divider class="divider" part="divider"></syn-divider>`:""}

        <div class="nav-item__content" part="content-wrapper">
          <slot name="prefix" part="prefix" class="nav-item__prefix"></slot>

          <div part="content-container" class="nav-item__content-container">
            <slot part="content"></slot>
          </div>

          <slot name="suffix" part="suffix" class="nav-item__suffix"></slot>

          ${l?Y`
            <syn-icon
              class=${x({"nav-item__chevron":!0,"nav-item__chevron-open":this.open})}
              color="currentColor"
              library="system"
              name="chevron-down"
              part="chevron"
            /></syn-icon>`:""}

          <div
            class=${x({"current-indicator":!0,"current-indicator--disabled":this.disabled,"current-indicator--visible":this.current||n})}
            part="current-indicator"
          >
          </div>
        </div>

      </${r}>
    `;return s?Y`
      <details
        id="navigation-item-details"
        ?open=${this.open}
        part="details"
      >
        ${d}
        <slot
          class="children"
          name="children"
          part="children"
          @slotchange=${this.handleSlotChange}
        ></slot>
      </details>
    `:d}}st([O()],Q.prototype,"hasFocus",2);st([O()],Q.prototype,"showPrefixOnly",2);st([O()],Q.prototype,"currentMarkedChild",2);st([O()],Q.prototype,"isMultiLine",2);st([b('slot[name="children"]')],Q.prototype,"childrenSlot",2);st([b(".nav-item")],Q.prototype,"control",2);st([a({reflect:!0,type:String})],Q.prototype,"href",2);st([a({reflect:!0,type:Boolean})],Q.prototype,"current",2);st([a({reflect:!0,type:Boolean})],Q.prototype,"disabled",2);st([a({reflect:!0,type:Boolean})],Q.prototype,"horizontal",2);st([a({reflect:!0,type:Boolean})],Q.prototype,"chevron",2);st([a({reflect:!0,type:Boolean})],Q.prototype,"open",2);st([a({reflect:!0,type:Boolean})],Q.prototype,"divider",2);st([_("open")],Q.prototype,"handleOpenChange",1);Q.define("syn-nav-item");const nr=u`
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
`;var rr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,Ze=(i,t,e,s)=>{for(var o=s>1?void 0:s?ar(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&rr(t,e,o),o};class Le extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=nr}static{this.dependencies={"syn-divider":Ht}}handleDisableOptions(){const{disabled:t}=this;this.defaultSlot.assignedElements().filter(e=>e.tagName.toLowerCase()==="syn-option").forEach(e=>{e.disabled=t})}handleDisabledChange(){this.handleDisableOptions()}render(){const{disabled:t}=this,e=this.hasSlotController.test("label"),s=this.label?!0:!!e;return Y`
      <div
        class=${x({optgroup:!0,"optgroup--has-label":s,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
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
    `}}Ze([b("slot:not([name])")],Le.prototype,"defaultSlot",2);Ze([a({reflect:!0,type:Boolean})],Le.prototype,"disabled",2);Ze([a()],Le.prototype,"label",2);Ze([_("disabled",{waitUntilFirstUpdate:!0})],Le.prototype,"handleDisabledChange",1);Le.define("syn-optgroup");const lr=u`
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
`,cr=u`
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
`;var dr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,Dt=(i,t,e,s)=>{for(var o=s>1?void 0:s?hr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&dr(t,e,o),o};class St extends C{constructor(){super(...arguments),this.localize=new H(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[$,lr,cr]}static{this.dependencies={"syn-icon":Ct}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return m`
      <div
        part="base"
        class=${x({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}Dt([b(".option__label")],St.prototype,"defaultSlot",2);Dt([O()],St.prototype,"current",2);Dt([O()],St.prototype,"selected",2);Dt([O()],St.prototype,"hasHover",2);Dt([a({reflect:!0})],St.prototype,"value",2);Dt([a({type:Boolean,reflect:!0})],St.prototype,"disabled",2);Dt([_("disabled")],St.prototype,"handleDisabledChange",1);Dt([_("selected")],St.prototype,"handleSelectedChange",1);Dt([_("value")],St.prototype,"handleValueChange",1);St.define("syn-option");P.define("syn-popup");const ur=u`
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
`,Bi=i=>Array.from(i.assignedElements({flatten:!0})),pr=i=>i.tagName.toLocaleLowerCase()==="syn-nav-item"||(i.getAttribute("role")??"")==="menuitem",Vi=i=>i.filter(pr);var mr=Object.defineProperty,jt=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&mr(t,e,o),o};class Pt extends C{constructor(){super(...arguments),this.localize=new H(this),this.itemPositionsCached=!1,this.amountOfNavItems=0,this.amountOfVisibleItems=0,this.hasItemsInDropdown=!1}static{this.styles=[$,ur]}static{this.dependencies={"syn-dropdown":tt,"syn-icon":Ct,"syn-menu":Ci,"syn-nav-item":Q}}getSlottedNavItems(){const t=Vi(Bi(this.defaultSlot)),e=Vi(Bi(this.menuSlot));return t.concat(e)}cacheItemPositions(t){t.forEach(e=>{e.removeAttribute("slot");const{right:s}=e.getBoundingClientRect();e.dataset.right=s.toString()}),this.itemPositionsCached=!0}handlePriorityMenu(){const t=this.getSlottedNavItems();this.itemPositionsCached||this.cacheItemPositions(t);const{width:e}=this.horizontalNav.getBoundingClientRect(),{clientWidth:s}=this.priorityMenu,o=e-s;let n,r=0;t.forEach(l=>{n||parseFloat(l.dataset.right)>=o?(l.removeAttribute("horizontal"),l.setAttribute("slot","menu"),l.setAttribute("role","menuitem"),n||(n=parseFloat(l.dataset.right))):(r+=1,l.setAttribute("horizontal","true"),l.removeAttribute("slot"),l.removeAttribute("tabindex"),l.dataset.originalRole?l.setAttribute("role",l.dataset.originalRole):l.removeAttribute("role"))}),this.hasItemsInDropdown=r!==t.length,this.amountOfVisibleItems=r}renderPriorityMenu(){return Y`
      <syn-dropdown
        class=${x({"priority-menu":!0,"priority-menu--has-visible-items":this.amountOfVisibleItems!==0,"priority-menu--hidden":!this.hasItemsInDropdown})}
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
            class=${x({"priority-menu__label":!0,"priority-menu__label--visible":this.amountOfVisibleItems===0})}
            part="priority-menu-label"
          >
            ${this.localize.term("menu")}
          </span>
        </syn-nav-item>

        <syn-menu part="priority-menu-container">
          <slot name="menu"></slot>
        </syn-menu>

      </syn-dropdown>
    `}slotChange(){const t=this.getSlottedNavItems();t.length!==this.amountOfNavItems&&(this.cacheItemPositions(t),this.handlePriorityMenu(),this.amountOfNavItems=t.length)}firstUpdated(){this.getSlottedNavItems().forEach(t=>{t.dataset.originalRole=t.getAttribute("role")??""})}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.handlePriorityMenu()),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}render(){return Y`
      <nav class="horizontal-nav" part="base">
        <slot @slotchange=${this.slotChange}></slot>
        ${this.renderPriorityMenu()}
      </nav>
    `}}jt([b("slot:not([name])")],Pt.prototype,"defaultSlot");jt([b("slot[name=menu]")],Pt.prototype,"menuSlot");jt([b(".horizontal-nav")],Pt.prototype,"horizontalNav");jt([b(".priority-menu")],Pt.prototype,"priorityMenu");jt([O()],Pt.prototype,"itemPositionsCached");jt([O()],Pt.prototype,"amountOfNavItems");jt([O()],Pt.prototype,"amountOfVisibleItems");jt([O()],Pt.prototype,"hasItemsInDropdown");Pt.define("syn-prio-nav");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo="important",fr=" !"+vo,br=Oe(class extends We{constructor(i){if(super(i),i.type!==xt.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const o=t[s];if(o!=null){this.ft.add(s);const n=typeof o=="string"&&o.endsWith(fr);s.includes("-")||n?e.setProperty(s,n?o.slice(0,-11):o,n?vo:""):e[s]=o}}return Gt}}),yr=u`
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
`,gr=u`
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
`;var vr=Object.defineProperty,$i=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&vr(t,e,o),o};class Qe extends C{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.indeterminate=!1,this.label=""}static{this.styles=[$,yr,gr]}render(){return m`
      <div
        part="base"
        class=${x({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${v(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${br({width:`${this.value}%`})}>
          ${this.indeterminate?"":m` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}}$i([a({type:Number,reflect:!0})],Qe.prototype,"value");$i([a({type:Boolean,reflect:!0})],Qe.prototype,"indeterminate");$i([a()],Qe.prototype,"label");Qe.define("syn-progress-bar");const _r=u`
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
`,wr=u`
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
`;var xr=Object.defineProperty,Je=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&xr(t,e,o),o};class Ie extends C{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.label=""}static{this.styles=[$,_r,wr]}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,o=s-this.value/100*s;this.indicatorOffset=`${o}px`}}render(){return m`
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
    `}}Je([b(".progress-ring__indicator")],Ie.prototype,"indicator");Je([O()],Ie.prototype,"indicatorOffset");Je([a({type:Number,reflect:!0})],Ie.prototype,"value");Je([a()],Ie.prototype,"label");Ie.define("syn-progress-ring");const kr=u`
	/* stylelint-disable */
  ${oo}

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
`;var Cr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,Lt=(i,t,e,s)=>{for(var o=s>1?void 0:s?$r(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Cr(t,e,o),o};class Ot extends C{constructor(){super(...arguments),this.hasSlotController=new K(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}static{this.styles=[$,kr]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Y`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${x({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${v(this.value)}
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
    `}}Lt([b(".button")],Ot.prototype,"input",2);Lt([b(".hidden-input")],Ot.prototype,"hiddenInput",2);Lt([O()],Ot.prototype,"hasFocus",2);Lt([a({type:Boolean,reflect:!0})],Ot.prototype,"checked",2);Lt([a()],Ot.prototype,"value",2);Lt([a({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);Lt([a({reflect:!0})],Ot.prototype,"size",2);Lt([a({type:Boolean,reflect:!0})],Ot.prototype,"pill",2);Lt([_("disabled",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleDisabledChange",1);Ot.define("syn-radio-button");const zr=u`
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
`,Sr=u`
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

`;var Or=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,nt=(i,t,e,s)=>{for(var o=s>1?void 0:s?Ar(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Or(t,e,o),o};class et extends C{constructor(){super(...arguments),this.formControlController=new Jt(this),this.hasSlotController=new K(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}static{this.styles=[$,he,zr,ue,Sr]}static{this.dependencies={"syn-button-group":Ae}}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?rs:t?ns:Ke}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button"),s=this.getAllRadios(),o=this.value;e.disabled||(this.value=e.value,s.forEach(n=>n.checked=n===e),this.value!==o&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(l=>!l.disabled),s=e.find(l=>l.checked)??e[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value;let r=e.indexOf(s)+o;r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=e[r].value,e[r].checked=!0,this.hasButtonGroup?e[r].shadowRoot.querySelector("button").focus():(e[r].tabIndex=0,e[r].focus()),this.value!==n&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),s=t.find(o=>o.checked)||t[0];s&&s.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="syn-radio-button"),t.length>0&&!t.some(e=>e.checked))if(this.hasButtonGroup){const e=t[0].shadowRoot?.querySelector("button");e&&(e.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){const e=this.shadowRoot?.querySelector("syn-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,o=this.helpText?!0:!!e,n=m`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return m`
      <fieldset
        part="form-control"
        class=${x({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
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
                  ${n}
                </syn-button-group>
              `:n}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}}nt([b("slot:not([name])")],et.prototype,"defaultSlot",2);nt([b(".radio-group__validation-input")],et.prototype,"validationInput",2);nt([O()],et.prototype,"hasButtonGroup",2);nt([O()],et.prototype,"errorMessage",2);nt([O()],et.prototype,"defaultValue",2);nt([a()],et.prototype,"label",2);nt([a({attribute:"help-text"})],et.prototype,"helpText",2);nt([a()],et.prototype,"name",2);nt([a({reflect:!0})],et.prototype,"value",2);nt([a({reflect:!0})],et.prototype,"size",2);nt([a({reflect:!0})],et.prototype,"form",2);nt([a({type:Boolean,reflect:!0})],et.prototype,"required",2);nt([_("size",{waitUntilFirstUpdate:!0})],et.prototype,"handleSizeChange",1);nt([_("value")],et.prototype,"handleValueChange",1);et.define("syn-radio-group");const Er=u`
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
`,Tr=u`

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
`;var Dr=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,ee=(i,t,e,s)=>{for(var o=s>1?void 0:s?Pr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Dr(t,e,o),o};class Wt extends C{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}static{this.styles=[$,Er,Tr]}static{this.dependencies={"syn-icon":Ct}}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return m`
      <span
        part="base"
        class=${x({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?m` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}}ee([O()],Wt.prototype,"checked",2);ee([O()],Wt.prototype,"hasFocus",2);ee([a()],Wt.prototype,"value",2);ee([a({reflect:!0})],Wt.prototype,"size",2);ee([a({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);ee([_("checked")],Wt.prototype,"handleCheckedChange",1);ee([_("disabled",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleDisabledChange",1);Wt.define("syn-radio");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ui extends We{constructor(t){if(super(t),this.it=ae,t.type!==xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ae||t==null)return this._t=void 0,this.it=t;if(t===Gt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ui.directiveName="unsafeHTML",ui.resultType=1;const Lr=Oe(ui),Ir=u`
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

  
`,Mr=u`
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
`;var Fr=Object.defineProperty,_o=(i,t,e,s)=>{for(var o=void 0,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=r(t,e,o)||o);return o&&Fr(t,e,o),o};class ti extends C{constructor(){super(...arguments),this.localize=new H(this),this.size="medium",this.removable=!1}static{this.styles=[$,Ir,Mr]}static{this.dependencies={"syn-icon-button":ce}}handleRemoveClick(){this.emit("syn-remove")}render(){return m`
      <span
        part="base"
        class=${x({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
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
    `}}_o([a({reflect:!0})],ti.prototype,"size");_o([a({type:Boolean})],ti.prototype,"removable");const Rr=u`
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
`,Br=u`
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
`;var Vr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,L=(i,t,e,s)=>{for(var o=s>1?void 0:s?Nr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Vr(t,e,o),o};class D extends C{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label"),this.localize=new H(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>m`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,o=e.closest("syn-icon-button")!==null;if(!(s||o)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const n=this.getAllOptions(),r=n.indexOf(this.currentOption);let l=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(l=r+1,l>n.length-1&&(l=0)):t.key==="ArrowUp"?(l=r-1,l<0&&(l=n.length-1)):t.key==="Home"?l=0:t.key==="End"&&(l=n.length-1),this.setCurrentOption(n[l])}if(t.key.length===1||t.key==="Backspace"){const n=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of n)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static{this.styles=[$,he,Rr,ue,Br]}static{this.dependencies={"syn-icon":Ct,"syn-popup":P,"syn-tag":ti}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="syn-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("syn-option"),o=this.value;s&&!s.disabled&&(this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],s=[];customElements.get("syn-option")?(t.forEach(o=>s.push(o.value)),this.setSelectedOptions(t.filter(o=>e.includes(o.value)))):customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(o=>o.selected=!1),s.length&&s.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=this.selectedOptions[0]?.value??"",this.displayLabel=this.selectedOptions[0]?.getTextLabel()??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return m`<div @syn-remove=${o=>this.handleTagRemove(o,t)}>
          ${typeof s=="string"?Lr(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return m`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`;return m``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await G(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=U(this,"select.show",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.currentOption&&li(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await G(this);const{keyframes:t,options:e}=U(this,"select.hide",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,X(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,X(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,o=this.helpText?!0:!!e,n=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return m`
      <div
        part="form-control"
        class=${x({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
            class=${x({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${n?m`
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}L([b(".select")],D.prototype,"popup",2);L([b(".select__combobox")],D.prototype,"combobox",2);L([b(".select__display-input")],D.prototype,"displayInput",2);L([b(".select__value-input")],D.prototype,"valueInput",2);L([b(".select__listbox")],D.prototype,"listbox",2);L([O()],D.prototype,"hasFocus",2);L([O()],D.prototype,"displayLabel",2);L([O()],D.prototype,"currentOption",2);L([O()],D.prototype,"selectedOptions",2);L([a()],D.prototype,"name",2);L([a({converter:{fromAttribute:i=>i.split(" "),toAttribute:i=>i.join(" ")}})],D.prototype,"value",2);L([Ee()],D.prototype,"defaultValue",2);L([a({reflect:!0})],D.prototype,"size",2);L([a()],D.prototype,"placeholder",2);L([a({type:Boolean,reflect:!0})],D.prototype,"multiple",2);L([a({attribute:"max-options-visible",type:Number})],D.prototype,"maxOptionsVisible",2);L([a({type:Boolean,reflect:!0})],D.prototype,"disabled",2);L([a({type:Boolean})],D.prototype,"clearable",2);L([a({type:Boolean,reflect:!0})],D.prototype,"open",2);L([a({type:Boolean})],D.prototype,"hoist",2);L([a()],D.prototype,"label",2);L([a({reflect:!0})],D.prototype,"placement",2);L([a({attribute:"help-text"})],D.prototype,"helpText",2);L([a({reflect:!0})],D.prototype,"form",2);L([a({type:Boolean,reflect:!0})],D.prototype,"required",2);L([a()],D.prototype,"getTag",2);L([_("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);L([_("value",{waitUntilFirstUpdate:!0})],D.prototype,"handleValueChange",1);L([_("open",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",1);T("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});T("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});D.define("syn-select");const Ur=u`
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
`;var Hr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,qt=(i,t,e,s)=>{for(var o=s>1?void 0:s?jr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Hr(t,e,o),o};class It extends C{constructor(){super(),this.hasSlotController=new K(this,"[default]","footer"),this.localize=new H(this),this.isAnimationActive=!1,this.open=!1,this.rail=!1,this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}static{this.styles=[$,Ur]}static{this.dependencies={"syn-divider":Ht,"syn-drawer":bt}}setDelayedCallback(t){clearTimeout(this.timeout),this.timeout=setTimeout(t,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerVisibility(t){this.drawer.shadowRoot.querySelector(".drawer").hidden=!t,this.drawer.shadowRoot.querySelector(".drawer__panel")?.setAttribute("aria-hidden",t?"false":"true")}forceDrawerVisibilityForRailMode(){return X(this,"syn-after-hide").then(()=>{this.setDrawerVisibility(!0),this.isAnimationActive=!1})}setDrawerAnimations(){const t=U(this,`sideNav.show${this.rail?"Rail":"NonRail"}`,{dir:this.localize.dir()}),e=U(this,`sideNav.hide${this.rail?"Rail":"NonRail"}`,{dir:this.localize.dir()}),s=U(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),o=U(this,"sideNav.overlay.show",{dir:this.localize.dir()});Me(this.drawer,"drawer.showStart",t),Me(this.drawer,"drawer.hideStart",e),Me(this.drawer,"drawer.overlay.hide",s),Me(this.drawer,"drawer.overlay.show",o)}handleModeChange(){this.setDrawerAnimations(),this.rail?(this.addMouseListener(),this.setDrawerVisibility(!0)):(this.removeMouseListener(),this.open||this.setDrawerVisibility(!1))}handleOpenChange(){this.rail&&(this.isAnimationActive=!0,this.open?X(this.drawer,"syn-after-show").then(()=>{this.isAnimationActive=!1}):this.forceDrawerVisibilityForRailMode())}handleFocusTrapping(){this.rail||(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,X(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,X(this,"syn-after-hide")}firstUpdated(){this.setDrawerAnimations(),this.rail?this.drawer.updateComplete.then(()=>{this.addMouseListener(),this.setDrawerVisibility(!0)}):this.noFocusTrapping&&this.drawer.modal.activateExternal()}disconnectedCallback(){super.disconnectedCallback(),ne(this.drawer),this.drawer.modal.deactivate()}render(){const t=window.navigator.maxTouchPoints>0||"ontouchstart"in window,e=this.hasSlotController.test("footer");return Y`
      <nav
        class=${x({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":!this.rail,"side-nav--has-footer":e,"side-nav--open":this.open,"side-nav--rail":this.rail,"side-nav--touch":t})}
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

            ${e?Y`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot> 
          
          </footer>

        </syn-drawer>

      </nav>
    `}}qt([O()],It.prototype,"isAnimationActive",2);qt([b(".side-nav__drawer")],It.prototype,"drawer",2);qt([a({reflect:!0,type:Boolean})],It.prototype,"open",2);qt([a({reflect:!0,type:Boolean})],It.prototype,"rail",2);qt([a({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],It.prototype,"noFocusTrapping",2);qt([_("rail",{waitUntilFirstUpdate:!0})],It.prototype,"handleModeChange",1);qt([_("open",{waitUntilFirstUpdate:!0})],It.prototype,"handleOpenChange",1);qt([_("noFocusTrapping",{waitUntilFirstUpdate:!0})],It.prototype,"handleFocusTrapping",1);T("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});T("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});T("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});T("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});T("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});T("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});It.define("syn-side-nav");bi.define("syn-spinner");const Wr=u`
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
`,qr=u`
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
  `;var Kr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,rt=(i,t,e,s)=>{for(var o=s>1?void 0:s?Yr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Kr(t,e,o),o};class it extends C{constructor(){super(...arguments),this.formControlController=new Jt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new K(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}static{this.styles=[$,he,Wr,ue,qr]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return m`
      <div
        class=${x({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${x({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${v(this.value)}
            .checked=${ze(this.checked)}
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
    `}}rt([b('input[type="checkbox"]')],it.prototype,"input",2);rt([O()],it.prototype,"hasFocus",2);rt([a()],it.prototype,"title",2);rt([a()],it.prototype,"name",2);rt([a()],it.prototype,"value",2);rt([a({reflect:!0})],it.prototype,"size",2);rt([a({type:Boolean,reflect:!0})],it.prototype,"disabled",2);rt([a({type:Boolean,reflect:!0})],it.prototype,"checked",2);rt([Ee("checked")],it.prototype,"defaultChecked",2);rt([a({reflect:!0})],it.prototype,"form",2);rt([a({type:Boolean,reflect:!0})],it.prototype,"required",2);rt([a({attribute:"help-text"})],it.prototype,"helpText",2);rt([_("checked",{waitUntilFirstUpdate:!0})],it.prototype,"handleCheckedChange",1);rt([_("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);it.define("syn-switch");const Gr=u`
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
`,Xr=u`
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
`;var Zr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,yt=(i,t,e,s)=>{for(var o=s>1?void 0:s?Qr(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Zr(t,e,o),o};class pt extends C{constructor(){super(...arguments),this.localize=new H(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.contained=!1,this.sharp=!1}static{this.styles=[$,Gr,Xr]}static{this.dependencies={"syn-icon-button":ce}}connectedCallback(){const t=Promise.all([customElements.whenDefined("syn-tab"),customElements.whenDefined("syn-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(s=>s.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,o)=>{s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),o.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(s=>t.includeDisabled?s.tagName.toLowerCase()==="syn-tab":s.tagName.toLowerCase()==="syn-tab"&&!s.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="syn-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("syn-tab");s?.closest("syn-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("syn-tab");if(s?.closest("syn-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const n=this.tabs.find(l=>l.matches(":focus")),r=this.localize.dir()==="rtl";if(n?.tagName.toLowerCase()==="syn-tab"){let l=this.tabs.indexOf(n);t.key==="Home"?l=0:t.key==="End"?l=this.tabs.length-1:["top"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?l--:(["top"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&l++,l<0&&(l=this.tabs.length-1),l>this.tabs.length-1&&(l=0),this.tabs[l].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[l],{scrollBehavior:"smooth"}),["top"].includes(this.placement)&&li(this.tabs[l],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(o=>o.active=o===this.activeTab),this.panels.forEach(o=>o.active=o.name===this.activeTab?.panel),this.syncIndicator(),["top"].includes(this.placement)&&li(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("syn-tab-hide",{detail:{name:s.panel}}),this.emit("syn-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,o=this.localize.dir()==="rtl",n=this.getAllTabs(),l=n.slice(0,n.indexOf(t)).reduce((c,d)=>({left:c.left+d.clientWidth,top:c.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":this.indicator.style.width=`calc(${e}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-large)":"0px"})`,this.indicator.style.height="auto",this.indicator.style.translate=`calc(${o?"-":""}1 * (${l.left}px + ${this.contained||this.sharp?"var(--syn-spacing-large)":"0px"}))`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`calc(${s}px - ${this.contained||this.sharp?"2 * var(--syn-spacing-small)":"0px"})`,this.indicator.style.translate=`0 calc(${l.top}px + ${this.contained||this.sharp?"var(--syn-spacing-small)":"0px"})`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){return m`
      <div
        part="base"
        class=${x({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls,"tab-group--contained":this.contained,"tab-group--sharp":this.sharp})}
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
    `}}yt([b(".tab-group")],pt.prototype,"tabGroup",2);yt([b(".tab-group__body")],pt.prototype,"body",2);yt([b(".tab-group__nav")],pt.prototype,"nav",2);yt([b(".tab-group__indicator")],pt.prototype,"indicator",2);yt([O()],pt.prototype,"hasScrollControls",2);yt([a()],pt.prototype,"placement",2);yt([a()],pt.prototype,"activation",2);yt([a({attribute:"no-scroll-controls",type:Boolean})],pt.prototype,"noScrollControls",2);yt([a({type:Boolean})],pt.prototype,"contained",2);yt([a({type:Boolean})],pt.prototype,"sharp",2);yt([_("noScrollControls",{waitUntilFirstUpdate:!0})],pt.prototype,"updateScrollControls",1);yt([_("placement",{waitUntilFirstUpdate:!0})],pt.prototype,"syncIndicator",1);pt.define("syn-tab-group");const Jr=u`
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
`,ta=u`
  /* Write custom CSS here */
  .tab-panel {
    color: var(--syn-typography-color-text);
  }
`;var ea=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,zi=(i,t,e,s)=>{for(var o=s>1?void 0:s?ia(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ea(t,e,o),o};let oa=0;class ei extends C{constructor(){super(...arguments),this.attrId=++oa,this.componentId=`syn-tab-panel-${this.attrId}`,this.name="",this.active=!1}static{this.styles=[$,Jr,ta]}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return m`
      <slot
        part="base"
        class=${x({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}}zi([a({reflect:!0})],ei.prototype,"name",2);zi([a({type:Boolean,reflect:!0})],ei.prototype,"active",2);zi([_("active")],ei.prototype,"handleActiveChange",1);ei.define("syn-tab-panel");const sa=u`
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
`,na=u`
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
`;var ra=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,ie=(i,t,e,s)=>{for(var o=s>1?void 0:s?aa(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ra(t,e,o),o};let la=0;class Kt extends C{constructor(){super(...arguments),this.localize=new H(this),this.attrId=++la,this.componentId=`syn-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}static{this.styles=[$,sa,na]}static{this.dependencies={"syn-icon-button":ce}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("syn-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,m`
      <div
        part="base"
        class=${x({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
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
    `}}ie([b(".tab")],Kt.prototype,"tab",2);ie([a({reflect:!0})],Kt.prototype,"panel",2);ie([a({type:Boolean,reflect:!0})],Kt.prototype,"active",2);ie([a({type:Boolean})],Kt.prototype,"closable",2);ie([a({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);ie([_("active")],Kt.prototype,"handleActiveChange",1);ie([_("disabled")],Kt.prototype,"handleDisabledChange",1);Kt.define("syn-tab");ti.define("syn-tag");const ca=u`
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
`,da=u`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`;var ha=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,F=(i,t,e,s)=>{for(var o=s>1?void 0:s?ua(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ha(t,e,o),o};class I extends C{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new K(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}static{this.styles=[$,he,ca,ue,da]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,o="preserve"){const n=e??this.input.selectionStart,r=s??this.input.selectionEnd;this.input.setRangeText(t,n,r,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,o=this.helpText?!0:!!e;return m`
      <div
        part="form-control"
        class=${x({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${x({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${v(this.name)}
              .value=${ze(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${v(this.placeholder)}
              rows=${v(this.rows)}
              minlength=${v(this.minlength)}
              maxlength=${v(this.maxlength)}
              autocapitalize=${v(this.autocapitalize)}
              autocorrect=${v(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${v(this.spellcheck)}
              enterkeyhint=${v(this.enterkeyhint)}
              inputmode=${v(this.inputmode)}
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}F([b(".textarea__control")],I.prototype,"input",2);F([O()],I.prototype,"hasFocus",2);F([a()],I.prototype,"title",2);F([a()],I.prototype,"name",2);F([a()],I.prototype,"value",2);F([a({reflect:!0})],I.prototype,"size",2);F([a()],I.prototype,"label",2);F([a({attribute:"help-text"})],I.prototype,"helpText",2);F([a()],I.prototype,"placeholder",2);F([a({type:Number})],I.prototype,"rows",2);F([a()],I.prototype,"resize",2);F([a({type:Boolean,reflect:!0})],I.prototype,"disabled",2);F([a({type:Boolean,reflect:!0})],I.prototype,"readonly",2);F([a({reflect:!0})],I.prototype,"form",2);F([a({type:Boolean,reflect:!0})],I.prototype,"required",2);F([a({type:Number})],I.prototype,"minlength",2);F([a({type:Number})],I.prototype,"maxlength",2);F([a()],I.prototype,"autocapitalize",2);F([a()],I.prototype,"autocorrect",2);F([a()],I.prototype,"autocomplete",2);F([a({type:Boolean})],I.prototype,"autofocus",2);F([a()],I.prototype,"enterkeyhint",2);F([a({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],I.prototype,"spellcheck",2);F([a()],I.prototype,"inputmode",2);F([Ee()],I.prototype,"defaultValue",2);F([_("disabled",{waitUntilFirstUpdate:!0})],I.prototype,"handleDisabledChange",1);F([_("rows",{waitUntilFirstUpdate:!0})],I.prototype,"handleRowsChange",1);F([_("value",{waitUntilFirstUpdate:!0})],I.prototype,"handleValueChange",1);I.define("syn-textarea");const pa=u`
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
`,ma=u`
  /* Write custom CSS here */
  .tooltip__body {
    box-shadow: var(--syn-shadow-large);
  }
`;var fa=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,at=(i,t,e,s)=>{for(var o=s>1?void 0:s?ba(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&fa(t,e,o),o};class ot extends C{constructor(){super(),this.localize=new H(this),this.content="",this.placement="top",this.disabled=!1,this.distance=13,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Oi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Oi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static{this.styles=[$,pa,ma]}static{this.dependencies={"syn-popup":P}}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("syn-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await G(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=U(this,"tooltip.show",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.popup.reposition(),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await G(this.body);const{keyframes:t,options:e}=U(this,"tooltip.hide",{dir:this.localize.dir()});await q(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("syn-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,X(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,X(this,"syn-after-hide")}render(){return m`
      <syn-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${x({tooltip:!0,"tooltip--open":this.open})}
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
    `}}at([b("slot:not([name])")],ot.prototype,"defaultSlot",2);at([b(".tooltip__body")],ot.prototype,"body",2);at([b("syn-popup")],ot.prototype,"popup",2);at([a()],ot.prototype,"content",2);at([a()],ot.prototype,"placement",2);at([a({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);at([a({type:Number})],ot.prototype,"distance",2);at([a({type:Boolean,reflect:!0})],ot.prototype,"open",2);at([a({type:Number})],ot.prototype,"skidding",2);at([a()],ot.prototype,"trigger",2);at([a({type:Boolean})],ot.prototype,"hoist",2);at([_("open",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpenChange",1);at([_(["content","distance","hoist","placement","skidding"])],ot.prototype,"handleOptionsChange",1);at([_("disabled")],ot.prototype,"handleDisabledChange",1);T("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});T("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});ot.define("syn-tooltip");function ya(i){const t=typeof window<"u"&&window;return!!(t&&(t.navigator.userAgent.match(/Chromatic/)||t.location.href.match(/chromatic=true/)))}const ga=(i,...t)=>ya()?m`
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
      ${i(...t)}
    `:i(...t),je="🌞 light",pi="🌙 dark",va=i=>`https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=${i}`,_a=(i,t="Go to Figma page")=>({label:t,type:"link",url:va(i)}),wa=jo({defaultTheme:je,parentSelector:"body",themes:{[je]:"syn-theme-light",[pi]:"syn-theme-dark"}}),xa={decorators:[ga,wa],parameters:{backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{disableSnapshot:!0,modes:{[je]:{theme:je},[pi]:{theme:pi}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},design:_a("104-238"),docs:{stories:{inline:!1},toc:{headingSelector:"h2, h3"},source:{format:"html"}},viewport:{defaultViewport:"defaultViewPort",viewports:{...Wo,defaultViewPort:{name:"Default",styles:{width:"100%",height:"100%"},type:"desktop"}}}}},Ta=Object.freeze(Object.defineProperty({__proto__:null,default:xa},Symbol.toStringTag,{value:"Module"}));export{Ta as a,Zi as f,_a as g,ya as i,Lr as o,xa as p};
