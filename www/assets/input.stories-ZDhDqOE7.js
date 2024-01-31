import"./preview-rNCdy3If.js";import{x as n}from"./directive-helpers-dXnBnwbo.js";import{u as v}from"./index-XprlCEIM.js";import{s as w,a as D,g as e,b as T}from"./component-5FLp4C0m.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-A2hvAOKg.js";import"./icon-button-tOTN_QA8.js";import"./icon-HfpDA_AG.js";import"./index-PPLHz8o0.js";import"./chunk-HJCNT6QR-zjy042Te.js";import"./chunk-FJPRWHXQ-npYaCjJl.js";import"./index-XbIp15rW.js";const{args:z,argTypes:E}=w("syn-input"),{generateTemplate:k}=D("syn-input"),_={args:z,argTypes:E,parameters:{docs:{description:{component:e("input","default")}}},title:"Components/syn-input"},s={parameters:{controls:{disable:!1},docs:{description:{story:e("input","default")}}},render:r=>k({args:r})},o={parameters:{docs:{description:{story:e("input","label")}}},render:()=>n`<syn-input label="What is your name?"></syn-input>`},a={parameters:{docs:{description:{story:e("input","help-text")}}},render:()=>n`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>`},i={parameters:{docs:{description:{story:e("input","placeholder")}}},render:()=>n`<syn-input placeholder="Type something"></syn-input>`},l={parameters:{docs:{description:{story:e("input","clearable")}}},render:()=>n`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>`},p={parameters:{docs:{description:{story:e("input","password-toggle")}}},render:()=>n`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>`},c={parameters:{docs:{description:{story:e("input","readonly")}}},render:()=>n`<syn-input value="Readonly content" readonly></syn-input>`},h={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("input","focus")}}},play:({canvasElement:r})=>{const t=r.querySelector("syn-input");t&&t.focus()},render:()=>n`
      <form>
        <syn-input help-text="This input is focused." label="Label" placeholder="Insert text here..."></syn-input>
      </form>
    `},u={parameters:{docs:{description:{story:e("input","disabled")}}},render:()=>n`
  <syn-input placeholder="Disabled" help-text="Help Text" label="Label" disabled>
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>`},y={parameters:{docs:{description:{story:e("input","size")}}},render:()=>n`
  <syn-input placeholder="Small" size="small"></syn-input><br/>
  <syn-input placeholder="Medium" size="medium"></syn-input><br/>
  <syn-input placeholder="Large" size="large"></syn-input>`},f={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("input","invalid")}}},play:async({canvasElement:r})=>{try{const t=r.querySelector("form"),S=t.querySelector("syn-input"),x=t.querySelector("syn-button");x&&S&&(await v.click(x),x.click())}catch(t){console.error("Error in play function:",t)}},render:()=>n`
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
  `},d={parameters:{docs:{description:{story:e("input","types")}}},render:()=>n`
    <syn-input type="email" placeholder="Email"></syn-input><br/>
    <syn-input type="number" placeholder="Number"></syn-input><br/>
    <syn-input type="date" placeholder="Date"></syn-input>
  `},m={parameters:{docs:{description:{story:e("input","prefix-suffix")}}},render:()=>n`
  <syn-input placeholder="Small" size="small">
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Medium" size="medium">
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Large" size="large">
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>`},b={parameters:{docs:{description:{story:e("input","label-position")}}},render:()=>n`
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
      }

      .label-on-left::part(form-control-help-text) {
        grid-column-start: 2;
      }
    </style>
  `},g=T({Default:s,Labels:o,HelpText:a,Placeholders:i,Clearable:l,TogglePassword:p,ReadonlyInputs:c,Disabled:u,Sizes:y,InputTypes:d,PrefixSuffixIcons:m,CustomizingLabelPosition:b},360);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'label')
      }
    }
  },
  render: () => html\`<syn-input label="What is your name?"></syn-input>\`
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'help-text')
      }
    }
  },
  render: () => html\`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>\`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-input placeholder="Type something"></syn-input>\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'clearable')
      }
    }
  },
  render: () => html\`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>\`
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'password-toggle')
      }
    }
  },
  render: () => html\`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>\`
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'readonly')
      }
    }
  },
  render: () => html\`<syn-input value="Readonly content" readonly></syn-input>\`
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    const input = (canvasElement.querySelector('syn-input') as SynInput);
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
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>\`
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      const input = (form.querySelector('syn-input') as SynInput);
      const button = (form.querySelector('syn-button') as SynButton);
      if (button && input) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
      }
    } catch (error) {
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
}`,...f.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'prefix-suffix')
      }
    }
  },
  render: () => html\`
  <syn-input placeholder="Small" size="small">
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Medium" size="medium">
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>
  <br/>
  <syn-input placeholder="Large" size="large">
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>\`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      }

      .label-on-left::part(form-control-help-text) {
        grid-column-start: 2;
      }
    </style>
  \`
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
  PrefixSuffixIcons,
  CustomizingLabelPosition
}, 360)`,...g.parameters?.docs?.source}}};const O=["Default","Labels","HelpText","Placeholders","Clearable","TogglePassword","ReadonlyInputs","Focus","Disabled","Sizes","Invalid","InputTypes","PrefixSuffixIcons","CustomizingLabelPosition","Screenshot"];export{l as Clearable,b as CustomizingLabelPosition,s as Default,u as Disabled,h as Focus,a as HelpText,d as InputTypes,f as Invalid,o as Labels,i as Placeholders,m as PrefixSuffixIcons,c as ReadonlyInputs,g as Screenshot,y as Sizes,p as TogglePassword,O as __namedExportsOrder,_ as default};
