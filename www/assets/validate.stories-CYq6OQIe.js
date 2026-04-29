import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Pt as n,Rt as r,Ut as i,d as ee,f as te,g as ne,u as re}from"./iframe-DVxLZS-s.js";import{n as ie,t as ae}from"./if-defined-E7lZPxD5.js";import{a as oe,c as se,f as a,i as o,m as ce,n as s,o as le,p as c,r as l,s as u,t as d,u as ue}from"./synergy-element-DPkpxABF.js";import{n as f,t as p}from"./watch-OXZPXmne.js";import{n as m,t as de}from"./decorator-CJ_bAnlW.js";import{t as fe}from"./button-Bh72Wntz.js";import{a as pe,i as me,n as h,o as he,r as g,t as _}from"./component-DniQwiZV.js";import{n as v,t as ge}from"./taggedTemplateLiteral-BuD1d7yP.js";import{n as _e,t as ve}from"./alert.component-C61GmTM_.js";import{n as ye,t as be}from"./tooltip.component-BaHhnmw7.js";import{t as xe}from"./input-vCaiuUB5.js";var y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{s(),y=[`blur`,`change`,`clear`,`focus`,`invalid`,`input`,`move`],b=(e,t)=>e.includes(t),x=e=>b(e,`blur`),S=e=>b(e,`invalid`),C=e=>e instanceof d,w=(e=``)=>e.split(` `).map(e=>e.trim()).filter(Boolean),T=(e,t)=>{let n=t.trim();return C(e)&&y.includes(n)?`syn-${n}`:n},E=e=>{if(!C(e))return;let{size:t}=e;return t??void 0},D={"syn-checkbox":`input`,"syn-combobox":`.combobox__value-input`,"syn-file":`input`,"syn-input":`input`,"syn-radio-group":`input`,"syn-range":`.input__control`,"syn-select":`.select__value-input`,"syn-switch":`input`,"syn-textarea":`.textarea__control`},O=(e,t)=>e.shadowRoot?.querySelector(t)??null,k=e=>{if(!e)return;if(!e.shadowRoot)return e;let t=D[e.tagName.toLowerCase()];if(t){let n=O(e,t);if(n)return n}return O(e,`input,select,textarea`)||e}})),j,Se=e((()=>{t(),j=i`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`})),M,N,P,F=e((()=>{t(),u(),ae(),le(),s(),p(),_e(),ye(),A(),Se(),m(),o(),M=()=>r`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`,N=class extends d{constructor(...e){super(...e),this.controller=new AbortController,this.validationMessage=``,this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant=`native`,this.hideIcon=!1,this.on=``,this.customValidationMessage=``,this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage=``)},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async e=>{if(S(e.type)&&this.variant===`native`&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}S(e.type)&&this.variant!==`native`&&(e.preventDefault(),e.stopPropagation());let t=e.currentTarget;if(C(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!x(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!x(e.type)&&this.variant===`native`&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}static{this.styles=[oe,j]}static{this.dependencies={"syn-alert":ve,"syn-tooltip":be}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){let e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){let e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){return this.slottedChildren[0]||void 0}setAlertSize(){this.alertSize=E(this.getInput())}getUsedEventNames(){let e=this.getInput();if(!e)return[];let[...t]=w(this.on).filter(Boolean);return t.includes(`invalid`)||t.push(`invalid`),t.includes(`live`)&&(t.push(`input`),t.push(`blur`)),Array.from(new Set(t.filter(e=>e!==`live`).map(t=>T(e,t))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;let e=this.getInput();if(!e)return;let t=this.getUsedEventNames();t.forEach(t=>{e.addEventListener(t,this.validate,{capture:S(t),signal:this.controller.signal})});let n=T(e,`change`);t.includes(n)||e.addEventListener(n,this.internalRevalidate,{signal:this.controller.signal});let r=T(e,`focus`),i=T(e,`blur`);e.addEventListener(r,this.handleInputFocus,{signal:this.controller.signal}),e.addEventListener(i,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(e){let{customValidationMessage:t}=this,n=t||e.validationMessage;this.validationMessage=n}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){let t=document.activeElement,n=t.closest(`syn-validate`);!t.validity?.valid&&n||(e.scrollIntoView({block:`nearest`}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();let t=this.getInput();this.customValidationMessage&&(C(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{let t=this.getInput();t&&e.filter(({target:e})=>e===t).every(e=>e.attributeName===`size`)&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:[`size`],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{let t=this.getInput();t&&(e.filter(({target:e})=>e===t).every(e=>{let t=e.target;return t.hasAttribute(`disabled`)||t.hasAttribute(`readonly`)})?(this.isValid=!0,this.validationMessage=``):(C(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??``}))}),this.observer.observe(this,{attributeFilter:[`disabled`,`readonly`],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}updated(e){if(super.updated(e),this.variant!==`tooltip`)return;let t=this.tooltipElement;if(!t)return;let n=this.getDisplayValidationMessage();!this.isValid&&n&&this.hasFocus?(t.content=n,t.show()):t.hide()}renderInlineValidation(){let e=this.getDisplayValidationMessage();return this.variant!==`inline`||!e?``:r`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${ie(this.alertSize)}
        variant="danger"
      >
        ${this.hideIcon?``:r`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${e}
      </syn-alert>
    `}render(){return r`
      <div
        class="validate"
        part="base"
      >
        ${this.variant===`tooltip`?r`
        <syn-tooltip
          .anchor=${k(this.getInput())??void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${M()}
        </syn-tooltip>
      `:M()}
        ${this.renderInlineValidation()}
      </div>
    `}},l([se()],N.prototype,`slottedChildren`,void 0),l([ue(`syn-tooltip`)],N.prototype,`tooltipElement`,void 0),l([a()],N.prototype,`validationMessage`,void 0),l([a()],N.prototype,`eagerFirstMount`,void 0),l([a()],N.prototype,`isInternalTriggeredInvalid`,void 0),l([a()],N.prototype,`isValid`,void 0),l([a()],N.prototype,`alertSize`,void 0),l([a()],N.prototype,`hasFocus`,void 0),l([c({reflect:!0})],N.prototype,`variant`,void 0),l([c({attribute:`hide-icon`,reflect:!0,type:Boolean})],N.prototype,`hideIcon`,void 0),l([c({reflect:!0})],N.prototype,`on`,void 0),l([c({attribute:`custom-validation-message`,type:String})],N.prototype,`customValidationMessage`,void 0),l([c({type:Boolean})],N.prototype,`eager`,void 0),l([f(`on`,{waitUntilFirstUpdate:!0})],N.prototype,`handleListenerChange`,null),l([f(`eager`,{waitUntilFirstUpdate:!1})],N.prototype,`handleEagerChange`,null),l([f(`customValidationMessage`,{waitUntilFirstUpdate:!0})],N.prototype,`handleCustomValidationMessageChange`,null),N=l([de(`SynValidate`)],N),P=N})),Ce=e((()=>{F(),F(),P.define(`syn-validate`)})),I,we=e((()=>{t(),u(),o(),I=class extends n{static{this.formAssociated=!0}static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}static{this.styles=i`
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
  `}constructor(){super(),this.name=``,this.value=``,this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.validate()})}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll(`input`).forEach(t=>t.disabled=e)}formResetCallback(){this.value=``,this.internals.setFormValue(``)}checkValidity(){return this.validate(),this.internals.checkValidity()}reportValidity(){return this.validate(),this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){let e=this.value?.length>0&&this.value===`option3`;if(e)this.internals.setValidity({});else{let e=this.shadowRoot.querySelector(`input[value="option3"]`);this.internals.setValidity({customError:!0},`You know, that this is not correct.`,e||void 0)}return e}render(){return r`
      <div>
        ${[1,2,3,4,5].map(e=>r`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0}))}},l([c({type:String})],I.prototype,`name`,void 0),l([c({type:String})],I.prototype,`value`,void 0),l([c({type:Boolean})],I.prototype,`required`,void 0),I=l([ce(`validate-demo-radio`)],I)})),Te,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{t(),Ce(),xe(),fe(),g(),we(),ee(),ne(),v(),{args:L,argTypes:R}=me(`syn-validate`),{overrideArgs:z}=pe(`syn-validate`),{generateTemplate:B}=he(`syn-validate`),V={args:z([{name:`default`,type:`slot`,value:`<syn-input
  label="Invalid input"
  type="email"
  value="team(at)synergy.com"
></syn-input>`}],L),argTypes:R,component:`syn-validate`,decorators:[(e,t)=>{let n=`${t.id}-validate-demo-form`;return r(Te||=ge([`
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
      `]),n,e(),n)}],parameters:{chromatic:{modes:te},design:re(`41310-284767`),docs:{description:{component:h(`validate`,`default`)}}},tags:[`Form`],title:`Components/syn-validate`},H={parameters:{controls:{disable:!1},docs:{description:{story:h(`validate`,`default`)}}},render:e=>B({args:e})},U={parameters:{docs:{description:{story:h(`validate`,`tooltip`)}}},render:()=>r`
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
    </syn-validate>`},W={parameters:{docs:{description:{story:h(`validate`,`inline`)}}},render:()=>r`
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
  `},G={parameters:{docs:{description:{story:h(`validate`,`hide-icon`)}}},render:()=>r`
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
  `},K={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:h(`validate`,`size`)}}},render:()=>r`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${[`small`,`medium`,`large`].map(e=>r`
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
  `},q={parameters:{docs:{description:{story:h(`validate`,`live`)}}},render:()=>r`
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
  `},J={parameters:{docs:{description:{story:h(`validate`,`custom-validation`)}}},render:()=>r`
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
  `},Y={parameters:{docs:{description:{story:h(`validate`,`custom-form-field`)}}},render:()=>r`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  `},X={parameters:{docs:{description:{story:h(`validate`,`custom-event-names`)}}},render:()=>r`
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
  `},Z={parameters:{docs:{description:{story:h(`validate`,`eager`)}}},render:()=>r`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},Q=_({Default:H,TooltipVariant:U,InlineVariant:W,HideIcon:G,Live:q,CustomValidationMessage:J,CustomFormField:Y,Eager:Z},200),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TooltipVariant,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...Q.parameters?.docs?.source}}},$=[`Default`,`TooltipVariant`,`InlineVariant`,`HideIcon`,`Sizes`,`Live`,`CustomValidationMessage`,`CustomFormField`,`BindingToCustomEventNames`,`Eager`,`Screenshot`]}))();export{X as BindingToCustomEventNames,Y as CustomFormField,J as CustomValidationMessage,H as Default,Z as Eager,G as HideIcon,W as InlineVariant,q as Live,Q as Screenshot,K as Sizes,U as TooltipVariant,$ as __namedExportsOrder,V as default};