import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-Dt4MSOQD.js";import{t as f}from"./query-DOHNhzf6.js";import{r as p,t as m}from"./if-defined-DmmMeZVG.js";import{n as h,t as g}from"./class-map-HZwHklGF.js";import{n as _,r as v,t as y}from"./slot-CUH75lUH.js";import{n as b}from"./watch-Q8hEwzVb.js";import{i as x,r as S}from"./button.component-BbtAXm8L.js";import{n as C,t as w}from"./decorator-DZesXZg7.js";var T;function E(){return(E=e((()=>{r(),T=n`
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
`})))()}var D,O;function k(){return(k=e((()=>{r(),u(),m(),g(),v(),c(),s(),E(),x(),C(),D=class extends d{constructor(...e){super(...e),this.hasSlotController=new y(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.iconOnly=!1,this.checked=!1,this.disabled=!1,this.readonly=!1,this.size=`medium`}static{this.styles=[i,S,T]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}isDisabled(){return this.disabled||this.readonly}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleClick(e){if(this.isDisabled()){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleSlotChange(){let e=_(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),n=t.length===1&&t[0].tagName.toLowerCase()===`syn-icon`;this.iconOnly=n&&e===``}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.isDisabled()?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return t`
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
    `}},l([f(`.button`)],D.prototype,`input`,void 0),l([f(`slot:not([name])`)],D.prototype,`defaultSlot`,void 0),l([o()],D.prototype,`hasFocus`,void 0),l([o()],D.prototype,`iconOnly`,void 0),l([a({reflect:!0,type:Boolean})],D.prototype,`checked`,void 0),l([a()],D.prototype,`value`,void 0),l([a({reflect:!0,type:Boolean})],D.prototype,`disabled`,void 0),l([a({reflect:!0,type:Boolean})],D.prototype,`readonly`,void 0),l([a({reflect:!0})],D.prototype,`size`,void 0),l([b([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],D.prototype,`handleDisabledChange`,null),D=l([w(`SynRadioButton`)],D),O=D})))()}function A(){return(A=e((()=>{k(),O.define(`syn-radio-button`)})))()}export{A as t};