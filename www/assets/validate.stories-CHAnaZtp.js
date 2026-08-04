import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-DKowTjrk.js";import{c as i,h as a,n as o,t as s}from"./lit-DgWh_IaA.js";import{a as ee,d as c,l,n as u,o as te,r as d,s as f,t as p}from"./synergy-element-C9GUR4B8.js";import{t as ne}from"./query-DOHNhzf6.js";import{n as re}from"./query-assigned-elements-CWXdehfi.js";import{r as ie,t as ae}from"./if-defined-DmmMeZVG.js";import{n as m}from"./watch-Q8hEwzVb.js";import{n as oe,t as se}from"./decorator-DZesXZg7.js";import{t as ce}from"./button-VFKvv9D6.js";import{a as le,i as ue,n as h,o as de,r as fe,t as pe}from"./component-yQeR3V9a.js";import{t as me}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as he,t as ge}from"./alert.component-D1YzQMLD.js";import{n as _e,t as ve}from"./tooltip.component-u5iKo0Yg.js";import{t as ye}from"./input-DK-nzLK5.js";var g;function _(){return(_=e((()=>{g=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}})))()}var v,y,b,x,S,C,w,be,xe,T,E;function D(){return(D=e((()=>{u(),v=[`blur`,`change`,`clear`,`focus`,`invalid`,`input`,`move`],y=(e,t)=>e.includes(t),b=e=>y(e,`blur`),x=e=>y(e,`invalid`),S=e=>e instanceof p,C=(e=``)=>e.split(` `).map(e=>e.trim()).filter(Boolean),w=(e,t)=>{let n=t.trim();return S(e)&&v.includes(n)?`syn-${n}`:n},be=e=>{if(!S(e))return;let{size:t}=e;return t??void 0},xe={"syn-checkbox":`input`,"syn-combobox":`.combobox__value-input`,"syn-file":`input`,"syn-input":`input`,"syn-radio-group":`input`,"syn-range":`.input__control`,"syn-select":`.select__value-input`,"syn-switch":`input`,"syn-textarea":`.textarea__control`},T=(e,t)=>e.shadowRoot?.querySelector(t)??null,E=e=>{if(!e)return;if(!e.shadowRoot)return e;let t=e.tagName.toLowerCase(),n=xe[t];if(n){let t=T(e,n);if(t)return t}return T(e,`input,select,textarea`)||e}})))()}var O;function k(){return(k=e((()=>{s(),O=a`
  .validate {
    display: flex;
    flex-direction: column;
    gap: var(--syn-spacing-small);
  }
`})))()}var A,j,M;function N(){return(N=e((()=>{s(),f(),ae(),te(),u(),he(),_e(),D(),k(),oe(),A=()=>i`
  <slot
    class="validate__input-wrapper"
    part="input-wrapper"
  ></slot>
`,j=class extends p{constructor(...e){super(...e),this.controller=new AbortController,this.validationMessage=``,this.eagerFirstMount=!0,this.isInternalTriggeredInvalid=!1,this.isValid=!0,this.hasFocus=!1,this.variant=`native`,this.hideIcon=!1,this.on=``,this.customValidationMessage=``,this.eager=!1,this.internalRevalidate=e=>{e.currentTarget.validity?.valid&&(this.validationMessage=``)},this.handleInputFocus=()=>{this.hasFocus=!0},this.handleInputBlur=()=>{this.hasFocus=!1},this.validate=async e=>{if(x(e.type)&&this.variant===`native`&&this.isInternalTriggeredInvalid===!0){this.isInternalTriggeredInvalid=!1;return}x(e.type)&&this.variant!==`native`&&(e.preventDefault(),e.stopPropagation());let t=e.currentTarget;if(S(t)&&await t.updateComplete,this.isValid=t.validity?.valid,this.eager&&this.eagerFirstMount){this.eagerFirstMount=!1,this.setValidationMessage(t);return}!this.isValid&&!b(e.type)&&this.handleFocus(t),this.setValidationMessage(t),!b(e.type)&&this.variant===`native`&&this.updateComplete.then(()=>{this.isInternalTriggeredInvalid=!0,t.reportValidity()})}}static{this.styles=[ee,O]}static{this.dependencies={"syn-alert":ge,"syn-tooltip":ve}}handleListenerChange(){this.updateEvents()}async handleEagerChange(){if(this.eager){let e=this.getInput();await this.updateComplete,e?.reportValidity(),this.eagerFirstMount=!0}else this.eagerFirstMount=!1}handleCustomValidationMessageChange(){let e=this.getInput();e&&(this.setCustomValidationMessage(e),this.setValidationMessage(e))}getValidity(){return this.isValid}getInput(){return this.slottedChildren[0]||void 0}setAlertSize(){this.alertSize=be(this.getInput())}getUsedEventNames(){let e=this.getInput();if(!e)return[];let[...t]=C(this.on).filter(Boolean);return t.includes(`invalid`)||t.push(`invalid`),t.includes(`live`)&&(t.push(`input`),t.push(`blur`)),Array.from(new Set(t.filter(e=>e!==`live`).map(t=>w(e,t))))}updateEvents(){this.controller.abort(),this.controller=new AbortController;let e=this.getInput();if(!e)return;let t=this.getUsedEventNames();t.forEach(t=>{e.addEventListener(t,this.validate,{capture:x(t),signal:this.controller.signal})});let n=w(e,`change`);t.includes(n)||e.addEventListener(n,this.internalRevalidate,{signal:this.controller.signal});let r=w(e,`focus`),i=w(e,`blur`);e.addEventListener(r,this.handleInputFocus,{signal:this.controller.signal}),e.addEventListener(i,this.handleInputBlur,{signal:this.controller.signal})}getDisplayValidationMessage(){return this.customValidationMessage||this.validationMessage}setValidationMessage(e){let{customValidationMessage:t}=this,n=t||e.validationMessage;this.validationMessage=n}setCustomValidationMessage(e){e.setCustomValidity(this.customValidationMessage)}handleFocus(e){let t=document.activeElement,n=t.closest(`syn-validate`);!t.validity?.valid&&n||(e.scrollIntoView({block:`nearest`}),e.focus())}async firstUpdated(e){super.firstUpdated(e),this.updateEvents();let t=this.getInput();this.customValidationMessage&&(S(t)&&await t.updateComplete,t?.setCustomValidity(this.customValidationMessage)),this.eager&&(await this.updateComplete,this.isValid=t?.validity?.valid??!1,t?.reportValidity())}connectedCallback(){super.connectedCallback(),this.sizeObserver=new MutationObserver(e=>{let t=this.getInput();t&&e.filter(({target:e})=>e===t).every(e=>e.attributeName===`size`)&&this.setAlertSize()}),this.sizeObserver.observe(this,{attributeFilter:[`size`],attributes:!0,subtree:!0}),this.observer=new MutationObserver(e=>{let t=this.getInput();t&&(e.filter(({target:e})=>e===t).every(e=>{let t=e.target;return t.hasAttribute(`disabled`)||t.hasAttribute(`readonly`)})?(this.isValid=!0,this.validationMessage=``):(S(t)?t.updateComplete:Promise.resolve()).then(()=>{this.isValid=t?.validity?.valid??!1,this.validationMessage=t?.validationMessage??``}))}),this.observer.observe(this,{attributeFilter:[`disabled`,`readonly`],attributes:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.controller.abort(),this?.observer?.disconnect(),this?.sizeObserver?.disconnect()}updated(e){if(super.updated(e),this.variant!==`tooltip`)return;let t=this.tooltipElement;if(!t)return;let n=this.getDisplayValidationMessage();!this.isValid&&n&&this.hasFocus?(t.content=n,t.show()):t.hide()}renderInlineValidation(){let e=this.getDisplayValidationMessage();return this.variant!==`inline`||!e?``:i`
      <syn-alert
        open
        exportparts="base:alert__base,message:alert__message,icon:alert__icon"
        part="alert"
        size=${ie(this.alertSize)}
        variant="error"
      >
        ${this.hideIcon?``:i`<syn-icon slot="icon" name="status-error" library="system"></syn-icon>`}
        ${e}
      </syn-alert>
    `}render(){let e=this.variant===`tooltip`?i`
        <syn-tooltip
          .anchor=${E(this.getInput())??void 0}
          exportparts="base:tooltip__base,base__popup:tooltip__popup,base__arrow:tooltip__arrow,body:tooltip__body"
          .open=${this.eager?!this.isValid&&this.getDisplayValidationMessage().length>0:!1}
          part="tooltip"
          placement="bottom"
          trigger="manual"
        >
          ${A()}
        </syn-tooltip>
      `:A();return i`
      <div
        class="validate"
        part="base"
      >
        ${e}
        ${this.renderInlineValidation()}
      </div>
    `}},d([re()],j.prototype,`slottedChildren`,void 0),d([ne(`syn-tooltip`)],j.prototype,`tooltipElement`,void 0),d([l()],j.prototype,`validationMessage`,void 0),d([l()],j.prototype,`eagerFirstMount`,void 0),d([l()],j.prototype,`isInternalTriggeredInvalid`,void 0),d([l()],j.prototype,`isValid`,void 0),d([l()],j.prototype,`alertSize`,void 0),d([l()],j.prototype,`hasFocus`,void 0),d([c({reflect:!0})],j.prototype,`variant`,void 0),d([c({attribute:`hide-icon`,reflect:!0,type:Boolean})],j.prototype,`hideIcon`,void 0),d([c({reflect:!0})],j.prototype,`on`,void 0),d([c({attribute:`custom-validation-message`,type:String})],j.prototype,`customValidationMessage`,void 0),d([c({type:Boolean})],j.prototype,`eager`,void 0),d([m(`on`,{waitUntilFirstUpdate:!0})],j.prototype,`handleListenerChange`,null),d([m(`eager`,{waitUntilFirstUpdate:!1})],j.prototype,`handleEagerChange`,null),d([m(`customValidationMessage`,{waitUntilFirstUpdate:!0})],j.prototype,`handleCustomValidationMessageChange`,null),j=d([se(`SynValidate`)],j),M=j})))()}function P(){return(P=e((()=>{N(),M.define(`syn-validate`)})))()}var F;function I(){return(I=e((()=>{s(),f(),F=class extends o{static{this.formAssociated=!0}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=a`
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
  `}constructor(){super(),this.name=``,this.value=``,this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.validate()})}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll(`input`).forEach(t=>t.disabled=e)}formResetCallback(){this.value=``,this.internals.setFormValue(``)}checkValidity(){return this.validate(),this.internals.checkValidity()}reportValidity(){return this.validate(),this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){let e=this.value?.length>0&&this.value===`option3`;if(e)this.internals.setValidity({});else{let e=this.shadowRoot.querySelector(`input[value="option3"]`);this.internals.setValidity({customError:!0},`You know, that this is not correct.`,e||void 0)}return e}render(){return i`
      <div>
        ${[1,2,3,4,5].map(e=>i`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0}))}},d([c({type:String})],F.prototype,`name`,void 0),d([c({type:String})],F.prototype,`value`,void 0),d([c({type:Boolean})],F.prototype,`required`,void 0),F=d([g(`validate-demo-radio`)],F)})))()}var Se=t({BindingToCustomEventNames:()=>X,CustomFormField:()=>Y,CustomValidationMessage:()=>J,Default:()=>H,Eager:()=>Z,HideIcon:()=>G,InlineVariant:()=>W,Live:()=>q,Screenshot:()=>Q,Sizes:()=>K,TooltipVariant:()=>U,__namedExportsOrder:()=>we,default:()=>V}),Ce,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,we;function $(){return($=e((()=>{s(),P(),ye(),ce(),fe(),I(),r(),{args:L,argTypes:R}=ue(`syn-validate`),{overrideArgs:z}=le(`syn-validate`),{generateTemplate:B}=de(`syn-validate`),V={args:z([{name:`default`,type:`slot`,value:`<syn-input
  label="Invalid input"
  type="email"
  value="team(at)synergy.com"
></syn-input>`}],L),argTypes:R,component:`syn-validate`,decorators:[(e,t)=>{let n=`${t.id}-validate-demo-form`;return i(Ce||=me([`
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
      `]),n,e(),n)}],parameters:{chromatic:{modes:n},docs:{description:{component:h(`validate`,`default`)}}},tags:[`Form`],title:`Components/syn-validate`},H={parameters:{controls:{disable:!1},docs:{description:{story:h(`validate`,`default`)}}},render:e=>B({args:e})},U={parameters:{docs:{description:{story:h(`validate`,`tooltip`)}}},render:()=>i`
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
    </syn-validate>`},W={parameters:{docs:{description:{story:h(`validate`,`inline`)}}},render:()=>i`
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
  `},G={parameters:{docs:{description:{story:h(`validate`,`hide-icon`)}}},render:()=>i`
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
  `},K={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:h(`validate`,`size`)}}},render:()=>i`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${[`small`,`medium`,`large`].map(e=>i`
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
  `},q={parameters:{docs:{description:{story:h(`validate`,`live`)}}},render:()=>i`
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
  `},J={parameters:{docs:{description:{story:h(`validate`,`custom-validation`)}}},render:()=>i`
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
  `},Y={parameters:{docs:{description:{story:h(`validate`,`custom-form-field`)}}},render:()=>i`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  `},X={parameters:{docs:{description:{story:h(`validate`,`custom-event-names`)}}},render:()=>i`
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
  `},Z={parameters:{docs:{description:{story:h(`validate`,`eager`)}}},render:()=>i`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},Q=pe({Default:H,TooltipVariant:U,InlineVariant:W,HideIcon:G,Live:q,CustomValidationMessage:J,CustomFormField:Y,Eager:Z},200),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}, 200)`,...Q.parameters?.docs?.source}}},we=[`Default`,`TooltipVariant`,`InlineVariant`,`HideIcon`,`Sizes`,`Live`,`CustomValidationMessage`,`CustomFormField`,`BindingToCustomEventNames`,`Eager`,`Screenshot`]})))()}export{_ as i,$ as n,Se as r,H as t};