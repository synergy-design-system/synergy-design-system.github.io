import{g as w}from"./preview-DU4IMC1-.js";import{x as n}from"./lit-element-DILkAbkc.js";import{u as T}from"./index-D1uk6h4O.js";import{s as D,a as z,g as e,b as E}from"./component-BRMxAgJb.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-Bp4UJBn3.js";import"./icon.component-BAp08lqM.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-CEOmvufO.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DrsvUxkR.js";const{args:k,argTypes:L}=D("syn-input"),{generateTemplate:I}=z("syn-input"),_={args:k,argTypes:L,parameters:{design:w("14695-110120"),docs:{description:{component:e("input","default")}}},title:"Components/syn-input"},t={parameters:{controls:{disable:!1},docs:{description:{story:e("input","default")}}},render:r=>I({args:r})},a={parameters:{docs:{description:{story:e("input","label")}}},render:()=>n`<syn-input label="What is your name?"></syn-input>`},o={parameters:{docs:{description:{story:e("input","help-text")}}},render:()=>n`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>`},i={parameters:{docs:{description:{story:e("input","placeholder")}}},render:()=>n`<syn-input placeholder="Type something"></syn-input>`},l={parameters:{docs:{description:{story:e("input","clearable")}}},render:()=>n`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>`},p={parameters:{docs:{description:{story:e("input","password-toggle")}}},render:()=>n`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>`},c={parameters:{docs:{description:{story:e("input","readonly")}}},render:()=>n`<syn-input value="Readonly content" readonly></syn-input>`},h={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("input","focus")}}},play:({canvasElement:r})=>{const s=r.querySelector("syn-input");s&&s.focus()},render:()=>n`
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
  <syn-input placeholder="Large" size="large"></syn-input>`},g={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("input","invalid")}}},play:async({canvasElement:r})=>{try{const s=r.querySelector("form"),v=s.querySelector("syn-input"),S=s.querySelector("syn-button");S&&v&&(await T.click(S),S.click())}catch(s){console.error("Error in play function:",s)}},render:()=>n`
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
  </syn-input>`},f={parameters:{docs:{description:{story:e("input","label-position")}}},render:()=>n`
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
  `},b={parameters:{docs:{description:{story:e("input","stepper")}}},render:()=>n`
  <syn-input type="number" min="0" max="10" value="0"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="2"></syn-input>
  <br/>
  <syn-input type="number" min="0" max="10" value="10"></syn-input>`},x=E({Default:t,Labels:a,HelpText:o,Placeholders:i,Clearable:l,TogglePassword:p,ReadonlyInputs:c,Disabled:u,Sizes:y,InputTypes:d,PrefixSuffixTextAndIcons:m,CustomizingLabelPosition:f,Stepper:b},500);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} as Story`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
  Stepper
}, 500)`,...x.parameters?.docs?.source}}};const j=["Default","Labels","HelpText","Placeholders","Clearable","TogglePassword","ReadonlyInputs","Focus","Disabled","Sizes","Invalid","InputTypes","PrefixSuffixTextAndIcons","CustomizingLabelPosition","Stepper","Screenshot"];export{l as Clearable,f as CustomizingLabelPosition,t as Default,u as Disabled,h as Focus,o as HelpText,d as InputTypes,g as Invalid,a as Labels,i as Placeholders,m as PrefixSuffixTextAndIcons,c as ReadonlyInputs,x as Screenshot,y as Sizes,b as Stepper,p as TogglePassword,j as __namedExportsOrder,_ as default};
