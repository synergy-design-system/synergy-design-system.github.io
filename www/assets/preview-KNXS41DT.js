import"./index-4g5l5LRQ.js";import{i as x,x as w,a as Ye,u as Re,w as At,T as ne,m as $o}from"./directive-helpers-po9zzQFH.js";import{c as U,a as N,S as Vt,b as I,w as A,n as a}from"./icon.component-FSdie-T0.js";import{s as Ie,n as Wt,a as M,o as g,b as F,c as Oe,t as dt,e as Ee,S as Xe}from"./icon-button-4s7tfE0n.js";import"./icon-_bpIRt2Z.js";const Nt=new WeakMap,Ut=new WeakMap,Ht=new WeakMap,ge=new WeakSet,oe=new WeakMap;class St{constructor(t,o){this.handleFormData=i=>{const s=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";!s&&!l&&typeof n=="string"&&n.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{i.formData.append(n,c.toString())}):i.formData.append(n,r.toString()))},this.handleFormSubmit=i=>{const s=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&Nt.get(this.form)?.forEach(r=>{this.setUserInteracted(r,!0)}),this.form&&!this.form.noValidate&&!s&&!n(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),oe.set(this.host,[])},this.handleInteraction=i=>{const s=oe.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const s=i.form;if(s){const r=i.getRootNode().getElementById(s);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["syn-input"],...o}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),oe.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),oe.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Nt.has(this.form)?Nt.get(this.form).add(this.host):Nt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ut.has(this.form)||(Ut.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ht.has(this.form)||(Ht.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Nt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ut.has(this.form)&&(this.form.reportValidity=Ut.get(this.form),Ut.delete(this.form)),Ht.has(this.form)&&(this.form.checkValidity=Ht.get(this.form),Ht.delete(this.form)),this.form=void 0))}setUserInteracted(t,o){o?ge.add(t):ge.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&i.setAttribute(s,o.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const o=this.host,i=!!ge.has(o),s=!!o.required;o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&i),o.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const o=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||o.preventDefault(),this.host.dispatchEvent(o)||t?.preventDefault()}}const he=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),zo=Object.freeze({...he,valid:!1,valueMissing:!0}),So=Object.freeze({...he,valid:!1,customError:!0});class _t{constructor(t,...o){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if(o.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}const xe=new Set,Oo=new MutationObserver(to),Tt=new Map;let Ze=document.documentElement.dir||"ltr",Qe=document.documentElement.lang||navigator.language,kt;Oo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Je(...e){e.map(t=>{const o=t.$code.toLowerCase();Tt.has(o)?Tt.set(o,Object.assign(Object.assign({},Tt.get(o)),t)):Tt.set(o,t),kt||(kt=t)}),to()}function to(){Ze=document.documentElement.dir||"ltr",Qe=document.documentElement.lang||navigator.language,[...xe.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Eo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){xe.add(this.host)}hostDisconnected(){xe.delete(this.host)}dir(){return`${this.host.dir||Ze}`.toLowerCase()}lang(){return`${this.host.lang||Qe}`.toLowerCase()}getTranslationData(t){var o,i;const s=new Intl.Locale(t.replace(/_/g,"-")),n=s?.language.toLowerCase(),r=(i=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=Tt.get(`${n}-${r}`),c=Tt.get(n);return{locale:s,language:n,region:r,primary:l,secondary:c}}exists(t,o){var i;const{primary:s,secondary:n}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||n&&n[t]||o.includeFallback&&kt&&kt[t])}term(t,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(s&&s[t])n=s[t];else if(kt&&kt[t])n=kt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...o):n}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}};const eo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Je(eo);class Ot extends Eo{static{Je(eo)}}const Ao=x`
	/* stylelint-disable */
  ${U}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--syn-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
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
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;class To extends N{constructor(){super(...arguments),this.localize=new Ot(this)}static{this.styles=Ao}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const Do=x`
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
`,oo=x`
	/* stylelint-disable */
  ${U}

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

  ${Do}
`;var Po=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,P=(e,t,o,i)=>{for(var s=i>1?void 0:i?Lo(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Po(t,o,s),s};class T extends N{constructor(){super(...arguments),this.formControlController=new St(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new _t(this,"[default]","prefix","suffix"),this.localize=new Ot(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}static{this.styles=oo}static{this.dependencies={"syn-icon":Vt,"syn-spinner":To}}get validity(){return this.isButton()?this.button.validity:he}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),o=t?Ie`a`:Ie`button`;return Wt`
      <${o}
        part="base"
        class=${M({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Wt` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?Wt`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${o}>
    `}}P([F(".button")],T.prototype,"button",2);P([I()],T.prototype,"hasFocus",2);P([I()],T.prototype,"invalid",2);P([a()],T.prototype,"title",2);P([a({reflect:!0})],T.prototype,"variant",2);P([a({reflect:!0})],T.prototype,"size",2);P([a({type:Boolean,reflect:!0})],T.prototype,"caret",2);P([a({type:Boolean,reflect:!0})],T.prototype,"disabled",2);P([a({type:Boolean,reflect:!0})],T.prototype,"loading",2);P([a()],T.prototype,"type",2);P([a()],T.prototype,"name",2);P([a()],T.prototype,"value",2);P([a()],T.prototype,"href",2);P([a()],T.prototype,"target",2);P([a()],T.prototype,"rel",2);P([a()],T.prototype,"download",2);P([a()],T.prototype,"form",2);P([a({attribute:"formaction"})],T.prototype,"formAction",2);P([a({attribute:"formenctype"})],T.prototype,"formEnctype",2);P([a({attribute:"formmethod"})],T.prototype,"formMethod",2);P([a({attribute:"formnovalidate",type:Boolean})],T.prototype,"formNoValidate",2);P([a({attribute:"formtarget"})],T.prototype,"formTarget",2);P([A("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);T.define("syn-button");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const i of o)i._$AO?.(t,!1),Kt(i,t);return!0},re=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},io=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Ro(t)}};function Vo(e){this._$AN!==void 0?(re(this),this._$AM=e,io(this)):this._$AM=e}function Fo(e,t=!1,o=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let n=o;n<i.length;n++)Kt(i[n],!1),re(i[n]);else i!=null&&(Kt(i,!1),re(i));else Kt(this,e)}const Ro=e=>{e.type==dt.CHILD&&(e._$AP??=Fo,e._$AQ??=Vo)};class Io extends Oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,i){super._$AT(t,o,i),io(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(Kt(this,t),re(this))}setValue(t){if(Ye(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{useParameter:Bo,addons:Mo,useEffect:No,useMemo:an}=__STORYBOOK_MODULE_PREVIEW_API__;var Uo=Object.defineProperty,Ho=(e,t)=>{for(var o in t)Uo(e,o,{get:t[o],enumerable:!0})},qo={};Ho(qo,{initializeThemeState:()=>ao,pluckThemeFromContext:()=>no,useThemeParameters:()=>ro});var so="themes",jo=`storybook/${so}}`,Wo="theme",Ko={},Go={REGISTER_THEMES:`${jo}/REGISTER_THEMES`};function no({globals:e}){return e[Wo]||""}function ro(){return Bo(so,Ko)}function ao(e,t){Mo.getChannel().emit(Go.REGISTER_THEMES,{defaultTheme:t,themes:e})}var Yo="html",Be=e=>e.split(" ").filter(Boolean),Xo=({themes:e,defaultTheme:t,parentSelector:o=Yo})=>(ao(Object.keys(e),t),(i,s)=>{let{themeOverride:n}=ro(),r=no(s);return No(()=>{let l=n||r||t,c=document.querySelector(o);if(!c)return;Object.entries(e).filter(([u])=>u!==l).forEach(([u,p])=>{let m=Be(p);m.length>0&&c.classList.remove(...m)});let d=Be(e[l]);d.length>0&&c.classList.add(...d)},[n,r,o]),i()});const Zo=x`
	/* stylelint-disable */
  ${U}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Qo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,Ae=(e,t,o,i)=>{for(var s=i>1?void 0:i?Jo(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Qo(t,o,s),s};class Xt extends N{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=Zo}handleFocus(t){qt(t.target)?.classList.add("syn-button-group__button--focus")}handleBlur(t){qt(t.target)?.classList.remove("syn-button-group__button--focus")}handleMouseOver(t){qt(t.target)?.classList.add("syn-button-group__button--hover")}handleMouseOut(t){qt(t.target)?.classList.remove("syn-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(o=>{const i=t.indexOf(o),s=qt(o);s&&(s.classList.add("syn-button-group__button"),s.classList.toggle("syn-button-group__button--first",i===0),s.classList.toggle("syn-button-group__button--inner",i>0&&i<t.length-1),s.classList.toggle("syn-button-group__button--last",i===t.length-1),s.classList.toggle("syn-button-group__button--radio",s.tagName.toLowerCase()==="syn-radio-button"))})}render(){return w`
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
    `}}Ae([F("slot")],Xt.prototype,"defaultSlot",2);Ae([I()],Xt.prototype,"disableRole",2);Ae([a()],Xt.prototype,"label",2);function qt(e){const t="syn-button, syn-radio-button";return e.closest(t)??e.querySelector(t)}Xt.define("syn-button-group");const Zt=(e="value")=>(t,o)=>{const i=t.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,r,l){const c=i.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(n===d){const u=c.converter||Re,m=(typeof u=="function"?u:u?.fromAttribute??Re.fromAttribute)(l,c.type);this[e]!==m&&(this[o]=m)}s.call(this,n,r,l)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=Ee(class extends Oe{constructor(e){if(super(e),e.type!==dt.PROPERTY&&e.type!==dt.ATTRIBUTE&&e.type!==dt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ye(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===At||t===ne)return t;const o=e.element,i=e.name;if(e.type===dt.PROPERTY){if(t===o[i])return At}else if(e.type===dt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return At}else if(e.type===dt.ATTRIBUTE&&o.getAttribute(i)===t+"")return At;return $o(e),t}}),ti=x`
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
`,ei=x`
	/* stylelint-disable */
  ${U}

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

  ${ti}
`;var oi=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,j=(e,t,o,i)=>{for(var s=i>1?void 0:i?ii(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oi(t,o,s),s};class H extends N{constructor(){super(...arguments),this.formControlController=new St(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}static{this.styles=ei}static{this.dependencies={"syn-icon":Vt}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return w`
      <label
        part="base"
        class=${M({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${g(this.value)}
          .indeterminate=${Gt(this.indeterminate)}
          .checked=${Gt(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
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
          ${this.checked?w`
                <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
              `:""}
          ${!this.checked&&this.indeterminate?w`
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
    `}}j([F('input[type="checkbox"]')],H.prototype,"input",2);j([I()],H.prototype,"hasFocus",2);j([a()],H.prototype,"title",2);j([a()],H.prototype,"name",2);j([a()],H.prototype,"value",2);j([a({reflect:!0})],H.prototype,"size",2);j([a({type:Boolean,reflect:!0})],H.prototype,"disabled",2);j([a({type:Boolean,reflect:!0})],H.prototype,"checked",2);j([a({type:Boolean,reflect:!0})],H.prototype,"indeterminate",2);j([Zt("checked")],H.prototype,"defaultChecked",2);j([a({reflect:!0})],H.prototype,"form",2);j([a({type:Boolean,reflect:!0})],H.prototype,"required",2);j([A("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);j([A(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],H.prototype,"handleStateChange",1);H.define("syn-checkbox");const si=x`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`,ni=x`
	/* stylelint-disable */
  ${U}

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

  ${si}
`;var ri=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,lo=(e,t,o,i)=>{for(var s=i>1?void 0:i?ai(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ri(t,o,s),s};class Qt extends N{constructor(){super(...arguments),this.vertical=!1}static{this.styles=ni}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}lo([a({type:Boolean,reflect:!0})],Qt.prototype,"vertical",2);lo([A("vertical")],Qt.prototype,"handleVerticalChange",1);Qt.define("syn-divider");function Ct(e,t,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,{...o,duration:li()?0:o.duration});s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function li(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Dt(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{const i=requestAnimationFrame(o);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}const co=new Map,ci=new WeakMap;function di(e){return e??{keyframes:[],options:{duration:0}}}function Me(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Q(e,t){co.set(e,di(t))}function $t(e,t,o){const i=ci.get(e);if(i?.[t])return Me(i[t],o.dir);const s=co.get(t);return s?Me(s,o.dir):{keyframes:[],options:{duration:0}}}function ui(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}const ke=new Set;function hi(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ve(e){if(ke.add(e),!document.body.classList.contains("syn-scroll-lock")){const t=hi();document.body.classList.add("syn-scroll-lock"),document.body.style.setProperty("--syn-scroll-lock-size",`${t}px`)}}function _e(e){ke.delete(e),ke.size===0&&(document.body.classList.remove("syn-scroll-lock"),document.body.style.removeProperty("--syn-scroll-lock-size"))}function pi(e,t,o="vertical",i="smooth"){const s=ui(e,t),n=s.top+t.scrollTop,r=s.left+t.scrollLeft,l=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,d=t.scrollTop,u=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(r<l?t.scrollTo({left:r,behavior:i}):r+e.clientWidth>c&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(n<d?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>u&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}function Ne(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ae(e,t){return new Promise(o=>{function i(s){s.target===e&&(e.removeEventListener(t,i),o())}e.addEventListener(t,i)})}function*uo(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*uo(e.shadowRoot.activeElement)))}function fi(){return[...uo()].pop()}function mi(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function yi(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!mi(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Ue(e){const t=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&yi(i)&&t.push(i);const s=n=>n.getRootNode({composed:!0})?.host!==e;i instanceof HTMLSlotElement&&s(i)&&i.assignedElements({flatten:!0}).forEach(n=>{o(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}[...i.children].forEach(s=>o(s))}return o(e),t.sort((i,s)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}let jt=[];class bi{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=o=>{if(o.key!=="Tab"||this.isExternalActivated||!this.isActive())return;o.shiftKey?this.tabDirection="backward":this.tabDirection="forward",o.preventDefault();const i=Ue(this.element),s=fi();let n=i.findIndex(l=>l===s);if(n===-1){this.currentFocus=i[0],this.currentFocus?.focus({preventScroll:!0});return}const r=this.tabDirection==="forward"?1:-1;n+r>=i.length?n=0:n+r<0?n=i.length-1:n+=r,this.currentFocus=i[n],this.currentFocus?.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){jt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){jt=jt.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return jt[jt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Ue(this.element);if(!this.element.matches(":focus-within")){const o=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?o:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!0}))}}}}const gi=x`
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
`,vi=x`
	/* stylelint-disable */
  ${U}

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

  ${gi}
`;var _i=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,at=(e,t,o,i)=>{for(var s=i>1?void 0:i?wi(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&_i(t,o,s),s};class ot extends N{constructor(){super(...arguments),this.hasSlotController=new _t(this,"footer"),this.localize=new Ot(this),this.modal=new bi(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=vi}static{this.dependencies={"syn-icon-button":Xe}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ve(this)))}disconnectedCallback(){super.disconnectedCallback(),_e(this)}requestClose(t){if(this.emit("syn-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=$t(this,"drawer.denyClose",{dir:this.localize.dir()});Ct(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("syn-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ve(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Dt(this.drawer),Dt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("syn-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const o=$t(this,`drawer.show${Ne(this.placement)}`,{dir:this.localize.dir()}),i=$t(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ct(this.panel,o.keyframes,o.options),Ct(this.overlay,i.keyframes,i.options)]),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),_e(this)),await Promise.all([Dt(this.drawer),Dt(this.overlay)]);const t=$t(this,`drawer.hide${Ne(this.placement)}`,{dir:this.localize.dir()}),o=$t(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ct(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),Ct(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("syn-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ve(this)),this.open&&this.contained&&(this.modal.deactivate(),_e(this))}async show(){if(!this.open)return this.open=!0,ae(this,"syn-after-show")}async hide(){if(this.open)return this.open=!1,ae(this,"syn-after-hide")}render(){return w`
      <div
        part="base"
        class=${M({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
          ${this.noHeader?"":w`
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
    `}}at([F(".drawer")],ot.prototype,"drawer",2);at([F(".drawer__panel")],ot.prototype,"panel",2);at([F(".drawer__overlay")],ot.prototype,"overlay",2);at([a({type:Boolean,reflect:!0})],ot.prototype,"open",2);at([a({reflect:!0})],ot.prototype,"label",2);at([a({reflect:!0})],ot.prototype,"placement",2);at([a({type:Boolean,reflect:!0})],ot.prototype,"contained",2);at([a({attribute:"no-header",type:Boolean,reflect:!0})],ot.prototype,"noHeader",2);at([A("open",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpenChange",1);at([A("contained",{waitUntilFirstUpdate:!0})],ot.prototype,"handleNoModalChange",1);Q("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Q("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Q("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Q("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Q("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Q("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Q("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ot.define("syn-drawer");class xi extends Io{constructor(t){if(super(t),this.handlePointerDown=o=>{o.button!==0||this.host.disabled||this.spinOnLongPressCallback(o)},this.handlePointerUp=o=>{o?.preventDefault(),o?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener("pointerup",this.handlePointerUp)},t.type!==dt.ELEMENT||!(t.element instanceof HTMLButtonElement))throw new Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(t){return ne}update(t,[o]){return this.callbacks===void 0&&this.host===void 0&&(this.host=t.element,this.callbacks={...o},this.host.addEventListener("pointerdown",this.handlePointerDown)),At}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener("pointerdown",this.handlePointerDown),document.removeEventListener("pointerup",this.handlePointerUp)}spinOnLongPressCallback(t){t.preventDefault(),t.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener("pointerup",this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(o=>{o.forEach(i=>{i.attributeName==="disabled"&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}}const He=Ee(xi),ki=x`

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
`,Ci=x` 

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

`,pe=x`
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

  ${Ci}
`,$i=x`
	/* stylelint-disable */
  ${U}
  ${pe}

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

  ${ki}
`;var zi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,_=(e,t,o,i)=>{for(var s=i>1?void 0:i?Si(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&zi(t,o,s),s};class v extends N{constructor(){super(...arguments),this.formControlController=new St(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new _t(this,"help-text","label","prefix","suffix"),this.localize=new Ot(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}static{this.styles=$i}static{this.dependencies={"syn-icon":Vt,"syn-divider":Qt}}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null||this.disabled)return!1;const t=typeof this.min=="string"?parseFloat(this.min):this.min;return this.valueAsNumber<=t}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;const t=typeof this.max=="string"?parseFloat(this.max):this.max;return this.valueAsNumber>=t}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,o,i="none"){this.input.setSelectionRange(t,o,i)}setRangeText(t,o,i,s){this.input.setRangeText(t,o,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!o,l=this.clearable&&!this.disabled&&!this.readonly,c=l&&(typeof this.value=="number"||this.value.length>0);return w`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r,"form-control--has-prefix":i,"form-control--has-suffix":s})}
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
            class=${M({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              .value=${Gt(this.value)}
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

            ${l?w`
                  <button
                    part="clear-button"
                    class=${M({input__clear:!0,"input__clear--visible":c})}
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
            ${this.passwordToggle&&!this.disabled?w`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?w`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:w`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type==="number"&&!this.noSpinButtons?w`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${He({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${He({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
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
    `}}_([F(".input__control")],v.prototype,"input",2);_([I()],v.prototype,"hasFocus",2);_([a()],v.prototype,"title",2);_([a({reflect:!0})],v.prototype,"type",2);_([a()],v.prototype,"name",2);_([a()],v.prototype,"value",2);_([Zt()],v.prototype,"defaultValue",2);_([a({reflect:!0})],v.prototype,"size",2);_([a()],v.prototype,"label",2);_([a({attribute:"help-text"})],v.prototype,"helpText",2);_([a({type:Boolean})],v.prototype,"clearable",2);_([a({type:Boolean,reflect:!0})],v.prototype,"disabled",2);_([a()],v.prototype,"placeholder",2);_([a({type:Boolean,reflect:!0})],v.prototype,"readonly",2);_([a({attribute:"password-toggle",type:Boolean})],v.prototype,"passwordToggle",2);_([a({attribute:"password-visible",type:Boolean})],v.prototype,"passwordVisible",2);_([a({attribute:"no-spin-buttons",type:Boolean})],v.prototype,"noSpinButtons",2);_([a({reflect:!0})],v.prototype,"form",2);_([a({type:Boolean,reflect:!0})],v.prototype,"required",2);_([a()],v.prototype,"pattern",2);_([a({type:Number})],v.prototype,"minlength",2);_([a({type:Number})],v.prototype,"maxlength",2);_([a()],v.prototype,"min",2);_([a()],v.prototype,"max",2);_([a()],v.prototype,"step",2);_([a()],v.prototype,"autocapitalize",2);_([a()],v.prototype,"autocorrect",2);_([a()],v.prototype,"autocomplete",2);_([a({type:Boolean})],v.prototype,"autofocus",2);_([a()],v.prototype,"enterkeyhint",2);_([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],v.prototype,"spellcheck",2);_([a()],v.prototype,"inputmode",2);_([A("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);_([A("step",{waitUntilFirstUpdate:!0})],v.prototype,"handleStepChange",1);_([A("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1);v.define("syn-input");const Oi=x`
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
`;var Ei=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,fe=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ai(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ei(t,o,s),s};class Jt extends N{constructor(){super(...arguments),this.hasSlotController=new _t(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=Oi}static{this.dependencies={"syn-divider":Qt}}handleDisableOptions(){const{disabled:t}=this;this.defaultSlot.assignedElements().filter(o=>o.tagName.toLowerCase()==="syn-option").forEach(o=>{o.disabled=t})}handleDisabledChange(){this.handleDisableOptions()}render(){const{disabled:t}=this,o=this.hasSlotController.test("label"),i=this.label?!0:!!o;return Wt`
      <div
        class=${M({optgroup:!0,"optgroup--has-label":i,"optgroup--has-prefix":this.hasSlotController.test("prefix"),"optgroup--has-suffix":this.hasSlotController.test("suffix"),"optgroup--is-disabled":this.disabled})}
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
    `}}fe([F("slot:not([name])")],Jt.prototype,"defaultSlot",2);fe([a({reflect:!0,type:Boolean})],Jt.prototype,"disabled",2);fe([a()],Jt.prototype,"label",2);fe([A("disabled",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleDisabledChange",1);Jt.define("syn-optgroup");const Ti=x`
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
`,Di=x`
	/* stylelint-disable */
  ${U}

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

  ${Ti}
`;var Pi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,ht=(e,t,o,i)=>{for(var s=i>1?void 0:i?Li(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Pi(t,o,s),s};class lt extends N{constructor(){super(...arguments),this.localize=new Ot(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=Di}static{this.dependencies={"syn-icon":Vt}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){return(this.textContent??"").trim()}render(){return w`
      <div
        part="base"
        class=${M({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}ht([F(".option__label")],lt.prototype,"defaultSlot",2);ht([I()],lt.prototype,"current",2);ht([I()],lt.prototype,"selected",2);ht([I()],lt.prototype,"hasHover",2);ht([a({reflect:!0})],lt.prototype,"value",2);ht([a({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);ht([A("disabled")],lt.prototype,"handleDisabledChange",1);ht([A("selected")],lt.prototype,"handleSelectedChange",1);ht([A("value")],lt.prototype,"handleValueChange",1);lt.define("syn-option");const Vi=x`
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
`;var Fi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,wt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ri(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Fi(t,o,s),s};class pt extends N{constructor(){super(...arguments),this.hasSlotController=new _t(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium"}static{this.styles=Vi}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Wt`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${M({button:!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}}wt([F(".button")],pt.prototype,"input",2);wt([F(".hidden-input")],pt.prototype,"hiddenInput",2);wt([I()],pt.prototype,"hasFocus",2);wt([a({type:Boolean,reflect:!0})],pt.prototype,"checked",2);wt([a()],pt.prototype,"value",2);wt([a({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);wt([a({reflect:!0})],pt.prototype,"size",2);wt([A("disabled",{waitUntilFirstUpdate:!0})],pt.prototype,"handleDisabledChange",1);pt.define("syn-radio-button");const Ii=x`
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

`,Bi=x`
	/* stylelint-disable */
  ${U}
  ${pe}

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

  ${Ii}
`;var Mi=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,W=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ni(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Mi(t,o,s),s};class q extends N{constructor(){super(...arguments),this.formControlController=new St(this),this.hasSlotController=new _t(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}static{this.styles=Bi}static{this.dependencies={"syn-button-group":Xt}}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?So:t?zo:he}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const o=t.target.closest("syn-radio, syn-radio-button"),i=this.getAllRadios(),s=this.value;o.disabled||(this.value=o.value,i.forEach(n=>n.checked=n===o),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(l=>!l.disabled),i=o.find(l=>l.checked)??o[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value;let r=o.indexOf(i)+s;r<0&&(r=o.length-1),r>o.length-1&&(r=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=o[r].value,o[r].checked=!0,this.hasButtonGroup?o[r].shadowRoot.querySelector("button").focus():(o[r].tabIndex=0,o[r].focus()),this.value!==n&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),i=t.find(s=>s.checked)||t[0];i&&i.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=t.some(o=>o.tagName.toLowerCase()==="syn-radio-button"),!t.some(o=>o.checked))if(this.hasButtonGroup){const o=t[0].shadowRoot?.querySelector("button");o&&(o.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){const o=this.shadowRoot?.querySelector("syn-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(o=>o.checked=o.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,o=this.customValidityMessage!=="";return t||o?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!o,n=w`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return w`
      <fieldset
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
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

          ${this.hasButtonGroup?w`
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
    `}}W([F("slot:not([name])")],q.prototype,"defaultSlot",2);W([F(".radio-group__validation-input")],q.prototype,"validationInput",2);W([I()],q.prototype,"hasButtonGroup",2);W([I()],q.prototype,"errorMessage",2);W([I()],q.prototype,"defaultValue",2);W([a()],q.prototype,"label",2);W([a({attribute:"help-text"})],q.prototype,"helpText",2);W([a()],q.prototype,"name",2);W([a({reflect:!0})],q.prototype,"value",2);W([a({reflect:!0})],q.prototype,"size",2);W([a({reflect:!0})],q.prototype,"form",2);W([a({type:Boolean,reflect:!0})],q.prototype,"required",2);W([A("size",{waitUntilFirstUpdate:!0})],q.prototype,"handleSizeChange",1);W([A("value")],q.prototype,"handleValueChange",1);q.define("syn-radio-group");const Ui=x`

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
`,Hi=x`
	/* stylelint-disable */
  ${U}

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

  ${Ui}
`;var qi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Et=(e,t,o,i)=>{for(var s=i>1?void 0:i?ji(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&qi(t,o,s),s};class xt extends N{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}static{this.styles=Hi}static{this.dependencies={"syn-icon":Vt}}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return w`
      <span
        part="base"
        class=${M({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?w` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}}Et([I()],xt.prototype,"checked",2);Et([I()],xt.prototype,"hasFocus",2);Et([a()],xt.prototype,"value",2);Et([a({reflect:!0})],xt.prototype,"size",2);Et([a({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);Et([A("checked")],xt.prototype,"handleCheckedChange",1);Et([A("disabled",{waitUntilFirstUpdate:!0})],xt.prototype,"handleDisabledChange",1);xt.define("syn-radio");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ce extends Oe{constructor(t){if(super(t),this.it=ne,t.type!==dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ne||t==null)return this._t=void 0,this.it=t;if(t===At)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}Ce.directiveName="unsafeHTML",Ce.resultType=1;const Wi=Ee(Ce),yt=Math.min,X=Math.max,le=Math.round,ie=Math.floor,bt=e=>({x:e,y:e}),Ki={left:"right",right:"left",bottom:"top",top:"bottom"},Gi={start:"end",end:"start"};function $e(e,t,o){return X(e,yt(t,o))}function Ft(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function Rt(e){return e.split("-")[1]}function ho(e){return e==="x"?"y":"x"}function Te(e){return e==="y"?"height":"width"}function te(e){return["top","bottom"].includes(gt(e))?"y":"x"}function De(e){return ho(te(e))}function Yi(e,t,o){o===void 0&&(o=!1);const i=Rt(e),s=De(e),n=Te(s);let r=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(r=ce(r)),[r,ce(r)]}function Xi(e){const t=ce(e);return[ze(e),t,ze(t)]}function ze(e){return e.replace(/start|end/g,t=>Gi[t])}function Zi(e,t,o){const i=["left","right"],s=["right","left"],n=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?n:r;default:return[]}}function Qi(e,t,o,i){const s=Rt(e);let n=Zi(gt(e),o==="start",i);return s&&(n=n.map(r=>r+"-"+s),t&&(n=n.concat(n.map(ze)))),n}function ce(e){return e.replace(/left|right|bottom|top/g,t=>Ki[t])}function Ji(e){return{top:0,right:0,bottom:0,left:0,...e}}function po(e){return typeof e!="number"?Ji(e):{top:e,right:e,bottom:e,left:e}}function de(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function qe(e,t,o){let{reference:i,floating:s}=e;const n=te(t),r=De(t),l=Te(r),c=gt(t),d=n==="y",u=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,m=i[l]/2-s[l]/2;let h;switch(c){case"top":h={x:u,y:i.y-s.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:p};break;case"left":h={x:i.x-s.width,y:p};break;default:h={x:i.x,y:i.y}}switch(Rt(t)){case"start":h[r]-=m*(o&&d?-1:1);break;case"end":h[r]+=m*(o&&d?-1:1);break}return h}const ts=async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:r}=o,l=n.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:p}=qe(d,i,c),m=i,h={},f=0;for(let y=0;y<l.length;y++){const{name:$,fn:b}=l[y],{x:k,y:O,data:B,reset:V}=await b({x:u,y:p,initialPlacement:i,placement:m,strategy:s,middlewareData:h,rects:d,platform:r,elements:{reference:e,floating:t}});u=k??u,p=O??p,h={...h,[$]:{...h[$],...B}},V&&f<=50&&(f++,typeof V=="object"&&(V.placement&&(m=V.placement),V.rects&&(d=V.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):V.rects),{x:u,y:p}=qe(d,m,c)),y=-1)}return{x:u,y:p,placement:m,strategy:s,middlewareData:h}};async function Pe(e,t){var o;t===void 0&&(t={});const{x:i,y:s,platform:n,rects:r,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:m=!1,padding:h=0}=Ft(t,e),f=po(h),$=l[m?p==="floating"?"reference":"floating":p],b=de(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement($)))==null||o?$:$.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),k=p==="floating"?{...r.floating,x:i,y:s}:r.reference,O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(O))?await(n.getScale==null?void 0:n.getScale(O))||{x:1,y:1}:{x:1,y:1},V=de(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:k,offsetParent:O,strategy:c}):k);return{top:(b.top-V.top+f.top)/B.y,bottom:(V.bottom-b.bottom+f.bottom)/B.y,left:(b.left-V.left+f.left)/B.x,right:(V.right-b.right+f.right)/B.x}}const es=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:n,platform:r,elements:l,middlewareData:c}=t,{element:d,padding:u=0}=Ft(e,t)||{};if(d==null)return{};const p=po(u),m={x:o,y:i},h=De(s),f=Te(h),y=await r.getDimensions(d),$=h==="y",b=$?"top":"left",k=$?"bottom":"right",O=$?"clientHeight":"clientWidth",B=n.reference[f]+n.reference[h]-m[h]-n.floating[f],V=m[h]-n.reference[h],R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d));let G=R?R[O]:0;(!G||!await(r.isElement==null?void 0:r.isElement(R)))&&(G=l.floating[O]||n.floating[f]);const it=B/2-V/2,mt=G/2-y[f]/2-1,It=yt(p[b],mt),Bt=yt(p[k],mt),tt=It,Mt=G-y[f]-Bt,Y=G/2-y[f]/2+it,st=$e(tt,Y,Mt),nt=!c.arrow&&Rt(s)!=null&&Y!==st&&n.reference[f]/2-(Y<tt?It:Bt)-y[f]/2<0,ct=nt?Y<tt?Y-tt:Y-Mt:0;return{[h]:m[h]+ct,data:{[h]:st,centerOffset:Y-st-ct,...nt&&{alignmentOffset:ct}},reset:nt}}}),os=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:n,rects:r,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...$}=Ft(e,t);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const b=gt(s),k=gt(l)===l,O=await(c.isRTL==null?void 0:c.isRTL(d.floating)),B=m||(k||!y?[ce(l)]:Xi(l));!m&&f!=="none"&&B.push(...Qi(l,y,f,O));const V=[l,...B],R=await Pe(t,$),G=[];let it=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&G.push(R[b]),p){const tt=Yi(s,r,O);G.push(R[tt[0]],R[tt[1]])}if(it=[...it,{placement:s,overflows:G}],!G.every(tt=>tt<=0)){var mt,It;const tt=(((mt=n.flip)==null?void 0:mt.index)||0)+1,Mt=V[tt];if(Mt)return{data:{index:tt,overflows:it},reset:{placement:Mt}};let Y=(It=it.filter(st=>st.overflows[0]<=0).sort((st,nt)=>st.overflows[1]-nt.overflows[1])[0])==null?void 0:It.placement;if(!Y)switch(h){case"bestFit":{var Bt;const st=(Bt=it.map(nt=>[nt.placement,nt.overflows.filter(ct=>ct>0).reduce((ct,Co)=>ct+Co,0)]).sort((nt,ct)=>nt[1]-ct[1])[0])==null?void 0:Bt[0];st&&(Y=st);break}case"initialPlacement":Y=l;break}if(s!==Y)return{reset:{placement:Y}}}return{}}}};async function is(e,t){const{placement:o,platform:i,elements:s}=e,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),r=gt(o),l=Rt(o),c=te(o)==="y",d=["left","top"].includes(r)?-1:1,u=n&&c?-1:1,p=Ft(t,e);let{mainAxis:m,crossAxis:h,alignmentAxis:f}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof f=="number"&&(h=l==="end"?f*-1:f),c?{x:h*u,y:m*d}:{x:m*d,y:h*u}}const ss=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:n,placement:r,middlewareData:l}=t,c=await is(t,e);return r===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:r}}}}},ns=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:n=!0,crossAxis:r=!1,limiter:l={fn:$=>{let{x:b,y:k}=$;return{x:b,y:k}}},...c}=Ft(e,t),d={x:o,y:i},u=await Pe(t,c),p=te(gt(s)),m=ho(p);let h=d[m],f=d[p];if(n){const $=m==="y"?"top":"left",b=m==="y"?"bottom":"right",k=h+u[$],O=h-u[b];h=$e(k,h,O)}if(r){const $=p==="y"?"top":"left",b=p==="y"?"bottom":"right",k=f+u[$],O=f-u[b];f=$e(k,f,O)}const y=l.fn({...t,[m]:h,[p]:f});return{...y,data:{x:y.x-o,y:y.y-i}}}}},rs=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:s,elements:n}=t,{apply:r=()=>{},...l}=Ft(e,t),c=await Pe(t,l),d=gt(o),u=Rt(o),p=te(o)==="y",{width:m,height:h}=i.floating;let f,y;d==="top"||d==="bottom"?(f=d,y=u===(await(s.isRTL==null?void 0:s.isRTL(n.floating))?"start":"end")?"left":"right"):(y=d,f=u==="end"?"top":"bottom");const $=h-c[f],b=m-c[y],k=!t.middlewareData.shift;let O=$,B=b;if(p){const R=m-c.left-c.right;B=u||k?yt(b,R):R}else{const R=h-c.top-c.bottom;O=u||k?yt($,R):R}if(k&&!u){const R=X(c.left,0),G=X(c.right,0),it=X(c.top,0),mt=X(c.bottom,0);p?B=m-2*(R!==0||G!==0?R+G:X(c.left,c.right)):O=h-2*(it!==0||mt!==0?it+mt:X(c.top,c.bottom))}await r({...t,availableWidth:B,availableHeight:O});const V=await s.getDimensions(n.floating);return m!==V.width||h!==V.height?{reset:{rects:!0}}:{}}}};function vt(e){return fo(e)?(e.nodeName||"").toLowerCase():"#document"}function Z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ft(e){var t;return(t=(fo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function fo(e){return e instanceof Node||e instanceof Z(e).Node}function ut(e){return e instanceof Element||e instanceof Z(e).Element}function rt(e){return e instanceof HTMLElement||e instanceof Z(e).HTMLElement}function je(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Z(e).ShadowRoot}function ee(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=et(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function as(e){return["table","td","th"].includes(vt(e))}function Le(e){const t=Ve(),o=et(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function mo(e){let t=Lt(e);for(;rt(t)&&!me(t);){if(Le(t))return t;t=Lt(t)}return null}function Ve(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function me(e){return["html","body","#document"].includes(vt(e))}function et(e){return Z(e).getComputedStyle(e)}function ye(e){return ut(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Lt(e){if(vt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||je(e)&&e.host||ft(e);return je(t)?t.host:t}function yo(e){const t=Lt(e);return me(t)?e.ownerDocument?e.ownerDocument.body:e.body:rt(t)&&ee(t)?t:yo(t)}function Yt(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=yo(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),r=Z(s);return n?t.concat(r,r.visualViewport||[],ee(s)?s:[],r.frameElement&&o?Yt(r.frameElement):[]):t.concat(s,Yt(s,[],o))}function bo(e){const t=et(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=rt(e),n=s?e.offsetWidth:o,r=s?e.offsetHeight:i,l=le(o)!==n||le(i)!==r;return l&&(o=n,i=r),{width:o,height:i,$:l}}function Fe(e){return ut(e)?e:e.contextElement}function Pt(e){const t=Fe(e);if(!rt(t))return bt(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:n}=bo(t);let r=(n?le(o.width):o.width)/i,l=(n?le(o.height):o.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ls=bt(0);function go(e){const t=Z(e);return!Ve()||!t.visualViewport?ls:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cs(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==Z(e)?!1:t}function zt(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),n=Fe(e);let r=bt(1);t&&(i?ut(i)&&(r=Pt(i)):r=Pt(e));const l=cs(n,o,i)?go(n):bt(0);let c=(s.left+l.x)/r.x,d=(s.top+l.y)/r.y,u=s.width/r.x,p=s.height/r.y;if(n){const m=Z(n),h=i&&ut(i)?Z(i):i;let f=m.frameElement;for(;f&&i&&h!==m;){const y=Pt(f),$=f.getBoundingClientRect(),b=et(f),k=$.left+(f.clientLeft+parseFloat(b.paddingLeft))*y.x,O=$.top+(f.clientTop+parseFloat(b.paddingTop))*y.y;c*=y.x,d*=y.y,u*=y.x,p*=y.y,c+=k,d+=O,f=Z(f).frameElement}}return de({width:u,height:p,x:c,y:d})}const ds=[":popover-open",":modal"];function vo(e){let t=!1,o=0,i=0;function s(n){try{t=t||e.matches(n)}catch{}}if(ds.forEach(n=>{s(n)}),t){const n=mo(e);if(n){const r=n.getBoundingClientRect();o=r.x,i=r.y}}return[t,o,i]}function us(e){let{elements:t,rect:o,offsetParent:i,strategy:s}=e;const n=ft(i),[r]=t?vo(t.floating):[!1];if(i===n||r)return o;let l={scrollLeft:0,scrollTop:0},c=bt(1);const d=bt(0),u=rt(i);if((u||!u&&s!=="fixed")&&((vt(i)!=="body"||ee(n))&&(l=ye(i)),rt(i))){const p=zt(i);c=Pt(i),d.x=p.x+i.clientLeft,d.y=p.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x,y:o.y*c.y-l.scrollTop*c.y+d.y}}function hs(e){return Array.from(e.getClientRects())}function _o(e){return zt(ft(e)).left+ye(e).scrollLeft}function ps(e){const t=ft(e),o=ye(e),i=e.ownerDocument.body,s=X(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=X(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-o.scrollLeft+_o(e);const l=-o.scrollTop;return et(i).direction==="rtl"&&(r+=X(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:r,y:l}}function fs(e,t){const o=Z(e),i=ft(e),s=o.visualViewport;let n=i.clientWidth,r=i.clientHeight,l=0,c=0;if(s){n=s.width,r=s.height;const d=Ve();(!d||d&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:r,x:l,y:c}}function ms(e,t){const o=zt(e,!0,t==="fixed"),i=o.top+e.clientTop,s=o.left+e.clientLeft,n=rt(e)?Pt(e):bt(1),r=e.clientWidth*n.x,l=e.clientHeight*n.y,c=s*n.x,d=i*n.y;return{width:r,height:l,x:c,y:d}}function We(e,t,o){let i;if(t==="viewport")i=fs(e,o);else if(t==="document")i=ps(ft(e));else if(ut(t))i=ms(t,o);else{const s=go(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return de(i)}function wo(e,t){const o=Lt(e);return o===t||!ut(o)||me(o)?!1:et(o).position==="fixed"||wo(o,t)}function ys(e,t){const o=t.get(e);if(o)return o;let i=Yt(e,[],!1).filter(l=>ut(l)&&vt(l)!=="body"),s=null;const n=et(e).position==="fixed";let r=n?Lt(e):e;for(;ut(r)&&!me(r);){const l=et(r),c=Le(r);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ee(r)&&!c&&wo(e,r))?i=i.filter(u=>u!==r):s=l,r=Lt(r)}return t.set(e,i),i}function bs(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const r=[...o==="clippingAncestors"?ys(t,this._c):[].concat(o),i],l=r[0],c=r.reduce((d,u)=>{const p=We(t,u,s);return d.top=X(p.top,d.top),d.right=yt(p.right,d.right),d.bottom=yt(p.bottom,d.bottom),d.left=X(p.left,d.left),d},We(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function gs(e){const{width:t,height:o}=bo(e);return{width:t,height:o}}function vs(e,t,o,i){const s=rt(t),n=ft(t),r=o==="fixed",l=zt(e,!0,r,t);let c={scrollLeft:0,scrollTop:0};const d=bt(0);if(s||!s&&!r)if((vt(t)!=="body"||ee(n))&&(c=ye(t)),s){const y=zt(t,!0,r,t);d.x=y.x+t.clientLeft,d.y=y.y+t.clientTop}else n&&(d.x=_o(n));let u=l.left+c.scrollLeft-d.x,p=l.top+c.scrollTop-d.y;const[m,h,f]=vo(i);return m&&(u+=h,p+=f,s&&(u+=t.clientLeft,p+=t.clientTop)),{x:u,y:p,width:l.width,height:l.height}}function Ke(e,t){return!rt(e)||et(e).position==="fixed"?null:t?t(e):e.offsetParent}function xo(e,t){const o=Z(e);if(!rt(e))return o;let i=Ke(e,t);for(;i&&as(i)&&et(i).position==="static";)i=Ke(i,t);return i&&(vt(i)==="html"||vt(i)==="body"&&et(i).position==="static"&&!Le(i))?o:i||mo(e)||o}const _s=async function(e){const t=this.getOffsetParent||xo,o=this.getDimensions;return{reference:vs(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await o(e.floating)}}};function ws(e){return et(e).direction==="rtl"}const se={convertOffsetParentRelativeRectToViewportRelativeRect:us,getDocumentElement:ft,getClippingRect:bs,getOffsetParent:xo,getElementRects:_s,getClientRects:hs,getDimensions:gs,getScale:Pt,isElement:ut,isRTL:ws};function xs(e,t){let o=null,i;const s=ft(e);function n(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),n();const{left:d,top:u,width:p,height:m}=e.getBoundingClientRect();if(l||t(),!p||!m)return;const h=ie(u),f=ie(s.clientWidth-(d+p)),y=ie(s.clientHeight-(u+m)),$=ie(d),k={rootMargin:-h+"px "+-f+"px "+-y+"px "+-$+"px",threshold:X(0,yt(1,c))||1};let O=!0;function B(V){const R=V[0].intersectionRatio;if(R!==c){if(!O)return r();R?r(!1,R):i=setTimeout(()=>{r(!1,1e-7)},100)}O=!1}try{o=new IntersectionObserver(B,{...k,root:s.ownerDocument})}catch{o=new IntersectionObserver(B,k)}o.observe(e)}return r(!0),n}function ks(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,d=Fe(e),u=s||n?[...d?Yt(d):[],...Yt(t)]:[];u.forEach(b=>{s&&b.addEventListener("scroll",o,{passive:!0}),n&&b.addEventListener("resize",o)});const p=d&&l?xs(d,o):null;let m=-1,h=null;r&&(h=new ResizeObserver(b=>{let[k]=b;k&&k.target===d&&h&&(h.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var O;(O=h)==null||O.observe(t)})),o()}),d&&!c&&h.observe(d),h.observe(t));let f,y=c?zt(e):null;c&&$();function $(){const b=zt(e);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&o(),y=b,f=requestAnimationFrame($)}return o(),()=>{var b;u.forEach(k=>{s&&k.removeEventListener("scroll",o),n&&k.removeEventListener("resize",o)}),p?.(),(b=h)==null||b.disconnect(),h=null,c&&cancelAnimationFrame(f)}}const Cs=ns,$s=os,Ge=rs,zs=es,Ss=(e,t,o)=>{const i=new Map,s={platform:se,...o},n={...s.platform,_c:i};return ts(e,t,{...s,platform:n})};function Os(e){return Es(e)}function we(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Es(e){for(let t=e;t;t=we(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=we(e);t;t=we(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}const As=x`
	/* stylelint-disable */
  ${U}

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
`;var Ts=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,L=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ds(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ts(t,o,s),s};function Ps(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}class D extends N{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}static{this.styles=As}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ps(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ks(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ss({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ge({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=n?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push($s({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Cs({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ge({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(zs({element:this.arrowEl,padding:this.arrowPadding}));const o=this.strategy==="absolute"?i=>se.getOffsetParent(i,Os):se.getOffsetParent;Ss(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...se,getOffsetParent:o}}).then(({x:i,y:s,middlewareData:n,placement:r})=>{const l=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const d=n.arrow.x,u=n.arrow.y;let p="",m="",h="",f="";if(this.arrowPlacement==="start"){const y=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?y:"",f=l?"":y}else if(this.arrowPlacement==="end"){const y=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":y,f=l?y:"",h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof d=="number"?`${d}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:m,bottom:h,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("syn-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${M({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}L([F(".popup")],D.prototype,"popup",2);L([F(".popup__arrow")],D.prototype,"arrowEl",2);L([a()],D.prototype,"anchor",2);L([a({type:Boolean,reflect:!0})],D.prototype,"active",2);L([a({reflect:!0})],D.prototype,"placement",2);L([a({reflect:!0})],D.prototype,"strategy",2);L([a({type:Number})],D.prototype,"distance",2);L([a({type:Number})],D.prototype,"skidding",2);L([a({type:Boolean})],D.prototype,"arrow",2);L([a({attribute:"arrow-placement"})],D.prototype,"arrowPlacement",2);L([a({attribute:"arrow-padding",type:Number})],D.prototype,"arrowPadding",2);L([a({type:Boolean})],D.prototype,"flip",2);L([a({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],D.prototype,"flipFallbackPlacements",2);L([a({attribute:"flip-fallback-strategy"})],D.prototype,"flipFallbackStrategy",2);L([a({type:Object})],D.prototype,"flipBoundary",2);L([a({attribute:"flip-padding",type:Number})],D.prototype,"flipPadding",2);L([a({type:Boolean})],D.prototype,"shift",2);L([a({type:Object})],D.prototype,"shiftBoundary",2);L([a({attribute:"shift-padding",type:Number})],D.prototype,"shiftPadding",2);L([a({attribute:"auto-size"})],D.prototype,"autoSize",2);L([a()],D.prototype,"sync",2);L([a({type:Object})],D.prototype,"autoSizeBoundary",2);L([a({attribute:"auto-size-padding",type:Number})],D.prototype,"autoSizePadding",2);const Ls=x`
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
`,Vs=x`
	/* stylelint-disable */
  ${U}

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

  

  ${Ls}
`;var Fs=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,ko=(e,t,o,i)=>{for(var s=i>1?void 0:i?Rs(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Fs(t,o,s),s};class be extends N{constructor(){super(...arguments),this.localize=new Ot(this),this.size="medium",this.removable=!1}static{this.styles=Vs}static{this.dependencies={"syn-icon-button":Xe}}handleRemoveClick(){this.emit("syn-remove")}render(){return w`
      <span
        part="base"
        class=${M({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?w`
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
    `}}ko([a({reflect:!0})],be.prototype,"size",2);ko([a({type:Boolean})],be.prototype,"removable",2);const Is=x`
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
`,Bs=x`
	/* stylelint-disable */
  ${U}
  ${pe}

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

  ${Is}
`;var Ms=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,z=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ns(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ms(t,o,s),s};class C extends N{constructor(){super(...arguments),this.formControlController=new St(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new _t(this,"help-text","label"),this.localize=new Ot(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>w`
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
    `,this.handleDocumentFocusIn=t=>{const o=t.composedPath();this&&!o.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const o=t.target,i=o.closest(".select__clear")!==null,s=o.closest("syn-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const n=this.getAllOptions(),r=n.indexOf(this.currentOption);let l=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(l=r+1,l>n.length-1&&(l=0)):t.key==="ArrowUp"?(l=r-1,l<0&&(l=n.length-1)):t.key==="Home"?l=0:t.key==="End"&&(l=n.length-1),this.setCurrentOption(n[l])}if(t.key.length===1||t.key==="Backspace"){const n=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of n)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const o=t.composedPath();this&&!o.includes(this)&&this.hide()}}static{this.styles=Bs}static{this.dependencies={"syn-icon":Vt,"syn-popup":D,"syn-tag":be}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="syn-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("syn-option"),s=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("syn-option")?(t.forEach(s=>i.push(s.value)),this.setSelectedOptions(t.filter(s=>o.includes(s.value)))):customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,o){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const o=this.getAllOptions(),i=Array.isArray(t)?t:[t];o.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,o){o===!0||o===!1?t.selected=o:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=this.selectedOptions[0]?.value??"",this.displayLabel=this.selectedOptions[0]?.getTextLabel()??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,o)=>{if(o<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,o);return w`<div @syn-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?Wi(i):i}
        </div>`}else if(o===this.maxOptionsVisible)return w`<syn-tag>+${this.selectedOptions.length-o}</syn-tag>`;return w``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>o.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await Dt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:o}=$t(this,"select.show",{dir:this.localize.dir()});await Ct(this.popup.popup,t,o),this.currentOption&&pi(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await Dt(this);const{keyframes:t,options:o}=$t(this,"select.hide",{dir:this.localize.dir()});await Ct(this.popup.popup,t,o),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ae(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ae(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!o,n=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return w`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${M({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?w`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${n?w`
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
    `}}z([F(".select")],C.prototype,"popup",2);z([F(".select__combobox")],C.prototype,"combobox",2);z([F(".select__display-input")],C.prototype,"displayInput",2);z([F(".select__value-input")],C.prototype,"valueInput",2);z([F(".select__listbox")],C.prototype,"listbox",2);z([I()],C.prototype,"hasFocus",2);z([I()],C.prototype,"displayLabel",2);z([I()],C.prototype,"currentOption",2);z([I()],C.prototype,"selectedOptions",2);z([a()],C.prototype,"name",2);z([a({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],C.prototype,"value",2);z([Zt()],C.prototype,"defaultValue",2);z([a({reflect:!0})],C.prototype,"size",2);z([a()],C.prototype,"placeholder",2);z([a({type:Boolean,reflect:!0})],C.prototype,"multiple",2);z([a({attribute:"max-options-visible",type:Number})],C.prototype,"maxOptionsVisible",2);z([a({type:Boolean,reflect:!0})],C.prototype,"disabled",2);z([a({type:Boolean})],C.prototype,"clearable",2);z([a({type:Boolean,reflect:!0})],C.prototype,"open",2);z([a({type:Boolean})],C.prototype,"hoist",2);z([a()],C.prototype,"label",2);z([a({reflect:!0})],C.prototype,"placement",2);z([a({attribute:"help-text"})],C.prototype,"helpText",2);z([a({reflect:!0})],C.prototype,"form",2);z([a({type:Boolean,reflect:!0})],C.prototype,"required",2);z([a()],C.prototype,"getTag",2);z([A("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);z([A("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);z([A("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1);Q("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Q("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});C.define("syn-select");const Us=x`
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
  `,Hs=x`
	/* stylelint-disable */
  ${U}

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

  ${Us}
`;var qs=Object.defineProperty,js=Object.getOwnPropertyDescriptor,J=(e,t,o,i)=>{for(var s=i>1?void 0:i?js(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&qs(t,o,s),s};class K extends N{constructor(){super(...arguments),this.formControlController=new St(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}static{this.styles=Hs}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return w`
      <label
        part="base"
        class=${M({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${g(this.value)}
          .checked=${Gt(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
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
    `}}J([F('input[type="checkbox"]')],K.prototype,"input",2);J([I()],K.prototype,"hasFocus",2);J([a()],K.prototype,"title",2);J([a()],K.prototype,"name",2);J([a()],K.prototype,"value",2);J([a({reflect:!0})],K.prototype,"size",2);J([a({type:Boolean,reflect:!0})],K.prototype,"disabled",2);J([a({type:Boolean,reflect:!0})],K.prototype,"checked",2);J([Zt("checked")],K.prototype,"defaultChecked",2);J([a({reflect:!0})],K.prototype,"form",2);J([a({type:Boolean,reflect:!0})],K.prototype,"required",2);J([A("checked",{waitUntilFirstUpdate:!0})],K.prototype,"handleCheckedChange",1);J([A("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);K.define("syn-switch");be.define("syn-tag");const Ws=x`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`,Ks=x`
	/* stylelint-disable */
  ${U}
  ${pe}

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

  ${Ws}
`;var Gs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,E=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ys(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Gs(t,o,s),s};class S extends N{constructor(){super(...arguments),this.formControlController=new St(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new _t(this,"help-text","label","prefix","suffix"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}static{this.styles=Ks}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,o,i="none"){this.input.setSelectionRange(t,o,i)}setRangeText(t,o,i,s){this.input.setRangeText(t,o,i,s),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!o;return w`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":n,"form-control--has-help-text":r,"form-control--has-prefix":i,"form-control--has-suffix":s})}
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
            class=${M({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${g(this.name)}
              .value=${Gt(this.value)}
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
    `}}E([F(".textarea__control")],S.prototype,"input",2);E([I()],S.prototype,"hasFocus",2);E([a()],S.prototype,"title",2);E([a()],S.prototype,"name",2);E([a()],S.prototype,"value",2);E([a({reflect:!0})],S.prototype,"size",2);E([a()],S.prototype,"label",2);E([a({attribute:"help-text"})],S.prototype,"helpText",2);E([a()],S.prototype,"placeholder",2);E([a({type:Number})],S.prototype,"rows",2);E([a()],S.prototype,"resize",2);E([a({type:Boolean,reflect:!0})],S.prototype,"disabled",2);E([a({type:Boolean,reflect:!0})],S.prototype,"readonly",2);E([a({reflect:!0})],S.prototype,"form",2);E([a({type:Boolean,reflect:!0})],S.prototype,"required",2);E([a({type:Number})],S.prototype,"minlength",2);E([a({type:Number})],S.prototype,"maxlength",2);E([a()],S.prototype,"autocapitalize",2);E([a()],S.prototype,"autocorrect",2);E([a()],S.prototype,"autocomplete",2);E([a({type:Boolean})],S.prototype,"autofocus",2);E([a()],S.prototype,"enterkeyhint",2);E([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],S.prototype,"spellcheck",2);E([a()],S.prototype,"inputmode",2);E([Zt()],S.prototype,"defaultValue",2);E([A("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);E([A("rows",{waitUntilFirstUpdate:!0})],S.prototype,"handleRowsChange",1);E([A("value",{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);S.define("syn-textarea");function Xs(e){const t=e||typeof window<"u"&&window;return!!(t&&(t.navigator.userAgent.match(/Chromatic/)||t.location.href.match(/chromatic=true/)))}const Zs=(e,...t)=>Xs()?w`
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
    `:e(...t),ue="🌞 light",Se="🌙 dark",Qs=Xo({defaultTheme:ue,parentSelector:"body",themes:{[ue]:"syn-theme-light",[Se]:"syn-theme-dark"}}),Js={decorators:[Zs,Qs],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{disableSnapshot:!0,modes:{[ue]:{theme:ue},[Se]:{theme:Se}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{stories:{inline:!1},toc:!0}}},ln=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"}));export{ln as a,Io as f,Js as p};
