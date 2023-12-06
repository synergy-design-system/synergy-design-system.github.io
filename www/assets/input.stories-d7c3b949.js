import"./input-6bcfe9a0.js";import{x as e}from"./directive-helpers-a6c66f8a.js";import{u as T}from"./index-8ec6bb21.js";import{s as w,a as D,g as t}from"./component-5b49799f.js";import"./static-c19bae7e.js";import"./live-50407c8a.js";import"./query-a4947b92.js";import"./slot-4492e2ee.js";import"./if-defined-1099e361.js";import"./localize-d6e19d2a.js";import"./component.styles-92298694.js";import"./icon.component-d5c62d76.js";import"./form-control.styles-d852634a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:x,argTypes:k}=w("syn-input"),{generateTemplate:S}=D("syn-input"),_={args:x,argTypes:k,parameters:{docs:{description:{component:t("input","default")}}},title:"Components/syn-input"},a={parameters:{docs:{description:{story:t("input","default")}}},render:r=>S({args:r})},i={parameters:{controls:{disable:!0},docs:{description:{story:t("input","label")}}},render:()=>e`<syn-input label="What is your name?"></syn-input>`},l={parameters:{controls:{disable:!0},docs:{description:{story:t("input","help-text")}}},render:()=>e`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>`},p={parameters:{controls:{disable:!0},docs:{description:{story:t("input","placeholder")}}},render:()=>e`<syn-input placeholder="Type something"></syn-input>`},c={parameters:{controls:{disable:!0},docs:{description:{story:t("input","clearable")}}},render:()=>e`<syn-input placeholder="Clearable" clearable></syn-input>`},u={parameters:{controls:{disable:!0},docs:{description:{story:t("input","password-toggle")}}},render:()=>e`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>`},d={parameters:{controls:{disable:!0},docs:{description:{story:t("input","readonly")}}},render:()=>e`<syn-input value="Readonly content" readonly></syn-input>`},y={args:{helpText:"This input is focused.",label:"Label",placeholder:"Insert text here..."},parameters:{controls:{disable:!0},docs:{description:t("input","focus")}},play:({canvasElement:r})=>{const n=r.querySelector("syn-input");n&&n.focus()},render:()=>e`
      <form>
        ${S({args:x})}
      </form>
    `},m={parameters:{controls:{disable:!0},docs:{description:{story:t("input","disabled")}}},render:()=>e`
  <syn-input placeholder="Disabled" help-text="Help Text" label="Label" disabled>
    <syn-icon name="house" slot="prefix"></syn-icon>
    <syn-icon name="chat" slot="suffix"></syn-icon>
  </syn-input>`},b={parameters:{controls:{disable:!0},docs:{description:{story:t("input","size")}}},render:()=>e`
  <syn-input placeholder="Small" size="small"></syn-input><br/>
  <syn-input placeholder="Medium" size="medium"></syn-input><br/>
  <syn-input placeholder="Large" size="large"></syn-input>`},h={args:{helpText:"This input is required.",label:"Label",placeholder:"Insert text here..."},parameters:{controls:{disable:!0},docs:{description:t("input","invalid")}},play:async({canvasElement:r})=>{try{const n=r.querySelector("form"),v=n.querySelector("syn-input"),g=n.querySelector("syn-button");g&&v&&(await T.click(g),g.click())}catch(n){console.error("Error in play function:",n)}},render:()=>e`
    <form class="custom-validity">
  ${S({args:x,constants:[{name:"required",type:"attribute",value:!0}]})}
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
  `},s={render:()=>e`
  <syn-input type="email" placeholder="Email"></syn-input><br/>
  <syn-input type="number" placeholder="Number"></syn-input><br/>
  <syn-input type="date" placeholder="Date"></syn-input>`},f={parameters:{controls:{disable:!0},docs:{description:{story:t("input","prefix-suffix")}}},render:()=>e`
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
  </syn-input>`},o={render:()=>e`
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
  </style>`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('input', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'label')
      }
    }
  },
  render: () => html\`<syn-input label="What is your name?"></syn-input>\`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'help-text')
      }
    }
  },
  render: () => html\`<syn-input label="Nickname" help-text="What would you like people to call you?"></syn-input>\`
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'placeholder')
      }
    }
  },
  render: () => html\`<syn-input placeholder="Type something"></syn-input>\`
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'clearable')
      }
    }
  },
  render: () => html\`<syn-input placeholder="Clearable" clearable></syn-input>\`
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'password-toggle')
      }
    }
  },
  render: () => html\`<syn-input type="password" placeholder="Password Toggle" password-toggle></syn-input>\`
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: generateStoryDescription('input', 'readonly')
      }
    }
  },
  render: () => html\`<syn-input value="Readonly content" readonly></syn-input>\`
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    helpText: 'This input is focused.',
    label: 'Label',
    placeholder: 'Insert text here...'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('input', 'focus')
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
        \${generateTemplate({
    args
  })}
      </form>
    \`
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    helpText: 'This input is required.',
    label: 'Label',
    placeholder: 'Insert text here...'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('input', 'invalid')
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
  \${generateTemplate({
    args,
    constants: [{
      name: 'required',
      type: 'attribute',
      value: true
    }]
  })}
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
}`,...h.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <syn-input type="email" placeholder="Email"></syn-input><br/>
  <syn-input type="number" placeholder="Number"></syn-input><br/>
  <syn-input type="date" placeholder="Date"></syn-input>\`
}`,...s.parameters?.docs?.source},description:{story:"The type attribute controls the type of input the browser renders.",...s.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...f.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:`Use  to customize the way form controls are drawn.
This example uses CSS grid to position the label to the left of the control,
but the possible orientations are nearly endless.
The same technique works for inputs, textareas, radio groups, and similar form controls.`,...o.parameters?.docs?.description}}};const O=["Default","Labels","HelpText","Placeholders","Clearable","TogglePassword","ReadonlyInputs","Focus","Disabled","Sizes","Invalid","InputTypes","PrefixSuffixIcons","CustomizingLabelPosition"];export{c as Clearable,o as CustomizingLabelPosition,a as Default,m as Disabled,y as Focus,l as HelpText,s as InputTypes,h as Invalid,i as Labels,p as Placeholders,f as PrefixSuffixIcons,d as ReadonlyInputs,b as Sizes,u as TogglePassword,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=input.stories-d7c3b949.js.map
