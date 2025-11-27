import{e as k}from"./class-map-TRixnXgC.js";import{F as w,c as A,a as R,v as S}from"./form-d9hCJUdr.js";import{H as z}from"./slot-9EVoRGQc.js";import{j as b,x as h}from"./iframe-D3jh34T2.js";import{S as g,c as v,n as c}from"./synergy-element-Gy20R3QD.js";import{r as p,S as $}from"./icon.component-bZ25TJym.js";import{a as _}from"./query-DAIS6qJ0.js";import{w as f}from"./watch-CEsCE2EF.js";import{f as V,a as E}from"./form-control.custom.styles-OVZxmFGS.js";import{e as x}from"./decorator-DANECR0-.js";const M=b`
	/* stylelint-disable */
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var q=Object.defineProperty,C=(e,t,r,s)=>{for(var o=void 0,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=n(t,r,o)||o);return o&&q(t,r,o),o};class m extends g{constructor(){super(...arguments),this.disableRole=!1,this.label=""}static{this.styles=[v,M]}handleFocus(t){y(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!0)}handleBlur(t){y(t.target)?.toggleAttribute("data-syn-button-group__button--focus",!1)}handleMouseOver(t){y(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!0)}handleMouseOut(t){y(t.target)?.toggleAttribute("data-syn-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(r=>{const s=t.indexOf(r),o=y(r);o&&(o.toggleAttribute("data-syn-button-group__button",!0),o.toggleAttribute("data-syn-button-group__button--first",s===0),o.toggleAttribute("data-syn-button-group__button--inner",s>0&&s<t.length-1),o.toggleAttribute("data-syn-button-group__button--last",s===t.length-1),o.toggleAttribute("data-syn-button-group__button--radio",o.tagName.toLowerCase()==="syn-radio-button"))})}render(){return h`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}}C([_("slot")],m.prototype,"defaultSlot");C([p()],m.prototype,"disableRole");C([c()],m.prototype,"label");function y(e){const t="syn-button, syn-radio-button";return e.closest(t)??e.querySelector(t)}const F=b`
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
`,B=b`
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
`;var I=Object.defineProperty,O=Object.getOwnPropertyDescriptor,l=(e,t,r,s)=>{for(var o=s>1?void 0:s?O(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&I(t,r,o),o};let a=class extends g{constructor(){super(...arguments),this.formControlController=new w(this),this.hasSlotController=new z(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?A:e?R:S}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(e){const t=e.target.closest("syn-radio, syn-radio-button"),r=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,r.forEach(o=>o.checked=o===t),this.value!==s&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const t=this.getAllRadios().filter(n=>!n.disabled),r=t.find(n=>n.checked)??t[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let i=t.indexOf(r)+s;i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.getAllRadios().forEach(n=>{n.checked=!1,this.hasButtonGroup||n.setAttribute("tabindex","-1")}),this.value=t[i].value,t[i].checked=!0,this.hasButtonGroup?t[i].shadowRoot.querySelector("button").focus():(t[i].setAttribute("tabindex","0"),t[i].focus()),this.value!==o&&(this.emit("syn-change"),this.emit("syn-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){const e=this.getAllRadios();if(await Promise.all(e.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=e.some(t=>t.tagName.toLowerCase()==="syn-radio-button"),e.length>0&&!e.some(t=>t.checked))if(this.hasButtonGroup){const t=e[0].shadowRoot?.querySelector("button");t&&t.setAttribute("tabindex","0")}else e[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=this.shadowRoot?.querySelector("syn-button-group");t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),r=t.find(i=>i.checked),s=t.find(i=>!i.disabled),o=r||s;o&&o.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,o=h`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return h`
      <fieldset
        part="form-control"
        class=${k({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
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

          ${this.hasButtonGroup?h`
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
    `}};a.styles=[v,V,F,E,B];a.dependencies={"syn-button-group":m};l([_("slot:not([name])")],a.prototype,"defaultSlot",2);l([_(".radio-group__validation-input")],a.prototype,"validationInput",2);l([p()],a.prototype,"hasButtonGroup",2);l([p()],a.prototype,"errorMessage",2);l([p()],a.prototype,"defaultValue",2);l([c()],a.prototype,"label",2);l([c({attribute:"help-text"})],a.prototype,"helpText",2);l([c()],a.prototype,"name",2);l([c({reflect:!0})],a.prototype,"value",2);l([c({reflect:!0})],a.prototype,"size",2);l([c({reflect:!0})],a.prototype,"form",2);l([c({type:Boolean,reflect:!0})],a.prototype,"required",2);l([f("size",{waitUntilFirstUpdate:!0})],a.prototype,"handleSizeChange",1);l([f("value")],a.prototype,"handleValueChange",1);a=l([x("SynRadioGroup")],a);a.define("syn-radio-group");const D=b`
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
`,T=b`
  :host(:focus-visible) .radio__control {
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-width);
  }

  /** #429: Use token for opacity */
  .radio--disabled { 
    opacity: var(--syn-input-disabled-opacity);
  }

  /* Checked */
  /* stylelint-disable-next-line no-descending-specificity */
  .radio--checked .radio__control {
    background-color: var(--syn-interactive-emphasis-color, var(--syn-color-primary-600));
    border-color: var(--syn-interactive-emphasis-color, var(--syn-color-primary-600));
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover  {
    background-color: var(--syn-interactive-emphasis-color-hover, var(--syn-color-primary-950));
    border-color: var(--syn-interactive-emphasis-color-hover, var(--syn-color-primary-950));
  }

  /* Checked + active */
  .radio.radio--checked:not(.radio--disabled) .radio__control:active  {
    background-color: var(--syn-interactive-emphasis-color-active, var(--syn-color-primary-950));
    border-color: var(--syn-interactive-emphasis-color-active, var(--syn-color-primary-950));
  }

  /* Not-Checked + Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--syn-input-border-color-hover);
  }

  /* Not-Checked + active */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:active {
    border-color: var(--syn-color-neutral-1000);
  }

  /* Fix#456: Multi line radio fixes */
  .radio__label {
    margin-inline-start: var(--syn-spacing-x-small);
    position: relative;
  }

  .radio--small .radio__label {
    font: var(--syn-body-small-regular);
    top: -3px;
  }

  .radio--medium .radio__label {
    font: var(--syn-body-medium-regular);
    top: -3px;
  }

  .radio--large .radio__label {
    font: var(--syn-body-large-regular);
    top: -2px;
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
`;var G=Object.defineProperty,L=Object.getOwnPropertyDescriptor,u=(e,t,r,s)=>{for(var o=s>1?void 0:s?L(t,r):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,r,o):n(o))||o);return s&&o&&G(t,r,o),o};let d=class extends g{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("syn-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("syn-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return h`
      <span
        part="base"
        class=${k({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?h` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};d.styles=[v,D,T];d.dependencies={"syn-icon":$};u([p()],d.prototype,"checked",2);u([p()],d.prototype,"hasFocus",2);u([c()],d.prototype,"value",2);u([c({reflect:!0})],d.prototype,"size",2);u([c({type:Boolean,reflect:!0})],d.prototype,"disabled",2);u([f("checked")],d.prototype,"handleCheckedChange",1);u([f("disabled",{waitUntilFirstUpdate:!0})],d.prototype,"handleDisabledChange",1);d=u([x("SynRadio")],d);d.define("syn-radio");
