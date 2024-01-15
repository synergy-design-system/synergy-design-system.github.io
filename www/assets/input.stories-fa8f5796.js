import"./input-c4d80716.js";import{x as e}from"./directive-helpers-a6c66f8a.js";import{u as v}from"./index-8ec6bb21.js";import{s as w,a as T,g as n,b as z}from"./component-be2efc65.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./form-74a81bb1.js";import"./slot-4492e2ee.js";import"./if-defined-1099e361.js";import"./localize-3922cea4.js";import"./component.styles-86aba3f6.js";import"./query-f49a08ce.js";import"./icon.component-d6cd0d6e.js";import"./form-control.styles-d852634a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";import"./_docs-6508e6e2.js";const{args:D,argTypes:I}=w("syn-input"),{generateTemplate:k}=T("syn-input"),J={args:D,argTypes:I,parameters:{docs:{description:{component:n("input","default")}}},title:"Components/syn-input"},h={parameters:{controls:{disable:!1},docs:{description:{story:n("input","default")}}},render:a=>k({args:a})},o={name:"Labels",parameters:{docs:{description:{story:n("input","label")}}},render:()=>e`<syn-input label="What is your name?"></syn-input>`},i={name:"Help text",parameters:{docs:{description:{story:n("input","help-text")}}},render:()=>e`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>`},l={name:"Placeholder",parameters:{docs:{description:{story:n("input","placeholder")}}},render:()=>e`<syn-input placeholder="Type something"></syn-input>`},p={name:"Clearable",parameters:{docs:{description:{story:n("input","clearable")}}},render:()=>e`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>`},c={name:"Toggle password",parameters:{docs:{description:{story:n("input","password-toggle")}}},render:()=>e`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>`},u={name:"Readonly inputs",parameters:{docs:{description:{story:n("input","readonly")}}},render:()=>e`<syn-input value="Readonly content" readonly></syn-input>`},b={name:"Focus",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("input","focus")}}},play:({canvasElement:a})=>{const t=a.querySelector("syn-input");t&&t.focus()},render:()=>e`
      <form>
        <syn-input help-text="This input is focused." label="Label" placeholder="Insert text here..."></syn-input>
      </form>
    `},m={name:"Disabled",parameters:{docs:{description:{story:n("input","disabled")}}},render:()=>e`
  <syn-input placeholder="Disabled" help-text="Help Text" label="Label" disabled>
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>`},d={name:"Sizes",parameters:{docs:{description:{story:n("input","size")}}},render:()=>e`
  <syn-input placeholder="Small" size="small"></syn-input><br/>
  <syn-input placeholder="Medium" size="medium"></syn-input><br/>
  <syn-input placeholder="Large" size="large"></syn-input>`},f={name:"Invalid",parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:n("input","invalid")}}},play:async({canvasElement:a})=>{try{const t=a.querySelector("form"),S=t.querySelector("syn-input"),x=t.querySelector("syn-button");x&&S&&(await v.click(x),x.click())}catch(t){console.error("Error in play function:",t)}},render:()=>e`
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
  `},s={name:"Input types",render:()=>e`
  <syn-input type="email" placeholder="Email"></syn-input><br/>
  <syn-input type="number" placeholder="Number"></syn-input><br/>
  <syn-input type="date" placeholder="Date"></syn-input>`},y={name:"Prefix and suffix icons",parameters:{docs:{description:{story:n("input","prefix-suffix")}}},render:()=>e`
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
  </syn-input>`},r={name:"Customizing label position",render:()=>e`
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
  </style>`},g=z([o,i,l,p,c,u,m,d,s,y,r],360);h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} as Story`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Labels',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'label')
      }
    }
  },
  render: () => html\`<syn-input label="What is your name?"></syn-input>\`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Help text',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'help-text')
      }
    }
  },
  render: () => html\`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Placeholder',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-input placeholder="Type something"></syn-input>\`
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Clearable',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'clearable')
      }
    }
  },
  render: () => html\`<syn-input value="Clearable" placeholder="Clearable" clearable></syn-input>\`
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Toggle password',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'password-toggle')
      }
    }
  },
  render: () => html\`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>\`
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Readonly inputs',
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'readonly')
      }
    }
  },
  render: () => html\`<syn-input value="Readonly content" readonly></syn-input>\`
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
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
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Invalid',
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
}`,...f.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Input types',
  render: () => html\`
  <syn-input type="email" placeholder="Email"></syn-input><br/>
  <syn-input type="number" placeholder="Number"></syn-input><br/>
  <syn-input type="date" placeholder="Date"></syn-input>\`
}`,...s.parameters?.docs?.source},description:{story:"The type attribute controls the type of input the browser renders.",...s.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Prefix and suffix icons',
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
}`,...y.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Customizing label position',
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
  </style>\`
}`,...r.parameters?.docs?.source},description:{story:`Use  to customize the way form controls are drawn.
This example uses CSS grid to position the label to the left of the control,
but the possible orientations are nearly endless.
The same technique works for inputs, textareas, radio groups, and similar form controls.`,...r.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"generateScreenshotStory([Labels, HelpText, Placeholders, Clearable, TogglePassword, ReadonlyInputs, Disabled, Sizes, InputTypes, PrefixSuffixIcons, CustomizingLabelPosition], 360)",...g.parameters?.docs?.source}}};const K=["Default","Labels","HelpText","Placeholders","Clearable","TogglePassword","ReadonlyInputs","Focus","Disabled","Sizes","Invalid","InputTypes","PrefixSuffixIcons","CustomizingLabelPosition","Screenshot"];export{p as Clearable,r as CustomizingLabelPosition,h as Default,m as Disabled,b as Focus,i as HelpText,s as InputTypes,f as Invalid,o as Labels,l as Placeholders,y as PrefixSuffixIcons,u as ReadonlyInputs,g as Screenshot,d as Sizes,c as TogglePassword,K as __namedExportsOrder,J as default};
//# sourceMappingURL=input.stories-fa8f5796.js.map
