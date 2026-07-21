import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,t as n}from"./lit-BfcklOOD.js";import{d as r,m as i,u as a}from"./library-knVXvyJC.js";import{_ as o,a as s,f as c,i as l,n as u,o as d,r as f,s as p,t as m,y as h}from"./synergy-element-BFEAJlBN.js";import{r as g,t as _}from"./if-defined-gcdQCgEY.js";import{n as v,t as y}from"./class-map-BntiyWRh.js";import{n as b,t as x}from"./icon.component-03RqJYOT.js";import{n as S,t as C}from"./decorator-B3p9Y8B9.js";var w,T=e((()=>{n(),w=t`
  :host {
    color: var(--syn-color-neutral-600);
    display: inline-block;
  }

  .icon-button {
    align-items: center;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    border-radius: 0;
    color: currentColor;
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    font-size: inherit;
    padding: var(--syn-spacing-x-small);
    transition: var(--syn-transition-x-fast) color;
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button:focus-visible {
    border-radius: var(--syn-icon-button-focus-ring-border-radius); /* Remove round borders */
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-700);
  }

  .icon-button--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
  }

  .icon-button__icon {
    pointer-events: none;
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
`})),E,D,O=e((()=>{y(),a(),_(),p(),d(),u(),b(),T(),S(),l(),E=class extends m{constructor(...e){super(...e),this.hasFocus=!1,this.label=``,this.size=`inherit`,this.color=`currentColor`,this.disabled=!1}static{this.styles=[s,w]}static{this.dependencies={"syn-icon":x}}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?r`a`:r`button`;return i`
      <${t}
        part="base"
        class=${v({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--large":this.size===`large`,"icon-button--medium":this.size===`medium`,"icon-button--small":this.size===`small`})}
        ?disabled=${g(e?void 0:this.disabled)}
        type=${g(e?void 0:`button`)}
        href=${g(e?this.href:void 0)}
        target=${g(e?this.target:void 0)}
        download=${g(e?this.download:void 0)}
        rel=${g(e&&this.target?`noreferrer noopener`:void 0)}
        role=${g(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${g(this.name)}
          library=${g(this.library)}
          src=${g(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${t}>
    `}},f([c(`.icon-button`)],E.prototype,`button`,void 0),f([o()],E.prototype,`hasFocus`,void 0),f([h()],E.prototype,`name`,void 0),f([h()],E.prototype,`library`,void 0),f([h()],E.prototype,`src`,void 0),f([h()],E.prototype,`href`,void 0),f([h()],E.prototype,`target`,void 0),f([h()],E.prototype,`download`,void 0),f([h()],E.prototype,`label`,void 0),f([h({reflect:!0})],E.prototype,`size`,void 0),f([h({reflect:!0})],E.prototype,`color`,void 0),f([h({reflect:!0,type:Boolean})],E.prototype,`disabled`,void 0),E=f([C(`SynIconButton`)],E),D=E}));export{O as n,D as t};