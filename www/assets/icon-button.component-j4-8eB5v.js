import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,Bt as n,D as r,T as i,w as a}from"./iframe-CFxyVgYz.js";import{n as o,t as s}from"./class-map-B2P1DYC9.js";import{n as c,t as l}from"./if-defined-Gus0LTOI.js";import{a as u,f as d,i as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./synergy-element-DOjsnQEs.js";import{n as b,t as x}from"./icon.component-DSYib2bb.js";import{n as S,t as C}from"./decorator-CJ_bAnlW.js";var w,T=e((()=>{t(),w=n`
	/* stylelint-disable */
  :host {
    display: inline-block;
    color: var(--syn-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--syn-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--syn-spacing-x-small);
    cursor: pointer;
    transition: var(--syn-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`})),E,D=e((()=>{t(),E=n`
  .icon-button {
    border-radius: 0;
    color: currentColor;
    font-size: inherit;
  }

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);

    /** #429: Use token for opacity */
    opacity: var(--syn-input-disabled-opacity);
  }

  /* Remove round borders */
  .icon-button:focus-visible {
    border-radius: var(--syn-icon-button-focus-ring-border-radius);
  }

  /* Colors */
  :host([color="currentColor"]) {
    color: currentColor;
  }

  :host([color="primary"]),
  :host([color="primary"]) .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color);
  }

  :host([color="primary"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color-hover);
  }

  :host([color="primary"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-interactive-emphasis-color-active);
  }

  :host([color="neutral"]) {
    color: var(--syn-interactive-quiet-color);
  }

  :host([color="neutral"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-interactive-quiet-color-hover);
  }

  :host([color="neutral"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-interactive-quiet-color-active);
  }

  :host([color="neutral"]) .icon-button:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-interactive-quiet-color);
  }

  /* Sizes */
  .icon-button--small {
    font-size: var(--syn-font-size-medium);
  }

  .icon-button--medium {
    font-size: var(--syn-font-size-x-large);
  }

  .icon-button--large {
    font-size: var(--syn-font-size-2x-large);
  }

  /* Force user to set "label" prop */
  .icon-button[aria-label=""] {
    border: var(--syn-border-width-large) var(--syn-color-error-600) solid;
  }

  .icon-button[aria-label=""]::after {
    content: "Set label prop for a11y to get rid of this text and border!";
    font-size: var(--syn-font-size-2x-small);
    margin-left: var(--syn-spacing-2x-small);
  }
`})),O,k,A=e((()=>{s(),a(),l(),_(),m(),p(),b(),T(),D(),S(),f(),O=class extends v{constructor(...e){super(...e),this.hasFocus=!1,this.label=``,this.size=`inherit`,this.color=`currentColor`,this.disabled=!1}static{this.styles=[u,w,E]}static{this.dependencies={"syn-icon":x}}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?i`a`:i`button`;return r`
      <${t}
        part="base"
        class=${o({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size===`small`,"icon-button--medium":this.size===`medium`,"icon-button--large":this.size===`large`})}
        ?disabled=${c(e?void 0:this.disabled)}
        type=${c(e?void 0:`button`)}
        href=${c(e?this.href:void 0)}
        target=${c(e?this.target:void 0)}
        download=${c(e?this.download:void 0)}
        rel=${c(e&&this.target?`noreferrer noopener`:void 0)}
        role=${c(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${c(this.name)}
          library=${c(this.library)}
          src=${c(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${t}>
    `}},g([y(`.icon-button`)],O.prototype,`button`,void 0),g([d()],O.prototype,`hasFocus`,void 0),g([h()],O.prototype,`name`,void 0),g([h()],O.prototype,`library`,void 0),g([h()],O.prototype,`src`,void 0),g([h()],O.prototype,`href`,void 0),g([h()],O.prototype,`target`,void 0),g([h()],O.prototype,`download`,void 0),g([h()],O.prototype,`label`,void 0),g([h({reflect:!0})],O.prototype,`size`,void 0),g([h({reflect:!0})],O.prototype,`color`,void 0),g([h({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),O=g([C(`SynIconButton`)],O),k=O}));export{A as n,k as t};