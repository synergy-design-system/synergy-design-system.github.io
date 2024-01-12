import{a as c}from"./static-c19bae7e.js";import{d as g,l as b}from"./live-50407c8a.js";import{F as v}from"./form-daa16d55.js";import{H as _}from"./slot-4492e2ee.js";import{i as y,x as d}from"./directive-helpers-a6c66f8a.js";import{o}from"./if-defined-1099e361.js";import{L as w}from"./localize-d6e19d2a.js";import{c as x,r as k,n as e,w as h,S as C}from"./component.styles-30ab6d75.js";import{e as $}from"./query-f49a08ce.js";import{S as z}from"./icon.component-80114edf.js";import{f as S}from"./form-control.styles-d852634a.js";const I=y`
  /* PADDINGS */
  .input--medium .input__control {
    padding: var(--syn-spacing-x-small) var(--syn-input-spacing-medium);
  }

  .input--small .input__control {
    padding: var(--syn-spacing-3x-small) var(--syn-input-spacing-small);
  }

  .input--large .input__control {
    padding: var(--syn-input-spacing-small) var(--syn-input-spacing-large);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-end: var(--syn-spacing-x-small);
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  /* ICONS SIZE */
   .input--small .input__prefix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-medium);
   }

  .input--medium .input__prefix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-large);
   }

  .input--large .input__prefix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
   }

  .input--small .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-medium);
   }

  .input--medium .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-input-spacing-large);
   }

  .input--large .input__suffix ::slotted(syn-icon) {
    font-size: var(--syn-font-size-2x-large);
   }
  
  :host([data-user-invalid]) .input--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .input--standard.input--focused:not(.input--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

  .input--standard.input--disabled .input__suffix, 
  .input--standard.input--disabled .input__prefix {
    cursor: not-allowed;
  } 
`,V=y`
	/* stylelint-disable */
  ${x}
  ${S}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--syn-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--syn-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly inputs */
  .input--readonly {
    border: none;
    background-color: var(--syn-input-readonly-background-color);
    color: var(--syn-input-color);
  }

  .input--readonly:hover:not(.input--disabled) {
    background-color: var(--syn-input-readonly-background-color-hover);
  }

  .input--readonly.input--focused:not(.input--disabled) {
    background-color: var(--syn-input-readonly-background-color-focus);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .input--readonly.input--disabled {
    background-color: var(--syn-input-readonly-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--syn-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--syn-color-primary-500);
    caret-color: var(--syn-input-color);
  }

  .input--readonly .input__control:-webkit-autofill,
  .input--readonly .input__control:-webkit-autofill:hover,
  .input--readonly .input__control:-webkit-autofill:focus,
  .input--readonly .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--syn-input-height-large) var(--syn-input-readonly-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--syn-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--syn-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(syn-icon),
  .input__suffix ::slotted(syn-icon) {
    color: var(--syn-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
    height: var(--syn-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--syn-input-height-small) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
    height: var(--syn-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--syn-input-height-medium) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
    height: var(--syn-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--syn-input-height-large) - var(--syn-input-border-width) * 2);
    padding: 0 var(--syn-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--syn-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--syn-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--syn-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--syn-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--syn-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--syn-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--syn-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--syn-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--syn-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  ${I}
`;var P=Object.defineProperty,D=Object.getOwnPropertyDescriptor,i=(l,n,s,a)=>{for(var r=a>1?void 0:a?D(n,s):n,p=l.length-1,u;p>=0;p--)(u=l[p])&&(r=(a?u(n,s,r):u(r))||r);return a&&r&&P(n,s,r),r};class t extends C{constructor(){super(...arguments),this.formControlController=new v(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new _(this,"help-text","label","prefix","suffix"),this.localize=new w(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(n){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=n,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(n){this.__numberInput.valueAsNumber=n,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.emit("syn-change")}handleClearClick(n){this.value="",this.emit("syn-clear"),this.emit("syn-input"),this.emit("syn-change"),this.input.focus(),n.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("syn-input")}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}handleKeyDown(n){const s=n.metaKey||n.ctrlKey||n.shiftKey||n.altKey;n.key==="Enter"&&!s&&setTimeout(()=>{!n.defaultPrevented&&!n.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(n){this.input.focus(n)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(n,s,a="none"){this.input.setSelectionRange(n,s,a)}setRangeText(n,s,a,r){this.input.setRangeText(n,s,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.hasSlotController.test("label"),s=this.hasSlotController.test("help-text"),a=this.hasSlotController.test("prefix"),r=this.hasSlotController.test("suffix"),p=this.label?!0:!!n,u=this.helpText?!0:!!s,m=this.clearable&&!this.disabled&&!this.readonly,f=m&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${c({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":p,"form-control--has-help-text":u,"form-control--has-prefix":a,"form-control--has-suffix":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${p?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${c({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--standard":!this.readonly,"input--readonly":this.readonly,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${o(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o(this.placeholder)}
              minlength=${o(this.minlength)}
              maxlength=${o(this.maxlength)}
              min=${o(this.min)}
              max=${o(this.max)}
              step=${o(this.step)}
              .value=${b(this.value)}
              autocapitalize=${o(this.autocapitalize)}
              autocomplete=${o(this.autocomplete)}
              autocorrect=${o(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o(this.pattern)}
              enterkeyhint=${o(this.enterkeyhint)}
              inputmode=${o(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${m?d`
                  <button
                    part="clear-button"
                    class=${c({input__clear:!0,"input__clear--visible":f})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <syn-icon name="x-circle-fill" library="system"></syn-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?d`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?d`
                          <slot name="show-password-icon">
                            <syn-icon name="eye-slash" library="system"></syn-icon>
                          </slot>
                        `:d`
                          <slot name="hide-password-icon">
                            <syn-icon name="eye" library="system"></syn-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${u?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}}t.styles=V;t.dependencies={"syn-icon":z};i([$(".input__control")],t.prototype,"input",2);i([k()],t.prototype,"hasFocus",2);i([e()],t.prototype,"title",2);i([e({reflect:!0})],t.prototype,"type",2);i([e()],t.prototype,"name",2);i([e()],t.prototype,"value",2);i([g()],t.prototype,"defaultValue",2);i([e({reflect:!0})],t.prototype,"size",2);i([e()],t.prototype,"label",2);i([e({attribute:"help-text"})],t.prototype,"helpText",2);i([e({type:Boolean})],t.prototype,"clearable",2);i([e({type:Boolean,reflect:!0})],t.prototype,"disabled",2);i([e()],t.prototype,"placeholder",2);i([e({type:Boolean,reflect:!0})],t.prototype,"readonly",2);i([e({attribute:"password-toggle",type:Boolean})],t.prototype,"passwordToggle",2);i([e({attribute:"password-visible",type:Boolean})],t.prototype,"passwordVisible",2);i([e({attribute:"no-spin-buttons",type:Boolean})],t.prototype,"noSpinButtons",2);i([e({reflect:!0})],t.prototype,"form",2);i([e({type:Boolean,reflect:!0})],t.prototype,"required",2);i([e()],t.prototype,"pattern",2);i([e({type:Number})],t.prototype,"minlength",2);i([e({type:Number})],t.prototype,"maxlength",2);i([e()],t.prototype,"min",2);i([e()],t.prototype,"max",2);i([e()],t.prototype,"step",2);i([e()],t.prototype,"autocapitalize",2);i([e()],t.prototype,"autocorrect",2);i([e()],t.prototype,"autocomplete",2);i([e({type:Boolean})],t.prototype,"autofocus",2);i([e()],t.prototype,"enterkeyhint",2);i([e({type:Boolean,converter:{fromAttribute:l=>!(!l||l==="false"),toAttribute:l=>l?"true":"false"}})],t.prototype,"spellcheck",2);i([e()],t.prototype,"inputmode",2);i([h("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);i([h("step",{waitUntilFirstUpdate:!0})],t.prototype,"handleStepChange",1);i([h("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1);t.define("syn-input");
//# sourceMappingURL=input-112412fa.js.map
