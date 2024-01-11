import{S as h}from"./radio-group-0f07b402.js";import{b as d}from"./button-4722481c.js";import"./checkbox-29e641f0.js";import"./icon-button-50a74d2b.js";import"./icon-2184a60b.js";import"./input-467d0662.js";import{n as c,a as b}from"./static-c19bae7e.js";import{H as f}from"./slot-4492e2ee.js";import{o as m}from"./if-defined-1099e361.js";import{r as y,n,w as x,S as w}from"./component.styles-1c783f8d.js";import{e as p}from"./query-f49a08ce.js";import{i as _,x as g}from"./directive-helpers-a6c66f8a.js";import"./radio-891c1d31.js";import"./switch-9cd2db3f.js";import"./textarea-598c5540.js";import"./form-daa16d55.js";import"./form-control.styles-d852634a.js";import"./localize-d6e19d2a.js";import"./icon.component-e33c164c.js";import"./live-50407c8a.js";h.define("syn-button-group");const v=_`
	/* stylelint-disable */
  ${d}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,o=(s,t,a,r)=>{for(var i=r>1?void 0:r?C(t,a):t,l=s.length-1,u;l>=0;l--)(u=s[l])&&(i=(r?u(t,a,i):u(i))||i);return r&&i&&$(t,a,i),i};class e extends w{constructor(){super(...arguments),this.hasSlotController=new f(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return c`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${b({button:!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${m(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}}e.styles=v;o([p(".button")],e.prototype,"input",2);o([p(".hidden-input")],e.prototype,"hiddenInput",2);o([y()],e.prototype,"hasFocus",2);o([n({type:Boolean,reflect:!0})],e.prototype,"checked",2);o([n()],e.prototype,"value",2);o([n({type:Boolean,reflect:!0})],e.prototype,"disabled",2);o([n({reflect:!0})],e.prototype,"size",2);o([x("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);e.define("syn-radio-button");function k(s){const t=s||typeof window<"u"&&window;return!!(t&&(t.navigator.userAgent.match(/Chromatic/)||t.location.href.match(/chromatic=true/)))}const S=(s,...t)=>k()?g`
      <style>
      :root {
        --syn-transition-x-fast: -1s !important;
        --syn-transition-fast: -1s !important;
        --syn-transition-medium: -1s !important;
        --syn-transition-slow: -1s !important;
        --syn-transition-x-slow: -1s !important;
      }
      syn-spinner,
      syn-button::part(spinner) {
        --speed: -1s !important;
      }
      </style>
      ${s(...t)}
    `:s(...t),L={decorators:[S],parameters:{chromatic:{disableSnapshot:!0},docs:{stories:{inline:!1}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{disable:!0,matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{L as default};
//# sourceMappingURL=preview-31d7cc75.js.map
