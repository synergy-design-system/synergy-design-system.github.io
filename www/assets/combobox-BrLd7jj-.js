import{e as x}from"./class-map-tCdrnRnY.js";import{j as z,o as k,x as u,B as F}from"./iframe-QvwQQzd-.js";import{c as T,n as r,S as $}from"./synergy-element-CF4goCtz.js";import{S as D,r as d}from"./icon.component-DyEwYD3D.js";import{a as c}from"./query-DAIS6qJ0.js";import{s as L,a as g,g as v,b as _}from"./animation-registry-l4L8bmT6.js";import{d as A}from"./default-value-CnQ1kHk0.js";import{F as E}from"./form-d9hCJUdr.js";import{H as P}from"./slot-9EVoRGQc.js";import{L as U}from"./localize-Dh03wnLC.js";import{w as f}from"./event-B0iVuGLD.js";import{w as b}from"./watch-CEsCE2EF.js";import{f as M,a as R}from"./form-control.custom.styles-CBjqzf0a.js";import{S as N}from"./popup.component-Dfqzuy6H.js";import{s as B,S as H}from"./option-DOQki2tT.js";import{s as K}from"./scroll-DgKSCJoS.js";import{e as W}from"./decorator-DANECR0-.js";const j=z`
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


  /** #429: Use token for opacity */
  .combobox--standard.combobox--disabled .combobox__inputs {
    opacity: var(--syn-input-disabled-opacity);
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
   * Scoped to when placeholder is not visible to not break the placeholder visualization
   */
  :host([multiple]) :not(.combobox--placeholder-visible) > .combobox__inputs > .combobox__tags {
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
`,Q=z`
  .combobox:not(.combobox--disabled) .combobox__display-input {
    cursor: text;
  }

  .listbox__options ::slotted(syn-option[hidden]), 
  .listbox__options ::slotted(syn-optgroup[hidden]) {
    display: none;
  }

  .listbox__no-results {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    font: var(--syn-body-medium-regular);
    padding: var(--syn-spacing-small) var(--syn-spacing-medium) var(--syn-spacing-small) 52px;
  }

  .combobox--small .listbox__no-results {
    font-size: var(--syn-input-font-size-small);
    min-height: var(--syn-input-height-small);
    padding: 0 var(--syn-spacing-small) 0 40px;
  }

  .combobox--large .listbox__no-results {
    font-size: var(--syn-input-font-size-large);
    min-height: var(--syn-input-height-large);
    padding: 0 var(--syn-spacing-large) 0 68px;
  }

  ${B}
`,O=t=>Array.from(t.assignedElements({flatten:!0})),G=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:Array.from(t.querySelectorAll(":scope > syn-option")),q=t=>t.tagName.toLocaleLowerCase()==="syn-optgroup",w=t=>t.map(G),J=t=>t.filter(q),C=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),S=t=>{const e=document.createElement("div");return F(t,e),e.firstElementChild},y=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:void 0,X=t=>{if(t){if(t instanceof HTMLElement)return y(t);if(typeof t=="string"){const e=u`${k(t)}`,o=S(e);return y(o)}if(Object.prototype.hasOwnProperty.call(t,"_$litType$")){const e=S(t);return y(e)}}},h=t=>{const{value:e}=t;return e==null||e===""?t.getTextLabel():e},Y=(t,e)=>{if(!e||!t)return!1;const o=e.value,i=e.getTextLabel();return t===o||t===i},Z=t=>t,gt=(t,e)=>{if(!e)return t;const o=t.cloneNode(!0),i=o.getTextLabel(),a=i.toLowerCase().indexOf(e.toLowerCase()),l=o.innerHTML.indexOf(i),p=document.createElement("mark");p.textContent=i.slice(a,a+e.length),p.classList.add("syn-highlight-style");const m=i.replace(new RegExp(e,"i"),p.outerHTML),I=o.innerHTML.slice(0,l),V=o.innerHTML.slice(l+i.length);return o.innerHTML=I.concat(m,V),o};var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,n=(t,e,o,i)=>{for(var a=i>1?void 0:i?et(e,o):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(a=(i?p(e,o,a):p(a))||a);return i&&a&&tt(e,o,a),a};let s=class extends ${constructor(){super(...arguments),this.formControlController=new E(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new P(this,"help-text","label"),this.localize=new U(this),this.isOptionRendererTriggered=!1,this.isInitialized=!1,this.hasFocus=!1,this.isUserInput=!1,this.displayLabel="",this.numberFilteredOptions=0,this.cachedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.restricted=!1,this.getOption=Z,this.filter=(t,e)=>{let o=t?.textContent||"";t instanceof H&&(o=t.getTextLabel());const i=C(o),a=C(e);return i.includes(a)?!0:t?.value===e},this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{if(t.target.closest(".combobox__clear")===null){if(t.key==="Escape"&&(this.open&&!this.closeWatcher?(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||this.clearCombobox()),t.key==="Enter"){const i=this.getCurrentOption(),a=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;if(!this.open&&!a){setTimeout(()=>{t.defaultPrevented||this.formControlController.submit()});return}if(!this.open||i&&i.disabled)return;if(i){const l=this.lastOption?h(this.lastOption):void 0;this.updateSelectedOptionsCacheAndValue(i),this.value!==l&&(this.setSelectedOptionToSelected(),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),this.open||this.show(),this.selectNextOption(t.key==="ArrowDown")),["Home","End"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),t.key==="Home"?this.displayInput.setSelectionRange(0,0):t.key==="End"&&this.displayInput.setSelectionRange(this.displayInput.value.length,this.displayInput.value.length))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}willUpdate(t){super.willUpdate(t),!this.isInitialized&&!this.defaultValue&&this.value&&(this.defaultValue=this.value)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){if(this.disabled)return;const e=()=>this.open?this.hide():this.show();t.preventDefault(),e().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(t){t.key!=="Tab"&&this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.clearCombobox()}clearCombobox(){this.value!==""&&(this.value="",this.displayInput.value="",this.lastOption=void 0,this.updateSelectedOptionsCacheAndValue(void 0),this.displayInput.focus({preventScroll:!0}),this.setSelectedOptionToSelected(),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("syn-option"),i=this.lastOption?h(this.lastOption):void 0;o&&!o.disabled&&(this.updateSelectedOptionsCacheAndValue(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&(this.setSelectedOptionToSelected(),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})),this.hide(),this.displayInput.focus({preventScroll:!0}))}selectNextOption(t){const e=this.getAllFilteredOptions();if(e.length===0)return;const o=this.getCurrentOption(),i=e.indexOf(o);let a=Math.max(0,i);if(t){const l=i+1;a=l>e.length-1?0:l}else{const l=i-1;a=l<0?e.length-1:l}this.setCurrentOption(e[a]),K(this.getCurrentOption(),this.listbox,"vertical","auto")}getAllFilteredOptions(){return this.getSlottedOptions().filter(t=>!t.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(t=>t.current)}setCurrentOption(t){const e=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),e.forEach(o=>{o.current=!1,o.setAttribute("aria-selected","false")}),t&&(t.current=!0,t.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",t.id))}updateSelectedOptionsCacheAndValue(t){this.selectedOption=t;let e;if(t)this.lastOption=t,e=String(h(t));else if(this.restricted&&!this.isValidValue()&&this.value!==""&&!this.isUserInput){this.resetToLastValidValue();return}this.value=e??this.displayInput.value,this.updateComplete.then(()=>{this.displayLabel=this.selectedOption?.getTextLabel()??this.displayInput.value,this.formControlController.updateValidity()})}setSelectedOptionToSelected(){this.getSlottedOptions().forEach(e=>{e.selected=!1}),this.selectedOption&&(this.selectedOption.selected=!0)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.value)}handleDisabledChange(){this.formControlController.setValidity(this.disabled),this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){this.updateSelectedOptionFromValue(),this.setCurrentOption(null)}async handleOpenChange(){if(this.open&&!this.disabled){if(this.numberFilteredOptions===0&&!this.restricted){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await g(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=v(this,"combobox.show",{dir:this.localize.dir()});await _(this.popup.popup,o,i),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await g(this);const{keyframes:t,options:e}=v(this,"combobox.hide",{dir:this.localize.dir()});await _(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Promise.race([f(this,"syn-after-show"),f(this,"syn-error")])}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,f(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(t){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(o=>{const i=this.cachedOptions.find(m=>m.id===o.id)||o,a=this.getOption(i,t);let l=X(a);l||(l=i);const p=!(this.filter(l,t)||t==="");l.hidden=p,o.replaceWith(l),p||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(o=>{const a=w(Array.from(o.children)).flat().some(l=>!l.hidden);return o.hidden=!a,a})[0]?.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1},0)}async handleInput(){const t=this.displayInput.value,e=this.lastOption;this.isUserInput=!0,this.value=t,await this.updateComplete,this.isUserInput=!1,this.lastOption=e,this.open=this.restricted||this.numberFilteredOptions>0,this.selectedOption=void 0,this.formControlController.updateValidity(),this.emit("syn-input")}isValidValue(){return this.cachedOptions.some(e=>h(e)===this.value)}getOptionFromValue(){return this.cachedOptions.find(t=>Y(this.value,t))}resetToLastValidValue(){let t="",e="";this.lastOption&&(e=String(h(this.lastOption)),t=this.lastOption.getTextLabel());const o=this.popup?.popup?.getAnimations?.()??[];(o.length?Promise.all(o.map(a=>a.playState==="finished"?Promise.resolve():new Promise(l=>{a.addEventListener("finish",()=>l(),{once:!0})}))):Promise.resolve()).then(()=>{this.value=e,this.displayInput.value=t,this.formControlController.updateValidity()})}handleChange(){if(!this.selectedOption){if(this.restricted&&!this.isValidValue()&&this.value!==""){this.resetToLastValidValue();return}this.value=this.displayInput.value,this.lastOption=this.getOptionFromValue(),this.selectedOption=this.getOptionFromValue(),this.updateComplete.then(()=>{this.formControlController.updateValidity()}),this.setSelectedOptionToSelected(),this.emit("syn-change")}}getSlottedOptions(){return w(O(this.defaultSlot)).flat()}getSlottedOptGroups(){return J(O(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const t=this.getSlottedOptions(),e=this.getSlottedOptGroups();t.forEach((o,i)=>{o.id=o.id||`syn-combobox-option-${i}`}),e.forEach((o,i)=>{o.id=o.id||`syn-combobox-optgroup-${i}`}),this.cachedOptions=[...t]}updateSelectedOptionFromValue(){const t=this.getOptionFromValue();t||(this.displayInput.value=this.value),this.updateSelectedOptionsCacheAndValue(t),this.createComboboxOptionsFromQuery(this.value)}handleDefaultSlotChange(){const e=this.getSlottedOptions().length,o=this.cachedOptions.length;if(!this.isOptionRendererTriggered||o!==e){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleDefaultSlotChange());return}this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue(),this.hasFocus&&this.value.length>0&&!this.open&&this.show()}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&this.value.length>0,l=this.placeholder&&this.value.length===0;return u`
      <div
        part="form-control"
        class=${x({"form-control":!0,"form-control--has-help-text":i,"form-control--has-label":o,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
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
            class=${x({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--open":this.open,"combobox--placeholder-visible":l,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--top":this.placement==="top"})}
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
       
              ${a?u`
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
                ${this.numberFilteredOptions===0?u`<span
                      class="listbox__no-results"
                      aria-hidden="true"
                      part="no-results"
                      >${this.localize.term("noResults")}</span
                    >`:""}
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
    `}};s.styles=[T,M,j,R,Q];s.dependencies={"syn-icon":D,"syn-popup":N};n([c(".combobox")],s.prototype,"popup",2);n([c(".combobox__inputs")],s.prototype,"combobox",2);n([c(".combobox__display-input")],s.prototype,"displayInput",2);n([c(".combobox__value-input")],s.prototype,"valueInput",2);n([c(".combobox__listbox")],s.prototype,"listbox",2);n([c("slot:not([name])")],s.prototype,"defaultSlot",2);n([d()],s.prototype,"hasFocus",2);n([d()],s.prototype,"isUserInput",2);n([d()],s.prototype,"displayLabel",2);n([d()],s.prototype,"selectedOption",2);n([d()],s.prototype,"numberFilteredOptions",2);n([d()],s.prototype,"cachedOptions",2);n([r()],s.prototype,"name",2);n([r()],s.prototype,"value",2);n([A()],s.prototype,"defaultValue",2);n([r({reflect:!0})],s.prototype,"size",2);n([r()],s.prototype,"placeholder",2);n([r({reflect:!0,type:Boolean})],s.prototype,"disabled",2);n([r({type:Boolean})],s.prototype,"clearable",2);n([r({reflect:!0,type:Boolean})],s.prototype,"open",2);n([r({type:Boolean})],s.prototype,"hoist",2);n([r()],s.prototype,"label",2);n([r({reflect:!0})],s.prototype,"placement",2);n([r({attribute:"help-text"})],s.prototype,"helpText",2);n([r({reflect:!0})],s.prototype,"form",2);n([r({reflect:!0,type:Boolean})],s.prototype,"required",2);n([r({reflect:!0,type:Boolean})],s.prototype,"restricted",2);n([r()],s.prototype,"getOption",2);n([r()],s.prototype,"filter",2);n([b(["filter","getOption"],{waitUntilFirstUpdate:!0})],s.prototype,"handlePropertiesChange",1);n([b("disabled",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisabledChange",1);n([b("value",{waitUntilFirstUpdate:!0})],s.prototype,"handleValueChange",1);n([b("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);s=n([W("SynCombobox")],s);L("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});L("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});s.define("syn-combobox");export{gt as h};
