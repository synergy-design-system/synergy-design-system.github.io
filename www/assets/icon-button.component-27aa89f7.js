import{s as b,n as p,a as y}from"./static-c19bae7e.js";import{o as n}from"./if-defined-1099e361.js";import{c as h,r as f,n as e,S as m}from"./component.styles-226283f4.js";import{e as v}from"./query-f49a08ce.js";import{S as g}from"./icon.component-e2a42406.js";import{i as d}from"./directive-helpers-a6c66f8a.js";const $=d`
  .icon-button {
    color: currentColor;
    font-size: inherit;
  }

  /* Color variants */
  .icon-button--neutral,
  .icon-button--neutral:focus-visible:not(.icon-button--disabled):not(:hover) {
    color: var(--syn-color-neutral-950);
  }

  .icon-button--primary,
  .icon-button--primary:focus-visible:not(.icon-button--disabled) {
    color: var(--syn-color-primary-600);
  }

  .icon-button--primary:hover:not(.icon-button--disabled) {
    color: var(--syn-color-primary-900);
  }

  .icon-button--primary:active:not(.icon-button--disabled) {
    color: var(--syn-color-primary-950);
  }

  .icon-button--disabled {
    color: var(--syn-color-neutral-400);
  }

  /* Remove round borders */
  .icon-button:focus-visible {
    border-radius: var(--syn-border-radius-none);
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
`,z=d`
	/* stylelint-disable */
  ${h}

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

  ${$}
`;var x=Object.defineProperty,S=Object.getOwnPropertyDescriptor,r=(l,o,s,a)=>{for(var i=a>1?void 0:a?S(o,s):o,c=l.length-1,u;c>=0;c--)(u=l[c])&&(i=(a?u(o,s,i):u(i))||i);return a&&i&&x(o,s,i),i};class t extends m{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.size="inherit",this.color="currentColor",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){const o=!!this.href,s=o?b`a`:b`button`;return p`
      <${s}
        part="base"
        class=${y({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus,"icon-button--small":this.size==="small","icon-button--medium":this.size==="medium","icon-button--large":this.size==="large","icon-button--primary":this.color==="primary","icon-button--neutral":this.color==="neutral"})}
        ?disabled=${n(o?void 0:this.disabled)}
        type=${n(o?void 0:"button")}
        href=${n(o?this.href:void 0)}
        target=${n(o?this.target:void 0)}
        download=${n(o?this.download:void 0)}
        rel=${n(o&&this.target?"noreferrer noopener":void 0)}
        role=${n(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <syn-icon
          class="icon-button__icon"
          name=${n(this.name)}
          library=${n(this.library)}
          src=${n(this.src)}
          aria-hidden="true"
        ></syn-icon>
      </${s}>
    `}}t.styles=z;t.dependencies={"syn-icon":g};r([v(".icon-button")],t.prototype,"button",2);r([f()],t.prototype,"hasFocus",2);r([e()],t.prototype,"name",2);r([e()],t.prototype,"library",2);r([e()],t.prototype,"src",2);r([e()],t.prototype,"href",2);r([e()],t.prototype,"target",2);r([e()],t.prototype,"download",2);r([e()],t.prototype,"label",2);r([e({reflect:!0})],t.prototype,"size",2);r([e({reflect:!0})],t.prototype,"color",2);r([e({type:Boolean,reflect:!0})],t.prototype,"disabled",2);export{t as S};
//# sourceMappingURL=icon-button.component-27aa89f7.js.map
