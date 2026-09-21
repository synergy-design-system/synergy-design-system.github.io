import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-DVQQjuS0.js";import{c as i,h as a,n as o,t as s}from"./lit-DgWh_IaA.js";import{d as c,r as l,s as u}from"./synergy-element-CyOGAJ68.js";import{t as d}from"./button-CJO8hSdT.js";import{t as f}from"./input-DUZCuyXj.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./component-CsPmw1q3.js";import{t as y}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as b}from"./validate-DO1M0cPI.js";var x;function S(){return(S=e((()=>{x=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}})))()}var C;function w(){return(w=e((()=>{s(),u(),C=class extends o{static{this.formAssociated=!0}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=a`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0}))}},l([c({type:String})],C.prototype,`name`,void 0),l([c({type:String})],C.prototype,`value`,void 0),l([c({type:Boolean})],C.prototype,`required`,void 0),C=l([x(`validate-demo-radio`)],C)})))()}var T=t({BindingToCustomEventNames:()=>B,CustomFormField:()=>z,CustomValidationMessage:()=>R,Default:()=>M,Eager:()=>V,HideIcon:()=>F,InlineVariant:()=>P,Live:()=>L,Screenshot:()=>H,Sizes:()=>I,TooltipVariant:()=>N,__namedExportsOrder:()=>U,default:()=>j}),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{s(),b(),f(),d(),_(),w(),r(),{args:D,argTypes:O}=m(`syn-validate`),{overrideArgs:k}=p(`syn-validate`),{generateTemplate:A}=g(`syn-validate`),j={args:k([{name:`default`,type:`slot`,value:`<syn-input
  label="Invalid input"
  type="email"
  value="team(at)synergy.com"
></syn-input>`}],D),argTypes:O,component:`syn-validate`,decorators:[(e,t)=>{let n=`${t.id}-validate-demo-form`;return i(E||=y([`
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
      `]),n,e(),n)}],parameters:{chromatic:{modes:n},docs:{description:{component:h(`validate`,`default`)}}},tags:[`Form`],title:`Components/syn-validate`},M={parameters:{controls:{disable:!1},docs:{description:{story:h(`validate`,`default`)}}},render:e=>A({args:e})},N={parameters:{docs:{description:{story:h(`validate`,`tooltip`)}}},render:()=>i`
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
    </syn-validate>`},P={parameters:{docs:{description:{story:h(`validate`,`inline`)}}},render:()=>i`
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
  `},F={parameters:{docs:{description:{story:h(`validate`,`hide-icon`)}}},render:()=>i`
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
  `},I={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:h(`validate`,`size`)}}},render:()=>i`
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
  `},L={parameters:{docs:{description:{story:h(`validate`,`live`)}}},render:()=>i`
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
  `},R={parameters:{docs:{description:{story:h(`validate`,`custom-validation`)}}},render:()=>i`
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
  `},z={parameters:{docs:{description:{story:h(`validate`,`custom-form-field`)}}},render:()=>i`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  `},B={parameters:{docs:{description:{story:h(`validate`,`custom-event-names`)}}},render:()=>i`
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
  `},V={parameters:{docs:{description:{story:h(`validate`,`eager`)}}},render:()=>i`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},H=v({Default:M,TooltipVariant:N,InlineVariant:P,HideIcon:F,Live:L,CustomValidationMessage:R,CustomFormField:z,Eager:V},200),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TooltipVariant,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...H.parameters?.docs?.source}}},U=[`Default`,`TooltipVariant`,`InlineVariant`,`HideIcon`,`Sizes`,`Live`,`CustomValidationMessage`,`CustomFormField`,`BindingToCustomEventNames`,`Eager`,`Screenshot`]})))()}export{S as i,W as n,T as r,M as t};