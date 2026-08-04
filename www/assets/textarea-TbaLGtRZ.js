import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,t as r}from"./lit-DgWh_IaA.js";import{a as i,d as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./synergy-element-C9GUR4B8.js";import{t as f}from"./query-DOHNhzf6.js";import{r as p,t as m}from"./if-defined-DmmMeZVG.js";import{n as h,t as g}from"./class-map-HZwHklGF.js";import{r as _,t as v}from"./form-D9RYqjir.js";import{r as y,t as b}from"./slot-CUH75lUH.js";import{n as x}from"./watch-Q8hEwzVb.js";import{n as S,t as C}from"./decorator-DZesXZg7.js";import{r as w,t as T}from"./live-CQLnDsoJ.js";import{n as E,t as D}from"./form-control.styles-NuPmuUkm.js";import{n as O,t as k}from"./default-value-DWB2NLlv.js";var A;function j(){return(j=e((()=>{r(),A=n`
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
`})))()}var M,N;function P(){return(P=e((()=>{g(),O(),_(),y(),r(),m(),T(),u(),c(),E(),s(),j(),S(),M=class extends d{constructor(...e){super(...e),this.formControlController=new v(this,{assumeInteractionOn:[`syn-blur`,`syn-input`]}),this.hasSlotController=new b(this,`help-text`,`label`),this.hasFocus=!1,this.title=``,this.name=``,this.value=``,this.size=`medium`,this.label=``,this.helpText=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.defaultValue=``}static{this.styles=[i,D,A]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit(`syn-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`syn-change`)}handleFocus(){this.hasFocus=!0,this.emit(`syn-focus`)}handleInput(){this.value=this.input.value,this.emit(`syn-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),n=this.hasSlotController.test(`help-text`),r=this.label?!0:!!e,i=this.helpText?!0:!!n;return t`
      <div
        part="form-control"
        class=${h({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${h({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.readonly,"textarea--readonly":this.readonly,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${p(this.name)}
              .value=${w(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${p(this.placeholder)}
              rows=${p(this.rows)}
              minlength=${p(this.minlength)}
              maxlength=${p(this.maxlength)}
              autocapitalize=${p(this.autocapitalize)}
              autocorrect=${p(this.autocorrect?void 0:`off`)}
              ?autofocus=${this.autofocus}
              spellcheck=${p(this.spellcheck)}
              enterkeyhint=${p(this.enterkeyhint)}
              inputmode=${p(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}},l([f(`.textarea__control`)],M.prototype,`input`,void 0),l([f(`.textarea__size-adjuster`)],M.prototype,`sizeAdjuster`,void 0),l([o()],M.prototype,`hasFocus`,void 0),l([a({reflect:!0})],M.prototype,`title`,void 0),l([a()],M.prototype,`name`,void 0),l([a()],M.prototype,`value`,void 0),l([a({reflect:!0})],M.prototype,`size`,void 0),l([a()],M.prototype,`label`,void 0),l([a({attribute:`help-text`})],M.prototype,`helpText`,void 0),l([a()],M.prototype,`placeholder`,void 0),l([a({type:Number})],M.prototype,`rows`,void 0),l([a()],M.prototype,`resize`,void 0),l([a({type:Boolean,reflect:!0})],M.prototype,`disabled`,void 0),l([a({type:Boolean,reflect:!0})],M.prototype,`readonly`,void 0),l([a({reflect:!0})],M.prototype,`form`,void 0),l([a({type:Boolean,reflect:!0})],M.prototype,`required`,void 0),l([a({type:Number})],M.prototype,`minlength`,void 0),l([a({type:Number})],M.prototype,`maxlength`,void 0),l([a()],M.prototype,`autocapitalize`,void 0),l([a({attribute:`autocorrect`,reflect:!0,converter:{fromAttribute:e=>e===``||e===`on`,toAttribute:e=>e?`on`:`off`},type:Boolean})],M.prototype,`autocorrect`,void 0),l([a()],M.prototype,`autocomplete`,void 0),l([a({type:Boolean})],M.prototype,`autofocus`,void 0),l([a()],M.prototype,`enterkeyhint`,void 0),l([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],M.prototype,`spellcheck`,void 0),l([a()],M.prototype,`inputmode`,void 0),l([k()],M.prototype,`defaultValue`,void 0),l([x(`disabled`,{waitUntilFirstUpdate:!0})],M.prototype,`handleDisabledChange`,null),l([x(`rows`,{waitUntilFirstUpdate:!0})],M.prototype,`handleRowsChange`,null),l([x(`value`,{waitUntilFirstUpdate:!0})],M.prototype,`handleValueChange`,null),M=l([C(`SynTextarea`)],M),N=M})))()}function F(){return(F=e((()=>{P(),N.define(`syn-textarea`)})))()}export{F as t};