import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{c as t,h as n,t as r}from"./lit-BfcklOOD.js";import{_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,y as p}from"./synergy-element-DCZXsIq5.js";import{r as m,t as h}from"./if-defined-gcdQCgEY.js";import{n as g,t as _}from"./class-map-ivi47HnP.js";import{r as v,t as y}from"./form-BInibdBX.js";import{r as b,t as x}from"./slot-Cl6UAYP5.js";import{n as S,t as C}from"./localize-BjBTQYuo.js";import{n as w,t as T}from"./watch-RA3ULoLi.js";import{n as E,t as D}from"./icon.component-IUwY3NX_.js";import{n as O,t as k}from"./button.component-DlT1fCEa.js";import{n as A,t as j}from"./decorator-B3p9Y8B9.js";import{a as M,i as N,n as P,o as F,t as I}from"./animation-registry-BrsFz0KL.js";import{n as L,t as R}from"./form-control.styles-DEKLRB47.js";import{n as z,t as B}from"./default-value-Cx-eq7dV.js";var V,H=e((()=>{r(),V=n`
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
`})),U,W,G=e((()=>{_(),d(),r(),h(),z(),T(),C(),v(),b(),l(),L(),c(),O(),E(),H(),P(),F(),A(),s(),U=class extends f{constructor(...e){super(...e),this.formControlController=new y(this,{assumeInteractionOn:[`syn-change`],value:e=>e.files}),this.hasSlotController=new x(this,`help-text`,`label`),this.localize=new S(this),this.userIsDragging=!1,this.name=``,this.defaultValue=``,this.size=`medium`,this.label=``,this.helpText=``,this.disabled=!1,this.readonly=!1,this.droparea=!1,this.accept=``,this.multiple=!1,this.webkitdirectory=!1,this.form=``,this.required=!1,this.hideValue=!1}static{this.styles=[a,R,V]}static{this.dependencies={"syn-button":k,"syn-icon":D}}set files(e){this.input&&(this.input.files=e)}get files(){return this.input?.files}set value(e){this.input&&(this.input.value=e)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){if(this.droparea){this.dropareaWrapper?.focus(e);return}this.button?.focus(e)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value=``;return}this.files=e}async handleTransferItems(e){if(!e)return this.value=``,new Promise((e,t)=>{t(Error(`No proper items found`))});let t=Array.from(e).map(e=>e.webkitGetAsEntry()).map(e=>this.getFilesFromEntry(e)),n=(await Promise.all(t)).flat(),r=new DataTransfer;return Array.from(n).forEach(e=>r.items.add(e)),r.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((t,n)=>{e.file(e=>t([e]),n)}):e.isDirectory?new Promise((t,n)=>{e.createReader().readEntries(e=>{Promise.all(e.map(e=>this.getFilesFromEntry(e))).then(e=>{t(e.flat())}).catch(n)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit(`syn-input`),this.emit(`syn-change`)}handleDragOver(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!0)}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly)&&(this.userIsDragging=!1)}async handleDrop(e){if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readonly||!e.dataTransfer)return;let t=await this.handleTransferItems(e.dataTransfer?.items);if(this.userIsDragging=!1,t){if(!this.multiple&&!this.webkitdirectory&&t.length>1){this.emit(`syn-error`);return}if(this.hasSlotController.test(`trigger`))this.handleFiles(t);else{let e=I(this.inputChosen,`file.text.disappear`,{dir:this.localize.dir()}),n=I(this.inputChosen,`file.text.appear`,{dir:this.localize.dir()});if(this.droparea){let e=I(this.dropareaIcon,`file.iconDrop`,{dir:this.localize.dir()});M(this.dropareaIcon,e.keyframes,e.options)}await M(this.inputChosen,e.keyframes,e.options),this.handleFiles(t),await M(this.inputChosen,n.keyframes,n.options)}this.input.dispatchEvent(new Event(`change`))}}handleFocus(){this.emit(`syn-focus`)}handleBlur(){this.emit(`syn-blur`)}renderValue(){let e=!1,n=this.localize.term(`numFilesSelected`,0,this.webkitdirectory);return this.files&&this.files?.length>0&&(e=!0,n=this.files.length===1?this.files[0].name:this.localize.term(`numFilesSelected`,this.files.length,this.webkitdirectory)),t`
      <span
        class=${g({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${n}
      </span>
    `}renderDroparea(){return t`
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
            <strong>${this.localize.term(this.webkitdirectory?`folderDragDrop`:`fileDragDrop`)}</strong>
            ${this.renderValue()}
          </p>
        </div>
      </div>
    `}renderButton(){let e=this.localize.term(`fileButtonText`);return this.multiple&&(e=this.localize.term(`fileButtonTextMultiple`)),this.webkitdirectory&&(e=this.localize.term(`folderButtonText`)),t`
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
    `}render(){let e=this.label||!!this.hasSlotController.test(`label`),n=this.helpText?!0:!!this.hasSlotController.test(`help-text`),r=!!this.hasSlotController.test(`trigger`);return t`
      <div
        class=${g({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":n,"form-control--has-label":e,"form-control--large":this.size===`large`,"form-control--medium":this.size===`medium`,"form-control--small":this.size===`small`,"form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${r?t`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:t`
              <label
                aria-hidden=${e?`false`:`true`}
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
                aria-hidden=${n?`false`:`true`}
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
          name=${m(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}},u([i()],U.prototype,`userIsDragging`,void 0),u([p({type:Object})],U.prototype,`files`,null),u([p({type:String})],U.prototype,`name`,void 0),u([p({type:String})],U.prototype,`value`,null),u([B()],U.prototype,`defaultValue`,void 0),u([p({reflect:!0})],U.prototype,`size`,void 0),u([p()],U.prototype,`label`,void 0),u([p({attribute:`help-text`})],U.prototype,`helpText`,void 0),u([p({reflect:!0,type:Boolean})],U.prototype,`disabled`,void 0),u([p({reflect:!0,type:Boolean})],U.prototype,`readonly`,void 0),u([p({type:Boolean})],U.prototype,`droparea`,void 0),u([p({type:String})],U.prototype,`accept`,void 0),u([p({type:String})],U.prototype,`capture`,void 0),u([p({reflect:!0,type:Boolean})],U.prototype,`multiple`,void 0),u([p({reflect:!0,type:Boolean})],U.prototype,`webkitdirectory`,void 0),u([p({reflect:!0})],U.prototype,`form`,void 0),u([p({reflect:!0,type:Boolean})],U.prototype,`required`,void 0),u([p({attribute:`hide-value`,type:Boolean})],U.prototype,`hideValue`,void 0),u([o(`.input__control`)],U.prototype,`input`,void 0),u([o(`.button`)],U.prototype,`button`,void 0),u([o(`.droparea`)],U.prototype,`dropareaWrapper`,void 0),u([o(`.droparea__icon`)],U.prototype,`dropareaIcon`,void 0),u([o(`.input__value`)],U.prototype,`inputChosen`,void 0),u([w(`disabled`,{waitUntilFirstUpdate:!0})],U.prototype,`handleDisabledChange`,null),u([w(`value`,{waitUntilFirstUpdate:!0})],U.prototype,`handleValueChange`,null),U=u([j(`SynFile`)],U),W=U,N(`file.iconDrop`,{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:`ease-out`}}),N(`file.text.disappear`,{keyframes:[{opacity:1},{opacity:0,transform:`translateY(-40%)`}],options:{duration:300,easing:`cubic-bezier(0.45, 1.45, 0.8, 1)`}}),N(`file.text.appear`,{keyframes:[{opacity:0,transform:`translateY(40%)`},{opacity:1}],options:{duration:300,easing:`cubic-bezier(0.45, 1.45, 0.8, 1)`}})})),K=e((()=>{G(),G(),W.define(`syn-file`)}));export{K as t};