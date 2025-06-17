import{a as $}from"./class-map-QQ7HVnPG.js";import{i as A,n as s,x as u}from"./property-ImbD-3qY.js";import{r as B}from"./directive-helpers-CvZEagFv.js";import{a as D}from"./query-DAIS6qJ0.js";import{o as O}from"./if-defined-CDNCanKK.js";import{d as P}from"./default-value-CoJKpiHX.js";import{w as E}from"./watch-CEsCE2EF.js";import{L as q}from"./localize-CatY2peN.js";import{F as L}from"./form-d9hCJUdr.js";import{H as M}from"./slot-9EVoRGQc.js";import{c as H,S as j}from"./component.styles-DXWA7L2q.js";import{f as R,a as U}from"./form-control.custom.styles-CXpzbCE1.js";import{S as W}from"./button-CwZJTvX8.js";import{S as Y}from"./icon.component-B3J6d3UF.js";import{s as k,g as C,b as z}from"./animation-registry-l4L8bmT6.js";import{e as G}from"./decorator-DANECR0-.js";import{g as K,x as c}from"./iframe-GSRepqjd.js";import{g as p,s as N,a as J,c as Q,b as X}from"./component-sz2YSCF4.js";import"./index-DihgwUfS.js";import"./static-BkNWbPkN.js";import"./spinner.component-pJEN2kXr.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const Z=A`
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
    border-color: var(--syn-color-primary-900);
    color: var(--syn-color-primary-900);
  }

  /* Drop Area */
  .droparea {
    --highlight-color: var(--syn-color-primary-600);

    border: var(--syn-border-width-small) dashed var(--syn-input-border-color);
    font: var(--syn-body-medium-regular);
    padding: var(--syn-spacing-x-large) var(--syn-spacing-large);
    transition: var(--syn-transition-medium) background;
  }

  .droparea:focus-visible {
    border: var(--syn-border-width-small) dashed var(--syn-color-primary-600);
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

  /* Disabled Styles */
  :host([disabled]) .droparea,
  :host([disabled]) .input__value {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }

  :host(:not([disabled])) .form-control--user-dragging .droparea {
    background: var(--syn-color-primary-50);
    border: var(--syn-border-width-small) solid var(--syn-color-primary-600);
    cursor: pointer;
  }

  :host(:not([disabled])) .droparea:not(:focus-visible):hover {
    --highlight-color: var(--syn-color-primary-900);

    border: var(--syn-border-width-small) dashed var(--syn-color-primary-900);
    cursor: pointer;
  }

  /* Validation */
  /* stylelint-disable-next-line no-descending-specificity */
  :host([data-user-invalid]:not([disabled])) .droparea {
    border: var(--syn-border-width-small) dashed var(--syn-input-border-color-focus-error);
  }
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,i=(e,t,l,a)=>{for(var o=a>1?void 0:a?te(t,l):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(o=(a?d(t,l,o):d(o))||o);return a&&o&&ee(t,l,o),o};let r=class extends j{constructor(){super(...arguments),this.formControlController=new L(this,{assumeInteractionOn:["syn-change"],value:e=>e.files}),this.hasSlotController=new M(this,"help-text","label"),this.localize=new q(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(e){this.input&&(this.input.files=e)}get files(){return this.input?.files}set value(e){this.input&&(this.input.value=e)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){if(this.droparea){this.dropareaWrapper?.focus(e);return}this.button?.focus(e)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value="";return}this.files=e}async handleTransferItems(e){if(!e)return this.value="",new Promise((d,I)=>{I(new Error("No proper items found"))});const l=Array.from(e).map(d=>d.webkitGetAsEntry()).map(d=>this.getFilesFromEntry(d)),o=(await Promise.all(l)).flat(),n=new DataTransfer;return Array.from(o).forEach(d=>n.items.add(d)),n.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((t,l)=>{e.file(a=>t([a]),l)}):e.isDirectory?new Promise((t,l)=>{e.createReader().readEntries(o=>{Promise.all(o.map(n=>this.getFilesFromEntry(n))).then(n=>{t(n.flat())}).catch(l)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!0}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!1}async handleDrop(e){if(e.preventDefault(),e.stopPropagation(),!e.dataTransfer)return;const t=await this.handleTransferItems(e.dataTransfer?.items);if(this.userIsDragging=!1,!t)return;if(!this.multiple&&!this.webkitdirectory&&t.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(t);else{const a=C(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),o=C(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const n=C(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});z(this.dropareaIcon,n.keyframes,n.options)}await z(this.inputChosen,a.keyframes,a.options),this.handleFiles(t),await z(this.inputChosen,o.keyframes,o.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){let e=!1,t=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&this.files?.length>0&&(e=!0,t=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),u`
      <span
        class=${$({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${t}
      </span>
    `}renderDroparea(){return u`
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
    `}renderButton(){let e=this.localize.term("fileButtonText");return this.multiple&&(e=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(e=this.localize.term("folderButtonText")),u`
      <div
        class="button__wrapper"
        part="button-wrapper"
      >
        <syn-button
          class="button"
          @click=${this.handleClick}
          ?disabled=${this.disabled}
          exportparts="base:button__base"
          part="button"
          size=${this.size}
          variant="outline"
        >
          ${e}
        </syn-button>
        ${this.renderValue()}
      </div>
    `}render(){const e=this.label||!!this.hasSlotController.test("label"),t=this.helpText?!0:!!this.hasSlotController.test("help-text"),l=!!this.hasSlotController.test("trigger");return u`
      <div
        class=${$({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":t,"form-control--has-label":e,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${l?u`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:u`
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
                aria-hidden=${t?"false":"true"}
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
          ?disabled=${this.disabled}
          id="input"
          @invalid=${this.handleInvalid}
          ?multiple=${this.multiple}
          name=${O(this.name)}
          ?required=${this.required}
          type="file"
          tabindex="-1"
          ?webkitdirectory=${this.webkitdirectory}
        >
    </div>
    `}};r.styles=[H,R,U,Z];r.dependencies={"syn-button":W,"syn-icon":Y};i([B()],r.prototype,"userIsDragging",2);i([s({type:Object})],r.prototype,"files",1);i([s({type:String})],r.prototype,"name",2);i([s({type:String})],r.prototype,"value",1);i([P()],r.prototype,"defaultValue",2);i([s({reflect:!0})],r.prototype,"size",2);i([s()],r.prototype,"label",2);i([s({attribute:"help-text"})],r.prototype,"helpText",2);i([s({reflect:!0,type:Boolean})],r.prototype,"disabled",2);i([s({type:Boolean})],r.prototype,"droparea",2);i([s({type:String})],r.prototype,"accept",2);i([s({type:String})],r.prototype,"capture",2);i([s({reflect:!0,type:Boolean})],r.prototype,"multiple",2);i([s({reflect:!0,type:Boolean})],r.prototype,"webkitdirectory",2);i([s({reflect:!0})],r.prototype,"form",2);i([s({reflect:!0,type:Boolean})],r.prototype,"required",2);i([s({attribute:"hide-value",type:Boolean})],r.prototype,"hideValue",2);i([D(".input__control")],r.prototype,"input",2);i([D(".button")],r.prototype,"button",2);i([D(".droparea")],r.prototype,"dropareaWrapper",2);i([D(".droparea__icon")],r.prototype,"dropareaIcon",2);i([D(".input__value")],r.prototype,"inputChosen",2);i([E("disabled",{waitUntilFirstUpdate:!0})],r.prototype,"handleDisabledChange",1);i([E("value",{waitUntilFirstUpdate:!0})],r.prototype,"handleValueChange",1);r=i([G("SynFile")],r);k("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});k("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});k("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});r.define("syn-file");var V=Object.freeze,re=Object.defineProperty,ie=(e,t)=>V(re(e,"raw",{value:V(e.slice())})),F;const{userEvent:ae}=__STORYBOOK_MODULE_TEST__,{args:se,argTypes:le}=N("syn-file"),{overrideArgs:oe}=J("syn-file"),{generateTemplate:ne}=Q("syn-file"),Ie={args:oe([],se),argTypes:le,component:"syn-file",parameters:{design:K("21709-49135"),docs:{description:{component:p("file","default")}}},tags:["Form"],title:"Components/syn-file"},f={parameters:{controls:{disable:!1},docs:{description:{story:p("file","default")}}},render:e=>ne({args:e})},h={parameters:{docs:{description:{story:p("file","label")}}},render:()=>c`
    <syn-file label="This is a label"></syn-file>
  `},m={parameters:{docs:{description:{story:p("file","help-text")}}},render:()=>c`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},y={parameters:{docs:{description:{story:p("file","multiple")}}},render:()=>c`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},g={parameters:{docs:{description:{story:p("file","hide-value")}}},render:()=>c`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:p("file","focus")}}},play:({canvasElement:e})=>{const t=e.querySelector("syn-file");t&&t.focus()},render:()=>c`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},b={parameters:{docs:{description:{story:p("file","disabled")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-file
        disabled
        label="This is a label"
      ></syn-file>
      <syn-file
        disabled
        droparea
        label="This is a label"
      ></syn-file>
    </div>
`},v={parameters:{docs:{description:{story:p("file","sizes")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},x={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:p("file","invalid")}}},play:async({canvasElement:e})=>{try{const t=e.querySelector("form"),l=t.querySelectorAll("syn-file"),a=t.querySelector("syn-button");a&&l&&(await ae.click(a),a.click())}catch(t){console.error("Error in play function:",t)}},render:()=>c(F||(F=ie([`
    <form class="custom-validity">
      <syn-file
        class="syn-file-invalid"
        droparea
        help-text="This is an error text."
        label="This is a label"
      ></syn-file>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <script type="module">
      const files = document.querySelectorAll('.syn-file-invalid');
      files.forEach((file) => {
        file.setCustomValidity('This is an error text');
      });
    <\/script>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      syn-button {
        align-self: flex-start;
      }
    </style>
  `])))},_={parameters:{docs:{description:{story:p("file","droparea")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Small"
        multiple
        size="small"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Medium"
        multiple
        size="medium"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Large"
        multiple
        size="large"
      ></syn-file>
    </div>
  `},S={parameters:{docs:{description:{story:p("file","directory")}}},render:()=>c`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        label="Button"
        webkitdirectory
      ></syn-file>
      <syn-file
        droparea
        label="Droparea"
        webkitdirectory
      ></syn-file>
    </div>
  `},T=X({Default:f,Label:h,HelpText:m,Multiple:y,HideValue:g,Disabled:b,Sizes:v,Invalid:x,Droparea:_,Directory:S},750);f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('file', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'label')
      }
    }
  },
  render: () => html\`
    <syn-file label="This is a label"></syn-file>
  \`
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  \`
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'multiple')
      }
    }
  },
  render: () => html\`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  \`
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'hide-value')
      }
    }
  },
  render: () => html\`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  \`
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('file', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector('syn-file');
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  \`
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'disabled')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <syn-file
        disabled
        label="This is a label"
      ></syn-file>
      <syn-file
        disabled
        droparea
        label="This is a label"
      ></syn-file>
    </div>
\`
} as Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'sizes')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('file', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const form = canvasElement.querySelector('form')!;
      const files = form.querySelectorAll('syn-file');
      const button = form.querySelector('syn-button')!;
      if (button && files) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <form class="custom-validity">
      <syn-file
        class="syn-file-invalid"
        droparea
        help-text="This is an error text."
        label="This is a label"
      ></syn-file>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <script type="module">
      const files = document.querySelectorAll('.syn-file-invalid');
      files.forEach((file) => {
        file.setCustomValidity('This is an error text');
      });
    <\/script>
    <style>
      .custom-validity {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      syn-button {
        align-self: flex-start;
      }
    </style>
  \`
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'droparea')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Small"
        multiple
        size="small"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Medium"
        multiple
        size="medium"
      ></syn-file>
      <syn-file
        accept="text/plain,image/*"
        droparea
        help-text="This is a help text"
        label="Large"
        multiple
        size="large"
      ></syn-file>
    </div>
  \`
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('file', 'directory')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file
        label="Button"
        webkitdirectory
      ></syn-file>
      <syn-file
        droparea
        label="Droparea"
        webkitdirectory
      ></syn-file>
    </div>
  \`
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  HelpText,
  Multiple,
  HideValue,
  Disabled,
  Sizes,
  Invalid,
  Droparea,
  Directory
}, 750)`,...T.parameters?.docs?.source}}};const Ae=["Default","Label","HelpText","Multiple","HideValue","Focus","Disabled","Sizes","Invalid","Droparea","Directory","Screenshot"];export{f as Default,S as Directory,b as Disabled,_ as Droparea,w as Focus,m as HelpText,g as HideValue,x as Invalid,h as Label,y as Multiple,T as Screenshot,v as Sizes,Ae as __namedExportsOrder,Ie as default};
