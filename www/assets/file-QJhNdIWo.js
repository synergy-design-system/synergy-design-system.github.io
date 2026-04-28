import{e as y}from"./class-map-DuCXFyun.js";import{c as v,n as a,S as b}from"./synergy-element-D6uzLjd8.js";import{S as _,r as w}from"./icon.component-BOIuuAKO.js";import{a as h}from"./query-D0jTsbLw.js";import{k as x,c as d}from"./iframe-CfKmpROb.js";import{o as C}from"./if-defined-DcCHMlyu.js";import{d as k}from"./default-value-DpgCUtcB.js";import{w as m}from"./watch-CEsCE2EF.js";import{L as D}from"./controller-0nuky388.js";import{F as $}from"./form-d9hCJUdr.js";import{H as z}from"./slot-9EVoRGQc.js";import{f as S}from"./form-control.styles-D5Kv7-NX.js";import{S as F}from"./button.component-iYmpiFHk.js";import{s as f,g as u,b as c}from"./animation-registry-DyRYqZdt.js";import{e as V}from"./decorator-jbWt9cIm.js";const T=x`
  :host {
    display: block;
  }

  .input__control {
    /**
     * Visually hide the input type=file without display:none
     * This is necessary for accessibility reasons and so the native html input validation popup 
     * is shown.
     */
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .form-control--droparea .input__control {
    /* move the input into the center, so the native validation popup is centered to the droparea */
    left: 50%;
  }

  .form-control-input {
    /* needed, so the native validation popup is centered correctly */
    position: relative;
  }

  /* Regular Input with button only */
  .button__wrapper {
    align-items: center;
    display: flex;
    gap: var(--syn-input-spacing-medium);
  }

  .form-control--small .button__wrapper {
    gap: var(--syn-input-spacing-small);
  }

  :host([size="large"]) .button__wrapper {
    gap: var(--syn-input-spacing-large);
  }

  /**
   * The value of the chosen file(s) or the placeholder text
   */
  .input__value {
    color: var(--syn-input-color);
    font-size: var(--syn-input-label-font-size-medium);
  }

  .input__value.input__value--hidden {
    display: none;
  }

  .input__value--placeholder {
    color: var(--syn-input-help-text-color);
  }

  .form-control--small .input__value {
    font-size: var(--syn-input-label-font-size-small);
  }

  .form-control--large .input__value {
    font-size: var(--syn-input-label-font-size-large);
  }

  /**
   * Special case for regular inputs:
   * When the user uses drag and drop, highlight the button with the primary color
   */
  .form-control--user-dragging:not([disabled]) .button::part(base) {
    background: none;
    border-color: var(--syn-interactive-emphasis-color-hover);
    color: var(--syn-interactive-emphasis-color-hover);
  }

  /* Drop Area */
  .droparea {
    --highlight-color: var(--syn-interactive-emphasis-color);

    border: var(--syn-input-border-width) dashed var(--syn-input-border-color);
    border-radius: var(--syn-input-border-radius-medium);
    font: var(--syn-body-medium-regular);
    padding: var(--syn-spacing-x-large) var(--syn-spacing-large);
    transition: var(--syn-transition-medium) background;
  }

  .droparea:focus-visible {
    border: var(--syn-input-border-width) dashed var(--syn-interactive-emphasis-color);
    outline: var(--syn-focus-ring);
    outline-offset: var(--syn-focus-ring-offset);
  }

  /* Adjust the highlight to match an inactive item */
  :host([disabled]) .droparea {
    --highlight-color: var(--syn-color-neutral-600);
  }

  :host([disabled]) .input__value {
    display: none;
  }

  .droparea__background {
    align-items: center;
    display: flex;
    gap: var(--syn-spacing-x-small);
    padding: var(--syn-spacing-x-small) var(--syn-spacing-medium);
  }

  .droparea__icon {
    align-items: center;
    color: var(--highlight-color);
    display: flex;
    font-size: var(--syn-spacing-3x-large);
  }

  .droparea__text {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-3x-small);
    margin: 0;
  }

  .droparea__text strong {
    color: var(--highlight-color);
    font-weight: var(--syn-font-weight-bold);
  }

  /* Sizes */
  /* stylelint-disable-next-line no-descending-specificity */
  .form-control--small .droparea {
    font: var(--syn-body-small-regular);
  }

  .form-control--small .droparea__icon {
    font-size: var(--syn-spacing-2x-large)
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .form-control--large .droparea {
    font: var(--syn-body-large-regular);
  }

  .form-control--large .droparea__icon {
    font-size: var(--syn-spacing-4x-large)
  }

  /* #1173: Readonly Styles */
  :host([readonly]) .button::part(base) {
    background: var(--syn-readonly-background-color);
    color: var(--syn-readonly-indicator-color);
  }

  :host([readonly]) .droparea__text strong {
    color: var(--syn-readonly-color-text);
  }

  :host([readonly]) .droparea {
    --highlight-color: var(--syn-readonly-icon-color);

    background: var(--syn-readonly-background-color);
    border: var(--syn-input-border-width) solid var(--syn-readonly-background-color);
  }

  /* Disabled Styles */
  :host([disabled]) .droparea,
  :host([disabled]) .input__value {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  :host(:not([disabled]):not([readonly])) .form-control--user-dragging .droparea {
    background: var(--syn-color-primary-50);
    border: var(--syn-input-border-width) solid var(--syn-interactive-emphasis-color);
    cursor: pointer;
  }

  :host(:not([disabled]):not([readonly])) .droparea:not(:focus-visible):hover {
    --highlight-color: var(--syn-interactive-emphasis-color-hover);

    border: var(--syn-input-border-width) dashed var(--syn-input-border-color-hover);
    cursor: pointer;
  }

  /* Validation */
  /* stylelint-disable-next-line no-descending-specificity */
  :host([data-user-invalid]:not([disabled]):not([readonly])) .droparea {
    border: var(--syn-input-border-width) dashed var(--syn-input-focus-ring-error);
  }
`;var I=Object.defineProperty,B=Object.getOwnPropertyDescriptor,r=(e,i,n,l)=>{for(var o=l>1?void 0:l?B(i,n):i,s=e.length-1,p;s>=0;s--)(p=e[s])&&(o=(l?p(i,n,o):p(o))||o);return l&&o&&I(i,n,o),o};let t=class extends b{constructor(){super(...arguments),this.formControlController=new $(this,{assumeInteractionOn:["syn-change"],value:e=>e.files}),this.hasSlotController=new z(this,"help-text","label"),this.localize=new D(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.readonly=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(e){this.input&&(this.input.files=e)}get files(){return this.input?.files}set value(e){this.input&&(this.input.value=e)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){if(this.droparea){this.dropareaWrapper?.focus(e);return}this.button?.focus(e)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value="";return}this.files=e}async handleTransferItems(e){if(!e)return this.value="",new Promise((p,g)=>{g(new Error("No proper items found"))});const n=Array.from(e).map(p=>p.webkitGetAsEntry()).map(p=>this.getFilesFromEntry(p)),o=(await Promise.all(n)).flat(),s=new DataTransfer;return Array.from(o).forEach(p=>s.items.add(p)),s.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((i,n)=>{e.file(l=>i([l]),n)}):e.isDirectory?new Promise((i,n)=>{e.createReader().readEntries(o=>{Promise.all(o.map(s=>this.getFilesFromEntry(s))).then(s=>{i(s.flat())}).catch(n)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!0)}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!1)}async handleDrop(e){if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readonly||!e.dataTransfer)return;const i=await this.handleTransferItems(e.dataTransfer?.items);if(this.userIsDragging=!1,!i)return;if(!this.multiple&&!this.webkitdirectory&&i.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(i);else{const l=u(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),o=u(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const s=u(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});c(this.dropareaIcon,s.keyframes,s.options)}await c(this.inputChosen,l.keyframes,l.options),this.handleFiles(i),await c(this.inputChosen,o.keyframes,o.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){let e=!1,i=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&this.files?.length>0&&(e=!0,i=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),d`
      <span
        class=${y({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${i}
      </span>
    `}renderDroparea(){return d`
      <div
        class="droparea"
        @click=${this.handleClick}
        @keypress=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        tabindex=${this.disabled?-1:0}
        part="droparea"
      >
        <div
          class="droparea__background"
          part="droparea-background"
        >
          <span part="droparea-icon" class="droparea__icon">
            <slot name="droparea-icon">
              <syn-icon name="upload-file" library="system" ></syn-icon>
            </slot>
          </span>
          <p
            class="droparea__text"
            part="droparea-value"
          >
            <strong>${this.localize.term(this.webkitdirectory?"folderDragDrop":"fileDragDrop")}</strong>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `}renderButton(){let e=this.localize.term("fileButtonText");return this.multiple&&(e=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(e=this.localize.term("folderButtonText")),d`
      <div
        class="button__wrapper"
        part="button-wrapper"
      >
        <syn-button
          class="button"
          @click=${this.handleClick}
          ?disabled=${this.disabled||this.readonly}
          exportparts="base:button__base"
          part="button"
          size=${this.size}
          variant="outline"
        >
          ${e}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){const e=this.label||!!this.hasSlotController.test("label"),i=this.helpText?!0:!!this.hasSlotController.test("help-text"),n=!!this.hasSlotController.test("trigger");return d`
      <div
        class=${y({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":i,"form-control--has-label":e,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${n?d`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:d`
              <label
                aria-hidden=${e?"false":"true"}
                class="form-control__label"
                for="input"
                part="form-control-label"
              >
                <slot name="label">${this.label}</slot>
              </label>

              <div
                class="form-control-input"
                part="form-control-input"
              >

                ${this.droparea?this.renderDroparea():this.renderButton()}
              </div>

              <div
                aria-hidden=${i?"false":"true"}
                class="form-control__help-text"
                id="help-text"
                part="form-control-help-text"
              >
                <slot name="help-text">${this.helpText}</slot>
              </div>
            `}
        <input
          accept=${this.accept}
          aria-describedby="help-text"
          @change=${this.handleChange}
          class="input__control"
          ?disabled=${this.disabled||this.readonly}
          id="input"
          @invalid=${this.handleInvalid}
          ?multiple=${this.multiple}
          name=${C(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}};t.styles=[v,S,T];t.dependencies={"syn-button":F,"syn-icon":_};r([w()],t.prototype,"userIsDragging",2);r([a({type:Object})],t.prototype,"files",1);r([a({type:String})],t.prototype,"name",2);r([a({type:String})],t.prototype,"value",1);r([k()],t.prototype,"defaultValue",2);r([a({reflect:!0})],t.prototype,"size",2);r([a()],t.prototype,"label",2);r([a({attribute:"help-text"})],t.prototype,"helpText",2);r([a({reflect:!0,type:Boolean})],t.prototype,"disabled",2);r([a({reflect:!0,type:Boolean})],t.prototype,"readonly",2);r([a({type:Boolean})],t.prototype,"droparea",2);r([a({type:String})],t.prototype,"accept",2);r([a({type:String})],t.prototype,"capture",2);r([a({reflect:!0,type:Boolean})],t.prototype,"multiple",2);r([a({reflect:!0,type:Boolean})],t.prototype,"webkitdirectory",2);r([a({reflect:!0})],t.prototype,"form",2);r([a({reflect:!0,type:Boolean})],t.prototype,"required",2);r([a({attribute:"hide-value",type:Boolean})],t.prototype,"hideValue",2);r([h(".input__control")],t.prototype,"input",2);r([h(".button")],t.prototype,"button",2);r([h(".droparea")],t.prototype,"dropareaWrapper",2);r([h(".droparea__icon")],t.prototype,"dropareaIcon",2);r([h(".input__value")],t.prototype,"inputChosen",2);r([m("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);r([m("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1);t=r([V("SynFile")],t);f("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});f("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});f("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});t.define("syn-file");
