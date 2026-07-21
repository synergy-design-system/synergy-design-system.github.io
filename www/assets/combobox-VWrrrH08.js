import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{_ as t,y as n}from"./preview-CW-x0Dg3.js";import{a as r,c as i,h as a,t as o}from"./lit-BfcklOOD.js";import{_ as s,a as c,f as l,i as ee,n as te,o as u,r as d,s as ne,t as re,y as f}from"./synergy-element-BFEAJlBN.js";import{r as ie,t as p}from"./if-defined-gcdQCgEY.js";import{n as m,t as ae}from"./class-map-BntiyWRh.js";import{r as oe,t as se}from"./form-BInibdBX.js";import{r as ce,t as le}from"./slot-Cl6UAYP5.js";import{n as h,t as g}from"./localize-BNnpMTZD.js";import{n as _,t as ue}from"./watch-RA3ULoLi.js";import{n as de,t as fe}from"./icon.component-03RqJYOT.js";import{n as pe,t as me}from"./decorator-B3p9Y8B9.js";import{a as v,i as y,l as b,n as he,o as ge,t as x}from"./animation-registry-BrsFz0KL.js";import{r as _e,t as ve}from"./scroll-B6BZHD-n.js";import{n as S,t as ye}from"./event-D536S22s.js";import{n as C,t as w}from"./form-control.styles-DEKLRB47.js";import{n as T,t as E}from"./popup.component-kRGxywV7.js";import{n as D,t as O}from"./tag.component-BxjoeOI5.js";import{a as k,i as A,n as j,o as M,r as N,s as P,t as be}from"./option.component-DPobz93I.js";var F,xe=e((()=>{o(),M(),F=a`
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

  ${P}
`})),I,L,R,z,B,V,H,U,W,G,K,q,Se=e((()=>{o(),t(),I=e=>Array.from(e.assignedElements({flatten:!0})),L=e=>e.tagName.toLocaleLowerCase()===`syn-option`?e:Array.from(e.querySelectorAll(`:scope > syn-option`)),R=e=>e.tagName.toLocaleLowerCase()===`syn-optgroup`,z=e=>e.map(L),B=e=>e.filter(R),V=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),H=e=>{let t=document.createElement(`div`);return r(e,t),t.firstElementChild},U=e=>e.tagName.toLocaleLowerCase()===`syn-option`?e:void 0,W=e=>{if(e){if(e instanceof HTMLElement)return U(e);if(typeof e==`string`){let t=i`${n(e)}`,r=H(t);return U(r)}if(Object.prototype.hasOwnProperty.call(e,`_$litType$`)){let t=H(e);return U(t)}}},G=e=>{let{value:t}=e;return t==null||t===``?e.getTextLabel():t},K=e=>e.map(G),q=(e,t)=>{if(!t||e==null||e===``)return!1;let n=t.value,r=t.getTextLabel();return String(e)===String(n)||String(e)===r}})),J,Y,X=e((()=>{o(),J=e=>e,Y=(e,t)=>{if(!t)return e;let n=e.cloneNode(!0),r=n.getTextLabel();n.selected=e.selected;let i=r.toLowerCase().indexOf(t.toLowerCase()),a=n.innerHTML.indexOf(r),o=document.createElement(`mark`);o.textContent=r.slice(i,i+t.length),o.classList.add(`syn-highlight-style`);let s=r.replace(new RegExp(t,`i`),o.outerHTML),c=n.innerHTML.slice(0,a),l=n.innerHTML.slice(a+r.length);return n.innerHTML=c.concat(s,l),n}})),Z,Q,$=e((()=>{ae(),p(),o(),ne(),t(),ge(),oe(),he(),ce(),g(),ye(),ue(),u(),C(),te(),de(),T(),be(),O(),xe(),Se(),ve(),X(),pe(),A(),ee(),Z=class extends re{constructor(...e){super(...e),this.formControlController=new se(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new le(this,`help-text`,`label`),this.localize=new h(this),this.lastOptions=[],this.isInitialized=!1,this.isOptionRendererTriggered=!1,this.hasFocus=!1,this.isUserInput=!1,this.displayLabel=``,this.selectedOptions=[],this.numberFilteredOptions=0,this.cachedOptions=[],this.valueHasChanged=!1,this.hideOptions=!1,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.restricted=!1,this.multiple=!1,this.getOption=J,this.filter=(e,t)=>{let n=e?.textContent||``;e instanceof j&&(n=e.getTextLabel());let r=V(n),i=V(t);return r.includes(i)?!0:e?.value?.toString()===t},this.delimiter=` `,this.maxOptionsVisible=3,this.getTag=e=>i`
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
      @syn-remove=${t=>this.handleTagRemove(t,e)}
    >
      ${e.getTextLabel()}
    </syn-tag>
  `,this.calculateTagMaxWidth=e=>{let t=e.at(0);if(!t||!this.tagContainer)return;let n=t.contentRect.width,r=this.tagContainer.getBoundingClientRect().width,i=Math.max(85,r+n-48);this.tagContainer.style.setProperty(`--syn-select-tag-max-width`,`${i}px`)},this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{if(e.target.closest(`.combobox__clear`)===null){if(e.key===`Escape`&&(this.open&&!this.closeWatcher?(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})):this.open||(this.multiple?this.clearInputField():this.clearCombobox())),e.key===`Enter`){let t=this.getCurrentOption(),n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;if(!this.open&&!n){setTimeout(()=>{e.defaultPrevented||this.formControlController.submit()});return}if(!this.open||t&&t.disabled)return;if(t){this.isUserInput=!0,this.valueHasChanged=!0;let e=this.lastOptions?K(this.lastOptions):[];this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.selectionChanged();let n=Array.isArray(this.value)?this.value:[this.value];this.updateComplete.then(()=>{this.isUserInput=!1}),N(e,n)||this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)})}this.multiple||this.hide(),this.displayInput.focus({preventScroll:!0});return}[`ArrowUp`,`ArrowDown`].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),this.open||this.show(),this.selectNextOption(e.key===`ArrowDown`)),[`Home`,`End`].includes(e.key)&&(e.preventDefault(),e.stopPropagation(),e.key===`Home`?this.displayInput.setSelectionRange(0,0):e.key===`End`&&this.displayInput.setSelectionRange(this.displayLabel.length,this.displayLabel.length))}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static{this.styles=[c,w,F]}static{this.dependencies={"syn-icon":fe,"syn-popup":E,"syn-tag":D}}get value(){return this._value}set value(e){this.multiple?Array.isArray(e)||(e=typeof e==`string`?e.split(this.delimiter):[e].filter(k)):e=Array.isArray(e)?e.join(this.delimiter):e,!N(this._value,e)&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&(this.resizeObserver||=new ResizeObserver(this.calculateTagMaxWidth),this.resizeObserver.observe(this.displayInput))}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(e=>{let t=e.some(e=>{if(!(e.target instanceof j)||e.type!==`attributes`||e.attributeName!==`value`)return!1;let t=e.target.getAttribute(`value`);return e.oldValue!==t&&!!t}),n=(this.restricted||this.multiple)&&e.some(e=>e.type!==`characterData`&&e.type!==`childList`?!1:this.selectedOptions.some(t=>t===e.target||t.contains(e.target)));t&&this.handleSlotContentChange(),n&&(this.multiple?this.readonly?this.displayLabel=this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.requestUpdate():this.displayLabel=this.selectedOptions[0]?.getTextLabel?.()??this.displayLabel)}),this.mutationObserver.observe(this,{attributeFilter:[`value`],attributeOldValue:!0,attributes:!0,characterData:!0,childList:!0,subtree:!0}),setTimeout(()=>{this.handleSlotContentChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect(),this.removeOpenListeners()}firstUpdated(){this.isInitialized=!0,this.formControlController.updateValidity()}updated(e){super.updated(e),e.has(`multiple`)&&(this.multiple?this.enableResizeObserver():this.resizeObserver?.disconnect())}willUpdate(e){super.willUpdate(e);let t=this.defaultValue==null||this.defaultValue===``||Array.isArray(this.defaultValue)&&this.defaultValue.length===0;if(e.has(`value`)&&t&&this.value&&!this.isUserInput&&(this.multiple&&Array.isArray(this.value)?this.defaultValue=this.value.join(this.delimiter):this.defaultValue=this.value,this.valueHasChanged=!1),!this.isInitialized&&e.has(`value`)&&this.value!==void 0&&e.has(`multiple`)&&this.multiple&&!Array.isArray(this.defaultValue)){let e=this.valueHasChanged;this.value=typeof this.defaultValue==`string`?this.defaultValue.split(this.delimiter):[this.defaultValue].filter(k),this.valueHasChanged=e}}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(e,t);return i`<div @syn-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof r==`string`?n(r):r}
        </div>`}return t===this.maxOptionsVisible?i`<syn-tag size=${this.size}>+${this.selectedOptions.length-t}</syn-tag>`:i``})}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(t,!1),this.selectionChanged(),this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}))}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`syn-icon-button`);this.disabled||this.readonly||t||(e.preventDefault(),(this.open?this.hide():this.show()).then(()=>{setTimeout(()=>this.displayInput.focus({preventScroll:!0}))}))}handleComboboxKeyDown(e){e.key!==`Tab`&&this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.clearCombobox()}clearInputField(){if(this.displayLabel!==``){let e=this.valueHasChanged;this.value=K(this.selectedOptions),this.valueHasChanged=e,this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`syn-input`)})}}clearCombobox(){this.valueHasChanged=!0,this.value!==``&&(this.value=``,this.displayLabel=``,this.lastOptions=[],this.setSelectedOptions([]),this.selectionChanged(),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`syn-clear`),this.emit(`syn-input`),this.emit(`syn-change`)}))}preventLoosingFocus(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`syn-option`),n=this.lastOptions?K(this.lastOptions):[];t&&!t.disabled&&(this.isUserInput=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.selectionChanged(),this.updateComplete.then(()=>{this.displayInput.focus({preventScroll:!0}),this.isUserInput=!1}),N(n,Array.isArray(this.value)?this.value:[this.value])||this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}selectNextOption(e){let t=this.getAllFilteredOptions();if(t.length===0)return;let n=this.getCurrentOption(),r=t.indexOf(n),i=Math.max(0,r);if(e){let e=r+1;i=e>t.length-1?0:e}else{let e=r-1;i=e<0?t.length-1:e}this.setCurrentOption(t[i]),_e(this.getCurrentOption(),this.listbox,`vertical`,`auto`)}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected;let n=this.cachedOptions.find(t=>t.id===e.id);n&&(n.selected=e.selected)}setSelectedOptions(e){let t=Array.isArray(e)?e:[e];!this.multiple&&t.length>1&&t.splice(1),this.getSlottedOptions().forEach(e=>{e.selected=t.some(t=>t.id===e.id)}),this.cachedOptions.forEach(e=>{e.selected=t.some(t=>t.id===e.id)})}getAllFilteredOptions(){return this.getSlottedOptions().filter(e=>!e.hidden)}getCurrentOption(){return this.getAllFilteredOptions().find(e=>e.current)}setCurrentOption(e){let t=this.getAllFilteredOptions();this.displayInput.removeAttribute(`aria-activedescendant`),t.forEach(e=>{e.current=!1,e.setAttribute(`aria-selected`,`false`)}),e&&(e.current=!0,e.setAttribute(`aria-selected`,`true`),this.displayInput.setAttribute(`aria-activedescendant`,e.id))}selectionChanged(){let e=this.getSlottedOptions();this.selectedOptions=e.filter(e=>e.selected),this.selectedOptions.length===0&&(this.displayLabel=Array.isArray(this.value)?this.value.join(`, `):String(this.value));let t,n=this.valueHasChanged;if(this.multiple){if(this.value=this.selectedOptions.map(e=>G(e)),this.value.length===0&&this.selectedOptions.length!==0){this.valueHasChanged=n,this.resetToLastValidValue();return}}else{if(this.selectedOptions.length!==0)t=G(this.selectedOptions[0]);else if(this.restricted&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==``&&!this.isUserInput){this.resetToLastValidValue(),this.valueHasChanged=n;return}this.value=t??this.displayLabel}this.valueHasChanged=n,this.lastOptions=[...this.selectedOptions],this.updateComplete.then(()=>{let e=this.displayLabel;e=this.multiple&&this.readonly?this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.multiple&&!this.readonly?``:this.selectedOptions[0]?.getTextLabel()??this.displayLabel,this.displayLabel=e,this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handlePropertiesChange(){this.createComboboxOptionsFromQuery(this.displayLabel),this.open&&this.updateComplete.then(()=>{this.open=this.multiple||this.restricted||this.numberFilteredOptions>0})}handleDisplayInputValueChange(){this.createComboboxOptionsFromQuery(this.displayLabel)}handleDisabledChange(){this.disabled&&this.formControlController.setValidity(this.disabled),(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange()),this.selectionChanged()}handleDelimiterChange(){this.getSlottedOptions().forEach(e=>{e.delimiter=this.delimiter})}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}this.updateSelectedOptionFromValue()}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){if(this.numberFilteredOptions===0&&!this.restricted&&!this.multiple){this.open=!1,this.emit(`syn-error`);return}this.emit(`syn-show`),this.addOpenListeners(),await b(this),this.listbox.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=x(this,`combobox.show`,{dir:this.localize.dir()});await v(this.popup.popup,e,t),this.emit(`syn-after-show`);return}this.setCurrentOption(null),this.displayInput.removeAttribute(`aria-activedescendant`),this.emit(`syn-hide`),this.removeOpenListeners(),await b(this);let{keyframes:e,options:t}=x(this,`combobox.hide`,{dir:this.localize.dir()});await v(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,Promise.race([S(this,`syn-after-show`),S(this,`syn-error`)])}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,S(this,`syn-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}createComboboxOptionsFromQuery(e){this.numberFilteredOptions=0,this.isOptionRendererTriggered=!0,this.cachedOptions.length===0&&this.cacheSlottedOptionsAndOptgroups(),this.getSlottedOptions().forEach(t=>{let n=this.cachedOptions.find(e=>e.id===t.id)||t,r=W(this.getOption(n,e));r||=n;let i=!(this.filter(r,e)||e===``);r.hidden=i,t.replaceWith(r),i||(this.numberFilteredOptions+=1)}),this.getSlottedOptGroups().filter(e=>{let t=z(Array.from(e.children)).flat().some(e=>!e.hidden);return e.hidden=!t,t})[0]?.style.setProperty(`--display-divider`,`none`),setTimeout(()=>{this.isOptionRendererTriggered=!1})}async handleInput(){let e=this.displayInput.value;this.displayLabel=e;let t=this.lastOptions;if(this.isUserInput=!0,this.multiple||(this.selectedOptions=[]),this.multiple){let t=K(this.selectedOptions);this.value=[...t,e]}else this.value=e;await this.updateComplete,this.isUserInput=!1,this.lastOptions=t,this.open=this.multiple||this.restricted||this.numberFilteredOptions>0,this.formControlController.updateValidity(),this.emit(`syn-input`)}isValidValue(e){return this.cachedOptions.some(t=>q(e,t))}getOptionsFromValue(){let e=this.valueHasChanged?this.value:this.defaultValue,t;return t=Array.isArray(e)?e:e===void 0||e==null?[]:this.multiple&&typeof e==`string`?e.split(this.delimiter):[e],t.map(e=>this.cachedOptions.find(t=>q(e,t))).filter(e=>e!==void 0)}resetToLastValidValue(){let e=``,t=[];this.lastOptions.length!==0&&(t=K(this.lastOptions),this.multiple||(e=this.lastOptions[0].getTextLabel()));let n=this.popup?.popup?.getAnimations?.()??[],r=n.length?Promise.all(n.map(e=>e.playState===`finished`?Promise.resolve():new Promise(t=>{e.addEventListener(`finish`,()=>t(),{once:!0})}))):Promise.resolve();this.hideOptions=!0,r.then(()=>{this.hideOptions=!1});let i=this.valueHasChanged;this.value=t,this.displayLabel=e,this.formControlController.updateValidity(),this.valueHasChanged=i}handleChange(){let e=this.selectedOptions.length!==0&&this.selectedOptions.length===this.getOptionsFromValue().length,t;t=Array.isArray(this.value)?this.value:typeof this.value==`string`?this.value.split(this.delimiter):[this.value];let n=t.every(e=>this.isValidValue(e)),r=this.multiple&&e&&n;if(!this.multiple&&this.selectedOptions.length>0||r)return;let i=this.lastOptions?K(this.lastOptions):[];if((this.restricted||this.multiple)&&!this.isValidValue(this.displayLabel)&&this.displayLabel!==``){this.resetToLastValidValue();return}let a=this.getOptionsFromValue();this.setSelectedOptions(a),this.selectionChanged(),this.lastOptions=[...a],this.updateComplete.then(()=>{this.formControlController.updateValidity()}),N(i,Array.isArray(this.value)?this.value:[this.value])||this.emit(`syn-change`)}getSlottedOptions(){return this.defaultSlot?z(I(this.defaultSlot)).flat():[]}getSlottedOptGroups(){return B(I(this.defaultSlot))}cacheSlottedOptionsAndOptgroups(){let e=this.getSlottedOptions(),t=this.getSlottedOptGroups();e.forEach((e,t)=>{e.id=e.id||`syn-combobox-option-${t}`}),t.forEach((e,t)=>{e.id=e.id||`syn-combobox-optgroup-${t}`}),this.cachedOptions=[...e]}updateSelectedOptionFromValue(){if(!this.isUserInput){let e=this.getOptionsFromValue();this.setSelectedOptions(e),this.selectionChanged()}let e=``;e=this.multiple?this.displayLabel:Array.isArray(this.value)?this.value.join(`, `):String(this.value),this.createComboboxOptionsFromQuery(e)}handleSlotContentChange(){if(!customElements.get(`syn-option`)){customElements.whenDefined(`syn-option`).then(()=>this.handleSlotContentChange());return}this.handleDelimiterChange(),this.cacheSlottedOptionsAndOptgroups(),this.updateSelectedOptionFromValue();let e;e=Array.isArray(this.value)||typeof this.value==`string`?this.value.length>0:this.value!==void 0&&this.value!==null,this.hasFocus&&e&&!this.open&&this.show()}handleDefaultSlotChange(){this.isOptionRendererTriggered||this.handleSlotContentChange()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,a;a=Array.isArray(this.value)||typeof this.value==`string`?this.value.length>0:this.value!==void 0&&this.value!==null&&typeof this.value==`number`;let o=this.clearable&&!this.disabled&&!this.readonly&&a,s=this.placeholder&&!a,c=this.multiple&&this.selectedOptions.length>0;return i`
      <div
        part="form-control"
        class=${m({"form-control":!0,"form-control--has-help-text":r,"form-control--has-label":n,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`})}
        @click=${this.handleFormControlClick}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${m({combobox:!0,"combobox--bottom":this.placement===`bottom`,"combobox--disabled":this.disabled,"combobox--focused":this.hasFocus,"combobox--large":this.size===`large`,"combobox--medium":this.size===`medium`,"combobox--multiple":this.multiple,"combobox--open":this.open,"combobox--placeholder-visible":s,"combobox--readonly":this.readonly,"combobox--small":this.size===`small`,"combobox--standard":!0,"combobox--tags-visible":c,"combobox--top":this.placement===`top`})}
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

              ${this.multiple&&!this.readonly?i`<div part="tags" class="combobox__tags">${this.tags}</div>`:``}

              <input
                part="display-input"
                class="combobox__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .readOnly=${this.readonly}
                .value=${this.displayLabel}
                maxlength=${ie(this.maxlength)}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
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
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value?.toString()}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />
       
              ${o?i`
                    <button
                      part="clear-button"
                      class="combobox__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.preventLoosingFocus}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:``}

                <slot name="suffix" part="suffix" class="combobox__suffix"></slot>

                <slot name="expand-icon" part="expand-icon" class="combobox__expand-icon">
                  <syn-icon library="system" name="chevron-down"></syn-icon>
                </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-labelledby="label"
              aria-multiselectable=${this.multiple?`true`:`false`}
              part="listbox"
              class="combobox__listbox"
              tabindex="-1"
              @mousedown=${this.preventLoosingFocus}
              @mouseup=${this.handleOptionClick}
            >
              <div class="listbox__options" part="filtered-listbox">
                ${this.hideOptions||this.numberFilteredOptions===0?i`<span
                      class="listbox__no-results"
                      aria-hidden="true"
                      part="no-results"
                      >${this.localize.term(`noResults`)}</span
                    >`:``}
                <slot class=${m({options__hide:this.hideOptions})} @slotchange=${this.handleDefaultSlotChange}></slot>      
              </div>
            </div>
          </syn-popup>
        </div>
        
        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}},d([l(`.combobox`)],Z.prototype,`popup`,void 0),d([l(`.combobox__inputs`)],Z.prototype,`combobox`,void 0),d([l(`.combobox__display-input`)],Z.prototype,`displayInput`,void 0),d([l(`.combobox__value-input`)],Z.prototype,`valueInput`,void 0),d([l(`.combobox__listbox`)],Z.prototype,`listbox`,void 0),d([l(`slot:not([name])`)],Z.prototype,`defaultSlot`,void 0),d([l(`.combobox__tags`)],Z.prototype,`tagContainer`,void 0),d([s()],Z.prototype,`hasFocus`,void 0),d([s()],Z.prototype,`isUserInput`,void 0),d([s()],Z.prototype,`displayLabel`,void 0),d([s()],Z.prototype,`selectedOptions`,void 0),d([s()],Z.prototype,`numberFilteredOptions`,void 0),d([s()],Z.prototype,`cachedOptions`,void 0),d([s()],Z.prototype,`valueHasChanged`,void 0),d([s()],Z.prototype,`hideOptions`,void 0),d([f()],Z.prototype,`name`,void 0),d([s()],Z.prototype,`value`,null),d([f({attribute:`value`})],Z.prototype,`defaultValue`,void 0),d([f({reflect:!0})],Z.prototype,`size`,void 0),d([f()],Z.prototype,`placeholder`,void 0),d([f({reflect:!0,type:Boolean})],Z.prototype,`disabled`,void 0),d([f({reflect:!0,type:Boolean})],Z.prototype,`readonly`,void 0),d([f({type:Boolean})],Z.prototype,`clearable`,void 0),d([f({reflect:!0,type:Boolean})],Z.prototype,`open`,void 0),d([f()],Z.prototype,`label`,void 0),d([f({type:Number})],Z.prototype,`maxlength`,void 0),d([f({reflect:!0})],Z.prototype,`placement`,void 0),d([f({attribute:`help-text`})],Z.prototype,`helpText`,void 0),d([f({reflect:!0})],Z.prototype,`form`,void 0),d([f({reflect:!0,type:Boolean})],Z.prototype,`required`,void 0),d([f({reflect:!0,type:Boolean})],Z.prototype,`restricted`,void 0),d([f({reflect:!0,type:Boolean})],Z.prototype,`multiple`,void 0),d([f()],Z.prototype,`getOption`,void 0),d([f()],Z.prototype,`filter`,void 0),d([f()],Z.prototype,`delimiter`,void 0),d([f({attribute:`max-options-visible`,type:Number})],Z.prototype,`maxOptionsVisible`,void 0),d([f()],Z.prototype,`getTag`,void 0),d([_([`filter`,`getOption`],{waitUntilFirstUpdate:!0})],Z.prototype,`handlePropertiesChange`,null),d([_(`displayLabel`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleDisplayInputValueChange`,null),d([_([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],Z.prototype,`handleDisabledChange`,null),d([_(`delimiter`)],Z.prototype,`handleDelimiterChange`,null),d([_([`defaultValue`,`value`,`delimiter`,`multiple`,`restricted`],{waitUntilFirstUpdate:!0})],Z.prototype,`handleValueChange`,null),d([_(`open`,{waitUntilFirstUpdate:!0})],Z.prototype,`handleOpenChange`,null),Z=d([me(`SynCombobox`)],Z),Q=Z,y(`combobox.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),y(`combobox.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}})})),Ce=e((()=>{$(),$(),Q.define(`syn-combobox`)}));export{Y as n,X as r,Ce as t};