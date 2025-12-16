import{j as $,x as r,l as O,g as T,C as k}from"./iframe-CoX-vBMZ.js";import{S as P,c as q,n as c}from"./synergy-element-bIJ-C0w-.js";import{r as V}from"./icon.component-DhUmIYb_.js";import{o as B}from"./query-assigned-elements-BQ-t-koE.js";import{o as R}from"./if-defined-CnJp458s.js";import{w as z}from"./watch-CEsCE2EF.js";import{S as U}from"./alert.component-DuFNchzh.js";import{e as j}from"./decorator-DeP7ND_N.js";import"./input-BE7po7lY.js";import"./button-BD48kEXv.js";import{g as l,s as L,a as N,c as H,b as K}from"./component-ft02fCWH.js";import"./preload-helper-Ct5FWWRu.js";import"./query-DAIS6qJ0.js";import"./animation-registry-l4L8bmT6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./class-map-DALZAsU6.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./icon-button.component-CBQSDxRX.js";import"./functions-DkH8wE0_.js";import"./default-value-DeE2ci1X.js";import"./form-d9hCJUdr.js";import"./live-DKoDp2lW.js";import"./form-control.custom.styles-_lHZaNKS.js";import"./divider.component-CKxweNMx.js";import"./spinner.component-eAJ7y0GE.js";import"./index-CQ0aEGxp.js";import"./_docs-DmU5sf6r.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=e=>(t,a)=>{a!==void 0?a.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Y=["blur","change","clear","focus","invalid","input","move"],A=(e,t)=>e.includes(t),F=e=>A(e,"blur"),M=e=>A(e,"invalid"),S=e=>e instanceof P,G=(e="")=>e.split(" ").map(t=>t.trim()).filter(Boolean),_=(e,t)=>{const a=t.trim();return S(e)&&Y.includes(a)?`syn-${a}`:a},J=e=>{if(!S(e))return;const{size:t}=e;return t!=null?t:void 0},Q=$`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`;var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,o=(e,t,a,i)=>{for(var n=i>1?void 0:i?Z(t,a):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(n=(i?u(t,a,n):u(n))||n);return i&&n&&X(t,a,n),n};let s=class extends P{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage="")},this.validate=async e=>{if(M(e.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}M(e.type)&&this.variant!=="native"&&(e.preventDefault(),e.stopPropagation());const t=e.currentTarget;if(S(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!F(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!F(e.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){const e=this.slottedChildren[0];return e||void 0}setAlertSize(){this.alertSize=J(this.getInput())}getUsedEventNames(){const e=this.getInput();if(!e)return[];const t=G(this.on),[...a]=t.filter(Boolean);return a.includes("invalid")||a.push("invalid"),a.includes("live")&&(a.push("input"),a.push("blur")),Array.from(new Set(a.filter(i=>i!=="live").map(i=>_(e,i))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const e=this.getInput();if(!e)return;const t=this.getUsedEventNames();t.forEach(i=>{e.addEventListener(i,this.validate,{capture:M(i),signal:this.controller.signal})});const a=_(e,"change");t.includes(a)||e.addEventListener(a,this.internalRevalidate,{signal:this.controller.signal})}setValidationMessage(e){const{customValidationMessage:t}=this,a=t||e.validationMessage;this.validationMessage=a}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){const t=document.activeElement,a=t.closest("syn-validate");!t.validity?.valid&&a||(e.scrollIntoView({block:"nearest"}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();const t=this.getInput();this.customValidationMessage&&(S(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:i})=>i===t).every(i=>i.attributeName==="size")&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:["size"],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:i})=>i===t).every(i=>{const n=i.target;return n.hasAttribute("disabled")||n.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(S(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}renderInlineValidation(){return this.variant!=="inline"||!this.validationMessage?"":r`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${R(this.alertSize)}
        variant="danger"
      >
        ${this.hideIcon?"":r`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${this.validationMessage}
      </syn-alert>
    `}render(){return r`
      <div
        class="validate"
        part="base"
      >
        <slot
          class="validate__input-wrapper"
          part="input-wrapper"
        ></slot>
        
        ${this.renderInlineValidation()}
      </div>
    `}};s.styles=[q,Q];s.dependencies={"syn-alert":U};o([B()],s.prototype,"slottedChildren",2);o([V()],s.prototype,"validationMessage",2);o([V()],s.prototype,"eagerFirstMount",2);o([V()],s.prototype,"isInternalTriggeredInvalid",2);o([V()],s.prototype,"isValid",2);o([V()],s.prototype,"alertSize",2);o([c({reflect:!0})],s.prototype,"variant",2);o([c({attribute:"hide-icon",reflect:!0,type:Boolean})],s.prototype,"hideIcon",2);o([c({reflect:!0})],s.prototype,"on",2);o([c({attribute:"custom-validation-message",type:String})],s.prototype,"customValidationMessage",2);o([c({type:Boolean})],s.prototype,"eager",2);o([z("on",{waitUntilFirstUpdate:!0})],s.prototype,"handleListenerChange",1);o([z("eager",{waitUntilFirstUpdate:!1})],s.prototype,"handleEagerChange",1);o([z("customValidationMessage",{waitUntilFirstUpdate:!0})],s.prototype,"handleCustomValidationMessageChange",1);s=o([j("SynValidate")],s);s.define("syn-validate");var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,E=(e,t,a,i)=>{for(var n=i>1?void 0:i?te(t,a):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(n=(i?u(t,a,n):u(n))||n);return i&&n&&ee(t,a,n),n};let d=class extends O{constructor(){super(),this.name="",this.value="",this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value)}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll("input").forEach(t=>t.disabled=e)}formResetCallback(){this.value="",this.internals.setFormValue("")}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){const e=this.value?.length>0&&this.value==="option3";return e?this.internals.setValidity({}):this.internals.setValidity({customError:!0},"You know, that this is not correct.",this.shadowRoot.querySelector('input[value="option3"]')),e}render(){return r`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate()}};d.formAssociated=!0;d.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0};d.styles=$`
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
  `;E([c({type:String})],d.prototype,"name",2);E([c({type:String})],d.prototype,"value",2);E([c({type:Boolean})],d.prototype,"required",2);d=E([W("validate-demo-radio")],d);var x=Object.freeze,ae=Object.defineProperty,ie=(e,t)=>x(ae(e,"raw",{value:x(e.slice())})),D;const{args:se,argTypes:ne}=L("syn-validate"),{overrideArgs:re}=N("syn-validate"),{generateTemplate:oe}=H("syn-validate"),qe={args:re([{name:"default",type:"slot",value:`
        <syn-input
          label="Invalid input"
          type="email"
          value="team(at)synergy.com"
        ></syn-input>
      `.trim()}],se),argTypes:ne,component:"syn-validate",decorators:[(e,t)=>{const a=`${t.id}-validate-demo-form`;return r(D||(D=ie([`
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
      `])),a,e(),a)}],parameters:{chromatic:{modes:k},design:T("24853-35456"),docs:{description:{component:l("validate","default")}}},tags:["Form","SICK2018","SICK2025"],title:"Components/syn-validate"},m={parameters:{controls:{disable:!1},docs:{description:{story:l("validate","default")}}},render:e=>oe({args:e})},v={parameters:{docs:{description:{story:l("validate","inline")}}},render:()=>r`
    <syn-validate
      class="validation-inline"
      variant="inline"
    >
      <syn-input
        label="Inline Validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},y={parameters:{docs:{description:{story:l("validate","hide-icon")}}},render:()=>r`
    <syn-validate
      class="validation-hide-icon"
      hide-icon
      variant="inline"
    >
      <syn-input
        label="Inline Validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  `},C={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:l("validate","size")}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${["small","medium","large"].map(e=>r`
        <syn-validate eager variant="inline">
          <syn-input
            label="Inline Validation"
            size="${e}"
            type="email"
            value="team(at)synergy.com"
          ></syn-input>       
        </syn-validate>  
      `)}
    </div>
  `},h={parameters:{docs:{description:{story:l("validate","live")}}},render:()=>r`
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
  `},g={parameters:{docs:{description:{story:l("validate","custom-validation")}}},render:()=>r`
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
  `},f={parameters:{docs:{description:{story:l("validate","custom-form-field")}}},render:()=>r`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color"></validate-demo-radio>
    </syn-validate>
  `},I={parameters:{docs:{description:{story:l("validate","custom-event-names")}}},render:()=>r`
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
  `},b={parameters:{docs:{description:{story:l("validate","eager")}}},render:()=>r`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},w=K({Default:m,InlineVariant:v,HideIcon:y,Live:h,CustomValidationMessage:g,CustomFormField:f,Eager:b},200);m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        label="Inline Validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        label="Inline Validation"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
  \`
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            label="Inline Validation"
            size="\${size}"
            type="email"
            value="team(at)synergy.com"
          ></syn-input>       
        </syn-validate>  
      \`)}
    </div>
  \`
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      <validate-demo-radio name="color"></validate-demo-radio>
    </syn-validate>
  \`
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...w.parameters?.docs?.source}}};const Be=["Default","InlineVariant","HideIcon","Sizes","Live","CustomValidationMessage","CustomFormField","BindingToCustomEventNames","Eager","Screenshot"];export{I as BindingToCustomEventNames,f as CustomFormField,g as CustomValidationMessage,m as Default,b as Eager,y as HideIcon,v as InlineVariant,h as Live,w as Screenshot,C as Sizes,Be as __namedExportsOrder,qe as default};
