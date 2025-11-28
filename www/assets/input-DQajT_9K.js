import{e as F}from"./class-map-szeHYWjM.js";import{d as A}from"./default-value-AZAl3pW4.js";import{F as P}from"./form-d9hCJUdr.js";import{H as T}from"./slot-9EVoRGQc.js";import{e as E,A as U,t as M,E as O,T as B,j as $,x as b}from"./iframe-C5QviLTd.js";import{o as h}from"./if-defined-CnsgxTJq.js";import{l as L}from"./live-9kvs4oq7.js";import{L as j}from"./localize-Dh03wnLC.js";import{c as H,n as o,S as K}from"./synergy-element-Cm-Wv3ul.js";import{S as R,r as q}from"./icon.component-ChqKiuCu.js";import{a as G}from"./query-DAIS6qJ0.js";import{w as k}from"./watch-CEsCE2EF.js";import{f as W,a as Z}from"./form-control.custom.styles-BglBn00j.js";import{S as J}from"./divider.component-DHlwxJY4.js";import{m as V,n as _,c as Q}from"./functions-CDi3doZH.js";import{e as X}from"./decorator-DANECR0-.js";class Y extends U{constructor(i){if(super(i),this.handlePointerDown=e=>{e.button!==0||this.host.disabled||this.spinOnLongPressCallback(e)},this.handlePointerUp=e=>{e?.preventDefault(),e?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},i.type!==M.ELEMENT||!(i.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(i){return O}update(i,[e]){return this.callbacks===void 0&&this.host===void 0&&(this.host=i.element,this.callbacks={...e},this.host.addEventListener("pointerdown",this.handlePointerDown)),B}reconnected(){this.host.addEventListener("pointerdown",this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(i){i.preventDefault(),i.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(e=>{e.forEach(r=>{r.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const z=E(Y),tt=$`
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
`,it=$`
  /**
  * Fixes overflowing of the syn-input in flex and grid containers with fix width (https://github.com/synergy-design-system/synergy-design-system/issues/761)
  */
  .input__control {
    width: 100%;
  }

  /** #429: Use token for opacity */
  .input--standard.input--disabled,
  .input--readonly.input--disabled {
    opacity: var(--syn-input-disabled-opacity);
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
    color: var(--syn-interactive-emphasis-color, var(--syn-color-primary-600));
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
    color: var(--syn-interactive-emphasis-color-hover, var(--syn-color-primary-900));
  }

  .input__number-stepper-button:active:not([disabled]) {
    color: var(--syn-interactive-emphasis-color-active, var(--syn-color-primary-950));
  }

  .input__number-stepper-button[disabled] {
    color: var(--syn-color-neutral-400);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
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
`,et=(t,i,e={})=>{const{maximumFractionDigits:r,minimumFractionDigits:a,...l}=e,p=(i==="any"||!i?1:+i).toString().split(".")[1]?.length||0;let u,m;const w=typeof a=="number",S=typeof r=="number";return w&&!S?(u=a,m=a):S&&!w?(u=r,m=r):w&&S&&(u=Math.min(a,r),m=Math.max(a,r)),p>(u||0)&&(u=p),p>(m||0)&&(m=p),typeof u<"u"&&u>100&&(u=100),typeof m<"u"&&m>100&&(m=100),new Intl.NumberFormat("en-US",{maximumFractionDigits:m,minimumFractionDigits:u,useGrouping:!1,...l}).format(t)};var nt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,I=t=>{throw TypeError(t)},s=(t,i,e,r)=>{for(var a=r>1?void 0:r?st(i,e):i,l=t.length-1,d;l>=0;l--)(d=t[l])&&(a=(r?d(i,e,a):d(a))||a);return r&&a&&nt(i,e,a),a},D=(t,i,e)=>i.has(t)||I("Cannot "+e),f=(t,i,e)=>(D(t,i,"read from private field"),e?e.call(t):i.get(t)),N=(t,i,e)=>i.has(t)?I("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),C=(t,i,e,r)=>(D(t,i,"write to private field"),i.set(t,e),e),g=(t,i,e)=>(D(t,i,"access private method"),e),c,y,x,v;let n=class extends K{constructor(){super(...arguments),N(this,y),this.formControlController=new P(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new T(this,"help-text","label","prefix","suffix"),this.localize=new j(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0,N(this,c,_)}set numericStrategy(t){switch(typeof t){case"string":C(this,c,t==="modern"?V:_);break;case"object":C(this,c,Q(t));break;default:C(this,c,_)}}get numericStrategy(){return f(this,c)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return parseFloat(this.value)<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return parseFloat(this.value)>=t}handleNumericStrategyAutoClamp(){const{valueAsNumber:t,max:i,min:e}=this;if(!f(this,c).autoClamp)return{eventObj:null,shouldClamp:!1,nextValue:t};const r=typeof e=="string"?parseFloat(e):e,a=typeof i=="string"?parseFloat(i):i;let l=t,d="";l<r?(l=r,d="min"):l>a&&(l=a,d="max");const p=d?{detail:{clampedTo:d,lastUserValue:t}}:null;return{eventObj:p,shouldClamp:!!p,nextValue:l}}handleChange(){if(this.type==="number"&&(g(this,y,v).call(this)||f(this,c).autoClamp)){const{eventObj:t,shouldClamp:i,nextValue:e}=this.handleNumericStrategyAutoClamp();let r=f(this,c).autoClamp?e:this.valueAsNumber;if(isNaN(r)){const{max:a,min:l}=this;a!=null?r=typeof a=="string"?parseFloat(a):+a:l!=null?r=typeof l=="string"?parseFloat(l):+l:r=0}this.value=g(this,y,v).call(this)?g(this,y,x).call(this,r):r.toString(),this.updateComplete.then(()=>{i&&t&&this.emit("syn-clamp",t),this.formControlController.updateValidity(),this.emit("syn-change")});return}this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){if(f(this,c).noStepAlign&&this.type==="number"){const{key:e}=t;if(e==="ArrowUp"||e==="ArrowDown"){t.preventDefault(),t.stopPropagation(),e==="ArrowUp"?this.handleStepUp():e==="ArrowDown"&&this.handleStepDown(),this.handleChange();return}}const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){f(this,c).noStepValidation||(this.input.step=String(this.step),this.formControlController.updateValidity())}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,i,e="none"){this.input.setSelectionRange(t,i,e)}setRangeText(t,i,e,r="preserve"){const a=i??this.input.selectionStart,l=e??this.input.selectionEnd;this.input.setRangeText(t,a,l,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){if(f(this,c).noStepAlign){const{max:t,step:i,valueAsNumber:e}=this,r=Number.isNaN(e)?0:e,a=typeof this.min=="string"?parseFloat(this.min):this.min,l=typeof t=="string"?parseFloat(t):t,d=typeof i>"u"||i===null||i==="any"?1:typeof i=="number"?i:parseFloat(i);let p=r+d;typeof l=="number"&&l<p?p=l:typeof a=="number"&&a>p&&(p=a);const u=g(this,y,v).call(this)?g(this,y,x).call(this,p):p.toString();this.input.value=u,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){if(f(this,c).noStepAlign){const{min:t,max:i,step:e,valueAsNumber:r}=this,a=Number.isNaN(r)?0:r,l=typeof t=="string"?parseFloat(t):t,d=typeof i=="string"?parseFloat(i):i,p=typeof e>"u"||e===null||e==="any"?1:typeof e=="number"?e:parseFloat(e);let u=a-p;typeof l=="number"&&l>u?u=l:typeof d=="number"&&d<u&&(u=d);const m=g(this,y,v).call(this)?g(this,y,x).call(this,u):u.toString();this.input.value=m,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),e=this.hasSlotController.test("prefix"),r=this.hasSlotController.test("suffix"),a=this.label?!0:!!t,l=this.helpText?!0:!!i,p=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return b`
      <div
        part="form-control"
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":a,"form-control--has-help-text":l,"form-control--has-prefix":e,"form-control--has-suffix":r})}
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
            class=${F({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${h(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${h(this.placeholder)}
              minlength=${h(this.minlength)}
              maxlength=${h(this.maxlength)}
              min=${h(this.min)}
              max=${h(this.max)}
              step=${h(f(this,c).noStepValidation?"any":this.step)}
              .value=${L(this.value)}
              autocapitalize=${h(this.autocapitalize)}
              autocomplete=${h(this.autocomplete)}
              autocorrect=${h(this.autocorrect?void 0:"off")}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${h(this.pattern)}
              enterkeyhint=${h(this.enterkeyhint)}
              inputmode=${h(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${p?b`
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
            ${this.passwordToggle&&!this.disabled?b`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?b`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:b`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?b`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${z({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${z({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
          aria-hidden=${l?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};c=new WeakMap;y=new WeakSet;x=function(t){return et(t,this.step,{maximumFractionDigits:this.maxFractionDigits,minimumFractionDigits:this.minFractionDigits,...this.numberFormatterOptions})};v=function(){const{numberFormatterOptions:t,maxFractionDigits:i,minFractionDigits:e,step:r}=this,a=typeof i<"u"&&!Number.isNaN(i),l=typeof e<"u"&&!Number.isNaN(e);return a||l||typeof t=="object"?!0:((r==="any"||!r?1:+r).toString().split(".")[1]?.length||0)>0};n.styles=[H,W,tt,Z,it];n.dependencies={"syn-icon":R,"syn-divider":J};s([G(".input__control")],n.prototype,"input",2);s([q()],n.prototype,"hasFocus",2);s([o({reflect:!0})],n.prototype,"title",2);s([o({reflect:!0})],n.prototype,"type",2);s([o()],n.prototype,"name",2);s([o()],n.prototype,"value",2);s([A()],n.prototype,"defaultValue",2);s([o({reflect:!0})],n.prototype,"size",2);s([o()],n.prototype,"label",2);s([o({attribute:"help-text"})],n.prototype,"helpText",2);s([o({type:Boolean})],n.prototype,"clearable",2);s([o({type:Boolean,reflect:!0})],n.prototype,"disabled",2);s([o()],n.prototype,"placeholder",2);s([o({type:Boolean,reflect:!0})],n.prototype,"readonly",2);s([o({attribute:"password-toggle",type:Boolean})],n.prototype,"passwordToggle",2);s([o({attribute:"password-visible",type:Boolean})],n.prototype,"passwordVisible",2);s([o({attribute:"no-spin-buttons",type:Boolean})],n.prototype,"noSpinButtons",2);s([o({reflect:!0})],n.prototype,"form",2);s([o({type:Boolean,reflect:!0})],n.prototype,"required",2);s([o()],n.prototype,"pattern",2);s([o({type:Number})],n.prototype,"minlength",2);s([o({type:Number})],n.prototype,"maxlength",2);s([o()],n.prototype,"min",2);s([o()],n.prototype,"max",2);s([o()],n.prototype,"step",2);s([o()],n.prototype,"autocapitalize",2);s([o({attribute:"autocorrect",reflect:!0,converter:{fromAttribute:t=>t===""||t==="on",toAttribute:t=>t?"on":"off"},type:Boolean})],n.prototype,"autocorrect",2);s([o()],n.prototype,"autocomplete",2);s([o({type:Boolean})],n.prototype,"autofocus",2);s([o()],n.prototype,"enterkeyhint",2);s([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],n.prototype,"spellcheck",2);s([o()],n.prototype,"inputmode",2);s([o({attribute:!1,reflect:!1,type:Object})],n.prototype,"numberFormatterOptions",2);s([o({attribute:"min-fraction-digits",type:Number})],n.prototype,"minFractionDigits",2);s([o({attribute:"max-fraction-digits",type:Number})],n.prototype,"maxFractionDigits",2);s([o({attribute:"numeric-strategy",converter:{fromAttribute:t=>t==="modern"?V:_},type:Object})],n.prototype,"numericStrategy",1);s([k("disabled",{waitUntilFirstUpdate:!0})],n.prototype,"handleDisabledChange",1);s([k("step",{waitUntilFirstUpdate:!0})],n.prototype,"handleStepChange",1);s([k("value",{waitUntilFirstUpdate:!0})],n.prototype,"handleValueChange",1);n=s([X("SynInput")],n);n.define("syn-input");
