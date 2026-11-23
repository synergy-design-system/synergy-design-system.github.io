import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,h as n,t as r}from"./lit-CHM2bYch.js";import{_ as i,a,f as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-BxyDqrtN.js";import{n as f,t as p}from"./class-map-DWgFSlwb.js";import{n as m,t as h}from"./localize-BiYWNE5i.js";import{n as g}from"./watch-B40nufxp.js";import{n as _,t as v}from"./icon-button.component-qZ2YDyws.js";var y;function b(){return(b=e((()=>{r(),y=n`
  :host {
    --background-color: transparent;
    --border-width: var(--syn-border-width-none);
    --border-color: transparent;
    --border-radius: var(--syn-border-radius-none);

    display: inline-block;
  }

  .tab {
    align-items: center;
    border-color: transparent;
    border-radius: var(--border-radius);
    border-style: solid;
    border-width: var(--border-width);
    color: var(--syn-typography-color-text);
    cursor: pointer;
    display: inline-flex;
    font: var(--syn-body-small-bold);
    min-height: var(--syn-spacing-2x-large);
    padding: var(--syn-spacing-small) var(--syn-spacing-large);
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;

    /* Stretch the tabs so they are aligned to each other vertically and the focus width stays the same  */
    width: 100%;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--syn-interactive-emphasis-color)
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--syn-color-primary-600);
    outline: var(--syn-focus-ring);
    outline-offset: calc(var(--syn-focus-ring-offset) * -1);
  }

  :host(:focus-visible:not(.tab--disabled)) {
    color: var(--syn-typography-color-text);
  }

  .tab.tab--disabled {
    cursor: not-allowed;
    opacity: var(--syn-opacity-50)
  }

  /**
   * Active tab styles
   */
  .tab--active {
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-style: solid;
    border-width: var(--border-width);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--syn-color-primary-600);
  }

  .tab.tab--active:not(:hover):not(.tab--disabled) {
    color: var(--syn-typography-color-text);
  }

  /**
   * Closable
   */
  .tab.tab--closable {
    padding: var(--syn-spacing-2x-small) var(--syn-spacing-large);
  }

  .tab__close-button {
    color: var(--syn-input-icon-icon-clearable-color);
    font-size: var(--syn-font-size-x-large);
    margin-inline-start: var(--syn-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--syn-spacing-x-small);
  }

  .tab__close-button::part(base):hover {
    color: var(--syn-input-icon-icon-clearable-color-hover);
  }

  /* #969: Prevent interactive color when close button is hovered */
  .tab.tab--closable:hover:has(.tab__close-button:hover) {
    color: var(--syn-typography-color-text);
  }

  /* Slotted icon style */
  .tab ::slotted(syn-icon) {
    font-size: var(--syn-font-size-x-large);
    margin-inline-end: var(--syn-spacing-x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: calc(var(--syn-focus-ring-offset) * -1);
    }
  }
`})))()}var x,S;function C(){return(C=e((()=>{p(),r(),u(),h(),c(),s(),_(),b(),x=0,S=class extends d{constructor(...e){super(...e),this.localize=new m(this),this.attrId=++x,this.componentId=`syn-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}static{this.styles=[a,y]}static{this.dependencies={"syn-icon-button":v}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`syn-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.tabIndex=this.disabled&&!this.active?-1:0}render(){return this.id=this.id.length>0?this.id:this.componentId,t`
      <div
        part="base"
        class=${f({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?t`
              <syn-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></syn-icon-button>
            `:``}
      </div>
    `}},l([o(`.tab`)],S.prototype,`tab`,void 0),l([i({reflect:!0})],S.prototype,`panel`,void 0),l([i({reflect:!0,type:Boolean})],S.prototype,`active`,void 0),l([i({reflect:!0,type:Boolean})],S.prototype,`closable`,void 0),l([i({reflect:!0,type:Boolean})],S.prototype,`disabled`,void 0),l([i({reflect:!0,type:Number})],S.prototype,`tabIndex`,void 0),l([g(`active`)],S.prototype,`handleActiveChange`,null),l([g(`disabled`)],S.prototype,`handleDisabledChange`,null)})))()}function w(){return(w=e((()=>{C(),S.define(`syn-tab`)})))()}export{w as t};