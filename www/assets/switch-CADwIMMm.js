import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-BVDl_-fF.js";import{n as i,t as a}from"./class-map-BmdGqO7G.js";import{r as o,t as s}from"./form-CV4G6JGX.js";import{r as c,t as l}from"./slot-DgcqpP0-.js";import{r as u,t as d}from"./if-defined-BsCyJVG6.js";import{_ as f,a as p,f as m,i as h,n as g,o as _,r as v,s as y,t as b,y as x}from"./synergy-element-fkSPPZqT.js";import{n as S,t as C}from"./watch-I6gMK-uE.js";import{n as w,t as T}from"./decorator-ChmomMqD.js";import{r as E,t as D}from"./live-C1Vl0YXB.js";import{n as O,t as k}from"./form-control.styles-Bu3u3vCk.js";import{n as A,t as j}from"./default-value-zJ_4n3ED.js";var M,N=e((()=>{r(),M=n`
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
`})),P,F,I=e((()=>{a(),A(),o(),c(),r(),d(),D(),y(),C(),_(),O(),g(),N(),w(),h(),P=class extends b{constructor(...e){super(...e),this.formControlController=new s(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new l(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.readonly=!1,this.checked=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}static{this.styles=[p,k,M]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleInput(){this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(e){if(this.readonly){e.preventDefault();return}this.checked=!this.checked,this.emit(`syn-change`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleKeyDown(e){this.readonly||(e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`syn-change`),this.emit(`syn-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`syn-change`),this.emit(`syn-input`)))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),n=this.helpText?!0:!!e;return t`
      <div
        class=${i({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${i({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--readonly":this.readonly,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${u(this.value)}
            .checked=${E(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
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
          aria-hidden=${n?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}},v([m(`input[type="checkbox"]`)],P.prototype,`input`,void 0),v([f()],P.prototype,`hasFocus`,void 0),v([x({reflect:!0})],P.prototype,`title`,void 0),v([x()],P.prototype,`name`,void 0),v([x()],P.prototype,`value`,void 0),v([x({reflect:!0})],P.prototype,`size`,void 0),v([x({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),v([x({type:Boolean,reflect:!0})],P.prototype,`readonly`,void 0),v([x({type:Boolean,reflect:!0})],P.prototype,`checked`,void 0),v([j(`checked`)],P.prototype,`defaultChecked`,void 0),v([x({reflect:!0})],P.prototype,`form`,void 0),v([x({type:Boolean,reflect:!0})],P.prototype,`required`,void 0),v([x({attribute:`help-text`})],P.prototype,`helpText`,void 0),v([S(`checked`,{waitUntilFirstUpdate:!0})],P.prototype,`handleCheckedChange`,null),v([S(`disabled`,{waitUntilFirstUpdate:!0})],P.prototype,`handleDisabledChange`,null),P=v([T(`SynSwitch`)],P),F=P})),L=e((()=>{I(),I(),F.define(`syn-switch`)}));export{L as t};