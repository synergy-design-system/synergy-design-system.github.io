import{g as o,a as f,s as S,c as O,b as k,d as T}from"./component-C7JQVgEW.js";import{x as a}from"./directive-helpers-Dvm_Ferq.js";import{u as m}from"./index-CSCA1apM.js";import"./library-BeKtmk-e.js";import"./ref-mC-OfJbg.js";import"./chunk-L4EGOTBX-Boit2UGA.js";import"./entry-preview-DkJqm5dP.js";import"./index-DrFu-skq.js";import"./icon-button-DSvkANI_.js";import"./index-Co-BzvLd.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";const{args:v,argTypes:x}=S("syn-radio-group"),{overrideArgs:E}=k("syn-radio-group"),{generateTemplate:q}=O("syn-radio-group"),N={args:v,argTypes:x,component:"syn-radio-group",parameters:{design:f("1345-16160"),docs:{description:{component:o("radio-group","default")}}},title:"Components/syn-radio-group"},s={args:E([{name:"label",type:"attribute",value:"This is a label"},{name:"default",type:"slot",value:`<syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>`}],v),parameters:{controls:{disable:!1},docs:{description:{story:o("radio-group","default")}}},render:r=>q({args:r})},t={parameters:{docs:{description:{story:o("radio-group","labels")}}},render:()=>a`
  <syn-radio-group label="This is a label">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},i={parameters:{docs:{description:{story:o("radio-group","help-text")}}},render:()=>a`
  <syn-radio-group label="This is a label" help-text="This is the help-text" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio-group","focus")}}},play:({canvasElement:r})=>{r.querySelector("syn-radio-group")?.focus()},render:()=>a`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},n={parameters:{docs:{description:{story:o("radio-group","disabled")}}},render:()=>a`
  <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2" disabled>Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},l={render:()=>a`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio-group","invalid")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-button");e&&(await m.click(e),e.click())}catch(e){console.error("Error in play function:",e)}},render:()=>a`
  <form class="custom-validity">
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio value="1">Option 1</syn-radio>
      <syn-radio value="2">Option 2</syn-radio>
      <syn-radio value="3">Option 3</syn-radio>
    </syn-radio-group>
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
</style>`},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio-group","setCustomValidity")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-radio-group"),y=r.querySelector("syn-button"),b=r.querySelector('syn-radio[value="1"]'),h=r.querySelector('syn-radio[value="3"]'),g="You must choose the last option";e?.setCustomValidity(g),b&&await m.click(b),h&&e?.value==="3"?e?.setCustomValidity(""):e?.setCustomValidity(g),y&&(await m.click(y),y.click(),e?.checkValidity()?console.log("All fields are valid!"):console.error("Form validation failed"))}catch(e){console.error("Error in play function:",e)}},render:()=>a`
  <form>
    <syn-radio-group label="Select an option" name="a" value="1">
      <syn-radio value="1">Not me</syn-radio>
      <syn-radio value="2">Me neither</syn-radio>
      <syn-radio value="3">Choose me</syn-radio>
    </syn-radio-group>
    <br />
    <syn-button type="submit" variant="filled">Submit</syn-button>
  </form>`},u=T({Default:s,Labels:t,HelpText:i,Disabled:n,Checked:l},230);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: overrideArgs([{
    name: 'label',
    type: 'attribute',
    value: 'This is a label'
  }, {
    name: 'default',
    type: 'slot',
    value: \`<syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>\`
  }], args),
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'default')
      }
    }
  },
  render: (storyArgs: unknown) => generateTemplate({
    args: storyArgs
  })
} as Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'labels')
      }
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'help-text')
      }
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label" help-text="This is the help-text" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const elm = canvasElement.querySelector<SynRadioGroup>('syn-radio-group');
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    elm?.focus();
  },
  render: () => html\`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'disabled')
      }
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2" disabled>Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'invalid')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const button = canvasElement.querySelector('syn-button');
      if (button) {
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
    <syn-radio-group label="Select an option" name="a" help-text="This is required" required>
      <syn-radio value="1">Option 1</syn-radio>
      <syn-radio value="2">Option 2</syn-radio>
      <syn-radio value="3">Option 3</syn-radio>
    </syn-radio-group>
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
</style>\`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'setCustomValidity')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    try {
      const radioGroup = canvasElement.querySelector('syn-radio-group');
      const button = canvasElement.querySelector('syn-button');
      const initiallySelectedOption = canvasElement.querySelector('syn-radio[value="1"]');
      const correctRadioOption = canvasElement.querySelector('syn-radio[value="3"]');
      const errorMessage = 'You must choose the last option';
      radioGroup?.setCustomValidity(errorMessage);
      if (initiallySelectedOption) {
        await userEvent.click(initiallySelectedOption);
      }
      if (correctRadioOption && radioGroup?.value === '3') {
        radioGroup?.setCustomValidity('');
      } else {
        radioGroup?.setCustomValidity(errorMessage);
      }
      if (button) {
        // make sure to always fire both events:
        // 1. userEvent.click is needed for storybooks play function to register
        // 2. button.click is needed to really click the button
        // userEvent.click works on native elements only
        await userEvent.click(button);
        button.click();
        if (radioGroup?.checkValidity()) {
          console.log('All fields are valid!');
        } else {
          console.error('Form validation failed');
        }
      }
    } catch (error) {
      console.error('Error in play function:', error);
    }
  },
  render: () => html\`
  <form>
    <syn-radio-group label="Select an option" name="a" value="1">
      <syn-radio value="1">Not me</syn-radio>
      <syn-radio value="2">Me neither</syn-radio>
      <syn-radio value="3">Choose me</syn-radio>
    </syn-radio-group>
    <br />
    <syn-button type="submit" variant="filled">Submit</syn-button>
  </form>\`
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  HelpText,
  Disabled,
  Checked
}, 230)`,...u.parameters?.docs?.source}}};const Y=["Default","Labels","HelpText","Focus","Disabled","Checked","Invalid","CustomValidity","Screenshot"];export{l as Checked,p as CustomValidity,s as Default,n as Disabled,d as Focus,i as HelpText,c as Invalid,t as Labels,u as Screenshot,Y as __namedExportsOrder,N as default};
