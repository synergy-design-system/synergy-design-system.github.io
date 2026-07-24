import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-Lxgm_fxp.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-CdIPVuol.js";import{t as c}from"./icon-BLBnqcVf.js";import{i as l,n as u,o as d,r as f,t as p}from"./component-BRYPxz3B.js";import{n as m,t as h}from"./PaddingDecorator-B8dy7wkX.js";import{n as g,t as _}from"./decorators-BnZi37Nl.js";import{t as v}from"./input-CRUG0B-6.js";import{t as y}from"./textarea-CJbn0wxY.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=e((()=>{v(),c(),s(),y(),o(),_(),f(),r(),h(),n(),{userEvent:b}=__STORYBOOK_MODULE_TEST__,{args:x,argTypes:S}=l(`syn-input`),{generateTemplate:C}=d(`syn-input`),w={args:x,argTypes:S,parameters:{chromatic:{modes:i},design:t(`41337-165221`),docs:{description:{component:u(`input`,`default`)}}},tags:[`Form`],title:`Components/syn-input`},T={parameters:{controls:{disable:!1},docs:{description:{story:u(`input`,`default`)}}},render:e=>C({args:e})},E={parameters:{docs:{description:{story:u(`input`,`label`)}}},render:()=>a`<syn-input label="What is your name?"></syn-input>`},D={parameters:{docs:{description:{story:u(`input`,`help-text`)}}},render:()=>a`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>`},O={parameters:{docs:{description:{story:u(`input`,`placeholder`)}}},render:()=>a`<syn-input placeholder="Type something"></syn-input>`},k={parameters:{docs:{description:{story:u(`input`,`clearable`)}}},render:()=>a`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>`},A={parameters:{docs:{description:{story:u(`input`,`password-toggle`)}}},render:()=>a`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>`},j={parameters:{docs:{description:{story:u(`input`,`readonly`)}}},render:()=>a`<syn-input value="Readonly content" readonly></syn-input>`},M={decorators:[m()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`input`,`focus`)}}},play:({canvasElement:e})=>{let t=e.querySelector(`syn-input`);t&&t.focus()},render:()=>a`
      <form>
        <syn-input help-text="This input is focused." label="Label" placeholder="Insert text here..."></syn-input>
      </form>
    `},N={parameters:{docs:{description:{story:u(`input`,`disabled`)}}},render:()=>a`
  <syn-input placeholder="Disabled" help-text="Help Text" label="Label" disabled>
    <syn-icon name="home" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>`},P={parameters:{docs:{description:{story:u(`input`,`size`)}}},render:()=>a`
  <syn-input placeholder="Small" size="small"></syn-input><br/>
  <syn-input placeholder="Medium" size="medium"></syn-input><br/>
  <syn-input placeholder="Large" size="large"></syn-input>`},F={decorators:[g],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`input`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`form`),n=t.querySelector(`syn-input`),r=t.querySelector(`syn-button`);r&&n&&(await b.click(r),r.click())}catch(e){console.error(`Error in play function:`,e)}},render:()=>a`
    <syn-input help-text="This input is required." label="Label" placeholder="Insert text here..." required></syn-input>
  `},I={parameters:{docs:{description:{story:u(`input`,`types`)}}},render:()=>a`
    <syn-input type="email" placeholder="Email"></syn-input><br/>
    <syn-input type="number" placeholder="Number"></syn-input><br/>
    <syn-input type="date" placeholder="Date"></syn-input>
  `},L={parameters:{docs:{description:{story:u(`input`,`prefix-suffix`)}}},render:()=>a`
  <syn-input placeholder="Small" size="small">
    <span slot="prefix">prefix</span>
    <span slot="suffix">suffix</span>
  </syn-input>
  <br/>
  <syn-input placeholder="Medium" size="medium">
    <span slot="prefix">prefix</span>
    <span slot="suffix">suffix</span>
  </syn-input>
  <br/>
  <syn-input placeholder="Large" size="large">
    <span slot="prefix">prefix</span>
    <span slot="suffix">suffix</span>
  </syn-input>
  <br/>
  <syn-input placeholder="Small" size="small">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Medium" size="medium">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Large" size="large">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-input>`},R={parameters:{docs:{description:{story:u(`input`,`label-position`)}}},render:()=>a`
    <syn-input class="label-on-left" label="Name" help-text="Enter your name"></syn-input>
    <syn-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></syn-input>
    <syn-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></syn-textarea>

    <style>
      .label-on-left {
        --label-width: 3.75rem;
        --gap-width: 1rem;
      }

      .label-on-left + .label-on-left {
        margin-top: var(--syn-spacing-medium);
      }

      .label-on-left::part(form-control) {
        display: grid;
        grid: auto / var(--label-width) 1fr;
        gap: var(--syn-spacing-3x-small) var(--gap-width);
        align-items: center;
      }

      .label-on-left::part(form-control-label) {
        text-align: right;
        margin-bottom: 0;
      }

      .label-on-left::part(form-control-help-text) {
        grid-column-start: 2;
      }
    </style>
  `},z={parameters:{docs:{description:{story:u(`input`,`stepper`)}}},render:()=>a`
  <syn-input type="number" min="0" max="10" value="0"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="2"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="10"></syn-input>`},B={parameters:{docs:{description:{story:u(`input`,`stepper-input-handling`)}}},render:()=>a`
    <syn-input
      label="Native (min and max)"
      max="10"
      min="0"
      numeric-strategy="native"
      step="0.3"
      type="number"
      value="0"
    ></syn-input>
    <br />
    <syn-input 
      label="Modern (min and max)"
      max="10"
      min="0"
      numeric-strategy="modern"
      step="0.3"
      type="number"
      value="0"
    ></syn-input>
  `},V=p({Default:T,Labels:E,HelpText:D,Placeholders:O,Clearable:k,TogglePassword:A,ReadonlyInputs:j,Disabled:N,Sizes:P,InputTypes:I,PrefixSuffixTextAndIcons:L,CustomizingLabelPosition:R,Stepper:z,StepperInputHandling:B},500),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'default')
      }
    }
  },
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'label')
      }
    }
  },
  render: () => html\`<syn-input label="What is your name?"></syn-input>\`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'help-text')
      }
    }
  },
  render: () => html\`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>\`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-input placeholder="Type something"></syn-input>\`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'clearable')
      }
    }
  },
  render: () => html\`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>\`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'password-toggle')
      }
    }
  },
  render: () => html\`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>\`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'readonly')
      }
    }
  },
  render: () => html\`<syn-input value="Readonly content" readonly></syn-input>\`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: [paddingDecorator()],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector('syn-input') as unknown as SynInput;
    if (input) {
      input.focus();
    }
  },
  render: () => html\`
      <form>
        <syn-input help-text="This input is focused." label="Label" placeholder="Insert text here..."></syn-input>
      </form>
    \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'disabled')
      }
    }
  },
  render: () => html\`
  <syn-input placeholder="Disabled" help-text="Help Text" label="Label" disabled>
    <syn-icon name="home" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>\`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'size')
      }
    }
  },
  render: () => html\`
  <syn-input placeholder="Small" size="small"></syn-input><br/>
  <syn-input placeholder="Medium" size="medium"></syn-input><br/>
  <syn-input placeholder="Large" size="large"></syn-input>\`
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  decorators: [FormSubmitDecorator],
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const form = canvasElement.querySelector('form')!;
      const input = form.querySelector('syn-input') as unknown as SynInput;
      const button = form.querySelector('syn-button') as unknown as SynButton;
      if (button && input) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
    <syn-input help-text="This input is required." label="Label" placeholder="Insert text here..." required></syn-input>
  \`
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'types')
      }
    }
  },
  render: () => html\`
    <syn-input type="email" placeholder="Email"></syn-input><br/>
    <syn-input type="number" placeholder="Number"></syn-input><br/>
    <syn-input type="date" placeholder="Date"></syn-input>
  \`
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
  <syn-input placeholder="Small" size="small">
    <span slot="prefix">prefix</span>
    <span slot="suffix">suffix</span>
  </syn-input>
  <br/>
  <syn-input placeholder="Medium" size="medium">
    <span slot="prefix">prefix</span>
    <span slot="suffix">suffix</span>
  </syn-input>
  <br/>
  <syn-input placeholder="Large" size="large">
    <span slot="prefix">prefix</span>
    <span slot="suffix">suffix</span>
  </syn-input>
  <br/>
  <syn-input placeholder="Small" size="small">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Medium" size="medium">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Large" size="large">
    <syn-icon name="wallpaper" slot="prefix"></syn-icon>
    <syn-icon name="wallpaper" slot="suffix"></syn-icon>
  </syn-input>\`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'label-position')
      }
    }
  },
  render: () => html\`
    <syn-input class="label-on-left" label="Name" help-text="Enter your name"></syn-input>
    <syn-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></syn-input>
    <syn-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></syn-textarea>

    <style>
      .label-on-left {
        --label-width: 3.75rem;
        --gap-width: 1rem;
      }

      .label-on-left + .label-on-left {
        margin-top: var(--syn-spacing-medium);
      }

      .label-on-left::part(form-control) {
        display: grid;
        grid: auto / var(--label-width) 1fr;
        gap: var(--syn-spacing-3x-small) var(--gap-width);
        align-items: center;
      }

      .label-on-left::part(form-control-label) {
        text-align: right;
        margin-bottom: 0;
      }

      .label-on-left::part(form-control-help-text) {
        grid-column-start: 2;
      }
    </style>
  \`
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'stepper')
      }
    }
  },
  render: () => html\`
  <syn-input type="number" min="0" max="10" value="0"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="2"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="10"></syn-input>\`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'stepper-input-handling')
      }
    }
  },
  render: () => html\`
    <syn-input
      label="Native (min and max)"
      max="10"
      min="0"
      numeric-strategy="native"
      step="0.3"
      type="number"
      value="0"
    ></syn-input>
    <br />
    <syn-input 
      label="Modern (min and max)"
      max="10"
      min="0"
      numeric-strategy="modern"
      step="0.3"
      type="number"
      value="0"
    ></syn-input>
  \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Placeholders,
  Clearable,
  TogglePassword,
  ReadonlyInputs,
  Disabled,
  Sizes,
  InputTypes,
  PrefixSuffixTextAndIcons,
  CustomizingLabelPosition,
  Stepper,
  StepperInputHandling
}, 500)`,...V.parameters?.docs?.source}}},H=[`Default`,`Labels`,`HelpText`,`Placeholders`,`Clearable`,`TogglePassword`,`ReadonlyInputs`,`Focus`,`Disabled`,`Sizes`,`Invalid`,`InputTypes`,`PrefixSuffixTextAndIcons`,`CustomizingLabelPosition`,`Stepper`,`StepperInputHandling`,`Screenshot`]}));U();export{k as Clearable,R as CustomizingLabelPosition,T as Default,N as Disabled,M as Focus,D as HelpText,I as InputTypes,F as Invalid,E as Labels,O as Placeholders,L as PrefixSuffixTextAndIcons,j as ReadonlyInputs,V as Screenshot,P as Sizes,z as Stepper,B as StepperInputHandling,A as TogglePassword,H as __namedExportsOrder,w as default,U as t};