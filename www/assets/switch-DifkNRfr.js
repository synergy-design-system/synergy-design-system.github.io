import{e as h}from"./class-map-w4AcnhbO.js";import{d as u}from"./default-value-Cz9p_C4M.js";import{F as w}from"./form-d9hCJUdr.js";import{H as y}from"./slot-9EVoRGQc.js";import{j as p,c as v}from"./iframe-BF3kHbTn.js";import{o as f}from"./if-defined-DIaF50Gh.js";import{l as m}from"./live-CEpSrdW2.js";import{c as b,n as i,S as _}from"./synergy-element-D2l-m579.js";import{r as g}from"./icon.component-QU43wL0d.js";import{a as k}from"./query-D0jTsbLw.js";import{w as d}from"./watch-CEsCE2EF.js";import{f as C}from"./form-control.styles-DFi38fbk.js";import{e as x}from"./decorator-UnohHU6S.js";const z=p`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--syn-switch-height-small);
    --thumb-size: var(--syn-toggle-size-small);
    --width: var(--syn-switch-width-small);

    font-size: var(--syn-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--syn-switch-height-medium);
    --thumb-size: var(--syn-toggle-size-medium);
    --width: var(--syn-switch-width-medium);

    font-size: var(--syn-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--syn-switch-height-large);
    --thumb-size: var(--syn-toggle-size-large);
    --width: var(--syn-switch-width-large);

    font-size: var(--syn-input-font-size-large);
  }

  .switch {
    align-items: center;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-size: inherit;
    font-weight: var(--syn-input-font-weight);
    position: relative;
    vertical-align: middle;
  }

  .switch.switch--small {
    padding: var(--syn-spacing-2x-small) 0;
  }

  .switch.switch--medium {
    padding: var(--syn-spacing-2x-small) 0;
  }

  .switch.switch--large {
    padding: var(--syn-spacing-3x-small) 0;
  }

  /* Hint: can be removed, if the padding stylings for sizes from above are removed */
  .form-control--has-help-text .switch {
    padding-bottom: 0;
  }

  .switch__control {
    align-items: center;
    background-color: var(--syn-input-icon-icon-clearable-color);
    border: solid var(--syn-border-width-medium) var(--syn-input-icon-icon-clearable-color);
    border-radius: var(--height);
    display: inline-flex;
    flex: 0 0 auto;
    height: var(--height);
    justify-content: center;
    position: relative;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color;
    width: var(--width);
  }

  .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    border: none;
    border-radius: 50%;
    height: var(--thumb-size);
    transition:
      var(--syn-transition-fast) translate ease,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) box-shadow;
    translate: calc((var(--width) - var(--height)) / -2);
    width: var(--thumb-size);
  }

  .switch__input {
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly):hover .switch__control {
    background-color: var(--syn-input-icon-icon-clearable-color-hover);
    border-color: var(--syn-input-icon-icon-clearable-color-hover);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-input-icon-icon-clearable-color);
    border-color: var(--syn-input-icon-icon-clearable-color);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly):hover .switch__control {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly):hover .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--syn-color-neutral-0);
    outline: none;
  }

  /*
   * #443: Add active styles
   * The checked and unchecked states have different active colors
   * Note the fallback is defined to match the hover color.
   * This is done to make sure no active state is shown at all if no active color is defined.
   * Still better than showing one for the unchecked state but not for the checked state.
   */
  .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly):active .switch__control {
    background: var(--syn-input-icon-icon-clearable-color-active);
    border-color: var(--syn-input-icon-icon-clearable-color-active);
  }

  .switch.switch--checked:not(.switch--disabled):not(.switch--readonly):active .switch__control {
    background: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /** #429: Use token for opacity */
  .switch--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: var(--syn-spacing-x-small);
    user-select: none;
  }

  :host([required]) .switch__label::after {
    color: var(--syn-input-required-content-color);
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly) .switch__control {
    background-color: var(--syn-input-border-color-focus-error);
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .switch:not(.switch--checked):not(.switch--disabled):not(.switch--readonly):hover .switch__control {
    background-color: var(--syn-input-border-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /**
   * #1178: Readonly state
   */
  .switch.switch--readonly {
    cursor: default;
  }

  .switch.switch--readonly .switch__label {
    user-select: auto;
  }

  .switch.switch--readonly .switch__control {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
    cursor: default;
  }

  .switch.switch--readonly:hover .switch__control {
    background: var(--syn-input-readonly-background-color-hover);
    border-color: var(--syn-input-readonly-background-color-hover);
  }

  .switch.switch--readonly .switch__input:focus ~ .switch__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .switch.switch--readonly .switch__control .switch__thumb {
    background: var(--syn-readonly-indicator-color);
  }

  /* Override base styles to remove outline from thumb for readonly switches */
  .switch.switch--readonly .switch__input:focus-visible ~ .switch__control .switch__thumb {
    outline: none;
  }

  .switch.switch--readonly.switch--checked .switch__input:focus-visible ~ .switch__control .switch__thumb {
    outline: none !important;
  }

  /* Focus override */
  .switch.switch--readonly .switch__input:focus-visible ~ .switch__control {
    background-color: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var $=Object.defineProperty,F=Object.getOwnPropertyDescriptor,o=(t,r,c,n)=>{for(var s=n>1?void 0:n?F(r,c):r,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(n?l(r,c,s):l(s))||s);return n&&s&&$(r,c,s),s};let e=class extends _{constructor(){super(...arguments),this.formControlController=new w(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,r)=>t.checked=r}),this.hasSlotController=new y(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.readonly=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(t){if(this.readonly){t.preventDefault();return}this.checked=!this.checked,this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleKeyDown(t){this.readonly||(t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("syn-change"),this.emit("syn-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("syn-change"),this.emit("syn-input")))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),r=this.helpText?!0:!!t;return v`
      <div
        class=${h({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":r})}
      >
        <label
          part="base"
          class=${h({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--readonly":this.readonly,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${f(this.value)}
            .checked=${m(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${r?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[b,C,z];o([k('input[type="checkbox"]')],e.prototype,"input",2);o([g()],e.prototype,"hasFocus",2);o([i({reflect:!0})],e.prototype,"title",2);o([i()],e.prototype,"name",2);o([i()],e.prototype,"value",2);o([i({reflect:!0})],e.prototype,"size",2);o([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2);o([i({type:Boolean,reflect:!0})],e.prototype,"readonly",2);o([i({type:Boolean,reflect:!0})],e.prototype,"checked",2);o([u("checked")],e.prototype,"defaultChecked",2);o([i({reflect:!0})],e.prototype,"form",2);o([i({type:Boolean,reflect:!0})],e.prototype,"required",2);o([i({attribute:"help-text"})],e.prototype,"helpText",2);o([d("checked",{waitUntilFirstUpdate:!0})],e.prototype,"handleCheckedChange",1);o([d("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);e=o([x("SynSwitch")],e);e.define("syn-switch");
