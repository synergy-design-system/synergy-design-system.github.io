import{a as _}from"./static-c19bae7e.js";import{F as x,c as w,v as R,a as V}from"./form-daa16d55.js";import{H as S}from"./slot-4492e2ee.js";import{i as m,x as p}from"./directive-helpers-a6c66f8a.js";import{c as b,r as y,n as u,S as v,w as C}from"./component.styles-30ab6d75.js";import{e as f}from"./query-f49a08ce.js";import{f as $}from"./form-control.styles-d852634a.js";const M=m`
	/* stylelint-disable */
  ${b}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var E=Object.defineProperty,k=Object.getOwnPropertyDescriptor,g=(n,t,e,s)=>{for(var o=s>1?void 0:s?k(t,e):t,a=n.length-1,r;a>=0;a--)(r=n[a])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&E(t,e,o),o};class c extends v{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){h(t.target)?.classList.add("syn-button-group__button--focus")}handleBlur(t){h(t.target)?.classList.remove("syn-button-group__button--focus")}handleMouseOver(t){h(t.target)?.classList.add("syn-button-group__button--hover")}handleMouseOut(t){h(t.target)?.classList.remove("syn-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),o=h(e);o&&(o.classList.add("syn-button-group__button"),o.classList.toggle("syn-button-group__button--first",s===0),o.classList.toggle("syn-button-group__button--inner",s>0&&s<t.length-1),o.classList.toggle("syn-button-group__button--last",s===t.length-1),o.classList.toggle("syn-button-group__button--radio",o.tagName.toLowerCase()==="syn-radio-button"))})}render(){return p`
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
    `}}c.styles=M;g([f("slot")],c.prototype,"defaultSlot",2);g([y()],c.prototype,"disableRole",2);g([u()],c.prototype,"label",2);function h(n){const t="syn-button, syn-radio-button";return n.closest(t)??n.querySelector(t)}const q=m`
  ::slotted(syn-radio:not(:last-child)) {
    margin-bottom: var(--syn-spacing-x-small);
  }

  :host([data-user-invalid]) {
    --syn-input-border-color: var(--syn-input-border-color-focus-error);
    --syn-input-border-color-hover: var(--syn-input-border-color-focus-error);
    --syn-color-primary-600: var(--syn-color-error-700);
    --syn-color-primary-900: var(--syn-color-error-900);
    --syn-color-primary-950: var(--syn-color-error-950);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

`,A=m`
	/* stylelint-disable */
  ${b}
  ${$}

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

  ${q}
`;var L=Object.defineProperty,I=Object.getOwnPropertyDescriptor,l=(n,t,e,s)=>{for(var o=s>1?void 0:s?I(t,e):t,a=n.length-1,r;a>=0;a--)(r=n[a])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&L(t,e,o),o};class i extends v{constructor(){super(...arguments),this.formControlController=new x(this),this.hasSlotController=new S(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?w:t?R:V}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("syn-radio, syn-radio-button")]}handleRadioClick(t){const e=t.target.closest("syn-radio, syn-radio-button"),s=this.getAllRadios(),o=this.value;e.disabled||(this.value=e.value,s.forEach(a=>a.checked=a===e),this.value!==o&&(this.emit("syn-change"),this.emit("syn-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(d=>!d.disabled),s=e.find(d=>d.checked)??e[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let r=e.indexOf(s)+o;r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||(d.tabIndex=-1)}),this.value=e[r].value,e[r].checked=!0,this.hasButtonGroup?e[r].shadowRoot.querySelector("button").focus():(e[r].tabIndex=0,e[r].focus()),this.value!==a&&(this.emit("syn-change"),this.emit("syn-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),s=t.find(o=>o.checked)||t[0];s&&s.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){const t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="syn-radio-button"),!t.some(e=>e.checked))if(this.hasButtonGroup){const e=t[0].shadowRoot?.querySelector("button");e&&(e.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){const e=this.shadowRoot?.querySelector("syn-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("syn-radio")&&customElements.get("syn-radio-button")){this.syncRadioElements();return}customElements.get("syn-radio")?this.syncRadioElements():customElements.whenDefined("syn-radio").then(()=>this.syncRadios()),customElements.get("syn-radio-button")?this.syncRadioElements():customElements.whenDefined("syn-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,o=this.helpText?!0:!!e,a=p`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return p`
      <fieldset
        part="form-control"
        class=${_({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
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
                  ${a}
                </syn-button-group>
              `:a}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}}i.styles=A;i.dependencies={"syn-button-group":c};l([f("slot:not([name])")],i.prototype,"defaultSlot",2);l([f(".radio-group__validation-input")],i.prototype,"validationInput",2);l([y()],i.prototype,"hasButtonGroup",2);l([y()],i.prototype,"errorMessage",2);l([y()],i.prototype,"defaultValue",2);l([u()],i.prototype,"label",2);l([u({attribute:"help-text"})],i.prototype,"helpText",2);l([u()],i.prototype,"name",2);l([u({reflect:!0})],i.prototype,"value",2);l([u({reflect:!0})],i.prototype,"size",2);l([u({reflect:!0})],i.prototype,"form",2);l([u({type:Boolean,reflect:!0})],i.prototype,"required",2);l([C("size",{waitUntilFirstUpdate:!0})],i.prototype,"handleSizeChange",1);l([C("value")],i.prototype,"handleValueChange",1);i.define("syn-radio-group");export{c as S};
//# sourceMappingURL=radio-group-e780ce35.js.map
