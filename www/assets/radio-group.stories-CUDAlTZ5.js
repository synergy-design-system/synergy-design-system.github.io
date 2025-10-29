import"./radio-ra6-_Jfr.js";import"./button-C5_UH2oA.js";import{g as O,C as S,x as a}from"./iframe-ZLjq8Uwd.js";import{g as o,s as k,c as T,a as x,b as E}from"./component-DOZXEz9b.js";import"./class-map-BK_uTebc.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./synergy-element-C5TjBNEJ.js";import"./icon.component-83RQ2i20.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./form-control.custom.styles-B6LVIoES.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./if-defined-I0njgZ0w.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./spinner.component-Brj9k5q9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CQ0aEGxp.js";import"./_docs-DPF-imQo.js";const{userEvent:g}=__STORYBOOK_MODULE_TEST__,{args:h,argTypes:C}=k("syn-radio-group"),{overrideArgs:D}=x("syn-radio-group"),{generateTemplate:z}=T("syn-radio-group"),W={args:h,argTypes:C,component:"syn-radio-group",parameters:{chromatic:{modes:S},design:O("1345-16160"),docs:{description:{component:o("radio-group","default")}}},tags:["Form","SICK2018","SICK2025"],title:"Components/syn-radio-group"},s={args:D([{name:"label",type:"attribute",value:"This is a label"},{name:"default",type:"slot",value:`<syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>`}],h),parameters:{controls:{disable:!1},docs:{description:{story:o("radio-group","default")}}},render:r=>z({args:r})},i={parameters:{docs:{description:{story:o("radio-group","labels")}}},render:()=>a`
    <syn-radio-group label="This is a label">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},t={parameters:{docs:{description:{story:o("radio-group","checked")}}},render:()=>a`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},n={parameters:{docs:{description:{story:o("radio-group","help-text")}}},render:()=>a`
    <syn-radio-group label="This is a label" help-text="Choose the most appropriate option." name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio-group","focus")}}},play:({canvasElement:r})=>{r.querySelector("syn-radio-group")?.focus()},render:()=>a`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},l={parameters:{docs:{description:{story:o("radio-group","disabled")}}},render:()=>a`
  <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2" disabled>Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},d={parameters:{docs:{description:{story:o("radio-group","size")}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio-group label="Small size" size="small">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Medium size" size="medium">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Large size" size="large">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
    </div>
  `},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio-group","invalid")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-button");e&&(await g.click(e),e.click(),document.activeElement?.blur())}catch(e){console.error("Error in play function:",e)}},render:()=>a`
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
        gap: var(--syn-spacing-large);
      }
      syn-button {
        align-self: flex-start;
      }
    </style>
  `},y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:o("radio-group","setCustomValidity")}}},play:async({canvasElement:r})=>{try{const e=r.querySelector("syn-radio-group"),m=r.querySelector("syn-button"),v=r.querySelector('syn-radio[value="1"]'),f=r.querySelector('syn-radio[value="3"]'),b="You must choose the last option";e?.setCustomValidity(b),v&&await g.click(v),f&&e?.value==="3"?e?.setCustomValidity(""):e?.setCustomValidity(b),m&&(await g.click(m),m.click(),e?.checkValidity()?console.log("All fields are valid!"):console.error("Form validation failed"))}catch(e){console.error("Error in play function:",e)}},render:()=>a`
  <form>
    <syn-radio-group label="Select an option" name="a" value="1">
      <syn-radio value="1">Not me</syn-radio>
      <syn-radio value="2">Me neither</syn-radio>
      <syn-radio value="3">Choose me</syn-radio>
    </syn-radio-group>
    <br />
    <syn-button type="submit" variant="filled">Submit</syn-button>
  </form>`},u=E({Default:s,Labels:i,Checked:t,HelpText:n,Disabled:l,Sizes:d},400);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: storyArgs => generateTemplate({
    args: storyArgs
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    </syn-radio-group>
  \`
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'checked')
      }
    }
  },
  render: () => html\`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>\`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'help-text')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="This is a label" help-text="Choose the most appropriate option." name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      <syn-radio-group label="Small size" size="small">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Medium size" size="medium">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
      <syn-radio-group label="Large size" size="large">
        <syn-radio value="1">Option</syn-radio>
        <syn-radio value="2">Option</syn-radio>
      </syn-radio-group>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        (document.activeElement as HTMLElement)?.blur();
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
        gap: var(--syn-spacing-large);
      }
      syn-button {
        align-self: flex-start;
      }
    </style>
  \`
}`,...c.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Checked,
  HelpText,
  Disabled,
  Sizes
}, 400)`,...u.parameters?.docs?.source}}};const X=["Default","Labels","Checked","HelpText","Focus","Disabled","Sizes","Invalid","CustomValidity","Screenshot"];export{t as Checked,y as CustomValidity,s as Default,l as Disabled,p as Focus,n as HelpText,c as Invalid,i as Labels,u as Screenshot,d as Sizes,X as __namedExportsOrder,W as default};
