import{q as h,x as u}from"./iframe-CM1cFSJI.js";import{e as g}from"./class-map-BHavj5nm.js";import{L as y}from"./localize-Dh03wnLC.js";import{S as v,c as f,n as d}from"./synergy-element-D-UeZOoN.js";import{S as m,r}from"./icon.component-g5Os0oaQ.js";import{a as b}from"./query-D0jTsbLw.js";import{w as l}from"./watch-CEsCE2EF.js";const _=h`
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
    /*
     * #988: Brand2025 defines a small gap between options
     * and rounded corners. We achieve that using an border
     * that simulates the gap using the menu background color.
     */
    border: solid var(--syn-panel-background-color);

    /**
     * Border Radius needs to be increased to cover the outline
     * Note this also needs to take the following into account:
     * - 2018 does not have a focus ring, so the border radius is as small as the border, essentially negating it to "0"
     * - 2025 needs to adapt with another pixel to make it match the rounding of the focus ring
     */
    border-radius: calc(calc(var(--syn-focus-ring-border-radius) * 2) + var(--option-inset-border-vertical) - 1px);
    border-width: var(--option-inset-border-horizontal) var(--option-inset-border-vertical);
    font-size: var(--option-font-size, var(--syn-font-size-medium));

    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--option-min-height, var(--syn-input-height-medium));
    padding: 0 calc(var(--option-padding) - var(--option-inset-border-vertical));
  }

  .option:not(.option--current) {
    color: var(--syn-option-color);
  }

  .option--current,
  .option--current.option--hover:not(.option--disabled) {
    background-color: var(--syn-option-background-color-active);
    color: var(--syn-option-color-active);
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--syn-option-background-color-hover);
    color: var(--syn-option-color-hover);
  }

  /** #429: Use token for opacity */
  .option--disabled {
    opacity: var(--syn-input-disabled-opacity);
  }

  .option--current.option--disabled {
    background-color: var(--syn-option-background-color-hover);
    color: var(--syn-option-color-hover);
  }

  .option__label {
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-option-check-color);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option .option__check {
    padding-inline-end: var(--syn-spacing-small);
  }

  /* Invert the check mark when keyboard navigation is used */
  .option--current .option__check {
    color: var(--syn-option-check-color-active);
  }

  .option--hover:not(.option--current) .option__check {
    color: var(--syn-option-check-color-hover);
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
    color: var(--syn-option-icon-color);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option--hover .option__prefix::slotted(syn-icon),
  .option--hover .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-hover);
  }

  .option--current .option__prefix::slotted(syn-icon),
  .option--current .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-active);
  }

  /* This is needed for the highlight styling of the options in syn-combobox */
  .option__label::slotted(.syn-highlight-style) {
    background-color: transparent;
    color: unset;
    font: var(--syn-body-medium-bold);
  }
`,z=(a,e)=>{const o=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(o,"g");return a.replace(t,"_")};var k=Object.defineProperty,w=Object.getOwnPropertyDescriptor,i=(a,e,o,t)=>{for(var s=t>1?void 0:t?w(e,o):e,c=a.length-1,p;c>=0;c--)(p=a[c])&&(s=(t?p(e,o,s):p(s))||s);return t&&s&&k(e,o,s),s};class n extends v{constructor(){super(...arguments),this.localize=new y(this),this.originalValue="",this.isInitialized=!1,this.delimiter=" ",this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}static{this.styles=[f,_,x]}static{this.dependencies={"syn-icon":m}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?this.triggerParentDefaultSlotChange():this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleDelimiterChange(){this.sanitizeValueForDelimiter()}handleValueChange(){this.originalValue=this.value,this.sanitizeValueForDelimiter()}sanitizeValueForDelimiter(){let e=this.originalValue;if(typeof e=="number")return;typeof e!="string"&&(e=String(e));const{delimiter:o}=this;e.includes(o)&&(console.error(`Option values cannot include "${o}". All occurrences of "${o}" have been replaced with "_".`,this),e=z(e,this.delimiter)),this.value=e,this.triggerParentDefaultSlotChange()}getTextLabel(){const e=this.childNodes;let o="";return[...e].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(o+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)}),o.trim()}triggerParentDefaultSlotChange(){customElements.whenDefined("syn-combobox").then(()=>{const e=this.closest("syn-combobox");e&&e.handleDefaultSlotChange()}),customElements.whenDefined("syn-select").then(()=>{const e=this.closest("syn-select");e&&e.handleDefaultSlotChange()})}render(){return u`
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
    `}}i([b(".option__label")],n.prototype,"defaultSlot",2);i([r()],n.prototype,"delimiter",2);i([r()],n.prototype,"current",2);i([r()],n.prototype,"selected",2);i([r()],n.prototype,"hasHover",2);i([d({reflect:!0})],n.prototype,"value",2);i([d({type:Boolean,reflect:!0})],n.prototype,"disabled",2);i([l("disabled")],n.prototype,"handleDisabledChange",1);i([l("selected")],n.prototype,"handleSelectedChange",1);i([l("delimiter")],n.prototype,"handleDelimiterChange",1);i([l("value")],n.prototype,"handleValueChange",1);const V=h`
  /**
   * Size adjustments for syn-select and other widgets that use syn-option
   * This allows to share the common settings between all components that
   * should be able to set the size of a syn-option tag.
   *
   * Also note that we have to adjust the padding to take the border size into account.
   */
  :host([size="small"]) {
    --option-inset-border-horizontal: var(--syn-spacing-2x-small);
    --option-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --option-min-height: var(--syn-input-height-small);
    --option-padding: var(--syn-input-spacing-small);
    --option-font-size: var(--syn-input-font-size-small);
    --option-icon-size: var(--syn-spacing-medium);
  }

  :host([size="medium"]) {
    --option-inset-border-horizontal: var(--syn-spacing-2x-small);
    --option-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --option-min-height: var(--syn-input-height-medium);
    --option-padding: var(--syn-input-spacing-medium);
    --option-font-size: var(--syn-input-font-size-medium);
    --option-icon-size: var(--syn-spacing-large);
  }

  :host([size="large"]) {
    --option-inset-border-horizontal: var(--syn-spacing-2x-small);
    --option-inset-border-vertical: calc(var(--syn-spacing-x-small) - 1px);
    --option-min-height: var(--syn-input-height-large);
    --option-padding: var(--syn-input-spacing-large);
    --option-font-size: var(--syn-input-font-size-large);
    --option-icon-size: var(--syn-spacing-x-large);
  }
`;n.define("syn-option");export{n as S,V as s};
