import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,t as n}from"./lit-CHM2bYch.js";import{a as r,n as i,t as a}from"./static-html-xI6Yvsxg.js";import{_ as o,a as s,f as c,h as l,n as u,o as d,r as f,s as p,t as m}from"./synergy-element-DXBTABhW.js";import{r as h,t as g}from"./if-defined-mhvBYBfN.js";import{n as _,t as v}from"./class-map-DWgFSlwb.js";import{n as y,t as b}from"./icon.component-pijfS-WS.js";import{n as x,t as S}from"./decorator-DVAJxXeQ.js";var C;function w(){return(w=e((()=>{n(),C=t`
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
`})))()}var T,E;function D(){return(D=e((()=>{v(),a(),g(),p(),d(),u(),y(),w(),x(),T=class extends m{constructor(...e){super(...e),this.hasFocus=!1,this.label=``,this.size=`inherit`,this.color=`currentColor`,this.disabled=!1}static{this.styles=[s,C]}static{this.dependencies={"syn-icon":b}}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?i`a`:i`button`;return r`
      <${t}
        part="base"
        class=${_({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--large":this.size===`large`,"icon-button--medium":this.size===`medium`,"icon-button--small":this.size===`small`})}
        ?disabled=${h(e?void 0:this.disabled)}
        type=${h(e?void 0:`button`)}
        href=${h(e?this.href:void 0)}
        target=${h(e?this.target:void 0)}
        download=${h(e?this.download:void 0)}
        rel=${h(e&&this.target?`noreferrer noopener`:void 0)}
        role=${h(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${h(this.name)}
          library=${h(this.library)}
          src=${h(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${t}>
    `}},f([c(`.icon-button`)],T.prototype,`button`,void 0),f([l()],T.prototype,`hasFocus`,void 0),f([o()],T.prototype,`name`,void 0),f([o()],T.prototype,`library`,void 0),f([o()],T.prototype,`src`,void 0),f([o()],T.prototype,`href`,void 0),f([o()],T.prototype,`target`,void 0),f([o()],T.prototype,`download`,void 0),f([o()],T.prototype,`label`,void 0),f([o({reflect:!0})],T.prototype,`size`,void 0),f([o({reflect:!0})],T.prototype,`color`,void 0),f([o({reflect:!0,type:Boolean})],T.prototype,`disabled`,void 0),T=f([S(`SynIconButton`)],T),E=T})))()}export{D as n,E as t};