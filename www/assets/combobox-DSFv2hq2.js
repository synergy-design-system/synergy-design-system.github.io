import{e as g}from"./class-map-w4AcnhbO.js";import{j as D,o as F,c as p,H}from"./iframe-BF3kHbTn.js";import{c as E,n as r,S as U}from"./synergy-element-D2l-m579.js";import{S as R,r as d}from"./icon.component-QU43wL0d.js";import{a as u}from"./query-D0jTsbLw.js";import{s as $,a as C,g as _,b as w}from"./animation-registry-DyRYqZdt.js";import{F as M}from"./form-d9hCJUdr.js";import{H as P}from"./slot-9EVoRGQc.js";import{L as N}from"./localize-Dh03wnLC.js";import{w as v}from"./event-B0iVuGLD.js";import{w as m}from"./watch-CEsCE2EF.js";import{f as B}from"./form-control.styles-DFi38fbk.js";import{S as j}from"./popup.component-B6WYlp6Y.js";import{s as W,S as V,c as y,i as S}from"./option-CARz4VuF.js";import{S as K}from"./tag.component-cvdyIpaZ.js";import{s as Q}from"./scroll-DgKSCJoS.js";import{e as G}from"./decorator-UnohHU6S.js";const q=D`
  /* stylelint-disable property-no-vendor-prefix */
  /* stylelint-disable no-descending-specificity */
  :host {
    /* Size-dependent CSS custom properties - defaults to medium */
    --syn-combobox-input-border-radius: var(--syn-input-border-radius-medium);
    --syn-combobox-input-font-size: var(--syn-input-font-size-medium);
    --syn-combobox-input-height: var(--syn-input-height-medium);
    --syn-combobox-input-spacing: var(--syn-input-spacing-medium);
    --syn-combobox-clear-font-size: var(--syn-spacing-large);
    --syn-combobox-clear-margin: var(--syn-spacing-small);
    --syn-combobox-prefix-suffix-margin: var(--syn-input-spacing-small);
    --syn-combobox-icon-font-size: var(--syn-font-size-x-large);
    --syn-combobox-expand-icon-font-size: var(--syn-spacing-large);
    --syn-combobox-tags-gap: var(--syn-spacing-x-small);
    --syn-combobox-tags-margin: var(--syn-input-spacing-small);
    --syn-combobox-no-results-font-size: var(--syn-input-font-size-medium);
    --syn-combobox-no-results-height: var(--syn-input-height-medium);
    --syn-combobox-no-results-padding: var(--syn-spacing-small) var(--syn-spacing-medium) var(--syn-spacing-small) 52px;

    display: block;   
  }

  /** The popup */
  .combobox {
    display: inline-flex;
    flex: 1 1 auto;
    position: relative;
    vertical-align: middle;
    width: 100%;
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
    align-items: center;
    border-radius: var(--syn-combobox-input-border-radius);
    cursor: pointer;
    display: flex;
    flex: 1;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-combobox-input-font-size);
    font-weight: var(--syn-input-font-weight);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    min-height: var(--syn-combobox-input-height);
    min-width: 0;
    overflow: hidden;
    padding-block: 0;
    padding-inline: var(--syn-combobox-input-spacing);
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
  }

  .combobox__display-input {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: var(--syn-input-color);
    cursor: inherit;
    flex: 1;
    font: inherit;
    margin: 0;
    min-width: var(--syn-spacing-2x-large);
    overflow: hidden;
    padding: 0;
    position: relative;
    width: unset;
  }

  .combobox__display-input::placeholder {
    color: var(--syn-input-placeholder-color);
  }

  .combobox__display-input:focus {
    outline: none;
  }

  .combobox:not(.combobox--disabled):not(.combobox--readonly) .combobox__display-input {
    cursor: text;
  }

  .combobox:not(.combobox--disabled):hover:not(.combobox--readonly) .combobox__display-input {
    color: var(--syn-input-color-hover);
  }

  .combobox__value-input {
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
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
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /** #429: Use token for opacity */
    outline: none;
  }

  /* Change combobox border on hover */
  .combobox:not(.combobox--disabled):not(.combobox--readonly):hover .combobox__inputs {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Size variants */
  .combobox--small {
    --syn-combobox-input-border-radius: var(--syn-input-border-radius-small);
    --syn-combobox-input-font-size: var(--syn-input-font-size-small);
    --syn-combobox-input-height: var(--syn-input-height-small);
    --syn-combobox-input-spacing: var(--syn-input-spacing-small);
    --syn-combobox-clear-font-size: var(--syn-spacing-medium);
    --syn-combobox-clear-margin: var(--syn-input-spacing-small);
    --syn-combobox-prefix-suffix-margin: var(--syn-spacing-x-small);
    --syn-combobox-icon-font-size: var(--syn-font-size-medium);
    --syn-combobox-expand-icon-font-size: var(--syn-spacing-medium);
    --syn-combobox-tags-gap: var(--syn-spacing-2x-small);
    --syn-combobox-tags-margin: var(--syn-spacing-x-small);
    --syn-combobox-no-results-font-size: var(--syn-input-font-size-small);
    --syn-combobox-no-results-height: var(--syn-input-height-small);
    --syn-combobox-no-results-padding: 0 var(--syn-spacing-small) 0 40px;
  }

  .combobox--large {
    --syn-combobox-input-border-radius: var(--syn-input-border-radius-large);
    --syn-combobox-input-font-size: var(--syn-input-font-size-large);
    --syn-combobox-input-height: var(--syn-input-height-large);
    --syn-combobox-input-spacing: var(--syn-input-spacing-large);
    --syn-combobox-clear-font-size: var(--syn-spacing-x-large);
    --syn-combobox-clear-margin: var(--syn-input-spacing-large);
    --syn-combobox-prefix-suffix-margin: var(--syn-input-spacing-medium);
    --syn-combobox-icon-font-size: var(--syn-font-size-2x-large);
    --syn-combobox-expand-icon-font-size: var(--syn-spacing-x-large);
    --syn-combobox-tags-gap: var(--syn-spacing-small);
    --syn-combobox-tags-margin: var(--syn-input-spacing-medium);
    --syn-combobox-no-results-font-size: var(--syn-input-font-size-large);
    --syn-combobox-no-results-height: var(--syn-input-height-large);
    --syn-combobox-no-results-padding: 0 var(--syn-spacing-large) 0 68px;
  }

  /* Prefix and Suffix */
  .combobox__prefix,
  .combobox__suffix {
    align-items: center;
    color: var(--syn-input-icon-color);
    display: inline-flex;
    flex: 0;
  }

  .combobox__prefix::slotted(*) {
    margin-inline-end: var(--syn-combobox-prefix-suffix-margin);
  }

  .combobox__suffix::slotted(*) {
    margin-inline-start: var(--syn-combobox-prefix-suffix-margin);
  }

  .combobox__suffix::slotted(syn-icon),
  .combobox__prefix::slotted(syn-icon) {
    font-size: var(--syn-combobox-icon-font-size);
  }

  /* Clear button */
  .combobox__clear {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-input-icon-icon-clearable-color);
    cursor: pointer;
    display: inline-flex;
    font-size: var(--syn-combobox-clear-font-size);
    justify-content: center;
    margin-inline-start: var(--syn-combobox-clear-margin);
    padding: 0;
    transition: var(--syn-transition-fast) color;
  }

  .combobox__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .combobox__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .combobox__expand-icon {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-combobox-expand-icon-font-size);
    margin-inline-start: var(--syn-spacing-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .combobox--open .combobox__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .combobox__listbox {
    background: var(--syn-panel-background-color);
    border: solid var(--syn-panel-border-width) var(--syn-panel-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    box-shadow: var(--syn-shadow-medium);
    display: block;
    font-family: var(--syn-font-sans);
    font-size: var(--syn-font-size-medium);
    font-weight: var(--syn-font-weight-normal);
    max-height: var(--auto-size-available-height); /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    overflow: auto;
    overscroll-behavior: none;
    padding-block: var(--syn-spacing-x-small);
    padding-inline: 0;
    position: relative;   
  }

  .combobox__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .combobox__listbox ::slotted(small) {
    color: var(--syn-color-neutral-500);
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }

  /* Multi Select */
  .combobox__tags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--syn-combobox-tags-gap);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .combobox__tags::slotted(syn-tag) {
    cursor: pointer !important;
  }

  .combobox--disabled .combobox__tags,
  .combobox--disabled .combobox__tags::slotted(syn-tag) {
    cursor: not-allowed !important;
  }

  .combobox--tags-visible .combobox__tags {
    margin-inline-end: var(--syn-combobox-tags-margin);
  }

  .listbox__options ::slotted(syn-option[hidden]), 
  .listbox__options ::slotted(syn-optgroup[hidden]) {
    display: none;
  }

  .listbox__no-results {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    font-size: var(--syn-combobox-no-results-font-size);
    font-weight: var(--syn-font-weight-normal);
    min-height: var(--syn-combobox-no-results-height);
    padding: var(--syn-combobox-no-results-padding);
  }

  /**
   * #850: Allow to measure the size of the combobox.
   * This is needed so we can automatically size and truncate the tags in the <syn-combobox multiple> component.
   * Scoped to multiple to not break the single select per accident.
   * Scoped to when placeholder is not visible to not break the placeholder visualization
   */
  :host([multiple]) :not(.combobox--placeholder-visible).combobox--tags-visible > .combobox__inputs > .combobox__tags {
    min-width: 85px;
    overflow: hidden;
  }

  :host([multiple]) .combobox__tags > div {
    display: contents;
  }

  :host([multiple]) .combobox__tags > div > syn-tag {
    --syn-tag-position-adjustment: var(--syn-spacing-3x-small);

    max-width: var(--syn-select-tag-max-width);
  }

  :host([multiple]) .combobox__tags > div > syn-tag::part(content) {
    display: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 
  This class is needed to be able to hide the options as long as the popup close animation is running.
  As otherwise the listbox would flicker because the options are shown again when the value is reset to empty string.
  */
  .options__hide {
    /* We need to set the slot to something different than display: contents to be able to hide it. Also it should not take any space so we remove the height */
    display: block;
    height: 0;
    opacity: 0;
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

  .combobox--standard:not(.combobox--disabled).combobox--open .combobox__inputs,
  .combobox--standard:not(.combobox--disabled).combobox--focused .combobox__inputs {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .combobox--standard.combobox--readonly.combobox--focused .combobox__inputs {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
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
   * #1172: Add support for readonly
   */
  .combobox--readonly .combobox__inputs {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
    cursor: default;
  }

  .combobox--readonly .combobox__expand-icon {
    color: var(--syn-readonly-icon-color-expand);
  }

  ${W}
`,z=t=>Array.from(t.assignedElements({flatten:!0})),J=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:Array.from(t.querySelectorAll(":scope > syn-option")),X=t=>t.tagName.toLocaleLowerCase()==="syn-optgroup",L=t=>t.map(J),Y=t=>t.filter(X),A=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),I=t=>{const e=document.createElement("div");return H(t,e),e.firstElementChild},x=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:void 0,Z=t=>{if(t){if(t instanceof HTMLElement)return x(t);if(typeof t=="string"){const e=p`${F(t)}`,o=I(e);return x(o)}if(Object.prototype.hasOwnProperty.call(t,"_$litType$")){const e=I(t);return x(e)}}},O=t=>{const{value:e}=t;return e==null||e===""?t.getTextLabel():e},b=t=>t.map(O),k=(t,e)=>{if(!e||t===void 0||t===null||t==="")return!1;const o=e.value,s=e.getTextLabel();return String(t)===String(o)||String(t)===s},tt=t=>t,xt=(t,e)=>{if(!e)return t;const o=t.cloneNode(!0),s=o.getTextLabel();o.selected=t.selected;const n=s.toLowerCase().indexOf(e.toLowerCase()),l=o.innerHTML.indexOf(s),h=document.createElement("mark");h.textContent=s.slice(n,n+e.length),h.classList.add("syn-highlight-style");const c=s.replace(new RegExp(e,"i"),h.outerHTML),f=o.innerHTML.slice(0,l),T=o.innerHTML.slice(l+s.length);return o.innerHTML=f.concat(c,T),o};var et=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,a=(t,e,o,s)=>{for(var n=s>1?void 0:s?ot(e,o):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(n=(s?h(e,o,n):h(n))||n);return s&&n&&et(e,o,n),n};let i=class extends U{constructor(){super(...arguments),this.formControlController=new M(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new P(this,"help-text","label"),this.localize=new N(this),this.lastOptions=[],this.isInitialized=!1,this.isOptionRendererTriggered=!1,this.hasFocus=!1,this.isUserInput=!1,this.displayLabel="",this.selectedOptions=[],this.numberFilteredOptions=0,this.cachedOptions=[],this.valueHasChanged=!1,this.hideOptions=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.restricted=!1,this.multiple=!1,this.getOption=tt,this.filter=(t,e)=>{let o=t?.textContent||"";t instanceof V&&(o=t.getTextLabel());const s=A(o),n=A(e);return s.includes(n)?!0:t?.value?.toString()===e},this.delimiter=" ",this.maxOptionsVisible=3,this.getTag=t=>p`
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
  `,this.calculateTagMaxWidth=t=>{const e=t.at(0);if(!e||!this.tagContainer)return;const o=e.contentRect.width,s=this.tagContainer.getBoundingClientRect().width,n=Math.max(85,s+o-48);this.tagContainer.style.setProperty("--syn-select-tag-max-width",`${n}px`)},this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{if(t.target.closest(".combobox__clear")===null){if(t.key==="Escape"&&(this.open&&!this.closeWatcher?(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||(this.multiple?this.clearInputField():this.clearCombobox())),t.key==="Enter"){const s=this.getCurrentOption(),n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;if(!this.open&&!n){setTimeout(()=>{t.defaultPrevented||this.formControlController.submit()});return}if(!this.open||s&&s.disabled)return;if(s){this.isUserInput=!0,this.valueHasChanged=!0;const l=this.lastOptions?b(this.lastOptions):[];this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.selectionChanged();const h=Array.isArray(this.value)?this.value:[this.value];this.updateComplete.then(()=>{this.isUserInput=!1}),y(l,h)||this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})}this.multiple||this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),this.open||this.show(),this.selectNextOption(t.key==="ArrowDown")),["Home","End"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),t.key==="Home"?this.displayInput.setSelectionRange(0,0):t.key==="End"&&this.displayInput.setSelectionRange(this.displayLabel.length,this.displayLabel.length))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?Array.isArray(t)||(t=typeof t=="string"?t.split(this.delimiter):[t].filter(S)):t=Array.isArray(t)?t.join(this.delimiter):t,!y(this._value,t)&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver||(this.resizeObserver=new ResizeObserver(this.calculateTagMaxWidth)),this.resizeObserver.observe(this.displayInput))}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{t.some(o=>{if(!(o.target instanceof V)||o.type!=="attributes"||o.attributeName!=="value")return!1;const s=o.target.getAttribute("value");return o.oldValue!==s&&!!s})&&this.handleSlotContentChange()}),this.mutationObserver.observe(this,{attributeFilter:["value"],attributeOldValue:!0,attributes:!0,childList:!0,subtree:!0}),setTimeout(()=>{this.handleSlotContentChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect(),this.removeOpenListeners()}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}updated(t){super.updated(t),t.has("multiple")&&(this.multiple?this.enableResizeObserver():this.resizeObserver?.disconnect())}willUpdate(t){super.willUpdate(t);const e=this.defaultValue==null||this.defaultValue===""||Array.isArray(this.defaultValue)&&this.defaultValue.length===0;if(t.has("value")&&e&&this.value&&!this.isUserInput&&(this.multiple&&Array.isArray(this.value)?this.defaultValue=this.value.join(this.delimiter):this.defaultValue=this.value,this.valueHasChanged=!1),!this.isInitialized&&t.has("value")&&this.value!==void 0&&t.has("multiple")&&this.multiple&&!Array.isArray(this.defaultValue)){const o=this.valueHasChanged;this.value=typeof this.defaultValue=="string"?this.defaultValue.split(this.delimiter):[this.defaultValue].filter(S),this.valueHasChanged=o}}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),t==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return p`<div @syn-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof o=="string"?F(o):o}
        </div>`}return e===this.maxOptionsVisible?p`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`:p``})}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(e,!1),this.selectionChanged(),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}handleComboboxMouseDown(t){const o=t.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="syn-icon-button");if(this.disabled||this.readonly||o)return;const s=()=>this.open?this.hide():this.show();t.preventDefault(),s().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(t){t.key!=="Tab"&&this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.clearCombobox()}clearInputField(){if(this.displayLabel!==""){const t=this.valueHasChanged;this.value=b(this.selectedOptions),this.valueHasChanged=t,this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-input")})}}clearCombobox(){this.valueHasChanged=!0,this.value!==""&&(this.value="",this.displayLabel="",this.lastOptions=[],this.setSelectedOptions([]),this.selectionChanged(),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("syn-option"),s=this.lastOptions?b(this.lastOptions):[];if(o&&!o.disabled){this.isUserInput=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.selectionChanged(),this.updateComplete.then(()=>{this.displayInput.focus({preventScroll:!0}),this.isUserInput=!1});const n=Array.isArray(this.value)?this.value:[this.value];y(s,n)||this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0}))}}selectNextOption(t){const e=this.getAllFilteredOptions();if(e.length===0)return;const o=this.getCurrentOption(),s=e.indexOf(o);let n=Math.max(0,s);if(t){const l=s+1;n=l>e.length-1?0:l}else{const l=s-1;n=l<0?e.length-1:l}this.setCurrentOption(e[n]),Q(this.getCurrentOption(),this.listbox,"vertical","auto")}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected;const o=this.cachedOptions.find(s=>s.id===t.id);o&&(o.selected=t.selected)}setSelectedOptions(t){const e=Array.isArray(t)?t:[t];!this.multiple&&e.length>1&&e.splice(1),this.getSlottedOptions().forEach(s=>{s.selected=e.some(n=>n.id===s.id)}),this.cachedOptions.forEach(s=>{s.selected=e.some(n=>n.id===s.id)})}getAllFilteredOptions(){return this.getSlottedOptions().filter(t=>!t.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(t=>t.current)}setCurrentOption(t){const e=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),e.forEach(o=>{o.current=!1,o.setAttribute("aria-selected","false")}),t&&(t.current=!0,t.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",t.id))}selectionChanged(){const t=this.getSlottedOptions();this.selectedOptions=t.filter(s=>s.selected),this.selectedOptions.length===0&&(this.displayLabel=Array.isArray(this.value)?this.value.join(", "):String(this.value));let e;const o=this.valueHasChanged;if(this.multiple){if(this.value=this.selectedOptions.map(s=>O(s)),this.value.length===0&&this.selectedOptions.length!==0){this.valueHasChanged=o,this.resetToLastValidValue();return}}else{if(this.selectedOptions.length!==0)e=O(this.selectedOptions[0]);else if(this.restricted&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==""&&!this.isUserInput){this.resetToLastValidValue(),this.valueHasChanged=o;return}this.value=e??this.displayLabel}this.valueHasChanged=o,this.lastOptions=[...this.selectedOptions],this.updateComplete.then(()=>{let s=this.displayLabel;this.multiple&&this.readonly?s=this.selectedOptions.map(n=>n.getTextLabel()).join(", "):this.multiple&&!this.readonly?s="":s=this.selectedOptions[0]?.getTextLabel()??this.displayLabel,this.displayLabel=s,this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.displayLabel),this.open&&this.updateComplete.then(()=>{this.open=this.multiple||this.restricted||this.numberFilteredOptions>0})}handleDisplayInputValueChange(){this.createComboboxOptionsFromQuery(this.displayLabel)}handleDisabledChange(){this.disabled&&this.formControlController.setValidity(this.disabled),(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange()),this.selectionChanged()}handleDelimiterChange(){this.getSlottedOptions().forEach(t=>{t.delimiter=this.delimiter})}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}this.updateSelectedOptionFromValue()}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){if(this.numberFilteredOptions===0&&!this.restricted&&!this.multiple){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await C(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:o,options:s}=_(this,"combobox.show",{dir:this.localize.dir()});await w(this.popup.popup,o,s),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await C(this);const{keyframes:t,options:e}=_(this,"combobox.hide",{dir:this.localize.dir()});await w(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,Promise.race([v(this,"syn-after-show"),v(this,"syn-error")])}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,v(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(t){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(o=>{const s=this.cachedOptions.find(c=>c.id===o.id)||o,n=this.getOption(s,t);let l=Z(n);l||(l=s);const h=!(this.filter(l,t)||t==="");l.hidden=h,o.replaceWith(l),h||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(o=>{const n=L(Array.from(o.children)).flat().some(l=>!l.hidden);return o.hidden=!n,n})[0]?.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1})}async handleInput(){const t=this.displayInput.value;this.displayLabel=t;const e=this.lastOptions;if(this.isUserInput=!0,this.multiple||(this.selectedOptions=[]),this.multiple){const o=b(this.selectedOptions);this.value=[...o,t]}else this.value=t;await this.updateComplete,this.isUserInput=!1,this.lastOptions=e,this.open=this.multiple||this.restricted||this.numberFilteredOptions>0,this.formControlController.updateValidity(),this.emit("syn-input")}isValidValue(t){return this.cachedOptions.some(o=>k(t,o))}getOptionsFromValue(){const t=this.valueHasChanged?this.value:this.defaultValue;let e;return Array.isArray(t)?e=t:t===void 0||t==null?e=[]:this.multiple&&typeof t=="string"?e=t.split(this.delimiter):e=[t],e.map(o=>this.cachedOptions.find(s=>k(o,s))).filter(o=>o!==void 0)}resetToLastValidValue(){let t="",e=[];this.lastOptions.length!==0&&(e=b(this.lastOptions),this.multiple||(t=this.lastOptions[0].getTextLabel()));const o=this.popup?.popup?.getAnimations?.()??[],s=o.length?Promise.all(o.map(l=>l.playState==="finished"?Promise.resolve():new Promise(h=>{l.addEventListener("finish",()=>h(),{once:!0})}))):Promise.resolve();this.hideOptions=!0,s.then(()=>{this.hideOptions=!1});const n=this.valueHasChanged;this.value=e,this.displayLabel=t,this.formControlController.updateValidity(),this.valueHasChanged=n}handleChange(){const t=this.selectedOptions.length!==0&&this.selectedOptions.length===this.getOptionsFromValue().length;let e;Array.isArray(this.value)?e=this.value:typeof this.value=="string"?e=this.value.split(this.delimiter):e=[this.value];const o=e.every(f=>this.isValidValue(f)),s=this.multiple&&t&&o;if(!this.multiple&&this.selectedOptions.length>0||s)return;const l=this.lastOptions?b(this.lastOptions):[];if((this.restricted||this.multiple)&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==""){this.resetToLastValidValue();return}const h=this.getOptionsFromValue();this.setSelectedOptions(h),this.selectionChanged(),this.lastOptions=[...h],this.updateComplete.then(()=>{this.formControlController.updateValidity()});const c=Array.isArray(this.value)?this.value:[this.value];y(l,c)||this.emit("syn-change")}getSlottedOptions(){return this.defaultSlot?L(z(this.defaultSlot)).flat():[]}getSlottedOptGroups(){return Y(z(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const t=this.getSlottedOptions(),e=this.getSlottedOptGroups();t.forEach((o,s)=>{o.id=o.id||`syn-combobox-option-${s}`}),e.forEach((o,s)=>{o.id=o.id||`syn-combobox-optgroup-${s}`}),this.cachedOptions=[...t]}updateSelectedOptionFromValue(){if(!this.isUserInput){const e=this.getOptionsFromValue();this.setSelectedOptions(e),this.selectionChanged()}let t="";this.multiple?t=this.displayLabel:t=Array.isArray(this.value)?this.value.join(", "):String(this.value),this.createComboboxOptionsFromQuery(t)}handleSlotContentChange(){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleSlotContentChange());return}this.handleDelimiterChange(),this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue();let t;Array.isArray(this.value)?t=this.value.length>0:typeof this.value=="string"?t=this.value.length>0:t=this.value!==void 0&&this.value!==null,this.hasFocus&&t&&!this.open&&this.show()}handleDefaultSlotChange(){this.isOptionRendererTriggered||this.handleSlotContentChange()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,s=this.helpText?!0:!!e;let n;Array.isArray(this.value)?n=this.value.length>0:typeof this.value=="string"?n=this.value.length>0:n=this.value!==void 0&&this.value!==null&&typeof this.value=="number";const l=this.clearable&&!this.disabled&&!this.readonly&&n,h=this.placeholder&&!n,c=this.multiple&&this.selectedOptions.length>0;return p`
      <div
        part="form-control"
        class=${g({"form-control":!0,"form-control--has-help-text":s,"form-control--has-label":o,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
        @click=${this.handleFormControlClick}
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
            class=${g({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--multiple":this.multiple,"combobox--open":this.open,"combobox--placeholder-visible":h,"combobox--readonly":this.readonly,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--tags-visible":c,"combobox--top":this.placement==="top"})}
            placement=${`${this.placement}-start`}
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

              ${this.multiple&&!this.readonly?p`<div part="tags" class="combobox__tags">${this.tags}</div>`:""}

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .readOnly=${this.readonly}
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
                ?readonly=${this.readonly}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value?.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${l?p`
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
              aria-multiselectable=${this.multiple?"true":"false"}
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">
                ${this.hideOptions||this.numberFilteredOptions===0?p`<span
                      class="listbox__no-results"
                      aria-hidden="true"
                      part="no-results"
                      >${this.localize.term("noResults")}</span
                    >`:""}
                <slot class=${g({options__hide:this.hideOptions})} @slotchange=${this.handleDefaultSlotChange}></slot>      
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
    `}};i.styles=[E,B,q];i.dependencies={"syn-icon":R,"syn-popup":j,"syn-tag":K};a([u(".combobox")],i.prototype,"popup",2);a([u(".combobox__inputs")],i.prototype,"combobox",2);a([u(".combobox__display-input")],i.prototype,"displayInput",2);a([u(".combobox__value-input")],i.prototype,"valueInput",2);a([u(".combobox__listbox")],i.prototype,"listbox",2);a([u("slot:not([name])")],i.prototype,"defaultSlot",2);a([u(".combobox__tags")],i.prototype,"tagContainer",2);a([d()],i.prototype,"hasFocus",2);a([d()],i.prototype,"isUserInput",2);a([d()],i.prototype,"displayLabel",2);a([d()],i.prototype,"selectedOptions",2);a([d()],i.prototype,"numberFilteredOptions",2);a([d()],i.prototype,"cachedOptions",2);a([d()],i.prototype,"valueHasChanged",2);a([d()],i.prototype,"hideOptions",2);a([r()],i.prototype,"name",2);a([d()],i.prototype,"value",1);a([r({attribute:"value"})],i.prototype,"defaultValue",2);a([r({reflect:!0})],i.prototype,"size",2);a([r()],i.prototype,"placeholder",2);a([r({reflect:!0,type:Boolean})],i.prototype,"disabled",2);a([r({reflect:!0,type:Boolean})],i.prototype,"readonly",2);a([r({type:Boolean})],i.prototype,"clearable",2);a([r({reflect:!0,type:Boolean})],i.prototype,"open",2);a([r()],i.prototype,"label",2);a([r({reflect:!0})],i.prototype,"placement",2);a([r({attribute:"help-text"})],i.prototype,"helpText",2);a([r({reflect:!0})],i.prototype,"form",2);a([r({reflect:!0,type:Boolean})],i.prototype,"required",2);a([r({reflect:!0,type:Boolean})],i.prototype,"restricted",2);a([r({reflect:!0,type:Boolean})],i.prototype,"multiple",2);a([r()],i.prototype,"getOption",2);a([r()],i.prototype,"filter",2);a([r()],i.prototype,"delimiter",2);a([r({attribute:"max-options-visible",type:Number})],i.prototype,"maxOptionsVisible",2);a([r()],i.prototype,"getTag",2);a([m(["filter","getOption"],{waitUntilFirstUpdate:!0})],i.prototype,"handlePropertiesChange",1);a([m("displayLabel",{waitUntilFirstUpdate:!0})],i.prototype,"handleDisplayInputValueChange",1);a([m(["disabled","readonly"],{waitUntilFirstUpdate:!0})],i.prototype,"handleDisabledChange",1);a([m("delimiter")],i.prototype,"handleDelimiterChange",1);a([m(["defaultValue","value","delimiter","multiple","restricted"],{waitUntilFirstUpdate:!0})],i.prototype,"handleValueChange",1);a([m("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1);i=a([G("SynCombobox")],i);$("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});i.define("syn-combobox");export{xt as h};
