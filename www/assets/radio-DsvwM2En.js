import{e as f}from"./class-map-Bo2NiYIQ.js";import{F as k,c as C,a as x,v as w}from"./form-d9hCJUdr.js";import{H as R}from"./slot-9EVoRGQc.js";import{q as y,x as u}from"./iframe-CW_KonjK.js";import{c as v,n as c,S as b}from"./synergy-element-BoJA4F0K.js";import{r as p,S as z}from"./icon.component-9N7Azsi9.js";import{a as g}from"./query-D0jTsbLw.js";import{w as m}from"./watch-CEsCE2EF.js";import{f as S,a as V}from"./form-control.custom.styles-CoSJASsY.js";import{S as A}from"./button-group.component-DyX3c6kX.js";import{e as _}from"./decorator-CVE5vLu9.js";const E=y`
	/* stylelint-disable */
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,$=y`
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

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

  .form-control-input {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-x-small);
  }
`;var M=Object.defineProperty,q=Object.getOwnPropertyDescriptor,l=(t,e,a,s)=>{for(var o=s>1?void 0:s?q(e,a):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(o=(s?n(e,a,o):n(o))||o);return s&&o&&M(e,a,o),o};let r=class extends b{constructor(){super(...arguments),this.formControlController=new k(this),this.hasSlotController=new R(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?C:t?x:w}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button"),a=this.getAllRadios(),s=this.value;!e||e.disabled||(this.value=e.value,a.forEach(o=>o.checked=o===e),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(n=>!n.disabled),a=e.find(n=>n.checked)??e[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,o=this.value;let i=e.indexOf(a)+s;i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.getAllRadios().forEach(n=>{n.checked=!1,this.hasButtonGroup||n.setAttribute("tabindex","-1")}),this.value=e[i].value,e[i].checked=!0,this.hasButtonGroup?e[i].shadowRoot.querySelector("button").focus():(e[i].setAttribute("tabindex","0"),e[i].focus()),this.value!==o&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="syn-radio-button"),t.length>0&&!t.some(e=>e.checked))if(this.hasButtonGroup){const e=t[0].shadowRoot?.querySelector("button");e&&e.setAttribute("tabindex","0")}else t[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const e=this.shadowRoot?.querySelector("syn-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),a=e.find(i=>i.checked),s=e.find(i=>!i.disabled),o=a||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),a=this.label?!0:!!t,s=this.helpText?!0:!!e,o=u`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return u`
      <fieldset
        part="form-control"
        class=${f({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":a,"form-control--has-help-text":s})}
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

          ${this.hasButtonGroup?u`
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
    `}};r.styles=[v,S,E,V,$];r.dependencies={"syn-button-group":A};l([g("slot:not([name])")],r.prototype,"defaultSlot",2);l([g(".radio-group__validation-input")],r.prototype,"validationInput",2);l([p()],r.prototype,"hasButtonGroup",2);l([p()],r.prototype,"errorMessage",2);l([p()],r.prototype,"defaultValue",2);l([c()],r.prototype,"label",2);l([c({attribute:"help-text"})],r.prototype,"helpText",2);l([c()],r.prototype,"name",2);l([c({reflect:!0})],r.prototype,"value",2);l([c({reflect:!0})],r.prototype,"size",2);l([c({reflect:!0})],r.prototype,"form",2);l([c({type:Boolean,reflect:!0})],r.prototype,"required",2);l([m("size",{waitUntilFirstUpdate:!0})],r.prototype,"handleSizeChange",1);l([m("value")],r.prototype,"handleValueChange",1);r=l([_("SynRadioGroup")],r);r.define("syn-radio-group");const F=y`
	/* stylelint-disable */
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--syn-input-font-family);
    font-size: var(--syn-input-font-size-medium);
    font-weight: var(--syn-input-font-weight);
    color: var(--syn-input-label-color);
    vertical-align: middle;
    cursor: pointer;
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
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
    border-radius: 50%;
    background-color: var(--syn-input-background-color);
    color: transparent;
    transition:
      var(--syn-transition-fast) border-color,
      var(--syn-transition-fast) background-color,
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-input-border-color-hover);
    background-color: var(--syn-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--syn-color-neutral-0);
    border-color: var(--syn-color-primary-600);
    background-color: var(--syn-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-color-primary-500);
    background-color: var(--syn-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,I=y`
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }

  .radio {
    align-items: flex-start;
  }

  /** #429: Use token for opacity */
  .radio--disabled { 
    opacity: var(--syn-input-disabled-opacity);
  }

  /* Checked */
  /* stylelint-disable-next-line no-descending-specificity */
  .radio--checked .radio__control {
    background-color: var(--syn-interactive-emphasis-color);
    border-color: var(--syn-interactive-emphasis-color);
  }

  /* Reset original hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    background: inherit;
    border-color: inherit;
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled):hover .radio__control  {
    background-color: var(--syn-interactive-emphasis-color-hover);
    border-color: var(--syn-interactive-emphasis-color-hover);
  }

  /* Checked + active */
  .radio.radio--checked:not(.radio--disabled):active .radio__control  {
    background-color: var(--syn-interactive-emphasis-color-active);
    border-color: var(--syn-interactive-emphasis-color-active);
  }

  /* Not-Checked + Hover */
  .radio:not(.radio--checked):not(.radio--disabled):hover .radio__control {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Not-Checked + active */
  .radio:not(.radio--checked):not(.radio--disabled):active .radio__control {
    border-color: var(--syn-input-border-color-active);
  }

  /* Fix#456: Multi line radio fixes */
  .radio__label {
    align-self: center;
    margin-inline-start: var(--syn-spacing-x-small);
    margin-top: -1px;
  }

  .radio--small .radio__label {
    font: var(--syn-body-small-regular);
  }

  .radio--medium .radio__label {
    font: var(--syn-body-medium-regular);
  }

  .radio--large .radio__label {
    font: var(--syn-body-large-regular);
  }

  /* /Fix#456 */

  /**
   * #920: The new icons are instances in figma.
   * The width of the system icon is 12px x 12px, so there is no inner padding.
   * To accommodate for this, we need to set the width and height of the icon to 50% to get the same result as before.
   */
  .radio__checked-icon {
    scale: 0.5;
  }

  .radio--small .radio__label, .radio--large .radio__label  {
    margin-inline-start: var(--syn-spacing-x-small);
  }
`;var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,h=(t,e,a,s)=>{for(var o=s>1?void 0:s?T(e,a):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(o=(s?n(e,a,o):n(o))||o);return s&&o&&D(e,a,o),o};let d=class extends b{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return u`
      <span
        part="base"
        class=${f({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?u` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};d.styles=[v,F,I];d.dependencies={"syn-icon":z};h([p()],d.prototype,"checked",2);h([p()],d.prototype,"hasFocus",2);h([c()],d.prototype,"value",2);h([c({reflect:!0})],d.prototype,"size",2);h([c({type:Boolean,reflect:!0})],d.prototype,"disabled",2);h([m("checked")],d.prototype,"handleCheckedChange",1);h([m("disabled",{waitUntilFirstUpdate:!0})],d.prototype,"handleDisabledChange",1);d=h([_("SynRadio")],d);d.define("syn-radio");
