import{j as h,x as u}from"./iframe-C5QviLTd.js";import{e as g}from"./class-map-szeHYWjM.js";import{L as y}from"./localize-Dh03wnLC.js";import{S as f,c as m,n as d}from"./synergy-element-Cm-Wv3ul.js";import{S as v,r as l}from"./icon.component-ChqKiuCu.js";import{a as b}from"./query-DAIS6qJ0.js";import{w as r}from"./watch-CEsCE2EF.js";const _=h`
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
`,x=h`
  /**
   * The syn-option is now able to adjust its height from a parent item
   * This is done by exposing multiple css variables to the outside:
   *
   * --option-min-height (defaults to 48px) The minimal height of an element
   * --option-padding (defaults to var(--syn-spacing-small) var(--syn-spacing-medium)) The padding to use
   * --option-font-size (defaults to var(--syn-font-size-medium)) The font size to use
   * --option-icon-size (defaults to var(--syn-spacing-large)) The size of the checkmark
   * 
   * See below for usage of these variables
   */
  .option {
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    
    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--option-min-height, var(--syn-input-height-medium));
    padding: var(--option-padding, var(--syn-spacing-small) var(--syn-spacing-medium));
  }

  .option:not(.option--current) {
    color: var(--syn-color-neutral-950);
  }

  /** #429: Use token for opacity */
  .option--disabled { 
    opacity: var(--syn-input-disabled-opacity);
  }

  .option__label {
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-color-primary-600);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
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
    color: var(--syn-color-neutral-800);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option--current .option__prefix::slotted(syn-icon),
  .option--current .option__suffix::slotted(syn-icon) {
    color: var(--syn-color-neutral-0);
  }

  /* This is needed for the highlight styling of the options in syn-combobox */
  .option__label::slotted(.syn-highlight-style) {
    background-color: transparent;
    color: var(--syn-color-neutral-950);
    font: var(--syn-body-medium-bold);
  }

  :host([aria-selected='true']) .option__label::slotted(.syn-highlight-style) {
    color: var(--syn-color-neutral-0);
  }
`,z=(a,e)=>{const t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(t,"g");return a.replace(i,"_")};var S=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(a,e,t,i)=>{for(var s=i>1?void 0:i?w(e,t):e,p=a.length-1,c;p>=0;p--)(c=a[p])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&S(e,t,s),s};class n extends f{constructor(){super(...arguments),this.localize=new y(this),this.originalValue="",this.isInitialized=!1,this.delimiter=" ",this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[m,_,x]}static{this.dependencies={"syn-icon":v}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?this.triggerParentDefaultSlotChange():this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleDelimiterChange(){this.sanitizeValueForDelimiter()}handleValueChange(){this.originalValue=this.value,this.sanitizeValueForDelimiter()}sanitizeValueForDelimiter(){let e=this.originalValue;if(typeof e=="number")return;typeof e!="string"&&(e=String(e));const{delimiter:t}=this;e.includes(t)&&(console.error(`Option values cannot include "${t}". All occurrences of "${t}" have been replaced with "_".`,this),e=z(e,this.delimiter)),this.value=e,this.triggerParentDefaultSlotChange()}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(t+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(t+=i.textContent)}),t.trim()}triggerParentDefaultSlotChange(){customElements.whenDefined("syn-combobox").then(()=>{const e=this.closest("syn-combobox");e&&e.handleDefaultSlotChange()}),customElements.whenDefined("syn-select").then(()=>{const e=this.closest("syn-select");e&&e.handleDefaultSlotChange()})}render(){return u`
      <div
        part="base"
        class=${g({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}}o([b(".option__label")],n.prototype,"defaultSlot",2);o([l()],n.prototype,"delimiter",2);o([l()],n.prototype,"current",2);o([l()],n.prototype,"selected",2);o([l()],n.prototype,"hasHover",2);o([d({reflect:!0})],n.prototype,"value",2);o([d({type:Boolean,reflect:!0})],n.prototype,"disabled",2);o([r("disabled")],n.prototype,"handleDisabledChange",1);o([r("selected")],n.prototype,"handleSelectedChange",1);o([r("delimiter")],n.prototype,"handleDelimiterChange",1);o([r("value")],n.prototype,"handleValueChange",1);const V=h`
  /**
   * Size adjustments for syn-select and other widgets that use syn-option
   * This allows to share the common settings between all components that
   * should be able to set the size of a syn-option tag.
   */
  :host([size="small"]) {
    --option-min-height: var(--syn-input-height-small);
    --option-padding: 0 var(--syn-input-spacing-small);
    --option-font-size: var(--syn-input-font-size-small);
    --option-icon-size: var(--syn-spacing-medium);
  }

  :host([size="medium"]) {
    --option-min-height: var(--syn-input-height-medium);
    --option-padding: 0 var(--syn-input-spacing-medium);
    --option-font-size: var(--syn-input-font-size-medium);
    --option-icon-size: var(--syn-spacing-large);
  }

  :host([size="large"]) {
    --option-min-height: var(--syn-input-height-large);
    --option-padding: 0 var(--syn-input-spacing-large);
    --option-font-size: var(--syn-input-font-size-large);
    --option-icon-size: var(--syn-spacing-x-large);
  }
`;n.define("syn-option");export{n as S,V as s};
