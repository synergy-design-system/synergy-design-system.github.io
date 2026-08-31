import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-IoE5U-8r.js";import{t as f}from"./query-DOHNhzf6.js";import{n as p,t as m}from"./class-map-HZwHklGF.js";import{n as h,t as g}from"./localize-Du3bqz3O.js";import{n as _}from"./watch-Q8hEwzVb.js";import{n as v,t as y}from"./icon.component-CzooivmS.js";import{n as b,t as x}from"./decorator-DZesXZg7.js";var S;function C(){return(C=e((()=>{r(),S=n`
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
`})))()}var w,T;function E(){return(E=e((()=>{w=e=>Array.isArray(e)||typeof e==`string`?e.length>0:typeof e==`number`||!!e,T=(e,t)=>Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e===t})))()}var D;function O(){return(O=e((()=>{r(),D=n`
  :host {
    display: block;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /**
   * syn-option is now able to adjust its height from a parent item
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
    align-items: center;

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
    border-radius: calc(calc(var(--syn-focus-ring-border-radius) * 2) + var(--option-inset-border-vertical) - 2px) / calc(calc(var(--syn-focus-ring-border-radius) * 2) + var(--option-inset-border-vertical) - 4px);
    border-width: var(--option-inset-border-horizontal) var(--option-inset-border-vertical);
    color: var(--syn-color-neutral-700);
    cursor: pointer;
    display: flex;
    font-family: var(--syn-font-sans);
    font-size: var(--option-font-size, var(--syn-font-size-medium));
    font-weight: var(--syn-font-weight-normal);
    letter-spacing: var(--syn-letter-spacing-normal);
    line-height: var(--syn-line-height-normal);

    /* Height is dependent on line-height of .option__label, which does not fit completely to layout */
    min-height: var(--option-min-height, var(--syn-input-height-medium));
    padding: 0 calc(var(--option-padding) - var(--option-inset-border-vertical));
    position: relative;
    transition: var(--syn-transition-fast) fill;
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

  .option--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
    outline: none;
  }

  .option--current.option--disabled {
    background-color: var(--syn-option-background-color-hover);
    color: var(--syn-option-color-hover);
  }

  .option__label {
    display: inline-block;
    flex: 1 1 auto;
    line-height: var(--syn-line-height-normal);
  }

  .option__check {
    color: var(--syn-option-check-color);
    font-size: var(--option-icon-size, var(--syn-spacing-large));
  }

  .option .option__check {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    padding-inline-end: var(--syn-spacing-small);
    visibility: hidden;
  }

  /* Invert the check mark when keyboard navigation is used */
  .option--current .option__check {
    color: var(--syn-option-check-color-active);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option--hover:not(.option--current) .option__check {
    color: var(--syn-option-check-color-hover);
  }

  .option__prefix,
  .option__suffix {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
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

  .option--current .option__prefix::slotted(syn-icon),
  .option--current .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-active);
  }

  .option--hover:not(.option--disabled) .option__prefix::slotted(syn-icon),
  .option--hover:not(.option--disabled) .option__suffix::slotted(syn-icon) {
    color: var(--syn-option-icon-color-hover);
  }

  /* This is needed for the highlight styling of the options in syn-combobox */
  .option__label::slotted(.syn-highlight-style) {
    background-color: transparent;
    color: unset;
    font: var(--syn-body-medium-bold);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`})))()}var k;function A(){return(A=e((()=>{k=(e,t)=>{let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),r=new RegExp(n,`g`);return e.replace(r,`_`)}})))()}var j,M;function N(){return(N=e((()=>{m(),r(),g(),u(),c(),s(),v(),O(),A(),b(),j=class extends d{constructor(...e){super(...e),this.localize=new h(this),this.originalValue=``,this.isInitialized=!1,this.delimiter=` `,this.current=!1,this.selected=!1,this.hasHover=!1,this.value=``,this.disabled=!1}static{this.styles=[i,D]}static{this.dependencies={"syn-icon":y}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?this.triggerParentDefaultSlotChange():this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleDelimiterChange(){this.sanitizeValueForDelimiter()}handleValueChange(){this.originalValue=this.value,this.sanitizeValueForDelimiter()}sanitizeValueForDelimiter(){let e=this.originalValue;if(typeof e==`number`)return;typeof e!=`string`&&(e=String(e));let{delimiter:t}=this;e.includes(t)&&(console.error(`Option values cannot include "${t}". All occurrences of "${t}" have been replaced with "_".`,this),e=k(e,this.delimiter)),this.value=e,this.triggerParentDefaultSlotChange()}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}triggerParentDefaultSlotChange(){customElements.whenDefined(`syn-combobox`).then(()=>{let e=this.closest(`syn-combobox`);e&&e.handleDefaultSlotChange()}),customElements.whenDefined(`syn-select`).then(()=>{let e=this.closest(`syn-select`);e&&e.handleDefaultSlotChange()})}render(){return t`
      <div
        part="base"
        class=${p({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <syn-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></syn-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}},l([f(`.option__label`)],j.prototype,`defaultSlot`,void 0),l([o()],j.prototype,`delimiter`,void 0),l([o()],j.prototype,`current`,void 0),l([o()],j.prototype,`selected`,void 0),l([o()],j.prototype,`hasHover`,void 0),l([a({reflect:!0})],j.prototype,`value`,void 0),l([a({type:Boolean,reflect:!0})],j.prototype,`disabled`,void 0),l([_(`disabled`)],j.prototype,`handleDisabledChange`,null),l([_(`selected`)],j.prototype,`handleSelectedChange`,null),l([_(`delimiter`)],j.prototype,`handleDelimiterChange`,null),l([_(`value`)],j.prototype,`handleValueChange`,null),j=l([x(`SynOption`)],j),M=j})))()}export{w as a,E as i,M as n,C as o,T as r,S as s,N as t};