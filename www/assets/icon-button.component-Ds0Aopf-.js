import{e as p}from"./class-map-uZN7Me8m.js";import{j as d,n as b,u as y}from"./iframe-C38E_jzw.js";import{o as e}from"./if-defined-DfCBjZD6.js";import{c as h,n,S as f}from"./synergy-element-DGBJpgid.js";import{S as m,r as v}from"./icon.component-B-tvdrx5.js";import{a as g}from"./query-DAIS6qJ0.js";import{e as $}from"./decorator-DANECR0-.js";const z=d`
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
`,x=d`
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
    border-radius: var(--syn-border-radius-none);
  }

  /* Colors */
  :host([color="currentColor"]) {
    color: currentColor;
  }

  :host([color="primary"]),
  :host([color="primary"]) .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  :host([color="primary"]) .icon-button:hover:not(.icon-button--disabled) {
    color: var(--syn-color-primary-900);
  }

  :host([color="primary"]) .icon-button:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-950);
  }

  :host([color="neutral"]),
  :host([color="neutral"]) .icon-button:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-color-neutral-950);
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
`;var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,r=(o,i,l,a)=>{for(var s=a>1?void 0:a?_(i,l):i,c=o.length-1,u;c>=0;c--)(u=o[c])&&(s=(a?u(i,l,s):u(s))||s);return a&&s&&S(i,l,s),s};let t=class extends f{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){const o=!!this.href,i=o?b`a`:b`button`;return y`
      <${i}
        part="base"
        class=${p({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large"})}
        ?disabled=${e(o?void 0:this.disabled)}
        type=${e(o?void 0:"button")}
        href=${e(o?this.href:void 0)}
        target=${e(o?this.target:void 0)}
        download=${e(o?this.download:void 0)}
        rel=${e(o&&this.target?"noreferrer noopener":void 0)}
        role=${e(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${i}>
    `}};t.styles=[h,z,x];t.dependencies={"syn-icon":m};r([g(".icon-button")],t.prototype,"button",2);r([v()],t.prototype,"hasFocus",2);r([n()],t.prototype,"name",2);r([n()],t.prototype,"library",2);r([n()],t.prototype,"src",2);r([n()],t.prototype,"href",2);r([n()],t.prototype,"target",2);r([n()],t.prototype,"download",2);r([n()],t.prototype,"label",2);r([n({reflect:!0})],t.prototype,"size",2);r([n({reflect:!0})],t.prototype,"color",2);r([n({type:Boolean,reflect:!0})],t.prototype,"disabled",2);t=r([$("SynIconButton")],t);export{t as S};
