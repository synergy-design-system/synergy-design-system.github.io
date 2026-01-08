import{e as d}from"./class-map-Bipwc1iT.js";import{d as k}from"./default-value-C9FSfLbD.js";import{F as m}from"./form-d9hCJUdr.js";import{H as y}from"./slot-9EVoRGQc.js";import{n as p,x as h}from"./iframe-DKzh7HHt.js";import{o as v}from"./if-defined-DWhkacz2.js";import{l as b}from"./live-OUPIEixJ.js";import{c as f,n as r,S as x}from"./synergy-element-D4Cp3n7p.js";import{S as g,r as _}from"./icon.component-CNp8HpxC.js";import{a as C}from"./query-D0jTsbLw.js";import{w as u}from"./watch-CEsCE2EF.js";import{f as z,a as $}from"./form-control.custom.styles-MMjKA1AU.js";import{e as w}from"./decorator-DeP7ND_N.js";const S=p`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--syn-toggle-size-small);
    font-size: var(--syn-input-font-size-small);
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
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 2px;
    background-color: var(--syn-input-background-color);
    color: var(--syn-color-neutral-0);
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--syn-input-border-color-hover);
    background-color: var(--syn-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--syn-color-primary-600);
    background-color: var(--syn-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--syn-color-primary-500);
    background-color: var(--syn-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--syn-input-required-content);
    color: var(--syn-input-required-content-color);
    margin-inline-start: var(--syn-input-required-content-offset);
  }
`,F=p`
  .checkbox {
    /* #1083: This adds spacing around multi-line labels */
    padding: var(--syn-spacing-2x-small) 0;
  }

  .checkbox--small {
    padding: var(--syn-spacing-3x-small) 0;
  }

  .checkbox__control {
    border-radius: var(--syn-checkbox-border-radius, var(--syn-input-border-radius-small));

    /* #1083: This adds spacing around multi-line labels */
    margin: 0.1em 0;
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    background-color: var(--syn-interactive-emphasis-color, var(--syn-color-primary-600));  
    border-color: var(--syn-interactive-emphasis-color, var(--syn-color-primary-600));  
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

  /** #429: Use token for opacity */
  .checkbox--disabled {
    opacity: var(--syn-input-disabled-opacity);
  }

  /**
   * Hover
   * Applies the hover state to the whole component
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):hover .checkbox__control {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  /**
   * Checked/indeterminate + hover
   * Applies the hover state to the whole component
   */
  .checkbox.checkbox--checked:not(.checkbox--disabled):hover .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):hover .checkbox__control {
    background-color: var(--syn-interactive-emphasis-color-hover, var(--syn-color-primary-900));
    border-color: var(--syn-interactive-emphasis-color-hover, var(--syn-color-primary-900));
  }

  /*
   * #443: Add active styles
   * The checked and unchecked states have different active colors
   * Note the fallback is defined to match the hover color.
   * This is done to make sure no active state is shown at all if no active color is defined.
   * Still better than showing one for the unchecked state but not for the checked state.
   */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled):active .checkbox__control {
    border-color: var(--syn-input-border-color-active);
  }

  /* Checked/indeterminate */
  .checkbox.checkbox--checked:not(.checkbox--disabled):active .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled):active .checkbox__control {
    background: var(--syn-interactive-emphasis-color-active, var(--syn-color-primary-900));
    border-color: var(--syn-interactive-emphasis-color-active, var(--syn-color-primary-900));
  }

  .checkbox__label {
    align-self: center;
    line-height: var(--syn-line-height-normal);
    margin-inline-start: var(--syn-spacing-x-small);
  }
`;var V=Object.defineProperty,T=Object.getOwnPropertyDescriptor,o=(t,i,s,n)=>{for(var c=n>1?void 0:n?T(i,s):i,a=t.length-1,l;a>=0;a--)(l=t[a])&&(c=(n?l(i,s,c):l(c))||c);return n&&c&&V(i,s,c),c};let e=class extends x{constructor(){super(...arguments),this.formControlController=new m(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,i)=>t.checked=i}),this.hasSlotController=new y(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("syn-change")}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleInput(){this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!t;return h`
      <div
        class=${d({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${d({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${v(this.value)}
            .indeterminate=${b(this.indeterminate)}
            .checked=${b(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?h`
                  <syn-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></syn-icon>
                `:""}
            ${!this.checked&&this.indeterminate?h`
                  <syn-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></syn-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${i?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[f,z,S,$,F];e.dependencies={"syn-icon":g};o([C('input[type="checkbox"]')],e.prototype,"input",2);o([_()],e.prototype,"hasFocus",2);o([r({reflect:!0})],e.prototype,"title",2);o([r()],e.prototype,"name",2);o([r()],e.prototype,"value",2);o([r({reflect:!0})],e.prototype,"size",2);o([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);o([r({type:Boolean,reflect:!0})],e.prototype,"checked",2);o([r({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);o([k("checked")],e.prototype,"defaultChecked",2);o([r({reflect:!0})],e.prototype,"form",2);o([r({type:Boolean,reflect:!0})],e.prototype,"required",2);o([r({attribute:"help-text"})],e.prototype,"helpText",2);o([u("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);o([u(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],e.prototype,"handleStateChange",1);e=o([w("SynCheckbox")],e);e.define("syn-checkbox");
