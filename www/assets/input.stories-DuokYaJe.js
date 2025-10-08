import"./input-Bd62-z1q.js";import"./icon-Bb_g6zKz.js";import"./button-BlrCLga1.js";import"./textarea-DtCKs5Yb.js";import{g as D,C as T,x as t}from"./iframe-DETqXCDE.js";import{g as e,s as z,c as I,b as E}from"./component-B4eUbZSL.js";import{p as k}from"./PaddingDecorator-LEsGcrej.js";import"./class-map-CA1EWqNv.js";import"./default-value-f8MXQAdw.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-Bok6JrVO.js";import"./live-CiNhQG6z.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-C3Jrd-QR.js";import"./icon.component-CWoOaWeI.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./form-control.custom.styles-Cbf4QQuU.js";import"./divider.component-WFU952Ky.js";import"./functions-CDi3doZH.js";import"./decorator-DANECR0-.js";import"./spinner.component-DI5twqa2.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-DKsB8ZHg.js";const{userEvent:L}=__STORYBOOK_MODULE_TEST__,{args:C,argTypes:P}=z("syn-input"),{generateTemplate:q}=I("syn-input"),oe={args:C,argTypes:P,parameters:{chromatic:{modes:T},design:D("14695-110120"),docs:{description:{component:e("input","default")}}},tags:["Form","SICK2018","SICK2025"],title:"Components/syn-input"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("input","default")}}},render:r=>q({args:r})},a={parameters:{docs:{description:{story:e("input","label")}}},render:()=>t`<syn-input label="What is your name?"></syn-input>`},o={parameters:{docs:{description:{story:e("input","help-text")}}},render:()=>t`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>`},i={parameters:{docs:{description:{story:e("input","placeholder")}}},render:()=>t`<syn-input placeholder="Type something"></syn-input>`},p={parameters:{docs:{description:{story:e("input","clearable")}}},render:()=>t`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>`},l={parameters:{docs:{description:{story:e("input","password-toggle")}}},render:()=>t`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>`},c={parameters:{docs:{description:{story:e("input","readonly")}}},render:()=>t`<syn-input value="Readonly content" readonly></syn-input>`},h={decorators:[k()],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("input","focus")}}},play:({canvasElement:r})=>{const n=r.querySelector("syn-input");n&&n.focus()},render:()=>t`
      <form>
        <syn-input help-text="This input is focused." label="Label" placeholder="Insert text here..."></syn-input>
      </form>
    `},u={parameters:{docs:{description:{story:e("input","disabled")}}},render:()=>t`
  <syn-input placeholder="Disabled" help-text="Help Text" label="Label" disabled>
    <syn-icon name="home" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>`},m={parameters:{docs:{description:{story:e("input","size")}}},render:()=>t`
  <syn-input placeholder="Small" size="small"></syn-input><br/>
  <syn-input placeholder="Medium" size="medium"></syn-input><br/>
  <syn-input placeholder="Large" size="large"></syn-input>`},x={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("input","invalid")}}},play:async({canvasElement:r})=>{try{const n=r.querySelector("form"),w=n.querySelector("syn-input"),v=n.querySelector("syn-button");v&&w&&(await L.click(v),v.click())}catch(n){console.error("Error in play function:",n)}},render:()=>t`
    <form class="custom-validity">
      <syn-input help-text="This input is required." label="Label" placeholder="Insert text here..." required></syn-input>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  `},d={parameters:{docs:{description:{story:e("input","types")}}},render:()=>t`
    <syn-input type="email" placeholder="Email"></syn-input><br/>
    <syn-input type="number" placeholder="Number"></syn-input><br/>
    <syn-input type="date" placeholder="Date"></syn-input>
  `},y={parameters:{docs:{description:{story:e("input","prefix-suffix")}}},render:()=>t`
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
  </syn-input>`},f={parameters:{docs:{description:{story:e("input","label-position")}}},render:()=>t`
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
  `},b={parameters:{docs:{description:{story:e("input","stepper")}}},render:()=>t`
  <syn-input type="number" min="0" max="10" value="0"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="2"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="10"></syn-input>`},g={parameters:{docs:{description:{story:e("input","stepper-input-handling")}}},render:()=>t`
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
  `},S=E({Default:s,Labels:a,HelpText:o,Placeholders:i,Clearable:p,TogglePassword:l,ReadonlyInputs:c,Disabled:u,Sizes:m,InputTypes:d,PrefixSuffixTextAndIcons:y,CustomizingLabelPosition:f,Stepper:b,StepperInputHandling:g},500);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'label')
      }
    }
  },
  render: () => html\`<syn-input label="What is your name?"></syn-input>\`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'help-text')
      }
    }
  },
  render: () => html\`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>\`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-input placeholder="Type something"></syn-input>\`
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'clearable')
      }
    }
  },
  render: () => html\`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>\`
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'password-toggle')
      }
    }
  },
  render: () => html\`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>\`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'readonly')
      }
    }
  },
  render: () => html\`<syn-input value="Readonly content" readonly></syn-input>\`
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    <form class="custom-validity">
      <syn-input help-text="This input is required." label="Label" placeholder="Insert text here..." required></syn-input>
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
    <style>
    .custom-validity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    syn-button {
      align-self: flex-start;
    }
    </style>
  \`
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
}, 500)`,...S.parameters?.docs?.source}}};const ie=["Default","Labels","HelpText","Placeholders","Clearable","TogglePassword","ReadonlyInputs","Focus","Disabled","Sizes","Invalid","InputTypes","PrefixSuffixTextAndIcons","CustomizingLabelPosition","Stepper","StepperInputHandling","Screenshot"];export{p as Clearable,f as CustomizingLabelPosition,s as Default,u as Disabled,h as Focus,o as HelpText,d as InputTypes,x as Invalid,a as Labels,i as Placeholders,y as PrefixSuffixTextAndIcons,c as ReadonlyInputs,S as Screenshot,m as Sizes,b as Stepper,g as StepperInputHandling,l as TogglePassword,ie as __namedExportsOrder,oe as default};
