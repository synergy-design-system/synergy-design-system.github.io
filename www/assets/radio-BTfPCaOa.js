import{e as m}from"./class-map-CR1NexEI.js";import{j as v,c as p}from"./iframe-BtlaEU6c.js";import{c as b,n as d,S as g}from"./synergy-element-DNCG4YnN.js";import{r as y,S as k}from"./icon.component-BaF0yqNc.js";import{a as _}from"./query-D0jTsbLw.js";import{F as x,c as w,a as R,v as z}from"./form-d9hCJUdr.js";import{H as V}from"./slot-9EVoRGQc.js";import{w as f}from"./watch-CEsCE2EF.js";import{f as S}from"./form-control.styles-BZYj_jBM.js";import{S as A}from"./button-group.component-Yn-hstIp.js";import{e as C}from"./decorator-CWkWRMhy.js";const E=v`
  :host {
    display: block;
  }

  :host([data-user-invalid]) {
    --syn-input-border-color: var(--syn-input-border-color-focus-error);
    --syn-input-border-color-hover: var(--syn-input-border-color-focus-error);
    --syn-color-primary-600: var(--syn-input-border-color-focus-error);
    --syn-color-primary-900: var(--syn-color-error-900);
    --syn-color-primary-950: var(--syn-color-error-950);
    --syn-color-neutral-1000: var(--syn-input-border-color-focus-error);
    --syn-interactive-emphasis-color: var(--syn-input-border-color-focus-error);
    --syn-interactive-emphasis-color-hover: var(--syn-input-border-color-focus-error);
    --syn-interactive-emphasis-color-active: var(--syn-input-border-color-focus-error);
  }

  .form-control {
    border: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  .visually-hidden {
    border: 0;
    /* stylelint-disable-next-line property-no-deprecated */
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-x-small);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }
`;var $=Object.defineProperty,M=Object.getOwnPropertyDescriptor,l=(t,e,a,s)=>{for(var o=s>1?void 0:s?M(e,a):e,i=t.length-1,h;i>=0;i--)(h=t[i])&&(o=(s?h(e,a,o):h(o))||o);return s&&o&&$(e,a,o),o};let r=class extends g{constructor(){super(...arguments),this.formControlController=new x(this),this.hasSlotController=new V(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?w:t?R:z}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button"),a=this.getAllRadios(),s=this.value;!e||e.disabled||e.readonly||(this.value=e.value,a.forEach(o=>{o.checked=o===e}),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(u=>!u.disabled&&!u.readonly),a=e.find(u=>u.checked)??e[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let i=e.indexOf(a)+s;i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.getAllRadios().forEach(u=>{u.checked=!1,this.hasButtonGroup||u.setAttribute("tabindex","-1")}),e[i]&&(this.value=e[i].value,e[i].checked=!0,this.hasButtonGroup?e[i].shadowRoot.querySelector("button").focus():(e[i].setAttribute("tabindex","0"),e[i].focus()),this.value!==o&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault())}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="syn-radio-button"),t.length>0&&!t.some(e=>e.checked))if(this.hasButtonGroup){const e=t[0].shadowRoot?.querySelector("button");e&&e.setAttribute("tabindex","0")}else t[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const e=this.shadowRoot?.querySelector("syn-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>{e.checked=e.value===this.value}),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),a=e.find(i=>i.checked),s=e.find(i=>!i.disabled),o=a||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),a=this.label?!0:!!t,s=this.helpText?!0:!!e,o=p`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return p`
      <fieldset
        part="form-control"
        class=${m({"form-control":!0,"form-control--has-help-text":s,"form-control--has-label":a,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--radio-group":!0,"form-control--small":this.size==="small"})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?p`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </syn-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};r.styles=[b,S,E];r.dependencies={"syn-button-group":A};l([_("slot:not([name])")],r.prototype,"defaultSlot",2);l([_(".radio-group__validation-input")],r.prototype,"validationInput",2);l([y()],r.prototype,"hasButtonGroup",2);l([y()],r.prototype,"errorMessage",2);l([y()],r.prototype,"defaultValue",2);l([d()],r.prototype,"label",2);l([d({attribute:"help-text"})],r.prototype,"helpText",2);l([d()],r.prototype,"name",2);l([d({reflect:!0})],r.prototype,"value",2);l([d({reflect:!0})],r.prototype,"size",2);l([d({reflect:!0})],r.prototype,"form",2);l([d({reflect:!0,type:Boolean})],r.prototype,"required",2);l([f("size",{waitUntilFirstUpdate:!0})],r.prototype,"handleSizeChange",1);l([f("value")],r.prototype,"handleValueChange",1);r=l([C("SynRadioGroup")],r);r.define("syn-radio-group");const q=v`
  /* stylelint-disable no-descending-specificity */
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0;
  }

  .radio {
    align-items: flex-start;
    color: var(--syn-input-label-color);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    vertical-align: middle;
  }

  .radio--small {
    --toggle-size: var(--syn-toggle-size-small);

    font-size: var(--syn-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--syn-toggle-size-medium);

    font-size: var(--syn-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--syn-toggle-size-large);

    font-size: var(--syn-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    height: var(--toggle-size);

    /**
     * #920: The new icons are instances in figma.
     * The width of the system icon is 12px x 12px, so there is no inner padding.
     * To accommodate for this, we need to set the width and height of the icon to 50% to get the same result as before.
     */
    scale: 0.5;
    width: var(--toggle-size);

  }

  .radio__control {
    align-items: center;
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 50%;
    color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    height: var(--toggle-size);
    justify-content: center;
    position: relative;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
    width: var(--toggle-size);
  }

  .radio__input {
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled):not(.radio--readonly):hover .radio__control {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
    color: var(--syn-color-neutral-0);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled):not(.radio--readonly):hover .radio__control {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  /* Checked + active */
  .radio.radio--checked:not(.radio--disabled):not(.radio--readonly):active .radio__control {
    background-color: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /* Not-Checked + active */
  .radio:not(.radio--checked):not(.radio--disabled):not(.radio--readonly):active .radio__control {
    border-color: var(--syn-input-border-color-active);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }

  .radio--disabled {
    cursor: not-allowed;

    /** #429: Use token for opacity */
    opacity: var(--syn-input-disabled-opacity);
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  /* Fix#456: Multi line radio fixes */
  .radio__label {
    align-self: center;
    color: var(--syn-input-label-color);
    display: inline-block;
    line-height: var(--toggle-size);
    margin-inline-start: var(--syn-spacing-x-small);
    margin-top: -1px;
    user-select: none;
  }

  .radio--small .radio__label {
    font: var(--syn-body-small-regular);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  .radio--medium .radio__label {
    font: var(--syn-body-medium-regular);
  }

  .radio--large .radio__label {
    font: var(--syn-body-large-regular);
    margin-inline-start: var(--syn-spacing-x-small);
  }

  /* /Fix#456 */

  /**
   * #1174: Readonly state
   */
  .radio.radio--readonly {
    cursor: default;
  }

  .radio.radio--readonly .radio__label {
    user-select: auto;
  }

  .radio.radio--readonly .radio__control {
    background: var(--syn-input-readonly-background-color);
    border-color: var(--syn-input-readonly-background-color);
    color: var(--syn-readonly-indicator-color);
    cursor: default;
  }

  :host(:focus) .radio--readonly .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }
`;var F=Object.defineProperty,I=Object.getOwnPropertyDescriptor,c=(t,e,a,s)=>{for(var o=s>1?void 0:s?I(e,a):e,i=t.length-1,h;i>=0;i--)(h=t[i])&&(o=(s?h(e,a,o):h(o))||o);return s&&o&&F(e,a,o),o};let n=class extends g{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{if(this.readonly){this.focus();return}this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled||this.readonly?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled||this.readonly?"true":"false")}render(){return p`
      <span
        part="base"
        class=${m({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--large":this.size==="large","radio--medium":this.size==="medium","radio--readonly":this.readonly,"radio--small":this.size==="small"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?p` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};n.styles=[b,q];n.dependencies={"syn-icon":k};c([y()],n.prototype,"checked",2);c([y()],n.prototype,"hasFocus",2);c([d()],n.prototype,"value",2);c([d({reflect:!0})],n.prototype,"size",2);c([d({reflect:!0,type:Boolean})],n.prototype,"disabled",2);c([d({reflect:!0,type:Boolean})],n.prototype,"readonly",2);c([f("checked")],n.prototype,"handleCheckedChange",1);c([f(["disabled","readonly"],{waitUntilFirstUpdate:!0})],n.prototype,"handleDisabledChange",1);n=c([C("SynRadio")],n);n.define("syn-radio");
