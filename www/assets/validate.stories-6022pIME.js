import{j as O,x as o,l as $,g as T,C as k}from"./iframe-DEjDpRef.js";import{S as m,c as A,n as c}from"./synergy-element-9YQF5Oan.js";import{r as I}from"./icon.component-juKEJBdj.js";import{o as q}from"./query-assigned-elements-BQ-t-koE.js";import{w as M}from"./watch-CEsCE2EF.js";import{S as B}from"./alert.component-BZpjXooT.js";import{e as R}from"./decorator-DANECR0-.js";import"./input-DOLM9H-r.js";import"./button-EyRUOS1a.js";import{g as l,s as U,a as j,c as z,b as L}from"./component-CRq7DUSa.js";import"./preload-helper-Ct5FWWRu.js";import"./query-DAIS6qJ0.js";import"./animation-registry-l4L8bmT6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./class-map-D4IBD07P.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./icon-button.component-Bljg4NsB.js";import"./if-defined-DlM02Wh9.js";import"./functions-CDi3doZH.js";import"./default-value-5z2295Zq.js";import"./form-d9hCJUdr.js";import"./live-Ddi93mdw.js";import"./form-control.custom.styles-Csr46gk0.js";import"./divider.component-BAZybJF9.js";import"./spinner.component-ydr-IYXO.js";import"./index-CQ0aEGxp.js";import"./_docs-DXCV3alH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>(t,a)=>{a!==void 0?a.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},H=["blur","change","clear","focus","invalid","input","move"],P=(e,t)=>e.includes(t),_=e=>P(e,"blur"),E=e=>P(e,"invalid"),K=(e="")=>e.split(" ").map(t=>t.trim()).filter(Boolean),F=(e,t)=>{const a=t.trim();return e instanceof m&&H.includes(a)?`syn-${a}`:a},W=O`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`;var Y=Object.defineProperty,G=Object.getOwnPropertyDescriptor,r=(e,t,a,i)=>{for(var s=i>1?void 0:i?G(t,a):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(s=(i?u(t,a,s):u(s))||s);return i&&s&&Y(t,a,s),s};let n=class extends m{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage="")},this.validate=async e=>{if(E(e.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}E(e.type)&&this.variant!=="native"&&(e.preventDefault(),e.stopPropagation());const t=e.currentTarget;if(t instanceof m&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!_(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!_(e.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){const e=this.slottedChildren[0];return e||void 0}getUsedEventNames(){const e=this.getInput();if(!e)return[];const t=K(this.on),[...a]=t.filter(Boolean);return a.includes("invalid")||a.push("invalid"),a.includes("live")&&(a.push("input"),a.push("blur")),Array.from(new Set(a.filter(i=>i!=="live").map(i=>F(e,i))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const e=this.getInput();if(!e)return;const t=this.getUsedEventNames();t.forEach(i=>{e.addEventListener(i,this.validate,{capture:E(i),signal:this.controller.signal})});const a=F(e,"change");t.includes(a)||e.addEventListener(a,this.internalRevalidate,{signal:this.controller.signal})}setValidationMessage(e){const{customValidationMessage:t}=this,a=t||e.validationMessage;this.validationMessage=a}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){const t=document.activeElement,a=t.closest("syn-validate");!t.validity?.valid&&a||(e.scrollIntoView({block:"nearest"}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();const t=this.getInput();this.customValidationMessage&&(t instanceof m&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:i})=>i===t).every(i=>{const s=i.target;return s.hasAttribute("disabled")||s.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(t instanceof m?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect()}renderInlineValidation(){return this.variant!=="inline"||!this.validationMessage?"":o`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        variant="danger"
      >
        ${this.hideIcon?"":o`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${this.validationMessage}
      </syn-alert>
    `}render(){return o`
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
    `}};n.styles=[A,W];n.dependencies={"syn-alert":B};r([q()],n.prototype,"slottedChildren",2);r([I()],n.prototype,"validationMessage",2);r([I()],n.prototype,"eagerFirstMount",2);r([I()],n.prototype,"isInternalTriggeredInvalid",2);r([I()],n.prototype,"isValid",2);r([c({reflect:!0})],n.prototype,"variant",2);r([c({attribute:"hide-icon",reflect:!0,type:Boolean})],n.prototype,"hideIcon",2);r([c({reflect:!0})],n.prototype,"on",2);r([c({attribute:"custom-validation-message",type:String})],n.prototype,"customValidationMessage",2);r([c({type:Boolean})],n.prototype,"eager",2);r([M("on",{waitUntilFirstUpdate:!0})],n.prototype,"handleListenerChange",1);r([M("eager",{waitUntilFirstUpdate:!1})],n.prototype,"handleEagerChange",1);r([M("customValidationMessage",{waitUntilFirstUpdate:!0})],n.prototype,"handleCustomValidationMessageChange",1);n=r([R("SynValidate")],n);n.define("syn-validate");var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,S=(e,t,a,i)=>{for(var s=i>1?void 0:i?Q(t,a):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(s=(i?u(t,a,s):u(s))||s);return i&&s&&J(t,a,s),s};let d=class extends ${constructor(){super(),this.name="",this.value="",this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value)}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll("input").forEach(t=>t.disabled=e)}formResetCallback(){this.value="",this.internals.setFormValue("")}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){const e=this.value?.length>0&&this.value==="option3";return e?this.internals.setValidity({}):this.internals.setValidity({customError:!0},"You know, that this is not correct.",this.shadowRoot.querySelector('input[value="option3"]')),e}render(){return o`
      <div>
        ${[1,2,3,4,5].map(e=>o`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate()}};d.formAssociated=!0;d.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0};d.styles=O`
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
  `;S([c({type:String})],d.prototype,"name",2);S([c({type:String})],d.prototype,"value",2);S([c({type:Boolean})],d.prototype,"required",2);d=S([N("validate-demo-radio")],d);var D=Object.freeze,X=Object.defineProperty,Z=(e,t)=>D(X(e,"raw",{value:D(e.slice())})),x;const{args:ee,argTypes:te}=U("syn-validate"),{overrideArgs:ae}=j("syn-validate"),{generateTemplate:ie}=z("syn-validate"),Te={args:ae([{name:"default",type:"slot",value:`
        <syn-input
          label="Invalid input"
          type="email"
          value="team(at)synergy.com"
        ></syn-input>
      `.trim()}],ee),argTypes:te,component:"syn-validate",decorators:[(e,t)=>{const a=`${t.id}-validate-demo-form`;return o(x||(x=Z([`
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
      `])),a,e(),a)}],parameters:{chromatic:{modes:k},design:T("24853-35456"),docs:{description:{component:l("validate","default")}}},tags:["Form","SICK2018","SICK2025"],title:"Components/syn-validate"},v={parameters:{controls:{disable:!1},docs:{description:{story:l("validate","default")}}},render:e=>ie({args:e})},y={parameters:{docs:{description:{story:l("validate","inline")}}},render:()=>o`
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
  `},h={parameters:{docs:{description:{story:l("validate","hide-icon")}}},render:()=>o`
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
  `},g={parameters:{docs:{description:{story:l("validate","live")}}},render:()=>o`
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
  `},f={parameters:{docs:{description:{story:l("validate","custom-validation")}}},render:()=>o`
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
  `},b={parameters:{docs:{description:{story:l("validate","custom-form-field")}}},render:()=>o`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color"></validate-demo-radio>
    </syn-validate>
  `},C={parameters:{docs:{description:{story:l("validate","custom-event-names")}}},render:()=>o`
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
  `},V={parameters:{docs:{description:{story:l("validate","eager")}}},render:()=>o`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},w=L({Default:v,InlineVariant:y,HideIcon:h,Live:g,CustomValidationMessage:f,CustomFormField:b,Eager:V},200);v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...w.parameters?.docs?.source}}};const ke=["Default","InlineVariant","HideIcon","Live","CustomValidationMessage","CustomFormField","BindingToCustomEventNames","Eager","Screenshot"];export{C as BindingToCustomEventNames,b as CustomFormField,f as CustomValidationMessage,v as Default,V as Eager,h as HideIcon,y as InlineVariant,g as Live,w as Screenshot,ke as __namedExportsOrder,Te as default};
