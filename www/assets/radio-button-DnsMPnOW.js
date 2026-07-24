import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-B1XRUXNb.js";import{r as m,t as h}from"./if-defined-gcdQCgEY.js";import{n as g,t as _}from"./class-map-ivi47HnP.js";import{n as v,r as y,t as b}from"./slot-Cl6UAYP5.js";import{n as x,t as S}from"./watch-RA3ULoLi.js";import{i as C,r as w}from"./button.component-1xr6leOc.js";import{n as T,t as E}from"./decorator-B3p9Y8B9.js";var D,O=e((()=>{r(),D=n`
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
`})),k,A,j=e((()=>{r(),d(),h(),_(),y(),S(),l(),c(),O(),C(),T(),s(),k=class extends f{constructor(...e){super(...e),this.hasSlotController=new b(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.iconOnly=!1,this.checked=!1,this.disabled=!1,this.readonly=!1,this.size=`medium`}static{this.styles=[a,w,D]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}isDisabled(){return this.disabled||this.readonly}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleClick(e){if(this.isDisabled()){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleSlotChange(){let e=v(this.defaultSlot).trim(),t=this.defaultSlot.assignedElements({flatten:!0}),n=t.length===1&&t[0].tagName.toLowerCase()===`syn-icon`;this.iconOnly=n&&e===``}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.isDisabled()?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return t`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?` button--checked`:``}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${g({button:!0,"button--checked":this.checked,"button--default":!0,"button--disabled":this.disabled,"button--filled":this.checked,"button--focused":this.hasFocus,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`),"button--icon-only":this.iconOnly,"button--large":this.size===`large`,"button--medium":this.size===`medium`,"button--primary":!0,"button--readonly":this.readonly,"button--small":this.size===`small`,"button--text":!this.checked})}
          aria-disabled=${this.disabled}
          type="button"
          tabindex=${m(this.disabled?`-1`:void 0)}
          value=${m(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label" @slotchange=${this.handleSlotChange}></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}},u([o(`.button`)],k.prototype,`input`,void 0),u([o(`slot:not([name])`)],k.prototype,`defaultSlot`,void 0),u([i()],k.prototype,`hasFocus`,void 0),u([i()],k.prototype,`iconOnly`,void 0),u([p({reflect:!0,type:Boolean})],k.prototype,`checked`,void 0),u([p()],k.prototype,`value`,void 0),u([p({reflect:!0,type:Boolean})],k.prototype,`disabled`,void 0),u([p({reflect:!0,type:Boolean})],k.prototype,`readonly`,void 0),u([p({reflect:!0})],k.prototype,`size`,void 0),u([x([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],k.prototype,`handleDisabledChange`,null),k=u([E(`SynRadioButton`)],k),A=k})),M=e((()=>{j(),j(),A.define(`syn-radio-button`)}));export{M as t};