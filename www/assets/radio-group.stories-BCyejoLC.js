import{n as e}from"./chunk-DnJy8xQt.js";import{Nt as t,Rt as n,d as r,f as i,g as a,u as o}from"./iframe-DVxLZS-s.js";import{t as s}from"./button-Bh72Wntz.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-DniQwiZV.js";import{n as m,t as h}from"./radio-Deao8qLg.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{m(),h(),s(),t(),f(),r(),a(),{userEvent:g}=__STORYBOOK_MODULE_TEST__,{args:_,argTypes:v}=l(`syn-radio-group`),{overrideArgs:y}=c(`syn-radio-group`),{generateTemplate:b}=d(`syn-radio-group`),x={args:_,argTypes:v,component:`syn-radio-group`,parameters:{chromatic:{modes:i},design:o(`41310-253349`),docs:{description:{component:u(`radio-group`,`default`)}}},tags:[`Form`],title:`Components/syn-radio-group`},S={args:y([{name:`label`,type:`attribute`,value:`This is a label`},{name:`default`,type:`slot`,value:`<syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>`}],_),parameters:{controls:{disable:!1},docs:{description:{story:u(`radio-group`,`default`)}}},render:e=>b({args:e})},C={parameters:{docs:{description:{story:u(`radio-group`,`labels`)}}},render:()=>n`
    <syn-radio-group label="This is a label">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},w={parameters:{docs:{description:{story:u(`radio-group`,`checked`)}}},render:()=>n`
  <syn-radio-group label="This is a label" help-text="This is checked" name="a" value="2">
    <syn-radio value="1">Option</syn-radio>
    <syn-radio value="2">Option</syn-radio>
    <syn-radio value="3">Option</syn-radio>
  </syn-radio-group>`},T={parameters:{docs:{description:{story:u(`radio-group`,`help-text`)}}},render:()=>n`
    <syn-radio-group label="This is a label" help-text="Choose the most appropriate option." name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},E={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio-group`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`syn-radio-group`)?.focus()},render:()=>n`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},D={parameters:{docs:{description:{story:u(`radio-group`,`disabled`)}}},render:()=>n`
    <syn-radio-group label="This is a label" help-text="This is disabled" name="a">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" disabled>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},O={parameters:{docs:{description:{story:u(`radio-group`,`readonly`)}}},render:()=>n`
    <syn-radio-group label="This is a label" help-text="This is readonly" name="a" value="2">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" readonly>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  `},k={parameters:{docs:{description:{story:u(`radio-group`,`size`)}}},render:()=>n`
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
  `},A={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio-group`,`invalid`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-button`);t&&(await g.click(t),t.click(),document.activeElement?.blur())}catch(e){console.error(`Error in play function:`,e)}},render:()=>n`
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
  `},j={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`radio-group`,`setCustomValidity`)}}},play:async({canvasElement:e})=>{try{let t=e.querySelector(`syn-radio-group`),n=e.querySelector(`syn-button`),r=e.querySelector(`syn-radio[value="1"]`),i=e.querySelector(`syn-radio[value="3"]`),a=`You must choose the last option`;t?.setCustomValidity(a),r&&await g.click(r),i&&t?.value===`3`?t?.setCustomValidity(``):t?.setCustomValidity(a),n&&(await g.click(n),n.click(),t?.checkValidity()?console.log(`All fields are valid!`):console.error(`Form validation failed`))}catch(e){console.error(`Error in play function:`,e)}},render:()=>n`
    <form>
      <syn-radio-group label="Select an option" name="a" value="1">
        <syn-radio value="1">Not me</syn-radio>
        <syn-radio value="2">Me neither</syn-radio>
        <syn-radio value="3">Choose me</syn-radio>
      </syn-radio-group>
      <br />
      <syn-button type="submit" variant="filled">Submit</syn-button>
    </form>
  `},M=p({Default:S,Labels:C,Checked:w,HelpText:T,Disabled:D,Readonly:O,Sizes:k},400),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: overrideArgs([{
    name: 'label',
    type: 'attribute',
    value: 'This is a label'
  }, {
    name: 'default',
    type: 'slot',
    value: \`
  <syn-radio value="1">Option</syn-radio>
  <syn-radio value="2">Option</syn-radio>
  <syn-radio value="3">Option</syn-radio>
      \`.trim()
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    elm?.focus();
  },
  render: () => html\`
    <syn-radio-group label="This is a label" name="a">
      <syn-radio value="1" disabled>Option</syn-radio>
      <syn-radio value="2">Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    </syn-radio-group>
  \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('radio-group', 'readonly')
      }
    }
  },
  render: () => html\`
    <syn-radio-group label="This is a label" help-text="This is readonly" name="a" value="2">
      <syn-radio value="1">Option</syn-radio>
      <syn-radio value="2" readonly>Option</syn-radio>
      <syn-radio value="3">Option</syn-radio>
    </syn-radio-group>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      // eslint-disable-next-line no-console
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
          // eslint-disable-next-line no-console
          console.log('All fields are valid!');
        } else {
          // eslint-disable-next-line no-console
          console.error('Form validation failed');
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
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
    </form>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Labels,
  Checked,
  HelpText,
  Disabled,
  Readonly,
  Sizes
}, 400)`,...M.parameters?.docs?.source}}},N=[`Default`,`Labels`,`Checked`,`HelpText`,`Focus`,`Disabled`,`Readonly`,`Sizes`,`Invalid`,`CustomValidity`,`Screenshot`]}))();export{w as Checked,j as CustomValidity,S as Default,D as Disabled,E as Focus,T as HelpText,A as Invalid,C as Labels,O as Readonly,M as Screenshot,k as Sizes,N as __namedExportsOrder,x as default};