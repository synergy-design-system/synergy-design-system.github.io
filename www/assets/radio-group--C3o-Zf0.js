import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-zaPEO0fm.js";import{n as m,t as h}from"./class-map-D8k2AIVc.js";import{a as g,i as _,n as v,r as y,t as b}from"./form-BInibdBX.js";import{r as x,t as S}from"./slot-Cl6UAYP5.js";import{n as C,t as w}from"./watch-RA3ULoLi.js";import{n as T,t as E}from"./decorator-B3p9Y8B9.js";import{n as D,t as O}from"./form-control.styles-DEKLRB47.js";import{n as k,t as A}from"./button-group.component-L2--vQtP.js";var j,M=e((()=>{r(),j=n`
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

  .form-control-input {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-x-small);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
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

  /**
   * #1140:
   * Apply custom styling when we are using syn-radio-button.
   * This is needed because syn-radio-button is displayed with space between the items
   * and should not adhere to the default styling needed for regular button groups.
   */
  .form-control--has-button-group .form-control-input {
    max-width: 100%; /* Fallback for older browsers, do not remove */
  }

  @supports (max-width: fit-content) {
    .form-control--has-button-group .form-control-input {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      max-width: fit-content;
    }
  }

  .form-control--has-button-group syn-button-group::part(base) {
    --radiogroup-padding: calc(var(--syn-spacing-x-small) - 1px);

    border: 1px solid var(--syn-input-border-color);
    border-radius: var(--syn-input-border-radius-large);
    gap: var(--radiogroup-padding);
    padding: var(--radiogroup-padding);
  }

  .form-control--has-button-group syn-button-group[readonly]::part(base) {
    background: var(--syn-readonly-background-color);
    border-color: var(--syn-readonly-background-color);
  }

  .form-control--has-button-group syn-button-group[size="small"]::part(base) {
    --radiogroup-padding: calc(var(--syn-spacing-2x-small) + var(--syn-input-width));
  }

  /**
   * #1140: This statement overrides the children selectors that are used for showing readonly fields
   * We are not able to easily forward them to the radio button, so we need to override them here.
   */
  .form-control--has-button-group syn-button-group[readonly] ::slotted(syn-radio-button) {
    --syn-readonly-indicator-color: var(--syn-readonly-background-color);
    --syn-readonly-border-color: transparent;
    --syn-color-neutral-0: var(--syn-readonly-color-text);
  }

  /**
   * #794: Allow radio-groups to be displayed in a row when using syn-radio-button.
   * Will not apply to syn-radio-button, which is always displayed in a column.
   */
  .form-control--is-horizontal:not(.form-control--has-button-group) .form-control-input {
    flex-flow: row wrap;
    gap: var(--syn-spacing-x-small) var(--syn-spacing-medium);
  }
`})),N,P,F=e((()=>{h(),r(),d(),y(),x(),w(),l(),D(),c(),k(),M(),T(),s(),N=class extends f{constructor(...e){super(...e),this.formControlController=new b(this),this.hasSlotController=new S(this,`help-text`,`label`),this.customValidityMessage=``,this.hasButtonGroup=!1,this.errorMessage=``,this.defaultValue=``,this.label=``,this.helpText=``,this.name=`option`,this.value=``,this.size=`medium`,this.layout=`vertical`,this.form=``,this.required=!1}static{this.styles=[a,O,j]}static{this.dependencies={"syn-button-group":A}}get validity(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?g:_:v}get validationMessage(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?this.validationInput.validationMessage:``:this.customValidityMessage}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`syn-radio, syn-radio-button`)]}handleRadioClick(e){let t=e.target.closest(`syn-radio, syn-radio-button`);if(!t||t.disabled||t.readonly)return;let n=this.getAllRadios(),r=this.value;this.value=t.value,n.forEach(e=>{e.checked=e===t}),this.value!==r&&(this.emit(`syn-change`),this.emit(`syn-input`))}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key))return;let t=this.getAllRadios().filter(e=>!e.disabled&&!e.readonly),n=t.find(e=>e.checked)??t[0],r=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,i=this.value,a=t.indexOf(n)+r;a<0&&(a=t.length-1),a>t.length-1&&(a=0),t[a]&&(this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,this.hasButtonGroup?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==i&&(this.emit(`syn-change`),this.emit(`syn-input`)),e.preventDefault())}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){let e=this.getAllRadios();if(await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=e.some(e=>e.tagName.toLowerCase()===`syn-radio-button`),e.length>0&&!e.some(e=>e.checked))if(this.hasButtonGroup){let t=e[0].shadowRoot?.querySelector(`button`);t&&t.setAttribute(`tabindex`,`0`)}else e[0].setAttribute(`tabindex`,`0`);if(this.hasButtonGroup){let t=this.shadowRoot?.querySelector(`syn-button-group`);t&&t.toggleAttribute(`readonly`,e.every(e=>e.readonly)),t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get(`syn-radio`)&&customElements.get(`syn-radio-button`)){this.syncRadioElements();return}customElements.get(`syn-radio`)?this.syncRadioElements():customElements.whenDefined(`syn-radio`).then(()=>this.syncRadios()),customElements.get(`syn-radio-button`)?this.syncRadioElements():customElements.whenDefined(`syn-radio-button`).then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>{e.checked=e.value===this.value}),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let e=this.required&&!this.value,t=this.customValidityMessage!==``;return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?``:this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>{this.validationInput.hidden=!0},1e4)),e}setCustomValidity(e=``){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus({...e,focusVisible:!0})}render(){let e=this.hasSlotController.test(`label`),n=this.hasSlotController.test(`help-text`),r=this.label?!0:!!e,i=this.helpText?!0:!!n,a=t`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return t`
      <fieldset
        part="form-control"
        class=${m({"form-control":!0,"form-control--has-button-group":this.hasButtonGroup,"form-control--has-help-text":i,"form-control--has-label":r,"form-control--is-horizontal":this.layout===`horizontal`,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--radio-group":!0,"form-control--small":this.size===`small`})}
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

          ${this.hasButtonGroup?t`
                <syn-button-group
                  exportparts="base:button-group__base"
                  part="button-group"
                  role="presentation"
                  size=${this.size}
                >
                  ${a}
                </syn-button-group>
              `:a}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}},u([o(`slot:not([name])`)],N.prototype,`defaultSlot`,void 0),u([o(`.radio-group__validation-input`)],N.prototype,`validationInput`,void 0),u([i()],N.prototype,`hasButtonGroup`,void 0),u([i()],N.prototype,`errorMessage`,void 0),u([i()],N.prototype,`defaultValue`,void 0),u([p()],N.prototype,`label`,void 0),u([p({attribute:`help-text`})],N.prototype,`helpText`,void 0),u([p()],N.prototype,`name`,void 0),u([p({reflect:!0})],N.prototype,`value`,void 0),u([p({reflect:!0})],N.prototype,`size`,void 0),u([p({reflect:!0})],N.prototype,`layout`,void 0),u([p({reflect:!0})],N.prototype,`form`,void 0),u([p({reflect:!0,type:Boolean})],N.prototype,`required`,void 0),u([C(`size`,{waitUntilFirstUpdate:!0})],N.prototype,`handleSizeChange`,null),u([C(`value`)],N.prototype,`handleValueChange`,null),N=u([E(`SynRadioGroup`)],N),P=N})),I=e((()=>{F(),F(),P.define(`syn-radio-group`)}));export{I as t};