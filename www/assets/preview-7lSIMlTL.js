import"./index-4g5l5LRQ.js";import{i as w,x,a as Qe,u as Be,w as Tt,T as ae,m as Eo}from"./directive-helpers-po9zzQFH.js";import{a as N,c as H,S as St,b as B,w as A,n as a}from"./icon.component-FLPqHom6.js";import{s as Me,n as Lt,a as F,o as g,b as R,c as Ee,t as ut,e as Ae,S as Je}from"./icon-button-yvDTBi18.js";import"./icon-Xovi5wSD.js";const qt=new WeakMap,jt=new WeakMap,Wt=new WeakMap,ve=new WeakSet,se=new WeakMap;class Ot{constructor(t,o){this.handleFormData=i=>{const s=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";this.host.isConnected&&!s&&!l&&typeof n=="string"&&n.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{i.formData.append(n,c.toString())}):i.formData.append(n,r.toString()))},this.handleFormSubmit=i=>{const s=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&qt.get(this.form)?.forEach(r=>{this.setUserInteracted(r,!0)}),this.form&&!this.form.noValidate&&!s&&!n(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),se.set(this.host,[])},this.handleInteraction=i=>{const s=se.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const s=i.form;if(s){const r=i.getRootNode().getElementById(s);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["syn-input"],...o}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),se.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),se.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,qt.has(this.form)?qt.get(this.form).add(this.host):qt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),jt.has(this.form)||(jt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Wt.has(this.form)||(Wt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=qt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),jt.has(this.form)&&(this.form.reportValidity=jt.get(this.form),jt.delete(this.form)),Wt.has(this.form)&&(this.form.checkValidity=Wt.get(this.form),Wt.delete(this.form)),this.form=void 0))}setUserInteracted(t,o){o?ve.add(t):ve.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&i.setAttribute(s,o.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const o=this.host,i=!!ve.has(o),s=!!o.required;o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&i),o.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const o=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||o.preventDefault(),this.host.dispatchEvent(o)||t?.preventDefault()}}const fe=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ao=Object.freeze({...fe,valid:!1,valueMissing:!0}),To=Object.freeze({...fe,valid:!1,customError:!0});class ot{constructor(t,...o){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if(o.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}const ke=new Set,Do=new MutationObserver(io),Dt=new Map;let to=document.documentElement.dir||"ltr",eo=document.documentElement.lang||navigator.language,kt;Do.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function oo(...e){e.map(t=>{const o=t.$code.toLowerCase();Dt.has(o)?Dt.set(o,Object.assign(Object.assign({},Dt.get(o)),t)):Dt.set(o,t),kt||(kt=t)}),io()}function io(){to=document.documentElement.dir||"ltr",eo=document.documentElement.lang||navigator.language,[...ke.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Po=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ke.add(this.host)}hostDisconnected(){ke.delete(this.host)}dir(){return`${this.host.dir||to}`.toLowerCase()}lang(){return`${this.host.lang||eo}`.toLowerCase()}getTranslationData(t){var o,i;const s=new Intl.Locale(t.replace(/_/g,"-")),n=s?.language.toLowerCase(),r=(i=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=Dt.get(`${n}-${r}`),c=Dt.get(n);return{locale:s,language:n,region:r,primary:l,secondary:c}}exists(t,o){var i;const{primary:s,secondary:n}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||n&&n[t]||o.includeFallback&&kt&&kt[t])}term(t,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(s&&s[t])n=s[t];else if(kt&&kt[t])n=kt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...o):n}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}};const so={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};oo(so);class Et extends Po{static{oo(so)}}const Lo=w`
	/* stylelint-disable */
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
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
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;class Vo extends N{constructor(){super(...arguments),this.localize=new Et(this)}static{this.styles=[H,Lo]}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const no=w`
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

  :host(.syn-button-group__button--first:not(.syn-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.syn-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.syn-button-group__button--last:not(.syn-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.syn-button-group__button:not(.syn-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--syn-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .syn-button-group__button:not(
          .syn-button-group__button--first,
          .syn-button-group__button--radio,
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
  :host(.syn-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.syn-button-group__button--focus),
  :host(.syn-button-group__button[checked]) {
    z-index: 2;
  }
`,Fo=w`
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
`;var Ro=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,L=(e,t,o,i)=>{for(var s=i>1?void 0:i?Io(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ro(t,o,s),s};class D extends N{constructor(){super(...arguments),this.formControlController=new Ot(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ot(this,"[default]","prefix","suffix"),this.localize=new Et(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}static{this.styles=[H,no,Fo]}static{this.dependencies={"syn-icon":St,"syn-spinner":Vo}}get validity(){return this.isButton()?this.button.validity:fe}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),o=t?Me`a`:Me`button`;return Lt`
      <${o}
        part="base"
        class=${F({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:this.type)}
        title=${this.title}
        name=${g(t?void 0:this.name)}
        value=${g(t?void 0:this.value)}
        href=${g(t?this.href:void 0)}
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
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Lt` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?Lt`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${o}>
    `}}L([R(".button")],D.prototype,"button",2);L([B()],D.prototype,"hasFocus",2);L([B()],D.prototype,"invalid",2);L([a()],D.prototype,"title",2);L([a({reflect:!0})],D.prototype,"variant",2);L([a({reflect:!0})],D.prototype,"size",2);L([a({type:Boolean,reflect:!0})],D.prototype,"caret",2);L([a({type:Boolean,reflect:!0})],D.prototype,"disabled",2);L([a({type:Boolean,reflect:!0})],D.prototype,"loading",2);L([a()],D.prototype,"type",2);L([a()],D.prototype,"name",2);L([a()],D.prototype,"value",2);L([a()],D.prototype,"href",2);L([a()],D.prototype,"target",2);L([a()],D.prototype,"rel",2);L([a()],D.prototype,"download",2);L([a()],D.prototype,"form",2);L([a({attribute:"formaction"})],D.prototype,"formAction",2);L([a({attribute:"formenctype"})],D.prototype,"formEnctype",2);L([a({attribute:"formmethod"})],D.prototype,"formMethod",2);L([a({attribute:"formnovalidate",type:Boolean})],D.prototype,"formNoValidate",2);L([a({attribute:"formtarget"})],D.prototype,"formTarget",2);L([A("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);D.define("syn-button");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const i of o)i._$AO?.(t,!1),Gt(i,t);return!0},le=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},ro=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),No(t)}};function Bo(e){this._$AN!==void 0?(le(this),this._$AM=e,ro(this)):this._$AM=e}function Mo(e,t=!1,o=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let n=o;n<i.length;n++)Gt(i[n],!1),le(i[n]);else i!=null&&(Gt(i,!1),le(i));else Gt(this,e)}const No=e=>{e.type==ut.CHILD&&(e._$AP??=Mo,e._$AQ??=Bo)};class Ho extends Ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,i){super._$AT(t,o,i),ro(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(Gt(this,t),le(this))}setValue(t){if(Qe(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{useParameter:Uo,addons:qo,useEffect:jo,useMemo:yn}=__STORYBOOK_MODULE_PREVIEW_API__;var Wo=Object.defineProperty,Ko=(e,t)=>{for(var o in t)Wo(e,o,{get:t[o],enumerable:!0})},Yo={};Ko(Yo,{initializeThemeState:()=>uo,pluckThemeFromContext:()=>lo,useThemeParameters:()=>co});var ao="themes",Go=`storybook/${ao}}`,Xo="theme",Zo={},Qo={REGISTER_THEMES:`${Go}/REGISTER_THEMES`};function lo({globals:e}){return e[Xo]||""}function co(){return Uo(ao,Zo)}function uo(e,t){qo.getChannel().emit(Qo.REGISTER_THEMES,{defaultTheme:t,themes:e})}var Jo="html",Ne=e=>e.split(" ").filter(Boolean),ti=({themes:e,defaultTheme:t,parentSelector:o=Jo})=>(uo(Object.keys(e),t),(i,s)=>{let{themeOverride:n}=co(),r=lo(s);return jo(()=>{let l=n||r||t,c=document.querySelector(o);if(!c)return;Object.entries(e).filter(([u])=>u!==l).forEach(([u,h])=>{let m=Ne(h);m.length>0&&c.classList.remove(...m)});let d=Ne(e[l]);d.length>0&&c.classList.add(...d)},[n,r,o]),i()});const ei=w`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var oi=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,Te=(e,t,o,i)=>{for(var s=i>1?void 0:i?ii(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oi(t,o,s),s};class Qt extends N{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=[H,ei]}handleFocus(t){Kt(t.target)?.classList.add("syn-button-group__button--focus")}handleBlur(t){Kt(t.target)?.classList.remove("syn-button-group__button--focus")}handleMouseOver(t){Kt(t.target)?.classList.add("syn-button-group__button--hover")}handleMouseOut(t){Kt(t.target)?.classList.remove("syn-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(o=>{const i=t.indexOf(o),s=Kt(o);s&&(s.classList.add("syn-button-group__button"),s.classList.toggle("syn-button-group__button--first",i===0),s.classList.toggle("syn-button-group__button--inner",i>0&&i<t.length-1),s.classList.toggle("syn-button-group__button--last",i===t.length-1),s.classList.toggle("syn-button-group__button--radio",s.tagName.toLowerCase()==="syn-radio-button"))})}render(){return x`
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
    `}}Te([R("slot")],Qt.prototype,"defaultSlot",2);Te([B()],Qt.prototype,"disableRole",2);Te([a()],Qt.prototype,"label",2);function Kt(e){const t="syn-button, syn-radio-button";return e.closest(t)??e.querySelector(t)}Qt.define("syn-button-group");const Jt=(e="value")=>(t,o)=>{const i=t.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,r,l){const c=i.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(n===d){const u=c.converter||Be,m=(typeof u=="function"?u:u?.fromAttribute??Be.fromAttribute)(l,c.type);this[e]!==m&&(this[o]=m)}s.call(this,n,r,l)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Ae(class extends Ee{constructor(e){if(super(e),e.type!==ut.PROPERTY&&e.type!==ut.ATTRIBUTE&&e.type!==ut.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qe(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Tt||t===ae)return t;const o=e.element,i=e.name;if(e.type===ut.PROPERTY){if(t===o[i])return Tt}else if(e.type===ut.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return Tt}else if(e.type===ut.ATTRIBUTE&&o.getAttribute(i)===t+"")return Tt;return Eo(e),t}}),si=w`
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
    margin-inline-start: var(--syn-input-required-content-offset);
  }
`,Rt=w`
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
`,It=w` 

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

`,ni=w`
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
    margin-inline-start: var(--syn-spacing-x-small);
  }

  /* Disabled */
  .checkbox--disabled .checkbox__label {
    color: var(--syn-color-neutral-700);
  }
`;var ri=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,q=(e,t,o,i)=>{for(var s=i>1?void 0:i?ai(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ri(t,o,s),s};class U extends N{constructor(){super(...arguments),this.formControlController=new Ot(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasSlotController=new ot(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}static{this.styles=[H,si,Rt,It,ni]}static{this.dependencies={"syn-icon":St}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),o=this.helpText?!0:!!t;return x`
      <div
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":o})}
      >
        <label
          part="base"
          class=${F({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${g(this.value)}
            .indeterminate=${Xt(this.indeterminate)}
            .checked=${Xt(this.checked)}
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
            ${this.checked?x`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?x`
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
          aria-hidden=${o?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}q([R('input[type="checkbox"]')],U.prototype,"input",2);q([B()],U.prototype,"hasFocus",2);q([a()],U.prototype,"title",2);q([a()],U.prototype,"name",2);q([a()],U.prototype,"value",2);q([a({reflect:!0})],U.prototype,"size",2);q([a({type:Boolean,reflect:!0})],U.prototype,"disabled",2);q([a({type:Boolean,reflect:!0})],U.prototype,"checked",2);q([a({type:Boolean,reflect:!0})],U.prototype,"indeterminate",2);q([Jt("checked")],U.prototype,"defaultChecked",2);q([a({reflect:!0})],U.prototype,"form",2);q([a({type:Boolean,reflect:!0})],U.prototype,"required",2);q([a({attribute:"help-text"})],U.prototype,"helpText",2);q([A("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);q([A(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],U.prototype,"handleStateChange",1);U.define("syn-checkbox");const li=w`
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
`,ci=w`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`;var di=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,ho=(e,t,o,i)=>{for(var s=i>1?void 0:i?ui(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&di(t,o,s),s};class te extends N{constructor(){super(...arguments),this.vertical=!1}static{this.styles=[H,li,ci]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}ho([a({type:Boolean,reflect:!0})],te.prototype,"vertical",2);ho([A("vertical")],te.prototype,"handleVerticalChange",1);te.define("syn-divider");function Ct(e,t,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,{...o,duration:hi()?0:o.duration});s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function hi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pt(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}const po=new Map,pi=new WeakMap;function fi(e){return e??{keyframes:[],options:{duration:0}}}function He(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function J(e,t){po.set(e,fi(t))}function zt(e,t,o){const i=pi.get(e);if(i?.[t])return He(i[t],o.dir);const s=po.get(t);return s?He(s,o.dir):{keyframes:[],options:{duration:0}}}function mi(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}const Ce=new Set;function yi(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function _e(e){if(Ce.add(e),!document.body.classList.contains("syn-scroll-lock")){const t=yi();document.body.classList.add("syn-scroll-lock"),document.body.style.setProperty("--syn-scroll-lock-size",`${t}px`)}}function xe(e){Ce.delete(e),Ce.size===0&&(document.body.classList.remove("syn-scroll-lock"),document.body.style.removeProperty("--syn-scroll-lock-size"))}function bi(e,t,o="vertical",i="smooth"){const s=mi(e,t),n=s.top+t.scrollTop,r=s.left+t.scrollLeft,l=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,d=t.scrollTop,u=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(r<l?t.scrollTo({left:r,behavior:i}):r+e.clientWidth>c&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(n<d?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>u&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}function Ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ce(e,t){return new Promise(o=>{function i(s){s.target===e&&(e.removeEventListener(t,i),o())}e.addEventListener(t,i)})}function*De(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*De(e.shadowRoot.activeElement)))}function gi(){return[...De()].pop()}const qe=new WeakMap;function fo(e){let t=qe.get(e);return t||(t=window.getComputedStyle(e,null),qe.set(e,t)),t}function vi(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=fo(e);return t.visibility!=="hidden"&&t.display!=="none"}function _i(e){const t=fo(e),{overflowY:o,overflowX:i}=t;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&o==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function xi(e){const t=e.tagName.toLowerCase(),o=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!vi(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:_i(e)}function wi(e,t){return e.getRootNode({composed:!0})?.host!==t}function je(e){const t=new WeakMap,o=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!o.includes(s)&&xi(s)&&o.push(s),s instanceof HTMLSlotElement&&wi(s,e)&&s.assignedElements({flatten:!0}).forEach(n=>{i(n)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}for(const n of s.children)i(n)}return i(e),o.sort((s,n)=>{const r=Number(s.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}let Yt=[];class ki{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=o=>{if(o.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=gi();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;o.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=je(this.element);let n=s.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=s.length?n=0:n+r<0?n=s.length-1:n+=r,this.previousFocus=this.currentFocus;const l=s[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;o.preventDefault(),this.currentFocus=l,this.currentFocus?.focus({preventScroll:!1});const c=[...De()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Yt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Yt=Yt.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Yt[Yt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=je(this.element);if(!this.element.matches(":focus-within")){const o=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?o:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}const Ci=w`
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
`,zi=w`
  :host {
    /**
     * Used as the default padding for the drawer title
     */
    --header-spacing: var(--syn-spacing-large) var(--syn-spacing-x-small) 0 var(--syn-spacing-large);

    /**
     * Defines the default body spacing
     */
    --body-spacing: var(--syn-spacing-medium) var(--syn-spacing-large);

    /**
     * Defines the default footer spacing
     */
    --footer-spacing: var(--syn-spacing-medium) var(--syn-spacing-large) var(--syn-spacing-large);
  }

  /**
   * Synergy uses a border to distinguish the drawer from its background and
   * removes the default shoelace shadow completely
   */
  .drawer__panel {
    border: 0 solid var(--syn-color-neutral-300);
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
    padding: var(--syn-spacing-large) var(--syn-spacing-x-small) 0 0;
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
  .header-actions {
    min-height: 64px;
  }

  .drawer__header-actions syn-icon-button,
  .drawer__header-actions ::slotted(syn-icon-button) {
    color: var(--syn-color-neutral-950);
    font-size: var(--syn-font-size-x-large);
  }
`;var $i=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,lt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Si(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&$i(t,o,s),s};class it extends N{constructor(){super(...arguments),this.hasSlotController=new ot(this,"footer"),this.localize=new Et(this),this.modal=new ki(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=[H,Ci,zi]}static{this.dependencies={"syn-icon-button":Je}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),_e(this)))}disconnectedCallback(){super.disconnectedCallback(),xe(this),this.closeWatcher?.destroy()}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=zt(this,"drawer.denyClose",{dir:this.localize.dir()});Ct(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),_e(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Pt(this.drawer),Pt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const o=zt(this,`drawer.show${Ue(this.placement)}`,{dir:this.localize.dir()}),i=zt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ct(this.panel,o.keyframes,o.options),Ct(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),xe(this)),await Promise.all([Pt(this.drawer),Pt(this.overlay)]);const t=zt(this,`drawer.hide${Ue(this.placement)}`,{dir:this.localize.dir()}),o=zt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ct(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),Ct(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),_e(this)),this.open&&this.contained&&(this.modal.deactivate(),xe(this))}async show(){if(!this.open)return this.open=!0,ce(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,ce(this,"syn-after-hide")}render(){return x`
      <div
        part="base"
        class=${F({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":x`
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
    `}}lt([R(".drawer")],it.prototype,"drawer",2);lt([R(".drawer__panel")],it.prototype,"panel",2);lt([R(".drawer__overlay")],it.prototype,"overlay",2);lt([a({type:Boolean,reflect:!0})],it.prototype,"open",2);lt([a({reflect:!0})],it.prototype,"label",2);lt([a({reflect:!0})],it.prototype,"placement",2);lt([a({type:Boolean,reflect:!0})],it.prototype,"contained",2);lt([a({attribute:"no-header",type:Boolean,reflect:!0})],it.prototype,"noHeader",2);lt([A("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);lt([A("contained",{waitUntilFirstUpdate:!0})],it.prototype,"handleNoModalChange",1);J("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});J("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});J("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});J("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});J("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});J("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});J("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});J("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});J("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});J("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});J("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});it.define("syn-drawer");const Oi=w`
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
    font: var(--syn-body-large-bold);
    padding: 0 var(--syn-spacing-2x-large);
  }

  /**
   * The options menu holds an arbitary list of <syn-icon-button />
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

  .header__navigation {
    padding: 0 var(--syn-spacing-large);
  }
`;var Ei=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Ti=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ai(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ei(t,o,s),s};class mo extends N{constructor(){super(...arguments),this.hasSlotController=new ot(this,"[default]","logo","label","meta-navigation","navigation"),this.label=""}static{this.styles=[H,Oi]}static{this.dependencies={"syn-icon":St}}render(){const t=this.hasSlotController.test("navigation");return Lt`
      <header
        class=${F({header:!0,"header--has-navigation":t})}
        part="base"
      >
        <!-- .header__content -->
        <div part="content" class="header__content">

          <div part="logo" class="header__logo">
            <slot name="logo">
              <syn-icon name="logo-color" library="system" label="SICK Sensor Intelligence"></syn-icon>
            </slot>
          </div>

          <div part="label" class="header__label">
            <slot>
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
    `}}Ti([a()],mo.prototype,"label",2);mo.define("syn-header");class Di extends Ho{constructor(t){if(super(t),this.handlePointerDown=o=>{o.button!==0||this.host.disabled||this.spinOnLongPressCallback(o)},this.handlePointerUp=o=>{o?.preventDefault(),o?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},t.type!==ut.ELEMENT||!(t.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(t){return ae}update(t,[o]){return this.callbacks===void 0&&this.host===void 0&&(this.host=t.element,this.callbacks={...o},this.host.addEventListener("pointerdown",this.handlePointerDown)),Tt}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(t){t.preventDefault(),t.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(o=>{o.forEach(i=>{i.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const We=Ae(Di),Pi=w`
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

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

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

  .input--empty .input__clear {
    visibility: hidden;
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
`,Li=w`

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
`;var Vi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,_=(e,t,o,i)=>{for(var s=i>1?void 0:i?Fi(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Vi(t,o,s),s};class v extends N{constructor(){super(...arguments),this.formControlController=new Ot(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new ot(this,"help-text","label","prefix","suffix"),this.localize=new Et(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}static{this.styles=[H,Rt,Pi,It,Li]}static{this.dependencies={"syn-icon":St,"syn-divider":te}}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null||this.disabled)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return this.valueAsNumber<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return this.valueAsNumber>=t}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,o,i="none"){this.input.setSelectionRange(t,o,i)}setRangeText(t,o,i,s="preserve"){const n=o??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,n,r,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!o,l=this.clearable&&!this.disabled&&!this.readonly,c=l&&(typeof this.value=="number"||this.value.length>0);return x`
      <div
        part="form-control"
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r,"form-control--has-prefix":i,"form-control--has-suffix":s})}
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
              name=${g(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              min=${g(this.min)}
              max=${g(this.max)}
              step=${g(this.step)}
              .value=${Xt(this.value)}
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

            ${l?x`
                  <button
                    part="clear-button"
                    class=${F({input__clear:!0,"input__clear--visible":c})}
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
            ${this.passwordToggle&&!this.disabled?x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?x`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:x`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?x`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${We({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${We({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
    `}}_([R(".input__control")],v.prototype,"input",2);_([B()],v.prototype,"hasFocus",2);_([a()],v.prototype,"title",2);_([a({reflect:!0})],v.prototype,"type",2);_([a()],v.prototype,"name",2);_([a()],v.prototype,"value",2);_([Jt()],v.prototype,"defaultValue",2);_([a({reflect:!0})],v.prototype,"size",2);_([a()],v.prototype,"label",2);_([a({attribute:"help-text"})],v.prototype,"helpText",2);_([a({type:Boolean})],v.prototype,"clearable",2);_([a({type:Boolean,reflect:!0})],v.prototype,"disabled",2);_([a()],v.prototype,"placeholder",2);_([a({type:Boolean,reflect:!0})],v.prototype,"readonly",2);_([a({attribute:"password-toggle",type:Boolean})],v.prototype,"passwordToggle",2);_([a({attribute:"password-visible",type:Boolean})],v.prototype,"passwordVisible",2);_([a({attribute:"no-spin-buttons",type:Boolean})],v.prototype,"noSpinButtons",2);_([a({reflect:!0})],v.prototype,"form",2);_([a({type:Boolean,reflect:!0})],v.prototype,"required",2);_([a()],v.prototype,"pattern",2);_([a({type:Number})],v.prototype,"minlength",2);_([a({type:Number})],v.prototype,"maxlength",2);_([a()],v.prototype,"min",2);_([a()],v.prototype,"max",2);_([a()],v.prototype,"step",2);_([a()],v.prototype,"autocapitalize",2);_([a()],v.prototype,"autocorrect",2);_([a()],v.prototype,"autocomplete",2);_([a({type:Boolean})],v.prototype,"autofocus",2);_([a()],v.prototype,"enterkeyhint",2);_([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],v.prototype,"spellcheck",2);_([a()],v.prototype,"inputmode",2);_([A("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);_([A("step",{waitUntilFirstUpdate:!0})],v.prototype,"handleStepChange",1);_([A("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1);v.define("syn-input");const Ri=w`
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
`;var Ii=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,me=(e,t,o,i)=>{for(var s=i>1?void 0:i?Bi(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ii(t,o,s),s};class ee extends N{constructor(){super(...arguments),this.hasSlotController=new ot(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=Ri}static{this.dependencies={"syn-divider":te}}handleDisableOptions(){const{disabled:t}=this;this.defaultSlot.assignedElements().filter(o=>o.tagName.toLowerCase()==="syn-option").forEach(o=>{o.disabled=t})}handleDisabledChange(){this.handleDisableOptions()}render(){const{disabled:t}=this,o=this.hasSlotController.test("label"),i=this.label?!0:!!o;return Lt`
      <div
        class=${F({optgroup:!0,"optgroup--has-label":i,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
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
    `}}me([R("slot:not([name])")],ee.prototype,"defaultSlot",2);me([a({reflect:!0,type:Boolean})],ee.prototype,"disabled",2);me([a()],ee.prototype,"label",2);me([A("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);ee.define("syn-optgroup");const Mi=w`
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
`,Ni=w`
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
`;var Hi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,pt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ui(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Hi(t,o,s),s};class ct extends N{constructor(){super(...arguments),this.localize=new Et(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[H,Mi,Ni]}static{this.dependencies={"syn-icon":St}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let o="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(o+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o.trim()}render(){return x`
      <div
        part="base"
        class=${F({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}pt([R(".option__label")],ct.prototype,"defaultSlot",2);pt([B()],ct.prototype,"current",2);pt([B()],ct.prototype,"selected",2);pt([B()],ct.prototype,"hasHover",2);pt([a({reflect:!0})],ct.prototype,"value",2);pt([a({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);pt([A("disabled")],ct.prototype,"handleDisabledChange",1);pt([A("selected")],ct.prototype,"handleSelectedChange",1);pt([A("value")],ct.prototype,"handleValueChange",1);ct.define("syn-option");const qi=w`
	/* stylelint-disable */
  ${no}

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
`;var ji=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,xt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Wi(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ji(t,o,s),s};class ft extends N{constructor(){super(...arguments),this.hasSlotController=new ot(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium"}static{this.styles=[H,qi]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Lt`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${F({button:!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${g(this.value)}
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
    `}}xt([R(".button")],ft.prototype,"input",2);xt([R(".hidden-input")],ft.prototype,"hiddenInput",2);xt([B()],ft.prototype,"hasFocus",2);xt([a({type:Boolean,reflect:!0})],ft.prototype,"checked",2);xt([a()],ft.prototype,"value",2);xt([a({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);xt([a({reflect:!0})],ft.prototype,"size",2);xt([A("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);ft.define("syn-radio-button");const Ki=w`
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
`,Yi=w`
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

`;var Gi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,K=(e,t,o,i)=>{for(var s=i>1?void 0:i?Xi(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Gi(t,o,s),s};class j extends N{constructor(){super(...arguments),this.formControlController=new Ot(this),this.hasSlotController=new ot(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}static{this.styles=[H,Rt,Ki,It,Yi]}static{this.dependencies={"syn-button-group":Qt}}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?To:t?Ao:fe}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const o=t.target.closest("syn-radio, syn-radio-button"),i=this.getAllRadios(),s=this.value;o.disabled||(this.value=o.value,i.forEach(n=>n.checked=n===o),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(l=>!l.disabled),i=o.find(l=>l.checked)??o[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value;let r=o.indexOf(i)+s;r<0&&(r=o.length-1),r>o.length-1&&(r=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=o[r].value,o[r].checked=!0,this.hasButtonGroup?o[r].shadowRoot.querySelector("button").focus():(o[r].tabIndex=0,o[r].focus()),this.value!==n&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),i=t.find(s=>s.checked)||t[0];i&&i.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=t.some(o=>o.tagName.toLowerCase()==="syn-radio-button"),t.length>0&&!t.some(o=>o.checked))if(this.hasButtonGroup){const o=t[0].shadowRoot?.querySelector("button");o&&(o.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){const o=this.shadowRoot?.querySelector("syn-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(o=>o.checked=o.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,o=this.customValidityMessage!=="";return t||o?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!o,n=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
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

          ${this.hasButtonGroup?x`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${n}
                </syn-button-group>
              `:n}
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
    `}}K([R("slot:not([name])")],j.prototype,"defaultSlot",2);K([R(".radio-group__validation-input")],j.prototype,"validationInput",2);K([B()],j.prototype,"hasButtonGroup",2);K([B()],j.prototype,"errorMessage",2);K([B()],j.prototype,"defaultValue",2);K([a()],j.prototype,"label",2);K([a({attribute:"help-text"})],j.prototype,"helpText",2);K([a()],j.prototype,"name",2);K([a({reflect:!0})],j.prototype,"value",2);K([a({reflect:!0})],j.prototype,"size",2);K([a({reflect:!0})],j.prototype,"form",2);K([a({type:Boolean,reflect:!0})],j.prototype,"required",2);K([A("size",{waitUntilFirstUpdate:!0})],j.prototype,"handleSizeChange",1);K([A("value")],j.prototype,"handleValueChange",1);j.define("syn-radio-group");const Zi=w`
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
`,Qi=w`

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
`;var Ji=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,At=(e,t,o,i)=>{for(var s=i>1?void 0:i?ts(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ji(t,o,s),s};class wt extends N{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}static{this.styles=[H,Zi,Qi]}static{this.dependencies={"syn-icon":St}}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${F({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}}At([B()],wt.prototype,"checked",2);At([B()],wt.prototype,"hasFocus",2);At([a()],wt.prototype,"value",2);At([a({reflect:!0})],wt.prototype,"size",2);At([a({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);At([A("checked")],wt.prototype,"handleCheckedChange",1);At([A("disabled",{waitUntilFirstUpdate:!0})],wt.prototype,"handleDisabledChange",1);wt.define("syn-radio");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ze extends Ee{constructor(t){if(super(t),this.it=ae,t.type!==ut.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ae||t==null)return this._t=void 0,this.it=t;if(t===Tt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}ze.directiveName="unsafeHTML",ze.resultType=1;const es=Ae(ze),bt=Math.min,Z=Math.max,de=Math.round,ne=Math.floor,gt=e=>({x:e,y:e}),os={left:"right",right:"left",bottom:"top",top:"bottom"},is={start:"end",end:"start"};function $e(e,t,o){return Z(e,bt(t,o))}function Bt(e,t){return typeof e=="function"?e(t):e}function vt(e){return e.split("-")[0]}function Mt(e){return e.split("-")[1]}function yo(e){return e==="x"?"y":"x"}function Pe(e){return e==="y"?"height":"width"}function oe(e){return["top","bottom"].includes(vt(e))?"y":"x"}function Le(e){return yo(oe(e))}function ss(e,t,o){o===void 0&&(o=!1);const i=Mt(e),s=Le(e),n=Pe(s);let r=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(r=ue(r)),[r,ue(r)]}function ns(e){const t=ue(e);return[Se(e),t,Se(t)]}function Se(e){return e.replace(/start|end/g,t=>is[t])}function rs(e,t,o){const i=["left","right"],s=["right","left"],n=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?n:r;default:return[]}}function as(e,t,o,i){const s=Mt(e);let n=rs(vt(e),o==="start",i);return s&&(n=n.map(r=>r+"-"+s),t&&(n=n.concat(n.map(Se)))),n}function ue(e){return e.replace(/left|right|bottom|top/g,t=>os[t])}function ls(e){return{top:0,right:0,bottom:0,left:0,...e}}function bo(e){return typeof e!="number"?ls(e):{top:e,right:e,bottom:e,left:e}}function he(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ke(e,t,o){let{reference:i,floating:s}=e;const n=oe(t),r=Le(t),l=Pe(r),c=vt(t),d=n==="y",u=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,m=i[l]/2-s[l]/2;let p;switch(c){case"top":p={x:u,y:i.y-s.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-s.width,y:h};break;default:p={x:i.x,y:i.y}}switch(Mt(t)){case"start":p[r]-=m*(o&&d?-1:1);break;case"end":p[r]+=m*(o&&d?-1:1);break}return p}const cs=async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:r}=o,l=n.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:h}=Ke(d,i,c),m=i,p={},f=0;for(let y=0;y<l.length;y++){const{name:z,fn:b}=l[y],{x:k,y:O,data:M,reset:V}=await b({x:u,y:h,initialPlacement:i,placement:m,strategy:s,middlewareData:p,rects:d,platform:r,elements:{reference:e,floating:t}});u=k??u,h=O??h,p={...p,[z]:{...p[z],...M}},V&&f<=50&&(f++,typeof V=="object"&&(V.placement&&(m=V.placement),V.rects&&(d=V.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):V.rects),{x:u,y:h}=Ke(d,m,c)),y=-1)}return{x:u,y:h,placement:m,strategy:s,middlewareData:p}};async function Ve(e,t){var o;t===void 0&&(t={});const{x:i,y:s,platform:n,rects:r,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:m=!1,padding:p=0}=Bt(t,e),f=bo(p),z=l[m?h==="floating"?"reference":"floating":h],b=he(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(z)))==null||o?z:z.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),k=h==="floating"?{...r.floating,x:i,y:s}:r.reference,O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),M=await(n.isElement==null?void 0:n.isElement(O))?await(n.getScale==null?void 0:n.getScale(O))||{x:1,y:1}:{x:1,y:1},V=he(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:k,offsetParent:O,strategy:c}):k);return{top:(b.top-V.top+f.top)/M.y,bottom:(V.bottom-b.bottom+f.bottom)/M.y,left:(b.left-V.left+f.left)/M.x,right:(V.right-b.right+f.right)/M.x}}const ds=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:n,platform:r,elements:l,middlewareData:c}=t,{element:d,padding:u=0}=Bt(e,t)||{};if(d==null)return{};const h=bo(u),m={x:o,y:i},p=Le(s),f=Pe(p),y=await r.getDimensions(d),z=p==="y",b=z?"top":"left",k=z?"bottom":"right",O=z?"clientHeight":"clientWidth",M=n.reference[f]+n.reference[p]-m[p]-n.floating[f],V=m[p]-n.reference[p],I=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d));let G=I?I[O]:0;(!G||!await(r.isElement==null?void 0:r.isElement(I)))&&(G=l.floating[O]||n.floating[f]);const st=M/2-V/2,yt=G/2-y[f]/2-1,Nt=bt(h[b],yt),Ht=bt(h[k],yt),tt=Nt,Ut=G-y[f]-Ht,X=G/2-y[f]/2+st,nt=$e(tt,X,Ut),rt=!c.arrow&&Mt(s)!=null&&X!==nt&&n.reference[f]/2-(X<tt?Nt:Ht)-y[f]/2<0,dt=rt?X<tt?X-tt:X-Ut:0;return{[p]:m[p]+dt,data:{[p]:nt,centerOffset:X-nt-dt,...rt&&{alignmentOffset:dt}},reset:rt}}}),us=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:n,rects:r,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...z}=Bt(e,t);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const b=vt(s),k=vt(l)===l,O=await(c.isRTL==null?void 0:c.isRTL(d.floating)),M=m||(k||!y?[ue(l)]:ns(l));!m&&f!=="none"&&M.push(...as(l,y,f,O));const V=[l,...M],I=await Ve(t,z),G=[];let st=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&G.push(I[b]),h){const tt=ss(s,r,O);G.push(I[tt[0]],I[tt[1]])}if(st=[...st,{placement:s,overflows:G}],!G.every(tt=>tt<=0)){var yt,Nt;const tt=(((yt=n.flip)==null?void 0:yt.index)||0)+1,Ut=V[tt];if(Ut)return{data:{index:tt,overflows:st},reset:{placement:Ut}};let X=(Nt=st.filter(nt=>nt.overflows[0]<=0).sort((nt,rt)=>nt.overflows[1]-rt.overflows[1])[0])==null?void 0:Nt.placement;if(!X)switch(p){case"bestFit":{var Ht;const nt=(Ht=st.map(rt=>[rt.placement,rt.overflows.filter(dt=>dt>0).reduce((dt,Oo)=>dt+Oo,0)]).sort((rt,dt)=>rt[1]-dt[1])[0])==null?void 0:Ht[0];nt&&(X=nt);break}case"initialPlacement":X=l;break}if(s!==X)return{reset:{placement:X}}}return{}}}};async function hs(e,t){const{placement:o,platform:i,elements:s}=e,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),r=vt(o),l=Mt(o),c=oe(o)==="y",d=["left","top"].includes(r)?-1:1,u=n&&c?-1:1,h=Bt(t,e);let{mainAxis:m,crossAxis:p,alignmentAxis:f}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&typeof f=="number"&&(p=l==="end"?f*-1:f),c?{x:p*u,y:m*d}:{x:m*d,y:p*u}}const ps=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:n,placement:r,middlewareData:l}=t,c=await hs(t,e);return r===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:r}}}}},fs=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:n=!0,crossAxis:r=!1,limiter:l={fn:z=>{let{x:b,y:k}=z;return{x:b,y:k}}},...c}=Bt(e,t),d={x:o,y:i},u=await Ve(t,c),h=oe(vt(s)),m=yo(h);let p=d[m],f=d[h];if(n){const z=m==="y"?"top":"left",b=m==="y"?"bottom":"right",k=p+u[z],O=p-u[b];p=$e(k,p,O)}if(r){const z=h==="y"?"top":"left",b=h==="y"?"bottom":"right",k=f+u[z],O=f-u[b];f=$e(k,f,O)}const y=l.fn({...t,[m]:p,[h]:f});return{...y,data:{x:y.x-o,y:y.y-i}}}}},ms=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:s,elements:n}=t,{apply:r=()=>{},...l}=Bt(e,t),c=await Ve(t,l),d=vt(o),u=Mt(o),h=oe(o)==="y",{width:m,height:p}=i.floating;let f,y;d==="top"||d==="bottom"?(f=d,y=u===(await(s.isRTL==null?void 0:s.isRTL(n.floating))?"start":"end")?"left":"right"):(y=d,f=u==="end"?"top":"bottom");const z=p-c[f],b=m-c[y],k=!t.middlewareData.shift;let O=z,M=b;if(h){const I=m-c.left-c.right;M=u||k?bt(b,I):I}else{const I=p-c.top-c.bottom;O=u||k?bt(z,I):I}if(k&&!u){const I=Z(c.left,0),G=Z(c.right,0),st=Z(c.top,0),yt=Z(c.bottom,0);h?M=m-2*(I!==0||G!==0?I+G:Z(c.left,c.right)):O=p-2*(st!==0||yt!==0?st+yt:Z(c.top,c.bottom))}await r({...t,availableWidth:M,availableHeight:O});const V=await s.getDimensions(n.floating);return m!==V.width||p!==V.height?{reset:{rects:!0}}:{}}}};function _t(e){return go(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function mt(e){var t;return(t=(go(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function go(e){return e instanceof Node||e instanceof Q(e).Node}function ht(e){return e instanceof Element||e instanceof Q(e).Element}function at(e){return e instanceof HTMLElement||e instanceof Q(e).HTMLElement}function Ye(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function ie(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=et(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function ys(e){return["table","td","th"].includes(_t(e))}function Fe(e){const t=Re(),o=et(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function vo(e){let t=Ft(e);for(;at(t)&&!ye(t);){if(Fe(t))return t;t=Ft(t)}return null}function Re(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ye(e){return["html","body","#document"].includes(_t(e))}function et(e){return Q(e).getComputedStyle(e)}function be(e){return ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ft(e){if(_t(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ye(e)&&e.host||mt(e);return Ye(t)?t.host:t}function _o(e){const t=Ft(e);return ye(t)?e.ownerDocument?e.ownerDocument.body:e.body:at(t)&&ie(t)?t:_o(t)}function Zt(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=_o(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),r=Q(s);return n?t.concat(r,r.visualViewport||[],ie(s)?s:[],r.frameElement&&o?Zt(r.frameElement):[]):t.concat(s,Zt(s,[],o))}function xo(e){const t=et(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=at(e),n=s?e.offsetWidth:o,r=s?e.offsetHeight:i,l=de(o)!==n||de(i)!==r;return l&&(o=n,i=r),{width:o,height:i,$:l}}function Ie(e){return ht(e)?e:e.contextElement}function Vt(e){const t=Ie(e);if(!at(t))return gt(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:n}=xo(t);let r=(n?de(o.width):o.width)/i,l=(n?de(o.height):o.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const bs=gt(0);function wo(e){const t=Q(e);return!Re()||!t.visualViewport?bs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function gs(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==Q(e)?!1:t}function $t(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),n=Ie(e);let r=gt(1);t&&(i?ht(i)&&(r=Vt(i)):r=Vt(e));const l=gs(n,o,i)?wo(n):gt(0);let c=(s.left+l.x)/r.x,d=(s.top+l.y)/r.y,u=s.width/r.x,h=s.height/r.y;if(n){const m=Q(n),p=i&&ht(i)?Q(i):i;let f=m.frameElement;for(;f&&i&&p!==m;){const y=Vt(f),z=f.getBoundingClientRect(),b=et(f),k=z.left+(f.clientLeft+parseFloat(b.paddingLeft))*y.x,O=z.top+(f.clientTop+parseFloat(b.paddingTop))*y.y;c*=y.x,d*=y.y,u*=y.x,h*=y.y,c+=k,d+=O,f=Q(f).frameElement}}return he({width:u,height:h,x:c,y:d})}const vs=[":popover-open",":modal"];function ko(e){let t=!1,o=0,i=0;function s(n){try{t=t||e.matches(n)}catch{}}if(vs.forEach(n=>{s(n)}),t){const n=vo(e);if(n){const r=n.getBoundingClientRect();o=r.x,i=r.y}}return[t,o,i]}function _s(e){let{elements:t,rect:o,offsetParent:i,strategy:s}=e;const n=mt(i),[r]=t?ko(t.floating):[!1];if(i===n||r)return o;let l={scrollLeft:0,scrollTop:0},c=gt(1);const d=gt(0),u=at(i);if((u||!u&&s!=="fixed")&&((_t(i)!=="body"||ie(n))&&(l=be(i)),at(i))){const h=$t(i);c=Vt(i),d.x=h.x+i.clientLeft,d.y=h.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x,y:o.y*c.y-l.scrollTop*c.y+d.y}}function xs(e){return Array.from(e.getClientRects())}function Co(e){return $t(mt(e)).left+be(e).scrollLeft}function ws(e){const t=mt(e),o=be(e),i=e.ownerDocument.body,s=Z(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=Z(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-o.scrollLeft+Co(e);const l=-o.scrollTop;return et(i).direction==="rtl"&&(r+=Z(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:r,y:l}}function ks(e,t){const o=Q(e),i=mt(e),s=o.visualViewport;let n=i.clientWidth,r=i.clientHeight,l=0,c=0;if(s){n=s.width,r=s.height;const d=Re();(!d||d&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:r,x:l,y:c}}function Cs(e,t){const o=$t(e,!0,t==="fixed"),i=o.top+e.clientTop,s=o.left+e.clientLeft,n=at(e)?Vt(e):gt(1),r=e.clientWidth*n.x,l=e.clientHeight*n.y,c=s*n.x,d=i*n.y;return{width:r,height:l,x:c,y:d}}function Ge(e,t,o){let i;if(t==="viewport")i=ks(e,o);else if(t==="document")i=ws(mt(e));else if(ht(t))i=Cs(t,o);else{const s=wo(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return he(i)}function zo(e,t){const o=Ft(e);return o===t||!ht(o)||ye(o)?!1:et(o).position==="fixed"||zo(o,t)}function zs(e,t){const o=t.get(e);if(o)return o;let i=Zt(e,[],!1).filter(l=>ht(l)&&_t(l)!=="body"),s=null;const n=et(e).position==="fixed";let r=n?Ft(e):e;for(;ht(r)&&!ye(r);){const l=et(r),c=Fe(r);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ie(r)&&!c&&zo(e,r))?i=i.filter(u=>u!==r):s=l,r=Ft(r)}return t.set(e,i),i}function $s(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const r=[...o==="clippingAncestors"?zs(t,this._c):[].concat(o),i],l=r[0],c=r.reduce((d,u)=>{const h=Ge(t,u,s);return d.top=Z(h.top,d.top),d.right=bt(h.right,d.right),d.bottom=bt(h.bottom,d.bottom),d.left=Z(h.left,d.left),d},Ge(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ss(e){const{width:t,height:o}=xo(e);return{width:t,height:o}}function Os(e,t,o,i){const s=at(t),n=mt(t),r=o==="fixed",l=$t(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const d=gt(0);if(s||!s&&!r)if((_t(t)!=="body"||ie(n))&&(c=be(t)),s){const y=$t(t,!0,r,t);d.x=y.x+t.clientLeft,d.y=y.y+t.clientTop}else n&&(d.x=Co(n));let u=l.left+c.scrollLeft-d.x,h=l.top+c.scrollTop-d.y;const[m,p,f]=ko(i);return m&&(u+=p,h+=f,s&&(u+=t.clientLeft,h+=t.clientTop)),{x:u,y:h,width:l.width,height:l.height}}function Xe(e,t){return!at(e)||et(e).position==="fixed"?null:t?t(e):e.offsetParent}function $o(e,t){const o=Q(e);if(!at(e))return o;let i=Xe(e,t);for(;i&&ys(i)&&et(i).position==="static";)i=Xe(i,t);return i&&(_t(i)==="html"||_t(i)==="body"&&et(i).position==="static"&&!Fe(i))?o:i||vo(e)||o}const Es=async function(e){const t=this.getOffsetParent||$o,o=this.getDimensions;return{reference:Os(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await o(e.floating)}}};function As(e){return et(e).direction==="rtl"}const re={convertOffsetParentRelativeRectToViewportRelativeRect:_s,getDocumentElement:mt,getClippingRect:$s,getOffsetParent:$o,getElementRects:Es,getClientRects:xs,getDimensions:Ss,getScale:Vt,isElement:ht,isRTL:As};function Ts(e,t){let o=null,i;const s=mt(e);function n(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),n();const{left:d,top:u,width:h,height:m}=e.getBoundingClientRect();if(l||t(),!h||!m)return;const p=ne(u),f=ne(s.clientWidth-(d+h)),y=ne(s.clientHeight-(u+m)),z=ne(d),k={rootMargin:-p+"px "+-f+"px "+-y+"px "+-z+"px",threshold:Z(0,bt(1,c))||1};let O=!0;function M(V){const I=V[0].intersectionRatio;if(I!==c){if(!O)return r();I?r(!1,I):i=setTimeout(()=>{r(!1,1e-7)},100)}O=!1}try{o=new IntersectionObserver(M,{...k,root:s.ownerDocument})}catch{o=new IntersectionObserver(M,k)}o.observe(e)}return r(!0),n}function Ds(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,d=Ie(e),u=s||n?[...d?Zt(d):[],...Zt(t)]:[];u.forEach(b=>{s&&b.addEventListener("scroll",o,{passive:!0}),n&&b.addEventListener("resize",o)});const h=d&&l?Ts(d,o):null;let m=-1,p=null;r&&(p=new ResizeObserver(b=>{let[k]=b;k&&k.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var O;(O=p)==null||O.observe(t)})),o()}),d&&!c&&p.observe(d),p.observe(t));let f,y=c?$t(e):null;c&&z();function z(){const b=$t(e);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&o(),y=b,f=requestAnimationFrame(z)}return o(),()=>{var b;u.forEach(k=>{s&&k.removeEventListener("scroll",o),n&&k.removeEventListener("resize",o)}),h?.(),(b=p)==null||b.disconnect(),p=null,c&&cancelAnimationFrame(f)}}const Ps=fs,Ls=us,Ze=ms,Vs=ds,Fs=(e,t,o)=>{const i=new Map,s={platform:re,...o},n={...s.platform,_c:i};return cs(e,t,{...s,platform:n})};function Rs(e){return Is(e)}function we(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Is(e){for(let t=e;t;t=we(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=we(e);t;t=we(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}const Bs=w`
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
`;var Ms=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,P=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ns(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ms(t,o,s),s};function Hs(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}class T extends N{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),o=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,n=0,r=0,l=0,c=0,d=0,u=0,h=0;i?t.top<o.top?(s=t.left,n=t.bottom,r=t.right,l=t.bottom,c=o.left,d=o.top,u=o.right,h=o.top):(s=o.left,n=o.bottom,r=o.right,l=o.bottom,c=t.left,d=t.top,u=t.right,h=t.top):t.left<o.left?(s=t.right,n=t.top,r=o.left,l=o.top,c=t.right,d=t.bottom,u=o.left,h=o.bottom):(s=o.right,n=o.top,r=t.left,l=t.top,c=o.right,d=o.bottom,u=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}static{this.styles=[H,Bs]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Hs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Ds(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ps({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ze({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=n?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ls({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ps({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ze({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Vs({element:this.arrowEl,padding:this.arrowPadding}));const o=this.strategy==="absolute"?i=>re.getOffsetParent(i,Rs):re.getOffsetParent;Fs(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...re,getOffsetParent:o}}).then(({x:i,y:s,middlewareData:n,placement:r})=>{const l=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const d=n.arrow.x,u=n.arrow.y;let h="",m="",p="",f="";if(this.arrowPlacement==="start"){const y=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?y:"",f=l?"":y}else if(this.arrowPlacement==="end"){const y=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":y,f=l?y:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof d=="number"?`${d}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:m,bottom:p,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("syn-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${F({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${F({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}P([R(".popup")],T.prototype,"popup",2);P([R(".popup__arrow")],T.prototype,"arrowEl",2);P([a()],T.prototype,"anchor",2);P([a({type:Boolean,reflect:!0})],T.prototype,"active",2);P([a({reflect:!0})],T.prototype,"placement",2);P([a({reflect:!0})],T.prototype,"strategy",2);P([a({type:Number})],T.prototype,"distance",2);P([a({type:Number})],T.prototype,"skidding",2);P([a({type:Boolean})],T.prototype,"arrow",2);P([a({attribute:"arrow-placement"})],T.prototype,"arrowPlacement",2);P([a({attribute:"arrow-padding",type:Number})],T.prototype,"arrowPadding",2);P([a({type:Boolean})],T.prototype,"flip",2);P([a({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],T.prototype,"flipFallbackPlacements",2);P([a({attribute:"flip-fallback-strategy"})],T.prototype,"flipFallbackStrategy",2);P([a({type:Object})],T.prototype,"flipBoundary",2);P([a({attribute:"flip-padding",type:Number})],T.prototype,"flipPadding",2);P([a({type:Boolean})],T.prototype,"shift",2);P([a({type:Object})],T.prototype,"shiftBoundary",2);P([a({attribute:"shift-padding",type:Number})],T.prototype,"shiftPadding",2);P([a({attribute:"auto-size"})],T.prototype,"autoSize",2);P([a()],T.prototype,"sync",2);P([a({type:Object})],T.prototype,"autoSizeBoundary",2);P([a({attribute:"auto-size-padding",type:Number})],T.prototype,"autoSizePadding",2);P([a({attribute:"hover-bridge",type:Boolean})],T.prototype,"hoverBridge",2);const Us=w`
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

  
`,qs=w`
  .tag {
    background-color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-neutral-400);
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
`;var js=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,So=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ws(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&js(t,o,s),s};class ge extends N{constructor(){super(...arguments),this.localize=new Et(this),this.size="medium",this.removable=!1}static{this.styles=[H,Us,qs]}static{this.dependencies={"syn-icon-button":Je}}handleRemoveClick(){this.emit("syn-remove")}render(){return x`
      <span
        part="base"
        class=${F({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?x`
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
    `}}So([a({reflect:!0})],ge.prototype,"size",2);So([a({type:Boolean})],ge.prototype,"removable",2);const Ks=w`
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
`,Ys=w`
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
`;var Gs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,$=(e,t,o,i)=>{for(var s=i>1?void 0:i?Xs(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Gs(t,o,s),s};class C extends N{constructor(){super(...arguments),this.formControlController=new Ot(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new ot(this,"help-text","label"),this.localize=new Et(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>x`
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
        @syn-remove=${o=>this.handleTagRemove(o,t)}
      >
        ${t.getTextLabel()}
      </syn-tag>
    `,this.handleDocumentFocusIn=t=>{const o=t.composedPath();this&&!o.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const o=t.target,i=o.closest(".select__clear")!==null,s=o.closest("syn-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const n=this.getAllOptions(),r=n.indexOf(this.currentOption);let l=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(l=r+1,l>n.length-1&&(l=0)):t.key==="ArrowUp"?(l=r-1,l<0&&(l=n.length-1)):t.key==="Home"?l=0:t.key==="End"&&(l=n.length-1),this.setCurrentOption(n[l])}if(t.key.length===1||t.key==="Backspace"){const n=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of n)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const o=t.composedPath();this&&!o.includes(this)&&this.hide()}}static{this.styles=[H,Rt,Ks,It,Ys]}static{this.dependencies={"syn-icon":St,"syn-popup":T,"syn-tag":ge}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){const t=this.getRootNode();"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))}),t.addEventListener("focusin",this.handleDocumentFocusIn),t.addEventListener("keydown",this.handleDocumentKeyDown),t.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){const t=this.getRootNode();t.removeEventListener("focusin",this.handleDocumentFocusIn),t.removeEventListener("keydown",this.handleDocumentKeyDown),t.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="syn-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("syn-option"),s=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("syn-option")?(t.forEach(s=>i.push(s.value)),this.setSelectedOptions(t.filter(s=>o.includes(s.value)))):customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,o){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const o=this.getAllOptions(),i=Array.isArray(t)?t:[t];o.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,o){o===!0||o===!1?t.selected=o:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=this.selectedOptions[0]?.value??"",this.displayLabel=this.selectedOptions[0]?.getTextLabel()??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,o)=>{if(o<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,o);return x`<div @syn-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?es(i):i}
        </div>`}else if(o===this.maxOptionsVisible)return x`<syn-tag>+${this.selectedOptions.length-o}</syn-tag>`;return x``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>o.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await Pt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:o}=zt(this,"select.show",{dir:this.localize.dir()});await Ct(this.popup.popup,t,o),this.currentOption&&bi(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await Pt(this);const{keyframes:t,options:o}=zt(this,"select.hide",{dir:this.localize.dir()});await Ct(this.popup.popup,t,o),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ce(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ce(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!o,n=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return x`
      <div
        part="form-control"
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${F({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?x`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${n?x`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}$([R(".select")],C.prototype,"popup",2);$([R(".select__combobox")],C.prototype,"combobox",2);$([R(".select__display-input")],C.prototype,"displayInput",2);$([R(".select__value-input")],C.prototype,"valueInput",2);$([R(".select__listbox")],C.prototype,"listbox",2);$([B()],C.prototype,"hasFocus",2);$([B()],C.prototype,"displayLabel",2);$([B()],C.prototype,"currentOption",2);$([B()],C.prototype,"selectedOptions",2);$([a()],C.prototype,"name",2);$([a({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],C.prototype,"value",2);$([Jt()],C.prototype,"defaultValue",2);$([a({reflect:!0})],C.prototype,"size",2);$([a()],C.prototype,"placeholder",2);$([a({type:Boolean,reflect:!0})],C.prototype,"multiple",2);$([a({attribute:"max-options-visible",type:Number})],C.prototype,"maxOptionsVisible",2);$([a({type:Boolean,reflect:!0})],C.prototype,"disabled",2);$([a({type:Boolean})],C.prototype,"clearable",2);$([a({type:Boolean,reflect:!0})],C.prototype,"open",2);$([a({type:Boolean})],C.prototype,"hoist",2);$([a()],C.prototype,"label",2);$([a({reflect:!0})],C.prototype,"placement",2);$([a({attribute:"help-text"})],C.prototype,"helpText",2);$([a({reflect:!0})],C.prototype,"form",2);$([a({type:Boolean,reflect:!0})],C.prototype,"required",2);$([a()],C.prototype,"getTag",2);$([A("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);$([A("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);$([A("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1);J("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});J("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});C.define("syn-select");const Zs=w`
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
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Qs=w`
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
  `;var Js=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,Y=(e,t,o,i)=>{for(var s=i>1?void 0:i?tn(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Js(t,o,s),s};class W extends N{constructor(){super(...arguments),this.formControlController=new Ot(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasSlotController=new ot(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}static{this.styles=[H,Rt,Zs,It,Qs]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),o=this.helpText?!0:!!t;return x`
      <div
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":o})}
      >
        <label
          part="base"
          class=${F({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${g(this.value)}
            .checked=${Xt(this.checked)}
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
          aria-hidden=${o?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}Y([R('input[type="checkbox"]')],W.prototype,"input",2);Y([B()],W.prototype,"hasFocus",2);Y([a()],W.prototype,"title",2);Y([a()],W.prototype,"name",2);Y([a()],W.prototype,"value",2);Y([a({reflect:!0})],W.prototype,"size",2);Y([a({type:Boolean,reflect:!0})],W.prototype,"disabled",2);Y([a({type:Boolean,reflect:!0})],W.prototype,"checked",2);Y([Jt("checked")],W.prototype,"defaultChecked",2);Y([a({reflect:!0})],W.prototype,"form",2);Y([a({type:Boolean,reflect:!0})],W.prototype,"required",2);Y([a({attribute:"help-text"})],W.prototype,"helpText",2);Y([A("checked",{waitUntilFirstUpdate:!0})],W.prototype,"handleCheckedChange",1);Y([A("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);W.define("syn-switch");ge.define("syn-tag");const en=w`
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
`,on=w`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`;var sn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,E=(e,t,o,i)=>{for(var s=i>1?void 0:i?nn(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sn(t,o,s),s};class S extends N{constructor(){super(...arguments),this.formControlController=new Ot(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new ot(this,"help-text","label","prefix","suffix"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}static{this.styles=[H,Rt,en,It,on]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,o,i="none"){this.input.setSelectionRange(t,o,i)}setRangeText(t,o,i,s="preserve"){const n=o??this.input.selectionStart,r=i??this.input.selectionEnd;this.input.setRangeText(t,n,r,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!o;return x`
      <div
        part="form-control"
        class=${F({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r,"form-control--has-prefix":i,"form-control--has-suffix":s})}
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
            class=${F({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${g(this.name)}
              .value=${Xt(this.value)}
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
    `}}E([R(".textarea__control")],S.prototype,"input",2);E([B()],S.prototype,"hasFocus",2);E([a()],S.prototype,"title",2);E([a()],S.prototype,"name",2);E([a()],S.prototype,"value",2);E([a({reflect:!0})],S.prototype,"size",2);E([a()],S.prototype,"label",2);E([a({attribute:"help-text"})],S.prototype,"helpText",2);E([a()],S.prototype,"placeholder",2);E([a({type:Number})],S.prototype,"rows",2);E([a()],S.prototype,"resize",2);E([a({type:Boolean,reflect:!0})],S.prototype,"disabled",2);E([a({type:Boolean,reflect:!0})],S.prototype,"readonly",2);E([a({reflect:!0})],S.prototype,"form",2);E([a({type:Boolean,reflect:!0})],S.prototype,"required",2);E([a({type:Number})],S.prototype,"minlength",2);E([a({type:Number})],S.prototype,"maxlength",2);E([a()],S.prototype,"autocapitalize",2);E([a()],S.prototype,"autocorrect",2);E([a()],S.prototype,"autocomplete",2);E([a({type:Boolean})],S.prototype,"autofocus",2);E([a()],S.prototype,"enterkeyhint",2);E([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],S.prototype,"spellcheck",2);E([a()],S.prototype,"inputmode",2);E([Jt()],S.prototype,"defaultValue",2);E([A("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);E([A("rows",{waitUntilFirstUpdate:!0})],S.prototype,"handleRowsChange",1);E([A("value",{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);S.define("syn-textarea");function rn(e){const t=e||typeof window<"u"&&window;return!!(t&&(t.navigator.userAgent.match(/Chromatic/)||t.location.href.match(/chromatic=true/)))}const an=(e,...t)=>rn()?x`
      <style>
      :root {
        --syn-transition-x-fast: -1s !important;
        --syn-transition-fast: -1s !important;
        --syn-transition-medium: -1s !important;
        --syn-transition-slow: -1s !important;
        --syn-transition-x-slow: -1s !important;
      }
      syn-spinner,
      syn-button::part(spinner) {
        --speed: -1s !important;
      }
      </style>
      ${e(...t)}
    `:e(...t),pe="🌞 light",Oe="🌙 dark",ln=ti({defaultTheme:pe,parentSelector:"body",themes:{[pe]:"syn-theme-light",[Oe]:"syn-theme-dark"}}),cn={decorators:[an,ln],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{disableSnapshot:!0,modes:{[pe]:{theme:pe},[Oe]:{theme:Oe}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{stories:{inline:!1},toc:!0}}},bn=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"}));export{bn as a,Ho as f,cn as p};
