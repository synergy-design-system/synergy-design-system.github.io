import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,Nt as n,Rt as r,T as i,Ut as a}from"./iframe-DJ0QlWgc.js";import{n as o,t as s}from"./class-map-DEi9Q1MK.js";import{r as c,t as l}from"./form-BVa_zioF.js";import{r as u,t as d}from"./slot-uOU62xJ8.js";import{n as ee,t as f}from"./localize-DnZL8qNz.js";import{a as p,f as m,i as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S}from"./synergy-element-ChX6Se5O.js";import{n as C,t as w}from"./watch-OXZPXmne.js";import{n as T,t as E}from"./icon.component-Cmkda8ro.js";import{n as D,t as O}from"./decorator-CJ_bAnlW.js";import{a as k,i as A,l as j,n as M,o as N,t as P}from"./animation-registry-DTpGRZQp.js";import{n as F,t as I}from"./event-CAQhbrA7.js";import{n as L,t as R}from"./popup.component-CWwE9cvd.js";import{n as z,t as B}from"./form-control.styles-CPPfRdgH.js";import{a as V,i as H,n as U,r as W,t as G}from"./utility--km8ASyI.js";import{n as K,t as q}from"./tag.component-DrY75JYX.js";import{r as J,t as Y}from"./scroll-puol-Nad.js";var X,Z=e((()=>{n(),H(),X=a`
  /* stylelint-disable property-no-vendor-prefix */
  /* stylelint-disable no-descending-specificity */
  :host {
    /* Size-dependent CSS custom properties - defaults to medium */
    --syn-select-input-border-radius: var(--syn-input-border-radius-medium);
    --syn-select-input-font-size: var(--syn-input-font-size-medium);
    --syn-select-input-height: var(--syn-input-height-medium);
    --syn-select-input-spacing: var(--syn-input-spacing-medium);
    --syn-select-clear-font-size: var(--syn-spacing-large);
    --syn-select-clear-margin: var(--syn-spacing-small);
    --syn-select-prefix-suffix-margin: var(--syn-input-spacing-small);
    --syn-select-icon-font-size: var(--syn-font-size-x-large);
    --syn-select-expand-icon-font-size: var(--syn-spacing-large);
    --syn-select-tags-gap: var(--syn-spacing-x-small);
    --syn-select-multiple-padding-block: 3px;
    --syn-select-multiple-prefix-margin: var(--syn-input-spacing-medium);

    display: block;
  }

  /** The popup */
  .select {
    display: inline-flex;
    flex: 1 1 auto;
    position: relative;
    vertical-align: middle;
    width: 100%;
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
    align-items: center;
    border-radius: var(--syn-select-input-border-radius);
    cursor: pointer;
    display: flex;
    flex: 1;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-select-input-font-size);
    font-weight: var(--syn-input-font-weight);
    justify-content: start;
    letter-spacing: var(--syn-input-letter-spacing);
    min-height: var(--syn-select-input-height);
    min-width: 0;
    overflow: hidden;
    padding-block: 0;
    padding-inline: var(--syn-select-input-spacing);
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
  }

  .select__display-input {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: var(--syn-input-color);
    cursor: inherit;
    font: inherit;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
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
  .select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
  }

  .select--multiple.select--readonly:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: var(--syn-select-prefix-suffix-margin);
  }

  .select--multiple:not(.select--readonly):not(.select--placeholder-visible) .select__display-input {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /* #1177: Make sure that the values are copyable when using the readonly state */
  .select--multiple.select--readonly:not(.select--placeholder-visible) .select__display-input {
    flex: auto;
  }

  .select__value-input {
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

  .select__tags {
    align-items: center;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: var(--syn-select-tags-gap);
    margin-inline-start: var(--syn-spacing-medium);
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
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
    outline: none;
  }

  /**
   * Invalid user data
   */
  :host([data-user-invalid]) .select__combobox {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .select--standard:not(.select--disabled).select--open .select__combobox,
  :host([data-user-invalid]) .select--standard:not(.select--disabled).select--focused .select__combobox {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  /* Change select border on hover */
  .select:not(.select--disabled):not(.select--readonly):hover .select__combobox {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Size variants */
  .select--small {
    --syn-select-input-border-radius: var(--syn-input-border-radius-small);
    --syn-select-input-font-size: var(--syn-input-font-size-small);
    --syn-select-input-height: var(--syn-input-height-small);
    --syn-select-input-spacing: var(--syn-input-spacing-small);
    --syn-select-clear-font-size: var(--syn-spacing-medium);
    --syn-select-clear-margin: var(--syn-input-spacing-small);
    --syn-select-prefix-suffix-margin: var(--syn-spacing-x-small);
    --syn-select-icon-font-size: var(--syn-font-size-medium);
    --syn-select-expand-icon-font-size: var(--syn-spacing-medium);
    --syn-select-tags-gap: var(--syn-spacing-2x-small);
    --syn-select-multiple-padding-block: 2px;
    --syn-select-multiple-prefix-margin: var(--syn-input-spacing-small);
  }

  .select--large {
    --syn-select-input-border-radius: var(--syn-input-border-radius-large);
    --syn-select-input-font-size: var(--syn-input-font-size-large);
    --syn-select-input-height: var(--syn-input-height-large);
    --syn-select-input-spacing: var(--syn-input-spacing-large);
    --syn-select-clear-font-size: var(--syn-spacing-x-large);
    --syn-select-clear-margin: var(--syn-input-spacing-large);
    --syn-select-prefix-suffix-margin: var(--syn-input-spacing-medium);
    --syn-select-icon-font-size: var(--syn-font-size-2x-large);
    --syn-select-expand-icon-font-size: var(--syn-spacing-x-large);
    --syn-select-tags-gap: var(--syn-spacing-small);
    --syn-select-multiple-padding-block: 4px;
    --syn-select-multiple-prefix-margin: var(--syn-input-spacing-large);
  }

  /* Multiple select specific styles */
  .select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--syn-select-multiple-prefix-margin);
  }
 
  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    align-items: center;
    color: var(--syn-input-icon-color);
    display: inline-flex;
    flex: 0;
  }

  .select__prefix::slotted(*) {
    margin-inline-end: var(--syn-select-prefix-suffix-margin);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--syn-select-prefix-suffix-margin);
  }

  .select__suffix::slotted(syn-icon),
  .select__prefix::slotted(syn-icon) {
    font-size: var(--syn-select-icon-font-size);
  }

  /* Clear button */
  .select__clear {
    align-items: center;
    background: none;
    border: none;
    color: var(--syn-input-icon-icon-clearable-color);
    cursor: pointer;
    display: inline-flex;
    font-size: var(--syn-select-clear-font-size);
    justify-content: center;
    margin-inline-start: var(--syn-select-clear-margin);
    padding: 0;
    transition: var(--syn-transition-fast) color;
  }

  .select__clear:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    align-items: center;
    color: var(--syn-color-neutral-950);
    display: flex;
    flex: 0 0 auto;
    font-size: var(--syn-select-expand-icon-font-size);
    margin-inline-start: var(--syn-spacing-small);
    rotate: 0deg;
    transition: var(--syn-transition-medium) rotate ease;
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
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

  .select__listbox ::slotted(syn-divider) {
    --spacing: var(--syn-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    color: var(--syn-color-neutral-500);
    display: block;
    font-size: var(--syn-font-size-small);
    font-weight: var(--syn-font-weight-semibold);
    padding-block: var(--syn-spacing-2x-small);
    padding-inline: var(--syn-spacing-x-large);
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .select--standard.select--readonly.select--focused .select__combobox {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   * Note! ::slotted does currently not work with ::part, so we
   * opted for using a css variable here.
   */
  .select__listbox ::slotted(syn-optgroup:first-of-type) {
    --display-divider: none;
  }

  /**
   * #850: Allow to measure the size of the combobox.
   * This is needed so we can automatically size and truncate the tags in the <syn-select multiple> component.
   * Scoped to multiple to not break the single select per accident.
   * Scoped to when placeholder is not visible to not break the placeholder visualization
   */
  :host([multiple]) :not(.select--placeholder-visible) > .select__combobox > .select__tags {
    min-width: 100px;
    overflow: hidden;
  }

  :host([multiple]) .select__tags > div {
    display: contents;
  }

  :host([multiple]) .select__tags > div > syn-tag {
    --syn-tag-position-adjustment: var(--syn-spacing-3x-small);

    max-width: var(--syn-select-tag-max-width);
  }

  :host([multiple]) .select__tags > div > syn-tag::part(content) {
    display: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /**
   * #1177: Add support for readonly
   */
  .select--readonly .select__combobox {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
    cursor: default;
  }

  .select--readonly .select__expand-icon {
    color: var(--syn-readonly-icon-color-expand);
  }

  ${V}
`})),Q,$,te=e((()=>{N(),s(),c(),M(),u(),n(),f(),b(),Y(),i(),I(),w(),_(),z(),g(),T(),L(),q(),Z(),U(),D(),h(),Q=class extends x{constructor(...e){super(...e),this.formControlController=new l(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new d(this,`help-text`,`label`),this.localize=new ee(this),this.typeToSelectString=``,this.isUserInput=!1,this.hasFocus=!1,this.displayLabel=``,this.selectedOptions=[],this.valueHasChanged=!1,this.delimiter=` `,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.readonly=!1,this.clearable=!1,this.open=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.getTag=e=>r`
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
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`syn-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.isUserInput=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static{this.styles=[p,B,X]}static{this.dependencies={"syn-icon":E,"syn-popup":R,"syn-tag":K}}get value(){return this._value}set value(e){this.multiple?Array.isArray(e)||(e=typeof e==`string`?e.split(this.delimiter):[e].filter(W)):e=Array.isArray(e)?e.join(this.delimiter):e,!G(this._value,e)&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}enableResizeObserver(){this.multiple&&!this.readonly&&this.tagContainer&&(this.resizeObserver=new ResizeObserver(e=>{let t=e.at(0);this.tagContainer.style.setProperty(`--syn-select-tag-max-width`,`${t.contentRect.width}px`)}),this.resizeObserver.observe(this.tagContainer))}connectedCallback(){super.connectedCallback(),this.selectedOptionObserver=new MutationObserver(()=>{this.multiple?this.readonly?this.displayLabel=this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.requestUpdate():this.displayLabel=this.selectedOptions[0]?.getTextLabel?.()??``}),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.selectedOptionObserver?.disconnect()}observeSelectedOptions(){this.selectedOptionObserver?.disconnect(),this.selectedOptions.forEach(e=>{this.selectedOptionObserver.observe(e,{childList:!0,characterData:!0,subtree:!0})})}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`syn-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFormControlClick(){this.readonly&&this.displayInput.focus()}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`syn-icon-button`);this.disabled||this.readonly||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`syn-clear`),this.emit(`syn-input`),this.emit(`syn-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`syn-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.isUserInput=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`syn-option`)||customElements.whenDefined(`syn-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue;this.handleDelimiterChange();let n=Array.isArray(t)?t:typeof t==`string`?t.split(this.delimiter):[t].filter(W),r=[];e.forEach(e=>r.push(e.value));let i=n.map(String),a=e.filter(e=>i.includes(String(e.value)));this.setSelectedOptions(a)}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,!this.disabled&&!this.readonly&&(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`syn-input`),this.emit(`syn-change`)}))}getAllOptions(){return[...this.querySelectorAll(`syn-option`)]}getFirstOption(){return this.querySelector(`syn-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected),this.observeSelectedOptions();let t=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.readonly?this.displayLabel=this.selectedOptions.map(e=>e.getTextLabel()).join(`, `):this.placeholder&&this.value.length===0?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.value=e?.value??``,this.displayLabel=e?.getTextLabel?.()??``}this.valueHasChanged=t,this.updateComplete.then(()=>{this.isUserInput=!1,this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,n)=>{if(n<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(e,n);return r`<div @syn-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof i==`string`?t(i):i}
        </div>`}else if(n===this.maxOptionsVisible)return r`<syn-tag size=${this.size}>+${this.selectedOptions.length-n}</syn-tag>`;return r``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDelimiterChange(){this.getAllOptions().forEach(e=>{e.delimiter=this.delimiter})}handleDisabledChange(){(this.disabled||this.readonly)&&(this.open=!1,this.handleOpenChange())}updated(e){super.updated(e),(e.has(`multiple`)||e.has(`readonly`))&&(this.resizeObserver?.disconnect(),this.multiple&&!this.readonly&&this.enableResizeObserver())}willUpdate(e){super.willUpdate(e),e.has(`value`)&&!this.defaultValue&&this.value&&!this.isUserInput&&(this.defaultValue=this.value,this.valueHasChanged=!1)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=(Array.isArray(this.value)?this.value:[this.value]).map(String),n=e.filter(e=>t.includes(String(e.value)));this.setSelectedOptions(n)}async handleOpenChange(){if(this.open&&!this.disabled&&!this.readonly){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`syn-show`),this.addOpenListeners(),await j(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=P(this,`select.show`,{dir:this.localize.dir()});await k(this.popup.popup,e,t),this.currentOption&&J(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`syn-after-show`)}else{this.emit(`syn-hide`),this.removeOpenListeners(),await j(this);let{keyframes:e,options:t}=P(this,`select.hide`,{dir:this.localize.dir()});await k(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`syn-after-hide`)}}async show(){if(this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!0,F(this,`syn-after-show`)}async hide(){if(!this.open||this.disabled||this.readonly){this.open=!1;return}return this.open=!1,F(this,`syn-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=W(this.value),t=this.hasSlotController.test(`label`),n=this.hasSlotController.test(`help-text`),i=this.label?!0:!!t,a=this.helpText?!0:!!n,s=this.clearable&&!this.disabled&&!this.readonly&&e,c=this.placeholder&&this.value&&!e;return r`
      <div
        part="form-control"
        class=${o({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":i,"form-control--has-help-text":a})}
        @click=${this.handleFormControlClick}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <syn-popup
            class=${o({select:!0,"select--standard":!0,"select--open":this.open,"select--disabled":this.disabled,"select--readonly":this.readonly,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":c,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement+`-start`}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="popup"
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
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple&&!this.readonly?r`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
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

              ${s?r`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <syn-icon name="x-circle-fill" library="system"></syn-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <syn-icon library="system" name="chevron-down"></syn-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
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
          aria-hidden=${a?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}},y([S(`.select`)],Q.prototype,`popup`,void 0),y([S(`.select__combobox`)],Q.prototype,`combobox`,void 0),y([S(`.select__display-input`)],Q.prototype,`displayInput`,void 0),y([S(`.select__value-input`)],Q.prototype,`valueInput`,void 0),y([S(`.select__listbox`)],Q.prototype,`listbox`,void 0),y([S(`.select__tags`)],Q.prototype,`tagContainer`,void 0),y([m()],Q.prototype,`hasFocus`,void 0),y([m()],Q.prototype,`displayLabel`,void 0),y([m()],Q.prototype,`currentOption`,void 0),y([m()],Q.prototype,`selectedOptions`,void 0),y([m()],Q.prototype,`valueHasChanged`,void 0),y([v()],Q.prototype,`delimiter`,void 0),y([v()],Q.prototype,`name`,void 0),y([m()],Q.prototype,`value`,null),y([v({attribute:`value`})],Q.prototype,`defaultValue`,void 0),y([v({reflect:!0})],Q.prototype,`size`,void 0),y([v()],Q.prototype,`placeholder`,void 0),y([v({type:Boolean,reflect:!0})],Q.prototype,`multiple`,void 0),y([v({attribute:`max-options-visible`,type:Number})],Q.prototype,`maxOptionsVisible`,void 0),y([v({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),y([v({reflect:!0,type:Boolean})],Q.prototype,`readonly`,void 0),y([v({type:Boolean})],Q.prototype,`clearable`,void 0),y([v({type:Boolean,reflect:!0})],Q.prototype,`open`,void 0),y([v()],Q.prototype,`label`,void 0),y([v({reflect:!0})],Q.prototype,`placement`,void 0),y([v({attribute:`help-text`})],Q.prototype,`helpText`,void 0),y([v({reflect:!0})],Q.prototype,`form`,void 0),y([v({type:Boolean,reflect:!0})],Q.prototype,`required`,void 0),y([v()],Q.prototype,`getTag`,void 0),y([C(`delimiter`)],Q.prototype,`handleDelimiterChange`,null),y([C([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],Q.prototype,`handleDisabledChange`,null),y([C([`defaultValue`,`value`,`delimiter`],{waitUntilFirstUpdate:!0})],Q.prototype,`handleValueChange`,null),y([C(`open`,{waitUntilFirstUpdate:!0})],Q.prototype,`handleOpenChange`,null),Q=y([O(`SynSelect`)],Q),$=Q,A(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),A(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}})}));export{$ as n,te as t};