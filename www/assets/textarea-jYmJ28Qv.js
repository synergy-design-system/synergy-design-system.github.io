import{e as u}from"./class-map-CxnJOQ98.js";import{d as y}from"./default-value-BtsnQ-pU.js";import{F as f}from"./form-d9hCJUdr.js";import{H as m}from"./slot-9EVoRGQc.js";import{j as b,c as x}from"./iframe-CvEK3hyS.js";import{o as i}from"./if-defined-B09jWYPP.js";import{l as g}from"./live-B-z64Ocn.js";import{c as v,n as a,S as _}from"./synergy-element-CPjip6ae.js";import{r as w}from"./icon.component-ZmKdh5hn.js";import{a as p}from"./query-D0jTsbLw.js";import{w as h}from"./watch-CEsCE2EF.js";import{f as z}from"./form-control.styles-7AtXwvXx.js";import{e as C}from"./decorator-CWkWRMhy.js";const k=b`
  /* stylelint-disable no-descending-specificity */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  /* stylelint-disable property-no-vendor-prefix */
  :host {
    display: block;
  }

  .textarea {
    align-items: center;
    cursor: text;
    display: grid;
    font-family: var(--syn-input-font-family);
    font-weight: var(--syn-input-font-weight);
    letter-spacing: var(--syn-input-letter-spacing);
    line-height: var(--syn-line-height-normal);
    position: relative;
    transition:
      var(--syn-transition-fast) color,
      var(--syn-transition-fast) border,
      var(--syn-transition-fast) box-shadow,
      var(--syn-transition-fast) background-color;
    vertical-align: middle;
    width: 100%;
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
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-color);
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--syn-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--syn-input-background-color-disabled);
    border-color: var(--syn-input-border-color-disabled);
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity); /* #429: Use token for opacity */
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--syn-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color-disabled);
  }

  /* Readonly textareas */
  .textarea--readonly {
    background-color: var(--syn-input-readonly-background-color);
    border: none;
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
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  .textarea__control {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    box-shadow: none;
    color: var(--syn-input-color);
    cursor: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;

    /*
    Unfortunately we need to add a small margin to the textarea control. This is needed for the new sick 2025 theme,
    as because of the big border-radius the resize icon will otherwise overlap with the border
    This added margin needs to be subtracted from the padding of the textarea
    */
    margin: var(--syn-spacing-3x-small);
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--syn-input-placeholder-color);
    -webkit-user-select: none;
    user-select: none;
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
    /* TODO: Wait for Design response, how to handle this left / right spacing. Design has "--syn-input-spacing-medium" for all sizes,
      but we have different (coming from shoelace) */

    /* We need to subtract the added margin of the textarea control from the padding */
    padding: calc(var(--syn-spacing-x-small) - var(--syn-spacing-3x-small)) calc(var(--syn-input-spacing-small) - var(--syn-spacing-3x-small));
  }

  .textarea--medium {
    border-radius: var(--syn-input-border-radius-medium);
    font-size: var(--syn-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    /* We need to subtract the added margin of the textarea control from the padding */
    padding: calc(var(--syn-spacing-x-small) - var(--syn-spacing-3x-small)) calc(var(--syn-input-spacing-medium) - var(--syn-spacing-3x-small));
  }

  .textarea--large {
    border-radius: var(--syn-input-border-radius-large);
    font-size: var(--syn-input-font-size-large);
  }

  .textarea--large .textarea__control {
    /* TODO: Wait for Design response, how to handle this left / right spacing. Design has "--syn-input-spacing-medium" for all sizes,
      but we have different (coming from shoelace) */

    /* We need to subtract the added margin of the textarea control from the padding */
    padding: calc(var(--syn-spacing-x-small) - var(--syn-spacing-3x-small)) calc(var(--syn-input-spacing-large) - var(--syn-spacing-3x-small));
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
    overflow-y: hidden;
    resize: none;
  }

  /* Validation */
  :host([data-user-invalid]) .textarea--standard {
    border-color: var(--syn-input-border-color-focus-error);
  }

  :host([data-user-invalid]) .textarea--standard.textarea--focused:not(.textarea--disabled) {
    border-color: var(--syn-input-border-color-focus-error);
    box-shadow: 0 0 0 var(--syn-focus-ring-width) var(--syn-input-focus-ring-error);
  }
`;var $=Object.defineProperty,T=Object.getOwnPropertyDescriptor,r=(t,o,s,n)=>{for(var l=n>1?void 0:n?T(o,s):o,d=t.length-1,c;d>=0;d--)(c=t[d])&&(l=(n?c(o,s,l):c(l))||l);return n&&l&&$(o,s,l),l};let e=class extends _{constructor(){super(...arguments),this.formControlController=new f(this,{assumeInteractionOn:["syn-blur","syn-input"]}),this.hasSlotController=new m(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("syn-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("syn-change")}handleFocus(){this.hasFocus=!0,this.emit("syn-focus")}handleInput(){this.value=this.input.value,this.emit("syn-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,o,s="none"){this.input.setSelectionRange(t,o,s)}setRangeText(t,o,s,n="preserve"){const l=o??this.input.selectionStart,d=s??this.input.selectionEnd;this.input.setRangeText(t,l,d,n),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,n=this.helpText?!0:!!o;return x`
      <div
        part="form-control"
        class=${u({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${u({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${i(this.name)}
              .value=${g(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${i(this.placeholder)}
              rows=${i(this.rows)}
              minlength=${i(this.minlength)}
              maxlength=${i(this.maxlength)}
              autocapitalize=${i(this.autocapitalize)}
              autocorrect=${i(this.autocorrect?void 0:"off")}
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
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[v,z,k];r([p(".textarea__control")],e.prototype,"input",2);r([p(".textarea__size-adjuster")],e.prototype,"sizeAdjuster",2);r([w()],e.prototype,"hasFocus",2);r([a({reflect:!0})],e.prototype,"title",2);r([a()],e.prototype,"name",2);r([a()],e.prototype,"value",2);r([a({reflect:!0})],e.prototype,"size",2);r([a()],e.prototype,"label",2);r([a({attribute:"help-text"})],e.prototype,"helpText",2);r([a()],e.prototype,"placeholder",2);r([a({type:Number})],e.prototype,"rows",2);r([a()],e.prototype,"resize",2);r([a({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([a({type:Boolean,reflect:!0})],e.prototype,"readonly",2);r([a({reflect:!0})],e.prototype,"form",2);r([a({type:Boolean,reflect:!0})],e.prototype,"required",2);r([a({type:Number})],e.prototype,"minlength",2);r([a({type:Number})],e.prototype,"maxlength",2);r([a()],e.prototype,"autocapitalize",2);r([a({attribute:"autocorrect",reflect:!0,converter:{fromAttribute:t=>t===""||t==="on",toAttribute:t=>t?"on":"off"},type:Boolean})],e.prototype,"autocorrect",2);r([a()],e.prototype,"autocomplete",2);r([a({type:Boolean})],e.prototype,"autofocus",2);r([a()],e.prototype,"enterkeyhint",2);r([a({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],e.prototype,"spellcheck",2);r([a()],e.prototype,"inputmode",2);r([y()],e.prototype,"defaultValue",2);r([h("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);r([h("rows",{waitUntilFirstUpdate:!0})],e.prototype,"handleRowsChange",1);r([h("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1);e=r([C("SynTextarea")],e);e.define("syn-textarea");
