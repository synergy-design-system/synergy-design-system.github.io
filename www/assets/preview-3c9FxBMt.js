import"./index-4g5l5LRQ.js";import{i as C,x,u as we,f as ao,w as It,T as ce,m as lo}from"./directive-helpers-dXnBnwbo.js";import{c as q,a as N,S as St,b as R,w as A,n as a}from"./icon.component-0RmXMwT2.js";import{s as ke,n as Bt,b as M,o as v,c as I,e as Le,i as Fe,t as gt,S as co}from"./icon-button-K1gWgnDp.js";import"./icon-cLGZxvB8.js";import"./_commonjsHelpers-4gQjN7DL.js";const Pt=new WeakMap,Lt=new WeakMap,Ft=new WeakMap,ae=new WeakSet,Kt=new WeakMap;class xt{constructor(t,o){this.handleFormData=i=>{const s=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="syn-button";!s&&!l&&typeof n=="string"&&n.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{i.formData.append(n,c.toString())}):i.formData.append(n,r.toString()))},this.handleFormSubmit=i=>{const s=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&Pt.get(this.form)?.forEach(r=>{this.setUserInteracted(r,!0)}),this.form&&!this.form.noValidate&&!s&&!n(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Kt.set(this.host,[])},this.handleInteraction=i=>{const s=Kt.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const s=i.form;if(s){const r=i.getRootNode().getElementById(s);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["syn-input"],...o}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Kt.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Kt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Pt.has(this.form)?Pt.get(this.form).add(this.host):Pt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Lt.has(this.form)||(Lt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ft.has(this.form)||(Ft.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Pt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Lt.has(this.form)&&(this.form.reportValidity=Lt.get(this.form),Lt.delete(this.form)),Ft.has(this.form)&&(this.form.checkValidity=Ft.get(this.form),Ft.delete(this.form)),this.form=void 0))}setUserInteracted(t,o){o?ae.add(t):ae.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&i.setAttribute(s,o.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const o=this.host,i=!!ae.has(o),s=!!o.required;o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&i),o.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const o=new CustomEvent("syn-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||o.preventDefault(),this.host.dispatchEvent(o)||t?.preventDefault()}}const te=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),uo=Object.freeze({...te,valid:!1,valueMissing:!0}),ho=Object.freeze({...te,valid:!1,customError:!0});class wt{constructor(t,...o){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if(o.tagName.toLowerCase()==="syn-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}const ue=new Set,po=new MutationObserver(Me),Ct=new Map;let Re=document.documentElement.dir||"ltr",Ie=document.documentElement.lang||navigator.language,vt;po.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Be(...e){e.map(t=>{const o=t.$code.toLowerCase();Ct.has(o)?Ct.set(o,Object.assign(Object.assign({},Ct.get(o)),t)):Ct.set(o,t),vt||(vt=t)}),Me()}function Me(){Re=document.documentElement.dir||"ltr",Ie=document.documentElement.lang||navigator.language,[...ue.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let fo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ue.add(this.host)}hostDisconnected(){ue.delete(this.host)}dir(){return`${this.host.dir||Re}`.toLowerCase()}lang(){return`${this.host.lang||Ie}`.toLowerCase()}getTranslationData(t){var o,i;const s=new Intl.Locale(t.replace(/_/g,"-")),n=s?.language.toLowerCase(),r=(i=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=Ct.get(`${n}-${r}`),c=Ct.get(n);return{locale:s,language:n,region:r,primary:l,secondary:c}}exists(t,o){var i;const{primary:s,secondary:n}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||n&&n[t]||o.includeFallback&&vt&&vt[t])}term(t,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(s&&s[t])n=s[t];else if(vt&&vt[t])n=vt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...o):n}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}};const Ne={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Be(Ne);class Ot extends fo{static{Be(Ne)}}const mo=C`
	/* stylelint-disable */
  ${q}

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
`;class bo extends N{constructor(){super(...arguments),this.localize=new Ot(this)}static{this.styles=mo}render(){return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}}const yo=C`
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
    background-color: var(--syn-color-neutral-400);
    border-color: var(--syn-color-neutral-400);
    color: var(--syn-color-neutral-600);
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
    border-color: var(--syn-color-neutral-400);
    color: var(--syn-color-neutral-400);
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
    color: var(--syn-color-neutral-400);
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
`,He=C`
	/* stylelint-disable */
  ${q}

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

  ${yo}
`;var go=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,D=(e,t,o,i)=>{for(var s=i>1?void 0:i?vo(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&go(t,o,s),s};class T extends N{constructor(){super(...arguments),this.formControlController=new xt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new wt(this,"[default]","prefix","suffix"),this.localize=new Ot(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="outline",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}static{this.styles=He}static{this.dependencies={"syn-icon":St,"syn-spinner":bo}}get validity(){return this.isButton()?this.button.validity:te}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),o=t?ke`a`:ke`button`;return Bt`
      <${o}
        part="base"
        class=${M({button:!0,"button--primary":!0,"button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--filled":this.variant==="filled","button--outline":this.variant==="outline","button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Bt` <syn-icon part="caret" class="button__caret" library="system" name="caret"></syn-icon> `:""}
        ${this.loading?Bt`<syn-spinner part="spinner"></syn-spinner>`:""}
      </${o}>
    `}}D([I(".button")],T.prototype,"button",2);D([R()],T.prototype,"hasFocus",2);D([R()],T.prototype,"invalid",2);D([a()],T.prototype,"title",2);D([a({reflect:!0})],T.prototype,"variant",2);D([a({reflect:!0})],T.prototype,"size",2);D([a({type:Boolean,reflect:!0})],T.prototype,"caret",2);D([a({type:Boolean,reflect:!0})],T.prototype,"disabled",2);D([a({type:Boolean,reflect:!0})],T.prototype,"loading",2);D([a()],T.prototype,"type",2);D([a()],T.prototype,"name",2);D([a()],T.prototype,"value",2);D([a()],T.prototype,"href",2);D([a()],T.prototype,"target",2);D([a()],T.prototype,"rel",2);D([a()],T.prototype,"download",2);D([a()],T.prototype,"form",2);D([a({attribute:"formaction"})],T.prototype,"formAction",2);D([a({attribute:"formenctype"})],T.prototype,"formEnctype",2);D([a({attribute:"formmethod"})],T.prototype,"formMethod",2);D([a({attribute:"formnovalidate",type:Boolean})],T.prototype,"formNoValidate",2);D([a({attribute:"formtarget"})],T.prototype,"formTarget",2);D([A("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);T.define("syn-button");const{useParameter:_o,addons:xo,useEffect:wo,useMemo:Ts}=__STORYBOOK_MODULE_PREVIEW_API__;var ko=Object.defineProperty,Co=(e,t)=>{for(var o in t)ko(e,o,{get:t[o],enumerable:!0})},$o={};Co($o,{initializeThemeState:()=>We,pluckThemeFromContext:()=>qe,useThemeParameters:()=>je});var Ue="themes",zo=`storybook/${Ue}}`,So="theme",Oo={},Eo={REGISTER_THEMES:`${zo}/REGISTER_THEMES`};function qe({globals:e}){return e[So]||""}function je(){return _o(Ue,Oo)}function We(e,t){xo.getChannel().emit(Eo.REGISTER_THEMES,{defaultTheme:t,themes:e})}var Ao="html",Ce=e=>e.split(" ").filter(Boolean),To=({themes:e,defaultTheme:t,parentSelector:o=Ao})=>(We(Object.keys(e),t),(i,s)=>{let{themeOverride:n}=je(),r=qe(s);return wo(()=>{let l=n||r||t,c=document.querySelector(o);if(!c)return;Object.entries(e).filter(([h])=>h!==l).forEach(([h,f])=>{let m=Ce(f);m.length>0&&c.classList.remove(...m)});let u=Ce(e[l]);u.length>0&&c.classList.add(...u)},[n,r,o]),i()});const Vo=C`
	/* stylelint-disable */
  ${q}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Do=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,me=(e,t,o,i)=>{for(var s=i>1?void 0:i?Po(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Do(t,o,s),s};class Ht extends N{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=Vo}handleFocus(t){Rt(t.target)?.classList.add("syn-button-group__button--focus")}handleBlur(t){Rt(t.target)?.classList.remove("syn-button-group__button--focus")}handleMouseOver(t){Rt(t.target)?.classList.add("syn-button-group__button--hover")}handleMouseOut(t){Rt(t.target)?.classList.remove("syn-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(o=>{const i=t.indexOf(o),s=Rt(o);s&&(s.classList.add("syn-button-group__button"),s.classList.toggle("syn-button-group__button--first",i===0),s.classList.toggle("syn-button-group__button--inner",i>0&&i<t.length-1),s.classList.toggle("syn-button-group__button--last",i===t.length-1),s.classList.toggle("syn-button-group__button--radio",s.tagName.toLowerCase()==="syn-radio-button"))})}render(){return x`
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
    `}}me([I("slot")],Ht.prototype,"defaultSlot",2);me([R()],Ht.prototype,"disableRole",2);me([a()],Ht.prototype,"label",2);function Rt(e){const t="syn-button, syn-radio-button";return e.closest(t)??e.querySelector(t)}Ht.define("syn-button-group");const Ut=(e="value")=>(t,o)=>{const i=t.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,r,l){const c=i.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(n===u){const h=c.converter||we,m=(typeof h=="function"?h:h?.fromAttribute??we.fromAttribute)(l,c.type);this[e]!==m&&(this[o]=m)}s.call(this,n,r,l)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=Le(class extends Fe{constructor(e){if(super(e),e.type!==gt.PROPERTY&&e.type!==gt.ATTRIBUTE&&e.type!==gt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ao(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===It||t===ce)return t;const o=e.element,i=e.name;if(e.type===gt.PROPERTY){if(t===o[i])return It}else if(e.type===gt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return It}else if(e.type===gt.ATTRIBUTE&&o.getAttribute(i)===t+"")return It;return lo(e),t}}),Lo=C`
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
`,Fo=C`
	/* stylelint-disable */
  ${q}

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

  ${Lo}
`;var Ro=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,j=(e,t,o,i)=>{for(var s=i>1?void 0:i?Io(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Ro(t,o,s),s};class H extends N{constructor(){super(...arguments),this.formControlController=new xt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}static{this.styles=Fo}static{this.dependencies={"syn-icon":St}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return x`
      <label
        part="base"
        class=${M({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${v(this.value)}
          .indeterminate=${Mt(this.indeterminate)}
          .checked=${Mt(this.checked)}
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
    `}}j([I('input[type="checkbox"]')],H.prototype,"input",2);j([R()],H.prototype,"hasFocus",2);j([a()],H.prototype,"title",2);j([a()],H.prototype,"name",2);j([a()],H.prototype,"value",2);j([a({reflect:!0})],H.prototype,"size",2);j([a({type:Boolean,reflect:!0})],H.prototype,"disabled",2);j([a({type:Boolean,reflect:!0})],H.prototype,"checked",2);j([a({type:Boolean,reflect:!0})],H.prototype,"indeterminate",2);j([Ut("checked")],H.prototype,"defaultChecked",2);j([a({reflect:!0})],H.prototype,"form",2);j([a({type:Boolean,reflect:!0})],H.prototype,"required",2);j([A("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);j([A(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],H.prototype,"handleStateChange",1);H.define("syn-checkbox");const Bo=C`
  /* Write custom CSS here */
  :host {
    --color: var(--syn-color-neutral-400);
  }
`,Mo=C`
	/* stylelint-disable */
  ${q}

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

  ${Bo}
`;var No=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,Ke=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ho(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&No(t,o,s),s};class ee extends N{constructor(){super(...arguments),this.vertical=!1}static{this.styles=Mo}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}}Ke([a({type:Boolean,reflect:!0})],ee.prototype,"vertical",2);Ke([A("vertical")],ee.prototype,"handleVerticalChange",1);ee.define("syn-divider");const Uo=C`
  /* PADDINGS */
  .input--medium .input__control {
    padding: var(--syn-spacing-x-small) var(--syn-input-spacing-medium);
  }

  .input--small .input__control {
    padding: var(--syn-spacing-3x-small) var(--syn-input-spacing-small);
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

  /* ICONS SIZE */
   .input--small .input__prefix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-medium);
   }

  .input--medium .input__prefix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-large);
   }

  .input--large .input__prefix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
   }

  .input--small .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-medium);
   }

  .input--medium .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-large);
   }

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
`,qo=C` 

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

`,oe=C`
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

  ${qo}
`,jo=C`
	/* stylelint-disable */
  ${q}
  ${oe}

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
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--syn-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--syn-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--syn-input-height-large);
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
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  ${Uo}
`;var Wo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,_=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ko(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Wo(t,o,s),s};class g extends N{constructor(){super(...arguments),this.formControlController=new xt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new wt(this,"help-text","label","prefix","suffix"),this.localize=new Ot(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}static{this.styles=jo}static{this.dependencies={"syn-icon":St}}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(t){this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,o,i="none"){this.input.setSelectionRange(t,o,i)}setRangeText(t,o,i,s){this.input.setRangeText(t,o,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!o,l=this.clearable&&!this.disabled&&!this.readonly,c=l&&(typeof this.value=="number"||this.value.length>0);return x`
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
              .value=${Mt(this.value)}
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

            ${l?x`
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
    `}}_([I(".input__control")],g.prototype,"input",2);_([R()],g.prototype,"hasFocus",2);_([a()],g.prototype,"title",2);_([a({reflect:!0})],g.prototype,"type",2);_([a()],g.prototype,"name",2);_([a()],g.prototype,"value",2);_([Ut()],g.prototype,"defaultValue",2);_([a({reflect:!0})],g.prototype,"size",2);_([a()],g.prototype,"label",2);_([a({attribute:"help-text"})],g.prototype,"helpText",2);_([a({type:Boolean})],g.prototype,"clearable",2);_([a({type:Boolean,reflect:!0})],g.prototype,"disabled",2);_([a()],g.prototype,"placeholder",2);_([a({type:Boolean,reflect:!0})],g.prototype,"readonly",2);_([a({attribute:"password-toggle",type:Boolean})],g.prototype,"passwordToggle",2);_([a({attribute:"password-visible",type:Boolean})],g.prototype,"passwordVisible",2);_([a({attribute:"no-spin-buttons",type:Boolean})],g.prototype,"noSpinButtons",2);_([a({reflect:!0})],g.prototype,"form",2);_([a({type:Boolean,reflect:!0})],g.prototype,"required",2);_([a()],g.prototype,"pattern",2);_([a({type:Number})],g.prototype,"minlength",2);_([a({type:Number})],g.prototype,"maxlength",2);_([a()],g.prototype,"min",2);_([a()],g.prototype,"max",2);_([a()],g.prototype,"step",2);_([a()],g.prototype,"autocapitalize",2);_([a()],g.prototype,"autocorrect",2);_([a()],g.prototype,"autocomplete",2);_([a({type:Boolean})],g.prototype,"autofocus",2);_([a()],g.prototype,"enterkeyhint",2);_([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],g.prototype,"spellcheck",2);_([a()],g.prototype,"inputmode",2);_([A("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);_([A("step",{waitUntilFirstUpdate:!0})],g.prototype,"handleStepChange",1);_([A("value",{waitUntilFirstUpdate:!0})],g.prototype,"handleValueChange",1);g.define("syn-input");const Go=C`
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
`;var Yo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,ie=(e,t,o,i)=>{for(var s=i>1?void 0:i?Xo(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Yo(t,o,s),s};class qt extends N{constructor(){super(...arguments),this.hasSlotController=new wt(this,"[default]","prefix","suffix","label"),this.disabled=!1,this.label=""}static{this.styles=Go}static{this.dependencies={"syn-divider":ee}}handleDisableOptions(){const{disabled:t}=this;this.defaultSlot.assignedElements().filter(o=>o.tagName.toLowerCase()==="syn-option").forEach(o=>{o.disabled=t})}handleDisabledChange(){this.handleDisableOptions()}render(){const{disabled:t}=this,o=this.hasSlotController.test("label"),i=this.label?!0:!!o;return Bt`
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
    `}}ie([I("slot:not([name])")],qt.prototype,"defaultSlot",2);ie([a({reflect:!0,type:Boolean})],qt.prototype,"disabled",2);ie([a()],qt.prototype,"label",2);ie([A("disabled",{waitUntilFirstUpdate:!0})],qt.prototype,"handleDisabledChange",1);qt.define("syn-optgroup");const Zo=C`
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
`,Jo=C`
	/* stylelint-disable */
  ${q}

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

  ${Zo}
`;var Qo=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,lt=(e,t,o,i)=>{for(var s=i>1?void 0:i?ti(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&Qo(t,o,s),s};class nt extends N{constructor(){super(...arguments),this.localize=new Ot(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=Jo}static{this.dependencies={"syn-icon":St}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){return(this.textContent??"").trim()}render(){return x`
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
    `}}lt([I(".option__label")],nt.prototype,"defaultSlot",2);lt([R()],nt.prototype,"current",2);lt([R()],nt.prototype,"selected",2);lt([R()],nt.prototype,"hasHover",2);lt([a({reflect:!0})],nt.prototype,"value",2);lt([a({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);lt([A("disabled")],nt.prototype,"handleDisabledChange",1);lt([A("selected")],nt.prototype,"handleSelectedChange",1);lt([A("value")],nt.prototype,"handleValueChange",1);nt.define("syn-option");const ei=C`
	/* stylelint-disable */
  ${He}

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
`;var oi=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,bt=(e,t,o,i)=>{for(var s=i>1?void 0:i?ii(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oi(t,o,s),s};class ct extends N{constructor(){super(...arguments),this.hasSlotController=new wt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium"}static{this.styles=ei}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Bt`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${M({button:!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}}bt([I(".button")],ct.prototype,"input",2);bt([I(".hidden-input")],ct.prototype,"hiddenInput",2);bt([R()],ct.prototype,"hasFocus",2);bt([a({type:Boolean,reflect:!0})],ct.prototype,"checked",2);bt([a()],ct.prototype,"value",2);bt([a({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);bt([a({reflect:!0})],ct.prototype,"size",2);bt([A("disabled",{waitUntilFirstUpdate:!0})],ct.prototype,"handleDisabledChange",1);ct.define("syn-radio-button");const si=C`
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

`,ni=C`
	/* stylelint-disable */
  ${q}
  ${oe}

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

  ${si}
`;var ri=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,W=(e,t,o,i)=>{for(var s=i>1?void 0:i?ai(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ri(t,o,s),s};class U extends N{constructor(){super(...arguments),this.formControlController=new xt(this),this.hasSlotController=new wt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}static{this.styles=ni}static{this.dependencies={"syn-button-group":Ht}}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?ho:t?uo:te}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const o=t.target.closest("syn-radio, syn-radio-button"),i=this.getAllRadios(),s=this.value;o.disabled||(this.value=o.value,i.forEach(n=>n.checked=n===o),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(l=>!l.disabled),i=o.find(l=>l.checked)??o[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value;let r=o.indexOf(i)+s;r<0&&(r=o.length-1),r>o.length-1&&(r=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=o[r].value,o[r].checked=!0,this.hasButtonGroup?o[r].shadowRoot.querySelector("button").focus():(o[r].tabIndex=0,o[r].focus()),this.value!==n&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),i=t.find(s=>s.checked)||t[0];i&&i.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=t.some(o=>o.tagName.toLowerCase()==="syn-radio-button"),!t.some(o=>o.checked))if(this.hasButtonGroup){const o=t[0].shadowRoot?.querySelector("button");o&&(o.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){const o=this.shadowRoot?.querySelector("syn-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(o=>o.checked=o.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,o=this.customValidityMessage!=="";return t||o?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!o,n=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
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
    `}}W([I("slot:not([name])")],U.prototype,"defaultSlot",2);W([I(".radio-group__validation-input")],U.prototype,"validationInput",2);W([R()],U.prototype,"hasButtonGroup",2);W([R()],U.prototype,"errorMessage",2);W([R()],U.prototype,"defaultValue",2);W([a()],U.prototype,"label",2);W([a({attribute:"help-text"})],U.prototype,"helpText",2);W([a()],U.prototype,"name",2);W([a({reflect:!0})],U.prototype,"value",2);W([a({reflect:!0})],U.prototype,"size",2);W([a({reflect:!0})],U.prototype,"form",2);W([a({type:Boolean,reflect:!0})],U.prototype,"required",2);W([A("size",{waitUntilFirstUpdate:!0})],U.prototype,"handleSizeChange",1);W([A("value")],U.prototype,"handleValueChange",1);U.define("syn-radio-group");const li=C`

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
`,ci=C`
	/* stylelint-disable */
  ${q}

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

  ${li}
`;var ui=Object.defineProperty,di=Object.getOwnPropertyDescriptor,kt=(e,t,o,i)=>{for(var s=i>1?void 0:i?di(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ui(t,o,s),s};class yt extends N{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}static{this.styles=ci}static{this.dependencies={"syn-icon":St}}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${M({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}}kt([R()],yt.prototype,"checked",2);kt([R()],yt.prototype,"hasFocus",2);kt([a()],yt.prototype,"value",2);kt([a({reflect:!0})],yt.prototype,"size",2);kt([a({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);kt([A("checked")],yt.prototype,"handleCheckedChange",1);kt([A("disabled",{waitUntilFirstUpdate:!0})],yt.prototype,"handleDisabledChange",1);yt.define("syn-radio");function $e(e,t,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,{...o,duration:hi()?0:o.duration});s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function hi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ze(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{const i=requestAnimationFrame(o);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}const Ge=new Map,pi=new WeakMap;function fi(e){return e??{keyframes:[],options:{duration:0}}}function Se(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ye(e,t){Ge.set(e,fi(t))}function Oe(e,t,o){const i=pi.get(e);if(i?.[t])return Se(i[t],o.dir);const s=Ge.get(t);return s?Se(s,o.dir):{keyframes:[],options:{duration:0}}}function mi(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function bi(e,t,o="vertical",i="smooth"){const s=mi(e,t),n=s.top+t.scrollTop,r=s.left+t.scrollLeft,l=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,u=t.scrollTop,h=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(r<l?t.scrollTo({left:r,behavior:i}):r+e.clientWidth>c&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(n<u?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>h&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends Fe{constructor(t){if(super(t),this.et=ce,t.type!==gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ce||t==null)return this.vt=void 0,this.et=t;if(t===It)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const o=[t];return o.raw=o,this.vt={_$litType$:this.constructor.resultType,strings:o,values:[]}}}de.directiveName="unsafeHTML",de.resultType=1;const yi=Le(de);function Ee(e,t){return new Promise(o=>{function i(s){s.target===e&&(e.removeEventListener(t,i),o())}e.addEventListener(t,i)})}const ht=Math.min,X=Math.max,Xt=Math.round,Gt=Math.floor,pt=e=>({x:e,y:e}),gi={left:"right",right:"left",bottom:"top",top:"bottom"},vi={start:"end",end:"start"};function he(e,t,o){return X(e,ht(t,o))}function Et(e,t){return typeof e=="function"?e(t):e}function ft(e){return e.split("-")[0]}function At(e){return e.split("-")[1]}function Xe(e){return e==="x"?"y":"x"}function be(e){return e==="y"?"height":"width"}function jt(e){return["top","bottom"].includes(ft(e))?"y":"x"}function ye(e){return Xe(jt(e))}function _i(e,t,o){o===void 0&&(o=!1);const i=At(e),s=ye(e),n=be(s);let r=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(r=Zt(r)),[r,Zt(r)]}function xi(e){const t=Zt(e);return[pe(e),t,pe(t)]}function pe(e){return e.replace(/start|end/g,t=>vi[t])}function wi(e,t,o){const i=["left","right"],s=["right","left"],n=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?n:r;default:return[]}}function ki(e,t,o,i){const s=At(e);let n=wi(ft(e),o==="start",i);return s&&(n=n.map(r=>r+"-"+s),t&&(n=n.concat(n.map(pe)))),n}function Zt(e){return e.replace(/left|right|bottom|top/g,t=>gi[t])}function Ci(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ze(e){return typeof e!="number"?Ci(e):{top:e,right:e,bottom:e,left:e}}function Jt(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ae(e,t,o){let{reference:i,floating:s}=e;const n=jt(t),r=ye(t),l=be(r),c=ft(t),u=n==="y",h=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,m=i[l]/2-s[l]/2;let d;switch(c){case"top":d={x:h,y:i.y-s.height};break;case"bottom":d={x:h,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:f};break;case"left":d={x:i.x-s.width,y:f};break;default:d={x:i.x,y:i.y}}switch(At(t)){case"start":d[r]-=m*(o&&u?-1:1);break;case"end":d[r]+=m*(o&&u?-1:1);break}return d}const $i=async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:r}=o,l=n.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(t));let u=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:h,y:f}=Ae(u,i,c),m=i,d={},p=0;for(let b=0;b<l.length;b++){const{name:k,fn:y}=l[b],{x:O,y:E,data:B,reset:L}=await y({x:h,y:f,initialPlacement:i,placement:m,strategy:s,middlewareData:d,rects:u,platform:r,elements:{reference:e,floating:t}});if(h=O??h,f=E??f,d={...d,[k]:{...d[k],...B}},L&&p<=50){p++,typeof L=="object"&&(L.placement&&(m=L.placement),L.rects&&(u=L.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):L.rects),{x:h,y:f}=Ae(u,m,c)),b=-1;continue}}return{x:h,y:f,placement:m,strategy:s,middlewareData:d}};async function ge(e,t){var o;t===void 0&&(t={});const{x:i,y:s,platform:n,rects:r,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:m=!1,padding:d=0}=Et(t,e),p=Ze(d),k=l[m?f==="floating"?"reference":"floating":f],y=Jt(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(k)))==null||o?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:c})),O=f==="floating"?{...r.floating,x:i,y:s}:r.reference,E=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(E))?await(n.getScale==null?void 0:n.getScale(E))||{x:1,y:1}:{x:1,y:1},L=Jt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:O,offsetParent:E,strategy:c}):O);return{top:(y.top-L.top+p.top)/B.y,bottom:(L.bottom-y.bottom+p.bottom)/B.y,left:(y.left-L.left+p.left)/B.x,right:(L.right-y.right+p.right)/B.x}}const zi=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:n,platform:r,elements:l,middlewareData:c}=t,{element:u,padding:h=0}=Et(e,t)||{};if(u==null)return{};const f=Ze(h),m={x:o,y:i},d=ye(s),p=be(d),b=await r.getDimensions(u),k=d==="y",y=k?"top":"left",O=k?"bottom":"right",E=k?"clientHeight":"clientWidth",B=n.reference[p]+n.reference[d]-m[d]-n.floating[p],L=m[d]-n.reference[d],F=await(r.getOffsetParent==null?void 0:r.getOffsetParent(u));let G=F?F[E]:0;(!G||!await(r.isElement==null?void 0:r.isElement(F)))&&(G=l.floating[E]||n.floating[p]);const et=B/2-L/2,dt=G/2-b[p]/2-1,Tt=ht(f[y],dt),Vt=ht(f[O],dt),Q=Tt,Dt=G-b[p]-Vt,Y=G/2-b[p]/2+et,ot=he(Q,Y,Dt),it=!c.arrow&&At(s)!=null&&Y!=ot&&n.reference[p]/2-(Y<Q?Tt:Vt)-b[p]/2<0,rt=it?Y<Q?Y-Q:Y-Dt:0;return{[d]:m[d]+rt,data:{[d]:ot,centerOffset:Y-ot-rt,...it&&{alignmentOffset:rt}},reset:it}}}),Si=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:n,rects:r,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:h=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:b=!0,...k}=Et(e,t);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const y=ft(s),O=ft(l)===l,E=await(c.isRTL==null?void 0:c.isRTL(u.floating)),B=m||(O||!b?[Zt(l)]:xi(l));!m&&p!=="none"&&B.push(...ki(l,b,p,E));const L=[l,...B],F=await ge(t,k),G=[];let et=((i=n.flip)==null?void 0:i.overflows)||[];if(h&&G.push(F[y]),f){const Q=_i(s,r,E);G.push(F[Q[0]],F[Q[1]])}if(et=[...et,{placement:s,overflows:G}],!G.every(Q=>Q<=0)){var dt,Tt;const Q=(((dt=n.flip)==null?void 0:dt.index)||0)+1,Dt=L[Q];if(Dt)return{data:{index:Q,overflows:et},reset:{placement:Dt}};let Y=(Tt=et.filter(ot=>ot.overflows[0]<=0).sort((ot,it)=>ot.overflows[1]-it.overflows[1])[0])==null?void 0:Tt.placement;if(!Y)switch(d){case"bestFit":{var Vt;const ot=(Vt=et.map(it=>[it.placement,it.overflows.filter(rt=>rt>0).reduce((rt,ro)=>rt+ro,0)]).sort((it,rt)=>it[1]-rt[1])[0])==null?void 0:Vt[0];ot&&(Y=ot);break}case"initialPlacement":Y=l;break}if(s!==Y)return{reset:{placement:Y}}}return{}}}};async function Oi(e,t){const{placement:o,platform:i,elements:s}=e,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),r=ft(o),l=At(o),c=jt(o)==="y",u=["left","top"].includes(r)?-1:1,h=n&&c?-1:1,f=Et(t,e);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof p=="number"&&(d=l==="end"?p*-1:p),c?{x:d*h,y:m*u}:{x:m*u,y:d*h}}const Ei=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:n,placement:r,middlewareData:l}=t,c=await Oi(t,e);return r===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:r}}}}},Ai=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:n=!0,crossAxis:r=!1,limiter:l={fn:k=>{let{x:y,y:O}=k;return{x:y,y:O}}},...c}=Et(e,t),u={x:o,y:i},h=await ge(t,c),f=jt(ft(s)),m=Xe(f);let d=u[m],p=u[f];if(n){const k=m==="y"?"top":"left",y=m==="y"?"bottom":"right",O=d+h[k],E=d-h[y];d=he(O,d,E)}if(r){const k=f==="y"?"top":"left",y=f==="y"?"bottom":"right",O=p+h[k],E=p-h[y];p=he(O,p,E)}const b=l.fn({...t,[m]:d,[f]:p});return{...b,data:{x:b.x-o,y:b.y-i}}}}},Ti=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:s,elements:n}=t,{apply:r=()=>{},...l}=Et(e,t),c=await ge(t,l),u=ft(o),h=At(o),f=jt(o)==="y",{width:m,height:d}=i.floating;let p,b;u==="top"||u==="bottom"?(p=u,b=h===(await(s.isRTL==null?void 0:s.isRTL(n.floating))?"start":"end")?"left":"right"):(b=u,p=h==="end"?"top":"bottom");const k=d-c[p],y=m-c[b],O=!t.middlewareData.shift;let E=k,B=y;if(f){const F=m-c.left-c.right;B=h||O?ht(y,F):F}else{const F=d-c.top-c.bottom;E=h||O?ht(k,F):F}if(O&&!h){const F=X(c.left,0),G=X(c.right,0),et=X(c.top,0),dt=X(c.bottom,0);f?B=m-2*(F!==0||G!==0?F+G:X(c.left,c.right)):E=d-2*(et!==0||dt!==0?et+dt:X(c.top,c.bottom))}await r({...t,availableWidth:B,availableHeight:E});const L=await s.getDimensions(n.floating);return m!==L.width||d!==L.height?{reset:{rects:!0}}:{}}}};function mt(e){return Je(e)?(e.nodeName||"").toLowerCase():"#document"}function Z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ut(e){var t;return(t=(Je(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Je(e){return e instanceof Node||e instanceof Z(e).Node}function at(e){return e instanceof Element||e instanceof Z(e).Element}function st(e){return e instanceof HTMLElement||e instanceof Z(e).HTMLElement}function Te(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Z(e).ShadowRoot}function Wt(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=tt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function Vi(e){return["table","td","th"].includes(mt(e))}function ve(e){const t=_e(),o=tt(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Di(e){let t=zt(e);for(;st(t)&&!se(t);){if(ve(t))return t;t=zt(t)}return null}function _e(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function se(e){return["html","body","#document"].includes(mt(e))}function tt(e){return Z(e).getComputedStyle(e)}function ne(e){return at(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function zt(e){if(mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Te(e)&&e.host||ut(e);return Te(t)?t.host:t}function Qe(e){const t=zt(e);return se(t)?e.ownerDocument?e.ownerDocument.body:e.body:st(t)&&Wt(t)?t:Qe(t)}function Nt(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=Qe(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),r=Z(s);return n?t.concat(r,r.visualViewport||[],Wt(s)?s:[],r.frameElement&&o?Nt(r.frameElement):[]):t.concat(s,Nt(s,[],o))}function to(e){const t=tt(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=st(e),n=s?e.offsetWidth:o,r=s?e.offsetHeight:i,l=Xt(o)!==n||Xt(i)!==r;return l&&(o=n,i=r),{width:o,height:i,$:l}}function xe(e){return at(e)?e:e.contextElement}function $t(e){const t=xe(e);if(!st(t))return pt(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:n}=to(t);let r=(n?Xt(o.width):o.width)/i,l=(n?Xt(o.height):o.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Pi=pt(0);function eo(e){const t=Z(e);return!_e()||!t.visualViewport?Pi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Li(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==Z(e)?!1:t}function _t(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),n=xe(e);let r=pt(1);t&&(i?at(i)&&(r=$t(i)):r=$t(e));const l=Li(n,o,i)?eo(n):pt(0);let c=(s.left+l.x)/r.x,u=(s.top+l.y)/r.y,h=s.width/r.x,f=s.height/r.y;if(n){const m=Z(n),d=i&&at(i)?Z(i):i;let p=m.frameElement;for(;p&&i&&d!==m;){const b=$t(p),k=p.getBoundingClientRect(),y=tt(p),O=k.left+(p.clientLeft+parseFloat(y.paddingLeft))*b.x,E=k.top+(p.clientTop+parseFloat(y.paddingTop))*b.y;c*=b.x,u*=b.y,h*=b.x,f*=b.y,c+=O,u+=E,p=Z(p).frameElement}}return Jt({width:h,height:f,x:c,y:u})}function Fi(e){let{rect:t,offsetParent:o,strategy:i}=e;const s=st(o),n=ut(o);if(o===n)return t;let r={scrollLeft:0,scrollTop:0},l=pt(1);const c=pt(0);if((s||!s&&i!=="fixed")&&((mt(o)!=="body"||Wt(n))&&(r=ne(o)),st(o))){const u=_t(o);l=$t(o),c.x=u.x+o.clientLeft,c.y=u.y+o.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-r.scrollLeft*l.x+c.x,y:t.y*l.y-r.scrollTop*l.y+c.y}}function Ri(e){return Array.from(e.getClientRects())}function oo(e){return _t(ut(e)).left+ne(e).scrollLeft}function Ii(e){const t=ut(e),o=ne(e),i=e.ownerDocument.body,s=X(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=X(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-o.scrollLeft+oo(e);const l=-o.scrollTop;return tt(i).direction==="rtl"&&(r+=X(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:r,y:l}}function Bi(e,t){const o=Z(e),i=ut(e),s=o.visualViewport;let n=i.clientWidth,r=i.clientHeight,l=0,c=0;if(s){n=s.width,r=s.height;const u=_e();(!u||u&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:r,x:l,y:c}}function Mi(e,t){const o=_t(e,!0,t==="fixed"),i=o.top+e.clientTop,s=o.left+e.clientLeft,n=st(e)?$t(e):pt(1),r=e.clientWidth*n.x,l=e.clientHeight*n.y,c=s*n.x,u=i*n.y;return{width:r,height:l,x:c,y:u}}function Ve(e,t,o){let i;if(t==="viewport")i=Bi(e,o);else if(t==="document")i=Ii(ut(e));else if(at(t))i=Mi(t,o);else{const s=eo(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return Jt(i)}function io(e,t){const o=zt(e);return o===t||!at(o)||se(o)?!1:tt(o).position==="fixed"||io(o,t)}function Ni(e,t){const o=t.get(e);if(o)return o;let i=Nt(e,[],!1).filter(l=>at(l)&&mt(l)!=="body"),s=null;const n=tt(e).position==="fixed";let r=n?zt(e):e;for(;at(r)&&!se(r);){const l=tt(r),c=ve(r);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Wt(r)&&!c&&io(e,r))?i=i.filter(h=>h!==r):s=l,r=zt(r)}return t.set(e,i),i}function Hi(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const r=[...o==="clippingAncestors"?Ni(t,this._c):[].concat(o),i],l=r[0],c=r.reduce((u,h)=>{const f=Ve(t,h,s);return u.top=X(f.top,u.top),u.right=ht(f.right,u.right),u.bottom=ht(f.bottom,u.bottom),u.left=X(f.left,u.left),u},Ve(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ui(e){const{width:t,height:o}=to(e);return{width:t,height:o}}function qi(e,t,o){const i=st(t),s=ut(t),n=o==="fixed",r=_t(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const c=pt(0);if(i||!i&&!n)if((mt(t)!=="body"||Wt(s))&&(l=ne(t)),i){const u=_t(t,!0,n,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else s&&(c.x=oo(s));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function De(e,t){return!st(e)||tt(e).position==="fixed"?null:t?t(e):e.offsetParent}function so(e,t){const o=Z(e);if(!st(e))return o;let i=De(e,t);for(;i&&Vi(i)&&tt(i).position==="static";)i=De(i,t);return i&&(mt(i)==="html"||mt(i)==="body"&&tt(i).position==="static"&&!ve(i))?o:i||Di(e)||o}const ji=async function(e){let{reference:t,floating:o,strategy:i}=e;const s=this.getOffsetParent||so,n=this.getDimensions;return{reference:qi(t,await s(o),i),floating:{x:0,y:0,...await n(o)}}};function Wi(e){return tt(e).direction==="rtl"}const Yt={convertOffsetParentRelativeRectToViewportRelativeRect:Fi,getDocumentElement:ut,getClippingRect:Hi,getOffsetParent:so,getElementRects:ji,getClientRects:Ri,getDimensions:Ui,getScale:$t,isElement:at,isRTL:Wi};function Ki(e,t){let o=null,i;const s=ut(e);function n(){clearTimeout(i),o&&o.disconnect(),o=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),n();const{left:u,top:h,width:f,height:m}=e.getBoundingClientRect();if(l||t(),!f||!m)return;const d=Gt(h),p=Gt(s.clientWidth-(u+f)),b=Gt(s.clientHeight-(h+m)),k=Gt(u),O={rootMargin:-d+"px "+-p+"px "+-b+"px "+-k+"px",threshold:X(0,ht(1,c))||1};let E=!0;function B(L){const F=L[0].intersectionRatio;if(F!==c){if(!E)return r();F?r(!1,F):i=setTimeout(()=>{r(!1,1e-7)},100)}E=!1}try{o=new IntersectionObserver(B,{...O,root:s.ownerDocument})}catch{o=new IntersectionObserver(B,O)}o.observe(e)}return r(!0),n}function Gi(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,u=xe(e),h=s||n?[...u?Nt(u):[],...Nt(t)]:[];h.forEach(y=>{s&&y.addEventListener("scroll",o,{passive:!0}),n&&y.addEventListener("resize",o)});const f=u&&l?Ki(u,o):null;let m=-1,d=null;r&&(d=new ResizeObserver(y=>{let[O]=y;O&&O.target===u&&d&&(d.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{d&&d.observe(t)})),o()}),u&&!c&&d.observe(u),d.observe(t));let p,b=c?_t(e):null;c&&k();function k(){const y=_t(e);b&&(y.x!==b.x||y.y!==b.y||y.width!==b.width||y.height!==b.height)&&o(),b=y,p=requestAnimationFrame(k)}return o(),()=>{h.forEach(y=>{s&&y.removeEventListener("scroll",o),n&&y.removeEventListener("resize",o)}),f&&f(),d&&d.disconnect(),d=null,c&&cancelAnimationFrame(p)}}const Yi=Ai,Xi=Si,Pe=Ti,Zi=zi,Ji=(e,t,o)=>{const i=new Map,s={platform:Yt,...o},n={...s.platform,_c:i};return $i(e,t,{...s,platform:n})};function Qi(e){return ts(e)}function le(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ts(e){for(let t=e;t;t=le(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=le(e);t;t=le(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}const es=C`
	/* stylelint-disable */
  ${q}

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
`;var os=Object.defineProperty,is=Object.getOwnPropertyDescriptor,P=(e,t,o,i)=>{for(var s=i>1?void 0:i?is(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&os(t,o,s),s};function ss(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}class V extends N{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}static{this.styles=es}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ss(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Gi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ei({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Pe({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=n?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Xi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Yi({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Pe({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Zi({element:this.arrowEl,padding:this.arrowPadding}));const o=this.strategy==="absolute"?i=>Yt.getOffsetParent(i,Qi):Yt.getOffsetParent;Ji(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...Yt,getOffsetParent:o}}).then(({x:i,y:s,middlewareData:n,placement:r})=>{const l=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const u=n.arrow.x,h=n.arrow.y;let f="",m="",d="",p="";if(this.arrowPlacement==="start"){const b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?b:"",p=l?"":b}else if(this.arrowPlacement==="end"){const b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":b,p=l?b:"",d=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof u=="number"?`${u}px`:"",f=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:f,right:m,bottom:d,left:p,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("syn-reposition")}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${M({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}}P([I(".popup")],V.prototype,"popup",2);P([I(".popup__arrow")],V.prototype,"arrowEl",2);P([a()],V.prototype,"anchor",2);P([a({type:Boolean,reflect:!0})],V.prototype,"active",2);P([a({reflect:!0})],V.prototype,"placement",2);P([a({reflect:!0})],V.prototype,"strategy",2);P([a({type:Number})],V.prototype,"distance",2);P([a({type:Number})],V.prototype,"skidding",2);P([a({type:Boolean})],V.prototype,"arrow",2);P([a({attribute:"arrow-placement"})],V.prototype,"arrowPlacement",2);P([a({attribute:"arrow-padding",type:Number})],V.prototype,"arrowPadding",2);P([a({type:Boolean})],V.prototype,"flip",2);P([a({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],V.prototype,"flipFallbackPlacements",2);P([a({attribute:"flip-fallback-strategy"})],V.prototype,"flipFallbackStrategy",2);P([a({type:Object})],V.prototype,"flipBoundary",2);P([a({attribute:"flip-padding",type:Number})],V.prototype,"flipPadding",2);P([a({type:Boolean})],V.prototype,"shift",2);P([a({type:Object})],V.prototype,"shiftBoundary",2);P([a({attribute:"shift-padding",type:Number})],V.prototype,"shiftPadding",2);P([a({attribute:"auto-size"})],V.prototype,"autoSize",2);P([a()],V.prototype,"sync",2);P([a({type:Object})],V.prototype,"autoSizeBoundary",2);P([a({attribute:"auto-size-padding",type:Number})],V.prototype,"autoSizePadding",2);const ns=C`
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
`,rs=C`
	/* stylelint-disable */
  ${q}

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

  

  ${ns}
`;var as=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,no=(e,t,o,i)=>{for(var s=i>1?void 0:i?ls(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&as(t,o,s),s};class re extends N{constructor(){super(...arguments),this.localize=new Ot(this),this.size="medium",this.removable=!1}static{this.styles=rs}static{this.dependencies={"syn-icon-button":co}}handleRemoveClick(){this.emit("syn-remove")}render(){return x`
      <span
        part="base"
        class=${M({tag:!0,"tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--removable":this.removable})}
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
    `}}no([a({reflect:!0})],re.prototype,"size",2);no([a({type:Boolean})],re.prototype,"removable",2);const cs=C`
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
`,us=C`
	/* stylelint-disable */
  ${q}
  ${oe}

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

  ${cs}
`;var ds=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,$=(e,t,o,i)=>{for(var s=i>1?void 0:i?hs(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ds(t,o,s),s};class w extends N{constructor(){super(...arguments),this.formControlController=new xt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new Ot(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>x`
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
    `,this.handleDocumentFocusIn=t=>{const o=t.composedPath();this&&!o.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const o=t.target,i=o.closest(".select__clear")!==null,s=o.closest("syn-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const n=this.getAllOptions(),r=n.indexOf(this.currentOption);let l=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(l=r+1,l>n.length-1&&(l=0)):t.key==="ArrowUp"?(l=r-1,l<0&&(l=n.length-1)):t.key==="Home"?l=0:t.key==="End"&&(l=n.length-1),this.setCurrentOption(n[l])}if(t.key.length===1||t.key==="Backspace"){const n=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of n)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const o=t.composedPath();this&&!o.includes(this)&&this.hide()}}static{this.styles=us}static{this.dependencies={"syn-icon":St,"syn-popup":V,"syn-tag":re}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="syn-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("syn-option"),s=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("syn-option")?(t.forEach(s=>i.push(s.value)),this.setSelectedOptions(t.filter(s=>o.includes(s.value)))):customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,o){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(o,!1),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}getAllOptions(){return[...this.querySelectorAll("syn-option")]}getFirstOption(){return this.querySelector("syn-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const o=this.getAllOptions(),i=Array.isArray(t)?t:[t];o.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,o){o===!0||o===!1?t.selected=o:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=this.selectedOptions[0]?.value??"",this.displayLabel=this.selectedOptions[0]?.getTextLabel()??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,o)=>{if(o<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,o);return x`<div @syn-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?yi(i):i}
        </div>`}else if(o===this.maxOptionsVisible)return x`<syn-tag>+${this.selectedOptions.length-o}</syn-tag>`;return x``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),o=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>o.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("syn-show"),this.addOpenListeners(),await ze(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:o}=Oe(this,"select.show",{dir:this.localize.dir()});await $e(this.popup.popup,t,o),this.currentOption&&bi(this.currentOption,this.listbox,"vertical","auto"),this.emit("syn-after-show")}else{this.emit("syn-hide"),this.removeOpenListeners(),await ze(this);const{keyframes:t,options:o}=Oe(this,"select.hide",{dir:this.localize.dir()});await $e(this.popup.popup,t,o),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ee(this,"syn-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ee(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!o,n=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return x`
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
    `}}$([I(".select")],w.prototype,"popup",2);$([I(".select__combobox")],w.prototype,"combobox",2);$([I(".select__display-input")],w.prototype,"displayInput",2);$([I(".select__value-input")],w.prototype,"valueInput",2);$([I(".select__listbox")],w.prototype,"listbox",2);$([R()],w.prototype,"hasFocus",2);$([R()],w.prototype,"displayLabel",2);$([R()],w.prototype,"currentOption",2);$([R()],w.prototype,"selectedOptions",2);$([a()],w.prototype,"name",2);$([a({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],w.prototype,"value",2);$([Ut()],w.prototype,"defaultValue",2);$([a({reflect:!0})],w.prototype,"size",2);$([a()],w.prototype,"placeholder",2);$([a({type:Boolean,reflect:!0})],w.prototype,"multiple",2);$([a({attribute:"max-options-visible",type:Number})],w.prototype,"maxOptionsVisible",2);$([a({type:Boolean,reflect:!0})],w.prototype,"disabled",2);$([a({type:Boolean})],w.prototype,"clearable",2);$([a({type:Boolean,reflect:!0})],w.prototype,"open",2);$([a({type:Boolean})],w.prototype,"hoist",2);$([a()],w.prototype,"label",2);$([a({reflect:!0})],w.prototype,"placement",2);$([a({attribute:"help-text"})],w.prototype,"helpText",2);$([a({reflect:!0})],w.prototype,"form",2);$([a({type:Boolean,reflect:!0})],w.prototype,"required",2);$([a()],w.prototype,"getTag",2);$([A("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);$([A("value",{waitUntilFirstUpdate:!0})],w.prototype,"handleValueChange",1);$([A("open",{waitUntilFirstUpdate:!0})],w.prototype,"handleOpenChange",1);Ye("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ye("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});w.define("syn-select");const ps=C`
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
  `,fs=C`
	/* stylelint-disable */
  ${q}

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

  ${ps}
`;var ms=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,J=(e,t,o,i)=>{for(var s=i>1?void 0:i?bs(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ms(t,o,s),s};class K extends N{constructor(){super(...arguments),this.formControlController=new xt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}static{this.styles=fs}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return x`
      <label
        part="base"
        class=${M({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${v(this.value)}
          .checked=${Mt(this.checked)}
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
    `}}J([I('input[type="checkbox"]')],K.prototype,"input",2);J([R()],K.prototype,"hasFocus",2);J([a()],K.prototype,"title",2);J([a()],K.prototype,"name",2);J([a()],K.prototype,"value",2);J([a({reflect:!0})],K.prototype,"size",2);J([a({type:Boolean,reflect:!0})],K.prototype,"disabled",2);J([a({type:Boolean,reflect:!0})],K.prototype,"checked",2);J([Ut("checked")],K.prototype,"defaultChecked",2);J([a({reflect:!0})],K.prototype,"form",2);J([a({type:Boolean,reflect:!0})],K.prototype,"required",2);J([A("checked",{waitUntilFirstUpdate:!0})],K.prototype,"handleCheckedChange",1);J([A("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);K.define("syn-switch");re.define("syn-tag");const ys=C`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`,gs=C`
	/* stylelint-disable */
  ${q}
  ${oe}

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

  ${ys}
`;var vs=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,S=(e,t,o,i)=>{for(var s=i>1?void 0:i?_s(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&vs(t,o,s),s};class z extends N{constructor(){super(...arguments),this.formControlController=new xt(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new wt(this,"help-text","label","prefix","suffix"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}static{this.styles=gs}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,o,i="none"){this.input.setSelectionRange(t,o,i)}setRangeText(t,o,i,s){this.input.setRangeText(t,o,i,s),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.hasSlotController.test("prefix"),s=this.hasSlotController.test("suffix"),n=this.label?!0:!!t,r=this.helpText?!0:!!o;return x`
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
              name=${v(this.name)}
              .value=${Mt(this.value)}
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
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}S([I(".textarea__control")],z.prototype,"input",2);S([R()],z.prototype,"hasFocus",2);S([a()],z.prototype,"title",2);S([a()],z.prototype,"name",2);S([a()],z.prototype,"value",2);S([a({reflect:!0})],z.prototype,"size",2);S([a()],z.prototype,"label",2);S([a({attribute:"help-text"})],z.prototype,"helpText",2);S([a()],z.prototype,"placeholder",2);S([a({type:Number})],z.prototype,"rows",2);S([a()],z.prototype,"resize",2);S([a({type:Boolean,reflect:!0})],z.prototype,"disabled",2);S([a({type:Boolean,reflect:!0})],z.prototype,"readonly",2);S([a({reflect:!0})],z.prototype,"form",2);S([a({type:Boolean,reflect:!0})],z.prototype,"required",2);S([a({type:Number})],z.prototype,"minlength",2);S([a({type:Number})],z.prototype,"maxlength",2);S([a()],z.prototype,"autocapitalize",2);S([a()],z.prototype,"autocorrect",2);S([a()],z.prototype,"autocomplete",2);S([a({type:Boolean})],z.prototype,"autofocus",2);S([a()],z.prototype,"enterkeyhint",2);S([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],z.prototype,"spellcheck",2);S([a()],z.prototype,"inputmode",2);S([Ut()],z.prototype,"defaultValue",2);S([A("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);S([A("rows",{waitUntilFirstUpdate:!0})],z.prototype,"handleRowsChange",1);S([A("value",{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1);z.define("syn-textarea");function xs(e){const t=e||typeof window<"u"&&window;return!!(t&&(t.navigator.userAgent.match(/Chromatic/)||t.location.href.match(/chromatic=true/)))}const ws=(e,...t)=>xs()?x`
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
    `:e(...t),Qt="🌞 light",fe="🌙 dark",ks=To({defaultTheme:Qt,parentSelector:"body",themes:{[Qt]:"syn-theme-light",[fe]:"syn-theme-dark"}}),Vs={decorators:[ws,ks],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"neutral-1000",values:[{name:"neutral-1000",value:"var(--syn-color-neutral-0)"},{name:"neutral-50",value:"var(--syn-color-neutral-50)"},{name:"primary-100",value:"var(--syn-color-primary-50)"}]},chromatic:{disableSnapshot:!0,modes:{[Qt]:{theme:Qt},[fe]:{theme:fe}}},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{stories:{inline:!1},toc:!0}}};export{Vs as default};
