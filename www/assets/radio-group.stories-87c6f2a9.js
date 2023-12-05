import"./radio-group-2874a3e9.js";import{x as r}from"./directive-helpers-a6c66f8a.js";import{u as p}from"./index-8ec6bb21.js";import{s as v,g as o}from"./component-5b49799f.js";import"./static-c19bae7e.js";import"./query-a4947b92.js";import"./slot-4492e2ee.js";import"./component.styles-b6f9a1db.js";import"./form-control.styles-d852634a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./chunk-757FFUVQ-7dc151b2.js";const{args:g,argTypes:h}=v("syn-radio-group"),G={args:g,argTypes:h,component:"radio-group",parameters:{docs:{description:o("radio-group","default")}},title:"Components/syn-radio-group"},i={parameters:{controls:{disable:!0},docs:{description:o("radio-group","default")}},render:()=>r`
  <syn-radio-group label="This is a label">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},s={parameters:{controls:{disable:!0},docs:{description:o("radio-group","labels")}},render:()=>r`
  <syn-radio-group label="This is a label">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},t={parameters:{controls:{disable:!0},docs:{description:o("radio-group","help-text")}},render:()=>r`
  <syn-radio-group label="This is a label" help-text="This is the help-text" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},n={parameters:{controls:{disable:!0},docs:{description:o("radio-group","disabled")}},render:()=>r`
  <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2" disabled>Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},l={render:()=>r`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},d={parameters:{controls:{disable:!0},docs:{description:o("radio-group","required")}},play:async({canvasElement:a})=>{try{const e=a.querySelector("syn-button");e&&(await p.click(e),e.click())}catch(e){console.error("Error in play function:",e)}},render:()=>r`
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
</style>`},u={parameters:{controls:{disable:!0},docs:{description:o("radio-group","setCustomValidity")}},play:async({canvasElement:a})=>{try{const e=a.querySelector("syn-radio-group"),c=a.querySelector("syn-button"),y=a.querySelector('syn-radio[value="1"]'),b=a.querySelector('syn-radio[value="3"]'),m="You must choose the last option";e?.setCustomValidity(m),y&&await p.click(y),b&&e?.value==="3"?e?.setCustomValidity(""):e?.setCustomValidity(m),c&&(await p.click(c),c.click(),e?.checkValidity()?console.log("All fields are valid!"):console.error("Form validation failed"))}catch(e){console.error("Error in play function:",e)}},render:()=>r`
  <form class="custom-validity">
    <syn-radio-group label="Select an option" name="a" value="1">
      <syn-radio value="1">Not me</syn-radio>
      <syn-radio value="2">Me neither</syn-radio>
      <syn-radio value="3">Choose me</syn-radio>
    </syn-radio-group>
    <br />
    <syn-button type="submit" variant="filled">Submit</syn-button>
  </form>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('radio-group', 'default')
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
} as Story`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('radio-group', 'labels')
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('radio-group', 'help-text')
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label" help-text="This is the help-text" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('radio-group', 'disabled')
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('radio-group', 'required')
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: generateStoryDescription('radio-group', 'setCustomValidity')
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
  <form class="custom-validity">
    <syn-radio-group label="Select an option" name="a" value="1">
      <syn-radio value="1">Not me</syn-radio>
      <syn-radio value="2">Me neither</syn-radio>
      <syn-radio value="3">Choose me</syn-radio>
    </syn-radio-group>
    <br />
    <syn-button type="submit" variant="filled">Submit</syn-button>
  </form>\`
}`,...u.parameters?.docs?.source}}};const M=["Default","Labels","HelpText","Disabled","Checked","Invalid","CustomValidity"];export{l as Checked,u as CustomValidity,i as Default,n as Disabled,t as HelpText,d as Invalid,s as Labels,M as __namedExportsOrder,G as default};
//# sourceMappingURL=radio-group.stories-87c6f2a9.js.map
