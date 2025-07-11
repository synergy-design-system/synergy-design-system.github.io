import{e as k}from"./class-map-vAWwgj24.js";import{n as l}from"./property-D1h_DNUl.js";import{r as I}from"./state-C9P6TcHx.js";import{a as S}from"./query-DAIS6qJ0.js";import{l as A,x as i,g as B}from"./iframe-7tHXQVNC.js";import{o as O}from"./if-defined-CCtHeFzx.js";import{d as P}from"./default-value-vobj7N7d.js";import{w as F}from"./watch-CEsCE2EF.js";import{L as q}from"./localize-Dh03wnLC.js";import{F as L}from"./form-d9hCJUdr.js";import{H as M}from"./slot-9EVoRGQc.js";import{c as H,S as j}from"./component.styles-C7e_DUNf.js";import{f as R,a as U}from"./form-control.custom.styles-hWZPQpEV.js";import{S as W}from"./button-CAHNNbty.js";import{S as Y}from"./icon.component-B89CvZOL.js";import{s as z,g as T,b as C}from"./animation-registry-l4L8bmT6.js";import{e as G}from"./decorator-DANECR0-.js";import{g as d,s as K,a as N,c as J,b as Q}from"./component-vUv6yFaV.js";import{p as X}from"./PaddingDecorator-CVO0vV5o.js";import"./index-DihgwUfS.js";import"./spinner.component-DtXeJSQ8.js";import"./functions-CDi3doZH.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";const Z=A`
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
`;var ee=Object.defineProperty,re=Object.getOwnPropertyDescriptor,a=(e,r,o,s)=>{for(var n=s>1?void 0:s?re(r,o):r,p=e.length-1,c;p>=0;p--)(c=e[p])&&(n=(s?c(r,o,n):c(n))||n);return s&&n&&ee(r,o,n),n};let t=class extends j{constructor(){super(...arguments),this.formControlController=new L(this,{assumeInteractionOn:["syn-change"],value:e=>e.files}),this.hasSlotController=new M(this,"help-text","label"),this.localize=new q(this),this.userIsDragging=!1,this.name="",this.defaultValue="",this.size="medium",this.label="",this.helpText="",this.disabled=!1,this.droparea=!1,this.accept="",this.multiple=!1,this.webkitdirectory=!1,this.form="",this.required=!1,this.hideValue=!1}set files(e){this.input&&(this.input.files=e)}get files(){return this.input?.files}set value(e){this.input&&(this.input.value=e)}get value(){return this.input?.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){if(this.droparea){this.dropareaWrapper?.focus(e);return}this.button?.focus(e)}blur(){if(this.droparea){this.dropareaWrapper?.blur();return}this.button?.blur()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFiles(e){if(!e){this.value="";return}this.files=e}async handleTransferItems(e){if(!e)return this.value="",new Promise((c,E)=>{E(new Error("No proper items found"))});const o=Array.from(e).map(c=>c.webkitGetAsEntry()).map(c=>this.getFilesFromEntry(c)),n=(await Promise.all(o)).flat(),p=new DataTransfer;return Array.from(n).forEach(c=>p.items.add(c)),p.files}async getFilesFromEntry(e){return e?e.isFile?new Promise((r,o)=>{e.file(s=>r([s]),o)}):e.isDirectory?new Promise((r,o)=>{e.createReader().readEntries(n=>{Promise.all(n.map(p=>this.getFilesFromEntry(p))).then(p=>{r(p.flat())}).catch(o)})}):[]:[]}handleClick(e){e.preventDefault(),this.input.click()}handleChange(e){e.preventDefault(),e.stopPropagation(),this.emit("syn-input"),this.emit("syn-change")}handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!0}handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.userIsDragging=!1}async handleDrop(e){if(e.preventDefault(),e.stopPropagation(),!e.dataTransfer)return;const r=await this.handleTransferItems(e.dataTransfer?.items);if(this.userIsDragging=!1,!r)return;if(!this.multiple&&!this.webkitdirectory&&r.length>1){this.emit("syn-error");return}if(this.hasSlotController.test("trigger"))this.handleFiles(r);else{const s=T(this.inputChosen,"file.text.disappear",{dir:this.localize.dir()}),n=T(this.inputChosen,"file.text.appear",{dir:this.localize.dir()});if(this.droparea){const p=T(this.dropareaIcon,"file.iconDrop",{dir:this.localize.dir()});C(this.dropareaIcon,p.keyframes,p.options)}await C(this.inputChosen,s.keyframes,s.options),this.handleFiles(r),await C(this.inputChosen,n.keyframes,n.options)}this.input.dispatchEvent(new Event("change"))}handleFocus(){this.emit("syn-focus")}handleBlur(){this.emit("syn-blur")}renderValue(){let e=!1,r=this.localize.term("numFilesSelected",0,this.webkitdirectory);return this.files&&this.files?.length>0&&(e=!0,r=this.files.length===1?this.files[0].name:this.localize.term("numFilesSelected",this.files.length,this.webkitdirectory)),i`
      <span
        class=${k({input__value:!0,"input__value--hidden":this.hideValue,"input__value--placeholder":!e})}
        part="value"
      >
        ${r}
      </span>
    `}renderDroparea(){return i`
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
    `}renderButton(){let e=this.localize.term("fileButtonText");return this.multiple&&(e=this.localize.term("fileButtonTextMultiple")),this.webkitdirectory&&(e=this.localize.term("folderButtonText")),i`
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
    `}render(){const e=this.label||!!this.hasSlotController.test("label"),r=this.helpText?!0:!!this.hasSlotController.test("help-text"),o=!!this.hasSlotController.test("trigger");return i`
      <div
        class=${k({"form-control":!0,"form-control--droparea":this.droparea,"form-control--has-help-text":r,"form-control--has-label":e,"form-control--large":this.size==="large","form-control--medium":this.size==="medium","form-control--small":this.size==="small","form-control--user-dragging":this.userIsDragging})}
        @dragenter=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        part="form-control"
      >
      ${o?i`
                <slot 
                  @click=${this.handleClick}
                  @keypress=${this.handleClick}
                  name="trigger"
                  part="trigger"
                ></slot>
            `:i`
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
                aria-hidden=${r?"false":"true"}
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
    `}};t.styles=[H,R,U,Z];t.dependencies={"syn-button":W,"syn-icon":Y};a([I()],t.prototype,"userIsDragging",2);a([l({type:Object})],t.prototype,"files",1);a([l({type:String})],t.prototype,"name",2);a([l({type:String})],t.prototype,"value",1);a([P()],t.prototype,"defaultValue",2);a([l({reflect:!0})],t.prototype,"size",2);a([l()],t.prototype,"label",2);a([l({attribute:"help-text"})],t.prototype,"helpText",2);a([l({reflect:!0,type:Boolean})],t.prototype,"disabled",2);a([l({type:Boolean})],t.prototype,"droparea",2);a([l({type:String})],t.prototype,"accept",2);a([l({type:String})],t.prototype,"capture",2);a([l({reflect:!0,type:Boolean})],t.prototype,"multiple",2);a([l({reflect:!0,type:Boolean})],t.prototype,"webkitdirectory",2);a([l({reflect:!0})],t.prototype,"form",2);a([l({reflect:!0,type:Boolean})],t.prototype,"required",2);a([l({attribute:"hide-value",type:Boolean})],t.prototype,"hideValue",2);a([S(".input__control")],t.prototype,"input",2);a([S(".button")],t.prototype,"button",2);a([S(".droparea")],t.prototype,"dropareaWrapper",2);a([S(".droparea__icon")],t.prototype,"dropareaIcon",2);a([S(".input__value")],t.prototype,"inputChosen",2);a([F("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);a([F("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1);t=a([G("SynFile")],t);z("file.iconDrop",{keyframes:[{scale:1},{scale:.7},{scale:1}],options:{duration:600,easing:"ease-out"}});z("file.text.disappear",{keyframes:[{opacity:1},{opacity:0,transform:"translateY(-40%)"}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});z("file.text.appear",{keyframes:[{opacity:0,transform:"translateY(40%)"},{opacity:1}],options:{duration:300,easing:"cubic-bezier(0.45, 1.45, 0.8, 1)"}});t.define("syn-file");var $=Object.freeze,te=Object.defineProperty,ae=(e,r)=>$(te(e,"raw",{value:$(e.slice())})),V;const{userEvent:ie}=__STORYBOOK_MODULE_TEST__,{args:se,argTypes:le}=K("syn-file"),{overrideArgs:oe}=N("syn-file"),{generateTemplate:ne}=J("syn-file"),Ie={args:oe([],se),argTypes:le,component:"syn-file",parameters:{design:B("21709-49135"),docs:{description:{component:d("file","default")}}},tags:["Form"],title:"Components/syn-file"},u={parameters:{controls:{disable:!1},docs:{description:{story:d("file","default")}}},render:e=>ne({args:e})},f={parameters:{docs:{description:{story:d("file","label")}}},render:()=>i`
    <syn-file label="This is a label"></syn-file>
  `},h={parameters:{docs:{description:{story:d("file","help-text")}}},render:()=>i`
    <syn-file
      help-text="This is a help text."
      label="This is a label"
    ></syn-file>
  `},m={parameters:{docs:{description:{story:d("file","multiple")}}},render:()=>i`
    <syn-file
      label="Multiple file input"
      multiple
    ></syn-file>
  `},y={parameters:{docs:{description:{story:d("file","hide-value")}}},render:()=>i`
    <syn-file
      hide-value
      label="This is a label"
    ></syn-file>
  `},D={decorators:[X()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d("file","focus")}}},play:({canvasElement:e})=>{const r=e.querySelector("syn-file");r&&r.focus()},render:()=>i`
    <syn-file label="This is a label" help-text="This is a help text" droparea></syn-file>
  `},g={parameters:{docs:{description:{story:d("file","disabled")}}},render:()=>i`
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
`},b={parameters:{docs:{description:{story:d("file","sizes")}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-file size="small" label="Small"></syn-file>
      <syn-file size="medium" label="Medium"></syn-file>
      <syn-file size="large" label="Large"></syn-file>
    </div>
  `},v={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d("file","invalid")}}},play:async({canvasElement:e})=>{try{const r=e.querySelector("form"),o=r.querySelectorAll("syn-file"),s=r.querySelector("syn-button");s&&o&&(await ie.click(s),s.click())}catch(r){console.error("Error in play function:",r)}},render:()=>i(V||(V=ae([`
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
  `])))},x={parameters:{docs:{description:{story:d("file","droparea")}}},render:()=>i`
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
  `},_={parameters:{docs:{description:{story:d("file","directory")}}},render:()=>i`
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
  `},w=Q({Default:u,Label:f,HelpText:h,Multiple:m,HideValue:y,Disabled:g,Sizes:b,Invalid:v,Droparea:x,Directory:_},750);u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
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
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} as Story`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 750)`,...w.parameters?.docs?.source}}};const Ae=["Default","Label","HelpText","Multiple","HideValue","Focus","Disabled","Sizes","Invalid","Droparea","Directory","Screenshot"];export{u as Default,_ as Directory,g as Disabled,x as Droparea,D as Focus,h as HelpText,y as HideValue,v as Invalid,f as Label,m as Multiple,w as Screenshot,b as Sizes,Ae as __namedExportsOrder,Ie as default};
