import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,h as n,t as r}from"./lit-CHM2bYch.js";import{_ as i,a,f as o,h as s,n as c,o as l,r as u,s as d,t as f}from"./synergy-element-BbBQWYgK.js";import{r as p,t as m}from"./if-defined-mhvBYBfN.js";import{n as h,t as g}from"./class-map-DWgFSlwb.js";import{n as _,r as v,t as y}from"./slot-Bs_OjGGF.js";import{n as b}from"./watch-B40nufxp.js";import{i as x,r as S}from"./button.component-CXxY9Iej.js";import{n as C,t as w}from"./decorator-DVAJxXeQ.js";var T;function E(){return(E=e((()=>{r(),T=n`
  :host([readonly]) {
    cursor: default;
  }

  .button {
    /* Medium size is the default */
    --syn-radio-button-height: 32px;
    --syn-radio-button-radius: var(--syn-radio-button-border-radius-medium);

    border-radius: var(--syn-radio-button-radius);
    font-weight: normal;
    line-height: calc(var(--syn-radio-button-height) - var(--syn-input-border-width) * 2);
    min-height: var(--syn-radio-button-height);
  }

  .button--small {
    --syn-radio-button-height: 24px;
    --syn-radio-button-radius: var(--syn-radio-button-border-radius-small);
  }

  .button--large {
    --syn-radio-button-height: 48px;
    --syn-radio-button-radius: var(--syn-radio-button-border-radius-large);
  }

  /**
   * Icon only buttons
   */
  .button--icon-only .button__label {
    border-radius: var(--syn-border-radius-medium);
    padding-inline: var(--syn-spacing-2x-small);
  }

  /**
   * Override the default unchecked button
   */
  .button--text {
    color: var(--syn-interactive-quiet-color);
  }

  .button--text:hover:not(.button--disabled):not(.button--readonly) {
    background: var(--syn-interactive-background-color-hover);
    color: var(--syn-interactive-quiet-color-hover);
  }

  /**
   * Disabled active buttons should look like their default state, but with opacity applied.
   * This overrides the defaults from the button component.
   * Note we cannot use syn-button-color because it will be the wrong color in dark mode.
   */
  .button--filled.button--primary,
  .button--filled.button--primary.button--disabled {
    background: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
    color: var(--syn-color-neutral-0);
  }

  /**
   * Make sure the active state is applied to the button in its selected and none selected state.
   */
  .button--filled.button--primary:active:not(.button--disabled),
  .button--text.button--primary:active:not(.button--disabled) {
    background: var(--syn-button-color-active);
    border-color: var(--syn-button-color-active);
    color: var(--syn-button-filled-color-text-active);
  }

  /**
   * Readonly state styles
   */
  .button.button--readonly {
    background: var(--syn-readonly-background-color);
    color: var(--syn-readonly-color-text);
    cursor: text;
    pointer-events: none;
    user-select: text;
  }

  .button.button--readonly:focus-visible {
    background: var(--syn-input-readonly-background-color-focus);
    color: var(--syn-readonly-color-text);
  }

  .button.button--readonly.button--checked {
    background: var(--syn-readonly-indicator-color);
    border-color: var(--syn-readonly-border-color);
    color: var(--syn-color-neutral-0);
  }
`})))()}var D,O;function k(){return(k=e((()=>{r(),d(),m(),g(),v(),l(),c(),E(),x(),C(),D=class extends f{constructor(...e){super(...e),this.hasSlotController=new y(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.iconOnly=!1,this.checked=!1,this.disabled=!1,this.readonly=!1,this.size=`medium`}static{this.styles=[a,S,T]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}isDisabled(){return this.disabled||this.readonly}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleClick(e){this.isDisabled()?(e.preventDefault(),e.stopPropagation()):this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleSlotChange(){let e=_(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),n=t.length===1&&t[0].tagName.toLowerCase()===`syn-icon`;this.iconOnly=n&&e===``}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.isDisabled()?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return t`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?` button--checked`:``}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${h({button:!0,"button--checked":this.checked,"button--default":!0,"button--disabled":this.disabled,"button--filled":this.checked,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`),"button--icon-only":this.iconOnly,"button--large":this.size===`large`,"button--medium":this.size===`medium`,"button--primary":!0,"button--readonly":this.readonly,"button--small":this.size===`small`,"button--text":!this.checked})}
          aria-disabled=${this.disabled}
          type="button"
          tabindex=${p(this.disabled?`-1`:void 0)}
          value=${p(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label" @slotchange=${this.handleSlotChange}></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}},u([o(`.button`)],D.prototype,`input`,void 0),u([o(`slot:not([name])`)],D.prototype,`defaultSlot`,void 0),u([s()],D.prototype,`hasFocus`,void 0),u([s()],D.prototype,`iconOnly`,void 0),u([i({reflect:!0,type:Boolean})],D.prototype,`checked`,void 0),u([i()],D.prototype,`value`,void 0),u([i({reflect:!0,type:Boolean})],D.prototype,`disabled`,void 0),u([i({reflect:!0,type:Boolean})],D.prototype,`readonly`,void 0),u([i({reflect:!0})],D.prototype,`size`,void 0),u([b([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],D.prototype,`handleDisabledChange`,null),D=u([w(`SynRadioButton`)],D),O=D})))()}function A(){return(A=e((()=>{k(),O.define(`syn-radio-button`)})))()}export{A as t};