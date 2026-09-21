import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,i as r,o as i,t as a}from"./lit-D4-0ovri.js";import{_ as o,b as s}from"./library-BTrITrk7.js";import{i as c,r as l}from"./library.migration-jc-Nqie8.js";import{a as u,d,l as f,n as p,o as m,r as h,s as g,t as _}from"./synergy-element-Di-hMrpy.js";import{t as v}from"./query-DOHNhzf6.js";import{r as y,t as b}from"./if-defined-BN5mMhH6.js";import{n as x,t as S}from"./class-map-LsJiuvgY.js";import{r as C,t as w}from"./form-D9RYqjir.js";import{r as T,t as E}from"./slot-CUH75lUH.js";import{n as ee,t as te}from"./localize-Du3bqz3O.js";import{n as D}from"./watch-Q8hEwzVb.js";import{n as O,t as k}from"./icon.component-C5O4LU7A.js";import{c as A,l as j,s as M,u as N}from"./functions-CA4nbllR.js";import{n as P,t as F}from"./decorator-DZesXZg7.js";import{r as I,t as L}from"./live-CD3WTCMN.js";import{n as R,t as z}from"./divider.component-D_Q9z7hz.js";import{n as B,t as V}from"./form-control.styles-BbnxDpsH.js";import{n as H,t as U}from"./default-value-Bg4Vpd0u.js";var W,G;function K(){return(K=e((()=>{a(),l(),W=class extends c{constructor(e){if(super(e),this.handlePointerDown=e=>{e.button!==0||this.host.disabled||this.spinOnLongPressCallback(e)},this.handlePointerUp=e=>{e?.preventDefault(),e?.stopPropagation(),this.timeout&&this.callbacks.start(),this.stopSpinningAndCleanUp(),this.callbacks.end(),document.removeEventListener(`pointerup`,this.handlePointerUp)},e.type!==s.ELEMENT||!(e.element instanceof HTMLButtonElement))throw Error("The `longPress` directive must be used on an HTMLButtonElement.")}render(e){return r}update(e,[t]){return this.callbacks===void 0&&this.host===void 0&&(this.host=e.element,this.callbacks={...t},this.host.addEventListener(`pointerdown`,this.handlePointerDown)),i}reconnected(){this.host.addEventListener(`pointerdown`,this.handlePointerDown)}disconnected(){this.stopSpinningAndCleanUp(),this.host.removeEventListener(`pointerdown`,this.handlePointerDown),document.removeEventListener(`pointerup`,this.handlePointerUp)}spinOnLongPressCallback(e){e.preventDefault(),e.stopPropagation(),this.timeout=setTimeout(()=>{this.timeout=void 0,this.interval=setInterval(()=>{this.callbacks.start()},50)},500),document.addEventListener(`pointerup`,this.handlePointerUp),this.observer?.disconnect(),this.observer=new MutationObserver(e=>{e.forEach(e=>{e.attributeName===`disabled`&&this.stopSpinningAndCleanUp()})}),this.observer.observe(this.host,{attributes:!0})}stopSpinningAndCleanUp(){clearInterval(this.interval),clearTimeout(this.timeout),this.observer?.disconnect()}},G=o(W)})))()}var q;function J(){return(J=e((()=>{a(),q=n`
  /* stylelint-disable no-descending-specificity, property-no-vendor-prefix */
  :host {
    --syn-input-autofill-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-background-color-hover) inset;
    --syn-input-autofill-readonly-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-readonly-background-color) inset;
    --syn-input-autofill-text-fill-color: var(--syn-color-primary-500);
    --syn-input-autofill-caret-color: var(--syn-input-color);

    display: block;
  }

  .input {
    --input-border-radius: var(--syn-input-border-radius-medium);
    --input-clear-padding-inline-end: var(--syn-spacing-medium);
    --input-clear-padding-inline-end-with-suffix: var(--syn-spacing-small);
    --input-clear-padding-inline-start: var(--syn-spacing-small);
    --input-control-height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    --input-control-padding: var(--syn-spacing-x-small) var(--syn-input-spacing-medium);
    --input-font-size: var(--syn-input-font-size-medium);
    --input-height: var(--syn-input-height-medium);
    --input-icon-size: var(--syn-font-size-x-large);
    --input-number-divider-height: var(--syn-font-size-x-large);
    --input-number-divider-margin: 0 var(--syn-spacing-2x-small);
    --input-number-stepper-margin-inline-start: 0;
    --input-number-stepper-margin-inline-end: var(--syn-spacing-2x-small);
    --input-password-toggle-padding-inline-start: calc(var(--syn-spacing-2x-small) + var(--syn-spacing-3x-small));
    --input-prefix-margin-inline: var(--syn-input-spacing-medium) var(--syn-spacing-small);
    --input-suffix-margin-inline: var(--syn-spacing-small) var(--syn-input-spacing-medium);

    align-items: stretch;
    border-radius: var(--input-border-radius);
    cursor: text;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: var(--syn-input-font-family);
    font-size: var(--input-font-size);
    font-weight: var(--syn-input-font-weight);
    height: var(--input-height);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    overflow: hidden;
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
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
    cursor: not-allowed;

    /** #429: Use token for opacity */
    opacity: var(--syn-input-disabled-opacity);
  }

  .input--standard.input--disabled .input__control {
    color: var(--syn-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly inputs */
  .input--readonly {
    background-color: var(--syn-input-readonly-background-color);
    border: none;
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
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .input__control {
    -webkit-appearance: none;
    background: inherit;
    border: none;
    box-shadow: none;
    color: var(--syn-input-color);
    cursor: inherit;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    height: var(--input-control-height);
    margin: 0;
    min-width: 0;
    padding: var(--input-control-padding);

    /* Fixes overflowing of the syn-input in flex and grid containers with fix width (https://github.com/synergy-design-system/synergy-design-system/issues/761) */
    width: 100%;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: var(--syn-input-autofill-shadow) !important;
    caret-color: var(--syn-input-autofill-caret-color);
    -webkit-text-fill-color: var(--syn-input-autofill-text-fill-color);
  }

  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .input--readonly .input__control:-webkit-autofill,
  .input--readonly .input__control:-webkit-autofill:hover,
  .input--readonly .input__control:-webkit-autofill:focus,
  .input--readonly .input__control:-webkit-autofill:active {
    box-shadow: var(--syn-input-autofill-readonly-shadow) !important;
  }

  .input__control::placeholder {
    color: var(--syn-input-placeholder-color);
    -webkit-user-select: none;
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--syn-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    align-items: center;
    cursor: default;
    display: inline-flex;
    flex: 0 0 auto;
  }

  .input__prefix ::slotted(syn-icon),
  .input__suffix ::slotted(syn-icon) {
    color: var(--syn-input-icon-color);
    font-size: var(--input-icon-size);
  }

  .input__prefix ::slotted(*),
  .input__suffix ::slotted(*) {
    color: var(--syn-input-icon-color);
  }

  .input__prefix ::slotted(*) {
    margin-inline: var(--input-prefix-margin-inline);
  }

  .input__suffix ::slotted(*) {
    margin-inline: var(--input-suffix-margin-inline);
  }

  /*
   * Size modifiers
   */
  .input--small {
    --input-border-radius: var(--syn-input-border-radius-small);
    --input-clear-padding-inline-end: var(--syn-spacing-small);
    --input-clear-padding-inline-end-with-suffix: var(--syn-spacing-x-small);
    --input-clear-padding-inline-start: var(--syn-spacing-x-small);
    --input-control-height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    --input-control-padding: var(--syn-spacing-3x-small) var(--syn-input-spacing-small);
    --input-font-size: var(--syn-input-font-size-small);
    --input-height: var(--syn-input-height-small);
    --input-icon-size: var(--syn-font-size-medium);
    --input-number-divider-height: var(--syn-font-size-medium);
    --input-number-divider-margin: 0;
    --input-number-stepper-margin-inline-start: var(--syn-spacing-2x-small);
    --input-number-stepper-margin-inline-end: 0;
    --input-password-toggle-padding-inline-start: var(--syn-spacing-2x-small);
    --input-prefix-margin-inline: var(--syn-input-spacing-small) var(--syn-spacing-x-small);
    --input-suffix-margin-inline: var(--syn-spacing-x-small) var(--syn-input-spacing-small);
  }

  .input--large {
    --input-border-radius: var(--syn-input-border-radius-large);
    --input-clear-padding-inline-end: var(--syn-spacing-large);
    --input-clear-padding-inline-end-with-suffix: var(--syn-spacing-medium);
    --input-clear-padding-inline-start: var(--syn-spacing-medium);
    --input-control-height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    --input-control-padding: var(--syn-spacing-small) var(--syn-input-spacing-large);
    --input-font-size: var(--syn-input-font-size-large);
    --input-height: var(--syn-input-height-large);
    --input-icon-size: var(--syn-font-size-2x-large);
    --input-number-divider-height: var(--syn-font-size-2x-large);
    --input-number-divider-margin: 0 var(--syn-spacing-x-small);
    --input-number-stepper-margin-inline-start: 0;
    --input-number-stepper-margin-inline-end: var(--syn-spacing-x-small);
    --input-password-toggle-padding-inline-start: var(--syn-spacing-x-small);
    --input-prefix-margin-inline: var(--syn-input-spacing-large) var(--syn-spacing-medium);
    --input-suffix-margin-inline: var(--syn-spacing-medium) var(--syn-input-spacing-large);
  }

  /*
   * Clearable + Password Toggle
   */
  .input__clear,
  .input__password-toggle {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-input-icon-color);
    cursor: pointer;
    display: inline-flex;
    font-size: var(--input-icon-size);
    justify-content: center;
    padding: 0;
    padding-inline: var(--input-clear-padding-inline-start) var(--input-clear-padding-inline-end);
    transition: var(--syn-transition-fast) color;
    width: auto;
  }

  .input__clear {
    color: var(--syn-input-icon-icon-clearable-color);
  }

  .input__clear + .input__suffix ::slotted(*),
  .input__password-toggle + .input__suffix ::slotted(*) {
    margin-inline-start: 0;
  }

  .input__clear + .input__password-toggle {
    padding-left: var(--input-password-toggle-padding-inline-start);
  }

  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .input__clear:has(+ .input__password-toggle) {
    padding-right: var(--input-password-toggle-padding-inline-start);
  }


  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .form-control--has-suffix .input__clear:has(+ .input__suffix),
  .form-control--has-suffix .input__password-toggle:has(+ .input__suffix) {
    padding-right: var(--input-clear-padding-inline-end-with-suffix);
  }

  .form-control--has-prefix .input__control {
    padding-left: 0;
  }

  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .form-control--has-suffix .input__control,
  .input:has(.input__clear) .input__control,
  .input:has(.input__password-toggle) .input__control {
    padding-right: 0;
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

  /**
   * Min-width size adjusted for each size so 2 full digits are shown for type number.
   */
  :host([size='small'][type='number']:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-small) * 8.3);
  }

  :host([size='medium'][type='number']:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-medium) * 9.4);
  }

  :host([size='large'][type='number']:not([no-spin-buttons])) {
    min-width: calc(var(--syn-input-font-size-large) * 10);
  }

  :host([type='number']) .input--large:not(.input--no-spin-buttons) .input__clear,
  :host([type='number']) .input--large:not(.input--no-spin-buttons) .input__password-toggle {
    padding-right: var(--syn-spacing-medium);
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

  /** Number stepper */
  .input__number-stepper {
    align-items: center;
    display: flex;
    margin-inline: var(--input-number-stepper-margin-inline-start) var(--input-number-stepper-margin-inline-end);
  }

  /** Number stepper buttons */
  .input__number-stepper-button {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-interactive-emphasis-color);
    cursor: pointer;
    display: flex;
    font-size: var(--input-icon-size);
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .input__number-stepper-button:hover:not([disabled]) {
    color: var(--syn-interactive-emphasis-color-hover);
  }

  .input__number-stepper-button:active:not([disabled]) {
    color: var(--syn-interactive-emphasis-color-active);
  }

  .input__number-stepper-button[disabled] {
    color: var(--syn-color-neutral-400);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  /** Number stepper divider */
  .input__number-divider {
    height: var(--input-number-divider-height);
    margin: var(--input-number-divider-margin);
  }
`})))()}var Y;function X(){return(X=e((()=>{Y=(e,t,n={})=>{let{maximumFractionDigits:r,minimumFractionDigits:i,...a}=n,o=(t===`any`||!t?1:+t).toString().split(`.`)[1]?.length||0,s,c,l=typeof i==`number`,u=typeof r==`number`;return l&&!u?(s=i,c=i):u&&!l?(s=r,c=r):l&&u&&(s=Math.min(i,r),c=Math.max(i,r)),o>(s||0)&&(s=o),o>(c||0)&&(c=o),s!==void 0&&s>100&&(s=100),c!==void 0&&c>100&&(c=100),new Intl.NumberFormat(`en-US`,{maximumFractionDigits:c,minimumFractionDigits:s,useGrouping:!1,...a}).format(e)}})))()}var Z,Q;function $(){return($=e((()=>{S(),H(),C(),T(),a(),b(),L(),te(),g(),m(),B(),p(),O(),R(),K(),J(),A(),X(),P(),Z=class extends _{constructor(...e){super(...e),this.formControlController=new w(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new E(this,`help-text`,`label`,`prefix`,`suffix`),this.localize=new ee(this),this.hasFocus=!1,this.title=``,this.__numberInput=Object.assign(document.createElement(`input`),{type:`number`}),this.__dateInput=Object.assign(document.createElement(`input`),{type:`date`}),this.type=`text`,this.name=``,this.value=``,this.defaultValue=``,this.size=`medium`,this.label=``,this.helpText=``,this.clearable=!1,this.disabled=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.#e=j}static{this.styles=[u,V,q]}static{this.dependencies={"syn-icon":k,"syn-divider":z}}#e;set numericStrategy(e){switch(typeof e){case`string`:this.#e=e===`modern`?j:N;break;case`object`:this.#e=M(e);break;default:this.#e=N}}get numericStrategy(){return this.#e}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleStep(){this.handleInput(),this.input.focus()}handleStepUp(){this.stepUp(),this.handleStep()}handleStepDown(){this.stepDown(),this.handleStep()}isDecrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.min===void 0||this.min===null)return!1;let e=typeof this.min==`string`?parseFloat(this.min):this.min;return parseFloat(this.value)<=e}isIncrementDisabled(){if(this.disabled||this.readonly)return!0;if(this.max===void 0||this.max===null)return!1;let e=typeof this.max==`string`?parseFloat(this.max):this.max;return parseFloat(this.value)>=e}handleNumericStrategyAutoClamp(){let{valueAsNumber:e,max:t,min:n}=this;if(!this.#e.autoClamp)return{eventObj:null,shouldClamp:!1,nextValue:e};let r=typeof n==`string`?parseFloat(n):n,i=typeof t==`string`?parseFloat(t):t,a=e,o=``;a<r?(a=r,o=`min`):a>i&&(a=i,o=`max`);let s=o?{detail:{clampedTo:o,lastUserValue:e}}:null;return{eventObj:s,shouldClamp:!!s,nextValue:a}}handleChange(){if(this.type===`number`&&(this.#n()||this.#e.autoClamp)){let{eventObj:e,shouldClamp:t,nextValue:n}=this.handleNumericStrategyAutoClamp(),r=this.#e.autoClamp?n:this.valueAsNumber;if(isNaN(r)){let{max:e,min:t}=this;r=e==null?t==null?0:typeof t==`string`?parseFloat(t):+t:typeof e==`string`?parseFloat(e):+e}this.value=this.#n()?this.#t(r):r.toString(),this.updateComplete.then(()=>{t&&e&&this.emit(`syn-clamp`,e),this.formControlController.updateValidity(),this.emit(`syn-change`)});return}this.value=this.input.value,this.emit(`syn-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`syn-clear`),this.emit(`syn-input`),this.emit(`syn-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){if(this.#e.noStepAlign&&this.type===`number`){let{key:t}=e;if(t===`ArrowUp`||t===`ArrowDown`){e.preventDefault(),e.stopPropagation(),t===`ArrowUp`?this.handleStepUp():t===`ArrowDown`&&this.handleStepDown(),this.handleChange();return}}let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.#e.noStepValidation||(this.input.step=String(this.step),this.formControlController.updateValidity())}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){if(this.#e.noStepAlign){let{max:e,step:t,valueAsNumber:n}=this,r=Number.isNaN(n)?0:n,i=typeof this.min==`string`?parseFloat(this.min):this.min,a=typeof e==`string`?parseFloat(e):e,o=r+(t==null||t===`any`?1:typeof t==`number`?t:parseFloat(t));typeof a==`number`&&a<o?o=a:typeof i==`number`&&i>o&&(o=i);let s=this.#n()?this.#t(o):o.toString();this.input.value=s,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){if(this.#e.noStepAlign){let{min:e,max:t,step:n,valueAsNumber:r}=this,i=Number.isNaN(r)?0:r,a=typeof e==`string`?parseFloat(e):e,o=typeof t==`string`?parseFloat(t):t,s=i-(n==null||n===`any`?1:typeof n==`number`?n:parseFloat(n));typeof a==`number`&&a>s?s=a:typeof o==`number`&&o<s&&(s=o);let c=this.#n()?this.#t(s):s.toString();this.input.value=c,this.value!==this.input.value&&(this.value=this.input.value);return}this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}#t(e){return Y(e,this.step,{maximumFractionDigits:this.maxFractionDigits,minimumFractionDigits:this.minFractionDigits,...this.numberFormatterOptions})}#n(){let{numberFormatterOptions:e,maxFractionDigits:t,minFractionDigits:n,step:r}=this;return t!==void 0&&!Number.isNaN(t)||n!==void 0&&!Number.isNaN(n)||typeof e==`object`||((r===`any`||!r?1:+r).toString().split(`.`)[1]?.length||0)>0}render(){let e=this.hasSlotController.test(`label`),n=this.hasSlotController.test(`help-text`),r=this.hasSlotController.test(`prefix`),i=this.hasSlotController.test(`suffix`),a=this.label?!0:!!e,o=this.helpText?!0:!!n,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return t`
      <div
        part="form-control"
        class=${x({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":a,"form-control--has-help-text":o,"form-control--has-prefix":r,"form-control--has-suffix":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${a?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${x({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${y(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              min=${y(this.min)}
              max=${y(this.max)}
              step=${y(this.#e.noStepValidation?`any`:this.step)}
              .value=${I(this.value)}
              autocapitalize=${y(this.autocapitalize)}
              autocomplete=${y(this.autocomplete)}
              autocorrect=${y(this.autocorrect?void 0:`off`)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${y(this.pattern)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?t`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <syn-icon name="x-circle-fill" library="system"></syn-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?t`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?t`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:t`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>

            ${this.type===`number`&&!this.noSpinButtons?t`
              <div part="stepper" class="input__number-stepper">
                <button
                  part="decrement-number-stepper"
                  class="input__number-stepper-button"
                  type="button"
                  ?disabled=${this.isDecrementDisabled()}
                  aria-hidden="true"
                  ${G({start:()=>this.handleStepDown(),end:()=>this.handleChange()})}
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
                  ${G({start:()=>this.handleStepUp(),end:()=>this.handleChange()})}
                  tabindex="-1"
                >
                  <slot name="increment-number-stepper">
                    <syn-icon name="add" library="system"></syn-icon>
                  </slot>
                </button>
              </div>
                `:``}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}},h([v(`.input__control`)],Z.prototype,`input`,void 0),h([f()],Z.prototype,`hasFocus`,void 0),h([d({reflect:!0})],Z.prototype,`title`,void 0),h([d({reflect:!0})],Z.prototype,`type`,void 0),h([d()],Z.prototype,`name`,void 0),h([d()],Z.prototype,`value`,void 0),h([U()],Z.prototype,`defaultValue`,void 0),h([d({reflect:!0})],Z.prototype,`size`,void 0),h([d()],Z.prototype,`label`,void 0),h([d({attribute:`help-text`})],Z.prototype,`helpText`,void 0),h([d({type:Boolean})],Z.prototype,`clearable`,void 0),h([d({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),h([d()],Z.prototype,`placeholder`,void 0),h([d({type:Boolean,reflect:!0})],Z.prototype,`readonly`,void 0),h([d({attribute:`password-toggle`,type:Boolean})],Z.prototype,`passwordToggle`,void 0),h([d({attribute:`password-visible`,type:Boolean})],Z.prototype,`passwordVisible`,void 0),h([d({attribute:`no-spin-buttons`,type:Boolean,reflect:!0})],Z.prototype,`noSpinButtons`,void 0),h([d({reflect:!0})],Z.prototype,`form`,void 0),h([d({type:Boolean,reflect:!0})],Z.prototype,`required`,void 0),h([d()],Z.prototype,`pattern`,void 0),h([d({type:Number})],Z.prototype,`minlength`,void 0),h([d({type:Number})],Z.prototype,`maxlength`,void 0),h([d()],Z.prototype,`min`,void 0),h([d()],Z.prototype,`max`,void 0),h([d()],Z.prototype,`step`,void 0),h([d()],Z.prototype,`autocapitalize`,void 0),h([d({attribute:`autocorrect`,reflect:!0,converter:{fromAttribute:e=>e===``||e===`on`,toAttribute:e=>e?`on`:`off`},type:Boolean})],Z.prototype,`autocorrect`,void 0),h([d()],Z.prototype,`autocomplete`,void 0),h([d({type:Boolean})],Z.prototype,`autofocus`,void 0),h([d()],Z.prototype,`enterkeyhint`,void 0),h([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Z.prototype,`spellcheck`,void 0),h([d()],Z.prototype,`inputmode`,void 0),h([d({attribute:!1,reflect:!1,type:Object})],Z.prototype,`numberFormatterOptions`,void 0),h([d({attribute:`min-fraction-digits`,type:Number})],Z.prototype,`minFractionDigits`,void 0),h([d({attribute:`max-fraction-digits`,type:Number})],Z.prototype,`maxFractionDigits`,void 0),h([d({attribute:`numeric-strategy`,converter:{fromAttribute:e=>e===`modern`?j:N},type:Object})],Z.prototype,`numericStrategy`,null),h([D(`disabled`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleDisabledChange`,null),h([D(`step`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleStepChange`,null),h([D(`value`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleValueChange`,null),Z=h([F(`SynInput`)],Z),Q=Z})))()}export{Q as n,$ as t};