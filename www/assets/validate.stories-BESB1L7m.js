import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,h as r,n as i,t as a}from"./lit-CHM2bYch.js";import{d as o,t as s}from"./modes--YaBmfvT.js";import{_ as c,r as l,s as u,y as d}from"./synergy-element-BbBQWYgK.js";import{t as f}from"./button-CEeBNY5R.js";import{t as p}from"./input-H4hMgDoU.js";import{a as m,i as h,n as g,o as _,r as v,t as y}from"./component-duAHVJ0I.js";import{t as b}from"./taggedTemplateLiteral-CWT6dLlS.js";import{t as x}from"./validate-BnRW8xTW.js";var S;function C(){return(C=e((()=>{a(),u(),S=class extends i{static{this.formAssociated=!0}static{this.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0}}static{this.styles=r`
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
  `}constructor(){super(),this.name=``,this.value=``,this.required=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.validate()})}get willValidate(){return this.internals.willValidate}formDisabledCallback(e){this.shadowRoot.querySelectorAll(`input`).forEach(t=>t.disabled=e)}formResetCallback(){this.value=``,this.internals.setFormValue(``)}checkValidity(){return this.validate(),this.internals.checkValidity()}reportValidity(){return this.validate(),this.internals.reportValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}validate(){let e=this.value?.length>0&&this.value===`option3`;if(e)this.internals.setValidity({});else{let e=this.shadowRoot.querySelector(`input[value="option3"]`);this.internals.setValidity({customError:!0},`You know, that this is not correct.`,e||void 0)}return e}render(){return n`
      <div>
        ${[1,2,3,4,5].map(e=>n`
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
    `}selectOption(e){this.value=e,this.internals.setFormValue(e),this.validate(),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0}))}},l([c({type:String})],S.prototype,`name`,void 0),l([c({type:String})],S.prototype,`value`,void 0),l([c({type:Boolean})],S.prototype,`required`,void 0),S=l([d(`validate-demo-radio`)],S)})))()}var w=t({BindingToCustomEventNames:()=>z,CustomFormField:()=>R,CustomValidationMessage:()=>L,Default:()=>j,Eager:()=>B,HideIcon:()=>P,InlineVariant:()=>N,Live:()=>I,Screenshot:()=>V,Sizes:()=>F,TooltipVariant:()=>M,__namedExportsOrder:()=>H,default:()=>A}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{a(),x(),p(),f(),v(),C(),o(),{args:E,argTypes:D}=h(`syn-validate`),{overrideArgs:O}=m(`syn-validate`),{generateTemplate:k}=_(`syn-validate`),A={args:O([{name:`default`,type:`slot`,value:`<syn-input
  label="Invalid input"
  type="email"
  value="team(at)synergy.com"
></syn-input>`}],E),argTypes:D,component:`syn-validate`,decorators:[(e,t)=>{let r=`${t.id}-validate-demo-form`;return n(T||=b([`
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
      `]),r,e(),r)}],parameters:{chromatic:{modes:s},docs:{description:{component:g(`validate`,`default`)}}},tags:[`Form`],title:`Components/syn-validate`},j={parameters:{controls:{disable:!1},docs:{description:{story:g(`validate`,`default`)}}},render:e=>k({args:e})},M={parameters:{docs:{description:{story:g(`validate`,`tooltip`)}}},render:()=>n`
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
    </syn-validate>`},N={parameters:{docs:{description:{story:g(`validate`,`inline`)}}},render:()=>n`
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
  `},P={parameters:{docs:{description:{story:g(`validate`,`hide-icon`)}}},render:()=>n`
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
  `},F={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:g(`validate`,`size`)}}},render:()=>n`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${[`small`,`medium`,`large`].map(e=>n`
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
  `},I={parameters:{docs:{description:{story:g(`validate`,`live`)}}},render:()=>n`
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
  `},L={parameters:{docs:{description:{story:g(`validate`,`custom-validation`)}}},render:()=>n`
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
  `},R={parameters:{docs:{description:{story:g(`validate`,`custom-form-field`)}}},render:()=>n`
    <h3 style="margin: 0; padding: 0;">Choose SICK´s brand color</h3>
    <syn-validate
      class="validation-custom-form-field"
      on="live"
      variant="inline"
    >
      <validate-demo-radio name="color" required></validate-demo-radio>
    </syn-validate>
  `},z={parameters:{docs:{description:{story:g(`validate`,`custom-event-names`)}}},render:()=>n`
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
  `},B={parameters:{docs:{description:{story:g(`validate`,`eager`)}}},render:()=>n`
    <syn-validate eager variant="inline">
      <syn-input
        label="Eager validation (triggered on page load)"
        type="email"
        value="team(at)synergy.com"
      ></syn-input>
    </syn-validate>
`},V=y({Default:j,TooltipVariant:M,InlineVariant:N,HideIcon:P,Live:I,CustomValidationMessage:L,CustomFormField:R,Eager:B},200),H=[`Default`,`TooltipVariant`,`InlineVariant`,`HideIcon`,`Sizes`,`Live`,`CustomValidationMessage`,`CustomFormField`,`BindingToCustomEventNames`,`Eager`,`Screenshot`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  TooltipVariant,
  InlineVariant,
  HideIcon,
  Live,
  CustomValidationMessage,
  CustomFormField,
  Eager
}, 200)`,...V.parameters?.docs?.source}}}})))()}export{U as n,w as r,j as t};