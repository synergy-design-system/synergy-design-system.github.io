import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,Ut as r}from"./iframe-CKG-bwJX.js";import{n as i,t as a}from"./class-map-tHUwgcUJ.js";import{a as o,i as s,n as c,r as l,t as u}from"./form-BVa_zioF.js";import{r as d,t as f}from"./slot-uOU62xJ8.js";import{a as p,f as m,i as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S}from"./synergy-element-BvVk4gNI.js";import{n as C,t as w}from"./watch-OXZPXmne.js";import{n as T,t as E}from"./icon.component-E2MQEPmb.js";import{n as D,t as O}from"./decorator-CJ_bAnlW.js";import{n as k,t as A}from"./button-group.component-EMkBCFvg.js";import{n as j,t as M}from"./form-control.styles-LN_gBYYD.js";var N,P=e((()=>{t(),N=r`
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
`})),F,I,L=e((()=>{a(),t(),b(),l(),d(),w(),_(),j(),g(),k(),P(),D(),h(),F=class extends x{constructor(...e){super(...e),this.formControlController=new u(this),this.hasSlotController=new f(this,`help-text`,`label`),this.customValidityMessage=``,this.hasButtonGroup=!1,this.errorMessage=``,this.defaultValue=``,this.label=``,this.helpText=``,this.name=`option`,this.value=``,this.size=`medium`,this.form=``,this.required=!1}static{this.styles=[p,M,N]}static{this.dependencies={"syn-button-group":A}}get validity(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?o:s:c}get validationMessage(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?this.validationInput.validationMessage:``:this.customValidityMessage}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`syn-radio, syn-radio-button`)]}handleRadioClick(e){let t=e.target.closest(`syn-radio, syn-radio-button`),n=this.getAllRadios(),r=this.value;!t||t.disabled||t.readonly||(this.value=t.value,n.forEach(e=>{e.checked=e===t}),this.value!==r&&(this.emit(`syn-change`),this.emit(`syn-input`)))}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key))return;let t=this.getAllRadios().filter(e=>!e.disabled&&!e.readonly),n=t.find(e=>e.checked)??t[0],r=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,i=this.value,a=t.indexOf(n)+r;a<0&&(a=t.length-1),a>t.length-1&&(a=0),this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute(`tabindex`,`-1`)}),t[a]&&(this.value=t[a].value,t[a].checked=!0,this.hasButtonGroup?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==i&&(this.emit(`syn-change`),this.emit(`syn-input`)),e.preventDefault())}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){let e=this.getAllRadios();if(await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=e.some(e=>e.tagName.toLowerCase()===`syn-radio-button`),e.length>0&&!e.some(e=>e.checked))if(this.hasButtonGroup){let t=e[0].shadowRoot?.querySelector(`button`);t&&t.setAttribute(`tabindex`,`0`)}else e[0].setAttribute(`tabindex`,`0`);if(this.hasButtonGroup){let e=this.shadowRoot?.querySelector(`syn-button-group`);e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get(`syn-radio`)&&customElements.get(`syn-radio-button`)){this.syncRadioElements();return}customElements.get(`syn-radio`)?this.syncRadioElements():customElements.whenDefined(`syn-radio`).then(()=>this.syncRadios()),customElements.get(`syn-radio-button`)?this.syncRadioElements():customElements.whenDefined(`syn-radio-button`).then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>{e.checked=e.value===this.value}),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let e=this.required&&!this.value,t=this.customValidityMessage!==``;return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?``:this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),e}setCustomValidity(e=``){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),r=this.label?!0:!!e,a=this.helpText?!0:!!t,o=n`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return n`
      <fieldset
        part="form-control"
        class=${i({"form-control":!0,"form-control--has-help-text":a,"form-control--has-label":r,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--radio-group":!0,"form-control--small":this.size===`small`})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?`false`:`true`}
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

          ${this.hasButtonGroup?n`
                <syn-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </syn-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}},y([S(`slot:not([name])`)],F.prototype,`defaultSlot`,void 0),y([S(`.radio-group__validation-input`)],F.prototype,`validationInput`,void 0),y([m()],F.prototype,`hasButtonGroup`,void 0),y([m()],F.prototype,`errorMessage`,void 0),y([m()],F.prototype,`defaultValue`,void 0),y([v()],F.prototype,`label`,void 0),y([v({attribute:`help-text`})],F.prototype,`helpText`,void 0),y([v()],F.prototype,`name`,void 0),y([v({reflect:!0})],F.prototype,`value`,void 0),y([v({reflect:!0})],F.prototype,`size`,void 0),y([v({reflect:!0})],F.prototype,`form`,void 0),y([v({reflect:!0,type:Boolean})],F.prototype,`required`,void 0),y([C(`size`,{waitUntilFirstUpdate:!0})],F.prototype,`handleSizeChange`,null),y([C(`value`)],F.prototype,`handleValueChange`,null),F=y([O(`SynRadioGroup`)],F),I=F})),R=e((()=>{L(),L(),I.define(`syn-radio-group`)})),z,B=e((()=>{t(),z=r`
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
`})),V,H,U=e((()=>{a(),t(),b(),w(),_(),g(),T(),B(),D(),h(),V=class extends x{static{this.styles=[p,z]}static{this.dependencies={"syn-icon":E}}constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size=`medium`,this.disabled=!1,this.readonly=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit(`syn-blur`)},this.handleClick=()=>{if(this.readonly){this.focus();return}this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit(`syn-focus`)},this.addEventListener(`blur`,this.handleBlur),this.addEventListener(`click`,this.handleClick),this.addEventListener(`focus`,this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.setAttribute(`tabindex`,`-1`),this.setAttribute(`aria-disabled`,this.disabled||this.readonly?`true`:`false`)}handleCheckedChange(){this.setAttribute(`aria-checked`,this.checked?`true`:`false`),this.setAttribute(`tabindex`,this.checked?`0`:`-1`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled||this.readonly?`true`:`false`)}render(){return n`
      <span
        part="base"
        class=${i({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--large":this.size===`large`,"radio--medium":this.size===`medium`,"radio--readonly":this.readonly,"radio--small":this.size===`small`})}
      >
        <span part="${`control${this.checked?` control--checked`:``}`}" class="radio__control">
          ${this.checked?n` <syn-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></syn-icon> `:``}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}},y([m()],V.prototype,`checked`,void 0),y([m()],V.prototype,`hasFocus`,void 0),y([v()],V.prototype,`value`,void 0),y([v({reflect:!0})],V.prototype,`size`,void 0),y([v({reflect:!0,type:Boolean})],V.prototype,`disabled`,void 0),y([v({reflect:!0,type:Boolean})],V.prototype,`readonly`,void 0),y([C(`checked`)],V.prototype,`handleCheckedChange`,null),y([C([`disabled`,`readonly`],{waitUntilFirstUpdate:!0})],V.prototype,`handleDisabledChange`,null),V=y([O(`SynRadio`)],V),H=V})),W=e((()=>{U(),U(),H.define(`syn-radio`)}));export{R as n,W as t};