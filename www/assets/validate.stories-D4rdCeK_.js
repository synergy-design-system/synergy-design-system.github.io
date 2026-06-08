import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,It as n,Lt as r,d as i,f as ee,g as te,qt as a,u as ne}from"./iframe-Bb0l_wZA.js";import{r as re,t as ie}from"./if-defined-CfBjProG.js";import{_ as o,a as ae,f as oe,i as s,l as se,n as c,o as ce,r as l,s as u,t as d,x as le,y as f}from"./synergy-element-Dwcf6wEd.js";import{n as p,t as m}from"./watch-I6gMK-uE.js";import{n as h,t as ue}from"./decorator-ChmomMqD.js";import{t as de}from"./button-BfprR77y.js";import{a as fe,i as pe,n as g,o as me,r as he,t as ge}from"./component-1GQqMfLf.js";import{n as _e,t as _}from"./taggedTemplateLiteral-pWa2IaV6.js";import{n as ve,t as ye}from"./alert.component-iNnDn0LX.js";import{n as be,t as xe}from"./tooltip.component-IXSZEcFx.js";import{t as Se}from"./input-CE73rk1o.js";var v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{c(),v=[`blur`,`change`,`clear`,`focus`,`invalid`,`input`,`move`],y=(e,t)=>e.includes(t),b=e=>y(e,`blur`),x=e=>y(e,`invalid`),S=e=>e instanceof d,C=(e=``)=>e.split(` `).map(e=>e.trim()).filter(Boolean),w=(e,t)=>{let n=t.trim();return S(e)&&v.includes(n)?`syn-${n}`:n},T=e=>{if(!S(e))return;let{size:t}=e;return t??void 0},E={"syn-checkbox":`input`,"syn-combobox":`.combobox__value-input`,"syn-file":`input`,"syn-input":`input`,"syn-radio-group":`input`,"syn-range":`.input__control`,"syn-select":`.select__value-input`,"syn-switch":`input`,"syn-textarea":`.textarea__control`},D=(e,t)=>e.shadowRoot?.querySelector(t)??null,O=e=>{if(!e)return;if(!e.shadowRoot)return e;let t=E[e.tagName.toLowerCase()];if(t){let n=D(e,t);if(n)return n}return D(e,`input,select,textarea`)||e}})),A,Ce=e((()=>{n(),A=a`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`})),j,M,N,P=e((()=>{n(),u(),ie(),ce(),c(),m(),ve(),be(),k(),Ce(),h(),s(),j=()=>t`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`,M=class extends d{constructor(...e){super(...e),this.controller=new AbortController,this.validationMessage=``,this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant=`native`,this.hideIcon=!1,this.on=``,this.customValidationMessage=``,this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage=``)},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async e=>{if(x(e.type)&&this.variant===`native`&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}x(e.type)&&this.variant!==`native`&&(e.preventDefault(),e.stopPropagation());let t=e.currentTarget;if(S(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!b(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!b(e.type)&&this.variant===`native`&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}static{this.styles=[ae,A]}static{this.dependencies={"syn-alert":ye,"syn-tooltip":xe}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){let e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){let e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){return this.slottedChildren[0]||void 0}setAlertSize(){this.alertSize=T(this.getInput())}getUsedEventNames(){let e=this.getInput();if(!e)return[];let[...t]=C(this.on).filter(Boolean);return t.includes(`invalid`)||t.push(`invalid`),t.includes(`live`)&&(t.push(`input`),t.push(`blur`)),Array.from(new Set(t.filter(e=>e!==`live`).map(t=>w(e,t))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;let e=this.getInput();if(!e)return;let t=this.getUsedEventNames();t.forEach(t=>{e.addEventListener(t,this.validate,{capture:x(t),signal:this.controller.signal})});let n=w(e,`change`);t.includes(n)||e.addEventListener(n,this.internalRevalidate,{signal:this.controller.signal});let r=w(e,`focus`),i=w(e,`blur`);e.addEventListener(r,this.handleInputFocus,{signal:this.controller.signal}),e.addEventListener(i,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(e){let{customValidationMessage:t}=this,n=t||e.validationMessage;this.validationMessage=n}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){let t=document.activeElement,n=t.closest(`syn-validate`);!t.validity?.valid&&n||(e.scrollIntoView({block:`nearest`}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();let t=this.getInput();this.customValidationMessage&&(S(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{let t=this.getInput();t&&e.filter(({target:e})=>e===t).every(e=>e.attributeName===`size`)&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:[`size`],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{let t=this.getInput();t&&(e.filter(({target:e})=>e===t).every(e=>{let t=e.target;return t.hasAttribute(`disabled`)||t.hasAttribute(`readonly`)})?(this.isValid=!0,this.validationMessage=``):(S(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??``}))}),this.observer.observe(this,{attributeFilter:[`disabled`,`readonly`],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}updated(e){if(super.updated(e),this.variant!==`tooltip`)return;let t=this.tooltipElement;if(!t)return;let n=this.getDisplayValidationMessage();!this.isValid&&n&&this.hasFocus?(t.content=n,t.show()):t.hide()}renderInlineValidation(){let e=this.getDisplayValidationMessage();return this.variant!==`inline`||!e?``:t`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${re(this.alertSize)}
        variant="danger"
      >
        ${this.hideIcon?``:t`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${e}
      </syn-alert>
    `}render(){return t`
      <div
        class="validate"
        part="base"
      >
        ${this.variant===`tooltip`?t`
        <syn-tooltip
          .anchor=${O(this.getInput())??void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${j()}
        </syn-tooltip>
      `:j()}
        ${this.renderInlineValidation()}
      </div>
    `}},l([se()],M.prototype,`slottedChildren`,void 0),l([oe(`syn-tooltip`)],M.prototype,`tooltipElement`,void 0),l([o()],M.prototype,`validationMessage`,void 0),l([o()],M.prototype,`eagerFirstMount`,void 0),l([o()],M.prototype,`isInternalTriggeredInvalid`,void 0),l([o()],M.prototype,`isValid`,void 0),l([o()],M.prototype,`alertSize`,void 0),l([o()],M.prototype,`hasFocus`,void 0),l([f({reflect:!0})],M.prototype,`variant`,void 0),l([f({attribute:`hide-icon`,reflect:!0,type:Boolean})],M.prototype,`hideIcon`,void 0),l([f({reflect:!0})],M.prototype,`on`,void 0),l([f({attribute:`custom-validation-message`,type:String})],M.prototype,`customValidationMessage`,void 0),l([f({type:Boolean})],M.prototype,`eager`,void 0),l([p(`on`,{waitUntilFirstUpdate:!0})],M.prototype,`handleListenerChange`,null),l([p(`eager`,{waitUntilFirstUpdate:!1})],M.prototype,`handleEagerChange`,null),l([p(`customValidationMessage`,{waitUntilFirstUpdate:!0})],M.prototype,`handleCustomValidationMessageChange`,null),M=l([ue(`SynValidate`)],M),N=M})),we=e((()=>{P(),P(),N.define(`syn-validate`)})),F,Te=e((()=>{n(),u(),s(),F=class extends r{static{this.formAssociated=!0}static{this.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0}}static{this.styles=a`
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
  `}constructor(){super(),this.name=``,this.value=``,this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.validate()})}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll(`input`).forEach(t=>t.disabled=e)}formResetCallback(){this.value=``,this.internals.setFormValue(``)}checkValidity(){return this.validate(),this.internals.checkValidity()}reportValidity(){return this.validate(),this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){let e=this.value?.length>0&&this.value===`option3`;if(e)this.internals.setValidity({});else{let e=this.shadowRoot.querySelector(`input[value="option3"]`);this.internals.setValidity({customError:!0},`You know, that this is not correct.`,e||void 0)}return e}render(){return t`
      <div>
        ${[1,2,3,4,5].map(e=>t`
          <label>
            <input
              ?required=${this.required}
              ?checked=${this.value===`option${e}`}
              type="radio"
              name=${this.name}
              value=${e===3?`option${e}`:``}
              @click="${()=>this.selectOption(`option${e}`)}"
            >
            Option ${e}
          </label>
        `)}
      </div>
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0}))}},l([f({type:String})],F.prototype,`name`,void 0),l([f({type:String})],F.prototype,`value`,void 0),l([f({type:Boolean})],F.prototype,`required`,void 0),F=l([le(`validate-demo-radio`)],F)})),Ee,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{n(),we(),Se(),de(),he(),Te(),i(),te(),_e(),{args:I,argTypes:L}=pe(`syn-validate`),{overrideArgs:R}=fe(`syn-validate`),{generateTemplate:z}=me(`syn-validate`),B={args:R([{name:`default`,type:`slot`,value:`<syn-input
  label="Invalid input"
  type="email"
  value="team(at)synergy.com"
></syn-input>`}],I),argTypes:L,component:`syn-validate`,decorators:[(e,n)=>{let r=`${n.id}-validate-demo-form`;return t(Ee||=_([`
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
      `]),r,e(),r)}],parameters:{chromatic:{modes:ee},design:ne(`41310-284767`),docs:{description:{component:g(`validate`,`default`)}}},tags:[`Form`],title:`Components/syn-validate`},V={parameters:{controls:{disable:!1},docs:{description:{story:g(`validate`,`default`)}}},render:e=>z({args:e})},H={parameters:{docs:{description:{story:g(`validate`,`tooltip`)}}},render:()=>t`
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
    </syn-validate>`},U={parameters:{docs:{description:{story:g(`validate`,`inline`)}}},render:()=>t`
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
  `},W={parameters:{docs:{description:{story:g(`validate`,`hide-icon`)}}},render:()=>t`
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
  `},G={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`validate`,`size`)}}},render:()=>t`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${[`small`,`medium`,`large`].map(e=>t`
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
  `},K={parameters:{docs:{description:{story:g(`validate`,`live`)}}},render:()=>t`
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
  `},q={parameters:{docs:{description:{story:g(`validate`,`custom-validation`)}}},render:()=>t`
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
  `},J={parameters:{docs:{description:{story:g(`validate`,`custom-form-field`)}}},render:()=>t`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  `},Y={parameters:{docs:{description:{story:g(`validate`,`custom-event-names`)}}},render:()=>t`
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
  `},X={parameters:{docs:{description:{story:g(`validate`,`eager`)}}},render:()=>t`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},Z=ge({Default:V,TooltipVariant:H,InlineVariant:U,HideIcon:W,Live:K,CustomValidationMessage:q,CustomFormField:J,Eager:X},200),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TooltipVariant,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...Z.parameters?.docs?.source}}},Q=[`Default`,`TooltipVariant`,`InlineVariant`,`HideIcon`,`Sizes`,`Live`,`CustomValidationMessage`,`CustomFormField`,`BindingToCustomEventNames`,`Eager`,`Screenshot`]}));$();export{Y as BindingToCustomEventNames,J as CustomFormField,q as CustomValidationMessage,V as Default,X as Eager,W as HideIcon,U as InlineVariant,K as Live,Z as Screenshot,G as Sizes,H as TooltipVariant,Q as __namedExportsOrder,B as default,$ as t};