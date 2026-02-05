import{e as y}from"./class-map-CVI9ScdU.js";import{q as k,o as $,x as h,H}from"./iframe-CvU34O_B.js";import{c as E,n as p,S as U}from"./synergy-element-B1F-Pf22.js";import{S as M,r as d}from"./icon.component-BGlPOzcQ.js";import{a as u}from"./query-D0jTsbLw.js";import{s as T,a as O,g as C,b as w}from"./animation-registry-l4L8bmT6.js";import{F as R}from"./form-d9hCJUdr.js";import{H as P}from"./slot-9EVoRGQc.js";import{L as N}from"./localize-Dh03wnLC.js";import{w as x}from"./event-B0iVuGLD.js";import{w as b}from"./watch-CEsCE2EF.js";import{f as B,a as W}from"./form-control.custom.styles-bVkZjL29.js";import{S as j}from"./popup.component-CVeQpAG-.js";import{s as K,S as V,c as g,i as S}from"./option-D4pPg0N7.js";import{S as Q}from"./tag.component-D2lLzb9K.js";import{s as G}from"./scroll-DgKSCJoS.js";import{e as q}from"./decorator-UnohHU6S.js";const J=k`
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
    border-color: var(--syn-input-border-color-hover);
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
    color: var(--syn-input-icon-color);
  }



  /* Listbox */
  .combobox__listbox {
    border-radius: var(--syn-input-border-radius-medium);
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
`,X=k`

  .combobox__display-input {
    flex: 1;
    min-width: var(--syn-spacing-2x-large);
    width: unset;
  }

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

  /* Multi Select */
  .combobox__tags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .combobox__tags::slotted(syn-tag) {
    cursor: pointer !important;
  }

  .combobox--disabled .combobox__tags,
  .combobox--disabled .combobox__tags::slotted(syn-tag) {
    cursor: not-allowed !important;
  }

  .combobox--small .combobox__tags {
    gap: var(--syn-spacing-2x-small);
  }

  .combobox--medium .combobox__tags {
    gap: var(--syn-spacing-x-small);
  }

  .combobox--large .combobox__tags {
    gap: var(--syn-spacing-small);
  }

  .combobox--tags-visible.combobox--small .combobox__tags {
    margin-inline-end: var(--syn-spacing-x-small);
  }

  .combobox--tags-visible.combobox--medium .combobox__tags {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .combobox--tags-visible.combobox--large .combobox__tags {
    margin-inline-end: var(--syn-input-spacing-medium);
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

  ${K}
`,L=t=>Array.from(t.assignedElements({flatten:!0})),Y=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:Array.from(t.querySelectorAll(":scope > syn-option")),Z=t=>t.tagName.toLocaleLowerCase()==="syn-optgroup",z=t=>t.map(Y),tt=t=>t.filter(Z),A=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),I=t=>{const e=document.createElement("div");return H(t,e),e.firstElementChild},v=t=>t.tagName.toLocaleLowerCase()==="syn-option"?t:void 0,et=t=>{if(t){if(t instanceof HTMLElement)return v(t);if(typeof t=="string"){const e=h`${$(t)}`,o=I(e);return v(o)}if(Object.prototype.hasOwnProperty.call(t,"_$litType$")){const e=I(t);return v(e)}}},_=t=>{const{value:e}=t;return e==null||e===""?t.getTextLabel():e},m=t=>t.map(_),F=(t,e)=>{if(!e||t===void 0||t===null||t==="")return!1;const o=e.value,i=e.getTextLabel();return String(t)===String(o)||String(t)===i},ot=t=>t,Ot=(t,e)=>{if(!e)return t;const o=t.cloneNode(!0),i=o.getTextLabel();o.selected=t.selected;const n=i.toLowerCase().indexOf(e.toLowerCase()),l=o.innerHTML.indexOf(i),r=document.createElement("mark");r.textContent=i.slice(n,n+e.length),r.classList.add("syn-highlight-style");const c=i.replace(new RegExp(e,"i"),r.outerHTML),f=o.innerHTML.slice(0,l),D=o.innerHTML.slice(l+i.length);return o.innerHTML=f.concat(c,D),o};var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,a=(t,e,o,i)=>{for(var n=i>1?void 0:i?st(e,o):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(n=(i?r(e,o,n):r(n))||n);return i&&n&&it(e,o,n),n};let s=class extends U{constructor(){super(...arguments),this.formControlController=new R(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new P(this,"help-text","label"),this.localize=new N(this),this.lastOptions=[],this.isInitialized=!1,this.isOptionRendererTriggered=!1,this.hasFocus=!1,this.isUserInput=!1,this.displayLabel="",this.selectedOptions=[],this.numberFilteredOptions=0,this.cachedOptions=[],this.valueHasChanged=!1,this.hideOptions=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.disabled=!1,this.clearable=!1,this.open=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.restricted=!1,this.multiple=!1,this.getOption=ot,this.filter=(t,e)=>{let o=t?.textContent||"";t instanceof V&&(o=t.getTextLabel());const i=A(o),n=A(e);return i.includes(n)?!0:t?.value?.toString()===e},this.delimiter=" ",this.maxOptionsVisible=3,this.getTag=t=>h`
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
  `,this.calculateTagMaxWidth=t=>{const e=t.at(0);if(!e||!this.tagContainer)return;const o=e.contentRect.width,i=this.tagContainer.getBoundingClientRect().width,n=Math.max(85,i+o-48);this.tagContainer.style.setProperty("--syn-select-tag-max-width",`${n}px`)},this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{if(t.target.closest(".combobox__clear")===null){if(t.key==="Escape"&&(this.open&&!this.closeWatcher?(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||(this.multiple?this.clearInputField():this.clearCombobox())),t.key==="Enter"){const i=this.getCurrentOption(),n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;if(!this.open&&!n){setTimeout(()=>{t.defaultPrevented||this.formControlController.submit()});return}if(!this.open||i&&i.disabled)return;if(i){this.isUserInput=!0,this.valueHasChanged=!0;const l=this.lastOptions?m(this.lastOptions):[];this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.selectionChanged();const r=Array.isArray(this.value)?this.value:[this.value];this.updateComplete.then(()=>{this.isUserInput=!1}),g(l,r)||this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")})}this.multiple||this.hide(),this.displayInput.focus({preventScroll:!0});return}["ArrowUp","ArrowDown"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),this.open||this.show(),this.selectNextOption(t.key==="ArrowDown")),["Home","End"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),t.key==="Home"?this.displayInput.setSelectionRange(0,0):t.key==="End"&&this.displayInput.setSelectionRange(this.displayLabel.length,this.displayLabel.length))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?Array.isArray(t)||(t=typeof t=="string"?t.split(this.delimiter):[t].filter(S)):t=Array.isArray(t)?t.join(this.delimiter):t,!g(this._value,t)&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver||(this.resizeObserver=new ResizeObserver(this.calculateTagMaxWidth)),this.resizeObserver.observe(this.displayInput))}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(t=>{t.some(o=>{if(!(o.target instanceof V)||o.type!=="attributes"||o.attributeName!=="value")return!1;const i=o.target.getAttribute("value");return o.oldValue!==i&&!!i})&&this.handleSlotContentChange()}),this.mutationObserver.observe(this,{attributeFilter:["value"],attributeOldValue:!0,attributes:!0,childList:!0,subtree:!0}),setTimeout(()=>{this.handleSlotContentChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect(),this.removeOpenListeners()}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}updated(t){super.updated(t),t.has("multiple")&&(this.multiple?this.enableResizeObserver():this.resizeObserver?.disconnect())}willUpdate(t){super.willUpdate(t);const e=this.defaultValue==null||this.defaultValue===""||Array.isArray(this.defaultValue)&&this.defaultValue.length===0;if(t.has("value")&&e&&this.value&&!this.isUserInput&&(this.multiple&&Array.isArray(this.value)?this.defaultValue=this.value.join(this.delimiter):this.defaultValue=this.value,this.valueHasChanged=!1),!this.isInitialized&&t.has("value")&&this.value!==void 0&&t.has("multiple")&&this.multiple&&!Array.isArray(this.defaultValue)){const o=this.valueHasChanged;this.value=typeof this.defaultValue=="string"?this.defaultValue.split(this.delimiter):[this.defaultValue].filter(S),this.valueHasChanged=o}}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),t==="value"){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return h`<div @syn-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof o=="string"?$(o):o}
        </div>`}return e===this.maxOptionsVisible?h`<syn-tag size=${this.size}>+${this.selectedOptions.length-e}</syn-tag>`:h``})}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleLabelClick(){this.displayInput.focus()}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.selectionChanged(),this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}))}handleComboboxMouseDown(t){const o=t.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="syn-icon-button");if(this.disabled||o)return;const i=()=>this.open?this.hide():this.show();t.preventDefault(),i().then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))})}handleComboboxKeyDown(t){t.key!=="Tab"&&this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.clearCombobox()}clearInputField(){if(this.displayLabel!==""){const t=this.valueHasChanged;this.value=m(this.selectedOptions),this.valueHasChanged=t,this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-input")})}}clearCombobox(){this.valueHasChanged=!0,this.value!==""&&(this.value="",this.displayLabel="",this.lastOptions=[],this.setSelectedOptions([]),this.selectionChanged(),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change")}))}preventLoosingFocus(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("syn-option"),i=this.lastOptions?m(this.lastOptions):[];if(o&&!o.disabled){this.isUserInput=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.selectionChanged(),this.updateComplete.then(()=>{this.displayInput.focus({preventScroll:!0}),this.isUserInput=!1});const n=Array.isArray(this.value)?this.value:[this.value];g(i,n)||this.updateComplete.then(()=>{this.emit("syn-input"),this.emit("syn-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0}))}}selectNextOption(t){const e=this.getAllFilteredOptions();if(e.length===0)return;const o=this.getCurrentOption(),i=e.indexOf(o);let n=Math.max(0,i);if(t){const l=i+1;n=l>e.length-1?0:l}else{const l=i-1;n=l<0?e.length-1:l}this.setCurrentOption(e[n]),G(this.getCurrentOption(),this.listbox,"vertical","auto")}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected;const o=this.cachedOptions.find(i=>i.id===t.id);o&&(o.selected=t.selected)}setSelectedOptions(t){const e=Array.isArray(t)?t:[t];!this.multiple&&e.length>1&&e.splice(1),this.getSlottedOptions().forEach(i=>{i.selected=e.some(n=>n.id===i.id)}),this.cachedOptions.forEach(i=>{i.selected=e.some(n=>n.id===i.id)})}getAllFilteredOptions(){return this.getSlottedOptions().filter(t=>!t.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(t=>t.current)}setCurrentOption(t){const e=this.getAllFilteredOptions();this.displayInput.removeAttribute("aria-activedescendant"),e.forEach(o=>{o.current=!1,o.setAttribute("aria-selected","false")}),t&&(t.current=!0,t.setAttribute("aria-selected","true"),this.displayInput.setAttribute("aria-activedescendant",t.id))}selectionChanged(){const t=this.getSlottedOptions();this.selectedOptions=t.filter(i=>i.selected),this.selectedOptions.length===0&&(this.displayLabel=Array.isArray(this.value)?this.value.join(", "):String(this.value));let e;const o=this.valueHasChanged;if(this.multiple){if(this.value=this.selectedOptions.map(i=>_(i)),this.value.length===0&&this.selectedOptions.length!==0){this.valueHasChanged=o,this.resetToLastValidValue();return}}else{if(this.selectedOptions.length!==0)e=_(this.selectedOptions[0]);else if(this.restricted&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==""&&!this.isUserInput){this.resetToLastValidValue(),this.valueHasChanged=o;return}this.value=e??this.displayLabel}this.valueHasChanged=o,this.lastOptions=[...this.selectedOptions],this.updateComplete.then(()=>{this.displayLabel=this.multiple?"":this.selectedOptions[0]?.getTextLabel()??this.displayLabel,this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.displayLabel),this.open&&this.updateComplete.then(()=>{this.open=this.multiple||this.restricted||this.numberFilteredOptions>0})}handleDisplayInputValueChange(){this.createComboboxOptionsFromQuery(this.displayLabel)}handleDisabledChange(){this.formControlController.setValidity(this.disabled),this.disabled&&(this.open=!1,this.handleOpenChange())}handleDelimiterChange(){this.getSlottedOptions().forEach(t=>{t.delimiter=this.delimiter})}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}this.updateSelectedOptionFromValue()}async handleOpenChange(){if(this.open&&!this.disabled){if(this.numberFilteredOptions===0&&!this.restricted&&!this.multiple){this.open=!1,this.emit("syn-error");return}this.emit("syn-show"),this.addOpenListeners(),await O(this),this.listbox.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=C(this,"combobox.show",{dir:this.localize.dir()});await w(this.popup.popup,o,i),this.emit("syn-after-show");return}this.setCurrentOption(null),this.displayInput.removeAttribute("aria-activedescendant"),this.emit("syn-hide"),this.removeOpenListeners(),await O(this);const{keyframes:t,options:e}=C(this,"combobox.hide",{dir:this.localize.dir()});await w(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("syn-after-hide")}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Promise.race([x(this,"syn-after-show"),x(this,"syn-error")])}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,x(this,"syn-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(t){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(o=>{const i=this.cachedOptions.find(c=>c.id===o.id)||o,n=this.getOption(i,t);let l=et(n);l||(l=i);const r=!(this.filter(l,t)||t==="");l.hidden=r,o.replaceWith(l),r||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(o=>{const n=z(Array.from(o.children)).flat().some(l=>!l.hidden);return o.hidden=!n,n})[0]?.style.setProperty("--display-divider","none"),setTimeout(()=>{this.isOptionRendererTriggered=!1})}async handleInput(){const t=this.displayInput.value;this.displayLabel=t;const e=this.lastOptions;if(this.isUserInput=!0,this.multiple||(this.selectedOptions=[]),this.multiple){const o=m(this.selectedOptions);this.value=[...o,t]}else this.value=t;await this.updateComplete,this.isUserInput=!1,this.lastOptions=e,this.open=this.multiple||this.restricted||this.numberFilteredOptions>0,this.formControlController.updateValidity(),this.emit("syn-input")}isValidValue(t){return this.cachedOptions.some(o=>F(t,o))}getOptionsFromValue(){const t=this.valueHasChanged?this.value:this.defaultValue;let e;return Array.isArray(t)?e=t:t===void 0||t==null?e=[]:this.multiple&&typeof t=="string"?e=t.split(this.delimiter):e=[t],e.map(o=>this.cachedOptions.find(i=>F(o,i))).filter(o=>o!==void 0)}resetToLastValidValue(){let t="",e=[];this.lastOptions.length!==0&&(e=m(this.lastOptions),this.multiple||(t=this.lastOptions[0].getTextLabel()));const o=this.popup?.popup?.getAnimations?.()??[],i=o.length?Promise.all(o.map(l=>l.playState==="finished"?Promise.resolve():new Promise(r=>{l.addEventListener("finish",()=>r(),{once:!0})}))):Promise.resolve();this.hideOptions=!0,i.then(()=>{this.hideOptions=!1});const n=this.valueHasChanged;this.value=e,this.displayLabel=t,this.formControlController.updateValidity(),this.valueHasChanged=n}handleChange(){const t=this.selectedOptions.length!==0&&this.selectedOptions.length===this.getOptionsFromValue().length;let e;Array.isArray(this.value)?e=this.value:typeof this.value=="string"?e=this.value.split(this.delimiter):e=[this.value];const o=e.every(f=>this.isValidValue(f)),i=this.multiple&&t&&o;if(!this.multiple&&this.selectedOptions.length>0||i)return;const l=this.lastOptions?m(this.lastOptions):[];if((this.restricted||this.multiple)&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==""){this.resetToLastValidValue();return}const r=this.getOptionsFromValue();this.setSelectedOptions(r),this.selectionChanged(),this.lastOptions=[...r],this.updateComplete.then(()=>{this.formControlController.updateValidity()});const c=Array.isArray(this.value)?this.value:[this.value];g(l,c)||this.emit("syn-change")}getSlottedOptions(){return this.defaultSlot?z(L(this.defaultSlot)).flat():[]}getSlottedOptGroups(){return tt(L(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){const t=this.getSlottedOptions(),e=this.getSlottedOptGroups();t.forEach((o,i)=>{o.id=o.id||`syn-combobox-option-${i}`}),e.forEach((o,i)=>{o.id=o.id||`syn-combobox-optgroup-${i}`}),this.cachedOptions=[...t]}updateSelectedOptionFromValue(){if(!this.isUserInput){const e=this.getOptionsFromValue();this.setSelectedOptions(e),this.selectionChanged()}let t="";this.multiple?t=this.displayLabel:t=Array.isArray(this.value)?this.value.join(", "):String(this.value),this.createComboboxOptionsFromQuery(t)}handleSlotContentChange(){if(!customElements.get("syn-option")){customElements.whenDefined("syn-option").then(()=>this.handleSlotContentChange());return}this.handleDelimiterChange(),this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue();let t;Array.isArray(this.value)?t=this.value.length>0:typeof this.value=="string"?t=this.value.length>0:t=this.value!==void 0&&this.value!==null,this.hasFocus&&t&&!this.open&&this.show()}handleDefaultSlotChange(){this.isOptionRendererTriggered||this.handleSlotContentChange()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e;let n;Array.isArray(this.value)?n=this.value.length>0:typeof this.value=="string"?n=this.value.length>0:n=this.value!==void 0&&this.value!==null&&typeof this.value=="number";const l=this.clearable&&!this.disabled&&n,r=this.placeholder&&!n,c=this.multiple&&this.selectedOptions.length>0;return h`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--has-help-text":i,"form-control--has-label":o,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small"})}
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
            class=${y({combobox:!0,"combobox--bottom":this.placement==="bottom","combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size==="large","combobox--medium":this.size==="medium","combobox--multiple":this.multiple,"combobox--open":this.open,"combobox--placeholder-visible":r,"combobox--small":this.size==="small","combobox--standard":!0,"combobox--tags-visible":c,"combobox--top":this.placement==="top"})}
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

              ${this.multiple?h`<div part="tags" class="combobox__tags">${this.tags}</div>`:""}

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
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value?.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${l?h`
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
                ${this.hideOptions||this.numberFilteredOptions===0?h`<span
                      class="listbox__no-results"
                      aria-hidden="true"
                      part="no-results"
                      >${this.localize.term("noResults")}</span
                    >`:""}
                <slot class=${y({options__hide:this.hideOptions})} @slotchange=${this.handleDefaultSlotChange}></slot>      
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
    `}};s.styles=[E,B,J,W,X];s.dependencies={"syn-icon":M,"syn-popup":j,"syn-tag":Q};a([u(".combobox")],s.prototype,"popup",2);a([u(".combobox__inputs")],s.prototype,"combobox",2);a([u(".combobox__display-input")],s.prototype,"displayInput",2);a([u(".combobox__value-input")],s.prototype,"valueInput",2);a([u(".combobox__listbox")],s.prototype,"listbox",2);a([u("slot:not([name])")],s.prototype,"defaultSlot",2);a([u(".combobox__tags")],s.prototype,"tagContainer",2);a([d()],s.prototype,"hasFocus",2);a([d()],s.prototype,"isUserInput",2);a([d()],s.prototype,"displayLabel",2);a([d()],s.prototype,"selectedOptions",2);a([d()],s.prototype,"numberFilteredOptions",2);a([d()],s.prototype,"cachedOptions",2);a([d()],s.prototype,"valueHasChanged",2);a([d()],s.prototype,"hideOptions",2);a([p()],s.prototype,"name",2);a([d()],s.prototype,"value",1);a([p({attribute:"value"})],s.prototype,"defaultValue",2);a([p({reflect:!0})],s.prototype,"size",2);a([p()],s.prototype,"placeholder",2);a([p({reflect:!0,type:Boolean})],s.prototype,"disabled",2);a([p({type:Boolean})],s.prototype,"clearable",2);a([p({reflect:!0,type:Boolean})],s.prototype,"open",2);a([p()],s.prototype,"label",2);a([p({reflect:!0})],s.prototype,"placement",2);a([p({attribute:"help-text"})],s.prototype,"helpText",2);a([p({reflect:!0})],s.prototype,"form",2);a([p({reflect:!0,type:Boolean})],s.prototype,"required",2);a([p({reflect:!0,type:Boolean})],s.prototype,"restricted",2);a([p({reflect:!0,type:Boolean})],s.prototype,"multiple",2);a([p()],s.prototype,"getOption",2);a([p()],s.prototype,"filter",2);a([p()],s.prototype,"delimiter",2);a([p({attribute:"max-options-visible",type:Number})],s.prototype,"maxOptionsVisible",2);a([p()],s.prototype,"getTag",2);a([b(["filter","getOption"],{waitUntilFirstUpdate:!0})],s.prototype,"handlePropertiesChange",1);a([b("displayLabel",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisplayInputValueChange",1);a([b("disabled",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisabledChange",1);a([b("delimiter")],s.prototype,"handleDelimiterChange",1);a([b(["defaultValue","value","delimiter","multiple","restricted"],{waitUntilFirstUpdate:!0})],s.prototype,"handleValueChange",1);a([b("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);s=a([q("SynCombobox")],s);T("combobox.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});T("combobox.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});s.define("syn-combobox");export{Ot as h};
