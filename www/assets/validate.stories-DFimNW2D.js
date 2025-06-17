import{f as U,c as A,d as k,h as j,x as d,g as B}from"./iframe-GSRepqjd.js";import{i as R,n as V,x as F}from"./property-ImbD-3qY.js";import{r as S}from"./directive-helpers-CvZEagFv.js";import{o as z}from"./query-assigned-elements-QtOlz7Yz.js";import{S as I,c as L}from"./component.styles-DXWA7L2q.js";import{w as D}from"./watch-CEsCE2EF.js";import{S as N}from"./alert.component-BwKwcTkC.js";import{e as H}from"./decorator-DANECR0-.js";import"./input-BOqSKrKg.js";import"./button-CwZJTvX8.js";import{g as c,s as K,a as W,c as Y,b as G}from"./component-sz2YSCF4.js";import"./query-DAIS6qJ0.js";import"./animation-registry-l4L8bmT6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./class-map-QQ7HVnPG.js";import"./slot-9EVoRGQc.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./icon-button.component-Dzxtd5Sk.js";import"./static-BkNWbPkN.js";import"./if-defined-CDNCanKK.js";import"./icon.component-B3J6d3UF.js";import"./functions-CDi3doZH.js";import"./default-value-CoJKpiHX.js";import"./form-d9hCJUdr.js";import"./live-3_FXf7tU.js";import"./form-control.custom.styles-CXpzbCE1.js";import"./divider.component-DbTnzFXm.js";import"./async-directive-WyEE_4Ii.js";import"./spinner.component-pJEN2kXr.js";import"./index-Bkk0Z6Ex.js";import"./_docs-CrPFe_9C.js";const J=["blur","change","clear","focus","invalid","input","move"],q=(e,t)=>e.includes(t),O=e=>q(e,"blur"),_=e=>q(e,"invalid"),Q=(e="")=>e.split(" ").map(t=>t.trim()).filter(Boolean),$=(e,t)=>{const a=t.trim();return e instanceof I&&J.includes(a)?`syn-${a}`:a},X=R`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`;var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,l=(e,t,a,i)=>{for(var s=i>1?void 0:i?ee(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&Z(t,a,s),s};let n=class extends I{constructor(){super(...arguments),this.controller=new AbortController,this.validationMessage="",this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.variant="native",this.hideIcon=!1,this.on="",this.customValidationMessage="",this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage="")},this.validate=e=>{if(_(e.type)&&this.variant==="native"&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}_(e.type)&&this.variant!=="native"&&(e.preventDefault(),e.stopPropagation());const t=e.currentTarget;if(this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!O(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!O(e.type)&&this.variant==="native"&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){const e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){const e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){const e=this.slottedChildren[0];return e||void 0}getUsedEventNames(){const e=this.getInput();if(!e)return[];const t=Q(this.on),[...a]=t.filter(Boolean);return a.includes("invalid")||a.push("invalid"),a.includes("live")&&(a.push("input"),a.push("blur")),Array.from(new Set(a.filter(i=>i!=="live").map(i=>$(e,i))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;const e=this.getInput();if(!e)return;const t=this.getUsedEventNames();t.forEach(i=>{e.addEventListener(i,this.validate,{capture:_(i),signal:this.controller.signal})});const a=$(e,"change");t.includes(a)||e.addEventListener(a,this.internalRevalidate,{signal:this.controller.signal})}setValidationMessage(e){const{customValidationMessage:t}=this,a=t||e.validationMessage;this.validationMessage=a}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){const t=document.activeElement,a=t.closest("syn-validate");!t.validity?.valid&&a||(e.scrollIntoView({block:"nearest"}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();const t=this.getInput();this.customValidationMessage&&(t instanceof I&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(e=>{const t=this.getInput();if(!t)return;e.filter(({target:i})=>i===t).every(i=>{const s=i.target;return s.hasAttribute("disabled")||s.hasAttribute("readonly")})?(this.isValid=!0,this.validationMessage=""):(t instanceof I?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??""})}),this.observer.observe(this,{attributeFilter:["disabled","readonly"],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect()}renderInlineValidation(){return this.variant!=="inline"||!this.validationMessage?"":F`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        variant="danger"
      >
        ${this.hideIcon?"":F`<syn-icon slot="icon" name="error" library="system"></syn-icon>`}
        ${this.validationMessage}
      </syn-alert>
    `}render(){return F`
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
    `}};n.styles=[L,X];n.dependencies={"syn-alert":N};l([z()],n.prototype,"slottedChildren",2);l([S()],n.prototype,"validationMessage",2);l([S()],n.prototype,"eagerFirstMount",2);l([S()],n.prototype,"isInternalTriggeredInvalid",2);l([S()],n.prototype,"isValid",2);l([V({reflect:!0})],n.prototype,"variant",2);l([V({attribute:"hide-icon",reflect:!0,type:Boolean})],n.prototype,"hideIcon",2);l([V({reflect:!0})],n.prototype,"on",2);l([V({attribute:"custom-validation-message",type:String})],n.prototype,"customValidationMessage",2);l([V({type:Boolean})],n.prototype,"eager",2);l([D("on",{waitUntilFirstUpdate:!0})],n.prototype,"handleListenerChange",1);l([D("eager",{waitUntilFirstUpdate:!1})],n.prototype,"handleEagerChange",1);l([D("customValidationMessage",{waitUntilFirstUpdate:!0})],n.prototype,"handleCustomValidationMessageChange",1);n=l([H("SynValidate")],n);n.define("syn-validate");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=e=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:U},ie=(e=ae,t,a)=>{const{kind:i,metadata:s}=a;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),i==="accessor"){const{name:o}=a;return{set(u){const E=t.get.call(this);t.set.call(this,u),this.requestUpdate(o,E,e)},init(u){return u!==void 0&&this.C(o,void 0,e,u),u}}}if(i==="setter"){const{name:o}=a;return function(u){const E=this[o];t.call(this,u),this.requestUpdate(o,E,e)}}throw Error("Unsupported decorator location: "+i)};function x(e){return(t,a)=>typeof a=="object"?ie(e,t,a):((i,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(e,t,a)}var se=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,M=(e,t,a,i)=>{for(var s=i>1?void 0:i?ne(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&se(t,a,s),s};let p=class extends k{constructor(){super(),this.name="",this.value="",this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value)}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll("input").forEach(t=>t.disabled=e)}formResetCallback(){this.value="",this.internals.setFormValue("")}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){const e=this.value?.length>0&&this.value==="option3";return e?this.internals.setValidity({}):this.internals.setValidity({customError:!0},"You know, that this is not correct.",this.shadowRoot.querySelector('input[value="option3"]')),e}render(){return d`
      <div>
        ${[1,2,3,4,5].map(e=>d`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate()}};p.formAssociated=!0;p.shadowRootOptions={...k.shadowRootOptions,delegatesFocus:!0};p.styles=j`
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
      color: #ea0823;
    }

    label:nth-of-type(2) input {
      color: #8950BF;
    }

    label:nth-of-type(3) input {
      color: #007cc1;
    }

    label:nth-of-type(4) input {
      color: #63B017;
    }

    label:nth-of-type(5) input {
      color: #e5ae0d;
    }
    /* stylelint-enable */
  `;M([x({type:String})],p.prototype,"name",2);M([x({type:String})],p.prototype,"value",2);M([x({type:Boolean})],p.prototype,"required",2);p=M([te("validate-demo-radio")],p);var P=Object.freeze,re=Object.defineProperty,oe=(e,t)=>P(re(e,"raw",{value:P(e.slice())})),T;const{args:le,argTypes:de}=K("syn-validate"),{overrideArgs:ce}=W("syn-validate"),{generateTemplate:pe}=Y("syn-validate"),He={args:ce([{name:"default",type:"slot",value:`
        <syn-input
          label="Invalid input"
          type="email"
          value="team(at)synergy.com"
        ></syn-input>
      `.trim()}],le),argTypes:de,component:"syn-validate",decorators:[e=>{const t=new Array(16).fill(0).map(()=>Math.random().toString(36)[2]).join("");return d(T||(T=oe([`
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
      `])),t,e(),t)}],parameters:{design:B("24853-35456"),docs:{description:{component:c("validate","default")}}},tags:["Form"],title:"Components/syn-validate"},m={parameters:{controls:{disable:!1},docs:{description:{story:c("validate","default")}}},render:e=>pe({args:e})},v={parameters:{docs:{description:{story:c("validate","inline")}}},render:()=>d`
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
  `},y={parameters:{docs:{description:{story:c("validate","hide-icon")}}},render:()=>d`
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
  `},h={parameters:{docs:{description:{story:c("validate","live")}}},render:()=>d`
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
  `},g={parameters:{docs:{description:{story:c("validate","custom-validation")}}},render:()=>d`
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
  `},f={parameters:{docs:{description:{story:c("validate","custom-form-field")}}},render:()=>d`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color"></validate-demo-radio>
    </syn-validate>
  `},w={parameters:{docs:{description:{story:c("validate","custom-event-names")}}},render:()=>d`
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
  `},b={parameters:{docs:{description:{story:c("validate","eager")}}},render:()=>d`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},C=G({Default:m,InlineVariant:v,HideIcon:y,Live:h,CustomValidationMessage:g,CustomFormField:f,Eager:b},200);m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...C.parameters?.docs?.source}}};const Ke=["Default","InlineVariant","HideIcon","Live","CustomValidationMessage","CustomFormField","BindingToCustomEventNames","Eager","Screenshot"];export{w as BindingToCustomEventNames,f as CustomFormField,g as CustomValidationMessage,m as Default,b as Eager,y as HideIcon,v as InlineVariant,h as Live,C as Screenshot,Ke as __namedExportsOrder,He as default};
