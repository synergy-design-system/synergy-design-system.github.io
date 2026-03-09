import{j as q,c as r,x as A,C as R,d as L}from"./iframe-BtlaEU6c.js";import{S as P,c as B,n as c}from"./synergy-element-DNCG4YnN.js";import{r as m}from"./icon.component-BaF0yqNc.js";import{a as N}from"./query-D0jTsbLw.js";import{o as U}from"./query-assigned-elements-CIlqV-be.js";import{o as j}from"./if-defined-D4eeoy7Q.js";import{w as z}from"./watch-CEsCE2EF.js";import{S as H}from"./alert.component-D7jnoH_-.js";import{S as K}from"./tooltip.component-D_CQrI11.js";import{e as W}from"./decorator-CWkWRMhy.js";import"./input-sQwXz9sn.js";import"./button-CLYzldst.js";import{g as l,a as Y,s as G,b as J,c as Q}from"./component-Ba707T-h.js";import"./preload-helper-PPVm8Dsz.js";import"./animation-registry-DyRYqZdt.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./class-map-CR1NexEI.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./icon-button.component-MkKOiMUK.js";import"./popup.component-Dsms77_-.js";import"./functions-bkELIyT9.js";import"./default-value-CqRUEAyG.js";import"./form-d9hCJUdr.js";import"./live-BTVC_kIS.js";import"./form-control.styles-BZYj_jBM.js";import"./divider.component-CQU6Akd4.js";import"./spinner.component-BHat1s4Y.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";const X=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Z=["blur","change","clear","focus","invalid","input","move"],k=(e,t)=>e.includes(t),x=e=>k(e,"blur"),F=e=>k(e,"invalid"),V=e=>e instanceof P,ee=(e="")=>e.split(" ").map(t=>t.trim()).filter(Boolean),I=(e,t)=>{const a=t.trim();return V(e)&&Z.includes(a)?`syn-${a}`:a},te=e=>{if(!V(e))return;const{size:t}=e;return t!=null?t:void 0},ae={"syn-checkbox":"input","syn-combobox":".combobox__value-input","syn-file":"input","syn-input":"input","syn-radio-group":"input","syn-range":".input__control","syn-select":".select__value-input","syn-switch":"input","syn-textarea":".textarea__control"},D=(e,t)=>e.shadowRoot?.querySelector(t)??null,ie=e=>{if(!e)return;if(!e.shadowRoot)return e;const t=e.tagName.toLowerCase(),a=ae[t];if(a){const s=D(e,a);if(s)return s}const i=D(e,"input,select,textarea");return i||e},se=q`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`;var ne=Object.defineProperty,re=Object.getOwnPropertyDescriptor,o=(e,t,a,i)=>{for(var s=i>1?void 0:i?re(t,a):t,d=e.length-1,u;d>=0;d--)(u=e[d])&&(s=(i?u(t,a,s):u(s))||s);return i&&s&&ne(t,a,s),s};const $=()=>r`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`;let n=class extends P{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage="")},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async e=>{if(F(e.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}F(e.type)&&this.variant!=="native"&&(e.preventDefault(),e.stopPropagation());const t=e.currentTarget;if(V(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!x(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!x(e.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){const e=this.slottedChildren[0];return e||void 0}setAlertSize(){this.alertSize=te(this.getInput())}getUsedEventNames(){const e=this.getInput();if(!e)return[];const t=ee(this.on),[...a]=t.filter(Boolean);return a.includes("invalid")||a.push("invalid"),a.includes("live")&&(a.push("input"),a.push("blur")),Array.from(new Set(a.filter(i=>i!=="live").map(i=>I(e,i))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const e=this.getInput();if(!e)return;const t=this.getUsedEventNames();t.forEach(d=>{e.addEventListener(d,this.validate,{capture:F(d),signal:this.controller.signal})});const a=I(e,"change");t.includes(a)||e.addEventListener(a,this.internalRevalidate,{signal:this.controller.signal});const i=I(e,"focus"),s=I(e,"blur");e.addEventListener(i,this.handleInputFocus,{signal:this.controller.signal}),e.addEventListener(s,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(e){const{customValidationMessage:t}=this,a=t||e.validationMessage;this.validationMessage=a}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){const t=document.activeElement,a=t.closest("syn-validate");!t.validity?.valid&&a||(e.scrollIntoView({block:"nearest"}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();const t=this.getInput();this.customValidationMessage&&(V(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:i})=>i===t).every(i=>i.attributeName==="size")&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:["size"],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:i})=>i===t).every(i=>{const s=i.target;return s.hasAttribute("disabled")||s.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(V(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}updated(e){if(super.updated(e),this.variant!=="tooltip")return;const t=this.tooltipElement;if(!t)return;const a=this.getDisplayValidationMessage();!this.isValid&&a&&this.hasFocus?(t.content=a,t.show()):t.hide()}renderInlineValidation(){const e=this.getDisplayValidationMessage();return this.variant!=="inline"||!e?"":r`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${j(this.alertSize)}
        variant="danger"
      >
        ${this.hideIcon?"":r`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${e}
      </syn-alert>
    `}render(){const e=this.variant==="tooltip"?r`
        <syn-tooltip
          .anchor=${ie(this.getInput())??void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${$()}
        </syn-tooltip>
      `:$();return r`
      <div
        class="validate"
        part="base"
      >
        ${e}
        ${this.renderInlineValidation()}
      </div>
    `}};n.styles=[B,se];n.dependencies={"syn-alert":H,"syn-tooltip":K};o([U()],n.prototype,"slottedChildren",2);o([N("syn-tooltip")],n.prototype,"tooltipElement",2);o([m()],n.prototype,"validationMessage",2);o([m()],n.prototype,"eagerFirstMount",2);o([m()],n.prototype,"isInternalTriggeredInvalid",2);o([m()],n.prototype,"isValid",2);o([m()],n.prototype,"alertSize",2);o([m()],n.prototype,"hasFocus",2);o([c({reflect:!0})],n.prototype,"variant",2);o([c({attribute:"hide-icon",reflect:!0,type:Boolean})],n.prototype,"hideIcon",2);o([c({reflect:!0})],n.prototype,"on",2);o([c({attribute:"custom-validation-message",type:String})],n.prototype,"customValidationMessage",2);o([c({type:Boolean})],n.prototype,"eager",2);o([z("on",{waitUntilFirstUpdate:!0})],n.prototype,"handleListenerChange",1);o([z("eager",{waitUntilFirstUpdate:!1})],n.prototype,"handleEagerChange",1);o([z("customValidationMessage",{waitUntilFirstUpdate:!0})],n.prototype,"handleCustomValidationMessageChange",1);n=o([W("SynValidate")],n);n.define("syn-validate");var oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,M=(e,t,a,i)=>{for(var s=i>1?void 0:i?le(t,a):t,d=e.length-1,u;d>=0;d--)(u=e[d])&&(s=(i?u(t,a,s):u(s))||s);return i&&s&&oe(t,a,s),s};let p=class extends A{constructor(){super(),this.name="",this.value="",this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.validate()})}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll("input").forEach(t=>t.disabled=e)}formResetCallback(){this.value="",this.internals.setFormValue("")}checkValidity(){return this.validate(),this.internals.checkValidity()}reportValidity(){return this.validate(),this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){const e=this.value?.length>0&&this.value==="option3";if(e)this.internals.setValidity({});else{const t=this.shadowRoot.querySelector('input[value="option3"]');this.internals.setValidity({customError:!0},"You know, that this is not correct.",t||void 0)}return e}render(){return r`
      <div>
        ${[1,2,3,4,5].map(e=>r`
          <label>
            <input
              ?required=${this.required}
              ?checked=${this.value===`option${e}`}
              type="radio"
              name=${this.name}
              value=${e===3?`option${e}`:""}
              @click="${()=>this.selectOption(`option${e}`)}"
            >
            Option ${e}
          </label>
        `)}
      </div>
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))}};p.formAssociated=!0;p.shadowRootOptions={...A.shadowRootOptions,delegatesFocus:!0};p.styles=q`
    /* stylelint-disable */
    :host {
      --item-width: 32px;
      display: block;
    }

    div {
      box-sizing: content-box;
      display: flex;
      gap: 12px;
    }

    label {
      box-sizing: content-box;
      width: var(--item-width);
      height: var(--item-width);
      line-height: var(--item-width);
      overflow: hidden;
      margin: 5px 0;
      padding: 5px;
    }

    input {
      box-sizing: border-box;
      appearance: none;
      width: var(--item-width);
      height: var(--item-width);
      color: red;
      border-radius: var(--item-width);
      background: currentColor;
      display: block;
      margin: 0;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }

    input:checked {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }

    input:not(checked):hover {
      filter: brightness(85%);
    }

    input:focus-visible {
      outline: 2px solid black;
      outline-offset: 2px;
    }

    label:nth-of-type(1) input {
      color: var(--syn-input-focus-ring-error);
    }

    label:nth-of-type(2) input {
      color: #8950BF;
    }

    label:nth-of-type(3) input {
      color: var(--syn-logo-color);
    }

    label:nth-of-type(4) input {
      color: var(--syn-color-success-600);
    }

    label:nth-of-type(5) input {
      color: var(--syn-color-warning-500);
    }
    /* stylelint-enable */
  `;M([c({type:String})],p.prototype,"name",2);M([c({type:String})],p.prototype,"value",2);M([c({type:Boolean})],p.prototype,"required",2);p=M([X("validate-demo-radio")],p);var O=Object.freeze,de=Object.defineProperty,pe=(e,t)=>O(de(e,"raw",{value:O(e.slice())})),T;const{args:ce,argTypes:ue}=G("syn-validate"),{overrideArgs:me}=Q("syn-validate"),{generateTemplate:ve}=J("syn-validate"),We={args:me([{name:"default",type:"slot",value:`
<syn-input
  label="Invalid input"
  type="email"
  value="team(at)synergy.com"
></syn-input>
      `.trim()}],ce),argTypes:ue,component:"syn-validate",decorators:[(e,t)=>{const a=`${t.id}-validate-demo-form`;return r(T||(T=pe([`
        <form id=`,`>
          `,`
          <p>
            <syn-button type="submit">Submit</syn-button>
          </p>
        </form>
        <script type="module">
          customElements.whenDefined('syn-validate').then(() => {
            const form = document.getElementById('`,`');
            form.addEventListener('submit', (event) => {
              event.preventDefault();
            });
          });
        <\/script>
      `])),a,e(),a)}],parameters:{chromatic:{modes:R},design:L("24853-35456"),docs:{description:{component:l("validate","default")}}},tags:["Form"],title:"Components/syn-validate"},v={parameters:{controls:{disable:!1},docs:{description:{story:l("validate","default")}}},render:e=>ve({args:e})},y={parameters:{docs:{description:{story:l("validate","tooltip")}}},render:()=>r`
    <syn-validate
      class="validation-tooltip"
      variant="tooltip"
      on="live"
    >
      <syn-input
        label="Invalid input"
        type="email"
        value="team(at)synergy.com"
        required
      ></syn-input>
    </syn-validate>`},h={parameters:{docs:{description:{story:l("validate","inline")}}},render:()=>r`
    <syn-validate
      class="validation-inline"
      variant="inline"
    >
      <syn-input
        label="Inline validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},g={parameters:{docs:{description:{story:l("validate","hide-icon")}}},render:()=>r`
    <syn-validate
      class="validation-hide-icon"
      hide-icon
      variant="inline"
    >
      <syn-input
        label="Hide icon"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},C={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l("validate","size")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${["small","medium","large"].map(e=>r`
        <syn-validate eager variant="inline">
          <syn-input
            label="Size ${e}"
            size="${e}"
            type="email"
            value="team(at)synergy.com"
          ></syn-input>       
        </syn-validate>  
      `)}
    </div>
  `},f={parameters:{docs:{description:{story:l("validate","live")}}},render:()=>r`
    <syn-validate
      class="validation-live"
      variant="inline"
      on="live"
    >
      <syn-input
        label="Invalid input"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},b={parameters:{docs:{description:{story:l("validate","custom-validation")}}},render:()=>r`
    <syn-validate
      class="validation-custom-validation"
      custom-validation-message="Include an &quot;@&quot; in the email address, otherwise you will never get our marvelous newsletter"
      variant="inline"
    >
      <syn-input
        label="Custom validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},S={parameters:{docs:{description:{story:l("validate","custom-form-field")}}},render:()=>r`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  `},E={parameters:{docs:{description:{story:l("validate","custom-event-names")}}},render:()=>r`
    <syn-validate
      class="validation-custom-validation"
      on="mouseover blur"
      variant="inline"
    >
      <syn-input
        label="Custom validation (triggered on hover and blur)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},w={parameters:{docs:{description:{story:l("validate","eager")}}},render:()=>r`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},_=Y({Default:v,TooltipVariant:y,InlineVariant:h,HideIcon:g,Live:f,CustomValidationMessage:b,CustomFormField:S,Eager:w},200);v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('validate', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'tooltip')
      }
    }
  },
  render: () => html\`
    <syn-validate
      class="validation-tooltip"
      variant="tooltip"
      on="live"
    >
      <syn-input
        label="Invalid input"
        type="email"
        value="team(at)synergy.com"
        required
      ></syn-input>
    </syn-validate>\`
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'inline')
      }
    }
  },
  render: () => html\`
    <syn-validate
      class="validation-inline"
      variant="inline"
    >
      <syn-input
        label="Inline validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'hide-icon')
      }
    }
  },
  render: () => html\`
    <syn-validate
      class="validation-hide-icon"
      hide-icon
      variant="inline"
    >
      <syn-input
        label="Hide icon"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('validate', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      \${['small', 'medium', 'large'].map(size => html\`
        <syn-validate eager variant="inline">
          <syn-input
            label="Size \${size}"
            size="\${size}"
            type="email"
            value="team(at)synergy.com"
          ></syn-input>       
        </syn-validate>  
      \`)}
    </div>
  \`
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'live')
      }
    }
  },
  render: () => html\`
    <syn-validate
      class="validation-live"
      variant="inline"
      on="live"
    >
      <syn-input
        label="Invalid input"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'custom-validation')
      }
    }
  },
  render: () => html\`
    <syn-validate
      class="validation-custom-validation"
      custom-validation-message="Include an &quot;@&quot; in the email address, otherwise you will never get our marvelous newsletter"
      variant="inline"
    >
      <syn-input
        label="Custom validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'custom-form-field')
      }
    }
  },
  render: () => html\`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  \`
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'custom-event-names')
      }
    }
  },
  render: () => html\`
    <syn-validate
      class="validation-custom-validation"
      on="mouseover blur"
      variant="inline"
    >
      <syn-input
        label="Custom validation (triggered on hover and blur)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('validate', 'eager')
      }
    }
  },
  render: () => html\`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
\`
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TooltipVariant,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,..._.parameters?.docs?.source}}};const Ye=["Default","TooltipVariant","InlineVariant","HideIcon","Sizes","Live","CustomValidationMessage","CustomFormField","BindingToCustomEventNames","Eager","Screenshot"];export{E as BindingToCustomEventNames,S as CustomFormField,b as CustomValidationMessage,v as Default,w as Eager,g as HideIcon,h as InlineVariant,f as Live,_ as Screenshot,C as Sizes,y as TooltipVariant,Ye as __namedExportsOrder,We as default};
