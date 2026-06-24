import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,h as n,t as r}from"./lit-BVDl_-fF.js";import{n as i,t as a}from"./class-map-DgYlm_fS.js";import{r as o,t as s}from"./form-CV4G6JGX.js";import{r as c,t as l}from"./slot-DgcqpP0-.js";import{r as u,t as d}from"./if-defined-BsCyJVG6.js";import{a as f,f as p,i as m,n as h,o as g,r as _,s as v,t as y,y as b}from"./synergy-element-BtCydRhm.js";import{n as x,t as S}from"./watch-I6gMK-uE.js";import{n as C,t as w}from"./icon.component-B9Dbh5an.js";import{n as T,t as E}from"./decorator-ChmomMqD.js";import{r as D,t as O}from"./live-CDIWIBTk.js";import{n as k,t as A}from"./default-value-zJ_4n3ED.js";import{n as j,t as M}from"./form-control.styles-Bu3u3vCk.js";var N,P=e((()=>{r(),N=n`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: inline-block;
  }

  .checkbox {
    align-items: flex-start;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    padding: var(--syn-spacing-2x-small) 0; /* #1083: This adds spacing around multi-line labels */
    position: relative;
    vertical-align: middle;
  }

  .checkbox--small {
    --toggle-size: var(--syn-toggle-size-small);

    font-size: var(--syn-input-font-size-small);
    padding: var(--syn-spacing-3x-small) 0;
  }

  .checkbox--medium {
    --toggle-size: var(--syn-toggle-size-medium);

    font-size: var(--syn-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--syn-toggle-size-large);

    font-size: var(--syn-input-font-size-large);
  }

  .checkbox__control {
    align-items: center;
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: var(--syn-checkbox-border-radius);
    color: var(--syn-color-neutral-0);
    display: inline-flex;
    flex: 0 0 auto;
    height: var(--toggle-size);
    justify-content: center;
    margin: 0.1em 0; /* #1083: This adds spacing around multi-line labels */
    position: relative;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
    width: var(--toggle-size);
  }

  .checkbox__input {
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    height: var(--toggle-size);
    width: var(--toggle-size);
  }

  /**
   * Hover
   * Applies the hover state to the whole component
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):not(.checkbox--readonly):hover .checkbox__control {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--disabled):not(.checkbox--readonly) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
  }

  /**
   * Checked/indeterminate + hover
   * Applies the hover state to the whole component
   */
  .checkbox.checkbox--checked:not(.checkbox--disabled):not(.checkbox--readonly):hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):not(.checkbox--readonly):hover .checkbox__control {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  /*
   * #443: Add active styles
   * The checked and unchecked states have different active colors
   * Note the fallback is defined to match the hover color.
   * This is done to make sure no active state is shown at all if no active color is defined.
   * Still better than showing one for the unchecked state but not for the checked state.
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):not(.checkbox--readonly):active .checkbox__control {
    border-color: var(--syn-input-border-color-active);
  }

  /* Checked/indeterminate */
  .checkbox.checkbox--checked:not(.checkbox--disabled):not(.checkbox--readonly):active .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):not(.checkbox--readonly):active .checkbox__control {
    background: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /** #429: Use token for opacity */
  .checkbox--disabled {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .checkbox__label {
    align-self: center;
    color: var(--syn-input-label-color);
    display: inline-block;
    line-height: var(--syn-line-height-normal);
    margin-inline-start: var(--syn-spacing-x-small);
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    color: var(--syn-input-required-content-color);
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  :host([data-user-invalid]) .checkbox__control {
    background: var(--syn-input-border-color-focus-error);
    border-color: var(--syn-input-border-color-focus-error);
  }

  /**
   * #943: When invalid, use a transparent background if not checked or indeterminate
   */
  :host([data-user-invalid]:not([checked]):not([indeterminate])) .checkbox__control {
    background: transparent;
  }

  /**
   * #1171: Readonly state
   */
  .checkbox.checkbox--readonly {
    cursor: default;
  }

  .checkbox.checkbox--readonly .checkbox__label {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-user-select: auto;
    user-select: auto;
  }

  .checkbox.checkbox--readonly .checkbox__control {
    background: var(--syn-input-readonly-background-color);
    border-color: var(--syn-input-readonly-background-color);
    color: var(--syn-readonly-indicator-color);
    cursor: default;
  }

  .checkbox.checkbox--readonly .checkbox__input:focus ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }
`})),F,I,L=e((()=>{a(),k(),o(),c(),r(),d(),O(),v(),S(),g(),j(),h(),C(),P(),T(),m(),F=class extends y{constructor(...e){super(...e),this.formControlController=new s(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new l(this,`help-text`),this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.readonly=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}static{this.styles=[f,M,N]}static{this.dependencies={"syn-icon":w}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(e){if(this.readonly){e.preventDefault();return}this.checked=!this.checked,this.indeterminate=!1,this.emit(`syn-change`)}handleBlur(){this.emit(`syn-blur`)}handleInput(){this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.emit(`syn-focus`)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),n=this.helpText?!0:!!e;return t`
      <div
        class=${i({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":n})}
      >
        <label
          part="base"
          class=${i({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--readonly":this.readonly,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${u(this.value)}
            .indeterminate=${D(this.indeterminate)}
            .checked=${D(this.checked)}
            .disabled=${this.disabled}
            .readOnly=${this.readonly}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?t`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:``}
            ${!this.checked&&this.indeterminate?t`
                  <syn-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></syn-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
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
    `}},_([p(`input[type="checkbox"]`)],F.prototype,`input`,void 0),_([b({reflect:!0})],F.prototype,`title`,void 0),_([b()],F.prototype,`name`,void 0),_([b()],F.prototype,`value`,void 0),_([b({reflect:!0})],F.prototype,`size`,void 0),_([b({type:Boolean,reflect:!0})],F.prototype,`disabled`,void 0),_([b({type:Boolean,reflect:!0})],F.prototype,`readonly`,void 0),_([b({type:Boolean,reflect:!0})],F.prototype,`checked`,void 0),_([b({type:Boolean,reflect:!0})],F.prototype,`indeterminate`,void 0),_([A(`checked`)],F.prototype,`defaultChecked`,void 0),_([b({reflect:!0})],F.prototype,`form`,void 0),_([b({type:Boolean,reflect:!0})],F.prototype,`required`,void 0),_([b({attribute:`help-text`})],F.prototype,`helpText`,void 0),_([x(`disabled`,{waitUntilFirstUpdate:!0})],F.prototype,`handleDisabledChange`,null),_([x([`checked`,`indeterminate`],{waitUntilFirstUpdate:!0})],F.prototype,`handleStateChange`,null),F=_([E(`SynCheckbox`)],F),I=F})),R=e((()=>{L(),L(),I.define(`syn-checkbox`)}));export{R as t};