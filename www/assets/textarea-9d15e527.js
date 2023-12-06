import{a as c}from"./static-c19bae7e.js";import{d as y,l as f}from"./live-50407c8a.js";import{e as b,F as x}from"./query-a4947b92.js";import{H as m}from"./slot-4492e2ee.js";import{i as p,x as v}from"./directive-helpers-a6c66f8a.js";import{o as i}from"./if-defined-1099e361.js";import{c as g,r as _,n as a,w as h,S as C}from"./component.styles-92298694.js";import{f as w}from"./form-control.styles-d852634a.js";const z=p`

  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }

`,k=p`
	/* stylelint-disable */
  ${g}
  ${w}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    line-height: var(--syn-line-height-normal);
    letter-spacing: var(--syn-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--syn-input-background-color);
    border: solid var(--syn-input-border-width) var(--syn-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--syn-input-background-color-hover);
    border-color: var(--syn-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--syn-input-background-color-focus);
    border-color: var(--syn-input-border-color-focus);
    color: var(--syn-input-color-focus);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--syn-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly textareas */
  .textarea--readonly {
    border: none;
    background-color: var(--syn-input-readonly-background-color);
    color: var(--syn-input-color);
  }

  .textarea--readonly:hover:not(.textarea--disabled) {
    background-color: var(--syn-input-readonly-background-color-hover);
  }

  .textarea--readonly.textarea--focused:not(.textarea--disabled) {
    background-color: var(--syn-input-readonly-background-color-focus);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  .textarea--readonly.textarea--disabled {
    background-color: var(--syn-input-readonly-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--syn-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--syn-input-border-radius-small);
    font-size: var(--syn-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--syn-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--syn-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--syn-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  ${z}
`;var $=Object.defineProperty,S=Object.getOwnPropertyDescriptor,e=(n,r,l,s)=>{for(var o=s>1?void 0:s?S(r,l):r,d=n.length-1,u;d>=0;d--)(u=n[d])&&(o=(s?u(r,l,o):u(o))||o);return s&&o&&$(r,l,o),o};class t extends C{constructor(){super(...arguments),this.formControlController=new x(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new m(this,"help-text","label","prefix","suffix"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(r){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(r)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(r){this.input.focus(r)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(r){if(r){typeof r.top=="number"&&(this.input.scrollTop=r.top),typeof r.left=="number"&&(this.input.scrollLeft=r.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(r,l,s="none"){this.input.setSelectionRange(r,l,s)}setRangeText(r,l,s,o){this.input.setRangeText(r,l,s,o),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(r){this.input.setCustomValidity(r),this.formControlController.updateValidity()}render(){const r=this.hasSlotController.test("label"),l=this.hasSlotController.test("help-text"),s=this.hasSlotController.test("prefix"),o=this.hasSlotController.test("suffix"),d=this.label?!0:!!r,u=this.helpText?!0:!!l;return v`
      <div
        part="form-control"
        class=${c({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":d,"form-control--has-help-text":u,"form-control--has-prefix":s,"form-control--has-suffix":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${d?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${c({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${i(this.name)}
              .value=${f(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${i(this.placeholder)}
              rows=${i(this.rows)}
              minlength=${i(this.minlength)}
              maxlength=${i(this.maxlength)}
              autocapitalize=${i(this.autocapitalize)}
              autocorrect=${i(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${i(this.spellcheck)}
              enterkeyhint=${i(this.enterkeyhint)}
              inputmode=${i(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
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
    `}}t.styles=k;e([b(".textarea__control")],t.prototype,"input",2);e([_()],t.prototype,"hasFocus",2);e([a()],t.prototype,"title",2);e([a()],t.prototype,"name",2);e([a()],t.prototype,"value",2);e([a({reflect:!0})],t.prototype,"size",2);e([a()],t.prototype,"label",2);e([a({attribute:"help-text"})],t.prototype,"helpText",2);e([a()],t.prototype,"placeholder",2);e([a({type:Number})],t.prototype,"rows",2);e([a()],t.prototype,"resize",2);e([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([a({type:Boolean,reflect:!0})],t.prototype,"readonly",2);e([a({reflect:!0})],t.prototype,"form",2);e([a({type:Boolean,reflect:!0})],t.prototype,"required",2);e([a({type:Number})],t.prototype,"minlength",2);e([a({type:Number})],t.prototype,"maxlength",2);e([a()],t.prototype,"autocapitalize",2);e([a()],t.prototype,"autocorrect",2);e([a()],t.prototype,"autocomplete",2);e([a({type:Boolean})],t.prototype,"autofocus",2);e([a()],t.prototype,"enterkeyhint",2);e([a({type:Boolean,converter:{fromAttribute:n=>!(!n||n==="false"),toAttribute:n=>n?"true":"false"}})],t.prototype,"spellcheck",2);e([a()],t.prototype,"inputmode",2);e([y()],t.prototype,"defaultValue",2);e([h("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);e([h("rows",{waitUntilFirstUpdate:!0})],t.prototype,"handleRowsChange",1);e([h("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1);t.define("syn-textarea");
//# sourceMappingURL=textarea-9d15e527.js.map
